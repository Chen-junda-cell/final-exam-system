# 🐘 Hadoop — 题库（85题）

> 自动解析自 questions.md | 含答案和解析 | 已修复缺失题目

---

## 单选题（12题）

### 1. 启动hbase前，需要保证hdfs的服务进程必须是正常启动的状态，可以通过jps查看namenode和______这两个进程是否运行。

> ✅ **答案：** datanode
> 📝 **解析：** * HDFS的核心守护进程包括NameNode（主）和DataNode（从），启动HBase前需确认两者均已启动。

---

### 2. 第2题：在yarn-site.xml文件中，用于指定YARN资源管理器主机名的属性是？

> ✅ **答案：** B yarn.resourcemanager.hostname
> 📝 **解析：** * 该属性明确用于设置 YARN ResourceManager 所在的主机名。

---

### 3. 第3题：计算每天的营业情况适合采用哪种数据处理方式？

> ✅ **答案：** C 离线批处理
> 📝 **解析：** * “每天”意味着数据是周期性产生的，不需要毫秒级的实时响应。离线批处理（如 MapReduce 或 Spark Batch）非常适合处理这种历史数据汇总、报表生成等任务。

---

### 4. 第5题：HDFS的设计目标不包括以下哪项？

> ✅ **答案：** A 适合处理小文件
> 📝 **解析：** * HDFS 的设计目标是高吞吐量、高容错性和低成本硬件支持，但它不适合存储大量小文件，因为 NameNode 的内存会成为瓶颈，且寻址开销大。

---

### 5. 第9题：若执行hadoop version命令可能需要修改哪个配置文件中的JAVA_HOME路径？

> ✅ **答案：** A hadoop-env.sh
> 📝 **解析：** * `hadoop-env.sh`是 Hadoop 的环境变量配置文件，其中专门设置了 `JAVA_HOME`路径，Hadoop 启动脚本会读取这个文件来定位 Java。 以下是针对图片中第10题至第18题的正确答案及详细解析：

---

### 6. 以下关于 * Hadoop官方提供的脚本中，`start-dfs.sh`专门用于启动HDFS相关进程（NameNode, DataNode, SecondaryNameN 的描述，正确的是？

> ✅ **答案：** A start-dfs.sh
> 📝 **解析：** * Hadoop官方提供的脚本中，`start-dfs.sh`专门用于启动HDFS相关进程（NameNode, DataNode, SecondaryNameNode等）。`start-yarn.sh`用于启动YARN。

---

### 7. 第18题：以下哪个场景不适合使用Hadoop？

> ✅ **答案：** B 实时导航系统
> 📝 **解析：** * Hadoop及其生态系统（HDFS, MapReduce, Hive等）主要面向离线批处理和大数据分析。实时导航系统需要处理毫秒级的数据流和计算（如GPS定位、路况实时更新），这属于实时流计算的范畴，更适合使用Spark Streaming, Flink, Storm等实时计算框架，而非传统的Hadoop批处理。 以下是针对您上传的第19题至第27题的正确答案及详细解析：

---

### 8. 第20题：MapReduce中的Map阶段主要完成什么任务？

> ✅ **答案：** B 数据分片与转换
> 📝 **解析：** * Map阶段主要负责读取输入数据，将其拆分成键值对（Key-Value），并进行初步的转换和处理（如过滤、映射），为后续的Shuffle和Reduce阶段做准备。

---

### 9. 第22题：解压Hadoop安装包后，若需删除安装包文件，应使用哪个命令？

> ✅ **答案：** A rm -rf \*
> 📝 **解析：** * `rm -rf `：`-r`表示递归删除（用于目录），`-f`表示强制删除（不提示确认），``表示当前目录下所有文件。这是删除解压后残留安装包及其目录的最彻底命令。 `rm -r `缺少 `-f`可能会在遇到写保护文件时询问。 `rm -f `和 `rm `无法删除非空目录。

---

### 10. 第24题：YARN中负责资源分配的组件是？

