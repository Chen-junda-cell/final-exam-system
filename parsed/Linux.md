# 🐧 Linux — 题库（216题）

> 自动解析自 questions.md | 含答案和解析 | 已修复缺失题目

---

## 单选题（110题）

### 1. HDFS中，一个文件默认情况下被分割成若干个数据块(block)，每个块的大小是多少？

- **A.** 64MB
- **B.** 128MB
- **C.** 256MB
- **D.** 512MB

> ✅ **答案：** 见解析

---

### 2. HDFS的NameNode主要负责什么？

- **A.** 存储实际的数据块
- **B.** 管理文件系统命名空间和元数据
- **C.** 执行数据块的读写操作
- **D.** 负责数据块的备份和恢复

> ✅ **答案：** 见解析

---

### 3. HDFS中，一个500MB的文件会被分割成多少个块？

- **A.** 3
- **B.** 4
- **C.** 5
- **D.** 6

> ✅ **答案：** 见解析

---

### 4. HDFS的副本数由哪个参数控制？

- **A.** dfs.block.size
- **B.** dfs.replication
- **C.** dfs.namenode.replication
- **D.** dfs.datanode.replication

> ✅ **答案：** 见解析

---

### 5. HDFS的副本放置策略中，第一个副本通常放置在哪里？

- **A.** 任意节点
- **B.** 与第二个副本同一机架的节点
- **C.** 客户端所在节点
- **D.** 不同机架的节点

> ✅ **答案：** 见解析

---

### 6. 在HDFS中，用于列出目录或文件信息的命令是？ - A. hdfs dfs -put - B. hadoop fs -mkdir - C. hdfs dfs -ls - D. hadoop fs -cat

> ✅ **答案：** 见解析

---

### 7. 下列哪个命令可以用于在HDFS中创建多级目录？

- **A.** hdfs dfs -put
- **B.** hadoop fs -mkdir -p
- **C.** hadoop fs -ls -R
- **D.** hdfs dfs -cat

> ✅ **答案：** 见解析

---

### 8. HDFS中，将本地文件上传到HDFS的命令是？

- **A.** hadoop fs -put
- **B.** hdfs dfs -cat
- **C.** hadoop fs -ls
- **D.** hdfs dfs -mkdir

> ✅ **答案：** 见解析

---

### 9. HDFS中，用于查看文件内容的命令是？

- **A.** hadoop fs -cat
- **B.** hdfs dfs -put
- **C.** hadoop fs -ls
- **D.** hdfs dfs -mkdir

> ✅ **答案：** 见解析

---

### 10. HDFS中，用于将本地文件追加到HDFS文件末尾的命令是？

- **A.** hadoop fs -appendToFile
- **B.** hdfs dfs -put
- **C.** hadoop fs -cat
- **D.** hdfs dfs -ls

> ✅ **答案：** 见解析

---

### 11. 在HDFS中，用于列出目录或文件内容的命令是？

- **A.** hdfs dfs -ls
- **B.** hdfs dfs -mkdir
- **C.** hdfs dfs -put
- **D.** hdfs dfs -cat

> ✅ **答案：** 见解析

---

### 12. 将本地文件复制到HDFS中，并在复制后删除本地源文件的命令是？

- **A.** hdfs dfs -moveFromLocal
- **B.** hdfs dfs -put
- **C.** hdfs dfs -copyFromLocal
- **D.** hdfs dfs -appendToFile

> ✅ **答案：** 见解析

---

### 13. 用于查看HDFS中某个文件内容的命令是？

- **A.** hdfs dfs -cat
- **B.** hdfs dfs -ls
- **C.** hdfs dfs -get
- **D.** hdfs dfs -put

> ✅ **答案：** 见解析

---

### 14. 下列哪个命令可以将HDFS中的文件合并到本地文件系统的一个文件中？

- **A.** hdfs dfs -getmerge
- **B.** hdfs dfs -get
- **C.** hdfs dfs -copyToLocal
- **D.** hdfs dfs -mv

> ✅ **答案：** 见解析

---

### 15. Zookeeper在Hadoop HA架构中的主要作用是( )

- **A.** 实现NameNode故障自动切换
- **B.** 调度MapReduce任务
- **C.** 存储数据块
- **D.** 管理元数据

> ✅ **答案：** A:实现NameNode故障自动切换;

---

### 16. YARN中负责管理单个节点资源的组件是( )

- **A.** NodeManager
- **B.** ResourceManager
- **C.** ApplicationMaster
- **D.** Container

> ✅ **答案：** A:NodeManager;

---

### 17. 下列命令中，能删除HDFS中‘/test’目录(含子目录)的是( )

- **A.** hdfs dfs -rm -r /test
- **B.** hdfs dfs -delete /test
- **C.** hdfs dfs -rm /test
- **D.** hdfs dfs -rmdir /test

> ✅ **答案：** A:hdfs dfs -rm -r /test;

---

### 18. 在HDFS中，NameNode主要负责什么工作？

- **A.** 维护文件目录结构和元数据信息
- **B.** 执行MapReduce任务
- **C.** 处理数据读写请求
- **D.** 存储数据块

> ✅ **答案：** A:维护文件目录结构和元数据信息;
> 📝 **解析：** NameNode是HDFS的核心组件，主要用来维护整个文件系统的元数据信息，包括文件目录树、文件块分布情况等。

---

### 19. HDFS中，记录用户操作日志的是哪一类文件？

- **A.** fsimage
- **B.** blockreport
- **C.** inprogress
- **D.** edits

> ✅ **答案：** D:edits;
> 📝 **解析：** edits文件用于记录用户对HDFS的每一次操作，如创建文件、删除文件等。

---

### 20. HDFS中默认的数据块副本数配置在以下哪个文件中( )

- **A.** core-site.xml
- **B.** yarn-site.xml
- **C.** mapred-site.xml
- **D.** hdfs-site.xml

> ✅ **答案：** D:hdfs-site.xml;

---

### 21. HDFS的元数据主要存储在哪两个位置？

- **A.** 硬盘和日志文件
- **B.** 内存和JournalNode
- **C.** 内存和磁盘
- **D.** 内存和数据库

> ✅ **答案：** C:内存和磁盘;
> 📝 **解析：** 为了性能和持久化，HDFS的元数据同时存储在内存和磁盘上。内存中用于快速访问，磁盘用于持久化保存。

---

### 22. HDFS中，当NameNode启动时，它会先加载哪一类文件来恢复元数据？

- **A.** edits
- **B.** blockreport
- **C.** fsimage
- **D.** datanodeinfo

> ✅ **答案：** C:fsimage;
> 📝 **解析：** NameNode在启动时首先加载fsimage文件，恢复最新的文件系统状态。

---

### 23. 在HDFS中，Block的副本数默认是多少？

- **A.** 3
- **B.** 4
- **C.** 2
- **D.** 1

> ✅ **答案：** A:3;
> 📝 **解析：** HDFS的默认副本数为3，目的是为了提高数据的容错性和可用性。

---

### 24. HDFS中，数据读取流程的第一步是客户端从哪个组件获取文件的元数据？

- **A.** NameNode
- **B.** JournalNode
- **C.** DataNode
- **D.** SecondaryNameNode

> ✅ **答案：** A:NameNode;
> 📝 **解析：** HDFS读取数据时，客户端首先向NameNode请求文件的元数据信息，以确定该文件的Block位置。

---

### 25. 下列不属于Hadoop核心组件的是( )

- **A.** YARN
- **B.** MapReduce
- **C.** Spark
- **D.** HDFS

> ✅ **答案：** C:Spark;

---

### 26. HDFS数据写入时，一个完整的文件是由多个什么样的单元组成的？

- **A.** 目录
- **B.** 数据流
- **C.** Block
- **D.** 校验和

> ✅ **答案：** C:Block;
> 📝 **解析：** HDFS将文件切分成多个Block进行分布式存储，每个Block会被复制并存储在不同的DataNode上。

---

### 27. HDFS中，一个Block的默认大小是多少（单位MB）？

- **A.** 256
- **B.** 128
- **C.** 32
- **D.** 64

> ✅ **答案：** B:128;
> 📝 **解析：** HDFS默认的Block大小是128MB，这是为了平衡存储效率和网络传输效率之间的关系。

---

### 28. 关于MapReduce的Shuffle阶段，下列描述正确的是( )

- **A.** 仅发生在Map端
- **B.** 连接Map和Reduce阶段的关键环节
- **C.** 不涉及数据排序
- **D.** 仅发生在Reduce端

> ✅ **答案：** B:连接Map和Reduce阶段的关键环节;

---

### 29. 在HDFS中，用于列出目录或文件信息的命令是？ - A. hadoop fs -mkdir - B. hdfs dfs -ls - C. hadoop fs -cat - D. hdfs dfs -put

> ✅ **答案：** B:hdfs dfs -ls;
> 📝 **解析：** hdfs dfs -ls 是 HDFS 中用于列出目录或文件信息的命令，可以配合 -R 参数递归列出子目录内容。

---

### 30. HDFS中持久化的元数据文件是哪一个？

- **A.** datanodeinfo
- **B.** fsimage
- **C.** blockreport
- **D.** edits

> ✅ **答案：** B:fsimage;
> 📝 **解析：** fsimage是HDFS中用于保存文件系统元数据快照的文件，每次Checkpoint操作会生成新的fsimage文件。

---

### 31. Hadoop 2.x中，HDFS默认的Block Size大小是( )

- **A.** 128MB
- **B.** 64MB
- **C.** 512MB
- **D.** 256MB

> ✅ **答案：** A:128MB;

---

### 32. 在HDFS数据写入过程中，客户端上传数据时的最小单位是什么？

- **A.** 文件
- **B.** 字节
- **C.** 块（Block）
- **D.** 目录

> ✅ **答案：** C:块（Block）;
> 📝 **解析：** HDFS中，数据是以块为基本单位进行存储和传输的。客户端在上传数据时，是按照块的大小逐个上传的。

---

### 33. YARN 中的 Container 是什么？

- **A.** 一个应用程序的主控制器
- **B.** 一种独立的计算任务
- **C.** 封装了 CPU 和 Memory 等资源的抽象单元
- **D.** 用于存储数据的容器

> ✅ **答案：** C:封装了 CPU 和 Memory 等资源的抽象单元;
> 📝 **解析：** Container 是 YARN 中的一种资源抽象，封装了 CPU、Memory 等资源，是运行任务的环境。

