#!/usr/bin/env node
/* ================================================================
   为「大数据采集技术」新增考试重点简答/程序题，并标记为重点(topic='重点')
   ================================================================ */
const fs = require('fs'), path = require('path');

const L = ['A','B','C','D','E','F','G','H'];
function Q(subject, type, title, opts, ans, exp){
  return { subject, type, title,
    options: (typeof opts === 'string' ? opts.split('|') : (opts || [])).map((t,i)=>({label:L[i], text:t})),
    answer: ans, explanation: exp || '' };
}
function SA(s,t,a){ return Q(s,'简答题',t,null,a,''); }
function PROG(s,t,a){ return Q(s,'程序题',t,null,a,''); }

const SUBJ = '大数据采集技术';

// [题干, 参考答案]
const KPA = [
  ['大数据的处理流程？','数据收集 → 数据预处理（清洗/去重/去噪/填充缺失值） → 数据存储 → 数据分析 → 数据可视化。'],
  ['数据采集的概念与特点？','概念：数据采集是从各种数据源获取原始数据的过程。特点：①数据源多样化；②数据量大、类型复杂；③实时性/及时性要求高；④采集方式多样（爬虫、日志、数据库、传感器等）。'],
  ['数据的类型？','①结构化数据：数据库表格，格式固定；②半结构化数据：JSON/XML/日志，有标签但结构不固定；③非结构化数据：音频/视频/文本，无固定结构。'],
  ['数据采集的范围？','数据库中的数据、业务系统中的日志数据、互联网的应用数据、纸质文档数据等。'],
  ['数据采集的要求？','全面性、多维性、及时性、准确性、高效性等。'],
  ['数据采集的来源？','①数据库（关系型/NoSQL）；②日志文件（服务器/业务系统日志）；③互联网（网页/API）；④传感器与物联网设备；⑤纸质文档（OCR 识别）等。'],
  ['数据采集的流程？','明确采集目标 → 确定数据源 → 选择采集方式 → 执行采集 → 数据清洗/预处理 → 存储。'],
  ['网络爬虫的概念？','网络爬虫（Web Crawler/Spider）是模拟浏览器向服务器发送 HTTP 请求、获取响应并自动解析提取数据的程序。'],
  ['网络爬虫的流程？每个步骤的任务是什么？','①发送请求：向目标 URL 发起 HTTP 请求；②获取响应：接收服务器返回的响应（HTML/JSON 等）；③解析提取：用正则/XPath/lxml 提取数据或进一步 URL；④保存数据：持久化存储；⑤翻页/跟进 URL 后循环①-④。'],
  ['爬虫的分类?','按功能：通用爬虫（搜索引擎）与聚焦爬虫（定向主题）；按抓取方式：通用网络爬虫、聚焦爬虫、增量式爬虫、深层网络爬虫。'],
  ['爬虫中，用于设置代理 IP，解决 IP 封禁问题的是什么参数？',"requests 库中的 proxies 参数，如 requests.get(url, proxies={'http': 'http://ip:port', 'https': 'https://ip:port'})。"],
  ['HTTP 请求有哪些常用的方法？','GET（获取资源）、POST（提交数据）、PUT（更新）、DELETE（删除）、HEAD（获取响应头）、OPTIONS（预检）等；最常用 GET 和 POST。'],
  ['有哪些常见的反爬手段？','①通过 User-Agent 等 headers 反爬；②基于请求频率/IP 反爬；③验证码反爬；④登录/Cookie 反爬；⑤假数据/动态渲染反爬。'],
  ['掌握urllib模块的使用，urllib模块下常用的函数有？','urllib.request.urlopen()（发起请求）、urllib.request.Request()（构建请求对象）、urllib.request.urlretrieve()（下载文件）、urllib.parse.urlencode()（字典转 URL 编码）、urllib.parse.quote()/unquote()（URL 编解码）。'],
  ['urllib模块的主要作用？','urllib 是 Python 内置标准库，用于发送 HTTP 请求、处理 URL、获取网页响应内容等，无需额外安装。'],
  ['使用urllib模块向服务器发送请求后获取响应对象，怎样解决响应后出现的中文乱码情况?',"读取响应字节后再按正确编码解码，如 html = response.read().decode('utf-8')，或按网页 charset 用 gbk 等编码解码。"],
  ['requests模块与urllib模块的区别？','①urllib 是标准库，requests 是第三方库需安装；②requests API 更简洁易用、代码更少；③requests 处理 Cookie/会话/自动解压更方便；④requests 功能更强。'],
  ['response响应对象的常用属性或方法？','response.text（字符串）、response.content（字节）、response.status_code（状态码）、response.json()（解析 JSON）、response.encoding（编码）、response.headers（响应头）、response.cookies。'],
  ['requests模块如何发送带参数的请求？',"GET 用 params：requests.get(url, params={'key': 'value'})；POST 用 data 或 json：requests.post(url, data={...}) 或 json={...}。"],
  ['requests模块如何发送get请求？post请求？','GET：requests.get(url)；POST：requests.post(url, data=表单字典) 或 requests.post(url, json=JSON 数据)。'],
  ['requests 模块中，保持会话状态的对象？','Session 对象：s = requests.Session()，用 s 发请求可自动保持 Cookie/会话状态。'],
  ['在爬取网页内容时，如何模拟浏览器访问？','设置请求头，关键是 User-Agent（伪装浏览器身份），并可附加 Referer、Cookie 等完整请求头。'],
  ['xpath语法的使用？基础节点选择？','基础节点选择：/ 直接子节点、// 任意后代、@ 选取属性、text() 取文本、.. 父节点、. 当前节点、[n] 索引、[@id="x"] 属性筛选、contains() 包含匹配。'],
  ['如何使用lxml模块？导入lxml的etree库，常用的方法？','from lxml import etree；etree.HTML(html_str) 把 HTML 字符串解析为 Element 对象；element.xpath(表达式) 按 XPath 提取；etree.tostring(element) 序列化。'],
  ['JSON 数据解析时，常见的数据解析方法','①json.loads()：JSON 字符串转 Python 字典；json.dumps()：字典转 JSON 字符串；②JSONPath：如 $..key 递归查找；③直接对字典按键取值。'],
  ['Scrapy是什么?','Scrapy 是基于 Python 的快速、高效的网络爬虫框架，用于抓取网页并提取结构化数据，支持异步、中间件、管道等。'],
  ['Scrapy的工作流程？','①Spider 把起始 URL 交给 Engine；②Engine 交给 Scheduler 排队；③Scheduler 返回下一请求；④Engine 经中间件交给 Downloader 下载；⑤响应返回 Engine 再交给 Spider；⑥Spider 解析提取 Item 或新 URL；⑦Item 交 Pipeline 清洗存储；⑧新 URL 回到 Scheduler 循环。'],
  ['Scrapy框架的主要组件及功能？','引擎(Engine)协调、调度器(Scheduler)排队去重、下载器(Downloader)下载、爬虫(Spider)解析、管道(Item Pipeline)清洗存储；还有下载中间件、爬虫中间件。'],
  ['如何创建运行Scrapy项目，创建Scrapy项目的步骤及执行代码？','①scrapy startproject 项目名（创建项目）；②cd 项目名；③scrapy genspider 爬虫名 域名（生成爬虫）；④在 items.py 定义模型、spider 写 parse、pipelines.py 写管道、settings.py 配置；⑤scrapy crawl 爬虫名（运行）。'],
  ['使用Scrapy爬取安居客二手房的数据？','定义 AnjukeItem(title/name/address/desc) → 爬虫 parse 用 XPath 提取房源并 yield item，翻页用 yield Request(next_page) → 管道把 item 写入 anjuke.json → settings 设 ROBOTSTXT_OBEY=False、DOWNLOAD_DELAY、User-Agent、启用管道。'],
  ['Selenium定位获取标签对象并提取数据？',"用 driver.find_element(By.ID/By.CLASS_NAME/By.XPATH/By.CSS_SELECTOR, 值) 定位元素，再用 .text 取文本、.get_attribute('href') 取属性，或 driver.page_source 取页面源码。"],
  ['Selenium中send_keys方法的用法？',"send_keys() 向输入框输入内容：input_box = driver.find_element(By.ID, 'kw')；input_box.send_keys('关键词')。"],
  ['Beautiful Soup常用的方法？',"find() 查第一个、find_all() 查所有、select() 按 CSS 选择器查找、get_text() 取文本、get('属性') 取属性。"],
  ['Beautiful Soup 的常用解析器？哪个解析器速度比较快？','常用解析器：html.parser（内置）、lxml（第三方，速度快）、html5lib（慢但容错最好）。其中 lxml 解析速度最快。'],
];

