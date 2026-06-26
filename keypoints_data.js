// ================================================================
// 老师重点 — 各科考试复习重点（课堂录音+课件提炼）
// 新增科目：在 TEACHER_KEYPOINTS 对象中添加对应 key 即可
// ================================================================
const TEACHER_KEYPOINTS = {
  "Scala & Spark": {
    icon: "⚡",
    title: "Spark 考试复习重点",
    source: "课程文档 + 课堂录音整理",
    intro: "以下内容来自老师课堂强调+课件核心提炼，标注 ⭐ 的为老师反复强调的必考点。建议结合题库中的「重点」标签题目一起复习。",
    chapters: [
      {
        num: "一",
        title: "Spark 概述（第1章）",
        icon: "📖",
        sections: [
          {
            title: "Spark 与 MapReduce 的对比",
            type: "table",
            badge: "⭐ 高频",
            table: {
              head: ["对比项", "MapReduce", "Spark"],
              rows: [
                ["计算模式", "磁盘迭代计算", "内存迭代计算"],
                ["速度", "慢（大量磁盘IO）", "快（比 MR 快 10~100 倍）"],
                ["编程模型", "只有 Map 和 Reduce", "丰富的算子（map/flatMap/reduceByKey...）"],
                ["易用性", "API 较底层", "API 简洁优雅"],
                ["生态", "较单一", "生态完善（SQL/Streaming/MLlib/GraphX）"]
              ]
            },
            why: "为什么出现 Spark？因为 MapReduce 有三个致命缺陷：①每次 Job 结果写磁盘，IO 开销巨大；②只能表达 Map 和 Reduce，复杂逻辑写起来很痛苦；③不适合需要反复迭代的算法（如机器学习）。Spark 用内存计算解决了这三个问题。",
            examTip: "选择题常考：Spark 比 MR 快多少？（10~100倍）MR 的计算模式？（磁盘迭代）"
          },
          {
            title: "Spark 生态圈组件及应用场景",
            type: "cards",
            badge: "⭐ 必考",
            cards: [
              { name: "Spark Core", scene: "核心引擎，所有组件的基础", icon: "⚙️" },
              { name: "Spark SQL", scene: "结构化数据 → SQL查询、报表分析", icon: "📊" },
              { name: "Spark Streaming", scene: "流式计算 → 实时日志分析、监控告警", icon: "🌊" },
              { name: "MLlib", scene: "机器学习 → 推荐系统、分类聚类", icon: "🤖" },
              { name: "GraphX", scene: "图计算 → 社交网络分析、PageRank", icon: "🕸️" }
            ],
            examTip: "考试套路：给一个业务场景，让你选组件。记住关键词——SQL/报表→Spark SQL，实时/流→Streaming，训练模型/推荐→MLlib，社交关系/图→GraphX。"
          }
        ]
      },
      {
        num: "二",
        title: "Scala 编程基础（第2~3章）",
        icon: "💻",
        sections: [
          {
            title: "变量与常量",
            type: "list",
            badge: "⭐ 基础",
            items: [
              { label: "var", desc: "变量，值可以改变", code: "var x = 10; x = 20  // ✅ 可以" },
              { label: "val", desc: "常量（不可变），类似 Java 的 final", code: "val y = 10; y = 20  // ❌ 编译错误！" }
            ],
            explain: "面试/考试必问：var 和 val 的区别。一句话记住：val 是「值」，定了就不能改；var 是「变量」，可以改。Scala 推荐尽量用 val（函数式编程风格）。"
          },
          {
            title: "方法与函数",
            type: "code",
            badge: "⭐ 重点",
            code: `// 方法（Method）— 用 def 定义，属于类/对象
def add(a: Int, b: Int): Int = {
  return a + b
}

// 函数（Function）— 可以赋值给变量，当成值传递
val addFunc = (a: Int, b: Int) => a + b`,
            explain: "区别：方法是类的成员（def），函数是对象（可以赋给变量、当参数传）。考试常考语法格式，记住方法有等号和返回类型，函数用 => 箭头。"
          },
          {
            title: "复杂数据类型",
            type: "list",
            badge: "⭐ 必考",
            items: [
              { label: "Array", desc: "定长数组，元素同类型，取值用 (下标)", code: 'val arr = Array(1,2,3); arr(0)  // → 1' },
              { label: "ArrayBuffer", desc: "变长数组，可动态增删，需 import", code: 'val buf = ArrayBuffer(1,2); buf += 3' },
              { label: "List", desc: "不可变列表，元素可不同类型，:: 拼接", code: 'val list = 1 :: 2 :: 3 :: Nil' },
              { label: "Set", desc: "无重复元素的集合，无序", code: 'val set = Set(1, 2, 2, 3)  // → Set(1,2,3)' },
              { label: "Map", desc: "键值对，用 -> 连接", code: 'val map = Map("a"->1, "b"->2)' },
              { label: "Tuple", desc: "元组，最大22个元素，_1/_2访问（从1开始！）", code: 'val t = (1,"hi",true); t._2  // → "hi"' }
            ],
            explain: "最容易错的是 Tuple！注意：①最大长度22；②索引用 _1 _2 而不是 _(0) _(1)；③索引从1开始不是0！"
          },
          {
            title: "类与对象 + 面向对象关键字",
            type: "list",
            items: [
              { label: "class vs object", desc: "class 是多例的（new 多个实例），object 是单例的（全局唯一，类似 Java static）" },
              { label: "extends", desc: "继承，和 Java 一样", code: "class Dog extends Animal" },
              { label: "override", desc: "重写父类方法，必须写！Scala 强制要求", code: "override def speak() = ..." },
              { label: "trait", desc: "特质，类似 Java 接口但可以有实现，支持多重混入 with", code: "class A extends T1 with T2" },
              { label: "abstract", desc: "抽象类，不能直接实例化", code: "abstract class Animal { def speak() }" }
            ]
          },
          {
            title: "for 循环",
            type: "code",
            code: `// to：包含结尾（闭区间）
for (i <- 1 to 5) println(i)    // 输出 1,2,3,4,5

// until：不包含结尾（左闭右开）
for (i <- 1 until 5) println(i) // 输出 1,2,3,4`,
            explain: "Scala 的 for 循环和 Java 完全不同！不用 for(i=0;i<n;i++)，而是 for(i <- 集合)。to 包含结尾，until 不包含。"
          }
        ]
      },
      {
        num: "三",
        title: "Spark 集群环境（第4章）",
        icon: "🖥️",
        sections: [
          {
            title: "Spark 基本架构",
            type: "cards",
            cards: [
              { name: "Master", scene: "主节点，负责资源管理和调度（Standalone模式）", icon: "🏠" },
              { name: "Worker", scene: "从节点，负责管理本机资源，启动 Executor", icon: "👷" },
              { name: "Driver", scene: "驱动程序，运行 main() 方法，创建 SparkContext", icon: "🚗" },
              { name: "Executor", scene: "执行器，JVM 进程，运行具体 Task 并返回结果", icon: "⚡" }
            ],
            explain: "一个 Spark 应用 = 1个Driver + N个Executor。Driver 发任务，Executor 干活。Master/Worker 是集群层面的概念（Standalone 模式）。"
          },
          {
            title: "工作模式（部署模式）",
            type: "list",
            items: [
              { label: "Local", desc: "本地模式，开发测试用", code: 'setMaster("local[*]")   // 用全部CPU核心' },
              { label: "Standalone", desc: "Spark 自带的集群管理器" },
              { label: "YARN", desc: "Hadoop 的资源管理器，生产环境最常用" },
              { label: "Mesos / K8s", desc: "其他资源管理器" }
            ]
          },
          {
            title: "SparkConf 与 SparkContext（代码模板）",
            type: "code",
            badge: "⭐ 必写",
            code: `// 任何 Spark RDD 程序的开头两句！
val conf = new SparkConf().setAppName("我的应用").setMaster("local[*]")
val sc = new SparkContext(conf)

// 程序结束前
sc.stop()`,
            explain: "这两行是 RDD 编程的固定开头，考试让写代码的话第一件事就是写这个。setAppName 给应用起名，setMaster 指定运行模式。"
          }
        ]
      },
      {
        num: "四",
        title: "Spark RDD — 核心考点（第5章）",
        icon: "🔥",
        sections: [
          {
            title: "RDD 是什么？",
            type: "text",
            badge: "⭐ 基础概念",
            text: "RDD（Resilient Distributed Dataset）= 弹性分布式数据集。是 Spark 最核心的数据抽象。三个关键词：**不可变**（创建后不能改）、**可分区**（数据分布在多台机器上）、**可并行计算**（每个分区独立计算）。"
          },
          {
            title: "RDD 五大属性（必背！）",
            type: "numbered",
            badge: "🔥 超高频",
            items: [
              "**分区列表** — 数据被切成多个分区，分布在不同节点上",
              "**计算函数** — 每个算子作用在每个分区上，对分区内的数据执行计算",
              "**依赖关系** — 记录父 RDD 到子 RDD 的转换链（宽依赖/窄依赖）",
              "**分区器**（可选）— 只对 Key-Value RDD 有效（HashPartitioner 默认）",
              "**优先位置列表** — 数据在哪台机器上就尽量在那台机器上计算（移动计算不移动数据）"
            ],
            explain: "简答题高频！记住口诀：「分区算依赖，器优」。考试会问'简述RDD五大属性'，按上面五点答就行。"
          },
          {
            title: "RDD 编程五大步（编程题模板）",
            type: "numbered",
            badge: "🔥 必写",
            items: [
              "**创建 SparkConf** → setAppName + setMaster",
              "**创建 SparkContext** → new SparkContext(conf)",
              "**读取数据 + 转换处理** → textFile → flatMap → map → reduceByKey...（唯一不固定部分）",
              "**触发计算 + 存储结果** → saveAsTextFile / collect / foreach",
              "**停止** → sc.stop()"
            ],
            explain: "编程题就按这五步写，前三步固定模板，第四步根据题目要求调整算子。"
          },
          {
            title: "算子分类（Transformation vs Action）",
            type: "table",
            badge: "🔥 必考",
            table: {
              head: ["类型", "特点", "常见算子"],
              rows: [
                ["Transformation\n（转换）", "惰性求值（Lazy）\n不立即执行，只是记录操作", "map、flatMap、filter、reduceByKey、groupByKey、sortBy、union、distinct"],
                ["Action\n（行动）", "触发真正计算\n返回结果或写入存储", "count、collect、reduce、first、take、foreach、saveAsTextFile"]
              ]
            },
            explain: "考试最爱考：给你一个算子名，问它是 Transformation 还是 Action。记忆技巧——会返回值/写磁盘/打印的（collect/count/save）是 Action，其余的转换类都是 Transformation。另外注意：flatMap 是 Transformation，foreach 是 Action！",
            examTip: "flatMap(func)：先 map 再 flatten（扁平化），常用来分词。flatMap(_.split(\" \")) 是最经典用法。"
          },
          {
            title: "宽依赖 vs 窄依赖 + Stage 划分",
            type: "comparison",
            badge: "🔥 必考",
            left: { title: "窄依赖（Narrow）", items: ["子 RDD 的每个分区只依赖父 RDD 的**一个或少数几个**分区", "不会产生 Shuffle", "例如：map、filter、flatMap、union", "同一 Stage 内可流水线执行"] },
            right: { title: "宽依赖（Wide/Shuffle）", items: ["子 RDD 的一个分区依赖父 RDD 的**所有**分区", "产生 Shuffle（数据跨节点传输）", "例如：reduceByKey、groupByKey、sortByKey、join", "遇到宽依赖 → 划分新 Stage！"] },
            explain: "Stage 划分的原则：遇到宽依赖就切一刀。一个 Stage 内的算子全是窄依赖，可以流水线执行不用等。宽依赖需要等所有分区数据到齐才能开始。考题常问：xxx 算子产生宽依赖还是窄依赖？会不会触发 Shuffle？"
          },
          {
            title: "RDD 分区（自定义分区）",
            type: "text",
            text: "默认分区器是 **HashPartitioner**（对 key 取 hashCode 再模分区数）。自定义分区需继承 **Partitioner** 类，重写两个方法：`numPartitions`（分区数）和 `getPartition(key)`（返回分区编号）。"
          }
        ]
      },
      {
        num: "五",
        title: "Spark SQL（第7章）",
        icon: "📊",
        sections: [
          {
            title: "Spark SQL 编程入口",
            type: "text",
            badge: "⭐ 重点",
            text: "Spark 2.0+ 的统一入口是 **SparkSession**（整合了旧的 SparkContext、SQLContext、HiveContext）。创建方式：`SparkSession.builder().appName(\"xx\").master(\"local[*]\").getOrCreate()`。spark-shell 启动时自动提供了名为 **spark** 的 SparkSession 对象。"
          },
          {
            title: "DataFrame vs DataSet",
            type: "list",
            items: [
              { label: "DataFrame", desc: "= Dataset[Row]，有 Schema 的分布式数据表，弱类型（运行时才知道列类型）" },
              { label: "DataSet", desc: "强类型（编译时就知道类型），Scala/Java 可用（Python 不支持），支持 RDD 算子" },
              { label: "转换", desc: "DataFrame → DataSet：df.as[Person]；DataSet → DataFrame：ds.toDF()" }
            ]
          },
          {
            title: "两种分析方式",
            type: "comparison",
            badge: "⭐ 重点",
            left: { title: "方式一：DataFrame API", items: ["链式调用，适合编程", "df.select(\"name\").filter($\"age\">20).show()", "df.groupBy(\"dept\").count()"] },
            right: { title: "方式二：视图 + SQL", items: ["先注册临时视图，再用 SQL 查", "df.createOrReplaceTempView(\"t\")", "spark.sql(\"SELECT * FROM t WHERE age>20\").show()"] },
            explain: "两种方式结果一样，挑你顺手的用。SQL 方式对熟悉 SQL 的人更友好，API 方式更适合链式编程。"
          },
          {
            title: "数据加载与存储",
            type: "table",
            table: {
              head: ["操作", "代码"],
              rows: [
                ["读取 JSON", 'spark.read.format("json").load("path")'],
                ["读取 CSV", 'spark.read.format("csv").option("header","true").load("path")'],
                ["读取 Parquet（默认）", 'spark.read.load("path")  // parquet 是默认格式'],
                ["写入文件", 'df.write.format("json").save("path")'],
                ["写入数据库（JDBC）", 'df.write.format("jdbc").option("url","...").option("dbtable","...").save()'],
                ["保存模式", 'SaveMode: Append(追加) / Overwrite(覆盖) / ErrorIfExists(默认报错) / Ignore(忽略)']
              ]
            }
          },
          {
            title: "Catalyst 优化器",
            type: "text",
            text: "Catalyst 是 Spark SQL 的**查询优化框架**。它会对你写的 SQL/DataFrame 操作进行逻辑优化（谓词下推、列裁剪等），然后生成高效的物理执行计划。这是 Spark SQL 比直接写 RDD 快的重要原因。"
          }
        ]
      },
      {
        num: "六",
        title: "编程题模板（考场直接用）",
        icon: "📝",
        sections: [
          {
            title: "RDD 编程模板（WordCount）",
            type: "code",
            badge: "🔥 考场模板",
            code: `val conf = new SparkConf().setAppName("WordCount").setMaster("local[*]")
val sc = new SparkContext(conf)

// 读取文本文件
val rdd = sc.textFile("input.txt")

// 分词 → 映射成 (单词, 1) → 按单词聚合计数
val result = rdd.flatMap(_.split(" "))
                .map((_, 1))
                .reduceByKey(_ + _)

// 保存结果
result.saveAsTextFile("output")

// 停止
sc.stop()`,
            explain: "WordCount 是 Spark 的 Hello World。flatMap 分词，map 转成键值对，reduceByKey 聚合。这个模板背下来，大多数 RDD 编程题都能套。"
          },
          {
            title: "Spark SQL 编程模板",
            type: "code",
            badge: "🔥 考场模板",
            code: `val spark = SparkSession.builder()
  .appName("MyApp")
  .master("local[*]")
  .getOrCreate()

// 读取数据
val df = spark.read.format("json").load("data.json")

// 注册视图 + SQL 查询
df.createOrReplaceTempView("t")
val result = spark.sql("""
  SELECT dept, COUNT(*) as cnt
  FROM t
  GROUP BY dept
  ORDER BY cnt DESC
""")

// 显示结果
result.show()

// 写入数据库
result.write.format("jdbc")
  .option("url", "jdbc:mysql://localhost/test")
  .option("dbtable", "result")
  .save()

spark.stop()`,
            explain: "Spark SQL 模板比 RDD 简洁很多。核心三步：①建 SparkSession ②读数据 createOrReplaceTempView ③spark.sql 查询。记住导入 spark.implicits._ 才能用 $ 语法。"
          }
        ]
      },
      {
        num: "七",
        title: "复习优先级（按重要程度排序）",
        icon: "🎯",
        sections: [
          {
            title: "复习优先级",
            type: "priority",
            items: [
              { rank: 1, label: "🔥 最高优先", content: "RDD 五大属性、算子分类（Transformation/Action）、宽窄依赖 ← 简答题+选择题高频" },
              { rank: 2, label: "🔥 必会", content: "RDD / Spark SQL 编程模板 ← 编程题必写" },
              { rank: 3, label: "⭐ 高频", content: "Spark 生态组件及应用场景（给场景选组件）" },
              { rank: 4, label: "⭐ 重点", content: "Scala 方法/函数、Tuple（_1 _2 访问，从1开始）" },
              { rank: 5, label: "⭐ 重点", content: "Spark 架构（Master/Worker/Driver/Executor）+ 运行模式" },
              { rank: 6, label: "📌 掌握", content: "DataFrame 两种分析方式（API vs SQL视图）" },
              { rank: 7, label: "📌 掌握", content: "var/val、class/object、for 循环（to/until）" },
              { rank: 8, label: "📌 了解", content: "集群安装部署（了解即可，一般不考操作题）" }
            ]
          }
        ]
      }
    ]
  }
};
