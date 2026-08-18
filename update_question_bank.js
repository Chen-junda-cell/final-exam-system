#!/usr/bin/env node
/* ================================================================
   新增题库(redis.md + echarts&Matplotlib.md) → 真题系统
   1. 填充 markdown 中缺失的答案
   2. 把 Redis(新科目) 与 ECharts/Matplotlib 题目合并进题库
   ================================================================ */
const fs = require('fs'), path = require('path');

const L = ['A','B','C','D','E','F','G','H'];
function Q(subject, type, title, opts, ans, exp){
  return {
    subject, type, title,
    options: (typeof opts === 'string' ? opts.split('|') : (opts || [])).map((t,i)=>({label:L[i], text:t})),
    answer: ans, explanation: exp || ''
  };
}
function MC(s,t,o,a,e){ return Q(s,'单选题',t,o,a,e); }
function MS(s,t,o,a,e){ return Q(s,'多选题',t,o,a,e); }
function PD(s,t,o,a,e){ return Q(s,'判断题',t,o,a,e); }
function FB(s,t,a,e){ return Q(s,'填空题',t,null,a,e); }
function SA(s,t,a,e){ return Q(s,'简答题',t,null,a,e); }

const SUBJ = 'Redis';
const ESUBJ = 'ECharts & Matplotlib';

// ===== 填空题答案（按 redis.md 出现顺序，共 39 题）=====
const TK_ANS = [
  ['select 4'],
  ['REmote','DIctionary','Server'],
  ['help'],
  ['毫秒','秒'],
  ['原子性'],
  ['追加'],
  ['长度'],
  ['del'],
  ['key','value','value'],
  ['浮点（小数）'],
  ['field（字段）','value（值）'],
  ['hmset','hmget'],
  ['hexists'],
  ['字段名（field）','字段值（value）'],
  ['字段（field）'],
  ['key（键）','field（字段）'],
  ['字符串（string）'],
  ['双向链表'],
  ['左（头部）','右（尾部）'],
  ['左侧（头部）','右侧（尾部）'],
  ['llen','lindex'],
  ['lrem'],
  ['超时时间（秒）'],
  ['字符串（string）'],
  ['BY','STORE'],
  ['过期时间'],
  ['秒','毫秒'],
  ['访问','读取'],
  ['offset（偏移量）','count（数量）'],
  ['乐观','nil（空）'],
  ['key 不存在（已过期删除）'],
  ['bgrewriteaof','auto-aof-rewrite-percentage'],
  ['appendonly.aof','dump.rdb'],
  ['1'],
  ['数据（内存）','命令（操作）'],
  ['LZF'],
  ['过期'],
  ['fork'],
  ['存储目录（路径）'],
];

