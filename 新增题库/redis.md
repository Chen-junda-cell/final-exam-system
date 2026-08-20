复习2026
题量: 64 满分: 100 作答时间:08-20 09:08至08-20 15:00
一. 单选题（共32题，48.8分）
1. (单选题) 关于NoSQL的说法，错误的一项是( )。
A
为了解决高并发、大数据存储而产生的一种数据库解决方案

B
NoSQL泛指非关系型数据库，内存存储，访问速度非常快

C
NoSQL数据库的代表有Redis、Oracle、MangoDB

D
NoSQL，即 Not only SQL,是关系型数据库的一种良好补充

2. (单选题) Redis默认支持多少个数据库( )。
A
1个

B
5个

C
8个

D
16个

3. (单选题) 如果想在Redis服务器中查找某个以”ja”开头的键，则使用的命令是( )。
A
find ja*

B
match ja*

C
keys ja*

D
get ja*

4. (单选题) 现有一统计某网站的访问量的需求，如果使用Redis存储，使用哪个命令可以使访问量自增1( )。
A
INCR

B
ADD

C
INSERT

D
INCRBY1

5. (单选题) 一个散列最多可以包含多少个字段( )。
A
128

B
216-1

C
512

D
232-1

6. (单选题) 以下关于列表list的描述错误的是( )。
A
列表类型(list)可以存储一个有序的字符串列表

B
列表类型内部是使用双向链表(double linked list)实现的

C
一个列表类型键最多能容纳232-1个元素

D
使用链表的实现的优势是通过索引访问元素非常快

7. (单选题) 以下关于集合的描述，错误的是( )。
A
一个集合类型(set)键可以存储至多232-1个字符串

B
在集合中的每个元素都是不同的

C
在集合中的元素是有序的

D
集合类型在Redis内部是使用值为空的散列表(hash table)实现的

8. (单选题) 已知两个集合，集合setA的元素有:"3" ,"1","2"，集合setB的元素有:"4" ,"1","5"，则执行命令SUNION setA setB后的结果是( )。
A
"1"

B
"3" ,"1","2"

C
"3" ,"1","2" ,"4","5"

D
"3" ,"1","2" ,"4","1","5"

9. (单选题) 以下关于Jedis对象的创建方法，编写错误的是( )。
A
Jedis jedis = new Jedis("localhost")

B
Jedis jredis = new Jedis("192.168.199.136",6379);

C
Jedis jredis = new Jedis("192.168.199.136",6379,1000);

D
Jedis jredis = Jedis("192.168.199.136");

10. (单选题) Redis连接池的相关配置属性参数中，以下哪个是设置最大的等待时间的参数( )。
A
maxIdle

B
maxWait

C
maxActive

D
testOnBorrow

11. (单选题) 以下通过Java应用程序中的jredis对象操作hash类型数据的代码中，错误的是( )。
A
jedis.hset("userInfo", "name", "lisi");

B
String name = jedis.hget("userInfo", "name");

C
List<String> list = jedis.hmget("userInfo", "age", "sex");

D
String name = jedis.get("userInfo", "name");

12. (单选题) 以下关于连接池的描述，错误的是( )。
A
JedisPool是一个线程安全的网络连接池

B
可以用JedisPool创建一些可靠Jedis实例

C
Java程序中获取连接池代码:JedisPool jedisPool = new JedisPool(config,"192.168.32.130",6379)是正确的

D
连接池对象jedisPool一般情况下使用完成后不用手工关闭

13. (单选题) 设置一个key的过期时间，可以通过命令( )实现。
A
expire key seconds

B
unvalid key seconds

C
persist key

D
ttl key

14. (单选题) Redis中除了有序集合外的其他类型，可以使用哪个命令对键值进行排序( )。
A
sort

B
order

C
group by

D
order by

15. (单选题) 以下关于Redis持久化的描述，错误的是( )。
A
持久化，就是将数据放到断电后数据不会丢失的设备中

B
RDB持久化是指在指定的时间间隔内将内存中的数据集快照写入磁盘

C
Redis提供了将内存数据持久化到硬盘，以及用持久化文件来恢复数据库数据的功能

D
Redis只提供了RDB持久化的方式

16. (单选题) Redis支持的数据结构中，以下描述不正确的是( )。
A
字符串类型

B
列表类型

C
散列类型

D
逻辑类型

17. (单选题) 已知数据库中存储了key/value类型的结构数据:name -> “ Jack”，如何获取Jack的值( )。
A
get name

B
set name “Jack”

C
get Jack

D
get “Jack”

18. (单选题) 以下对Redis的键值操作命令中，错误的是( )。
A
move key key1

B
DEL key key2

C
EXPIRE key seconds

D
TLL key

19. (单选题) 对散列Hash的键值如果想一次设置多个属性字段的值，则需要是使用以下哪个命令( )。
A
HSET

B
HMSET

C
HGET

D
HMGET

