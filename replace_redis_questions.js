#!/usr/bin/env node
/* ================================================================
   替换 Redis 题库：删除原有 Redis 题目，写入复习2026 的 64 题
   ================================================================ */
const fs = require('fs'), path = require('path');

const L = ['A','B','C','D','E','F','G','H'];
function Q(type, title, opts, ans, exp){
  return { subject:'Redis', type, title,
    options: (typeof opts === 'string' ? opts.split('|') : (opts || [])).map((t,i)=>({label:L[i], text:t})),
    answer: ans, explanation: exp || '' };
}
function MC(t,o,a,e){ return Q('单选题',t,o,a,e); }
function MS(t,o,a,e){ return Q('多选题',t,o,a,e); }
function FB(t,a,e){ return Q('填空题',t,null,a,e); }
function SA(t,a,e){ return Q('简答题',t,null,a,e); }
function PROG(t,a,e){ return Q('程序题',t,null,a,e); }

const newQs = [
  // —— 单选题 1-16 ——
  MC('关于NoSQL的说法，错误的一项是( )。','为了解决高并发、大数据存储而产生的一种数据库解决方案|NoSQL泛指非关系型数据库，内存存储，访问速度非常快|NoSQL数据库的代表有Redis、Oracle、MangoDB|NoSQL，即 Not only SQL,是关系型数据库的一种良好补充','C','Oracle 是关系型数据库，不是 NoSQL 的代表，故 C 错误。'),
  MC('Redis默认支持多少个数据库( )。','1个|5个|8个|16个','D','Redis 默认提供 16 个数据库，编号 0~15。'),
  MC('如果想在Redis服务器中查找某个以"ja"开头的键，则使用的命令是( )。','find ja*|match ja*|keys ja*|get ja*','C','keys ja* 用通配符匹配键名；find/match 不是 Redis 命令。'),
  MC('现有一统计某网站的访问量的需求，如果使用Redis存储，使用哪个命令可以使访问量自增1( )。','INCR|ADD|INSERT|INCRBY1','A','INCR key 使数值自增 1。'),
  MC('一个散列最多可以包含多少个字段( )。','128|216-1|512|232-1','D','单个 hash 最多存储 2^32-1 个 field-value 键值对。'),
  MC('以下关于列表list的描述错误的是( )。','列表类型(list)可以存储一个有序的字符串列表|列表类型内部是使用双向链表(double linked list)实现的|一个列表类型键最多能容纳232-1个元素|使用链表的实现的优势是通过索引访问元素非常快','D','链表通过索引随机访问慢，故 D 描述错误。'),
  MC('以下关于集合的描述，错误的是( )。','一个集合类型(set)键可以存储至多232-1个字符串|在集合中的每个元素都是不同的|在集合中的元素是有序的|集合类型在Redis内部是使用值为空的散列表(hash table)实现的','C','集合(set)中的元素是无序的，故 C 错误。'),
  MC('已知两个集合，集合setA的元素有:"3","1","2"，集合setB的元素有:"4","1","5"，则执行命令SUNION setA setB后的结果是( )。','"1"|"3","1","2"|"3","1","2","4","5"|"3","1","2","4","1","5"','C','SUNION 求并集并去重，结果为 1,2,3,4,5。'),
  MC('以下关于Jedis对象的创建方法，编写错误的是( )。','Jedis jedis = new Jedis("localhost")|Jedis jredis = new Jedis("192.168.199.136",6379);|Jedis jredis = new Jedis("192.168.199.136",6379,1000);|Jedis jredis = Jedis("192.168.199.136");','D','D 缺少 new 关键字，写法错误。'),
  MC('Redis连接池的相关配置属性参数中，以下哪个是设置最大的等待时间的参数( )。','maxIdle|maxWait|maxActive|testOnBorrow','B','maxWait 设置最大等待时间。'),
  MC('以下通过Java应用程序中的jredis对象操作hash类型数据的代码中，错误的是( )。','jedis.hset("userInfo", "name", "lisi");|String name = jedis.hget("userInfo", "name");|List<String> list = jedis.hmget("userInfo", "age", "sex");|String name = jedis.get("userInfo", "name");','D','jedis.get 是字符串命令，hash 取值应用 hget。'),
  MC('以下关于连接池的描述，错误的是( )。','JedisPool是一个线程安全的网络连接池|可以用JedisPool创建一些可靠Jedis实例|Java程序中获取连接池代码:JedisPool jedisPool = new JedisPool(config,"192.168.32.130",6379)是正确的|连接池对象jedisPool一般情况下使用完成后不用手工关闭','D','连接池使用完成后应关闭释放资源，D 错误。'),
  MC('设置一个key的过期时间，可以通过命令( )实现。','expire key seconds|unvalid key seconds|persist key|ttl key','A','EXPIRE key seconds 设置过期时间（秒）。'),
  MC('Redis中除了有序集合外的其他类型，可以使用哪个命令对键值进行排序( )。','sort|order|group by|order by','A','SORT 是 Redis 通用排序命令。'),
  MC('以下关于Redis持久化的描述，错误的是( )。','持久化，就是将数据放到断电后数据不会丢失的设备中|RDB持久化是指在指定的时间间隔内将内存中的数据集快照写入磁盘|Redis提供了将内存数据持久化到硬盘，以及用持久化文件来恢复数据库数据的功能|Redis只提供了RDB持久化的方式','D','Redis 提供 RDB 和 AOF 两种持久化方式，D 错误。'),
  MC('Redis支持的数据结构中，以下描述不正确的是( )。','字符串类型|列表类型|散列类型|逻辑类型','D','Redis 没有"逻辑类型"。'),
  // —— 单选题 17-32 ——
  MC('已知数据库中存储了key/value类型的结构数据:name -> " Jack"，如何获取Jack的值( )。','get name|set name "Jack"|get Jack|get "Jack"','A','name 是 key，取值用 get name。'),
  MC('以下对Redis的键值操作命令中，错误的是( )。','move key key1|DEL key key2|EXPIRE key seconds|TLL key','D','TLL 拼写错误，正确是 TTL。'),
  MC('对散列Hash的键值如果想一次设置多个属性字段的值，则需要是使用以下哪个命令( )。','HSET|HMSET|HGET|HMGET','B','HMSET 一次设置多个字段的值。'),
  MC('已知列表list中某key的名字是members，如果要向已知列表members的左侧增加元素3，使用的命令是( )。','LPUSH members 3|RPUSH members 3|set members 3|LGET members 3','A','LPUSH 从左侧添加元素。'),
  MC('已知列表members中的元素有:"3","1","2","4","0","5"，则执行命令LINDEX members -1 的结果是( )。','3|1|2|5','D','索引 -1 表示最后一个元素 5。'),
  MC('以下关于有序集合的描述，错误的是( )。','有序集合是在集合类型的基础上为集合中的每个元素都关联了一个分数|有序集合类型是使用散列表和跳跃表(skip list)实现的|有序集合中每个元素都是不同的，但是他们的分数值却可以相同|有序集合类型是Redis的5种数据类型中最低级的类型','D','有序集合不是最低级类型，D 描述错误。'),
  MC('从已知集合setC中弹出一个元素的命令是( )。','LPOP|SPOP|LRM|SMV','B','SPOP 从集合中随机弹出并移除一个元素。'),
  MC('如果要通过Java应用程序中的对象Jredis设置字符串类型的数据存储，其中键key:name，值value:Jack，则以下代码行正确的是( )。','jredis.set("name", "Jack")|jredis.set("key", "Jack")|jredis.get("name", "Jack")|jredis.set("value", "Jack")','A','键是 name，值是 Jack，正确写法 jredis.set("name","Jack")。'),
  MC('在Java应用程序中，使用jredis对象的方法jredis.ping()进行测试是否可以成功连接到Redis服务器，如果连接成功，返回的结果是( )。','success|200|PONG|error','C','连接成功 ping() 返回 PONG。'),
  MC('Java操作字符串类型时，通过jredis对象给给定的key值:address添加多个数据的方法是( )。','mset|dset|mget|sset','A','mset 一次设置多个键值对。'),
  MC('通过Java应用程序中的jredis对象操作列表，以下哪个方法是从列表左侧添加元素的( )。','jedis.lpush("students", "Wang Wu", "Li Si");|jedis.rpush("students", "Wang Wu");|jedis.lrange("students", "Wang Wu", "Li Si");|jedis.push("students", "Wang Wu", "Li Si");','A','lpush 从列表左侧添加。'),
  MC('通过Java应用程序中操作集合类型，其中获取所有key为letters的元素的方法是( )。','jedis.sadd("letters ", "Wang Wu");|Set<String> letters = jedis.smembers("letters");|jedis.srem("letters ");|jedis.sget("students");','B','smembers 获取集合所有元素。'),
  MC('Redis事务中监控一个或多个key的命令是( )。','multi|watch|exec|discard','B','WATCH 监控一个或多个 key 实现乐观锁。'),
  MC('Redis中放弃执行事务块中的所有命令执行的命令是( )。','multi|watch|unwatch|discard','D','DISCARD 取消事务、放弃执行队列中所有命令。'),
  MC('在Redis的发布订阅机制的三个部分中，属于Redis服务器端的是( )。','发布者|订阅者|Channel|通道','C','发布者/订阅者是客户端，Channel(频道)在服务器端维护。'),
  MC('Redis的RDB持久化，持久化存储的文件名的后缀是( )。','rbd|rdb|dbr|drb','B','RDB 默认文件 dump.rdb，后缀 rdb。'),
  // —— 多选题 33-41 ——
  MS('现有一统计某网站的访问量的需求，如果使用Redis存储，使用哪些命令不是访问量自增1','INCR|ADD|INSERT|INCRBY1','BCD','只有 INCR 是自增 1，其余 ADD/INSERT/INCRBY1 都不是。'),
  MS('NoSQL数据库的分类有','键值存储（Key/Value）数据库|列存储数据库|文档型数据库|图形数据库','ABCD','NoSQL 分为键值、列存储、文档型、图形四类。'),
  MS('以下关于集合的描述，错误的是','一个集合类型（set）键可以存储至多256个字符串|在集合中的每个元素都是不同的|在集合中的元素是有序的|集合类型在Redis内部是使用值为空的散列表（hash table）实现的','AC','set 最多 2^32-1 个元素、元素无序，故 A、C 错误。'),
  MS('任务队列的优点有哪些','松耦合|紧耦合|易于扩展|扩展能力相对比较弱','AC','任务队列的优点：松耦合、易于扩展。'),
  MS('以下关于Redis数据库的特性，描述正确的是','支持多种类型存储结构|内存存储与持久化机制|功能比较丰富，可以做缓存、队列、消息订阅/发布|简单稳定（相比SQL而言更加简单）','ABCD','四项都是 Redis 特性。'),
  MS('NoSQL数据库的分类有','键值存储（Key/Value）数据库|列存储数据库|文档型数据库|图形数据库','ABCD','NoSQL 分为键值、列存储、文档型、图形四类。'),
  MS('下列属于string类型的命令的是','set|mset|append|hexists','ABC','set/mset/append 是 string 命令；hexists 是 hash 命令。'),
  MS('以下关于有序集合的描述，错误的是','有序集合是在集合类型的基础上为集合中的每个元素都关联了一个分数|有序集合类型是使用散列表和跳跃表（skip list）实现的|有序集合中每个元素都是相同的，他们的分数值也可以相同|有序集合类型是Redis的5种数据类型中最低级的类型','CD','有序集合元素是唯一的（不相同）、不是最低级类型，故 C、D 错误。'),
  MS('Redis中通过哪些命令可以实现任务队列','SADD|LPUSH|RPOP|BROP','BC','LPUSH + RPOP 组合可实现队列；SADD 是集合命令，BROP 不是标准命令。'),
  // —— 填空题 42-53 ——
  FB('REmote、_________、_________简写为Redis，是完全开源免费的，是一个高性能的Key/Value数据库。','(1) REmote (2) DIctionary (3) Server','全称 REmote DIctionary Server（远程字典服务）。'),
  FB('Redis支持的数据类型有字符串类型、哈希类型、 ___________、_________、_________。','(1) 列表 list (2) 集合 set (3) 有序集合 sorted set/zset','Redis 五大基础类型：string、hash、list、set、zset。'),
  FB('从已知列表age的两端弹出元素的命令是_________和_________。','(1) LPOP (2) RPOP','LPOP 左端弹出，RPOP 右端弹出。'),
  FB('单一Jedis实例不是线程安全的，连接池redisPool是线程________。','(1) 安全（线程安全）','JedisPool 是线程安全的连接池。'),
  FB('ZCARD命令可以获取有序集合的成员数,当 key 存在且是有序集类型时，返回_____________，当key不存在时，返回_________。','(1) 成员数（元素个数） (2) 0','key 存在返回成员数量，不存在返回 0。'),
  FB('Redis在16个数据库之间可以相互切换，如果要切换到数据库4，则使用_________实现。','(1) select 4','select 4 切换到数据库 4。'),
  FB('Redis数据库默认的端口是_________。','(1) 6379','Redis 默认端口 6379。'),
  FB('一个字符串类型的值能存储最大容量是_________。','(1) 512MB','单个 string value 最大 512MB。'),
  FB('判断一个键是否存在的命令是_____________，删除删除一个或多个键的命令是_______________ ，获得键的数据类型 _______________。','(1) EXISTS (2) DEL (3) TYPE','EXISTS 判断、DEL 删除、TYPE 查类型。'),
  FB('ZCARD命令可以获取有序集合的成员数,当 key 存在且是有序集类型时，返回_____________，当key不存在时，返回_____。','(1) 成员数（元素个数） (2) 0','key 存在返回成员数量，不存在返回 0。'),
  FB('在列表中通过其索引可以获取列表片段，其中索引_____________代表的是最右侧第一个元素。','(1) -1','索引 -1 表示最右侧第一个（最后一个）元素。'),
  FB('Java应用程序连接Redis服务器，获取服务器上所有key的数量的方法是 ___________','(1) dbSize()（jedis.dbSize()）','jedis.dbSize() 返回当前数据库中 key 的数量。'),
  // —— 简答题 54-62 ——
  SA('什么是NoSQL。','NoSQL 即 Not only SQL，泛指非关系型数据库，是对关系型数据库的补充。它用键值对、文档、列族、图等非表格方式存储数据，通常基于内存、访问速度快，适合高并发、大数据量、数据模型灵活的场景。'),
  SA('按照要求写出相应的命令:\nRedis服务器中给一个指定的键 key1设置一定的值 value1;\n删除以前生成键key1;\n创建名为new-key新建一个键并检查是否存在。','SET key1 value1（设置键值）\nDEL key1（删除键）\nSET new-key value（创建新键）\nEXISTS new-key（检查是否存在，返回 1 存在 / 0 不存在）'),
  SA('按照要求写出相应的命令:\n创建有序集合myzset，添加元素"one"，分数1，"two"，分数2;\n再给myzset集合分数值增加2;\n最后查看myzset中的所有元素及分数。','ZADD myzset 1 "one" 2 "two"（创建并添加元素）\nZINCRBY myzset 2 "one"（给成员 one 分数加 2）\nZRANGE myzset 0 -1 WITHSCORES（查看所有元素及分数）'),
  SA('请简述一下连接池方式连接Redis的步骤。','①创建连接池配置 JedisPoolConfig（设置 maxTotal/maxIdle/maxWait 等）；②创建连接池 JedisPool(config, host, port)；③jedisPool.getResource() 获取 Jedis 实例；④用 jedis 操作数据；⑤使用完 jedis.close() 归还连接，最后关闭连接池。'),
  SA('Redis事务相关的命令有哪几个?并进行简要说明。','MULTI（开启事务）、EXEC（执行事务队列所有命令）、DISCARD（取消事务）、WATCH（监控 key 实现乐观锁）、UNWATCH（取消监控）。'),
  SA('按照要求写出相应的命令:\n创建集合letters，给此集合一次性添加元素"a"，"b"，"c"，"d"，然后再随机获取集合中的两个元素。','SADD letters "a" "b" "c" "d"（一次性添加多个元素）\nSRANDMEMBER letters 2（随机获取两个元素）'),
  SA('简单介绍什么是NoSQL。','NoSQL 即 Not only SQL，泛指非关系型数据库，是关系型数据库的补充，基于键值对/文档/列族/图等方式存储，内存存储、访问速度快，适合高并发、大数据量、数据模型灵活的场景。'),
  SA('如何理解Redis事务。','Redis 事务通过 MULTI 开启、命令入队、EXEC 一次性执行，DISCARD 取消；语法错误时全部命令不执行，运行期错误仅出错命令报错、不支持回滚；WATCH 监控 key 实现乐观锁。'),
  SA('按照要求写出相应的命令:\nRedis服务器中给一个指定的键 key1设置一定的值 value1;\n删除以前生成键key1;\n创建名为new-key新建一个键并检查是否存在。','SET key1 value1（设置键值）\nDEL key1（删除键）\nSET new-key value（创建新键）\nEXISTS new-key（检查是否存在，返回 1 存在 / 0 不存在）'),
  // —— 程序补充题 63-64 ——
  PROG('在企业应用中Redis支持多种语言，现需要根据Java操作Redis步骤来完成程序操作（Redis服务地址为127.0.0.1，端口号为默认）。',`1. new Jedis("127.0.0.1", 6379)                         // 连接 Redis
2. jredis.lpush("list1", "a", "b", "c");              // 列表左侧添加 a b c
3. jredis.rpush("list1", "x");                         // 列表右侧添加 x
4. List<String> list = jredis.lrange("list1", 0, -1);  // 取出所有数据
5. String s : list                                     // 增强 for 遍历
6. Map<String,String> map = new HashMap<>();
   map.put("name","zhangsan"); map.put("age","20"); map.put("sex","male");
   jredis.hmset("user", map);                          // 一次性添加多条数据
7. jredis.expire("name", 30000);                       // 设置 key=name 有效期 30000 秒
8. jredis.sadd("myset", "1", "2", "3", "4");           // 集合添加
9. jredis.close();                                     // 释放连接`),
  PROG('根据Java操作Redis步骤来完成程序操作（Redis服务地址为127.0.0.1，端口号为默认）。',`1. new Jedis("127.0.0.1", 6379)                          // 连接 Redis
2. jredis.set("message", "Hello");                      // 设置 message 值为 Hello
3. jredis.append("message", "EveryOne");                // 追加内容
4. jredis.del("message");                               // 删除 message
5. Map<String,String> map = new HashMap<>();
   map.put("name","zhangsan"); map.put("age","20"); map.put("sex","male");
   jredis.hmset("user", map);                           // 一次性添加多条数据
6. jredis.expire("name", 30000);                        // 设置 key=name 有效期 30000 秒
7. jredis.rpush("info", "helloword", "1", "2", "3");    // 对 info 右侧插入数据
8. List<String> list = jredis.lrange("info", 0, -1);    // 取出 info 所有数据
9. String s : list                                      // 增强 for 遍历列表
10. jredis.sadd("myset", "1", "2", "3", "4");           // 集合添加
11. Set<String> myset = jredis.smembers("myset");       // 遍历集合
12. String s : myset                                    // 增强 for 遍历集合
13. jredis.scard("myset")                               // 返回集合元素个数
14. jredis.close();                                     // 释放连接`),
];

