# 📊 五门科目 — 期末冲刺分析

> 源文件：`作业.md`（11998行）
> 分析日期：2026-06-22
> 剩余时间：5天

---

## 科目总览

| # | 科目 | 题量 | 题型 | 建议天数 |
|---|------|------|------|----------|
| 1 | **Java Web (JSP/Servlet)** | ~100题 | 简答·程序·选择·多选·填空 | 1天 |
| 2 | **Linux 操作系统** | ~200题 | 单选(78)·多选(41)·填空(32)·简答(20+) | 1.5天 |
| 3 | **Hadoop 大数据技术** | ~100题 | 单选·多选·判断·填空·简答 | 1天 |
| 4 | **Scala & Spark** | ~51题 | Scala 单选(21)+多选(10)+判断(10)；Spark 单选(7)+多选(3) | 0.5天 |
| 5 | **HBase / ZooKeeper / 大数据概念** | ~70题 | 单选(25+14)·多选(9+5)·判断(6)·填空(10+4)·简答(4+1) | 1天 |

---

---

# 科目一：Java Web (JSP/Servlet)

### 📋 题目构成

| 题型 | 数量 | 备注 |
|------|------|------|
| 简答题 | 13+4 | 概念简答 + 代码简答 |
| 程序题 | 6 | 填空式代码补充 |
| 选择题 | ~40+ | 单选为主 |
| 多选题 | ~16+ | |
| 填空题 | ~10+ | |

---

## 🔴 A 级（必考 — 同类题出现 5+ 次）

### 1. Servlet 生命周期 ⭐⭐⭐⭐⭐

**出现：7+ 次** | 简答·选择·填空均有

```
init() → service() → destroy()
  ↑ 只调1次     ↑ 每次请求    ↑ 关闭时
```

**必背答案**：
> Servlet 生命周期有三个过程：
> (1) 初始化：Servlet 第一次被请求加载时，服务器创建 Servlet 对象，调用 init() 完成初始化。
> (2) 响应请求：实例化的 Servlet 对象调用 service() 响应客户请求。后续每个客户请求，Web 服务启动新线程，在该线程中调用 service()。
> (3) 销毁：服务器关闭时调用 destroy()，销毁 Servlet 对象。
> init() 只调用一次，service() 每次请求都调用。

---

### 2. JSP 9 大隐式对象 ⭐⭐⭐⭐⭐

**出现：7+ 次** | 简答必背·选择常考·填空

| 对象 | 类型 | 一句话 |
|------|------|--------|
| `request` | HttpServletRequest | 请求对象，获取请求数据 |
| `response` | HttpServletResponse | 响应对象，回传客户端 |
| `session` | HttpSession | 会话对象，一次会话期间有效 |
| `application` | ServletContext | 应用上下文，整个 Web 应用共享 |
| `config` | ServletConfig | Servlet 配置对象 |
| `out` | JspWriter | 输出流对象 |
| `page` | Object | 当前 JSP 页面对应的 Servlet 实例 |
| `pageContext` | PageContext | JSP 页面上下文，管理不同作用域属性 |
| `exception` | Throwable | 异常对象（仅错误页面可用） |

---

### 3. 请求转发 vs 重定向 ⭐⭐⭐⭐⭐

**出现：7+ 次** | 简答·选择·程序题核心

| 对比维度 | 转发 (forward) | 重定向 (sendRedirect) |
|----------|---------------|---------------------|
| 浏览器地址栏 | 不变 | 变 |
| 请求次数 | 1 次（服务器行为） | 至少 2 次（客户端行为） |
| 共享 request 数据 | ✅ 可以 | ❌ 不能 |
| 速度 | 快 | 慢（浏览器发新请求） |
| 跨域/跨服务器 | ❌ 不能 | ✅ 可以 |
| 代码 | `request.getRequestDispatcher(url).forward(req, resp)` | `response.sendRedirect(url)` |

