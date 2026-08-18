#!/usr/bin/env node
/* ================================================================
   Spark 考试重点处理脚本
   1. 标记已有重点题目
   2. 为缺失知识点生成新题目
   3. 合并到题库
   ================================================================ */
const fs = require('fs'), path = require('path');

const dbPath = path.join(__dirname, 'parsed', 'questions_data.js');
const dbContent = fs.readFileSync(dbPath, 'utf8');
const match = dbContent.match(/const PREPARSED_QUESTIONS = (\[[\s\S]*\]);/);
const allQuestions = JSON.parse(match[1]);

console.log('📊 当前题库:', allQuestions.length, '题');

// ===== 第一步：标记重点题目 =====
// 关键词映射：题目中包含这些关键词的 → 标记为重点(level='A', topic='重点')
const keyTopics = [
  // 第1章 Spark概述
  'Spark.*MapReduce', 'MapReduce.*Spark', '比MapReduce', 'Spark.*比',
  'Spark特点', 'Spark模块', 'Spark组件', 'Spark.*生态',
  'Spark概述',
  // 第2-3章 Scala
  'var.*val', 'val.*var', '可变变量', '不可变变量',
  'Scala.*关键字', '定义不可变', '定义可变',
  'Tuple', '元组', '_1', '_2',
  'ArrayBuffer', '变长数组', '定长数组',
  'List.*不可变', 'List.*可变', 'List.*默认',
  '模式匹配', 'match case',
  // 第4章 集群
  'Standalone', 'YARN', 'Mesos', '集群管理器', '资源管理',
  'SparkConf', 'SparkContext', 'sc\\.',
  '部署模式',
  // 第5章 RDD
  'RDD.*特性', 'RDD.*属性', '五大',
  '转换.*操作', '行动.*操作', 'Transformation', 'Action',
  '惰性求值', '懒加载',
  '宽依赖', '窄依赖', 'Shuffle', 'Stage',
  '血缘', 'Lineage', '容错',
  '分区', 'Partition',
  '算子.*分类', '扁平化映射',
  '持久化', 'cache',
  // 第7章 Spark SQL
  'SparkSession', 'Spark SQL',
  'DataFrame', 'DataSet',
  '临时视图', 'TempView',
  'Catalyst', '查询优化',
  'Parquet',
  // 编程模板
  'textFile', 'flatMap', 'reduceByKey', 'saveAsTextFile',
  '编程入口',
];

let tagged = 0;
for (const q of allQuestions) {
  if (q.subject !== 'Scala & Spark') continue;
  for (const re of keyTopics) {
    if (new RegExp(re, 'i').test(q.title)) {
      q.level = 'A';
      q.topic = '重点';
      tagged++;
      break;
    }
  }
}
console.log(`✅ 标记 ${tagged} 道已有重点题目`);

// ===== 第二步：生成缺失知识点的题目 =====
let nextId = 0;
allQuestions.forEach(q => {
  const m = q.id && q.id.match(/GEN(\d+)/);
  if (m) nextId = Math.max(nextId, parseInt(m[1]));
});

function newQ(type, title, options, answer, explanation, topic) {
  nextId++;
  return {
    subject: 'Scala & Spark',
    type, title,
    options: options || [],
    answer,
    explanation: explanation || '',
    topic: topic || '重点',
    id: 'GEN' + String(nextId).padStart(4, '0'),
    level: 'A',
    correctCount: 0, wrongCount: 0,
    lastPractice: null, nextReview: null, reviewStage: 0
  };
}

const newQuestions = [];

// ===== 1. Spark vs MapReduce 深入 =====
newQuestions.push(newQ('单选题',
  '以下关于MapReduce缺点的描述，错误的是( )。',
  [
    {label:'A', text:'每次Job结果写入磁盘，大量IO开销'},
    {label:'B', text:'编程模型只有Map和Reduce，表达能力有限'},
    {label:'C', text:'不适合迭代式计算和交互式查询'},
    {label:'D', text:'MapReduce比Spark速度更快'}
  ], 'D',
  'MapReduce的缺点包括磁盘IO大、编程模型单一、不适合迭代计算。Spark比MapReduce快10-100倍。',
  'Spark vs MapReduce'
));

