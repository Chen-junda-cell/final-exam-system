/* ================================================================
   期末冲刺学习系统 — 纯前端 / 五科全覆盖
   ================================================================ */

// ==================== 知识点库（1082道题库+老师重点精炼） ====================
const KNOWLEDGE_BASE = {
  'Java Web': {
    subject:'Java Web (JSP/Servlet)',
    topics:[
      {id:'jw1',name:'JSP 执行过程与生命周期',level:'A',freq:9,content:'首次请求四步：客户端Request→JSP转译成Servlet源码(.java)→编译成.class字节码→执行并Response响应。再次请求直接用.class。两个时期：转译时期(JSP→Servlet→.class)和请求时期(执行.class)。',keywords:['JSP执行过程','转译','编译','生命周期','请求时期']},
      {id:'jw2',name:'JSP 9大隐式对象',level:'A',freq:9,content:'request(请求)、response(响应)、session(会话)、application(全局)、config(配置)、out(输出)、page(当前页)、pageContext(页面上下文)、exception(异常,仅错误页)。四大作用域从小到大：page<request<session<application。',keywords:["隐式对象","request","response","session","application","out","pageContext","作用域","9大","九个"]},
      {id:'jw3',name:'请求转发 vs 重定向',level:'A',freq:8,content:'转发(forward)：服务器内部跳转、URL不变、1次请求、可共享request数据、不能跨域、速度快。代码：request.getRequestDispatcher("url").forward(req,resp)。重定向(sendRedirect)：浏览器新请求、URL改变、2次请求、不能共享数据、可跨域。代码：response.sendRedirect("url")。',keywords:["转发","重定向","forward","sendRedirect","RequestDispatcher","C/S","B/S","客户端/服务器","浏览器/服务器"]},
      {id:'jw4',name:'Servlet 生命周期',level:'A',freq:8,content:'三阶段：init()初始化(首次加载调1次)→service()/doGet()/doPost()每次请求调用→destroy()服务器关闭时调用1次。Servlet是单例多线程的，每个请求分配一个线程调用service方法。',keywords:["Servlet生命周期","init","service","destroy","doGet","doPost","生命周期","服务器关闭"]},
      {id:'jw5',name:'Filter 过滤器',level:'A',freq:8,content:'实现javax.servlet.Filter接口。三方法：init(FilterConfig)初始化→doFilter(req,resp,chain)每次拦截调用→destroy()销毁。必须调用chain.doFilter()放行，否则请求被卡住。典型应用：IP过滤、编码设置、权限校验。多个Filter按web.xml注册顺序执行。',keywords:['Filter','过滤器','doFilter','FilterChain','init','destroy']},
      {id:'jw6',name:'MVC 三层架构',level:'A',freq:8,content:'M(Model模型)：数据+业务逻辑(JavaBean/DAO/Service)。V(View视图)：页面展示(JSP/HTML)。C(Controller控制器)：调度中心(Servlet)，接收请求→调Model处理→跳转View。好处：各司其职，改界面不影响业务。',keywords:['MVC','Model','View','Controller','三层架构']},
      {id:'jw7',name:'Session vs Cookie',level:'A',freq:7,content:'存放位置：Session服务器端(安全)/Cookie浏览器端(≤4KB不安全)。生命周期：Session间隔计时/Cookie累计计时。网络传输：Session不传输/Cookie每次请求带着。典型用途：Session存登录状态/Cookie存偏好设置。',keywords:['Session','Cookie','会话','setAttribute','addCookie','setMaxAge']},
      {id:'jw8',name:'ServletConfig vs ServletContext',level:'A',freq:7,content:'ServletConfig：单个Servlet的初始化参数，仅当前Servlet可用。ServletContext：整个Web应用共享的参数，所有Servlet都能访问。获取方式：getServletConfig().getInitParameter("name")和getServletContext().getInitParameter("name")。',keywords:['ServletConfig','ServletContext','初始化参数','getInitParameter']},
      {id:'jw9',name:'JSP 脚本元素三兄弟',level:'A',freq:6,content:'①表达式<%= 变量 %>输出结果(不能有分号)；②Scriptlet<% Java代码 %>写逻辑(可有分号)；③声明<%! 方法/变量 %>定义成员(编译为Servlet成员变量)。<%!声明的变量是成员变量多线程共享；<%声明的变量是局部变量每次重建。',keywords:["脚本元素","表达式","Scriptlet","声明","<%=","<%","<%!"]},
      {id:'jw10',name:'JSP 三大指令',level:'A',freq:6,content:'page指令：<%@ page import="包" pageEncoding="UTF-8" errorPage="错误页"%>设置页面属性。include指令：<%@ include file="文件"%>编译时静态包含。taglib指令：<%@ taglib prefix="c" uri="..."%>引入JSTL等标签库。',keywords:["page指令","include指令","taglib指令","<%@","JSP指令","三个指令"]},
      {id:'jw11',name:'静态include vs 动态include',level:'A',freq:6,content:'静态(<%@ include %>)：编译时合并源码→生成1个.class→不能传参→共享request→被包含页修改需重编译主页面。动态(<jsp:include>)：运行时合并HTML结果→生成多个.class→可传参(jsp:param)→各有各的request→被包含页修改立刻生效。',keywords:['静态include','动态include','jsp:include','编译时','运行时','jsp:param']},
      {id:'jw12',name:'JDBC 四步操作',level:'A',freq:6,content:'①Class.forName("驱动类")加载驱动；②DriverManager.getConnection(url,user,pwd)建立连接；③创建Statement/PreparedStatement执行SQL(executeUpdate增删改/executeQuery查询)；④依次关闭ResultSet→Statement→Connection。PreparedStatement防SQL注入。',keywords:['JDBC','Class.forName','DriverManager','Connection','Statement','ResultSet','PreparedStatement']},
      {id:'jw13',name:'JSP 动作标签',level:'B',freq:5,content:'<jsp:useBean id="名" class="包.类" scope="session"/>创建JavaBean对象。<jsp:setProperty name="名" property="属性" value="值"/>设值。<jsp:getProperty name="名" property="属性"/>取值。<jsp:include page="页"/>动态包含。<jsp:forward page="页"/>转发。',keywords:['useBean','setProperty','getProperty','jsp:forward','动作标签']},
      {id:'jw14',name:'JavaBean 规范',level:'B',freq:5,content:'①public类②private属性③public的getter/setter方法④必须有无参构造方法。boolean类型用isXxx()代替getXxx()。属性名首字母大写拼到get/set后面组成方法名。',keywords:['JavaBean','getter','setter','无参构造','isXxx']},
      {id:'jw15',name:'EL 表达式',level:'B',freq:5,content:'${对象.属性}替代JSP脚本表达式。四大作用：获取数据(从作用域自动查找)、执行运算(算术/关系/逻辑)、获取隐式对象(param/cookie等)、调用方法。${empty xxx}判断null或空。比<% %>简洁安全。',keywords:['EL表达式','${}','empty','param','sessionScope']},
      {id:'jw16',name:'JSTL 核心标签',level:'B',freq:5,content:'<c:if test="条件">单分支(无else！)。<c:choose>/<c:when>/<c:otherwise>多分支(类似switch)。<c:forEach items="集合" var="变量">循环遍历。<c:set var="名" value="值"/>设变量。需先引入taglib指令。',keywords:['JSTL','c:if','c:choose','c:when','c:forEach','c:set']},
      {id:'jw17',name:'web.xml 配置',level:'B',freq:5,content:'配置Servlet：<servlet>(servlet-name+servlet-class)和<servlet-mapping>(servlet-name+url-pattern)两对标签。配置Filter：<filter>+<filter-mapping>。配置欢迎页：<welcome-file>。配置初始化参数：<context-param>+<init-param>。',keywords:['web.xml','servlet','servlet-mapping','url-pattern','filter-mapping','welcome-file']},
      {id:'jw18',name:'Tomcat 核心知识',level:'B',freq:4,content:'默认端口8080(在/conf/server.xml中修改Connector的port)。WEB-INF目录浏览器不可直接访问(安全)。/work目录存JSP编译后的Servlet类。项目部署到/webapps目录。/bin放启动停止脚本(startup/shutdown)。',keywords:['Tomcat','8080','server.xml','WEB-INF','webapps','work']},
      {id:'jw19',name:'HTTP 状态码与请求方法',level:'B',freq:4,content:'200成功、302重定向(sendRedirect触发)、404资源未找到、500服务器内部错误。GET参数在URL可见(不安全/长度限制)，POST参数在请求体(安全/无限制)。登录和上传必须用POST。',keywords:['状态码','200','302','404','500','GET','POST']},
      {id:'jw20',name:'编码设置三统一',level:'B',freq:3,content:'JSP页面：<%@ page pageEncoding="UTF-8"%>。请求：request.setCharacterEncoding("UTF-8")。响应：response.setContentType("text/html;charset=UTF-8")。三处必须统一UTF-8否则中文乱码。',keywords:['编码','UTF-8','setCharacterEncoding','pageEncoding','乱码']},
    ]
  },
  'Linux': {
    subject:'Linux 操作系统',
    topics:[
      {id:'lx1',name:'文件/目录操作命令大全',level:'A',freq:15,content:'ls -a(含隐藏) -l(详细信息) -d(目录本身)；cd ~(回家) ..(上级) /(根)；pwd(当前路径)；mkdir -p(递归创建)；rmdir(删空目录)；rm -r(递归删) -f(强制)；cp -r(复制目录)；mv(移动/重命名)；touch(建空文件)；cat(查看/合并)；more/less(分页)；head -n/tail -n(头尾N行)；tail -f(实时追踪)。',keywords:["ls","cd","pwd","mkdir","rm","cp","mv","touch","cat","tail","head","less","sed","编辑器","touch命令","cp命令","basename","dirname"]},
      {id:'lx2',name:'权限管理 chmod',level:'A',freq:12,content:'权限三组：所有者(u)/所属组(g)/其他人(o)。数字法：r=4 w=2 x=1。例：rwx=7 rw-=6 r-x=5 r--=4。chmod 755 file(所有者rwx,组r-x,其他人r-x)。chmod 777全权限。字符法：chmod u+x(加执行) g-w(去写) a+rwx(全部加)。',keywords:['chmod','权限','rwx','755','777','644','u+x','数字法','字符法']},
      {id:'lx3',name:'vi/vim 编辑器三大模式',level:'A',freq:12,content:'①命令模式(默认)：光标移动、复制粘贴删除。②输入模式(i/a/o进入,Esc退出)：编辑文字。③末行模式(:进入)：:w保存 :q退出 :wq保存退出 :q!强制退出 :set nu行号 :set nonu取消行号。常用操作：dd删行、yy复制、p粘贴、u撤销、.重复、G跳末尾、gg跳开头。',keywords:['vi','vim',':wq',':q!','dd','yy','i','Esc','命令模式','插入模式','末行模式']},
      {id:'lx4',name:'用户与组管理',level:'A',freq:10,content:'useradd 用户名(创建用户)；useradd -d /home/xxx 用户名(指定家目录)；userdel -r 用户名(删用户+家目录！不加-r只删账号)；passwd 用户名(设密码)；usermod(修改用户)；su(切换用户)；groupadd(创建组)。新建用户默认家目录在/home/用户名。',keywords:['useradd','userdel','passwd','usermod','su','groupadd','家目录','-r']},
      {id:'lx5',name:'Shell 脚本编程',level:'A',freq:10,content:'首行必须写#!/bin/bash。变量赋值等号两边不能有空格：name="value"。引用变量：$name或${name}。命令替换：$(命令)或反引号。参数：$#(个数) $0(脚本名) $1 $2(第n个参数)。条件：if [ 条件 ]; then ... fi。循环：for i in ...; do ... done。',keywords:["Shell","#!/bin/bash","变量","$#","$?","if","for","while","case","bash","export","declare","FTP","端口","20","21","自由软件","Ctrl","终止","root@localhost","提示符","uname","hostname","计算机基本信息"]},
      {id:'lx6',name:'打包压缩 tar/gzip/zip',level:'B',freq:8,content:'tar -zcvf 包名.tar.gz 源(打包压缩)；tar -zxvf 包名.tar.gz(解压)；tar -zxvf 包名.tar.gz -C /目录(指定解压目录)。gzip 文件→.gz；gunzip解压。zip -r 包名.zip 目录；unzip解压。参数口诀：c创建 x解压 z用gzip v显示过程 f指定文件。',keywords:['tar','gzip','zip','压缩','解压','-zcvf','-zxvf','gunzip']},
      {id:'lx7',name:'管道与重定向',level:'B',freq:7,content:'| 管道：前命令的输出作为后命令的输入。> 覆盖重定向；>> 追加重定向；< 输入重定向；2> 错误重定向；2>&1 错误合并到标准输出。0=stdin 1=stdout 2=stderr。',keywords:['管道','重定向','|','>','>>','2>&1','stdin','stdout','stderr']},
      {id:'lx8',name:'grep 与正则表达式',level:'B',freq:6,content:'grep "关键词" 文件(查找匹配行)。支持正则：.任意字符 *零或多次 ^行首 $行尾 []字符集 [^]排除。常用：grep -i(忽略大小写) -n(显示行号) -v(反向匹配) -r(递归)。sed：流编辑器，可直接修改文件内容(s/旧/新/g替换)。',keywords:['grep','正则','sed','查找','替换','-i','-n','-v']},
      {id:'lx9',name:'进程管理',level:'B',freq:6,content:'ps -aux(查看全部进程)；ps -ef(标准格式)；top(实时动态监控)；kill PID(终止进程)；kill -9 PID(强杀)；killall 进程名(终止所有同名进程)。PID是进程唯一ID。&后台运行。Ctrl+C终止前台进程，Ctrl+Z挂起。',keywords:['ps','kill','top','PID','进程','killall','后台']},
      {id:'lx10',name:'软链接 vs 硬链接',level:'B',freq:5,content:'软链接(ln -s)：类似快捷方式，删源文件后链接失效，可跨文件系统，可指向目录。硬链接(ln)：共享同一inode，删源文件仍可用，不能跨文件系统，不能指向目录。创建：ln -s 源 链接名(软)，ln 源 链接名(硬)。',keywords:['软链接','硬链接','ln','ln -s','inode','符号链接']},
      {id:'lx11',name:'Linux 目录结构',level:'B',freq:5,content:'/bin基本命令 /sbin系统管理 /etc配置文件 /dev设备文件 /home用户家目录 /root超管家目录 /tmp临时文件 /usr用户程序 /var日志缓存 /boot启动内核 /proc进程信息(虚拟) /lib库文件。',keywords:['目录结构','/bin','/etc','/home','/root','/tmp','/usr','/var','/boot']},
      {id:'lx12',name:'开关机与关机计划',level:'B',freq:4,content:'关机：shutdown -h now(立即)、poweroff、halt。重启：shutdown -r now、reboot。定时：shutdown -h +30(30分钟后) shutdown -h 12:30(12:30关机)。取消：shutdown -c。',keywords:['shutdown','poweroff','halt','reboot','关机','重启']},
      {id:'lx13',name:'Linux 特点与发行版',level:'C',freq:3,content:'7大特点：与UNIX兼容、自由软件源码公开、性能高安全性强、便于定制再开发、互操作性高、真正的多任务32/64位、服务器+嵌入式领域应用广泛。主流发行版CentOS 7(考试默认)。',keywords:["Linux特点","UNIX","开源","CentOS","发行版","自由软件"]},
    ]
  },
  'Hadoop': {
    subject:'Hadoop 大数据技术',
    topics:[
      {id:'hd1',name:'HDFS 核心架构',level:'A',freq:12,content:'NameNode(主节点)：管理元数据和命名空间(存"目录"，不存实际数据)。DataNode(从节点)：存储实际数据块，定期向NameNode发送心跳。SecondaryNameNode：合并fsimage和edits日志，不是热备！',keywords:["HDFS","NameNode","DataNode","SecondaryNameNode","元数据","心跳","大数据","5V","分布式","集群"]},
      {id:'hd2',name:'YARN 资源管理架构',level:'A',freq:10,content:'ResourceManager(RM)：全局资源调度主节点。NodeManager(NM)：单节点资源管理，向RM汇报。ApplicationMaster(AM)：为每个应用向RM申请资源并监控任务。Container：封装CPU+Memory的最小资源抽象单元。YARN全称：Yet Another Resource Negotiator。',keywords:["YARN","ResourceManager","NodeManager","ApplicationMaster","Container","HA","高可用","离线","批处理","实时处理","离线批处理"]},
      {id:'hd3',name:'HDFS Block 与副本策略',level:'A',freq:10,content:'默认Block大小128MB(Hadoop 2.x+)。默认副本数3(dfs.replication配置)。副本放置：第一个在客户端节点(或随机)，第二个在不同机架，第三个在第二个副本同机架不同节点。机架感知提高容错。500MB文件→4个Block(128+128+128+116)。',keywords:['Block','128MB','副本','3','dfs.replication','机架感知']},
      {id:'hd4',name:'HDFS 常用Shell命令',level:'A',freq:10,content:'hdfs dfs -ls [-R](列出) -mkdir -p(递归创建) -put(上传) -get(下载) -cat(查看内容) -rm -r(递归删除) -getmerge(合并下载) -copyFromLocal(上传) -copyToLocal(下载) -moveFromLocal(移动上传后删本地) -appendToFile(追加)。',keywords:['hdfs dfs','-ls','-put','-get','-cat','-mkdir','-rm','-getmerge','-copyFromLocal']},
      {id:'hd5',name:'MapReduce 核心流程',level:'A',freq:10,content:'Input→Split(分片)→Map(映射转换)→Shuffle(分区排序归并)→Reduce(聚合汇总)→Output。Map并行度=Split数量。默认Reduce数=1。Map输入key=LongWritable(字节偏移量)，value=Text(行内容)。Shuffle是MapReduce的核心环节。',keywords:["MapReduce","Split","Map","Shuffle","Reduce","InputFormat","序列化","Writable","Partitioner","分区","setPartitionerClass","setNumReduceTasks"]},
      {id:'hd6',name:'HDFS 读/写数据流程',level:'A',freq:8,content:'写流程：Client→NameNode(获取DN列表)→向第一个DN写→DN间Pipeline管道复制→全部写完返回确认。读流程：Client→NameNode(获取Block位置列表)→按就近原则依次从DN读取Block→合并数据返回。',keywords:['写流程','读流程','Pipeline','Block','Client']},
      {id:'hd7',name:'HDFS 不适合小文件',level:'B',freq:6,content:'原因：①每个小文件一条元数据，NameNode内存压力大；②频繁访问大量小文件降低吞吐量；③每个小文件一个Map任务浪费资源。解决：SequenceFile合并、HBase存储、Flume/Spark Streaming聚合。',keywords:['小文件','元数据压力','SequenceFile','合并','NameNode内存']},
      {id:'hd8',name:'Hadoop 配置文件',level:'B',freq:6,content:'core-site.xml：fs.defaultFS(HDFS地址)。hdfs-site.xml：dfs.replication(副本数)。yarn-site.xml：yarn.resourcemanager.hostname(RM地址)。mapred-site.xml：mapreduce.framework.name=yarn。hadoop-env.sh：JAVA_HOME。',keywords:["core-site.xml","hdfs-site.xml","yarn-site.xml","mapred-site.xml","hadoop-env.sh","fs.defaultFS","CentOS","安装CentOS","静态IP","网络配置"]},
      {id:'hd9',name:'Hadoop HA 高可用',level:'B',freq:5,content:'HA：两个NameNode(Active+Standby)，ZooKeeper实现故障自动切换。Active宕机时Standby自动接管。JournalNode存edits日志实现元数据同步。Federation：多个NameNode各自管理一部分命名空间(解决单点内存瓶颈)。',keywords:['HA','高可用','Active','Standby','ZooKeeper','JournalNode','Federation']},
      {id:'hd10',name:'YARN 工作流程',level:'B',freq:5,content:'①Client向RM提交作业；②RM的ApplicationsManager与NM协商启动Container运行AM；③AM向RM的Scheduler申请资源；④AM与NM通信启动Container执行Task；⑤AM监控任务运行状态。',keywords:['YARN工作流程','提交作业','申请资源','Container','Task']},
      {id:'hd11',name:'MapReduce 核心组件',level:'B',freq:5,content:'InputFormat：定义输入分片(Split)和RecordReader。Partitioner：决定Map输出去哪个Reduce(默认HashPartitioner)。Combiner：Map端局部聚合(类似小Reduce)。自定义分区：继承Partitioner类。序列化：实现Writable接口。排序：实现WritableComparable。',keywords:['InputFormat','Partitioner','Combiner','Writable','序列化','排序']},
      {id:'hd12',name:'Hadoop 集群搭建要点',level:'C',freq:3,content:'SSH免密登录(避免启动服务重复输密码)。JAVA_HOME环境变量配置。slaves文件配置DataNode节点列表。namenode -format格式化NameNode(仅首次！)。start-dfs.sh启动HDFS，start-yarn.sh启动YARN，jps验证进程。',keywords:['SSH免密','namenode','format','start-dfs','start-yarn','jps']},
    ]
  },
  'Scala & Spark': {
    subject:'Scala & Spark',
    topics:[
      {id:'ss1',name:'var vs val 变量定义',level:'A',freq:6,content:'var：变量，可重新赋值。val：常量(不可变引用)，类似Java final。但val引用的Array/ArrayBuffer内元素可修改。Scala推荐优先用val(函数式编程风格)。代码：var x=10; x=20 ✅ | val y=10; y=20 ❌编译错误。',keywords:["var","val","变量","常量","不可变","Scala","空值","null"]},
      {id:'ss2',name:'元组 Tuple',level:'A',freq:6,content:'最大长度22个元素(Tuple2~Tuple22)。访问：t._1 t._2 t._3(索引从1开始！不是0)。每个位置可存不同数据类型。创建后不可修改。错误写法：❌t(0) ❌t[0]。正确写法：val t=(1,"hi",true); t._2→"hi"。',keywords:["Tuple","元组","._1","._2","22","索引从1开始"]},
      {id:'ss3',name:'集合 List/Set/Map/Array',level:'A',freq:6,content:'Array：定长同类型(Array(1,2,3))，取值arr(0)。ArrayBuffer：变长需import(scala.collection.mutable.ArrayBuffer)。List：默认不可变有序(List(1,2,3))，::拼接。Set：无序不重复(Set(1,2,2,3)→Set(1,2,3))。Map：键值对(Map("a"->1))。',keywords:['Array','ArrayBuffer','List','Set','Map','集合','::']},
      {id:'ss4',name:'方法与函数',level:'A',freq:5,content:'方法用def定义：def add(a:Int,b:Int):Int = {a+b}。函数是对象可赋值给变量：val addFunc = (a:Int,b:Int) => a+b。方法属于类/对象，函数可以作为值传递。考试常考def语法格式。',keywords:['def','方法','函数','=>','val','参数']},
      {id:'ss5',name:'RDD 核心概念与五大属性',level:'A',freq:6,content:'RDD=弹性分布式数据集(Resilient Distributed Dataset)。五大属性：①分区列表②每分区计算函数③依赖关系(宽/窄)④分区器(可选,KV类型)⑤优先位置列表。不可变、可分区、可并行计算、基于内存。',keywords:["RDD","弹性分布式","五大属性","分区","依赖","不可变","内存计算","Spark","集群","资源管理","Hadoop替代","快速","分布式"]},
      {id:'ss6',name:'Transformation vs Action',level:'A',freq:6,content:'Transformation(转换)：惰性求值，不立即执行。常见：map、flatMap、filter、reduceByKey、groupByKey、sortBy、union、distinct。Action(行动)：触发真正计算。常见：count、collect、reduce、first、take、foreach、saveAsTextFile。',keywords:['Transformation','Action','惰性求值','map','flatMap','reduceByKey','collect','foreach']},
      {id:'ss7',name:'Spark SQL 核心概念',level:'A',freq:6,content:'SparkSession：Spark 2.0+统一编程入口(整合SparkContext+SQLContext+HiveContext)。DataFrame：有Schema的分布式数据表=Dataset[Row]。DataSet：强类型(编译时类型安全)。两种分析方式：①API(select/filter/groupBy)②视图+SQL(createOrReplaceTempView+spark.sql)。',keywords:['SparkSession','DataFrame','DataSet','Spark SQL','createOrReplaceTempView','spark.sql']},
      {id:'ss8',name:'宽依赖 vs 窄依赖',level:'A',freq:6,content:'窄依赖：子RDD每个分区只依赖父RDD的少数分区(一对一)，不产生Shuffle。例：map/filter/flatMap/union。宽依赖：子RDD一个分区依赖父RDD全部分区(一对多)，产生Shuffle。例：reduceByKey/groupByKey/sortByKey/join。宽依赖是划分Stage的依据！',keywords:['宽依赖','窄依赖','Shuffle','Stage','reduceByKey','map']},
      {id:'ss9',name:'Spark 架构组件',level:'A',freq:5,content:'Driver：运行main()的程序，创建SparkContext。Executor：JVM进程，运行Task并返回结果。Master(Standalone模式)：主节点，资源管理。Worker：从节点，管理本机资源。一个应用=1个Driver+N个Executor。',keywords:['Driver','Executor','Master','Worker','SparkContext','架构']},
      {id:'ss10',name:'Spark 运行模式',level:'B',freq:4,content:'四种模式：Local(本地开发，local[*]用所有核)、Standalone(自带集群)、YARN(Hadoop资源管理，生产常用)、Mesos/K8s。设置方式：setMaster("local[*]")或SparkSession.builder().master("yarn")。',keywords:["Local","Standalone","YARN","Mesos","K8s","setMaster","编程语言","接口","Java","Scala","Python","spark-shell","spark-sql","终端"]},
      {id:'ss11',name:'RDD 编程模板(五大步)',level:'A',freq:5,content:'①new SparkConf().setAppName().setMaster()→②new SparkContext(conf)→③读取数据+转换处理(textFile→flatMap→map→reduceByKey)→④触发计算保存结果(saveAsTextFile/collect)→⑤sc.stop()。WordCount是经典模板。',keywords:['SparkConf','SparkContext','textFile','flatMap','map','reduceByKey','WordCount']},
      {id:'ss12',name:'Spark 生态组件与选型',level:'B',freq:5,content:'Spark Core(核心引擎)、Spark SQL(结构化/SQL)、Spark Streaming(流式实时)、MLlib(机器学习/推荐)、GraphX(图计算/社交网络)。场景选组件：SQL/报表→Spark SQL；实时告警→Streaming；推荐模型→MLlib；社交关系→GraphX。',keywords:["Spark Core","Spark SQL","Spark Streaming","MLlib","GraphX","组件","选型","特点","Spark特点","快速","易用性","通用性","随处运行"]},
      {id:'ss13',name:'Scala 面向对象',level:'B',freq:4,content:'class：多例(可new多个实例)。object：单例(全局唯一，类似Java static)。extends：继承。override：重写(必须写！)。trait：特质(类似Java8接口，可多重混入with)。abstract class：抽象类(不能实例化)。主构造器执行类体中的所有代码。',keywords:["class","object","extends","override","trait","abstract","单例","伴生对象","主构造","辅助构造","模式匹配","match case"]},
      {id:'ss14',name:'for 循环 to vs until',level:'B',freq:3,content:'for(i <- 1 to 5)→输出1,2,3,4,5(包含5)。for(i <- 1 until 5)→输出1,2,3,4(不包含5)。to是闭区间，until是左闭右开。可加if守卫：for(i <- 1 to 10 if i%2==0)。可嵌套循环。',keywords:['for','to','until','循环','守卫','yield']},
    ]
  },
  'HBase / ZooKeeper': {
    subject:'HBase / ZooKeeper / 大数据概念',
    topics:[
      {id:'hz1',name:'HBase 核心架构',level:'A',freq:8,content:'HMaster：主节点，Region分配/负载均衡/状态监控。RegionServer：从节点，处理客户端读写请求，管理Region。ZooKeeper：HMaster选举、元数据存储(hbase:meta表位置)、集群协调。Client直接与RegionServer交互。底层存储依赖HDFS。',keywords:["HMaster","RegionServer","Region","ZooKeeper","HDFS","HBase","大数据","5V","4V","分布式","集群"]},
      {id:'hz2',name:'ZooKeeper 核心机制',level:'A',freq:7,content:'集群2n+1台(奇数台)，允许n台失效。过半机制：超半数节点同意才选出Leader。ZNode：数据节点(最大1MB)。四种类型：持久、临时、持久顺序、临时顺序。myid文件标识节点ID。选举：先投自己，比较myid，票数过半胜出。',keywords:['ZooKeeper','过半机制','ZNode','选举','myid','Leader','Follower']},
      {id:'hz3',name:'HBase 数据模型',level:'A',freq:7,content:'RowKey(行键，字典序排序，设计最关键！)、Column Family(列族，创建表时定义)、Timestamp(时间戳，标识数据版本)、Cell(单元格=RowKey+CF+列限定符+时间戳)。NameSpace(命名空间，默认default)。表水平切分为多个Region。',keywords:["RowKey","Column Family","Timestamp","Cell","NameSpace","Region","列族","DDL","namespace","命名空间","scan扫描"]},
      {id:'hz4',name:'HBase 核心特点',level:'A',freq:6,content:'①列式存储；②稀疏性(同一表不同行可有不同列，空列不占存储空间)；③易扩展(加节点即可)；④海量存储(PB级)；⑤高并发随机读写(实时查询)；⑥面向列族设计。底层基于HDFS，参考Google Bigtable设计。全称：Hadoop Database。',keywords:["HBase特点","列式存储","稀疏性","高并发","PB级","Bigtable","NoSQL","非关系型","key-value","三驾马车"]},
      {id:'hz5',name:'HBase Shell 命令',level:'B',freq:6,content:'create 表名,列族名(建表)；put 表名,rowkey,列族:列,值(插入)；get 表名,rowkey(获取单行)；scan 表名(扫描全表)；delete(删除)；disable+drop(删表)；describe(查看表结构)；list(列出所有表)；count(统计行数)；truncate(清空表)。',keywords:["HBase Shell","create","put","get","scan","disable","drop","list","namespace命令"]},
      {id:'hz6',name:'HBase Java API',level:'B',freq:5,content:'HBaseConfiguration.create()获取配置。ConnectionFactory.createConnection(config)建立连接。Table table=connection.getTable(TableName.valueOf("表名"))。Put插入数据(需rowkey字节数组+addColumn)。Get获取单行。Scan扫描多行。Result包含查询结果。操作完关闭table.close()。',keywords:['HBaseConfiguration','Connection','Table','Put','Get','Scan','Result']},
      {id:'hz7',name:'大数据 4V 特点',level:'B',freq:4,content:'Volume(大量)：数据量巨大PB/ZB级。Velocity(高速)：数据产生和处理速度快。Variety(多样)：结构化+半结构化+非结构化数据。Value(价值密度低)：海量数据中有价值的信息比例低(不是高！)。这是大数据的经典定义。',keywords:["大数据","4V","Volume","Velocity","Variety","Value","价值密度低","价值密度","5V","大数据特点","分布式","集群","关系型"]},
      {id:'hz8',name:'HBase 读写流程',level:'B',freq:4,content:'读流程：Client→ZooKeeper获取hbase:meta表位置→读meta表找到目标Region所在的RegionServer→直接与RegionServer交互读取数据→先查MemStore再查StoreFile(HFile)。写流程：先写WAL(HLog)预写日志→写MemStore内存→MemStore满了Flush到StoreFile(HFile)。',keywords:['读写流程','MemStore','StoreFile','HFile','WAL','HLog','Flush']},
    ]
  },
  'Web前端': {
    subject:'Web前端 (HTML/CSS/JS)',
    topics:[
      {id:'wf1',name:'HTML基础结构',level:'A',freq:5,content:'<html><head>...</head><body>...</body></html>。head放元数据(title/meta/link/style)，body放可见内容。这是网页最基础框架。',keywords:["HTML","html","head","body","结构","title标记符","title属性","HR标记符","size","水平线"]},
      {id:'wf2',name:'常用HTML标签',level:'A',freq:8,content:'<a>超链接(href属性)；<img>图片(src/alt)；<div>块级容器；<span>行内容器；<h1>-<h6>标题；<p>段落；<br>换行。<ul>/<ol>无序/有序列表配<li>项目。',keywords:['标签','a','img','div','span','ul','ol','li','h1','p']},
      {id:'wf3',name:'HTML表格',level:'B',freq:4,content:'<table>表格，<tr>行，<td>单元格，<th>表头(粗体居中)。属性：border边框粗细，cellspacing间距，cellpadding内边距，align对齐方式。',keywords:['table','tr','td','th','表格','border']},
      {id:'wf4',name:'HTML表单',level:'A',freq:6,content:'<form>表单，<input>输入框。type：text/password/hidden/submit/radio/checkbox/email。<textarea>多行。<select>下拉。name属性对应后台参数名。',keywords:['form','input','text','password','submit','表单','textarea','select']},
      {id:'wf5',name:'CSS选择器与优先级',level:'A',freq:8,content:'#id(权重100)；.class(权重10)；标签(权重1)；*(权重0)；后代(div p)；群组(a,b)。优先级：!important>行内>id>class>标签>通配符。',keywords:['CSS','选择器','id','class','优先级','权重','#','.']},
      {id:'wf6',name:'CSS盒模型',level:'A',freq:8,content:'content+padding+border+margin。content-box(默认)width仅内容总宽=w+p+b。border-box：width含p+b，总宽=width，更直观。',keywords:['盒模型','content','padding','border','margin','box-sizing','border-box']},
      {id:'wf7',name:'CSS定位 position',level:'A',freq:5,content:'static默认；relative相对自身偏移仍占空间；absolute相对定位祖先脱离文档流；fixed固定视口；sticky粘性定位。',keywords:['position','static','relative','absolute','fixed','sticky']},
      {id:'wf8',name:'CSS居中与布局',level:'A',freq:5,content:'水平居中：margin:0 auto(块级需宽度)、text-align:center(行内)。垂直居中：flexbox(display:flex+align-items:center)、line-height=height。',keywords:['居中','margin','text-align','flex','水平居中','垂直居中']},
      {id:'wf9',name:'display 属性',level:'A',freq:5,content:'block：块级独占一行可设宽高。inline：行内不换行宽高无效。inline-block：不换行可设宽高。none：隐藏不占空间。flex/grid：弹性/网格布局。',keywords:["display","block","inline","inline-block","none","flex","grid","标准文档流","块级元素","行内元素"]},
      {id:'wf10',name:'CSS常用属性',level:'A',freq:6,content:'font-size/font-family/font-weight/color(文字)；background-color/border(背景/边框)；text-align/line-height/text-decoration(文本)。',keywords:['font-size','font-family','color','background','border','text-align']},
      {id:'wf11',name:'JavaScript变量',level:'A',freq:5,content:'var(函数作用域/提升)；let(块级/TDZ)；const(块级/不可重新赋值/对象属性可改)。推荐优先const，需要改再用let，尽量不用var。',keywords:['var','let','const','变量','作用域','提升','TDZ']},
      {id:'wf12',name:'JS数据类型',level:'A',freq:4,content:'基本：number/string/boolean/null/undefined/symbol/bigint。引用：object(array/function)。typeof null→"object"(bug)。null==undefined→true；===→false。',keywords:['数据类型','null','undefined','typeof','NaN','number','string']},
      {id:'wf13',name:'DOM操作',level:'A',freq:6,content:'getElementById→单个(找不到null)；querySelector→单个；querySelectorAll→NodeList；getElementsByClassName→HTMLCollection。innerHTML获取/设置内容。',keywords:['DOM','getElementById','querySelector','querySelectorAll','innerHTML']},
      {id:'wf14',name:'JavaScript事件',level:'B',freq:4,content:'onclick/onsubmit/onload/onchange/onmouseover。绑定：元素.onclick=fn或addEventListener("click",fn)。form验证：onsubmit="return check()"，返回false阻止提交。',keywords:['事件','onclick','onsubmit','onload','addEventListener']},
      {id:'wf15',name:'CSS引入方式',level:'B',freq:3,content:'行内style(优先级最高)→内嵌<style>标签→外部<link>(优先级最低)。!important可打破规则。',keywords:['CSS引入','行内样式','内嵌样式','外部样式','link','style']},
      {id:'wf16',name:'HTML5语义化标签',level:'B',freq:3,content:'<header>/<nav>/<main>/<article>/<section>/<aside>/<footer>。替代无意义<div>，SEO和可访问性更好。',keywords:['HTML5','语义化','header','nav','main','article','footer']},
      {id:'wf17',name:'CSS Float浮动',level:'B',freq:3,content:'float:left/right脱离文档流文字环绕。父容器高度塌陷。清除：clear:both、overflow:hidden、::after伪元素(clearfix)。',keywords:['float','浮动','clear','清除浮动','clearfix']},
      {id:'wf18',name:'CSS Flexbox',level:'B',freq:3,content:'display:flex。容器：justify-content/align-items/flex-direction/flex-wrap。项目：flex比例/align-self。现代一维布局首选。',keywords:['flex','flexbox','justify-content','align-items']},
      {id:'wf19',name:'响应式布局',level:'C',freq:2,content:'@media screen and (max-width:768px){}。移动优先：先写移动端再用@media适配桌面。<meta name="viewport" content="width=device-width">。',keywords:['响应式','@media','viewport','移动端','自适应']},
      {id:'wf20',name:'表单验证',level:'B',freq:3,content:'HTML5：required/pattern/type="email"/min/max。JS：onsubmit中检查，return false阻止提交，alert()提示错误。',keywords:['表单验证','required','pattern','onsubmit','return false']},
    ]
  }
};