**口诀**：转发 ~~服务器内部一条线~~，重定向 ~~浏览器重发请求两趟~~。

---

### 4. ServletConfig vs ServletContext ⭐⭐⭐⭐⭐

**出现：7+ 次** | 简答·选择·多选均考

| 维度 | ServletConfig | ServletContext |
|------|--------------|----------------|
| 作用范围 | 单个 Servlet | 整个 Web 应用 |
| 生命周期 | 随 Servlet 初始化创建 | 随 Web 应用启动创建 |
| 共享性 | 仅当前 Servlet | 所有 Servlet 共享 |
| 获取方式 | `getServletConfig().getInitParameter("xxx")` | `getServletContext().getInitParameter("xxx")` |

---

### 5. Filter 过滤器 ⭐⭐⭐⭐⭐

**出现：7+ 次** | 编码题·选择·多选·填空

**三个方法**：`init()` → `doFilter()` → `destroy()`

**接口**：`implements Filter`

**FilterChain**：`chain.doFilter(request, response)` 放行

**经典题**：IP 访问控制 — 对特定 IP 调用 `response.sendRedirect("error.jsp")` 或放行。

---

### 6. MVC 模式 ⭐⭐⭐⭐⭐

**出现：6+ 次** | 简答·选择·代码大题

> MVC = Model(模型) + View(视图) + Controller(控制器)
> - Model：封装数据存储和业务逻辑
> - View：用户交互页面，展示数据
> - Controller：调度者，根据请求分派给 Model，结果分派给 View

**代码模板**（登录为例）：
```
login.jsp(View) → LoginServlet(Controller) → LoginDao(Model) → 结果返回
                                              ↓
                            web.xml 配置 Servlet 映射
```

> 这就是科目一唯一的代码大题模式，题 Q7、Q14、Q18 都是同一模式！

---

### 7. JSP 生命周期（运行流程）⭐⭐⭐⭐⭐

**出现：6+ 次** | 简答·选择·填空

> 第一次请求：.jsp → 转译成 .java（Servlet源码）→ 编译 .class → 执行响应
> 再次请求：直接执行 .class 字节码

**四步**：Request → 转译 → 编译加载 → Response

---

### 8. Session vs Cookie ⭐⭐⭐⭐⭐

**出现：5+ 次** | 简答·选择·多选·填空·程序题

| 维度 | Session | Cookie |
|------|---------|--------|
| 存储位置 | 服务器 | 客户端浏览器 |
| 安全性 | 较安全 | 相对不安全 |
| 服务器压力 | 增加服务端压力 | 无 |
| 容量限制 | 无严格限制 | 单个 ≤ 4KB |
| 典型用途 | 登录信息等重要数据 | 记住密码、偏好设置 |

**程序题代码**：
```java
// 存 Session
request.getSession().setAttribute("name", name);
// 存 Cookie
Cookie cookie = new Cookie("name", name);
cookie.setMaxAge(72 * 60 * 60);  // 72小时
response.addCookie(cookie);
```

---

## 🟡 B 级（高概率 — 3~4 次）

| 知识点 | 次数 | 要点 |
|--------|------|------|
| **JSTL 流程控制** | 4+ | `<c:if>` 单分支、`<c:choose>/<c:when>/<c:otherwise>` 多分支、`<c:forEach>` |
| **JSP 动作标签** | 4+ | `<jsp:useBean id="user" class="..." scope="session"/>`、`<jsp:setProperty>`、`<jsp:getProperty>` — 程序题 Q15/Q17 必考 |
| **四大作用域** | 4+ | page(最小) < request < session < application(最大) |
| **JSP 指令** | 4+ | `<%@ page %>` (import, errorPage, isErrorPage)、`<%@ include %>`、`<%@ taglib %>` |
| **include 指令 vs 动作** | 3+ | 指令=编译时合并源码；动作=运行时合并 HTML + 可传参 |
| **EL 表达式** | 3+ | `${name}` 取 session 属性、`${user.name}` 取 JavaBean、`${map.key}` 取 Map |
| **Tomcat 配置** | 4+ | 默认端口 8080、`server.xml`、WEB-INF 目录不可直接访问、work 目录存编译文件 |
| **编码** | 3+ | `request.setCharacterEncoding("UTF-8")`、`response.setContentType("text/html;charset=UTF-8")`、`pageEncoding="UTF-8"` |
| **JDBC 步骤** | 3+ | ①加载驱动 `Class.forName` ②获取连接 `DriverManager.getConnection` ③创建 Statement ④执行 SQL ⑤释放资源 |
| **web.xml 配置 Servlet** | 3+ | `<servlet>` + `<servlet-mapping>` 一对，必会写 |