// ===== 简答题答案（按 redis.md 出现顺序，共 17 题）=====
const JD_ANS = [
  '①缓存（热点数据/页面缓存，降低数据库压力）；②计数器、限流（incr 实现访问量、点赞数、限流）；③排行榜（sorted set）；④分布式会话共享（session 共享）；⑤消息队列（list/stream）；⑥分布式锁（setnx）；⑦共同好友/关注（set 集合运算）。',
  'NoSQL 即 Not only SQL，泛指非关系型数据库，是对传统关系型数据库（SQL）的补充。它用键值对、文档、列族、图等非表格方式存储数据，通常基于内存、读写速度快，适合高并发、大数据量、数据模型灵活的场景；但一般不具备完整的 ACID 事务特性。',
  '方案一：单个键存粉丝总数，如 user:1001:fans，用 incr/decr 增减。优点：命令简单、原子计数、内存占用小；缺点：只能存数量，无法保存每个粉丝详情。方案二：用 set 存粉丝列表（或用 String 存 JSON 数组）。优点：可保存每个粉丝详情、支持去重与集合运算；缺点：内存占用大、操作相对复杂，JSON 修改需整体读写。',
  '单条 set/get 适合一次只读写一个 key 的场景；mset/mget 适合一次读写多个 key 的场景。批量操作优势：①减少网络往返次数（RTT），提高吞吐量；②减少客户端等待时间，整体性能更高。',
  '特点：①Redis 最基础、最常用的类型；②key 固定为字符串，value 最大 512MB；③value 可为字符串、数字（可自增自减）、二进制数据；④数值操作原子执行，可安全计数。常用命令：set、get、mset、mget、append、strlen、incr、decr、incrby、decrby、setex、del 等。',
  '原理：Redis 单线程串行执行命令，incr/decr 对同一 key 的数值操作天然原子，不会出现并发竞态，可安全用于计数。注意事项：①value 必须是整数（浮点数用 incrbyfloat）；②数值不能超过 long（64 位有符号整数）范围；③对非数字字符串执行会报错。',
  'Hash 优势：①可对对象单个字段独立读写（hget/hset），无需整体读写整个 JSON，节省网络与内存；②支持字段级原子自增（hincrby）；③无需 JSON 序列化/反序列化。String 存 JSON 修改任一属性都要整体取出、解析、修改、再写回，效率低。',
  '当 hash 内 field 数量过多时，hgetall 会一次性返回所有字段和值，导致：①占用大量内存与网络带宽；②阻塞 Redis 单线程，影响其他命令执行，造成性能瓶颈。应改用 hscan 分批获取，或避免单个 hash 存过多字段。',
  '存储方案：用户 ID 作为 hash 的 key，商品编号作为 field，购买数量作为 value。增/改：hset cart:用户ID 商品编号 数量（批量用 hmset）；查：hget 查单个商品数量、hgetall 查整个购物车、hlen 查商品种数；改数量：hincrby cart:用户ID 商品编号 增减量；删：hdel cart:用户ID 商品编号。',
  '业务模型：把每个商品的库存作为 hash 的一个 field（商品 id 作 field、库存数作 value），抢购时用 hincrby 原子扣减。示例：hset stock 商品1001 100（初始化 100 件）；hincrby stock 商品1001 -1（每次抢购扣 1），扣减后判断返回值，小于 0 说明库存不足。',
  '优点：①两端（头尾）插入/删除效率高 O(1)；②可方便模拟栈和队列；③支持阻塞式弹出（blpop/brpop）实现消息队列。缺点：①按下标随机访问中间元素效率低 O(n)；②每个节点需额外指针，内存占用较高。',
  'lpush/rpush 分别从左侧/右侧添加，lpop/rpop 分别从左侧/右侧移除。模拟栈（先进后出）：lpush + lpop（或 rpush + rpop）同一端进出；模拟队列（先进先出）：lpush + rpop（左进右出）或 rpush + lpop（右进左出）。',
  '①原子性：Redis 只保证一组命令要么全部排队执行、要么全不执行（语法错误时全部不执行），但不保证执行中途某命令失败时回滚已执行命令；传统数据库具备严格原子性，出错回滚。②回滚：Redis 不支持回滚，运行期错误只让出错命令报错、其余照常执行；传统数据库支持完整回滚（ROLLBACK）。',
  '①语法（编译期/入队）错误：命令入队时报错，整个队列作废，EXEC 时全部命令都不执行。②运行期（逻辑）错误：命令能正常入队，EXEC 执行时只有出错的那条命令报错，其余命令照常执行，不支持回滚。',
  'WATCH 监控一个或多个 key，本质是乐观锁。EXEC 执行前若被监控 key 被其他客户端修改过，则本次事务被放弃（EXEC 返回 nil），客户端需重试。通过“先监控、再检查、不阻塞”实现并发控制，不加悲观锁阻塞其他客户端；UNWATCH 可取消监控。',
  '优点：①文件是紧凑的二进制快照，占用空间小；②恢复速度快，适合全量备份与灾难恢复；③对服务性能影响小（bgsave fork 子进程异步执行）。缺点：①两次快照之间数据可能丢失（非实时持久化）；②save 会阻塞主线程，bgsave 大数据量 fork 可能耗时并占用额外内存。',
  'save 在主线程同步执行，执行期间阻塞所有客户端请求；bgsave 通过 fork 子进程在后台异步生成 RDB 文件，主线程继续处理请求。线上环境推荐使用 bgsave（或配置自动触发 bgsave），避免阻塞服务。',
];
// ===== Redis 填空题题干（共 39 题，与 TK_ANS 一一对应）=====
const redisFillTitles = [
  'Redis在16个数据库之间可以相互切换，如果要切换到数据库4，则使用           实现。',
  '            、                    、                            简写为Redis，是完全开源免费的，是一个高性能的Key/Value数据库。',
  '查询命令分组帮助信息使用指令____+ 组名。',
  'psetex 设置 key 过期时间单位为____，setex 单位为____。',
  'Redis 单线程执行所有命令，所有操作具备____性，天然解决并发计数问题。',
  'append 命令可以向已有字符串尾部____内容，key 不存在则新建。',
  'strlen 命令作用是获取字符串____。',
  '删除指定 key 数据的命令是____。',
  'Redis 本质是一个大 Map，数据存储格式为____:____，数据类型指的是____部分的类型。',
  'incrbyfloat 命令支持对数值进行____精度的增减运算。',
  'Hash 结构整体存储格式：外层 key 对应内部一组____和____。',
  '一次性设置 hash 多个字段与值的命令：____；一次性读取多个字段值：______。',
  '判断 hash 中是否存在某个字段的命令：____。',
  'hkeys key 作用是获取 hash 全部____；hvals key 获取 hash 全部____。',
  'hsetnx 命令仅在____不存在时执行赋值，若字段已存在则不做任何修改。',
  '电商购物车设计：用户 ID 作为 hash 的____，商品编号作为____，购买数量作为 value。',
  'hash 不支持数据嵌套，所有 value 只能存储____类型。',
  'Redis List 底层是____，支持左右两端添加、弹出数据。',
  'lpush 向列表____侧添加元素；rpush 向列表____侧添加元素。',
  'lpop 移除列表____元素；rpop 移除列表____元素。',
  '统计列表元素总数命令：；查看指定索引元素命令：。',
  '____命令可以删除列表中指定数量、指定值的元素，适用于朋友圈取消点赞场景。',
  '阻塞式读取列表数据命令 blpop、brpop 末尾需要传入____参数，代表等待超时时间。',
  'List 中所有存储元素只能是____类型，单个列表最大存储元素数量为 2³²-1。',
  'SORT 命令中____参数用于指定排序参照字段，____用于保存排序结果至新 key。',
  '执行 SET、GETSET 会清除 key 原有____;INCR、HSET 不会清除。',
  'EXPIRE 单位为____，PEXPIRE 单位为____。',
  '惰性删除:只有____/____过期 key 时才删除该键。',
  'SORT 分页参数格式为 LIMIT ____, ____。',
  'WATCH 本质相当于____锁，监控的 key 被修改后 EXEC 会返回____。',
  'TTL 返回 - 2 代表____，返回 - 1 代表 key 永久无过期。',
  '手动 AOF 重写命令:____;自动重写依靠两个配置 auto-aof-rewrite-min-size 和____。',
  'AOF 默认文件名称:____;RDB 默认文件:____。',
  'appendfsync everysec 策略宕机最多丢失____秒数据。',
  'RDB 是____快照，AOF 是____日志。',
  'rdbcompression yes 代表开启____压缩算法存储 RDB 文件。',
  'AOF 重写会丢弃已____的 key，不写入新文件。',
  'save 命令同步阻塞，bgsave 通过____创建子进程后台执行持久化。',
  'dir 配置统一指定 RDB 与 AOF 文件的____。',
];

// ===== Redis 简答题题干（共 17 题，与 JD_ANS 一一对应）=====
const redisShortTitles = [
  'Redis的应用场景有哪些？',
  '什么是NoSQL？',
  '简述 Redis String 类型两种存储用户粉丝数据的实现方案，并说明各自优缺点。',
  '对比单条 set/get 与 mset/mget 批量操作的适用场景，说明批量操作优势。',
  '简述 Redis 中 string 类型的特点，并列举至少 5 个常用操作命令。',
  '说明 incr/decr 系列数值操作的底层原理，以及使用时的两点注意事项',
  '对比 String 存 JSON 对象与 Hash 存储对象属性两种方案，说明 Hash 的优势。',
  '简述 hash 类型 hgetall 命令存在的性能隐患与原因。',
  '描述 Redis Hash 实现电商购物车的完整存储方案，以及增、删、改、查对应命令。',
  '简述 Hash 实现抢购商品库存控制的业务模型，并写出库存扣减命令示例。',
  '简述 Redis List 底层双向链表结构的优缺点。',
  '区分 lpush/rpush、lpop/rpop，分别说明可以模拟什么数据模型（栈 / 队列）。',
  'Redis 事务和传统数据库事务区别（原子性、回滚）',
  '简述 Redis 事务两大异常执行场景区别',
  '简述 WATCH 乐观锁工作原理',
  '简述 RDB 持久化优缺点',
  '简述 save 和 bgsave 的核心区别，线上环境推荐使用哪一个?',
];