// 六科信息
const SUBJECTS = [
  {id:'Java Web', icon:'☕', name:'Java Web (JSP/Servlet)', fileStart:0, fileEnd:253},
  {id:'Linux', icon:'🐧', name:'Linux 操作系统', fileStart:253, fileEnd:2755},
  {id:'Hadoop', icon:'🐘', name:'Hadoop 大数据技术', fileStart:2755, fileEnd:4702},
  {id:'HBase / ZooKeeper', icon:'🗄️', name:'HBase / ZooKeeper / 大数据概念', fileStart:4702, fileEnd:5482},
  {id:'Scala & Spark', icon:'⚡', name:'Scala & Spark', fileStart:5482, fileEnd:99999},
  {id:'Web前端', icon:'🌐', name:'Web前端 (HTML/CSS/JS)'},
];

// 五天计划数据
const PLAN_DATA = [
  {day:1, subject:'Linux 操作系统', icon:'🐧', tasks:['A级5大块速通(文件命令+权限+vi+用户+Shell)','78道单选题全部过一遍','chmod数字↔符号互转练习','vi常用命令默写']},
  {day:2, subject:'Java Web (JSP/Servlet)', icon:'☕', tasks:['A级8大块速通(生命周期+隐式对象+转发重定向+Filter+MVC+Session/Cookie+JSP流程+Config/Context)','MVC登录代码模板默写2遍','JSP动作标签(useBean/setProperty/getProperty)默写','web.xml配置Servlet模板默写']},
  {day:3, subject:'Hadoop 大数据技术', icon:'🐘', tasks:['A级5大块速通(HDFS架构+YARN架构+Block副本+MapReduce流程+HDFS命令)','HDFS写数据流程简答默写','YARN工作流程简答默写','HDFS不适合小文件简答默写']},
  {day:4, subject:'Scala & Spark + HBase/ZK', icon:'📚', tasks:['Scala: Array/ArrayBuffer+Tuple+List/Set/Map速通','Spark: RDD概念+转换/行动操作+集群模式(每题10分!)','HBase: HMaster/RegionServer/ZK三角关系','ZK: 过半机制+ZNode类型+选举流程']},
  {day:5, subject:'综合复习+考前模拟', icon:'🎯', tasks:['各科A级考点最后一遍速过','错题本全部重做','MVC代码大题+MapReduce流程默写','考前预测卷模拟(限时30分钟)']},
];

// ==================== 题库解析器 ====================
class QuestionParser {
  constructor() { this.questions = []; this.lineNum = 0; }

  parse(markdown) {
    this.questions = [];
    const lines = markdown.split('\n');
    // 先按 ## 标题切割大段（主格式）
    const sections = this._splitSections(lines);
    let currentSubject = 'Java Web';

    for (const sec of sections) {
      const subj = this._detectSubject(sec.header, sec.content);
      if (subj) currentSubject = subj;
      const qs = this._parseSection(sec.content, currentSubject);
      this.questions.push(...qs);
    }

    // 补充解析：后半部分的 **N. 题目** 格式
    const supQs = this._parseSupplementary(lines);
    this.questions.push(...supQs);

    // 合并和去重
    this.questions = this._deduplicate(this.questions);
    this._assignTopics();
    return this.questions;
  }

  _splitSections(lines) {
    const sections = [];
    let currentHeader = '';
    let currentLines = [];
    for (const line of lines) {
      if (/^##\s+[一二三四五六七八九十]/.test(line) || /^##\s+[课堂测试]/.test(line)) {
        if (currentLines.length > 0) {
          sections.push({header: currentHeader, content: currentLines.join('\n')});
        }
        currentHeader = line;
        currentLines = [];
      } else {
        currentLines.push(line);
      }
    }
    if (currentLines.length > 0) {
      sections.push({header: currentHeader, content: currentLines.join('\n')});
    }
    return sections;
  }