newQuestions.push(newQ('多选题',
  'Spark 相比 MapReduce 的优势包括( )。',
  [
    {label:'A', text:'内存迭代计算，速度快10-100倍'},
    {label:'B', text:'提供丰富的转换和行动算子'},
    {label:'C', text:'支持迭代计算和交互式查询'},
    {label:'D', text:'API更简洁易用'}
  ], 'ABCD',
  'Spark核心优势：内存计算(快)、丰富算子、支持迭代/交互、简洁API。',
  'Spark vs MapReduce'
));

newQuestions.push(newQ('简答题',
  '简述MapReduce的两大缺点，并说明Spark是如何解决这些问题的。',
  [], 
  '1) 磁盘IO大：MR每次Job结果写磁盘；Spark基于内存迭代计算。2) 编程模型单一：MR只有Map和Reduce；Spark提供flatMap/map/reduceByKey等丰富算子。',
  'Spark vs MapReduce'
));

// ===== 2. Spark生态组件——给场景选组件 =====
newQuestions.push(newQ('单选题',
  '某企业需要对用户行为日志进行实时分析并及时告警，应使用Spark的哪个组件？( )',
  [
    {label:'A', text:'Spark SQL'},
    {label:'B', text:'Spark Streaming'},
    {label:'C', text:'MLlib'},
    {label:'D', text:'GraphX'}
  ], 'B',
  'Spark Streaming用于流式计算和实时处理，适合实时日志分析场景。Spark SQL用于结构化数据，MLlib用于机器学习，GraphX用于图计算。',
  'Spark组件选型'
));

newQuestions.push(newQ('单选题',
  '某电商平台需要分析用户购买行为，构建商品推荐模型，应使用Spark的哪个组件？( )',
  [
    {label:'A', text:'Spark Streaming'},
    {label:'B', text:'Spark SQL'},
    {label:'C', text:'MLlib'},
    {label:'D', text:'GraphX'}
  ], 'C',
  'MLlib是Spark的机器学习库，适用于推荐系统、分类、聚类等场景。',
  'Spark组件选型'
));

newQuestions.push(newQ('单选题',
  '分析社交网络中用户之间的关系(如好友推荐、影响力分析)，最适合使用Spark的哪个组件？( )',
  [
    {label:'A', text:'MLlib'},
    {label:'B', text:'Spark SQL'},
    {label:'C', text:'GraphX'},
    {label:'D', text:'Spark Streaming'}
  ], 'C',
  'GraphX是Spark的图计算组件，适用于社交网络分析、PageRank等图算法场景。',
  'Spark组件选型'
));

newQuestions.push(newQ('单选题',
  '对Hive中的结构化数据执行SQL查询分析，应使用( )。',
  [
    {label:'A', text:'Spark Core'},
    {label:'B', text:'Spark SQL'},
    {label:'C', text:'Spark Streaming'},
    {label:'D', text:'MLlib'}
  ], 'B',
  'Spark SQL用于结构化数据处理和SQL查询，兼容Hive。',
  'Spark组件选型'
));

// ===== 3. for循环 =====
newQuestions.push(newQ('单选题',
  'Scala中，以下for循环语法正确的是( )。',
  [
    {label:'A', text:'for (i = 0; i < 10; i++)'},
    {label:'B', text:'for (i <- 1 to 10)'},
    {label:'C', text:'for (i in 1..10)'},
    {label:'D', text:'for (int i : list)'}
  ], 'B',
  'Scala的for循环使用生成器语法：for (变量 <- 集合/范围)。1 to 10 表示1到10的Range。',
  'Scala for循环'
));

newQuestions.push(newQ('判断题',
  'Scala中，for (i <- 1 to 10) 表示i从1遍历到10（包含10）。( )',
  [
    {label:'A', text:'对'},
    {label:'B', text:'错'}
  ], 'A',
  '1 to 10 包含10；1 until 10 不包含10。',
  'Scala for循环'
));