// ===== Redis 选择题（单选/多选）=====
const redisChoiceQs = [
  // —— 第一章 ——
  MC(SUBJ,'Redis数据库的起源于以下哪家公司（    ）。','Apache Software Foundation 公司|微软（Microsoft）|意大利的创业公司Merzia|IBM','C','Redis 由意大利创业公司 Merzia 的 Salvatore Sanfilippo 于 2009 年开发。'),
  MC(SUBJ,'以下哪个Redis的版本是稳定版本（    ）','5.3.4|1.3.5|2.1.4|1.2.1','D','Redis 版本号第二位为偶数表示稳定版，1.2.1 是稳定版本。'),
  MC(SUBJ,'关于NoSQL的说法，错误的一项是（   ）。','NoSQL数据库的代表有Redis、Oracle、MangoDB|NoSQL，即 Not only SQL,是关系型数据库的一种良好补充|NoSQL泛指非关系型数据库，内存存储，访问速度非常快|为了解决高并发、大数据存储而产生的一种数据库解决方案','A','Oracle 是关系型数据库，不是 NoSQL 的代表。'),
  MC(SUBJ,'Redis支持的数据结构中，以下描述不正确的是（   ）。','列表类型|字符串类型|逻辑类型|散列类型','C','Redis 没有“逻辑类型”，常见类型有 string/hash/list/set/zset 等。'),
  MC(SUBJ,'已知数据库中存储了key/value类型的结构数据：name -> “ Jack”，如何获取Jack的值（   ）。','get  “Jack”|get Jack|get name|set name “Jack”','C','name 是 key，取值应使用 get name；get 后跟 key 而不是 value。'),
  MC(SUBJ,'Redis数据库默认的端口是（      ）。','1521|3386|6379|8080','C','Redis 默认端口为 6379。'),
  MC(SUBJ,'Redis默认支持多少个数据库','1个|8个|5个|16个','D','Redis 默认提供 16 个数据库，编号 0~15。'),
  MS(SUBJ,'退出Redis客户端的操作或命令，正确的有（   ）。','指令quit|指令：q|指令exit|指令ctrl+c','ACD','quit、exit 和 Ctrl+C 均可退出 redis-cli；q 不是标准退出命令。'),
  MS(SUBJ,'以下关于NoSQL数据库的应用场景描述，正确的有','对于给定key，比较容易映射复杂值的环境|对数据库性能要求较高|灵活性要求不太强的IT系统|数据模型比较简单','ABD','NoSQL 适合数据模型简单、性能要求高、key 能映射复杂值的场景；不适合灵活性要求弱的系统。'),
  MS(SUBJ,'NoSQL数据库的分类有（      ）。','文档型数据库|图形数据库|列存储数据库|键值存储（Key/Value）数据库','ABCD','NoSQL 主要分为文档型、图形、列存储、键值存储四类。'),
  MS(SUBJ,'以下关于Redis数据库的特性，描述正确的是（   ）。','内存存储与持久化机制|支持多种类型存储结构|功能比较丰富，可以做缓存、队列、消息订阅/发布|简单稳定（相比SQL而言更加简单）','ABCD','四项都是 Redis 的特性。'),
  // —— String 类型 ——
  MC(SUBJ,'获取单个 key 对应 value 的命令是(        )','mget|append|get|strlen','C','get key 获取单个 key 的 value。'),
  MC(SUBJ,'给字符串数值自增 1 的命令是(        )','incr|incrbyfloat|decr|incrby','A','incr key 自增 1；incrby 指定步长，decr 自减。'),
  MC(SUBJ,'设置单个键值对数据的基础命令是(        )','set|mset|del|get','A','set 设置单个键值对；mset 批量设置。'),
  MC(SUBJ,'Redis 数值操作支持的最大值对应 Java 中哪种类型上限(        )','double|int|long|float','C','Redis 整数范围为 64 位有符号整数，对应 Java 的 long。'),
  MC(SUBJ,'设置 key 多少秒后过期的命令是(        )','append|set|psetex|setex','D','setex key 秒数 value 设置过期时间（秒）；psetex 单位为毫秒。'),
  MC(SUBJ,'Redis 字符串单个 value 最大存储容量为(        )','128MB|256MB|512MB|1GB','C','单个 string value 最大 512MB。'),
  MC(SUBJ,'查看单个命令帮助文档的指令是(        )','quit|help @string|help get|clear','C','help 命令名 查看该命令帮助；help @组名 查看分组帮助。'),
  MC(SUBJ,'Redis 中所有数据存储的 key 的数据类型固定为(        )','Hash|数字|List|字符串','D','Redis 的 key 一律为字符串类型。'),
  MC(SUBJ,'Redis 客户端退出指令不包含以下哪个(        )','ESC|exit|clear|quit','C','clear 是清屏工具命令，不是退出指令。'),
  MC(SUBJ,'一次性获取多个 key 对应值的命令是(        )','strlen|mget|del|get','B','mget key1 key2 ... 批量获取多个 key 的值。'),
  MS(SUBJ,'Redis 字符串数值递减相关命令包含(        )','incrbyfloat|decr|decrby|incr','BC','decr 减 1、decrby 按步长递减。'),
  MS(SUBJ,'以下属于 Redis 客户端基础工具命令的是(        )','clear|setex|help|quit','ACD','clear/help/quit 是客户端工具命令；setex 是数据操作命令。'),
  MS(SUBJ,'Redis 使用 string 类型的典型业务场景有(        )','限时投票活动|数据库主键自增 ID 生成|用户结构化完整信息 JSON 缓存|网站大 V 粉丝数缓存','ABCD','四项都适合用 string（计数、JSON 缓存、粉丝数等）。'),
  MS(SUBJ,'以下属于 Redis 字符串基础操作命令的有(        )','get|hset|set|mget|mset','ACDE','hset 是 hash 命令，不属于字符串命令。'),
  MS(SUBJ,'Redis 支持的五大基础数据类型包含(        )','set|sorted_set|string|list|hash','ABCDE','五大基础类型：string、list、hash、set、sorted_set。'),
  // —— hash 类型 ——
  MC(SUBJ,'下列哪种数据类型适合存储对象、可单独修改对象某一个属性，无需整体更新 JSON?(        )','string|hash|list|set','B','hash 可对单个 field 独立读写，适合存储对象并单独修改某个属性。'),
  MC(SUBJ,'向 hash 中添加 / 修改单个字段数据的命令是(        )','hget|hset|hdel|hlen','B','hset key field value 添加或修改单个字段。'),
  MC(SUBJ,'获取 hash 中单个字段对应值的命令是(        )','hgetall|hmget|hget|hkeys','C','hget key field 获取单个字段的值。'),
  MC(SUBJ,'获取 hash 内全部字段和对应值的命令是(        )','hget|hgetall|hvals|hkeys','B','hgetall 返回全部 field 和 value。'),
  MC(SUBJ,'删除 hash 中指定字段的命令是(        )','del|hdel|hexists|hmset','B','hdel key field 删除指定字段。'),
  MC(SUBJ,'仅当 hash 字段不存在时才赋值，字段存在则操作无效的命令是(        )','hset|hmset|hsetnx|hincrby','C','hsetnx 仅在字段不存在时赋值，存在则不操作。'),
  MC(SUBJ,'给 hash 指定字段数值增减整数的命令是(        )','hincrbyfloat|hincrby|incr|decr','B','hincrby key field 步长 对整数字段增减。'),
  MC(SUBJ,'查看 hash 中字段总数量的命令是(        )','hexists|hlen|hkeys|hvals','B','hlen key 返回 hash 内字段数量。'),
  MC(SUBJ,'hash 类型中 value 允许存储的数据类型是(        )','hash 嵌套|列表|字符串|set 集合','C','hash 的 value 只能存字符串，不支持嵌套。'),
  MC(SUBJ,'电商购物车场景中，用户 id 作为 hash 的 key，商品编号作为 field，商品数量作为 value，减少商品库存可使用(        )','hincrby 字段 -1|hset|hdel|hgetall','A','hincrby key 商品编号 -1 原子地减少商品数量。'),
  MS(SUBJ,'属于 Hash 哈希类型基础操作命令的有(        )','hset|hget|hdel|hmset|mset','ABCD','hset/hget/hdel/hmset 都是 hash 命令；mset 是 string 命令。'),
  MS(SUBJ,'能够一次性操作 hash 多个字段的命令是(        )','hmset|hmget|hset|hget','AB','hmset 批量设置、hmget 批量读取多个字段。'),
  MS(SUBJ,'获取 hash 结构内字段名、字段值的命令有(        )','hkeys|hvals|hgetall|hlen','ABC','hkeys 取字段名、hvals 取字段值、hgetall 取字段名和值；hlen 是数量。'),
  MS(SUBJ,'Hash 数值自增相关命令包含(        )','hincrby|hincrbyfloat|incr|decrby','AB','hincrby 整数自增、hincrbyfloat 浮点自增。'),
  MS(SUBJ,'Hash 类型典型业务应用场景包含(        )','电商用户购物车存储|双 11 商品抢购库存控制|存储用户多属性信息(姓名、粉丝、博文数)|数据库主键自增 ID','ABC','购物车、抢购库存、用户多属性都用 hash；主键自增 ID 用 string 的 incr。'),
  MS(SUBJ,'Hash 类型使用注意事项描述正确的是(        )','value 只能存字符串，不支持嵌套 hash|单个 hash 最多存储 2³²-1 个 field-value 键值对|hash 适合存储大批量对象列表|hgetall 在 field 数量过多时会产生性能瓶颈','ABD','hash 不适合存大批量对象列表；其余三项正确。'),
  // —— list 类型 ——
  MC(SUBJ,'Redis List 底层采用的数据结构是(        )','哈希表|双向链表|平衡树|数组','B','Redis List 底层是双向链表。'),
  MC(SUBJ,'从列表左侧头部添加元素的命令是(        )','rpush|lpush|lpop|rpop','B','lpush 从左侧（头部）添加。'),
  MC(SUBJ,'从列表右侧尾部添加元素的命令是(        )','lpush|rpush|lrange|llen','B','rpush 从右侧（尾部）添加。'),
  MC(SUBJ,'查看列表指定索引位置元素的命令是(        )','lrange|lindex|llen|lrem','B','lindex key index 查看指定下标元素。'),
  MC(SUBJ,'获取列表全部元素时，终止索引应填写(        )','0|-1|end|all','B','-1 表示最后一个元素，0~-1 即全部。'),
  MC(SUBJ,'从列表左侧弹出并移除头部元素的命令是(        )','rpop|lpop|blpop|brpop','B','lpop 弹出并移除左侧（头部）元素。'),
  MC(SUBJ,'实现阻塞读取列表左侧数据、无数据则等待指定时长的命令是(        )','lpop|blpop|lrem|llen','B','blpop 阻塞式弹出左侧元素。'),
  MC(SUBJ,'删除列表中指定数量、指定值元素的命令是(        )','lpop|rpop|lrem|lindex','C','lrem key count value 删除指定数量、指定值的元素。'),
  MC(SUBJ,'获取列表中元素总个数的命令是(        )','lrange|llen|lindex|lrem','B','llen key 获取列表元素总数。'),
  MC(SUBJ,'下列哪项不属于 List 典型业务场景(        )','朋友圈有序点赞列表|微博关注有序列表|购物车商品属性存储|多服务器日志有序汇总','C','购物车商品属性适合用 hash，不属于 List 场景。'),
  MS(SUBJ,'属于 Redis List 添加元素命令的有(        )','lpush|rpush|lpop|rpop','AB','lpush/rpush 是添加；lpop/rpop 是弹出。'),
  MS(SUBJ,'List 读取数据相关命令包含(        )','lrange|lindex|llen|lrem','ABC','lrange/lindex/llen 是读取；lrem 是删除。'),
  MS(SUBJ,'List 阻塞弹出数据的命令有(        )','blpop|brpop|brpoplpush|lpop','ABC','blpop/brpop/brpoplpush 都支持阻塞。'),
  MS(SUBJ,'Redis List 类型特点描述正确的是(        )','存储全部为 string 类型数据|底层双向链表，两端增删效率高|最多可存储 2³²-1 个元素|随机索引查询速度极快','ABC','链表随机访问慢，故 D 错误；其余三项正确。'),
  MS(SUBJ,'适合使用 Redis List 实现的业务场景有(        )','按时间顺序展示新闻资讯|朋友圈点赞有序记录、取消点赞删除用户|任务消息队列(阻塞读取)|单个用户姓名、年龄存储','ABC','前三个是有序列表/队列场景；用户姓名年龄适合 hash。'),
  MS(SUBJ,'关于 lrange 命令说法正确的是(        )','可截取列表一段范围数据，实现分页|lrange key 0 -1 可以查看列表全部元素|只能读取列表前 10 个元素|支持自定义起始、结束索引','ABD','lrange 支持任意起始/结束索引，不限于前 10 个。'),
  // —— 事务 ——
  MC(SUBJ,'事务队列存在语法错误时，执行 EXEC 后结果为(        )','正确命令执行，错误报错|自动回滚已执行命令|全部命令都不执行|忽略错误继续执行','C','语法错误在入队时即被识别，EXEC 时整个事务全部不执行。'),
  MC(SUBJ,'SORT 实现英文字母字典排序需要追加参数(        )','LIMIT|BY|ALPHA|DESC','C','ALPHA 表示按字典序（字母）排序。'),
  MC(SUBJ,'将带过期 key 转为永久有效、清除失效时间的命令(        )','DEL|PTTL|EXPIRE|PERSIST','D','PERSIST 清除 key 的过期时间，使其永久有效。'),
  MC(SUBJ,'实现乐观锁、监控指定 key 变动的命令是(        )','UNWATCH|WATCH|TTL|EXPIRE','B','WATCH 监控 key 实现乐观锁。'),
  MC(SUBJ,'下列哪种操作会清除 key 原有过期时间(        )','INCR|LPUSH|HSET|SET','D','SET/GETSET 会清除原有过期时间；INCR/LPUSH/HSET 不会。'),
  MC(SUBJ,'Redis 内存超限时默认淘汰策略是(        )','volatile-ttl|allkeys-lru|volatile-lru|noeviction','D','默认 maxmemory-policy 为 noeviction（不淘汰、拒绝写入）。'),
  MC(SUBJ,'Redis 事务开启的命令是(        )','WATCH|DISCARD|MULTI|EXEC','C','MULTI 开启事务。'),
  MC(SUBJ,'取消所有 WATCH 监控的指令是(        )','WATCH|PERSIST|UNWATCH|DISCARD','C','UNWATCH 取消对所有 key 的监控。'),
  MC(SUBJ,'SORT 倒序排序的参数是(        )','DESC|GET|ALPHA|STORE','A','DESC 表示倒序（降序）排序。'),
  MC(SUBJ,'取消未执行事务、清空命令队列的命令是(        )','WATCH|EXEC|PERSIST|DISCARD','D','DISCARD 取消事务并清空命令队列。'),
  MC(SUBJ,'Redis 通用排序核心命令是(        )','SORT|ZREVRANGE|ZRANGE|LRANGE','A','SORT 是 Redis 通用排序命令。'),
  MC(SUBJ,'提交执行事务队列所有命令的指令是(        )','EXEC|MULTI|DISCARD|UNWATCH','A','EXEC 执行事务队列中的所有命令。'),
  MC(SUBJ,'内存满了拒绝写入、不删除任何 key 的策略是(        )','allkeys-random|volatile-random|volatile-lru|noeviction','D','noeviction 不删除任何 key、直接拒绝写入。'),
  MC(SUBJ,'设置 key 过期时间单位为秒的命令是(        )','PEXPIRE|TTL|PTTL|EXPIRE','D','EXPIRE 单位为秒；PEXPIRE 单位为毫秒。'),
  MC(SUBJ,'查询 key 剩余过期毫秒数的命令是(        )','PERSIST|TTL|EXPIRE|PTTL','D','PTTL 返回剩余过期时间的毫秒数。'),
  MS(SUBJ,'属于 Redis 事务专用命令的有(        )','WATCH|MULTI|DISCARD|EXEC','ABCD','WATCH/MULTI/DISCARD/EXEC 都是事务相关命令。'),
  MS(SUBJ,'maxmemory-policy 内存淘汰策略有(        )','allkeys-lru|volatile-ttl|volatile-lru|noeviction','ABCD','四项都是 Redis 内存淘汰策略。'),
  MS(SUBJ,'SORT 命令支持的核心参数有(        )','DESC|ALPHA|BY/GET/STORE|LIMIT','ABCD','DESC/ALPHA/BY/GET/STORE/LIMIT 都是 SORT 支持的参数。'),
  MS(SUBJ,'Redis 过期 key 清理机制分为(        )','内存淘汰清理|定时全库扫描|定期主动清理|惰性被动删除','ACD','过期清理包括内存淘汰、定期主动清理、惰性被动删除；没有定时全库扫描。'),
  MS(SUBJ,'Redis 事务完整执行三阶段包含(        )','WATCH 监控|命令入队|开启事务 MULTI|EXEC 执行','BCD','三阶段：MULTI 开启事务、命令入队、EXEC 执行；WATCH 在开启前完成。'),
  MS(SUBJ,'不会清除 key 原有过期时间的操作是(        )','INCR|HSET|LPUSH|ZADD','ABCD','除 SET/GETSET 外，这些操作都不会清除过期时间。'),
  MS(SUBJ,'下列关于 Redis 事务描述正确的是(        )','逻辑错误正确命令仍执行|执行期间其他客户端命令无法插入队列|不支持数据库级回滚|语法错误全队作废','ABCD','四项都是 Redis 事务的特点。'),
  MS(SUBJ,'Redis 过期时间相关命令包含(        )','TTL/PTTL|PEXPIRE|PERSIST|EXPIRE','ABCD','TTL/PTTL 查询、EXPIRE/PEXPIRE 设置、PERSIST 清除过期时间。'),
  // —— 持久化 ——
  MC(SUBJ,'系统宕机最多丢失 1 秒数据的 AOF 同步策略是(        )','always|everysec|no|all','B','everysec 每秒同步一次，宕机最多丢失 1 秒数据。'),
  MC(SUBJ,'RDB 开启数据校验的配置项是(        )','rdbcompression|rdbchecksum|stop-writes-on-bgsave-error|dir','B','rdbchecksum yes 开启 RDB 文件校验。'),
  MC(SUBJ,'RDB 默认生成的文件名称为(        )','appendonly.aof|dump.rdb|redis.rdb|data.aof','B','RDB 默认文件名为 dump.rdb。'),
  MC(SUBJ,'Redis RDB 持久化存储的是(        )','每条操作日志|某一时刻数据快照|读写指令|过期 key 记录','B','RDB 保存的是某一时刻的数据快照。'),
  MC(SUBJ,'后台异步生成 RDB 文件、不阻塞客户端的命令是(        )','save|bgsave|flushdb|dump','B','bgsave fork 子进程后台生成 RDB，不阻塞客户端。'),
  MC(SUBJ,'不重启 Redis 开启 AOF 的命令是(        )','config set appendonly yes|set appendonly yes|appendonly on|redis-cli appendonly enable','A','config set appendonly yes 可在线开启 AOF。'),
  MC(SUBJ,'RDB 使用的压缩算法是(        )','gzip|LZF|zstd|snappy','B','RDB 使用 LZF 算法压缩。'),
  MC(SUBJ,'执行后会阻塞 Redis 主线程、线上不推荐的 RDB 命令是(        )','bgsave|save|bgrewriteaof|config set appendonly yes','B','save 在主线程同步执行会阻塞，线上不推荐。'),
  MC(SUBJ,'配置项save 60 10000代表含义正确的是(        )','60 秒内修改 10000 个 key 自动 bgsave|60 分钟写入 10000 条命令自动 save|每 60 秒强制保存 10000 次|内存超过 10000KB 每 60 秒持久化','A','save 60 10000 表示 60 秒内修改 10000 个 key 自动触发 bgsave。'),
  MC(SUBJ,'手动触发 AOF 文件重写压缩的命令是(        )','bgsave|bgrewriteaof|save|rewrite','B','bgrewriteaof 手动触发 AOF 重写。'),
  MC(SUBJ,'AOF 自动重写最小文件大小配置是(        )','auto-aof-rewrite-percentage|auto-aof-rewrite-min-size|appendfilename|appendfsync','B','auto-aof-rewrite-min-size 指定触发重写的最小文件大小。'),
  MC(SUBJ,'AOF 默认同步策略 appendfsync 的值为(        )','always|everysec|no|none','B','appendfsync 默认值为 everysec。'),
  MC(SUBJ,'AOF 每次写入立刻同步磁盘、数据零丢失但性能差的策略是(        )','everysec|always|no|everymin','B','always 每次写命令都同步磁盘，零丢失但性能差。'),
  MC(SUBJ,'AOF 重写时，对 list 等集合类型单条命令最多写入多少个元素(        )','32|64|128|100','B','AOF 重写时集合类型单条命令最多合并 64 个元素。'),
  MC(SUBJ,'AOF 持久化记录的内容是(        )','内存快照|所有写入操作命令|key 过期记录|内存占用日志','B','AOF 记录所有写入操作命令。'),
  MS(SUBJ,'AOF 重写带来的好处有(        )','缩小 AOF 文件体积|加快数据恢复速度|减少磁盘 IO 开销|实时同步所有操作','ABC','重写能缩小体积、加快恢复、减少 IO；但并非“实时同步所有操作”。'),
  MS(SUBJ,'save 与 bgsave 对比描述正确的有(        )','save 同步阻塞主线程|bgsave fork 子进程异步执行|save 会占用额外内存|bgsave 不会阻塞客户端读写','ABD','save 不额外 fork 子进程、不占额外内存，故 C 错；其余正确。'),
  MS(SUBJ,'AOF 三种刷盘同步策略包含(        )','always|everysec|no|everyhour','ABC','AOF 三种同步策略：always、everysec、no。'),
  MS(SUBJ,'Redis 两大持久化方案是(        )','RDB|AOF|Binlog|Mysql 备份','AB','Redis 持久化方案为 RDB 和 AOF。'),
  MS(SUBJ,'AOF 重写时会忽略哪些无效指令(        )','del key|set 多次覆盖同一 key|hdel|lpush 合并多条','ABD','重写会忽略已删除 key、覆盖写、合并多条写命令。'),
  MS(SUBJ,'RDB 持久化的优点包含(        )','文件紧凑二进制，占用空间小|恢复速度远快于 AOF|适合定时全量备份、异地灾备|实时持久化，不会丢数据','ABC','RDB 非实时、会丢数据，故 D 错。'),
  MS(SUBJ,'属于 RDB 相关配置的有(        )','dbfilename|rdbcompression|rdbchecksum|dir','ABCD','四项都是 RDB 相关配置。'),
  MS(SUBJ,'从 RDB 切换 AOF 需要执行的 redis-cli 命令是(        )','config set appendonly yes|config set save ""|bgrewriteaof|bgsave','AB','切换 AOF 需要 config set appendonly yes 并关闭 RDB（config set save ""）。'),
];