20. (单选题) 已知列表list中某key的名字是members，如果要向已知列表members的左侧增加元素3，使用的命令是( )。
A
LPUSH members 3

B
RPUSH members 3

C
set members 3

D
LGET members 3

21. (单选题) 已知列表members中的元素有: "3" ,"1","2","4"，"0"，"5"，则执行命令LINDEX members -1 的结果是( )。
A
3

B
1

C
2

D
5

22. (单选题) 以下关于有序集合的描述，错误的是( )。
A
有序集合是在集合类型的基础上为集合中的每个元素都关联了一个分数

B
有序集合类型是使用散列表和跳跃表(skip list)实现的

C
有序集合中每个元素都是不同的，但是他们的分数值却可以相同

D
有序集合类型是Redis的5种数据类型中最低级的类型

23. (单选题) 从已知集合setC中弹出一个元素的命令是( )。
A
LPOP

B
SPOP

C
LRM

D
SMV

24. (单选题) 如果要通过Java应用程序中的对象Jredis设置字符串类型的数据存储，其中键key:name，值value:Jack，则以下代码行正确的是( )。
A
jredis.set("name", "Jack")

B
jredis.set("key", "Jack")

C
jredis.get("name", "Jack")

D
jredis.set("value", "Jack")

25. (单选题) 在Java应用程序中，使用jredis对象的方法jredis.ping()进行测试是否可以成功连接到Redis服务器，如果连接成功，返回的结果是( )。
A
success

B
200

C
PONG

D
error

26. (单选题) Java操作字符串类型时，通过jredis对象给给定的key值:address添加多个数据的方法是( )。
A
mset

B
dset

C
mget

D
sset

27. (单选题) 通过Java应用程序中的jredis对象操作列表，以下哪个方法是从列表左侧添加元素的( )。
A
jedis.lpush("students", "Wang Wu", "Li Si");

B
jedis.rpush("students", "Wang Wu");

C
jedis.lrange("students", "Wang Wu", "Li Si");

D
jedis.push("students", "Wang Wu", "Li Si");

28. (单选题) 通过Java应用程序中操作集合类型，其中获取所有key为letters的元素的方法是( )。
A
jedis.sadd("letters ", "Wang Wu");

B
Set<String> letters = jedis.smembers("letters");

C
jedis.srem("letters ");

D
jedis.sget("students");

29. (单选题) Redis事务中监控一个或多个key的命令是( )。
A
multi

B
watch

C
exec

D
discard

30. (单选题) Redis中放弃执行事务块中的所有命令执行的命令是( )。
A
multi

B
watch

C
unwatch

D
discard

31. (单选题) 在Redis的发布订阅机制的三个部分中，属于Redis服务器端的是( )。
A
发布者

B
订阅者

C
Channel

D
通道

32. (单选题) Redis的RDB持久化，持久化存储的文件名的后缀是( )。
A
rbd

B
rdb

C
dbr

D
drb

二. 多选题（共9题，14.4分）
33. (多选题)
现有一统计某网站的访问量的需求，如果使用Redis存储，使用哪些命令不是访问量自增1



A
INCR



B
ADD



C
INSERT



D
INCRBY1



34. (多选题)
NoSQL数据库的分类有



A
键值存储（Key/Value）数据库



B
列存储数据库



C
文档型数据库



D
图形数据库



35. (多选题)
以下关于集合的描述，错误的是



A
一个集合类型（set）键可以存储至多256个字符串



B
在集合中的每个元素都是不同的



C
在集合中的元素是有序的



D
集合类型在Redis内部是使用值为空的散列表（hash table）实现的



36. (多选题)
任务队列的优点有哪些



A
松耦合



B
紧耦合



C
易于扩展



D
扩展能力相对比较弱



37. (多选题)
以下关于Redis数据库的特性，描述正确的是



A
支持多种类型存储结构



B
内存存储与持久化机制



C
功能比较丰富，可以做缓存、队列、消息订阅/发布



D
简单稳定（相比SQL而言更加简单）



38. (多选题)
NoSQL数据库的分类有



A
键值存储（Key/Value）数据库



B
列存储数据库



C
文档型数据库



D
图形数据库



39. (多选题)
下列属于string类型的命令的是



A
set



B
mset



C
append



D
hexists



40. (多选题)
以下关于有序集合的描述，错误的是



A
有序集合是在集合类型的基础上为集合中的每个元素都关联了一个分数



B
有序集合类型是使用散列表和跳跃表（skip list）实现的



C
有序集合中每个元素都是相同的，他们的分数值也可以相同



D
有序集合类型是Redis的5种数据类型中最低级的类型



41. (多选题)
Redis中通过哪些命令可以实现任务队列



A
SADD



B
LPUSH



C
RPOP



D
BROP



三. 填空题（共12题，19.2分）
42. (填空题)
REmote、_________、_________简写为Redis，是完全开源免费的，是一个高性能的Key/Value数据库。

第1空

第2空

第3空

