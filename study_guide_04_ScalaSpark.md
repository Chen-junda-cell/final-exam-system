# ⚡ Scala & Spark 零基础速成教材

> 对应课件：Spark第1~7章（含 Scala 基础 I/II） | 考试占比 9% | 建议学习：0.5天

---

## 第一部分：Scala 基础（只要学这些就能过）

### 先搞懂：Scala 是什么？

**Scala = 在 Java 基础上改进的编程语言**。语法更简洁，既能面向对象又能函数式编程。

> Spark 是用 Scala 写的，所以要学点 Scala 基础。

---

## 第2-3章：Scala 编程基础 I/II

### 1. 变量声明：var vs val（必考）

```scala
var x = 10    // var：可以重新赋值（变量）
x = 20        // ✅ 可以

val y = 10    // val：不能重新赋值（常量，类似Java的final）
y = 20        // ❌ 报错！
```

**但** val 引用的数组，数组内元素可以改：
```scala
val arr = Array(1, 2, 3)
arr(0) = 99   // ✅ 可以！改的是元素，不是引用本身
arr = Array(4, 5, 6)  // ❌ 不行！在重新赋值引用
```

---

### 2. 数组：Array vs ArrayBuffer（必考）

| 类型 | 特点 | 创建 | 增删元素 |
|------|------|------|----------|
| **Array** | **定长** | `Array(1,2,3)` | ❌ 长度不可变 |
| **ArrayBuffer** | **变长** | `ArrayBuffer(1,2,3)` | ✅ 可动态增删 |

```scala
val arr = Array(10, 20, 30)     // 定长数组，3个元素
arr(0)                           // 取第1个元素 = 10
// 数组下标从 0 开始！
// 3个元素，下标范围 0~2，最大下标=2

import scala.collection.mutable.ArrayBuffer
val buf = ArrayBuffer(1, 2, 3)  // 变长数组
buf += 4                          // 追加：ArrayBuffer(1,2,3,4)
buf -= 2                          // 删除：ArrayBuffer(1,3,4)
```

> **什么时候用谁？** 频繁增删用 ArrayBuffer，否则用 Array。

---

### 3. 元组 Tuple（必考）

**元组 = 可以把不同类型的数据打包在一起**。

```scala
val t = ("张三", 18, true)   // 同时存 String、Int、Boolean

// 访问元素（下标从 1 开始！不是 0！）
t._1   // "张三"（第1个元素）
t._2   // 18（第2个元素）
t._3   // true（第3个元素）
```

| 考点 | 值 |
|------|-----|
| 最多几个元素 | **22** 个 |
| 下标从几开始 | **1**（不是 0！） |
| 访问语法 | `t._1` `t._2` |
| ❌ 错误写法 | `t(0)` `t[0]` `t(1)` |
| 元素类型 | 每个位置可以不同 |
| 是否可变 | 创建后不可修改 |

---

### 4. 集合：List / Set / Map（必考）

```scala
// List — 默认不可变，有序可重复
val list = List(1, 2, 3, 2)     // List(1, 2, 3, 2)

// Set — 无序，不可重复（去重）
val set = Set(1, 2, 3, 2)       // Set(1, 2, 3)  ← 2只留一个

// Map — 键值对
val map = Map("name" -> "张三", "age" -> "18")
map("name")                       // "张三"
```

| 集合 | 特点 |
|------|------|
| List | 有序可重复，默认不可变 |
| Set | 无序不可重复 |
| Map | 键值对 key-value |

> **三大核心集合体系 = List + Set + Map**（多选必考）

---

### 5. 方法定义

```scala
def 方法名(参数名: 类型): 返回类型 = {
    // 方法体
}

// 例子
def add(a: Int, b: Int): Int = {
    a + b   // 最后一行自动返回
}

def greet(name: String): Unit = {  // Unit = void（无返回值）
    println(s"Hello, $name")
}
```

