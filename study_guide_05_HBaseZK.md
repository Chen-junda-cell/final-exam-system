# 🗄️ HBase & ZooKeeper 零基础速成教材

> 对应：HBase/ZK概念 + 大数据综合 | 考试占比 7% | 建议学习：0.5天

---

## 先搞懂：HBase 和 ZooKeeper 是什么？

**问题**：HDFS 存大文件很厉害，但如果要对数据进行**实时随机读写**（像数据库那样随时查一条记录），HDFS 就很慢。

**答案**：HBase — 跑在 HDFS 之上的**分布式数据库**，支持实时读写。

**ZooKeeper** 则是"动物园管理员"，负责协调分布式系统中的各种服务。

---

## 第一部分：HBase 分布式数据库

### HBase 是什么？

**HBase = Hadoop Database**，是一个：
- **列式存储**的数据库（按列族组织数据，不是按行）
- 跑在 HDFS 之上（底层数据存 HDFS）
- 适合**海量数据**的实时读写（PB 级别）
- **稀疏**的（空列不占存储空间）

---

### HBase 架构（必考）

```
ZooKeeper（选举协调）
    │
HMaster（主节点）
    │
    ├── 管理 Region 的分配
    ├── 负载均衡
    ├── 监控 RegionServer 状态
    └── 处理 DDL（建表、删表等）
    
RegionServer × N（从节点）
    │
    ├── 处理客户端读写请求
    ├── 管理多个 Region（表的水平切片）
    └── 数据最终写入 HDFS
```

| 角色 | 职责 | 比喻 |
|------|------|------|
| **HMaster** | Region分配、负载均衡、状态监控 | 大老板，分配工作 |
| **RegionServer** | 处理读写请求 | 员工，真正干活 |
| **ZooKeeper** | HMaster选举、元数据存储 | 人事部，协调谁当老板 |
| **Client** | 发请求 | 客户 |

> HMaster 挂了 ZooKeeper 会重新选一个，RegionServer 挂了 HMaster 会把它的 Region 分给别的。

---

### HBase 数据模型（必考）

```
表 (Table)
  └── 行 (Row) — 由 RowKey 唯一标识，按 RowKey 字典序排序
        └── 列族 (Column Family) — 创建表时定义
              └── 列限定符 (Column Qualifier) — 列族下的具体列
                    └── 单元格 (Cell) — 最小存储单元
                          └── 由 {RowKey, Column Family, Qualifier, Timestamp} 唯一确定
```

| 概念 | 说明 |
|------|------|
| **RowKey** | 行键，数据按 RowKey **字典序**排序（设计 RowKey 很重要！） |
| **Column Family** | 列族，建表时定义，至少一个 |
| **Timestamp** | 时间戳，标识版本（HBase 自动维护，支持多版本） |
| **Cell** | 单元格 = RowKey + CF + Qualifier + Timestamp |
| **NameSpace** | 命名空间，默认 `default` |

---

### HBase 特点（多选常考）

| 特点 | 说明 |
|------|------|
| **列式存储** | 按列族存，同列族数据在一起 |
| **稀疏性** | 空列不占空间（不像关系数据库每列都要占位） |
| **易扩展** | 加机器就能扩容 |
| **海量存储** | 适合 PB 级别数据 |
| **高并发读写** | 支持大量用户同时读写 |

---

### HBase 安装与配置

```bash
# 关键配置项
hbase.cluster.distributed=true       # 分布式模式
HBASE_MANAGES_ZK=false              # 使用外部 ZooKeeper（不自己管理）

# 环境变量
/etc/profile                         # 配置环境变量的文件
source /etc/profile                  # 使配置生效

# HBase 底层
依赖于 HDFS（存储数据）+ ZooKeeper（协调）
```

| 配置项 | 说明 |
|--------|------|
| 默认安装模式 | 单机模式（独立模式） |
| 分布式参数 | `hbase.cluster.distributed=true` |
| 是否自己管 ZK | `HBASE_MANAGES_ZK=false`使用外部ZK |
| Master Web端口 | **16010**（1.0版本后） |
| Apache顶级项目 | 2010年 |

---

### HBase 常用操作（了解）

