第一章
题量: 15 满分: 100
作答时间:07-29 11:43至08-21 11:43
智能分析
一. 单选题（共7题）
1. (单选题)
Redis数据库的起源于以下哪家公司（    ）。



A.
Apache Software Foundation 公司



B.
微软（Microsoft）



C.
意大利的创业公司Merzia



D.
IBM



我的答案:C:意大利的创业公司Merzia ;
2. (单选题)
以下哪个Redis的版本是稳定版本（    ）



A.
5.3.4



B.
1.3.5



C.
2.1.4



D.
1.2.1



我的答案:D:1.2.1 ;
3. (单选题)
关于NoSQL的说法，错误的一项是（   ）。



A.
NoSQL数据库的代表有Redis、Oracle、MangoDB



B.
NoSQL，即 Not only SQL,是关系型数据库的一种良好补充

C.
NoSQL泛指非关系型数据库，内存存储，访问速度非常快



D.
为了解决高并发、大数据存储而产生的一种数据库解决方案



我的答案:A:NoSQL数据库的代表有Redis、Oracle、MangoDB ;
4. (单选题)
Redis支持的数据结构中，以下描述不正确的是（   ）。



A.
列表类型



B.
字符串类型



C.
逻辑类型



D.
散列类型



我的答案:C:逻辑类型 ;
5. (单选题)
已知数据库中存储了key/value类型的结构数据：name -> “ Jack”，如何获取Jack的值（   ）。



A.
get  “Jack”



B.
get Jack



C.
get name



D.
set name “Jack”



我的答案:C:get name ;
6. (单选题)
Redis数据库默认的端口是（      ）。



A.
1521



B.
3386



C.
6379



D.
8080



我的答案:C:6379 ;
7. (单选题)
Redis默认支持多少个数据库



A.
1个



B.
8个



C.
5个



D.
16个



我的答案:D:16个 ;
二. 多选题（共4题）
8. (多选题)
退出Redis客户端的操作或命令，正确的有（   ）。



A.
指令quit 

B.
指令：q



C.
指令exit



D.
指令ctrl+c 



我的答案:ABC:指令quit ; 指令：q ; 指令exit ;
9. (多选题)
以下关于NoSQL数据库的应用场景描述，正确的有



A.
对于给定key，比较容易映射复杂值的环境



B.
对数据库性能要求较高



C.
灵活性要求不太强的IT系统



D.
数据模型比较简单



我的答案:ABD:对于给定key，比较容易映射复杂值的环境 ; 对数据库性能要求较高 ; 数据模型比较简单 ;
10. (多选题)
NoSQL数据库的分类有（      ）。



A.
文档型数据库



B.
图形数据库



C.
列存储数据库



D.
键值存储（Key/Value）数据库



我的答案:ABCD:文档型数据库 ; 图形数据库 ; 列存储数据库 ; 键值存储（Key/Value）数据库 ;
11. (多选题)
以下关于Redis数据库的特性，描述正确的是（   ）。



A.
内存存储与持久化机制



B.
支持多种类型存储结构



C.
功能比较丰富，可以做缓存、队列、消息订阅/发布



D.
简单稳定（相比SQL而言更加简单）



我的答案:ABCD:内存存储与持久化机制 ; 支持多种类型存储结构 ; 功能比较丰富，可以做缓存、队列、消息订阅/发布 ; 简单稳定（相比SQL而言更加简单） ;
三. 填空题（共2题）
12. (填空题)
Redis在16个数据库之间可以相互切换，如果要切换到数据库4，则使用           实现。



我的答案：
(1) select 4
13. (填空题)
            、                    、                            简写为Redis，是完全开源免费的，是一个高性能的Key/Value数据库。



我的答案：
(1) REmote
(2) DIctionary
(3) Server
四. 简答题（共2题）
14. (简答题)
Redis的应用场景有哪些？



我的答案：
①缓存（热点数据/页面缓存，降低数据库压力）；②计数器、限流（incr 实现访问量、点赞数、限流）；③排行榜（sorted set）；④分布式会话共享（session 共享）；⑤消息队列（list/stream）；⑥分布式锁（setnx）；⑦共同好友/关注（set 集合运算）。
教师批语：
学生未作答。
15. (简答题)
什么是NoSQL？