> ✅ **答案：** A ResourceManager
> 📝 **解析：** * 在YARN架构中，ResourceManager (RM) 是全局的资源管理器，负责整个集群资源的统一管理和分配。NodeManager是每个节点的代理，ApplicationMaster是应用程序的管理者，Container是资源抽象。

---

### 11. 以下关于 * YARN（Yet Another Resource Negotiator）是Hadoop 2.0引入的资源管理系统，它将资源管理和作业调度/监控的功能从Ma 的描述，正确的是？

> ✅ **答案：** D 资源管理与作业调度
> 📝 **解析：** * YARN（Yet Another Resource Negotiator）是Hadoop 2.0引入的资源管理系统，它将资源管理和作业调度/监控的功能从MapReduce中分离出来，负责集群计算资源的统一管理和调度各种计算框架（不仅仅是MapReduce）。 以下是针对您上传的图片中第28题至第36题的正确答案及详细解析：

---

### 12. 第29题：若要将本地文件复制到目标文件，应使用以下哪个命令?

> ✅ **答案：** B hdfs dfs -put -f localfile hdfsfile
> 📝 **解析：** * 题目要求“复制”且未提及删除源文件。`-put`命令用于复制。选项B中的 `-f`(force) 参数表示如果目标文件已存在则覆盖，符合“复制到目标文件”的场景。A选项会删除本地源文件，C选项是追加内容，D选项语法正确但通常不如 `-put`通用。

---

## 多选题（27题）

### 1. HDFS的主要特点有哪些？

- **A.** 适用于小文件存储
- **B.** 支持并发写入
- **C.** 高容错性
- **D.** 适合一次写入多次读取
- **E.** 通透性，用户感觉像访问本地磁盘

> ✅ **答案：** 见解析

---

### 2. HDFS的架构中，以下哪些组件属于其核心组成部分？

- **A.** Client
- **B.** NameNode
- **C.** DataNode
- **D.** SecondaryNameNode
- **E.** ZooKeeper

> ✅ **答案：** 见解析

---

### 3. 关于HDFS的副本策略，以下说法正确的是？

- **A.** 副本数默认为3
- **B.** 副本可以放在同一个节点上
- **C.** 副本放置策略考虑了机架感知
- **D.** 副本数可以动态调整
- **E.** 副本数越多越好

> ✅ **答案：** 见解析

---

### 4. HDFS的心跳机制涉及哪些内容？

- **A.** DataNode定期向NameNode发送心跳
- **B.** 心跳包含DataNode的资源状态
- **C.** 心跳包含DataNode存储的块信息
- **D.** 心跳频率默认为10秒
- **E.** NameNode根据心跳判断DataNode是否宕机

> ✅ **答案：** 见解析

---

### 5. 下列关于HDFS的说法中，错误的是？

- **A.** HDFS适合存储大量小文件
- **B.** HDFS支持并发写入
- **C.** HDFS具有高吞吐量
- **D.** HDFS放宽了部分POSIX要求
- **E.** HDFS不适合流式数据访问

> ✅ **答案：** 见解析

---

### 6. 下列哪些命令属于HDFS中用于操作HDFS内部文件的命令？

- **A.** hdfs dfs -mv
- **B.** hdfs dfs -cp
- **C.** hdfs dfs -rm
- **D.** hdfs dfs -put
- **E.** hdfs dfs -get

> ✅ **答案：** 见解析

---

### 7. 下列哪些命令可以用于将本地文件上传到HDFS？

- **A.** hdfs dfs -put
- **B.** hdfs dfs -copyFromLocal
- **C.** hdfs dfs -moveFromLocal
- **D.** hdfs dfs -appendToFile
- **E.** hdfs dfs -get

> ✅ **答案：** 见解析

---

### 8. 下列哪些命令可以用于从HDFS下载文件到本地？

- **A.** hdfs dfs -get
- **B.** hdfs dfs -copyToLocal
- **C.** hdfs dfs -getmerge
- **D.** hdfs dfs -put
- **E.** hdfs dfs -cat

> ✅ **答案：** 见解析

---

### 9. 下列哪些命令可以用于删除HDFS中的文件或目录？

