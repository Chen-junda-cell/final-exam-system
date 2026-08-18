#!/usr/bin/env node
const fs=require('fs');
const m=fs.readFileSync('./parsed/questions_data.js','utf8').match(/const PREPARSED_QUESTIONS = (\[[\s\S]*\]);/);
const all=JSON.parse(m[1]);
let nid=parseInt(all[all.length-1].id.substring(3));
function addQ(s,t,title,opts,ans,exp){
  nid++;
  all.push({subject:s,type:t,title,options:opts||[],answer:ans,explanation:exp||'',topic:'',id:'GEN'+String(nid).padStart(4,'0'),level:'B',correctCount:0,wrongCount:0,lastPractice:null,nextReview:null,reviewStage:0});
}

// addQ(subject, type, title, options, answer, explanation)
// ===== 多选题 20道 =====
addQ('Linux','多选题','哪条命令可回到主目录( )。',[{label:'A',text:'cd'},{label:'B',text:'cd ~'},{label:'C',text:'cd -'},{label:'D',text:'cd $HOME'}],'ABD','cd和cd ~回到当前用户主目录。cd $HOME同理。cd -回到上次目录。');
addQ('HBase / ZooKeeper','多选题','HBase Region Server包含的核心组件有？',[{label:'A',text:'Store'},{label:'B',text:'Region'},{label:'C',text:'BlockCache'},{label:'D',text:'HLog/WALs'}],'ABCD','RegionServer包含Region/Store/BlockCache/HLog四大核心组件。');
addQ('HBase / ZooKeeper','多选题','关于HBase数据模型的特性，下列说法正确的是？',[{label:'A',text:'RowKey以字节数组存储按字典序排序'},{label:'B',text:'列族创建表时必须指定列可动态添加'},{label:'C',text:'Cell数据版本按时间戳升序最新版本在最后'},{label:'D',text:'Timestamp默认由HBase自动赋值精确到毫秒'}],'ABD','Cell版本默认按时间戳降序(最新在前)，不是升序。');
addQ('HBase / ZooKeeper','多选题','在Windows环境搭建HBase开发环境时,需要以下哪些步骤?',[{label:'A',text:'hadoop.dll放C:\\Windows\\System32'},{label:'B',text:'winutils.exe放Hadoop解压目录bin下'},{label:'C',text:'配置HBASE_HOME环境变量'},{label:'D',text:'配置HADOOP_HOME环境变量'}],'ABCD','四个步骤都需要。');
addQ('Linux','多选题','Linux 系统中的时间戳涉及( )。',[{label:'A',text:'mtime'},{label:'B',text:'wtime'},{label:'C',text:'atime'},{label:'D',text:'ctime'}],'ACD','Linux三个时间戳：mtime(修改)、atime(访问)、ctime(状态改变)。wtime不存在。');
addQ('HBase / ZooKeeper','多选题','HBase 中修改表结构的操作需要使用( )。',[{label:'A',text:'put'},{label:'B',text:'chmod'},{label:'C',text:'alter'},{label:'D',text:'disable'}],'CD','修改表结构用alter，需先disable。put是数据操作，chmod是Linux命令。');
addQ('HBase / ZooKeeper','多选题','Zookeeper 的节点类型不包括( )。',[{label:'A',text:'临时节点'},{label:'B',text:'计算节点'},{label:'C',text:'存储节点'},{label:'D',text:'持久节点'}],'BC','ZK节点：持久/临时/持久顺序/临时顺序。计算和存储节点不是ZK类型。');
addQ('HBase / ZooKeeper','多选题','以下关于HBase Region Server组件的描述，正确的有哪些？',[{label:'A',text:'Store对应列族每个Store包含一个或多个StoreFile'},{label:'B',text:'MemStore数据按随机顺序存储刷写时再排序'},{label:'C',text:'HLog用于在数据写入MemStore前记录操作日志防数据丢失'},{label:'D',text:'Region Server负责管理多个Region每个Region对应表一个数据分区'}],'ACD','MemStore数据按RowKey有序存储，不是随机。');
addQ('HBase / ZooKeeper','多选题','以下( )项目创始人是同一人。',[{label:'A',text:'Nutch'},{label:'B',text:'Hadoop'},{label:'C',text:'Avro'},{label:'D',text:'Lucene'}],'ABCD','Nutch/Hadoop/Avro/Lucene都由Doug Cutting创建。');
addQ('HBase / ZooKeeper','多选题','下列关于HBase架构与数据模型的描述，正确的有哪些？',[{label:'A',text:'.META表是HBase目录表记录所有Region位置信息'},{label:'B',text:'每个Region Server只能管理一个Region'},{label:'C',text:'HBase表的Schema由表名和列族名组成'},{label:'D',text:'命名空间可用于多租户场景下的数据隔离'}],'ACD','一个RegionServer管理多个Region。其他都正确。');
addQ('HBase / ZooKeeper','多选题','创建HBase maven项目时，以下关于pom.xml配置的说法正确的是？',[{label:'A',text:'Eclipse环境下需额外声明java依赖'},{label:'B',text:'依赖版本可以随意选择'},{label:'C',text:'需添加hbase-client依赖'},{label:'D',text:'Idea环境下无需声明java依赖'}],'AC','需添加hbase-client。Eclipse需额外声明java依赖。版本不能随意选。');
addQ('HBase / ZooKeeper','多选题','以下关于HBase Java API的描述,正确的是?',[{label:'A',text:'可通过Java API操作HBase表数据'},{label:'B',text:'HBase Java API效率高'},{label:'C',text:'HBase 1.x和2.x的Java API完全相同'},{label:'D',text:'Java API比shell命令更灵活'}],'ABD','1.x和2.x API有差异(2.x用Builder模式)。其他都正确。');
addQ('HBase / ZooKeeper','多选题','使用 Python 操作 HBase 数据库，我们安装了( )。',[{label:'A',text:'eclipse'},{label:'B',text:'happyhbase'},{label:'C',text:'happybase'},{label:'D',text:'thrift'}],'CD','需要happybase库和thrift服务。happyhbase不存在。eclipse是IDE。');
addQ('HBase / ZooKeeper','多选题','HBase 数据存放在带标签的表中，Tables 由( )组成。',[{label:'A',text:'单元格'},{label:'B',text:'行'},{label:'C',text:'列族'},{label:'D',text:'列'}],'BC','HBase表由行(Rows)和列族(Column Families)组成。');
addQ('HBase / ZooKeeper','多选题','HBase 安装模式有( )。',[{label:'A',text:'内嵌模式'},{label:'B',text:'单机模式'},{label:'C',text:'分布式模式'},{label:'D',text:'独立模式'}],'BC','HBase安装模式：单机模式(Standalone)和分布式模式(伪+完全)。');
addQ('HBase / ZooKeeper','多选题','HBase的核心架构组件包括以下哪些？',[{label:'A',text:'Zookeeper'},{label:'B',text:'HMaster Server'},{label:'C',text:'HDFS'},{label:'D',text:'HBase Region Server'}],'ABCD','HBase核心组件：HMaster+RegionServer+ZooKeeper+HDFS。');
addQ('HBase / ZooKeeper','多选题','搭建HBase开发环境时，以下哪些步骤是正确的？',[{label:'A',text:'hadoop.dll放C:\\Windows\\System32'},{label:'B',text:'无需配置Hadoop环境变量'},{label:'C',text:'Windows本地放与Linux版本一致的Hadoop包'},{label:'D',text:'winutils.exe放Hadoop解压目录bin下'}],'ACD','需配置HADOOP_HOME。其他都正确。');
addQ('HBase / ZooKeeper','多选题','关于HBase存储机制的描述，正确的是？',[{label:'A',text:'数据物理上按列族存储不同列族存不同Store'},{label:'B',text:'BlockCache缓存读取数据提高查询效率'},{label:'C',text:'MemStore达阈值异步刷写到StoreFile'},{label:'D',text:'StoreFile基于HDFS存储'}],'ABCD','全部正确。MemStore达阈值flus到HDFS上的StoreFile。');
addQ('Linux','多选题','用于查询当前已登录系统的用户的命令是( )。',[{label:'A',text:'w'},{label:'B',text:'users'},{label:'C',text:'u'},{label:'D',text:'who'}],'ABD','w/who/users都可以查看当前登录用户。u不是。');
addQ('HBase / ZooKeeper','多选题','以下哪些选项是 HBase 表行键的有效表示形式( )。',[{label:'A',text:'浮点数'},{label:'B',text:'二进制串'},{label:'C',text:'字符串'},{label:'D',text:'串行化的结构'}],'BCD','RowKey是二进制字节数组：字符串/二进制串/序列化结构都可以。');