| 注意点 | 说明 |
|--------|------|
| 定义关键字 | `def` |
| 返回值写在哪 | 参数列表 **后面**（`: Int`） |
| 不需要 return | 最后一行自动返回 |

---

### 6. 可变 vs 不可变集合

| 类型 | 例子 | 说明 |
|------|------|------|
| 不可变集合 | `List`, `Set`, `Map`（默认） | 创建后内容不能改 |
| 可变集合 | `ArrayBuffer`, `ListBuffer`, `mutable.Set`, `mutable.Map` | 可增删改 |

---

## 第二部分：Spark

## 第1章：Spark 简介 — Spark 是什么？

**Spark = 比 Hadoop MapReduce 更快的大数据计算引擎**。

| 对比 | MapReduce | Spark |
|------|-----------|-------|
| 速度 | 慢（频繁读写磁盘） | **快（基于内存计算）** ← 最大优势 |
| 编程难度 | 复杂 | 简洁 |
| 支持场景 | 仅离线批处理 | 批处理+流处理+SQL+机器学习 |

> ⚠️ 考试重点：Spark 最大优势 = **基于内存计算**

---

## 第4章：Spark 环境部署

### 四种运行模式

| 模式 | 说明 |
|------|------|
| **Local** | 本地模式（自己电脑上跑，不分发到集群） |
| **Standalone** | Spark 自带的集群模式 |
| **YARN** | 跑在 Hadoop YARN 上（复用Hadoop集群） |
| **Mesos** | 跑在 Mesos 集群管理器上 |

---

## 第5章：Spark RDD（超级重点！）

### RDD 是什么？

**RDD = Resilient Distributed Dataset（弹性分布式数据集）**

> 通俗理解：RDD 就是一个**分布在多台机器上的、不可变的、能自动恢复的数据集合**。

### RDD 五大特性

1. **可分区的** — 数据拆成多个分区存在不同机器上
2. **可并行计算** — 每个分区可以同时处理
3. **容错（血缘关系）** — 丢了能从"族谱"重新算出来
4. **不可变** — 创建后内容不能直接修改（要改只能生成新RDD）
5. **可持久化** — 可以把中间结果缓存到内存/磁盘

> ❌ 不属于的特性：「可直接修改数据」

---

### 转换操作 vs 行动操作（必考！）

| 类型 | 特征 | 举例 |
|------|------|------|
| **转换 (Transformation)** | **惰性求值**，不立即执行 | `map` `filter` `flatMap` `groupBy` |
| **行动 (Action)** | **触发计算**，立即执行 | `count` `collect` `reduce` `first` |

**惰性求值**是什么意思？
> 你写 `map`、`filter` 这些转换时，Spark 不马上算，只是"记住"你要做什么。只有调用 `count`、`collect` 这些行动操作时，Spark 才真正开始计算。

```scala
val rdd = sc.textFile("data.txt")     // 读文件
val words = rdd.flatMap(_.split(" "))  // 转换：记下了，但还没算
val result = words.count()             // 行动：现在才开始算！
```

---

## 第6章：Spark SQL

用 SQL 语句查询 Spark 数据。不是考试重点。

## 第7章：Spark Streaming

处理实时流数据（比如实时日志分析）。不是考试重点。

---

## 考试速记卡

```
=== Scala ===
✅ val=不可变引用  var=可重新赋值
✅ Array=定长  ArrayBuffer=变长可增删
✅ 数组下标从0开始！
✅ 元组下标从1开始！ 访问用._1 ._2
✅ 元组最多22个元素
✅ List有序可重复  Set无序不重复  Map键值对
✅ 三大集合体系：List, Set, Map
✅ def定义方法  返回值类型在参数后

=== Spark ===
✅ Spark优势=基于内存计算
✅ 核心数据抽象=RDD
✅ RDD五大特性：分区/并行/容错/不可变/可持久化
✅ 转换(map/filter/flatMap)=惰性求值  行动(count/collect)=触发计算
✅ 四种模式：Local, Standalone, YARN, Mesos
```
