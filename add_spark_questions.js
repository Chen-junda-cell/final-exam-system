#!/usr/bin/env node
/* 解析用户粘贴的 Scala/Spark 新题目，手动标注正确答案 */
const fs = require('fs'), path = require('path');

// 手动构造题目数据（题干+选项来自用户粘贴，答案由我判断）
const newQuestions = [
  // ========== Text #2: Scala/Spark 基础 (16题) ==========
  {
    subject: 'Scala & Spark',
    type: '单选题',
    title: '获取元组val t=(1, "Rose",true)中的" Rose "的选项是( )。',
    options: [
      {label:'A', text:'t._1'},
      {label:'B', text:'t._2'},
      {label:'C', text:'t(0)'},
      {label:'D', text:'t(1)'}
    ],
    answer: 'B',
    explanation: 'Scala元组通过._N访问元素，从1开始编号。t._1=1, t._2="Rose", t._3=true。',
    topic: 'Scala元组',
    level: 'A'
  },
  {
    subject: 'Scala & Spark',
    type: '单选题',
    title: 'Apache Spark提供了哪些编程语言的接口( )。',
    options: [
      {label:'A', text:'Java'},
      {label:'B', text:'Scala'},
      {label:'C', text:'Python'},
      {label:'D', text:'以上选项都是'}
    ],
    answer: 'D',
    explanation: 'Spark原生支持Scala、Java、Python和R四种语言接口。',
    topic: 'Spark概述',
    level: 'A'
  },
  {
    subject: 'Scala & Spark',
    type: '单选题',
    title: '以下选项中定义List列表错误的是( )。',
    options: [
      {label:'A', text:'val list=2::3::List(4,5)'},
      {label:'B', text:'val list=List(1,2,3,4)'},
      {label:'C', text:'val list=2::3::4'},
      {label:'D', text:'val list=1::2::3::Nil'}
    ],
    answer: 'C',
    explanation: 'Scala中::是List的方法，右侧必须是List类型。2::3::4 中4是Int不是List，会报错。正确写法应为2::3::4::Nil或2::3::List(4)。',
    topic: 'Scala集合',
    level: 'B'
  },
  {
    subject: 'Scala & Spark',
    type: '单选题',
    title: '以下RDD算子中具有懒加载特性的是( )。',
    options: [
      {label:'A', text:'foreach( )'},
      {label:'B', text:'collect( )'},
      {label:'C', text:'reduce( )'},
      {label:'D', text:'flatMap( )'}
    ],
    answer: 'D',
    explanation: 'flatMap是转换(Transformation)算子，具有懒加载特性。foreach、collect、reduce都是行动(Action)算子，会触发实际计算。',
    topic: 'Spark RDD',
    level: 'A'
  },
  {
    subject: 'Scala & Spark',
    type: '单选题',
    title: '阅读以下代码:val rdd1 = sc.parallelize(Array(("Hadoop",12), ("Java",32), ("Spark",22))); val rdd2 = rdd1.map(x=>(x._2,x._1)).sortByKey(false)。关于rdd2描述错误的是( )。',
    options: [
      {label:'A', text:'sortByKey算子只能作用在key-value对的RDD上'},
      {label:'B', text:'rdd2的类型为RDD[(Int,String)]'},
      {label:'C', text:'rdd2中的元素是[(32, "Java"),(22, "Spark"),(12, "Hadoop")]'},
      {label:'D', text:'sortByKey是一个行动算子'}
    ],
    answer: 'D',
    explanation: 'sortByKey是转换(Transformation)算子，不是行动(Action)算子。sortByKey(false)表示降序排列，结果为(32,Java),(22,Spark),(12,Hadoop)。',
    topic: 'Spark RDD',
    level: 'B'
  },
  {
    subject: 'Scala & Spark',
    type: '单选题',
    title: 'Spark中触发真正计算的方法是( )。',
    options: [
      {label:'A', text:'map( )'},
      {label:'B', text:'collect( )'},
      {label:'C', text:'sortBy( )'},
      {label:'D', text:'groupByKey( )'}
    ],
    answer: 'B',
    explanation: 'collect()是行动(Action)算子，会触发真正的计算并将结果返回到Driver。map、sortBy、groupByKey都是转换算子，具有懒加载特性。',
    topic: 'Spark RDD',
    level: 'A'
  },
  // 多选题
  {
    subject: 'Scala & Spark',
    type: '多选题',
    title: '以下属于Spark特点的是( )。',
    options: [
      {label:'A', text:'快速'},
      {label:'B', text:'易用性'},
      {label:'C', text:'通用性'},
      {label:'D', text:'随处运行'}
    ],
    answer: 'ABCD',
    explanation: 'Spark的四大特点：快速(Fast)、易用(Easy to Use)、通用(General)、随处运行(Runs Everywhere)。',
    topic: 'Spark概述',
    level: 'A'
  },
  {
    subject: 'Scala & Spark',
    type: '多选题',
    title: '以下属于Spark模块的是( )。',
    options: [
      {label:'A', text:'Spark Core'},
      {label:'B', text:'Spark SQL'},
      {label:'C', text:'Spark Streaming'},
      {label:'D', text:'Flink'}
    ],
    answer: 'ABC',
    explanation: 'Spark模块包括Spark Core、Spark SQL、Spark Streaming、MLlib、GraphX。Flink是另一个独立的流处理框架。',
    topic: 'Spark概述',
    level: 'A'
  },
  {
    subject: 'Scala & Spark',
    type: '多选题',
    title: 'Spark可以使用的资源管理器有哪些( )。',
    options: [
      {label:'A', text:'Mesos'},
      {label:'B', text:'Standalone'},
      {label:'C', text:'YARN'},
      {label:'D', text:'Cloud'}
    ],
    answer: 'ABC',
    explanation: 'Spark支持Standalone（自带）、YARN、Mesos和Kubernetes四种集群管理器。Cloud不是资源管理器。',
    topic: 'Spark部署',
    level: 'B'
  },
  {
    subject: 'Scala & Spark',
    type: '多选题',
    title: '以下关于Spark的描述中正确的是( )。',
    options: [
      {label:'A', text:'快速'},
      {label:'B', text:'可扩展'},
      {label:'C', text:'具有容错能力'},
      {label:'D', text:'可以替代Hadoop'}
    ],
    answer: 'ABC',
    explanation: 'Spark快速、可扩展、具有容错能力，但它不能完全替代Hadoop生态圈（如HDFS、YARN等组件仍需要Hadoop）。',
    topic: 'Spark概述',
    level: 'B'
  },
  {
    subject: 'Scala & Spark',
    type: '多选题',
    title: '属于RDD行动算子的方法是( )。',
    options: [
      {label:'A', text:'reduce( )'},
      {label:'B', text:'foreach( )'},
      {label:'C', text:'collect( )'},
      {label:'D', text:'union( )'}
    ],
    answer: 'ABC',
    explanation: 'reduce、foreach、collect都是行动(Action)算子。union是转换(Transformation)算子，用于合并两个RDD。',
    topic: 'Spark RDD',
    level: 'A'
  },
  // 判断题
  {
    subject: 'Scala & Spark',
    type: '判断题',
    title: 'Spark是一个快速的、分布式的集群资源管理框架。( )',
    options: [
      {label:'A', text:'对'},
      {label:'B', text:'错'}
    ],
    answer: 'B',
    explanation: 'Spark是分布式计算引擎，不是资源管理框架。YARN和Mesos才是集群资源管理框架。',
    topic: 'Spark概述',
    level: 'A'
  },
  {
    subject: 'Scala & Spark',
    type: '判断题',
    title: 'Spark是Hadoop的替代方案。( )',
    options: [
      {label:'A', text:'对'},
      {label:'B', text:'错'}
    ],
    answer: 'B',
    explanation: 'Spark替代的是Hadoop的MapReduce计算模型，但不是整个Hadoop生态的替代方案。Spark通常与HDFS、YARN等Hadoop组件配合使用。',
    topic: 'Spark概述',
    level: 'A'
  },
  {
    subject: 'Scala & Spark',
    type: '判断题',
    title: 'Scala支持的元组最大长度是22。( )',
    options: [
      {label:'A', text:'对'},
      {label:'B', text:'错'}
    ],
    answer: 'A',
    explanation: 'Scala中Tuple2到Tuple22共21种元组类型，最大支持22个元素。',
    topic: 'Scala基础',
    level: 'B'
  },
  {
    subject: 'Scala & Spark',
    type: '判断题',
    title: 'Scala类有主构造和辅助构造，其中主构造会执行类中所有代码块。( )',
    options: [
      {label:'A', text:'对'},
      {label:'B', text:'错'}
    ],
    answer: 'A',
    explanation: 'Scala类的主构造器会执行类定义体中除方法和辅助构造器外的所有代码。',
    topic: 'Scala基础',
    level: 'B'
  },
  {
    subject: 'Scala & Spark',
    type: '判断题',
    title: 'Spark作业中，窄依赖是划分Stage的依据。( )',
    options: [
      {label:'A', text:'对'},
      {label:'B', text:'错'}
    ],
    answer: 'B',
    explanation: '宽依赖(Shuffle Dependency)才是划分Stage的依据。遇到宽依赖时Spark会划分新的Stage，窄依赖不会导致Stage划分。',
    topic: 'Spark RDD',
    level: 'A'
  },

  // ========== Text #3: Spark SQL (15题) ==========
  {
    subject: 'Scala & Spark',
    type: '单选题',
    title: 'Spark SQL 中用于处理结构化数据的编程入口是( )。',
    options: [
      {label:'A', text:'SparkContext'},
      {label:'B', text:'SparkSession'},
      {label:'C', text:'StreamingContext'},
      {label:'D', text:'SQLContext'}
    ],
    answer: 'B',
    explanation: 'Spark 2.0+中SparkSession是统一的编程入口，整合了SparkContext、SQLContext和HiveContext。',
    topic: 'Spark SQL',
    level: 'A'
  },
  {
    subject: 'Scala & Spark',
    type: '单选题',
    title: '下列关于 DataFrame 描述错误的是( )。',
    options: [
      {label:'A', text:'是列命名的分布式数据集'},
      {label:'B', text:'等价于 DataSet[Row]'},
      {label:'C', text:'不支持 SQL 查询'},
      {label:'D', text:'可从 RDD、文件、Hive 表创建'}
    ],
    answer: 'C',
    explanation: 'DataFrame支持SQL查询，可通过createOrReplaceTempView注册临时视图后使用spark.sql()执行SQL。',
    topic: 'Spark SQL',
    level: 'A'
  },
  {
    subject: 'Scala & Spark',
    type: '单选题',
    title: 'Spark SQL 默认读取的文件格式是( )。',
    options: [
      {label:'A', text:'CSV'},
      {label:'B', text:'JSON'},
      {label:'C', text:'Parquet'},
      {label:'D', text:'Text'}
    ],
    answer: 'C',
    explanation: 'Spark SQL默认使用Parquet列式存储格式，具有高压缩比和高效的列裁剪特性。',
    topic: 'Spark SQL',
    level: 'B'
  },
  {
    subject: 'Scala & Spark',
    type: '单选题',
    title: '下列哪个方法用于将 DataFrame 注册为临时视图( )。',
    options: [
      {label:'A', text:'createTable'},
      {label:'B', text:'createOrReplaceTempView'},
      {label:'C', text:'registerTable'},
      {label:'D', text:'createGlobalView'}
    ],
    answer: 'B',
    explanation: 'createOrReplaceTempView()将DataFrame注册为临时视图，仅在当前SparkSession生命周期内有效。createGlobalTempView()创建全局临时视图。',
    topic: 'Spark SQL',
    level: 'A'
  },
  {
    subject: 'Scala & Spark',
    type: '单选题',
    title: '想要将 DataFrame 保存为覆盖已有数据的模式，应选择( )。',
    options: [
      {label:'A', text:'SaveMode.ErrorIfExists'},
      {label:'B', text:'SaveMode.Append'},
      {label:'C', text:'SaveMode.Overwrite'},
      {label:'D', text:'SaveMode.Ignore'}
    ],
    answer: 'C',
    explanation: 'SaveMode.Overwrite覆盖已存在的数据；ErrorIfExists(默认)数据存在则报错；Append追加；Ignore存在则忽略。',
    topic: 'Spark SQL',
    level: 'B'
  },
  // 多选题
  {
    subject: 'Scala & Spark',
    type: '多选题',
    title: 'Spark SQL 的核心特点包括( )。',
    options: [
      {label:'A', text:'与 Spark 应用无缝集成'},
      {label:'B', text:'统一访问多种数据源'},
      {label:'C', text:'兼容 Hive'},
      {label:'D', text:'提供标准 JDBC/ODBC 连接'}
    ],
    answer: 'ABCD',
    explanation: 'Spark SQL四大特点：无缝集成Spark应用、统一数据访问、Hive兼容、标准化JDBC/ODBC连接。',
    topic: 'Spark SQL',
    level: 'A'
  },
  {
    subject: 'Scala & Spark',
    type: '多选题',
    title: '下列属于 Spark SQL 支持的数据源有( )。',
    options: [
      {label:'A', text:'Hive'},
      {label:'B', text:'Parquet'},
      {label:'C', text:'JSON'},
      {label:'D', text:'JDBC'}
    ],
    answer: 'ABCD',
    explanation: 'Spark SQL支持多种数据源，包括Hive、Parquet、JSON、JDBC、CSV、ORC等。',
    topic: 'Spark SQL',
    level: 'B'
  },
  {
    subject: 'Scala & Spark',
    type: '多选题',
    title: 'DataFrame 常用的查看数据方法有( )。',
    options: [
      {label:'A', text:'show( )'},
      {label:'B', text:'printSchema( )'},
      {label:'C', text:'take( )'},
      {label:'D', text:'first( )'}
    ],
    answer: 'ABCD',
    explanation: 'show()显示前20行、printSchema()打印结构、take(n)返回前n行数组、first()返回第一行。',
    topic: 'Spark SQL',
    level: 'B'
  },
  {
    subject: 'Scala & Spark',
    type: '多选题',
    title: '下列属于 DataFrame 保存模式 SaveMode 的有( )。',
    options: [
      {label:'A', text:'ErrorIfExists'},
      {label:'B', text:'Append'},
      {label:'C', text:'Overwrite'},
      {label:'D', text:'Ignore'}
    ],
    answer: 'ABCD',
    explanation: 'SaveMode四种模式：ErrorIfExists(默认，存在则报错)、Append(追加)、Overwrite(覆盖)、Ignore(存在则忽略)。',
    topic: 'Spark SQL',
    level: 'B'
  },
  {
    subject: 'Scala & Spark',
    type: '多选题',
    title: '关于 DataSet 说法正确的有( )。',
    options: [
      {label:'A', text:'强类型数据集'},
      {label:'B', text:'支持 RDD 算子'},
      {label:'C', text:'可与 DataFrame 相互转换'},
      {label:'D', text:'Scala/Java 可用'}
    ],
    answer: 'ABCD',
    explanation: 'DataSet是强类型的，支持函数式算子，可通过toDF()转DataFrame，DataFrame通过as[T]转DataSet。Python不支持DataSet。',
    topic: 'Spark SQL',
    level: 'B'
  },
  // 判断题
  {
    subject: 'Scala & Spark',
    type: '判断题',
    title: 'Spark SQL 的 Catalyst 是查询优化框架。( )',
    options: [
      {label:'A', text:'对'},
      {label:'B', text:'错'}
    ],
    answer: 'A',
    explanation: 'Catalyst是Spark SQL的核心查询优化器，负责SQL/DataFrame的逻辑优化和物理执行计划生成。',
    topic: 'Spark SQL',
    level: 'A'
  },
  {
    subject: 'Scala & Spark',
    type: '判断题',
    title: 'DataFrame 本质上是 Dataset [Row]。( )',
    options: [
      {label:'A', text:'对'},
      {label:'B', text:'错'}
    ],
    answer: 'A',
    explanation: 'DataFrame是Dataset[Row]的类型别名，Row是弱类型的。',
    topic: 'Spark SQL',
    level: 'A'
  },
  {
    subject: 'Scala & Spark',
    type: '判断题',
    title: 'spark-sql 命令可直接在 Linux 终端执行 SQL。( )',
    options: [
      {label:'A', text:'对'},
      {label:'B', text:'错'}
    ],
    answer: 'A',
    explanation: 'spark-sql是Spark提供的命令行工具，可在终端直接执行SQL查询。类似于Hive的CLI。',
    topic: 'Spark SQL',
    level: 'B'
  },
  {
    subject: 'Scala & Spark',
    type: '判断题',
    title: '使用 DataSet 必须导入 spark.implicits._。( )',
    options: [
      {label:'A', text:'对'},
      {label:'B', text:'错'}
    ],
    answer: 'A',
    explanation: '使用DataSet的toDS()、toDF()等隐式转换需要导入spark.implicits._。',
    topic: 'Spark SQL',
    level: 'B'
  },
  {
    subject: 'Scala & Spark',
    type: '判断题',
    title: 'spark-shell 中默认已提供 spark 对象即 SparkSession。( )',
    options: [
      {label:'A', text:'对'},
      {label:'B', text:'错'}
    ],
    answer: 'A',
    explanation: 'Spark 2.0+的spark-shell启动时会自动创建名为spark的SparkSession对象和名为sc的SparkContext对象。',
    topic: 'Spark SQL',
    level: 'A'
  }
];

