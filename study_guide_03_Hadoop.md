# 🐘 Hadoop 零基础速成教材

> 对应课件：第1讲~第9讲 | 考试占比 27% | 建议学习：1天

---

## 先搞懂：Hadoop 是什么？

**问题**：如果有一个超大文件（比如 1TB），一台电脑存不下也处理不了，怎么办？

**答案**：用多台普通电脑组成集群，一起存、一起算。Hadoop 就是做这个的。

```
一句话：Hadoop = 把大任务拆成小任务，分给多台电脑并行处理
```

---

## 第1讲：Hadoop 介绍

### Hadoop 的三大核心组件

| 组件 | 负责 | 比喻 |
|------|------|------|
| **HDFS** | 存储 | 分布式硬盘（文件拆开存多台机器） |
| **YARN** | 资源调度 | 工头（分配CPU、内存给任务） |
| **MapReduce** | 计算 | 工人（分头处理数据、汇总结果） |

### 大数据的特点（4V）

| V | 全称 | 含义 |
|---|------|------|
| Volume | 大量 | 数据量巨大（TB、PB级） |
| Velocity | 高速 | 数据产生快、处理快 |
| Variety | 多样 | 结构化+非结构化（文字、图片、视频） |
| Value | 价值密度低 | 大量数据中只有少量有价值信息 |

> ⚠️ 考试陷阱：价值密度**低**不是高！大海捞针的感觉。

---

## 第2讲：安装 Hadoop

### SSH 免密登录

集群里多台机器之间要互相通信，每次都输密码太麻烦 → 配 SSH 免密。

### 核心配置文件

| 文件 | 用途 |
|------|------|
| `hadoop-env.sh` | 配 JAVA_HOME |
| `core-site.xml` | 配 HDFS 地址 |
| `hdfs-site.xml` | 配副本数等 HDFS 参数 |
| `yarn-site.xml` | 配 YARN 参数 |
| `mapred-site.xml` | 配 MapReduce 参数 |

### 启动集群

```bash
start-dfs.sh    # 启动 HDFS
start-yarn.sh   # 启动 YARN
# 或一键启动
start-all.sh
```

---

## 第3讲：分布式文件系统 HDFS

### HDFS 是什么？

**HDFS = Hadoop Distributed File System**，把一个大文件切成小块（Block），分散存到多台机器上。

### 核心角色

```
NameNode（大总管）
    │
    ├── 存元数据（哪个文件、切成几块、每块在哪）
    ├── 不存实际数据
    └── 丢了=整个系统崩溃（所以有 HA）
    
DataNode（小兵）× N个
    │
    └── 存实际数据块（Block）
    
SecondaryNameNode（秘书）
    │
    └── 定期帮 NameNode 整理日志（不是热备！）
```

### Block（数据块）

| 参数 | 值 |
|------|-----|
| 默认大小 | **128MB**（2.x版本） |
| 默认副本数 | **3** |
| 一个500MB文件 | 分成 **4** 个块（128×3 + 116×1） |

### 副本放置策略

```
第1个副本：存在客户端所在的节点（谁上传存哪）
第2个副本：存在不同的机架上（跨机架安全）
第3个副本：存在同机架的不同节点上
```

> 这叫**机架感知**（Rack Awareness），防止整个机架坏了数据全丢。

### HDFS 不适合存小文件！（简答高频）

**为什么？**
1. 每个文件一条元数据，小文件多了 NameNode 内存爆掉
2. 每个文件至少占一个 Block，存小文件浪费空间
3. MapReduce 一个文件一个 Map 任务，小文件多任务开销比计算还大

**怎么解决？**
- 把小文件合并成大文件再上传
- 用 SequenceFile 打包小文件
- 用 HBase 存小文件

---

## 第4讲：HDFS Java API — 命令行操作

### 常用命令（必考！）

```bash
# 创建目录（-p 递归创建）
hdfs dfs -mkdir -p /user/data/input

# 上传文件
hdfs dfs -put local.txt /user/data/

# 下载文件
hdfs dfs -get /user/data/file.txt ./

# 列出文件（-R 递归）
hdfs dfs -ls -R /user/

# 查看文件内容
hdfs dfs -cat /user/data/file.txt

# 删除（-r 递归）
hdfs dfs -rm -r /user/data/

# 合并下载（多个文件合并成一个本地文件）
hdfs dfs -getmerge /user/data/ ./merged.txt

# 移动上传（上传后删本地）
hdfs dfs -moveFromLocal local.txt /user/data/

# 格式化 NameNode（第一次用之前）
hdfs namenode -format
```