---

### 34. 以下哪项不是 ResourceManager 的职责？

- **A.** 直接执行应用程序的计算任务
- **B.** 监控 NodeManager 的状态
- **C.** 处理客户端请求
- **D.** 资源调度和分配

> ✅ **答案：** A:直接执行应用程序的计算任务;
> 📝 **解析：** ResourceManager 不直接执行计算任务，而是通过 ApplicationMaster 和 NodeManager 协作完成任务的执行。

---

### 35. YARN 中负责资源调度的模块是？

- **A.** ContainerManager
- **B.** Scheduler
- **C.** ApplicationsManager
- **D.** ApplicationMaster

> ✅ **答案：** B:Scheduler;
> 📝 **解析：** Scheduler 是 ResourceManager 的一部分，负责在资源可用的情况下进行资源调度。

---

### 36. YARN 中的 Scheduler 是什么？

- **A.** 负责集群中所有应用程序的启动
- **B.** 负责监控应用程序的运行状态
- **C.** 负责处理用户提交的作业请求
- **D.** 负责资源的分配以及调度

> ✅ **答案：** D:负责资源的分配以及调度;
> 📝 **解析：** Scheduler 是 ResourceManager 的一个核心组件，主要负责资源的分配和调度。

---

### 37. YARN 的 ResourceManager 主要负责什么？

- **A.** 管理节点上的容器资源
- **B.** 执行应用程序的计算任务
- **C.** 监控单个节点的资源使用情况
- **D.** 为每个应用程序启动 ApplicationMaster

> ✅ **答案：** D:为每个应用程序启动 ApplicationMaster;
> 📝 **解析：** ResourceManager 是 YARN 中的核心组件之一，主要负责集群范围内所有应用程序的资源管理和调度，并负责启动 ApplicationMaster。

---

### 38. 以下哪条命令用于列出 YARN 中运行的所有应用程序？

- **A.** yarn application -start
- **B.** yarn application -status
- **C.** yarn application -list
- **D.** yarn application -kill

> ✅ **答案：** C:yarn application -list;
> 📝 **解析：** yarn application -list 是用于列出 YARN 中所有运行中的应用程序的命令。

---

### 39. 下列属于Hadoop序列化类的是( )

- **A.** Text
- **B.** String
- **C.** List
- **D.** Integer

> ✅ **答案：** A:Text;

---

### 40. 配置Hadoop的JAVA_HOME环境变量，应修改哪个文件( )

- **A.** mapred-env.sh
- **B.** core-site.xml
- **C.** hadoop-env.sh
- **D.** hdfs-site.xml

> ✅ **答案：** C:hadoop-env.sh;

---

### 41. MapReduce中，默认的Reduce任务数量是( )

- **A.** 由集群节点数决定
- **B.** 与Map任务数量相同
- **C.** 2
- **D.** 1

> ✅ **答案：** D:1;

---

### 42. 下列哪个命令可以查看HDFS中‘/user/stu/file.txt’的文件内容( )

- **A.** hdfs dfs -ls /user/stu/file.txt
- **B.** hdfs dfs -put /user/stu/file.txt
- **C.** hdfs dfs -cat /user/stu/file.txt
- **D.** hdfs dfs -get /user/stu/file.txt

> ✅ **答案：** C:hdfs dfs -cat /user/stu/file.txt;

---

### 43. YARN 中负责集群资源统一管理和调度的核心组件是什么？

- **A.** Client
- **B.** ApplicationMaster
- **C.** NodeManager
- **D.** ResourceManager

> ✅ **答案：** D:ResourceManager;
> 📝 **解析：** ResourceManager 是 YARN 的核心组件之一，负责集群资源的统一管理和调度。

---

### 44. YARN 的工作流程中，哪一步涉及 ApplicationMaster 向 ResourceManager 注册？

- **A.** 第一步
- **B.** 第四步
- **C.** 第二步
- **D.** 第三步

> ✅ **答案：** D:第三步;
> 📝 **解析：** YARN 的工作流程中，ApplicationMaster 成功运行后会向 ApplicationsManager 注册，这是第三步。

---

### 45. 在 YARN 中，哪个组件负责处理客户端的请求？

- **A.** ResourceManager
- **B.** ApplicationMaster
- **C.** NodeManager
- **D.** Container

> ✅ **答案：** A:ResourceManager;
> 📝 **解析：** ResourceManager 负责处理客户端的作业提交请求，并协调整个集群的资源分配。

---

### 46. 向Hadoop集群提交MapReduce任务的核心命令是( )

- **A.** yarn jar
- **B.** hadoop jar
- **C.** hadoop submit
- **D.** mapreduce submit

> ✅ **答案：** B:hadoop jar;

---

### 47. HDFS的“一次写入，多次读取”特性主要是为了( )

- **A.** 提高数据安全性
- **B.** 适配大数据处理场景
- **C.** 简化权限管理
- **D.** 降低存储成本

> ✅ **答案：** B:适配大数据处理场景;

---

### 48. 下列关于 NodeManager 的描述中，正确的是哪一项？

- **A.** 负责集群中所有应用程序的资源调度
- **B.** 负责向 ApplicationMaster 提交作业
- **C.** 定时向 ResourceManager 汇报节点资源使用情况
- **D.** 每个集群中只存在一个 NodeManager

> ✅ **答案：** C:定时向 ResourceManager 汇报节点资源使用情况;
> 📝 **解析：** NodeManager 是 YARN 架构中的一个关键角色，它运行在每个节点上，负责管理该节点的资源，并定时向 ResourceManager 汇报节点的资源使用状况。

---

### 49. YARN 应用程序提交的第一步是？

- **A.** ApplicationMaster 向 ResourceManager 注册
- **B.** Client 将作业提交给 ResourceManager 的 ApplicationsManager
- **C.** ApplicationMaster 分配资源
- **D.** NodeManager 启动任务

> ✅ **答案：** B:Client 将作业提交给 ResourceManager 的 ApplicationsManager;
> 📝 **解析：** YARN 的工作流程中，Client 提交作业的第一步是将作业提交到 ResourceManager 的 ApplicationsManager。

---

### 50. 关于SecondaryNameNode的说法，正确的是( )

- **A.** 负责合并NameNode的编辑日志
- **B.** 与NameNode部署在同一节点
- **C.** 能替代故障的NameNode
- **D.** 是NameNode的热备份

> ✅ **答案：** A:负责合并NameNode的编辑日志;

---

### 51. YARN的Web监控默认端口是( )

- **A.** 8088
- **B.** 50030
- **C.** 19888
- **D.** 50070

> ✅ **答案：** A:8088;

---

### 52. 下列不属于Hadoop生态圈组件的是( )

- **A.** Spring
- **B.** HBase
- **C.** Hive
- **D.** Flume

> ✅ **答案：** A:Spring;

---

### 53. 以下哪种说法正确描述了 YARN 中 Client 的作用？

- **A.** Client 是唯一能够监控 NodeManager 的组件
- **B.** Client 是用户向 YARN 提交作业的接口
- **C.** Client 负责集群资源的统一管理
- **D.** Client 能够直接启动 ApplicationMaster

> ✅ **答案：** B:Client 是用户向 YARN 提交作业的接口;
> 📝 **解析：** Client 是用户与 YARN 交互的接口，用于提交、查询或杀死作业。

---

### 54. 下列关于Hadoop HA架构的描述，正确的是( )

- **A.** 包含一个Active NameNode和一个Standby NameNode
- **B.** SecondaryNameNode是必备组件
- **C.** 两个NameNode同时提供服务
- **D.** 不需要Zookeeper支持

> ✅ **答案：** A:包含一个Active NameNode和一个Standby NameNode;

---

### 55. ApplicationMaster 的核心职责是什么？

- **A.** 向 ResourceManager 申请资源，并协调 NodeManager 启动任务
- **B.** 处理用户提交的作业请求
- **C.** 负责监控节点资源使用情况
- **D.** 统一管理整个集群的资源

> ✅ **答案：** A:向 ResourceManager 申请资源，并协调 NodeManager 启动任务;
> 📝 **解析：** ApplicationMaster 是每个应用程序特有的管理器，它负责与 ResourceManager 协商资源，并与 NodeManager 一起启动和监控任务。

---

### 56. ApplicationMaster 向 ResourceManager 调度资源的依据是什么？

- **A.** 任务的优先级
- **B.** 应用程序的资源需求
- **C.** 用户的权限
- **D.** 当前节点的负载

> ✅ **答案：** B:应用程序的资源需求;
> 📝 **解析：** ApplicationMaster 会根据应用程序的资源需求向 Scheduler 请求资源。

---

### 57. 下列哪一个命令用于查看 YARN 上所有运行中的应用程序？

- **A.** yarn application -list
- **B.** yarn application -kill
- **C.** yarn application -status
- **D.** yarn application -start

> ✅ **答案：** A:yarn application -list;
> 📝 **解析：** yarn application -list 命令用于列出 YARN 中当前运行的所有应用程序。

---

### 58. 在 YARN 架构中，哪个组件负责与 NodeManager 协同执行和监控任务？

- **A.** ApplicationMaster
- **B.** ResourceManager
- **C.** ApplicationsManager
- **D.** Scheduler

> ✅ **答案：** A:ApplicationMaster;
> 📝 **解析：** ApplicationMaster 是每个应用程序的管理者，负责与 NodeManager 协作以执行和监控任务。

---

### 59. 以下哪种说法关于 Container 是正确的？

- **A.** Container 仅包含 CPU 资源
- **B.** Container 由 ApplicationMaster 直接管理，无需经过 ResourceManager
- **C.** Container 是一个任务运行环境的抽象，包含内存、CPU 等资源
- **D.** Container 是 YARN 中的物理硬件单元

> ✅ **答案：** C:Container 是一个任务运行环境的抽象，包含内存、CPU 等资源;
> 📝 **解析：** Container 是 YARN 中的任务运行环境的抽象，包括 CPU、内存等资源。

---

### 60. 关于DataNode的描述，错误的是( )

- **A.** 存储HDFS的数据块
- **B.** 负责元数据管理
- **C.** 执行数据块的创建和删除
- **D.** 定期向NameNode发送心跳

> ✅ **答案：** B:负责元数据管理;

---

### 61. MapReduce中，Map任务的并行度由以下哪个因素决定( )