const kpQuestions = KPA.map(([t,a]) => SA(SUBJ, t, a));
kpQuestions.push(PROG(SUBJ, '使用requests模块爬取淘宝首页的html内容，并将内容保存到taobao.html文件中？', `import requests
url = 'https://www.taobao.com/'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/115.0.0.0 Safari/537.36'}
resp = requests.get(url, headers=headers)
resp.encoding = 'utf-8'
with open('taobao.html', 'w', encoding='utf-8') as f:
    f.write(resp.text)`));

// 全部标记为重点
kpQuestions.forEach(q => { q.topic = '重点'; q.level = 'A'; });
console.log('📦 重点题目:', kpQuestions.length, '道（简答', kpQuestions.filter(q=>q.type==='简答题').length, '+ 程序', kpQuestions.filter(q=>q.type==='程序题').length, ')');

// ==================== 合并到题库 ====================
function mergeToBank(){
  const dbPath = path.join(__dirname, 'parsed', 'questions_data.js');
  const content = fs.readFileSync(dbPath, 'utf8');
  const match = content.match(/const PREPARSED_QUESTIONS = (\[[\s\S]*\]);/);
  if (!match) { console.error('❌ 无法解析题库'); process.exit(1); }
  const existing = JSON.parse(match[1]);

  // 把该科目已有的简答/程序题也标记为重点
  let marked = 0;
  existing.forEach(q => {
    if (q.subject === SUBJ && (q.type === '简答题' || q.type === '程序题')) {
      if (q.topic !== '重点') { q.topic = '重点'; q.level = 'A'; marked++; }
    }
  });

  let maxId = 0;
  existing.forEach(q => { const m = q.id && q.id.match(/GEN(\d+)/); if (m) maxId = Math.max(maxId, parseInt(m[1], 10)); });
  kpQuestions.forEach(q => {
    maxId++;
    q.id = 'GEN' + String(maxId).padStart(4, '0');
    q.correctCount = 0; q.wrongCount = 0;
    q.lastPractice = null; q.nextReview = null; q.reviewStage = 0;
  });

  const merged = [...existing, ...kpQuestions];
  const header = '// 九科完整题库 — ' + merged.length + '题\nconst PREPARSED_QUESTIONS = ';
  fs.writeFileSync(dbPath, header + JSON.stringify(merged, null, 2) + ';\n', 'utf8');
  fs.writeFileSync(path.join(__dirname, 'parsed', 'questions_data.json'), JSON.stringify(merged, null, 2), 'utf8');

  const htmlPath = path.join(__dirname, 'index.html');
  let html = fs.readFileSync(htmlPath, 'utf8');
  html = html.replace(/questions_data\.js\?v=\d+/, 'questions_data.js?v=25');
  fs.writeFileSync(htmlPath, html, 'utf8');

  console.log('✅ 题库合并完成: 原', existing.length, '题 → 现', merged.length, '题');
  console.log('   标记已有题目为重点:', marked, '道 | 新增重点题:', kpQuestions.length, '道');
}

mergeToBank();

