#!/usr/bin/env node
/* ================================================================
   为无解析题目自动生成解析（基于题目内容+答案+知识库）
   ================================================================ */
const fs = require('fs'), path = require('path');
const dbPath = path.join(__dirname, 'parsed', 'questions_data.js');
const m = fs.readFileSync(dbPath, 'utf8').match(/const PREPARSED_QUESTIONS = (\[[\s\S]*\]);/);
const all = JSON.parse(m[1]);

let gen = 0;

function explain(q) {
  if (q.explanation && q.explanation.trim()) return q.explanation;
  const t = (q.title + ' ' + (q.options||[]).map(o=>o.label+'.'+o.text).join(' ')).toLowerCase();
  const ans = (q.answer||'').toUpperCase().trim();
  const opts = q.options || [];

  // ===== HELPER: get correct answer text =====
  function ansText() {
    if (q.type === '多选题') {
      return [...ans].map(a => {
        const o = opts.find(o => o.label === a);
        return o ? a+'. '+o.text : a;
      }).join('；');
    }
    const o = opts.find(o => o.label === ans || (o.label===ans[0]));
    return o ? ans+'. '+o.text : ans;
  }

  // ===== Java Web =====
  if (/jsp.*useBean.*class.*正确/i.test(t)) return '正确写法必须同时指定id、class属性，并可通过scope设置作用域。' + ansText();
  if (/部署.*servlet.*描述错误/i.test(t)) return 'Servlet部署文件名为web.xml（不是server.xml），位于WEB-INF目录下。也可用@WebServlet注解方式。' + ansText();
  if (/requestdispatcher.*forward/i.test(t)) return 'getRequestDispatcher("a.jsp").forward(request,response) 表示将请求转发到a.jsp页面，URL不变，是服务器内部跳转。' + ansText();
  if (/javabean.*student.*class/i.test(t)) return 'useBean标签的class属性必须写完整包名.类名，且id和scope属性也要正确指定。' + ansText();
  if (/jstl.*counter.*if.*choose/i.test(t)) return 'Scriptlet中设置的变量counter无法直接被EL表达式访问（作用域不同），c:if条件不成立，isOdd未被设置，最终执行c:otherwise分支输出"it\'s an even"。' + ansText();
  if (/genericservlet.*说法错误/i.test(t)) return 'GenericServlet是一个抽象类（不是接口！），它实现了Servlet和ServletConfig两个接口，service方法是抽象方法。' + ansText();
  if (/tomcat.*端口.*占用.*修改.*配置文件/i.test(t)) return 'Tomcat端口配置在/conf/server.xml文件中，修改Connector元素的port属性即可。' + ansText();
  if (/不属于.*jsp.*隐式对象/i.test(t)) return 'JSP的9大隐式对象是：request/response/session/application/config/out/page/pageContext/exception。pageScope不是隐式对象，它是EL表达式的作用域对象。' + ansText();
  if (/web\.xml.*配置.*servlet.*logindemo.*目录/i.test(t)) return 'web.xml位于WEB-INF目录下，即LoginDemo/logindemo/WEB-INF/web.xml。WEB-INF是受保护目录，客户端无法直接访问。' + ansText();
  if (/过滤器.*实现.*接口/i.test(t)) return '自定义过滤器需实现javax.servlet.Filter接口，重写init()、doFilter()、destroy()三个方法。' + ansText();
  if (/\$\{empty ""\}/i.test(t)) return 'empty操作符判断null、空字符串或空集合。empty ""中""是空字符串，返回true。' + ansText();
  if (/login.*form.*servlet.*获得文本框/i.test(t)) return '在Servlet中通过request.getParameter("参数名")获取表单提交的值，参数名与input的name属性对应。' + ansText();
  if (/response.*状态码.*资源不可用/i.test(t)) return 'HTTP 404状态码表示请求的资源不存在或不可用。200成功、302重定向、500服务器内部错误。' + ansText();
  if (/设置客户端请求编码.*utf-8/i.test(t)) return 'request.setCharacterEncoding("UTF-8")用于设置请求体的字符编码，必须在获取任何请求参数之前调用才有效。' + ansText();
  if (/session.*描述不正确/i.test(t)) return '关于Session的正确理解：Session存储在服务器端，通过JSESSIONID Cookie关联客户端，同一客户端共享同一Session。' + ansText();
  if (/重定向.*代码正确/i.test(t)) return 'response.sendRedirect("url")是重定向的标准写法。注意是response对象调用，不是request！重定向是客户端行为，URL会改变。' + ansText();
  if (/jdbc.*加载.*oracle.*驱动/i.test(t)) return '加载Oracle驱动：Class.forName("oracle.jdbc.driver.OracleDriver")。不同数据库驱动类名不同。' + ansText();
  if (/mvc.*控制器.*谁担当/i.test(t)) return 'MVC模式中控制器(Controller)由Servlet担当，负责接收请求、调用Model处理数据、转发到View展示。' + ansText();
  if (/web-inf.*目录.*jsp.*描述正确/i.test(t)) return 'WEB-INF是受保护目录，客户端浏览器无法直接访问其下的资源，只能通过Servlet转发访问，这是安全设计。' + ansText();
  if (/servlet.*jsp.*描述错误/i.test(t)) return '本题考察Servlet和JSP的关系与区别。JSP最终被翻译成Servlet，两者本质上都是服务器端Java程序。' + ansText();
  if (/状态码.*表示.*重定向/i.test(t)) return '302表示临时重定向，sendRedirect()方法会触发302状态码。301是永久重定向，404未找到，500服务器错误。' + ansText();
  if (/web\.xml.*context-param.*webmaster.*取出/i.test(t)) return '在Servlet中通过getServletContext().getInitParameter("webmaster")获取context-param全局参数。' + ansText();
  if (/jsp.*指令.*描述正确/i.test(t)) return 'JSP三大指令(page/include/taglib)的正确用法：page设置页面属性，include编译时包含，taglib引入标签库。' + ansText();
  if (/不是.*servlet.*方法/i.test(t)) return 'Servlet生命周期方法是init()、service()/doGet()/doPost()、destroy()。getServletContext()是获取上下文对象的方法，不是生命周期方法。' + ansText();
  if (/服务器关闭.*释放.*servlet/i.test(t)) return 'destroy()方法在服务器关闭或卸载Web应用时调用，用于释放Servlet占用的资源，只调用一次。' + ansText();
  if (/jsp.*<%="1\+6"%>.*输出/i.test(t)) return 'JSP表达式<%= %>会计算其中的Java表达式并将结果转为字符串输出。"1+6"是字符串，直接输出1+6。若是<%=1+6%>则输出7。' + ansText();
  if (/el.*取得.*map.*值/i.test(t)) return 'EL表达式访问Map：${login["student.name"]}或${login.student.name}。当key含特殊字符(如点号)时需用[]形式。' + ansText();
  if (/page指令.*属性.*引用.*包/i.test(t)) return 'page指令的import属性用于导入Java类，相当于Java代码中的import语句。如<%@ page import="java.util.*" %>。' + ansText();
  if (/状态码.*资源不存在/i.test(t)) return '404 NOT FOUND表示服务器找不到请求的资源。200成功、302重定向、500内部错误。' + ansText();

  // ===== Linux =====
  if (/vi.*保存.*退出/i.test(t) && q.type==='单选题') return 'vi/vim中 :wq 或 :x 保存并退出。:q! 强制不保存退出。:w 仅保存不退出。:q 退出(文件未修改时)。' + ansText();
  if (/vi.*普通模式.*插入模式/i.test(t)) return '在vi普通模式下按 i 键进入插入模式（光标前插入）。a在光标后插入，o在下一行插入。Esc返回命令模式。' + ansText();
  if (/vi.*删除.*当前行/i.test(t)) return 'vi中dd删除光标所在整行。x删除单个字符。dw删除一个单词。D删除到行尾。' + ansText();
  if (/vi.*复制.*当前行/i.test(t)) return 'vi中yy(yank)复制当前行。p粘贴到下一行，P粘贴到上一行。dd剪切当前行。' + ansText();
  if (/vi.*撤销/i.test(t)) return 'vi中按u撤销上一步操作。Ctrl+r重做。.重复上一步操作。' + ansText();
  if (/vi.*查找.*字符串/i.test(t)) return 'vi中按/输入查找内容，回车后按n查找下一个，N查找上一个。?反向查找。' + ansText();
  if (/vi.*跳转.*末尾/i.test(t)) return 'vi中按G跳到文件最后一行。gg跳到第一行。nG跳到第n行。' + ansText();
  if (/vi.*跳转.*开头/i.test(t)) return 'vi中按gg跳到文件开头。G跳到末尾。:1跳到第一行。' + ansText();
  if (/vi.*不保存.*强制退出/i.test(t)) return ':q! 强制退出不保存。:wq保存退出。:x保存退出(文件有修改才保存)。:q退出(未修改时)。' + ansText();
  if (/存放.*linux.*基本命令.*目录/i.test(t)) return '/bin存放基本用户命令(如ls/cp/mv等)。/sbin存系统管理命令。/usr/bin存用户程序命令。' + ansText();
  if (/不是.*linux.*进程类型/i.test(t)) return 'Linux进程类型：交互进程、批处理进程、守护进程。就绪不是Linux进程类型分类。' + ansText();
  if (/登录.*linux.*唯一进程id/i.test(t)) return '登录时启动的Shell进程有唯一PID(Process ID)。UID是用户ID，NID/CID不是Linux标准概念。' + ansText();
  if (/shell.*声明变量.*赋值.*格式/i.test(t)) return 'Shell变量赋值：变量名=值，等号两边不能有空格！引用变量时加$符号。' + ansText();
  if (/单引号.*shell/i.test(t)) return 'Shell中单引号内所有字符原样输出，不解释变量。双引号内会解释$变量和命令替换。' + ansText();
  if (/root.*代表符号/i.test(t)) return '普通用户提示符为$，root(超级管理员)提示符为#。' + ansText();
  if (/shell.*说法.*不正确/i.test(t)) return 'Shell是解释型语言(不是编译型)，是用户与内核的接口，是命令解释器。' + ansText();
  if (/export.*命令.*作用/i.test(t)) return 'export命令用于将变量导出为环境变量，使其在子Shell中可用。' + ansText();
  if (/bash.*脚本.*第一行/i.test(t)) return 'Shell脚本第一行必须写#!/bin/bash，指定使用bash解释器执行。' + ansText();
  if (/查看文件.*内容.*linux/i.test(t) && /cat/i.test(t)) return 'cat命令用于查看文件全部内容。more分页显示(只能向下)。less可上下翻页。head/tail看头尾。' + ansText();
  if (/不属于.*linux操作系统/i.test(t)) return '本题考察哪些是Linux发行版。Red Hat/CentOS/Ubuntu/Debian都是Linux，Windows/MacOS不是。' + ansText();
  if (/软链接.*删除.*filea.*fileb/i.test(t)) return '软链接(符号链接)只是指向源文件的快捷方式。删除源文件后，软链接仍存在但变为无效(悬空链接)。' + ansText();
  if (/centos.*默认.*shell/i.test(t)) return 'CentOS和大多数Linux发行版的默认Shell是bash(Bourne Again Shell)。' + ansText();
  if (/终止.*用户.*所有进程/i.test(t)) return 'killall命令根据进程名终止所有同名进程。kill根据PID终止单个进程。pkill可根据用户名等条件终止。' + ansText();

  // ===== Hadoop =====
  if (/hdfs.*核心设计目标/i.test(t)) return 'HDFS核心设计目标：高容错性、高吞吐量、适合大数据集、流式数据访问、一次写入多次读取。' + ansText();
  if (/hdfs.*默认.*块.*大小/i.test(t)) return 'Hadoop 2.x中HDFS默认Block大小为128MB(Hadoop 1.x是64MB)。可通过dfs.blocksize参数配置。' + ansText();
  if (/namenode.*存储/i.test(t)) return 'NameNode存储文件系统的元数据(目录结构、文件与Block的映射关系等)，不存储实际数据。实际数据由DataNode存储。' + ansText();
  if (/hdfs.*副本.*默认/i.test(t)) return 'HDFS默认副本数为3(dfs.replication=3)，一个Block存3份分布在不同节点上提高容错。' + ansText();
  if (/secondarynamenode.*功能/i.test(t)) return 'SecondaryNameNode定期合并fsimage和edits日志，减轻NameNode重启时的加载压力。它不是NameNode的热备！' + ansText();
  if (/hdfs.*不适合.*大量小文件/i.test(t)) return 'HDFS不适合大量小文件：每个小文件一条元数据→NameNode内存压力大；大量小文件降低吞吐；每个小文件一个Map任务浪费资源。' + ansText();
  if (/datanode.*描述.*错误/i.test(t)) return 'DataNode负责存储实际数据块，定期向NameNode发送心跳和块报告。NameNode才负责元数据管理。' + ansText();
  if (/yarn.*resourcemanager.*职责/i.test(t)) return 'ResourceManager(RM)是YARN的主节点，负责全局资源调度和管理。不直接执行计算任务，而是通过AM和NM协作完成。' + ansText();
  if (/container.*是什么/i.test(t)) return 'Container是YARN中封装了CPU和Memory等资源的抽象单元，是任务运行的容器环境。' + ansText();
  if (/不是.*resourcemanager.*职责/i.test(t)) return 'ResourceManager不直接执行应用程序的计算任务，这由ApplicationMaster和NodeManager协作完成。' + ansText();
  if (/mapreduce.*核心.*不包括/i.test(t)) return 'MapReduce核心包括Map、Shuffle、Reduce阶段。YARN是独立的资源管理组件，不属于MapReduce框架本身。' + ansText();
  if (/map.*阶段.*任务/i.test(t)) return 'Map阶段负责将输入数据分片，转换为key-value键值对形式，为后续Reduce阶段做准备。' + ansText();
  if (/fs\.defaultfs/i.test(t)) return 'core-site.xml中的fs.defaultFS属性指定HDFS的默认文件系统地址。' + ansText();
  if (/core-site.*指定.*hdfs.*文件系统/i.test(t)) return 'fs.defaultFS在core-site.xml中配置，指定默认文件系统的URI(如hdfs://namenode:9000)。' + ansText();
  if (/yarn.*resourcemanager\.hostname/i.test(t)) return 'yarn-site.xml中的yarn.resourcemanager.hostname属性指定YARN资源管理器的主机名。' + ansText();
  if (/yarn.*application.*list/i.test(t)) return 'yarn application -list命令列出YARN中所有运行中的应用程序。' + ansText();

  // ===== HBase =====
  if (/hbase.*不依赖/i.test(t)) return 'HBase依赖HDFS存储数据、依赖ZooKeeper做分布式协调。MapReduce不是HBase的依赖，只是可选的计算工具。' + ansText();
  if (/hbase.*hdfs.*描述.*错误/i.test(t)) return 'HBase运行在HDFS之上提供实时随机读写能力。HDFS适合一次写入多次读取，不适合实时分析场景。' + ansText();
  if (/hbase.*稀疏.*特性/i.test(t)) return 'HBase的稀疏性指同一表中不同行可以有不同列，空列不占用存储空间。Schema灵活，列可动态增加。' + ansText();
  if (/hbase.*全称/i.test(t)) return 'HBase全称是Hadoop Database，是基于HDFS的分布式列式NoSQL数据库。' + ansText();
  if (/hbase.*设计参考/i.test(t)) return 'HBase设计参考了Google的Bigtable论文，类似Bigtable的开源实现。' + ansText();
  if (/hbase.*面向.*存储/i.test(t)) return 'HBase是面向列族(Column Family)存储的分布式数据库，同一列族的数据存储在一起。' + ansText();
  if (/hbase.*插入单行.*类/i.test(t)) return 'HBase Java API中使用Put类插入单行数据。Get获取单行，Scan扫描多行，Delete删除。' + ansText();
  if (/hbase.*获取单行.*类/i.test(t)) return 'HBase中使用Get类根据rowkey获取单行数据。Put插入，Scan扫描，Delete删除。' + ansText();
  if (/hbase.*扫描.*类/i.test(t)) return 'HBase中使用Scan类扫描多行数据，可设startRow和stopRow范围。Get只能获取单行。' + ansText();
  if (/hbase.*修改数据.*与.*相同/i.test(t)) return 'HBase中修改数据与插入数据的实现方式相同（都是Put操作），新版本会覆盖旧版本（通过时间戳区分）。' + ansText();
  if (/put.*addcolumn.*参数.*不包括/i.test(t)) return 'Put.addColumn()的参数依次为：列族名称(byte[])、列名称(byte[])、列值(byte[])。时间戳是可选的，不是必须参数。' + ansText();
  if (/hbase.*result.*解析/i.test(t)) return 'HBase中Result对象包含查询结果，CellUtil是解析单元格数据的工具类，Bytes用于字节转换。' + ansText();
  if (/关闭.*table.*方法/i.test(t)) return 'Table对象使用完毕后需调用table.close()关闭。Connection.close()关闭整个连接。ResultScanner也需关闭。' + ansText();

  // ===== 通用填空题 =====
  if (q.type === '填空题') {
    if (/jsp.*指令.*taglib/i.test(t)) return 'taglib指令用于引入JSTL等标签库：<%@ taglib prefix="c" uri="..." %>。';
    if (/jsp.*三个指令/i.test(t)) return 'JSP三大指令是page(页面属性设置)、include(静态包含)和taglib(引入标签库)。';
    if (/jsp.*转译.*编译.*tomcat/i.test(t)) return 'JSP转译后的.java和.class文件存放在Tomcat的work目录中。';
    if (/jsp.*9个.*内置对象/i.test(t)) return 'JSP 9大隐式对象：request/response/session/application/config/out/page/pageContext/exception。';
    if (/cookie.*session.*客户端.*服务器/i.test(t)) return 'Cookie是客户端会话技术(存浏览器)，Session是服务器端会话技术(存服务器内存)。';
    if (/tomcat.*端口号.*修改/i.test(t)) return 'Tomcat默认端口8080，在/conf/server.xml中的Connector元素修改port属性。项目war包部署在webapps目录。';
    if (/域对象.*获取.*删除.*数据/i.test(t)) return '域对象的getAttribute("key")获取数据，removeAttribute("key")删除数据。';
    if (/jsp.*脚本元素.*三种/i.test(t)) return 'JSP三种脚本元素：表达式(<%= %>)、Scriptlet(<% %>)、声明(<%! %>)。';
    if (/useBean.*创建.*javabean/i.test(t)) return '<jsp:useBean>标签用于在JSP中创建或获取JavaBean实例。';
    if (/servlet.*生命周期.*方法/i.test(t)) return 'Servlet生命周期方法：init()、service()、destroy()。控制Servlet从初始化到销毁的完整过程。';
    if (/linux.*权限.*数值.*文件类型/i.test(t)) return '权限r=4 w=2 x=1。l开头表示链接文件类型。';
    if (/shell.*返回值.*赋给.*变量/i.test(t)) return '命令替换两种方式：反引号`命令`和$(命令)。注意等号两边不能有空格。';
    if (/vim.*普通模式.*插入模式.*光标/i.test(t)) return 'vim中I在行首插入，a在光标下一个字符插入。i在当前位置，A在行尾。';
    if (/hdfs.*namenode.*yarn.*nodemanager/i.test(t)) return 'HDFS主节点进程是NameNode，YARN从节点进程是NodeManager。';
    if (/shuffle.*分区.*排序.*归并/i.test(t)) return 'Shuffle阶段的核心操作：分区(Partition)、排序(Sort)和归并(Merge)。';
    if (/hbase.*configuration.*连接/i.test(t)) return 'HBaseConfiguration.create()获取配置，ConnectionFactory.createConnection()建立连接。';
  }

  // ===== 通用: 根据答案生成解释 =====
  if (q.type === '判断题') {
    const label = ans === 'A' ? '正确' : '错误';
    return '本题的说法是' + label + '的。' + (ans==='A'?'该知识点表述准确，符合标准定义。':'该说法存在错误，请对照正确答案理解。');
  }

  if (q.type === '单选题' && opts.length >= 2) {
    const correct = opts.find(o => o.label === ans[0]);
    if (correct) return '正确答案是' + ansText() + '。' + (q.subject.includes('Java') ? '本题考察Java Web核心知识点，请结合教材和课件理解原因。' : q.subject.includes('Linux') ? '本题考察Linux操作系统的常用命令和概念。' : q.subject.includes('Hadoop') ? '本题考察Hadoop大数据技术相关知识点。' : '本题考察' + q.subject + '相关知识点。');
  }

  if (q.type === '多选题' && opts.length >= 2) {
    return '正确答案是' + ansText() + '。多选题需选出所有正确选项，少选或多选均不得分。';
  }

  if (q.type === '简答题') return '本题为简答题，请参照标准答案对比自己的回答，注意关键得分点。';
  if (q.type === '程序题') return '本题为程序题，请参照标准答案检查代码结构和关键语句是否正确。';

  return '请参照正确答案理解本题所考察的知识点。';
}

for (const q of all) {
  if (!q.explanation || q.explanation.trim() === '') {
    q.explanation = explain(q);
    gen++;
  }
}

console.log('✅ 生成解析: ' + gen + ' 题');
console.log('剩余无解析: ' + all.filter(q => !q.explanation || q.explanation.trim()==='').length);

// 写回
const newJs = `// 六科完整题库 — ${all.length}题 含复习重点全部知识点\nconst PREPARSED_QUESTIONS = ${JSON.stringify(all, null, 2)};\n`;
fs.writeFileSync(dbPath, newJs, 'utf8');
fs.writeFileSync(path.join(__dirname, 'parsed', 'questions_data.json'), JSON.stringify(all, null, 2), 'utf8');
console.log('✅ 已保存');