- **A.** 节点数量
- **B.** 输入分片(Split)数量
- **C.** Reduce任务数量
- **D.** 数据块大小

> ✅ **答案：** B:输入分片(Split)数量;

---

### 62. 以下关于 NodeManager 的描述中，哪一项是错误的？

- **A.** NodeManager 可以有多个实例运行在集群中
- **B.** NodeManager 负责节点上的资源管理和使用
- **C.** NodeManager 向 ResourceManager 报告本节点的资源使用情况
- **D.** NodeManager 能独立调度资源而不依赖 ResourceManager

> ✅ **答案：** D:NodeManager 能独立调度资源而不依赖 ResourceManager;
> 📝 **解析：** NodeManager 不具备独立调度资源的能力，它依赖于 ResourceManager 和 ApplicationMaster 的指令。

---

### 63. Hadoop集群搭建时，配置SSH免密登录的核心目的是( )

- **A.** 简化节点管理
- **B.** 加快数据传输速度
- **C.** 提高集群安全性
- **D.** 避免启动服务时重复输入密码

> ✅ **答案：** D:避免启动服务时重复输入密码;

---

### 64. 以下不属于大数据特点的是( )。

- **A.** 速度快
- **B.** 价值密度高
- **C.** 格式多样化
- **D.** 数据量大、计算量大

> ✅ **答案：** B:价值密度高;

---

### 65. 关于MapReduce程序中的map方法执行时机描述正确的是( )。

- **A.** 每一个key/value都会调用一次map方法
- **B.** 每一个block都会调用一次map方法
- **C.** 当MapReduce程序启动时调用一次map方法
- **D.** 当MapReduce程序结束时调用一次map方法

> ✅ **答案：** C:当MapReduce程序启动时调用一次map方法;

---

### 66. 查看Zookeeper状态的命令是( )。

- **A.** zkServer.sh stop
- **B.** zkServer.sh start
- **C.** zkCli.sh status
- **D.** zkServer.sh status

> ✅ **答案：** D:zkServer.sh status;

---

### 67. MapReduce中map的并行度取决于( )。

- **A.** 切片的数量
- **B.** key的数量
- **C.** 分区的数量
- **D.** 文件的数量

> ✅ **答案：** A:切片的数量;

---

### 68. MapReduce中InputSplit(切片)默认的大小是( )。

- **A.** 32MB
- **B.** 256MB
- **C.** 128MB
- **D.** 64MB

> ✅ **答案：** C:128MB;

---

### 69. 将本地文件系统中的文件上传至HDFS的命令是( )。

- **A.** hadoop fs -create
- **B.** hadoop fs -put
- **C.** hadoop fs -push
- **D.** hadoop fs -cat

> ✅ **答案：** B:hadoop fs -put;

---

### 70. MapReduce传递数据的形式是( )。

- **A.** XML
- **B.** <key,value>
- **C.** JSON
- **D.** Text

> ✅ **答案：** B:<key,value>;

---

### 71. 以下业务场景适合使用实时处理的是()

- **A.** 月末财务报表的生成，需要汇总整个月的财务数据
- **B.** 高德导航为用户提供精确的交通流量信息、路线规划
- **C.** 年度销售数据分析，用于生成年度销售报告
- **D.** 用户行为研究，基于每个季度的用户行为进行用户画像

> ✅ **答案：** B:高德导航为用户提供精确的交通流量信息、路线规划;

---

### 72. 以下不属于Hadoop中序列化类的是( )。

- **A.** Text
- **B.** IntWritable
- **C.** NullWritable
- **D.** String

> ✅ **答案：** D:String;

---

### 73. 在YARN中执行hadoop.jar中com.inspur.WordCount程序的命令是( )。

- **A.** yarn jar hadoop.jar com.inspur.WordCount
- **B.** hadoop jar hadoop.jar com.inspur.WordCount
- **C.** yarn jar com.inspur.WordCount hadoop.jar
- **D.** hadoop jar com.inspur.WordCount hadoop.jar

> ✅ **答案：** B:hadoop jar hadoop.jar com.inspur.WordCount;

---

### 74. HDFS默认的block数据块的大小是( )。

- **A.** 500MB
- **B.** 256MB
- **C.** 128MB
- **D.** 64MB

> ✅ **答案：** C:128MB;

---

### 75. HDFS适合的读写任务是( )。

- **A.** 多次写入，多次读取
- **B.** 一次写入，少次读取
- **C.** 一次写入，多次读取
- **D.** 多次写入，少次读取

> ✅ **答案：** C:一次写入，多次读取;

---

### 76. 以下选项对离线批处理描述不正确的选项是()

- **A.** 离线批处理是对准备好的一批数据进行计算
- **B.** 离线批处理程序可通过调度框架定时调度执行
- **C.** 离线批处理程序运行中，新产生的数据不进入本次计算
- **D.** 离线批处理需要实时响应用户请求

> ✅ **答案：** D:离线批处理需要实时响应用户请求;

---

### 77. 关于HA描述错误的是( )。

- **A.** 可以使用Zookeeper作为协调工具
- **B.** 解决了从节点单点故障
- **C.** 解决了主节点单点故障
- **D.** HDFS HA中没有SecondaryNameNode

> ✅ **答案：** B:解决了从节点单点故障;

---

### 78. 以下不属于Hadoop生态圈的是( )。

- **A.** HBase
- **B.** Spark
- **C.** Java
- **D.** Hive

> ✅ **答案：** C:Java;

---

### 79. YARN的主节点进程是( )。

- **A.** NameNode
- **B.** ResourceManager
- **C.** DataNode
- **D.** NodeManager

> ✅ **答案：** B:ResourceManager;

---

### 80. 某文件大小是500MB，该文件上传到HDFS会被分为几个数据块( )。

- **A.** 4个
- **B.** 3个
- **C.** 1个
- **D.** 5个

> ✅ **答案：** A:4个;

---

### 81. HDFS中删除目录(/one)的命令是( )。

- **A.** hadoop fs -rm -f /one
- **B.** hadoop fs -del -rf /one
- **C.** hadoop fs -rm -r -f /one
- **D.** hadoop fs -rm /one

> ✅ **答案：** C:hadoop fs -rm -r -f /one;

---

### 82. 在YARN中负责资源调度的组件是( )。

- **A.** Applications Manager
- **B.** Container
- **C.** NodeManager
- **D.** Scheduler

> ✅ **答案：** D:Scheduler;

---

### 83. 编写MapReduce程序的Reducer时，需要重写以下哪个方法( )。

- **A.** map()
- **B.** getsplit()
- **C.** context
- **D.** reduce()

> ✅ **答案：** B:getsplit();

---

### 84. HDFS默认的数据副本数量是？

- **A.** 1
- **B.** 2
- **C.** 3
- **D.** 4

> ✅ **答案：** 见解析

---

### 85. Hadoop的伪分布式模式是指？

- **A.** 在单节点上模拟分布式环境，所有组件运行在同一台机器上
- **B.** 在多节点上部署，每个节点运行特定组件
- **C.** 仅在本地运行，不涉及网络通信
- **D.** 使用云服务部署Hadoop集群

> ✅ **答案：** 见解析

---

### 86. YARN中默认的资源调度器是？

- **A.** Capacity Scheduler
- **B.** Fair Scheduler
- **C.** FIFO Scheduler
- **D.** None of the above

> ✅ **答案：** 见解析

---

### 87. MapReduce作业的输出结果默认存储在哪里？

- **A.** 本地文件系统
- **B.** HDFS
- **C.** HBase
- **D.** ZooKeeper

> ✅ **答案：** 见解析

---

### 88. MapReduce中负责将Map输出的键值对进行分组和排序的阶段是？

- **A.** Map阶段
- **B.** Shuffle阶段
- **C.** Reduce阶段
- **D.** Input阶段

> ✅ **答案：** 见解析

---

### 89. 以下哪个工具用于Hadoop集群的资源和作业管理？

- **A.** HBase
- **B.** ZooKeeper
- **C.** YARN
- **D.** Hive

> ✅ **答案：** 见解析

---

### 90. HDFS高可用架构中，用于实现NameNode故障自动切换的组件是？

- **A.** SecondaryNameNode
- **B.** ZooKeeper
- **C.** DataNode
- **D.** ResourceManager

> ✅ **答案：** 见解析

---

### 91. 以下哪一项不是Hadoop的核心组件？

- **A.** HDFS
- **B.** YARN
- **C.** MapReduce
- **D.** Spark

> ✅ **答案：** 见解析

---

### 92. HDFS默认的数据块大小是？

- **A.** 64MB
- **B.** 128MB
- **C.** 256MB
- **D.** 512MB

> ✅ **答案：** 见解析

---

### 93. MapReduce中处理数据分片的任务是？

- **A.** Map Task
- **B.** Reduce Task
- **C.** Shuffle Task
- **D.** Input Task

> ✅ **答案：** 见解析

---

### 94. 客户端向HDFS写入文件时，首先会向哪个组件请求？

- **A.** DataNode
- **B.** NameNode
- **C.** SecondaryNameNode
- **D.** ResourceManager

> ✅ **答案：** 见解析

---

### 95. YARN中负责管理单个应用程序执行的组件是？

- **A.** ResourceManager
- **B.** NodeManager
- **C.** ApplicationMaster
- **D.** Container

> ✅ **答案：** 见解析

---

### 96. HDFS中负责管理文件系统命名空间和客户端访问的是哪个角色？

- **A.** DataNode
- **B.** NameNode
- **C.** SecondaryNameNode
- **D.** ResourceManager

> ✅ **答案：** 见解析

---

### 97. YARN中负责监控容器资源使用情况并向ResourceManager汇报的组件是？

- **A.** NodeManager
- **B.** ApplicationMaster
- **C.** ResourceManager
- **D.** Container

> ✅ **答案：** 见解析

---

### 98. 在Linux中，下列哪个命令可以用于分页查看文件内容？

- **A.** more

> ✅ **答案：** A: more
> 📝 **解析：** `more`是Linux中经典的“分页查看”工具，适合逐屏显示大文件内容。虽然 `less`也可以分页，但 `more`更符合“分页查看”的传统定义，且在本题选项中，`more`是最直接对应的答案。* -----

---

### 99. 在Linux中，下列哪个命令可以用于统计文件的行数、单词数和字符数？

- **A.** wc