- **A.** hdfs dfs -rm
- **B.** hdfs dfs -rmdir
- **C.** hdfs dfs -delete
- **D.** hdfs dfs -remove
- **E.** hdfs dfs -rm -r

> ✅ **答案：** 见解析

---

### 10. 下列哪些命令可以用于在HDFS中进行文件的复制或移动？

- **A.** hdfs dfs -cp
- **B.** hdfs dfs -mv
- **C.** hdfs dfs -put
- **D.** hdfs dfs -get
- **E.** hdfs dfs -copyFromLocal

> ✅ **答案：** 见解析

---

### 11. HDFS的架构包含以下哪些组件？

- **A.** NameNode
- **B.** DataNode
- **C.** SecondaryNameNode
- **D.** ResourceManager

> ✅ **答案：** 见解析

---

### 12. 以下属于Hadoop核心组件的有？

- **A.** HDFS
- **B.** YARN
- **C.** MapReduce
- **D.** Spark

> ✅ **答案：** 见解析

---

### 13. YARN的主要组件包括？

- **A.** ResourceManager
- **B.** NodeManager
- **C.** ApplicationMaster
- **D.** DataNode

> ✅ **答案：** 见解析

---

### 14. MapReduce的Shuffle过程包括以下哪些步骤？

- **A.** Map输出的排序和合并
- **B.** Reduce端的数据拉取（Fetch）
- **C.** Reduce端的数据合并和排序
- **D.** Map端的数据分割（Split）

> ✅ **答案：** 见解析

---

### 15. Hadoop伪分布式安装需要配置以下哪些核心文件？

- **A.** core-site.xml
- **B.** hdfs-site.xml
- **C.** yarn-site.xml
- **D.** mapred-site.xml

> ✅ **答案：** 见解析

---

### 16. 以下关于YARN资源调度器的说法，正确的有哪些？

- **A.** FIFO调度器按照提交顺序分配资源，适用于批处理场景
- **B.** Capacity调度器支持多队列资源隔离，适用于共享集群
- **C.** Fair调度器保证所有应用获得公平的资源份额
- **D.** YARN的资源调度器只能基于内存进行资源分配

> ✅ **答案：** 见解析

---

### 17. 关于HDFS数据读取流程，正确的描述有哪些？

- **A.** 客户端向NameNode请求文件的块位置信息
- **B.** NameNode返回文件的所有数据块及其所在的DataNode列表
- **C.** 客户端直接从DataNode读取数据块，无需NameNode参与后续过程
- **D.** 客户端读取数据时，必须按数据块的顺序依次读取

> ✅ **答案：** 见解析

---

### 18. 以下哪些场景适合使用MapReduce进行处理？

- **A.** 大规模日志数据的统计分析
- **B.** 实时流数据的处理
- **C.** 分布式排序
- **D.** 简单的键值对数据汇总

> ✅ **答案：** 见解析

---

### 19. 关于HDFS高可用（HA）和联邦（Federation）的描述，正确的有哪些？

- **A.** HDFS HA通过主备NameNode机制解决单点故障问题
- **B.** HDFS联邦允许多个NameNode独立管理不同的命名空间
- **C.** HDFS HA中，Standby NameNode通过实时同步EditLog保证数据一致性
- **D.** HDFS联邦可以提高集群的存储容量，但无法提升并发访问能力

> ✅ **答案：** 见解析

---

### 20. 第4题：以下哪个命令用于将本地文件复制到HDFS，且复制后删除本地源文件？

> ✅ **答案：** B hdfs dfs -moveFromLocal
> 📝 **解析：** * `-put`/ `-copyFromLocal`：复制后保留本地文件。 `-moveFromLocal`：复制后删除本地文件。 `-get`：从 HDFS 下载到本地。

---

### 21. 以下关于 * Hadoop最初由Doug Cutting开发，后来贡献给了Apache软件基金会（Apache Software Foundation），并在Apache 的描述，正确的是？

> ✅ **答案：** C Apache
> 📝 **解析：** * Hadoop最初由Doug Cutting开发，后来贡献给了Apache软件基金会（Apache Software Foundation），并在Apache旗下孵化成为顶级项目。

---