// ===== 组装 Redis 全部题目（选择题 + 填空题 + 简答题）=====
const redisFillQs = redisFillTitles.map((t,i)=> FB(SUBJ, t, TK_ANS[i].map((b,n)=>(n+1)+'. '+b).join('  '), ''));
const redisShortQs = redisShortTitles.map((t,i)=> SA(SUBJ, t, JD_ANS[i], ''));
const redisQs = [...redisChoiceQs, ...redisFillQs, ...redisShortQs];

// ===== ECharts & Matplotlib 新增题目 =====
const echartsQs = [
  // —— echarts作业2 判断题 ——
  PD(ESUBJ,'Echarts支持动态数据更新，可以实时展示柱状图的变化。','对|错','对','ECharts 提供动态数据接口，可实时更新数据并刷新图表。'),
  PD(ESUBJ,'饼图主要用于展示数据的比例关系，不能显示具体数值。','对|错','错','饼图主要展示比例，但借助 label/tooltip 也能显示具体数值或百分比。'),
  PD(ESUBJ,'折线图通常用于展示数据随时间的变化趋势。','对|错','对','折线图是最常见的展示时间序列变化趋势的图表。'),
  PD(ESUBJ,'堆叠柱状图能够展示不同类别下各个子类别的数据总和。','对|错','对','堆叠柱状图把不同子类别柱子堆叠，可展示总和与各自比例。'),
  PD(ESUBJ,'堆叠折线图与堆叠柱状图的功能类似，但更适合展示连续变化的数据。','对|错','对','堆叠折线图更适合连续变化数据的展示。'),
  PD(ESUBJ,'面积图与折线图类似，但增加了数据区域的填充，可以更好地强调数据的变化趋势。','对|错','对','面积图填充折线与 x 轴之间的区域，更直观展示趋势。'),
  PD(ESUBJ,'阶梯图通常用于展示数据在特定时间点的变化，而非连续变化。','对|错','对','阶梯图数据点间用水平线连接，适合展示特定时间点的变化。'),
  PD(ESUBJ,'散点图主要用于展示两个变量之间的关系，而不是单个变量的分布情况。','对|错','对','散点图用于展示两个变量之间的相关性或趋势。'),
  PD(ESUBJ,'Echarts的所有图表类型都支持交互功能，如放大、缩小、拖拽等。','对|错','错','大部分图表支持交互，但并非所有类型都支持所有交互功能。'),
  PD(ESUBJ,'Echarts的图表可以方便地导出为图片或PDF格式。','对|错','对','ECharts 提供导出功能，可保存为图片或 PDF。'),
  // —— echarts作业1 单选题 ——
  MC(ESUBJ,'ECharts是一个基于什么技术的可视化库？','Java|JavaScript|Python|C++','B','ECharts 是基于 JavaScript 的开源可视化库。'),
  MC(ESUBJ,'ECharts主要用于哪种类型的数据可视化？','柱状图|地图|饼图|所有以上选项','D','ECharts 支持柱状图、地图、饼图等多种可视化类型。'),
  MC(ESUBJ,'在ECharts中，哪个属性用于设置图表的标题？','title|legend|xAxis|yAxis','A','title 属性用于设置图表标题。'),
  MC(ESUBJ,'在ECharts中，哪个属性用于设置图例的显示？','legend.show|title.show|xAxis.show|yAxis.show','A','legend.show 控制图例的显示与隐藏。'),
  MC(ESUBJ,'Pyecharts是一个什么语言的数据可视化库？','Java|JavaScript|Python|C++','C','Pyecharts 是 Python 语言的数据可视化库。'),
  MC(ESUBJ,'Pyecharts的底层技术主要基于哪个JavaScript可视化库？','D3.js|ECharts|Highcharts|Bokeh','B','Pyecharts 底层基于 ECharts。'),
  MC(ESUBJ,'在ECharts中，哪个属性用于设置坐标轴的名称？','name|type|axisLabel|data','A','坐标轴配置中 name 属性用于设置坐标轴名称。'),
  MC(ESUBJ,'ECharts中，哪个属性用于设置饼图的扇区颜色？','series.color|series.itemStyle|series.data|series.type','A','series.color 设置饼图扇区颜色。'),
  MC(ESUBJ,'在HTML中使用ECharts时，通常需要首先执行哪个步骤？','引入ECharts的JavaScript文件|创建ECharts实例|准备DOM容器|设置ECharts的配置信息','A','使用 ECharts 需先引入 echarts 的 JavaScript 文件。'),
  MC(ESUBJ,'在HTML中使用ECharts时，以下哪个步骤是必须的？','创建HTML页面，但不需要引入echarts.min.js|为ECharts准备一个具备高宽的DOM容器|只需设置ECharts的配置信息，无需定义数据|无需为ECharts准备DOM容器，直接在body中绘制图表','B','必须为 ECharts 准备一个具备高宽的 DOM 容器。'),
  // —— matplotlib作业3 单选题 ——
  MC(ESUBJ,'Matplotlib绘图时，约定俗成的导入别名是?(        )','import matplotlib as plt|import matplotlib.pyplot as plt|import matplotlib.plt as pyplot|import plot as plt','B','约定俗成写法为 import matplotlib.pyplot as plt。'),
  MC(ESUBJ,'安装Matplotlib国内清华镜像源命令正确的是?(        )','pip install matplotlib.pyplot -i https://pypi.tuna.tsinghua.edu.cn/simple|pip install matplotlib -i https://pypi.tuna.tsinghua.edu.cn/simple|pip matplotlib install -i https://pypi.tuna.tsinghua.edu.cn/simple|conda install matplotlib simple','B','正确命令为 pip install matplotlib -i https://pypi.tuna.tsinghua.edu.cn/simple。'),
  MC(ESUBJ,'以下不属于Matplotlib图表基础组成部分的是?(        )','画布(figure)|坐标轴|tooltip提示框|图例legend','C','Matplotlib 没有 tooltip 提示框（ECharts 才有）。'),
  MC(ESUBJ,'Matplotlib绘制折线图的核心函数是?(        )','plt.bar(        )|plt.pie(        )|plt.plot(        )|plt.scatter(        )','C','plt.plot() 用于绘制折线图。'),
  MC(ESUBJ,'plt.plot(        )中`linestyle=\'--\'`代表线条样式为?(        )','实线|虚线|点划线|双划线','D','按教材约定 linestyle=\'--\' 表示双划线。'),
  MC(ESUBJ,'plt.plot(        )参数`marker`的作用是?(        )','设置线条颜色|设置数据点标记形状|设置线条粗细|设置画布大小','B','marker 用于设置数据点标记形状。'),
  MC(ESUBJ,'下列哪一项是Matplotlib的适用场景?(        )','网页大屏交互式图表|浏览器动态数据看板|Python离线科研静态图表、论文配图|前端页面实时数据联动','C','Matplotlib 适合 Python 离线科研静态图表、论文配图。'),
  MC(ESUBJ,'折线图中用来修改标记填充颜色的参数是?(        )','color|mfc|markersize|linestyle','B','mfc（marker face color）修改标记填充颜色。'),
  MC(ESUBJ,'用于控制数据标记大小的参数是?(        )','ms|mfc|marker|color','A','ms（markersize 简写）控制标记大小。'),
  MC(ESUBJ,'以下哪种库不属于Python可视化库?(        )','Matplotlib|Seaborn|ECharts|Pyecharts','C','ECharts 是 JavaScript 可视化库，不属于 Python 库。'),
  // —— matplotlib作业3 多选题 ——
  MS(ESUBJ,'Matplotlib图表基础组成包含以下哪些?(        )','画布|绘图区|图例|网格线','ABCD','画布、绘图区、图例、网格线都属于图表基础组成。'),
  MS(ESUBJ,'plt.plot(        )支持设置的参数有?(        )','color 线条颜色|linestyle 线条样式|marker 标记形状|mfc 标记填充色','ABCD','四个参数 plt.plot() 都支持。'),
  MS(ESUBJ,'下列属于Matplotlib和ECharts核心区别的有?(        )','Matplotlib基于Python，ECharts基于JS|Matplotlib适合静态图，ECharts擅长网页交互图表|Matplotlib导出图片，ECharts浏览器渲染|Matplotlib自带tooltip悬浮提示','ABC','Matplotlib 无自带 tooltip 悬浮提示，故 D 错。'),
  MS(ESUBJ,'下列属于plt.plot(        )合法线条样式取值的是?(        )','\'-\' 实线|\':\' 虚线|\'-.\' 点划线|\'==\' 双线','ABC','\'==\' 不是合法线型取值。'),
  MS(ESUBJ,'以下适合使用Matplotlib绘制的场景有?(        )','Jupyter数据分析绘图|毕业论文静态统计图表|本地导出高清PDF图表|管理系统网页实时监控大屏','ABC','网页实时监控大屏适合 ECharts，不属于 Matplotlib 场景。'),
  // —— matplotlib作业3 判断题 ——
  PD(ESUBJ,'ECharts是Python端可视化库，可以直接在Python脚本运行。(        )','对|错','错','ECharts 是基于 JS 的前端库，不能直接在 Python 脚本运行。'),
  PD(ESUBJ,'import matplotlib.pyplot as plt 是行业通用标准导入写法。(        )','对|错','对','import matplotlib.pyplot as plt 是行业通用标准写法。'),
  PD(ESUBJ,'markersize简写ms，可以用来调整折线图数据点大小。(        )','对|错','对','ms 是 markersize 的简写，用于调整数据点大小。'),
  PD(ESUBJ,'Matplotlib默认自带丰富交互能力，支持鼠标悬浮自动弹出提示框。(        )','对|错','错','Matplotlib 默认无鼠标悬浮提示框等交互能力。'),
  PD(ESUBJ,'linestyle=\':\' 代表虚线样式。(        )','对|错','对','按教材约定 linestyle=\':\' 表示虚线样式。'),
];