我的答案：
NoSQL 即 Not only SQL，泛指非关系型数据库，是对传统关系型数据库（SQL）的补充。它用键值对、文档、列族、图等非表格方式存储数据，通常基于内存、读写速度快，适合高并发、大数据量、数据模型灵活的场景；但一般不具备完整的 ACID 事务特性。
教师批语：
学生未作答。
String类型
题量: 27 满分: 100
作答时间:07-30 11:15至08-21 18:00
智能分析
一. 单选题（共10题）
1. (单选题)获取单个 key 对应 value 的命令是(        )
A. mget
B. append
C. get
D. strlen
我的答案:C:get;
2. (单选题)给字符串数值自增 1 的命令是(        )
A. incr
B. incrbyfloat
C. decr
D. incrby
我的答案:A:incr;
3. (单选题)设置单个键值对数据的基础命令是(        )
A. set
B. mset
C. del
D. get
我的答案:A:set;
4. (单选题)Redis 数值操作支持的最大值对应 Java 中哪种类型上限(        )
A. double
B. int
C. long
D. float
我的答案:C:long;
5. (单选题)设置 key 多少秒后过期的命令是(        )
A. append
B. set
C. psetex
D. setex
我的答案:D:setex;
6. (单选题)Redis 字符串单个 value 最大存储容量为(        )
A. 128MB
B. 256MB
C. 512MB
D. 1GB
我的答案:C:512MB;
7. (单选题)查看单个命令帮助文档的指令是(        )
A. quit
B. help @string
C. help get
D. clear
我的答案:C:help get;
8. (单选题)Redis 中所有数据存储的 key 的数据类型固定为(        )
A. Hash
B. 数字
C. List
D. 字符串
我的答案:D:字符串;
9. (单选题)Redis 客户端退出指令不包含以下哪个(        )
A. ESC
B. exit
C. clear
D. quit
我的答案:C:clear;
10. (单选题)一次性获取多个 key 对应值的命令是(        )
A. strlen
B. mget
C. del
D. get
我的答案:B:mget;
二. 多选题（共5题）
11. (多选题)Redis 字符串数值递减相关命令包含(        )
A. incrbyfloat
B. decr
C. decrby
D. incr
我的答案:BC:decr; decrby;
12. (多选题)以下属于 Redis 客户端基础工具命令的是(        )
A. clear
B. setex
C. help
D. quit
我的答案:ACD:clear; help; quit;
13. (多选题)Redis 使用 string 类型的典型业务场景有(        )
A. 限时投票活动
B. 数据库主键自增 ID 生成
C. 用户结构化完整信息 JSON 缓存
D. 网站大 V 粉丝数缓存
我的答案:ABCD:限时投票活动; 数据库主键自增 ID 生成; 用户结构化完整信息 JSON 缓存; 网站大 V 粉丝数缓存;
14. (多选题)以下属于 Redis 字符串基础操作命令的有(        )
A. get
B. hset
C. set
D. mget
E. mset
我的答案:ACDE:get; set; mget; mset;
15. (多选题)Redis 支持的五大基础数据类型包含(        )
A. set
B. sorted_set
C. string
D. list
E. hash
我的答案:ABCDE:set; sorted_set; string; list; hash;
三. 填空题（共8题）
16. (填空题)
查询命令分组帮助信息使用指令____+ 组名。

我的答案：
(1) help
17. (填空题)
psetex 设置 key 过期时间单位为____，setex 单位为____。

我的答案：
(1) 毫秒
(2) 秒
18. (填空题)
Redis 单线程执行所有命令，所有操作具备____性，天然解决并发计数问题。

我的答案：
(1) 原子性
19. (填空题)
append 命令可以向已有字符串尾部____内容，key 不存在则新建。

我的答案：
(1) 追加
20. (填空题)
strlen 命令作用是获取字符串____。

我的答案：
(1) 长度
21. (填空题)
删除指定 key 数据的命令是____。

我的答案：
(1) del
22. (填空题)
Redis 本质是一个大 Map，数据存储格式为____:____，数据类型指的是____部分的类型。



我的答案：
(1) key
(2) value
(3) value
23. (填空题)
incrbyfloat 命令支持对数值进行____精度的增减运算。

我的答案：
(1) 浮点（小数）
四. 简答题（共4题）
24. (简答题)
简述 Redis String 类型两种存储用户粉丝数据的实现方案，并说明各自优缺点。

我的答案：
方案一：单个键存粉丝总数，如 user:1001:fans，用 incr/decr 增减。优点：命令简单、原子计数、内存占用小；缺点：只能存数量，无法保存每个粉丝详情。方案二：用 set 存粉丝列表（或用 String 存 JSON 数组）。优点：可保存每个粉丝详情、支持去重与集合运算；缺点：内存占用大、操作相对复杂，JSON 修改需整体读写。
教师批语：
学生未作答。
25. (简答题)
对比单条 set/get 与 mset/mget 批量操作的适用场景，说明批量操作优势。

我的答案：
单条 set/get 适合一次只读写一个 key 的场景；mset/mget 适合一次读写多个 key 的场景。批量操作优势：①减少网络往返次数（RTT），提高吞吐量；②减少客户端等待时间，整体性能更高。
教师批语：
学生未作答。
26. (简答题)
简述 Redis 中 string 类型的特点，并列举至少 5 个常用操作命令。