### 22. 第16题：以下哪种Hadoop集群部署方式可用于生产环境？

> ✅ **答案：** B 完全分布式HA集群
> 📝 **解析：** * 生产环境要求高可用性（High Availability）和高可靠性。完全分布式HA（High Availability）集群通过双NameNode（Active/Standby）解决了单点故障问题，是唯一适合生产环境的选项。伪分布式和单机模式仅用于测试和学习。

---

### 23. 第17题：Hadoop 2.x版本的核心组特征以下哪项？

> ✅ **答案：** D YARN
> 📝 **解析：** * Hadoop 2.x 相对于 1.x 最大的变革就是引入了 YARN（Yet Another Resource Negotiator）作为资源管理系统，取代了原有的JobTracker/TaskTracker架构，使得Hadoop可以运行多种计算框架（如MapReduce, Spark, Flink等）。

---

### 24. 第21题：MapReduce框架的核心组成部分不包括以下哪项？

> ✅ **答案：** C YARN阶段
> 📝 **解析：** * MapReduce的核心执行流程包括：Map阶段、Shuffle阶段和Reduce阶段。YARN是Hadoop 2.x之后的资源管理系统，它负责为MapReduce作业分配资源，本身不属于MapReduce的计算阶段。

---

### 25. 第32题：以下关于Hadoop核心组件的描述正确的有？

> ✅ **答案：** A YARN负责资源管理, B HDFS负责分布式存储, C MapReduce负责分布式计算
> 📝 **解析：** * Hadoop三大核心组件即HDFS（存储）、YARN（资源管理与调度）、MapReduce（计算）。ZooKeeper是一个独立的分布式协调服务，并非Hadoop核心组件，也不负责数据可视化。

---

### 26. 第37题：创建Hadoop相关虚拟机的，以下哪些步骤是正确的？

> ✅ **答案：** A、C、D
> 📝 **解析：** * A 选择桥接模式网络适配器：正确。在虚拟机网络设置中，选择“桥接模式”可以让虚拟机像局域网内的一台独立物理机一样获取IP，便于集群节点间通信。 B 选择典型配置：错误。在安装虚拟机时，“典型配置”通常是默认向导，但对于学习Hadoop，往往需要自定义硬件（如内存、CPU、网络），因此通常选择“自定义（高级）”配置。 C 自定义硬件时确认网络适配器为NAT模式：正确。虽然A选项提到桥接，但在实际安装过程中，如果在自定义硬件步骤中确认网络适配器设置为NAT模式（或桥接），这也是正确的配置步骤之一。此处可能考察安装流程中的具体环节。 D 将虚拟磁盘存储为单个文件：正确。这有利于磁盘性能和迁移，是

---

### 27. 第40题：启动Hadoop集群需要哪三个命令？

> ✅ **答案：** A、B、C、D（注：通常选 C、D，但本题为多选且分值较高，可能包含细分命令）
> 📝 **解析：** * C start-dfs.sh：一键启动HDFS服务（NameNode, DataNode等），是启动集群的标准命令。 D start-yarn.sh：一键启动YARN服务（ResourceManager, NodeManager等），是启动集群的标准命令。 A yarn-daemon.sh start resourcemanager 和 B hadoop-daemon.sh start namenode：这两个是单独启动某个守护进程的命令，在精细维护或故障恢复时使用。 结论：如果题目问的是“启动集群”的标准操作，通常选 C 和 D。如果题目允许选择所有可用的启动命令，则 A、B、C、D 均

---

## 判断题（11题）

### 1. HDFS的副本数默认为3。

- **A.** 对
- **B.** 错

> ✅ **答案：** 见解析

---

### 2. HDFS适合存储大量小文件。

- **A.** 对
- **B.** 错

> ✅ **答案：** 见解析

---

### 3. HDFS的副本放置策略考虑了机架感知。

- **A.** 对
- **B.** 错

> ✅ **答案：** 见解析

---

### 4. HDFS支持并发写入。

- **A.** 对
- **B.** 错

> ✅ **答案：** 见解析

---

### 5. HDFS的NameNode负责存储实际的数据块。

- **A.** 对
- **B.** 错

