#!/usr/bin/env node
/* ================================================================
   新增科目「大数据采集技术」→ 真题系统
   1. 填充 markdown 中缺失的简答答案
   2. 把 86 题合并进题库
   ================================================================ */
const fs = require('fs'), path = require('path');

const L = ['A','B','C','D','E','F','G','H'];
function Q(subject, type, title, opts, ans, exp){
  return {
    subject, type, title,
    options: (typeof opts === 'string' ? opts.split('|') : (opts || [])).map((t,i)=>({label:L[i], text:t})),
    answer: ans, explanation: exp || ''
  };
}
function MC(s,t,o,a,e){ return Q(s,'单选题',t,o,a,e); }
function MS(s,t,o,a,e){ return Q(s,'多选题',t,o,a,e); }
function SA(s,t,a,e){ return Q(s,'简答题',t,null,a,e); }
function PROG(s,t,a,e){ return Q(s,'程序题',t,null,a,e); }

const SUBJ = '大数据采集技术';

// ===== 6 道缺答案题目的参考答案 =====
const SA_流程 = '通用数据采集流程：明确采集目标→确定数据源→选择采集方式→执行采集→数据清洗/预处理→数据存储。网页爬取流程：确定目标网站→分析页面结构→发送HTTP请求→获取响应→解析提取数据(正则/XPath/JSONPath)→清洗→存储，有翻页则循环请求下一页。日志采集流程：确定日志来源(服务器/业务系统)→部署日志采集工具(如Flume)→实时/定时采集→解析格式化→去重清洗→存储到日志系统或大数据平台。';

const SA_爬虫 = '①概念：网络爬虫(Web Crawler/Spider)是模拟浏览器向服务器发送HTTP请求、获取响应并自动解析提取数据的程序。②运行流程：发送请求→获取响应→解析提取数据或进一步的URL→保存数据→(翻页/跟进URL)循环。③分类：按功能分为通用爬虫(搜索引擎)和聚焦爬虫(定向主题)；按抓取方式分为通用网络爬虫、聚焦爬虫、增量式爬虫、深层网络爬虫。';

const SA_HTTP = '①区别：HTTP明文传输，HTTPS=HTTP+SSL/TLS加密传输、更安全；默认端口HTTP为80、HTTPS为443；HTTPS有证书校验，安全性高但握手更复杂、性能略慢。②常见反爬及解决思路：User-Agent等headers反爬→设置完整浏览器请求头伪装；请求频率/IP反爬→加延时(time.sleep)、使用代理IP池、降低频率；验证码反爬→手动识别/打码平台/OCR识别；登录/Cookie反爬→模拟登录获取Cookie并在请求中携带；动态渲染/假数据反爬→抓包分析真实接口或使用Selenium模拟浏览器。';

const SA_Scrapy流程 = 'Scrapy工作流程：①Spider把起始URL交给Engine；②Engine把URL放入Scheduler排队；③Scheduler把下一请求返回Engine；④Engine经下载器中间件把请求交给Downloader下载；⑤Downloader把响应返回Engine再交给Spider；⑥Spider用parse()等回调解析响应，提取Item或新的URL；⑦Item交给Item Pipeline清洗、去重、持久化；⑧新URL回到Scheduler，重复②-⑦直到无新请求。';

const SA_Scrapy组件 = '①引擎(Engine)：核心，协调各组件间数据流、触发事务；②调度器(Scheduler)：维护待爬取请求队列，负责排队与去重；③下载器(Downloader)：发送请求、下载网页响应并交给引擎；④爬虫(Spider)：解析响应，提取数据(Item)和新的URL请求；⑤管道(Item Pipeline)：处理Spider提取的数据，负责清洗、校验、去重、持久化存储。';