我的答案：
特点：①Redis 最基础、最常用的类型；②key 固定为字符串，value 最大 512MB；③value 可为字符串、数字（可自增自减）、二进制数据；④数值操作原子执行，可安全计数。常用命令：set、get、mset、mget、append、strlen、incr、decr、incrby、decrby、setex、del 等。
教师批语：
学生未作答。
27. (简答题)
说明 incr/decr 系列数值操作的底层原理，以及使用时的两点注意事项

我的答案：
原理：Redis 单线程串行执行命令，incr/decr 对同一 key 的数值操作天然原子，不会出现并发竞态，可安全用于计数。注意事项：①value 必须是整数（浮点数用 incrbyfloat）；②数值不能超过 long（64 位有符号整数）范围；③对非数字字符串执行会报错。
教师批语：
学生未作答。
hash类型
题量: 27 满分: 100
作答时间:07-30 14:36至08-21 18:00
智能分析
一. 单选题（共10题）
1. (单选题)下列哪种数据类型适合存储对象、可单独修改对象某一个属性，无需整体更新 JSON?(        )
A. string
B. hash
C. list
D. set
我的答案:B:hash;
2. (单选题)向 hash 中添加 / 修改单个字段数据的命令是(        )
A. hget
B. hset
C. hdel
D. hlen
我的答案:B:hset;
3. (单选题)获取 hash 中单个字段对应值的命令是(        )
A. hgetall
B. hmget
C. hget
D. hkeys
我的答案:C:hget;
4. (单选题)获取 hash 内全部字段和对应值的命令是(        )
A. hget
B. hgetall
C. hvals
D. hkeys
我的答案:B:hgetall;
5. (单选题)删除 hash 中指定字段的命令是(        )
A. del
B. hdel
C. hexists
D. hmset
我的答案:B:hdel;
6. (单选题)仅当 hash 字段不存在时才赋值，字段存在则操作无效的命令是(        )
A. hset
B. hmset
C. hsetnx
D. hincrby
我的答案:C:hsetnx;
7. (单选题)给 hash 指定字段数值增减整数的命令是(        )
A. hincrbyfloat
B. hincrby
C. incr
D. decr
我的答案:B:hincrby;
8. (单选题)查看 hash 中字段总数量的命令是(        )
A. hexists
B. hlen
C. hkeys
D. hvals
我的答案:B:hlen;
9. (单选题)hash 类型中 value 允许存储的数据类型是(        )
A. hash 嵌套
B. 列表
C. 字符串
D. set 集合
我的答案:C:字符串;
10. (单选题)电商购物车场景中，用户 id 作为 hash 的 key，商品编号作为 field，商品数量作为 value，减少商品库存可使用(        )
A. hincrby 字段 -1
B. hset
C. hdel
D. hgetall
我的答案:A:hincrby 字段 -1;
二. 多选题（共6题）
11. (多选题)属于 Hash 哈希类型基础操作命令的有(        )
A. hset
B. hget
C. hdel
D. hmset
E. mset
我的答案:ABCD:hset; hget; hdel; hmset;
12. (多选题)能够一次性操作 hash 多个字段的命令是(        )
A. hmset
B. hmget
C. hset
D. hget
我的答案:AB:hmset; hmget;
13. (多选题)获取 hash 结构内字段名、字段值的命令有(        )
A. hkeys
B. hvals
C. hgetall
D. hlen
我的答案:ABC:hkeys; hvals; hgetall;
14. (多选题)Hash 数值自增相关命令包含(        )
A. hincrby
B. hincrbyfloat
C. incr
D. decrby
我的答案:AB:hincrby; hincrbyfloat;
15. (多选题)Hash 类型典型业务应用场景包含(        )
A. 电商用户购物车存储
B. 双 11 商品抢购库存控制
C. 存储用户多属性信息(姓名、粉丝、博文数)
D. 数据库主键自增 ID
我的答案:AC:电商用户购物车存储; 存储用户多属性信息(姓名、粉丝、博文数);
16. (多选题)Hash 类型使用注意事项描述正确的是(        )
A. value 只能存字符串，不支持嵌套 hash
B. 单个 hash 最多存储 2³²-1 个 field-value 键值对
C. hash 适合存储大批量对象列表
D. hgetall 在 field 数量过多时会产生性能瓶颈
我的答案:ABD:value 只能存字符串，不支持嵌套 hash; 单个 hash 最多存储 2³²-1 个 field-value 键值对; hgetall 在 field 数量过多时会产生性能瓶颈;
三. 填空题（共7题）
17. (填空题)
Hash 结构整体存储格式：外层 key 对应内部一组____和____。