> ✅ **答案：** A: wc
> 📝 **解析：** `wc`（word count）命令专门用于统计文件的行数、单词数和字节数，是标准工具。* -----

---

### 100. 在Linux中，下列哪个命令可以用于查看文件的类型？

- **B.** file

> ✅ **答案：** B: file
> 📝 **解析：** `file`命令会根据文件内容判断其类型（如文本、二进制、压缩包等），而不是靠扩展名。* -----

---

### 101. 在Linux系统中，下列哪个命令可以用于查看文件的开头部分内容？

- **B.** head

> ✅ **答案：** B: head
> 📝 **解析：** `head`默认显示文件前10行，常用于快速查看文件开头。* -----

---

### 102. 在Linux中，下列哪个命令可以用于创建一个空文件？

- **A.** touch

> ✅ **答案：** A: touch
> 📝 **解析：** `touch`命令用于更新文件时间戳，如果文件不存在，则创建一个空文件。* ----- 多选题

---

### 103. 在Linux环境中，使用______命令可以让刚刚修改的环境变量配置立刻生效。

> ✅ **答案：** source
> 📝 **解析：** * 修改如 `/etc/profile`或 `~/.bashrc`等配置文件后，需执行 `source 文件名`（如 `source /etc/profile`）使其在当前终端立即生效，无需重启。

---

### 104. 在单机模式下，HBase不使用HDFS，而是使用______。

> ✅ **答案：** 本地文件系统（或Local FileSystem）
> 📝 **解析：** * 单机模式下，HBase默认将数据存储在本地磁盘的文件系统中，而非分布式的HDFS上。

---

### 105. 第7题：在配置Hadoop在/opt/hadoop-record/目录下创建四个子文件夹，以下哪个不属于这四个文件夹？

> ✅ **答案：** D name
> 📝 **解析：** * 通常 Hadoop 的配置中会创建 `data`（存放数据块）、`log`（日志）、`temp`（临时文件）等目录。`name`目录通常是指 HDFS 的 NameNode 元数据目录，它一般位于 HDFS 的命名空间下，而不是在 `/opt/hadoop-record/`这种本地配置目录下作为子文件夹。标准的四个子目录通常是 `data`, `logs`, `tmp`, `name`(如果是本地文件系统的话)。但结合 Hadoop 常规配置，`./data`, `./logs`, `./tmp`是常见目录，`./name`有时也会建，但如果说“不属于”，可能是题目设定中只有前三个。重新思

---

### 106. 第8题：编辑Hadoop环境变量后，需执行了哪个命令使其生效？

> ✅ **答案：** A source /etc/profile.d/hadoop-eco.sh
> 📝 **解析：** * `source`命令用于在当前 shell 环境中执行脚本，使脚本中定义的环境变量立即生效。修改配置文件后必须执行此操作。

---

### 107. 第11题：以下哪个命令用于查看hdfs文件的内容？

> ✅ **答案：** D hdfs dfs -cat
> 📝 **解析：** * `-mkdir`：创建目录。 `-ls`：列出目录内容。 `-put`：上传文件到HDFS。 `-cat`：查看文件内容，类似于Linux系统中的`cat`命令。

---

### 108. 以下关于 * HDFS（Hadoop Distributed File System）是Hadoop的分布式文件系统，其核心设计目标就是在廉价硬件上实现海量数据的分布式存 的描述，正确的是？

> ✅ **答案：** B 分布式文件存储
> 📝 **解析：** * HDFS（Hadoop Distributed File System）是Hadoop的分布式文件系统，其核心设计目标就是在廉价硬件上实现海量数据的分布式存储，具有高容错性、高吞吐量的特点。

---

### 109. 第30题：安装 JDK 和 Hadoop 后，为使配置生效，需执行哪个命令？

> ✅ **答案：** D source /etc/profile
> 📝 **解析：** * 通常环境变量（如 `JAVA_HOME`, `HADOOP_HOME`）会配置在 `/etc/profile`或 `/etc/profile.d/`下的脚本中。要使当前Shell会话立即生效，需使用 `source`命令。选项A的文件名疑似笔误（应为 `.sh`后缀），且不是标准路径；选项D是最通用、最可能的标准答案。

---

### 110. 第31题：在Hadoop配置中，yarn-site.xml文件用于设置YARN的相关参数。以下哪个配置项用于指定YARN资源管理器的主机名?

> ✅ **答案：** C yarn.resourcemanager.hostname
> 📝 **解析：** * 这是YARN配置中最基础且明确的属性。A是HDFS副本配置，B是默认文件系统配置，D是MapReduce框架配置。

---

## 多选题（40题）

### 1. 下列哪些命令可以在HDFS中进行文件操作？

- **A.** hadoop fs -ls
- **B.** hdfs dfs -put
- **C.** hadoop fs -cat
- **D.** hadoop fs -mkdir
- **E.** hadoop fs -appendToFile

> ✅ **答案：** 见解析

---

### 2. 关于HDFS中 mkdir 命令的描述，正确的有哪些？

- **A.** 用于创建目录
- **B.** 需要使用 -p 参数创建多级目录
- **C.** 只能创建单层目录
- **D.** 不支持递归创建
- **E.** 可以创建多个目录

> ✅ **答案：** 见解析

---

### 3. 下列哪些命令可以用于将本地文件上传至HDFS？

- **A.** hadoop fs -put
- **B.** hdfs dfs -copyFromLocal
- **C.** hadoop fs -appendToFile
- **D.** hadoop fs -cat
- **E.** hadoop fs -ls

> ✅ **答案：** 见解析

---

### 4. 关于HDFS中 -ls 命令的描述，正确的有哪些？

- **A.** 用于列出目录或文件信息
- **B.** 支持 -R 参数递归列出子目录
- **C.** 可以查看文件内容
- **D.** 不支持查看隐藏文件
- **E.** 支持 -h 参数以易读方式显示文件大小

> ✅ **答案：** 见解析

---

### 5. 下列关于HDFS中 moveFromLocal 命令的说法，正确的有哪些？

- **A.** 用于将本地文件移动到HDFS
- **B.** 移动后本地文件会被删除
- **C.** 与 put 命令完全相同
- **D.** 不支持多文件操作
- **E.** 可以用于上传文件

> ✅ **答案：** 见解析

---

### 6. 关于HDFS的副本策略，以下说法正确的是？

- **A.** 副本可以放在同一个节点上
- **B.** 副本放置策略考虑了机架感知
- **C.** 副本数可以动态调整
- **D.** 副本数越多越好
- **E.** 副本数默认为3

> ✅ **答案：** BCE:副本放置策略考虑了机架感知; 副本数可以动态调整; 副本数默认为3;
> 📝 **解析：** HDFS的副本策略默认为3，副本放置考虑了机架感知，副本数可以动态调整，但并非越多越好，因为会影响性能。

---

### 7. Hadoop特点包括( )

- **A.** 高性能
- **B.** 支持多种编程语言
- **C.** 高可靠性
- **D.** 高扩展

> ✅ **答案：** CD:高可靠性; 高扩展;

---

### 8. HDFS中，DataNode的主要职责包括哪些？

- **A.** 执行MapReduce任务
- **B.** 存储实际的数据块
- **C.** 管理文件的分块信息
- **D.** 维护文件目录结构
- **E.** 定期向NameNode发送心跳
- **F.** 报告自己管理的Block列表

> ✅ **答案：** BEF:存储实际的数据块; 定期向NameNode发送心跳; 报告自己管理的Block列表;
> 📝 **解析：** DataNode负责存储数据块，并定期向NameNode发送心跳和Block汇报，以告知其自身状态和所管理的Block信息。

---

### 9. HDFS元数据包括哪些信息？ - A. 文件目录结构 - B. Block到DataNode的映射 - C. DataNode存储的Block数量 - D. 文件分块信息

> ✅ **答案：** ABCD:文件目录结构; Block到DataNode的映射; DataNode存储的Block数量; 文件分块信息;
> 📝 **解析：** HDFS元数据包括文件目录结构、文件分块信息、Block与DataNode的映射、DataNode存储的Block数量以及文件的一些属性如修改时间等。

---

### 10. HDFS中，NameNode的作用包括以下哪些？ - A. 管理文件的分块信息 - B. 维护文件目录结构 - C. 管理Block到DataNode的映射 - D. 存储实际的数据

> ✅ **答案：** ABC:管理文件的分块信息; 维护文件目录结构; 管理Block到DataNode的映射;
> 📝 **解析：** NameNode是HDFS的核心，主要用于管理文件系统元数据，包括目录结构、文件分块信息、Block位置映射以及DataNode状态等。

---

### 11. 下列属于YARN核心组件的有( )

- **A.** DataNode
- **B.** NodeManager
- **C.** ApplicationMaster
- **D.** ResourceManager

> ✅ **答案：** BCD:NodeManager; ApplicationMaster; ResourceManager;

---

### 12. 下列关于HDFS的说法中，错误的是？

- **A.** HDFS具有高吞吐量
- **B.** HDFS支持并发写入
- **C.** HDFS放宽了部分POSIX要求
- **D.** HDFS适合存储大量小文件
- **E.** HDFS不适合流式数据访问

> ✅ **答案：** BDE:HDFS支持并发写入; HDFS适合存储大量小文件; HDFS不适合流式数据访问;
> 📝 **解析：** HDFS不适合存储大量小文件，也不支持并发写入，但适合流式数据访问，具有高吞吐量，并放宽了部分POSIX要求。

---

### 13. HDFS的主要特点有哪些？

- **A.** 支持并发写入
- **B.** 适用于小文件存储
- **C.** 通透性，用户感觉像访问本地磁盘
- **D.** 高容错性
- **E.** 适合一次写入多次读取

> ✅ **答案：** CDE:通透性，用户感觉像访问本地磁盘; 高容错性; 适合一次写入多次读取;
> 📝 **解析：** HDFS的特点包括高容错性、适合一次写入多次读取以及通透性，但不支持并发写入，也不适合小文件存储。

---

### 14. HDFS的架构中，以下哪些组件属于其核心组成部分？

- **A.** NameNode
- **B.** ZooKeeper
- **C.** Client
- **D.** DataNode
- **E.** SecondaryNameNode

> ✅ **答案：** ACDE:NameNode; Client; DataNode; SecondaryNameNode;
> 📝 **解析：** HDFS的架构包括Client、NameNode、DataNode和SecondaryNameNode，ZooKeeper不是HDFS的组成部分。

