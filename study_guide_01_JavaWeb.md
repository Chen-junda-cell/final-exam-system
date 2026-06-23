# ☕ Java Web 零基础速成教材

> 对应课件：第1章~第12章 | 考试占比 18% | 建议学习：1天

---

## 先搞懂：Java Web 是什么？

你平时打开浏览器访问网站（比如百度、淘宝），背后就是 Web 技术在工作。

**Java Web** = 用 Java 语言写网站后端。核心任务就是：
> 用户在浏览器里点按钮、填表单 → 服务器收到请求 → Java 程序处理 → 返回网页给用户

整个课程学的是：**怎么用 Java 写一个能跑在浏览器里的网站**。

---

## 第1章：Java Web 开发基础 — B/S 和 C/S

### B/S vs C/S（必考简答）

| 模式 | 全称 | 例子 | 特点 |
|------|------|------|------|
| **C/S** | Client/Server 客户端/服务器 | 微信App、QQ、LOL | 需要安装客户端软件，速度快，升级麻烦 |
| **B/S** | Browser/Server 浏览器/服务器 | 淘宝网、百度 | 不用安装，打开浏览器就能用，升级只需更新服务器 |

> 你学的 Java Web 就是做 B/S 架构的网站。

---

## 第2章：JSP 简介 — 什么是 JSP？

### 一句话理解

**JSP = 能写 Java 代码的 HTML 页面**。

普通 HTML 是静态的（内容写死），JSP 可以动态生成内容（比如显示当前用户名）。

```
普通HTML：<h1>欢迎</h1>          → 永远显示"欢迎"
JSP：     <h1>欢迎，<%= 用户名 %></h1> → 显示"欢迎，张三"
```

### JSP 怎么跑起来的？（必考）

```
第一次请求：  .jsp 文件 → 自动翻译成 .java 文件 → 编译成 .class → 执行
第二次请求：  直接用 .class 执行（快！）
```

> 四步口诀：**请求 → 翻译 → 编译 → 响应**

---

## 第3章：JSP 脚本元素和指令

### 三种写 Java 代码的方式

| 标签 | 语法 | 用途 | 例子 |
|------|------|------|------|
| **脚本片段** | `<% 代码 %>` | 写 Java 逻辑 | `<% int a=1; %>` |
| **表达式** | `<%= 变量 %>` | 输出到页面 | `<%= name %>` |
| **声明** | `<%! 代码 %>` | 定义方法/变量 | `<%! int count=0; %>` |

### 三种指令（必考）

| 指令 | 写法 | 作用 |
|------|------|------|
| **page** | `<%@ page import="java.util.*" %>` | 导包、设编码 |
| **include** | `<%@ include file="头.jsp" %>` | 把另一个页面源码合并进来（编译时） |
| **taglib** | `<%@ taglib prefix="c" uri="..." %>` | 引入标签库（如 JSTL） |

> **include 指令 vs include 动作**（高频考点）：
> - 指令 `<%@ include %>`：**编译时**合并源码，被包含的改了要重新编译
> - 动作 `<jsp:include>`：**运行时**合并 HTML 结果，改了立刻生效，还能传参数

---

## 第4章：JSP 隐式对象 — 不用 new 就能用的 9 个对象

### 九大隐式对象（必考！背名字+用途）

| 对象 | 类型 | 通俗理解 |
|------|------|----------|
| **request** | HttpServletRequest | 装"用户请求"的箱子（表单数据在这里） |
| **response** | HttpServletResponse | 装"服务器回应"的箱子 |
| **session** | HttpSession | 一个用户从进到出的"会话"（购物车用这个） |
| **application** | ServletContext | 整个网站共享的"全局公告栏" |
| **out** | JspWriter | 往页面写内容的"笔" |
| **config** | ServletConfig | 当前页面的"配置单" |
| **page** | Object | 当前页面本身 |
| **pageContext** | PageContext | 页面上下文，能拿到其他所有对象 |
| **exception** | Throwable | 异常对象（仅错误页面可用） |

### 四大作用域（从小到大）

```
page（本页） < request（一次请求） < session（一次会话） < application（整个网站）
```

> 口诀：**页请会应** — page → request → session → application

---

## 第5章：JSP 标准动作 — 操作 JavaBean 的三剑客

### 什么是 JavaBean？

就是一个**普通的 Java 类**，但是：
- 属性是私有的（private）
- 提供公有的 getter/setter 方法
- 必须有无参构造方法

```java
public class User {
    private String name;  // 私有属性
    public String getName() { return name; }  // getter
    public void setName(String name) { this.name = name; }  // setter
    public User() {}  // 无参构造
}
```

### 三个动作标签（程序题必考！）

```jsp
<!-- 创建User对象，取名user，放到session里 -->
<jsp:useBean id="user" class="com.xxx.User" scope="session"/>

<!-- 给name属性赋值"张三" -->
<jsp:setProperty name="user" property="name" value="张三"/>

<!-- 取出name属性显示 -->
<jsp:getProperty name="user" property="name"/>
```

---

## 第6章：EL 表达式 — 更简单的取值方式

**EL = Expression Language**，用 `${}` 代替复杂的 Java 代码。

| 想做的事情 | 旧写法 | EL写法 |
|-----------|--------|--------|
| 取 session 中的用户名 | `<%= session.getAttribute("name") %>` | `${name}` |
| 取 JavaBean 的属性 | `<%= user.getName() %>` | `${user.name}` |
| 取 Map 的值 | `<%= map.get("key") %>` | `${map.key}` |

> EL 会自动从 page → request → session → application 依次找，找到就返回。

---

## 第7章：JSP 中使用数据库 — JDBC