// ===== 填空题 30道 =====
addQ('HBase / ZooKeeper','填空题','在HBase Java API中，通过HBaseConfiguration工具获取配置信息的方法是HBaseConfiguration.______()；建立连接时使用的工厂类是______，对应的创建连接方法是______()。',[],'create ConnectionFactory createConnection','');
addQ('HBase / ZooKeeper','填空题','Apache Thrift 是 Facebook 实现的一种高效的、支持多种编程语言的____调用的框架。',[],'RPC','Thrift是跨语言RPC(远程过程调用)框架。');
addQ('HBase / ZooKeeper','填空题','Timestamp 是一个整数，长度是____。',[],'64位','HBase时间戳是64位长整型(long)，精确到毫秒。');
addQ('HBase / ZooKeeper','填空题','HBase集群的三大核心组件包括____、____和____。其中负责监控集群节点状态并协调集群操作的组件是____；管理集群中所有RegionServer的主节点是____；实际处理数据读写请求的工作节点是____。',[],'HMaster RegionServer ZooKeeper ZooKeeper HMaster RegionServer','');
addQ('HBase / ZooKeeper','填空题','HBase 中主节点运行起来后的进程名称是____。',[],'HMaster','HMaster是HBase主节点进程。');
addQ('HBase / ZooKeeper','填空题','HBase 中查看表是否存在____。',[],'exists','HBase Shell中exists命令判断表是否存在。');
addQ('HBase / ZooKeeper','填空题','在Java代码中，判断表是否存在可使用HBaseAdmin对象的________方法，创建表时需调用其________方法。',[],'tableExists createTable','');
addQ('HBase / ZooKeeper','填空题','HBase Table cell value 有版本，是 HBase 插入单元格时候的____。',[],'时间戳','HBase通过时间戳(Timestamp)区分Cell不同版本。');
addQ('HBase / ZooKeeper','填空题','Hbase 完全分布式安装时若使用外部安装的 ZooKeeper，则需要将配置文件中的____值修改为____。',[],'HBASE_MANAGES_ZK false','');
addQ('HBase / ZooKeeper','填空题','HBase 的高性能得益于特有的____数据结构，通过 rowkey 查询速度非常快。',[],'LSM','HBase使用LSM树实现高性能随机读写。');
addQ('HBase / ZooKeeper','填空题','HBase 中有两张特殊的 Table 即____和____。',[],'-ROOT- .META.','早期HBase有-ROOT-和.META.两张系统表。');
addQ('HBase / ZooKeeper','填空题','RowKey 是二进制值 byte [        ]，按____排序。',[],'字典序','RowKey按字典序(字节序)排序存储。');
addQ('HBase / ZooKeeper','填空题','在HBase中，通过rowkey查询单行数据使用______对象，查询多行数据使用______对象。执行scan查询后获取结果对象类型是______，遍历结果时通过______方法获取单元格数据。',[],'Get Scan ResultScanner rawCells','');
addQ('HBase / ZooKeeper','填空题','适合HBase管理使用的最简单的命令行交互接口被称为______。',[],'HBase Shell','');
addQ('HBase / ZooKeeper','填空题','在终端中，输入exit或者______可以退出HBase shell。',[],'quit','exit或quit都可以退出HBase Shell。');
addQ('HBase / ZooKeeper','填空题','HBase shell中命令的参数要求使用单引号或者______引起来。',[],'双引号','');
addQ('HBase / ZooKeeper','填空题','HBase 利用____作为其文件存储系统。',[],'HDFS','HBase底层存储依赖HDFS。');
addQ('HBase / ZooKeeper','填空题','HBase 中查看记录使用命令____。',[],'get','get命令根据rowkey查询单行记录。');
addQ('Linux','填空题','查询显示当前系统 PATH 的命令是____。',[],'echo $PATH','');
addQ('HBase / ZooKeeper','填空题','在HBase中，使用______命令可以以列表的方式展示HBase中所有的用户表。',[],'list','list命令列出所有用户表。');
addQ('HBase / ZooKeeper','填空题','删除命名空间(namespace)时，只能删除______的命名空间，非空的命名空间不允许删除。',[],'空','只能删除空的命名空间。');
addQ('HBase / ZooKeeper','填空题','HBase中唯一标识一个Cell的四个要素是____、____、____和____。Cell中的数据以____形式存储，不包含任何数据类型信息。',[],'RowKey ColumnFamily ColumnQualifier Timestamp 字节数组','');
addQ('HBase / ZooKeeper','填空题','HBase 表中，所有的列族成员都具有相同的____。',[],'前缀','同一列族所有列共享相同前缀。');
addQ('HBase / ZooKeeper','填空题','创建HBase表时，首先需要通过TableName.valueOf()确定表名；然后创建表描述器的构建器对应的类是______；创建列族描述器的构建器类是______；设置列族最大版本数的方法是______()；最后完成表创建的方法是admin.______()。',[],'TableDescriptorBuilder ColumnFamilyDescriptorBuilder setMaxVersions createTable','');
addQ('HBase / ZooKeeper','填空题','HBase 全称是____。',[],'Hadoop Database','HBase = Hadoop Database。');
addQ('HBase / ZooKeeper','填空题','列组成"列族"，所有的____有相同的前缀。',[],'列','同一列族的所有列共享列族名前缀。');
addQ('HBase / ZooKeeper','填空题','在HBase Java API中，获取配置信息需调用HBaseConfiguration.create()方法返回的对象类型是______。建立连接时需通过______类的静态方法创建Connection对象。插入数据时用于指定行键的对象是______，添加列族、列和值的方法是______。',[],'Configuration ConnectionFactory Put addColumn','');
addQ('HBase / ZooKeeper','填空题','HBase 对____的写操作始终是"原子"的。',[],'行','HBase对同一行的写操作是原子的。');
addQ('HBase / ZooKeeper','填空题','HBase 利用____作为分布式协调工具。',[],'ZooKeeper','');
addQ('HBase / ZooKeeper','填空题','HBase 利用____来处理存储的海量数据。',[],'HDFS','HBase将数据文件存储在HDFS上。');