```bash
start-hbase.sh          # 启动 HBase
hbase shell             # 进入 HBase Shell

# 在 Shell 中
create 'student', 'info', 'score'    # 建表，2个列族
put 'student', '001', 'info:name', '张三'   # 插入数据
get 'student', '001'                 # 查询某行
scan 'student'                       # 扫描全表
```

---

## 第二部分：ZooKeeper 分布式协调服务

### ZooKeeper 是什么？

**ZooKeeper（动物园管理员）** = 分布式系统的"协调中心"。

分布式系统有很多台机器，谁当主、谁挂了、配置变了...总要有个"仲裁者"来协调。ZooKeeper 就干这个。

**典型用途**：
- HDFS HA 中的 NameNode 故障切换（监控主NameNode是否活着）
- HBase 中 HMaster 的选举（选谁当主节点）
- 分布式锁
- 配置管理

---

### ZooKeeper 核心机制（必考）

#### 1. ZNode（数据节点）

ZooKeeper 的数据存在类似文件系统的树形结构中，每个节点叫 ZNode。

| 特性 | 值 |
|------|-----|
| 每个 ZNode 最大数据量 | **1MB** |
| 节点类型 | 持久 / 临时 / 持久顺序 / 临时顺序 |

- **持久节点**：创建后一直存在（除非手动删除）
- **临时节点**：创建它的客户端断开连接后自动删除（用于故障检测）

#### 2. 过半机制（选举）

ZooKeeper 集群通常是 **2n+1** 台（奇数台）。

> 比如 3 台集群，最多允许 1 台挂掉（3 = 2×1+1）。
> 选举 Leader 需要**过半同意**。

| 集群大小 | 允许失效数 |
|----------|-----------|
| 3 台 | 1 台 |
| 5 台 | 2 台 |
| 7 台 | 3 台 |

#### 3. 相关文件和命令

```bash
# 每个 ZooKeeper 节点的唯一标识
# 存在 dataDir 下的 myid 文件中（内容是数字，比如 1, 2, 3）

# 客户端命令
zkCli.sh               # 进入 ZK 客户端
ls /                   # 查看根下子节点
create /test "data"    # 创建节点
get /test              # 获取节点数据
delete /test           # 删除节点
quit                   # 退出客户端

# 查看状态
zkServer.sh status     # 查看 ZooKeeper 节点状态（Leader/Follower）
```

---

## 第三部分：大数据概念综合

### 4V 特点

| V | 含义 | 考试陷阱 |
|---|------|----------|
| Volume | 体量大 | TB → PB → ZB |
| Velocity | 速度快 | 实时产生、实时处理 |
| Variety | 多样性 | 文字、图片、视频、日志 |
| Value | **价值密度低** | 不是高！不是高！ |

### Hadoop 生态圈

```
Hadoop 生态：
  HDFS（存储）  YARN（资源）  MapReduce（计算）
  HBase（数据库）  Hive（数据仓库）  Spark（计算引擎）
  ZooKeeper（协调）  Flume（日志采集）  Kafka（消息队列）
```

> ❌ 不属于 Hadoop 生态的：**Spring**、**Java**（它们是一般Java开发框架，不是大数据组件）

---

## 考试速记卡

```
=== HBase ===
✅ HMaster=Region分配+监控  RegionServer=读写数据
✅ 底层存HDFS  依赖ZK选举HMaster
✅ RowKey字典序  Column Family列族  Timestamp版本  Cell=最小单元
✅ 列式存储  稀疏性(空列不占空间)  易扩展  PB级 高并发
✅ 单机模式=默认安装  分布式=hbase.cluster.distributed=true
✅ HBASE_MANAGES_ZK=false用外部ZK
✅ Master Web端口=16010

=== ZooKeeper ===
✅ 集群=2n+1台(奇数)  允许n台失效  过半机制选Leader
✅ ZNode最大1MB  持久/临时/持久顺序/临时顺序
✅ myid文件存节点ID  zkServer.sh status查看状态
✅ ls查看子节点  quit退出
✅ 用途：HDFS HA故障切换、HBase HMaster选举

=== 大数据概念 ===
✅ 4V = Volume大量 + Velocity高速 + Variety多样 + Value价值密度低
✅ Hadoop生态不含Spring
```