---

### 15. HDFS的心跳机制涉及哪些内容？

- **A.** 心跳包含DataNode存储的块信息
- **B.** NameNode根据心跳判断DataNode是否宕机
- **C.** DataNode定期向NameNode发送心跳
- **D.** 心跳频率默认为10秒
- **E.** 心跳包含DataNode的资源状态

> ✅ **答案：** ABCE:心跳包含DataNode存储的块信息; NameNode根据心跳判断DataNode是否宕机; DataNode定期向NameNode发送心跳; 心跳包含DataNode的资源状态;
> 📝 **解析：** DataNode定期向NameNode发送心跳，包含资源状态和块信息，NameNode据此判断DataNode是否宕机，心跳频率默认为3秒。

---

### 16. HDFS元数据合并机制的作用包括哪些？ - A. 避免元数据丢失 - B. 增加Block大小 - C. 提升NameNode的重启速度 - D. 减少edits文件的大小

> ✅ **答案：** ACD:避免元数据丢失; 提升NameNode的重启速度; 减少edits文件的大小;
> 📝 **解析：** 元数据合并机制通过将edits文件与fsimage合并，减少了NameNode重启时的加载时间，同时降低了元数据存储的冗余。

---

### 17. 下列哪些命令可以用于将本地文件上传到HDFS？

- **A.** hdfs dfs -moveFromLocal
- **B.** hdfs dfs -appendToFile
- **C.** hdfs dfs -get
- **D.** hdfs dfs -copyFromLocal
- **E.** hdfs dfs -put

> ✅ **答案：** ABDE:hdfs dfs -moveFromLocal; hdfs dfs -appendToFile; hdfs dfs -copyFromLocal; hdfs dfs -put;
> 📝 **解析：** hdfs dfs -put、-copyFromLocal、-moveFromLocal 和 -appendToFile 都可以用于将本地文件上传到 HDFS。

---

### 18. 下列哪些属于 YARN 的工作流程步骤？ - A. ApplicationMaster 向 ResourceManager 申请资源 - B. Client 提交作业到 ApplicationsManager - C. ApplicationMaster 向 Scheduler 注册 - D. NodeManager 启动任务

> ✅ **答案：** ABD:ApplicationMaster 向 ResourceManager 申请资源; Client 提交作业到 ApplicationsManager; NodeManager 启动任务;
> 📝 **解析：** YARN 的工作流程包括 Client 提交作业、ApplicationMaster 申请资源、NodeManager 启动任务等步骤。

---

### 19. MapReduce的容错机制包括( )

- **A.** 元数据备份
- **B.** 数据块多副本
- **C.** 推测执行(Speculative Execution)
- **D.** 任务失败自动重试

> ✅ **答案：** ABCD:元数据备份; 数据块多副本; 推测执行(Speculative Execution); 任务失败自动重试;

---

### 20. 下列Hadoop Shell命令中，用于数据上传/下载的有( )

- **A.** hdfs dfs -copyFromLocal
- **B.** hdfs dfs -copyToLocal
- **C.** hdfs dfs -get
- **D.** hdfs dfs -put

> ✅ **答案：** ABCD:hdfs dfs -copyFromLocal; hdfs dfs -copyToLocal; hdfs dfs -get; hdfs dfs -put;

---

### 21. 关于HDFS的写数据流程，下列步骤正确的有( )

- **A.** 客户端直接向DataNode写入数据
- **B.** NameNode分配数据块存储节点
- **C.** 客户端向NameNode请求上传文件
- **D.** 数据写入完成后NameNode更新元数据

> ✅ **答案：** BCD:NameNode分配数据块存储节点; 客户端向NameNode请求上传文件; 数据写入完成后NameNode更新元数据;

---

### 22. 以下哪些是 NodeManager 的职责？ - A. 管理本地节点资源 - B. 监控任务执行 - C. 定期向 ResourceManager 汇报资源使用情况 - D. 执行任务的调度

> ✅ **答案：** AC:管理本地节点资源; 定期向 ResourceManager 汇报资源使用情况;
> 📝 **解析：** NodeManager 的职责包括定期汇报资源使用、管理本地资源以及响应 ApplicationMaster 的命令。

---

### 23. 下列哪些命令属于HDFS中用于操作HDFS内部文件的命令？

- **A.** hdfs dfs -rm
- **B.** hdfs dfs -mv
- **C.** hdfs dfs -get
- **D.** hdfs dfs -cp
- **E.** hdfs dfs -put

> ✅ **答案：** ABD:hdfs dfs -rm; hdfs dfs -mv; hdfs dfs -cp;
> 📝 **解析：** hdfs dfs -mv、hdfs dfs -cp 和 hdfs dfs -rm 都是用于操作 HDFS 内部文件的命令，而 -put 和 -get 是跨文件系统的操作。

---

### 24. 下列哪些命令可以用于在HDFS中进行文件的复制或移动？

- **A.** hdfs dfs -get
- **B.** hdfs dfs -mv
- **C.** hdfs dfs -put
- **D.** hdfs dfs -cp
- **E.** hdfs dfs -copyFromLocal

> ✅ **答案：** BD:hdfs dfs -mv; hdfs dfs -cp;
> 📝 **解析：** hdfs dfs -cp 和 hdfs dfs -mv 分别用于在 HDFS 中复制和移动文件。

---

### 25. 下列哪些命令可以用于从HDFS下载文件到本地？

- **A.** hdfs dfs -getmerge
- **B.** hdfs dfs -get
- **C.** hdfs dfs -put
- **D.** hdfs dfs -cat
- **E.** hdfs dfs -copyToLocal

> ✅ **答案：** ABE:hdfs dfs -getmerge; hdfs dfs -get; hdfs dfs -copyToLocal;
> 📝 **解析：** hdfs dfs -get、-copyToLocal 和 -getmerge 都可以用于从 HDFS 下载文件到本地。

---

### 26. ResourceManager 包含哪些主要组件？

- **A.** ApplicationsManager
- **B.** ContainerManager
- **C.** ApplicationMaster
- **D.** NodeManager
- **E.** Scheduler

> ✅ **答案：** AE:ApplicationsManager; Scheduler;
> 📝 **解析：** ResourceManager 包括两个主要组件：ApplicationsManager 和 Scheduler。它们分别负责应用程序管理和资源调度。

---

### 27. 下列哪些命令可以用于删除HDFS中的文件或目录？

- **A.** hdfs dfs -rm
- **B.** hdfs dfs -rm -r
- **C.** hdfs dfs -rmdir
- **D.** hdfs dfs -remove
- **E.** hdfs dfs -delete

> ✅ **答案：** AB:hdfs dfs -rm; hdfs dfs -rm -r;
> 📝 **解析：** hdfs dfs -rm 和 hdfs dfs -rm -r 都可以用于删除 HDFS 中的文件或目录。

---

### 28. 在Linux中，关于tail命令的描述，哪些是正确的？

- **C.** tail命令可以循环读取文件。
- **D.** tail命令可以用于查看文件的末尾内容。
- **E.** tail命令可以设置每次刷新的间隔时间。

> ✅ **答案：** C: tail命令可以循环读取文件。; D: tail命令可以用于查看文件的末尾内容。; E: tail命令可以设置每次刷新的间隔时间。
> 📝 **解析：** `tail -f`可以持续跟踪文件变化（循环读取）， `tail`默认显示文件末尾内容， `tail -F`可配合刷新间隔（如 `--sleep-interval=1`）， A错：`head`看开头，`tail`看结尾； B错：分页查看是 `more`/`less`。 -----

---

### 29. 在Linux中，关于less命令的描述，哪些是正确的？

- **A.** less命令支持搜索功能。
- **B.** less命令可以向前和向后翻页。
- **E.** less命令可以在文件末尾自动退出。

> ✅ **答案：** A: less命令支持搜索功能。; B: less命令可以向前和向后翻页。; E: less命令可以在文件末尾自动退出。
> 📝 **解析：** `less`支持 `/`和 `?`搜索， 可用方向键或 `Page Up`/`Page Down`前后翻页， 读完文件后自动退出（不像 `more`会卡住）， C错：`less`支持前后翻页； D错：`less`默认显示行号（可配置）。 -----

---

### 30. 在Linux中，下列哪些属于普通文件的类型？

- **A.** 二进制文件
- **D.** 文本文件

> ✅ **答案：** A: 二进制文件; D: 文本文件
> 📝 **解析：** “普通文件”包括文本文件和二进制文件； B（字符设备）、C（目录）、E（符号链接）属于特殊文件或目录类型，不属于“普通文件”。 -----

---

### 31. 在Linux中，关于文件名的描述，哪些是正确的？

- **A.** 文件名区分大小写。
- **B.** 文件名可以包含空格，但需要加引号。
- **C.** 文件名中最后一个.后的字符串不被视为扩展名。
- **D.** 文件名可以包含字母、数字、下划线和圆点。
- **E.** 文件名的最大长度为256个字符。

> ✅ **答案：** A: 文件名区分大小写。; B: 文件名可以包含空格，但需要加引号。; C: 文件名中最后一个.后的字符串不被视为扩展名。; D: 文件名可以包含字母、数字、下划线和圆点。; E: 文件名的最大长度为256个字符。
> 📝 **解析：** Linux文件名严格区分大小写（A正确）； 空格需转义或加引号（B正确）； Linux没有强制扩展名概念，最后一个点后的内容只是文件名一部分（C正确）； 合法字符包括字母、数字、下划线、点等（D正确）； 实际最大长度是255字节（不是256），但很多教材或考试题简化为256，此处按常见考试标准选E。

---

### 32. 第10题（多选题）

> ✅ **答案：** B、D、E
> 📝 **解析：** 解析： A错误：`cat`会一次性输出整个文件内容，不分页（分页查看用 `more`/`less`）。 B正确：`cat -n`可显示文件内容的行号。 C错误：`cat`是查看/合并工具，编辑文件需用 `vi`/`vim`/`nano`等编辑器。 D正确：`cat file1 file2 > newfile`可将多个文件内容合并到新文件。 E正确：`cat filename`可直接查看文件内容。

---

### 33. 第9题（多选题）