我的答案：
(1) field（字段）
(2) value（值）
18. (填空题)
一次性设置 hash 多个字段与值的命令：____；一次性读取多个字段值：______。

我的答案：
(1) hmset
(2) hmget
19. (填空题)
判断 hash 中是否存在某个字段的命令：____。

我的答案：
(1) hexists
20. (填空题)
hkeys key 作用是获取 hash 全部____；hvals key 获取 hash 全部____。

我的答案：
(1) 字段名（field）
(2) 字段值（value）
21. (填空题)
hsetnx 命令仅在____不存在时执行赋值，若字段已存在则不做任何修改。

我的答案：
(1) 字段（field）
22. (填空题)
电商购物车设计：用户 ID 作为 hash 的____，商品编号作为____，购买数量作为 value。

我的答案：
(1) key（键）
(2) field（字段）
23. (填空题)
hash 不支持数据嵌套，所有 value 只能存储____类型。

我的答案：
(1) 字符串（string）
四. 简答题（共4题）
24. (简答题)
对比 String 存 JSON 对象与 Hash 存储对象属性两种方案，说明 Hash 的优势。

我的答案：
Hash 优势：①可对对象单个字段独立读写（hget/hset），无需整体读写整个 JSON，节省网络与内存；②支持字段级原子自增（hincrby）；③无需 JSON 序列化/反序列化。String 存 JSON 修改任一属性都要整体取出、解析、修改、再写回，效率低。
教师批语：
学生未作答。
25. (简答题)
简述 hash 类型 hgetall 命令存在的性能隐患与原因。

我的答案：
当 hash 内 field 数量过多时，hgetall 会一次性返回所有字段和值，导致：①占用大量内存与网络带宽；②阻塞 Redis 单线程，影响其他命令执行，造成性能瓶颈。应改用 hscan 分批获取，或避免单个 hash 存过多字段。
教师批语：
学生未作答。
26. (简答题)
描述 Redis Hash 实现电商购物车的完整存储方案，以及增、删、改、查对应命令。

我的答案：
存储方案：用户 ID 作为 hash 的 key，商品编号作为 field，购买数量作为 value。增/改：hset cart:用户ID 商品编号 数量（批量用 hmset）；查：hget 查单个商品数量、hgetall 查整个购物车、hlen 查商品种数；改数量：hincrby cart:用户ID 商品编号 增减量；删：hdel cart:用户ID 商品编号。
教师批语：
学生未作答。
27. (简答题)
简述 Hash 实现抢购商品库存控制的业务模型，并写出库存扣减命令示例。

我的答案：
业务模型：把每个商品的库存作为 hash 的一个 field（商品 id 作 field、库存数作 value），抢购时用 hincrby 原子扣减。示例：hset stock 商品1001 100（初始化 100 件）；hincrby stock 商品1001 -1（每次抢购扣 1），扣减后判断返回值，小于 0 说明库存不足。
教师批语：
学生未作答。
list类型
题量: 25 满分: 100
作答时间:07-31 10:43至08-21 18:00
智能分析
一. 单选题（共10题）
1. (单选题)Redis List 底层采用的数据结构是(        )
A. 哈希表
B. 双向链表
C. 平衡树
D. 数组
我的答案:B:双向链表;
2. (单选题)从列表左侧头部添加元素的命令是(        )
A. rpush
B. lpush
C. lpop
D. rpop
我的答案:B:lpush;
3. (单选题)从列表右侧尾部添加元素的命令是(        )
A. lpush
B. rpush
C. lrange
D. llen
我的答案:B:rpush;
4. (单选题)查看列表指定索引位置元素的命令是(        )
A. lrange
B. lindex
C. llen
D. lrem
我的答案:B:lindex;
5. (单选题)获取列表全部元素时，终止索引应填写(        )
A. 0
B. -1
C. end
D. all
我的答案:B:-1;
6. (单选题)从列表左侧弹出并移除头部元素的命令是(        )
A. rpop
B. lpop
C. blpop
D. brpop
我的答案:B:lpop;
7. (单选题)实现阻塞读取列表左侧数据、无数据则等待指定时长的命令是(        )
A. lpop
B. blpop
C. lrem
D. llen
我的答案:B:blpop;
8. (单选题)删除列表中指定数量、指定值元素的命令是(        )
A. lpop
B. rpop
C. lrem
D. lindex
我的答案:C:lrem;
9. (单选题)获取列表中元素总个数的命令是(        )
A. lrange
B. llen
C. lindex
D. lrem
我的答案:B:llen;
10. (单选题)下列哪项不属于 List 典型业务场景(        )
A. 朋友圈有序点赞列表
B. 微博关注有序列表
C. 购物车商品属性存储
D. 多服务器日志有序汇总
我的答案:C:购物车商品属性存储;
二. 多选题（共6题）
11. (多选题)属于 Redis List 添加元素命令的有(        )
A. lpush
B. rpush
C. lpop
D. rpop
我的答案:AB:lpush; rpush;
12. (多选题)List 读取数据相关命令包含(        )
A. lrange
B. lindex
C. llen
D. lrem
我的答案:ABC:lrange; lindex; llen;
13. (多选题)List 阻塞弹出数据的命令有(        )
A. blpop
B. brpop
C. brpoplpush
D. lpop
我的答案:ABC:blpop; brpop; brpoplpush;
14. (多选题)Redis List 类型特点描述正确的是(        )
A. 存储全部为 string 类型数据
B. 底层双向链表，两端增删效率高
C. 最多可存储 2³²-1 个元素
D. 随机索引查询速度极快
我的答案:ABC:存储全部为 string 类型数据; 底层双向链表，两端增删效率高; 最多可存储 2³²-1 个元素;
15. (多选题)适合使用 Redis List 实现的业务场景有(        )
A. 按时间顺序展示新闻资讯
B. 朋友圈点赞有序记录、取消点赞删除用户
C. 任务消息队列(阻塞读取)
D. 单个用户姓名、年龄存储
我的答案:ABC:按时间顺序展示新闻资讯; 朋友圈点赞有序记录、取消点赞删除用户; 任务消息队列(阻塞读取);
16. (多选题)关于 lrange 命令说法正确的是(        )
A. 可截取列表一段范围数据，实现分页
B. lrange key 0 -1 可以查看列表全部元素
C. 只能读取列表前 10 个元素
D. 支持自定义起始、结束索引
我的答案:ABD:可截取列表一段范围数据，实现分页; lrange key 0 -1 可以查看列表全部元素; 支持自定义起始、结束索引;
三. 填空题（共7题）
17. (填空题)
Redis List 底层是____，支持左右两端添加、弹出数据。