newQuestions.push(newQ('单选题',
  'Scala中，for (i <- 1 until 5) 循环执行的次数是( )。',
  [
    {label:'A', text:'3'},
    {label:'B', text:'4'},
    {label:'C', text:'5'},
    {label:'D', text:'6'}
  ], 'B',
  '1 until 5 表示[1,5)，即1,2,3,4共4次。to是闭区间[1,5]。',
  'Scala for循环'
));

// ===== 4. Set/Map =====
newQuestions.push(newQ('单选题',
  'Scala中，以下创建不可变Set的语法正确的是( )。',
  [
    {label:'A', text:'val s = Set(1, 2, 3)'},
    {label:'B', text:'val s = new Set(1, 2, 3)'},
    {label:'C', text:'val s = [1, 2, 3]'},
    {label:'D', text:'val s = {1, 2, 3}'}
  ], 'A',
  'Scala默认导入不可变Set，使用Set(元素...)创建。Set特性：元素不重复。',
  'Scala集合'
));

newQuestions.push(newQ('单选题',
  'Scala中，以下创建包含键值对的Map语法正确的是( )。',
  [
    {label:'A', text:'val m = Map{"a"->1, "b"->2}'},
    {label:'B', text:'val m = Map("a"->1, "b"->2)'},
    {label:'C', text:'val m = ["a":1, "b":2]'},
    {label:'D', text:'val m = {"a":1, "b":2}'}
  ], 'B',
  'Scala使用Map(键->值, ...)创建映射。-> 是Scala中创建键值对的方法。',
  'Scala集合'
));

newQuestions.push(newQ('判断题',
  'Scala中Set与List的主要区别是Set元素不重复且无序。( )',
  [
    {label:'A', text:'对'},
    {label:'B', text:'错'}
  ], 'A',
  'Set是无序不重复集合；List是有序可重复集合。',
  'Scala集合'
));

// ===== 5. class vs object =====
newQuestions.push(newQ('单选题',
  'Scala中，class和object的主要区别是( )。',
  [
    {label:'A', text:'class可以有方法，object不能'},
    {label:'B', text:'class是多例的，object是单例的'},
    {label:'C', text:'class能继承，object不能'},
    {label:'D', text:'class运行快，object运行慢'}
  ], 'B',
  'class用于创建多个实例(多例)；object是单例对象，类似Java的静态工具类。',
  'Scala类与对象'
));

newQuestions.push(newQ('判断题',
  'Scala中，用object关键字定义的伴生对象是单例的，所有静态成员应放在object中。( )',
  [
    {label:'A', text:'对'},
    {label:'B', text:'错'}
  ], 'A',
  'Scala没有static关键字，静态成员放在object（单例对象）中。同名class和object互为伴生关系。',
  'Scala类与对象'
));

// ===== 6. 面向对象关键字 =====
newQuestions.push(newQ('单选题',
  'Scala中，用于实现类继承的关键字是( )。',
  [
    {label:'A', text:'implements'},
    {label:'B', text:'extends'},
    {label:'C', text:'inherit'},
    {label:'D', text:'derive'}
  ], 'B',
  'Scala使用extends实现继承，与Java一致。',
  'Scala面向对象'
));

newQuestions.push(newQ('单选题',
  'Scala中，与Java的interface类似、可被多重继承的特性是( )。',
  [
    {label:'A', text:'class'},
    {label:'B', text:'object'},
    {label:'C', text:'trait'},
    {label:'D', text:'abstract'}
  ], 'C',
  'trait（特质）类似Java 8的接口，可包含抽象和具体方法，支持多重混入(with)。',
  'Scala面向对象'
));

newQuestions.push(newQ('判断题',
  'Scala中，子类重写父类方法时必须使用override关键字。( )',
  [
    {label:'A', text:'对'},
    {label:'B', text:'错'}
  ], 'A',
  'Scala要求重写方法时必须显式使用override，避免意外覆盖。',
  'Scala面向对象'
));

// ===== 7. Spark架构 =====
newQuestions.push(newQ('单选题',
  'Spark Standalone模式下，负责资源管理和任务调度的主节点是( )。',
  [
    {label:'A', text:'Worker'},
    {label:'B', text:'Executor'},
    {label:'C', text:'Master'},
    {label:'D', text:'Driver'}
  ], 'C',
  'Master是Standalone模式的主节点，负责资源管理。Worker是从节点，Executor是执行器，Driver是驱动程序。',
  'Spark架构'
));