> ✅ **答案：** A、B、D、E
> 📝 **解析：** 解析： A正确：Linux文件名严格区分大小写（如 `File.txt`和 `file.txt`是两个不同文件）。 B正确：文件名包含空格时需用引号（如 `touch "my file.txt"`）。 C错误：Linux无“扩展名”强制规则，最后一个`.`后的字符串仅为普通字符（如 `file.tar.gz`中 `.tar.gz`不是扩展名，是文件名的一部分）。 D正确：文件名可包含字母、数字、下划线（``）、圆点（`.`）等合法字符。 E错误：Linux文件名最大长度通常为 255个字符（而非256）。

---

### 34. 第8题（多选题）

> ✅ **答案：** A、B、C、D、E
> 📝 **解析：** 解析：Linux文件类型分为： 二进制文件（如可执行程序）、 字符设备文件（如 `/dev/tty`）、 目录文件（如 `/home`）、 文本文件（如 `.txt`）、 符号链接文件（如软链接 `ln -s`创建的文件）。

---

### 35. 第20题：关于Zookeeper系统存储结构和数据模型的描述，正确的是?

> ✅ **答案：** ABCD
> 📝 **解析：** * ZooKeeper的数据模型是一个层次化的命名空间，整体上像一棵树（A），结构与Unix文件系统类似（C）。它使用文件系统目录树作为数据模型（B），树中的每个节点被称为一个ZNode（D）。

---

### 36. 第11题：HBase安装前需要准备的前提条件包括哪些?

> ✅ **答案：** ABCD
> 📝 **解析：** * A：HBase依赖Hadoop（HDFS）进行数据存储。 B：HBase是基于Java开发的，需要JDK环境。 C：HBase主从节点间需要通过SSH进行远程管理和启动进程，需配置免密登录。 D：需要配置`/etc/hosts`文件，确保主机名和IP地址正确映射。

---

### 37. 第1题：在core-site.xml文件中，用于指定HDFS的默认文件系统的属性是？

> ✅ **答案：** B fs.defaultFS
> 📝 **解析：** * `fs.defaultFS`是 Hadoop 核心配置文件 `core-site.xml`中用于指定默认文件系统 URI 的属性，通常配置为 `hdfs://namenode:port`。

---

### 38. 第28题：在core-site.xml文件中，HDFS默认文件系统的属性名是？

> ✅ **答案：** D fs.defaultFS
> 📝 **解析：** * `fs.defaultFS`是 Hadoop 核心配置文件 `core-site.xml`中用于指定默认文件系统 URI 的关键属性（例如 `hdfs://namenode:8020`）。其他选项：A是YARN配置，B是HDFS副本数配置，C是MapReduce运行框架配置。

---

### 39. 第38题：以下哪些是Hadoop的配置文件？

> ✅ **答案：** A、B、C、D
> 📝 **解析：** * 这四个选项均为Hadoop的核心配置文件： core-site.xml：Hadoop核心配置（如默认文件系统）。 hdfs-site.xml：HDFS守护进程配置（如副本数）。 yarn-site.xml：YARN守护进程配置（如ResourceManager地址）。 mapred-site.xml：MapReduce配置（如指定运行在YARN上）。

---

### 40. 第39题：在配置Hadoop时，以下哪些属性需要在core-site.xml或hdfs-site.xml中设置？

> ✅ **答案：** A、B、C
> 📝 **解析：** * A dfs.replication：HDFS文件副本数，配置在 `hdfs-site.xml`中。 B fs.defaultFS：默认文件系统URI，配置在 `core-site.xml`中。 C hadoop.tmp.dir：Hadoop临时目录基路径，配置在 `core-site.xml`中。 D yarn.resourcemanager.hostname：YARN资源管理器主机名，配置在 `yarn-site.xml`中，因此不符合题意。

---

## 判断题（13题）

### 1. HDFS中，操作文件时只能使用相对路径。

- **A.** 对
- **B.** 错

> ✅ **答案：** 见解析

---

### 2. hadoop fs -ls 命令可以递归列出子目录内容。

- **A.** 对
- **B.** 错

> ✅ **答案：** 见解析

---

### 3. hadoop fs -put 命令会自动删除本地文件。

- **A.** 对
- **B.** 错

> ✅ **答案：** 见解析

---

### 4. hadoop fs -appendToFile 命令可以将多个本地文件追加到同一个 HDFS 文件中。

- **A.** 对
- **B.** 错

> ✅ **答案：** 见解析

---

### 5. HDFS中，hadoop fs -mkdir 命令默认可以创建多级目录。

- **A.** 对
- **B.** 错

> ✅ **答案：** 见解析

---

### 6. HDFS适合存储大量小文件。

- **A.** 对
- **B.** 错

> ✅ **答案：** 错
> 📝 **解析：** HDFS不适合存储大量小文件，因为这会导致NameNode的元数据压力过大，影响性能。

---

### 7. HDFS支持并发写入。

- **A.** 对
- **B.** 错

> ✅ **答案：** 错
> 📝 **解析：** HDFS不支持并发写入，它更适合一次写入、多次读取的场景。

---

### 8. HDFS的NameNode负责存储实际的数据块。

- **A.** 对
- **B.** 错

> ✅ **答案：** 错
> 📝 **解析：** NameNode负责管理元数据，而实际的数据块是由DataNode存储的。

---

### 9. HDFS的副本数默认为3。

- **A.** 对
- **B.** 错

> ✅ **答案：** 对
> 📝 **解析：** HDFS默认的副本数为3，这是为了提高数据的容错性和可靠性。

---

### 10. HDFS的副本放置策略考虑了机架感知。

- **A.** 对
- **B.** 错

> ✅ **答案：** 对
> 📝 **解析：** HDFS的副本放置策略会优先将副本放在不同机架上，以提高容错性和数据可用性。

---

### 11. 第15题（判断题）

> ✅ **答案：** B（错）
> 📝 **解析：** 解析：`cat`命令的主要功能是查看文件内容、合并文件、显示行号等，但它不具备编辑文件的功能。在 Linux 中，编辑文件通常使用 `vim`、`nano`、`gedit`等文本编辑器。

---

### 12. 第14题（判断题）

> ✅ **答案：** B（错）
> 📝 **解析：** 解析：在 Linux 中，传统文件系统（如 ext3/ext4）限制文件名的最大长度为 255 个字符（字节），不能超越。虽然某些现代文件系统可能支持更长路径，但单个文件名本身仍受此限制。

---

### 13. 第13题（判断题）

> ✅ **答案：** B（错）
> 📝 **解析：** 解析：Linux 没有像 Windows 那样强制的“扩展名”概念。文件名中最后一个“.”后面的字符串只是普通字符的一部分，并不被视为特殊的扩展名。系统不会根据它自动关联程序。 把我问你的题目总结一下，格式是题目+四个选项+正确答案 以下是您上传的三张图片中所有题目的总结： 题目 15（5.0分）：在Linux中，cat命令可以用于编辑文件。 A 对 B 错 正确答案：B 题目 14（5.0分）：在Linux中，文件名的长度可以超过255个字符。 A 对 B 错 正确答案：B 题目 13（5.0分）：在Linux中，文件名中最后一位的字符串被视为扩展名。 A 对 B 错 正确答案：B 好的，这

---

## 填空题（33题）

### 1. HDFS中，用于将本地文件复制到HDFS的命令是hdfs dfs -______，其功能与put命令相似。

> ✅ **答案：** 见解析

---

### 2. HDFS中，执行任何Shell命令之前，需要先启动HDFS服务，使用的命令是______。

> ✅ **答案：** 见解析

---

### 3. HDFS中，用于将本地文件移动到HDFS并删除本地源文件的命令是hdfs dfs -______。

> ✅ **答案：** 见解析

---

### 4. 在HDFS中，查看文件内容的命令是hdfs dfs -______，该命令会将指定路径下的文件内容输出到标准输出。

> ✅ **答案：** 见解析

---

### 5. 将HDFS中的文件内容输出到标准输出的命令是 ______，该命令可以使用 ______ 选项忽略CRC校验。

> ✅ **答案：** (1) hdfs dfs -cat (2) -ignoreCrc
> 📝 **解析：** hdfs dfs -cat 用于查看文件内容，-ignoreCrc 用于忽略 CRC 校验。

---

### 6. YARN 的全称是 Yet Another ___ Negotiator，它是 Hadoop 2.0 中的核心资源管理系统。

> ✅ **答案：** (1) Resource
> 📝 **解析：** YARN 是 Yet Another Resource Negotiator 的缩写，意为另一种资源协调器，专为 Hadoop 设计以实现高效的资源管理和任务调度。

---

### 7. YARN 的两个核心组件是 ResourceManager 和 ___Manager，它们分别负责集群资源的协调与节点级别的资源管理。

> ✅ **答案：** (1) Node
> 📝 **解析：** YARN 的架构包括 ResourceManager 负责全局资源管理，以及 NodeManager 负责每个节点的本地资源管理和容器执行。

---

### 8. HDFS中用于删除文件的命令是 ______，其中 ______ 选项用于递归删除目录。

> ✅ **答案：** (1) hdfs dfs -rm (2) -r
> 📝 **解析：** hdfs dfs -rm 用于删除文件，-r 用于递归删除目录。

---

### 9. YARN 中最小的资源抽象单位是 ___，它通常包括 CPU、内存等基本资源。

> ✅ **答案：** (1) Container
> 📝 **解析：** Container 是 YARN 中资源分配的基本单元，封装了 CPU、内存等资源，任务在其内部运行。

---

### 10. HDFS中用于列出目录内容的命令是 ______，该命令可以使用 ______ 选项来递归列出子目录。

> ✅ **答案：** (1) hdfs dfs -ls (2) -R
> 📝 **解析：** hdfs dfs -ls 用于列出目录内容，-R 选项用于递归列出子目录。

---

### 11. ApplicationMaster 是 YARN 架构中的重要部分，它负责与 ___Manager 协商资源，并与 NodeManager 合作执行任务。

> ✅ **答案：** (1) Resource
> 📝 **解析：** ApplicationMaster 是每个应用程序的主控程序，它与 ResourceManager 通信以获取资源，并通过 NodeManager 启动任务。

---

### 12. 将HDFS中的文件合并到本地文件的命令是 ______，其中 ______ 选项用于在每个文件末尾添加换行符。

> ✅ **答案：** (1) hdfs dfs -getmerge (2) -nl
> 📝 **解析：** hdfs dfs -getmerge 用于合并文件，-nl 用于添加换行符。

---

### 13. 在HDFS中，使用 ______ 命令可以创建多级目录，其中 ______ 参数用于实现递归创建。