// ==================== 替换 Redis 题库 ====================
function replaceRedis(){
  const dbPath = path.join(__dirname, 'parsed', 'questions_data.js');
  const content = fs.readFileSync(dbPath, 'utf8');
  const match = content.match(/const PREPARSED_QUESTIONS = (\[[\s\S]*\]);/);
  if (!match) { console.error('❌ 无法解析题库'); process.exit(1); }
  const existing = JSON.parse(match[1]);

  const redisOld = existing.filter(q => q.subject === 'Redis');
  const kept = existing.filter(q => q.subject !== 'Redis');

  let maxId = 0;
  kept.forEach(q => { const m = q.id && q.id.match(/GEN(\d+)/); if (m) maxId = Math.max(maxId, parseInt(m[1], 10)); });
  newQs.forEach(q => {
    maxId++;
    q.id = 'GEN' + String(maxId).padStart(4, '0');
    q.level = 'B';
    q.topic = '';
    q.correctCount = 0; q.wrongCount = 0;
    q.lastPractice = null; q.nextReview = null; q.reviewStage = 0;
  });

  const merged = [...kept, ...newQs];
  const header = '// 九科完整题库 — ' + merged.length + '题\nconst PREPARSED_QUESTIONS = ';
  fs.writeFileSync(dbPath, header + JSON.stringify(merged, null, 2) + ';\n', 'utf8');
  fs.writeFileSync(path.join(__dirname, 'parsed', 'questions_data.json'), JSON.stringify(merged, null, 2), 'utf8');

  const htmlPath = path.join(__dirname, 'index.html');
  let html = fs.readFileSync(htmlPath, 'utf8');
  html = html.replace(/questions_data\.js\?v=\d+/, 'questions_data.js?v=26');
  fs.writeFileSync(htmlPath, html, 'utf8');

  console.log('✅ 删除旧 Redis 题:', redisOld.length, '道');
  console.log('   新增 Redis 题:', newQs.length, '道');
  console.log('   题库: 原', existing.length, '题 → 现', merged.length, '题');
  const types = {};
  newQs.forEach(q => types[q.type] = (types[q.type]||0)+1);
  console.log('   新 Redis 题型:', JSON.stringify(types));
}

replaceRedis();