我的答案：
(1) 双向链表
18. (填空题)
lpush 向列表____侧添加元素；rpush 向列表____侧添加元素。



我的答案：
(1) 左（头部）
(2) 右（尾部）
19. (填空题)
lpop 移除列表____元素；rpop 移除列表____元素。

我的答案：
(1) 左侧（头部）
(2) 右侧（尾部）
20. (填空题)
统计列表元素总数命令：；查看指定索引元素命令：。



我的答案：
(1) llen
(2) lindex
21. (填空题)
____命令可以删除列表中指定数量、指定值的元素，适用于朋友圈取消点赞场景。

我的答案：
(1) lrem
22. (填空题)
阻塞式读取列表数据命令 blpop、brpop 末尾需要传入____参数，代表等待超时时间。

我的答案：
(1) 超时时间（秒）
23. (填空题)
List 中所有存储元素只能是____类型，单个列表最大存储元素数量为 2³²-1。

我的答案：
(1) 字符串（string）
四. 简答题（共2题）
24. (简答题)
简述 Redis List 底层双向链表结构的优缺点。

我的答案：
优点：①两端（头尾）插入/删除效率高 O(1)；②可方便模拟栈和队列；③支持阻塞式弹出（blpop/brpop）实现消息队列。缺点：①按下标随机访问中间元素效率低 O(n)；②每个节点需额外指针，内存占用较高。
教师批语：
学生未作答。
25. (简答题)
区分 lpush/rpush、lpop/rpop，分别说明可以模拟什么数据模型（栈 / 队列）。