> ✅ **答案：** (1) hdfs dfs -mkdir (2) -p
> 📝 **解析：** hdfs dfs -mkdir -p 用于创建多级目录，-p 表示递归创建。

---

### 14. NameNode格式化的命令是____，启动HDFS集群的命令是____。

> ✅ **答案：** (1) hdfs namenode -format (2) start-dfs.sh

---

### 15. HDFS Java API中，读取或设置配置信息的是 ____，文件系统对象是____。

> ✅ **答案：** (1) Configuration (2) FileSystem

---

### 16. MapReduce程序中，Map阶段的默认输入键值对类型是____和____。

> ✅ **答案：** (1) LongWritable(行号) (2) Text(行内容)

---

### 17. 在HDFS中创建/one/two的命令是 ____，列出/three目录下所有文件和目录的命令是 ____。

> ✅ **答案：** (1) hdfs dfs –mkdir –p /one/two (2) hdfs dfs –ls –R /three

---

### 18. Hadoop中，负责分布式存储的组件是____，负责分布式计算的组件是____。

> ✅ **答案：** (1) HDFS(分布式文件系统) (2) MapReduce(分布式计算框架)

---

### 19. HDFS采用主从架构，其中____1____负责管理文件系统的命名空间和客户端对文件的访问，____2____负责存储实际的数据块并处理数据块的读写请求。在HDFS写数据流程中，客户端首先向____3____请求上传文件，该节点会返回一个包含数据节点列表的响应，客户端随后将数据分成____4____大小的数据块（默认值），并按顺序写入这些数据节点。

> ✅ **答案：** 见解析

---

### 20. YARN的核心组件包括____1____（资源管理器）、____2____（节点管理器）和____3____（应用程序管理器）。当客户端提交应用程序时，____4____会为其分配第一个容器，并在该容器中启动____5____，负责后续的资源申请和任务调度。

> ✅ **答案：** 见解析

---

### 21. MapReduce的计算过程分为____1____、____2____和____3____三个阶段。其中，____4____阶段负责将输入数据分割成键值对并进行初步处理，____5____阶段负责对Map输出的键值对进行分组和排序，____6____阶段负责对分组后的数据进行汇总计算得到最终结果。

> ✅ **答案：** 见解析

---

### 22. Hadoop的三大核心组件是____1____（分布式文件系统）、____2____（分布式计算框架）和____3____（资源管理系统）。此外，Hadoop生态系统还包括用于数据仓库的____4____、用于NoSQL数据库的____5____和用于流处理的____6____等工具。

> ✅ **答案：** 见解析

---

### 23. 第5题（单选题）

> ✅ **答案：** A
> 📝 **解析：** 解析：`touch`命令可创建空文件（若文件存在则更新时间戳）；`mkdir`建目录，`cp`复制，`cat`查看/合并。

---

### 24. 第2题（单选题）

> ✅ **答案：** A
> 📝 **解析：** 解析：`wc`（word count）统计文件的行数、单词数、字节数；`grep`搜索，`find`查找文件，`sort`排序。

---

### 25. HBase分布式模式细分为伪分布式与完全分布式，其中完全分布式模式只能运行在（ ）上？

> ✅ **答案：** D
> 📝 **解析：** * HBase是完全构建在Hadoop之上的数据库，其底层依赖Hadoop分布式文件系统（HDFS）来存储海量数据，因此完全分布式模式必须运行在HDFS之上。

---

### 26. 配置HBase环境变量时，一般在以下哪个文件中设置root用户的环境变量？

> ✅ **答案：** C
> 📝 **解析：** * 在Linux系统中，系统级或root用户的环境变量通常配置在 `/etc/profile` 文件中，修改后执行`source /etc/profile`使其生效。`/etc/hosts`用于配置主机映射。

---

### 27. 第1题 (3.0分) HBase中存储数据的底层文件系统是？

> ✅ **答案：** 见解析

---

### 28. 以下关于 * `mkdir -p`命令可以递归创建目录，即如果父目录不存在，会自动先创建父目录 的描述，正确的是？

> ✅ **答案：** 见解析
> 📝 **解析：** * `mkdir -p`命令可以递归创建目录，即如果父目录不存在，会自动先创建父目录。例如 `mkdir -p a/b/c`会创建a，然后a下的b，然后b下的c。

---

### 29. 以下关于 * i节点（inode）是文件系统中用于存储文件元数据的数据结构 的说法，错误的是？

> ✅ **答案：** 见解析
> 📝 **解析：** * i节点（inode）是文件系统中用于存储文件元数据的数据结构。 A 正确：i节点包含文件大小、指向数据块的指针等信息。 B 正确：i节点记录文件占用的块数。 C 错误：i节点和文件不是一一对应的。在Linux中，硬链接（hard link）是指向同一个i节点的不同文件名，所以多个文件名可以对应同一个i节点。 D 正确：i节点连接了文件的逻辑结构（文件名）和物理结构（数据块）。

---

### 30. 以下关于 * A `chmod`是改变文件权限的命令 的描述，正确的是？

> ✅ **答案：** 见解析
> 📝 **解析：** * A `chmod`是改变文件权限的命令。 B `touch`是创建空文件或更新文件时间戳的命令。 C `cat`是查看文件内容的命令。 D `chown`是改变文件所有者的命令（change owner）。

---

### 31. 以下关于 * FTP（文件传输协议）使用两个端口： 端口21：用于控制连接（发送命令） 的描述，正确的是？

> ✅ **答案：** 见解析
> 📝 **解析：** * FTP（文件传输协议）使用两个端口： 端口21：用于控制连接（发送命令）。 端口20：用于数据传输（主动模式）。 所以选C（20和21）。

---

### 32. 以下关于 * `usermod`命令用于修改已有用户的属性 的说法，错误的是？

> ✅ **答案：** 见解析
> 📝 **解析：** * `usermod`命令用于修改已有用户的属性。 A 删除指定的账户和对应的主目录：这是 `userdel -r`命令的功能，不是 `usermod`的功能。 B 账户重命名：可以用 `usermod -l 新用户名 旧用户名`。 C 加锁与解锁用户账户：可以用 `usermod -L`（加锁）和 `usermod -U`（解锁）。 D 对用户密码进行加锁或解锁：虽然密码加锁通常用 `passwd -l`，但 `usermod`也可以间接影响密码状态。

---

### 33. 以下关于 * A `ls -a`：`-a`（all）选项会显示所有文件，包括以`.`开头的隐藏文件 的说法，错误的是？

> ✅ **答案：** 见解析
> 📝 **解析：** * A `ls -a`：`-a`（all）选项会显示所有文件，包括以`.`开头的隐藏文件。 B `ls`：默认只显示非隐藏文件。 C `ls -l`：以长列表格式显示文件详细信息，但不包含隐藏文件。 D `ls -d`：显示目录本身的信息，而不是目录内的内容。 祝您答题顺利！

---

## 简答题（20题）

### 1. 编写shell程序，接收用户从键盘输入的10个整数（使用循环操作），求出其总和、最大值、最小值

> ✅ **答案：** #!/bin/bash        read max          min=$maxsum=$max           i=1while [$i –lt 10]     do  read  x          （（sum+=x））         if [ $max –lt  $x ]     then     max=$x                    fi  if [ $ x –lt  $min ]     then     min=$x       fi     i=`expr $i + 1`    doneecho "sum = $sum ;  max = $max   min = $min "

---

### 2. linux的目录结构和各个目录的作用

> ✅ **答案：** 见解析

---

### 3. 使用root用户进入普通用户主目录/home/test下新建一个目录temp，将当前工作目录改为temp，在temp下新建2个长度为0的文件temp1、temp2，然后把temp2移到其父目录中并改名为file2。 ### 2. (简答题)详细说明ls -l命令长格式输出如下结果各部分的含义（前10位详细说明）。lrwxrw-r-- 2 test group 2048 2020-1-17 13:48 myfile ### 3. (简答题)需要增加一个新的用户账号zhangsa，为新用户设置初始密码（只需要回答设置密码指令即可，密码设置过程不用描述），锁定用户账号lisi，并删除用户账号wangwu。 ### 2. (简答题)用Shell编程，判断一文件是不是字符设备文件，如果是将其拷贝到 /dev目录下。 ### 3. (简答题)使用vi进行编辑的时候，几种工作模式之间是如何进行切换的？

> ✅ **答案：** cd /root/ test                   mkdir temp                     cd temp                       touch temp1 temp2                  mv temp1 ../file2 ## 一. 简答题（共3题） ### 1. (简答题)shell编程：判断/root/test文件是否存在，如果存在则判断该文件是否为普通文件，如果为普通文件，则将该文件保存至当前所处工作目录中，并打印出“完成”；如果该文件不存在则打印出“文件不存在”。 #!/bin/bash          if test -e /root/test     then                if test -f /root/test       then                 echo "这是普通文件"   fielse              echo "文件不存在"fi useradd zhangsan        passwd  zhangsan        passwd –l lisi        userdel wangwu ​ ## 一. 简答题（共3题） ### 1. (简答题)介绍一下shell是什么 #!/bin/bash       read f         if [  -c  $f  ]    then           cp  $f  /dev    else           echo  "Not a character device!"   fi

---

### 4. 编写shell，实现自动删除30个用户账号，账号名字为test01至test30.

> ✅ **答案：** #!/bin/bash            i=1               while [ $i -le 30 ]          do                userdel -r stud${i}         i=$(($i+1 ))            done               if  [ $i -eq30 ]          echo "remove sucessful!"       else                echo " remove fail"         fi;;

---

### 5. Linux系统的特点有哪些

> ✅ **答案：** 见解析

---

### 6. 请使用shell编程实现菜单管理功能，shell脚本文件名为：test3.sh。要求如下：输出提示语句：“Please choose between number 1-3 ”，用户输入数字选择相应操作；如果选择数字1，可以实现“显示当前用户所处的工作目录及日期”的功能；如果选择数字2，可以实现“切换当前目录到主目录”的功能；如果选择数字3，可以实现“列出当前目录下的所有内容，并输出当前所处的目录位置”的功能；要求通过获取用户从键盘输入的信息值，利用case语句进行相应的处理。

> ✅ **答案：** #!/bin/bash                       read -p "Please choose between number 1-3:" response      case $response in                     1)pwd                          date;;                          2)cd $HOME;;                      3)ls -a                          echo "the current directory is `pwd`  ";;          esac