newQuestions.push(newQ('单选题',
  'Spark中，负责运行具体Task、并将结果返回给Driver的组件是( )。',
  [
    {label:'A', text:'Master'},
    {label:'B', text:'Worker'},
    {label:'C', text:'Executor'},
    {label:'D', text:'NameNode'}
  ], 'C',
  'Executor是运行在Worker节点上的JVM进程，负责执行具体Task和存储数据。',
  'Spark架构'
));

newQuestions.push(newQ('多选题',
  '以下属于Spark基本架构组件的包括( )。',
  [
    {label:'A', text:'Driver（驱动程序）'},
    {label:'B', text:'Executor（执行器）'},
    {label:'C', text:'Master（主节点）'},
    {label:'D', text:'Worker（从节点）'}
  ], 'ABCD',
  'Spark架构包含Driver(运行main)、Master(资源管理)、Worker(工作节点)、Executor(任务执行)。',
  'Spark架构'
));

newQuestions.push(newQ('判断题',
  'Spark中，Driver程序运行在Master节点上。( )',
  [
    {label:'A', text:'对'},
    {label:'B', text:'错'}
  ], 'B',
  'Driver可以在任意节点上运行（通常在提交作业的客户端），不一定在Master上。',
  'Spark架构'
));

// ===== 8. SparkConf/SparkContext =====
newQuestions.push(newQ('填空题',
  'Spark中，创建SparkConf并设置应用名称的代码是：val conf = new SparkConf().____("MyApp")。',
  [], 'setAppName',
  'SparkConf.setAppName()设置应用名称，setMaster()设置运行模式。',
  'SparkConf/SparkContext'
));

newQuestions.push(newQ('填空题',
  'Spark中，设置本地运行模式的代码是：conf.setMaster("____")。',
  [], 'local[*]',
  'local[*]表示使用本地所有CPU核心运行Spark。local[2]指定2个核心。',
  'SparkConf/SparkContext'
));

newQuestions.push(newQ('单选题',
  '以下创建SparkContext的正确代码是( )。',
  [
    {label:'A', text:'val sc = SparkContext(conf)'},
    {label:'B', text:'val sc = new SparkContext(conf)'},
    {label:'C', text:'val sc = SparkSession(conf)'},
    {label:'D', text:'val sc = SparkContext.create(conf)'}
  ], 'B',
  '使用new SparkContext(conf)创建。Spark 2.0+也可通过SparkSession.sparkContext获取。',
  'SparkConf/SparkContext'
));

// ===== 9. RDD五大属性 =====
newQuestions.push(newQ('多选题',
  'RDD的五大属性包括( )。',
  [
    {label:'A', text:'分区列表（Partitions）'},
    {label:'B', text:'依赖关系（Dependencies）'},
    {label:'C', text:'计算函数（Compute）'},
    {label:'D', text:'分区器（Partitioner，可选）'},
    {label:'E', text:'优先位置列表（Preferred Locations）'}
  ], 'ABCDE',
  'RDD五大属性：分区列表、每个分区的计算函数、依赖关系、分区器(可选)、优先位置列表。',
  'RDD五大属性'
));

newQuestions.push(newQ('填空题',
  'RDD全称是弹性分布式数据集，英文是____ Distributed Dataset。',
  [], 'Resilient',
  'RDD = Resilient Distributed Dataset，Spark的核心数据抽象。',
  'RDD概念'
));

// ===== 10. RDD编程五大步 =====
newQuestions.push(newQ('简答题',
  '简述使用Spark RDD进行编程的五大步骤。',
  [],
  '1) 创建SparkConf设置参数（AppName、Master）；2) 创建SparkContext(sc)；3) 读取数据源创建RDD并执行转换操作；4) 通过行动操作触发计算并存储结果；5) 调用sc.stop()停止SparkContext。',
  'RDD编程步骤'
));