我的答案：
lpush/rpush 分别从左侧/右侧添加，lpop/rpop 分别从左侧/右侧移除。模拟栈（先进后出）：lpush + lpop（或 rpush + rpop）同一端进出；模拟队列（先进先出）：lpush + rpop（左进右出）或 rpush + lpop（右进左出）。
教师批语：
学生未作答。
事务
题量: 33 满分: 100
作答时间:08-04 13:44至08-21 18:00
智能分析
一. 单选题（共15题）
1. (单选题)事务队列存在语法错误时，执行 EXEC 后结果为(        )
A. 正确命令执行，错误报错
B. 自动回滚已执行命令
C. 全部命令都不执行
D. 忽略错误继续执行
我的答案:C:全部命令都不执行;
2. (单选题)SORT 实现英文字母字典排序需要追加参数(        )
A. LIMIT
B. BY
C. ALPHA
D. DESC
我的答案:C:ALPHA;
3. (单选题)将带过期 key 转为永久有效、清除失效时间的命令(        )
A. DEL
B. PTTL
C. EXPIRE
D. PERSIST
我的答案:D:PERSIST;
4. (单选题)实现乐观锁、监控指定 key 变动的命令是(        )
A. UNWATCH
B. WATCH
C. TTL
D. EXPIRE
我的答案:B:WATCH;
5. (单选题)下列哪种操作会清除 key 原有过期时间(        )
A. INCR
B. LPUSH
C. HSET
D. SET
我的答案:D:SET;
6. (单选题)Redis 内存超限时默认淘汰策略是(        )
A. volatile-ttl
B. allkeys-lru
C. volatile-lru
D. noeviction
我的答案:D:noeviction;
7. (单选题)Redis 事务开启的命令是(        )
A. WATCH
B. DISCARD
C. MULTI
D. EXEC
我的答案:C:MULTI;
8. (单选题)取消所有 WATCH 监控的指令是(        )
A. WATCH
B. PERSIST
C. UNWATCH
D. DISCARD
我的答案:C:UNWATCH;
9. (单选题)SORT 倒序排序的参数是(        )
A. DESC
B. GET
C. ALPHA
D. STORE
我的答案:A:DESC;
10. (单选题)取消未执行事务、清空命令队列的命令是(        )
A. WATCH
B. EXEC
C. PERSIST
D. DISCARD
我的答案:D:DISCARD;
11. (单选题)Redis 通用排序核心命令是(        )
A. SORT
B. ZREVRANGE
C. ZRANGE
D. LRANGE
我的答案:A:SORT;
12. (单选题)提交执行事务队列所有命令的指令是(        )
A. EXEC
B. MULTI
C. DISCARD
D. UNWATCH
我的答案:A:EXEC;
13. (单选题)内存满了拒绝写入、不删除任何 key 的策略是(        )
A. allkeys-random
B. volatile-random
C. volatile-lru
D. noeviction
我的答案:D:noeviction;
14. (单选题)设置 key 过期时间单位为秒的命令是(        )
A. PEXPIRE
B. TTL
C. PTTL
D. EXPIRE
我的答案:D:EXPIRE;
15. (单选题)查询 key 剩余过期毫秒数的命令是(        )
A. PERSIST
B. TTL
C. EXPIRE
D. PTTL
我的答案:D:PTTL;
二. 多选题（共8题）
16. (多选题)属于 Redis 事务专用命令的有(        )
A. WATCH
B. MULTI
C. DISCARD
D. EXEC
我的答案:ABCD:WATCH; MULTI; DISCARD; EXEC;
17. (多选题)maxmemory-policy 内存淘汰策略有(        )
A. allkeys-lru
B. volatile-ttl
C. volatile-lru
D. noeviction
我的答案:ABCD:allkeys-lru; volatile-ttl; volatile-lru; noeviction;
18. (多选题)SORT 命令支持的核心参数有(        )
A. DESC
B. ALPHA
C. BY/GET/STORE
D. LIMIT
我的答案:ABCD:DESC; ALPHA; BY/GET/STORE; LIMIT;
19. (多选题)Redis 过期 key 清理机制分为(        )
A. 内存淘汰清理
B. 定时全库扫描
C. 定期主动清理
D. 惰性被动删除
我的答案:ACD:内存淘汰清理; 定期主动清理; 惰性被动删除;
20. (多选题)Redis 事务完整执行三阶段包含(        )
A. WATCH 监控
B. 命令入队
C. 开启事务 MULTI
D. EXEC 执行
我的答案:BCD:命令入队; 开启事务 MULTI; EXEC 执行;
21. (多选题)不会清除 key 原有过期时间的操作是(        )
A. INCR
B. HSET
C. LPUSH
D. ZADD
我的答案:ABCD:INCR; HSET; LPUSH; ZADD;
22. (多选题)下列关于 Redis 事务描述正确的是(        )
A. 逻辑错误正确命令仍执行
B. 执行期间其他客户端命令无法插入队列
C. 不支持数据库级回滚
D. 语法错误全队作废
我的答案:ABCD:逻辑错误正确命令仍执行; 执行期间其他客户端命令无法插入队列; 不支持数据库级回滚; 语法错误全队作废;
23. (多选题)Redis 过期时间相关命令包含(        )
A. TTL/PTTL
B. PEXPIRE
C. PERSIST
D. EXPIRE
我的答案:ABCD:TTL/PTTL; PEXPIRE; PERSIST; EXPIRE;
三. 填空题（共7题）
24. (填空题)SORT 命令中____参数用于指定排序参照字段，____用于保存排序结果至新 key。
我的答案：
(1) BY
(2) STORE
25. (填空题)执行 SET、GETSET 会清除 key 原有____;INCR、HSET 不会清除。
我的答案：
(1) 过期时间
26. (填空题)
EXPIRE 单位为____，PEXPIRE 单位为____。