---

## 🟢 C 级（低概率）

- C/S vs B/S 体系结构
- JavaBean 书写规范（公共类 + 无参构造 + getter/setter + 私有属性）
- JSP 颜色条
- 学生信息添加（BeanUtils / QueryRunner — 背答案即可）
- 简易计算器 Servlet（背答案即可）
- GenericServlet / HttpServlet 继承关系
- HTTP 状态码（302=重定向 / 404=未找到 / 500=服务器错误）
- GET vs POST 区别

---

## ✍️ 科目一 — 大题速记卡

### 登录 MVC（Q7 = Q14 = Q18 — 三道题本质一模一样）

```
【login.jsp】
${errorMsg}
<form action="loginServlet" method="post">
  用户名:<input type="text" name="username"/>
  密码:<input type="password" name="password"/>
  <input type="submit" value="登录"/>
</form>

【LoginDao】
public boolean login(String username, String password) {
    if("zhangsan".equals(username) && "111222".equals(password))
        return true;
    else
        return false;
}

【LoginServlet】
String username = request.getParameter("username");
String password = request.getParameter("password");
LoginDao dao = new LoginDao();
if(dao.login(username, password)) {
    response.sendRedirect("/welcome.jsp");  // 成功→重定向
} else {
    request.setAttribute("errorinfo", "用户名密码错误！");
    request.getRequestDispatcher("/login.jsp").forward(request, response);  // 失败→转发
}

【web.xml】
<servlet>
  <servlet-name>loginServlet</servlet-name>
  <servlet-class>com.inspur.Controller.LoginServlet</servlet-class>
</servlet>
<servlet-mapping>
  <servlet-name>loginServlet</servlet-name>
  <url-pattern>/loginServlet</url-pattern>
</servlet-mapping>
```

### JSP 动作标签操作 JavaBean（Q15 = Q17）

```
<jsp:useBean id="user" class="com.inspur.bean.User" scope="session"/>
<jsp:setProperty name="user" property="name" value="lisi"/>
<jsp:setProperty name="user" property="age" value="18"/>
<jsp:getProperty name="user" property="name"/>
<jsp:getProperty name="user" property="age"/>
```

---

---

# 科目二：Linux 操作系统

### 📋 题目构成

| 题型 | 数量 |
|------|------|
| 单选题 | 78 |
| 多选题 | 41 |
| 填空题 | 32 |
| 简答题 | 20+ |

---

## 🔴 A 级（必考 — 出现 10+ 次）

### 1. 文件/目录操作命令 ⭐⭐⭐⭐⭐

**出现：30+ 次** | 全部题型覆盖

| 命令 | 用途 | 高频选项 |
|------|------|----------|
| `ls -a` | 列出所有文件（含隐藏） | `-a`=all |
| `ls -l` | 长格式显示详细信息 | —— |
| `cd` / `cd ~` | 切换目录 / 回主目录 | —— |
| `pwd` | 显示当前完整路径 | —— |
| `mkdir -p` | 递归创建目录 | `-p`=parents |
| `rm -r` | 递归删除 | `-r`=recursive |
| `cp` | 复制文件 | —— |
| `mv` | 移动/重命名 | 改名=同目录下移动 |
| `touch` | 创建空文件 | 已有文件则更新时间戳 |
| `cat` | 查看/合并文件 | `cat f1 > f2` 等价复制 |
| `more` / `less` | 分页查看 | less 可光标移动 |
| `head` / `tail` | 看头/尾 N 行 | `tail -f` 实时跟踪 |
| `file` | 判断文件类型 | —— |

