# Spark 考试复习重点

> 基于课程文档 + 课堂录音整理
> 标注 ⭐ = 老师重点强调，🔥 = 高频考点

---

## 一、第1章 — Spark 概述

### 1.1 Spark 与 MapReduce 的对比

| 对比项 | MapReduce | Spark |
|--------|-----------|-------|
| 计算模式 | 磁盘迭代计算 | 内存迭代计算 |
| 速度 | 慢（大量磁盘IO） | 快（比 MR 快 10~100 倍） |
| 编程模型 | 只有 Map 和 Reduce | 丰富的算子 |
| 易用性 | API 较底层 | API 简洁优雅 |
| 生态 | 较单一 | 生态完善 |

**为什么出现 Spark？**
- 每次 Job 结果写入磁盘，大量 IO 开销
- 只能表达 Map 和 Reduce，表达能力有限
- 不适合迭代式计算和交互式查询

### 1.2 Spark 生态圈及其组件

| 组件 | 应用场景 |
|------|----------|
| Spark Core | 核心引擎 |
| Spark SQL | 结构化数据，SQL 查询、表形式分析 |
| Spark Streaming | 流式计算、实时处理 |
| MLlib | 机器学习场景 |
| GraphX | 图计算 |

> 考核套路：给场景选组件。结构化数据 → Spark SQL；流式计算 → Streaming；机器学习 → MLlib

---

## 二、第2~3章 — Scala 编程基础

### 2.1 Scala 基本定义
- 可伸缩语言，集成函数式 + 面向对象
- 运行在 JVM 上，兼容 Java

### 2.2 变量与常量
- `var` 变量，`val` 常量

### 2.3 运算符
- 与 Java 一致

### 2.4 流程控制
- for 循环重点：`for (i <- 集合) { 循环体 }`

### 2.5 方法与函数（重点）
- 方法：`def 方法名(参数列表): 返回值类型 = { 方法体 }`
- 函数：`val 函数名 = (参数: 参数类型) => { 函数体 }`

### 2.6 复杂数据类型
- 数组：定长 Array / 不定长 ArrayBuffer，取值：`数组名(下标)`
- List（不同类型）、Set（无重复）、Map（键值对）、Array（相同类型）
- **Tuple（重点）**：最大长度 22，`_索引`取值索引从 1 开始

### 2.7 类与对象
- `class` 多例，`object` 单例

### 2.8 面向对象关键字
- 继承 `extends`，重写 `override`，抽象类 `abstract`，特征 `trait`

---

## 三、第4章 — Spark 集群环境

### 3.1 Spark 基本架构
- Master 主节点、Worker 从节点、Driver、Executor

### 3.2 工作模式
- Local / Standalone / YARN（生产常用）/ Mesos / K8s

### 3.3 SparkConf 与 SparkContext（重点）
```
val conf = new SparkConf().setAppName("AppName").setMaster("local[*]")
val sc = new SparkContext(conf)
```

### 3.4 随堂练习
- 统计省份出现次数案例

---

## 四、第5章 — Spark RDD（核心考点）

### 4.1 RDD 概念
- 弹性分布式数据集，不可变、可分区、可并行计算

### 4.2 RDD 五大属性
1. 分区列表
2. 每个算子作用在每个分区上
3. 依赖关系（宽依赖/窄依赖）
4. 分区器（可选，针对 Key-Value）
5. 优先位置列表

### 4.3 RDD 应用五大步（编程题套路）
1. 创建 SparkConf
2. 创建 SparkContext 读取文件
3. 数据集处理（唯一不固定部分）
4. 数据存储
5. sc.stop()

### 4.4 算子分类
- Transformation（惰性求值）：map、flatMap、reduceByKey、filter、sortBy、groupByKey
- Action（触发计算）：count、saveAsTextFile、reduce、collect、first、take、foreach

### 4.5 RDD 依赖
- 窄依赖：一对一；宽依赖：一对多，产生 Shuffle
- Stage 划分：遇到宽依赖划分新 Stage

### 4.6 RDD 分区（重点：自定义分区）

---

## 五、第7章 — Spark SQL

### 5.1 应用步骤
1. 创建 SparkSession
2. 获取 DataFrame
3. 统计分析
4. 数据存储（数据库）
5. spark.stop()

### 5.2 两种分析方式
- 直接 API：select、groupBy、filter
- 视图+SQL：createOrReplaceTempView + spark.sql

### 5.3 数据加载与存储
- read.format.load / write.format.save
- 支持 text/json/csv/parquet/jdbc
- JDBC 数据库存储重点

---

## 六、编程题模板

**RDD**：
```
val conf = new SparkConf().setAppName("xxx").setMaster("local[*]")
val sc = new SparkContext(conf)
val rdd = sc.textFile("路径")
val result = rdd.flatMap(_.split(" ")).map((_,1)).reduceByKey(_+_)
result.saveAsTextFile("输出路径")
sc.stop()
```

**Spark SQL**：
```
val spark = SparkSession.builder().appName("xxx").master("local[*]").getOrCreate()
val df = spark.read.format("json").load("路径")
df.createOrReplaceTempView("t")
spark.sql("SELECT ...").show()
df.write.format("jdbc").save()
spark.stop()
```

## 七、复习优先级
1. RDD 五大属性、算子分类、宽窄依赖
2. RDD / Spark SQL 编程模板
3. Spark 生态组件及应用场景
4. Scala 方法/函数、Tuple
5. Spark 架构与运行模式
6. DataFrame 两种分析方式
7. var/val、class/object、for 循环
8. 集群安装部署（了解即可）