  _detectSubject(header, content) {
    const full = header + content.substring(0, 2000);
    if (/HDFS|NameNode|DataNode|hdfs\s+dfs|YARN|ResourceManager|NodeManager|MapReduce|Shuffle|Block.*MB|副本|SecondaryNameNode|fsimage|edits|InputSplit|Writable/i.test(full)) return 'Hadoop';
    if (/HBase|ZooKeeper|ZNode|HMaster|RegionServer|RowKey|Column Family|HBASE_MANAGES|myid|过半机制|大数据.*特点|价值密度|4V/i.test(full)) return 'HBase / ZooKeeper';
    if (/Scala|Array\(|ArrayBuffer|Tuple|元组|val\s|var\s|def\s|List\(|不可变列表|隐式转换/i.test(full)) return 'Scala & Spark';
    if (/Spark|RDD|弹性分布式|转换操作|行动操作|惰性求值|Standalone/i.test(full)) return 'Scala & Spark';
    if (/Linux|shell|vi\s|vim|chmod|bash|#!\/bin|ls\s-|mkdir|useradd|PID|kill|tar\s-/i.test(full)) return 'Linux';
    if (/JSP|Servlet|Filter|MVC|web\.xml|JavaBean|JSTL|Tomcat|\.jsp|session|cookie|转发|重定向|JDBC/i.test(full)) return 'Java Web';
    if (/HTML|CSS|JavaScript|Web前端|前端|DOM|盒模型|选择器|position|display|flex|表单|input\s|标签|属性|浮动|float|响应式/i.test(full)) return 'Web前端';
    return null;
  }

  _parseSection(content, subject) {
    const questions = [];
    // 按 ### N. 切分
    const blocks = content.split(/(?=^###\s+\d+\.\s*[（(])/m);
    for (const block of blocks) {
      const q = this._parseQuestionBlock(block, subject);
      if (q && q.title) questions.push(q);
    }
    return questions;
  }

  _parseQuestionBlock(block, subject) {
    const lines = block.split('\n').map(l => l.trim()).filter(l => l);
    if (lines.length === 0) return null;

    // 解析标题行
    const titleLine = lines[0];
    const titleMatch = titleLine.match(/^###\s+\d+\.\s*[（(]([^）)]+)[）)]\s*(.*)/);
    if (!titleMatch) return null;

    const qTypeRaw = titleMatch[1];
    const titleRest = titleMatch[2] || '';

    // 判断题型
    let qType = '简答题';
    if (/单选/.test(qTypeRaw)) qType = '单选题';
    else if (/多选/.test(qTypeRaw)) qType = '多选题';
    else if (/判断/.test(qTypeRaw)) qType = '判断题';
    else if (/填空/.test(qTypeRaw)) qType = '填空题';
    else if (/程序/.test(qTypeRaw)) qType = '程序题';
    else if (/简答/.test(qTypeRaw)) qType = '简答题';

    // 提取题目内容（合并标题和后续文本直到选项或答案）
    let questionText = titleRest;
    let i = 1;
    const optionLines = [];
    let answerText = '';
    let explanation = '';
    let inAnswer = false;
    let inExplanation = false;
    let answerCollect = [];

    for (; i < lines.length; i++) {
      const line = lines[i];
      if (!line) continue;

      // 选项行
      const optMatch = line.match(/^-\s*([A-G])[\.\s、]+(.+)/);
      if (optMatch) {
        optionLines.push({label: optMatch[1], text: optMatch[2]});
        continue;
      }

      // 答案行（多格式）
      if (/\*正确答案[:：]\*/.test(line)) {
        inAnswer = true;
        const ansPart = line.replace(/^.*\*正确答案[:：]\*\s*/, '');
        if (ansPart) answerCollect.push(ansPart);
        continue;
      }
      if (/\*我的答案[:：]\*/.test(line)) {
        // 跳过"我的答案"行
        continue;
      }
      if (/\*答案解析[:：]\*/.test(line)) {
        inAnswer = false;
        inExplanation = true;
        const expPart = line.replace(/^.*\*答案解析[:：]\*\s*/, '');
        if (expPart) explanation += expPart;
        continue;
      }

      // 收集答案内容
      if (inAnswer) {
        if (/^\[.*AI讲解.*\]/.test(line) || /^\d+\.?\d*\s*分/.test(line) || /^知识点[:：]/.test(line) || line.startsWith('[*AI')) {
          inAnswer = false;
        } else {
          answerCollect.push(line);
        }
        continue;
      }

      if (inExplanation) {
        if (/^\[.*AI讲解.*\]/.test(line) || /^\d+\.?\d*\s*分/.test(line) || /^知识点[:：]/.test(line) || line.startsWith('[*AI')) {
          inExplanation = false;
        } else {
          explanation += line + '\n';
        }
        continue;
      }

      // 匹配行内答案（Scala/Spark格式）
      const inlineAns = line.match(/\*正确答案[:：]\*([^*]+)/);
      if (inlineAns) {
        answerCollect.push(inlineAns[1]);
        continue;
      }

      // 未分类的内容加到题目文本
      if (!inAnswer && !inExplanation && !/^\*.*\*$/.test(line) && !/^\[/.test(line) && !line.startsWith('知识点') && !/^\d+\.?\d*\s*分/.test(line)) {
        if (questionText.length < 500 && !/^\(?\d+\)/.test(line)) {
          questionText += ' ' + line;
        }
      }
    }

    answerText = answerCollect.join(' ').trim();

    // 清理题目文本
    questionText = questionText.replace(/\*\*.*?\*\*/g, '').replace(/\!\[img\].*?\)/g, '[图]').replace(/\s+/g, ' ').trim();

    return {
      id: 'Q' + Date.now() + '_' + Math.random().toString(36).slice(2, 8),
      subject,
      type: qType,
      title: questionText || titleRest,
      options: optionLines,
      answer: answerText || '见解析',
      explanation: explanation.trim(),
      level: 'B', // 默认，后续assignTopics会更新
      topic: '',
      correctCount: 0,
      wrongCount: 0,
      lastPractice: null,
      nextReview: null,
      reviewStage: 0,
    };
  }

  _deduplicate(questions) {
    const seen = new Set();
    const result = [];
    for (const q of questions) {
      const key = q.title.substring(0, 80);
      if (!seen.has(key)) { seen.add(key); result.push(q); }
    }
    return result;
  }

  _assignTopics() {
    for (const q of this.questions) {
      const topics = KNOWLEDGE_BASE[q.subject]?.topics || [];
      let bestMatch = null;
      let bestScore = 0;
      for (const t of topics) {
        let score = 0;
        for (const kw of t.keywords) {
          if (q.title.includes(kw) || q.answer.includes(kw)) score++;
        }
        if (score > bestScore) { bestScore = score; bestMatch = t; }
      }
      if (bestMatch && bestScore >= 1 && q.topic !== '重点') {
        q.topic = bestMatch.name;
        q.level = bestMatch.level;
      }
    }
  }

  // 补充解析：**N. 题目** 格式（文件后半部分）
  _parseSupplementary(lines) {
    const questions = [];
    // 找到补充内容区域：第一个 **N. 格式出现的位置
    let startLine = 0;
    for (let i = 0; i < lines.length; i++) {
      if (/^\*\*\d+\.\s/.test(lines[i].trim()) && i > 5000) { startLine = i; break; }
    }
    if (startLine === 0) return questions;

    const supText = lines.slice(startLine).join('\n');
    // 按 **N. 题目** 切分
    const blocks = supText.split(/\n(?=\*\*\d+\.\s)/);
    for (const block of blocks) {
      const q = this._parseSupBlock(block);
      if (q) questions.push(q);
    }
    return questions;
  }

  _parseSupBlock(block) {
    const lines = block.split('\n').map(l => l.trim());
    if (lines.length === 0) return null;

    // 解析标题行: **N. 题目内容**
    const titleMatch = lines[0].match(/^\*\*(\d+)\.\s*(.+?)\*\*\s*$/);
    if (!titleMatch && !lines[0].match(/^\*\*\d+\./)) return null;

    let title = '';
    if (titleMatch) {
      title = titleMatch[2].replace(/\*\*/g, '').trim();
    } else {
      title = lines[0].replace(/^\*\*\d+\.\s*/, '').replace(/\*\*$/, '').trim();
    }

    // 找题目正文（可能在下一行）
    let fullTitle = title;
    let i = 1;
    while (i < lines.length && lines[i] && !lines[i].startsWith('✅') && !lines[i].startsWith('*') && !lines[i].startsWith('---') && !lines[i].match(/^[A-G][\.\s、]/)) {
      if (lines[i] && lines[i].length > 0 && !lines[i].startsWith('-') && lines[i] !== '**') {
        fullTitle += ' ' + lines[i];
      }
      i++;
    }
    fullTitle = fullTitle.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
    if (!fullTitle || fullTitle.length < 3) return null;

    // 找选项（如果有）
    const options = [];
    let answer = '';
    let explanation = '';
    let inExplanation = false;

    for (let j = 1; j < lines.length; j++) {
      const line = lines[j];
      if (!line) continue;

      // ✅ **A. xxx** 或 ✅ **答案：A xxx**
      if (line.startsWith('✅')) {
        const ansMatch = line.match(/✅\s*\*\*答案[：:]\s*(.+?)\*\*/);
        const optMatch = line.match(/✅\s*\*\*([A-G])[\.\s、](.+?)\*\*/);
        const simpleMatch = line.match(/✅\s*\*\*答案[：:]\s*([A-G])\*\*/);
        if (ansMatch) {
          answer = ansMatch[1].replace(/\*\*/g, '').trim();
        } else if (optMatch) {
          answer = optMatch[1] + ': ' + optMatch[2].replace(/\*\*/g, '').trim();
          options.push({label: optMatch[1], text: optMatch[2].replace(/\*\*/g, '').trim()});
        } else if (simpleMatch) {
          answer = simpleMatch[1];
        } else {
          answer = line.replace('✅', '').replace(/\*\*/g, '').trim();
        }
        continue;
      }

      // 解析行
      if (/^[*_]解析[:：]/.test(line) || line.startsWith('*解析')) {
        inExplanation = true;
        explanation = line.replace(/^[*_]\s*解析[:：]\s*[*_]?\s*/, '').replace(/[*_]$/, '');
        continue;
      }
      if (inExplanation) {
        const cleanLine = line.replace(/^[-*]\s*/, '').replace(/^[*_]\s*/, '').replace(/\*\*/g, '');
        if (cleanLine && !cleanLine.startsWith('[') && !cleanLine.startsWith('---')) {
          explanation += ' ' + cleanLine;
        }
      }

      // 普通选项行 A xxx
      const optMatch = line.match(/^([A-G])[\.\s、](.+)/);
      if (optMatch && line.length < 100) {
        options.push({label: optMatch[1], text: optMatch[2].trim()});
      }

      // 行内答案
      const inlineAns = line.match(/[*_]答案[:：]\s*(.+?)[*_]/);
      if (inlineAns && !answer) answer = inlineAns[1].trim();

      if (line.startsWith('---')) break;
    }

    // 判断题型
    let qType = '单选题';
    if (options.length === 0 && answer.length < 3) qType = '填空题';
    if (options.length === 0 && answer.length > 10) qType = '简答题';
    if (/对|错|正确|错误/.test(answer) && answer.length <= 4) qType = '判断题';

    // 检测科目
    const subject = this._detectSupSubject(fullTitle, answer, explanation);

    return {
      id: 'Q' + Date.now() + '_' + Math.random().toString(36).slice(2, 8),
      subject,
      type: qType,
      title: fullTitle,
      options,
      answer: answer || '见解析',
      explanation: explanation.trim(),
      level: 'B',
      topic: '',
      correctCount: 0,
      wrongCount: 0,
      lastPractice: null,
      nextReview: null,
      reviewStage: 0,
    };
  }

  _detectSupSubject(title, answer, explanation) {
    const full = (title + ' ' + answer + ' ' + explanation).toLowerCase();
    if (/hdfs|namenode|datanode|yarn|resourcemanager|nodemanager|mapreduce|shuffle|hadoop|block.*mb|副本|机架|fsimage|edits|writable/i.test(full)) return 'Hadoop';
    if (/hbase|zookeeper|znode|hmaster|regionserver|rowkey|hbase-site|hbase\.cluster|myid|过半|4v|大数据.*特点|价值密度/i.test(full)) return 'HBase / ZooKeeper';
    if (/scala|arraybuffer|元组|tuple|val\s|var\s|def\s|不可变列表|不可变集合|隐式转换|模式匹配|rdd|spark|弹性分布式|惰性求值|standalone/i.test(full)) return 'Scala & Spark';
    if (/linux|shell|vi\s|vim|chmod|bash|权限|ls\s-|mkdir|useradd|userdel|grep|管道|重定向|tar\s|pid|kill|文件系统|目录|命令|bin|etc|home|进程|端口.*20.*21/i.test(full)) return 'Linux';
    if (/jsp|servlet|filter|mvc|web\.xml|javabean|jstl|tomcat|session|cookie|转发|重定向|jdbc|隐式对象|作用域|el表达式|include.*指令|page指令/i.test(full)) return 'Java Web';
    if (/html|css|javascript|web前端|前端|dom|盒模型|选择器|position|display|flex|表单|input|标签|浮动|float|响应式/i.test(full)) return 'Web前端';
    return 'Java Web';
  }
}

// ==================== 数据管理器 ====================
class DataManager {
  constructor() {
    this.questions = [];
    this.wrongBook = [];
    this.progress = {};
    this.reviewTasks = [];
    this.load();
  }

  load() {
    try {
      const dataVersion = localStorage.getItem('exam_data_version');
      // v2→v3 升级：保留旧进度，加载新题库
      let oldProgress = {};
      if (dataVersion === 'v2') {
        const oldQ = localStorage.getItem('exam_questions');
        if (oldQ) {
          try {
            const oldArr = JSON.parse(oldQ);
            oldArr.forEach(q => {
              if (q.lastPractice) oldProgress[q.title.substring(0, 60)] = {
                lastPractice: q.lastPractice, correctCount: q.correctCount||0, wrongCount: q.wrongCount||0,
                nextReview: q.nextReview, reviewStage: q.reviewStage||0
              };
            });
          } catch(e) {}
        }
      }
      // 保存旧错题本ID，版本升级后恢复
      let savedWrongBook = null;
      try { savedWrongBook = JSON.parse(localStorage.getItem('exam_wrongbook') || 'null'); } catch(e) {}
      if (dataVersion !== 'v6') {
        localStorage.removeItem('exam_questions');
        localStorage.removeItem('exam_wrongbook');
        localStorage.removeItem('exam_progress');
        localStorage.removeItem('exam_reviews');
        localStorage.setItem('exam_data_version', 'v6');
      }
      // 加载预解析数据（如果localStorage没有则自动导入）
      if (typeof PREPARSED_QUESTIONS !== 'undefined' && PREPARSED_QUESTIONS.length > 0) {
        let q = localStorage.getItem('exam_questions');
        if (!q || JSON.parse(q).length < PREPARSED_QUESTIONS.length * 0.8) {
          const withMeta = PREPARSED_QUESTIONS.map(q => {
            const old = oldProgress[q.title.substring(0, 60)];
            return {
              ...q, id: 'Q' + Math.random().toString(36).slice(2, 10),
              level: q.level || 'B', topic: q.topic || '',
              correctCount: old ? old.correctCount : (q.correctCount || 0),
              wrongCount: old ? old.wrongCount : (q.wrongCount || 0),
              lastPractice: old ? old.lastPractice : (q.lastPractice || null),
              nextReview: old ? old.nextReview : (q.nextReview || null),
              reviewStage: old ? old.reviewStage : (q.reviewStage || 0)
            };
          });
          // 分配知识点标签
          this.questions = withMeta;
          for (const qq of this.questions) {
            const topics = KNOWLEDGE_BASE[qq.subject]?.topics || [];
            let best = null, bestScore = 0;
            for (const t of topics) {
              let score = 0;
              for (const kw of t.keywords) { if (qq.title.includes(kw) || (qq.answer||'').includes(kw)) score++; }
              if (score > bestScore) { bestScore = score; best = t; }
            }
            if (best && bestScore >= 1 && qq.topic !== '重点') { qq.topic = best.name; qq.level = best.level; }
          }
          this.save();
          const restored = Object.keys(oldProgress).length;
          console.log('✅ 加载题库：' + withMeta.length + ' 题' + (restored ? '，恢复 ' + restored + ' 题进度' : ''));
        }
      }
      const q = localStorage.getItem('exam_questions');
      this.questions = q ? JSON.parse(q) : [];
      let w = localStorage.getItem('exam_wrongbook');
      this.wrongBook = w ? JSON.parse(w) : [];
      // 恢复旧错题本(跨版本保留)：用title匹配找到新题目替代旧记录
      if (savedWrongBook && savedWrongBook.length > 0 && this.wrongBook.length === 0) {
        const restored = [];
        for (const old of savedWrongBook) {
          const match = this.questions.find(nq => nq.title.substring(0, 60) === (old.title||'').substring(0, 60));
          if (match) restored.push({...match, wrongTime: old.wrongTime || Date.now(), retryCount: old.retryCount || 1});
        }
        if (restored.length > 0) {
          this.wrongBook = restored;
          this.save();
          console.log('📝 恢复错题本: ' + restored.length + ' 题');
        }
      }
      const p = localStorage.getItem('exam_progress');
      this.progress = p ? JSON.parse(p) : {};
      const r = localStorage.getItem('exam_reviews');
      this.reviewTasks = r ? JSON.parse(r) : [];
    } catch(e) { this.questions = []; this.wrongBook = []; this.progress = {}; this.reviewTasks = []; }
  }

  reloadFromPreparsed() {
    if (typeof PREPARSED_QUESTIONS === 'undefined' || !PREPARSED_QUESTIONS.length) return 0;
    // 保留已有刷题进度（按标题前60字符匹配）
    const oldMap = {};
    for (const q of this.questions) {
      if (q.lastPractice) {
        oldMap[q.title.substring(0, 60)] = {
          correctCount: q.correctCount || 0, wrongCount: q.wrongCount || 0,
          lastPractice: q.lastPractice, nextReview: q.nextReview, reviewStage: q.reviewStage || 0
        };
      }
    }
    const keptCount = Object.keys(oldMap).length;
    const withMeta = PREPARSED_QUESTIONS.map(q => {
      const key = q.title.substring(0, 60);
      const old = oldMap[key];
      return {
        ...q, id: 'Q' + Math.random().toString(36).slice(2, 10),
        level: 'B', topic: '',
        correctCount: old ? old.correctCount : 0,
        wrongCount: old ? old.wrongCount : 0,
        lastPractice: old ? old.lastPractice : null,
        nextReview: old ? old.nextReview : null,
        reviewStage: old ? old.reviewStage : 0
      };
    });
    // 分配知识点标签
    this.questions = withMeta;
    for (const q of this.questions) {
      const topics = KNOWLEDGE_BASE[q.subject]?.topics || [];
      let best = null, bestScore = 0;
      for (const t of topics) {
        let score = 0;
        for (const kw of t.keywords) { if (q.title.includes(kw) || q.answer.includes(kw)) score++; }
        if (score > bestScore) { bestScore = score; best = t; }
      }
      if (best && bestScore >= 1 && q.topic !== '重点') { q.topic = best.name; q.level = best.level; }
    }
    this.save();
    console.log('📦 题库加载：' + withMeta.length + ' 题，保留 ' + keptCount + ' 题进度');
    return withMeta.length;
  }

  save() {
    try {
      localStorage.setItem('exam_questions', JSON.stringify(this.questions));
      localStorage.setItem('exam_wrongbook', JSON.stringify(this.wrongBook));
      localStorage.setItem('exam_progress', JSON.stringify(this.progress));
      localStorage.setItem('exam_reviews', JSON.stringify(this.reviewTasks));
    } catch(e) {
      console.error('💾 保存数据失败：', e.message);
      // 尝试清理后重新保存
      try {
        // 精简数据后重试
        const slim = this.questions.map(q => ({
          id:q.id,subject:q.subject,type:q.type,title:q.title,options:q.options,answer:q.answer,
          explanation:q.explanation,level:q.level,topic:q.topic,
          correctCount:q.correctCount||0,wrongCount:q.wrongCount||0,lastPractice:q.lastPractice||null,
          nextReview:q.nextReview||null,reviewStage:q.reviewStage||0
        }));
        localStorage.setItem('exam_questions', JSON.stringify(slim));
        localStorage.setItem('exam_wrongbook', JSON.stringify(this.wrongBook));
        localStorage.setItem('exam_progress', JSON.stringify(this.progress));
        localStorage.setItem('exam_reviews', JSON.stringify(this.reviewTasks));
      } catch(e2) {
        console.error('💾 精简保存也失败：', e2.message);
      }
    }
  }

  importParsed(questions) {
    // 合并新旧题目
    const existingTitles = new Set(this.questions.map(q => q.title.substring(0, 60)));
    const newQs = questions.filter(q => !existingTitles.has(q.title.substring(0, 60)));
    this.questions = [...this.questions, ...newQs];
    this.save();
    return newQs.length;
  }

  setQuestions(questions) { this.questions = questions; this.save(); }

  getQuestions(filter = {}) {
    let qs = [...this.questions];
    if (filter.subject && filter.subject !== 'all') qs = qs.filter(q => q.subject === filter.subject);
    if (filter.type && filter.type !== 'all') qs = qs.filter(q => q.type === filter.type);
    if (filter.level && filter.level !== 'all') qs = qs.filter(q => q.level === filter.level);
    if (filter.topic) qs = qs.filter(q => q.topic === filter.topic);
    if (filter.ids) qs = qs.filter(q => filter.ids.includes(q.id));
    return qs;
  }

  getStats() {
    const total = this.questions.length;
    const practiced = this.questions.filter(q => q.lastPractice);
    const done = practiced.length;
    const wrong = this.wrongBook.length;
    const rightRate = done > 0 ? Math.round((1 - wrong / Math.max(done, 1)) * 100) : 0;
    const bySubject = {};
    for (const s of SUBJECTS) {
      const sqs = this.questions.filter(q => q.subject === s.id);
      const sd = sqs.filter(q => q.lastPractice).length;
      bySubject[s.id] = {total: sqs.length, done: sd, pct: sqs.length > 0 ? Math.round(sd / sqs.length * 100) : 0};
    }
    return {total, done, wrong, rightRate, bySubject};
  }

  addWrong(q) {
    if (!this.wrongBook.find(w => w.id === q.id)) {
      this.wrongBook.push({...q, wrongTime: Date.now(), retryCount: 0});
    } else {
      const w = this.wrongBook.find(w => w.id === q.id);
      w.wrongTime = Date.now();
      w.retryCount = (w.retryCount || 0) + 1;
    }
    q.wrongCount = (q.wrongCount || 0) + 1;
    q.lastPractice = Date.now();
    this.save();
  }

  removeWrong(qid) {
    this.wrongBook = this.wrongBook.filter(w => w.id !== qid);
    this.save();
  }

  clearWrongBook() { this.wrongBook = []; this.save(); }

  markCorrect(q) {
    q.correctCount = (q.correctCount || 0) + 1;
    q.lastPractice = Date.now();
    // 记忆曲线：安排下次复习
    const stages = [20 * 60 * 1000, 60 * 60 * 1000, 24 * 60 * 60 * 1000, 3 * 24 * 60 * 60 * 1000, 7 * 24 * 60 * 60 * 1000];
    q.reviewStage = Math.min((q.reviewStage || 0) + 1, stages.length - 1);
    q.nextReview = Date.now() + stages[q.reviewStage];
    // 如果之前有复习任务，标记完成
    this.reviewTasks = this.reviewTasks.filter(t => t.qid !== q.id);
    if (q.reviewStage < stages.length - 1) {
      this.reviewTasks.push({qid: q.id, title: q.title.substring(0, 80), subject: q.subject, dueAt: q.nextReview, stage: q.reviewStage});
    }
    this.save();
  }

  getDueReviews() {
    const now = Date.now();
    return this.reviewTasks.filter(t => t.dueAt <= now).sort((a, b) => a.dueAt - b.dueAt);
  }

  updateProgress(subject, topic, correct) {
    const key = `${subject}::${topic}`;
    if (!this.progress[key]) this.progress[key] = {total: 0, correct: 0};
    this.progress[key].total++;
    if (correct) this.progress[key].correct++;
    this.save();
  }
}

// ==================== 五科零基础教程数据 ====================
const TUTORIALS = [
  {
    id:'javaweb', icon:'☕', title:'Java Web (JSP/Servlet)', desc:'网站后端开发入门，12章课件全覆盖',
    sections:[
      {t:'先搞懂：Java Web 是什么？',c:[
        {p:'你平时打开浏览器访问淘宝、百度，背后就是 Web 技术。<b>Java Web = 用 Java 语言写网站后端</b>。核心任务：用户在浏览器点按钮、填表单 → 服务器收到请求 → Java 程序处理 → 返回网页给用户。'}
      ]},
      {t:'第1章 — B/S vs C/S（必考简答）',c:[
        {tbl:['','C/S','B/S'],rows:[['全称','Client/Server 客户端/服务器','Browser/Server 浏览器/服务器'],['例子','微信App、QQ、LOL','淘宝网、百度'],['特点','需安装客户端，速度快，升级麻烦','不用安装，浏览器打开就用，升级只需更新服务器']]},
        {tip:'你学的 Java Web 就是做 B/S 架构的网站。'}
      ]},
      {t:'第2章 — JSP 简介：能写Java代码的HTML',c:[
        {p:'普通 HTML 是静态的（内容写死），JSP 可以动态生成内容（比如显示当前用户名）。'},
        {pre:`普通HTML：<h1>欢迎</h1>                → 永远显示"欢迎"
JSP：     <h1>欢迎，<%= 用户名 %></h1>  → 显示"欢迎，张三"`},
        {h:'JSP 怎么跑起来的？（必考）'},{p:'<b>第一次请求：</b>.jsp → 自动翻译成 .java → 编译成 .class → 执行响应<br><b>再次请求：</b>直接用 .class 执行（快！）'},
        {tip:'四步口诀：<b>请求 → 翻译 → 编译 → 响应</b>'}
      ]},
      {t:'第3章 — JSP 脚本元素和指令',c:[
        {h:'三种写 Java 的方式'},{tbl:['标签','语法','用途'],rows:[['脚本片段','&lt;% 代码 %&gt;','写 Java 逻辑'],['表达式','&lt;%= 变量 %&gt;','输出到页面'],['声明','&lt;%! 代码 %&gt;','定义方法/变量']]},
        {h:'三种指令（必考）'},{tbl:['指令','写法','作用'],rows:[['page','&lt;%@ page import="java.util.*" %&gt;','导包、设编码'],['include','&lt;%@ include file="头.jsp" %&gt;','编译时合并另一个页面源码'],['taglib','&lt;%@ taglib prefix="c" uri="..." %&gt;','引入标签库']]},
        {h:'include 指令 vs include 动作（高频考点）'},{tbl:['','指令 &lt;%@ include %&gt;','动作 &lt;jsp:include&gt;'],rows:[['时机','编译时合并源码','运行时合并 HTML 结果'],['被包含页修改后','需重新编译','直接生效'],['传参数','不支持','支持']]},
        {trap:'指令=编译时，动作=运行时。关键词：编译时vs运行时！'}
      ]},
      {t:'第4章 — JSP 9大隐式对象（必考）',c:[
        {p:'隐式对象 = 不用 new 就能直接用的对象。'},{tbl:['对象','类型','通俗理解'],rows:[['request','HttpServletRequest','装"用户请求"的箱子'],['response','HttpServletResponse','装"服务器回应"的箱子'],['session','HttpSession','一个用户的"会话"（购物车）'],['application','ServletContext','全局"公告栏"'],['out','JspWriter','往页面写内容的"笔"'],['config','ServletConfig','当前页面的"配置单"'],['page','Object','当前页面本身'],['pageContext','PageContext','页面上下文'],['exception','Throwable','异常对象（仅error页面）']]},
        {h:'四大作用域（从小到大）'},{p:'<b>page</b>（本页） &lt; <b>request</b>（一次请求） &lt; <b>session</b>（一次会话） &lt; <b>application</b>（整个网站）'},
        {tip:'口诀：<b>页请会应</b> — page → request → session → application'}
      ]},
      {t:'第5章 — JSP 动作标签（必考程序题）',c:[
        {h:'什么是 JavaBean？'},{p:'就是一个<b>普通的 Java 类</b>：属性私有 + getter/setter公开 + 必须有无参构造方法。'},
        {h:'三个动作标签（程序题必写！）'},{pre:`<!-- 创建User对象，取名user，放到session里 -->
<jsp:useBean id="user" class="com.xxx.User" scope="session"/>

<!-- 给name属性赋值"张三" -->
<jsp:setProperty name="user" property="name" value="张三"/>

<!-- 取出name属性显示 -->
<jsp:getProperty name="user" property="name"/>`},
      ]},
      {t:'第6章 — EL 表达式：更简单的取值',c:[
        {p:'<b>EL = Expression Language</b>，用 ${} 代替复杂 Java 代码。会自动从 page→request→session→application 依次找。'},
        {tbl:['想做的','旧写法','EL写法'],rows:[['取session中的用户名','&lt;%=session.getAttribute("name")%&gt;','${name}'],['取JavaBean属性','&lt;%=user.getName()%&gt;','${user.name}'],['取Map的值','&lt;%=map.get("key")%&gt;','${map.key}']]}
      ]},
      {t:'第7章 — JDBC：操作数据库四步走',c:[
        {pre:`① 加载驱动：Class.forName("com.mysql.jdbc.Driver")
② 获取连接：Connection conn = DriverManager.getConnection(url,user,pwd)
③ 执行SQL：Statement stmt = conn.createStatement()
④ 释放资源：关闭 ResultSet → Statement → Connection`},
        {trap:'关闭顺序：ResultSet 先关 → Statement → Connection 最后关！'}
      ]},
      {t:'第8章 — JSTL 标准标签库',c:[
        {p:'JSTL 让你不用在 JSP 里写 Java 代码。'},
        {pre:'<!-- 单条件判断（没有else！） -->\n<c:if test="${age > 18}">成年人</c:if>\n\n<!-- 多条件判断（类似 switch） -->\n<c:choose>\n  <c:when test="${score >= 90}">优秀</c:when>\n  <c:when test="${score >= 60}">及格</c:when>\n  <c:otherwise>不及格</c:otherwise>\n</c:choose>\n\n<!-- 循环 -->\n<c:forEach items="${list}" var="item">${item.name}</c:forEach>'},
        {trap:'c:if 只能做单分支，没有 else！多分支必须用 c:choose！'}
      ]},
      {t:'第9-10章 — Servlet 核心',c:[
        {h:'Servlet 是什么？'},{p:'<b>Servlet = 运行在服务器上的 Java 程序</b>，专门处理浏览器请求。JSP 本质就是 Servlet（最终被翻译成 Servlet 源码）。'},
        {h:'web.xml 配置（必会写）'},{pre:`<servlet>
  <servlet-name>myServlet</servlet-name>
  <servlet-class>com.xxx.MyServlet</servlet-class>
</servlet>
<servlet-mapping>
  <servlet-name>myServlet</servlet-name>
  <url-pattern>/hello</url-pattern>  ← 浏览器访问/hello就进这个Servlet
</servlet-mapping>`},
        {h:'Servlet 生命周期（必考）'},{p:'<b>init()</b>（创建时调1次） → <b>service()</b>（每次请求调） → <b>destroy()</b>（关闭时调）'},
        {h:'ServletConfig vs ServletContext（高频）'},{tbl:['','ServletConfig','ServletContext'],rows:[['范围','单个Servlet','整个Web应用'],['比喻','个人配置单','公司公告栏'],['获取','getServletConfig()','getServletContext()']]}
      ]},
      {t:'第11章 — Filter 过滤器（守门员）',c:[
        {p:'<b>Filter = 守门员</b>。所有请求先经过 Filter，Filter 说"放行"才能到 Servlet。用途：IP黑名单、统一设编码、权限检查。'},
        {pre:`public class MyFilter implements Filter {
    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) {
        String ip = req.getRemoteAddr();
        if ("192.168.70.88".equals(ip)) {
            // 拒绝：转发到error.jsp
            req.getRequestDispatcher("/error.jsp").forward(req, resp);
        } else {
            chain.doFilter(req, resp);  // 放行！
        }
    }
}`},
      ]},
      {t:'第12章 — MVC模式 + 代码大题模板',c:[
        {h:'MVC = 三层分工'},{p:'<b>Model（模型）</b>→ 管数据、业务逻辑(Dao类)<br><b>View（视图）</b>→ 管页面显示(JSP)<br><b>Controller（控制器）</b>→ 管调度(Servlet)'},
        {h:'登录MVC流程'},{p:'login.jsp填写 → LoginServlet(Controller)调用LoginDao(Model)验证 → 成功redirect到welcome.jsp / 失败forward回login.jsp'},
        {h:'代码模板（三道大题本质一样！）'},{pre:`// LoginServlet.java
String username = request.getParameter("username");
String password = request.getParameter("password");
if ("zhangsan".equals(username) && "111222".equals(password)) {
    response.sendRedirect("/welcome.jsp");  // 成功：重定向
} else {
    request.setAttribute("error", "用户名或密码错误");
    request.getRequestDispatcher("/login.jsp").forward(request,response);
}`},
        {h:'转发 vs 重定向'},{tbl:['','forward 转发','sendRedirect 重定向'],rows:[['URL','不变','变'],['请求次数','1次','2次（及以上）'],['共享request数据','✅ 可以','❌ 不能'],['跨域','❌ 不能','✅ 可以'],['速度','快','慢']]},
      ]},
      {t:'📌 补充：Tomcat 配置与部署',c:[
        {h:'Tomcat 是什么？'},{p:'Tomcat 是跑 JSP/Servlet 的<b>Web 容器</b>（服务器软件）。你写的 JSP 和 Servlet 都部署在 Tomcat 里运行。'},
        {h:'关键目录结构'},{tbl:['目录/文件','说明'],rows:[['webapps/','放你的Web项目的目录'],['work/','JSP编译后的.java和.class在这里'],['conf/server.xml','Tomcat主配置文件（端口在这里改）'],['conf/web.xml','全局web.xml（所有项目的默认配置）'],['bin/startup.sh(bat)','启动Tomcat'],['bin/shutdown.sh(bat)','关闭Tomcat']]},
        {h:'WEB-INF 目录（安全机制）'},{p:'WEB-INF 是项目的安全目录，<b>浏览器无法直接访问里面的文件</b>。通常把 JSP（视图）放在 WEB-INF 下，只能通过 Servlet 转发访问。'},
        {h:'默认端口'},{p:'Tomcat 默认端口是 <b>8080</b>。如果被占用，去 conf/server.xml 里修改 Connector 的 port 属性。'},
      ]},
      {t:'📌 补充：HTTP 协议基础',c:[
        {h:'GET vs POST（必考）'},{tbl:['','GET','POST'],rows:[['数据位置','URL后面（?key=value）','请求体中（不可见）'],['安全性','低（密码暴露在URL里）','高'],['数据量','小（URL长度限制）','大（无限制）'],['用途','查询、搜索','登录、上传、表单提交']]},
        {h:'常见 HTTP 状态码'},{tbl:['状态码','含义','说明'],rows:[['200','OK','请求成功'],['302','Found/重定向','response.sendRedirect触发的'],['404','Not Found','页面不存在'],['500','Internal Server Error','服务器内部错误（代码有bug）']]},
        {trap:'重定向的状态码是302，不是200！sendRedirect → 浏览器收到302 → 自动发第二次请求。'}
      ]},
      {t:'📌 补充：更多必考细节',c:[
        {h:'JavaBean 规范（完整版）'},{p:'①类必须是 public 的 ②属性必须 private ③提供 public 的 getter/setter 方法 ④<b>boolean类型的getter用 isXxx() 而非 getXxx()</b> ⑤必须有无参构造方法'},
        {h:'JSP 页面指令 page 的常用属性'},{tbl:['属性','作用','例子'],rows:[['import','导入Java包','import="java.util.*"'],['pageEncoding','设置页面编码','pageEncoding="UTF-8"'],['contentType','设置响应类型','contentType="text/html;charset=UTF-8"'],['errorPage','指定错误页面','errorPage="error.jsp"'],['isErrorPage','声明当前页是错误页','isErrorPage="true"（才能用exception对象）']]},
        {h:'编码问题（高频）'},{p:'Java Web 最常见的乱码来源是编码不一致。三处统一设UTF-8：①JSP的pageEncoding="UTF-8" ②Servlet里request.setCharacterEncoding("UTF-8") ③response.setContentType("text/html;charset=UTF-8")'},
        {h:'@WebServlet 注解（替代 web.xml）'},{pre:'@WebServlet("/hello")\npublic class MyServlet extends HttpServlet {...}\n// 效果等同于 web.xml 中的 <servlet>+<servlet-mapping>'},
      ]},
    ]
  },
  {
    id:'linux', icon:'🐧', title:'Linux 操作系统', desc:'服务器必备技能，从零学命令行',
    sections:[
      {t:'先搞懂：Linux 是什么？',c:[
        {p:'<b>Linux = 一个免费开源的操作系统</b>，服务器几乎都用它。和 Windows 最大的区别：<b>主要靠敲命令操作</b>，没有图形界面。'},
        {tbl:['','Windows','Linux'],rows:[['价格','付费','免费开源'],['操作方式','鼠标为主','键盘命令为主'],['文件路径','C:\\Users\\xxx','/home/xxx'],['文件系统','多个盘符(C: D:)','单一根目录 /']]},
        {pre:`[user@localhost ~]$    ← 普通用户（$）
[root@localhost ~]#      ← root超级用户（#）`},
      ]},
      {t:'第03-04讲 — 文件/目录命令（70%的考题！）',c:[
        {tbl:['命令','作用','常用写法'],rows:[['ls','列出目录','ls -a (含隐藏) ls -l (详细信息)'],['cd','切换目录','cd /home 去/home, cd ~ 回家目录'],['pwd','显示当前位置','输出如 /home/user'],['mkdir','创建目录','mkdir -p a/b/c (递归创建)'],['touch','创建空文件','touch test.txt'],['cp','复制文件','cp a.txt b.txt'],['mv','移动/改名','mv old.txt new.txt (同目录=改名)'],['rm','删除','rm file.txt, rm -r dir/ (递归删)'],['cat','查看全部','cat f1 > f2 (相当于复制)'],['more/less','分页查看','less可上下翻, more只能往下'],['head/tail','看头/尾N行','head -5, tail -f (实时跟踪)'],['file','判断文件类型','file unknown.bin']]},
        {tip:'cat f1 > f2 = 复制文件。mv 同目录下操作 = 重命名。tail -f = 实时监控日志。'}
      ]},
      {t:'第05-06讲 — vi/vim 编辑器（必考）',c:[
        {p:'<b>三种模式</b>：命令模式（默认）↔ 插入模式（按i/a/o）↔ 末行模式（按:）'},
        {tbl:['操作','命令','说明'],rows:[['插入','i / a / o','光标前/后/下一行(o最常考!)'],['退出插入','Esc','回到命令模式'],['删行','dd','命令模式下'],['复制行','yy','命令模式下'],['粘贴','p','命令模式下'],['跳转','nG','如10G跳到第10行'],['保存退出',':wq','末行模式'],['不保存退出',':q!','加!强制'],['重复操作','.','命令模式下'],['撤销','u','命令模式下']]},
        {tip:'口诀：<b>i进Esc出，dd删yy拷，:wq存:q!不存，o下插行</b>'}
      ]},
      {t:'第07讲 — grep搜索 + 管道重定向',c:[
        {pre:`# grep 搜索
grep "关键词" 文件名       # 查找包含关键词的行
grep -i "hello" file.txt  # 不区分大小写

# 管道 | ：把前一个命令的输出给后一个
ls -l | grep "txt"        # ls结果中搜"txt"

# 重定向 > ：覆盖写入
echo "hello" > file.txt

# 追加 >> ：追加到末尾
echo "world" >> file.txt

# 错误合并 2>&1
ls /nope 2>&1`},
      ]},
      {t:'第08讲 — 压缩/解压 tar（必考）',c:[
        {pre:`# 压缩
tar -zcvf 包名.tar.gz 源文件/

# 解压
tar -xzvf 包名.tar.gz

# 解压到指定目录
tar -xzvf 包.tar.gz -C /目标/

# 查看内容（不解压）
tar -t 包.tar.gz`},
        {tip:'记法：<b>z</b>=gzip <b>c</b>=创建 <b>x</b>=解压 <b>v</b>=显示过程 <b>f</b>=文件名 <b>t</b>=列表 <b>-C</b>=指定目录'}
      ]},
      {t:'第09-10讲 — Shell 编程基础',c:[
        {h:'第一个脚本'},{pre:`#!/bin/bash          # 必须第一行！
echo "Hello World!"`},
        {h:'变量（等号两边绝不能有空格！）'},{pre:`name="张三"
echo $name         # 输出张三
today=$(date)      # 命令替换
files=\`ls\`        # 旧式写法`},
        {h:'特殊变量'},{tbl:['变量','含义'],rows:[['$#','参数个数'],['$0','脚本名'],['$1 $2 ...','第1、2...个参数']]},
        {h:'if 判断'},{pre:`if [ $a -gt 10 ]; then
    echo "大于10"
elif [ $a -eq 10 ]; then
    echo "等于10"
else
    echo "小于10"
fi`},
        {h:'for/while 循环'},{pre:`for i in 1 2 3 4 5; do echo $i; done
while [ $i -lt 10 ]; do echo $i; i=$((i+1)); done`},
        {h:'常用判断'},{tbl:['写法','含义'],rows:[['-eq','等于'],['-ne','不等于'],['-gt','大于'],['-lt','小于'],['-f file','是否为普通文件'],['-d file','是否为目录'],['-e file','是否存在']]},
      ]},
      {t:'第12讲 — 权限管理 chmod（超级重点）',c:[
        {h:'看懂 ls -l 输出'},{pre:`-rwxr--r--  1 user group 1024 Jan 1 file.txt
└─┬─┘└─┬─┘└─┬─┘
  │    │    └── 其他人的权限 r-- (只读)
  │    └─────── 所属组的权限 r-- (只读)
  └──────────── 所有者的权限 rwx (读写执行)`},
        {h:'数字权限速算'},{tbl:['数字','组成','权限'],rows:[['7','4+2+1','rwx'],['6','4+2+0','rw-'],['5','4+0+1','r-x'],['4','4+0+0','r--']]},
        {pre:`chmod 755 file.txt  # rwx r-x r-x（最常用）
chmod 764 file.txt  # rwx rw- r--（考题高频）
chmod u+x file.txt  # 所有者加执行(u=user,g=group,o=other,a=all)`},
        {trap:'usermod 可以改用户属性，<b>但不能删除账户</b>！删除用 userdel -r。'}
      ]},
      {t:'B级补充 — 软硬链接 + 进程管理',c:[
        {tbl:['','软链接 ln -s','硬链接 ln'],rows:[['比喻','快捷方式','同一个文件两个名字'],['删原文件后','失效','仍然可用'],['跨文件系统','✅','❌'],['共享i节点','❌','✅']]},
        {pre:'# 进程管理\nps -aux          # 查看所有进程\nkill PID         # 终止进程\nkillall 进程名    # 终止所有同名进程\ntop              # 实时监控'},
      ]},
      {t:'📌 补充：Linux 目录结构详解',c:[
        {h:'FHS 标准目录'},{tbl:['目录','全称','存放内容'],rows:[['/bin','Binaries','基本命令（ls, cp, mv等）'],['/sbin','System Binaries','系统管理命令（root用）'],['/etc','Etcetera','配置文件（网络、用户、服务）'],['/home','Home','普通用户家目录'],['/root','Root','超级用户家目录'],['/boot','Boot','启动文件（内核、grub）'],['/dev','Devices','设备文件（硬盘、U盘）'],['/tmp','Temporary','临时文件（重启清空）'],['/var','Variable','日志、缓存等变动数据'],['/usr','Unix System Resources','用户程序、库文件'],['/opt','Optional','第三方软件安装目录']]},
        {trap:'/bin → 基本命令，/sbin → 系统管理命令，/usr/bin → 用户程序。别搞混！'}
      ]},
      {t:'📌 补充：Shell 编程进阶',c:[
        {h:'环境变量'},{pre:'export PATH=$PATH:/new/path  # 临时设环境变量，写到~/.bashrc永久生效\nenv                          # 查看所有环境变量\necho $HOME                   # 查看家目录\necho $PATH                   # 查看命令搜索路径'},
        {h:'数组'},{pre:'declare -a arr           # 声明数组\narr=(a b c d)            # 赋值\necho ${arr[0]}           # 访问第一个元素\necho ${#arr[@]}          # 数组长度'},
        {h:'函数'},{pre:'myfunc() {\n  echo "参数1: $1, 参数2: $2"\n  return 0  # 返回值\n}\nmyfunc hello world   # 调用'},
        {h:'数值运算 vs 字符串比较'},{tbl:['','数值','字符串'],rows:[['等于','-eq','='],['不等于','-ne','!='],['大于','-gt','>'],['小于','-lt','<'],['大于等于','-ge',''],['小于等于','-le',''],['使用括号','[ $a -gt 10 ]','[ "$a" = "hello" ]（注意要加双引号！）']]},
        {trap:'数值比较用 -gt -lt -eq -ne，字符串比较用 = 和 !=。混用就出错！'}
      ]},
      {t:'📌 补充：网络与系统管理',c:[
        {h:'常用网络命令'},{pre:'ping 192.168.1.1        # 测试网络连通\nifconfig / ip addr         # 查看IP地址\nnetstat -tlnp              # 查看监听端口\nssh user@host              # 远程登录'},
        {h:'关机/重启'},{pre:'shutdown -h now          # 立即关机\nshutdown -h +30           # 30分钟后关机\nshutdown -h 12:30         # 12:30关机\nshutdown -c               # 取消定时关机\nshutdown -r now           # 立即重启\nhalt                      # 立即停止（等价关机）\nreboot                    # 重启'},
        {h:'FTP 端口（必记）'},{p:'FTP 使用两个端口：<b>20</b>（数据传输）和 <b>21</b>（控制连接）。'},
      ]},
    ]
  },
  {
    id:'hadoop', icon:'🐘', title:'Hadoop 大数据技术', desc:'分布式存储与计算，HDFS+YARN+MapReduce',
    sections:[
      {t:'先搞懂：Hadoop 是什么？',c:[
        {p:'如果 1TB 的大文件一台电脑存不下、处理不了怎么办？<b>用多台普通电脑组成集群，一起存、一起算。Hadoop 就干这个。</b>'},
        {p:'三大核心组件：<b>HDFS</b>（分布式存储） + <b>YARN</b>（资源调度） + <b>MapReduce</b>（分布式计算）'},
        {h:'大数据 4V 特点'},{tbl:['V','含义','说明'],rows:[['Volume','大量','TB→PB→ZB'],['Velocity','高速','实时产生实时处理'],['Variety','多样','文字/图片/视频/日志'],['Value','价值密度低','大海捞针！不是高！']]},
        {trap:'考试陷阱：价值密度是<b>低</b>不是高！大量数据里只有少量有价值。'},
        {trap:'不属于 Hadoop 生态的：Spring、Java（它们是一般开发框架，不是大数据组件）'}
      ]},
      {t:'第3讲 — HDFS 分布式文件系统',c:[
        {h:'三大角色'},{tbl:['角色','职能','一句话'],rows:[['NameNode','管理元数据(文件在哪、切成几块)','大总管，不存数据'],['DataNode','存实际数据块','小兵，N个'],['SecondaryNameNode','定期合并fsimage和edits日志','秘书，不是热备！']]},
        {trap:'NameNode 存的是元数据，<b>不存实际数据</b>！DataNode才存数据！'},
        {h:'Block 数据块'},{tbl:['参数','值'],rows:[['默认大小','128MB（2.x）'],['默认副本数','3'],['500MB分几块','4块（128×3+116×1）']]},
        {h:'副本放置策略'},{p:'第1个副本→客户端所在节点 | 第2个→不同机架 | 第3个→同机架不同节点。这叫<b>机架感知</b>。'},
        {h:'为什么不适合小文件？（简答高频）'},{p:'①每个文件一条元数据，小文件多NameNode内存爆掉<br>②每个至少占一个Block，浪费空间<br>③一个文件一个Map任务，任务开销>计算开销<br><b>解决：</b>合并/SequenceFile/HBase'},
      ]},
      {t:'第4讲 — HDFS 命令（必考）',c:[
        {pre:`hdfs dfs -mkdir -p /user/data/input     # 建多级目录
hdfs dfs -put local.txt /user/data/         # 上传
hdfs dfs -get /user/data/f.txt ./           # 下载
hdfs dfs -ls -R /user/                      # 递归列出
hdfs dfs -cat /user/data/f.txt              # 查看
hdfs dfs -rm -r /user/data/                 # 递归删除
hdfs dfs -getmerge /user/data/ merged.txt   # 合并下载
hdfs dfs -moveFromLocal f.txt /user/data/   # 上传后删本地
hdfs namenode -format                       # 格式化NameNode`},
      ]},
      {t:'第5-9讲 — MapReduce 分布式计算',c:[
        {h:'核心流程（必考简答）'},{p:'<b>Input → Split → Map → Shuffle → Reduce → Output</b>'},
        {tbl:['阶段','做什么','关键点'],rows:[['Input','读入原始数据','来自HDFS'],['Split','把文件切成片','1个Split=1个Map任务'],['Map','逐行处理','输入key=偏移量, value=行内容'],['Shuffle','排序、分组、传输','最关键环节！'],['Reduce','汇总计算','默认数量=1'],['Output','写结果','写回HDFS']]},
        {h:'WordCount 示例'},{p:'输入"hello world hello hadoop" → Map分拆 → Shuffle分组：hadoop→[1], hello→[1,1], world→[1] → Reduce求和 → hadoop:1, hello:2, world:1'},
      ]},
      {t:'YARN 架构（第6-7讲）',c:[
        {h:'YARN = Yet Another Resource Negotiator'},{tbl:['角色','职责'],rows:[['ResourceManager(RM)','主节点，全局资源调度(大老板)'],['NodeManager(NM)','管理单节点资源(每台机器的管理员)'],['ApplicationMaster(AM)','为一个应用申请资源(项目经理)'],['Container','封装CPU+Memory的最小单位']]},
        {h:'HDFS HA 和 Federation'},{p:'<b>HA：</b>Active+Standby双NameNode，ZK监控自动切换。<br><b>Federation：</b>多个NameNode各管一部分目录，解决内存瓶颈。'},
      ]},
      {t:'📌 补充：HDFS 读写数据流程（简答高频）',c:[
        {h:'写数据流程（7步）'},{p:'①客户端调用create()请求NameNode创建文件<br>②NameNode检查权限和路径 → 创建元数据记录 → 返回DataNode列表<br>③客户端向第一个DataNode写数据<br>④DataNode之间形成<b>Pipeline（管道）</b>依次传输副本<br>⑤每个DataNode写完返回ack确认<br>⑥所有副本写完 → 客户端通知NameNode关闭文件<br>⑦NameNode更新元数据'},
        {h:'读数据流程（4步）'},{p:'①客户端调用open()请求NameNode读取文件<br>②NameNode返回文件所有Block所在的DataNode列表（按距离排序）<br>③客户端选择最近的DataNode读取每个Block<br>④读完所有Block → 客户端拼接还原文件'},
        {tip:'写=NameNode分配DataNode→Pipeline管道传副本。读=NameNode给位置→就近读。'}
      ]},
      {t:'📌 补充：Hadoop 生态圈 + 配置文件',c:[
        {h:'Hadoop 生态系统（哪些是/不是Hadoop组件？）'},{tbl:['组件','类别','一句话'],rows:[['HDFS','✔ 存储','分布式文件系统'],['YARN','✔ 资源','资源管理与调度'],['MapReduce','✔ 计算','分布式计算框架'],['Hive','✔ 数据仓库','SQL转MapReduce'],['HBase','✔ 数据库','HDFS上的NoSQL'],['Spark','✔ 计算','内存计算引擎（不是Hadoop核心但常一起用）'],['ZooKeeper','✔ 协调','分布式协调服务'],['Flume','✔ 采集','日志采集'],['Sqoop','✔ 传输','Hadoop与RDBMS数据迁移'],['Kafka','✔ 消息','消息队列（不是Hadoop但常一起用）'],['Spring','✘','Java开发框架，与大数据无关']]},
        {h:'四大配置文件'},{tbl:['文件','配置内容','示例'],rows:[['hadoop-env.sh','JAVA_HOME','export JAVA_HOME=/usr/java/jdk1.8'],['core-site.xml','HDFS入口地址','fs.defaultFS=hdfs://namenode:9000'],['hdfs-site.xml','HDFS参数','dfs.replication=3, dfs.blocksize=128m'],['yarn-site.xml','YARN参数','yarn.resourcemanager.hostname=master']]},
        {h:'SSH 免密登录'},{p:'集群各节点之间频繁通信需要SSH。配免密登录避免每次输密码：<b>ssh-keygen 生成密钥 → ssh-copy-id 复制到目标机</b>。'},
      ]},
      {t:'📌 补充：MapReduce 编程模型深入',c:[
        {h:'核心类与接口'},{tbl:['类/接口','作用'],rows:[['Mapper<KEYIN,VALUEIN,KEYOUT,VALUEOUT>','Map阶段：逐行处理'],['Reducer<KEYIN,VALUEIN,KEYOUT,VALUEOUT>','Reduce阶段：汇总处理'],['Job','作业配置（setMapperClass, setReducerClass等）'],['Partitioner','决定Map输出发到哪个Reducer'],['Writable','序列化接口（代替Java Serializable）'],['WritableComparable','序列化+排序接口']]},
        {h:'数据类型对应'},{tbl:['Java类型','Hadoop Writable类型'],rows:[['int','IntWritable'],['long','LongWritable'],['double','DoubleWritable'],['String','Text'],['null','NullWritable']]},
        {h:'MapReduce 默认值'},{p:'默认输入格式：<b>TextInputFormat</b>（按行读取，key=字节偏移量LongWritable，value=行内容Text）。默认Reduce数量：<b>1</b>。Map并行度 = <b>输入分片(Split)数量</b>，默认一个Split=一个Block=128MB。'},
        {h:'Shuffle 阶段详解（最关键的中间环节）'},{p:'<b>Map端：</b>输出→环形缓冲区(100MB)→到达阈值(80%)→溢写(Spill)→分区(Partition)→排序(Sort)→合并(Combiner可选)<br><b>Reduce端：</b>从Map端拉取数据→合并→排序→分组→传给Reduce函数'},
      ]},
    ]
  },
  {
    id:'scala', icon:'⚡', title:'Scala & Spark', desc:'函数式编程 + 内存计算引擎',
    sections:[
      {t:'Scala基础 — var vs val + 数组',c:[
        {h:'变量声明'},{pre:`var x = 10   // var = 可重新赋值（变量）
x = 20       // ✅
val y = 10   // val = 不可重新赋值（常量）
y = 20       // ❌ 报错！

// 但val引用的数组，元素可以改！
val arr = Array(1,2,3)
arr(0) = 99  // ✅ 改的是元素
arr = Array(4,5,6) // ❌ 改的是引用本身`},
        {h:'Array vs ArrayBuffer（必考）'},{tbl:['','Array','ArrayBuffer'],rows:[['特点','定长','变长（动态增删）'],['创建','Array(1,2,3)','ArrayBuffer(1,2,3)'],['增删','❌','✅ += -='],['下标从','0开始','0开始']]},
        {trap:'数组下标从<b>0</b>开始！3个元素的数组，最大下标=<b>2</b>。'}
      ]},
      {t:'Scala基础 — 元组 Tuple（必考）',c:[
        {p:'<b>元组 = 把不同类型数据打包在一起</b>。如 val t = ("张三", 18, true)。'},
        {tbl:['考点','值'],rows:[['最多元素','22个'],['下标起始','1（不是0！）'],['访问语法','t._1, t._2, t._3'],['❌错误写法','t(0), t[0], t(1)'],['是否可变','创建后不可修改'],['元素类型','每个位置可以不同']]},
        {trap:'元组下标从<b>1</b>开始！访问用 <b>._1</b> 不是 (0) 或 [0]！'}
      ]},
      {t:'Scala基础 — 集合 List/Set/Map',c:[
        {tbl:['集合','特点'],rows:[['List','有序可重复，默认不可变'],['Set','无序不可重复（去重）'],['Map','键值对 key-value | map("key")取值']]},
        {tip:'三大核心集合体系 = <b>List + Set + Map</b>（多选必考）'},
      ]},
      {t:'Spark 核心 — RDD（每题10分！）',c:[
        {h:'Spark vs MapReduce'},{p:'Spark 最大优势：<b>基于内存计算</b>，比MapReduce快很多（MapReduce频繁读写磁盘）。'},
        {h:'RDD = 弹性分布式数据集'},{p:'分布在多台机器上的、不可变的、能自动恢复的数据集合。'},
        {h:'RDD 五大特性'},{p:'①可分区 ②可并行计算 ③容错(血缘) ④<b>不可变</b> ⑤可持久化'},
        {trap:'❌ 不属于RDD特性：<b>"可直接修改数据"</b> — RDD是不可变的！'},
        {h:'转换 vs 行动（必考）'},{tbl:['','转换 Transformation','行动 Action'],rows:[['特征','惰性求值（不立即执行）','触发计算（立即执行）'],['例子','map filter flatMap','count collect reduce']]},
        {h:'四种集群模式'},{p:'<b>Local</b>（本地）/ <b>Standalone</b>（自带）/ <b>YARN</b>（Hadoop上）/ <b>Mesos</b>'},
      ]},
      {t:'📌 补充：Scala 集合操作 & 模式匹配',c:[
        {h:'常用集合操作'},{pre:'val nums = List(1, 2, 3, 4, 5)\nnums.map(_ * 2)        // List(2,4,6,8,10)\nnums.filter(_ > 2)     // List(3,4,5)\nnums.reduce(_ + _)     // 15 (累加)\nnums.fold(0)(_ + _)    // 15\nnums.foreach(println)  // 逐行打印'},
        {h:'模式匹配（Scala特色功能）'},{pre:'val x = 3\nx match {\n  case 1 => "一"\n  case 2 => "二"\n  case _ => "其他"  // _ 匹配任意值\n}\n\n// 类型匹配\nobj match {\n  case s: String => "字符串: " + s\n  case i: Int    => "整数: " + i\n  case _         => "未知类型"\n}'},
      ]},
      {t:'📌 补充：Spark RDD 详解',c:[
        {h:'创建 RDD 的三种方式'},{pre:'// 1. 从集合创建\nval rdd = sc.parallelize(List(1,2,3,4,5))\n\n// 2. 从外部存储创建（最常用）\nval rdd = sc.textFile("hdfs://path/to/file")\n\n// 3. 从其他RDD转换\nval rdd2 = rdd.map(_ * 2)'},
        {h:'更多转换算子'},{tbl:['算子','作用','例子'],rows:[['map','每个元素映射','rdd.map(x => x*2)'],['filter','过滤符合条件的','rdd.filter(x => x>0)'],['flatMap','先映射再压平','rdd.flatMap(_.split(" "))'],['groupByKey','按key分组','pairRDD.groupByKey()'],['reduceByKey','按key归约','pairRDD.reduceByKey(_+_)'],['sortBy','排序','rdd.sortBy(x=>x)'],['distinct','去重','rdd.distinct()'],['union','合并','rdd1.union(rdd2)']]},
        {h:'更多行动算子'},{tbl:['算子','作用'],rows:[['count','统计元素个数'],['collect','将全部数据收集到Driver（慎用！数据量大时Driver OOM）'],['first/take(n)','取第1个/前n个元素'],['reduce','聚合（同类型）'],['foreach','对每个元素执行操作'],['saveAsTextFile','保存到文件']]},
        {h:'RDD 依赖关系'},{p:'<b>窄依赖：</b>父RDD的一个分区→子RDD的一个分区（map/filter）。<b>宽依赖：</b>父RDD的一个分区→子RDD的多个分区（groupByKey/reduceByKey）。宽依赖触发<b>Shuffle</b>，性能开销大。'},
        {h:'持久化/缓存'},{p:'RDD用cache()或persist()把中间结果缓存到内存，避免重复计算。常用级别：MEMORY_ONLY（默认）、MEMORY_AND_DISK（内存不够溢写到磁盘）。'},
      ]},
    ]
  },
  {
    id:'hbase', icon:'🗄️', title:'HBase & ZooKeeper', desc:'分布式数据库 + 协调服务',
    sections:[
      {t:'HBase — Hadoop上的分布式数据库',c:[
        {h:'HBase 是什么？'},{p:'跑在 HDFS 之上的<b>列式存储分布式数据库</b>，支持海量数据(PB级)的实时随机读写。底层存HDFS，依赖ZooKeeper协调。'},
        {h:'架构（必考）'},{tbl:['角色','职责','比喻'],rows:[['HMaster','Region分配、负载均衡、状态监控','大老板'],['RegionServer','处理客户端读写请求','员工'],['ZooKeeper','HMaster选举、元数据存储','人事部'],['Client','发请求','客户']]},
        {h:'数据模型'},{p:'Table → Row(RowKey标识，字典序排序) → Column Family(列族) → Qualifier(列限定符) → Cell = RowKey+CF+Qualifier+Timestamp → 带版本'},
      ]},
      {t:'HBase — 特点与配置',c:[
        {h:'五大特点（多选常考）'},{p:'①<b>列式存储</b> ②<b>稀疏性</b>（空列不占空间） ③易扩展 ④海量存储(PB级) ⑤高并发读写'},
        {h:'关键配置'},{tbl:['配置','说明'],rows:[['默认安装','单机模式'],['分布式','hbase.cluster.distributed=true'],['外部ZK','HBASE_MANAGES_ZK=false'],['环境变量','/etc/profile'],['Master端口','16010(1.0+)'],['Apache项目','2010年']]},
      ]},
      {t:'ZooKeeper — 分布式协调服务',c:[
        {h:'ZooKeeper 是什么？'},{p:'<b>分布式系统的"协调中心"</b>。用途：HDFS HA 中 NameNode 故障切换、HBase 中 HMaster 选举。'},
        {h:'核心机制（必考）'},{tbl:['特性','值'],rows:[['集群数量','2n+1台(奇数) 允许n台失效'],['选举','过半机制（>半数同意）'],['ZNode','最大1MB，持久/临时/顺序'],['myid','每个节点唯一ID']]},
        {pre:`zkCli.sh          # 进入客户端
ls /              # 查看子节点
get /node         # 获取数据
quit              # 退出
zkServer.sh status # 查看状态(Leader/Follower)`},
      ]},
      {t:'📌 补充：HBase 深入',c:[
        {h:'HBase Shell 常用操作'},{pre:'create "student","info","score"        # 建表，2个列族info和score\nput "student","001","info:name","张三"  # 插入/更新\nput "student","001","info:age","20"\nget "student","001"                      # 查单行\nscan "student"                           # 扫描全表\ndelete "student","001","info:age"        # 删除指定cell\ndisable "student"; drop "student"        # 先disable才能drop\nlist                                      # 列出所有表'},
        {h:'HBase vs 传统关系型数据库'},{tbl:['','HBase','MySQL/Oracle'],rows:[['数据模型','列式存储','行式存储'],['扩展方式','水平扩展（加机器）','垂直扩展（升级硬件）'],['索引','仅RowKey','支持多列索引'],['事务','不支持ACID','支持ACID'],['适用场景','海量数据简单读写','复杂查询、事务'],['Schema','灵活（列可动态增加）','固定（列预先定义）']]},
        {h:'RowKey 设计要点'},{p:'RowKey 是最重要的设计决策。原则：①<b>长度适中</b>（太长浪费空间）②<b>散列性</b>（避免热点Region）③<b>业务含义</b>（方便Scan范围查询）。常见技巧：加盐(salt)、哈希、反转。'},
      ]},
      {t:'📌 补充：ZooKeeper 应用 & 大数据总结',c:[
        {h:'ZK 典型应用场景'},{p:'①<b>统一命名服务</b>：分布式系统中给服务起唯一名字<br>②<b>配置管理</b>：集群配置集中管理，修改后自动推送<br>③<b>集群管理</b>：监控节点上下线（用临时节点）<br>④<b>分布式锁</b>：多节点竞争资源时保证互斥<br>⑤<b>Leader选举</b>：HDFS HA的NameNode切换，HBase的HMaster选举'},
        {h:'大数据处理架构对比'},{tbl:['','批处理','流处理','交互式查询'],rows:[['代表','MapReduce, Spark RDD','Spark Streaming, Flink, Storm','Hive, Spark SQL, Impala'],['延迟','高（分钟-小时）','低（毫秒-秒）','中（秒-分钟）'],['数据','静态历史数据','实时流数据','历史数据'],['典型场景','日报表、ETL','实时监控、风控','即席查询、OLAP']]},
        {h:'考试终极检查清单'},{p:'✅ HDFS：NameNode元数据/DataNode块/128MB/3副本/不适合小文件<br>✅ YARN：RM/NM/AM/Container<br>✅ MapReduce：Split→Map→Shuffle→Reduce→Output<br>✅ HBase：HMaster/RegionServer/ZK/列式存储/稀疏性/RowKey<br>✅ ZK：2n+1/过半选举/ZNode 1MB/临时持久节点<br>✅ 大数据4V：Volume/Velocity/Variety/Value(密度低)<br>✅ 不属于Hadoop生态：Spring、Java<br>✅ Scala：Array定长/ArrayBuffer变长/Tuple._1下标从1开始<br>✅ Spark：内存计算/RDD不可变/转换惰性行动触发'},
      ]},
    ]
  },
  {
    id:'web', icon:'🌐', title:'Web前端 (HTML/CSS/JS)', desc:'A/B卷真题全覆盖，6种题型逐章对应',
    sections:[
      {t:'先搞懂：前端三剑客 & 考试概况',c:[
        {p:'浏览器看到的每个网页 = <b>HTML + CSS + JavaScript</b>。HTML写内容（骨架），CSS写样式（皮肤），JavaScript写交互（动作）。三者是<b>浏览器端</b>技术，Java不是前端技术（多选常考）。'},
        {tbl:['','HTML','CSS','JavaScript'],rows:[['作用','内容结构','样式布局','交互行为'],['文件后缀','.html','.css','.js'],['代码位置','<body>内','<style>或.css文件','<script>或.js文件'],['注释写法','<!-- -->','/* */','// 或 /* */']]},
        {h:'考试题型分布（A/B卷）'},{tbl:['题型','题量','分值','备考策略'],rows:[['单选',15,'30分','概念记忆为主，题干就是考点'],['多选',5,'15分','排除法+关键词记忆'],['判断','5~10','10分','注意反例，"不是""不能"是关键词'],['填空',5,'10分','背标签名/属性名/方法名'],['简答',2,'10分','盒模型+null vs undefined 是固定考点'],['编程',2,'25分','CSS选择器实操+JS表单验证']]},
      ]},
      {t:'第1章 — HTML 文档结构（A卷第一题就考）',c:[
        {h:'标准HTML5文档结构'},{pre:'<!DOCTYPE html>\n<html>\n  <head>\n    <title>浏览器标签栏标题</title>\n    <meta charset="UTF-8">\n    <link rel="stylesheet" href="style.css">\n    <style>/* 内嵌样式 */</style>\n  </head>\n  <body>\n    <!-- 可见内容全部写在body里 -->\n    <h1>页面正文大标题</h1>\n    <p>段落文字</p>\n  </body>\n</html>'},
        {p:'<b>核心结构必背</b>：<html><head>...</head><body>...</body></html>。注意<title>放在<head>内（定义浏览器标签栏文字），<h1>放在<body>内（页面正文标题）。'},
        {tip:'选择题四选一，错误选项通常把<title>放在<body>里或把<h1>放在<head>里。'},
        {trap:'<title>≠<h1>！title给浏览器标签栏看的，h1是页面里的大标题。'}
      ]},
      {t:'第2章 — HTML 常用标签（选择+多选+判断密集区）',c:[
        {h:'块级 vs 行内元素（判断高频！）'},{tbl:['','块级元素','行内/内联元素'],rows:[['特征','独占一行，可设宽高','不换行，宽高由内容定'],['举例','<div> <p> <h1>~<h6> <form>','<span> <a> <img> <input>'],['默认宽度','100%','由内容决定']]},
        {p:'<b>判断题高频</b>："<div>是行内元素"→❌错！"<span>是块级元素"→❌错！"<div>是块级元素"→✅对！'},
        {h:'超链接 & 图片'},{pre:'<a href="目标网址">点击文字</a>\n<img src="图片.jpg" alt="加载失败时显示的替代文字">'},
        {p:'<a>用href属性指定目标。<img>是自闭合标签（不需要</img>），alt在图片无法显示时提供文字替代。'},
        {h:'列表：ul无序 / ol有序 / dl定义'},{pre:'<ul>                <ol type="1">         <dl>\n  <li>项目</li>       <li>第一</li>         <dt>术语</dt>\n  <li>项目</li>       <li>第二</li>         <dd>解释</dd>\n</ul>                </ol>                </dl>'},
        {p:'<b>ol的type合法值</b>：1（数字）、a（小写字母）、A（大写字母）、i（小写罗马）、I（大写罗马）。<b>没有x</b>！考试选项里出现x就是错误答案。'},
        {h:'HTML5语义化标签（选择+多选）'},{p:'<header>页头、<nav>导航、<main>主体、<article>独立内容区块、<section>分节、<aside>侧栏、<footer>页脚。替代纯<div>，SEO友好。'},
        {h:'HTML标签嵌套规则'},{p:'标签可以嵌套但不能<b>交叉嵌套</b>。正确：<p><b>文字</b></p>（先开的后关）。错误：<p><div>文字</p></div>（交叉了！）。'},
        {h:'<script>标签位置'},{p:'可以放在<head>或<body>中。推荐放在<body>底部（最后），避免阻塞页面渲染。判断题"<script>必须放在<head>中"是错的！'},
      ]},
      {t:'第3章 — HTML 表格（选择+填空）',c:[
        {h:'表格标签层级'},{pre:'<table border="1">\n  <tr>              <!-- 行 row -->\n    <th>姓名</th>   <!-- 表头 header（粗体居中）-->\n    <th>成绩</th>\n  </tr>\n  <tr>\n    <td>张三</td>   <!-- 单元格 data -->\n    <td>95</td>\n  </tr>\n</table>'},
        {tbl:['标签','全称','说明','必须放在哪'],rows:[['<table>','table','表格容器','-'],['<tr>','table row','表格行','<table>内'],['<th>','table header','表头单元格（粗体居中）','<tr>内！必须！'],['<td>','table data','数据单元格','<tr>内']]},
        {h:'表格属性（选择常考"不正确"选项）'},{tbl:['属性','作用','易错点'],rows:[['border','边框粗细','不是背景！说border是背景→错'],['cellspacing','单元格之间的间距','控制格与格之间的距离'],['cellpadding','单元格内容与边框的内边距','类似盒模型的padding'],['align','表格对齐方式','不是文字对齐']]},
        {trap:'border定义边框粗细，不是边框背景！"border属性定义表格边框的背景"是错误选项。'},
      ]},
      {t:'第4章 — HTML 表单 & input 类型（选择+多选+编程）',c:[
        {h:'表单基本结构'},{pre:'<form name="form01" action="提交地址" method="post" onsubmit="return check()">\n  用户名：<input type="text" name="username"><br>\n  密码：<input type="password" name="pass"><br>\n  <input type="submit" value="登录">\n  <input type="reset" value="重置">\n</form>'},
        {tbl:['type值','显示效果','说明'],rows:[['text','普通文本框','默认类型'],['password','输入显示为圆点●●●','保护隐私，考试高频'],['hidden','不显示','隐藏域，传递后台数据'],['submit','提交按钮','点击触发表单提交'],['reset','重置按钮','清空所有输入'],['radio','单选按钮','同name互斥'],['checkbox','多选方框','可多选'],['email','邮箱输入','HTML5新增，自带格式校验']]},
        {h:'readonly vs disabled'},{p:'<b>readonly</b>：只读，不可修改但<b>可选中复制</b>，会提交。<br><b>disabled</b>：禁用，不可修改<b>不可选中</b>，不会提交。<br>判断题："readonly用户仍可修改"→❌错！'},
        {h:'获取表单值（编程题核心！）'},{p:'document.<b>表单名</b>.<b>字段名</b>.<b>value</b><br>如：document.form01.username.value 获取用户名输入框的值'},
      ]},
      {t:'第5章 — CSS 选择器 & 优先级（送分题集中区）',c:[
        {h:'选择器速查表（填空+选择必背）'},{tbl:['选择器','符号','权重','示例','选中什么'],rows:[['!important','!important','最高','div{color:red!important}','强制最高优先级'],['行内样式','style=""','1000','<p style="color:red">','该元素自身'],['ID选择器','#','100','#title{ }','id="title"的元素（唯一）'],['类选择器','.','10','.vip{ }','class="vip"的所有元素'],['标签选择器','标签名','1','p{ }','所有<p>标签'],['通配符','*','0','*{ }','所有元素']]},
        {p:'<b>优先级口诀</b>：!important > 行内(1000) > id(100) > class(10) > 标签(1) > 通配符(0)。<br><b>判断必考</b>："类选择器优先级高于ID选择器"→❌错！ID(100) > 类(10)。'},
        {tip:'#demo 是ID选择器（选id="demo"），.demo是类选择器（选class="demo"）。#和.不能搞混！'}
      ]},
      {t:'第6章 — CSS 盒模型（简答必考！A/B卷都出）',c:[
        {h:'盒模型四层（从内到外）'},{p:'<b>content</b>（内容区）→ <b>padding</b>（内边距）→ <b>border</b>（边框）→ <b>margin</b>（外边距）。'},
        {h:'box-sizing两种取值（简答题核心）'},{tbl:['','content-box（默认）','border-box'],rows:[['width=','仅内容区宽度','content+padding+border'],['总占用宽度','width+padding+border+margin','width+margin'],['优点','精确控制内容','布局直观方便'],['使用建议','-','★★★推荐']]},
        {p:'<b>margin的特殊性质</b>：①不影响元素背景区域（透明的）②可以设置负值（实现重叠效果）③padding不能取负值④padding会扩展背景区域。'},
        {h:'盒模型多选考点（B卷常考）'},{p:'margin不影响元素背景✔ padding影响元素背景✔ width在border-box下包含border+padding✔ 总宽度=content+padding+border+margin✔'},
        {trap:'简答题标准答案：盒模型由content、padding、border、margin组成。content-box默认width只作用于内容区，总宽=width+padding+border。border-box的width包含content+padding+border，总宽=width，更便于布局。'}
      ]},
      {t:'第7章 — CSS 定位 position（选择+填空+多选）',c:[
        {h:'四大定位方式'},{tbl:['值','参照物','脱离文档流','仍占空间','说明'],rows:[['static','-','否','是','默认值，正常文档流'],['relative','自身原位置','否','是','相对原位置偏移（填空：设置相对定位的值是relative）'],['absolute','最近定位祖先/窗口','是','否','完全脱离，随滚动移动'],['fixed','浏览器可视窗口','是','否','固定屏幕不动，不随滚动']]},
        {p:'<b>position叙述题注意</b>：fixed也有参照物——浏览器可视窗口（viewport）。"fixed没有参照物"→❌错！'},
        {h:'float也能实现定位'},{p:'float:left/right 元素浮动，文字环绕。浮动元素脱离文档流→父容器高度塌陷。<b>清除浮动</b>：clear:both 或 overflow:hidden。'},
        {h:'z-index 堆叠顺序（B卷选择题）'},{p:'控制定位元素在<b>z轴</b>上的堆叠顺序，数值越大越靠前（显示在上层）。<b>只对position非static的元素有效</b>。没有z-order/stack-level这些属性！'},
      ]},
      {t:'第8章 — CSS 居中 & display & 常用属性',c:[
        {h:'水平居中（选择高频）'},{p:'<b>块级元素居中</b>：margin:0 auto（必须设置宽度！）<br><b>行内/文本居中</b>：text-align:center<br><b>注意</b>：text-align不能居中块级元素本身！判断题："text-align:center可以居中块级元素本身"→❌错！'},
        {h:'display属性大全（选择高频）'},{tbl:['取值','特点','默认元素'],rows:[['block','独占一行，可设宽高','div/p/h1~h6'],['inline','不换行，宽高无效','span/a/img/input'],['inline-block','不换行，可设宽高','-'],['none','隐藏且不占空间（回流）','display:none'],['flex','弹性布局容器','一维布局首选']]},
        {h:'display:none vs visibility:hidden（选择必考！）'},{p:'<b>display:none</b>：元素消失，<b>不占布局空间</b>（回流/重排）。<br><b>visibility:hidden</b>：元素隐藏但<b>仍占空间</b>（只重绘）。<br>口诀：none没空间，hidden有空间。'},
        {h:'CSS常用属性速记（选择+填空）'},{tbl:['分类','属性','示例','易错'],rows:[['文字颜色','color','color:red;','没有font-color/text-color！'],['字号','font-size','font-size:18px;','px不能省略！没有text-size！'],['字体','font-family','font-family:"微软雅黑";','字体名有空格需引号'],['粗细','font-weight','font-weight:bold;','bold=700 normal=400'],['背景色','background-color','background-color:#fff;','不是bgcolor（已废弃）'],['背景图','background-image','background-image:url(1.jpg);','url()不要忘！'],['行高','line-height','line-height:1.5;','无单位表示倍数'],['对齐','text-align','text-align:center;','left/center/right']]},
        {h:'CSS长度单位'},{p:'<b>px</b>像素（屏幕最小单位，最常用）；<b>em</b>相对父元素字号；<b>rem</b>相对根元素；<b>%</b>百分比；<b>pt</b>磅(1/72英寸)；<b>cm</b>厘米。考试常问"像素单位是什么"→px。'},
      ]},
      {t:'第9章 — JavaScript 变量声明：var / let / const（选择+判断核心）',c:[
        {h:'三种声明对比（必背！）'},{tbl:['','var','let','const'],rows:[['作用域','函数作用域','块级作用域','块级作用域'],['变量提升','✅ 提升（值为undefined）','✅ 提升（TDZ报错）','✅ 提升（TDZ报错）'],['重复声明','✅ 允许','❌ 不允许','❌ 不允许'],['可重新赋值','✅ 是','✅ 是','❌ 不可（对象属性除外）'],['须初始化','❌ 不必须','❌ 不必须','✅ 必须']]},
        {p:'<b>推荐原则</b>：优先用const，需要改再用let，尽量不用var。'},
        {h:'const 对象属性的特殊情况（B卷选择题）'},{p:'const obj = {name:"张三"};<br>obj.name = "李四"; → ✅ 允许！（修改属性不改变引用）<br>obj = {}; → ❌ 报错！（重新赋值改变了引用）'},
        {h:'let和const关键区别（选择必考）'},{p:'const声明的变量<b>不可修改</b>（不可重新赋值）。let可以修改。两者作用域<b>相同</b>（都是块级）。'},
      ]},
      {t:'第10章 — JS 数据类型 & 运算符（选择+判断+简答）',c:[
        {h:'基本数据类型'},{p:'number / string / boolean / <b>null</b> / <b>undefined</b> / symbol / bigint。<br>引用类型：object（含array/function/date）。'},
        {h:'null vs undefined（简答题固定考点！）'},{tbl:['','undefined','null'],rows:[['含义','变量已声明但未赋值','主动赋值的空值（表示"无"）'],['类型','undefined','object（JS的历史bug！）'],['typeof结果','"undefined"','"object"'],['==比较','null==undefined→true'],['===比较','null===undefined→false'],['使用场景','默认的未定义状态','手动设置为空']]},
        {p:'<b>简答题标准答案</b>：undefined表示变量已声明但未赋值（默认状态），null是主动赋值的空对象引用。两者==为true，===为false。typeof null返回"object"是JS历史遗留bug。'},
        {h:'NaN特殊性质（判断+选择高频）'},{p:'NaN（Not a Number）= "不是数字"。<b>NaN === NaN → false</b>！NaN不等于任何值包括自己。用isNaN()函数判断是否为NaN。'},
        {h:'typeof 运算符'},{p:'typeof "hello" → "string"<br>typeof 123 → "number"<br>typeof undefined → "undefined"<br>typeof null → "object"（历史bug！记住！）'},
        {p:'<b>其他常用</b>：parseInt("10", 2)第二个参数指定进制（2~36）；new Date()获取当前日期时间；alert("消息")弹出警告框；document.write()页面输出。'},
      ]},
      {t:'第11章 — DOM 操作（选择+多选+填空）',c:[
        {h:'五种获取元素方法对比'},{tbl:['方法','返回类型','找不到返回','说明'],rows:[['getElementById(id)','单个元素','null','按id精确查找（最常用）'],['getElementsByClassName(c)','HTMLCollection（动态）','空集合','按class查找多个'],['getElementsByTagName(t)','HTMLCollection（动态）','空集合','按标签名查找多个'],['querySelector(css选择器)','单个元素','null','CSS选择器语法'],['querySelectorAll(css选择器)','NodeList（静态）','空NodeList','CSS选择器语法查多个']]},
        {p:'<b>getElementById找不到返回null</b>（不是undefined！选择题常考这个坑）。'},
        {h:'innerHTML（属性和方法的坑）'},{p:'<b>innerHTML是属性不是方法！</b>不能加括号：element.innerHTML = "新内容"✅ / element.innerHTML()❌。<br>多选/判断题里innnerHTML()通常作为迷惑选项出现。'},
        {p:'<b>querySelectorAll vs getElementsByClassName</b>：querySelectorAll返回NodeList（可forEach遍历/静态）；getElementsByClassName返回HTMLCollection（动态集合/随DOM变化）。'},
      ]},
      {t:'第12章 — 表单验证（编程题 15分！A/B卷都出）',c:[
        {h:'完整表单验证模板（背下来！）'},{pre:'<form name="form01" onsubmit="return check()">\n  用户名：<input type="text" name="username"><br>\n  密码：<input type="password" name="pass1"><br>\n  确认密码：<input type="password" name="pass2"><br>\n  <input type="submit" value="登录">\n</form>\n\n<script>\nfunction check(){\n  // 1. 获取表单值\n  var username = document.form01.username.value;\n  var pass1 = document.form01.pass1.value;\n  var pass2 = document.form01.pass2.value;\n\n  // 2. 检查用户名不为空\n  if(username == ""){\n    alert("用户名不能为空！请输入用户名：");\n    return false;  // 阻止提交\n  }\n\n  // 3. 检查密码不为空\n  if(pass1 == ""){\n    alert("密码不能为空！请输入密码：");\n    return false;\n  }\n\n  // 4. 检查两次密码一致\n  if(pass1 != pass2){\n    alert("密码有误！请检查密码和确认密码输入是否一致！");\n    return false;\n  }\n\n  // 5. 验证通过\n  document.write("<h2>登录成功！欢迎您，" + username + "</h2>");\n  return false;  // 阻止表单实际提交（演示用）\n}\n</script>'},
        {h:'验证流程五步法'},{p:'①onsubmit="return check()" 绑定验证函数<br>②getElementById或document.form名.字段名.value获取值<br>③if判断是否为空/不一致 → alert提示<br>④不通过则<b>return false</b>阻止提交<br>⑤通过则document.write输出或return true'},
        {tip:'A/B卷编程题几乎一样！只是变量名和提示文字略有不同。这道15分题必须拿满！'}
      ]},
      {t:'第13章 — CSS 引入方式 & 三种注释（选择+填空）',c:[
        {h:'CSS三种引入方式及优先级（简答题考点）'},{tbl:['方式','写法','优先级','说明'],rows:[['行内样式','<p style="color:red">','最高（1000）','直接写在元素style属性中'],['内嵌样式','<head>中<style>标签','中等','作用于整个页面'],['外部样式','<link rel="stylesheet" href=".css">','最低','最推荐（结构与样式分离）']]},
        {p:'<b>简答题标准答案</b>：三种引入方式——行内样式(优先级最高)、内嵌样式(优先级中等)、外部样式(优先级最低)。优先级顺序：行内>内嵌>外部。!important可以打破。'},
        {h:'三种注释写法对比（选择+填空常考）'},{tbl:['语言','注释语法','快捷键'],rows:[['HTML','<!-- 注释内容 -->','-'],['CSS','/* 注释内容 */','-'],['JavaScript','// 单行注释 或 /* 多行注释 */','Ctrl+/']]},
        {tip:'HTML注释不是/* */！CSS注释不是<!-- -->！填空题常考HTML注释写法：<!-- 注释内容 -->。'},
      ]},
      {t:'第14章 — CSS 编程题实操（10分，A/B卷必出）',c:[
        {h:'题目模式（固定套路）'},{p:'给一段HTML代码（含注释标注了"上部""主体左侧""主体右侧"），要求用三种选择器设置样式。'},
        {h:'三种选择器使用场景'},{pre:'/* 第1小题：元素/标签选择器 — 设置图片宽度 */\nimg { width: 100px; }\n\n/* 第2小题：类选择器 — 设置文字颜色和字号 */\n.vip { color: blue; font-size: 18px; }\n\n/* 第3小题：ID选择器 — 设置宽高 */\n#mainLeft { width: 240px; height: 800px; }'},
        {p:'<b>得分要点</b>：①元素选择器直接写标签名(img→所有图片)②类选择器前面加.(.vip→class="vip"的元素)③ID选择器前面加#(#mainLeft→id="mainLeft"的元素)④属性值别忘单位px'},
        {tip:'A/B卷编程题套路一模一样，只是换标签名和数值。掌握模板=10分到手。'}
      ]},
      {t:'📌 考试终极检查清单 — Web前端',c:[
        {p:'✅ HTML核心结构：<html><head>...</head><body>...</body></html><br>✅ <div>/<p>/<h1>块级；<span>/<a>/<img>/<input>行内<br>✅ <a href>超链接 <img src alt>图片 <title>标签栏<br>✅ 表格：table/tr/th/td，<th>必放<tr>内；border不是背景<br>✅ 表单：text/password(圆点)/hidden/submit；readonly≠disabled<br>✅ CSS选择器：!important>行内(1000)>#(100)>.(10)>标签(1)>*(0)<br>✅ 盒模型：content→padding→border→margin<br>✅ box-sizing：content-box(默认) vs border-box<br>✅ 四大定位：static/relative(值=relative)/absolute/fixed<br>✅ display:none(不占空间) vs visibility:hidden(占空间)<br>✅ 块级居中：margin:0 auto；text-align不能居中块级<br>✅ JS变量：const不可改(let可)/对象属性例外/null≠undefined===false<br>✅ NaN===NaN→false；typeof null→"object"<br>✅ DOM：getElementById→null；innerHTML是属性非方法<br>✅ CSS引入：行内>内嵌>外部<br>✅ 三种注释：HTML<!-- --> CSS/* */ JS//<br>✅ 编程题模板：img{}/.class{}/#id{} + 表单验证模板<br>✅ 浏览器端技术：HTML+CSS+JS，Java不是'},
      ]},
    ]
  },
];

// ==================== 教程渲染器 ====================
class TutorialRenderer {
  static renderContent(tutorial) {
    let html = `<h2 style="margin-bottom:8px;">${tutorial.icon} ${tutorial.title}</h2>
      <p style="color:var(--text-secondary);margin-bottom:24px;">${tutorial.desc}</p>`;
    for (const sec of tutorial.sections) {
      html += `<div class="tutorial-section">
        <div class="tutorial-section-header" onclick="this.parentElement.classList.toggle('collapsed')">
          ${sec.t} <span>▼</span>
        </div>
        <div class="tutorial-section-body">${this._renderContent(sec.c)}</div>
      </div>`;
    }
    return html;
  }

  static _renderContent(items) {
    let html = '';
    for (const item of items) {
      if (item.p) html += `<p>${this._escKeep(item.p)}</p>`;
      if (item.h) html += `<h3>${this._escKeep(item.h)}</h3>`;
      if (item.tip) html += `<div class="tip">💡 <b>小贴士：</b>${this._escKeep(item.tip)}</div>`;
      if (item.trap) html += `<div class="trap">⚠️ <b>注意：</b>${this._escKeep(item.trap)}</div>`;
      if (item.pre) html += `<pre>${this._escapeHtml(item.pre)}</pre>`;
      if (item.tbl) {
        html += '<table><thead><tr>';
        for (const h of item.tbl) html += `<th>${this._escapeHtml(String(h))}</th>`;
        html += '</tr></thead><tbody>';
        for (const row of (item.rows || [])) {
          html += '<tr>';
          for (const cell of row) html += `<td>${this._escapeHtml(String(cell))}</td>`;
          html += '</tr>';
        }
        html += '</tbody></table>';
      }
    }
    return html;
  }

  // 转义HTML但保留安全格式化标签 <b> </b> <br>
  static _escKeep(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/<b>/gi, '\x00B\x01').replace(/<\/b>/gi, '\x00/B\x01')
      .replace(/<br\s*\/?>/gi, '\x00BR\x01')
      .replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/\x00B\x01/g, '<b>').replace(/\x00\/B\x01/g, '</b>')
      .replace(/\x00BR\x01/g, '<br>');
  }

  static _escapeHtml(text) {
    return text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }
}

class ExamApp {
  constructor() {
    this.dm = new DataManager();
    this.currentQuiz = null; // 当前答题会话
    this.quizIndex = 0;
    this.quizAnswers = {};
    this.quizTimer = null;
    this.quizSeconds = 0;
    this.init();
  }

  init() {
    this.bindNav();
    this.bindTheme();
    this.bindImport();
    this.bindClearData();
    this.populateSubjectSelects();
    this.populateTypeSelects();

    // 首次打开自动加载预解析数据
    if (this.dm.questions.length === 0 && typeof PREPARSED_QUESTIONS !== 'undefined' && PREPARSED_QUESTIONS.length > 0) {
      const n = this.dm.reloadFromPreparsed();
      this.populateSubjectSelects();
      this.populateTypeSelects();
      console.log('📦 首次自动加载：' + n + ' 题');
    }

    this.renderDashboard();
    this.renderPlan();
    this.renderKnowledge();
    this.renderTutorialNav();
    this.bindPractice();
    this.bindExam();
    this.bindWrong();
    this.bindReview();
    this.bindPredict();
    this.populateSubjectSelects();
    this.loadChecklist();
    // 首次聚焦知识清单
    if (typeof CHECKLIST !== 'undefined' && CHECKLIST.length > 0) {
      this.renderChecklist();
    }
  }

  // ===== 导航 =====
  bindNav() {
    document.querySelectorAll('.menu-item').forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
        item.classList.add('active');
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        const target = item.dataset.nav;
        const page = document.getElementById(target);
        if (page) page.classList.add('active');
        // 刷新对应页面
        if (target === 'dashboard') this.renderDashboard();
        if (target === 'checklist') this.renderChecklist();
        if (target === 'wrong') this.renderWrong();
        if (target === 'review') this.renderReview();
        if (target === 'tutorials') this.renderTutorialNav();
        if (target === 'keypoints') this.renderKeypoints();
      });
    });
  }