---

### 2. 权限管理 chmod ⭐⭐⭐⭐⭐

**出现：15+ 次** | 数字↔符号互转必考

| 数字 | 权限 | 记忆 |
|------|------|------|
| 7 | rwx | 4+2+1 |
| 6 | rw- | 4+2 |
| 5 | r-x | 4+1 |
| 4 | r-- | 4 |
| 3 | -wx | 2+1 |

> `chmod 764 file` → 所有者 rwx(7), 组 rw-(6), 其他 r--(4)

**符号法**：`chmod u+x` 用户加执行、`chmod a-x` 全部减执行

---

### 3. vi/vim 编辑器 ⭐⭐⭐⭐⭐

**出现：12+ 次** | 单选·多选·填空·简答

| 操作 | 命令 |
|------|------|
| 打开文件 | `vi /path/file` |
| 进入插入模式 | `i`(光标前) `a`(光标后) `o`(下一行) `O`(上一行) |
| 退出插入模式 | `Esc` |
| 保存退出 | `:wq` |
| 不保存退出 | `:q!` |
| 删除行 | `dd`(命令模式) |
| 复制行 | `yy` |
| 粘贴 | `p` |
| 移动到第 n 行 | `nG` |
| 向右移 n 字符 | `nl` |
| 重复上次操作 | `.` |
| 取消行号 | `set nonu` |

**三种模式**：命令模式 ↔ 插入模式 ↔ 末行模式（`:` 进入）

---

### 4. 用户管理 ⭐⭐⭐⭐⭐

**出现：10+ 次** | 单选·多选·填空·简答

| 命令 | 用途 |
|------|------|
| `useradd -d /home/xxx user` | 创建用户指定家目录 |
| `usermod` | 修改用户（**不能删除账户**） |
| `userdel -r` | 删除用户及主目录 |
| `su` | 切换用户 / 临时变超级用户 |
| `passwd` | 修改密码 |
| `chown` | 改变文件所有者 |

---

### 5. Shell 编程基础 ⭐⭐⭐⭐⭐

**出现：15+ 次** | 单选·多选·填空·简答

| 考点 | 要点 |
|------|------|
| 变量赋值 | `变量名=值` (等号两边无空格！) |
| 引用变量 | `$变量名` 或 `${变量名}` |
| 命令替换 | `$(命令)` 或 `` `命令` `` |
| 脚本第一行 | `#!/bin/bash` |
| 参数个数 | `$#` |
| 注释 | `#` |
| 流程控制 | `if` / `for` / `case` / `while` |
| 单引号vs双引号 | 单引号不解释特殊字符 |
| 环境变量 | `export 变量名=值` |

---

## 🟡 B 级（高概率 — 5~9 次）

| 知识点 | 次数 | 要点 |
|--------|------|------|
| **tar 压缩解压** | 8+ | `tar -zcvf` 压缩、`tar -xzvf` 解压、`tar -C /` 指定目录、`tar -t` 列出内容 |
| **进程管理** | 8+ | `ps -aux` 查看全部、`kill PID` 终止、`killall` 终止所有同名、`top` 实时监控 |
| **管道/重定向** | 8+ | `\|` 管道、`>` 覆盖重定向、`>>` 追加、`2>&1` 错误合并到标准输出 |
| **grep** | 5+ | `grep 字符串 文件` 查找、支持正则 |
| **目录结构** | 5+ | `/bin`基本命令、`/etc`配置、`/home`用户主目录、`/boot`内核、`/tmp`临时 |
| **关机** | 4+ | `shutdown -h +30` / `shutdown -h 12:30` / `shutdown -c` 取消 / `halt` |
| **Shell 环境变量** | 5+ | `export`、`$()`、PATH |
| **软硬链接** | 3+ | 软链接=快捷方式(删原文件失效)，硬链接=共享 i 节点(删原文件仍可用) |