### JDBC 四步走（必考）

```
① 加载驱动：  Class.forName("com.mysql.jdbc.Driver")
② 获取连接：  Connection conn = DriverManager.getConnection(url, user, pwd)
③ 执行SQL：   Statement stmt = conn.createStatement()
              ResultSet rs = stmt.executeQuery("SELECT * FROM users")
④ 释放资源：  关闭 ResultSet → Statement → Connection
```

---

## 第8章：JSTL 标准标签库

JSTL 让你不用在 JSP 里写 Java 代码，用标签代替。

### 核心标签

```jsp
<!-- 单条件判断（没有else！） -->
<c:if test="${age > 18}">成年人</c:if>

<!-- 多条件判断（类似 switch） -->
<c:choose>
  <c:when test="${score >= 90}">优秀</c:when>
  <c:when test="${score >= 60}">及格</c:when>
  <c:otherwise>不及格</c:otherwise>
</c:choose>

<!-- 循环 -->
<c:forEach items="${list}" var="item">
  ${item.name}
</c:forEach>
```

> c:if 只能做单分支，多分支必须用 c:choose。

---

## 第9章：Servlet 概述

### Servlet 是什么？

**Servlet = 运行在服务器上的 Java 程序**，专门处理浏览器请求。

JSP 的本质就是 Servlet（JSP 最终会被翻译成 Servlet 的 Java 代码）。

### 第一个 Servlet

```java
public class MyServlet extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) {
        resp.getWriter().write("Hello World!");
    }
}
```

### web.xml 配置（必会写）

```xml
<servlet>
  <servlet-name>myServlet</servlet-name>
  <servlet-class>com.xxx.MyServlet</servlet-class>
</servlet>
<servlet-mapping>
  <servlet-name>myServlet</servlet-name>
  <url-pattern>/hello</url-pattern>   ← 浏览器访问 /hello 就进这个 Servlet
</servlet-mapping>
```

---

## 第10章：Servlet 深入

### Servlet 生命周期（必考）

```
init()  →  service()  →  destroy()
  ↑           ↑             ↑
创建时调1次  每次请求调    销毁时调
```

### 获取请求参数

```java
String name = request.getParameter("username");  // 获取表单提交的用户名
```

### ServletConfig vs ServletContext（高频）

| | ServletConfig | ServletContext |
|--|--------------|----------------|
| 范围 | 单个 Servlet | 整个 Web 应用 |
| 比喻 | 个人的配置单 | 公司的公告栏 |
| 获取 | getServletConfig() | getServletContext() |

---

## 第11章：过滤器 Filter

### Filter 是什么？

**Filter = 守门员**。所有请求先经过 Filter，Filter 说"放行"才能到 Servlet。

### 用途

- IP 黑名单拦截
- 统一设编码（省得每个 Servlet 都写一遍）
- 权限检查（没登录就跳转登录页）

### 核心代码

```java
public class MyFilter implements Filter {
    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) {
        // 过滤逻辑（比如检查IP）
        String ip = req.getRemoteAddr();
        if ("192.168.70.88".equals(ip)) {
            // 拒绝访问
            req.getRequestDispatcher("/error.jsp").forward(req, resp);
        } else {
            chain.doFilter(req, resp);  // 放行
        }
    }
}
```

---

## 第12章：Servlet 综合 — MVC 模式

### MVC = 三层分工

```
Model（模型）      → 管数据、业务逻辑（Dao 类）
View（视图）       → 管页面显示（JSP）
Controller（控制器）→ 管调度（Servlet）
```

### 登录功能的 MVC 流程

```
1. 用户在 login.jsp 填用户名密码 → 点登录
2. 请求发到 LoginServlet（Controller）
3. LoginServlet 调用 LoginDao（Model）验证
4. 成功 → 重定向到 welcome.jsp
   失败 → 转发回 login.jsp 并显示错误
```

> 这就是考试代码大题的模式！Q7、Q14、Q18 全是这个套路。

---

## 必考代码模板（背下来！）

### 模板 1：MVC 登录

```java
// LoginServlet.java
String username = request.getParameter("username");
String password = request.getParameter("password");
if ("zhangsan".equals(username) && "111222".equals(password)) {
    response.sendRedirect("/welcome.jsp");  // 成功：重定向
} else {
    request.setAttribute("error", "用户名或密码错误");
    request.getRequestDispatcher("/login.jsp").forward(request, response);  // 失败：转发
}
```

### 模板 2：转发 vs 重定向

| | 转发 forward | 重定向 sendRedirect |
|--|-------------|-------------------|
| URL | 不变 | 变 |
| 请求次数 | 1次 | 2次 |
| 能共享 request 数据 | ✅ | ❌ |
| 能跨域 | ❌ | ✅ |

### 模板 3：Session 和 Cookie

```java
// 存 Session
request.getSession().setAttribute("user", username);

// 存 Cookie
Cookie c = new Cookie("user", username);
c.setMaxAge(72 * 60 * 60);  // 72小时
response.addCookie(c);

// EL 取值
${user}  或  ${sessionScope.user}
```

---

## 考试速记卡

```
✅ Servlet生命周期：init → service → destroy
✅ JSP生命周期：翻译 → 编译 → 执行
✅ 9大隐式对象：request response session application config out page pageContext exception
✅ 四大作用域：page < request < session < application
✅ 转发1次请求URL不变可共享数据，重定向2次请求URL变不可共享
✅ MVC：Model(数据) View(页面) Controller(调度)
✅ Filter：守门员，doFilter放行
✅ JDBC四步：加载驱动→获取连接→执行SQL→释放资源
```
