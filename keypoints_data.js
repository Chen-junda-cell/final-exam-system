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
  },

  "Java Web": {
    icon: "☕",
    title: "Java Web 考试复习重点",
    source: "课堂课件精炼 + 老师标注重点",
    intro: "Java Web 是整个期末考试的半壁江山。以下六大部分覆盖了从 JSP 基础到 MVC 架构的全部核心考点，每个知识点都配有通俗讲解和考试提示。",
    chapters: [
      {
        num: "一",
        title: "JSP 基础 — 页面组成与运行原理",
        icon: "📄",
        sections: [
          {
            title: "JSP 页面的 7 类内容（必背！）",
            type: "list",
            badge: "⭐ 基础概念",
            items: [
              { label: "① 静态内容", desc: "普通 HTML、CSS、JS，浏览器直接能看懂的部分" },
              { label: "② 指令", desc: '以 <%@ 开头 %> 结尾，给服务器的"指示"。如：<%@ page import="java.util.*" %>' },
              { label: "③ 表达式", desc: '<%= 变量或表达式 %>，直接输出到页面上。如：<%= user.getName() %>' },
              { label: "④ Scriptlet", desc: "<% Java代码 %>，可以写任意 Java 逻辑，嵌入 HTML 中" },
              { label: "⑤ 声明", desc: "<%! 方法或变量 %>，定义成员变量或方法，编译后成为 Servlet 的成员" },
              { label: "⑥ 动作", desc: '以 <jsp:动作名> 开头，如 <jsp:include page="a.jsp"/>' },
              { label: "⑦ 注释", desc: "<%-- 这是注释 --%>，客户端看不到，最安全" }
            ],
            explain: "记法口诀：「静指表脚声动作」。JSP = HTML + Java 代码片段 + JSP 标签。本质是一个被翻译成 Servlet 的文本文件。"
          },
          {
            title: "Tomcat 目录结构",
            type: "table",
            badge: "📌 了解",
            table: {
              head: ["目录", "作用", "考试要点"],
              rows: [
                ["/bin", "启动/停止脚本", "startup.bat / shutdown.bat"],
                ["/conf", "配置文件", "server.xml 最重要（改端口在这）"],
                ["/work", "JSP编译后的Servlet类文件", "JSP→java→class 就放这"],
                ["/webapps", "Web应用发布目录", "项目放这里才能访问"],
                ["/lib", "jar包", "全局可用的依赖库"]
              ]
            },
            examTip: "常考：修改 Tomcat 端口在 /conf/server.xml 里改 Connector 的 port 属性，默认 8080。"
          },
          {
            title: "JSP 执行过程（四步流程图）",
            type: "numbered",
            badge: "⭐ 必考",
            items: [
              "**客户端发请求** → 浏览器访问 .jsp 页面",
              "**转译** → JSP 容器把 .jsp 翻译成 .java（Servlet 源码）",
              "**编译** → 把 .java 编译成 .class 字节码",
              "**执行响应** → 运行 .class，把 HTML 结果返回给浏览器"
            ],
            explain: "第一次访问 JSP 时会经历全部四步，所以比较慢。之后再访问同一个 JSP 就直接执行 .class 了，不需要重新编译。类比：第一次去餐厅 → 看菜单（转译）→ 厨师做菜（编译）→ 上菜（响应）。以后再去直接上菜就行。"
          },
          {
            title: "两个时期：转译时期 vs 请求时期",
            type: "comparison",
            badge: "⭐ 重点",
            left: { title: "转译时期（只做一次）", items: ["JSP → Servlet源码(.java)", "Servlet源码 → 字节码(.class)", "发生在第一次请求时", "如果有错页面就无法访问"] },
            right: { title: "请求时期（每次请求都做）", items: ["执行 .class 文件", "生成 HTML 响应", "每次请求都执行一次", "速度快，不重新编译"] }
          },
          {
            title: "JSP 脚本元素三兄弟",
            type: "list",
            badge: "⭐ 必考",
            items: [
              { label: "表达式 <%= %>", desc: "输出变量的值到页面。不能以分号结尾！", code: '<%= user.getName() %>  注意没有分号！' },
              { label: "Scriptlet <% %>", desc: "写任意 Java 代码，可以有分号", code: "<% for(int i=0;i<10;i++){ out.print(i); } %>" },
              { label: "声明 <%! %>", desc: "定义成员变量和方法，编译后成为 Servlet 的成员", code: "<%! int count = 0; public String sayHi(){ return \"hi\"; } %>" }
            ],
            explain: "最容易搞混的：<%! %> 声明的变量是成员变量（整个 Servlet 共享），<% %> 里声明的变量是局部变量（每次请求重新创建）。多用户同时访问时，成员变量会出现线程安全问题！"
          },
          {
            title: "JSP 三大指令",
            type: "list",
            badge: "⭐ 必考",
            items: [
              { label: "page 指令", desc: "设置页面属性：导包、编码、错误页等", code: '<%@ page import="java.util.*" pageEncoding="UTF-8" errorPage="error.jsp" %>' },
              { label: "include 指令", desc: "编译时包含（静态包含），把另一个文件的内容合进来一起编译", code: '<%@ include file="header.jsp" %>' },
              { label: "taglib 指令", desc: "引入 JSTL 等标签库", code: '<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>' }
            ]
          },
          {
            title: "JSP 9大隐式对象（超级重点！）",
            type: "table",
            badge: "🔥 必背",
            table: {
              head: ["对象", "类型", "作用域", "一句话解释"],
              rows: [
                ["request", "HttpServletRequest", "request", "一次请求的\"快递包裹\"，存本次请求的数据"],
                ["response", "HttpServletResponse", "page", "给客户端的\"回信\""],
                ["session", "HttpSession", "session", "一个用户的\"私人储物柜\"，登录信息放这里"],
                ["application", "ServletContext", "application", "整个应用的\"公告栏\"，所有用户共享"],
                ["out", "JspWriter", "page", "输出流，往页面上写字"],
                ["pageContext", "PageContext", "page", "本页的\"管家\"，能拿到其他8个对象"],
                ["config", "ServletConfig", "page", "当前 Servlet 的配置信息"],
                ["page", "Object", "page", "当前 JSP 页面本身（this）"],
                ["exception", "Throwable", "page", "异常对象，只有错误页能用（isErrorPage=true）"]
              ]
            },
            explain: "四大作用域从小到大：page（本页有效）< request（一次请求）< session（一次会话）< application（整个应用）。考题常问：购物车该用哪个？→ session。网站访问量该用哪个？→ application。",
            examTip: "简答题常考：简述JSP的9大隐式对象。记住口诀：req-resp-session-app，out-config-pageCon，page-exception 就齐了。"
          },
          {
            title: "静态 include vs 动态 include（高频考点！）",
            type: "comparison",
            badge: "🔥 必考",
            left: { title: '静态 include <%@ include file="x.jsp" %>', items: ["编译时就把 x.jsp 内容合进来", "只生成一个 .class 文件", "不能传参数", "共享同一个 request 对象", "被包含页改了需要重新编译主页面"] },
            right: { title: '动态 include <jsp:include page="x.jsp"/>', items: ["运行时才包含 x.jsp 的输出结果", "生成多个 .class 文件（各自编译）", "可以传参数（用 jsp:param）", "各有各的 request 对象", "被包含页改了立刻生效"] }
          }
        ]
      },
      {
        num: "二",
        title: "EL 表达式 — 让 JSP 更简洁",
        icon: "💡",
        sections: [
          {
            title: "EL 四大作用",
            type: "numbered",
            badge: "⭐ 重点",
            items: [
              "**获取数据** → ${user.name} 代替 <%= user.getName() %>，从四大作用域中自动查找",
              "**执行运算** → ${3+5}、${user==null}、${empty list}，可以做算术/关系/逻辑运算",
              "**获取常用对象** → EL 有11个隐式对象（如 param、cookie、sessionScope 等）",
              "**调用 Java 方法** → 可以自定义 EL 函数，在页面上调用 Java 方法"
            ],
            explain: "EL 最大的好处是把又丑又长的 Java 代码变成了简洁的 ${} 表达式。比如原来要写 <% User u=(User)session.getAttribute(\"user\"); out.print(u.getName()); %>，现在只需 ${user.name}。",
            examTip: "${empty xxx} 是高频考点——判断是否为 null 或空字符串/空集合。${empty \"\"} 结果是 true。"
          }
        ]
      },
      {
        num: "三",
        title: "JDBC 操作数据库",
        icon: "🗄️",
        sections: [
          {
            title: "JDBC 四步走（编程题模板）",
            type: "numbered",
            badge: "⭐ 重点",
            items: [
              "**加载驱动** → `Class.forName(\"驱动类名\")`，告诉 Java 你要连哪种数据库",
              "**建立连接** → `DriverManager.getConnection(url, user, password)`，相当于拨号",
              "**执行 SQL** → 创建 Statement / PreparedStatement，执行查询或更新",
              "**释放资源** → 关闭 ResultSet → Statement → Connection，不关会导致连接泄漏"
            ],
            explain: "类比打电话：①装SIM卡（加载驱动）→②拨号（建立连接）→③说话（执行SQL）→④挂电话（释放资源）。注意关资源的顺序要倒过来：先关 ResultSet，再关 Statement，最后关 Connection。",
            examTip: "executeUpdate() 用于增删改，返回影响行数。executeQuery() 用于查询，返回 ResultSet 结果集。PreparedStatement 可以防 SQL 注入，比 Statement 更安全。"
          }
        ]
      },
      {
        num: "四",
        title: "Cookie 与 Session — 必须分清",
        icon: "🍪",
        sections: [
          {
            title: "四大区别对比",
            type: "table",
            badge: "🔥 必考",
            table: {
              head: ["比较点", "Cookie", "Session"],
              rows: [
                ["存放位置", "客户端浏览器", "服务器端内存"],
                ["安全性", "弱（可被篡改/窃取）", "强（用户看不到）"],
                ["网络传输", "每次请求都带着，占带宽", "只在服务器，不传输"],
                ["生命周期", "累计计时（可设 MaxAge）", "间隔计时（一段时间不用就过期）"],
                ["容量限制", "≤4KB", "无限制"],
                ["典型用途", "记住密码、浏览偏好", "登录状态、购物车"]
              ]
            },
            explain: "一句话总结：重要信息用 Session（登录状态），不重要但需要记住的用 Cookie（偏好设置）。Cookie 像把钥匙交给用户保管，Session 像把钥匙留在前台。"
          }
        ]
      },
      {
        num: "五",
        title: "Filter 过滤器 — 请求的安检站",
        icon: "🔒",
        sections: [
          {
            title: "Filter 生命周期三阶段",
            type: "numbered",
            badge: "⭐ 必考",
            items: [
              "**初始化 init()** — 服务器启动时调用一次，加载配置（FilterConfig）",
              "**过滤 doFilter()** — 每次请求被拦截时调用，是核心方法。必须调用 `chain.doFilter(req, resp)` 才能放行！",
              "**销毁 destroy()** — 服务器关闭时调用一次，释放资源"
            ],
            explain: "Filter 就像一个安检门：进商场前先过一下（doFilter），检查你有没有带违禁品（比如非法IP），通过了才放行（chain.doFilter）。init 是装安检门，destroy 是拆安检门。",
            examTip: "如果 doFilter 里忘了写 chain.doFilter()，请求就被卡住了，页面永远是白的！多个 Filter 按 web.xml 中注册顺序执行。"
          }
        ]
      },
      {
        num: "六",
        title: "MVC 三层架构 — 最经典的开发模式",
        icon: "🏗️",
        sections: [
          {
            title: "MVC 三层各司其职",
            type: "cards",
            badge: "🔥 必考",
            cards: [
              { name: "M — Model（模型）", scene: "数据+业务逻辑。JavaBean、DAO、Service。只管数据，不管展示", icon: "📦" },
              { name: "V — View（视图）", scene: "页面展示。JSP/HTML。只负责把数据漂亮地显示出来，不处理逻辑", icon: "🖼️" },
              { name: "C — Controller（控制器）", scene: "调度中心。Servlet。接收请求→调Model处理→跳转View展示", icon: "🎮" }
            ],
            explain: "MVC 的本质是「各司其职」。好比餐厅：服务员（Controller）接单→厨师（Model）做菜→摆盘（View）上桌。客人不和厨师直接说话，厨师也不管盘子怎么摆。这样做的好处：改界面不影响业务逻辑，改逻辑不影响界面。",
            examTip: "MVC 登录流程是考试编程题模板：login.jsp（View）→ LoginServlet（Controller）获取参数调 LoginDao（Model）验证 → 成功则 sendRedirect 到 welcome.jsp，失败则 forward 回 login.jsp 并带上错误信息。"
          }
        ]
      }
    ]
  },

  "Linux": {
    icon: "🐧",
    title: "Linux 考试复习重点",
    source: "课堂课件精炼 + 全部知识点汇总",
    intro: "Linux 考点多但规律性强。以下十三章覆盖从基础命令到 Shell 脚本的全部核心知识点，每个章节都配有通俗讲解、命令速记和考试陷阱提示。",
    chapters: [
      {
        num: "一",
        title: "Linux 基础概述",
        icon: "📖",
        sections: [
          {
            title: "Linux 的 7 大特点",
            type: "list",
            badge: "⭐ 基础概念",
            items: [
              { label: "与 UNIX 兼容", desc: "Linux 是 UNIX 的「开源克隆」，命令和架构都高度兼容" },
              { label: "自由软件，源码公开", desc: "免费使用、自由修改、自由分发" },
              { label: "性能高，安全性强", desc: "服务器市场份额第一，极少中病毒" },
              { label: "便于定制和再开发", desc: "从嵌入式到超级计算机都能跑" },
              { label: "互操作性高", desc: "能和 Windows、macOS 等各种系统互联互通" },
              { label: "多任务和真正的 32/64 位", desc: "真正的多用户多任务操作系统" },
              { label: "应用广泛", desc: "服务器+嵌入式领域霸主，高性能低成本" }
            ],
            explain: "一句话记住：Linux = 开源 + 免费 + 稳定 + 安全。主流发行版 CentOS 7 使用最多（考试默认环境）。"
          }
        ]
      },
      {
        num: "二",
        title: "开关机与重启命令",
        icon: "🔌",
        sections: [
          {
            title: "必须记住的几条命令",
            type: "list",
            badge: "⭐ 基础",
            items: [
              { label: "关机", desc: "shutdown -h now（立即关机）、poweroff、halt", code: "shutdown -h +30  # 30分钟后关机" },
              { label: "重启", desc: "reboot、shutdown -r now", code: "shutdown -r +10  # 10分钟后重启" },
              { label: "取消关机", desc: "shutdown -c 取消之前设置的关机计划" }
            ],
            examTip: "考试常考：shutdown -h +30 是什么意思？→ 30分钟后关机。shutdown -c 是取消。"
          }
        ]
      },
      {
        num: "三",
        title: "用户管理",
        icon: "👤",
        sections: [
          {
            title: "用户管理核心命令",
            type: "table",
            badge: "⭐ 必考",
            table: {
              head: ["操作", "命令", "说明"],
              rows: [
                ["添加用户", "useradd 用户名", "新建一个用户账号"],
                ["设置密码", "passwd 用户名", "给用户设密码"],
                ["删除用户（仅账号）", "userdel 用户名", "家目录保留"],
                ["删除用户+家目录", "userdel -r 用户名", "🔥 考试重点！-r 表示连家目录一起删"],
                ["新建用户默认目录", "/home/用户名", "创建用户时自动生成同名文件夹"]
              ]
            },
            explain: "最容易搞混的：userdel 不加 -r → 只删账号，/home 下的文件夹还在。加 -r → 账号和家目录全部删除。考试常问：'删除用户并删除其家目录的命令' → userdel -r 用户名。",
            examTip: "加用户时用 -d 可以指定家目录位置：useradd -d /home/ttt milan。只能 root 或 sudo 执行这些命令。"
          }
        ]
      },
      {
        num: "四",
        title: "软链接与硬链接",
        icon: "🔗",
        sections: [
          {
            title: "两种链接的区别",
            type: "comparison",
            badge: "⭐ 重点",
            left: { title: "软链接（符号链接）", items: ["类似 Windows 快捷方式", "可以跨文件系统", "可指向目录", "删除源文件 → 链接失效", "创建：ln -s 源文件 链接名"] },
            right: { title: "硬链接", items: ["与源文件共享同一个 inode", "不能跨文件系统", "通常不能指向目录", "删除源文件 → 链接仍有效", "创建：ln 源文件 链接名"] }
          }
        ]
      },
      {
        num: "五",
        title: "日历与文件查看命令",
        icon: "📅",
        sections: [
          {
            title: "cal 日历命令速查",
            type: "list",
            items: [
              { label: "cal", desc: "当月日历" },
              { label: "cal 6 2026", desc: "指定 2026年6月", code: "cal 月份 年份" },
              { label: "cal -y", desc: "全年日历", code: "cal -y 2026" },
              { label: "cal -3", desc: "上月+本月+下月三个月" }
            ]
          },
          {
            title: "tail 查看文件末尾",
            type: "list",
            items: [
              { label: "tail -n 15 文件名", desc: "查看最后 15 行", code: "tail -n 15 /var/log/messages" },
              { label: "tail -f 文件名", desc: "实时追踪文件更新（看日志常用）" }
            ]
          }
        ]
      },
      {
        num: "六",
        title: "打包压缩命令",
        icon: "📦",
        sections: [
          {
            title: "三种压缩方式速查",
            type: "table",
            badge: "⭐ 必考",
            table: {
              head: ["命令", "作用", "常用组合"],
              rows: [
                ["tar -zcvf", "打包并 gzip 压缩", "tar -zcvf 包名.tar.gz 要打包的目录/"],
                ["tar -zxvf", "解压 tar.gz", "tar -zxvf 包名.tar.gz -C /目标目录"],
                ["gzip 文件名", "压缩单个文件（生成 .gz）", "gzip file.txt → file.txt.gz"],
                ["gunzip / gzip -d", "解压 .gz 文件", "gunzip file.txt.gz"],
                ["zip -r", "zip 格式压缩（兼容 Windows）", "zip -r 包名.zip 目录/"],
                ["unzip", "解压 zip 文件", "unzip 包名.zip"]
              ]
            },
            explain: "tar 参数口诀：-c 创建（Create）、-x 解压（eXtract）、-z 用 gzip、-v 显示过程（Verbose）、-f 指定文件名（File）。创建用 czvf，解压用 xzvf。",
            examTip: "常考：tar -zcvf 是压缩，tar -zxvf 是解压。tar xvzf myftp.tar.gz -C / 表示解压到根目录。"
          }
        ]
      },
      {
        num: "七",
        title: "vim/vi 文本编辑器（核心考点！）",
        icon: "✏️",
        sections: [
          {
            title: "三大核心模式",
            type: "list",
            badge: "🔥 必考",
            items: [
              { label: "① 命令模式（普通模式）", desc: "打开 vim 后默认进入。光标移动、复制、删除、粘贴、撤销都在这个模式下完成。不能打字！" },
              { label: "② 输入模式（编辑模式）", desc: "按 i/a/o 进入，可以正常写文字。按 Esc 退回命令模式" },
              { label: "③ 末行模式（底线命令模式）", desc: "按 : 进入，光标跳到屏幕底部。用于保存(:w)、退出(:q)、保存退出(:wq)、强制退出(:q!)" }
            ]
          },
          {
            title: "模式切换关系图",
            type: "list",
            badge: "⭐ 常考流程",
            items: [
              { label: "命令 → 输入", desc: "按 i（光标前插入）、a（光标后插入）、o（下一行插入）" },
              { label: "输入 → 命令", desc: "按 Esc 键返回" },
              { label: "命令 → 末行", desc: "按 : 冒号" },
              { label: "末行 → 命令", desc: "执行完命令自动返回，或按 Esc" }
            ]
          },
          {
            title: "命令模式常用操作速记卡",
            type: "table",
            badge: "🔥 高频",
            table: {
              head: ["操作", "快捷键", "口诀"],
              rows: [
                ["光标移动", "h左 j下 k上 l右", "←↓↑→ 对应 hjkl"],
                ["删除整行", "dd", "delete delete 删行"],
                ["删除单个字符", "x", "叉掉一个字符"],
                ["复制整行", "yy", "yank yank 复制"],
                ["粘贴", "p", "paste 粘贴到下一行"],
                ["撤销", "u", "undo 撤销"],
                ["重复上次操作", ".", "小数点重复"]
              ]
            },
            examTip: "高频简答：删除一整行的快捷键？→ dd。保存并退出？→ :wq 或 :x。不保存强制退出？→ :q!。显示行号？→ :set nu。"
          },
          {
            title: "完整实操流程（必会）",
            type: "numbered",
            items: [
              "vim 文件名 → 进入命令模式",
              "按 i → 进入输入模式，编写内容",
              "按 Esc → 回到命令模式",
              "按 : → 进入末行模式，输入 :wq 保存退出"
            ]
          }
        ]
      },
      {
        num: "八",
        title: "目录操作命令",
        icon: "📁",
        sections: [
          {
            title: "常用目录命令速查",
            type: "list",
            badge: "⭐ 基础",
            items: [
              { label: "cd ..", desc: "返回上一级目录" },
              { label: "cd /", desc: "切换到根目录" },
              { label: "cd ~ 或 cd", desc: "回到当前用户的家目录" },
              { label: "pwd", desc: "显示当前所在目录的完整路径" },
              { label: "ls", desc: "列出目录内容（-a 含隐藏文件，-l 详细信息）" },
              { label: "mkdir", desc: "创建目录（-p 递归创建多级目录）" },
              { label: "rmdir", desc: "删除空目录" }
            ],
            examTip: "注意：cd 后面必须有空格！mkdir -p 可以一次性创建多级不存在的目录。"
          }
        ]
      },
      {
        num: "九",
        title: "正则表达式与文本处理",
        icon: "🔍",
        sections: [
          {
            title: "两大文本处理利器",
            type: "comparison",
            left: { title: "grep — 搜索工具", items: ["从文本中搜索匹配的行", "只读，不修改原文件", "支持正则表达式", '用法：grep "关键词" 文件名', "如：grep \"error\" log.txt"] },
            right: { title: "sed — 流编辑器", items: ["可直接修改文件内容", "非交互式批量处理", "支持查找替换、删除行", "用法：sed 's/旧/新/g' 文件名", "如：sed 's/hello/world/g' file.txt"] }
          }
        ]
      },
      {
        num: "十",
        title: "Shell 脚本基础",
        icon: "💻",
        sections: [
          {
            title: "Shell 是什么？",
            type: "text",
            badge: "⭐ 基础概念",
            text: "Shell 是**用户与 Linux 内核之间的命令解释器**。你输入命令 → Shell 翻译给内核 → 内核执行 → 结果返回给你。常见的 Shell 有 bash（默认）、sh、zsh 等。Shell 也是一种脚本编程语言，可以写自动化脚本。"
          },
          {
            title: "Shell 脚本基本结构",
            type: "code",
            badge: "⭐ 必写",
            code: `#!/bin/bash
# 第一行必须写这个！指定用 bash 解释器执行
# # 开头的是注释

# 变量赋值（等号两边不能有空格！）
name="World"

# 使用变量（用 $ 符号）
echo "Hello, $name"

# 条件判断
if [ -f /etc/passwd ]; then
    echo "文件存在"
fi`,
            explain: "写 Shell 脚本最重要三条规则：①第一行必须是 #!/bin/bash；②变量赋值等号两边不能有空格；③使用变量时前面加 $。考试常考这三条规则。",
            examTip: "如何执行脚本？①chmod +x 脚本.sh 给执行权限，然后 ./脚本.sh；②不设权限直接用 sh 脚本.sh 执行。"
          }
        ]
      },
      {
        num: "十一",
        title: "文件权限管理（超级重点！）",
        icon: "🔐",
        sections: [
          {
            title: "权限基本概念",
            type: "list",
            badge: "🔥 必考",
            items: [
              { label: "r（读）", desc: "数字 = 4，可以查看文件内容或列出目录" },
              { label: "w（写）", desc: "数字 = 2，可以修改文件或在目录中创建/删除文件" },
              { label: "x（执行）", desc: "数字 = 1，可以执行文件或进入目录" }
            ],
            explain: "权限分三组：所有者(u)｜所属组(g)｜其他人(o)。每组三个位 rwx。比如 rwxr-xr-x → 所有者读写执行(7)，组读执行(5)，其他人读执行(5)→ 755。"
          },
          {
            title: "chmod 两种用法对比",
            type: "table",
            badge: "🔥 必考",
            table: {
              head: ["方式", "格式", "示例", "含义"],
              rows: [
                ["数字法（最常用）", "chmod 数字 文件", "chmod 755 file", "所有者rwx 组r-x 其他人r-x"],
                ["数字法 — 全权限", "chmod 777 文件", "chmod 777 file", "所有人都有全部权限（⚠️危险）"],
                ["字符法 — 添加", "chmod 用户+权限 文件", "chmod u+x file", "给所有者加执行权限"],
                ["字符法 — 移除", "chmod 用户-权限 文件", "chmod g-w file", "去掉组的写权限"],
                ["字符法 — 全权限", "chmod a+rwx 文件", "chmod a+rwx file", "所有人加全部权限（=777）"]
              ]
            },
            explain: "数字权限速算：r=4, w=2, x=1。例如 rw- = 4+2+0 = 6，r-x = 4+0+1 = 5。记住 777（全部权限）、755（标准）、644（文件默认）。",
            examTip: "⚠️ 别把 chmod（改权限）和 chown（改所有者）搞混！考试常把这两个放在一起迷惑你。chmod 管权限，chown 管归属。"
          }
        ]
      },
      {
        num: "十二",
        title: "Scala 环境配置（Windows）",
        icon: "⚙️",
        sections: [
          {
            title: "Windows 下配置 Scala 三步走",
            type: "numbered",
            badge: "📌 了解",
            items: [
              "**设置环境变量** → 新建 SCALA_HOME=Scala 解压目录",
              "**加到 PATH** → %SCALA_HOME%\\bin 追加到系统 PATH",
              "**测试** → CMD 中输入 scala，进入交互式编程模式即成功"
            ],
            explain: "退出 Scala 交互模式：输入 :quit 或 :q。",
            examTip: "第一个 Scala 程序的完整代码结构要记住：object 类名 { def main(args: Array[String]): Unit = { ... } }"
          },
          {
            title: "第一个 Scala 程序模板",
            type: "code",
            code: `object helloscala {
  def main(args: Array[String]): Unit = {
    println("欢迎，这是我的第一个Scala程序")
  }
}`,
            explain: "Scala 程序结构：①用 object 定义单例对象（入口）；②def main 定义主方法；③println 输出。和 Java 不同：没有 public class，用 object 代替 static。"
          }
        ]
      }
    ]
  }
};