---

## 🟢 C 级（低概率）

- awk / sed
- 通配符（`* ? []`）
- i 节点
- FTP 端口（20/21）
- declare 命令
- basename / dirname
- NAT / Host-Only 网络模式
- Linux 安装方式
- `cp` 选项（-r 递归复制目录）
- `rmdir`（只能删空目录）

---

## ✍️ 科目二 — 高频易错速记

```
ls -a        → 显示隐藏文件
ls -l        → 长格式详细信息
chmod 764    → rwx rw- r--
chmod 755    → rwx r-x r-x
mv old new   → 重命名（同目录下就是改名）
touch file   → 创建空文件 / 更新时间戳
cat f1 > f2  → 相当于复制
tail -f      → 实时跟踪文件尾部
userdel -r   → 删用户+删主目录
usermod      → 改用户，但不能删用户
变量名=值     → 等号两边绝不能有空格
$#           → Shell 脚本参数个数
:q!          → vi不保存退出
:wq          → vi保存退出
o            → vi在当前行下插入新行
dd           → vi删行
kill -9 PID  → 强杀进程
tar -zcvf    → 压缩
tar -xzvf    → 解压
su           → 切换超级用户
```

---

---

# 科目三：Hadoop 大数据技术

### 📋 题目构成

| 题型 | 数量 |
|------|------|
| 单选题 | ~30+ |
| 多选题 | ~16+ |
| 判断题 | ~10+ |
| 填空题 | ~15+ |
| 简答题 | ~8 |

覆盖：HDFS + YARN + MapReduce

---

## 🔴 A 级（必考 — 出现 8+ 次）

### 1. HDFS 架构 ⭐⭐⭐⭐⭐

**出现：20+ 次** | 全部题型

| 组件 | 职责 | 一句话 |
|------|------|--------|
| **NameNode** | 管理命名空间和元数据 | 存"目录"，不存数据 |
| **DataNode** | 存储实际数据块 | 真正干活存数据的 |
| **SecondaryNameNode** | 合并 fsimage 和 edits 日志 | NameNode 的"秘书"，不是热备 |

> ❌ NameNode 存数据块（错！）
> ✅ NameNode 存元数据，DataNode 存数据块

---

### 2. YARN 架构 ⭐⭐⭐⭐⭐

**出现：15+ 次** | 单选·多选·填空·简答

| 组件 | 职责 |
|------|------|
| **ResourceManager** | 主节点，全局资源调度（不直接执行任务） |
| **NodeManager** | 管理单个节点资源 |
| **ApplicationMaster** | 为应用向 RM 申请资源，协调任务 |
| **Container** | 封装 CPU + Memory 的最小资源单位 |

> YARN 全称：**Yet Another Resource Negotiator**

---

### 3. Block 与副本 ⭐⭐⭐⭐⭐

**出现：10+ 次** | 单选·多选·判断·填空·简答

| 参数 | 值 |
|------|-----|
| Block 默认大小 | **128MB**（HDFS 2.x） |
| 默认副本数 | **3** |
| 副本参数 | `dfs.replication` |
| 500MB 文件分几块 | **4 个**（128MB×3 + 116MB×1） |
| 副本放置策略 | 机架感知：第一个副本在客户端节点，第二个在不同机架，第三个在同机架不同节点 |

---

### 4. MapReduce 执行流程 ⭐⭐⭐⭐⭐

**出现：10+ 次** | 单选·多选·判断·简答

```
Input → Split → Map → Shuffle → Reduce → Output
```