// ===== 简答题 12道 =====
addQ('HBase / ZooKeeper','简答题','HBase 支持哪几种安装模式，分别简述各自的核心特点。',[],'三种模式：①单机模式(Standalone)：所有组件运行在一个JVM，使用本地文件系统，适合开发测试；②伪分布式模式：所有组件运行在同一台机器不同JVM，使用HDFS，模拟分布式环境；③完全分布式模式：组件分布在不同机器上，运行在HDFS上，用于生产环境。','');
addQ('HBase / ZooKeeper','简答题','HBase优化目前主要是Rowkey优化，请解释原因并说明Rowkey。',[],'RowKey按字典序存储，Rowkey优化最重要因为：①数据按RowKey排序，RowKey设计直接影响数据分布(避免热点)；②查询主要通过RowKey进行(Get/Scan)；③RowKey长度影响存储和IO效率。优化原则：避免单调递增、加盐打散、控制长度。','');
addQ('HBase / ZooKeeper','简答题','请简述 HBase 的定义及五大核心特点。',[],'HBase是分布式列式NoSQL数据库。五大特点：①列式存储(按列族存储)；②稀疏性(空列不占空间)；③易扩展(加节点即可)；④海量存储(PB级)；⑤高并发随机实时读写。全称Hadoop Database，基于HDFS，参考Google Bigtable。','');
addQ('HBase / ZooKeeper','简答题','请简述 HBase 的写数据执行流程。',[],'①Client先访问ZooKeeper获取meta表所在RegionServer；②读取meta表找到目标Region的RS；③Client向目标RS发送写请求；④先写WAL(HLog)预写日志防丢失；⑤再写入MemStore内存；⑥MemStore达到阈值后Flush到StoreFile(HFile)持久化到HDFS。','');
addQ('HBase / ZooKeeper','简答题','使用HBase的API完成数据的读写操作',[],'创建Connection：Configuration config=HBaseConfiguration.create();config.set("hbase.zookeeper.quorum","192.172.100.100");Connection conn=ConnectionFactory.createConnection(config);创建表：admin.createTable(TableDescriptorBuilder.newBuilder(TableName.valueOf("student")).setColumnFamily(ColumnFamilyDescriptorBuilder.of("info")).build());插入：Put p=new Put(Bytes.toBytes("s001"));p.addColumn(Bytes.toBytes("info"),Bytes.toBytes("name"),Bytes.toBytes("Jerry"));t.put(p);','');
addQ('HBase / ZooKeeper','简答题','说一下HBase 的数据模型。',[],'由以下要素组成：①Table(表)，由行和列族组成；②RowKey(行键)，唯一标识一行，按字典序存储；③Column Family(列族)，创建表时定义，物理上存储在一起；④Column Qualifier(列限定符)，可动态添加；⑤Timestamp(时间戳)，标识数据版本，默认降序；⑥Cell(单元格)，RowKey+CF+Qualifier+TS唯一确定，数据以字节数组存储。','');
addQ('HBase / ZooKeeper','简答题','简述 HBase 核心架构的五大组成部分及各自的主要职责。',[],'①HMaster：管理Region分配/负载均衡/状态监控/DDL操作；②RegionServer：处理客户端读写请求/管理Region/数据Flush和Compaction；③ZooKeeper：HMaster选举/存储meta表位置/集群协调；④HDFS：底层分布式文件系统，存储HFile/WAL等数据文件；⑤Client：通过API与HBase交互，先访问ZK获取meta位置，再直接与RS通信。','');
addQ('HBase / ZooKeeper','简答题','用Java语言编写HBase客户端程序',[],'核心步骤：①Configuration config=HBaseConfiguration.create();config.set("hbase.zookeeper.quorum","192.168.171.120:2181");②Connection conn=ConnectionFactory.createConnection(config);③Admin admin=conn.getAdmin();创建sgs1:student表含base_info(3版本)和score_info列族；④Put插入行键2024001数据；⑤Get查询rowkey=2024001，遍历Result.rawCells()输出rowkey/列族/列名/列值/时间戳。','');
addQ('HBase / ZooKeeper','简答题','详细说明客户端通过 HBase API 查找到目标数据值的流程。',[],'①Client请求ZK获取meta表所在RS地址；②向该RS读meta表根据RowKey定位目标Region所在RS；③Client缓存meta信息；④向目标RS发送Get/Scan请求；⑤RS先查BlockCache→MemStore→StoreFile(HFile)；⑥找到数据返回Client。','');
addQ('HBase / ZooKeeper','简答题','解释说明 HBase 集群中 Client 查询访问到用户数据的详细步骤。',[],'①Client连接ZK获取meta表位置；②从meta表根据RowKey定位目标Region的RS；③Client向RS发起读请求；④RS在BlockCache→MemStore→StoreFile中查找；⑤数据返回Client；⑥Client获取Result对象遍历Cell。','');
addQ('HBase / ZooKeeper','简答题','相比于传统关系型数据库，哪些原因促使我们引入 HBase 数据库。',[],'①海量数据存储(PB级)：RDBMS单机有限，HBase基于HDFS可水平扩展；②高并发随机读写：HBase面向行键实时查询；③稀疏数据：HBase空列不占存储；④Schema灵活：列可动态添加，无需ALTER TABLE；⑤分布式容错：数据自动多副本备份。','');
addQ('HBase / ZooKeeper','简答题','Zookeeper 集群配置文件中，分别说明以下语句中各字段的作用是什么。server.1=zs1:2888:3888',[],'server.N=主机名:A:B：N是服务器编号(对应myid文件中的数字)；主机名是服务器地址；A端口(2888)用于Leader选举时服务器间通信；B端口(3888)用于Follower与Leader之间数据同步。','');

console.log('Added', all.length-1082, 'questions, total:', all.length);
const newJs='const PREPARSED_QUESTIONS = '+JSON.stringify(all,null,2)+';';
const hdr='// 六科完整题库 — '+all.length+'题 含复习重点全部知识点\n';
fs.writeFileSync('./parsed/questions_data.js', hdr+newJs, 'utf8');
fs.writeFileSync('./parsed/questions_data.json', JSON.stringify(all,null,2), 'utf8');
console.log('Done');
