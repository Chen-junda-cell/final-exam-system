#!/usr/bin/env node
/* Fix generic/bad explanations with detailed knowledge-based ones */
const fs=require('fs');
const m=fs.readFileSync('./parsed/questions_data.js','utf8').match(/const PREPARSED_QUESTIONS = (\[[\s\S]*\]);/);
const all=JSON.parse(m[1]);
let fixed=0;

function fixExp(q) {
  const t=(q.title+ ' '+(q.options||[]).map(o=>o.text).join(' ')).toLowerCase();
  const ans=q.answer, opts=q.options||[];

  // Helper: get answer option text
  function atxt(a){ const o=opts.find(o=>o.label===a[0]); return o?o.text:''; }

  // === Java Web ===
  if (/JSTL.*if.*choose.*counter/i.test(t))
    return 'EL表达式和JSTL标签无法直接访问Scriptlet中声明的变量(counter)。c:if条件不成立，isOdd未被设置，c:otherwise分支输出"it\'s an even"。';
  if (/response.*状态.*码.*资源不可用/i.test(t))
    return 'HTTP 404表示Not Found，服务器找不到请求的资源。200成功，302重定向，500服务器内部错误。';
  if (/描述.*错误.*servlet.*jsp/i.test(t))
    return 'A错误：JSP负责页面展示(View)，Servlet负责业务逻辑处理(Controller)，两者分工不同。Servlet可以同时处理显示和逻辑，JSP本质也是Servlet。';
  if (/不属于.*ServletConfig.*方法/i.test(t) || /servlet.*方法.*不是/i.test(t))
    return 'getServletContext()是获取ServletContext对象的方法，属于ServletConfig接口。本题要看哪个选项不是Servlet/Config的方法。';
  if (/JSP.*1\+6.*输出/i.test(t))
    return 'JSP表达式<%= %>计算Java表达式并输出。注意：<%=1+6%>输出7(算术运算)，<%="1+6"%>输出字符串"1+6"（字符串直接输出）。';
  if (/JDBC.*加载.*Oracle.*驱动/i.test(t))
    return 'Oracle驱动类：oracle.jdbc.driver.OracleDriver。MySQL：com.mysql.jdbc.Driver。通过Class.forName()加载驱动。';
  if (/Session.*描述.*不正确/i.test(t))
    return 'Session存储在服务器端，通过JSESSIONID Cookie关联客户端。同一客户端在同一会话内共享同一Session对象。';
  if (/重定向.*定位.*请求/i.test(t))
    return 'response.sendRedirect("url")是标准重定向写法。重定向是客户端行为：服务器返回302状态码+新URL，浏览器自动重新请求。URL会改变。注意是response调用不是request！';
  if (/Form.*Servlet.*文本框/i.test(t))
    return 'Servlet中通过request.getParameter("参数名")获取表单数据，参数名对应input标签的name属性。注意：不是getAttribute()！';
  if (/设置客户端编码.*UTF-8/i.test(t))
    return 'request.setCharacterEncoding("UTF-8")必须在获取任何请求参数之前调用才有效。只对POST请求体有效，GET请求需在Tomcat的server.xml中配置URIEncoding。';
  if (/JSP.*<%="1\+4"%>.*输出/i.test(t))
    return 'JSP表达式<%= %>输出Java表达式的结果。<%=1+4%>输出5(算术运算结果)。注意：表达式内不能以分号结尾！';
  if (/JSP.*代码.*不能编译/i.test(t))
    return '检查JSP代码合法性：Scriptlet(<% %>)可以写复杂Java逻辑，表达式<%= %>不能有分号，声明<%! %>定义成员变量/方法。';
  if (/声明.*Error.*page.*isErrorPage/i.test(t))
    return 'isErrorPage="false"表示当前页不是错误页，不能使用exception隐式对象。errorPage属性指定错误跳转页面。';
  if (/JSP.*描述.*正确/i.test(t))
    return 'JSP本质是Servlet：JSP文件在首次访问时被转译成.java(Servlet源码)，编译成.class，然后执行。JSP可以包含HTML和Java代码。';
  if (/MVC.*控制器.*担当/i.test(t))
    return 'MVC中Controller(控制器)由Servlet担当，负责接收请求参数→调用Model(JavaBean/DAO)处理业务→根据结果转发到View(JSP)展示。';
  if (/Servlet.*destroy.*释放/i.test(t))
    return 'destroy()在Servlet容器关闭或卸载Web应用时调用，用于释放资源(关闭数据库连接/文件流等)。仅调用一次，与init()对应。';
  if (/page.*指令.*属性.*引用.*包/i.test(t))
    return 'page指令的import属性导入Java类，相当于Java的import语句：<%@ page import="java.util.*,java.io.*" %>。多个包用逗号分隔。';
  if (/EL.*取得.*Session.*用户/i.test(t))
    return 'EL表达式${sessionScope.myuser.name}从Session中取出User对象并访问其name属性。EL自动从page→request→session→application作用域查找。';
  if (/EL.*隐含对象.*不是/i.test(t))
    return 'EL有11个隐式对象：pageContext/param/paramValues/header/headerValues/cookie/initParam/pageScope/requestScope/sessionScope/applicationScope。page不是EL隐含对象(它是JSP隐式对象)。';
  if (/GET.*POST.*陈述.*正确/i.test(t))
    return 'GET参数在URL中可见(有长度限制约2KB)，POST参数在请求体中(无长度限制更安全)。登录和上传文件必须用POST。GET适合搜索查询。';
  if (/Servlet.*POST.*中文乱码/i.test(t))
    return 'POST请求中文乱码解决：request.setCharacterEncoding("UTF-8")，必须在getParameter()之前调用。GET请求乱码需在Tomcat的server.xml中设置URIEncoding="UTF-8"。';
  if (/JSP.*定义.*方法.*元素/i.test(t))
    return 'JSP声明<%! %>用于定义成员变量和方法，编译后成为Servlet的成员。Scriptlet<% %>写逻辑代码，表达式<%= %>输出结果。';
  if (/代码.*<%!.*说法.*正确/i.test(t))
    return '<%! %>声明定义的是成员变量和方法，会编译为Servlet的成员(非局部变量)。注意：多线程访问时成员变量有线程安全问题！';
  if (/web\.xml.*context-param/i.test(t))
    return '在Servlet中通过getServletContext().getInitParameter("参数名")获取<context-param>全局参数。getInitParameter()不加getServletContext()前的是获取当前Servlet的<init-param>。';
  if (/JSP.*指令.*描述.*正确/i.test(t))
    return 'JSP三大指令：page(页面属性设置)、include(静态包含)、taglib(引入标签库)。指令语法：<%@ 指令名 属性="值" %>。';
  if (/WEB-INF.*目录.*描述.*正确/i.test(t))
    return 'WEB-INF是受保护目录，客户端浏览器无法直接访问。只能通过Servlet的RequestDispatcher转发访问，或作为资源文件由程序读取。';
  if (/ResponseDispatcher.*forward.*a\.jsp.*正确/i.test(t))
    return 'request.getRequestDispatcher("a.jsp").forward(request,response)将请求转发到a.jsp。这是服务器内部跳转，URL不变，请求和响应对象不变。';
  if (/useBean.*class.*bean\.Student.*正确/i.test(t))
    return 'jsp:useBean创建JavaBean实例：id指定对象名，class指定完整类路径(包名.类名)，scope指定作用域。class属性必须写完整包名。';
  if (/GenericServlet.*说法.*错误/i.test(t))
    return 'GenericServlet是抽象类不是接口。它实现了Servlet和ServletConfig接口，service方法是抽象方法需子类实现。它是HttpServlet的父类。';
  if (/Tomcat.*端口.*占用.*修改/i.test(t))
    return 'Tomcat默认端口8080，在conf/server.xml中修改Connector元素的port属性。注意是/conf目录不是/bin目录，修改的是Connector不是Connection。';
  if (/<%="1\+6"%>/i.test(t) && /hello|world/i.test(t))
    return 'JSP表达式<%= %>中"1+6"是字符串字面量，直接输出1+6。如果是算术运算需去掉引号：<%=1+6%>输出7。';
  if (/JSP.*MVC.*控制器/i.test(t)) 
    return 'MVC模式中Controller由Servlet担当：接收请求→调用Model(业务层)→根据结果选择View(JSP)展示。Servlet是调度中心，JSP只负责页面渲染。';
  if (/购物车.*存储/i.test(t))
    return '购物车数据应存在Session中，因为Session是用户级的(同一用户多次请求共享)，且Session存在服务器端更安全。Cookie只能存4KB小数据，不适合存购物车。';
  if (/创建.*Filter.*过滤器.*接口/i.test(t))
    return '自定义过滤器需实现javax.servlet.Filter接口，重写init()/doFilter()/destroy()三个方法。doFilter中必须调用chain.doFilter()放行。';
  if (/\<jsp:useBean.*setProperty.*getProperty/i.test(t))
    return 'jsp:useBean创建/获取JavaBean实例，jsp:setProperty设置属性值，jsp:getProperty获取属性值。name属性关联useBean的id，property指定JavaBean属性名。';
  if (/取.*map.*EL.*login/i.test(t))
    return 'EL访问Map：${map.key}或${map["key"]}。当key包含特殊字符(如.)时用[]形式：${login["student.name"]}。';
  if (/ServletConfig.*不是.*方法/i.test(t))
    return 'ServletConfig接口方法：getInitParameter()/getInitParameterNames()/getServletName()/getServletContext()。getServletInfo()是Servlet接口的方法。';
  if (/Servlet.*实现.*Servlet.*构造函数/i.test(t))
    return 'Servlet生命周期：加载类→实例化(调无参构造)→init()→service()/doGet/doPost→destroy()。自定义构造方法可能导致Servlet无法实例化。';
  if (/FilterConfig.*返回.*init.*名称/i.test(t))
    return 'FilterConfig.getInitParameterNames()返回所有初始化参数名称的Enumeration。getInitParameter(name)获取指定参数值，getFilterName()获取过滤器名。';

  // === Linux ===
  if (/用户.*a\.txt.*文件名.*改为.*txt\.a/i.test(t))
    return 'mv命令兼具移动和重命名功能。同目录内mv a.txt txt.a就是重命名操作。rm删除文件，cd切换目录，echo输出文本。';
  if (/删除文件.*命令/i.test(t))
    return 'rm(remove)命令删除文件或目录。mkdir创建目录，mv移动/重命名，move不是Linux命令(run是Windows的)。';
  if (/列出一个目录.*隐藏文件/i.test(t))
    return 'ls -a列出所有文件(含以.开头的隐藏文件)。ls默认不显示隐藏文件，ls -l显示详细信息，ls -D不是合法选项。';
  if (/复制.*file1\.txt.*file2\.txt/i.test(t))
    return 'cat file1.txt > file2.txt：cat输出file1内容，>重定向到file2，实现复制效果。最直接的复制命令是cp file1.txt file2.txt。';
  if (/压缩.*myfile\.txt\.tar\.gz/i.test(t))
    return 'tar -zcvf myfile.txt.tar.gz myfile.txt：z表示gzip压缩，c创建归档，v显示过程，f指定文件名。tar -zxvf是解压。';
  if (/列出目录.*所有文件/i.test(t))
    return 'ls -a(或ls --all)列出所有文件含隐藏文件。ls只列非隐藏，ls -l详细信息，ls -d列出目录本身。';
  if (/查看.*当前.*路径/i.test(t))
    return 'pwd(Print Working Directory)显示当前工作目录的完整绝对路径。cd切换目录，ls列出目录内容。';
  if (/重命名.*作用.*命令/i.test(t))
    return 'mv命令兼具移动和重命名功能。在同一目录内mv old new就是重命名。cp是复制，rm是删除，rename不是标准Linux命令。';
  if (/文件.*权限.*chmod.*764.*file/i.test(t))
    return 'chmod 764：7=rwx(所有者)，6=rw-(所属组)，4=r--(其他人)。所以权限为rwxrw-r--。';
  if (/新建文件.*命令/i.test(t))
    return 'touch命令创建空文件(如已存在则更新访问和修改时间戳)。mkdir创建目录，cat查看/创建文件内容，vi编辑文件。';
  if (/i节点.*描述.*错误/i.test(t))
    return 'inode存储文件的元数据(大小/权限/时间戳/数据块指针等)，但不包含文件名。文件名存在目录的目录项中。一个inode可对应多个文件名(硬链接)。';
  if (/显示.*文件.*最后.*10行/i.test(t))
    return 'tail -n 10 文件名 显示最后10行(tail默认10行)。head显示开头，cat显示全部，more分页。注意：tail是查看末尾，不是开头。';
  if (/压缩.*归档.*name\.zip.*解压/i.test(t))
    return 'unzip name.zip解压zip格式文件。gunzip解压.gz，tar -zxvf解压.tar.gz，bunzip2解压.bz2。';
  if (/top.*命令.*描述.*正确/i.test(t))
    return 'top实时动态显示系统进程信息(CPU/内存占用等)，类似Windows任务管理器。ps是静态快照，kill是终止进程。';
  if (/n1.*行.*n2.*行.*拷贝.*n3/i.test(t))
    return 'vi末行模式:n1,n2 co n3表示将第n1到n2行复制(拷贝)到第n3行下方。co是copy的缩写。m是移动，d是删除。';
  if (/Shell.*注释符/i.test(t))
    return '#在Shell脚本中表示注释。#!/bin/bash中的#!是特殊标记(Shebang)不是注释。//不是Shell注释(Java/C++用)。';
  if (/cd.*命令.*回车.*结果/i.test(t))
    return 'cd不带参数直接回车，回到当前用户的家目录(与cd ~效果相同)。如果当前就在家目录则不变化。';
  if (/切换.*John.*主目录/i.test(t))
    return 'cd ~John切换到用户John的主目录。~表示home目录，~用户名表示指定用户的家目录。';
  if (/改变.*文件.*所有者/i.test(t))
    return 'chown(change owner)改变文件所有者和所属组。chmod改权限，chgrp只改组，touch改时间戳。';
  if (/自由软件.*含义/i.test(t))
    return '自由软件(Free Software)强调自由而非免费：用户可以自由运行、复制、分发、研究、修改和改进软件。可以收费，但必须提供源代码。';
  if (/不属于.*linux.*操作系统/i.test(t))
    return 'Linux发行版包括RedHat/CentOS/Ubuntu/Debian/SUSE等。Windows/MacOS/FreeBSD不是Linux发行版。';
  if (/shell.*declare.*number.*脚本.*输出/i.test(t))
    return 'declare -i声明整数变量，Number=1+2+3自动计算为6。echo "$Number"输出6。如果用单引号则不解析变量输出$Number。';
  if (/vi.*dd.*命令.*描述/i.test(t))
    return 'vi中dd删除光标所在整行(命令模式下)。删除后不进入插入模式，仍在命令模式。d是delete，dd删行。';
  if (/tar.*归档.*列出.*详细/i.test(t))
    return 'tar -tvf列出归档内容(-t意为list)。tar -cvf创建归档，tar -xvf解压。注意：-t不是-tar，tar命令本身已有t选项。';
  if (/etc\/passwd.*存放/i.test(t))
    return '/etc/passwd存储用户账号基本信息(用户名/UID/GID/家目录/Shell等)。密码实际存在/etc/shadow(加密)。用户组信息在/etc/group。';
  if (/2>&1.*意义/i.test(t))
    return '2>&1将标准错误输出(文件描述符2)重定向到标准输出(文件描述符1)。这样错误信息和正常输出合并到同一流。常用于收集所有输出。';
  if (/centos.*linux.*默认.*shell/i.test(t))
    return 'CentOS和大多数Linux发行版默认Shell是bash(Bourne Again Shell)。其他Shell：sh(Bourne)、csh、zsh、ksh等。';
  if (/解压缩.*tar.*文件.*命令/i.test(t))
    return 'tar -xzvf解压.tar.gz或.tgz文件(x解压，z用gzip，v显示过程，f指定文件)。tar -czvf是压缩，tar -tzvf是查看内容。';
  if (/FTP.*传输.*端口/i.test(t))
    return 'FTP使用两个端口：20(数据传输端口)和21(控制连接端口)。主动模式服务器用20端口传数据，被动模式随机端口。';
  if (/软链接.*符号链接.*删除.*fileA.*fileB/i.test(t))
    return 'fileB是fileA的符号链接(软链接)。删除fileA(源文件)后，fileB仍然存在但成为悬空链接(指向无效路径)，属于无效文件。';
  if (/安装.*Linux.*方式.*错误/i.test(t))
    return '图形安装模式界面友好但消耗更多系统资源(内存/显存)。字符安装模式资源消耗少，速度略快。不是图形省资源。';
  if (/终止.*用户.*所有.*进程/i.test(t))
    return 'killall根据进程名终止该用户的所有同名进程。kill需指定PID终止单个进程。pkill可根据用户名等条件终止。skill也可以终止进程。';
  if (/挂载.*CD-ROM.*命令/i.test(t))
    return 'mount /dev/cdrom /mnt/cdrom挂载光驱到指定目录。umount是卸载，eject弹出光驱，fdisk是磁盘分区。';
  if (/vi.*重复.*上一次.*操作/i.test(t))
    return 'vi命令模式下按.(英文句号)重复上一次的编辑操作(如删除/粘贴/插入等)。这是vi非常常用的快捷操作。';
  if (/单引号.*SHELL/i.test(t))
    return 'Shell单引号内所有字符原样输出不解释：变量不展开，特殊字符不转义。双引号内会解释$变量、命令替换等。反引号或$()执行命令替换。';
  if (/root.*代表符号/i.test(t))
    return 'root用户提示符为#，普通用户提示符为$。提示符格式：[用户名@主机名 当前目录]提示符。可通过PS1环境变量自定义。';
  if (/关于Shell.*说法.*不正确/i.test(t))
    return 'Shell是解释型语言(逐行解释执行)，不是编译型语言(不需要先编译成二进制)。它是用户与Linux内核之间的命令解释器。';
  if (/export.*命令.*作用/i.test(t))
    return 'export将变量提升为环境变量，使其在子Shell进程中可用。不加export的变量仅在当前Shell有效，子进程无法访问。';
  if (/bash.*shell.*脚本.*第一行/i.test(t))
    return 'Shell脚本首行必须写#!/bin/bash(Shebang)，指定使用bash解释器执行此脚本。#注释符表示注释行。';
  if (/查看.*文件.*内容.*linux/i.test(t))
    return 'cat显示文件全部内容(concatenate)。more分页显示(只向下)，less可上下翻页，head/tail显示头尾。';
  if (/如果.*列出一个目录.*所有.*文件/i.test(t))
    return 'ls -a列出所有文件(含.开头的隐藏文件)。-l详细信息，-R递归子目录，-t按时间排序，-S按大小排序。';
  if (/按下.*终止.*当前.*运行.*命令/i.test(t))
    return 'Ctrl+C发送SIGINT信号终止前台正在运行的程序。Ctrl+D发送EOF(文件结束符)，Ctrl+Z挂起程序放入后台。';
  if (/cd.*命令.*改变.*当前.*目录.*键入.*cd.*回车/i.test(t))
    return 'cd(无参数)回到当前用户的家目录，等同于cd ~。若当前目录就是家目录则不会变化。';
  if (/关于.*文件.*链接.*删除.*描述/i.test(t))
    return '硬链接与原文件共享同一inode。删原文件后硬链接仍可访问数据(因为inode和数据块未被释放)。软链接会失效。';
  if (/FTP.*传输.*端口.*20.*21/i.test(t))
    return 'FTP协议使用两个端口：20端口用于实际数据传输，21端口用于控制连接(发送FTP命令和响应)。考试常考20和21。';
  if (/shell.*单引号.*双引号.*SHELL/i.test(t))
    return '单引号内所有字符原样输出(变量$name不被替换)。双引号内变量和命令替换会被解析。反引号或$()执行命令并替换为输出。';
  if (/删除文件.*命令.*实现/i.test(t))
    return 'rm(remove)命令删除文件或目录。常用：rm -f(强制删除不提示)、rm -r(递归删除目录)、rm -rf(强制递归删除，慎用)。';

  // === Hadoop ===
  if (/MapReduce.*map.*阶段.*任务/i.test(t))
    return 'Map阶段负责将输入数据分片(Split)，每个分片由一个Map Task处理，转换为key-value键值对，为后续Shuffle和Reduce做准备。';
  if (/MapReduce.*核心.*不包括/i.test(t))
    return 'MapReduce核心包括Map(映射转换)、Shuffle(洗牌排序)、Reduce(聚合汇总)三个阶段。YARN是独立资源管理框架，不属于MapReduce核心。';
  if (/Shuffle.*阶段.*核心.*操作/i.test(t))
    return 'Shuffle核心操作：分区(Partition决定数据去哪个Reducer)、排序(Sort按键排序)、归并(Merge合并多个Map输出)。这三步是MapReduce性能的关键。';

  // === Java Web (more) ===
  if (/不是.*Servlet.*方法|不属于.*Servlet.*方法/i.test(t))
    return 'Servlet生命周期方法包括init()、service()/doGet()/doPost()、destroy()。getServletContext()是获取上下文的方法不是生命周期方法。';
  if (/不是.*EL.*隐含对象/i.test(t))
    return 'EL的11个隐式对象：pageContext/param/paramValues/header/headerValues/cookie/initParam/pageScope/requestScope/sessionScope/applicationScope。注意与JSP的9个隐式对象区分！';
  if (/HttpServletRequest.*获取.*请求.*参数/i.test(t))
    return 'request.getParameter("参数名")获取单个参数值(返回String)。getParameterValues()获取多值(如checkbox)，getParameterNames()获取所有参数名枚举。';
  if (/User.*user.*setName.*Jack.*session.*取出.*EL/i.test(t))
    return 'EL表达式${sessionScope.myuser.name}从session中取出myuser对象并访问其name属性。EL自动从page→request→session→application查找。';
  if (/<%!.*String.*temp.*说法.*正确/i.test(t))
    return '<%! %>声明定义成员变量和方法。这里temp是成员变量，convertMoney是成员方法。注意：多线程并发访问时成员变量有线程安全问题！';
  if (/JavaWeb.*项目.*部署.*错误/i.test(t))
    return 'Web项目部署：war包放webapps目录自动解压，或直接放项目文件夹。WEB-INF受保护不可直接访问。/bin不是部署目录。';
  if (/内置.*对象.*作用域.*最大/i.test(t))
    return '四大作用域从小到大：page(当前页)→request(一次请求)→session(一次会话)→application(整个应用)。application作用域最大，所有用户共享。';
  if (/下面.*说法.*错误.*JSP|关于.*说法.*错误.*web/i.test(t))
    return '需根据具体选项判断。常见错误说法：JSP不能写Java代码(错)、Servlet不能输出HTML(错)、Filter只能过滤IP(错)等。';
  if (/执行.*SQL.*语句.*对象/i.test(t))
    return 'Statement和PreparedStatement都用于执行SQL。PreparedStatement是预编译的(防SQL注入，用?占位符)。CallableStatement用于调用存储过程。';
  if (/JavaBean.*叙述.*不正确/i.test(t))
    return 'JavaBean规范：public类、private属性、public的getter/setter方法、无参构造方法。boolean属性用isXxx()而非getXxx()。JavaBean不必继承特定类。';
  if (/page.*指令.*作用/i.test(t))
    return 'page指令设置JSP页面全局属性：import(导包)、pageEncoding(编码)、contentType(响应类型)、errorPage(错误页)、isErrorPage(是否错误页)、session(是否启用session)。';
  if (/不能.*编译.*运行.*代码|错误.*编译|编译.*错误/i.test(t))
    return 'JSP中需要注意：表达式<%= %>不能以分号结尾；Scriptlet<% %>写Java代码正常加分号；声明<%! %>定义成员；HTML和Java代码混合时注意语法。';
  if (/JSTL.*标签.*循环.*显示.*数据/i.test(t))
    return '<c:forEach items="集合" var="变量名">循环遍历集合数据。c:if是条件判断(无else)，c:choose/c:when/c:otherwise是多分支选择。';
  if (/myjsp.*errorPage.*isErrorPage.*false/i.test(t))
    return 'isErrorPage="false"表示当前页不是错误处理页，不能使用exception对象。errorPage="error.jsp"指定出错时跳转的页面。';
  if (/作用域.*由小到大/i.test(t))
    return '四大作用域从小到大：page(本页有效)→request(一次请求)→session(一次会话)→application(整个应用)。setAttribute存，getAttribute取。';
  if (/OneServlet.*implements.*Servlet.*构造.*说法/i.test(t))
    return '实现Servlet接口需重写init()/service()/destroy()等方法。构造方法应为public(容器通过反射调用无参构造实例化Servlet)。private构造会导致实例化失败。';
  if (/JSTL标签库.*指令/i.test(t))
    return 'taglib指令引入JSTL标签库：<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>。prefix是使用时的前缀，uri标识标签库。';
  if (/保存.*会话.*客户端.*服务器/i.test(t))
    return 'Cookie是客户端会话技术(数据存浏览器)，Session是服务器端会话技术(数据存服务器)。Cookie不安全但有记忆功能，Session安全但占服务器资源。';
  if (/文章.*点击率.*对象.*保存/i.test(t))
    return 'application(ServletContext)是整个Web应用共享的作用域，适合存储所有用户共用的数据如点击率、访问量。session是单用户私有。';
  if (/setCharacterEncoding.*编码|request.*编码.*UTF/i.test(t))
    return 'request.setCharacterEncoding("UTF-8")设置请求体编码(必须在getParameter前调用)。GET请求编码在Tomcat的server.xml中用URIEncoding="UTF-8"设置。';
  if (/取.*表单.*提交.*参数.*request.*方法/i.test(t))
    return 'request.getParameter("input的name值")获取表单数据。getAttribute()是获取域对象中存储的属性(由setAttribute设置)，两者不同！';
  if (/转译时期.*请求时期|JSP.*网页.*两个时期/i.test(t))
    return '两个时期：①转译时期(JSP→Servlet源码.java→编译.class)；②请求时期(执行.class响应请求)。首次访问经历两时期，后续访问仅请求时期。';
  if (/useBean.*创建.*Java.*Bean/i.test(t))
    return '<jsp:useBean id="实例名" class="包名.类名" scope="作用域"/>创建或获取JavaBean实例。若作用域中不存在则自动创建。';
  if (/jsp.*指令.*描述.*正确.*<%@/i.test(t))
    return 'JSP三大指令：page(页面设置)、include(静态包含)、taglib(引入标签)。指令以<%@开头%>结尾，在转译时期生效。';
  if (/pageScope.*不是.*隐式对象/i.test(t))
    return 'JSP的9大隐式对象：request/response/session/application/config/out/page/pageContext/exception。注意pageScope不是JSP隐式对象。';
  if (/su.*root.*切换|普通用户.*root|临时.*改变.*root/i.test(t))
    return 'su(switch user)切换用户。su - 完整切换root(加载环境变量)。sudo以root权限执行单条命令。退出用exit返回原用户。';
  if (/JSP.*作用域.*小.*大/i.test(t))
    return '作用域范围：page<request<session<application。page只在当前页；request一次请求内；session一次会话内(多请求)；application全局(多用户)。';

  // === Linux (more) ===
  if (/userinfo.*修改.*stuinfo/i.test(t))
    return 'mv userinfo stuinfo在同一目录内实现重命名。mv兼具移动和重命名功能。cp是复制，cat是查看，echo是输出。';
  if (/普通用户.*转换.*超级用户/i.test(t))
    return 'su(switch user)命令切换用户。不加用户名默认切换root。su - 完整切换(加载root环境变量)。sudo以root权限执行单条命令。';
  if (/usermod.*无法.*实现/i.test(t))
    return 'usermod用于修改用户账户属性(用户名/家目录/组/锁定等)，但不能删除账户！删除账户需用userdel(加-r删家目录)。这是考试陷阱！';
  if (/显示.*文件.*最后.*几行/i.test(t))
    return 'tail默认显示文件最后10行，tail -n N显示最后N行。head显示开头，cat显示全部，more/less分页显示。';
  if (/查看.*文件.*类型/i.test(t))
    return 'file命令判断文件类型(普通文件/目录/链接/可执行文件等)。whatis查看命令简要说明，type显示命令类型(内置/外部)。';
  if (/a开头.*两个.*字符.*文件/i.test(t))
    return 'ls a?列出以a开头且文件名恰好两个字符的文件。?通配符匹配任意单个字符。*匹配任意多个字符。';
  if (/查找.*文件.*test\.txt/i.test(t))
    return 'find / -name test.txt从根目录递归查找名为test.txt的文件。locate更快(基于数据库)，which查找命令位置。';
  if (/grep.*查找.*字符串|查找.*包含.*行/i.test(t))
    return 'grep "关键词" 文件名在文件中查找包含指定字符串的行。-i忽略大小写，-n显示行号，-v反向匹配(不包含)，-r递归目录。';
  if (/chmod.*755.*文件|权限.*755/i.test(t))
    return '755 = rwxr-xr-x：所有者读写执行(7)、所属组读执行(5)、其他人读执行(5)。最常用的权限设置(目录默认权限)。';
  if (/chmod.*777.*文件|所有.*用户.*读.*写.*执行/i.test(t))
    return 'chmod 777 = rwxrwxrwx，所有人都拥有全部权限。风险极高，仅测试使用。生产中应用最小权限原则。';
  if (/kill.*896|终止.*进程.*896/i.test(t))
    return 'kill 896向PID为896的进程发送终止信号。kill -9强制终止。killall根据进程名终止。kill -l列出所有信号。';
  if (/uname.*hostname/i.test(t))
    return 'uname显示系统信息(内核版本等)，hostname显示/设置主机名。uname -a显示全部系统信息。cat /proc/cpuinfo查看CPU信息。';
  if (/tar.*zcf.*demo/i.test(t))
    return 'tar -zcf demo.tar.gz demo/：z=gzip压缩，c=创建归档，f=指定文件名。等价于tar -zcvf(少v不显示过程)。';
  if (/ps.*-aux.*进程/i.test(t))
    return 'ps -aux(BSD风格)或ps aux查看所有进程详细信息。ps -ef(标准风格)。top实时动态显示。aux不是单词是选项组合。';
  if (/管道.*前一个.*命令.*后一个.*命令/i.test(t))
    return '管道符|将前一个命令的标准输出(stdout)作为后一个命令的标准输入(stdin)。多个命令可用|串联。管道传递的是文本流。';
  if (/权限.*645|权限.*数值.*链接/i.test(t))
    return '权限645：所有者rw-(6)、所属组r--(4)、其他人r-x(5)。l开头表示链接文件(符号链接)。d目录，-普通文件。';
  if (/tar.*xvzf.*myftp.*根目录/i.test(t))
    return 'tar xvzf myftp.tar.gz -C /：x解压，v显示过程，z用gzip，f指定文件，-C指定解压到根目录/。不加-C解压到当前目录。';
  if (/反引号.*命令.*shell.*变量/i.test(t))
    return '命令执行结果赋值给变量的两种方式：①反引号`命令`(传统)；②$(命令)(推荐，支持嵌套)。注意变量赋值等号两边不能有空格。';
  if (/提示符.*管理员.*普通用户/i.test(t))
    return 'root用户命令提示符为#(井号)，普通用户为$(美元符)。提示符可通过PS1环境变量自定义。';
  if (/useradd.*-d.*家目录/i.test(t))
    return 'useradd -d /home/ttt milan创建用户milan并指定家目录为/home/ttt。默认家目录在/home/用户名。';
  if (/ping.*通信.*路径/i.test(t))
    return 'ping通过ICMP协议测试网络连通性。traceroute追踪路由路径。telnet测试端口是否开放。nslookup解析域名。';
  if (/shutdown.*-h.*\+30/i.test(t))
    return 'shutdown -h +30表示30分钟后关机。-h表示halt(关机)，+N表示N分钟后。shutdown -c取消定时关机。';
  if (/tmp.*rwxrwxrwx.*rw-rw-rw/i.test(t))
    return 'chmod a-x tmp去掉所有用户的执行权限：rwx→rw-。chmod 666 tmp也可以实现rw-rw-rw-。';
  if (/ps.*-aux.*进程.*超级用户/i.test(t))
    return 'ps -aux(或ps aux)查看所有用户的所有进程详细信息。ps -ef列出完整格式。注意：aux中间没有空格是BSD风格。';
  if (/网络.*连接.*桥接.*NAT.*Host/i.test(t))
    return 'VMware虚拟网络三种模式：桥接(虚拟机与主机同网段)、NAT(虚拟机通过主机上网)、Host-Only(仅主机模式，虚拟机只能与主机通信)。';
  if (/shutdown.*12:30.*取消/i.test(t))
    return 'shutdown -h 12:30定时关机。shutdown -c取消之前设置的关机计划。shutdown -r重启。';
  if (/root@localhost.*行首.*提示/i.test(t))
    return '[root@localhost home]#：root(当前用户)、localhost(主机名)、home(当前目录)、#(root提示符)。普通用户提示符为$。';
  if (/gzip.*压缩.*\.gz/i.test(t))
    return 'gzip命令压缩文件生成.gz格式。gunzip或gzip -d解压。tar -zcvf整合了tar打包和gzip压缩。zip是另一种压缩格式。';
  if (/userdel.*-r.*参数/i.test(t))
    return '创建用户：useradd -d指定家目录。删除用户：userdel -r同时删除家目录(不加-r仅删账号保留家目录)。';
  if (/file1.*file2.*合并.*file3/i.test(t))
    return 'cat file1 file2 > file3将两个文件内容合并输出到file3。cat可以拼接多个文件。cp只能复制单个文件。';
  if (/ls.*pwd/i.test(t))
    return 'ls查看当前目录内容(list)，pwd显示当前目录路径(Print Working Directory)。ls -l详细信息，ls -a含隐藏文件。';
  if (/source.*环境.*变量.*生效/i.test(t))
    return 'source /etc/profile使修改后的环境变量立即生效。等价于. /etc/profile。退出终端重新登录也可生效。';
  if (/mv.*aaa.*bbb/i.test(t))
    return 'mv aaa bbb在同一目录内将aaa重命名为bbb。mv兼具移动(跨目录)和重命名(同目录)功能。';

  // === Hadoop (more) ===
  if (/hdfs.*128MB|500MB.*block/i.test(t))
    return 'HDFS Block默认128MB(Hadoop 2.x+)。500MB文件→4个Block(128+128+128+116MB)。最后一个Block不满128MB按实际大小存储。';
  if (/HDFS.*查看.*文件.*命令.*-cat/i.test(t))
    return 'hdfs dfs -cat 文件路径 查看HDFS文件内容并输出到控制台。类似Linux cat命令。hdfs dfs -text也可查看压缩文件。';
  if (/MapReduce.*Job.*getInstance/i.test(t))
    return 'Job.getInstance(conf)创建MapReduce Job对象(新API)。旧API用new Job(conf)。Partitioner类用于自定义分区逻辑。';
  if (/Writable.*序列化.*排序.*WritableComparable/i.test(t))
    return '自定义序列化实现Writable接口，自定义排序需实现WritableComparable接口(继承Writable+Comparable)。Hadoop序列化比Java序列化更紧凑高效。';
  if (/HDFS.*NameNode.*YARN.*NodeManager/i.test(t))
    return 'HDFS主节点进程NameNode(管理元数据)，YARN从节点进程NodeManager(管理单节点资源)。HDFS从节点是DataNode，YARN主节点是ResourceManager。';
  if (/HA.*NameNode.*故障.*ZooKeeper/i.test(t))
    return 'Hadoop HA用ZooKeeper实现NameNode状态监控和故障自动切换。触发条件：Active NameNode宕机/心跳超时/JVM进程挂掉等。';
  if (/namenode.*format.*start-dfs/i.test(t))
    return 'hdfs namenode -format格式化NameNode(仅首次！)。start-dfs.sh启动HDFS集群(NameNode+DataNode+SecondaryNameNode)。';
  if (/HDFS.*Java.*API.*配置.*文件系统/i.test(t))
    return 'Configuration类读取/设置Hadoop配置。FileSystem.get(conf)获取HDFS文件系统对象用于操作文件和目录。';
  if (/MapReduce.*默认.*输入.*类型/i.test(t))
    return 'MapReduce默认输入：key=LongWritable(字节偏移量)，value=Text(一行文本内容)。由TextInputFormat产生。';
  if (/分布式.*存储.*分布式.*计算/i.test(t))
    return 'Hadoop核心：HDFS负责分布式存储(NameNode+DataNode)，MapReduce负责分布式计算(Map+Reduce)。YARN负责资源调度管理。';
  if (/HDFS.*创建.*目录.*hdfs.*dfs.*-mkdir/i.test(t))
    return 'hdfs dfs -mkdir -p /one/two创建多级目录(-p递归创建父目录)。hdfs dfs -ls /three列出目录内容。';
  if (/Hadoop.*三大.*核心.*组件/i.test(t))
    return 'Hadoop三大核心组件：HDFS(分布式文件系统)、MapReduce(分布式计算框架)、YARN(资源管理系统)。Hadoop生态还包括Hive/HBase/Spark等。';
  if (/大数据.*特点.*不属于/i.test(t))
    return '大数据4V特点：Volume(大量)、Velocity(高速)、Variety(多样)、Value(价值密度低)。结构化不是大数据特点之一。5V加了Veracity(真实性)。';
  if (/实时.*处理.*业务.*场景/i.test(t))
    return '实时处理：Spark Streaming/Flink处理流式数据。适用场景：实时监控告警、实时推荐、实时大屏展示。离线批处理：MapReduce/Spark处理历史数据。';
  if (/离线.*批处理.*不正确/i.test(t))
    return '离线批处理处理海量历史数据(非实时)，延迟高但吞吐量大。MapReduce是典型离线批处理框架。不正确选项一般是关于实时性/低延迟的描述。';
  if (/HA.*错误/i.test(t))
    return 'HDFS HA(高可用)有Active和Standby两个NameNode。Standby不是热备(不能同时提供服务)，故障时自动切换。需要ZooKeeper和JournalNode支持。';

  // === HBase / ZooKeeper (more) ===
  if (/NoSQL.*特点.*不包括/i.test(t))
    return 'NoSQL特点：Schema灵活(无需预定义)、易扩展(水平扩展)、高并发读写、BASE(最终一致性)。不支持ACID事务和复杂SQL查询(JOIN等)。';
  if (/非关系型.*不包括/i.test(t))
    return '非关系型数据库(NoSQL)特点：分布式、Schema灵活、CAP取舍。不包括：强ACID事务、复杂SQL JOIN、固定表结构等传统RDBMS特性。';
  if (/关系型.*瓶颈.*海量/i.test(t))
    return 'RDBMS处理海量数据的主要瓶颈：单机存储有限(无法水平扩展)、JOIN操作开销大、Schema修改困难(锁表)。不包括：索引查询速度(有索引时很快)。';
  if (/key-value.*数据库/i.test(t))
    return 'Redis是最典型的key-value内存数据库，支持高性能并发读写。HBase是列族存储，MongoDB是文档型，Neo4j是图数据库。';
  if (/Google.*三驾马车/i.test(t))
    return 'Google三驾马车：GFS(分布式文件系统)→HDFS，MapReduce(分布式计算)→Hadoop MR，Bigtable(分布式数据库)→HBase。三者是大数据技术的理论基础。';
  if (/HBase.*安装.*模式/i.test(t))
    return 'HBase安装模式：单机模式(Standalone，所有组件一个JVM)和分布式模式(伪分布式+完全分布式)。分布式模式需HDFS和ZK支持。';
  if (/HBase.*配置文件.*分布式/i.test(t))
    return 'hbase.cluster.distributed=true开启HBase分布式模式。false为单机模式。分布式模式还需配置hbase.zookeeper.quorum(ZK地址)。';
  if (/HBase.*启动.*jps.*进程/i.test(t))
    return '启动HBase前需确保HDFS已启动(NameNode和DataNode进程)。jps命令验证Java进程。还需ZooKeeper进程(QuorumPeerMain)运行。';
  if (/ZooKeeper.*设计.*模式/i.test(t))
    return 'ZooKeeper基于观察者模式(Observer Pattern)设计。客户端可在ZNode上注册Watcher，当节点数据变化时ZK主动通知客户端。';
  if (/zkCli.*退出/i.test(t))
    return 'quit或exit退出ZK客户端zkCli.sh。Ctrl+C也可以终止进程。zkServer.sh是ZK服务端脚本。';
  if (/单机.*HBase.*不使用.*HDFS/i.test(t))
    return '单机模式HBase使用本地文件系统(非HDFS)。所有组件(HMaster/RegionServer/ZK)运行在一个JVM中。适合开发和测试。';
  if (/HBASE_MANAGES_ZK.*false/i.test(t))
    return 'export HBASE_MANAGES_ZK=false在hbase-env.sh中设置，表示使用外部独立ZK集群。true使用HBase自带的ZK(仅测试用)。';
  if (/ZK.*过半.*启动/i.test(t))
    return 'ZK集群启动条件：超过半数节点正常运行(过半机制)。3台需≥2台，5台需≥3台。这就是为什么ZK集群通常是奇数台。';
  if (/source.*环境.*变量.*生效/i.test(t))
    return 'source /etc/profile使环境变量配置立即生效。等价于 . /etc/profile(dot命令)。修改~/.bashrc后用source ~/.bashrc生效。';
  if (/三驾马车|google.*三驾马车/i.test(t))
    return 'Google三驾马车：GFS(2003，分布式文件系统)、MapReduce(2004，分布式计算)、Bigtable(2006，分布式数据库)。三者构成了Hadoop生态的理论基础。';

  // === Last batch ===
  if (/不是.*Servlet.*对象.*方法|不属于.*Servlet.*方法/i.test(t))
    return 'Servlet生命周期方法包括init()/service()/doGet()/doPost()/destroy()。getServletConfig()和getServletContext()是获取配置/上下文的方法，不是生命周期方法。需看具体选项判断。';
  if (/<%!.*String.*temp.*convertMoney/i.test(t))
    return '<%! %>声明定义成员变量(temp)和成员方法(convertMoney)。注意：①方法体内不能直接用out(JSP隐式对象)，需通过参数传递；②成员变量有线程安全问题，多用户并发访问会共享。';
  if (/不能.*编译.*运行.*代码|代码.*不能.*编译/i.test(t))
    return '需检查代码：①表达式<%= %>不能以分号结尾；②<%! %>声明中可以定义方法；③Java代码写在<% %>中正常；④引号/括号是否匹配；⑤类名/方法名是否正确。';
  if (/OneServlet.*implements.*Servlet.*private/i.test(t))
    return 'Servlet容器通过反射调用无参构造方法实例化Servlet。若构造方法声明为private，容器无法访问，导致实例化失败。构造方法必须为public且无参。';
  if (/JSP.*taglib.*JSTL.*指令/i.test(t))
    return 'taglib指令引入标签库：<%@ taglib prefix="前缀" uri="标签库URI" %>。JSTL核心库prefix="c"，函数库prefix="fn"。';
  if (/useBean.*标签.*创建.*Java.*Bean/i.test(t))
    return '<jsp:useBean id="对象名" class="包名.类名" scope="page|request|session|application"/>创建或获取JavaBean实例。若作用域中不存在该对象则自动创建。';
  if (/建立.*新文件.*命令|新建.*空文件/i.test(t))
    return 'touch命令创建空文件(若文件存在则更新访问和修改时间戳为当前时间)。mkdir创建目录，cat配合>可创建含内容的文件。';
  if (/确定.*文件类型.*命令|MyFile.*类型/i.test(t))
    return 'file命令判断文件类型(文本/二进制/目录/链接/Socket等)。它通过读取文件头部魔数(magic number)来判断，不依赖扩展名。';
  if (/a开头.*两个.*字符.*文件|ls.*a\?/i.test(t))
    return 'ls a?：?通配符匹配任意单个字符。a?表示以a开头且文件名恰好2个字符。a*匹配所有a开头的文件(任意长度)。';
  if (/cd.*命令.*回车.*结果|键入cd.*回车/i.test(t))
    return 'cd命令无参数直接回车回到当前用户的家目录(等同于cd ~)。若当前已在主目录则不变化。cd ..返回上级目录。';

  // === 填空题 specific ===
  if (/l-rw-.*数值.*链接/i.test(t)) return '权限645(所有者rw-=6，组r--=4，其他r-x=5)。l开头表示链接文件(符号链接)。';
  if (/myftp\.tar\.gz.*解压.*根目录/i.test(t)) return 'tar xvzf myftp.tar.gz -C /：-C指定解压到根目录。不加-C解压到当前目录。';
  if (/反引号.*命令.*结果.*变量/i.test(t)) return '两种方式：反引号`命令`和$(命令)。推荐$()(可嵌套，更清晰)。';
  if (/提示符.*管理员.*root/i.test(t)) return '普通用户提示符为$，root管理员提示符为#。通过PS1环境变量可自定义。';
  if (/useradd.*milam.*家目录.*ttt/i.test(t)) return 'useradd -d /home/ttt milan创建用户并指定家目录。-d指定家目录路径。';
  if (/ping.*通信.*畅通|测试.*连通/i.test(t)) return 'ping命令通过ICMP协议测试网络连通性。ping域名/IP地址发送数据包并等待回应。';
  if (/find.*test\.txt/i.test(t)) return 'find / -name test.txt从根目录递归查找。locate更快(基于数据库)，grep搜索文件内容。';
  if (/chmod.*755.*rwxr-xr-x/i.test(t)) return 'chmod 755：7=rwx(所有者) 5=r-x(组) 5=r-x(其他人)。最常用权限。';
  if (/mv.*移动.*重命名/i.test(t)) return 'mv命令兼具移动(跨目录)和重命名(同目录)功能。这是Linux基础命令。';
  if (/默认.*管理员.*用户.*home|创建用户.*home.*目录/i.test(t)) return '新建用户默认家目录在/home/用户名。root用户家目录在/root。';
  if (/\$#.*参数.*个数/i.test(t)) return '$#表示传递给脚本的位置参数个数。$@和$*表示所有参数。$0脚本名，$1第1个参数。';
  if (/shutdown.*30.*分钟/i.test(t)) return 'shutdown -h +30表示30分钟后关机。-h=halt关机，+N=N分钟后。';
  if (/kill.*896|终止.*896/i.test(t)) return 'kill 896终止PID为896的进程。kill -9强制终止。killall按进程名终止。';
  if (/NAT.*Host.*桥接.*网络.*模式/i.test(t)) return 'VMware三种网络模式：桥接(独立IP)、NAT(共享主机IP上网)、Host-Only(仅与主机通信)。';
  if (/shutdown.*12:30.*取消/i.test(t)) return 'shutdown -h 12:30定时关机，shutdown -c取消计划。shutdown -r重启。';
  if (/gzip.*压缩.*\.gz/i.test(t)) return 'gzip命令压缩文件生成.gz后缀。gunzip或gzip -d解压。tar -zcvf整合打包+压缩。';
  if (/创建.*用户.*指定.*家.*参数.*删除.*家.*参数/i.test(t)) return 'useradd -d指定家目录。userdel -r删除用户并同时删除家目录。';
  if (/ls.*列出.*目录.*pwd.*查看.*当前/i.test(t)) return 'ls列出目录内容，pwd显示当前路径(Print Working Directory)。';
  if (/uname.*hostname.*计算机/i.test(t)) return 'uname显示系统内核信息，hostname显示/设置主机名。uname -a显示全部信息。';
  if (/tar.*zcf.*demo|打包.*压缩.*demo/i.test(t)) return 'tar -zcf demo.tar.gz demo/：z=gzip c=创建 f=文件名。等价于tar -zcvf。';
  if (/ps.*-aux.*进程.*信息/i.test(t)) return 'ps aux(或ps -aux)查看所有进程详细信息。top实时监控，pstree树形显示。';
  if (/管道.*标准.*输出.*输入/i.test(t)) return '管道符|：将前一个命令的标准输出连接为后一个命令的标准输入。实现命令间数据传递。';
  if (/aaa.*bbb.*改名/i.test(t)) return 'mv aaa bbb在同一目录内将文件重命名。mv兼具移动和重命名功能。';
  if (/chmod.*644.*rw-r--r--/i.test(t)) return 'chmod 644：所有者rw-(6) 组r--(4) 其他r--(4)。文件默认权限。';
  if (/HDFS.*128MB|500MB.*block|文件.*大小.*分割/i.test(t)) return '500MB÷128MB=3余116，需要4个Block(3个128MB+1个116MB)。';
  if (/hdfs.*dfs.*-cat.*查看.*内容/i.test(t)) return 'hdfs dfs -cat 路径查看HDFS文件内容并输出到标准输出。类似Linux cat命令。';
  if (/Job\.getInstance.*Partitioner/i.test(t)) return 'Job.getInstance(conf)创建Job对象。自定义分区继承Partitioner类重写getPartition方法。';
  if (/Writable.*WritableComparable/i.test(t)) return '自定义序列化实现Writable接口，自定义排序实现WritableComparable接口(继承Writable+Comparable)。';
  if (/NameNode.*NodeManager/i.test(t)) return 'HDFS主节点进程NameNode，YARN从节点进程NodeManager。DataNode是HDFS从节点。';
  if (/HA.*ZooKeeper.*故障/i.test(t)) return 'Hadoop HA用ZooKeeper实现NameNode故障监控和自动切换。触发条件：Active宕机/心跳超时等。';
  if (/HDFS.*创建.*目录.*命令|hdfs.*dfs.*-mkdir.*-p/i.test(t)) return 'hdfs dfs -mkdir -p /one/two递归创建多级目录。hdfs dfs -ls /three列出目录内容。';
  if (/大数据.*特点.*不属于/i.test(t)) return '大数据4V：Volume(大量)/Velocity(高速)/Variety(多样)/Value(价值密度低)。不是结构化数据。';
  if (/实时.*处理.*业务.*场景/i.test(t)) return '实时处理适合：实时告警/实时推荐/实时风控/大屏监控。离线批处理适合：日报/周报/历史分析。';
  if (/namenode.*format.*start-dfs/i.test(t)) return 'hdfs namenode -format格式化(仅首次)，start-dfs.sh启动HDFS。start-yarn.sh启动YARN。';
  if (/RDBMS.*海量.*瓶颈.*不包括/i.test(t)) return 'RDBMS大数据瓶颈：单机容量有限、JOIN开销大、Schema固定不易扩展。高性能索引不是瓶颈。';
  if (/namespace.*删除.*命名空间/i.test(t)) return '只能删除空的命名空间(不含任何表)。非空namespace需先列出并删除其中所有表，再删除namespace。';
  if (/source.*环境.*变量.*生效/i.test(t)) return 'source /etc/profile使修改的环境变量立即生效。等价命令：. /etc/profile。';
  if (/hbase.*cluster.*distributed.*true/i.test(t)) return 'hbase.cluster.distributed=true开启HBase分布式模式。false为单机模式(默认)。';
  if (/zkCli.*退出.*quit/i.test(t)) return 'quit或exit退出ZK客户端zkCli.sh。Ctrl+C亦可终止。';
  if (/HBASE_MANAGES_ZK.*false.*外部/i.test(t)) return 'export HBASE_MANAGES_ZK=false使用外部ZK集群。true(默认)使用HBase自带ZK。';
  if (/ZK.*过半.*启动.*半数/i.test(t)) return 'ZK集群需超过半数节点正常运行才能提供服务(过半机制)。3台需≥2台启动。';
  if (/HMaster.*RegionServer.*ZooKeeper.*核心.*组件/i.test(t)) return 'HBase三大核心组件：HMaster(主节点管理)、RegionServer(从节点读写)、ZooKeeper(集群协调)。';
  if (/tableExists.*createTable/i.test(t)) return 'admin.tableExists(TableName)判断表存在，admin.createTable(TableDescriptor)创建表。';
  if (/压缩.*指令.*tar.*zcvf|压缩.*tar.*选项/i.test(t)) return 'tar -zcvf正确压缩指令：z=gzip，c=create创建，v=verbose显示过程，f=file指定文件名。tar -xzvf是解压。';
  if (/解压缩.*tar.*文件/i.test(t)) return 'tar -xzvf解压.tar.gz(.tgz)格式文件：x=extract解压，z=gzip，v=verbose，f=file。';
  if (/grep.*查找.*字符串.*文件|查找.*设定.*条件.*字符串/i.test(t)) return 'grep命令在文件中查找匹配的字符串(支持正则表达式)。-i忽略大小写，-n显示行号，-v反向匹配。';
  if (/符号链接.*删除.*fileB.*失效/i.test(t)) return '软链接(符号链接)存储的是源文件的路径。删除源文件后，符号链接仍然存在但指向无效路径(悬空链接)。硬链接不受影响。';
  if (/etc.*配置文件.*存放/i.test(t)) return '/etc目录存放系统和服务的配置文件(如/etc/passwd、/etc/hosts、/etc/profile等)。';
  if (/find.*-name.*test/i.test(t)) return 'find / -name test.txt从根目录递归查找。find 目录 -name 文件名。locate更快但依赖数据库。';
  if (/ps.*-aux.*超级.*用户.*全部/i.test(t)) return 'ps aux(或ps -aux)显示所有用户的所有进程详细信息。top实时动态显示。';
  if (/chmod.*777.*filename/i.test(t)) return 'chmod 777 filename赋予所有用户读写执行权限(rwxrwxrwx)。风险极高，仅测试用。';
  if (/grep.*teacher.*test\.txt/i.test(t)) return 'grep "teacher" test.txt在文件中查找包含teacher的行。grep -i忽略大小写，-n显示行号。';
  if (/cd.*命令.*改变.*目录.*键入cd/i.test(t)) return 'cd不带参数直接回车回到当前用户家目录。等同于cd ~。cd ..返回上级。';

  return null;
}

for (const q of all) {
  const newExp = fixExp(q);
  if (newExp) {
    q.explanation = newExp;
    fixed++;
  }
}

console.log('Fixed:', fixed, 'explanations');
// Check remaining generics
const stillGen = all.filter(q => q.explanation && /核心知识点.*请结合教材|常用命令.*请结合教材|相关知识点.*请结合教材|请参照正确答案/.test(q.explanation));
console.log('Still generic:', stillGen.length);
if (stillGen.length > 0) {
  stillGen.slice(0,10).forEach(q => console.log('  '+q.id, q.subject, q.title.substring(0,60)));
}

const newJs='const PREPARSED_QUESTIONS = '+JSON.stringify(all,null,2)+';';
fs.writeFileSync('./parsed/questions_data.js','// 六科完整题库 — '+all.length+'题\n'+newJs,'utf8');
fs.writeFileSync('./parsed/questions_data.json', JSON.stringify(all,null,2), 'utf8');
console.log('Done');