| 阶段 | 要点 |
|------|------|
| Split | 一个分片对应一个 Map 任务，默认 = Block 大小 |
| Map | 按行处理，输入 key=偏移量(LongWritable) value=行内容(Text) |
| **Shuffle** | Map 和 Reduce 间的关键环节（排序、分区、合并） |
| Reduce | 默认 Reduce 数量 = 1 |

---

### 5. HDFS 常用命令 ⭐⭐⭐⭐⭐

**出现：12+ 次** | 单选·填空·简答

| 命令 | 用途 |
|------|------|
| `hdfs dfs -mkdir -p /path` | 创建多级目录 |
| `hdfs dfs -put local hdfs` | 上传文件 |
| `hdfs dfs -get hdfs local` | 下载文件 |
| `hdfs dfs -ls -R /path` | 递归列出 |
| `hdfs dfs -cat /path` | 查看文件内容 |
| `hdfs dfs -rm -r /path` | 递归删除 |
| `hdfs dfs -getmerge /path local` | 合并下载 |
| `hdfs dfs -moveFromLocal` | 移动（上传后删本地） |
| `hdfs namenode -format` | 格式化 NameNode |

---

## 🟡 B 级（高概率 — 4~7 次）

| 知识点 | 次数 | 要点 |
|--------|------|------|
| **HDFS HA** | 5+ | Active/Standby 双 NameNode，ZooKeeper 实现故障切换 |
| **HDFS Federation** | 3+ | 多 NameSpace，每个 NameNode 管理一部分目录 |
| **ZooKeeper 作用** | 4+ | HA 中 NameNode 故障自动切换 |
| **不适合小文件** | 3+ | NameNode 元数据压力大 → 合并 / SequenceFile / HBase 解决 |
| **Hadoop 配置文件** | 5+ | `hadoop-env.sh`(JAVA_HOME)、`core-site.xml`、`hdfs-site.xml` |
| **SSH 免密** | 2+ | 避免集群操作时反复输密码 |
| **YARN Web 端口** | 2+ | 8088 |
| **HDFS 写数据流程** | 简答 | Client→NameNode→DataNode Pipeline（副本管道） |

---

## 🟢 C 级（低概率）

- 序列化类（Text, LongWritable, IntWritable）
- InputSplit 默认与 Block 对齐
- 机架感知细节
- Container 封装 CPU+Memory
- YARN 三种调度器（FIFO/Capacity/Fair）
- `-ignoreCrc` 忽略校验
- `start-dfs.sh` 启动集群
- `appendToFile` 多文件追加

---

## ✍️ 科目三 — 简答题速记

### HDFS 写数据流程
```
Client 请求 NameNode → NameNode 返回 DataNode 列表
→ Client 向第一个 DataNode 写数据 → DataNode 间形成 Pipeline 副本传输
→ 写完所有副本后返回确认
```

### HDFS 不适合小文件
```
原因：①元数据占 NameNode 内存 ②频繁交互降低吞吐 ③Map 任务浪费
解决：①合并小文件 ②SequenceFile ③HBase ④Flume/Spark Streaming 聚合
```

### YARN 工作流程
```
Client 提交 → ResourceManager 分配 Container 启动 ApplicationMaster
→ AM 向 RM 申请资源 → RM 分配 Container
→ AM 在 Container 中启动 Map/Reduce 任务 → 完成后释放
```

---

---

# 科目四：Scala & Spark

### 📋 题目构成

| 部分 | 题型 | 数量 |
|------|------|------|
| Scala | 单选题 | 21 |
| Scala | 多选题 | 10 |
| Scala | 判断题 | 10 |
| Spark | 单选题 | 7（每题10分） |
| Spark | 多选题 | 3（每题10分） |

---

## 🔴 A 级 — Scala 必考

### 1. 数组 Array / ArrayBuffer ⭐⭐⭐⭐⭐

**出现：6+ 次**