> ✅ **答案：** 见解析

---

### 6. HDFS中使用绝对路径进行操作，不能使用相对路径。

- **A.** 对
- **B.** 错

> ✅ **答案：** 对
> 📝 **解析：** HDFS 操作要求使用绝对路径，这是其设计特性之一。

---

### 7. MapReduce默认输入的Value为读取的当前行内容( )。

- **A.** 对
- **B.** 错

> ✅ **答案：** 对

---

### 8. 在HDFS的机架感知策略中，block的不同副本保存在同一个机架的不同服务器节点中( )。

- **A.** 对
- **B.** 错

> ✅ **答案：** 错

---

### 9. 通过job.setPartitionerClass设置分区组件时，还需要通过job.setNumReduceTasks方法设置reduce任务的数量与分区数量相同( )。

- **A.** 对
- **B.** 错

> ✅ **答案：** 对

---

### 10. MapReduce中的所有Value必须实现WritableComparable接口( )。

- **A.** 对
- **B.** 错

> ✅ **答案：** 错

---

### 11. 在HDFS HA中，两个NameNode节点都处于活动状态( )

- **A.** 对
- **B.** 错

> ✅ **答案：** 错

---

## 填空题（18题）

### 1. HDFS中，一个文件的大小为[图]MB，每个数据块的大小为[图]MB，那么该文件会被分割为_____个数据块。

> ✅ **答案：** 见解析

---

### 2. HDFS中，一个文件的大小为[图]MB，另一个文件的大小为[图]MB，两个文件总共会被分割为_____个数据块。

> ✅ **答案：** 见解析

---

### 3. HDFS中用于列出目录内容的命令是 ______，该命令可以使用 ______ 选项来递归列出子目录。

> ✅ **答案：** 见解析

---

### 4. 在HDFS中，使用 ______ 命令可以创建多级目录，其中 ______ 参数用于实现递归创建。

> ✅ **答案：** 见解析

---

### 5. 将HDFS中的文件内容输出到标准输出的命令是 ______，该命令可以使用 ______ 选项忽略CRC校验。

> ✅ **答案：** 见解析

---

### 6. 将HDFS中的文件合并到本地文件的命令是 ______，其中 ______ 选项用于在每个文件末尾添加换行符。

> ✅ **答案：** 见解析

---

### 7. HDFS中用于删除文件的命令是 ______，其中 ______ 选项用于递归删除目录。

> ✅ **答案：** 见解析

---

### 8. MapReduce中创建Job对象的方法是____，自定义分区组件继承的类是____。

> ✅ **答案：** (1) Job.getInstance() (2) Partitioner

---

### 9. 自定义序列化实现的接口是____，自定义排序实现的接口是 ____。

> ✅ **答案：** (1) Writable (2) WritableCompareable

---

### 10. HDFS的主节点进程是 ____，YARN从节点进程是 ____。

> ✅ **答案：** (1) NameNode (2) NodeManager

---

### 11. Shuffle阶段的核心操作包括____、____和归并(Merge)。

> ✅ **答案：** (1) 分区(Partition) (2) 排序(Sort)

---

### 12. Hadoop HA架构中，实现NameNode状态监控和故障切换的组件是____，故障切换的触发条件包括____(写出1种即可)。

> ✅ **答案：** (1) ookeeper;Active (2) NameNode节点故障(或心跳超时、进程挂掉等，答对1种即可)

---

### 13. 第19题：在hbase-site.xml中，通常需要配置哪些属性来保证分布式运行和数据存储？

> ✅ **答案：** BCD
> 📝 **解析：** * B (hbase.rootdir)：指定HBase数据在HDFS上的存储根目录，是必须的。 C (hbase.zookeeper.quorum)：指定ZooKeeper集群节点，用于分布式协调，是必须的。 D (hbase.cluster.distributed)：设置为true表示开启完全分布式模式。 A (dfs.replication) 是HDFS的配置属性，通常在hdfs-site.xml中配置，不属于HBase核心配置。

---

### 14. 第18题：验证HBase是否成功启动的方法包含哪些？