我的答案：
(1) 秒
(2) 毫秒
27. (填空题)惰性删除:只有____/____过期 key 时才删除该键。
我的答案：
(1) 访问
(2) 读取
28. (填空题)SORT 分页参数格式为 LIMIT ____, ____。
我的答案：
(1) offset（偏移量）
(2) count（数量）
29. (填空题)
WATCH 本质相当于____锁，监控的 key 被修改后 EXEC 会返回____。

我的答案：
(1) 乐观
(2) nil（空）
30. (填空题)TTL 返回 - 2 代表____，返回 - 1 代表 key 永久无过期。
我的答案：
(1) key 不存在（已过期删除）
四. 简答题（共3题）
31. (简答题)
Redis 事务和传统数据库事务区别（原子性、回滚）

我的答案：
①原子性：Redis 只保证一组命令要么全部排队执行、要么全不执行（语法错误时全部不执行），但不保证执行中途某命令失败时回滚已执行命令；传统数据库具备严格原子性，出错回滚。②回滚：Redis 不支持回滚，运行期错误只让出错命令报错、其余照常执行；传统数据库支持完整回滚（ROLLBACK）。
教师批语：
学生未作答。
32. (简答题)
简述 Redis 事务两大异常执行场景区别

我的答案：
①语法（编译期/入队）错误：命令入队时报错，整个队列作废，EXEC 时全部命令都不执行。②运行期（逻辑）错误：命令能正常入队，EXEC 执行时只有出错的那条命令报错，其余命令照常执行，不支持回滚。
教师批语：
学生未作答。
33. (简答题)
简述 WATCH 乐观锁工作原理