---

### 7. 说明linux的目录结构和各个目录的作用

> ✅ **答案：** 见解析

---

### 8. 设计一个shell程序计算n的阶乘。要求：(1) 从命令行接收参数n（位置参数）。(2) 在程序开始后立即判断n的合法性，即是否有参数，若有是否为正整数，若非法请给错误提示。(3) 最后出计算的结果，并显示结果。

> ✅ **答案：** #!/bin/bash                        if [ $# -eq 0 ]                     then  echo "$0 no Params. "; exit 0; fi x=`echo $1 ` if [[ x -le 0 ]]                    then echo "Input: $* error!" exit 1 fi fact=1 tmp=1 while [ $tmp -le $1 ]                 do (( fact =fact*tmp))                    ((tmp=++tmp))                      done echo "fact=$fact"

---

### 9. 进程、线程、程序三者的区别

> ✅ **答案：** 见解析

---

### 10. 使用root用户在root主目录下不改变工作区的前提下进行如下操作：（1）在普通用户主目录/home/sundk下一次性递归新建一个目录dir1/dir2/dir3。（2）在dir1目录下新建空文件file1（3）在dir2目录下新建空文件file2（4）在dir3目录下新建空文件file3。（5）将file3移动到普通用户主目录/home/sund

> ✅ **答案：** （1）mkdir -p /home/sundk/dir1/dir2/dir3（2分）（2）touch /home/sundk/dir1/file1（2分）（3）touch /home/sundk/dir1/dir2/file2（2分）（4）touch /home/sundk/dir1/dir2/dir3/file3（2分）（5）mv /home/sundk/dir1/dir2/dir3/file3 /home/sundk（2分）

---

### 11. 编写Shell脚本生成一个100以内的随机数,提示用户猜数字,根据用户的输入,提示用户猜对了,猜小了或猜大了,直至用户猜对脚本结束。并记录用户的猜测次数。

> ✅ **答案：** #!/bin/bash            #随机生成1-100之间的整数num=$[ $RANDOM % 100 + 1 ]   echo "欢迎进入猜数字游戏："echo ">>>>>"read -p "请您输入一个1-100之间的整数：" guess  count=0   #1分while [ $guess -ne $num ]   #while  do done   do  if [ $guess -gt $num ]              then   let count++                  echo "您猜大了！"  elif [ $guess -lt $num ]             then   let count++   echo "您猜小了！"  fi    read -p "请重新输入进行猜测：" guessdoneif [ $guess -eq $num ]            then  let count++  echo "恭喜您，您猜测正确。您一共猜测了$count次"fi

---

### 12. 请编写一个名为 test3.sh 的 Shell 脚本，实现简易菜单选择功能，具体要求如下：（1）脚本运行后，首先输出提示语句：“请选择1-3的数字:”，引导用户从键盘输入数字 1、2 或 3 选择对应操作；（2）若用户输入数字 1，需实现「展示当前用户的工作目录完整路径，并输出系统当前的日期信息」的功能；（3）若用户输入数字 2，需实现「将当前工作目录切换至当前用户的主目录（即 HOME 目录）」的功能；（4）若用户输入数字 3，需实现「列出当前目录下的全部内容（包含隐藏文件），同时明确输出当前所处的目录位置」的功能；（5）脚本需通过 read 命令获取用户的键盘输入信息，并利用 case 条件语句对不同输入进行分支处理，执行对应的操作。

> ✅ **答案：** #!/bin/bash                      read -p "请选择1-3的数字:" response           case $response in                    1)pwd                          date;;                         2)cd $HOME;;                      3)ls -a                         echo "the current directory is  `pwd`   ";;       esac                           1分

---

### 13. 某系统管理员在日常工作中遇到以下命令查看文件，请结合 cat、more、less、head、tail 的特性，分析每个命令的特点。

> ✅ **答案：** cat 命令：cat是连接（concatenate）命令的缩写，通常与more搭配使用。它可以将多个文件合并为一个文件输出，并从上到下显示整个文件的内容。如果你需要查看一个文件的内容，直接在命令后面接文件名即可，例如 cat file.txt。cat 命令还可以进行一些额外的操作，例如向已存在的文件追加内容等more 命令：more命令比较简单，根据窗口的大小进行分页显示文件内容。从前向后读取文件，因此在启动时就加载整个文件。在读取文件的过程中，如果按下空格键，将显示下一页内容；按下 q 键则退出查看less 命令：less是对文件或其它输出进行分页显示的工具。与more类似，但提供更多功能，如向前翻页、搜索关键词等。按下空格键向下滚动一页；按下 b 键向上滚动一页；按下 / 键后输入关键词进行搜索head 命令：head命令用于显示一个文件的前几行内容。默认情况下，head会显示文件的前10行内容。如果想要显示更多行，可以在命令后面接数字，例如 head -n 20 file.txt 将显示文件的前20行内容tail 命令：tail命令用于显示一个文件的最后几行内容。默认情况下，tail会显示文件的最后10行内容。如果想要显示更多行，可以在命令后面接数字，例如 tail -n 20 file.txt 将显示文件的最后20行内容

---

### 14. 请简述 hdfs dfs -put 和 hdfs dfs -moveFromLocal 的区别。

> ✅ **答案：** 见解析

---

### 15. 根据提示写出HDFS的shell命令(1)查看HDFS根目录下的文件(2)在HDFS/目录下创建目录20251106(3)将本地的文件aaa.txt复制到HDFS的20251106文件中(4)查看HDFS中的aaa.txt的内容(5)将本地的文件bbb.txt内容追加到HDFS的aaa.txt文件中(6)将本地的文件aaa.txt文件复制到HDFDS改名为a01.txt后，本地文件删除。(7)将HDFS的20251106中的aaa.txt文件复制到本地文件系统(8)删除HDFS的20251106文件夹

> ✅ **答案：** 见解析

---

### 16. 介绍一下YARN的工作流程。

> ✅ **答案：** （1）客户端向ResourceManager提交应用程序。 （2）ResourceManager中的ApplicationsManager接收请求，并与NodeManager协商启动第一个容器，并在容器中启动一个ApplicationMaster。 （3）ApplicationMaster被创建后首先向ResourceManager注册，这样用户可以直接通过ResourceManager查看应用程序的运行状态。 （4）ApplicationMaster向ResourceManager中的Scheduler申请和领取资源。（5）一旦ApplicationMaster申请到资源后，就会与该容器所在的NodeManager通信，要求它启动任务。（6）NodeManager启动容器运行任务。（7）ApplicationMaster会监控任务的运行状态并汇报给ApplicationsManager。

---

### 17. 编写下列操作的Hadoop Shell命令或系统命令：（1）在HDFS上创建多级目录‘/user/team/project/data’； （2）将本地‘/home/stu/data.txt’文件上传到HDFS的‘/user/team/project/data’目录； （3）查看HDFS中‘/user/team/project/data’目录下的文件详细信息； （4）将HDFS中‘/user/team/project/data/data.txt’文件下载到本地‘/home/stu/backup’目录； （5）删除HDFS中‘/user/team/project’目录及其所有子内容。

> ✅ **答案：** （1）创建多级目录： hdfs dfs -mkdir -p /user/team/project/data  （2）本地文件上传： hdfs dfs -put /home/stu/data.txt /user/team/project/data （或hdfs dfs -copyFromLocal /home/stu/data.txt /user/team/project/data，两者均实现本地到HDFS的上传） （3）查看目录详细信息： hdfs dfs -ls -l /user/team/project/data （4）HDFS文件下载： # 先创建本地备份目录（若不存在） mkdir -p /home/stu/backup # 下载文件 hdfs dfs -get /user/team/project/data/data.txt /home/stu/backup （或hdfs dfs -copyToLocal /user/team/project/data/data.txt /home/stu/backup） （5）删除目录及子内容： hdfs dfs -rm -r /user/team/project

---

### 18. 描述一下HDFS的写数据流程。

> ✅ **答案：** （1）客户端向NameNode发送写数据的请求。    （2）NameNode接收到请求后会检查客户端是否具有写数据权限，上传的目录是否存在检查当前HDFS是否存在同名文件，检查通过后响应客户端同意上传。（3）客户端将文件进行逻辑切片并且向NameNode请求上传第一个block块，NameNode向客户端返回三个服务器节点。（4）客户端与最近的节点建立pipleline连接，此节点与第2个节点建立连接第2个节点与第3个节点建立连接。  （5）客户端开始上传第一个块，节点1接收到数据会同步到节点2，节点2会同步到节点3，直到第一个块上传完。（6）客户端以相同的步骤上传其他的block块。

---

### 19. 为什么Hadoop不适合处理大量小文件，并说明常见的解决方案。

> ✅ **答案：** 不适合处理大量小文件的原因：- 元数据存储压力：HDFS中每个文件对应一条元数据（存储在NameNode内存），大量小文件会耗尽NameNode内存，导致集群性能下降；- 读取效率低：小文件读取需频繁与NameNode交互获取元数据，且每个小文件的Block传输开销占比高，降低整体读取吞吐量；- Map任务并行度浪费：默认一个小文件对应一个Split和一个Map任务，大量小文件会产生过多Map任务，导致任务调度开销大于计算开销。常见解决方案：- 文件合并：通过Shell命令（如hadoop fs -getmerge）或程序将小文件合并为大文件后上传至HDFS；- 采用SequenceFile/MapFile：将多个小文件封装为SequenceFile（键值对格式）或MapFile（排序的SequenceFile），减少元数据数量；- 使用HBase：HBase适合存储小文件，可将小文件作为单元格数据存储，减少HDFS元数据压力；- 引入缓存层：通过Flume或Spark Streaming等组件实时聚合小文件，再批量写入HDFS。

---

### 20. 第15题：用户在CentOS 7系统中安装Hadoop后...以下哪个命令序列可以完成该任务？

> ✅ **答案：** B mkdir /opt/hadoop-record; cd /opt/hadoop-record; mkdir name secondary data temp
> 📝 **解析：** * 题目要求在`/opt/hadoop-record/`目录下创建四个子目录。选项B首先创建了父目录，进入该目录后，使用`mkdir`一次性创建了四个指定的子目录，语法和路径均正确。选项A使用了`touch`（创建空文件而非目录），选项C和D的路径不符合题干描述的`/opt/hadoop-record`。

---