  // ===== 零基础教程 =====
  renderTutorialNav() {
    const navDiv = document.getElementById('tutorialNav');
    navDiv.innerHTML = TUTORIALS.map((t, i) =>
      `<button class="tutorial-nav-btn ${i===0?'active':''}" onclick="app.showTutorial('${t.id}', this)">${t.icon} ${t.title}</button>`
    ).join('');
    // 默认显示第一科
    if (!this._tutorialLoaded) {
      this.showTutorial(TUTORIALS[0].id, navDiv.querySelector('.tutorial-nav-btn'));
      this._tutorialLoaded = true;
    }
  }

  showTutorial(id, btn) {
    document.querySelectorAll('.tutorial-nav-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    const tutorial = TUTORIALS.find(t => t.id === id);
    if (!tutorial) return;
    const content = document.getElementById('tutorialContent');
    content.innerHTML = TutorialRenderer.renderContent(tutorial);
    content.scrollIntoView({behavior:'smooth', block:'start'});
  }

  // ===== 暗色模式 =====
  bindTheme() {
    const btn = document.getElementById('themeToggle');
    const saved = localStorage.getItem('exam_theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    btn.textContent = saved === 'dark' ? '☀️' : '🌙';
    btn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      btn.textContent = next === 'dark' ? '☀️' : '🌙';
      localStorage.setItem('exam_theme', next);
    });
  }