console.log(`📦 构造了 ${newQuestions.length} 道 Scala/Spark 新题`);

// 统计
const types = {};
newQuestions.forEach(q => { types[q.type] = (types[q.type] || 0) + 1; });
console.log('题型分布:', JSON.stringify(types));

// ===== 合并到题库 =====
const existingPath = path.join(__dirname, 'parsed', 'questions_data.js');
let existingContent = fs.readFileSync(existingPath, 'utf8');
const existingMatch = existingContent.match(/const PREPARSED_QUESTIONS = (\[[\s\S]*\]);/);
const existingData = JSON.parse(existingMatch[1]);

// 分配新ID
let maxId = 0;
existingData.forEach(q => {
  const m = q.id && q.id.match(/GEN(\d+)/);
  if (m) maxId = Math.max(maxId, parseInt(m[1]));
});
console.log(`当前最大ID: GEN${String(maxId).padStart(4, '0')}`);

newQuestions.forEach((q, i) => {
  maxId++;
  q.id = 'GEN' + String(maxId).padStart(4, '0');
  q.correctCount = q.correctCount || 0;
  q.wrongCount = q.wrongCount || 0;
  q.lastPractice = q.lastPractice || null;
  q.nextReview = q.nextReview || null;
  q.reviewStage = q.reviewStage || 0;
});