> ✅ **答案：** BCD
> 📝 **解析：** * B：检查HDFS上是否生成了`hbase.rootdir`配置的目录。 C：通过浏览器访问Master的16010端口（或旧版60010）查看Web UI。 D：使用`jps`命令查看HMaster、HRegionServer等进程是否存在。 A错误，ZooKeeper是协调服务，不会自动关闭，HBase依赖它运行。

---

### 15. 第16题：HBase完全分布式集群启动的条件及方式包括?

> ✅ **答案：** BCD
> 📝 **解析：** * B：可以使用`start-hbase.sh`脚本一键启动整个集群。 C：ZooKeeper遵循过半机制，必须保证半数以上节点存活才能选举出Leader，集群才能工作。 D：也可以分别在各节点上使用`hbase-daemon.sh start master/regionserver`单独启动。 A错误，HBase强依赖Hadoop（HDFS/YARN），必须先启动Hadoop。

---

### 16. 第12题：Zookeeper服务主要包含哪两个角色？

> ✅ **答案：** AB
> 📝 **解析：** * ZooKeeper集群中，节点通过选举产生Leader（A），其余节点成为Follower（B）。Slave和Master通常是Hadoop或HBase中的角色概念。

---

### 17. 第30题：ZooKeeper在HBase中的作用包括？

> ✅ **答案：** 见解析
> 📝 **解析：** 解析：在HBase集群中，ZooKeeper扮演着至关重要的协调者角色。它负责监控Region Server的状态（当Region Server宕机时通知HMaster），参与维护集群的元数据（如ROOT表和META表的位置信息），并且利用ZooKeeper的分布式锁机制来完成HMaster的主节点选举。ZooKeeper本身并不负责存储HBase的实际业务数据，实际数据存储在HDFS上。 正确答案：B、C、D

---

### 18. 第8题 (3.0分) HBase中直接处理用户读写请求并与HDFS交互存储数据的组件是？

> ✅ **答案：** 见解析

---

## 简答题（17题）

### 1. Hadoop是一个什么样的框架？

> ✅ **答案：** 见解析

---

### 2. Hadoop的核心组件有哪些？简单介绍每一个组件的作用；

> ✅ **答案：** 见解析

---

### 3. 简述Hadoop生态体系，并列举此生态体系中涉及的技术

> ✅ **答案：** 见解析

---

### 4. 简单列举几个Hadoop的应用场景。

> ✅ **答案：** 见解析

---

### 5. 什么是Hadoop伪分布式模式？它与完全分布式模式有何区别？

> ✅ **答案：** 见解析

---

### 6. 修改CentOS7网络配置为静态IP时，需要编辑哪个文件？关键参数有哪些？

> ✅ **答案：** 见解析

---

### 7. Hadoop伪分布式需要创建哪些核心目录？这些目录的作用是什么？

> ✅ **答案：** 见解析

---

### 8. 启动Hadoop伪分布式集群需要按顺序执行哪些命令？

> ✅ **答案：** 见解析

---

### 9. 请简述HDFS的副本放置策略及其设计目的。

> ✅ **答案：** 见解析

---

### 10. 请简述 HDFS 中 hdfs dfs -put 命令的作用及其常用选项。

> ✅ **答案：** 见解析

---

### 11. 编写MapReduce程序实现“统计文本中单词出现次数”功能（单词以空格分隔），补充下列代码片段： （1）Mapper类：protected void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException { // 补充代码：拆分单词并输出<单词, 1>键值对 } （2）Reducer类： protected void reduce(Text key, Iterable<IntWritable> values, Context context) throws IOException, InterruptedException { // 补充代码：累加单词计数并输出<单词, 总次数> } （3）Driver类核心配置： public static void main(String[] args) throws Exception { Configuration conf = new Configuration(); Job job = Job.getInstance(conf, "WordCount"); // 补充代码：设置Driver类、Mapper类、Reducer类 job.setMapOutputKeyClass(Text.class); job.setMapOutputValueClass(IntWritable.class); job.setOutputKeyClass(Text.class); job.setOutputValueClass(IntWritable.class); FileInputFormat.setInputPaths(job, new Path(args[0])); FileOutputFormat.setOutputPath(job, new Path(args[1])); System.exit(job.waitForCompletion(true) ? 0 : 1);}