const PROG_安居客 = `① Items 模型定义（items.py）
import scrapy

class AnjukeItem(scrapy.Item):
    title = scrapy.Field()      # 房源标题
    name = scrapy.Field()       # 房源名/小区名
    address = scrapy.Field()    # 地址
    desc = scrapy.Field()       # 房源描述

② 爬虫核心逻辑（数据提取 + 翻页）
import scrapy
from ..items import AnjukeItem

class AnjukeSpider(scrapy.Spider):
    name = 'anjuke'
    allowed_domains = ['anjuke.com']
    start_urls = ['https://xx.anjuke.com/sale/']   # xx 换成家乡城市拼音

    def parse(self, response):
        for li in response.xpath('//ul[@class="houselist-mod-new"]/li'):
            item = AnjukeItem()
            item['title'] = li.xpath('.//div[@class="house-title"]/a/text()').get(default='').strip()
            item['name'] = li.xpath('.//div[@class="comm-address"]//a/text()').get(default='').strip()
            item['address'] = li.xpath('.//div[@class="comm-address"]/span/text()').get(default='').strip()
            item['desc'] = ' | '.join(li.xpath('.//div[@class="house-details"]//span/text()').getall())
            yield item
        # 翻页
        next_page = response.xpath('//a[@class="aNxt"]/@href').get()
        if next_page:
            yield scrapy.Request(response.urljoin(next_page), callback=self.parse)

③ 数据管道处理（pipelines.py）
import json

class AnjukePipeline:
    def open_spider(self, spider):
        self.file = open('anjuke.json', 'w', encoding='utf-8')
    def process_item(self, item, spider):
        self.file.write(json.dumps(dict(item), ensure_ascii=False) + '\\n')
        return item
    def close_spider(self, spider):
        self.file.close()

④ Settings 配置（反爬 + 管道启用）
ROBOTSTXT_OBEY = False
DOWNLOAD_DELAY = 1.5            # 请求延时，防频率反爬
DEFAULT_REQUEST_HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
}
ITEM_PIPELINES = {
    'anjuke.pipelines.AnjukePipeline': 300,
}`;
// ===== 选择题（70 单选 + 10 多选）=====
const choiceQs = [
  // —— 课后作业1 单选题 1-20 ——
  MC(SUBJ,'大数据处理流程中，数据收集之后的第一步操作是(        )','数据分析|数据可视化|数据存储|数据预处理','D','大数据处理流程：收集→预处理→存储→分析→可视化，收集之后先做预处理。'),
  MC(SUBJ,'以下哪种数据类型属于非结构化数据?(        )','MySQL数据库中的表格数据|JSON文档|音频文件|XML文档','C','音频/视频等属于非结构化数据；表格数据是结构化，JSON/XML 是半结构化。'),
  MC(SUBJ,'数据采集中，"增量采集"的含义是(        )','每次从第一条数据开始收集|只采集之前没有采集过的数据|采集所有类型的数据|只采集结构化数据','B','增量采集只采集新增/变化的数据，避免重复采集。'),
  MC(SUBJ,'以下哪个不是数据采集的要求?(        )','全面性|多维性|随机性|及时性','C','数据采集要求全面性、多维性、及时性等，随机性不是要求。'),
  MC(SUBJ,'数据采集流程主要包括(        )','采集、分析、可视化|采集、清洗、存储|采集、存储、分析|清洗、存储、可视化','B','采集流程主要是采集→清洗→存储。'),
  MC(SUBJ,'关于爬虫的描述，正确的是(        )','爬虫可以获取浏览器未展示的数据|爬虫模拟浏览器发送请求，获取响应|爬虫只能获取静态网页数据|爬虫不需要遵循任何规则','B','爬虫通过模拟浏览器发送请求并解析响应来获取数据。'),
  MC(SUBJ,'HTTPS协议默认端口号是(        )','80|443|8080|21','B','HTTPS 默认端口 443，HTTP 默认端口 80。'),
  MC(SUBJ,'爬虫特别关注的请求头字段中，用于伪装浏览器身份的是(        )','Host|Connection|User-Agent|Content-Type','C','User-Agent 用于标识浏览器身份，爬虫常伪装它。'),
  MC(SUBJ,'HTTP状态码403表示(        )','请求成功|找不到该页面|服务器内部错误|资源不可用，服务器拒绝处理','D','403 Forbidden 表示服务器拒绝处理请求。'),
  MC(SUBJ,'关于浏览器的运行过程，下列说法错误的是(        )','浏览器会发送多个请求获取页面资源|浏览器具有渲染能力|爬虫和浏览器获取的页面内容完全相同|浏览器最终展示的结果由多个响应共同渲染','C','浏览器会渲染 JS/图片，爬虫通常只拿原始 HTML，内容可能不同。'),
  MC(SUBJ,'谷歌浏览器中，用于观察首次访问网站时不携带cookie的模式是(        )','普通窗口|无痕窗口|开发者工具|隐私模式','B','无痕窗口不携带已有 Cookie，便于观察首次访问。'),
  MC(SUBJ,'urllib模块中，用于构建复杂请求对象的类是(        )','urlopen|Request|urlretrieve|urlencode','B','Request 类用于构建可带请求头的请求对象。'),
  MC(SUBJ,'以下关于urlopen(        )和Request(        )的描述，正确的是(        )','urlopen()可以设置请求头|Request()用于执行请求|Request()创建的对象需要传递给urlopen()执行|urlopen()不能发送POST请求','C','先创建 Request 对象，再交给 urlopen() 执行请求。'),
  MC(SUBJ,'正则表达式中，表示"前面的字符至少出现一次"的量词是(        )','*|+|?|{1}','B','+ 表示前面字符出现 1 次或多次。'),
  MC(SUBJ,'re模块中，用于查找所有符合条件的匹配项并返回列表的方法是(        )','search()|match()|findall()|finditer()','C','findall() 返回所有匹配项的列表。'),
  MC(SUBJ,'正则表达式模式 r"^\\w+@\\w+.(com|cn|org)$" 中，捕获组的数量是(        )','1|2|3|4','A','只有 (com|cn|org) 一个捕获组。'),
  MC(SUBJ,'re.match(        )和re.search(        )的主要区别是(        )','match()返回匹配对象，search()返回字符串|match()从开头匹配，search()在任意位置搜索|match()只能匹配数字，search()能匹配所有字符|两者没有区别','B','match 从字符串开头匹配，search 在任意位置搜索。'),
  MC(SUBJ,'正则表达式中，将贪婪模式切换为懒惰模式的符号是(        )','^|$|?||','C','在量词后加 ? 可把贪婪匹配改为懒惰匹配。'),
  MC(SUBJ,'以下哪个是基于身份识别的反爬手段?(        )','基于请求频率限制|通过User-Agent字段反爬|通过假数据反爬|阻塞任务队列','B','通过 User-Agent 识别爬虫身份属于基于身份识别的反爬。'),
  MC(SUBJ,'关于反爬虫策略，下列说法正确的是(        )','状态码200一定表示返回了真实数据|所有状态码都可信|状态码不可信，应以抓包获取的响应数据为准|状态码404表示反爬成功','C','状态码可能被伪造，应以抓包得到的真实响应数据为准。'),
  // —— 课后作业1 多选题 21-25 ——
  MS(SUBJ,'以下属于数据处理流程环节的有(        )','数据收集|数据可视化|数据安全与隐私保护|数据删除','AB','数据处理流程包含收集、预处理、存储、分析、可视化等环节。'),
  MS(SUBJ,'以下数据类型中，属于半结构化数据的有(        )','数据库表格数据|日志文件|XML文档|JSON文档','BCD','日志/XML/JSON 是半结构化数据；数据库表格是结构化数据。'),
  MS(SUBJ,'以下属于数据采集范围的有(        )','数据库中的数据|业务系统中的日志数据|互联网的应用数据|纸质文档数据','ABCD','四类都属于数据采集范围。'),
  MS(SUBJ,'以下哪些属于常见的反爬手段?(        )','通过headers字段反爬|基于请求频率反爬|通过验证码反爬|提供更快的服务器响应','ABC','前三项是常见反爬手段；提供更快响应不是。'),
  MS(SUBJ,'以下关于urllib模块的说法，正确的有(        )','urllib是Python标准库，无需额外安装|urlopen()可以设置超时时间|Request()类支持设置请求方法(GET/POST等)|urlencode()用于将字典转换为URL编码字符串','ABCD','四项都是 urllib 的正确描述。'),
  // —— 课后作业2 单选题 1-20 ——
  MC(SUBJ,'在Python中，以下哪个库是用于发送HTTP请求的标准库?','requests|urllib|lxml|re','B','urllib 是 Python 内置标准库，requests 是第三方库。'),
  MC(SUBJ,'下列关于 requests 模块和 urllib 模块的说法，错误的是:','requests 是第三方库，需要额外安装。|urllib 是Python标准库的一部分。|requests 的API设计比urllib更简洁，易于使用。|requests 无法处理Cookie，只能由urllib处理。','D','requests 也能处理 Cookie（通过 cookies 参数或 Session）。'),
  MC(SUBJ,'在使用 requests.get(url) 获取网页内容后，response.text 和 response.content 的主要区别是:','response.text 返回的是字节类型(bytes)，response.content 返回的是字符串类型(str)。|response.text 返回的是字符串类型(str)，response.content 返回的是字节类型(bytes)。|两者返回的都是字符串类型，没有区别。|两者返回的都是字节类型，没有区别。','B','response.text 返回 str，response.content 返回 bytes。'),
  MC(SUBJ,'关于爬虫的 robots.txt 协议，以下描述正确的是:','它是一个强制性的防火墙协议，所有爬虫都必须遵守。|它是一个约定俗成的协议，用于告诉爬虫哪些页面可以抓取，哪些不可以。|它存储在网站的根目录下，但爬虫无法读取到它。|它主要用来保护网站的隐私，具有很强的法律约束力。','B','robots.txt 是约定俗成的协议，声明哪些页面可抓取。'),
  MC(SUBJ,'在XPath语法中，以下哪个符号表示选取当前节点的直接子节点?','//|/|.|..','B','/ 选取当前节点的直接子节点，// 是任意后代。'),
  MC(SUBJ,'在XPath语法中，以下哪个符号用于选取文档中所有符合条件的节点，不论它们在文档中的位置?','//|/|.|..','A','// 表示从任意位置选取符合条件的节点。'),
  MC(SUBJ,'在XPath中，如果要从一个<a>标签中提取其 href 属性的值，正确的语法是?','//a/text()|//a/@href|//a/@href/text()|//a[href]','B','@href 用于选取 href 属性。'),
  MC(SUBJ,'在 requests 库中，使用哪个参数可以设置代理服务器?','timeout|verify|proxies|cookies','C','proxies 参数用于设置代理。'),
  MC(SUBJ,'在 requests 库中，使用哪个参数可以忽略SSL证书验证?','timeout|verify|proxies|cookies','B','verify=False 可忽略 SSL 证书验证。'),
  MC(SUBJ,'以下哪个是 lxml 库中用于将HTML字符串解析为 Element 对象的正确方法?','etree.parse(html_str)|etree.HTML(html_str)|etree.XML(html_str)|etree.tostring(html_str)','B','etree.HTML() 把 HTML 字符串解析为 Element 对象。'),
  MC(SUBJ,'使用 jsonpath 模块提取数据时，$..key6 代表什么含义?','从根节点开始，逐级查找名为 key6 的直接子节点。|从根节点开始，查找任意位置名为 key6 的子孙节点。|查找根节点本身。|查找名为 key6 的属性。','B','$..key6 表示从根开始递归查找任意位置的 key6 节点。'),
  MC(SUBJ,'以下哪个Python内置模块专门用于处理JSON数据?','json|pickle|csv|xml','A','json 模块专门处理 JSON 数据。'),
  MC(SUBJ,'在 requests 库中，timeout 参数的作用是:','设置请求的等待时间，如果服务器在该时间内未响应，则抛出异常。|设置请求的缓存时间。|设置请求的Cookie过期时间。|设置请求的超时重试次数。','A','timeout 设置请求等待超时时间。'),
  MC(SUBJ,'以下哪个是正确的爬虫伪装请求头的写法?',"headers = {'User-Agent': 'python-requests/2.32.4'}|headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}|headers = {'User-Agent': 'Chrome/115.0.0.0'}|headers = {'User-Agent': 'BaiduSpider'}",'B','B 是真实浏览器 UA，最接近浏览器身份。'),
  MC(SUBJ,'XPath表达式 //div[contains(@class, "item")] 的含义是:','选取所有 class 属性等于 "item" 的 div 元素。|选取所有 class 属性包含 "item" 字符串的 div 元素。|选取所有 <div> 元素中包含 <item> 子元素的元素。|选取所有 <div> 元素的 class 属性值。','B','contains() 表示属性值包含指定字符串。'),
  MC(SUBJ,'在 lxml 中，etree.tostring(element) 函数的作用是:','将一个 Element 对象序列化为HTML或XML的字节字符串。|将一个 Element 对象转换为Python的字典。|从字符串中解析出一个 Element 对象。|提取 Element 对象中的文本内容。','A','etree.tostring 把 Element 对象序列化为字节字符串。'),
  MC(SUBJ,'json.loads(\'{"name": "张三"}\') 代码的返回结果是:','\'{"name": "张三"}\'|{"name": "张三"} (Python字典)|("name", "张三")|一个 json 对象','B','json.loads 把 JSON 字符串解析为 Python 字典。'),
  MC(SUBJ,'关于XPath中的 text() 函数，以下说法正确的是:','用于获取一个标签的 text 属性值。|用于获取一个标签的开闭标签之间的文本内容。|用于获取一个标签的内部HTML代码。|用于匹配文本内容为指定值的标签。','B','text() 获取标签开闭之间的文本内容。'),
  MC(SUBJ,'通过 response.cookies 获取到的Cookie对象是什么类型?','字典 (dict)|列表 (list)|RequestsCookieJar 对象|字符串 (str)','C','response.cookies 返回 RequestsCookieJar 对象。'),
  MC(SUBJ,'爬取数据时，如果网站返回的HTML内容不完整或缺少结束标签，使用lxml.etree.HTML()解析时，它会:','直接抛出解析异常。|返回空的 Element 对象。|自动补全缺失的标签，生成一个完整的HTML文档树。|丢弃不完整的部分，只解析完整的标签。','C','etree.HTML 会自动补全缺失标签，生成完整文档树。'),
  // —— 课后作业2 多选题 21-25 ——
  MS(SUBJ,'以下哪些是 requests 模块响应对象(response)的常见属性或方法?','response.text|response.content|response.status_code|response.json()','ABCD','四者都是 response 的常见属性/方法。'),
  MS(SUBJ,'关于 requests 模块中的 cookies 参数，以下说法正确的是:','它接收一个字典形式的Cookie。|它的用法是 requests.get(url, cookies=cookie_dict)。|它和直接在 headers 中设置Cookie字符串的效果是一样的。|通过 cookies 参数设置的Cookie在请求之间会自动管理和更新。','ABC','cookies 参数接收字典；自动管理和更新是 Session 的 cookies 特性，不是 cookies 参数。'),
  MS(SUBJ,'XPath中的节点修饰语法包括哪些?','通过索引修饰节点，如 div[3]|通过属性值修饰节点，如 div[@id="main"]|通过子节点的值修饰节点，如 div[span > 100]|通过包含修饰，如 div[contains(@class, "item")]','ABCD','四种都是 XPath 节点修饰语法。'),
  MS(SUBJ,'以下哪些是数据解析的常用技术或库?','正则表达式 (re)|XPath (lxml)|JSONPath (jsonpath)|urllib','ABC','re/lxml/jsonpath 用于解析；urllib 是请求库。'),
  MS(SUBJ,'以下哪些行为可以提高网络爬虫的稳健性和合法性?','设置合理的请求头(User-Agent)。|遵守目标网站的 robots.txt 协议。|使用高频率、多线程的请求，以最快速度获取数据。|在请求之间加上适当的延时(如 time.sleep())。','ABD','高频多线程请求会加大被封风险，不可取。'),
  // —— 课堂作业1 单选题 1-10 ——
  MC(SUBJ,'Scrapy框架中，启动爬虫的正确命令是(        )','scrapy startproject 爬虫名|scrapy genspider 爬虫名|scrapy crawl 爬虫名|scrapy run 爬虫名','C','scrapy crawl 爬虫名 用于启动已定义的爬虫。'),
  MC(SUBJ,'在Scrapy中，用于存储爬取数据的模型类定义在哪个文件中(        )','settings.py|pipelines.py|items.py|middlewares.py','C','items.py 定义数据模型(Item)。'),
  MC(SUBJ,'下列哪个命令用于创建一个新的Scrapy项目(        )','scrapy genspider|scrapy crawl|scrapy startproject|scrapy run','C','scrapy startproject 项目名 创建新项目。'),
  MC(SUBJ,'Scrapy爬虫中，解析函数必须命名为(        )','parse_item|parse|handle_response|process_response','B','默认解析函数必须命名为 parse。'),
  MC(SUBJ,'在Scrapy的settings.py中，设置ROBOTSTXT_OBEY = False的作用是(        )','启用robots.txt协议|忽略robots.txt协议限制|设置爬取速度|启用中间件','B','ROBOTSTXT_OBEY=False 表示不遵守 robots.txt 限制。'),
  MC(SUBJ,'response.xpath(        )方法返回的对象类型是(        )','list|dict|SelectorList|str','C','response.xpath() 返回 SelectorList 对象。'),
  MC(SUBJ,'在Scrapy管道中，必须重写的方法是(        )','init|process_item|close_spider|open_spider','B','Item Pipeline 必须重写 process_item()。'),
  MC(SUBJ,'使用yield scrapy.Request(url, callback=self.parse)发送请求时，callback参数的作用是(        )','指定请求方法|指定响应数据的解析函数|指定请求头|指定超时时间','B','callback 指定响应返回后调用的解析函数。'),
  MC(SUBJ,'在Scrapy中，提取选择器列表中第一个字符串数据的方法是(        )','extract()|get()|extract_first()|get_all()','B','get() 返回第一个匹配结果(新API)；extract_first 为旧写法。'),
  MC(SUBJ,'下列哪个不是Scrapy框架的核心组件(        )','引擎(Engine)|调度器(Scheduler)|数据库(Database)|下载器(Downloader)','C','核心组件为引擎、调度器、下载器、爬虫、管道；数据库不是。'),
  // —— 课后作业3 单选题 1-20 ——
  MC(SUBJ,'大数据处理流程中，数据清洗、去重、去噪、填充缺失值等操作属于哪个阶段?(        )','数据收集|数据存储|数据预处理|数据可视化','C','清洗/去重/去噪/填充缺失值属于数据预处理。'),
  MC(SUBJ,'以下哪种数据类型属于非结构化数据?(        )','关系型数据库中的表格数据|JSON文档|XML文档|音频/视频信息','D','音频/视频信息是非结构化数据；JSON/XML 是半结构化。'),
  MC(SUBJ,'爬虫的运行流程中，发送请求获取响应后，下一步应进行的操作是(        )。','直接保存数据|从响应中提取数据或进一步的URL|关闭连接|打印日志','B','获取响应后需从响应中提取数据或进一步 URL。'),
  MC(SUBJ,'HTTP与HTTPS的主要区别是(        )。','HTTP速度更快|HTTPS = HTTP + SSL，更安全|HTTP默认端口为443|HTTPS不支持加密传输','B','HTTPS=HTTP+SSL/TLS，加密传输更安全。'),
  MC(SUBJ,'在爬虫中，用于伪装浏览器身份的最重要的请求头字段是(        )。','Cookie|Referer|User-Agent|Host','C','User-Agent 标识浏览器身份。'),
  MC(SUBJ,'在Python的urllib模块中，用于将字典转换为URL编码字符串的函数是(        )。','urllib.parse.urlencode()|urllib.parse.quote()|urllib.parse.unquote()|urllib.request.urlopen()','A','urlencode() 把字典转换为 URL 编码字符串。'),
  MC(SUBJ,'在urllib中，如果要发送携带请求头的复杂请求，需要先创建哪个对象?(        )','Request对象|Response对象|Handler对象|Opener对象','A','先创建 Request 对象携带请求头。'),
  MC(SUBJ,'正则表达式中，+号表示的含义是(        )。','前面的字符出现0次或1次|前面的字符出现0次或多次|前面的字符出现1次或多次|前面的字符出现恰好n次','C','+ 表示前面字符出现 1 次或多次。'),
  MC(SUBJ,'在Python的re模块中，re.search()与re.match()的区别是(        )。','search()从字符串开头匹配，match()从任意位置匹配|match()从字符串开头匹配，search()从任意位置匹配|两者功能完全相同|search()只返回第一个匹配，match()返回所有匹配','B','match 从开头匹配，search 在任意位置搜索。'),
  MC(SUBJ,'在requests模块中，response.text和response.content的区别是(        )。','text返回bytes类型，content返回str类型|text返回str类型，content返回bytes类型|两者返回类型相同|text是编码后的数据，content是未编码的数据','B','text 返回 str，content 返回 bytes。'),
  MC(SUBJ,'在requests模块中，发送带参数的GET请求应使用哪个参数?(        )','data|json|params|body','C','GET 请求用 params 传参；POST 表单用 data。'),
  MC(SUBJ,'在requests模块中，设置代理IP应使用哪个参数?(        )','proxy|proxies|proxy_server|forward','B','proxies 参数设置代理。'),
  MC(SUBJ,'以下关于XPath语法的描述，错误的是(        )。','/表示从根节点选取|//表示从匹配选择的当前节点选择文档中的节点，不考虑位置|@用于选取属性|text()用于选取属性的值','D','text() 用于选取文本内容，@ 才用于选取属性。'),
  MC(SUBJ,'在XPath中，选取当前节点的父节点应使用(        )。','..|.|parent|^','A','.. 表示父节点，. 表示当前节点。'),
  MC(SUBJ,'在lxml模块中，etree.HTML(html_str)方法的作用是(        )。','将HTML字符串转换为bytes类型|将HTML字符串转换为Element对象|将Element对象转换为HTML字符串|对HTML字符串进行加密','B','etree.HTML() 把 HTML 字符串转换为 Element 对象。'),
  MC(SUBJ,'在Scrapy框架中，用于存放爬取数据模型的文件是(        )。','settings.py|pipelines.py|items.py|middlewares.py','C','items.py 存放数据模型。'),
  MC(SUBJ,'在Scrapy中，启动一个名为itcast的爬虫应使用的命令是(        )。','scrapy run itcast|scrapy start itcast|scrapy crawl itcast|scrapy spider itcast','C','scrapy crawl itcast 启动爬虫。'),
  MC(SUBJ,'在Scrapy的settings.py中，设置ROBOTSTXT_OBEY = False的作用是(        )。','启用robots.txt协议|禁用robots.txt协议，允许爬取被禁止的页面|启用日志记录|设置下载延迟','B','ROBOTSTXT_OBEY=False 禁用 robots.txt 协议。'),
  MC(SUBJ,'在Selenium中，切换标签页(窗口)应使用的方法是(        )。','driver.switch_to.frame()|driver.switch_to.window()|driver.switch_to.alert()|driver.switch_to.default_content()','B','switch_to.window() 切换标签页/窗口。'),
  MC(SUBJ,'在BeautifulSoup中，根据CSS选择器查找元素应使用的方法是(        )。','find()|find_all()|select()|search()','C','select() 根据 CSS 选择器查找元素。'),
];