| 类型 | 特点 | 创建 |
|------|------|------|
| `Array` | **定长**，长度不可变，元素可变(val arr) | `Array(1,2,3)` |
| `ArrayBuffer` | **变长**，可动态增删元素 | `ArrayBuffer(1,2,3)` |

> 频繁增删用 ArrayBuffer；
> val arr = Array(1,2,3), arr(0)=10 ✅；arr = Array(4,5,6) ❌

---

### 2. 元组 Tuple ⭐⭐⭐⭐⭐

**出现：6+ 次**

| 要点 | 说明 |
|------|------|
| 最大元素数 | **22** |
| 访问方式 | `t._1` `t._2` `t._3`（下标从 **1** 开始！） |
| 元素类型 | 每个位置可以不同数据类型 |
| 可变性 | 创建后不可修改 |
| 错误写法 | ❌ `t(0)` / `t(1)` — 不能用圆括号下标 |

---

### 3. 集合 List / Set / Map ⭐⭐⭐⭐⭐

**出现：5+ 次**

| 集合 | 默认 | 特点 |
|------|------|------|
| `List` | 不可变 | 有序可重复，`List(1,2,3)` |
| `Set` | — | **无序不可重复** |
| `Map` | — | 键值对 key-value |

> 三大核心集合体系：List / Set / Map（多选必考）

---

## 🟡 B 级 — Scala

| 知识点 | 次数 | 要点 |
|--------|------|------|
| **var vs val** | 3+ | `var` 可重新赋值，`val` 不可重新赋值（final）；但 val 引用的对象内元素可改 |
| **def 方法定义** | 3+ | `def 方法名(参数:类型): 返回类型 = { ... }` |
| **可变/不可变集合** | 3+ | List 默认不可变；ArrayBuffer 可变；var 数组元素可改 |

---

## 🔴 A 级 — Spark 必考（每题 10 分，占总分 100！）

### 1. RDD 核心概念 ⭐⭐⭐⭐⭐

| 要点 | 说明 |
|------|------|
| 全称 | **弹性分布式数据集**（Resilient Distributed Dataset） |
| 五大特性 | 可分区的、可并行计算、容错（血缘）、不可变、可持久化 |
| 最大优势 vs MapReduce | **基于内存计算** |
| ❌ 不属于的特性 | 可直接修改数据 |
| ❌ 不属于 Spark 生态 | Spring |

---

### 2. 转换 vs 行动操作 ⭐⭐⭐⭐⭐

| 类型 | 特征 | 举例 |
|------|------|------|
| **转换 (Transformation)** | **惰性求值**，不立即执行 | `map` `filter` `flatMap` |
| **行动 (Action)** | 触发实际计算 | `count` `collect` `reduce` |

---

### 3. 集群运行模式 ⭐⭐⭐⭐

四种：**Standalone** / **YARN** / **Mesos** / **Local**

---

## 🟢 C 级 — Scala 小题

- 数组下标从 **0** 开始（不是 1）
- 元组下标从 **1** 开始（`._1`）
- 多行注释：`/* */`
- 返回值类型写在参数列表**后面**：`def add(a:Int): Int`
- 有参方法：`def add(a:Int)` 不是 `def add(a:Int,)`
- 不可变引用 = `val`

---

---

# 科目五：HBase / ZooKeeper / 大数据概念

### 📋 题目构成

| 题型 | 数量 |
|------|------|
| 单选题 | 25 + 14 |
| 多选题 | 5 + 9 |
| 判断题 | 6 |
| 填空题 | 10 + 4 |
| 简答题 | 4 + 1 |

---

## 🔴 A 级（必考）

### 1. HBase 架构 ⭐⭐⭐⭐⭐

**出现：6+ 次**

| 组件 | 职责 |
|------|------|
| **HMaster** | 主节点：Region 分配、负载均衡、状态监控、DDL 操作 |
| **RegionServer** | 从节点：处理客户端读写请求 |
| **ZooKeeper** | HMaster 选举、元数据存储、集群协调 |
| **Client** | 与 RegionServer 直接交互（缓存元数据加速访问） |