我的答案：
WATCH 监控一个或多个 key，本质是乐观锁。EXEC 执行前若被监控 key 被其他客户端修改过，则本次事务被放弃（EXEC 返回 nil），客户端需重试。通过“先监控、再检查、不阻塞”实现并发控制，不加悲观锁阻塞其他客户端；UNWATCH 可取消监控。
教师批语：
学生未作答。
持久化
题量: 33 满分: 100
作答时间:08-05 14:55至08-21 18:00
智能分析
一. 单选题（共15题）
1. (单选题)系统宕机最多丢失 1 秒数据的 AOF 同步策略是(        )
A. always
B. everysec
C. no
D. all
我的答案:B:everysec;
2. (单选题)RDB 开启数据校验的配置项是(        )
A. rdbcompression
B. rdbchecksum
C. stop-writes-on-bgsave-error
D. dir
我的答案:B:rdbchecksum;
3. (单选题)RDB 默认生成的文件名称为(        )
A. appendonly.aof
B. dump.rdb
C. redis.rdb
D. data.aof
我的答案:B:dump.rdb;
4. (单选题)Redis RDB 持久化存储的是(        )
A. 每条操作日志
B. 某一时刻数据快照
C. 读写指令
D. 过期 key 记录
我的答案:B:某一时刻数据快照;
5. (单选题)后台异步生成 RDB 文件、不阻塞客户端的命令是(        )
A. save
B. bgsave
C. flushdb
D. dump
我的答案:B:bgsave;
6. (单选题)不重启 Redis 开启 AOF 的命令是(        )
A. config set appendonly yes
B. set appendonly yes
C. appendonly on
D. redis-cli appendonly enable
我的答案:A:config set appendonly yes;
7. (单选题)RDB 使用的压缩算法是(        )
A. gzip
B. LZF
C. zstd
D. snappy
我的答案:B:LZF;
8. (单选题)执行后会阻塞 Redis 主线程、线上不推荐的 RDB 命令是(        )
A. bgsave
B. save
C. bgrewriteaof
D. config set appendonly yes
我的答案:B:save;
9. (单选题)配置项save 60 10000代表含义正确的是(        )
A. 60 秒内修改 10000 个 key 自动 bgsave
B. 60 分钟写入 10000 条命令自动 save
C. 每 60 秒强制保存 10000 次
D. 内存超过 10000KB 每 60 秒持久化
我的答案:A:60 秒内修改 10000 个 key 自动 bgsave;
10. (单选题)手动触发 AOF 文件重写压缩的命令是(        )
A. bgsave
B. bgrewriteaof
C. save
D. rewrite
我的答案:B:bgrewriteaof;
11. (单选题)AOF 自动重写最小文件大小配置是(        )
A. auto-aof-rewrite-percentage
B. auto-aof-rewrite-min-size
C. appendfilename
D. appendfsync
我的答案:B:auto-aof-rewrite-min-size;
12. (单选题)AOF 默认同步策略 appendfsync 的值为(        )
A. always
B. everysec
C. no
D. none
我的答案:B:everysec;
13. (单选题)AOF 每次写入立刻同步磁盘、数据零丢失但性能差的策略是(        )
A. everysec
B. always
C. no
D. everymin
我的答案:B:always;
14. (单选题)AOF 重写时，对 list 等集合类型单条命令最多写入多少个元素(        )
A. 32
B. 64
C. 128
D. 100
我的答案:B:64;
15. (单选题)AOF 持久化记录的内容是(        )
A. 内存快照
B. 所有写入操作命令
C. key 过期记录
D. 内存占用日志
我的答案:B:所有写入操作命令;
二. 多选题（共8题）
16. (多选题)AOF 重写带来的好处有(        )
A. 缩小 AOF 文件体积
B. 加快数据恢复速度
C. 减少磁盘 IO 开销
D. 实时同步所有操作
我的答案:ABC:缩小 AOF 文件体积; 加快数据恢复速度; 减少磁盘 IO 开销;
17. (多选题)save 与 bgsave 对比描述正确的有(        )
A. save 同步阻塞主线程
B. bgsave fork 子进程异步执行
C. save 会占用额外内存
D. bgsave 不会阻塞客户端读写
我的答案:ABD:save 同步阻塞主线程; bgsave fork 子进程异步执行; bgsave 不会阻塞客户端读写;
18. (多选题)AOF 三种刷盘同步策略包含(        )
A. always
B. everysec
C. no
D. everyhour
我的答案:ABC:always; everysec; no;
19. (多选题)Redis 两大持久化方案是(        )
A. RDB
B. AOF
C. Binlog
D. Mysql 备份
我的答案:AB:RDB; AOF;
20. (多选题)AOF 重写时会忽略哪些无效指令(        )
A. del key
B. set 多次覆盖同一 key
C. hdel
D. lpush 合并多条
我的答案:ABD:del key; set 多次覆盖同一 key; lpush 合并多条;
21. (多选题)RDB 持久化的优点包含(        )
A. 文件紧凑二进制，占用空间小
B. 恢复速度远快于 AOF
C. 适合定时全量备份、异地灾备
D. 实时持久化，不会丢数据
我的答案:ABC:文件紧凑二进制，占用空间小; 恢复速度远快于 AOF; 适合定时全量备份、异地灾备;
22. (多选题)属于 RDB 相关配置的有(        )
A. dbfilename
B. rdbcompression
C. rdbchecksum
D. dir
我的答案:ABCD:dbfilename; rdbcompression; rdbchecksum; dir;
23. (多选题)从 RDB 切换 AOF 需要执行的 redis-cli 命令是(        )
A. config set appendonly yes
B. config set save ""
C. bgrewriteaof
D. bgsave
我的答案:AB:config set appendonly yes; config set save "";
三. 填空题（共8题）
24. (填空题)手动 AOF 重写命令:____;自动重写依靠两个配置 auto-aof-rewrite-min-size 和____。
我的答案：
(1) bgrewriteaof
(2) auto-aof-rewrite-percentage
25. (填空题)AOF 默认文件名称:____;RDB 默认文件:____。
我的答案：
(1) appendonly.aof
(2) dump.rdb
26. (填空题)appendfsync everysec 策略宕机最多丢失____秒数据。
我的答案：
(1) 1
27. (填空题)RDB 是____快照，AOF 是____日志。
我的答案：
(1) 数据（内存）
(2) 命令（操作）
28. (填空题)rdbcompression yes 代表开启____压缩算法存储 RDB 文件。
我的答案：
(1) LZF
29. (填空题)AOF 重写会丢弃已____的 key，不写入新文件。
我的答案：
(1) 过期
30. (填空题)save 命令同步阻塞，bgsave 通过____创建子进程后台执行持久化。
我的答案：
(1) fork
31. (填空题)dir 配置统一指定 RDB 与 AOF 文件的____。
我的答案：
(1) 存储目录（路径）
四. 简答题（共2题）
32. (简答题)
简述 RDB 持久化优缺点

我的答案：
优点：①文件是紧凑的二进制快照，占用空间小；②恢复速度快，适合全量备份与灾难恢复；③对服务性能影响小（bgsave fork 子进程异步执行）。缺点：①两次快照之间数据可能丢失（非实时持久化）；②save 会阻塞主线程，bgsave 大数据量 fork 可能耗时并占用额外内存。
教师批语：
学生未作答。
33. (简答题)简述 save 和 bgsave 的核心区别，线上环境推荐使用哪一个?

我的答案：
save 在主线程同步执行，执行期间阻塞所有客户端请求；bgsave 通过 fork 子进程在后台异步生成 RDB 文件，主线程继续处理请求。线上环境推荐使用 bgsave（或配置自动触发 bgsave），避免阻塞服务。
教师批语：
学生未作答。