43. (填空题)
Redis支持的数据类型有字符串类型、哈希类型、 ___________、_________、_________。

第1空

第2空

第3空

44. (填空题)
从已知列表age的两端弹出元素的命令是_________和_________。

第1空

第2空

45. (填空题)
单一Jedis实例不是线程安全的，连接池redisPool是线程________。

第1空

46. (填空题)
ZCARD命令可以获取有序集合的成员数,当 key 存在且是有序集类型时，返回_____________，当key不存在时，返回_________。

第1空

第2空

47. (填空题) Redis在16个数据库之间可以相互切换，如果要切换到数据库4，则使用_________实现。
第1空

48. (填空题) Redis数据库默认的端口是_________。
第1空

49. (填空题) 一个字符串类型的值能存储最大容量是_________。
第1空

50. (填空题) 判断一个键是否存在的命令是_____________，删除删除一个或多个键的命令是_______________ ，获得键的数据类型 _______________。
第1空

51. (填空题) ZCARD命令可以获取有序集合的成员数,当 key 存在且是有序集类型时，返回_____________，当key不存在时，返回_____。
第1空

52. (填空题) 在列表中通过其索引可以获取列表片段，其中索引_____________代表的是最右侧第一个元素。
第1空

53. (填空题) Java应用程序连接Redis服务器，获取服务器上所有key的数量的方法是 ___________
第1空

四. 简答题（共9题，14.4分）
54. (简答题)
什么是NoSQL。


55. (简答题)
按照要求写出相应的命令:
Redis服务器中给一个指定的键 key1设置一定的值 value1;
删除以前生成键key1;
创建名为new-key新建一个键并检查是否存在。


56. (简答题)
按照要求写出相应的命令:
创建有序集合myzset，添加元素"one"，分数1，"two"，分数2;
再给myzset集合分数值增加2;
最后查看myzset中的所有元素及分数。


57. (简答题)
请简述一下连接池方式连接Redis的步骤。


58. (简答题)
Redis事务相关的命令有哪几个?并进行简要说明。


59. (简答题)
按照要求写出相应的命令:
创建集合letters，给此集合一次性添加元素”a”， ”b”，”c”，”d”，然后再随机获取集合中的两个元素。


60. (简答题)
简单介绍什么是NoSQL。


61. (简答题)
如何理解Redis事务。


62. (简答题)
按照要求写出相应的命令:
Redis服务器中给一个指定的键 key1设置一定的值 value1;
删除以前生成键key1;
创建名为new-key新建一个键并检查是否存在。


五. 程序补充题（共2题，3.2分）
63. (程序补充题)
在企业应用中Redis支持多种语言，包括：C、C++、C#、PHP、Java、Python、Go等语言，现需要根据Java操作Redis步骤来完成程序操作，并根据相关提示完成Java代码（Redis服务地址为127.0.0.1，端口号为默认）。

public class JobTestDemo {

public static void main(String[] args) {

 //连接虚拟机中的Redis服务

         Jedis jredis =1.                                

     //往列表类型左边增加元素a，b，c。key为list1

     2.                                                      

//往上面列表类型右边增加元素x。

3.                                                      

//取出list1中的所有数据

4.                                                      

//打印list中的数据

       for(5.                             )

                                          

                                           

     

     //一次性添加多条数据：name：zhangsan age：20，sex：male

     6.                                                

     //设置key为name的键的有效期为30000秒

     7.                                      

     //操作集合

     //向集合set中添加数据，键名为myset,值分别为 1，2，3，4

     8.                                        

 

     //释放连接

     9.                                     

}

}

 




64. (程序补充题)
根据Java操作Redis步骤来完成程序操作，并根据相关提示完成Java代码（Redis服务地址为127.0.0.1，端口号为默认）。

public class JobTestDemo {

public static void main(String[] args) {

 //连接虚拟机中的Redis服务

         Jedis jredis = 1.                               

     //设置Redis 键message的值为Hello

       2.                                                    

     //获取键值并打印

     System.out.println("redis message:"+jredis.get("message"));

     //在key为message的value基础上追加内容EveryOne

      3.                                                   

     //获取最新的message的值并打印

     System.out.println("message:"+jredis.get("message"));

     //删除message键值

     4.                                              

     

     //一次性添加多条数据：name：zhangsan age：20，sex：male

     5.                                                

     //设置key为name的键的有效期为30000秒

     6.                                      

     

     //操作列表类型,对键info右侧插入数据 helloword 1 2 3

     7                                        

     //取出list info中的所有数据

     8.                              

    //打印list中的数据

       for(9.                             )

                                       

                                        

     //操作集合

     //向集合set中添加数据，键名为myset,值分别为 1，2，3，4

     10.                                         

     //遍历集合myset

     11.                                    

     //循环打印myset

             for(12.                          )

                                           

                                                                   

     //返回集合myset中元素的个数

      Long count =13.                                         

     //打印个数

System.out.println("count==="+count);

     //释放连接

     14.                                     

}

}