  // ===== 清除数据 =====
  bindClearData() {
    document.getElementById('clearDataBtn').addEventListener('click', () => {
      if (confirm('确定要清除所有学习数据吗？（题库、错题、进度、清单打卡）')) {
        localStorage.clear();
        localStorage.setItem('exam_data_version', 'v2');
        this.dm = new DataManager();
        if (typeof PREPARSED_QUESTIONS !== 'undefined') this.dm.reloadFromPreparsed();
        this.checkedItems = new Set();
        this.renderDashboard();
        this.renderChecklist();
        this.renderWrong();
        this.toast('🗑️ 数据已重置，题库已重新加载');
      }
    });
  }

  // ===== 导入题库 =====
  bindImport() {
    const btn = document.getElementById('importBtn');
    const input = document.getElementById('fileInput');
    btn.addEventListener('click', () => {
      // 优先加载预解析数据
      if (typeof PREPARSED_QUESTIONS !== 'undefined' && PREPARSED_QUESTIONS.length > 0) {
        btn.textContent = '⏳ 加载中...';
        setTimeout(() => {
          const count = this.dm.reloadFromPreparsed();
          this.populateSubjectSelects();
          this.populateTypeSelects();
          this.renderDashboard();
          this.renderKnowledge();
          btn.textContent = '🔄 刷新题库';
          this.toast('✅ 已加载 ' + count + ' 题（预解析数据覆盖）');
        }, 100);
      } else {
        input.click();
      }
    });
    // 双击强制文件导入
    btn.addEventListener('dblclick', () => input.click());
    input.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      btn.textContent = '⏳ 解析中...';
      const text = await file.text();
      const parser = new QuestionParser();
      const questions = parser.parse(text);
      this.dm.setQuestions(questions);
      this.populateSubjectSelects();
      this.populateTypeSelects();
      this.renderDashboard();
      this.renderKnowledge();
      btn.textContent = '🔄 刷新题库';
      this.toast('✅ 文件解析完成：' + questions.length + ' 题');
    });
  }

  populateSubjectSelects() {
    const selects = ['pSubject', 'eSubject', 'wSubject', 'kSubject'];
    for (const sid of selects) {
      const sel = document.getElementById(sid);
      if (!sel) continue;
      sel.innerHTML = '<option value="all">全部科目</option>';
      for (const s of SUBJECTS) {
        const count = this.dm.questions.filter(q => q.subject === s.id).length;
        sel.innerHTML += `<option value="${s.id}">${s.icon} ${s.name} (${count}题)</option>`;
      }
    }
  }

  populateTypeSelects() {
    const types = ['单选题','多选题','判断题','填空题','简答题','程序题'];
    const sel = document.getElementById('pType');
    if (!sel) return;
    sel.innerHTML = '<option value="all">全部题型</option>';
    for (const t of types) {
      const count = this.dm.questions.filter(q => q.type === t).length;
      if (count > 0) sel.innerHTML += `<option value="${t}">${t} (${count}题)</option>`;
    }
  }

  // ===== 仪表盘 =====
  renderDashboard() {
    const stats = this.dm.getStats();
    document.getElementById('totalQ').textContent = stats.total || '--';
    document.getElementById('doneQ').textContent = stats.done || '--';
    document.getElementById('rightRate').textContent = stats.done > 0 ? stats.rightRate + '%' : '--';
    document.getElementById('wrongCount').textContent = stats.wrong || '--';

    // 科目进度
    const spDiv = document.getElementById('subjectProgress');
    spDiv.innerHTML = SUBJECTS.map(s => {
      const d = stats.bySubject[s.id] || {total:0, done:0, pct:0};
      const cls = s.id === 'Java Web' ? 'java' : s.id === 'Linux' ? 'linux' : s.id === 'Hadoop' ? 'hadoop' : s.id === 'Scala & Spark' ? 'scala' : s.id === 'Web前端' ? 'web' : 'hbase';
      return `<div class="progress-bar-wrap">
        <div class="progress-bar-label"><span>${s.icon} ${s.name}</span><span>${d.done}/${d.total} (${d.pct}%)</span></div>
        <div class="progress-bar-track"><div class="progress-bar-fill ${cls}" style="width:${d.pct}%"></div></div>
      </div>`;
    }).join('');

    // 高频考点
    const htDiv = document.getElementById('hotTopics');
    const allATopics = [];
    for (const [subj, data] of Object.entries(KNOWLEDGE_BASE)) {
      for (const t of data.topics.filter(t => t.level === 'A')) {
        allATopics.push({...t, subject: subj});
      }
    }
    htDiv.innerHTML = `<h3>🔥 A级必考考点 (${allATopics.length}个)</h3>` +
      allATopics.map(t => `<span class="topic-tag topic-a">${t.subject.split(' ')[0]}: ${t.name}</span>`).join('');
  }

  // ===== 五天计划 =====
  renderPlan() {
    const pg = document.getElementById('planGrid');
    pg.innerHTML = PLAN_DATA.map((d, i) => `
      <div class="plan-day" style="border-left-color:${['#6c5ce7','#00b894','#0984e3','#e17055','#fdcb6e'][i]}">
        <h3>${d.icon} Day ${d.day} — ${d.subject}</h3>
        <ul>${d.tasks.map(t => `<li>${t}</li>`).join('')}</ul>
      </div>
    `).join('');
  }

  // ===== 知识点学习 =====
  renderKnowledge() {
    const subjFilter = document.getElementById('kSubject').value;
    const levelFilter = document.getElementById('kLevel').value;
    const container = document.getElementById('knowledgeList');

    let topics = [];
    for (const [subj, data] of Object.entries(KNOWLEDGE_BASE)) {
      if (subjFilter !== 'all' && subj !== subjFilter) continue;
      for (const t of data.topics) {
        if (levelFilter !== 'all' && t.level !== levelFilter) continue;
        // 统计该知识点在题库中的题目数
        const qCount = this.dm.questions.filter(q => q.topic === t.name).length;
        topics.push({...t, subject: subj, qCount});
      }
    }
    topics.sort((a, b) => b.freq - a.freq);

    container.innerHTML = topics.map(t => `
      <div class="knowledge-card level-${t.level}" id="kp-${t.id}" onclick="this.classList.toggle('expanded')">
        <div class="kc-header">
          <span class="kc-title">${this._esc(t.name)} <span class="badge badge-${t.level}">${t.level}级</span></span>
          <span class="kc-meta">🔁 ${t.freq}次 | 📝 ${t.qCount}题 | ${t.subject.split(' ')[0]}</span>
        </div>
        <div class="kc-body">${this._esc(t.content)}</div>
      </div>
    `).join('');

    document.getElementById('kSubject').addEventListener('change', () => this.renderKnowledge());
    document.getElementById('kLevel').addEventListener('change', () => this.renderKnowledge());
  }

  // ===== 真题练习 =====
  bindPractice() {
    document.getElementById('startPractice').addEventListener('click', () => this.startPractice());
    document.getElementById('prevQ').addEventListener('click', () => this.navQuiz(-1));
    document.getElementById('nextQ').addEventListener('click', () => this.navQuiz(1));
    document.getElementById('submitQ').addEventListener('click', () => this.submitAnswer());
    document.getElementById('closeQuiz').addEventListener('click', () => this.closeQuiz());
  }

  startPractice() {
    const subject = document.getElementById('pSubject').value;
    const type = document.getElementById('pType').value;
    const level = document.getElementById('pLevel').value;
    const unpracticedOnly = document.getElementById('pUnpracticed').checked;
    let qs = this.dm.getQuestions({subject, type, level});
    if (qs.length === 0) { this.toast('⚠️ 没有符合条件的题目，请先导入题库'); return; }
    // 只刷未做过的题
    if (unpracticedOnly) {
      const fresh = qs.filter(q => !q.lastPractice);
      if (fresh.length > 0) qs = fresh;
      else { this.toast('🎉 该条件下题目全部刷完！取消勾选"只刷未做题"可重刷'); return; }
    }
    const limit = Math.min(qs.length, 500);
    qs = this._shuffle(qs).slice(0, limit);
    this.openQuiz(qs, 'practice');
  }

  // ===== 随机组卷 =====
  bindExam() {
    document.getElementById('startExam').addEventListener('click', () => this.startExam());
  }

  startExam() {
    const subject = document.getElementById('eSubject').value;
    const count = parseInt(document.getElementById('eCount').value) || 20;
    const time = parseInt(document.getElementById('eTime').value) || 30;
    let qs = this.dm.getQuestions({subject});
    if (qs.length === 0) { this.toast('⚠️ 没有符合条件的题目'); return; }
    qs = this._shuffle(qs).slice(0, Math.min(count, qs.length));
    this.openQuiz(qs, 'exam', time * 60);
  }

  openQuiz(questions, mode, totalSeconds = 0) {
    this.currentQuiz = {questions, mode, totalSeconds};
    this.quizIndex = 0;
    this.quizAnswers = {};
    this.quizSubmitted = {};
    this.quizSeconds = 0;
    if (this.quizTimer) clearInterval(this.quizTimer);

    if (mode === 'exam' && totalSeconds > 0) {
      this.quizSeconds = totalSeconds;
      this.quizTimer = setInterval(() => {
        this.quizSeconds--;
        document.getElementById('quizTimer').textContent = '⏱ ' + this._fmtTime(this.quizSeconds);
        if (this.quizSeconds <= 0) { this.submitExam(); }
      }, 1000);
    } else {
      document.getElementById('quizTimer').textContent = '';
    }

    document.getElementById('quizModal').classList.remove('hidden');
    this.renderQuizQuestion();
  }

  closeQuiz() {
    if (this.quizTimer) clearInterval(this.quizTimer);
    document.getElementById('quizModal').classList.add('hidden');
    this.currentQuiz = null;
    this.renderDashboard();
  }

  renderQuizQuestion() {
    if (!this.currentQuiz) return;
    const q = this.currentQuiz.questions[this.quizIndex];
    const total = this.currentQuiz.questions.length;
    document.getElementById('quizProgress').textContent = `第 ${this.quizIndex+1}/${total} 题`;
    if (this.currentQuiz.mode === 'exam') {
      document.getElementById('quizTimer').textContent = '⏱ ' + this._fmtTime(this.quizSeconds);
    }

    const body = document.getElementById('quizBody');
    const selected = this.quizAnswers[q.id];
    const showResult = q.type === '多选题' ? this.quizSubmitted[q.id] === true : selected !== undefined;

    // 判断题自动生成对/错选项
    if (q.type === '判断题' && q.options.length === 0) {
      q.options = [{label:'A',text:'✅ 对 / 正确'},{label:'B',text:'❌ 错 / 错误'}];
    }

    let html = `<div class="quiz-question">
      <div class="q-title${q.topic === '重点' ? ' key-question' : ''}">${q.topic === '重点' ? '<span class="badge-key">⭐ 重点</span> ' : ''}<span class="badge badge-${q.level}">${q.level}</span> [${q.subject}] ${q.type} — ${this._esc(q.title)}</div>`;

    if (q.options && q.options.length > 0) {
      // 有选项的题目
      const isMulti = q.type === '多选题';
      html += q.options.map(o => {
        let cls = 'quiz-option';
        if (showResult) {
          const userSelected = isMulti ? (selected && selected.includes(o.label)) : selected === o.label;
          const isCorrect = isMulti ? q.answer.includes(o.label) : q.answer.startsWith(o.label);
          if (userSelected) cls += isCorrect ? ' correct' : ' wrong';
          else if (isCorrect) cls += ' correct';
        } else if (!isMulti && selected === o.label) {
          cls += ' selected';
        } else if (isMulti && selected && selected.includes(o.label)) {
          cls += ' selected';
        }
        const clickHandler = showResult ? '' : `onclick="app.selectOption('${q.id}','${o.label}',${isMulti})"`;
        return `<div class="${cls}" ${clickHandler}>${o.label}. ${this._esc(o.text)}</div>`;
      }).join('');
    } else if (q.answer && q.answer.length < 80 && (q.type === '单选题' || q.type === '多选题' || q.type === '判断题')) {
      // 短答案选择题（图片题，选项缺失但答案已知）→ 显示知识卡模式
      html += `<div style="background:rgba(108,92,231,0.08);border-radius:10px;padding:16px;margin:8px 0;">
        <p style="color:var(--text-secondary);font-size:13px;margin-bottom:8px;">📷 此题为图片题，原始选项未OCR识别</p>
        <p style="font-weight:600;">✅ 正确答案：<span style="color:var(--success);font-size:18px;">${this._esc(q.answer)}</span></p>
      </div>`;
      if (!showResult) {
        html += `<button onclick="app.skipQuestion('${q.id}')" style="margin-top:12px;padding:8px 24px;background:var(--primary);color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:14px;">✓ 记住答案，下一题</button>`;
      }
    } else {
      // 真·简答/程序题 → 文本输入
      html += `<textarea id="textAnswer_${q.id}" rows="4" style="width:100%;padding:12px;border:1px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text);font-size:14px;" placeholder="请输入你的答案...">${selected || ''}</textarea>`;
    }

    if (showResult) {
      const isCorrect = this._isAnswerCorrect(q, selected);
      html += `<div class="quiz-result ${isCorrect ? 'correct-answer' : 'wrong-answer'}">
        ${isCorrect ? '✅ 正确！' : '❌ 错误！'}<br>
        <strong>正确答案：</strong>${this._esc(q.answer)}<br>
        ${q.explanation ? '<strong>解析：</strong>' + this._esc(q.explanation) : ''}
      </div>`;
    }

    html += '</div>';
    body.innerHTML = html;
    this._updateQuizButtons();
  }

  selectOption(qid, label, isMulti) {
    if (isMulti) {
      if (!this.quizAnswers[qid]) this.quizAnswers[qid] = [];
      const arr = this.quizAnswers[qid];
      const idx = arr.indexOf(label);
      if (idx >= 0) arr.splice(idx, 1);
      else arr.push(label);
      this.renderQuizQuestion();
    } else {
      // 单选/判断题：选完立即提交（保存进度）
      this.quizAnswers[qid] = label;
      this.submitAnswer();
    }
  }

  submitAnswer() {
    if (!this.currentQuiz) return;
    const q = this.currentQuiz.questions[this.quizIndex];

    // 对于文本类型的题目，从textarea读取
    if (!q.options || q.options.length === 0) {
      const ta = document.getElementById(`textAnswer_${q.id}`);
      if (ta) this.quizAnswers[q.id] = ta.value;
    }

    const userAnswer = this.quizAnswers[q.id];
    if (!userAnswer || (Array.isArray(userAnswer) && userAnswer.length === 0)) {
      this.toast('⚠️ 请先选择或填写答案');
      return;
    }

    this.quizSubmitted[q.id] = true;
    const correct = this._isAnswerCorrect(q, userAnswer);
    if (correct) {
      this.dm.markCorrect(q);
      this.dm.removeWrong(q.id);
      this.dm.updateProgress(q.subject, q.topic, true);
    } else {
      this.dm.addWrong(q);
      this.dm.updateProgress(q.subject, q.topic, false);
    }
    this.renderQuizQuestion();
    this.renderDashboard();
  }

  _isAnswerCorrect(q, userAnswer) {
    if (!userAnswer) return false;
    const ans = q.answer.replace(/^\(?\d+\)\s*/gm, '').trim();
    if (q.type === '判断题') {
      const ua = Array.isArray(userAnswer) ? userAnswer[0] : String(userAnswer);
      if (ua === 'A') return ans.startsWith('对') || ans === '对';
      if (ua === 'B') return ans.startsWith('错') || ans === '错';
      return ans.includes(ua) || ua.includes(ans);
    }
    if (q.type === '多选题') {
      const userSet = [...new Set(Array.isArray(userAnswer) ? userAnswer : String(userAnswer).split(''))].sort().join('');
      const ansLabels = (ans.match(/[A-G]/g) || []).sort().join('');
      return userSet === ansLabels;
    }
    if (q.type === '单选题') {
      const ua = Array.isArray(userAnswer) ? userAnswer[0] : String(userAnswer);
      return ans.startsWith(ua) || ans.includes(ua + ':') || ans.includes(ua + ' ');
    }
    // 简答/填空/程序题：简单子串匹配
    const ua = Array.isArray(userAnswer) ? userAnswer.join(' ') : String(userAnswer);
    return ua.length > 1 && (ans.includes(ua.substring(0, 20)) || ua.includes(ans.substring(0, 20)));
  }

  navQuiz(dir) {
    const newIdx = this.quizIndex + dir;
    if (newIdx < 0 || newIdx >= this.currentQuiz.questions.length) return;
    this.quizIndex = newIdx;
    this.renderQuizQuestion();
  }

  skipQuestion(qid) {
    if (!this.currentQuiz) return;
    // 直接标记为已知答案，跳过
    this.quizAnswers[qid] = 'known';
    this.dm.markCorrect(this.currentQuiz.questions[this.quizIndex]);
    // 自动跳到下一题
    if (this.quizIndex + 1 < this.currentQuiz.questions.length) {
      this.quizIndex++;
      this.renderQuizQuestion();
    } else {
      this.closeQuiz();
    }
  }

  _updateQuizButtons() {
    const q = this.currentQuiz?.questions[this.quizIndex];
    const isMulti = q && q.type === '多选题';
    const answered = q && (isMulti ? this.quizSubmitted[q.id] : this.quizAnswers[q.id] !== undefined);
    document.getElementById('submitQ').textContent = answered ? '已提交 ✓' : '提交答案';
    document.getElementById('submitQ').style.opacity = answered ? '0.6' : '1';
  }

  submitExam() {
    if (this.quizTimer) clearInterval(this.quizTimer);
    // 自动提交所有未答题目
    let correct = 0;
    for (const q of this.currentQuiz.questions) {
      const ua = this.quizAnswers[q.id];
      if (ua && this._isAnswerCorrect(q, ua)) correct++;
    }
    const total = this.currentQuiz.questions.length;
    const score = Math.round(correct / total * 100);
    this.toast(`📝 考试结束！得分：${score}分 (${correct}/${total})`);
    this.closeQuiz();
  }

  // ===== 错题本 =====
  bindWrong() {
    document.getElementById('retryWrong').addEventListener('click', () => this.retryWrong());
    document.getElementById('clearWrong').addEventListener('click', () => {
      if (confirm('确定要清空所有错题吗？')) { this.dm.clearWrongBook(); this.renderWrong(); this.toast('🗑️ 错题本已清空'); }
    });
    document.getElementById('wSubject').addEventListener('change', () => this.renderWrong());
  }

  renderWrong() {
    const subject = document.getElementById('wSubject').value;
    let wrongs = this.dm.wrongBook;
    if (subject !== 'all') wrongs = wrongs.filter(w => w.subject === subject);

    const container = document.getElementById('wrongList');
    if (wrongs.length === 0) {
      container.innerHTML = '<div class="empty-state">🎉 暂无错题，继续保持！</div>';
      return;
    }

    // ===== 薄弱知识点分析（用KNOWLEDGE_BASE匹配） =====
    // 为每道错题匹配知识点
    const matchKp = (q) => {
      const kpList = KNOWLEDGE_BASE[q.subject]?.topics || [];
      let best = null, bestScore = 0;
      for (const kp of kpList) {
        let score = 0;
        const titleLower = q.title.toLowerCase();
        const answerLower = (q.answer || '').toLowerCase();
        for (const kw of kp.keywords) {
          const kwLower = kw.toLowerCase();
          if (titleLower.includes(kwLower)) score += 3;
          if (answerLower.includes(kwLower)) score += 1;
          // 选项中也匹配
          if ((q.options || []).some(o => (o.text || '').toLowerCase().includes(kwLower))) score += 1;
        }
        if (score > bestScore) { bestScore = score; best = kp; }
      }
      if (best && bestScore >= 1) return best;
      // 兜底：返回带科目名称的默认知识点
      const subjTips = {
        'Java Web': '本题属于Java Web范畴。建议重点复习：JSP/Servlet生命周期、9大隐式对象、Filter过滤器、MVC架构、Session/Cookie、JDBC操作、EL表达式与JSTL标签等核心考点。打开「知识点学习」筛选Java Web即可查看全部知识点。',
        'Linux': '本题属于Linux范畴。建议重点复习：文件目录命令(ls/cd/mkdir/rm/cp/mv)、权限管理chmod、vi/vim编辑器三大模式、Shell脚本编程、用户管理、管道重定向、打包压缩命令等。',
        'Hadoop': '本题属于Hadoop范畴。建议重点复习：HDFS架构(NameNode/DataNode)、YARN资源管理、MapReduce流程、Block与副本策略、HDFS常用Shell命令、配置文件等核心考点。',
        'Scala & Spark': '本题属于Scala & Spark范畴。建议重点复习：var/val变量、Tuple元组、RDD五大属性、Transformation/Action算子分类、宽窄依赖与Stage划分、Spark SQL编程等。',
        'HBase / ZooKeeper': '本题属于HBase/ZooKeeper范畴。建议重点复习：HBase架构(HMaster/RegionServer)、ZooKeeper选举机制、HBase数据模型(RowKey/列族/时间戳)、Shell命令、Java API等。',
        'Web前端': '本题属于Web前端范畴。建议重点复习：HTML标签与表单、CSS选择器与盒模型、CSS定位与布局、JavaScript变量与数据类型、DOM操作与事件处理等。'
      };
      const tip = subjTips[q.subject] || '请结合教材和课件复习本题涉及的知识点。';
      return { name: '其他知识点', level: 'C', content: tip, id: 'fallback' };
    };

    const analysis = {};
    for (const w of wrongs) {
      const subj = w.subject;
      if (!analysis[subj]) analysis[subj] = { count: 0, types: {}, kps: {}, questions: [] };
      analysis[subj].count++;
      analysis[subj].types[w.type] = (analysis[subj].types[w.type] || 0) + 1;
      const kp = matchKp(w);
      const kpKey = kp.name;
      if (!analysis[subj].kps[kpKey]) analysis[subj].kps[kpKey] = { kp, count: 0 };
      analysis[subj].kps[kpKey].count++;
      analysis[subj].questions.push({ title: w.title.substring(0, 60), kp: kp.name, kpId: kp.id });
    }

    const sortedSubj = Object.entries(analysis).sort((a, b) => b[1].count - a[1].count);
    let analysisHtml = '<div class="weak-analysis"><h3>📊 薄弱知识点分析</h3>';
    analysisHtml += '<p style="color:var(--text-secondary);font-size:13px;margin-bottom:16px;">以下是根据你的错题自动匹配的知识点，点击知识点可跳转到「知识点学习」页面复习。</p>';

    for (const [subj, data] of sortedSubj) {
      const totalInBank = this.dm.questions.filter(q => q.subject === subj).length;
      const weaknessPct = totalInBank > 0 ? Math.round(data.count / totalInBank * 100) : 0;
      const level = weaknessPct > 20 ? '🔴' : weaknessPct > 10 ? '🟡' : '🟢';
      const topKps = Object.entries(data.kps).sort((a, b) => b[1].count - a[1].count).slice(0, 6);
      const topTypes = Object.entries(data.types).sort((a, b) => b[1] - a[1]).slice(0, 3);

      analysisHtml += `<div class="wa-subject">
        <div class="wa-header">
          <span class="wa-icon">${level}</span>
          <strong>${subj}</strong>
          <span class="wa-count">${data.count}道错题 / ${totalInBank}题 (${weaknessPct}%)</span>
        </div>
        <div class="wa-kp-list">`;

      for (const [kpName, kpData] of topKps) {
        const kp = kpData.kp;
        const kpLevel = kp.level === 'A' ? '⭐' : kp.level === 'B' ? '📌' : '📖';
        const divId = 'wakp-' + subj.replace(/\s/g,'') + '-' + kp.id;
        analysisHtml += `<div class="wa-kp-item" id="${divId}">
          <span class="wa-kp-badge badge-${kp.level}">${kpLevel} ${kp.level}级</span>
          <span class="wa-kp-name" onclick="document.getElementById('${divId}').classList.toggle('wa-kp-expanded')">${kp.name} <span class="wa-kp-count">（错${kpData.count}题）</span> <span class="wa-kp-toggle">▶</span></span>
          <div class="wa-kp-full">${kp.content}</div>
        </div>`;
      }

      analysisHtml += '</div>';

      analysisHtml += `<div class="wa-types">
        <span class="wa-label">📝 易错题型：</span>`;
      analysisHtml += topTypes.map(([t, n]) => `<span class="wa-type-tag">${t}(${n})</span>`).join(' ');
      analysisHtml += '</div>';

      if (weaknessPct > 20) {
        analysisHtml += `<div class="wa-advice">⚠️ <strong>${subj}</strong> 错题率 ${weaknessPct}%，是重灾区！建议：①打开「🎯 老师重点」精读${subj}章节 ②点击上方知识点直接跳转复习 ③集中重做该科错题。</div>`;
      } else if (weaknessPct > 10) {
        analysisHtml += `<div class="wa-advice">📖 <strong>${subj}</strong> 错题率 ${weaknessPct}%，有一定薄弱。点击上方知识点名称可直达对应内容复习。</div>`;
      }

      analysisHtml += '</div>';
    }
    analysisHtml += '</div>';

    // 错题列表
    let listHtml = '<h3 style="margin-top:24px;">📝 错题列表（点击可逐题重做）</h3>';
    listHtml += wrongs.map(w => {
      const kp = matchKp(w);
      return `<div class="wrong-item" onclick="app.reviewWrongQuestion('${w.id}')">
        <div class="wi-header">
          <strong>${w.subject} · ${w.type}</strong>
          <span class="wi-meta">❌ ${w.retryCount || 1}次 | ${new Date(w.wrongTime).toLocaleDateString()}</span>
        </div>
        <div class="wi-question">${this._esc(w.title.substring(0, 150))}...</div>
        <div class="wi-topic">🏷 ${kp.name}</div>
      </div>`;
    }).join('');

    container.innerHTML = analysisHtml + listHtml;
  }

  jumpToKnowledge(subject, kpId) {
    // 跳转到知识点学习页面，筛选到指定科目
    document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
    const navItem = document.querySelector('[data-nav="knowledge"]');
    if (navItem) navItem.classList.add('active');
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById('knowledge');
    if (page) page.classList.add('active');
    // 设置科目筛选
    const kSubject = document.getElementById('kSubject');
    if (kSubject) { kSubject.value = subject; kSubject.dispatchEvent(new Event('change')); }
    this.renderKnowledge();
    // 滚动到知识点
    setTimeout(() => {
      const el = document.getElementById('kp-' + kpId);
      if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'center' }); el.style.background = 'rgba(255,71,87,0.1)'; setTimeout(() => el.style.background = '', 2000); }
    }, 300);
  }

  retryWrong() {
    const subject = document.getElementById('wSubject').value;
    let wrongs = this.dm.wrongBook;
    if (subject !== 'all') wrongs = wrongs.filter(w => w.subject === subject);
    if (wrongs.length === 0) { this.toast('🎉 没有错题可做！'); return; }
    // 直接使用错题本数据（保留完整题目信息），不依赖题库ID匹配
    if (wrongs.length === 0) { this.toast('🎉 没有错题可做！'); return; }
    this.openQuiz(this._shuffle([...wrongs]), 'practice');
  }

  reviewWrongQuestion(qid) {
    const q = this.dm.questions.find(q => q.id === qid) || this.dm.wrongBook.find(w => w.id === qid);
    if (!q) return;
    this.openQuiz([q], 'practice');
  }

  // ===== 记忆曲线复习 =====
  bindReview() { /* 数据在 renderReview 中刷新 */ }

  renderReview() {
    const dueReviews = this.dm.getDueReviews();
    const statsDiv = document.getElementById('reviewStats');
    statsDiv.innerHTML = `
      <div class="review-card"><div class="stat-num">${dueReviews.length}</div><div class="stat-label">待复习</div></div>
      <div class="review-card"><div class="stat-num">${this.dm.reviewTasks.length}</div><div class="stat-label">总复习任务</div></div>
    `;
    const listDiv = document.getElementById('reviewList');
    if (dueReviews.length === 0) {
      listDiv.innerHTML = '<div class="empty-state">✅ 暂无待复习内容，完成更多练习后会自动安排</div>';
      return;
    }
    listDiv.innerHTML = dueReviews.map(r => `
      <div class="review-task" style="cursor:pointer" onclick="app.startReviewTask('${r.qid}')">
        <span>📖 ${this._esc(r.title)}</span>
        <span style="font-size:12px;color:var(--text-secondary)">第${r.stage}轮复习 · ${r.subject}</span>
      </div>
    `).join('');
  }

  startReviewTask(qid) {
    const q = this.dm.questions.find(q => q.id === qid);
    if (!q) { this.toast('题目不存在'); return; }
    this.openQuiz([q], 'practice');
  }

  // ===== 考前预测卷 =====
  bindPredict() {
    document.getElementById('genPredict').addEventListener('click', () => this.generatePredict());
  }

  generatePredict() {
    if (this.dm.questions.length === 0) { this.toast('⚠️ 请先导入题库'); return; }

    // 策略：60% A级 + 30% B级(错题相关) + 10% 随机
    let pool = [];
    const aQuestions = this.dm.getQuestions({level: 'A'});
    const wrongIds = this.dm.wrongBook.map(w => w.id);
    const wrongQs = this.dm.getQuestions({ids: wrongIds}).filter(q => q.level === 'B');
    const allQs = this.dm.getQuestions();

    pool = [...this._shuffle(aQuestions).slice(0, 12), ...this._shuffle(wrongQs).slice(0, 6)];
    // 不足则补齐
    if (pool.length < 20) {
      const existing = new Set(pool.map(q => q.id));
      const fill = allQs.filter(q => !existing.has(q.id));
      pool = [...pool, ...this._shuffle(fill).slice(0, 20 - pool.length)];
    }
    pool = this._shuffle(pool).slice(0, 20);

    // 显示预测卷
    const area = document.getElementById('predictArea');
    area.innerHTML = `
      <div class="exam-config" style="flex-direction:column;align-items:flex-start;">
        <h3>🔮 考前预测卷 (共${pool.length}题，建议30分钟)</h3>
        <p style="font-size:14px;color:var(--text-secondary)">基于高频考点+错题分布生成 | A级占60% | 错题相关占30%</p>
        <table style="width:100%;font-size:13px;margin-top:12px;">
          <tr><th style="text-align:left;padding:8px;">#</th><th style="text-align:left;padding:8px;">科目</th><th style="text-align:left;padding:8px;">知识点</th><th style="text-align:left;padding:8px;">等级</th></tr>
          ${pool.map((q, i) => `
            <tr>
              <td style="padding:8px;">${i+1}</td>
              <td style="padding:8px;">${q.subject}</td>
              <td style="padding:8px;">${q.topic || '—'}</td>
              <td style="padding:8px;"><span class="badge badge-${q.level}">${q.level}</span></td>
            </tr>
          `).join('')}
        </table>
        <button class="btn-primary" style="margin-top:16px;" onclick="app.startPredictExam()">开始预测卷考试</button>
      </div>
    `;
    this._predictQuestions = pool;
  }

  startPredictExam() {
    if (!this._predictQuestions || this._predictQuestions.length === 0) return;
    this.openQuiz(this._predictQuestions, 'exam', 30 * 60);
  }

  // ===== 知识清单 =====
  loadChecklist() {
    this.checkedItems = new Set(JSON.parse(localStorage.getItem('exam_checklist') || '[]'));
    this.renderChecklist();
    document.getElementById('clSubject').addEventListener('change', () => this.renderChecklist());
    document.getElementById('clLevel').addEventListener('change', () => this.renderChecklist());
  }

  renderChecklist() {
    const subj = document.getElementById('clSubject').value;
    const lvl = document.getElementById('clLevel').value;
    let items = CHECKLIST.filter(it => {
      if (subj !== 'all' && it.subj !== subj) return false;
      if (lvl !== 'all' && it.lvl !== lvl) return false;
      return true;
    });

    const groups = {};
    for (const it of items) {
      if (!groups[it.subj]) groups[it.subj] = [];
      groups[it.subj].push(it);
    }

    const area = document.getElementById('checklistArea');
    let html = '';
    let totalChecked = 0;
    for (const [subj, its] of Object.entries(groups)) {
      const checked = its.filter(it => this.checkedItems.has(it.id)).length;
      const pct = Math.round(checked / its.length * 100);
      totalChecked += checked;
      const icons = { 'Java Web':'☕', 'Linux':'🐧', 'Hadoop':'🐘', 'Scala & Spark':'⚡', 'HBase / ZooKeeper':'🗄️', 'Web前端':'🌐' };
      html += `<div class="checklist-group">
        <div class="checklist-group-header">
          <h3>${icons[subj]||''} ${subj} <small style="color:var(--text-secondary)">${checked}/${its.length} (${pct}%)</small></h3>
        </div>
        <div class="cl-progress-bar"><div class="cl-progress-fill" style="width:${pct}%"></div></div>`;
      for (const it of its) {
        const isChecked = this.checkedItems.has(it.id);
        html += `<div class="checklist-item level-${it.lvl} ${isChecked ? 'checked' : ''}" onclick="app.toggleCheck('${it.id}')">
          <span class="checklist-check ${isChecked ? '' : 'unchecked'}">${isChecked ? '✅' : '⬜'}</span>
          <span class="checklist-text"><span class="badge badge-${it.lvl}">${it.lvl}</span>${this._esc(it.item)}</span>
        </div>`;
      }
      html += '</div>';
    }
    area.innerHTML = html;
    document.getElementById('clProgress').textContent = `总计: ${totalChecked}/${items.length} (${items.length?Math.round(totalChecked/items.length*100):0}%)`;
    this.populateChecklistSubjects();
  }

  populateChecklistSubjects() {
    const sel = document.getElementById('clSubject');
    if (!sel || sel.options.length > 1) return;
    const subjects = ['Java Web', 'Linux', 'Hadoop', 'Scala & Spark', 'HBase / ZooKeeper', 'Web前端'];
    const icons = { 'Java Web':'☕', 'Linux':'🐧', 'Hadoop':'🐘', 'Scala & Spark':'⚡', 'HBase / ZooKeeper':'🗄️', 'Web前端':'🌐' };
    for (const s of subjects) {
      const n = CHECKLIST.filter(it => it.subj === s).length;
      sel.innerHTML += `<option value="${s}">${icons[s]} ${s} (${n}点)</option>`;
    }
  }

  toggleCheck(id) {
    if (this.checkedItems.has(id)) this.checkedItems.delete(id);
    else this.checkedItems.add(id);
    localStorage.setItem('exam_checklist', JSON.stringify([...this.checkedItems]));
    this.renderChecklist();
  }

  // ===== 老师重点 =====
  renderKeypoints() {
    const tabsEl = document.getElementById('kpTabs');
    const contentEl = document.getElementById('kpContent');
    if (!tabsEl || !contentEl) return;

    // 如果数据为空，显示提示
    if (typeof TEACHER_KEYPOINTS === 'undefined' || Object.keys(TEACHER_KEYPOINTS).length === 0) {
      contentEl.innerHTML = '<div class="empty-state">📭 暂无老师重点数据，敬请期待</div>';
      return;
    }

    const subjects = Object.entries(TEACHER_KEYPOINTS);
    const activeSubject = this._kpSubject || subjects[0][0];
    this._kpSubject = activeSubject;

    // 渲染标签页
    tabsEl.innerHTML = subjects.map(([key, data]) =>
      `<button class="kp-tab ${key === activeSubject ? 'active' : ''}" onclick="app.switchKpSubject('${key}')">${data.icon} ${key}</button>`
    ).join('');

    const kp = TEACHER_KEYPOINTS[activeSubject];
    if (!kp) { contentEl.innerHTML = '<div class="empty-state">📭 该科目暂无重点数据</div>'; return; }

    let html = `<div class="kp-header">
      <h2>${kp.icon} ${kp.title}</h2>
      <p class="kp-source">📋 ${kp.source}</p>
      <p class="kp-intro">💡 ${kp.intro}</p>
    </div>`;

    // 渲染各章
    for (const ch of kp.chapters) {
      html += `<div class="kp-chapter">
        <div class="kp-chapter-title" onclick="this.parentElement.classList.toggle('collapsed')">
          <span class="kp-chapter-num">${ch.num}</span>
          <span>${ch.icon} ${ch.title}</span>
          <span class="kp-chapter-arrow">▼</span>
        </div>
        <div class="kp-chapter-body">`;

      for (const sec of ch.sections) {
        const badgeHtml = sec.badge ? `<span class="kp-badge">${sec.badge}</span>` : '';

        html += `<div class="kp-section">
          <h4>${badgeHtml} ${sec.title}</h4>`;

        // 根据类型渲染
        switch (sec.type) {
          case 'table':
            html += `<div class="kp-table-wrap"><table class="kp-table">
              <thead><tr>${sec.table.head.map(h => `<th>${h}</th>`).join('')}</tr></thead>
              <tbody>${sec.table.rows.map(r => `<tr>${r.map(c => `<td>${c.replace(/\n/g,'<br>')}</td>`).join('')}</tr>`).join('')}</tbody>
            </table></div>`;
            break;
          case 'cards':
            html += `<div class="kp-cards">${sec.cards.map(c =>
              `<div class="kp-card"><span class="kp-card-icon">${c.icon}</span><strong>${c.name}</strong><p>${c.scene}</p></div>`
            ).join('')}</div>`;
            break;
          case 'list':
            html += `<ul class="kp-list">${sec.items.map(it =>
              `<li>${it.label ? `<code>${it.label}</code> — ` : ''}${it.desc || ''}${it.code ? `<pre class="kp-inline-code">${this._esc(it.code)}</pre>` : ''}</li>`
            ).join('')}</ul>`;
            break;
          case 'code':
            html += `<pre class="kp-code">${this._esc(sec.code)}</pre>`;
            break;
          case 'numbered':
            html += `<ol class="kp-numbered">${sec.items.map(it =>
              `<li>${it}</li>`
            ).join('')}</ol>`;
            break;
          case 'text':
            html += `<div class="kp-text">${sec.text}</div>`;
            break;
          case 'comparison':
            html += `<div class="kp-compare">
              <div class="kp-compare-left"><h5>${sec.left.title}</h5><ul>${sec.left.items.map(i => `<li>${i}</li>`).join('')}</ul></div>
              <div class="kp-compare-vs">VS</div>
              <div class="kp-compare-right"><h5>${sec.right.title}</h5><ul>${sec.right.items.map(i => `<li>${i}</li>`).join('')}</ul></div>
            </div>`;
            break;
          case 'priority':
            html += `<div class="kp-priority">${sec.items.map(it =>
              `<div class="kp-priority-item"><span class="kp-priority-rank">${it.rank}</span><span class="kp-priority-label">${it.label}</span><span>${it.content}</span></div>`
            ).join('')}</div>`;
            break;
        }

        // 通俗解释
        if (sec.explain) {
          html += `<div class="kp-explain"><span class="kp-explain-icon">💡</span><span>${sec.explain}</span></div>`;
        }
        // 考试提示
        if (sec.examTip) {
          html += `<div class="kp-examtip"><span class="kp-examtip-icon">📌 考试提示：</span>${sec.examTip}</div>`;
        }

        html += '</div>';
      }

      html += '</div></div>';
    }

    contentEl.innerHTML = html;
  }

  switchKpSubject(key) {
    this._kpSubject = key;
    this.renderKeypoints();
    document.getElementById('keypoints').scrollIntoView({ behavior: 'smooth' });
  }

  // ===== 工具方法 =====
  _esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  _shuffle(arr) { const a = [...arr]; for (let i = a.length-1; i>0; i--) { const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
  _fmtTime(s) { const m = Math.floor(Math.max(0, s)/60); const sec = Math.max(0, s)%60; return `${m}:${String(sec).padStart(2,'0')}`; }
  toast(msg) { const t = document.getElementById('toast'); t.textContent = msg; t.classList.remove('hidden'); setTimeout(() => t.classList.add('hidden'), 2500); }
}

// ===== 启动 =====
const app = new ExamApp();
app.renderDashboard();
app.renderPlan();
app.renderKnowledge();
app.renderTutorialNav();

console.log('📚 期末冲刺学习系统已就绪！');
console.log('   - 点击左下角"导入题库"加载 questions.md');
console.log('   - 左侧菜单切换各功能模块');
console.log('   - "零基础教程"内置五科完整教材');
console.log('   - 数据自动保存到浏览器 localStorage');