newQuestions.push(newQ('程序题',
  '使用Spark RDD编写WordCount程序（统计文本中每个单词出现次数），请写出完整代码。',
  [],
  'val conf = new SparkConf().setAppName("WordCount").setMaster("local[*]"); val sc = new SparkContext(conf); val rdd = sc.textFile("input.txt"); val result = rdd.flatMap(_.split(" ")).map((_, 1)).reduceByKey(_ + _); result.saveAsTextFile("output"); sc.stop()',
  'RDD编程模板'
));

// ===== 11. 自定义分区 =====
newQuestions.push(newQ('单选题',
  'Spark中，自定义分区需要继承的类是( )。',
  [
    {label:'A', text:'Partitioner'},
    {label:'B', text:'Partition'},
    {label:'C', text:'RDD'},
    {label:'D', text:'SparkConf'}
  ], 'A',
  '自定义分区器需继承Partitioner类，重写numPartitions和getPartition方法。',
  'RDD分区'
));

newQuestions.push(newQ('判断题',
  'RDD的partitioner属性仅对Key-Value类型的RDD有效，对非Key-Value类型为None。( )',
  [
    {label:'A', text:'对'},
    {label:'B', text:'错'}
  ], 'A',
  '分区器仅适用于key-value RDD。HashPartitioner是默认分区器。',
  'RDD分区'
));

// ===== 12. 宽依赖 vs 窄依赖 =====
newQuestions.push(newQ('单选题',
  'Spark中，下列哪个算子会产生宽依赖(Shuffle)？( )',
  [
    {label:'A', text:'map()'},
    {label:'B', text:'filter()'},
    {label:'C', text:'reduceByKey()'},
    {label:'D', text:'flatMap()'}
  ], 'C',
  'reduceByKey、groupByKey、sortByKey等需要跨分区重组数据的算子会产生宽依赖(Shuffle)。map/filter/flatMap是窄依赖。',
  '宽窄依赖'
));

newQuestions.push(newQ('多选题',
  '以下关于Spark RDD依赖关系的描述，正确的有( )。',
  [
    {label:'A', text:'窄依赖：子RDD的每个分区仅依赖父RDD的少数几个分区'},
    {label:'B', text:'宽依赖：子RDD的一个分区依赖父RDD的所有分区'},
    {label:'C', text:'遇到宽依赖时会划分新的Stage'},
    {label:'D', text:'Stage内的算子都是窄依赖关系'}
  ], 'ABCD',
  '窄依赖一对一或少数对少数；宽依赖(Shuffle)一对多。宽依赖触发Stage划分。Stage内全是窄依赖的流水线操作。',
  '宽窄依赖'
));

newQuestions.push(newQ('判断题',
  'Spark中，Stage划分的依据是遇到宽依赖(Shuffle Dependency)。( )',
  [
    {label:'A', text:'对'},
    {label:'B', text:'错'}
  ], 'A',
  '每个Stage由一组可流水线执行的窄依赖算子组成，宽依赖触发新Stage。',
  '宽窄依赖'
));

// ===== 13. Spark SQL两种分析方式 =====
newQuestions.push(newQ('单选题',
  'Spark SQL中，以下哪种方式是先注册临时视图再用SQL查询？( )',
  [
    {label:'A', text:'df.select("name").show()'},
    {label:'B', text:'df.createOrReplaceTempView("t"); spark.sql("SELECT * FROM t")'},
    {label:'C', text:'df.filter($"age">20).show()'},
    {label:'D', text:'df.groupBy("dept").count().show()'}
  ], 'B',
  'Spark SQL支持两种分析方式：1) DataFrame API（select/filter/groupBy）；2) 视图+SQL（createOrReplaceTempView + spark.sql）。',
  'Spark SQL分析方式'
));

newQuestions.push(newQ('简答题',
  '简述Spark SQL中DataFrame的两种数据分析方式，并举例说明各自适用场景。',
  [],
  '方式1：DataFrame API直接操作（df.select/filter/groupBy），适合编程式链式调用；方式2：注册视图后使用SQL查询（df.createOrReplaceTempView + spark.sql），适合复杂SQL和熟悉SQL的人员。',
  'Spark SQL分析方式'
));