const allQuestions = [...existingData, ...newQuestions];
console.log(`合并后总数: ${allQuestions.length} 题`);

// 写回JS文件
const newJsContent = `// 六科完整题库 — ${allQuestions.length}题 含复习重点全部知识点
const PREPARSED_QUESTIONS = ${JSON.stringify(allQuestions, null, 2)};
`;
fs.writeFileSync(existingPath, newJsContent, 'utf8');
console.log(`✅ 已更新 parsed/questions_data.js`);

// 写回JSON文件
fs.writeFileSync(path.join(__dirname, 'parsed', 'questions_data.json'), JSON.stringify(allQuestions, null, 2), 'utf8');
console.log(`✅ 已更新 parsed/questions_data.json`);

// 验证
const verifyData = JSON.parse(fs.readFileSync(existingPath, 'utf8').match(/const PREPARSED_QUESTIONS = (\[[\s\S]*\]);/)[1]);
console.log(`✅ 验证: ${verifyData.length} 题, IDs唯一: ${new Set(verifyData.map(q=>q.id)).size === verifyData.length}`);

// 更新版本号
const htmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');
html = html.replace(/questions_data\.js\?v=\d+/, 'questions_data.js?v=12');
fs.writeFileSync(htmlPath, html, 'utf8');
console.log('✅ index.html 版本号 → v12');