---

### 2. ZooKeeper 机制 ⭐⭐⭐⭐⭐

**出现：6+ 次**

| 要点 | 说明 |
|------|------|
| 集群数量 | **2n+1** 台（奇数），允许 n 台失效 |
| ZNode 最大 | **1MB** |
| ZNode 类型 | 持久、临时、持久顺序、临时顺序 |
| 选举机制 | **过半机制**（超过半数同意才选出 Leader） |
| myid 文件 | 每个 ZK 节点的唯一标识 |
| 查看子节点 | `ls /path` |

---

### 3. HBase 数据模型 ⭐⭐⭐⭐

| 概念 | 说明 |
|------|------|
| **RowKey** | 行键，数据按 RowKey 字典序排序 |
| **Column Family** | 列族，创建表时定义 |
| **Timestamp** | 时间戳，标识版本 |
| **Cell** | 单元格 = RowKey + Column Family + Qualifier + Timestamp |
| **NameSpace** | 命名空间，默认 default |

---

## 🟡 B 级（高概率）

| 知识点 | 要点 |
|------|------|
| **HBase 特点** | 列式存储、稀疏性（空列不占空间）、易扩展、海量存储（PB级）、高并发读写 |
| **HBase 安装配置** | 依赖 HDFS + ZooKeeper；`HBASE_MANAGES_ZK=false` 使用外部 ZK；`hbase.cluster.distributed=true`；环境变量配 `/etc/profile` |
| **端口** | HBase Master Web 默认 **16010**（1.0+）；ZooKeeper 默认 **2181** |
| **HMaster 职责** | Region 分配和监控、负载均衡、故障恢复 |
| **HDFS 存数据** | HBase 底层存储是 HDFS |
| **ZooKeeper 观察者模式** | Watcher 机制，数据变化时通知客户端 |

---

## 🟢 C 级

- 单机模式 vs 分布式模式
- `source` 命令使配置生效
- `quit` 退出 zkCli
- `zkServer.sh status` 查看 ZK 状态
- Apache 顶级项目时间（HBase 2010年）
- 大数据 4V 特点：Volume / Velocity / Variety / Value（**价值密度低不是高！**）

---

---

# 🗓️ 5 天冲刺计划

| 天 | 科目 | 策略 |
|----|------|------|
| **Day 1** | Linux | A 级 5 大块速通（文件命令 + 权限 + vi + 用户 + Shell），单选 78 题全做一遍 |
| **Day 2** | Java Web | A 级 8 大块速通 + 登录 MVC 代码默写 2 遍 + JSP 动作标签默写 |
| **Day 3** | Hadoop | A 级 5 大块速通 + 3 个简答题默写（写流程/小文件/YARN流程） |
| **Day 4 上午** | Scala & Spark | Scala A 级 + Spark 全部（每题10分！） |
| **Day 4 下午** | HBase / ZK | A+B 级速通 |
| **Day 5** | 综合复习 | 各科 A 级再过一遍 + 代码题/CDT 题默写 + 错题回顾 |

---

## 🎯 每科 80% 覆盖策略

| 科目 | 80% 覆盖靠什么 |
|------|---------------|
| **Java Web** | A级8块(60%) + MVC代码大题(20%) = 80% |
| **Linux** | A级5块(50%) + B级命令/进程/压缩(30%) = 80% |
| **Hadoop** | A级5块(60%) + HDFS命令+HA简答(20%) = 80% |
| **Scala & Spark** | 数组+元组+集合(50%) + RDD+转换/行动(30%) = 80% |
| **HBase/ZK** | HBase架构+ZK机制(50%) + 数据模型+配置(30%) = 80% |

---

*蕾姆整理完毕 ✿ 主人 5 天加油！がんばって〜 (๑•̀ㅂ•́)و✧*