// ===== 14. RDD vs DataFrame vs DataSet =====
newQuestions.push(newQ('多选题',
  '以下关于RDD、DataFrame、DataSet三者的描述，正确的有( )。',
  [
    {label:'A', text:'RDD是最底层的API，无Schema信息'},
    {label:'B', text:'DataFrame = Dataset[Row]，有Schema信息'},
    {label:'C', text:'DataSet是强类型的，编译时类型安全'},
    {label:'D', text:'DataFrame通过Catalyst优化器进行查询优化'}
  ], 'ABCD',
  'Spark 2.0统一了API：RDD(无schema)→DataFrame(有schema,弱类型)→DataSet(强类型)。DataFrame走Catalyst优化。',
  'Spark SQL概念'
));

// ===== 15. 方法 vs 函数 =====
newQuestions.push(newQ('单选题',
  'Scala中，以下定义方法(method)正确的是( )。',
  [
    {label:'A', text:'val add = (a:Int,b:Int) => a+b'},
    {label:'B', text:'def add(a:Int,b:Int):Int = {a+b}'},
    {label:'C', text:'function add(a,b){return a+b}'},
    {label:'D', text:'method add(a:Int,b:Int) = a+b'}
  ], 'B',
  'Scala方法用def定义：def 方法名(参数):返回类型 = {方法体}。val+箭头是函数(Function)。',
  'Scala方法与函数'
));

newQuestions.push(newQ('判断题',
  'Scala中，方法是类的成员用def定义，函数是对象可以赋值给变量用val定义。( )',
  [
    {label:'A', text:'对'},
    {label:'B', text:'错'}
  ], 'A',
  '方法(method)用def定义属于类；函数(function)是FunctionN的实例，可作为值传递。',
  'Scala方法与函数'
));

// ===== 16. 统计案例 =====
newQuestions.push(newQ('程序题',
  '使用Spark RDD统计文本文件中每个省份出现的次数，写出核心代码（假设文件每行是一个省份名）。',
  [],
  'val conf = new SparkConf().setAppName("ProvinceCount").setMaster("local[*]"); val sc = new SparkContext(conf); val rdd = sc.textFile("provinces.txt"); val result = rdd.map((_, 1)).reduceByKey(_ + _); result.foreach(println); sc.stop()',
  'RDD编程案例'
));

newQuestions.push(newQ('简答题',
  '使用Spark SQL统计CSV文件中各部门(dept)的人数，写出核心代码。',
  [],
  'val spark = SparkSession.builder().appName("DeptCount").master("local[*]").getOrCreate(); val df = spark.read.format("csv").option("header","true").load("employees.csv"); df.createOrReplaceTempView("emp"); spark.sql("SELECT dept, COUNT(*) FROM emp GROUP BY dept").show(); spark.stop()',
  'Spark SQL编程案例'
));

console.log(`📝 生成 ${newQuestions.length} 道新题目`);

// ===== 第三步：合并 =====
const merged = [...allQuestions, ...newQuestions];
console.log(`📊 合并后总题数: ${merged.length}`);

const newJsContent = `// 六科完整题库 — ${merged.length}题 含复习重点全部知识点\nconst PREPARSED_QUESTIONS = ${JSON.stringify(merged, null, 2)};\n`;
fs.writeFileSync(dbPath, newJsContent, 'utf8');
fs.writeFileSync(path.join(__dirname, 'parsed', 'questions_data.json'), JSON.stringify(merged, null, 2), 'utf8');

// 更新版本号
const htmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');
html = html.replace(/questions_data\.js\?v=\d+/, 'questions_data.js?v=13');
fs.writeFileSync(htmlPath, html, 'utf8');

// 验证
const verify = JSON.parse(fs.readFileSync(dbPath, 'utf8').match(/const PREPARSED_QUESTIONS = (\[[\s\S]*\]);/)[1]);
const sparkQ = verify.filter(q => q.subject === 'Scala & Spark');
const sparkKey = sparkQ.filter(q => q.topic === '重点');
console.log(`✅ Scala & Spark: ${sparkQ.length} 题 (其中标注重点: ${sparkKey.length} 题)`);
console.log(`✅ 总题库: ${verify.length} 题, IDs唯一: ${new Set(verify.map(q=>q.id)).size === verify.length}`);
console.log(`✅ index.html 版本 → v13`);