// ===== 简答题（5）+ 程序题（1）=====
const shortQs = [
  SA(SUBJ,'简述数据采集的流程，并说明网页爬取和日志数据类型的数据采集流程分别是什么？',SA_流程,''),
  SA(SUBJ,'请详细说明爬虫是什么？爬虫的运行流程是怎样的？爬虫可以分为哪几类？',SA_爬虫,''),
  SA(SUBJ,'请阐述HTTP和HTTPS的区别，列举常见的反爬手段并说明对应的解决思路。',SA_HTTP,''),
  SA(SUBJ,'请简述Scrapy框架的工作流程(从起始URL到数据保存的完整过程)。',SA_Scrapy流程,''),
  SA(SUBJ,'请简述Scrapy框架中各个核心组件(引擎、调度器、下载器、爬虫、管道)的作用及其在整个工作流程中的职责。',SA_Scrapy组件,''),
];
const progQs = [
  PROG(SUBJ,'案例：完成一个基于 Scrapy 的安居客自己家乡的二手房爬虫，要求爬取房源的标题、房源名、地址、房源描述，并将数据保存到anjuke.json文件中，并实现翻页功能。（比较重要，直接将答案写到空白处）',PROG_安居客,''),
];

const allQs = [...choiceQs, ...shortQs, ...progQs];
console.log('📦 构造题目:', allQs.length, '道（单选', choiceQs.filter(q=>q.type==='单选题').length, '+ 多选', choiceQs.filter(q=>q.type==='多选题').length, '+ 简答', shortQs.length, '+ 程序', progQs.length, ')');