> ✅ **答案：** （1）Mapper类： protected void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {   // 1. 将Text类型的行内容转换为字符串   String line = value.toString();   // 2. 按空格拆分单词   String[] words = line.split(" ");   // 3. 遍历单词数组，输出<单词, 1>键值对   for (String word : words) {     // 过滤空字符串（避免空格导致的无效键值对）     if (!word.isEmpty()) {       context.write(new Text(word), new IntWritable(1));     }   } }  （2）Reducer类：  protected void reduce(Text key, Iterable<IntWritable> values, Context context) throws IOException, InterruptedException {   // 1. 定义计数器累加单词出现次数   int count = 0;   // 2. 遍历values集合，累加计数   for (IntWritable value : values) {     count += value.get();   }   // 3. 输出<单词, 总次数>键值对   context.write(key, new IntWritable(count)); }  （3）Driver类核心配置：  public static void main(String[] args) throws Exception {   Configuration conf = new Configuration();   Job job = Job.getInstance(conf, "WordCount");   // 补充代码：设置Driver类、Mapper类、Reducer类   job.setJarByClass(WordCountDriver.class); // 设置Driver类（需替换为实际主类名）                      job.setMapperClass(WordCountMapper.class); // 设置Mapper类（需替换为实际Mapper类名）                      job.setReducerClass(WordCountReducer.class); // 设置Reducer类（需替换为实际Reducer类名）                 ）   job.setMapOutputKeyClass(Text.class);   job.setMapOutputValueClass(IntWritable.class);   job.setOutputKeyClass(Text.class);   job.setOutputValueClass(IntWritable.class);   FileInputFormat.setInputPaths(job, new Path(args[0]));   FileOutputFormat.setOutputPath(job, new Path(args[1]));   System.exit(job.waitForCompletion(true) ? 0 : 1); }

---

### 12. 在本地的/home/stud目录中保存了student.txt文件，文件内容如下所示（只列出了部分数据），其中第1列为学号，第2列为姓名，第3列为学期编号（共4个学期），第4列为科目编号（其中E表示英语，M表示数学），第5列表示分数。20200001,Tom,1,E,8920200001,Tom,1,M,8720200001,Tom,2,E,6020200001,Tom,2,M,3520200001,Tom,3,E,8120200001,Tom,3,M,7720200001,Tom,4,E,9920200001,Tom,4,M,6720200002,Jerry,1,E,9920200002,Jerry,1,M,6020200002,Jerry,2,E,9120200002,Jerry,2,M,5620200002,Jerry,3,E,8520200002,Jerry,3,M,7320200002,Jerry,4,E,7320200002,Jerry,4,M,67请补充代码，计算每位同学在4个学期的平均英语成绩和平均数学成绩，分别将平均英语成绩和平均数学成绩输出为part-r-00000和part-r-00001两个文件。part-r-00000文件内容：20200001,Tom,E 8220200002,Jerry,E 8720200003,Jack,E 9020200004,Mary,E 66part-r-000001文件内容：20200001,Tom,M 6620200002,Jerry,M 6420200003,Jack,M 9420200004,Mary,M 85（1）通过hdfs shell在HDFS的/目录中创建scoreData/input目录，并将本地stud.txt文件上传至HDFS的/scoreData/input目录中。（2）补充Mapper类public static class MyMapper extends Mapper<LongWritable, Text, Text, IntWritable> { Text newKey = new Text(); IntWritable newValue = new IntWritable(1); @Override protected void map(LongWritable key, Text value, Context context)throws IOException, InterruptedException { }}（3） 补充Reducer类public static class MyReducer extends Reducer<Text, IntWritable, Text, IntWritable> {IntWritable iw = new IntWritable(); @Override protected void reduce(Text key, Iterable<IntWritable> value,Context context) throws IOException, InterruptedException { }}（4） 补充Partitioner类public static class Mypartitioner extendsPartitioner<Text, IntWritable> { @Overridepublic int getPartition(Text key, IntWritable value, int numPartitions) { }}（5）补充驱动类public static void main(String[] args) throws Exception { Configuration conf = new Configuration(); Job job = Job.getInstance(conf); job.setJarByClass(ScoreCount.class); job.setMapperClass(ScoreCount.MyMapper.class); job.setReducerClass(ScoreCount.MyReducer.class); job.setMapOutputKeyClass(Text.class); job.setMapOutputValueClass(IntWritable.class); job.setOutputKeyClass(Text.class); job.setOutputValueClass(IntWritable.class); String str_input = "hdfs://master:9000/scoreData/input/stud.txt"; String str_output = "hdfs://master:9000/scoreData/output/Count"; FileInputFormat.setInputPaths(job, new Path(str_input)); FileOutputFormat.setOutputPath(job, new Path(str_output)); System.out.println(job.waitForCompletion(true));}

> ✅ **答案：** （1）hdfs  dfs  -mkdir  -p  /scoreData/input          hdfs  dfs  -put  /home/stud/student.txt  /scoreData/input   （2）String[] split = value.toString().split(",");         String student_num = split[0];              String name = split[1];                  String index_subject = split[3];              newKey.set(student_num + "," + name + "," + index_subject); newValue.set(Integer.valueOf(split[4]));          context.write(newKey, newValue);             （3）int sum = 0;              int num = 0;               for (IntWritable iw : value) {          sum += iw.get();              num += 1;}double sum1 = Double.valueOf(sum);    double ave = sum1/num;          iw.set((int)ave);             context.write(key, iw);           （4） String[] split = key.toString().split(",");   String index_subject = split[2];      if ("E".equals(index_subject)) {           return 0;                  } else {     return 1;                } （5）job.setPartitonerClass(Mypartitioner.class)     job. setNumReduceTasks(2)

---

### 13. 请简述 hdfs dfs -put 和 hdfs dfs -moveFromLocal 的区别。

> ✅ **答案：** hdfs dfs -put 将本地文件复制到 HDFS，但不会删除本地源文件；而 hdfs dfs -moveFromLocal 则在复制后会删除本地源文件。
> 📝 **解析：** 两者的主要区别在于是否保留本地源文件。

---

### 14. 介绍一下MapReduce的执行流程。

> ✅ **答案：** map（1）系统将数据拆分为若干个“分片”（split），每个分片为128M,300M文件会分为3个Split，一个块对应一个map（2）将分片数据以键-值方式传递给map 进行处理（split数据以键-值方式传递给map，map处理后的数据以键-值方式传递给reduce，reduce处理完后最后键-值方式输出到part文件中）（3）map 方法对数据进行业务处理（4）将处理的数据写入到磁盘 reduce（1）通过多个复制线程去拉取不同map 节点输出的数据文件（2）对这些数据文件进行排序和合并，然后传入reduce 方法（3）reduce 方法对数据进行业务处理（4）输入数据到文件系统（HDFS） ## 多选题（共9题）

---

### 15. 请简述HDFS高可用（HA）和联邦（Federation）的主要区别及适用场景。

> ✅ **答案：** 见解析

---

### 16. 第33题：在配置Hadoop时，需要创建哪些目录？

> ✅ **答案：** A /opt/hadoop-record/log, B /opt/hadoop-record/temp, C /opt/hadoop-record/name, D /opt/hadoop-record/data
> 📝 **解析：** * 在典型的Hadoop部署中，通常会创建这些目录用于存放不同组件的运行时数据：`name`(NameNode元数据), `data`(DataNode数据块), `log`(日志), `temp`(临时文件)。

---

### 17. 第34题：以下哪些命令可用于将本地文件复制到HDFS?

> ✅ **答案：** B hdfs dfs -moveFromLocal, C hdfs dfs -put, D hdfs dfs -copyFromLocal
> 📝 **解析：** * 这三个命令都可以实现将本地文件传输到HDFS。区别在于：`put`和 `copyFromLocal`复制后保留源文件，`moveFromLocal`复制后删除源文件。`-get`命令是从HDFS下载到本地，方向相反。

---