---

## 第5-9讲：MapReduce

### MapReduce 是什么？

**分而治之**的思想：

```
Map（映射）：  把大任务拆成小任务（"分"）
Reduce（归约）：把小结果汇总成大结果（"合"）

比喻：数一万张扑克牌
Map阶段：分给10个人，每人数1000张 → 每人报一个数
Reduce阶段：把10个人报的数加起来
```

### 执行流程（必考简答）

```
Input → Split → Map → Shuffle → Reduce → Output
```

| 阶段 | 做什么 | 关键点 |
|------|--------|--------|
| **Input** | 读入原始数据 | HDFS 上的文件 |
| **Split** | 把文件切成片 | 一个 Split = 一个 Map 任务，默认=Block大小 |
| **Map** | 逐行处理 | 输入 key=偏移量(LongWritable), value=行内容(Text) |
| **Shuffle** | 排序、分组、传输 | **最关键的环节！** 把 Map 的结果按 key 分组送给 Reduce |
| **Reduce** | 汇总计算 | 默认 Reduce 数量=1 |
| **Output** | 写结果 | 写回 HDFS |

### WordCount 示例（经典入门）

```
输入："hello world hello hadoop"
Map输出：  hello→1, world→1, hello→1, hadoop→1
Shuffle：  hadoop→[1], hello→[1,1], world→[1]
Reduce：   hadoop→1, hello→2, world→1
```

### MapReduce 容错

- Map 任务失败了 → 换一台机器重跑
- Reduce 任务失败了 → 换一台机器重跑
- 如果机器整个挂了 → YARN 在别的机器上重新调度

---

## YARN 架构（第6、7讲会涉及）

### YARN 是什么？

**YARN = Yet Another Resource Negotiator**（又一个资源协调器），负责管理和调度集群的计算资源。

### 核心角色

```
ResourceManager（RM — 大老板）
    │
    ├── 管理整个集群的资源（CPU、内存）
    ├── 不直接执行任务
    └── 有一个 Scheduler（调度器）分配资源
    
NodeManager（NM — 每台机器的管理员）× N个
    │
    ├── 监控本机资源
    └── 向 RM 汇报心跳
    
ApplicationMaster（AM — 项目经理）
    │
    ├── 为一个应用向 RM 申请资源
    └── 协调该应用的 Map/Reduce 任务
    
Container（容器）
    │
    └── 封装了一定量的 CPU + Memory，任务在 Container 里跑
```

### YARN 工作流程

```
1. Client 提交应用 → RM
2. RM 分配一个 Container 启动 AM
3. AM 向 RM 申请更多资源
4. RM 以 Container 形式分配资源
5. AM 在 Container 里启动 Map/Reduce 任务
6. 任务完成 → 释放资源
```

---

## HDFS 高可用（HA）和联邦（Federation）

### HA（High Availability）

普通 HDFS 只有 1 个 NameNode，它挂了整个集群就瘫了。

**HA = 搞两个 NameNode**：
- 一个 Active（干活）
- 一个 Standby（备胎，随时准备接手）
- ZooKeeper 负责监控，Active 挂了自动切到 Standby

### Federation（联邦）

单 NameNode 内存有限，元数据太多扛不住。

**Federation = 搞多个 NameNode**：
- 每个 NameNode 管一部分目录
- 比如 NameNode-A 管 /user，NameNode-B 管 /data

---

## 考试速记卡

```
✅ NameNode=元数据  DataNode=数据块  SecondaryNameNode=合并日志
✅ Block默认128MB  副本默认3  500MB→4块
✅ hdfs dfs -put上传 -get下载 -ls -R递归 -cat查看 -rm -r删除 -mkdir -p建目录 -getmerge合并下载
✅ YARN=RM(总调度)+NM(节点管理)+AM(应用协调)+Container(资源容器)
✅ MapReduce流程：Split→Map→Shuffle(关键)→Reduce
✅ 不适合小文件：元数据压力大→合并/SequenceFile/HBase
✅ HA=双NameNode主备  Federation=多NameNode分管
✅ 机架感知：副本跨机架放
```