// ==================== 1. 填充 markdown 缺失答案 ====================
function fillMarkdown(){
  const p = path.join(__dirname, '新增题库', '大数据采集技术.md');
  let s = fs.readFileSync(p, 'utf8');
  // 课后作业1 Q26/Q27（占位符 **）
  const sa1 = [SA_流程, SA_爬虫];
  let i = 0;
  s = s.replace(/我的答案：\r\n\*\*/g, () => '我的答案：\r\n' + (sa1[i++] || ''));
  // 课后作业1 Q28（部分作答）
  s = s.replace('我的答案：\r\nHTTP明文，HTTPS加密', '我的答案：\r\n' + SA_HTTP);
  // 课后作业3 Q21/Q22（学生未作答）
  const sa2 = [SA_Scrapy流程, SA_Scrapy组件];
  let j = 0;
  s = s.replace(/我的答案：\r\n教师批语：\r\n学生未作答。\r\n/g, () => '我的答案：\r\n' + (sa2[j++] || '') + '\r\n教师批语：\r\n学生未作答。\r\n');
  fs.writeFileSync(p, s, 'utf8');
  console.log('✅ markdown 已填充简答答案（', i, '+', j, '处）');
}

// ==================== 2. 合并到题库 ====================
function mergeToBank(){
  const dbPath = path.join(__dirname, 'parsed', 'questions_data.js');
  const content = fs.readFileSync(dbPath, 'utf8');
  const match = content.match(/const PREPARSED_QUESTIONS = (\[[\s\S]*\]);/);
  if (!match) { console.error('❌ 无法解析题库'); process.exit(1); }
  const existing = JSON.parse(match[1]);

  let maxId = 0;
  existing.forEach(q => { const m = q.id && q.id.match(/GEN(\d+)/); if (m) maxId = Math.max(maxId, parseInt(m[1], 10)); });
  allQs.forEach(q => {
    maxId++;
    q.id = 'GEN' + String(maxId).padStart(4, '0');
    q.level = 'B';
    q.topic = '';
    q.correctCount = 0; q.wrongCount = 0;
    q.lastPractice = null; q.nextReview = null; q.reviewStage = 0;
  });

  const merged = [...existing, ...allQs];
  const header = '// 九科完整题库 — ' + merged.length + '题\nconst PREPARSED_QUESTIONS = ';
  fs.writeFileSync(dbPath, header + JSON.stringify(merged, null, 2) + ';\n', 'utf8');
  fs.writeFileSync(path.join(__dirname, 'parsed', 'questions_data.json'), JSON.stringify(merged, null, 2), 'utf8');

  const htmlPath = path.join(__dirname, 'index.html');
  let html = fs.readFileSync(htmlPath, 'utf8');
  html = html.replace(/questions_data\.js\?v=\d+/, 'questions_data.js?v=24');
  fs.writeFileSync(htmlPath, html, 'utf8');

  console.log('✅ 题库合并完成: 原', existing.length, '题 → 现', merged.length, '题');
  const subj = {};
  merged.forEach(q => subj[q.subject] = (subj[q.subject] || 0) + 1);
  console.log('   科目分布:', JSON.stringify(subj));
}

fillMarkdown();
mergeToBank();