// ==================== 1. 填充 markdown 答案 ====================
function fillMarkdown(){
  // redis.md：填充 39 道填空题 + 17 道简答题
  const redisPath = path.join(__dirname, '新增题库', 'redis.md');
  let r = fs.readFileSync(redisPath, 'utf8');
  let ti = 0;
  r = r.replace(/(我的答案：\r\n)((?:\s*\(\d+\)\r\n)+)/g, (m, p1, p2)=>{
    const arr = TK_ANS[ti++] || [''];
    const nums = p2.match(/\(\d+\)/g) || [];
    return p1 + nums.map((n,i)=> n + ' ' + (arr[i]||'')).join('\r\n') + '\r\n';
  });
  let ji = 0;
  r = r.replace(/我的答案：\r\n教师批语：\r\n学生未作答。\r\n/g, ()=>{
    const a = JD_ANS[ji++] || '';
    return '我的答案：\r\n' + a + '\r\n教师批语：\r\n学生未作答。\r\n';
  });
  fs.writeFileSync(redisPath, r, 'utf8');
  console.log('✅ redis.md 填充: 填空', ti, '道 / 简答', ji, '道');

  // echarts&Matplotlib.md：补最后一道判断题答案
  const ecPath = path.join(__dirname, '新增题库', 'echarts&Matplotlib.md');
  let e = fs.readFileSync(ecPath, 'utf8');
  const marker = '我的答案:对正确答案:';
  const idx = e.lastIndexOf(marker);
  if (idx >= 0) e = e.substring(0, idx) + marker + '对' + e.substring(idx + marker.length);
  fs.writeFileSync(ecPath, e, 'utf8');
  console.log('✅ echarts&Matplotlib.md 已补全最后一道判断题答案');
}

// ==================== 2. 合并到题库 ====================
function mergeToBank(){
  const dbPath = path.join(__dirname, 'parsed', 'questions_data.js');
  const content = fs.readFileSync(dbPath, 'utf8');
  const match = content.match(/const PREPARSED_QUESTIONS = (\[[\s\S]*\]);/);
  if (!match) { console.error('❌ 无法解析 questions_data.js'); process.exit(1); }
  const existing = JSON.parse(match[1]);

  // 去重：ECharts 题目若已存在（标题精确/前缀匹配）则跳过
  const norm = t => String(t).replace(/[\s\u3000]+/g, '').toLowerCase();
  const existingNorm = existing.map(q => norm(q.title));
  const echartsNew = echartsQs.filter(q => {
    const n = norm(q.title);
    const dup = existingNorm.some(e => e.startsWith(n) && n.length >= 4);
    if (dup) console.log('  ⏭️ 跳过已存在的 ECharts 题:', q.title.slice(0, 40));
    return !dup;
  });

  const newQs = [...redisQs, ...echartsNew];

  // 分配 ID
  let maxId = 0;
  existing.forEach(q => { const m = q.id && q.id.match(/GEN(\d+)/); if (m) maxId = Math.max(maxId, parseInt(m[1], 10)); });
  newQs.forEach(q => {
    maxId++;
    q.id = 'GEN' + String(maxId).padStart(4, '0');
    q.level = 'B';
    q.topic = '';
    q.correctCount = 0;
    q.wrongCount = 0;
    q.lastPractice = null;
    q.nextReview = null;
    q.reviewStage = 0;
  });

  const merged = [...existing, ...newQs];
  const header = '// 八科完整题库 — ' + merged.length + '题\nconst PREPARSED_QUESTIONS = ';
  fs.writeFileSync(dbPath, header + JSON.stringify(merged, null, 2) + ';\n', 'utf8');
  fs.writeFileSync(path.join(__dirname, 'parsed', 'questions_data.json'), JSON.stringify(merged, null, 2), 'utf8');

  // 版本号
  const htmlPath = path.join(__dirname, 'index.html');
  let html = fs.readFileSync(htmlPath, 'utf8');
  html = html.replace(/questions_data\.js\?v=\d+/, 'questions_data.js?v=22');
  fs.writeFileSync(htmlPath, html, 'utf8');

  console.log('✅ 题库合并完成: 原', existing.length, '题 → 现', merged.length, '题');
  console.log('   Redis 新增:', redisQs.length, '题 | ECharts 新增:', echartsNew.length, '题(跳过', echartsQs.length - echartsNew.length, '题重复)');

  // 验证
  const verify = JSON.parse(fs.readFileSync(dbPath, 'utf8').match(/const PREPARSED_QUESTIONS = (\[[\s\S]*\]);/)[1]);
  const ids = new Set(verify.map(q=>q.id));
  console.log('   验证:', verify.length, '题, ID 唯一:', ids.size === verify.length);
  const subj = {};
  verify.forEach(q=>subj[q.subject]=(subj[q.subject]||0)+1);
  console.log('   科目分布:', JSON.stringify(subj));
}

fillMarkdown();
mergeToBank();


