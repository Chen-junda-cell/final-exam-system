

## 一. 简答题（共1题）

### 1. (简答题)简述C/S(客户端/服务器)和B/S(浏览器/服务器)两种体系结构的特点以及二者的区别？（**需要写在纸上拍照上传，标注姓名和学号**）

## 一. 简答题（共1题）

### 1. (简答题)编写一个JSP程序，使用JSP Script显示网页上如下颜色的颜色条：绿色、蓝绿色、黑色、红色、黄色以及粉红色（对应的颜色为：Green、Cyan、Black、Red、Yellow、Pink）。**将代码直接写在题目中，不要提交附件。**

## 一. 简答题（共1题）

### 1. (简答题)编写过滤器，该过滤器可以过滤用户的IP地址以进行访问控制。要建有success.jsp和error.jsp两个页面，当用户访问success.jsp页面时输出欢迎用户访问的信息：“欢迎访问我们的网站！”，而对于IP地址为192.168.70.88的用户则显示error.jsp页面上的拒绝访问信息：“对不起，您的IP地址禁止访问该网站！”。**（将代码和运行结果截图放入附件中进行上传,IP地址是固定的想办法在自己设置）。**

## 一. 简答题（共1题）

### 1. (简答题)用servlet实现以下内容，在登录页面regUser.jsp输入用户名和密码，在servlet中进行用户名和密码验证，用户名用自己的姓名，用户名和密码正确进入登录成功页面，用户名和密码错误进入错误页面。（将代码和运行结果截图放入附件中进行上传）。

## 一. 简答题（共13题）

### 1. （简答题）请谈一谈Servlet的生命周期

- *我的答案：*

  

- *正确答案：*

  Servlet的生命周期主要有以下三个过程组成：(1)初始化servlet。servlet第一次被请求加载时，服务器初始化这个servlet，即创建一个servlet对象，这个对象调用init方法完成必要的初始化工作。(2)实例化的servlet对象再调用service方法响应客户的请求。(3)当服务器关闭时，调用destroy方法，了解servlet对象。init方法只被调用一次，即在servlet第一次被请求加载时调用该方法。当后续的客户请求servlet服务时，Web服务将启动一个新的线程，在该线程中，servlet调用服务方法响应客户的请求，由此，每个客户的每次请求都导致服务方法被调用执行。 

[*人工智能讲解*](javascript:;)

### 2. （简答题）简JSP中的9大隐式对象有哪些？并做简单介绍。

- *我的答案：*

  

- *正确答案：*

  （1）application对象允许代表应用程序上下文，它的JSP页面与包括在相同应用程序中的任何Web共享组件信息。（2）config对象表示servlet的配置对象，允许将初始化数据传递给一个JSP页面（3）exception对象表示异常对象，表示针对错误网页，捕捉一般网页中未捕捉的异常（4）out对象代表提供输出流对象（5）page对象代表JSP页面对应的Servlet类实例（6）pageContext对象是Jsp页面本身的作用上下文，它提供唯一一组方法来管理具有不同域的属性（7）request对象表示请求对象，提供对Http请求数据的访问，同时还提供用于加入特定请求数据的上下文。（8）response对象表示响应对象，表示网页传回客户端的响应（9）session对象表示会话对象，表示与请求有关的会话 

[*人工智能讲解*](javascript:;)

### 3. （简答题）简述JSP中include动作和include指定指令的区别

- *我的答案：*

  

- *正确答案：*

  编译时机：include指令是编译时包含（将被包含页面的Java源码合并到当前页面后共同编译）；jsp:include动作是运行时包含（当前页面与被包含页面分别运行，再合并运行后的HTML结果）。 内容处理：include指令包含是包含页面的源码；jsp:include动作包含是包含页面运行后的HTML结果。3. 参数传递：jsp:include动作支持被包含页面传递参数；include指令不支持。4. 更改影响：include指令下，被包含页面更改后，当前页面需重新编译才会支持更改；jsp:include动作下，被包含页面更改后，直接生效。include指令的核心是编译时将被包含页面的源码与当前页面合并，因此其包含是源码，且被包含页面的更改需当前页面重新编译才生效；而jsp:include动作是在运行阶段将两个页面各自运行后的HTML结果合并，能传递参数，且被包含存在的页面的更改可直接反映在结果中。这两者的区别本质上源于编译与运行时机的不同内容，导致处理、参数传递及更改影响差异。 

[*人工智能讲解*](javascript:;)

### 4. （简答题）JSP运行流程经历了几个时期，每个时期更换的工作是什么

- *我的答案：*

  

- *正确答案：*

  当服务器上的一个JSP页面被第一次请求执行时，服务器上的JSP引擎首先将JSP页面文件转译成一个.java文件，然后servlet，并编译这个java文件生成.class的字节码文件，然后执行字节码文件响应客户端的请求。而当这个JSP页面被再次请求请求时，JSP引擎将直接执行字节码文件来响应客户端。该执行过程可以总结为四步：1）客户端发出Request请求；2）JSP Container 将 JSP 转译成 Servlet 的源代码； 3）将产生的Servlet源代码经过编译后，并加载到内存执行；4）把结果Response(响应)至客户端； 

[*人工智能讲解*](javascript:;)

### 5. （简答题）JavaBean的书写规范是什么，请介绍一下

- *我的答案：*

  

- *正确答案：*

  ①类必须是具体的和公共的；②类中属性必须干燥。③提供公共标准的访问属性的setter和getter方法：对于boolean类型的变量，即布尔逻辑类型的属性，允许使用“is”代替“get”。例如，某JavaBean类中有boolean类型的成员变量saleStatus，则该成员变量的get方法名为isSaleStatus。④必须提供无参的构造方法。 

[*人工智能讲解*](javascript:;)

### 6. (简答题) JSTL核心标签中的流程控制标签包括哪些？请分别说明<c:if>和<c:choose>标签的使用场景及区别。

- *我的答案：*

  

- *正确答案：*

  JSTL核心标签中的流程控制标签包括<c:if>、<c:choose>、<c:when>、<c:otherwise>。<c:if>标签用于单条件判断，仅支持一个条件分支；<c:choose>标签需与<c:when>和<c:otherwi se>配合使用，用于多条件分支判断，类似Java中的switch-case结构。区别在于：<c:if>是单分支判断，无else分支；<c:choose>支持多分支，且<c:when>可定义多个条件，<c:otherwise>为默认分支。

*答案解析：*本题考查对JSTL流程控制标签的掌握，需要区分不同标签的语法结构和适用场景，重点关注多条件分支与单条件分支的差异。

[*人工智能讲解*](javascript:;)

### 7. （简答题）使用MVC开发模式实现登录功能模块。（提示：假设用户名和密码分别为“zhangsan”和“111222”则认为登录成功，否则登录失败，登录成功后跳转到welcome.jsp页面（此页面省略不开发），登录失败后跳回登录页面（login.jsp），并在该页面错误显示信息提示）。要求如下：**（1）开发login.jsp页面：**<%@page language="java" import="java.util. *" pageEncoding="UTF-8"%>**<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">**<html>* *<head>*  *<title>在此处插入标题</title>* *</head>* *<body>**<!—此处补充代码(要求包含用户名、密码和登录按钮)-->*  *</body>**</html>****（2）开发loginDao类：****public class LoginDao{**/*根据用户名和密码验证用户，当用户名和密码分别为xiaohong和123456时，方法返回true，否则返回false*/public boolean login(String username,String password){  //在此处编写代码(不用连接数据库，模拟内容相同即可通过登录验证)   }}**（3）开发LoginServlet类：**com.inspur.Contorller 包；import javax.servlet.ServletException;import javax.servlet.http.HttpServlet;import javax.servlet.http.HttpServletRequest;import javax.servlet.http.HttpServletResponse;public class LoginServlet extends HttpServlet{@Overrideprotected void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {  //在此处编写的代码（完成获取提交用户的用户名和密码数据，并调用loginDao进行登录验证，如果登录错误，则请求转发到login.jsp，并在登录页面上显示错误信息，如果登录信息正确，则重定向到welcome.jsp页面）   }}**（4）配置web.xml文件，配置LoginServlet：**<?xml version="1.0" encoding="UTF-8"?><web-app version="2.5"  xmlns="http://java.sun.com/xml/ns/javaee"  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xsi:schemaLocation="http://java.sun.com/xml/ns/javaee  http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd"> <display-name></display-name>  <欢迎文件列表>  <welcome-file>index.jsp</welcome-file> </welcome-file-list><!-- 在此处配置LoginServlet--> 

- *我的答案：*

  

- *正确答案：*

  （1）${错误信息}     <form action="loginServlet" method =" post ">  用户名:<input type="text" name="username"/><br>  密码：<input type="password" name="password"><br> <input type="提交" value="登录"> </form> （2）if(" zhangsan ".equals(username)&&"111222".equals(password)){  返回 true；   }别的{      返回 false；   } （3）String username = request.getParameter("username");String password = request.getParameter("password");LoginDao loginDao = new LoginDao();if(loginDao.login(username, password)){response.sendRedirect("/welcome.jsp") ;}别的{request.setAttribute("errorinfo", "用户名和密码错误！");request.getRequestDispatcher("/login.jsp").forward(request,response);} （4） <servlet>   <servlet-name>loginServlet</servlet-name>   <servlet-class>com.inspur.Controller.LoginServlet</servlet-class> </servlet> <servlet-mapping><servlet-name>登录Servlet</servlet-name>   <url-pattern>/loginServlet</url-pattern> </servlet-mapping> 

[*人工智能讲解*](javascript:;)

### 8. (简答题)在Servlet开发中，ServletConfig和ServletContext都可用于获取初始化参数，请简述两者的区别，并分别说明如何在Servlet中获取这两个参数。

- *我的答案：*

  

- *正确答案：*

  1. 作用范围：ServletConfig单个Servlet的初始化区别对应，ServletContext整个Web应用的初始化参数。 2. 生命周期：ServletConfig随Servlet初始化创建而创建，根据情况而定；ServletContext随Web应用启动而创建，关闭而休息。 3. 共享性：ServletConfig仅当前Servlet可用，ServletContext所有Servlet共享。 获取方式： 1. ServletConfig参数：通过init方法的ServletConfig参数获取，或在Servlet中调用getServletConfig()方法，再调用getInitParameter("参数名")。 2. ServletContext参数：通过ServletConfig的getServletContext()方法获取ServletContext对象，再调用getInitParameter("参数名")。

*答案解析：*本题考查ServletConfig和ServletContext的核心区别及使用方法，需从作用范围、生命周期、共享性三个维度分析，并掌握参数获取的代码实现。

[*人工智能讲解*](javascript:;)

### 9. （简答题）JSP运行流程经历了几个时期，每个时期更换的工作有哪些

- *我的答案：*

  

- *正确答案：*

  当服务器上的一个JSP页面被第一次请求执行时，服务器上的JSP引擎首先将JSP页面文件转译成一个.java文件，然后servlet，并编译这个java文件生成.class的字节码文件，然后执行字节码文件响应客户端的请求。而当这个JSP页面被再次请求请求时，JSP引擎将直接执行字节码文件来响应客户端。该执行过程可以总结为四步：1）客户端发出Request请求；2）JSP Container 将 JSP 转译成 Servlet 的源代码； 3）将产生的Servlet源代码经过编译后，并加载到内存执行；4）把结果Response(响应)至客户端； 

[*人工智能讲解*](javascript:;)

### 10. （简答题）简述session和cookie的区别

- *我的答案：*

  

- *正确答案：*

  (1)cookie存放数据放在客户的浏览器上，session数据放在服务器上。(2)cookie相对不安全，session相对较安全。别人可以分析在本地的cookie并进行cookie欺骗，如果主要考虑到安全应该使用session。(3)session会在一定期限内保存在服务器上，增加服务器压力。当访问量增加，会占用服务器性能，如果主要考虑到减少服务器性能方面，应该使用cookie。(4)单个cookie在客户端存放有限制，一般不能超过3K。(5)一般，将登录信息等重要信息存放为session；其他信息如果需要保留，可以放置cookie。 

[*人工智能讲解*](javascript:;)

### 11. （简答题）请求转发和请求重定向的定义及它们的区别

- *我的答案：*

  

- *正确答案：*

  请求转发：一种在服务器内部的资源跳转方式。浏览器发送请求给服务器，服务器中回复的资源A接收到请求，资源A处理请求将请求发送给资源B，资源B处理完成后将结果响应给浏览器，请求从资源A到资源B的过程就叫请求转发。请求重定向：是指Web服务器接收到客户端的请求后，由于某些条件限制，无法访问当前请求URL所指向的Web资源，而是指定新的资源路径，让客户端重新发送请求。区别：①请求转发时浏览器URL地址栏不变，重定向时浏览器URL地址栏改变；②请求转发是服务器行为，浏览器只做一次访问请求。重定向是客户端行为，浏览器做至少两次访问请求，页面重定向不是一个请求请求对象；③请求转发可以共享请求里面的数据，重定向不能共享数据；④再次重定向的速度比转发慢，因为浏览器需要发出新的请求，而转发需要；⑤ 重定向可以跨域跨服务器访问，而转发是在web服务器内部进行的，不能跨域 

[*人工智能讲解*](javascript:;)

### 12. （简答题）在做项目的时候会用到MVC开发模式，请简单介绍一下MVC开发模式

- *我的答案：*

  

- *正确答案：*

  MVC，全称是Model View Controller，是模型(model)－视图(view)－控制器(controller)的缩写，是一种软件开发模式，分为三层：①模型层（Model）：封装最核心的功能，用于数据存储及处理用户请求的业务逻辑②视图层（View）：系统和用于交互的页面，从模型中获取数据并表现数据③控制层（Controller）：调度者的角色，即控制器根据视图提交的请求判断将请求和数据排序哪个模型处理，处理后的相关结果哪个视图更新显示。 

[*人工智能讲解*](javascript:;)

### 13. （简答题）在程序的时候需要与数据库进行开发连接，请简述一下 JDBC 开发步骤

- *我的答案：*

  

- *正确答案：*

  （1）加载数据库驱动：通过Class.forName加载驱动程序；（2）建立数据库连接：通过DriverManager类获得表示数据库连接的连接类对象；（3）创建用于向数据库发送SQL的Statement对象，并发送SQL语句；通过Connection对象绑定要执行的语句，生成Statement类对象；完成对数据的添加、删除、查询等操作，并返回ResultSet结果集。通过Statement对象中executeUpdate完成添加、修改等操作，并返回影响的记录条数。（4）释放数据库资源：关闭ResultSet、Statement和Connection等数据资源。 

[*人工智能讲解*](javascript:;)

## 二. 程序题（共6题）

### 14. （程序题）请阅读以下代码，根据要求进行补充，完成用户登录功能。**（一）login.jsp核心代码：**<form action="/login" method="post">     用户名：<input type="text" name="user_name"><br>     密码：<input type="password" name="user_password"><br>     <input type="提交" value="登录">  </form>**（二）LoginServlet.java核心代码：**package com.ks.servlet;public class LoginServlet extends HttpServlet {    protected void doPost(HttpServletRequest request,HttpServletResponse 响应) 抛出异常 {    **//(1)补充代码：获取用户名和密码两个请求参数**                                                                       如果("ksUser".equals(name)&&"ks1234".equals("password")) {      **//(2)补充代码：将用户名保存在Session中**                                               **//(3)补充代码：将用户名保存在cookie中,cookie首次期设置****72小时，在请求头添加cookie**                                                **//(4)补充代码：转发至/WEB-INF/pages/main.jsp**                                               }别的 {      **//(5)补充代码：重定向到登录页面/ks/login.jsp**                                           }  }}**（三）main.jsp核心代码：**<body>**<!(6)补充代码-通过EL表达式获取session中的用户名-->**这是主页，欢迎您，！       </body> **（四）Web.xml核心代码：**<web-app xmlns:xsi=http://www.w3.org/2001/XMLSchema-instance     xmlns="http://java.sun.com/xml/ns/javaee"xsi:schemaLocation="http://java.sun.com/xml/ns/javaeehttp://java.sun.com/xml/ns/javaee/web-app_2_5.xsd" version="2.5"> <display-name>ks</display-name> <欢迎文件列表>  <welcome-file>login.jsp</welcome-file> </welcome-file-list> **<!(7)补充代码-请完成LoginServlet的配置-->**                                                  </web-app>  

- *我的答案：*

  

- *正确答案：*

  （1）request.setCharacterEncoding( "UTF-8" )        String name = request.getParameter( " user_name " )    String password=request.getParameter( "user_password" ) （2）request.getSession().setAttribute( "name",name )   （3）Cookie cookie = new Cookie( "name",name )       cookie.setMaxAge(72 *60* 60)            response.addCookie(cookie)            (4) request.getRequestDispatcher( "/WEB-INF/pages/main.jsp" ).forward(request, response)      (5)response.sendDirect( "/ks/login.jsp" )      （6）${name}           （7）<servlet>   <servlet-name>登录</servlet-name>   <servlet-class>com.ks.servlet.LoginServlet</servlet-class></servlet>                     <servlet-mapping><servlet-name>登录</servlet-name>  <url-pattern>/login</url-pattern></servlet-mapping>                  

[*人工智能讲解*](javascript:;)

### 15. （程序题）假设有如下JavaBean实体类--User类package com.inspur.javaBean;public class User {私有字符串 id；私有字符串名称；私有整数年龄；public User() {}public String getId() {    返回 id；}public void setId(String id) {    this.id= id;}public String getName() {    返回名称；}public void setName(String name) {    this.name = name;  }public int getAge() {    返回年龄；}public void setAge(int age) {this.age = 年龄;  }}要求在JSP页面对User类进行相关操作。<%@ 页面语言="java" import="java.util.*" pageEncoding="UTF-8"%><!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><html><head>   <title>在此处插入标题</title>  </head>  <body><!-- 利用jsp的动作标签创建User类的对象，对象名要求为用户，并把创建后的user对象保存在session范围中-->________________________（1）___________________________;<!-- 利用JSP动作为user对象的name属性和age属性进行属性，分别为lisi和18 -->______________________（2）_____________________________;______________________（3）_____________________________;<!-- 利用JSP动作获取用户对象的名称和年龄，并在页面中展示输出-->_______________________（4）_________________________;_______________________（5）_____________________; </body></html> 

- *我的答案：*

  

- *正确答案：*

  （1）<jsp:useBean id=”user” class=”com.inspur.javaBean.User ” scope =” session” / >（2）<jsp:setProperty property=”name” name=”user” value=”lisi”/>（3）<jsp:setProperty property=”age” name=”user” value=”18”/>（4）<jsp:getProperty name = "user" property = "name"/>（5）<jsp:getProperty name = "user" property = "age"/> 

[*人工智能讲解*](javascript:;)

### 16. （程序题）请阅读以下代码，根据要求进行补充，完成学生信息添加功能。**（一）addStudent.jsp核心代码** <form action="/addStudent" method="post">  用户名：<input type="text" name="name"><br>  密码：<input type="text" name="age"><br>  地址：<input type="text" name="sex"><br>  <input type="submit" value="添加学生"> </form>**（二）Student.java（JavaBean）核心代码**public class Student {     私有字符串 id；     私有字符串名称；  私有整数年龄；     私密字符串性爱；  public String getId() {return id;}     public void setId(String id) {this.id = id;}     public String getName() {return name;}     public void setName(String name) {this.name = name;}     public int getAge() {return age;}     public void setAge(int age) {this.age = age;}     public String getSex() {return sex;}     public void setSex(String sex) {this.sex = sex;}}**（三）StudentAddServlet核心代码**public class StudentAddServlet extends HttpServlet {public void doPost(HttpServletRequest request,HttpServletResponse 响应) 抛出异常 {      **//（1）补充代码：设置请求编码格式为UTF-8**                                           **//（2）补充代码：获取请求参数，并通过BeanUtils设置到Student****对象中**                                                            int count = new StudentDao().addStudent(student);      **//(3)补充代码：设置响应类型为text/html;charset=UTF-8**                                     **//（4）补充代码：获取PrintWriter对象**                                            如果(count>0) {        writer.print("用户添加成功");      }别的 {        writer.print("用户添加失败");      }    }}**（四）StudentAddDao核心代码**public class StudentDao {  private DataSource ds = DataSourceUtils.getDataSource();  **//(5)补充代码：创建QueryRunner（使用Dbutils操作数据库）**                                       public int addStudent(Student stud) { int count=0; String id=UUID.randomUUID().toString().replace(" ", ""); **//(6)补充代码：编写SQL并通过QueryRunner运行SQL语句**                                                   返回计数； }} 

- *我的答案：*

  

- *正确答案：*

  （1）request.setCharacterEncoding( "UTF-8" )       （2）Student student = new Student()         BeanUtils.populate(student, request.getParameterMap());（3）response.setContentType("text/html;charset=UTF-8"); (4) PrintWriter writer = response.getWriter();     （5）QueryRunner run = new QueryRunner(ds);        （6） 字符串 sql = "insert into stud values(?,?,?,?,?)";       count=run.update(sql,id,stud.getName(),stud.getAge(),stud.getSex()); 

[*人工智能讲解*](javascript:;)

### 17. （程序题）请阅读以下代码，按照要求进行补充。**（一）****用户类****核心代码：**package com.inspur.bean;public class User {私有字符串 id；   私有字符串名称；   私有整数年龄；   **//** **（****1）补充代码：补充id、name、age的****setter****和****getter****方法**________________________________________________________________________________}**（二）用户****.jsp****核心代码：** **<!—** **（****2** **）补充代码：在页面指令中导入User类****-->**<%@ 页 ____________________ pageEncoding="UTF-8"%><!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><html><body>**<!--** **（****3** **）补充代码：****利用jsp的动作标签创建User类的对象，对象名要****求为user，并把创建后的user对象保存在session范围中****-->**___________________________________________________**<!--** **（****4** **）补充代码：****利用JSP动作为用户对象的name属性和age属性进行****赋值，分别为lisi和18** **-->**____________________________________________________;_____________________________________________________;**<!--** **（****5** **）补充代码：****利用****EL****表达式获取用户对象的名称****和年龄，并在页面中展示输出** **-->**__________________________________________________;_______________________________________________; </body></html>2 5 ．使用M VC模式实现用户注册功能**（一）用户。****java****部分代码：**package com.inspur.javaBean;public class User {私有字符串 id；   私有字符串名称；   私钥 S字符串密码；} **（二）****reg.jsp****核心代码** <%@page language="java" import="java.util.*" pageEncoding="UTF-8"%><!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><html>   <head>  <title>用户注册</title> </head> <body>**<!—** **（1）补充代码：编写用户更改单，包括用户名和密码** **-->**________________________________________ </body></html>**（三）****Reg** **Servlet****核心****代码**package com.inspur.servlet;public class RegServlet extends HttpServlet{  protected void doPost(HttpServletRequest request, HttpServletResponseresponse)抛出ServletException、IOException {  **//** **（2）补充代码：完成请求参数获取，并调用RegDao****的****reg方法，如果注册成功则向页面输出注册成功，否则则向页面输出注册失败。**  ________________________________________}}**（四）Reg** **gDao****部分代码**public class RegD ao {  public int reg(String name;String password){  String sql = "insert into users values(?,?,?)"; return new QueryRunner(ds).update(sql,name,password)}}**（四）web.xml****核心****代码：**<?xml version="1.0" encoding="UTF-8"?><web-app version="2.5"  xmlns="http://java.sun.com/xml/ns/javaee"  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xsi:schemaLocation="http://java.sun.com/xml/ns/javaee  http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd">  <display-name></display-name>   **<!—** **（3）补充代码：****此处配置Reg** **Servlet** **--** **>**   ________________________________________________________________________________</web-app> 

- *我的答案：*

  

- *正确答案：*

  （一）（1）public String getId() {return id;}       public void setId(String id) {this.id = id;}    public String getName() {return name;}       public void setName(String name) {this.name = name;}   public int getAge() {return age;}            public void setAge(int age) {this.age = age;}     （2）import="com.inspur.bean.User"          （3）<jsp:useBean id="user" class="com.inspur.bean.User" scop="session"></jsp:useBean>（4）<jsp:setProperty name="user",property="name" value="lisi"></jsp:setProperty>                    <jsp:setProperty name="user",property="age" value="18"></jsp:setProperty>                   （5）${user.name}   $ {user.age}  （二）（1） <form action="reg" method="post">              用户名：<input type="text" name="name">          密码：<input type="password" name="password">       <输入类型=“提交”值=“注册”>        </form>（2）request.setCharacterEncoding("UTF-8")                 String name = request.getParameter("name")           String password=request.getParameter("password")        int count=new RegDao(name,password)              response.setContentType("text/html;charset=UTF-8")       PrintWriter 输出 = response.getwriter()        如果(计数>0){                           out.println("注册成功")              }别的{                       out.println("注册的失败")             }（3）<servlet>   <servlet-name>Reg</servlet-name>   servlet-class>com.inspur.servlet.RegServlet</servlet-class></servlet>                      <servlet-mapping><servlet-name>Reg</servlet-name>  <url-pattern>/reg</url-pattern></servlet-mapping>                    

[*人工智能讲解*](javascript:;)

### 18. （程序题）使用MVC开发模式实现登录功能模块。（提示：假设用户名和密码分别为“zhangsan”和“111222”则认为登录成功，否则登录失败，登录成功后跳转到welcome.jsp页面（此页面省略不开发），登录失败后跳回登录页面（login.jsp），并在该页面错误显示信息提示）。要求如下：**1.开发login.jsp页面**<%@page language="java" import="java.util. *" pageEncoding="UTF-8"%>**<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">**<html>* *<head>*  *<title>在此处插入标题</title>* *</head>* *<body>**<!—此处补充代码(要求包含用户名、密码和登录按钮)-->*  *</body>**</html>****2.开发loginDao类：****public class LoginDao{**/*根据用户名和密码验证用户，当用户名和密码分别为xiaohong和123456时，方法返回true，否则返回false*/public boolean login(String username,String password){  //在此处编写代码(不用连接数据库，模拟内容相同即可通过登录验证)   }}**3.开发LoginServlet类：**com.inspur.Contorller 包；import javax.servlet.ServletException;import javax.servlet.http.HttpServlet;import javax.servlet.http.HttpServletRequest;import javax.servlet.http.HttpServletResponse;public class LoginServlet extends HttpServlet{@Overrideprotected void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {  //在此处编写的代码（完成获取提交用户的用户名和密码数据，并调用loginDao进行登录验证，如果登录错误，则请求转发到login.jsp，并在登录页面上显示错误信息，如果登录信息正确，则重定向到welcome.jsp页面）   }}**4.配置web.xml文件，配置LoginServlet：**<?xml version="1.0" encoding="UTF-8"?><web-app version="2.5"  xmlns="http://java.sun.com/xml/ns/javaee"  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xsi:schemaLocation="http://java.sun.com/xml/ns/javaee  http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd"> <display-name></display-name>  <欢迎文件列表>  <welcome-file>index.jsp</welcome-file> </welcome-file-list><!-- 在此处配置LoginServlet-->   </web-app> 

- *我的答案：*

  

- *正确答案：*

  （1）${错误信息}    <form action="loginServlet" method =" post ">  用户名:<input type="text" name="username"/><br>  密码：<input type="password" name="password"><br> <input type="提交" value="登录"> </form> （2）if(" zhangsan ".equals(username)&&"111222".equals(password)){  返回 true；   }别的{        返回 false；   } （3）String username = request.getParameter("username");String password = request.getParameter("password");LoginDao loginDao = new LoginDao();if(loginDao.login(username, password)){response.sendRedirect("/welcome.jsp") ;}别的{request.setAttribute("errorinfo", "用户名和密码错误！");request.getRequestDispatcher("/login.jsp").forward(request,response);} （4） <servlet>   <servlet-name>loginServlet</servlet-name>   <servlet-class>com.inspur.Controller.LoginServlet</servlet-class> </servlet> <servlet-mapping><servlet-name>登录Servlet</servlet-name>   <url-pattern>/loginServlet</url-pattern> </servlet-mapping> 

[*人工智能讲解*](javascript:;)

### 19. （程序题）编程工具外汇功能：要求：编写JSP程序，实现简易计算器。输入“第一个数字” ，选择腐蚀类型（+ 、 - 、*、 / ），输入“第二个数” ，按“计算”按钮，将结果显示在“结果”文本框中。* *（如下图所示）；**![img](https://p.ananas.chaoxing.com/star3/origin/9379942fa7060ec71e4dc5366beffd98.png)** **（ 1 ）开发页面computerPage.jsp ，补充关键代码：**<%@ 页面语言="java" import="java.util.* " pageEncoding="utf-8"%><!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><html> <body><h1>我的外汇</h1><hr>**<!--补充代码****①** **：向servlet发送表单数据-->**  <form action="________ ① ________" method="post">   请输入第一个数字： <input type="text" name="num1""/><br>   请选择攻击方式： <select name="oper">    <option value="+">+</option>    <option value="-">-</option>    <option value=" *">* </option>    <option value="/">/</option>    </select><br>   请输入第二个数： <input type="text" name="num2"/><br>    <input type="submit" value="计算"/><input type="reset" value="重置"/><br>**<!--补充代码****②** **：从请求作用域中获取计算结果-->**结果： <input type="text" name="result" value="________ ② ________"/>   </form>  </body></html>（ 2 ）在com.inspur.servlet包下开发ComputerServlet实现计算功能：package com.inspur.servlet;public class ComputerServlet extends HttpServlet {  public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {    response.setContentType("text/html;charset=utf-8");    PrintWriter 输出 = response.getWriter();**//补充代码****①** **：获取用户提交的数据信息** **//补充代码****②** **：将用户输入的数据转成双型，并编写代码计算结果，将结果****保存到request中，然后跳转页面到computerPage.jsp 。**     输出.flush();    out.close();  }}（ 3 ）在web.xml中配置ComputerServlet ：<?xml version="1.0" encoding="UTF-8"?><web-app version="2.5"   xmlns="http://java.sun.com/xml/ns/javaee"   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"   xsi:schemaLocation="http://java.sun.com/xml/ns/javaee   http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd">  <display-name></display-name>  **<!--补充代码：配置ComputerServlet -->**  <欢迎文件列表>   <welcome-file>index.jsp</welcome-file> </welcome-file-list></web-app> 

- *我的答案：*

  

- *正确答案：*

  （1）① ComputerServlet #与配置servlet使<url-pattern>的值一致即可得分。② <span class="" style="text-wrap-mode: nowrap;" 宋体"="">![img](https://p.ananas.chaoxing.com/star3/origin/3aacfd848b3984326ad1fc8a8ec955ba.png) {sessionScope.result} 或${result} # 与servlet中的存储数据的作用域及名称对应，即可得分。（2）① //用户接收提交的数据信息String num1str=request.getParameter("num1");String num2str=request.getParameter("num2");String operstr=request.getParameter("oper");②double num1=Double.valueOf(num1str);double num2=Double.valueOf(num2str);如果("+".equals(operstr)){   结果 = num1 + num2;}else if("-".equals(operstr)){结果 = num1 - num2;}else if(" *".equals(operstr)){**结果 = num1* num2;}else if("/".equals(operstr)){结果 = num1 / num2;}request.setAttribute("result",result);request.getRequestDispatcher("computerPage.jsp").forward(request, response);（3) <servlet><servlet-name>ComputerServlet</servlet-name> <servlet-class>com.inspur.servlet.ComputerServlet</servlet-class></servlet>  <servlet-mapping> <servlet-name>ComputerServlet</servlet-name> <url-pattern>/ComputerServlet</url-pattern></servlet-mapping> 

  ### 1. (简答题)建立两个组，分别是police（警察）、bandit（土匪），警察组中有XXX(自己名字缩写)用户和jerry1两名警察。土匪组中有xh1和xq1两人。请完成以下权限操作：创建两个组police、bandit根据组分别创建成员，添加自己的成员。XXX(自己名字缩写)用户创建一个文件（XXX.txt）自己可以读写，本组人可以读，其他组没有任何权限XXX(自己名字缩写)用户修改改文件，让其他组人可以有读，本组人可以读写xh1转到警察组，看看是否可以读写。**要求按照步骤进行程序操作截图，并将附件上传。**

  - *我的答案：*

  - ## 一. 单选题（共78题，39分）

    ### 1. (单选题, 0.5分)若要使用进程名来结束进程，应使用（ ）命令

    - A. ps
    - B. kill
    - C. pss
    - D. pstree

    *我的答案:*:*正确答案:*B:kill;

    [*AI讲解*](javascript:;)

    ### 2. (单选题, 0.5分)删除文件命令为( )

    - A. mkdir
    - B. mv
    - C. move
    - D. rm

    *我的答案:*:*正确答案:*D:rm;

    [*AI讲解*](javascript:;)

    ### 3. (单选题, 0.5分)用户编写了一个文本文件 a.txt，想将该文件名称改为 txt.a，下列命令( )可以实现。

    - A. rm a.txt txt.a
    - B. mv a.txt txt.a
    - C. cd a.txt txt.a
    - D. echo a.txt > txt.a

    *我的答案:*:*正确答案:*B:mv a.txt txt.a;

    [*AI讲解*](javascript:;)

    ### 4. (单选题, 0.5分)用于文件系统直接修改文件权限管理命令为:( )。

    - A. chmod
    - B. umask
    - C. chgrp
    - D. chown

    *我的答案:*:*正确答案:*A:chmod;

    [*AI讲解*](javascript:;)

    ### 5. (单选题, 0.5分)如果要列出一个目录下的隐藏文件需要使用命令

    - A.

      ls –a

    - B.

      ls

    - C.

      ls –D

    - D.

      ls –l

    *我的答案:*:*正确答案:*A:ls –a;

    [*AI讲解*](javascript:;)

    ### 6. (单选题, 0.5分)如果执行命令chmod 764 file，那么文件file的权限是

    - A.

      r-xrw-r-x

    - B.

      rwxrw-r--

    - C.

      rw-rw-r--

    - D.

      rw-r--r--

    *我的答案:*:*正确答案:*B:rwxrw-r--;

    [*AI讲解*](javascript:;)

    ### 7. (单选题, 0.5分)FTP 传输中使用哪两个端口（ ）

    - A. 23 和24
    - B. 21 和22
    - C. 20 和21
    - D. 22 和23

    *我的答案:*:*正确答案:*C:20 和21;

    [*AI讲解*](javascript:;)

    ### 8. (单选题, 0.5分)存放Linux 基本命令的目录是什么（ ）

    - A. /tmp
    - B. /bin
    - C. /lib
    - D. /root

    *我的答案:*:*正确答案:*B:/bin;

    [*AI讲解*](javascript:;)

    ### 9. (单选题, 0.5分)下列不是 Linux 系统进程类型的是( )。

    - A. 守护进程
    - B. 就绪进程
    - C. 批处理进程
    - D. 交互进程

    *我的答案:*:*正确答案:*B:就绪进程;

    [*AI讲解*](javascript:;)

    ### 10. (单选题, 0.5分)当登录Linux 时，一个具有唯一进程ID 号的shell将被调用，这个ID是什么

    - A. PID
    - B. NID
    - C. CID
    - D. UID

    *我的答案:*:*正确答案:*A:PID;

    [*AI讲解*](javascript:;)

    ### 11. (单选题, 0.5分)用户编写文件userinfo后，想要将该文件名修改为stuinfo，以下（  ）可以实现

    - A.

      cat userinfo  stuinfo

    - B.

      cp stuinfo  userinfo

    - C.

      mv userinfo  stuinfo

    - D.

      echo userinfo > stuinfo

    *我的答案:*:*正确答案:*C:mv userinfo stuinfo;

    [*AI讲解*](javascript:;)

    ### 12. (单选题, 0.5分)哪个命令可以将普通用户转换成超级用户

    - A.

      super

    - B.

      passwd

    - C.

      su

    - D.

      tar

    *我的答案:*:*正确答案:*C:su;

    [*AI讲解*](javascript:;)

    ### 13. (单选题, 0.5分)usermod 命令无法实现的操作是（ ）

    - A. 账户重命名
    - B. 加锁与解锁用户账户
    - C. 删除指定的账户和对应的主目录
    - D. 对用户密码进行加锁或解锁

    *我的答案:*:*正确答案:*C:删除指定的账户和对应的主目录;

    [*AI讲解*](javascript:;)

    ### 14. (单选题, 0.5分)显示一个文件最后几行的命令是

    - A.

      tail

    - B.

      tac

    - C.

      rear

    - D.

      last

    *我的答案:*:*正确答案:*A:tail;

    [*AI讲解*](javascript:;)

    ### 15. (单选题, 0.5分)欲把当前目录下的 file1.txt 复制为 file2.txt，正确的命令是（ ）

    - A. cat file2.txt file1.txt
    - B. copy file1.txt file2.txt
    - C. cat file1.txt > file2.txt
    - D. cp file1.txt | file2.txt

    *我的答案:*:*正确答案:*C:cat file1.txt > file2.txt;

    [*AI讲解*](javascript:;)

    ### 16. (单选题, 0.5分)在 vi 编辑器中的命令模式下，键入( )可在光标当前所在行下添加一新行。

    - A. A
    - B. o
    - C. a
    - D. i

    *我的答案:*:*正确答案:*B:o;

    [*AI讲解*](javascript:;)

    ### 17. (单选题, 0.5分)在 shell 编程时，可以完成声明变量并赋值的格式是( )。

    - A. $变量名=值
    - B. 变量名=$值
    - C. 变量名=值
    - D. $变量名=$值

    *我的答案:*:*正确答案:*C:变量名=值;

    [*AI讲解*](javascript:;)

    ### 18. (单选题, 0.5分)若要将当前目录中的myfile.txt 文件压缩成myfile.txt.tar.gz,则实现的命令为（ ）。

    - A. tar –zcvf myfile.txt.tar.gz myfile.txt
    - B. tar –zcvf myfile.txt myfile.txt.tar.gz
    - C. tar –cvf myfile.txt.tar.gz myfile.txt
    - D. tar –cvf myfile.txt myfile.txt.tar.gz

    *我的答案:*:*正确答案:*A:tar –zcvf myfile.txt.tar.gz myfile.txt;

    [*AI讲解*](javascript:;)

    ### 19. (单选题, 0.5分)如果要列出一个目录下的所有文件需要使用命令行( )。

    - A. ls–a
    - B. ls–l
    - C. ls
    - D. ls–d

    *我的答案:*:*正确答案:*A:ls–a;

    [*AI讲解*](javascript:;)

    ### 20. (单选题, 0.5分)能够查看当前工作区的完整绝对路径的命令是(  )

    - A.

      path

    - B.

      pwd

    - C.

      cd

    - D.

      ls

    *我的答案:*:*正确答案:*B:pwd;

    [*AI讲解*](javascript:;)

    ### 21. (单选题, 0.5分)下列命令中可以起到对文件进行重命名作用的命令是( )。

    - A. rm
    - B. ls
    - C. mv
    - D. cp

    *我的答案:*:*正确答案:*C:mv;

    [*AI讲解*](javascript:;)

    ### 22. (单选题, 0.5分)某文件的组外成员的权限为只读；所有者有全部权限；组内的权限为读与写，则该文件的权限为。

    - A. 764
    - B. 467
    - C. 674
    - D. 476

    *我的答案:*:*正确答案:*A:764;

    [*AI讲解*](javascript:;)

    ### 23. (单选题, 0.5分)建立一个新文件可以使用的命令为（ ）

    - A. chmod
    - B. cp
    - C. touch
    - D. more

    *我的答案:*:*正确答案:*C:touch;

    [*AI讲解*](javascript:;)

    ### 24. (单选题, 0.5分)下面关于i节点描述错误的是（） 。

    - A.

      i节点和文件是一一对应的

    - B.

      通过i节点实现文件的逻辑结构和物理结构的转换

    - C.

      i节点能描述文件占用的块数

    - D.

      i节点描述了文件大小和指向数据块的指针

    *我的答案:*:*正确答案:*A:i节点和文件是一一对应的;

    [*AI讲解*](javascript:;)

    ### 25. (单选题, 0.5分)显示文件"longfile"的最后10行，下面那个命令是正确的 

    - A.

      tail logfile

      

    - B.

      taiL －d 10 longfile

      

    - C.

      head longfile

      

    - D.

       head －10 longfile

      

    *我的答案:*:*正确答案:*A:tail logfile ;

    [*AI讲解*](javascript:;)

    ### 26. (单选题, 0.5分)当字符串用单引号（’’）括起来时，SHELL将

    - A.

      执行引号中的命令

    - B.

      结束进程

    - C.

      解释引号内的特殊字符

    - D.

      不解释引号内的特殊字符

    *我的答案:*:*正确答案:*D:不解释引号内的特殊字符;

    [*AI讲解*](javascript:;)

    ### 27. (单选题, 0.5分)为了将当前目录下的压缩归档文件 name.zip 解压缩，我们可以使用( )。

    - A. unzip name.zip
    - B. unzip -q name.zip
    - C. zip xvzf name.zip
    - D. unzip -n name.zip

    *我的答案:*:*正确答案:*A:unzip name.zip;

    [*AI讲解*](javascript:;)

    ### 28. (单选题, 0.5分)若当前目录为 /home，命令 ls–l 将显示 home 目录下的( )。

    - A. 文件的具体信息
    - B. 所有隐含文件
    - C. 所有文件
    - D. 所有非隐含文件

    *我的答案:*:*正确答案:*A:文件的具体信息;

    [*AI讲解*](javascript:;)

    ### 29. (单选题, 0.5分)linux中root用户的代表符号为(   ) 

    - A.

      // 

      

    - B.

      $

      

    - C.

      /**/

      

    - D.

      \# 

      

    *我的答案:*:*正确答案:*D:# ;

    [*AI讲解*](javascript:;)

    ### 30. (单选题, 0.5分)确定myfile的文件类型的命令是 

    - A.

      whatis myfile

      

    - B.

      file myfile

      

    - C.

      type -q myfile

      

    - D.

      type myfile

      

    *我的答案:*:*正确答案:*B:file myfile ;

    [*AI讲解*](javascript:;)

    ### 31. (单选题, 0.5分)下面关于Shell的说法，不正确的是 

    - A.

      用户与Linux内核之间的接口程序

      

    - B.

      编译型的程序设计语言

      

    - C.

      操作系统的外壳

      

    - D.

      一个命令语言解释器

      

    *我的答案:*:*正确答案:*B:编译型的程序设计语言 ;

    [*AI讲解*](javascript:;)

    ### 32. (单选题, 0.5分)在shell中，export命令的作用是 

    - A.

      在子shell中运行一条命令

      

    - B.

      使在子shell中可以使用命令历史记录

      

    - C.

      提供nfs分区给网络中的其它系统使用

      

    - D.

      为其它应用程序设置环境变量

      

    *我的答案:*:*正确答案:*D:为其它应用程序设置环境变量 ;

    [*AI讲解*](javascript:;)

    ### 33. (单选题, 0.5分)在使用mkdir命令创建新的目录时，在其父目录不存在时先创建父目录的选项是（）。

    - A. -f
    - B. -m
    - C. -p
    - D. -d

    *我的答案:*:*正确答案:*C:-p;

    [*AI讲解*](javascript:;)

    ### 34. (单选题, 0.5分)下列哪个命令在建立一个 tar归档文件的时候列出详细列表（ ）。

    - A. tar -t
    - B. tar -cv
    - C. tar –r
    - D. tar -cvf

    *我的答案:*:*正确答案:*A:tar -t;

    [*AI讲解*](javascript:;)

    ### 35. (单选题, 0.5分)自由软件的含义是( )。

    - A. 软件发行商不能向用户收费
    - B. 用户不需要付费
    - C. 只有软件作者才能向用户收费
    - D. 软件可以自由修改和发布

    *我的答案:*:*正确答案:*D:软件可以自由修改和发布;

    [*AI讲解*](javascript:;)

    ### 36. (单选题, 0.5分)一个bash shell脚本的第一行是（ ）

    - A. #!/bin/bash
    - B. #/bin/bash
    - C. #/bin/csh
    - D. /bin/bash

    *我的答案:*:*正确答案:*A:#!/bin/bash;

    [*AI讲解*](javascript:;)

    ### 37. (单选题, 0.5分)按下( )键能终止当前运行的命令。

    - A. Ctrl-F
    - B. Ctrl-C
    - C. Ctrl-B
    - D. Ctrl-D

    *我的答案:*:*正确答案:*B:Ctrl-C;

    [*AI讲解*](javascript:;)

    ### 38. (单选题, 0.5分)看当前位置下，所有以“a”开头,且只有两个字符的文件，可以实现的命令是 

    - A.

      ls -a#

      

    - B.

      ls -a*

      

    - C.

      ls -a?

      

    - D.

      ls -a%

      

    *我的答案:*:*正确答案:*C:ls -a? ;

    [*AI讲解*](javascript:;)

    ### 39. (单选题, 0.5分)在LINUX中，要查看文件内容，可使用（ ）命令

    - A. login
    - B. cd
    - C. more
    - D. logout

    *我的答案:*:*正确答案:*C:more;

    [*AI讲解*](javascript:;)

    ### 40. (单选题, 0.5分)怎样更改一个文件的权限设置？

    - A.

      change

    - B.

      attrib

    - C.

      file

    - D.

      chmod

    *我的答案:*:*正确答案:*D:chmod;

    [*AI讲解*](javascript:;)

    ### 41. (单选题, 0.5分)cd 命令可以改变用户的当前目录，当用户键入命令“cd”并按Enter键后，（ ）

    - A. 当前目录改为上一级目录
    - B. 当前目录改为用户主目录
    - C. 当前目录不变，屏幕显示当前目录
    - D. 当前目录改为根目录

    *我的答案:*:*正确答案:*B:当前目录改为用户主目录;

    [*AI讲解*](javascript:;)

    ### 42. (单选题, 0.5分)以下不属于linux操作系统的是 

    - A.

      xp

      

    - B.

      suse

      

    - C.

      centos7

      

    - D.

      redhat 

      

    *我的答案:*:*正确答案:*A:xp ;

    [*AI讲解*](javascript:;)

    ### 43. (单选题, 0.5分)你使用命令“vi  /etc/inittab”查看该文件的内容，你不小心改动了一些内容，为了防止系统出问题，你不想保存所修改内容，你应该如何操作(  ) 。 

    - A.

      在编辑模式下，键入“ESC”键直接退出vi

    - B.

      在末行模式下，键入:x! 

    - C.

      在末行模式下，键入:wq

    - D.

      在末行模式下，键入:q!

    *我的答案:*:*正确答案:*D:在末行模式下，键入:q!;

    [*AI讲解*](javascript:;)

    ### 44. (单选题, 0.5分)如下 shell 脚本程序: #!/bin/bash declare -i Number Number=1+2+3 echo "$Number" 执行脚本时输出的值为( )。

    - A. 6
    - B. “1+2+3”
    - C. 123
    - D. 1+2+3

    *我的答案:*:*正确答案:*A:6;

    [*AI讲解*](javascript:;)

    ### 45. (单选题, 0.5分)LINUX 用于启动系统所需加载的内核程序位于( )。

    - A. /
    - B. /proc
    - C. /boot
    - D. /lib/modules/2.4.20_8/kernel

    *我的答案:*:*正确答案:*C:/boot;

    [*AI讲解*](javascript:;)

    ### 46. (单选题, 0.5分)如何快速切换到用户John 的主目录下？

    - A. cd @John
    - B. cd &John
    - C. cd ~John
    - D. cd #John

    *我的答案:*:*正确答案:*C:cd ~John;

    [*AI讲解*](javascript:;)

    ### 47. (单选题, 0.5分)改变文件所有者的命令为（ ）

    - A. touch
    - B. chmod
    - C. chown
    - D. cat

    *我的答案:*:*正确答案:*C:chown;

    [*AI讲解*](javascript:;)

    ### 48. (单选题, 0.5分)以下命令中，可以将用户身份临时改变为root的是

    - A. logout
    - B. su
    - C. SU
    - D. login

    *我的答案:*:*正确答案:*B:su;

    [*AI讲解*](javascript:;)

    ### 49. (单选题, 0.5分)通常在哪个目录存放配置文件信息 

    - A.

      /var

      

    - B.

      /etc

      

    - C.

      /home

      

    - D.

      /boot

      

    *我的答案:*:*正确答案:*B:/etc ;

    [*AI讲解*](javascript:;)

    ### 50. (单选题, 0.5分)shell程序中声明数组类变量的方式是 

    - A.

      declare -a

      

    - B.

      declare -e

      

    - C.

      declare –v

      

    - D.

      declare -i

      

    *我的答案:*:*正确答案:*A:declare -a ;

    [*AI讲解*](javascript:;)

    ### 51. (单选题, 0.5分)如果执行命令#chmod 746 file.txt，那么该文件的权限是 

    - A.

      --xr—rwx

      

    - B.

      rwxr--rw-

      

    - C.

      rwxr--r—

      

    - D.

      rw-r--r--

      

    *我的答案:*:*正确答案:*B:rwxr--rw- ;

    [*AI讲解*](javascript:;)

    ### 52. (单选题, 0.5分)在使用 vi 编辑器时，如果需要取消行号需要在末行模式下输入的指令是( )。

    - A. get no
    - B. set no
    - C. get nonu
    - D. set nonu

    *我的答案:*:*正确答案:*D:set nonu;

    [*AI讲解*](javascript:;)

    ### 53. (单选题, 0.5分)Linux系统配置文件一般存放于以下（ ）路径下

    - A.

      root

    - B.

      home

    - C.

      etc

    - D.

      bin

    *我的答案:*:*正确答案:*C:etc;

    [*AI讲解*](javascript:;)

    ### 54. (单选题, 0.5分)usermod 命令无法实现的操作是( )。

    - A. 账户重命名
    - B. 对用户密码进行加锁或解锁
    - C. 加锁与解锁用户账户
    - D. 删除指定的账户和对应的主目录

    *我的答案:*:*正确答案:*D:删除指定的账户和对应的主目录;

    [*AI讲解*](javascript:;)

    ### 55. (单选题, 0.5分)对top命令描述正确的是（ ）

    - A.

      查看进程名称

    - B.

      查看线程详情情况

    - C.

      用于实时动态显示 Linux进程 的动态信息

    - D.

      显示内存情况

    *我的答案:*:*正确答案:*C:用于实时动态显示 Linux进程 的动态信息;

    [*AI讲解*](javascript:;)

    ### 56. (单选题, 0.5分)以长格式列目录时，若文件test的权限描述为：drwxrw-r–，则文件test的类型及文件主的权限是

    - A.

      普通文件、读写

    - B.

      目录文件、读写执行

    - C.

      目录文件、读写

    - D.

      普通文件、读

    *我的答案:*:*正确答案:*B:目录文件、读写执行;

    [*AI讲解*](javascript:;)

    ### 57. (单选题, 0.5分)将n1行到n2行之间的内容拷贝到第n3行下的末行模式关键字是 

    - A.

      m

      

    - B.

      co

      

    - C.

      d

      

    - D.

      c

      

    *我的答案:*:*正确答案:*B:co ;

    [*AI讲解*](javascript:;)

    ### 58. (单选题, 0.5分)Linux 系统的联机帮助命令是( )。

    - A. man
    - B. mkdir
    - C. cd
    - D. tar

    *我的答案:*:*正确答案:*A:man;

    [*AI讲解*](javascript:;)

    ### 59. (单选题, 0.5分)默认情况下管理员创建了一个用户，就会在(   )目录下创建一个用户主目录

    - A.

      /usr

    - B.

      /etc

    - C.

      /home

    - D.

      /root

    *我的答案:*:*正确答案:*C:/home;

    [*AI讲解*](javascript:;)

    ### 60. (单选题, 0.5分)Shell 程序的注释符为( )。

    - A. @
    - B. %
    - C. #
    - D. !

    *我的答案:*:*正确答案:*C:#;

    [*AI讲解*](javascript:;)

    ### 61. (单选题, 0.5分)在给定文件中查找与设定条件相符字符串的命令为（ ）

    - A. find
    - B. sort
    - C. grep
    - D. gzip

    *我的答案:*:*正确答案:*C:grep;

    [*AI讲解*](javascript:;)

    ### 62. (单选题, 0.5分)假设文件fileA的符号链接为fileB，那么删除fileA后，下面的描述正确的是（ ） 。

    - A. 因为fileB未被删除，所以fileA会被系统自动重新建立
    - B. fileB会随fileA的删除而被系统自动删除
    - C. fileB也随之被删除
    - D. fileB仍存在，但是属于无效文件

    *我的答案:*:*正确答案:*D:fileB仍存在，但是属于无效文件;

    [*AI讲解*](javascript:;)

    ### 63. (单选题, 0.5分)关于 Linux 安装方式说法错误的是( )。

    - A. 如果 Linux 的安装程序无法启动图形安装程序，即使用户选择图形安装，也会自动的转入字符安装方式
    - B. 图形安装模式耗费的系统资源比较少，字符方式耗费的系统资源较多
    - C. 字符方式速度也比图形方式略快
    - D. 图形安装方式易于使用

    *我的答案:*:*正确答案:*B:图形安装模式耗费的系统资源比较少，字符方式耗费的系统资源较多;

    [*AI讲解*](javascript:;)

    ### 64. (单选题, 0.5分)在 centos Linux 系统中，默认的 shell 是(同时也是使用最广泛的)( )。

    - A. csh
    - B. bash
    - C. gnush
    - D. ash

    *我的答案:*:*正确答案:*B:bash;

    [*AI讲解*](javascript:;)

    ### 65. (单选题, 0.5分)以下哪个命令可以终止一个用户的所有进程( )。

    - A. killall
    - B. kill
    - C. skillall
    - D. skill

    *我的答案:*:*正确答案:*A:killall;

    [*AI讲解*](javascript:;)

    ### 66. (单选题, 0.5分)关闭linux 系统（不重新启动）可使用（ ）命令

    - A. halt
    - B. reboot
    - C. shutdown -r
    - D. ctrl+alt+del

    *我的答案:*:*正确答案:*A:halt;

    [*AI讲解*](javascript:;)

    ### 67. (单选题, 0.5分)使用标准的输出重定向符号(>)，重定向至‘file01'文件，能使文件 file01 的数据( )。

    - A. 被复制
    - B. 被移动
    - C. 被覆盖
    - D. 被追加新内容

    *我的答案:*:*正确答案:*C:被覆盖;

    [*AI讲解*](javascript:;)

    ### 68. (单选题, 0.5分)以下命令可以把当前目录下（/home/test）的压缩文件myftp.tar.gz解压缩到/目录下的命令是 

    - A.

      tar xvzf myftp.tar.gz /

      

    - B.

      tar xvzf myftp.tar.gz -C /

      

    - C.

      tar cvzf myftp.tar.gz /

      

    - D.

      tar cvzf myftp.tar.gz -C /

      

    *我的答案:*:*正确答案:*B:tar xvzf myftp.tar.gz -C / ;

    [*AI讲解*](javascript:;)

    ### 69. (单选题, 0.5分)下列shell中检查数值的表达式的写法描述正确的是 

    - A.

      x -gt y 检查x是否大于y

      

    - B.

      x -gt y 检查x是否小于y

      

    - C.

      x -ne y 检查x和y是否相等

        

    - D.

      x -eq y 为检查x和y是否不相等

      

    *我的答案:*:*正确答案:*A:x -gt y 检查x是否大于y ;

    [*AI讲解*](javascript:;)

    ### 70. (单选题, 0.5分)有关vi的命令模式的dd命令描述正确的是 

    - A.

      删除光标所在的行并进入插入模式

      

    - B.

      删除文件开头的行

      

    - C.

      删除文件末尾的行

      

    - D.

      删除光标所在的行

      

    *我的答案:*:*正确答案:*D:删除光标所在的行 ;

    [*AI讲解*](javascript:;)

    ### 71. (单选题, 0.5分)在vi 编辑器中的命令模式下，重复上一次对编辑的文本进行的操作，可使用（）命令。

    - A. 下箭头
    - B. “.”
    - C. “*”
    - D. 上箭头

    *我的答案:*:*正确答案:*B:“.”;

    [*AI讲解*](javascript:;)

    ### 72. (单选题, 0.5分)/etc/passwd文件中存放(  )

    - A.

      用户账号基本信息

    - B.

      用户组信息

    - C.

      管理员口令的加密信息

    - D.

      文件系统信息

    *我的答案:*:*正确答案:*A:用户账号基本信息;

    [*AI讲解*](javascript:;)

    ### 73. (单选题, 0.5分)在 bash 中, 在一条命令后加入 "2>&1" 意味着 

    - A.

      标准错误输出重定向到标准输出

      

    - B.

      标准错误输出重定向到标准输入

      

    - C.

      标准输入重定向到标准错误输出

      

    - D.

      标准输出重定向到标准输入

      

    *我的答案:*:*正确答案:*A:标准错误输出重定向到标准输出 ;

    [*AI讲解*](javascript:;)

    ### 74. (单选题, 0.5分)vi 中哪条命令是不保存强制退出( )。

    - A. :wq
    - B. :q!
    - C. :quit
    - D. :wq!

    *我的答案:*:*正确答案:*B::q!;

    [*AI讲解*](javascript:;)

    ### 75. (单选题, 0.5分)存放 Linux 基本命令的目录是什么( )。

    - A. /tmp
    - B. /root
    - C. /bin
    - D. /lib

    *我的答案:*:*正确答案:*C:/bin;

    [*AI讲解*](javascript:;)

    ### 76. (单选题, 0.5分)Linux 有三个查看文件的命令，若希望在查看文件内容过程中可以用光标上下移动来查看文件内容，应使用命令( )。

    - A. more
    - B. less
    - C. menu
    - D. cat

    *我的答案:*:*正确答案:*B:less;

    [*AI讲解*](javascript:;)

    ### 77. (单选题, 0.5分)以下可以正确执行对文件进行压缩的指令和选项是 

    - A.

      tar -fxvz

      

    - B.

      tar -fxzv

      

    - C.

      tar -zcvf

      

    - D.

      tar -xzf

      

    *我的答案:*:*正确答案:*C:tar -zcvf ;

    [*AI讲解*](javascript:;)

    ### 78. (单选题, 0.5分)什么命令解压缩tar文件

    - A.

      tar -czvf filename.tgz

    - B.

      tar -dzvf filename.tgz

    - C.

      tar -tzvf filename.tgz

    - D.

      tar -xzvf filename.tgz

    *我的答案:*:*正确答案:*D:tar -xzvf filename.tgz;

    [*AI讲解*](javascript:;)

    ## 二. 填空题（共32题，16分）

    ### 79. (填空题, 0.5分)某文件的权限为：l-rw-_r--_r-x，用数值形式表示为___ __，该文件类型是_______。 

    - *我的答案：*

    - *正确答案：*

      (1)645 

      (2)链接文件 

    [*AI讲解*](javascript:;)

    ### 80. (填空题, 0.5分)将 /home/test 目录下的 myftp.tar.gz 文件解压缩到根目录的命令是 ____。

    - *我的答案：*

    - *正确答案：*

      (1) tar xvzf myftp.tar.gz -C /

    [*AI讲解*](javascript:;)

    ### 81. (填空题, 0.5分)在Shell脚本中，将命令的返回值赋给变量的两种方式是 ____和 ____。

    - *我的答案：*

    - *正确答案：*

      (1) A=date

      (2) A=$(date)

    [*AI讲解*](javascript:;)

    ### 82. (填空题, 0.5分)在Shell脚本中，将命令执行结果赋给变量的两种方式是:反引号和 ____

    - *我的答案：*

    - *正确答案：*

      (1) $()

    [*AI讲解*](javascript:;)

    ### 83. (填空题, 0.5分)在vim编辑器中，从普通模式进入插入模式的光标位置命令包括:i(当前位置)、I()、a()、A(行尾)。

    - *我的答案：*

    - *正确答案：*

      (1)行首

      (2)下一个字符

    [*AI讲解*](javascript:;)

    ### 84. (填空题, 0.5分)普通用户的shell提示符是_____，管理员用户的shell提示符是_____ 

    - *我的答案：*

    - *正确答案：*

      (1)$ 

      (2)# 

    [*AI讲解*](javascript:;)

    ### 85. (填空题, 0.5分)创建用户 milan 并指定其家目录为 /home/ttt 的命令是 ____。

    - *我的答案：*

    - *正确答案：*

      (1) useradd -d /home/ttt milan

    [*AI讲解*](javascript:;)

    ### 86. (填空题, 0.5分)在Linux系统中，常用来测试本机与远程主机的通信路径是否畅通的命令是_____。  

    - *我的答案：*

    - *正确答案：*

      (1)ping 

    [*AI讲解*](javascript:;)

    ### 87. (填空题, 0.5分)在文件系统中查找名为"test.txt"文件的命令是 ____。

    - *我的答案：*

    - *正确答案：*

      (1) find / -name test.txt

    [*AI讲解*](javascript:;)

    ### 88. (填空题, 0.5分)设置文件权限为所有者可读写执行(rwx)，同组用户可读执行(r-x)，其他用户可读执行(r-x)的命令是 ____。

    - *我的答案：*

    - *正确答案：*

      (1) chmod 755

    [*AI讲解*](javascript:;)

    ### 89. (填空题, 0.5分)mv 命令可以移动文件和目录，还可以为文件和目录____________。 

    - *我的答案：*

    - *正确答案：*

      (1)重命名 

    [*AI讲解*](javascript:;)

    ### 90. (填空题, 0.5分)默认情况下管理员创建了一个用户，就会在________ 目录下创建一个用户主目录。 

    - *我的答案：*

    - *正确答案：*

      (1)/home 

    [*AI讲解*](javascript:;)

    ### 91. (填空题, 0.5分)shell脚本的_________位置参数可以表示传递参数的个数。 

    - *我的答案：*

    - *正确答案：*

      (1)$# 

    [*AI讲解*](javascript:;)

    ### 92. (填空题, 0.5分)使用shutdown命令设置系统在30分钟后关机的命令是 ____。

    - *我的答案：*

    - *正确答案：*

      (1) shutdown -h +30

    [*AI讲解*](javascript:;)

    ### 93. (填空题, 0.5分)某文件tmp当前权限是rwxrwxrwx，如果要改为rw-rw-rw-,可以使用________命令来实现。  

    - *我的答案：*

    - *正确答案：*

      (1)chmod a-x  

    [*AI讲解*](javascript:;)

    ### 94. (填空题, 0.5分)在超级用户下，显示 Linux 系统中正在运行的全部进程，应使用的命令及参数是: ________  

    - *我的答案：*

    - *正确答案：*

      (1)ps–aux 

    [*AI讲解*](javascript:;)

    ### 95. (填空题, 0.5分)Linux虚拟机网络连接的三种基本模式是:桥接模式、____模式和____模式。

    - *我的答案：*

    - *正确答案：*

      (1) NAT

      (2) Host-Only

    [*AI讲解*](javascript:;)

    ### 96. (填空题, 0.5分)设置系统在12:30关机的命令是 ____，取消该关机计划的命令是 ____。

    - *我的答案：*

    - *正确答案：*

      (1) shutdown -h 12:30

      (2) shutdown -c

    [*AI讲解*](javascript:;)

    ### 97. (填空题, 0.5分)[root@localhost home]#行首提示的几个组成部分分别代表____，____，____和____。

    - *我的答案：*

    - *正确答案：*

      (1) 当前激活用户

      (2) 主机名

      (3) 当前工作区

      (4) 用户提示符

    [*AI讲解*](javascript:;)

    ### 98. (填空题, 0.5分)在 Linux 系统中，压缩文件后生成后缀为.gz 文件的命令是: ________。 

    - *我的答案：*

    - *正确答案：*

      (1)gzip  

    [*AI讲解*](javascript:;)

    ### 99. (填空题, 0.5分)创建用户时指定家目录的参数是 ____，删除用户时同时删除家目录的参数是 ____。

    - *我的答案：*

    - *正确答案：*

      (1) -d

      (2) -r

    [*AI讲解*](javascript:;)

    ### 100. (填空题, 0.5分)把文件file1和file2合并成file3的命令是____________。 

    - *我的答案：*

    - *正确答案：*

      (1)cat  file1  file2  > file3 

    [*AI讲解*](javascript:;)

    ### 101. (填空题, 0.5分)查看当前工作目录内容的命令是 ____，查看当前所在目录的命令是 ____。

    - *我的答案：*

    - *正确答案：*

      (1) ls

      (2) pwd

    [*AI讲解*](javascript:;)

    ### 102. (填空题, 0.5分)为文件 filename 指定所有用户均具有读、写、执行权限的命令及参数是：________ 。 

    - *我的答案：*

    - *正确答案：*

      (1)chmod 777 filename 

    [*AI讲解*](javascript:;)

    ### 103. (填空题, 0.5分)终止进程号为896的进程的命令是 ____。

    - *我的答案：*

    - *正确答案：*

      (1) kill 896

    [*AI讲解*](javascript:;)

    ### 104. (填空题, 0.5分)显示计算机基本信息的命令是 ____，显示计算机名称的命令是 ____。

    - *我的答案：*

    - *正确答案：*

      (1) uname

      (2) hostname

    [*AI讲解*](javascript:;)

    ### 105. (填空题, 0.5分)将目录打包并压缩为demo.tar.gz文件的命令是 ____。

    - *我的答案：*

    - *正确答案：*

      (1) tar -zcf demo.tar.gz demo/

    [*AI讲解*](javascript:;)

    ### 106. (填空题, 0.5分)查看当前系统进程详细信息的命令是 ____。

    - *我的答案：*

    - *正确答案：*

      (1) ps -aux

    [*AI讲解*](javascript:;)

    ### 107. (填空题, 0.5分)________就是将前一个命令的标准输出作为后一个命令的_______。 

    - *我的答案：*

    - *正确答案：*

      (1)管道符 

      (2)(标准)输入 

    [*AI讲解*](javascript:;)

    ### 108. (填空题, 0.5分)将文件 aaa 改名为 bbb 的命令是 ____。

    - *我的答案：*

    - *正确答案：*

      (1) mv aaa bbb

    [*AI讲解*](javascript:;)

    ### 109. (填空题, 0.5分)设置文件权限为所有者可读写(rw-)，同组用户可读(r--)，其他用户可读(r--)的命令是 ____。

    - *我的答案：*

    - *正确答案：*

      (1) chmod 644

    [*AI讲解*](javascript:;)

    ### 110. (填空题, 0.5分)在 test.txt 文件中查找包含"teacher"字符串的行的命令是 ____。

    - *我的答案：*

    - *正确答案：*

      (1) grep "teacher" test.txt

    [*AI讲解*](javascript:;)

    ## 三. 多选题（共41题，41分）

    ### 111. (多选题, 1分)以下属于 sed 编辑器常用命令的有( )

    - A. l(列表)
    - B. p(打印)
    - C. d(删除)
    - D. s(替换)

    *我的答案:*:*正确答案:*BCD:p(打印); d(删除); s(替换);

    [*AI讲解*](javascript:;)

    ### 112. (多选题, 1分)以下属于 Linux 系统变量的有

    - A. $PATH
    - B. $HOME
    - C. $USER
    - D. $PWD

    *我的答案:*:*正确答案:*ABCD:$PATH; $HOME; $USER; $PWD;

    [*AI讲解*](javascript:;)

    ### 113. (多选题, 1分)以下关于 vim 编辑器模式切换的描述正确的有( )

    - A. 从普通模式按 “i” 进入插入模式
    - B. 从插入模式按 “Esc” 回到普通模式
    - C. 从普通模式输入 “:” 进入末行模式
    - D. 末行模式可直接按 “i” 进入插入模式

    *我的答案:*:*正确答案:*ABC:从普通模式按 “i” 进入插入模式; 从插入模式按 “Esc” 回到普通模式; 从普通模式输入 “:” 进入末行模式;

    [*AI讲解*](javascript:;)

    ### 114. (多选题, 1分)以下属于用户管理相关的命令有

    - A. userdel
    - B. usermod
    - C. useradd
    - D. groupadd

    *我的答案:*:*正确答案:*ABCD:userdel; usermod; useradd; groupadd;

    [*AI讲解*](javascript:;)

    ### 115. (多选题, 1分)以下关于正则表达式字符匹配的描述正确的有( )

    - A. “.” 匹配任意单个字符
    - B. “[^]” 匹配指定范围外的任意单个字符
    - C. “*” 匹配前面的字符仅一次
    - D. “[]” 匹配指定范围内的任意单个字符

    *我的答案:*:*正确答案:*ABD:“.” 匹配任意单个字符; “[^]” 匹配指定范围外的任意单个字符; “[]” 匹配指定范围内的任意单个字符;

    [*AI讲解*](javascript:;)

    ### 116. (多选题, 1分)以下能实现文件压缩功能的命令有

    - A. gunzip
    - B. tar -zcf
    - C. zip -r
    - D. gzip

    *我的答案:*:*正确答案:*BCD:tar -zcf; zip -r; gzip;

    [*AI讲解*](javascript:;)

    ### 117. (多选题, 1分)以下关于 Linux 文件描述符的描述正确的有( )

    - A. 1 对应标准输出(stdout)
    - B. 0 对应标准输入(stdin)
    - C. 2 对应标准错误输出(stderr)
    - D. “2>&1” 表示将标准输出重定向到标准错误

    *我的答案:*:*正确答案:*ABC:1 对应标准输出(stdout); 0 对应标准输入(stdin); 2 对应标准错误输出(stderr);

    [*AI讲解*](javascript:;)

    ### 118. (多选题, 1分)以下对 rmdir 命令的描述正确的有( )

    - A. 删除单个空目录时无需添加选项
    - B. -p 选项可递归删除多级空目录
    - C. 仅能删除空目录
    - D. 可直接删除包含文件的目录

    *我的答案:*:*正确答案:*ABC:删除单个空目录时无需添加选项; -p 选项可递归删除多级空目录; 仅能删除空目录;

    [*AI讲解*](javascript:;)

    ### 119. (多选题, 1分)以下属于用户组管理相关的命令有( )

    - A. groupdel:删除用户组
    - B. usermod -g:将用户添加到指定组
    - C. groupadd:创建用户组
    - D. groupmod:修改用户组属性

    *我的答案:*:*正确答案:*ABCD:groupdel:删除用户组; usermod -g:将用户添加到指定组; groupadd:创建用户组; groupmod:修改用户组属性;

    [*AI讲解*](javascript:;)

    ### 120. (多选题, 1分)以下关于 sed 编辑器的描述正确的有( )

    - A.

      sed 是无破坏性编辑器，默认不修改原文件

    - B.

      “s/old/new/g” 表示全局替换文本中的 old 为 newC. “d” 命令用于删除匹配的行D. “p” 命令单独使用时仅打印匹配行，不输出其他行

    *我的答案:*:*正确答案:*AB:sed 是无破坏性编辑器，默认不修改原文件; “s/old/new/g” 表示全局替换文本中的 old 为 newC. “d” 命令用于删除匹配的行D. “p” 命令单独使用时仅打印匹配行，不输出其他行;

    [*AI讲解*](javascript:;)

    ### 121. (多选题, 1分)下列哪个命令可以起到Linux操作系统关机的效果( )。

    - A. shutdown -r
    - B. shutdown -h
    - C. poweroff
    - D. halt

    *我的答案:*:*正确答案:*BCD:shutdown -h; poweroff; halt;

    [*AI讲解*](javascript:;)

    ### 122. (多选题, 1分)以下关于 touch 命令的选项及功能描述正确的有( )

    - A. -c:若文件不存在则不创建新文件
    - B. -r:参考其他文件的时间戳更新目标文件
    - C. -a:仅修改文件的修改时间
    - D. -t:按指定格式设置文件时间戳

    *我的答案:*:*正确答案:*ABD:-c:若文件不存在则不创建新文件; -r:参考其他文件的时间戳更新目标文件; -t:按指定格式设置文件时间戳;

    [*AI讲解*](javascript:;)

    ### 123. (多选题, 1分)以下关于管道符 “|” 的描述正确的有( )

    - A. 可用于连接任意两个命令
    - B. 可将前一个命令的标准输出作为后一个命令的标准输入
    - C. 不能处理前一个命令的标准错误
    - D. 右侧命令必须能接收标准输入

    *我的答案:*:*正确答案:*BCD:可将前一个命令的标准输出作为后一个命令的标准输入; 不能处理前一个命令的标准错误; 右侧命令必须能接收标准输入;

    [*AI讲解*](javascript:;)

    ### 124. (多选题, 1分)以下对 Linux 文件权限的理解正确的有( )

    - A. 目录的 “w” 权限允许在目录内创建、删除文件
    - B. 仅修改文件所有者需使用 chmod 命令
    - C. 权限 “755” 表示所有者可读可写可执行，同组和其他用户只读可执行
    - D. 文件的 “x” 权限仅对可执行程序有效

    *我的答案:*:*正确答案:*ACD:目录的 “w” 权限允许在目录内创建、删除文件; 权限 “755” 表示所有者可读可写可执行，同组和其他用户只读可执行; 文件的 “x” 权限仅对可执行程序有效;

    [*AI讲解*](javascript:;)

    ### 125. (多选题, 1分)以下正则表达式元字符及匹配规则描述正确的有( )

    - A. “^” 表示行首锚定
    - B. “.*” 表示匹配任意长度的任意字符
    - C. “$” 表示行尾锚定
    - D. “[]” 表示匹配指定范围外的任意单个字符

    *我的答案:*:*正确答案:*ABC:“^” 表示行首锚定; “.*” 表示匹配任意长度的任意字符; “$” 表示行尾锚定;

    [*AI讲解*](javascript:;)

    ### 126. (多选题, 1分)在Shell中变量的赋值方法有( )。

    - A. 直接赋值
    - B. 使用read命令
    - C. 不可以赋值
    - D. 使用命令行参数

    *我的答案:*:*正确答案:*BC:使用read命令; 不可以赋值;

    [*AI讲解*](javascript:;)

    ### 127. (多选题, 1分)以下关于 tar 命令的选项描述正确的有( )

    - A. -v 表示显示操作过程
    - B. -z 表示支持 gzip 压缩
    - C. -c 表示创建压缩文件
    - D. -x 表示提取文件

    *我的答案:*:*正确答案:*ABCD:-v 表示显示操作过程; -z 表示支持 gzip 压缩; -c 表示创建压缩文件; -x 表示提取文件;

    [*AI讲解*](javascript:;)

    ### 128. (多选题, 1分)vi/vim 编辑器中，能实现 “保存并退出” 功能的操作有

    - A. :x
    - B. Shift+ZZ
    - C. :q!
    - D. :wq

    *我的答案:*:*正确答案:*ABD::x; Shift+ZZ; :wq;

    [*AI讲解*](javascript:;)

    ### 129. (多选题, 1分)以下能终止进程的命令有

    - A. kill
    - B. ps
    - C. killall
    - D. pkill

    *我的答案:*:*正确答案:*ACD:kill; killall; pkill;

    [*AI讲解*](javascript:;)

    ### 130. (多选题, 1分)以下属于 Linux 关机命令的有

    - A. reboot
    - B. shutdown -h
    - C. poweroff
    - D. halt

    *我的答案:*:*正确答案:*BCD:shutdown -h; poweroff; halt;

    [*AI讲解*](javascript:;)

    ### 131. (多选题, 1分)下列Shell结构化语句中能够起到循环作用的有( )。

    - A. for
    - B. if
    - C. until
    - D. while

    *我的答案:*:*正确答案:*ABC:for; if; until;

    [*AI讲解*](javascript:;)

    ### 132. (多选题, 1分)以下能修改文件权限的命令及方式有( )

    - A. chown 用户名 文件名
    - B. chmod u=rwx 文件名
    - C. chmod 755 文件名
    - D. chmod g+w 文件名

    *我的答案:*:*正确答案:*BCD:chmod u=rwx 文件名; chmod 755 文件名; chmod g+w 文件名;

    [*AI讲解*](javascript:;)

    ### 133. (多选题, 1分)下列属于Linux操作系统特点的是( )。

    - A. 便于定制和再开发
    - B. 源码公开
    - C. 性能高安全性强
    - D. 与unix兼容

    *我的答案:*:*正确答案:*ABCD:便于定制和再开发; 源码公开; 性能高安全性强; 与unix兼容;

    [*AI讲解*](javascript:;)

    ### 134. (多选题, 1分)下面哪些是Linux中常用的环境变量( )。

    - A. PWD
    - B. PATH
    - C. CD
    - D. RANDOM

    *我的答案:*:*正确答案:*ABD:PWD; PATH; RANDOM;

    [*AI讲解*](javascript:;)

    ### 135. (多选题, 1分)以下属于 awk 内置变量的有( )

    - A. FS:输出字段分隔符
    - B. NF:当前行的字段数
    - C. NR:已读取的记录数(行号)
    - D. FILENAME:当前处理的文件名

    *我的答案:*:*正确答案:*BCD:NF:当前行的字段数; NR:已读取的记录数(行号); FILENAME:当前处理的文件名;

    [*AI讲解*](javascript:;)

    ### 136. (多选题, 1分)以下属于 Shell 变量定义规则的有( )

    - A. 变量名必须全大写
    - B. 等号两侧不能有空格
    - C. 变量名可由字母、数字和下划线组成
    - D. 变量名不能以数字开头

    *我的答案:*:*正确答案:*BCD:等号两侧不能有空格; 变量名可由字母、数字和下划线组成; 变量名不能以数字开头;

    [*AI讲解*](javascript:;)

    ### 137. (多选题, 1分)查看 Linux 系统进程信息的命令及选项有

    - A. top
    - B. ps -aux
    - C. ps -ef
    - D. kill -9

    *我的答案:*:*正确答案:*ABC:top; ps -aux; ps -ef;

    [*AI讲解*](javascript:;)

    ### 138. (多选题, 1分)在终端上查一个很小的数据文件data的内容，我们可以通过( )。

    - A. vi data
    - B. less data
    - C. cat data
    - D. man data

    *我的答案:*:*正确答案:*ABC:vi data; less data; cat data;

    [*AI讲解*](javascript:;)

    ### 139. (多选题, 1分)以下属于 Shell 编程流程控制结构的有

    - A. if...elif...fi
    - B. for 循环
    - C. while 循环
    - D. case...in...esac

    *我的答案:*:*正确答案:*ABCD:if...elif...fi; for 循环; while 循环; case...in...esac;

    [*AI讲解*](javascript:;)

    ### 140. (多选题, 1分)以下对管道符 “|” 的使用规则描述正确的有( )

    - A. 仅能传递前一个命令的标准输出
    - B. 右侧命令必须支持接收标准输入
    - C. 可连接任意两个 Linux 命令直接传递数据
    - D. 无法传递前一个命令的标准错误

    *我的答案:*:*正确答案:*ABD:仅能传递前一个命令的标准输出; 右侧命令必须支持接收标准输入; 无法传递前一个命令的标准错误;

    [*AI讲解*](javascript:;)

    ### 141. (多选题, 1分)下列命令可以独立使用达到查看文件的效果的是( )。

    - A. vi
    - B. more
    - C. cat
    - D. echo

    *我的答案:*:*正确答案:*ABC:vi; more; cat;

    [*AI讲解*](javascript:;)

    ### 142. (多选题, 1分)以下能查看文件内容的命令有

    - A. more
    - B. cat
    - C. head
    - D. less

    *我的答案:*:*正确答案:*ABCD:more; cat; head; less;

    [*AI讲解*](javascript:;)

    ### 143. (多选题, 1分)以下关于文件重定向的描述正确的有( )

    - A. “>>” 表示追加重定向
    - B. “>” 表示覆盖重定向
    - C. “<” 表示标准输出重定向
    - D. “2>” 表示标准错误输出重定向

    *我的答案:*:*正确答案:*ABD:“>>” 表示追加重定向; “>” 表示覆盖重定向; “2>” 表示标准错误输出重定向;

    [*AI讲解*](javascript:;)

    ### 144. (多选题, 1分)命令模式进入插入模式的命令有( )。

    - A. b
    - B. a
    - C. o
    - D. d

    *我的答案:*:*正确答案:*BC:a; o;

    [*AI讲解*](javascript:;)

    ### 145. (多选题, 1分)对权限rwxrw-r—描述正确的是( )

    - A. 可以使用chmod的数字设定法754设定
    - B. 可以使用chmod的文字设定法g+rw设定中间三位
    - C. 可以使用chmod的文字设定法u=rwx设定前三位
    - D. 可以使用chmod的文字设定法o=r设定最后三位

    *我的答案:*:*正确答案:*CD:可以使用chmod的文字设定法u=rwx设定前三位; 可以使用chmod的文字设定法o=r设定最后三位;

    [*AI讲解*](javascript:;)

    ### 146. (多选题, 1分)以下对 declare 命令参数功能描述正确的有( )

    - A. -x 用于将变量设为环境变量
    - B. -i 用于定义整数变量
    - C. -r 用于取消变量的只读属性
    - D. -a 用于定义数组变量

    *我的答案:*:*正确答案:*ABD:-x 用于将变量设为环境变量; -i 用于定义整数变量; -a 用于定义数组变量;

    [*AI讲解*](javascript:;)

    ### 147. (多选题, 1分)以下对 Shell 脚本执行方式描述正确的有( )

    - A. 无需赋予执行权限，使用 sh 命令执行
    - B. 直接双击脚本文件执行
    - C. 赋予执行权限后，通过相对路径执行
    - D. 赋予执行权限后，通过绝对路径执行

    *我的答案:*:*正确答案:*ACD:无需赋予执行权限，使用 sh 命令执行; 赋予执行权限后，通过相对路径执行; 赋予执行权限后，通过绝对路径执行;

    [*AI讲解*](javascript:;)

    ### 148. (多选题, 1分)以下属于 Linux 目录操作命令的有

    - A. rmdir
    - B. cd
    - C. mkdir
    - D. pwd

    *我的答案:*:*正确答案:*ABCD:rmdir; cd; mkdir; pwd;

    [*AI讲解*](javascript:;)

    ### 149. (多选题, 1分)以下对 cp 命令选项功能描述正确的有( )

    - A. -a 选项适用于复制目录，保留链接、文件属性及目录下所有内容
    - B. -i 覆盖目标文件前会提示用户确认
    - C. -d 复制时保留源文件的链接属性(类似 Windows 快捷方式)
    - D. -p 仅复制文件内容，不保留原文件的修改时间和访问权限

    *我的答案:*:*正确答案:*ABC:-a 选项适用于复制目录，保留链接、文件属性及目录下所有内容; -i 覆盖目标文件前会提示用户确认; -d 复制时保留源文件的链接属性(类似 Windows 快捷方式);

    [*AI讲解*](javascript:;)

    ### 150. (多选题, 1分)以下对 Linux 文件权限数字表示法描述正确的有

    - A. 755 表示所有者可读可写可执行，同组和其他用户只读
    - B. x 对应权限值 1
    - C. r 对应权限值 4
    - D. w 对应权限值 2

    *我的答案:*:*正确答案:*BCD:x 对应权限值 1; r 对应权限值 4; w 对应权限值 2;

    [*AI讲解*](javascript:;)

    ### 151. (多选题, 1分)以下关于 basename 和 dirname 命令的功能描述正确的有( )

    - A. dirname /home/test/file.txt 输出 “/home/test”
    - B. basename /home/test/file.txt .txt 输出 “file”
    - C. dirname /home/test/ 输出 “/home/test”
    - D. basename /home/test/file.txt 输出 “file.txt”

    *我的答案:*:*正确答案:*ABD:dirname /home/test/file.txt 输出 “/home/test”; basename /home/test/file.txt .txt 输出 “file”; basename /home/test/file.txt 输出 “file.txt”;

    [*AI讲解*](javascript:;)

    ## 四. 简答题（共2题，4分）

    ### 152. (简答题, 2分)写出以下shell程序运行结果mystr="Hi there"echo $mystrecho "$mystr"echo '$mystr'echo \$mystrecho Enter x+y+zread mystr  #此时用户在键盘输入5+6+7echo '$mystr'  now  equals  $mystr 

    - *我的答案：*

      

    - *正确答案：*

       Hi there Hi there $mystr $mystr Enter x+y+z 5+6+7（输入） $mystr  now equals 5+6+7 

    [*AI讲解*](javascript:;)

    ### 153. (简答题, 2分)按下列要求写出每一步骤的命令（1）新建一个用户user1，并指定其所属组为group1。（2）在用户user1个人目录下新建目录test。（3）复制/tmp/myfile目录下的所有以h开头目录或文件到test目录中。 

    - *我的答案：*

      

    - *正确答案：*

      （1）adduser –g group1 user1  或 useradd –g group1 user1（2）mkdir /home/user1/test （3）cp /tmp/myfile/h*  /home/user1/test  



## 一. 简答题（共3题）

### 1. (简答题)介绍一下软连接和硬链接，以及两者之间的区别

- *我的答案：*

  

- *正确答案：*

  

[*AI讲解*](javascript:;)

### 2. (简答题)将以下vi操作的命令书写出来（只写过程命令）（1）打开准备编辑/etc/sudoers文件。（2）移动到第 11 行，向右移动 33 个字符。（3）在当前的下一行新增一行，并进入插入模式输入内容”hello world”，输入完退出插入模式。（4）将光标移动到“hello world”这一行的行尾，然后在后面插入” too”字符，输入完退出插入模式。

- *我的答案：*

  

- *正确答案：*

  vi /etc/sudoers         11G 33l            o hello world esc键       end键 a too esc        ：50,100 s/root/ROOT/g    

*答案解析：*

vi /etc/sudoers        

 11G 33l           

 o hello world esc键      

 end键 a too esc       

 ：50,100 s/root/ROOT/g  



[*AI讲解*](javascript:;)

### 3. (简答题)使用shell实现九九加法表

- *我的答案：*

  

- *正确答案：*

  #! /bin/bash                    for i in 1 2 3 4 5 6 7 8 9              do                         for j in 1 2 3 4 5 6 7 8 9           do                        if ( test $j -le $i )              then                     echo -ne `expr $i \* $j` "\t"         else                       echo                     break                     fi                     done                     done    



## 课堂测试2

题量: 3 满分: 100

作答时间:*04-30 09:46*至*05-25 18:00*

## 一. 简答题（共3题）

### 1. (简答题)编写shell程序，接收用户从键盘输入的10个整数（使用循环操作），求出其总和、最大值、最小值

- *我的答案：*

  

- *正确答案：*

  #!/bin/bash        read max          min=$maxsum=$max           i=1while [$i –lt 10]     do  read  x          （（sum+=x））         if [ $max –lt  $x ]     then     max=$x                    fi  if [ $ x –lt  $min ]     then     min=$x       fi     i=`expr $i + 1`    doneecho "sum = $sum ;  max = $max   min = $min "  

[*AI讲解*](javascript:;)

### 2. (简答题)linux的目录结构和各个目录的作用

- *我的答案：*

  

- *正确答案：*

  

[*AI讲解*](javascript:;)

### 3. (简答题)使用root用户进入普通用户主目录/home/test下新建一个目录temp，将当前工作目录改为temp，在temp下新建2个长度为0的文件temp1、temp2，然后把temp2移到其父目录中并改名为file2。

- *我的答案：*

  

- *正确答案：*

  cd /root/ test                   mkdir temp                     cd temp                       touch temp1 temp2                  mv temp1 ../file2      

  

  

  

  ## 一. 简答题（共3题）

  ### 1. (简答题)shell编程：判断/root/test文件是否存在，如果存在则判断该文件是否为普通文件，如果为普通文件，则将该文件保存至当前所处工作目录中，并打印出“完成”；如果该文件不存在则打印出“文件不存在”。 

  - *我的答案：*

    

  - *正确答案：*

    #!/bin/bash          if test -e /root/test     then                if test -f /root/test       then                 echo "这是普通文件"   fielse              echo "文件不存在"fi              

  [*AI讲解*](javascript:;)

  ### 2. (简答题)详细说明ls -l命令长格式输出如下结果各部分的含义（前10位详细说明）。lrwxrw-r-- 2 test group 2048 2020-1-17 13:48 myfile 

  - *我的答案：*

    

  - *正确答案：*

    

  [*AI讲解*](javascript:;)

  ### 3. (简答题)需要增加一个新的用户账号zhangsa，为新用户设置初始密码（只需要回答设置密码指令即可，密码设置过程不用描述），锁定用户账号lisi，并删除用户账号wangwu。

  - *我的答案：*

    

  - *正确答案：*

    useradd zhangsan        passwd  zhangsan        passwd –l lisi        userdel wangwu         

  ​              

  ## 一. 简答题（共3题）

  ### 1. (简答题)介绍一下shell是什么

  - *我的答案：*

    

  - *正确答案：*

    

  [*AI讲解*](javascript:;)

  ### 2. (简答题)用Shell编程，判断一文件是不是字符设备文件，如果是将其拷贝到 /dev目录下。

  - *我的答案：*

    

  - *正确答案：*

    #!/bin/bash       read f         if [  -c  $f  ]    then           cp  $f  /dev    else           echo  "Not a character device!"   fi            

  [*AI讲解*](javascript:;)

  ### 3. (简答题)使用vi进行编辑的时候，几种工作模式之间是如何进行切换的？

  - *我的答案：*

    

  - *正确答案：*

## 一. 简答题（共3题）

### 1. (简答题)编写shell，实现自动删除30个用户账号，账号名字为test01至test30.

- *我的答案：*

  

- *正确答案：*

  #!/bin/bash            i=1               while [ $i -le 30 ]          do                userdel -r stud${i}         i=$(($i+1 ))            done               if  [ $i -eq30 ]          echo "remove sucessful!"       else                echo " remove fail"         fi;;  

[*AI讲解*](javascript:;)

### 2. (简答题)Linux系统的特点有哪些

- *我的答案：*

  

- *正确答案：*

  

[*AI讲解*](javascript:;)

### 3. (简答题)请使用shell编程实现菜单管理功能，shell脚本文件名为：test3.sh。要求如下：输出提示语句：“Please choose between number 1-3 ”，用户输入数字选择相应操作；如果选择数字1，可以实现“显示当前用户所处的工作目录及日期”的功能；如果选择数字2，可以实现“切换当前目录到主目录”的功能；如果选择数字3，可以实现“列出当前目录下的所有内容，并输出当前所处的目录位置”的功能；要求通过获取用户从键盘输入的信息值，利用case语句进行相应的处理。 

- *我的答案：*

  

- *正确答案：*

  #!/bin/bash                       read -p "Please choose between number 1-3:" response      case $response in                     1)pwd                          date;;                          2)cd $HOME;;                      3)ls -a                          echo "the current directory is `pwd`  ";;          esac                            





## 一. 简答题（共3题）

### 1. (简答题)说明linux的目录结构和各个目录的作用

- *我的答案：*

  

- *正确答案：*

  

[*AI讲解*](javascript:;)

### 2. (简答题)设计一个shell程序计算n的阶乘。要求：(1) 从命令行接收参数n（位置参数）。(2) 在程序开始后立即判断n的合法性，即是否有参数，若有是否为正整数，若非法请给错误提示。(3) 最后出计算的结果，并显示结果。 

- *我的答案：*

  

- *正确答案：*

  #!/bin/bash                        if [ $# -eq 0 ]                     then  echo "$0 no Params. "; exit 0; fi x=`echo $1 ` if [[ x -le 0 ]]                    then echo "Input: $* error!" exit 1 fi fact=1 tmp=1 while [ $tmp -le $1 ]                 do (( fact =fact*tmp))                    ((tmp=++tmp))                      done echo "fact=$fact"    

[*AI讲解*](javascript:;)

### 3. (简答题)进程、线程、程序三者的区别

- *我的答案：*

  

- *正确答案：*







## 一. 简答题（共4题）

### 1. (简答题)使用root用户在root主目录下不改变工作区的前提下进行如下操作：（1）在普通用户主目录/home/sundk下一次性递归新建一个目录dir1/dir2/dir3。（2）在dir1目录下新建空文件file1（3）在dir2目录下新建空文件file2（4）在dir3目录下新建空文件file3。（5）将file3移动到普通用户主目录/home/sund 

- *我的答案：*

  

- *正确答案：*

  （1）mkdir -p /home/sundk/dir1/dir2/dir3（2分）（2）touch /home/sundk/dir1/file1（2分）（3）touch /home/sundk/dir1/dir2/file2（2分）（4）touch /home/sundk/dir1/dir2/dir3/file3（2分）（5）mv /home/sundk/dir1/dir2/dir3/file3 /home/sundk（2分） 

[*AI讲解*](javascript:;)

### 2. (简答题)编写Shell脚本生成一个100以内的随机数,提示用户猜数字,根据用户的输入,提示用户猜对了,猜小了或猜大了,直至用户猜对脚本结束。并记录用户的猜测次数。

- *我的答案：*

  

- *正确答案：*

  #!/bin/bash            #随机生成1-100之间的整数num=$[ $RANDOM % 100 + 1 ]   echo "欢迎进入猜数字游戏："echo ">>>>>"read -p "请您输入一个1-100之间的整数：" guess  count=0   #1分while [ $guess -ne $num ]   #while  do done   do  if [ $guess -gt $num ]              then   let count++                  echo "您猜大了！"  elif [ $guess -lt $num ]             then   let count++   echo "您猜小了！"  fi    read -p "请重新输入进行猜测：" guessdoneif [ $guess -eq $num ]            then  let count++  echo "恭喜您，您猜测正确。您一共猜测了$count次"fi  

[*AI讲解*](javascript:;)

### 3. (简答题)请编写一个名为 test3.sh 的 Shell 脚本，实现简易菜单选择功能，具体要求如下：（1）脚本运行后，首先输出提示语句：“请选择1-3的数字:”，引导用户从键盘输入数字 1、2 或 3 选择对应操作；（2）若用户输入数字 1，需实现「展示当前用户的工作目录完整路径，并输出系统当前的日期信息」的功能；（3）若用户输入数字 2，需实现「将当前工作目录切换至当前用户的主目录（即 HOME 目录）」的功能；（4）若用户输入数字 3，需实现「列出当前目录下的全部内容（包含隐藏文件），同时明确输出当前所处的目录位置」的功能；（5）脚本需通过 read 命令获取用户的键盘输入信息，并利用 case 条件语句对不同输入进行分支处理，执行对应的操作。 

- *我的答案：*

  

- *正确答案：*

   #!/bin/bash                      read -p "请选择1-3的数字:" response           case $response in                    1)pwd                          date;;                         2)cd $HOME;;                      3)ls -a                         echo "the current directory is  `pwd`   ";;       esac                           1分   

[*AI讲解*](javascript:;)

### 4. (简答题)某系统管理员在日常工作中遇到以下命令查看文件，请结合 cat、more、less、head、tail 的特性，分析每个命令的特点。

- *我的答案：*

  

- *正确答案：*

  cat 命令：cat是连接（concatenate）命令的缩写，通常与more搭配使用。它可以将多个文件合并为一个文件输出，并从上到下显示整个文件的内容。如果你需要查看一个文件的内容，直接在命令后面接文件名即可，例如 cat file.txt。cat 命令还可以进行一些额外的操作，例如向已存在的文件追加内容等more 命令：more命令比较简单，根据窗口的大小进行分页显示文件内容。从前向后读取文件，因此在启动时就加载整个文件。在读取文件的过程中，如果按下空格键，将显示下一页内容；按下 q 键则退出查看less 命令：less是对文件或其它输出进行分页显示的工具。与more类似，但提供更多功能，如向前翻页、搜索关键词等。按下空格键向下滚动一页；按下 b 键向上滚动一页；按下 / 键后输入关键词进行搜索head 命令：head命令用于显示一个文件的前几行内容。默认情况下，head会显示文件的前10行内容。如果想要显示更多行，可以在命令后面接数字，例如 head -n 20 file.txt 将显示文件的前20行内容tail 命令：tail命令用于显示一个文件的最后几行内容。默认情况下，tail会显示文件的最后10行内容。如果想要显示更多行，可以在命令后面接数字，例如 tail -n 20 file.txt 将显示文件的最后20行内容 



## 一. 简答题（共4题）

### 1. (简答题)Hadoop是一个什么样的框架？

### 2. (简答题)Hadoop的核心组件有哪些？简单介绍每一个组件的作用； 

### 3. (简答题)简述Hadoop生态体系，并列举此生态体系中涉及的技术 

### 4. (简答题)简单列举几个Hadoop的应用场景。 



## 一. 简答题（共4题）

### 1. (简答题)什么是Hadoop伪分布式模式？它与完全分布式模式有何区别？

### 2. (简答题)修改CentOS7网络配置为静态IP时，需要编辑哪个文件？关键参数有哪些？

### 3. (简答题)Hadoop伪分布式需要创建哪些核心目录？这些目录的作用是什么？

### 4. (简答题)启动Hadoop伪分布式集群需要按顺序执行哪些命令？





## 一. 单选题（共5题）

### 1. (单选题) HDFS中，一个文件默认情况下被分割成若干个数据块(block)，每个块的大小是多少？

- A. 64MB
- B. 128MB
- C. 256MB
- D. 512MB

### 2. (单选题) HDFS的NameNode主要负责什么？

- A. 存储实际的数据块
- B. 管理文件系统命名空间和元数据
- C. 执行数据块的读写操作
- D. 负责数据块的备份和恢复

### 3. (单选题) HDFS中，一个500MB的文件会被分割成多少个块？

- A. 3
- B. 4
- C. 5
- D. 6

### 4. (单选题) HDFS的副本数由哪个参数控制？

- A. dfs.block.size
- B. dfs.replication
- C. dfs.namenode.replication
- D. dfs.datanode.replication

### 5. (单选题) HDFS的副本放置策略中，第一个副本通常放置在哪里？

- A. 任意节点
- B. 与第二个副本同一机架的节点
- C. 客户端所在节点
- D. 不同机架的节点

## 二. 多选题（共5题）

### 6. (多选题) HDFS的主要特点有哪些？

- A. 适用于小文件存储
- B. 支持并发写入
- C. 高容错性
- D. 适合一次写入多次读取
- E. 通透性，用户感觉像访问本地磁盘

### 7. (多选题) HDFS的架构中，以下哪些组件属于其核心组成部分？

- A. Client
- B. NameNode
- C. DataNode
- D. SecondaryNameNode
- E. ZooKeeper

### 8. (多选题) 关于HDFS的副本策略，以下说法正确的是？

- A. 副本数默认为3
- B. 副本可以放在同一个节点上
- C. 副本放置策略考虑了机架感知
- D. 副本数可以动态调整
- E. 副本数越多越好

### 9. (多选题) HDFS的心跳机制涉及哪些内容？

- A. DataNode定期向NameNode发送心跳
- B. 心跳包含DataNode的资源状态
- C. 心跳包含DataNode存储的块信息
- D. 心跳频率默认为10秒
- E. NameNode根据心跳判断DataNode是否宕机

### 10. (多选题) 下列关于HDFS的说法中，错误的是？

- A. HDFS适合存储大量小文件
- B. HDFS支持并发写入
- C. HDFS具有高吞吐量
- D. HDFS放宽了部分POSIX要求
- E. HDFS不适合流式数据访问

## 三. 判断题（共5题）

### 11. (判断题) HDFS的副本数默认为3。

- A. 对
- B. 错

### 12. (判断题) HDFS适合存储大量小文件。

- A. 对
- B. 错

### 13. (判断题) HDFS的副本放置策略考虑了机架感知。

- A. 对
- B. 错

### 14. (判断题) HDFS支持并发写入。

- A. 对
- B. 错

### 15. (判断题) HDFS的NameNode负责存储实际的数据块。

- A. 对
- B. 错

## 四. 简答题（共1题）

### 16. (简答题)请简述HDFS的副本放置策略及其设计目的。

## 五. 填空题（共2题）

### 17. (填空题) HDFS中，一个文件的大小为![img](https://p.ananas.chaoxing.com/star3/origin/2870d43f25570955ae5e70adc69d302f.png)MB，每个数据块的大小为![img](https://p.ananas.chaoxing.com/star3/origin/0fc98debdcc4149e1dc54b0f0dc62c36.png)MB，那么该文件会被分割为_____个数据块。

### 18. (填空题) HDFS中，一个文件的大小为![img](https://p.ananas.chaoxing.com/star3/origin/4c0aa30d31d45f45eafa09175bfc41fc.png)MB，另一个文件的大小为![img](https://p.ananas.chaoxing.com/star3/origin/8e4124d268a9885b62cee4266a13c387.png)MB，两个文件总共会被分割为_____个数据块。

## 一. 单选题（共5题）

### 1. (单选题)在HDFS中，用于列出目录或文件信息的命令是？

- A.

  hdfs dfs -put

- B.

  hadoop fs -mkdir

- C.

  hdfs dfs -ls

- D.

  hadoop fs -cat

### 2. (单选题) 下列哪个命令可以用于在HDFS中创建多级目录？

- A. hdfs dfs -put
- B. hadoop fs -mkdir -p
- C. hadoop fs -ls -R
- D. hdfs dfs -cat

### 3. (单选题) HDFS中，将本地文件上传到HDFS的命令是？

- A. hadoop fs -put
- B. hdfs dfs -cat
- C. hadoop fs -ls
- D. hdfs dfs -mkdir

### 4. (单选题) HDFS中，用于查看文件内容的命令是？

- A. hadoop fs -cat
- B. hdfs dfs -put
- C. hadoop fs -ls
- D. hdfs dfs -mkdir

### 5. (单选题) HDFS中，用于将本地文件追加到HDFS文件末尾的命令是？

- A. hadoop fs -appendToFile
- B. hdfs dfs -put
- C. hadoop fs -cat
- D. hdfs dfs -ls

## 二. 多选题（共5题）

### 6. (多选题) 下列哪些命令可以在HDFS中进行文件操作？

- A. hadoop fs -ls
- B. hdfs dfs -put
- C. hadoop fs -cat
- D. hadoop fs -mkdir
- E. hadoop fs -appendToFile

### 7. (多选题) 关于HDFS中 mkdir 命令的描述，正确的有哪些？

- A. 用于创建目录
- B. 需要使用 -p 参数创建多级目录
- C. 只能创建单层目录
- D. 不支持递归创建
- E. 可以创建多个目录

### 8. (多选题) 下列哪些命令可以用于将本地文件上传至HDFS？

- A. hadoop fs -put
- B. hdfs dfs -copyFromLocal
- C. hadoop fs -appendToFile
- D. hadoop fs -cat
- E. hadoop fs -ls

### 9. (多选题) 关于HDFS中 -ls 命令的描述，正确的有哪些？

- A. 用于列出目录或文件信息
- B. 支持 -R 参数递归列出子目录
- C. 可以查看文件内容
- D. 不支持查看隐藏文件
- E. 支持 -h 参数以易读方式显示文件大小

### 10. (多选题) 下列关于HDFS中 moveFromLocal 命令的说法，正确的有哪些？

- A. 用于将本地文件移动到HDFS
- B. 移动后本地文件会被删除
- C. 与 put 命令完全相同
- D. 不支持多文件操作
- E. 可以用于上传文件

## 三. 判断题（共5题）

### 11. (判断题) HDFS中，操作文件时只能使用相对路径。

- A. 对
- B. 错

### 12. (判断题) hadoop fs -ls 命令可以递归列出子目录内容。

- A. 对
- B. 错

### 13. (判断题) hadoop fs -put 命令会自动删除本地文件。

- A. 对
- B. 错

### 14. (判断题) hadoop fs -appendToFile 命令可以将多个本地文件追加到同一个 HDFS 文件中。

- A. 对
- B. 错

### 15. (判断题) HDFS中，hadoop fs -mkdir 命令默认可以创建多级目录。

- A. 对
- B. 错

## 四. 简答题（共1题）

### 16. (简答题)请简述 HDFS 中 hdfs dfs -put 命令的作用及其常用选项。

## 五. 填空题（共4题）

### 17. (填空题) HDFS中，用于将本地文件复制到HDFS的命令是hdfs dfs -______，其功能与put命令相似。

### 18. (填空题) HDFS中，执行任何Shell命令之前，需要先启动HDFS服务，使用的命令是______。

### 19. (填空题) HDFS中，用于将本地文件移动到HDFS并删除本地源文件的命令是hdfs dfs -______。

### 20. (填空题) 在HDFS中，查看文件内容的命令是hdfs dfs -______，该命令会将指定路径下的文件内容输出到标准输出。

## 一. 单选题（共5题）

### 1. (单选题) 在HDFS中，用于列出目录或文件内容的命令是？

- A. hdfs dfs -ls
- B. hdfs dfs -mkdir
- C. hdfs dfs -put
- D. hdfs dfs -cat

### 2. (单选题) 下列哪个命令可以用于在HDFS中创建多级目录？

- A. hdfs dfs -mkdir -p
- B. hdfs dfs -mkdir
- C. hdfs dfs -put
- D. hdfs dfs -cp

### 3. (单选题) 将本地文件复制到HDFS中，并在复制后删除本地源文件的命令是？

- A. hdfs dfs -moveFromLocal
- B. hdfs dfs -put
- C. hdfs dfs -copyFromLocal
- D. hdfs dfs -appendToFile

### 4. (单选题) 用于查看HDFS中某个文件内容的命令是？

- A. hdfs dfs -cat
- B. hdfs dfs -ls
- C. hdfs dfs -get
- D. hdfs dfs -put

### 5. (单选题) 下列哪个命令可以将HDFS中的文件合并到本地文件系统的一个文件中？

- A. hdfs dfs -getmerge
- B. hdfs dfs -get
- C. hdfs dfs -copyToLocal
- D. hdfs dfs -mv

## 二. 多选题（共5题）

### 6. (多选题) 下列哪些命令属于HDFS中用于操作HDFS内部文件的命令？

- A. hdfs dfs -mv
- B. hdfs dfs -cp
- C. hdfs dfs -rm
- D. hdfs dfs -put
- E. hdfs dfs -get

### 7. (多选题) 下列哪些命令可以用于将本地文件上传到HDFS？

- A. hdfs dfs -put
- B. hdfs dfs -copyFromLocal
- C. hdfs dfs -moveFromLocal
- D. hdfs dfs -appendToFile
- E. hdfs dfs -get

### 8. (多选题) 下列哪些命令可以用于从HDFS下载文件到本地？

- A. hdfs dfs -get
- B. hdfs dfs -copyToLocal
- C. hdfs dfs -getmerge
- D. hdfs dfs -put
- E. hdfs dfs -cat

### 9. (多选题) 下列哪些命令可以用于删除HDFS中的文件或目录？

- A. hdfs dfs -rm
- B. hdfs dfs -rmdir
- C. hdfs dfs -delete
- D. hdfs dfs -remove
- E. hdfs dfs -rm -r

### 10. (多选题) 下列哪些命令可以用于在HDFS中进行文件的复制或移动？

- A. hdfs dfs -cp
- B. hdfs dfs -mv
- C. hdfs dfs -put
- D. hdfs dfs -get
- E. hdfs dfs -copyFromLocal

## 三. 简答题（共2题）

### 11. (简答题)请简述 hdfs dfs -put 和 hdfs dfs -moveFromLocal 的区别。

### 12. (简答题)根据提示写出HDFS的shell命令(1)查看HDFS根目录下的文件(2)在HDFS/目录下创建目录20251106(3)将本地的文件aaa.txt复制到HDFS的20251106文件中(4)查看HDFS中的aaa.txt的内容(5)将本地的文件bbb.txt内容追加到HDFS的aaa.txt文件中(6)将本地的文件aaa.txt文件复制到HDFDS改名为a01.txt后，本地文件删除。(7)将HDFS的20251106中的aaa.txt文件复制到本地文件系统(8)删除HDFS的20251106文件夹  

## 四. 填空题（共5题）

### 13. (填空题) HDFS中用于列出目录内容的命令是 ______，该命令可以使用 ______ 选项来递归列出子目录。

### 14. (填空题) 在HDFS中，使用 ______ 命令可以创建多级目录，其中 ______ 参数用于实现递归创建。

### 15. (填空题) 将HDFS中的文件内容输出到标准输出的命令是 ______，该命令可以使用 ______ 选项忽略CRC校验。

### 16. (填空题) 将HDFS中的文件合并到本地文件的命令是 ______，其中 ______ 选项用于在每个文件末尾添加换行符。

### 17. (填空题) HDFS中用于删除文件的命令是 ______，其中 ______ 选项用于递归删除目录。

## 一. 单选题（共27题）

### 1. (单选题)Zookeeper在Hadoop HA架构中的主要作用是( )

- A. 实现NameNode故障自动切换
- B. 调度MapReduce任务
- C. 存储数据块
- D. 管理元数据

*我的答案:*:*正确答案:*A:实现NameNode故障自动切换;

[*AI讲解*](javascript:;)

### 2. (单选题)YARN中负责管理单个节点资源的组件是( )

- A. NodeManager
- B. ResourceManager
- C. ApplicationMaster
- D. Container

*我的答案:*:*正确答案:*A:NodeManager;

[*AI讲解*](javascript:;)

### 3. (单选题)下列命令中，能删除HDFS中‘/test’目录(含子目录)的是( )

- A. hdfs dfs -rm -r /test
- B. hdfs dfs -delete /test
- C. hdfs dfs -rm /test
- D. hdfs dfs -rmdir /test

*我的答案:*:*正确答案:*A:hdfs dfs -rm -r /test;

[*AI讲解*](javascript:;)

### 4. (单选题)在HDFS中，NameNode主要负责什么工作？

- A. 维护文件目录结构和元数据信息
- B. 执行MapReduce任务
- C. 处理数据读写请求
- D. 存储数据块

*我的答案:*:*正确答案:*A:维护文件目录结构和元数据信息;

*答案解析：*NameNode是HDFS的核心组件，主要用来维护整个文件系统的元数据信息，包括文件目录树、文件块分布情况等。

[*AI讲解*](javascript:;)

### 5. (单选题)HDFS中，一个500MB的文件会被分割成多少个块？

- A. 3
- B. 4
- C. 6
- D. 5

*我的答案:*:*正确答案:*B:4;

*答案解析：*由于HDFS默认块大小为128MB，500MB的文件除以128MB得到3余84MB，因此总共分割为4个块。

[*AI讲解*](javascript:;)

### 6. (单选题)HDFS的副本放置策略中，第一个副本通常放置在哪里？

- A. 与第二个副本同一机架的节点
- B. 客户端所在节点
- C. 任意节点
- D. 不同机架的节点

*我的答案:*:*正确答案:*B:客户端所在节点;

*答案解析：*根据HDFS的副本放置策略，第一个副本优先放置在客户端所在的节点，若客户端为远程访问，则随机选择一个节点。

[*AI讲解*](javascript:;)

### 7. (单选题)HDFS中，记录用户操作日志的是哪一类文件？

- A. fsimage
- B. blockreport
- C. inprogress
- D. edits

*我的答案:*:*正确答案:*D:edits;

*答案解析：*edits文件用于记录用户对HDFS的每一次操作，如创建文件、删除文件等。

[*AI讲解*](javascript:;)

### 8. (单选题)HDFS中默认的数据块副本数配置在以下哪个文件中( )

- A. core-site.xml
- B. yarn-site.xml
- C. mapred-site.xml
- D. hdfs-site.xml

*我的答案:*:*正确答案:*D:hdfs-site.xml;

[*AI讲解*](javascript:;)

### 9. (单选题)下列哪个命令可以用于在HDFS中创建多级目录？

- A. hadoop fs -ls -R
- B. hdfs dfs -put
- C. hadoop fs -mkdir -p
- D. hdfs dfs -cat

*我的答案:*:*正确答案:*C:hadoop fs -mkdir -p;

*答案解析：*hadoop fs -mkdir -p 或 hdfs dfs -mkdir -p 可以用于创建多级目录，其中 -p 参数允许一次性创建多个层级的目录。

[*AI讲解*](javascript:;)

### 10. (单选题)HDFS的元数据主要存储在哪两个位置？

- A. 硬盘和日志文件
- B. 内存和JournalNode
- C. 内存和磁盘
- D. 内存和数据库

*我的答案:*:*正确答案:*C:内存和磁盘;

*答案解析：*为了性能和持久化，HDFS的元数据同时存储在内存和磁盘上。内存中用于快速访问，磁盘用于持久化保存。

[*AI讲解*](javascript:;)

### 11. (单选题)HDFS中，当NameNode启动时，它会先加载哪一类文件来恢复元数据？

- A. edits
- B. blockreport
- C. fsimage
- D. datanodeinfo

*我的答案:*:*正确答案:*C:fsimage;

*答案解析：*NameNode在启动时首先加载fsimage文件，恢复最新的文件系统状态。

[*AI讲解*](javascript:;)

### 12. (单选题)在HDFS中，Block的副本数默认是多少？

- A. 3
- B. 4
- C. 2
- D. 1

*我的答案:*:*正确答案:*A:3;

*答案解析：*HDFS的默认副本数为3，目的是为了提高数据的容错性和可用性。

[*AI讲解*](javascript:;)

### 13. (单选题)HDFS中，数据读取流程的第一步是客户端从哪个组件获取文件的元数据？

- A. NameNode
- B. JournalNode
- C. DataNode
- D. SecondaryNameNode

*我的答案:*:*正确答案:*A:NameNode;

*答案解析：*HDFS读取数据时，客户端首先向NameNode请求文件的元数据信息，以确定该文件的Block位置。

[*AI讲解*](javascript:;)

### 14. (单选题)下列不属于Hadoop核心组件的是( )

- A. YARN
- B. MapReduce
- C. Spark
- D. HDFS

*我的答案:*:*正确答案:*C:Spark;

[*AI讲解*](javascript:;)

### 15. (单选题)HDFS数据写入时，一个完整的文件是由多个什么样的单元组成的？

- A. 目录
- B. 数据流
- C. Block
- D. 校验和

*我的答案:*:*正确答案:*C:Block;

*答案解析：*HDFS将文件切分成多个Block进行分布式存储，每个Block会被复制并存储在不同的DataNode上。

[*AI讲解*](javascript:;)

### 16. (单选题)HDFS中，用于将本地文件追加到HDFS文件末尾的命令是？

- A. hadoop fs -appendToFile
- B. hdfs dfs -ls
- C. hadoop fs -cat
- D. hdfs dfs -put

*我的答案:*:*正确答案:*A:hadoop fs -appendToFile;

*答案解析：*hadoop fs -appendToFile 或 hdfs dfs -appendToFile 用于将本地文件内容追加到 HDFS 文件的末尾。

[*AI讲解*](javascript:;)

### 17. (单选题)HDFS中，一个Block的默认大小是多少（单位MB）？

- A. 256
- B. 128
- C. 32
- D. 64

*我的答案:*:*正确答案:*B:128;

*答案解析：*HDFS默认的Block大小是128MB，这是为了平衡存储效率和网络传输效率之间的关系。

[*AI讲解*](javascript:;)

### 18. (单选题)关于MapReduce的Shuffle阶段，下列描述正确的是( )

- A. 仅发生在Map端
- B. 连接Map和Reduce阶段的关键环节
- C. 不涉及数据排序
- D. 仅发生在Reduce端

*我的答案:*:*正确答案:*B:连接Map和Reduce阶段的关键环节;

[*AI讲解*](javascript:;)

### 19. (单选题)HDFS的副本数由哪个参数控制？

- A. dfs.block.size
- B. dfs.datanode.replication
- C. dfs.namenode.replication
- D. dfs.replication

*我的答案:*:*正确答案:*D:dfs.replication;

*答案解析：*dfs.replication是HDFS中用于设置每个数据块副本数量的配置参数，默认值为3。

[*AI讲解*](javascript:;)

### 20. (单选题)在HDFS中，用于列出目录或文件信息的命令是？

- A.

  hadoop fs -mkdir

- B.

  hdfs dfs -ls

- C.

  hadoop fs -cat

- D.

  hdfs dfs -put

*我的答案:*:*正确答案:*B:hdfs dfs -ls;

*答案解析：*

hdfs dfs -ls 是 HDFS 中用于列出目录或文件信息的命令，可以配合 -R 参数递归列出子目录内容。

[*AI讲解*](javascript:;)

### 21. (单选题)HDFS中，用于查看文件内容的命令是？

- A. hdfs dfs -mkdir
- B. hadoop fs -ls
- C. hdfs dfs -put
- D. hadoop fs -cat

*我的答案:*:*正确答案:*D:hadoop fs -cat;

*答案解析：*hadoop fs -cat 或 hdfs dfs -cat 用于查看 HDFS 中文件的内容，类似于 Linux 中的 cat 命令。

[*AI讲解*](javascript:;)

### 22. (单选题)HDFS中，一个文件默认情况下被分割成若干个数据块(block)，每个块的大小是多少？

- A. 512MB
- B. 128MB
- C. 256MB
- D. 64MB

*我的答案:*:*正确答案:*B:128MB;

*答案解析：*HDFS默认的块大小为128MB，这是为了优化大规模数据的存储和读取效率。

[*AI讲解*](javascript:;)

### 23. (单选题)HDFS的NameNode主要负责什么？

- A. 负责数据块的备份和恢复
- B. 管理文件系统命名空间和元数据
- C. 存储实际的数据块
- D. 执行数据块的读写操作

*我的答案:*:*正确答案:*B:管理文件系统命名空间和元数据;

*答案解析：*NameNode是HDFS集群的核心，负责管理文件系统的命名空间和元数据，而不是直接存储数据。

[*AI讲解*](javascript:;)

### 24. (单选题)HDFS中持久化的元数据文件是哪一个？

- A. datanodeinfo
- B. fsimage
- C. blockreport
- D. edits

*我的答案:*:*正确答案:*B:fsimage;

*答案解析：*fsimage是HDFS中用于保存文件系统元数据快照的文件，每次Checkpoint操作会生成新的fsimage文件。

[*AI讲解*](javascript:;)

### 25. (单选题)Hadoop 2.x中，HDFS默认的Block Size大小是( )

- A. 128MB
- B. 64MB
- C. 512MB
- D. 256MB

*我的答案:*:*正确答案:*A:128MB;

[*AI讲解*](javascript:;)

### 26. (单选题)HDFS中，将本地文件上传到HDFS的命令是？

- A. hdfs dfs -mkdir
- B. hadoop fs -put
- C. hdfs dfs -cat
- D. hadoop fs -ls

*我的答案:*:*正确答案:*B:hadoop fs -put;

*答案解析：*hadoop fs -put 或 hdfs dfs -put 是用于将本地文件上传到 HDFS 的命令，常用于数据导入。

[*AI讲解*](javascript:;)

### 27. (单选题)在HDFS数据写入过程中，客户端上传数据时的最小单位是什么？

- A. 文件
- B. 字节
- C. 块（Block）
- D. 目录

*我的答案:*:*正确答案:*C:块（Block）;

*答案解析：*HDFS中，数据是以块为基本单位进行存储和传输的。客户端在上传数据时，是按照块的大小逐个上传的。

[*AI讲解*](javascript:;)

## 二. 多选题（共16题）

### 28. (多选题)下列关于HDFS中 moveFromLocal 命令的说法，正确的有哪些？

- A. 移动后本地文件会被删除
- B. 可以用于上传文件
- C. 与 put 命令完全相同
- D. 用于将本地文件移动到HDFS
- E. 不支持多文件操作

*我的答案:*:*正确答案:*ABD:移动后本地文件会被删除; 可以用于上传文件; 用于将本地文件移动到HDFS;

*答案解析：*hadoop fs -moveFromLocal 将本地文件移动到 HDFS，移动后本地文件会被删除，与 put 命令不同。

[*AI讲解*](javascript:;)

### 29. (多选题)关于HDFS的副本策略，以下说法正确的是？

- A. 副本可以放在同一个节点上
- B. 副本放置策略考虑了机架感知
- C. 副本数可以动态调整
- D. 副本数越多越好
- E. 副本数默认为3

*我的答案:*:*正确答案:*BCE:副本放置策略考虑了机架感知; 副本数可以动态调整; 副本数默认为3;

*答案解析：*HDFS的副本策略默认为3，副本放置考虑了机架感知，副本数可以动态调整，但并非越多越好，因为会影响性能。

[*AI讲解*](javascript:;)

### 30. (多选题)Hadoop特点包括( )

- A. 高性能
- B. 支持多种编程语言
- C. 高可靠性
- D. 高扩展

*我的答案:*:*正确答案:*CD:高可靠性; 高扩展;

[*AI讲解*](javascript:;)

### 31. (多选题)HDFS中，DataNode的主要职责包括哪些？

- A. 执行MapReduce任务
- B. 存储实际的数据块
- C. 管理文件的分块信息
- D. 维护文件目录结构
- E. 定期向NameNode发送心跳
- F. 报告自己管理的Block列表

*我的答案:*:*正确答案:*BEF:存储实际的数据块; 定期向NameNode发送心跳; 报告自己管理的Block列表;

*答案解析：*DataNode负责存储数据块，并定期向NameNode发送心跳和Block汇报，以告知其自身状态和所管理的Block信息。

[*AI讲解*](javascript:;)

### 32. (多选题)关于HDFS中 mkdir 命令的描述，正确的有哪些？

- A. 可以创建多个目录
- B. 用于创建目录
- C. 不支持递归创建
- D. 需要使用 -p 参数创建多级目录
- E. 只能创建单层目录

*我的答案:*:*正确答案:*ABD:可以创建多个目录; 用于创建目录; 需要使用 -p 参数创建多级目录;

*答案解析：*hadoop fs -mkdir 支持创建多个目录，且通过 -p 参数可以递归创建多级目录。

[*AI讲解*](javascript:;)

### 33. (多选题)HDFS元数据包括哪些信息？

- A.

  文件目录结构

- B.

  Block到DataNode的映射

- C.

  DataNode存储的Block数量

- D.

  文件分块信息

*我的答案:*:*正确答案:*ABCD:文件目录结构; Block到DataNode的映射; DataNode存储的Block数量; 文件分块信息;

*答案解析：*

HDFS元数据包括文件目录结构、文件分块信息、Block与DataNode的映射、DataNode存储的Block数量以及文件的一些属性如修改时间等。

[*AI讲解*](javascript:;)

### 34. (多选题)HDFS中，NameNode的作用包括以下哪些？

- A.

  管理文件的分块信息

- B.

  维护文件目录结构

- C.

  管理Block到DataNode的映射

- D.

  存储实际的数据

*我的答案:*:*正确答案:*ABC:管理文件的分块信息; 维护文件目录结构; 管理Block到DataNode的映射;

*答案解析：*

NameNode是HDFS的核心，主要用于管理文件系统元数据，包括目录结构、文件分块信息、Block位置映射以及DataNode状态等。

[*AI讲解*](javascript:;)

### 35. (多选题)下列属于YARN核心组件的有( )

- A. DataNode
- B. NodeManager
- C. ApplicationMaster
- D. ResourceManager

*我的答案:*:*正确答案:*BCD:NodeManager; ApplicationMaster; ResourceManager;

[*AI讲解*](javascript:;)

### 36. (多选题)下列关于HDFS的说法中，错误的是？

- A. HDFS具有高吞吐量
- B. HDFS支持并发写入
- C. HDFS放宽了部分POSIX要求
- D. HDFS适合存储大量小文件
- E. HDFS不适合流式数据访问

*我的答案:*:*正确答案:*BDE:HDFS支持并发写入; HDFS适合存储大量小文件; HDFS不适合流式数据访问;

*答案解析：*HDFS不适合存储大量小文件，也不支持并发写入，但适合流式数据访问，具有高吞吐量，并放宽了部分POSIX要求。

[*AI讲解*](javascript:;)

### 37. (多选题)HDFS的主要特点有哪些？

- A. 支持并发写入
- B. 适用于小文件存储
- C. 通透性，用户感觉像访问本地磁盘
- D. 高容错性
- E. 适合一次写入多次读取

*我的答案:*:*正确答案:*CDE:通透性，用户感觉像访问本地磁盘; 高容错性; 适合一次写入多次读取;

*答案解析：*HDFS的特点包括高容错性、适合一次写入多次读取以及通透性，但不支持并发写入，也不适合小文件存储。

[*AI讲解*](javascript:;)

### 38. (多选题)HDFS的架构中，以下哪些组件属于其核心组成部分？

- A. NameNode
- B. ZooKeeper
- C. Client
- D. DataNode
- E. SecondaryNameNode

*我的答案:*:*正确答案:*ACDE:NameNode; Client; DataNode; SecondaryNameNode;

*答案解析：*HDFS的架构包括Client、NameNode、DataNode和SecondaryNameNode，ZooKeeper不是HDFS的组成部分。

[*AI讲解*](javascript:;)

### 39. (多选题)关于HDFS中 -ls 命令的描述，正确的有哪些？

- A. 支持 -R 参数递归列出子目录
- B. 可以查看文件内容
- C. 用于列出目录或文件信息
- D. 不支持查看隐藏文件
- E. 支持 -h 参数以易读方式显示文件大小

*我的答案:*:*正确答案:*ACE:支持 -R 参数递归列出子目录; 用于列出目录或文件信息; 支持 -h 参数以易读方式显示文件大小;

*答案解析：*hadoop fs -ls 支持 -R 参数递归列出子目录，-h 参数以易读方式显示文件大小，但不能查看文件内容。

[*AI讲解*](javascript:;)

### 40. (多选题)下列哪些命令可以用于将本地文件上传至HDFS？

- A. hadoop fs -ls
- B. hadoop fs -cat
- C. hadoop fs -put
- D. hadoop fs -appendToFile
- E. hdfs dfs -copyFromLocal

*我的答案:*:*正确答案:*CDE:hadoop fs -put; hadoop fs -appendToFile; hdfs dfs -copyFromLocal;

*答案解析：*hadoop fs -put、hdfs dfs -copyFromLocal 和 hadoop fs -appendToFile 都可以用于将本地文件上传到 HDFS。

[*AI讲解*](javascript:;)

### 41. (多选题)HDFS的心跳机制涉及哪些内容？

- A. 心跳包含DataNode存储的块信息
- B. NameNode根据心跳判断DataNode是否宕机
- C. DataNode定期向NameNode发送心跳
- D. 心跳频率默认为10秒
- E. 心跳包含DataNode的资源状态

*我的答案:*:*正确答案:*ABCE:心跳包含DataNode存储的块信息; NameNode根据心跳判断DataNode是否宕机; DataNode定期向NameNode发送心跳; 心跳包含DataNode的资源状态;

*答案解析：*DataNode定期向NameNode发送心跳，包含资源状态和块信息，NameNode据此判断DataNode是否宕机，心跳频率默认为3秒。

[*AI讲解*](javascript:;)

### 42. (多选题)HDFS元数据合并机制的作用包括哪些？

- A.

  避免元数据丢失

- B.

  增加Block大小

- C.

  提升NameNode的重启速度

- D.

  减少edits文件的大小

*我的答案:*:*正确答案:*ACD:避免元数据丢失; 提升NameNode的重启速度; 减少edits文件的大小;

*答案解析：*

元数据合并机制通过将edits文件与fsimage合并，减少了NameNode重启时的加载时间，同时降低了元数据存储的冗余。

[*AI讲解*](javascript:;)

### 43. (多选题)下列哪些命令可以在HDFS中进行文件操作？

- A. hadoop fs -mkdir
- B. hadoop fs -appendToFile
- C. hdfs dfs -put
- D. hadoop fs -cat
- E. hadoop fs -ls

*我的答案:*:*正确答案:*ABCDE:hadoop fs -mkdir; hadoop fs -appendToFile; hdfs dfs -put; hadoop fs -cat; hadoop fs -ls;

*答案解析：*hadoop fs 和 hdfs dfs 提供了多种文件操作命令，包括 ls、put、cat、mkdir 和 appendToFile 等。

[*AI讲解*](javascript:;)

## 三. 判断题（共10题）

### 44. (判断题)HDFS适合存储大量小文件。

- A. 对
- B. 错

*我的答案:**正确答案:*错

*答案解析：*HDFS不适合存储大量小文件，因为这会导致NameNode的元数据压力过大，影响性能。

[*AI讲解*](javascript:;)

### 45. (判断题)HDFS支持并发写入。

- A. 对
- B. 错

*我的答案:**正确答案:*错

*答案解析：*HDFS不支持并发写入，它更适合一次写入、多次读取的场景。

[*AI讲解*](javascript:;)

### 46. (判断题)hadoop fs -put 命令会自动删除本地文件。

- A. 对
- B. 错

*我的答案:**正确答案:*错

*答案解析：*hadoop fs -put 命令不会删除本地文件，而只是将文件上传到 HDFS。

[*AI讲解*](javascript:;)

### 47. (判断题)HDFS的NameNode负责存储实际的数据块。

- A. 对
- B. 错

*我的答案:**正确答案:*错

*答案解析：*NameNode负责管理元数据，而实际的数据块是由DataNode存储的。

[*AI讲解*](javascript:;)

### 48. (判断题)HDFS中，hadoop fs -mkdir 命令默认可以创建多级目录。

- A. 对
- B. 错

*我的答案:**正确答案:*错

*答案解析：*hadoop fs -mkdir 默认只能创建单级目录，创建多级目录需要添加 -p 参数。

[*AI讲解*](javascript:;)

### 49. (判断题)HDFS中，操作文件时只能使用相对路径。

- A. 对
- B. 错

*我的答案:**正确答案:*错

*答案解析：*HDFS中操作文件时必须使用绝对路径，因为其文件系统结构只有一个根目录 /。

[*AI讲解*](javascript:;)

### 50. (判断题)HDFS的副本数默认为3。

- A. 对
- B. 错

*我的答案:**正确答案:*对

*答案解析：*HDFS默认的副本数为3，这是为了提高数据的容错性和可靠性。

[*AI讲解*](javascript:;)

### 51. (判断题)hadoop fs -appendToFile 命令可以将多个本地文件追加到同一个 HDFS 文件中。

- A. 对
- B. 错

*我的答案:**正确答案:*对

*答案解析：*hadoop fs -appendToFile 支持将多个本地文件内容追加到一个 HDFS 文件中。

[*AI讲解*](javascript:;)

### 52. (判断题)HDFS的副本放置策略考虑了机架感知。

- A. 对
- B. 错

*我的答案:**正确答案:*对

*答案解析：*HDFS的副本放置策略会优先将副本放在不同机架上，以提高容错性和数据可用性。

[*AI讲解*](javascript:;)

### 53. (判断题)hadoop fs -ls 命令可以递归列出子目录内容。

- A. 对
- B. 错

*我的答案:**正确答案:*对

*答案解析：*hadoop fs -ls 支持 -R 参数，用于递归列出子目录内容。

[*AI讲解*](javascript:;)

## 四. 填空题（共7题）

### 54. (填空题)HDFS中，一个文件的大小为![img](https://p.ananas.chaoxing.com/star3/origin/4c0aa30d31d45f45eafa09175bfc41fc.png)MB，另一个文件的大小为![img](https://p.ananas.chaoxing.com/star3/origin/8e4124d268a9885b62cee4266a13c387.png)MB，两个文件总共会被分割为_____个数据块。

- *我的答案：*

- *正确答案：*

  (1) 3

*答案解析：*300MB的文件会被分割为3个数据块，84MB的文件会被分割为1个数据块，因此总共为4个数据块。

[*AI讲解*](javascript:;)

### 55. (填空题)MapReduce中创建Job对象的方法是____，自定义分区组件继承的类是____。

- *我的答案：*

- *正确答案：*

  (1) Job.getInstance()

  (2) Partitioner

[*AI讲解*](javascript:;)

### 56. (填空题)自定义序列化实现的接口是____，自定义排序实现的接口是 ____。

- *我的答案：*

- *正确答案：*

  (1) Writable

  (2) WritableCompareable

[*AI讲解*](javascript:;)

### 57. (填空题)HDFS的主节点进程是 ____，YARN从节点进程是 ____。

- *我的答案：*

- *正确答案：*

  (1) NameNode

  (2) NodeManager

[*AI讲解*](javascript:;)

### 58. (填空题)Shuffle阶段的核心操作包括____、____和归并(Merge)。

- *我的答案：*

- *正确答案：*

  (1) 分区(Partition)

  (2) 排序(Sort)

[*AI讲解*](javascript:;)

### 59. (填空题)Hadoop HA架构中，实现NameNode状态监控和故障切换的组件是____，故障切换的触发条件包括____(写出1种即可)。

- *我的答案：*

- *正确答案：*

  (1) ookeeper;Active

  (2) NameNode节点故障(或心跳超时、进程挂掉等，答对1种即可)

[*AI讲解*](javascript:;)

### 60. (填空题)HDFS中，一个文件的大小为![img](https://p.ananas.chaoxing.com/star3/origin/2870d43f25570955ae5e70adc69d302f.png)MB，每个数据块的大小为![img](https://p.ananas.chaoxing.com/star3/origin/0fc98debdcc4149e1dc54b0f0dc62c36.png)MB，那么该文件会被分割为_____个数据块。

- *我的答案：*

- *正确答案：*

  (1) 4

*答案解析：*500除以128等于3余84，因此该文件会被分割为4个数据块。

[*AI讲解*](javascript:;)

## 五. 简答题（共2题）

### 61. (简答题)介绍一下YARN的工作流程。 

- *我的答案：*

  

- *正确答案：*

  （1）客户端向ResourceManager提交应用程序。 （2）ResourceManager中的ApplicationsManager接收请求，并与NodeManager协商启动第一个容器，并在容器中启动一个ApplicationMaster。 （3）ApplicationMaster被创建后首先向ResourceManager注册，这样用户可以直接通过ResourceManager查看应用程序的运行状态。 （4）ApplicationMaster向ResourceManager中的Scheduler申请和领取资源。（5）一旦ApplicationMaster申请到资源后，就会与该容器所在的NodeManager通信，要求它启动任务。（6）NodeManager启动容器运行任务。（7）ApplicationMaster会监控任务的运行状态并汇报给ApplicationsManager。 

[*AI讲解*](javascript:;)

### 62. (简答题)编写下列操作的Hadoop Shell命令或系统命令：（1）在HDFS上创建多级目录‘/user/team/project/data’； （2）将本地‘/home/stu/data.txt’文件上传到HDFS的‘/user/team/project/data’目录； （3）查看HDFS中‘/user/team/project/data’目录下的文件详细信息； （4）将HDFS中‘/user/team/project/data/data.txt’文件下载到本地‘/home/stu/backup’目录； （5）删除HDFS中‘/user/team/project’目录及其所有子内容。 

- *我的答案：*

  

- *正确答案：*

  （1）创建多级目录： hdfs dfs -mkdir -p /user/team/project/data  （2）本地文件上传： hdfs dfs -put /home/stu/data.txt /user/team/project/data （或hdfs dfs -copyFromLocal /home/stu/data.txt /user/team/project/data，两者均实现本地到HDFS的上传） （3）查看目录详细信息： hdfs dfs -ls -l /user/team/project/data （4）HDFS文件下载： # 先创建本地备份目录（若不存在） mkdir -p /home/stu/backup # 下载文件 hdfs dfs -get /user/team/project/data/data.txt /home/stu/backup （或hdfs dfs -copyToLocal /user/team/project/data/data.txt /home/stu/backup） （5）删除目录及子内容： hdfs dfs -rm -r /user/team/project 

## 一. 单选题（共36题）

### 1. (单选题)YARN 中的 Container 是什么？

- A. 一个应用程序的主控制器
- B. 一种独立的计算任务
- C. 封装了 CPU 和 Memory 等资源的抽象单元
- D. 用于存储数据的容器

*我的答案:*:*正确答案:*C:封装了 CPU 和 Memory 等资源的抽象单元;

*答案解析：*Container 是 YARN 中的一种资源抽象，封装了 CPU、Memory 等资源，是运行任务的环境。

[*AI讲解*](javascript:;)

### 2. (单选题)以下哪项不是 ResourceManager 的职责？

- A. 直接执行应用程序的计算任务
- B. 监控 NodeManager 的状态
- C. 处理客户端请求
- D. 资源调度和分配

*我的答案:*:*正确答案:*A:直接执行应用程序的计算任务;

*答案解析：*ResourceManager 不直接执行计算任务，而是通过 ApplicationMaster 和 NodeManager 协作完成任务的执行。

[*AI讲解*](javascript:;)

### 3. (单选题)YARN 中负责资源调度的模块是？

- A. ContainerManager
- B. Scheduler
- C. ApplicationsManager
- D. ApplicationMaster

*我的答案:*:*正确答案:*B:Scheduler;

*答案解析：*Scheduler 是 ResourceManager 的一部分，负责在资源可用的情况下进行资源调度。

[*AI讲解*](javascript:;)

### 4. (单选题)YARN 中的 Scheduler 是什么？

- A. 负责集群中所有应用程序的启动
- B. 负责监控应用程序的运行状态
- C. 负责处理用户提交的作业请求
- D. 负责资源的分配以及调度

*我的答案:*:*正确答案:*D:负责资源的分配以及调度;

*答案解析：*Scheduler 是 ResourceManager 的一个核心组件，主要负责资源的分配和调度。

[*AI讲解*](javascript:;)

### 5. (单选题)YARN 的 ResourceManager 主要负责什么？

- A. 管理节点上的容器资源
- B. 执行应用程序的计算任务
- C. 监控单个节点的资源使用情况
- D. 为每个应用程序启动 ApplicationMaster

*我的答案:*:*正确答案:*D:为每个应用程序启动 ApplicationMaster;

*答案解析：*ResourceManager 是 YARN 中的核心组件之一，主要负责集群范围内所有应用程序的资源管理和调度，并负责启动 ApplicationMaster。

[*AI讲解*](javascript:;)

### 6. (单选题)以下哪条命令用于列出 YARN 中运行的所有应用程序？

- A. yarn application -start
- B. yarn application -status
- C. yarn application -list
- D. yarn application -kill

*我的答案:*:*正确答案:*C:yarn application -list;

*答案解析：*yarn application -list 是用于列出 YARN 中所有运行中的应用程序的命令。

[*AI讲解*](javascript:;)

### 7. (单选题)下列属于Hadoop序列化类的是( )

- A. Text
- B. String
- C. List
- D. Integer

*我的答案:*:*正确答案:*A:Text;

[*AI讲解*](javascript:;)

### 8. (单选题)配置Hadoop的JAVA_HOME环境变量，应修改哪个文件( )

- A. mapred-env.sh
- B. core-site.xml
- C. hadoop-env.sh
- D. hdfs-site.xml

*我的答案:*:*正确答案:*C:hadoop-env.sh;

[*AI讲解*](javascript:;)

### 9. (单选题)MapReduce中，默认的Reduce任务数量是( )

- A. 由集群节点数决定
- B. 与Map任务数量相同
- C. 2
- D. 1

*我的答案:*:*正确答案:*D:1;

[*AI讲解*](javascript:;)

### 10. (单选题)下列哪个命令可以查看HDFS中‘/user/stu/file.txt’的文件内容( )

- A. hdfs dfs -ls /user/stu/file.txt
- B. hdfs dfs -put /user/stu/file.txt
- C. hdfs dfs -cat /user/stu/file.txt
- D. hdfs dfs -get /user/stu/file.txt

*我的答案:*:*正确答案:*C:hdfs dfs -cat /user/stu/file.txt;

[*AI讲解*](javascript:;)

### 11. (单选题)YARN 中负责集群资源统一管理和调度的核心组件是什么？

- A. Client
- B. ApplicationMaster
- C. NodeManager
- D. ResourceManager

*我的答案:*:*正确答案:*D:ResourceManager;

*答案解析：*ResourceManager 是 YARN 的核心组件之一，负责集群资源的统一管理和调度。

[*AI讲解*](javascript:;)

### 12. (单选题)YARN 的工作流程中，哪一步涉及 ApplicationMaster 向 ResourceManager 注册？

- A. 第一步
- B. 第四步
- C. 第二步
- D. 第三步

*我的答案:*:*正确答案:*D:第三步;

*答案解析：*YARN 的工作流程中，ApplicationMaster 成功运行后会向 ApplicationsManager 注册，这是第三步。

[*AI讲解*](javascript:;)

### 13. (单选题)在 YARN 中，哪个组件负责处理客户端的请求？

- A. ResourceManager
- B. ApplicationMaster
- C. NodeManager
- D. Container

*我的答案:*:*正确答案:*A:ResourceManager;

*答案解析：*ResourceManager 负责处理客户端的作业提交请求，并协调整个集群的资源分配。

[*AI讲解*](javascript:;)

### 14. (单选题)向Hadoop集群提交MapReduce任务的核心命令是( )

- A. yarn jar
- B. hadoop jar
- C. hadoop submit
- D. mapreduce submit

*我的答案:*:*正确答案:*B:hadoop jar;

[*AI讲解*](javascript:;)

### 15. (单选题)HDFS的“一次写入，多次读取”特性主要是为了( )

- A. 提高数据安全性
- B. 适配大数据处理场景
- C. 简化权限管理
- D. 降低存储成本

*我的答案:*:*正确答案:*B:适配大数据处理场景;

[*AI讲解*](javascript:;)

### 16. (单选题)下列关于 NodeManager 的描述中，正确的是哪一项？

- A. 负责集群中所有应用程序的资源调度
- B. 负责向 ApplicationMaster 提交作业
- C. 定时向 ResourceManager 汇报节点资源使用情况
- D. 每个集群中只存在一个 NodeManager

*我的答案:*:*正确答案:*C:定时向 ResourceManager 汇报节点资源使用情况;

*答案解析：*NodeManager 是 YARN 架构中的一个关键角色，它运行在每个节点上，负责管理该节点的资源，并定时向 ResourceManager 汇报节点的资源使用状况。

[*AI讲解*](javascript:;)

### 17. (单选题)YARN 应用程序提交的第一步是？

- A. ApplicationMaster 向 ResourceManager 注册
- B. Client 将作业提交给 ResourceManager 的 ApplicationsManager
- C. ApplicationMaster 分配资源
- D. NodeManager 启动任务

*我的答案:*:*正确答案:*B:Client 将作业提交给 ResourceManager 的 ApplicationsManager;

*答案解析：*YARN 的工作流程中，Client 提交作业的第一步是将作业提交到 ResourceManager 的 ApplicationsManager。

[*AI讲解*](javascript:;)

### 18. (单选题)关于SecondaryNameNode的说法，正确的是( )

- A. 负责合并NameNode的编辑日志
- B. 与NameNode部署在同一节点
- C. 能替代故障的NameNode
- D. 是NameNode的热备份

*我的答案:*:*正确答案:*A:负责合并NameNode的编辑日志;

[*AI讲解*](javascript:;)

### 19. (单选题)YARN的Web监控默认端口是( )

- A. 8088
- B. 50030
- C. 19888
- D. 50070

*我的答案:*:*正确答案:*A:8088;

[*AI讲解*](javascript:;)

### 20. (单选题)下列哪个命令可以将HDFS中的文件合并到本地文件系统的一个文件中？

- A. hdfs dfs -getmerge
- B. hdfs dfs -copyToLocal
- C. hdfs dfs -get
- D. hdfs dfs -mv

*我的答案:*:*正确答案:*A:hdfs dfs -getmerge;

*答案解析：*hdfs dfs -getmerge 用于将 HDFS 中的多个文件合并并下载到本地一个文件中。

[*AI讲解*](javascript:;)

### 21. (单选题)下列不属于Hadoop生态圈组件的是( )

- A. Spring
- B. HBase
- C. Hive
- D. Flume

*我的答案:*:*正确答案:*A:Spring;

[*AI讲解*](javascript:;)

### 22. (单选题)以下哪种说法正确描述了 YARN 中 Client 的作用？

- A. Client 是唯一能够监控 NodeManager 的组件
- B. Client 是用户向 YARN 提交作业的接口
- C. Client 负责集群资源的统一管理
- D. Client 能够直接启动 ApplicationMaster

*我的答案:*:*正确答案:*B:Client 是用户向 YARN 提交作业的接口;

*答案解析：*Client 是用户与 YARN 交互的接口，用于提交、查询或杀死作业。

[*AI讲解*](javascript:;)

### 23. (单选题)下列关于Hadoop HA架构的描述，正确的是( )

- A. 包含一个Active NameNode和一个Standby NameNode
- B. SecondaryNameNode是必备组件
- C. 两个NameNode同时提供服务
- D. 不需要Zookeeper支持

*我的答案:*:*正确答案:*A:包含一个Active NameNode和一个Standby NameNode;

[*AI讲解*](javascript:;)

### 24. (单选题)ApplicationMaster 的核心职责是什么？

- A. 向 ResourceManager 申请资源，并协调 NodeManager 启动任务
- B. 处理用户提交的作业请求
- C. 负责监控节点资源使用情况
- D. 统一管理整个集群的资源

*我的答案:*:*正确答案:*A:向 ResourceManager 申请资源，并协调 NodeManager 启动任务;

*答案解析：*ApplicationMaster 是每个应用程序特有的管理器，它负责与 ResourceManager 协商资源，并与 NodeManager 一起启动和监控任务。

[*AI讲解*](javascript:;)

### 25. (单选题)ApplicationMaster 向 ResourceManager 调度资源的依据是什么？

- A. 任务的优先级
- B. 应用程序的资源需求
- C. 用户的权限
- D. 当前节点的负载

*我的答案:*:*正确答案:*B:应用程序的资源需求;

*答案解析：*ApplicationMaster 会根据应用程序的资源需求向 Scheduler 请求资源。

[*AI讲解*](javascript:;)

### 26. (单选题)下列哪一个命令用于查看 YARN 上所有运行中的应用程序？

- A. yarn application -list
- B. yarn application -kill
- C. yarn application -status
- D. yarn application -start

*我的答案:*:*正确答案:*A:yarn application -list;

*答案解析：*yarn application -list 命令用于列出 YARN 中当前运行的所有应用程序。

[*AI讲解*](javascript:;)

### 27. (单选题)在 YARN 架构中，哪个组件负责与 NodeManager 协同执行和监控任务？

- A. ApplicationMaster
- B. ResourceManager
- C. ApplicationsManager
- D. Scheduler

*我的答案:*:*正确答案:*A:ApplicationMaster;

*答案解析：*ApplicationMaster 是每个应用程序的管理者，负责与 NodeManager 协作以执行和监控任务。

[*AI讲解*](javascript:;)

### 28. (单选题)在HDFS中，用于列出目录或文件内容的命令是？

- A. hdfs dfs -put
- B. hdfs dfs -ls
- C. hdfs dfs -cat
- D. hdfs dfs -mkdir

*我的答案:*:*正确答案:*B:hdfs dfs -ls;

*答案解析：*hdfs dfs -ls 是 HDFS 中用于列出目录或文件内容的命令，选项 A 正确。

[*AI讲解*](javascript:;)

### 29. (单选题)用于查看HDFS中某个文件内容的命令是？

- A. hdfs dfs -cat
- B. hdfs dfs -put
- C. hdfs dfs -get
- D. hdfs dfs -ls

*我的答案:*:*正确答案:*A:hdfs dfs -cat;

*答案解析：*hdfs dfs -cat 命令用于查看 HDFS 中文件的内容，选项 A 正确。

[*AI讲解*](javascript:;)

### 30. (单选题)以下哪种说法关于 Container 是正确的？

- A. Container 仅包含 CPU 资源
- B. Container 由 ApplicationMaster 直接管理，无需经过 ResourceManager
- C. Container 是一个任务运行环境的抽象，包含内存、CPU 等资源
- D. Container 是 YARN 中的物理硬件单元

*我的答案:*:*正确答案:*C:Container 是一个任务运行环境的抽象，包含内存、CPU 等资源;

*答案解析：*Container 是 YARN 中的任务运行环境的抽象，包括 CPU、内存等资源。

[*AI讲解*](javascript:;)

### 31. (单选题)关于DataNode的描述，错误的是( )

- A. 存储HDFS的数据块
- B. 负责元数据管理
- C. 执行数据块的创建和删除
- D. 定期向NameNode发送心跳

*我的答案:*:*正确答案:*B:负责元数据管理;

[*AI讲解*](javascript:;)

### 32. (单选题)MapReduce中，Map任务的并行度由以下哪个因素决定( )

- A. 节点数量
- B. 输入分片(Split)数量
- C. Reduce任务数量
- D. 数据块大小

*我的答案:*:*正确答案:*B:输入分片(Split)数量;

[*AI讲解*](javascript:;)

### 33. (单选题)将本地文件复制到HDFS中，并在复制后删除本地源文件的命令是？

- A. hdfs dfs -put
- B. hdfs dfs -moveFromLocal
- C. hdfs dfs -copyFromLocal
- D. hdfs dfs -appendToFile

*我的答案:*:*正确答案:*B:hdfs dfs -moveFromLocal;

*答案解析：*hdfs dfs -moveFromLocal 的作用是将本地文件复制到 HDFS 并删除本地源文件。

[*AI讲解*](javascript:;)

### 34. (单选题)以下关于 NodeManager 的描述中，哪一项是错误的？

- A. NodeManager 可以有多个实例运行在集群中
- B. NodeManager 负责节点上的资源管理和使用
- C. NodeManager 向 ResourceManager 报告本节点的资源使用情况
- D. NodeManager 能独立调度资源而不依赖 ResourceManager

*我的答案:*:*正确答案:*D:NodeManager 能独立调度资源而不依赖 ResourceManager;

*答案解析：*NodeManager 不具备独立调度资源的能力，它依赖于 ResourceManager 和 ApplicationMaster 的指令。

[*AI讲解*](javascript:;)

### 35. (单选题)Hadoop集群搭建时，配置SSH免密登录的核心目的是( )

- A. 简化节点管理
- B. 加快数据传输速度
- C. 提高集群安全性
- D. 避免启动服务时重复输入密码

*我的答案:*:*正确答案:*D:避免启动服务时重复输入密码;

[*AI讲解*](javascript:;)

### 36. (单选题)下列哪个命令可以用于在HDFS中创建多级目录？

- A. hdfs dfs -mkdir
- B. hdfs dfs -put
- C. hdfs dfs -cp
- D. hdfs dfs -mkdir -p

*我的答案:*:*正确答案:*D:hdfs dfs -mkdir -p;

*答案解析：*hdfs dfs -mkdir -p 可以创建多级目录，其中 -p 参数表示递归创建。

[*AI讲解*](javascript:;)

## 二. 多选题（共11题）

### 37. (多选题)下列哪些命令可以用于将本地文件上传到HDFS？

- A. hdfs dfs -moveFromLocal
- B. hdfs dfs -appendToFile
- C. hdfs dfs -get
- D. hdfs dfs -copyFromLocal
- E. hdfs dfs -put

*我的答案:*:*正确答案:*ABDE:hdfs dfs -moveFromLocal; hdfs dfs -appendToFile; hdfs dfs -copyFromLocal; hdfs dfs -put;

*答案解析：*hdfs dfs -put、-copyFromLocal、-moveFromLocal 和 -appendToFile 都可以用于将本地文件上传到 HDFS。

[*AI讲解*](javascript:;)

### 38. (多选题)下列哪些属于 YARN 的工作流程步骤？

- A.

  ApplicationMaster 向 ResourceManager 申请资源

- B.

  Client 提交作业到 ApplicationsManager

- C.

  ApplicationMaster 向 Scheduler 注册

- D.

  NodeManager 启动任务

*我的答案:*:*正确答案:*ABD:ApplicationMaster 向 ResourceManager 申请资源; Client 提交作业到 ApplicationsManager; NodeManager 启动任务;

*答案解析：*

YARN 的工作流程包括 Client 提交作业、ApplicationMaster 申请资源、NodeManager 启动任务等步骤。

[*AI讲解*](javascript:;)

### 39. (多选题)MapReduce的容错机制包括( )

- A. 元数据备份
- B. 数据块多副本
- C. 推测执行(Speculative Execution)
- D. 任务失败自动重试

*我的答案:*:*正确答案:*ABCD:元数据备份; 数据块多副本; 推测执行(Speculative Execution); 任务失败自动重试;

[*AI讲解*](javascript:;)

### 40. (多选题)下列Hadoop Shell命令中，用于数据上传/下载的有( )

- A. hdfs dfs -copyFromLocal
- B. hdfs dfs -copyToLocal
- C. hdfs dfs -get
- D. hdfs dfs -put

*我的答案:*:*正确答案:*ABCD:hdfs dfs -copyFromLocal; hdfs dfs -copyToLocal; hdfs dfs -get; hdfs dfs -put;

[*AI讲解*](javascript:;)

### 41. (多选题)关于HDFS的写数据流程，下列步骤正确的有( )

- A. 客户端直接向DataNode写入数据
- B. NameNode分配数据块存储节点
- C. 客户端向NameNode请求上传文件
- D. 数据写入完成后NameNode更新元数据

*我的答案:*:*正确答案:*BCD:NameNode分配数据块存储节点; 客户端向NameNode请求上传文件; 数据写入完成后NameNode更新元数据;

[*AI讲解*](javascript:;)

### 42. (多选题)以下哪些是 NodeManager 的职责？

- A.

  管理本地节点资源

- B.

  监控任务执行

- C.

  定期向 ResourceManager 汇报资源使用情况

- D.

  执行任务的调度

*我的答案:*:*正确答案:*AC:管理本地节点资源; 定期向 ResourceManager 汇报资源使用情况;

*答案解析：*

NodeManager 的职责包括定期汇报资源使用、管理本地资源以及响应 ApplicationMaster 的命令。

[*AI讲解*](javascript:;)

### 43. (多选题)下列哪些命令属于HDFS中用于操作HDFS内部文件的命令？

- A. hdfs dfs -rm
- B. hdfs dfs -mv
- C. hdfs dfs -get
- D. hdfs dfs -cp
- E. hdfs dfs -put

*我的答案:*:*正确答案:*ABD:hdfs dfs -rm; hdfs dfs -mv; hdfs dfs -cp;

*答案解析：*hdfs dfs -mv、hdfs dfs -cp 和 hdfs dfs -rm 都是用于操作 HDFS 内部文件的命令，而 -put 和 -get 是跨文件系统的操作。

[*AI讲解*](javascript:;)

### 44. (多选题)下列哪些命令可以用于在HDFS中进行文件的复制或移动？

- A. hdfs dfs -get
- B. hdfs dfs -mv
- C. hdfs dfs -put
- D. hdfs dfs -cp
- E. hdfs dfs -copyFromLocal

*我的答案:*:*正确答案:*BD:hdfs dfs -mv; hdfs dfs -cp;

*答案解析：*hdfs dfs -cp 和 hdfs dfs -mv 分别用于在 HDFS 中复制和移动文件。

[*AI讲解*](javascript:;)

### 45. (多选题)下列哪些命令可以用于从HDFS下载文件到本地？

- A. hdfs dfs -getmerge
- B. hdfs dfs -get
- C. hdfs dfs -put
- D. hdfs dfs -cat
- E. hdfs dfs -copyToLocal

*我的答案:*:*正确答案:*ABE:hdfs dfs -getmerge; hdfs dfs -get; hdfs dfs -copyToLocal;

*答案解析：*hdfs dfs -get、-copyToLocal 和 -getmerge 都可以用于从 HDFS 下载文件到本地。

[*AI讲解*](javascript:;)

### 46. (多选题)ResourceManager 包含哪些主要组件？

- A. ApplicationsManager
- B. ContainerManager
- C. ApplicationMaster
- D. NodeManager
- E. Scheduler

*我的答案:*:*正确答案:*AE:ApplicationsManager; Scheduler;

*答案解析：*ResourceManager 包括两个主要组件：ApplicationsManager 和 Scheduler。它们分别负责应用程序管理和资源调度。

[*AI讲解*](javascript:;)

### 47. (多选题)下列哪些命令可以用于删除HDFS中的文件或目录？

- A. hdfs dfs -rm
- B. hdfs dfs -rm -r
- C. hdfs dfs -rmdir
- D. hdfs dfs -remove
- E. hdfs dfs -delete

*我的答案:*:*正确答案:*AB:hdfs dfs -rm; hdfs dfs -rm -r;

*答案解析：*hdfs dfs -rm 和 hdfs dfs -rm -r 都可以用于删除 HDFS 中的文件或目录。

[*AI讲解*](javascript:;)

## 三. 判断题（共1题）

### 48. (判断题)HDFS中使用绝对路径进行操作，不能使用相对路径。

- A. 对
- B. 错

*我的答案:**正确答案:*对

*答案解析：*HDFS 操作要求使用绝对路径，这是其设计特性之一。

[*AI讲解*](javascript:;)

## 四. 填空题（共9题）

### 49. (填空题)将HDFS中的文件内容输出到标准输出的命令是 ______，该命令可以使用 ______ 选项忽略CRC校验。

- *我的答案：*

- *正确答案：*

  (1) hdfs dfs -cat

  (2) -ignoreCrc

*答案解析：*hdfs dfs -cat 用于查看文件内容，-ignoreCrc 用于忽略 CRC 校验。

[*AI讲解*](javascript:;)

### 50. (填空题)YARN 的全称是 Yet Another ___ Negotiator，它是 Hadoop 2.0 中的核心资源管理系统。

- *我的答案：*

- *正确答案：*

  (1) Resource

*答案解析：*YARN 是 Yet Another Resource Negotiator 的缩写，意为另一种资源协调器，专为 Hadoop 设计以实现高效的资源管理和任务调度。

[*AI讲解*](javascript:;)

### 51. (填空题)YARN 的两个核心组件是 ResourceManager 和 ___Manager，它们分别负责集群资源的协调与节点级别的资源管理。

- *我的答案：*

- *正确答案：*

  (1) Node

*答案解析：*YARN 的架构包括 ResourceManager 负责全局资源管理，以及 NodeManager 负责每个节点的本地资源管理和容器执行。

[*AI讲解*](javascript:;)

### 52. (填空题)HDFS中用于删除文件的命令是 ______，其中 ______ 选项用于递归删除目录。

- *我的答案：*

- *正确答案：*

  (1) hdfs dfs -rm

  (2) -r

*答案解析：*hdfs dfs -rm 用于删除文件，-r 用于递归删除目录。

[*AI讲解*](javascript:;)

### 53. (填空题)YARN 中最小的资源抽象单位是 ___，它通常包括 CPU、内存等基本资源。

- *我的答案：*

- *正确答案：*

  (1) Container

*答案解析：*Container 是 YARN 中资源分配的基本单元，封装了 CPU、内存等资源，任务在其内部运行。

[*AI讲解*](javascript:;)

### 54. (填空题)HDFS中用于列出目录内容的命令是 ______，该命令可以使用 ______ 选项来递归列出子目录。

- *我的答案：*

- *正确答案：*

  (1) hdfs dfs -ls

  (2) -R

*答案解析：*hdfs dfs -ls 用于列出目录内容，-R 选项用于递归列出子目录。

[*AI讲解*](javascript:;)

### 55. (填空题)ApplicationMaster 是 YARN 架构中的重要部分，它负责与 ___Manager 协商资源，并与 NodeManager 合作执行任务。

- *我的答案：*

- *正确答案：*

  (1) Resource

*答案解析：*ApplicationMaster 是每个应用程序的主控程序，它与 ResourceManager 通信以获取资源，并通过 NodeManager 启动任务。

[*AI讲解*](javascript:;)

### 56. (填空题)将HDFS中的文件合并到本地文件的命令是 ______，其中 ______ 选项用于在每个文件末尾添加换行符。

- *我的答案：*

- *正确答案：*

  (1) hdfs dfs -getmerge

  (2) -nl

*答案解析：*hdfs dfs -getmerge 用于合并文件，-nl 用于添加换行符。

[*AI讲解*](javascript:;)

### 57. (填空题)在HDFS中，使用 ______ 命令可以创建多级目录，其中 ______ 参数用于实现递归创建。

- *我的答案：*

- *正确答案：*

  (1) hdfs dfs -mkdir

  (2) -p

*答案解析：*hdfs dfs -mkdir -p 用于创建多级目录，-p 表示递归创建。

[*AI讲解*](javascript:;)

## 五. 简答题（共2题）

### 58. (简答题)描述一下HDFS的写数据流程。 

- *我的答案：*

  

- *正确答案：*

  （1）客户端向NameNode发送写数据的请求。    （2）NameNode接收到请求后会检查客户端是否具有写数据权限，上传的目录是否存在检查当前HDFS是否存在同名文件，检查通过后响应客户端同意上传。（3）客户端将文件进行逻辑切片并且向NameNode请求上传第一个block块，NameNode向客户端返回三个服务器节点。（4）客户端与最近的节点建立pipleline连接，此节点与第2个节点建立连接第2个节点与第3个节点建立连接。  （5）客户端开始上传第一个块，节点1接收到数据会同步到节点2，节点2会同步到节点3，直到第一个块上传完。（6）客户端以相同的步骤上传其他的block块。 

[*AI讲解*](javascript:;)

### 59. (简答题)为什么Hadoop不适合处理大量小文件，并说明常见的解决方案。 

- *我的答案：*

  

- *正确答案：*

  不适合处理大量小文件的原因：- 元数据存储压力：HDFS中每个文件对应一条元数据（存储在NameNode内存），大量小文件会耗尽NameNode内存，导致集群性能下降；- 读取效率低：小文件读取需频繁与NameNode交互获取元数据，且每个小文件的Block传输开销占比高，降低整体读取吞吐量；- Map任务并行度浪费：默认一个小文件对应一个Split和一个Map任务，大量小文件会产生过多Map任务，导致任务调度开销大于计算开销。常见解决方案：- 文件合并：通过Shell命令（如hadoop fs -getmerge）或程序将小文件合并为大文件后上传至HDFS；- 采用SequenceFile/MapFile：将多个小文件封装为SequenceFile（键值对格式）或MapFile（排序的SequenceFile），减少元数据数量；- 使用HBase：HBase适合存储小文件，可将小文件作为单元格数据存储，减少HDFS元数据压力；- 引入缓存层：通过Flume或Spark Streaming等组件实时聚合小文件，再批量写入HDFS。 

## 一. 单选题（共25题）

### 1. (单选题)以下不属于大数据特点的是( )。

- A. 速度快
- B. 价值密度高
- C. 格式多样化
- D. 数据量大、计算量大

*我的答案:*:*正确答案:*B:价值密度高;

[*AI讲解*](javascript:;)

### 2. (单选题)关于MapReduce程序中的map方法执行时机描述正确的是( )。

- A. 每一个key/value都会调用一次map方法
- B. 每一个block都会调用一次map方法
- C. 当MapReduce程序启动时调用一次map方法
- D. 当MapReduce程序结束时调用一次map方法

*我的答案:*:*正确答案:*C:当MapReduce程序启动时调用一次map方法;

[*AI讲解*](javascript:;)

### 3. (单选题)在HDFS中，用于列出目录或文件内容的命令是？

- A. hdfs dfs -put
- B. hdfs dfs -mkdir
- C. hdfs dfs -cat
- D. hdfs dfs -ls

*我的答案:*:*正确答案:*D:hdfs dfs -ls;

*答案解析：*hdfs dfs -ls 是 HDFS 中用于列出目录或文件内容的命令，选项 A 正确。

[*AI讲解*](javascript:;)

### 4. (单选题)下列哪个命令可以将HDFS中的文件合并到本地文件系统的一个文件中？

- A. hdfs dfs -getmerge
- B. hdfs dfs -mv
- C. hdfs dfs -get
- D. hdfs dfs -copyToLocal

*我的答案:*:*正确答案:*A:hdfs dfs -getmerge;

*答案解析：*hdfs dfs -getmerge 用于将 HDFS 中的多个文件合并并下载到本地一个文件中。

[*AI讲解*](javascript:;)

### 5. (单选题)查看Zookeeper状态的命令是( )。

- A. zkServer.sh stop
- B. zkServer.sh start
- C. zkCli.sh status
- D. zkServer.sh status

*我的答案:*:*正确答案:*D:zkServer.sh status;

[*AI讲解*](javascript:;)

### 6. (单选题)MapReduce中map的并行度取决于( )。

- A. 切片的数量
- B. key的数量
- C. 分区的数量
- D. 文件的数量

*我的答案:*:*正确答案:*A:切片的数量;

[*AI讲解*](javascript:;)

### 7. (单选题)MapReduce中InputSplit(切片)默认的大小是( )。

- A. 32MB
- B. 256MB
- C. 128MB
- D. 64MB

*我的答案:*:*正确答案:*C:128MB;

[*AI讲解*](javascript:;)

### 8. (单选题)将本地文件系统中的文件上传至HDFS的命令是( )。

- A. hadoop fs -create
- B. hadoop fs -put
- C. hadoop fs -push
- D. hadoop fs -cat

*我的答案:*:*正确答案:*B:hadoop fs -put;

[*AI讲解*](javascript:;)

### 9. (单选题)MapReduce传递数据的形式是( )。

- A. XML
- B. <key,value>
- C. JSON
- D. Text

*我的答案:*:*正确答案:*B:<key,value>;

[*AI讲解*](javascript:;)

### 10. (单选题)以下业务场景适合使用实时处理的是()

- A. 月末财务报表的生成，需要汇总整个月的财务数据
- B. 高德导航为用户提供精确的交通流量信息、路线规划
- C. 年度销售数据分析，用于生成年度销售报告
- D. 用户行为研究，基于每个季度的用户行为进行用户画像

*我的答案:*:*正确答案:*B:高德导航为用户提供精确的交通流量信息、路线规划;

[*AI讲解*](javascript:;)

### 11. (单选题)以下不属于Hadoop中序列化类的是( )。

- A. Text
- B. IntWritable
- C. NullWritable
- D. String

*我的答案:*:*正确答案:*D:String;

[*AI讲解*](javascript:;)

### 12. (单选题)在YARN中执行hadoop.jar中com.inspur.WordCount程序的命令是( )。

- A. yarn jar hadoop.jar com.inspur.WordCount
- B. hadoop jar hadoop.jar com.inspur.WordCount
- C. yarn jar com.inspur.WordCount hadoop.jar
- D. hadoop jar com.inspur.WordCount hadoop.jar

*我的答案:*:*正确答案:*B:hadoop jar hadoop.jar com.inspur.WordCount;

[*AI讲解*](javascript:;)

### 13. (单选题)用于查看HDFS中某个文件内容的命令是？

- A. hdfs dfs -cat
- B. hdfs dfs -put
- C. hdfs dfs -get
- D. hdfs dfs -ls

*我的答案:*:*正确答案:*A:hdfs dfs -cat;

*答案解析：*hdfs dfs -cat 命令用于查看 HDFS 中文件的内容，选项 A 正确。

[*AI讲解*](javascript:;)

### 14. (单选题)HDFS默认的block数据块的大小是( )。

- A. 500MB
- B. 256MB
- C. 128MB
- D. 64MB

*我的答案:*:*正确答案:*C:128MB;

[*AI讲解*](javascript:;)

### 15. (单选题)HDFS适合的读写任务是( )。

- A. 多次写入，多次读取
- B. 一次写入，少次读取
- C. 一次写入，多次读取
- D. 多次写入，少次读取

*我的答案:*:*正确答案:*C:一次写入，多次读取;

[*AI讲解*](javascript:;)

### 16. (单选题)以下选项对离线批处理描述不正确的选项是()

- A. 离线批处理是对准备好的一批数据进行计算
- B. 离线批处理程序可通过调度框架定时调度执行
- C. 离线批处理程序运行中，新产生的数据不进入本次计算
- D. 离线批处理需要实时响应用户请求

*我的答案:*:*正确答案:*D:离线批处理需要实时响应用户请求;

[*AI讲解*](javascript:;)

### 17. (单选题)将本地文件复制到HDFS中，并在复制后删除本地源文件的命令是？

- A. hdfs dfs -moveFromLocal
- B. hdfs dfs -appendToFile
- C. hdfs dfs -copyFromLocal
- D. hdfs dfs -put

*我的答案:*:*正确答案:*A:hdfs dfs -moveFromLocal;

*答案解析：*hdfs dfs -moveFromLocal 的作用是将本地文件复制到 HDFS 并删除本地源文件。

[*AI讲解*](javascript:;)

### 18. (单选题)关于HA描述错误的是( )。

- A. 可以使用Zookeeper作为协调工具
- B. 解决了从节点单点故障
- C. 解决了主节点单点故障
- D. HDFS HA中没有SecondaryNameNode

*我的答案:*:*正确答案:*B:解决了从节点单点故障;

[*AI讲解*](javascript:;)

### 19. (单选题)以下不属于Hadoop生态圈的是( )。

- A. HBase
- B. Spark
- C. Java
- D. Hive

*我的答案:*:*正确答案:*C:Java;

[*AI讲解*](javascript:;)

### 20. (单选题)YARN的主节点进程是( )。

- A. NameNode
- B. ResourceManager
- C. DataNode
- D. NodeManager

*我的答案:*:*正确答案:*B:ResourceManager;

[*AI讲解*](javascript:;)

### 21. (单选题)某文件大小是500MB，该文件上传到HDFS会被分为几个数据块( )。

- A. 4个
- B. 3个
- C. 1个
- D. 5个

*我的答案:*:*正确答案:*A:4个;

[*AI讲解*](javascript:;)

### 22. (单选题)HDFS中删除目录(/one)的命令是( )。

- A. hadoop fs -rm -f /one
- B. hadoop fs -del -rf /one
- C. hadoop fs -rm -r -f /one
- D. hadoop fs -rm /one

*我的答案:*:*正确答案:*C:hadoop fs -rm -r -f /one;

[*AI讲解*](javascript:;)

### 23. (单选题)在YARN中负责资源调度的组件是( )。

- A. Applications Manager
- B. Container
- C. NodeManager
- D. Scheduler

*我的答案:*:*正确答案:*D:Scheduler;

[*AI讲解*](javascript:;)

### 24. (单选题)编写MapReduce程序的Reducer时，需要重写以下哪个方法( )。

- A. map()
- B. getsplit()
- C. context
- D. reduce()

*我的答案:*:*正确答案:*B:getsplit();

[*AI讲解*](javascript:;)

### 25. (单选题)下列哪个命令可以用于在HDFS中创建多级目录？

- A. hdfs dfs -mkdir
- B. hdfs dfs -cp
- C. hdfs dfs -mkdir -p
- D. hdfs dfs -put

*我的答案:*:*正确答案:*C:hdfs dfs -mkdir -p;

*答案解析：*hdfs dfs -mkdir -p 可以创建多级目录，其中 -p 参数表示递归创建。

[*AI讲解*](javascript:;)

## 二. 填空题（共10题）

### 26. (填空题)将HDFS中的文件合并到本地文件的命令是 ______，其中 ______ 选项用于在每个文件末尾添加换行符。

- *我的答案：*

- *正确答案：*

  (1) hdfs dfs -getmerge

  (2) -nl

*答案解析：*hdfs dfs -getmerge 用于合并文件，-nl 用于添加换行符。

[*AI讲解*](javascript:;)

### 27. (填空题)NameNode格式化的命令是____，启动HDFS集群的命令是____。

- *我的答案：*

- *正确答案：*

  (1) hdfs namenode -format

  (2) start-dfs.sh

[*AI讲解*](javascript:;)

### 28. (填空题)HDFS中用于列出目录内容的命令是 ______，该命令可以使用 ______ 选项来递归列出子目录。

- *我的答案：*

- *正确答案：*

  (1) hdfs dfs -ls

  (2) -R

*答案解析：*hdfs dfs -ls 用于列出目录内容，-R 选项用于递归列出子目录。

[*AI讲解*](javascript:;)

### 29. (填空题)HDFS Java API中，读取或设置配置信息的是 ____，文件系统对象是____。

- *我的答案：*

- *正确答案：*

  (1) Configuration

  (2) FileSystem

[*AI讲解*](javascript:;)

### 30. (填空题)MapReduce程序中，Map阶段的默认输入键值对类型是____和____。

- *我的答案：*

- *正确答案：*

  (1) LongWritable(行号)

  (2) Text(行内容)

[*AI讲解*](javascript:;)

### 31. (填空题)在HDFS中，使用 ______ 命令可以创建多级目录，其中 ______ 参数用于实现递归创建。

- *我的答案：*

- *正确答案：*

  (1) hdfs dfs -mkdir

  (2) -p

*答案解析：*hdfs dfs -mkdir -p 用于创建多级目录，-p 表示递归创建。

[*AI讲解*](javascript:;)

### 32. (填空题)在HDFS中创建/one/two的命令是 ____，列出/three目录下所有文件和目录的命令是 ____。

- *我的答案：*

- *正确答案：*

  (1) hdfs dfs –mkdir –p /one/two

  (2) hdfs dfs –ls –R /three

[*AI讲解*](javascript:;)

### 33. (填空题)HDFS中用于删除文件的命令是 ______，其中 ______ 选项用于递归删除目录。

- *我的答案：*

- *正确答案：*

  (1) hdfs dfs -rm

  (2) -r

*答案解析：*hdfs dfs -rm 用于删除文件，-r 用于递归删除目录。

[*AI讲解*](javascript:;)

### 34. (填空题)Hadoop中，负责分布式存储的组件是____，负责分布式计算的组件是____。

- *我的答案：*

- *正确答案：*

  (1) HDFS(分布式文件系统)

  (2) MapReduce(分布式计算框架)

[*AI讲解*](javascript:;)

### 35. (填空题)将HDFS中的文件内容输出到标准输出的命令是 ______，该命令可以使用 ______ 选项忽略CRC校验。

- *我的答案：*

- *正确答案：*

  (1) hdfs dfs -cat

  (2) -ignoreCrc

*答案解析：*hdfs dfs -cat 用于查看文件内容，-ignoreCrc 用于忽略 CRC 校验。

[*AI讲解*](javascript:;)

## 三. 判断题（共6题）

### 36. (判断题)MapReduce默认输入的Value为读取的当前行内容( )。

- A. 对
- B. 错

*我的答案:**正确答案:*对

[*AI讲解*](javascript:;)

### 37. (判断题)HDFS中使用绝对路径进行操作，不能使用相对路径。

- A. 对
- B. 错

*我的答案:**正确答案:*对

*答案解析：*HDFS 操作要求使用绝对路径，这是其设计特性之一。

[*AI讲解*](javascript:;)

### 38. (判断题)在HDFS的机架感知策略中，block的不同副本保存在同一个机架的不同服务器节点中( )。

- A. 对
- B. 错

*我的答案:**正确答案:*错

[*AI讲解*](javascript:;)

### 39. (判断题)通过job.setPartitionerClass设置分区组件时，还需要通过job.setNumReduceTasks方法设置reduce任务的数量与分区数量相同( )。

- A. 对
- B. 错

*我的答案:**正确答案:*对

[*AI讲解*](javascript:;)

### 40. (判断题)MapReduce中的所有Value必须实现WritableComparable接口( )。

- A. 对
- B. 错

*我的答案:**正确答案:*错

[*AI讲解*](javascript:;)

### 41. (判断题)在HDFS HA中，两个NameNode节点都处于活动状态( )

- A. 对
- B. 错

*我的答案:**正确答案:*错

[*AI讲解*](javascript:;)

## 四. 多选题（共5题）

### 42. (多选题)下列哪些命令可以用于将本地文件上传到HDFS？

- A. hdfs dfs -put
- B. hdfs dfs -copyFromLocal
- C. hdfs dfs -get
- D. hdfs dfs -appendToFile
- E. hdfs dfs -moveFromLocal

*我的答案:*:*正确答案:*ABDE:hdfs dfs -put; hdfs dfs -copyFromLocal; hdfs dfs -appendToFile; hdfs dfs -moveFromLocal;

*答案解析：*hdfs dfs -put、-copyFromLocal、-moveFromLocal 和 -appendToFile 都可以用于将本地文件上传到 HDFS。

[*AI讲解*](javascript:;)

### 43. (多选题)下列哪些命令可以用于在HDFS中进行文件的复制或移动？

- A. hdfs dfs -put
- B. hdfs dfs -cp
- C. hdfs dfs -get
- D. hdfs dfs -copyFromLocal
- E. hdfs dfs -mv

*我的答案:*:*正确答案:*BE:hdfs dfs -cp; hdfs dfs -mv;

*答案解析：*hdfs dfs -cp 和 hdfs dfs -mv 分别用于在 HDFS 中复制和移动文件。

[*AI讲解*](javascript:;)

### 44. (多选题)下列哪些命令属于HDFS中用于操作HDFS内部文件的命令？

- A. hdfs dfs -mv
- B. hdfs dfs -put
- C. hdfs dfs -rm
- D. hdfs dfs -get
- E. hdfs dfs -cp

*我的答案:*:*正确答案:*ACE:hdfs dfs -mv; hdfs dfs -rm; hdfs dfs -cp;

*答案解析：*hdfs dfs -mv、hdfs dfs -cp 和 hdfs dfs -rm 都是用于操作 HDFS 内部文件的命令，而 -put 和 -get 是跨文件系统的操作。

[*AI讲解*](javascript:;)

### 45. (多选题)下列哪些命令可以用于删除HDFS中的文件或目录？

- A. hdfs dfs -delete
- B. hdfs dfs -remove
- C. hdfs dfs -rm
- D. hdfs dfs -rmdir
- E. hdfs dfs -rm -r

*我的答案:*:*正确答案:*CE:hdfs dfs -rm; hdfs dfs -rm -r;

*答案解析：*hdfs dfs -rm 和 hdfs dfs -rm -r 都可以用于删除 HDFS 中的文件或目录。

[*AI讲解*](javascript:;)

### 46. (多选题)下列哪些命令可以用于从HDFS下载文件到本地？

- A. hdfs dfs -getmerge
- B. hdfs dfs -get
- C. hdfs dfs -put
- D. hdfs dfs -copyToLocal
- E. hdfs dfs -cat

*我的答案:*:*正确答案:*ABD:hdfs dfs -getmerge; hdfs dfs -get; hdfs dfs -copyToLocal;

*答案解析：*hdfs dfs -get、-copyToLocal 和 -getmerge 都可以用于从 HDFS 下载文件到本地。

[*AI讲解*](javascript:;)

## 五. 简答题（共4题）

### 47. (简答题)编写MapReduce程序实现“统计文本中单词出现次数”功能（单词以空格分隔），补充下列代码片段： （1）Mapper类：protected void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {  // 补充代码：拆分单词并输出<单词, 1>键值对 } （2）Reducer类： protected void reduce(Text key, Iterable<IntWritable> values, Context context) throws IOException, InterruptedException {  // 补充代码：累加单词计数并输出<单词, 总次数> }  （3）Driver类核心配置： public static void main(String[] args) throws Exception {  Configuration conf = new Configuration();  Job job = Job.getInstance(conf, "WordCount");  // 补充代码：设置Driver类、Mapper类、Reducer类   job.setMapOutputKeyClass(Text.class);  job.setMapOutputValueClass(IntWritable.class);  job.setOutputKeyClass(Text.class);  job.setOutputValueClass(IntWritable.class);  FileInputFormat.setInputPaths(job, new Path(args[0]));  FileOutputFormat.setOutputPath(job, new Path(args[1]));  System.exit(job.waitForCompletion(true) ? 0 : 1);} 

- *我的答案：*

  

- *正确答案：*

  （1）Mapper类： protected void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {   // 1. 将Text类型的行内容转换为字符串   String line = value.toString();   // 2. 按空格拆分单词   String[] words = line.split(" ");   // 3. 遍历单词数组，输出<单词, 1>键值对   for (String word : words) {     // 过滤空字符串（避免空格导致的无效键值对）     if (!word.isEmpty()) {       context.write(new Text(word), new IntWritable(1));     }   } }  （2）Reducer类：  protected void reduce(Text key, Iterable<IntWritable> values, Context context) throws IOException, InterruptedException {   // 1. 定义计数器累加单词出现次数   int count = 0;   // 2. 遍历values集合，累加计数   for (IntWritable value : values) {     count += value.get();   }   // 3. 输出<单词, 总次数>键值对   context.write(key, new IntWritable(count)); }  （3）Driver类核心配置：  public static void main(String[] args) throws Exception {   Configuration conf = new Configuration();   Job job = Job.getInstance(conf, "WordCount");   // 补充代码：设置Driver类、Mapper类、Reducer类   job.setJarByClass(WordCountDriver.class); // 设置Driver类（需替换为实际主类名）                      job.setMapperClass(WordCountMapper.class); // 设置Mapper类（需替换为实际Mapper类名）                      job.setReducerClass(WordCountReducer.class); // 设置Reducer类（需替换为实际Reducer类名）                 ）   job.setMapOutputKeyClass(Text.class);   job.setMapOutputValueClass(IntWritable.class);   job.setOutputKeyClass(Text.class);   job.setOutputValueClass(IntWritable.class);   FileInputFormat.setInputPaths(job, new Path(args[0]));   FileOutputFormat.setOutputPath(job, new Path(args[1]));   System.exit(job.waitForCompletion(true) ? 0 : 1); } 

[*AI讲解*](javascript:;)

### 48. (简答题)在本地的/home/stud目录中保存了student.txt文件，文件内容如下所示（只列出了部分数据），其中第1列为学号，第2列为姓名，第3列为学期编号（共4个学期），第4列为科目编号（其中E表示英语，M表示数学），第5列表示分数。20200001,Tom,1,E,8920200001,Tom,1,M,8720200001,Tom,2,E,6020200001,Tom,2,M,3520200001,Tom,3,E,8120200001,Tom,3,M,7720200001,Tom,4,E,9920200001,Tom,4,M,6720200002,Jerry,1,E,9920200002,Jerry,1,M,6020200002,Jerry,2,E,9120200002,Jerry,2,M,5620200002,Jerry,3,E,8520200002,Jerry,3,M,7320200002,Jerry,4,E,7320200002,Jerry,4,M,67请补充代码，计算每位同学在4个学期的平均英语成绩和平均数学成绩，分别将平均英语成绩和平均数学成绩输出为part-r-00000和part-r-00001两个文件。part-r-00000文件内容：20200001,Tom,E  8220200002,Jerry,E  8720200003,Jack,E  9020200004,Mary,E  66part-r-000001文件内容：20200001,Tom,M  6620200002,Jerry,M  6420200003,Jack,M  9420200004,Mary,M  85**操作步骤：**（1）通过hdfs shell在HDFS的/目录中创建scoreData/input目录，并将本地stud.txt文件上传至HDFS的/scoreData/input目录中。（2）补充Mapper类public static class MyMapper extends  Mapper<LongWritable, Text, Text, IntWritable> {  Text newKey = new Text();  IntWritable newValue = new IntWritable(1);  @Override  protected void map(LongWritable key, Text value, Context context)throws IOException, InterruptedException {  **（****2****）****补充代码，实现Mapper中的业务功能**  }}（3） 补充Reducer类public static class MyReducer extends Reducer<Text, IntWritable, Text, IntWritable> {IntWritable iw = new IntWritable();  @Override  protected void reduce(Text key, Iterable<IntWritable> value,Context context) throws IOException, InterruptedException {   **（****3****）****补****充代码，实现Reducer中的业务功能**   }}（4） 补充Partitioner类public  static class Mypartitioner extendsPartitioner<Text, IntWritable> {  @Overridepublic int getPartition(Text key, IntWritable value, int numPartitions) {**（****4****）****补充代码，实现Partitioner** }}（5）补充驱动类public static void main(String[] args) throws Exception {  Configuration conf = new Configuration();  Job job = Job.getInstance(conf);  job.setJarByClass(ScoreCount.class);  job.setMapperClass(ScoreCount.MyMapper.class);  job.setReducerClass(ScoreCount.MyReducer.class);  job.setMapOutputKeyClass(Text.class);  job.setMapOutputValueClass(IntWritable.class);  job.setOutputKeyClass(Text.class);  job.setOutputValueClass(IntWritable.class);  **（****5****）****补充代码，设置分区组件和reduce任务数量** String str_input = "hdfs://master:9000/scoreData/input/stud.txt";  String str_output = "hdfs://master:9000/scoreData/output/Count";  FileInputFormat.setInputPaths(job, new Path(str_input));  FileOutputFormat.setOutputPath(job, new Path(str_output));  System.out.println(job.waitForCompletion(true));} 

- *我的答案：*

  

- *正确答案：*

  （1）hdfs  dfs  -mkdir  -p  /scoreData/input          hdfs  dfs  -put  /home/stud/student.txt  /scoreData/input   （2）String[] split = value.toString().split(",");         String student_num = split[0];              String name = split[1];                  String index_subject = split[3];              newKey.set(student_num + "," + name + "," + index_subject); newValue.set(Integer.valueOf(split[4]));          context.write(newKey, newValue);             （3）int sum = 0;              int num = 0;               for (IntWritable iw : value) {          sum += iw.get();              num += 1;}double sum1 = Double.valueOf(sum);    double ave = sum1/num;          iw.set((int)ave);             context.write(key, iw);           （4） String[] split = key.toString().split(",");   String index_subject = split[2];      if ("E".equals(index_subject)) {           return 0;                  } else {     return 1;                } （5）job.setPartitonerClass(Mypartitioner.class)     job. setNumReduceTasks(2)           

[*AI讲解*](javascript:;)

### 49. (简答题)请简述 hdfs dfs -put 和 hdfs dfs -moveFromLocal 的区别。

- *我的答案：*

  

- *正确答案：*

  hdfs dfs -put 将本地文件复制到 HDFS，但不会删除本地源文件；而 hdfs dfs -moveFromLocal 则在复制后会删除本地源文件。

*答案解析：*

两者的主要区别在于是否保留本地源文件。

[*AI讲解*](javascript:;)

### 50. (简答题)介绍一下MapReduce的执行流程。  

- *我的答案：*

  

- *正确答案：*

   map（1）系统将数据拆分为若干个“分片”（split），每个分片为128M,300M文件会分为3个Split，一个块对应一个map（2）将分片数据以键-值方式传递给map 进行处理（split数据以键-值方式传递给map，map处理后的数据以键-值方式传递给reduce，reduce处理完后最后键-值方式输出到part文件中）（3）map 方法对数据进行业务处理（4）将处理的数据写入到磁盘 reduce（1）通过多个复制线程去拉取不同map 节点输出的数据文件（2）对这些数据文件进行排序和合并，然后传入reduce 方法（3）reduce 方法对数据进行业务处理（4）输入数据到文件系统（HDFS） 

## 多选题（共9题）

### 1. (多选题) HDFS的架构包含以下哪些组件？

- A. NameNode
- B. DataNode
- C. SecondaryNameNode
- D. ResourceManager

### 2. (多选题) 以下属于Hadoop核心组件的有？

- A. HDFS
- B. YARN
- C. MapReduce
- D. Spark

### 3. (多选题) YARN的主要组件包括？

- A. ResourceManager
- B. NodeManager
- C. ApplicationMaster
- D. DataNode

### 4. (多选题) MapReduce的Shuffle过程包括以下哪些步骤？

- A. Map输出的排序和合并
- B. Reduce端的数据拉取（Fetch）
- C. Reduce端的数据合并和排序
- D. Map端的数据分割（Split）

### 5. (多选题) Hadoop伪分布式安装需要配置以下哪些核心文件？

- A. core-site.xml
- B. hdfs-site.xml
- C. yarn-site.xml
- D. mapred-site.xml

### 6. (多选题) 以下关于YARN资源调度器的说法，正确的有哪些？

- A. FIFO调度器按照提交顺序分配资源，适用于批处理场景
- B. Capacity调度器支持多队列资源隔离，适用于共享集群
- C. Fair调度器保证所有应用获得公平的资源份额
- D. YARN的资源调度器只能基于内存进行资源分配

### 7. (多选题) 关于HDFS数据读取流程，正确的描述有哪些？

- A. 客户端向NameNode请求文件的块位置信息
- B. NameNode返回文件的所有数据块及其所在的DataNode列表
- C. 客户端直接从DataNode读取数据块，无需NameNode参与后续过程
- D. 客户端读取数据时，必须按数据块的顺序依次读取

### 8. (多选题) 以下哪些场景适合使用MapReduce进行处理？

- A. 大规模日志数据的统计分析
- B. 实时流数据的处理
- C. 分布式排序
- D. 简单的键值对数据汇总

### 9. (多选题) 关于HDFS高可用（HA）和联邦（Federation）的描述，正确的有哪些？

- A. HDFS HA通过主备NameNode机制解决单点故障问题
- B. HDFS联邦允许多个NameNode独立管理不同的命名空间
- C. HDFS HA中，Standby NameNode通过实时同步EditLog保证数据一致性
- D. HDFS联邦可以提高集群的存储容量，但无法提升并发访问能力

## 二. 单选题（共14题）

### 10. (单选题) HDFS默认的数据副本数量是？

- A. 1
- B. 2
- C. 3
- D. 4

### 11. (单选题) Hadoop的伪分布式模式是指？

- A. 在单节点上模拟分布式环境，所有组件运行在同一台机器上
- B. 在多节点上部署，每个节点运行特定组件
- C. 仅在本地运行，不涉及网络通信
- D. 使用云服务部署Hadoop集群

### 12. (单选题) YARN中默认的资源调度器是？

- A. Capacity Scheduler
- B. Fair Scheduler
- C. FIFO Scheduler
- D. None of the above

### 13. (单选题) MapReduce作业的输出结果默认存储在哪里？

- A. 本地文件系统
- B. HDFS
- C. HBase
- D. ZooKeeper

### 14. (单选题) MapReduce中负责将Map输出的键值对进行分组和排序的阶段是？

- A. Map阶段
- B. Shuffle阶段
- C. Reduce阶段
- D. Input阶段

### 15. (单选题) 以下哪个工具用于Hadoop集群的资源和作业管理？

- A. HBase
- B. ZooKeeper
- C. YARN
- D. Hive

### 16. (单选题) HDFS高可用架构中，用于实现NameNode故障自动切换的组件是？

- A. SecondaryNameNode
- B. ZooKeeper
- C. DataNode
- D. ResourceManager

### 17. (单选题) 以下哪一项不是Hadoop的核心组件？

- A. HDFS
- B. YARN
- C. MapReduce
- D. Spark

### 18. (单选题) HDFS默认的数据块大小是？

- A. 64MB
- B. 128MB
- C. 256MB
- D. 512MB

### 19. (单选题) MapReduce中处理数据分片的任务是？

- A. Map Task
- B. Reduce Task
- C. Shuffle Task
- D. Input Task

### 20. (单选题) 客户端向HDFS写入文件时，首先会向哪个组件请求？

- A. DataNode
- B. NameNode
- C. SecondaryNameNode
- D. ResourceManager

### 21. (单选题) YARN中负责管理单个应用程序执行的组件是？

- A. ResourceManager
- B. NodeManager
- C. ApplicationMaster
- D. Container

### 22. (单选题) HDFS中负责管理文件系统命名空间和客户端访问的是哪个角色？

- A. DataNode
- B. NameNode
- C. SecondaryNameNode
- D. ResourceManager

### 23. (单选题) YARN中负责监控容器资源使用情况并向ResourceManager汇报的组件是？

- A. NodeManager
- B. ApplicationMaster
- C. ResourceManager
- D. Container

## 三. 填空题（共4题）

### 24. (填空题) HDFS采用主从架构，其中____1____负责管理文件系统的命名空间和客户端对文件的访问，____2____负责存储实际的数据块并处理数据块的读写请求。在HDFS写数据流程中，客户端首先向____3____请求上传文件，该节点会返回一个包含数据节点列表的响应，客户端随后将数据分成____4____大小的数据块（默认值），并按顺序写入这些数据节点。

### 25. (填空题) YARN的核心组件包括____1____（资源管理器）、____2____（节点管理器）和____3____（应用程序管理器）。当客户端提交应用程序时，____4____会为其分配第一个容器，并在该容器中启动____5____，负责后续的资源申请和任务调度。

### 26. (填空题) MapReduce的计算过程分为____1____、____2____和____3____三个阶段。其中，____4____阶段负责将输入数据分割成键值对并进行初步处理，____5____阶段负责对Map输出的键值对进行分组和排序，____6____阶段负责对分组后的数据进行汇总计算得到最终结果。

### 27. (填空题) Hadoop的三大核心组件是____1____（分布式文件系统）、____2____（分布式计算框架）和____3____（资源管理系统）。此外，Hadoop生态系统还包括用于数据仓库的____4____、用于NoSQL数据库的____5____和用于流处理的____6____等工具。

## 四. 简答题（共1题）

### 28. (简答题) 请简述HDFS高可用（HA）和联邦（Federation）的主要区别及适用场景。

## 一. 单选题（共21题，50.4分）

### 1. (单选题)已知 val arr = Array(10,20,30)，遍历该数组时，数组下标最大值为(    )

- A. 2
- B. 0
- C. 4
- D. 3

*我的答案:*A:2;*正确答案:*A:2;

*2.4*分

*答案解析：*数组下标从 0 开始，该数组共 3 个元素，下标依次为 0、1、2。

知识点：

- [Scala 数组遍历、下标规则](javascript:void(0))



### 2. (单选题)Scala中元组内的元素特征是(    )

- A. 可以存放不同数据类型的元素
- B. 元素不可读取，仅可存储
- C. 元素默认自动去重
- D. 所有元素必须为同一种数据类型

*我的答案:*A:可以存放不同数据类型的元素;*正确答案:*A:可以存放不同数据类型的元素;

*2.4*分

*答案解析：*元组允许同时存放整型、字符串、布尔型等多种不同类型数据。

知识点：

- [Scala-元组](javascript:void(0))



### 3. (单选题)Scala中可以动态增删元素的变长数组是(    )

- A. Array
- B. Map
- C. ArrayBuffer
- D. Tuple

*我的答案:*C:ArrayBuffer;*正确答案:*C:ArrayBuffer;

*2.4*分

*答案解析：*ArrayBuffer 支持动态添加、删除元素，属于可变数组。

知识点：

- [Scala-数组](javascript:void(0))



### 4. (单选题)以下关于Scala不可变List描述正确的是(    )

- A. 只能存储字符串类型数据
- B. 初始化后元素与结构均不可修改
- C. 不支持下标访问元素
- D. 运行中可以随意新增元素

*我的答案:*B:初始化后元素与结构均不可修改;*正确答案:*B:初始化后元素与结构均不可修改;

*2.4*分

*答案解析：*不可变 List 一旦创建，内部元素和整体结构都无法修改。

知识点：

- [Scala-集合](javascript:void(0))



### 5. (单选题)使用val声明一个Array数组，下列操作允许执行的是(    )

- A. 改变数组引用指向其他数组
- B. 删除数组中已有元素
- C. 向数组中追加新元素
- D. 修改数组内部已有元素的值

*我的答案:*D:修改数组内部已有元素的值;*正确答案:*D:修改数组内部已有元素的值;

*2.4*分

*答案解析：*val 仅限制引用不可变，定长数组内部元素的值可以修改，无法增删元素、改变引用。

知识点：

- [Scala-变量+数组](javascript:void(0))



### 6. (单选题)Scala中Set集合最典型的特征是(    )

- A. 元素有序、可重复
- B. 仅能存储数值类型
- C. 元素无序、不可重复
- D. 长度固定不可修改

*我的答案:*C:元素无序、不可重复;*正确答案:*C:元素无序、不可重复;

*2.4*分

*答案解析：*Set 集合会自动去重，默认无序，分为可变集合与不可变集合。

知识点：

- [Scala-集合](javascript:void(0))



### 7. (单选题)Scala中多行注释的标准写法是(    )

- A. # 注释内容
- B. // 注释内容
- C. /* 注释内容 */
- D. -- 注释内容

*我的答案:*C:/* 注释内容 */;*正确答案:*C:/* 注释内容 */;

*2.4*分

*答案解析：*// 为单行注释，/* */ 为多行注释。

知识点：

- [Scala基础语法-注释](javascript:void(0))



### 8. (单选题)Scala数组访问元素的下标起始值为(    )

- A. 随机
- B. 1
- C. -1
- D. 0

*我的答案:*D:0;*正确答案:*D:0;

*2.4*分

*答案解析：*Scala 数组、列表等集合下标均从 0 开始。

知识点：

- [Scala-数组](javascript:void(0))



### 9. (单选题)下列集合中，不属于Scala可变集合的是(    )

- A. 可变Set
- B. ArrayBuffer
- C. ListBuffer
- D. 普通List

*我的答案:*D:普通List;*正确答案:*D:普通List;

*2.4*分

*答案解析：*List 为默认不可变集合，ArrayBuffer、ListBuffer、可变Set 均为可变集合。

知识点：

- [Scala-集合](javascript:void(0))



### 10. (单选题)Scala 中定义无参无返回值方法，以下语法格式正确的是(    )

- A. function test (    ){    }
- B. def test (    ){    }
- C. method test (    ){    }
- D. val test (    ){    }

*我的答案:*B:def test ( ){ };*正确答案:*B:def test ( ){ };

*2.4*分

*答案解析：*Scala 使用 def 关键字定义方法，无 function、method 关键字，val/var 用于定义变量。

知识点：

- [Scala 方法定义基础](javascript:void(0))



### 11. (单选题)Scala中创建定长数组使用的类是(    )

- A. List
- B. Set
- C. ArrayBuffer
- D. Array

*我的答案:*D:Array;*正确答案:*D:Array;

*2.4*分

*答案解析：*Array 是定长数组，长度初始化后无法更改;ArrayBuffer 为变长数组。

知识点：

- [Scala-数组](javascript:void(0))



### 12. (单选题)以下关于 Scala 元组的描述，错误的是(    )

- A. 可使用下标 (    ) 直接访问元素
- B. 可存储不同数据类型元素
- C. 创建后元素值不能修改
- D. 支持多个元素组合存储

*我的答案:*A:可使用下标 ( ) 直接访问元素;*正确答案:*A:可使用下标 ( ) 直接访问元素;

*2.4*分

*答案解析：*元组不能使用数组式下标( )访问，必须使用._序号方式提取元素。

知识点：

- [Scala 元组特性与取值](javascript:void(0))



### 13. (单选题)若需要频繁对集合执行增删操作，优先选择以下哪种集合(    )

- A. 不可变List
- B. 不可变Map
- C. ArrayBuffer
- D. 不可变Set

*我的答案:*C:ArrayBuffer;*正确答案:*C:ArrayBuffer;

*2.4*分

*答案解析：*ArrayBuffer 是可变变长数组，适配频繁增删元素的业务场景。

知识点：

- [Scala-数组+集合](javascript:void(0))



### 14. (单选题)代码 val t = ("scala", 100, true) 该元组包含的元素个数是(    )

- A. 1
- B. 4
- C. 2
- D. 3

*我的答案:*D:3;*正确答案:*D:3;

*2.4*分

*答案解析：*括号内依次为字符串、整型、布尔值，一共 3 个元素。

知识点：

- [Scala 元组定义](javascript:void(0))



### 15. (单选题)Scala中元组(Tuple)最多支持的元素个数为(    )

- A. 22
- B. 无上限
- C. 10
- D. 8

*我的答案:*A:22;*正确答案:*A:22;

*2.4*分

*答案解析：*Scala 原生元组最多可容纳22个元素，超出需使用集合实现。

知识点：

- [Scala-元组](javascript:void(0))



### 16. (单选题)Scala中Map集合的存储结构是(    )

- A. 固定长度字符
- B. 单一顺序元素
- C. 纯数值序列
- D. 键值对 key-value

*我的答案:*D:键值对 key-value;*正确答案:*D:键值对 key-value;

*2.4*分

*答案解析：*Map 以键值对形式存储数据，Key 具有唯一性。

知识点：

- [Scala-集合](javascript:void(0))



### 17. (单选题)Scala中定义不可变引用的变量使用的关键字是(    )

- A. define
- B. var
- C. val
- D. static

*我的答案:*C:val;*正确答案:*C:val;

*2.4*分

*答案解析：*val 用于定义不可变引用，var 用于定义可变引用，Scala 无 static、define 关键字。

知识点：

- [Scala基础语法-变量定义](javascript:void(0))



### 18. (单选题)访问Scala元组中第一个元素的正确写法是(    )

- A. 元组名.first
- B. 元组名[0]
- C. 元组名(0)
- D. 元组名._1

*我的答案:*D:元组名._1;*正确答案:*D:元组名._1;

*2.4*分

*答案解析：*Scala 元组通过 `._序号` 访问元素，序号从1开始。

知识点：

- [Scala-元组](javascript:void(0))



### 19. (单选题)Scala 中定义有参方法，下列语法书写正确的是(    )

- A. def add :Int (a) {    }
- B. def add (a:Int) {    }
- C. def add a:Int {    }
- D. def add (a) Int {    }

*我的答案:*D:def add (a) Int { };*正确答案:*B:def add (a:Int) { };

*0*分

*答案解析：*Scala 方法参数格式为 参数名: 数据类型，参数需放置在 ( ) 内。

知识点：

- [Scala 带参方法定义](javascript:void(0))



### 20. (单选题)Scala中默认的不可变列表集合是(    )

- A. ListBuffer
- B. ArrayBuffer
- C. List
- D. HashMap

*我的答案:*C:List;*正确答案:*C:List;

*2.4*分

*答案解析：*List 是不可变列表，ListBuffer 是可变列表，二者都属于列表集合。

知识点：

- [Scala-集合](javascript:void(0))



### 21. (单选题)Scala 方法定义中，用于指定方法返回值类型的位置是(    )

- A. 方法体内部
- B. def 关键字后方
- C. 参数列表后方
- D. 方法名前方

*我的答案:*B:def 关键字后方;*正确答案:*C:参数列表后方;

*0*分

*答案解析：*语法格式:def 方法名(参数): 返回值类型 = { 方法体 }，返回值类型写在参数列表之后。

知识点：

- [Scala 带返回值方法定义](javascript:void(0))



## 二. 多选题（共10题，24.6分）

### 22. (多选题)Scala中常用的三大核心集合体系包含?

- A. Class(类)
- B. List(列表)
- C. Set(集)
- D. Map(映射)

*我的答案:*AB:Class(类); List(列表);*正确答案:*BCD:List(列表); Set(集); Map(映射);

*0*分

### 23. (多选题)下列关于Map集合描述正确的有?

- A. Key(键)不允许重复
- B. 分为可变Map与不可变Map
- C. 无法遍历集合中的元素
- D. 以键值对形式存储数据

*我的答案:*AB:Key(键)不允许重复; 分为可变Map与不可变Map;*正确答案:*ABD:Key(键)不允许重复; 分为可变Map与不可变Map; 以键值对形式存储数据;

*1.2*分

### 24. (多选题)关于 Scala 元组(Tuple)说法正确的有?

- A. 可以同时存放字符串、数字、布尔值
- B. 元组创建后不允许修改内部元素
- C. 元素序号从 0 开始计数
- D. 通过 ._1 可以获取第一个元素

*我的答案:*ABC:可以同时存放字符串、数字、布尔值; 元组创建后不允许修改内部元素; 元素序号从 0 开始计数;*正确答案:*ABD:可以同时存放字符串、数字、布尔值; 元组创建后不允许修改内部元素; 通过 ._1 可以获取第一个元素;

*0*分

### 25. (多选题)下列属于Scala数组相关类型的有?

- A. Tuple
- B. List
- C. ArrayBuffer
- D. Array

*我的答案:*ABC:Tuple; List; ArrayBuffer;*正确答案:*CD:ArrayBuffer; Array;

*0*分

### 26. (多选题)Scala中用于定义变量的合法关键字有?

- A. let
- B. var
- C. val
- D. const

*我的答案:*ABC:let; var; val;*正确答案:*BC:var; val;

*0*分

### 27. (多选题)关于Scala定长数组Array描述正确的有?

- A. 初始化后长度固定不变
- B. 支持动态添加新元素
- C. 支持通过下标读取元素
- D. 可以修改数组内已有元素

*我的答案:*ABC:初始化后长度固定不变; 支持动态添加新元素; 支持通过下标读取元素;*正确答案:*ACD:初始化后长度固定不变; 支持通过下标读取元素; 可以修改数组内已有元素;

*0*分

### 28. (多选题)属于Scala可变集合的类型有?

- A. 不可变Map
- B. 可变Set
- C. ListBuffer
- D. ArrayBuffer

*我的答案:*ABC:不可变Map; 可变Set; ListBuffer;*正确答案:*BCD:可变Set; ListBuffer; ArrayBuffer;

*0*分

### 29. (多选题)多选题】关于 Scala 方法定义，说法正确的有?

- A. 使用 def 关键字定义方法
- B. 方法可以设置参数
- C. 方法可以设置返回值类型
- D. 方法不允许为空方法体

*我的答案:*ABC:使用 def 关键字定义方法; 方法可以设置参数; 方法可以设置返回值类型;*正确答案:*ABC:使用 def 关键字定义方法; 方法可以设置参数; 方法可以设置返回值类型;

*2.5*分

### 30. (多选题)关于Scala元组(Tuple)说法正确的有?

- A. 元组内部元素支持动态修改
- B. 可存储多种不同类型的数据
- C. 通过 _+数字 的方式访问元素
- D. 元素序号从1开始计数

*我的答案:*ABC:元组内部元素支持动态修改; 可存储多种不同类型的数据; 通过 _+数字 的方式访问元素;*正确答案:*BCD:可存储多种不同类型的数据; 通过 _+数字 的方式访问元素; 元素序号从1开始计数;

*0*分

### 31. (多选题)Scala中Set集合具备的特点包括?

- A. 自动去除重复元素
- B. 默认存储顺序无序
- C. 元素可以重复存在
- D. 分为可变Set和不可变Set

*我的答案:*ABD:自动去除重复元素; 默认存储顺序无序; 分为可变Set和不可变Set;*正确答案:*ABD:自动去除重复元素; 默认存储顺序无序; 分为可变Set和不可变Set;

*2.5*分

## 三. 判断题（共10题，25分）

### 32. (判断题)Scala默认创建的List集合属于不可变集合。

- A. 对
- B. 错

*我的答案:*对*正确答案:*对

*2.5*分

### 33. (判断题)Scala 中使用 def 关键字用来定义方法。

- A. 对
- B. 错

*我的答案:*对*正确答案:*对

*2.5*分

### 34. (判断题)Scala 定长数组 Array 初始化之后，长度可以随意改变。

- A. 对
- B. 错

*我的答案:*错*正确答案:*错

*2.5*分

### 35. (判断题)Scala的定长数组Array可以动态添加和删除元素。

- A. 对
- B. 错

*我的答案:*错*正确答案:*错

*2.5*分

### 36. (判断题)Scala中var定义的变量，引用和元素值都可以被修改。

- A. 对
- B. 错

*我的答案:*对*正确答案:*对

*2.5*分

### 37. (判断题)Scala的Set集合中，允许出现多个完全相同的元素。

- A. 对
- B. 错

*我的答案:*错*正确答案:*错

*2.5*分

### 38. (判断题)Scala中元组访问元素时，下标从0开始计数。

- A. 对
- B. 错

*我的答案:*错*正确答案:*错

*2.5*分

### 39. (判断题)元组 val t = (1,2,3)，可以使用 t._3 获取第三个元素。

- A. 对
- B. 错

*我的答案:*对*正确答案:*对

*2.5*分

### 40. (判断题)Scala元组Tuple创建完成后，内部元素的值不允许修改。

- A. 对
- B. 错

*我的答案:*对*正确答案:*对

*2.5*分

### 41. (判断题)ArrayBuffer是变长数组，适合频繁执行元素增删操作。

- A. 对
- B. 错

*我的答案:*对*正确答案:*对



## 一. 单选题（共7题，70分）

### 1. (单选题, 10分) Spark 核心计算引擎相较于 MapReduce，最大优势是（）

A

仅支持离线计算

B

基于内存计算，迭代计算效率更高

C

部署必须依赖 MySQL

D

不支持分布式运行

### 2. (单选题, 10分) Spark 中最核心、最基础的数据抽象是（）

A

HDFS

B

RDD

C

MySQL

D

YARN

### 3. (单选题, 10分) 下列不属于 RDD 五大特性的是（）

A

可分区

B

自带计算函数

C

支持血缘依赖

D

可直接原地修改数据

### 4. (单选题, 10分) Spark RDD 的两类核心操作分别是（）

A

转换操作、行动操作

B

写入操作、读取操作

C

加密操作、解压操作

D

分区操作、合并操作

### 5. (单选题, 10分) 关于 RDD 转换操作（Transformation）描述正确的是（）

A

立即执行，触发任务运行

B

惰性求值，延迟执行

C

只能执行一次，不可重复使用

D

执行后直接删除原 RDD

### 6. (单选题, 10分) 以下属于 Spark 独立集群资源调度管理器的是（）

A

Standalone

B

HDFS

C

Flume

D

Kafka

### 7. (单选题, 10分) 在 Spark 中，以下哪项操作会触发整个任务的执行（）

A

map

B

filter

C

count

D

flatMap

## 二. 多选题（共3题，30分）

### 8. (多选题, 10分) 下列属于 RDD 转换操作（Transformation）的有（）

A

map

B

filter

C

reduce

D

flatMap

### 9. (多选题, 10分) 以下关于 RDD 特点说法正确的有（）

A

弹性：可自动重分区、动态计算恢复

B

分布式：数据拆分后存储在集群多个节点

C

不可变：一旦生成，内容无法修改

D

可分区：支持多分区并行计算

### 10. (多选题, 10分) Spark 支持的常见集群运行模式包含（）

A

Standalone

B

YARN

C

Mesos

D

Local 本地模式



这些题目都是 Scala 基础语法和集合相关的单选题，我按题号顺序给你正确答案和简要解析：

**1. Scala中定义不可变引用的变量使用的关键字是( )**

✅ **答案：B val**

解析：`val`定义的是不可重新赋值的变量（引用不可变），`var`才是可变引用。

**2. Scala中创建定长数组使用的类是(  )**

✅ **答案：A Array**

解析：Scala 定长数组用 `Array`，`ArrayBuffer`是变长数组。

**3. Scala中可以动态增删元素的变长数组是（ ）**

✅ **答案：B ArrayBuffer**

解析：只有 `ArrayBuffer`支持运行时动态增删元素。

**4. Scala数组访问元素的下标起始值为( )**

✅ **答案：A 0**

解析：Scala 和 Java 一样，数组下标从 0 开始。

**5. Scala中默认的不可变列表集合是( )**

✅ **答案：A List**

解析：Scala 默认 `List`是不可变的，`ListBuffer`才是可变的。

**6. Scala中Set集合最典型的特征是( )**

✅ **答案：B 元素无序、不可重复**

解析：Set 的核心特性就是去重，且不保证顺序。

**7. Scala中Map集合的存储结构是( )**

✅ **答案：B 键值对 key-value**

解析：Map 用来存储键值对映射关系。

**8. Scala中元组(Tuple)最多支持的元素个数为( )**

✅ **答案：B 22**

解析：Scala 元组最大长度为 22（这是语言层面的限制）。

**9. 访问Scala元组中第一个元素的正确写法是( )**

✅ **答案：B 元组名._1**

解析：Scala 元组通过 `_1、_2…`访问元素，不是圆括号或方括号。

**10. 关于Scala不可变List描述正确的是（ ）**

✅ **答案：B 初始化后元素与结构均不可修改**

下面按图片顺序（题号从 20 到 11）给出每道题的**正确答案 + 简要解析**，方便你直接核对和复习：

------

**20. 代码 `val t = ("scala", 100, true)`该元组包含的元素个数是( )**

✅ **答案：B 3**

解析：元组里依次有 `"scala"`、`100`、`true`三个元素，所以是 3 个。

------

**19. Scala 方法定义中，用于指定方法返回值类型的位置是( )**

✅ **答案：B 参数列表后方**

解析：标准写法为 `def 方法名(参数列表): 返回类型 = { ... }`，冒号在参数列表后面。

------

**18. 以下关于 Scala 元组的描述，错误的是( )**

✅ **答案：C 可使用下标（ ）直接访问元素**

解析：元组**不能通过小标 `()`访问**，正确方式是用 `._1、._2…`。

------

**17. 已知 `val arr = Array(10,20,30)`，遍历该数组时，数组下标最大值为( )**

✅ **答案：B 2**

解析：数组长度 3，下标从 0 开始，最大下标是 `3-1=2`。

------

**16. Scala 中定义无参无返回值方法，以下语法格式正确的是( )**

✅ **答案：A def test ( ){ }**

解析：Scala 定义方法必须用 `def`，如 `def test(): Unit = {}`或其简写形式。

------

**15. Scala 中多行注释的标准写法是( )**

✅ **答案：B /\*注释内容 \*/**

解析：Scala 多行注释和 Java/C 一样用 `/* ... */`；`//`是单行注释。

------

**14. 若需要频繁对集合执行增删操作，优先选择以下哪种集合( )**

✅ **答案：B ArrayBuffer**

解析：ArrayBuffer 是可变、支持高效增删的集合，适合这种场景。

------

**13. Scala 中元组内的元素特征是( )**

✅ **答案：B 可以存放不同数据类型的元素**

解析：元组的最大特点就是能在一个容器中放多种不同类型的数据。

------

**12. 下列集合中，不属于 Scala 可变集合的是（ ）**

✅ **答案：C 普通 List**

解析：Scala 默认 `List`是不可变集合，其余三个都是可变集合。

------

**11. 使用 val 声明一个 Array 数组，下列操作允许执行的是（ ）**

✅ **答案：B 修改数组内部已有元素的值**

解析：`val`只约束“引用不可变”，Array 本身内容是可以修改的；不能改引用、不能追加或删除元素。

### 图1（30. 多选题：Scala 元组 Tuple）

✅ **正确答案：A、B、C**

- 

  A 对：元组可同时存放字符串、数字、布尔值等不同数据类型。

- 

  B 对：通过 `._1、._2…`访问元素。

- 

  C 对：元组创建后**内部元素不可修改**，是不可变的。

- 

  D 错：元组元素序号从 **1** 开始，不是 0。

------

### 图2（29. 多选题：Map 集合）

✅ **正确答案：A、B、C**

- 

  A 对：Map 以键值对（key -> value）形式存储。

- 

  B 对：Key 唯一，不能重复。

- 

  C 对：Scala 有可变 Map 和不可变 Map。

- 

  D 错：Map **可以遍历**，例如 `for ((k,v) <- map)`。

------

### 图3（28. 多选题：Set 集合）

✅ **正确答案：A、B、C**

- 

  A 对：Set 会自动去重。

- 

  B 对：分为可变 Set 和不可变 Set。

- 

  C 对：默认无序（除非使用有序 Set）。

- 

  D 错：Set 中元素**不允许重复**。

------

### 图4（27. 多选题：定长数组 Array）

✅ **正确答案：A、B、C**

- 

  A 对：Array 长度初始化后固定不变。

- 

  B 对：支持通过下标（如 `arr(0)`）读取元素。

- 

  C 对：Array 内部元素可以修改（如 `arr(0)=10`）。

- 

  D 错：Array **不支持动态添加新元素**（需用 ArrayBuffer）。

------

### 图5（26. 多选题：可变集合）

✅ **正确答案：A、B、C**

- 

  A 对：ArrayBuffer 是可变数组。

- 

  B 对：ListBuffer 是可变列表。

- 

  C 对：可变 Set 属于可变集合。

- 

  D 错：不可变 Map 显然不是可变集合。

------

### 图6（25. 多选题：Scala 三大核心集合体系）

✅ **正确答案：A、B、C**

- 

  A、B、C 对：Scala 常用三大集合体系是 **List、Set、Map**。

- 

  D 错：Class 是类，不是集合体系。

------

### 图7（24. 多选题：Scala 元组 Tuple）

✅ **正确答案：A、B、C**

- 

  A 对：元组可存储多种不同类型数据。

- 

  B 对：通过 `._数字`（如 `._1`）访问元素。

- 

  C 对：元组元素序号从 **1** 开始。

- 

  D 错：元组内部元素**不支持动态修改**。

------

### 图8（23. 多选题：数组相关类型）

✅ **正确答案：A、B**

- 

  A 对：Array 是定长数组。

- 

  B 对：ArrayBuffer 是变长数组。

- 

  C 错：List 是列表，不是数组。

- 

  D 错：Tuple 是元组，也不是数组。

------

### 图9（22. 多选题：定义变量的合法关键字）

✅ **正确答案：A、B**

- 

  A 对：`val`定义不可变变量。

- 

  B 对：`var`定义可变变量。

- 

  C 错：Scala 没有 `let`。

- 

  D 错：Scala 没有 `const`。

------

### 图10（21. 单选题：定义有参方法的语法）

✅ **正确答案：B**

- 

  B：`def add (a:Int) { ... }`是正确写法。

- 

  A 错：参数类型应写在参数后，不能写成 `add a:Int`。

- 

  C 错：应为 `(a:Int)`，不是 `(a) Int`。

- 

  D 错：返回类型应在参数列表后，用 `: Int`，而不是 `:Int (a)`。

下面是这 10 道 Scala 判断题的**正确答案 + 简要解析**，按题号从 41 到 32 排列：

------

**41. ArrayBuffer是变长数组，适合频繁执行元素增删操作。**

✅ **答案：A 对**

解析：ArrayBuffer 是 Scala 的可变、变长数组，支持高效的增删操作。

------

**40. Scala元组Tuple创建完成后，内部元素的值不允许修改。**

✅ **答案：A 对**

解析：Tuple 是不可变对象，创建后内部元素不能被修改，只能整体替换。

------

**39. 元组 val t=(1,2,3)，可以使用 t._3 获取第三个元素。**

✅ **答案：A 对**

解析：Scala 元组通过 `_1、_2、_3…`访问元素，t._3 表示第三个元素。

------

**38. Scala中元组访问元素时，下标从0开始计数。**

✅ **答案：B 错**

解析：元组下标从 **1** 开始，不是 0。

------

**37. Scala的Set集合中，允许出现多个完全相同的元素。**

✅ **答案：B 错**

解析：Set 的典型特征就是**去重**，不会保留重复元素。

------

**36. Scala中var定义的变量，引用和元素值都可以被修改。**

✅ **答案：A 对**

解析：`var`定义的变量引用可以重新指向，若其指向的是可变对象（如 Array），其内部元素也可修改。

------

**35. Scala的定长数组Array可以动态添加和删除元素。**

✅ **答案：B 错**

解析：Array 长度固定，不能动态增删元素，只能修改已有位置的值。

------

**34. Scala 定长数组 Array 初始化之后，长度可以随意改变。**

✅ **答案：B 错**

解析：Array 初始化后长度不可变，这是“定长数组”的定义。

------

**33. Scala 中使用 def 关键字用来定义方法。**

✅ **答案：A 对**

解析：Scala 定义方法的标准关键字就是 `def`。

------

**32. Scala默认创建的List集合属于不可变集合。**

✅ **答案：A 对**

解析：Scala 中 `List`默认是不可变列表，任何“修改”都会返回一个新 List。



**1. 在Linux中，下列哪个命令可以用于分页查看文件内容？**

✅ **A. more**

*解析：`more`是Linux中经典的“分页查看”工具，适合逐屏显示大文件内容。虽然 `less`也可以分页，但 `more`更符合“分页查看”的传统定义，且在本题选项中，`more`是最直接对应的答案。*

------

**2. 在Linux中，下列哪个命令可以用于统计文件的行数、单词数和字符数？**

✅ **A. wc**

*解析：`wc`（word count）命令专门用于统计文件的行数、单词数和字节数，是标准工具。*

------

**3. 在Linux中，下列哪个命令可以用于查看文件的类型？**

✅ **B. file**

*解析：`file`命令会根据文件内容判断其类型（如文本、二进制、压缩包等），而不是靠扩展名。*

------

**4. 在Linux系统中，下列哪个命令可以用于查看文件的开头部分内容？**

✅ **B. head**

*解析：`head`默认显示文件前10行，常用于快速查看文件开头。*

------

**5. 在Linux中，下列哪个命令可以用于创建一个空文件？**

✅ **A. touch**

*解析：`touch`命令用于更新文件时间戳，如果文件不存在，则创建一个空文件。*

------

**多选题**

**6. 在Linux中，关于tail命令的描述，哪些是正确的？**

✅ **C. tail命令可以循环读取文件。**

✅ **D. tail命令可以用于查看文件的末尾内容。**

✅ **E. tail命令可以设置每次刷新的间隔时间。**

*解析：

- 

  `tail -f`可以持续跟踪文件变化（循环读取），

- 

  `tail`默认显示文件末尾内容，

- 

  `tail -F`可配合刷新间隔（如 `--sleep-interval=1`），

- 

  A错：`head`看开头，`tail`看结尾；

- 

  B错：分页查看是 `more`/`less`。*

------

**7. 在Linux中，关于less命令的描述，哪些是正确的？**

✅ **A. less命令支持搜索功能。**

✅ **B. less命令可以向前和向后翻页。**

✅ **E. less命令可以在文件末尾自动退出。**

*解析：

- 

  `less`支持 `/`和 `?`搜索，

- 

  可用方向键或 `Page Up`/`Page Down`前后翻页，

- 

  读完文件后自动退出（不像 `more`会卡住），

- 

  C错：`less`支持前后翻页；

- 

  D错：`less`默认显示行号（可配置）。*

------

**8. 在Linux中，下列哪些属于普通文件的类型？**

✅ **A. 二进制文件**

✅ **D. 文本文件**

*解析：

- 

  “普通文件”包括文本文件和二进制文件；

- 

  B（字符设备）、C（目录）、E（符号链接）属于特殊文件或目录类型，不属于“普通文件”。*

------

**9. 在Linux中，关于文件名的描述，哪些是正确的？**

✅ **A. 文件名区分大小写。**

✅ **B. 文件名可以包含空格，但需要加引号。**

✅ **C. 文件名中最后一个.后的字符串不被视为扩展名。**

✅ **D. 文件名可以包含字母、数字、下划线和圆点。**

✅ **E. 文件名的最大长度为256个字符。**

*解析：

- 

  Linux文件名严格区分大小写（A正确）；

- 

  空格需转义或加引号（B正确）；

- 

  Linux没有强制扩展名概念，最后一个点后的内容只是文件名一部分（C正确）；

- 

  合法字符包括字母、数字、下划线、点等（D正确）；

- 

  实际最大长度是255字节（不是256），但很多教材或考试题简化为256，此处按常见考试标准选E。*



### 第12题（判断题）

**答案：A（对）**

**解析**：`less`命令支持向前（PageUp）和向后（PageDown）翻页，还支持搜索、跳转行等功能，灵活性比 `more`更高。

### 第11题（判断题）

**答案：B（错）**

**解析**：`tail`命令的默认功能是查看文件的**末尾**内容（如前10行）；若要查看文件开头，应使用 `head`命令。`tail -f`还可用于跟踪文件实时更新。

### 第10题（多选题）

**答案：B、D、E**

**解析**：

- 

  **A错误**：`cat`会一次性输出整个文件内容，不分页（分页查看用 `more`/`less`）。

- 

  **B正确**：`cat -n`可显示文件内容的行号。

- 

  **C错误**：`cat`是查看/合并工具，编辑文件需用 `vi`/`vim`/`nano`等编辑器。

- 

  **D正确**：`cat file1 file2 > newfile`可将多个文件内容合并到新文件。

- 

  **E正确**：`cat filename`可直接查看文件内容。

### 第9题（多选题）

**答案：A、B、D、E**

**解析**：

- 

  **A正确**：Linux文件名严格区分大小写（如 `File.txt`和 `file.txt`是两个不同文件）。

- 

  **B正确**：文件名包含空格时需用引号（如 `touch "my file.txt"`）。

- 

  **C错误**：Linux无“扩展名”强制规则，最后一个`.`后的字符串仅为普通字符（如 `file.tar.gz`中 `.tar.gz`不是扩展名，是文件名的一部分）。

- 

  **D正确**：文件名可包含字母、数字、下划线（`_`）、圆点（`.`）等合法字符。

- 

  **E错误**：Linux文件名最大长度通常为 **255个字符**（而非256）。

### 第8题（多选题）

**答案：A、B、C、D、E**

**解析**：Linux文件类型分为：

- 

  二进制文件（如可执行程序）、

- 

  字符设备文件（如 `/dev/tty`）、

- 

  目录文件（如 `/home`）、

- 

  文本文件（如 `.txt`）、

- 

  符号链接文件（如软链接 `ln -s`创建的文件）。

### 第7题（多选题）

**答案：A、B、E**

**解析**：

- 

  **A正确**：`less`支持搜索（输入 `/keyword`向前搜索，`?keyword`向后搜索）。

- 

  **B正确**：`less`可通过 PageDown/PageUp（或方向键）向前/向后翻页。

- 

  **C错误**：`less`支持双向翻页，而 `more`只能向前。

- 

  **D错误**：`less`支持行号显示（如 `-N`参数）。

- 

  **E正确**：`less`到达文件末尾时会自动退出（或按 `q`退出）。

### 第6题（多选题）

**答案：C、D、E**

**解析**：

- 

  **A错误**：`tail`看**末尾**，开头用 `head`。

- 

  **B错误**：分页查看用 `more`/`less`。

- 

  **C正确**：`tail -f`可循环读取（跟踪文件实时更新）。

- 

  **D正确**：`tail`默认查看文件末尾内容。

- 

  **E正确**：`tail -F --sleep-interval=1`可设置刷新间隔（如每秒刷新一次）。

### 第5题（单选题）

**答案：A**

**解析**：`touch`命令可创建空文件（若文件存在则更新时间戳）；`mkdir`建目录，`cp`复制，`cat`查看/合并。

### 第4题（单选题）

**答案：B**

**解析**：`head`默认显示文件前10行（可用 `-n`指定行数）；`cat`全量输出，`tail`看末尾，`more`分页。

### 第3题（单选题）

**答案：B**

**解析**：`file`命令通过内容分析文件类型（如文本、二进制、压缩包）；`more`分页，`ls`列目录，`cat`查看内容。

### 第2题（单选题）

**答案：A**

**解析**：`wc`（word count）统计文件的行数、单词数、字节数；`grep`搜索，`find`查找文件，`sort`排序。

### 第1题（单选题）

**答案：A**

**解析**：`more`是经典的“分页查看”工具（一次性加载，适合大文件）；`less`更灵活但非传统“分页”定义，`head`看开头，`cat`全量输出。



**第15题（判断题）**

**答案：B（错）**

**解析**：`cat`命令的主要功能是查看文件内容、合并文件、显示行号等，但它不具备编辑文件的功能。在 Linux 中，编辑文件通常使用 `vim`、`nano`、`gedit`等文本编辑器。

**第14题（判断题）**

**答案：B（错）**

**解析**：在 Linux 中，传统文件系统（如 ext3/ext4）限制文件名的最大长度为 **255 个字符**（字节），不能超越。虽然某些现代文件系统可能支持更长路径，但单个文件名本身仍受此限制。

**第13题（判断题）**

**答案：B（错）**

**解析**：Linux 没有像 Windows 那样强制的“扩展名”概念。文件名中最后一个“.”后面的字符串只是普通字符的一部分，并不被视为特殊的扩展名。系统不会根据它自动关联程序。

把我问你的题目总结一下，格式是题目+四个选项+正确答案

以下是您上传的三张图片中所有题目的总结：

**题目 15（5.0分）：在Linux中，cat命令可以用于编辑文件。**

- 

  A 对

- 

  B 错

- 

  **正确答案：B**

**题目 14（5.0分）：在Linux中，文件名的长度可以超过255个字符。**

- 

  A 对

- 

  B 错

- 

  **正确答案：B**

**题目 13（5.0分）：在Linux中，文件名中最后一位的字符串被视为扩展名。**

- 

  A 对

- 

  B 错

- 

  **正确答案：B**



好的，这是基于您上传的图片内容整理的正确答案及解析：

**1. HBase默认的安装运行模式是？**

- 

  **答案：D**

- 

  **解析：** HBase安装包解压后，默认配置为**单机模式（Standalone Mode）**，无需修改配置即可启动，所有守护进程运行在一个JVM中。

**2. HBase从1.0版本之后，默认的访问端口号从60010改为了多少？**

- 

  **答案：C**

- 

  **解析：** HBase 1.0版本之后，Web UI的端口进行了调整，**Master节点的默认Web端口由60010变更为16010**，RegionServer由60030变更为16030。

**3. Zookeeper节点类型中，ZooKeeper断开连接后，该节点依旧存在，只是ZooKeeper给该节点名称进行顺序编号的节点是？**

- 

  **答案：D**

- 

  **解析：** 本题考查ZNode类型。**持久顺序节点（PERSISTENT_SEQUENTIAL）** 具有两个特点：一是客户端会话结束后节点依然存在（持久）；二是创建时ZooKeeper会在节点名后追加一个单调递增的数字（顺序）。

**4. Zookeeper每一个ZNode能够存储的数据大小是？**

- 

  **答案：A**

- 

  **解析：** ZooKeeper的设计目标是协调服务，而非数据存储。为了保证高性能和一致性，它对单个ZNode的数据大小有严格限制，最大不能超过 **1MB**（通常建议远小于此值，仅存放配置元数据）。

**5. 在Zookeeper集群配置zoo.cfg中，server.N=YYY:A:B中的A代表什么含义？**

- 

  **答案：A**

- 

  **解析：** 在`zoo.cfg`配置中，`server.X=host:port1:port2`。其中`port1`（即A）用于**集群内服务器之间的通信（Leader选举）**；`port2`（即B）用于**Leader与Follower之间的数据同步**。

**6. 在Zookeeper的客户端命令中，用来查看指定节点下级的节点信息（不能递归查看）的命令是？**

- 

  **答案：C**

- 

  **解析：** `ls path`命令用于列出指定路径下的**直接子节点**，无法递归显示所有后代节点。`get`用于获取节点数据和属性。

**7. HBase分布式模式细分为伪分布式与完全分布式，其中完全分布式模式只能运行在（ ）上？**

- 

  **答案：D**

- 

  **解析：** HBase是完全构建在Hadoop之上的数据库，其底层依赖Hadoop分布式文件系统（**HDFS**）来存储海量数据，因此完全分布式模式必须运行在HDFS之上。

**8. 在HBase完全分布式配置中，要告诉HBase使用外部的Zookeeper，需要在hbase-env.sh中将HBASE_MANAGES_ZK设置为？**

- 

  **答案：B**

- 

  **解析：** `HBASE_MANAGES_ZK`参数用于控制HBase是否托管（启动/停止）ZooKeeper集群。若使用外部独立的ZooKeeper集群，必须将此值设为 **false**，否则HBase会尝试管理自己的内置ZooKeeper。

**9. 配置HBase环境变量时，一般在以下哪个文件中设置root用户的环境变量？**

- 

  **答案：C**

- 

  **解析：** 在Linux系统中，系统级或root用户的环境变量通常配置在 **`/etc/profile`** 文件中，修改后执行`source /etc/profile`使其生效。`/etc/hosts`用于配置主机映射。

**10. Zookeeper服务自身组成一个集群，若有2n+1个服务，允许失效的服务节点数是？**

- 

  **答案：D**

- 

  **解析：** ZooKeeper集群采用**过半机制（Quorum）**来保证高可用。只要集群中超过半数（n+1）的节点存活，集群就能正常工作。因此，在总数为2n+1的集群中，最多允许 **n个** 节点失效。



以下是针对这10道多选题的正确答案及解析：

**第20题：关于Zookeeper系统存储结构和数据模型的描述，正确的是?**

- 

  **答案：ABCD**

- 

  **解析：** ZooKeeper的数据模型是一个**层次化的命名空间**，整体上像一棵**树（A）**，结构与Unix文件系统类似（C）。它使用文件系统目录树作为数据模型（B），树中的每个节点被称为一个**ZNode（D）**。

**第19题：在hbase-site.xml中，通常需要配置哪些属性来保证分布式运行和数据存储？**

- 

  **答案：BCD**

- 

  **解析：**

  - 

    **B (hbase.rootdir)**：指定HBase数据在HDFS上的存储根目录，是必须的。

  - 

    **C (hbase.zookeeper.quorum)**：指定ZooKeeper集群节点，用于分布式协调，是必须的。

  - 

    **D (hbase.cluster.distributed)**：设置为true表示开启完全分布式模式。

  - 

    A (dfs.replication) 是HDFS的配置属性，通常在hdfs-site.xml中配置，不属于HBase核心配置。

**第18题：验证HBase是否成功启动的方法包含哪些？**

- 

  **答案：BCD**

- 

  **解析：**

  - 

    **B**：检查HDFS上是否生成了`hbase.rootdir`配置的目录。

  - 

    **C**：通过浏览器访问Master的16010端口（或旧版60010）查看Web UI。

  - 

    **D**：使用`jps`命令查看HMaster、HRegionServer等进程是否存在。

  - 

    A错误，ZooKeeper是协调服务，不会自动关闭，HBase依赖它运行。

**第17题：在配置HBase伪分布式时，主要需要修改以下哪些配置文件？**

- 

  **答案：ABD**

- 

  **解析：** 伪分布式模式下，HBase运行在单台机器上但模拟分布式环境。

  - 

    **A (hbase-env.sh)**：配置JAVA_HOME及是否使用自带ZooKeeper。

  - 

    **B (regionservers)**：配置RegionServer节点，伪分布式通常填本机主机名。

  - 

    **D (hbase-site.xml)**：配置根目录、ZooKeeper及分布式模式开关。

  - 

    C (zoo.cfg) 如果使用HBase自带的ZooKeeper才需修改，非绝对必须。

**第16题：HBase完全分布式集群启动的条件及方式包括?**

- 

  **答案：BCD**

- 

  **解析：**

  - 

    **B**：可以使用`start-hbase.sh`脚本一键启动整个集群。

  - 

    **C**：ZooKeeper遵循过半机制，必须保证半数以上节点存活才能选举出Leader，集群才能工作。

  - 

    **D**：也可以分别在各节点上使用`hbase-daemon.sh start master/regionserver`单独启动。

  - 

    A错误，HBase强依赖Hadoop（HDFS/YARN），必须先启动Hadoop。

**第15题：阿里大数据在HBase的应用案例包括哪些？**

- 

  **答案：ACD**

- 

  **解析：** 阿里（淘宝）是HBase的早期重度使用者，典型应用场景包括**用户日志（A）**存储、**淘宝站内商品搜索（C）**索引构建、**购买历史（D）**记录等。**B (数据挖掘)** 通常是对数据的上层应用分析，不是直接的数据存储场景。

**第14题：以下属于Zookeeper常用客户端命令的是?**

- 

  **答案：ABCD**

- 

  **解析：** ZooKeeper客户端常用命令包括：`create`（创建）、`delete`（删除）、`get`（获取数据和属性）、`set`（设置数据）、`ls`（列出子节点）等。四个选项均正确。

**第13题：Zookeeper节点的生命周期取决于节点的类型，它包含以下哪些类型？**

- 

  **答案：ABCD**

- 

  **解析：** ZooKeeper节点（ZNode）主要分为两大类：持久节点（Persistent）和临时节点（Ephemeral）。每一类又细分为普通节点和顺序节点（Sequential）。因此包含：**持久节点（B）、持久顺序节点（A）、临时节点（C）、临时顺序节点（D）**。

**第12题：Zookeeper服务主要包含哪两个角色？**

- 

  **答案：AB**

- 

  **解析：** ZooKeeper集群中，节点通过选举产生**Leader（A）**，其余节点成为**Follower（B）**。Slave和Master通常是Hadoop或HBase中的角色概念。

**第11题：HBase安装前需要准备的前提条件包括哪些?**

- 

  **答案：ABCD**

- 

  **解析：**

  - 

    **A**：HBase依赖Hadoop（HDFS）进行数据存储。

  - 

    **B**：HBase是基于Java开发的，需要JDK环境。

  - 

    **C**：HBase主从节点间需要通过SSH进行远程管理和启动进程，需配置免密登录。

  - 

    **D**：需要配置`/etc/hosts`文件，确保主机名和IP地址正确映射。

**21. HBase安装模式有两种：____和分布式。**

- 

  **答案：单机模式**

- 

  **解析：** HBase最基本的两种运行模式为单机模式（Standalone）和分布式模式（Distributed）。

**22. 在Linux环境中，使用______命令可以让刚刚修改的环境变量配置立刻生效。**

- 

  **答案：source**

- 

  **解析：** 修改如 `/etc/profile`或 `~/.bashrc`等配置文件后，需执行 `source 文件名`（如 `source /etc/profile`）使其在当前终端立即生效，无需重启。

**23. hbase-site.xml配置中，将hbase.cluster.distributed的值设为______代表开启分布式模式。**

- 

  **答案：true**

- 

  **解析：** 该参数默认为 `false`（单机模式），设置为 `true`后HBase将以完全分布式模式运行。

**24. 启动hbase前，需要保证hdfs的服务进程必须是正常启动的状态，可以通过jps查看namenode和______这两个进程是否运行。**

- 

  **答案：datanode**

- 

  **解析：** HDFS的核心守护进程包括NameNode（主）和DataNode（从），启动HBase前需确认两者均已启动。

**25. ZooKeeper从设计模式角度来理解，是一个基于_______模式设计的分布式服务管理框架。**

- 

  **答案：观察者（或Observer）**

- 

  **解析：** ZooKeeper采用了经典的**观察者模式**，客户端（Watcher）监听ZNode的变化，一旦数据或节点状态改变，服务端会通知所有注册的客户端。

**26. 在Zookeeper常用操作命令中，若要退出zkCli.sh客户端，可以输入______命令。**

- 

  **答案：quit**

- 

  **解析：** 在ZooKeeper客户端命令行中输入 `quit`或 `Ctrl+C`可退出客户端。

**27. 在单机模式下，HBase不使用HDFS，而是使用______。**

- 

  **答案：本地文件系统（或Local FileSystem）**

- 

  **解析：** 单机模式下，HBase默认将数据存储在本地磁盘的文件系统中，而非分布式的HDFS上。

**28. 配置HBase完全分布式时，若告知HBase使用外部的Zookeeper，应在hbase-env.sh中添加export HBASE_MANAGES_ZK=______。**

- 

  **答案：false**

- 

  **解析：** `HBASE_MANAGES_ZK=false`表示HBase不托管（不负责启动/停止）ZooKeeper，而是使用外部已存在的ZooKeeper集群。

**29. HBase集群启动的条件是必须保证zookeeper至少_______以上是正常启动的。**

- 

  **答案：半数（或过半）**

- 

  **解析：** ZooKeeper集群遵循“过半机制”（Quorum），只有超过半数节点存活，集群才能选出Leader并提供服务。

**30. 在指定的位置创建zookeeper的数据目录后，需要手动的创建_______文件，通过这个文件声明机器的server号。**

- 

  **答案：myid**

- 

  **解析：** 在ZooKeeper的数据目录（dataDir）下，必须创建名为 `myid`的文件，并在其中写入一个数字（如1、2、3），以此标识当前服务器的ID，与 `zoo.cfg`中的 `server.x`配置对应。









### 第1题（单选题）

**解析：**

- 

  `jsp:useBean`动作标签用于实例化 JavaBean 对象。

- 

  其标准属性包括 `id`（实例名）、`class`（类的全限定名）、`scope`（作用域）。

- 

  A选项：`id`、`class`、`scope`属性齐全且 `class`使用了完整的包路径，写法完全正确。

- 

  B选项：缺少必需的 `id`属性。

- 

  C选项：`jsp:useBean`标签中没有 `import`属性，导入包通常在 JSP 页面的 page 指令中使用 `import`属性。

- 

  D选项：`jsp:useBean`标签中没有 `name`属性，对应的属性名是 `id`。

**答案：A**

------

### 第2题（单选题）

**解析：**

- 

  A选项：Tomcat 的核心配置文件 `server.xml`位于 Tomcat 安装目录下的 `conf`文件夹中，而不是 `bin`文件夹。

- 

  B选项：Web 应用程序的部署描述符 `web.xml`位于项目目录下的 `WEB-INF`子目录中，而不是整个 Web 服务目录的 `WEB-INF`。

- 

  C选项：在 Servlet 3.0 及以上版本中，确实可以使用 `@WebServlet`注解直接在 Java 类上配置 Servlet 的映射信息，无需在 `web.xml`中配置，说法正确。

- 

  D选项：虽然传统 Web 应用的部署文件名为 `web.xml`，但 A 选项的描述是明显错误的，因此 C 是更准确的描述。

**答案：C**

------

### 第3题（单选题）

**解析：**

- 

  `RequestDispatcher`的 `forward(request, response)`方法的作用是将当前的请求对象（`request`）和响应对象（`response`）转发给服务器上的另一个资源（如 JSP、Servlet）。

- 

  这属于服务器端跳转，浏览器地址栏不会发生变化。

- 

  A选项是重定向（Redirect）的效果。

- 

  B和D选项的方向描述反了，是从当前页面转发到目标页面，而不是从目标页面转发回来。

- 

  C选项准确描述了 `forward`的作用。

**答案：C**

------

### 第4题（单选题）

**解析：**

- 

  题目中指出类为 `bean.Student`，即类的全限定名为 `bean.Student`。

- 

  A选项：`class`属性值缺少包名前缀，应为 `"bean.Student"`。

- 

  B选项：`id`属性指定实例名，`class`属性指定类的全限定名 `"bean.Student"`，且 `scope`属性值合法，符合 `jsp:useBean`的语法要求。

- 

  C选项：同 A 选项，`class`属性值错误。

- 

  D选项：`jsp:getProperty`标签的 `name`属性应该对应 `jsp:useBean`中的 `id`属性值（即实例名），而 `property`属性才是指定 Bean 的属性名。这里把属性名和实例名写反了，且 `name`值 `"name"`也不是合法的 Bean 实例名。

**答案：B**

------

### 第5题（单选题）

**解析：**

- 

  代码中首先定义了一个整型变量 `counter`并赋值为 `10`。

- 

  `<c:if test="${counter%2==1}">`判断 `counter`除以 2 的余数是否等于 1。因为 10 % 2 = 0，所以条件为假，`<c:set>`标签内的代码不会执行，因此 `isOdd`变量不会被设置为 `true`。

- 

  接下来进入 `<c:choose>`结构：

  - 

    `<c:when test="${isOdd==true}">`判断 `isOdd`是否为 `true`。由于前面的 `if`条件未满足，`isOdd`未被赋值（在 EL 表达式中默认视为 `false`），所以该 `when`条件不成立。

  - 

    因此，执行 `<c:otherwise>`分支，输出 "it's an even"。

**答案：A**

------

### 第6题（单选题）

**解析：**

- 

  A选项：`GenericServlet`是一个抽象类，它实现了 `Servlet`和 `ServletConfig`接口，而不是一个接口。描述错误。

- 

  B选项：`GenericServlet`确实同时实现了 `Servlet`和 `ServletConfig`两个接口。描述正确。

- 

  C选项：在 `GenericServlet`类中，`service`方法是一个具体的方法（非抽象），它接收 `ServletRequest`和 `ServletResponse`参数。描述正确。

- 

  D选项：`GenericServlet`类中确实定义了一个 `ServletConfig`类型的私有成员变量（通常名为 `config`），用于存储配置信息。描述正确。

- 

  题目要求选出说法错误的选项，因此选 A。

**答案：A**

------

### 第7题（单选题）

**解析：**

- 

  当 Tomcat 端口号被占用时，需要修改 Tomcat 的配置文件来更换端口。

- 

  这个配置文件是 `server.xml`，它位于 Tomcat 安装目录的 `conf`文件夹下。

- 

  在 `server.xml`文件中，找到 `<Connector port="8080" ... />`标签，将 `port`属性的值修改为其他未被占用的端口号即可。

- 

  综合以上分析，正确的修改位置是 `\conf`文件夹 `\server.xml`文件中，修改 `Connector`的 `port`。

**答案：D**

------

### 第8题（单选题）

**解析：**

- 

  JSP 的隐式对象（内置对象）是 JSP 容器自动创建并供开发者直接使用的对象，共有 9 个：`request`, `response`, `session`, `application`, `out`, `page`, `config`, `pageContext`, `exception`。

- 

  A选项 `config`是隐式对象，代表 Servlet 的配置信息。

- 

  B选项 `session`是隐式对象，代表用户的会话。

- 

  C选项 `pageScope`不是隐式对象。在 JSP 2.0 引入的 EL（表达式语言）中，有 `pageScope`这个隐式对象，它代表了 PageContext 中的属性集合，但在传统的 JSP 脚本元素（Scriptlet）语境下，通常所说的 9 个隐式对象不包含它。如果题目考察的是标准的 JSP 9 大内置对象，则 C 不属于。

- 

  D选项 `exception`是隐式对象，代表抛出的异常（仅在错误页面中使用）。

**答案：C**

------

### 第9题（单选题）

**解析：**

- 

  在标准的 Java Web 应用目录结构中，部署描述符 `web.xml`必须放置在项目的 `WEB-INF`目录下。

- 

  假设项目名为 `LoginDemo`，通常其 Web 应用的根目录就是 `LoginDemo`本身（或者 `LoginDemo/webapp`等），那么 `web.xml`的位置就是 `LoginDemo/WEB-INF/web.xml`。

- 

  A选项 `src`是存放 Java 源代码的地方。

- 

  B选项 `WEB-INF/bin`目录不存在。

- 

  C选项 `LoginDemo/logindemo/WEB-INF/`路径层级看起来不合理。

- 

  D选项 `LoginDemo/`是项目根目录，不是 `web.xml`的正确位置。

- 

  最符合常规 Web 项目结构的是 C 选项所表达的层级关系（尽管可能多了一层 `logindemo`目录，但其他选项更离谱），或者理解为 `LoginDemo`目录下的某个子目录 `logindemo`作为 Web 应用根目录。在常规考试中，只要指向 `WEB-INF`目录即可。

**答案：C**

------

### 第10题（单选题）

**解析：**

- 

  A选项 `JSP`是一种动态网页技术，不是接口。

- 

  B选项 `Filter`是 Java EE 中定义的接口，所有过滤器都必须实现 `javax.servlet.Filter`接口。

- 

  C选项 `Listener`通常指的是监听器，监听器有多种接口，如 `ServletContextListener`、`HttpSessionListener`等，它们不是单一的 `Listener`接口。

- 

  D选项 `HttpServlet`是一个抽象类，它继承自 `GenericServlet`，用于处理 HTTP 协议的请求。

**答案：B**

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=f127bd08f5fe02f77849e1367953d78d_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=377653750909529b9cf0c819ddce5820_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=ee38228fe4077cdcfb525c072c03d7bc_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=289c3628d623a743284f66a3469353d6_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=24628022f15b3132ea002a060b23e339_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=64290e63750cbdb28ab0eb32d251c7c6_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=aa68d7dff80ab4ba80eeccd6714807f2_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=7448b7f8029e0c7ba1a971569dadef0c_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=e2774662d8f74200f6618d4916ffd758_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=10e440560cd20aae19e8ed87f15b320a_54)

### 第15题（单选题）

**解析：**

- 

  Session（会话）机制用于在服务器端跟踪用户的操作状态。

- 

  同一个用户在同一台浏览器中访问同一个Web项目的不同资源时，使用的是同一个Session对象。

- 

  不同用户访问同一个项目时，各自拥有独立的Session对象。

- 

  Session对象保存在服务器端的，通过浏览器地址栏无法直接访问（那是客户端行为）。

**答案：A**

------

### 第16题（单选题）

**解析：**

- 

  在Java Web中，实现重定向需要使用 `response`对象的 `sendRedirect()`方法。

- 

  `request`对象主要用于处理客户端的请求，不能用来重定向。

- 

  正确的语法是 `response.sendRedirect("重定向的目标路径")`。

**答案：C**

------

### 第17题（单选题）

**解析：**

- 

  在JDBC中，加载数据库驱动通常使用反射机制中的 `Class.forName()`方法。

- 

  该方法传入的参数必须是驱动类的**全限定类名**（即包含包名的完整类名）。

- 

  Oracle JDBC驱动类的全限定名通常是 `oracle.jdbc.driver.OracleDriver`。

- 

  A、B选项方法名错误；C选项传入的不是完整的类名（缺少包名前缀）；D选项写法完全正确。

**答案：D**

------

### 第18题（单选题）

**解析：**

- 

  在JSP的MVC设计模式中，不同的组件有不同的职责：

  - 

    **Model（模型）**：由Java Bean或EJB担当，负责处理业务逻辑和数据。

  - 

    **View（视图）**：由JSP页面担当，负责数据的显示。

  - 

    **Controller（控制器）**：由**一个或多个Servlet对象**担当，负责接收客户端的请求，调用模型进行处理，并决定跳转到哪个视图。

**答案：B**

------

### 第19题（单选题）

**解析：**

- 

  Web应用的标准目录结构中，`WEB-INF`目录位于Web应用的根目录下。

- 

  `WEB-INF`目录下的所有资源（包括JSP页面、HTML页面、classes目录、lib目录等）都是受保护的，**不能直接通过浏览器的地址栏访问**。

- 

  但是，这些资源可以通过Servlet或JSP页面的**请求转发（RequestDispatcher.forward）**来访问。

**答案：D**

------

### 第20题（单选题）

**解析：**

- 

  A选项：**错误**。在MVC模式中，正确的分工是：一般用**Servlet来处理业务逻辑和控制流程**，用**JSP来实现页面显示**。

- 

  B选项：正确，JSP页面会被Web容器翻译成Servlet的字节码文件执行。

- 

  C选项：正确，JSP是建立在Servlet技术之上的，可以看作是Servlet的简化和扩展。

- 

  D选项：正确，早期的JSP中大量使用脚本语言（Scriptlet）会导致代码和HTML混合，可读性和维护性变差。

**答案：A**

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=2eb77748f7920ff59835f19cb14b81e0_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=e778a60f4f2daa332757ff7d75db1623_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=b987546bead28d299d55261932dc7ad8_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=12e17a8998a836dd83f5c65f34980f3a_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=2bcd95e52b352ca8d84a1884b08cb460_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=7d4c7132816e2ece68bdef7c2192e9bb_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=9655c6453eddc6f5f7066f902fd7f691_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=ca7d98794ff9abab39445f04a89ea924_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=33fe54b6a19fe2613a7dbabdbf7e2339_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=46805006981d7c4f61bb814a9e8733c9_54)

好的，这是针对您上传的图片中题目的解答：

### 图1（第30题）

**解析：**

- 

  **200 OK**：请求成功。

- 

  **302 Found**：临时重定向。

- 

  **404 Not Found**：请求的资源不存在。

- 

  **500 Internal Server Error**：服务器内部错误。

- 

  常见的HTTP状态码中不存在选项C（302）以外的其他三个选项之外的常见状态码，但根据题目要求选择“不存在”的，结合选项设置，**C 302** 是实际存在的重定向状态码，而题目问“哪一不存在”，推测是出题者笔误或选项设置问题，但在标准状态码中，这四个都是存在的。不过结合下一题（图10）专门考重定向，此处可能是想考“哪个不是常见的成功或错误码”，但严格来说**302是存在的**。如果必须选一个，可能是题目有误，但按常规考试逻辑，此处应选 **C**（假设题目想表达的是“哪个是用于重定向的”，但题干写的是“不存在”）。

- 

  **更正：** 仔细看题干“哪一不存在”，四个选项都是存在的状态码。这可能是题目出错了。但如果这是单选题且必须选，结合网络常识，这四个都是标准状态码。或许原题是想问“哪一个表示重定向”，那样答案是C。鉴于用户同时上传了图10也是关于重定向的，推测这里可能是印刷错误，正确答案应为 **C**（如果问题是“哪一个表示重定向”）。但根据严格的“不存在”来判断，没有答案。不过，为了配合考试，通常这类题答案是 **C**。

**答案：C** (注：此题干可能存在歧义或错误，按常规考试套路选择C)

------

### 图2（第29题）

**解析：**

- 

  `page`指令的 `import`属性专门用于导入 Java 包或类，例如 `<%@ page import="java.util.*" %>`。

- 

  `language`指定脚本语言（如Java）。

- 

  `extends`指定JSP生成的Servlet继承的父类。

- 

  `contentType`设置响应内容类型和字符编码。

**答案：A**

------

### 图3（第28题）

**解析：**

- 

  数据存储在 `request`作用域中，key 为 `"login"`，其值是一个 Map。

- 

  Map 中有一个 key 为 `"student.name"`（包含特殊字符`.`）。

- 

  在 EL 表达式中，访问 Map 的值有两种方式：

  1. 

     `${map.key}`：要求 key 符合 Java 标识符命名规则（不能有`.`）。

  2. 

     `${map["key"]}`：可以处理包含特殊字符的 key。

- 

  因为 key 是 `"student.name"`，包含点号，所以必须使用 `["student.name"]`的形式。

- 

  同时，存入 request 时的 attribute name 是 `login`，所以 EL 表达式应以 `${login...}`开头。

**答案：A**

------

### 图4（第27题）

**解析：**

- 

  JSP 表达式的语法是 `<%= 表达式 %>`，用于向页面输出表达式的计算结果。

- 

  表达式 `"1+6"`是一个字符串，而不是计算式。因此，它会原样输出字符串 `1+6`，而不会计算成 `7`。

- 

  注意：如果是 `<%= 1+6 %>`，则会输出 `7`。

**答案：C**

------

### 图5（第26题）

**解析：**

- 

  Servlet 生命周期方法：

  - 

    `init()`：初始化，只执行一次。

  - 

    `service()`：处理请求，每次请求都会调用。

  - 

    `doGet()/doPost()`：处理具体的 GET/POST 请求。

  - 

    `destroy()`：**销毁方法**，当 Servlet 被卸载或服务器关闭时调用，用于释放资源。

**答案：D**

------

### 图6（第25题）

**解析：**

- 

  Servlet 接口中定义的核心方法是 `service(ServletRequest req, ServletResponse res)`。

- 

  HttpServlet 中提供了 `doGet()`, `doPost()`等方法。

- 

  Servlet 接口及 HttpServlet 类中均没有定义 `close()`方法。

**答案：B**

------

### 图7（第24题）

**解析：**

- 

  JSP 指令（Directive）的语法格式是：`<%@ directive attribute="value" %>`

- 

  它以 `<%@`开始，以 `%>`结束。

- 

  选项 B 的描述最接近，虽然它写的 `“<%!@(MISSING)“`可能是 OCR 识别错误，实际应为 `<%@`。

**答案：B**

------

### 图8（第23题）

**解析：**

- 

  A、B、D 选项描述均正确。

- 

  C 选项描述错误：在 MVC 模式中，通常**用 Servlet 来处理业务逻辑和控制流程，用 JSP 来实现页面显示**。C 选项说反了。

**答案：C**

------

### 图9（第22题）

**解析：**

- 

  `<context-param>`配置的是**上下文参数（Application Scope）**。

- 

  在 Servlet 中，可以通过 `ServletContext`对象来获取这些参数。

- 

  `getInitParameter("param-name")`是 `ServletContext`接口中定义的方法。

**答案：B**

------

### 图10（第21题）

**解析：**

- 

  **302 Found**：表示临时重定向，资源临时从不同的 URI 响应请求。

- 

  **200**：成功。

- 

  **404**：未找到资源。

- 

  **500**：服务器内部错误。

**答案：A**

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=d292cb6e4f9fb570dc2b1448b14d6d5f_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=16cf05bfc4f4ff14c33cb2403de76a7a_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=345903438ad9d800cd0b87cf00d223a0_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=a8e33789728073c418e9a316ef96de02_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=e7284d22d91585112335d5d42babcee7_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=d94025d40eceae216d2ff8e164da4da1_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=6a71809d08ecc1a081aee1f0602853be_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=6d88021eca5eb8c0f6bac0f24e01f3f5_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=3b1e8c20f6e18156ccad0b847319f529_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=3d937e3b724f013dcd39310fd5931e69_54)

### 图1（第40题）

**解析：**

- 

  代码位于 `<%! %>`声明标签中，用于声明成员变量和方法。

- 

  **A选项**：代码中存在拼写错误，`retrun`应为 `return`，因此无法通过编译。A错误。

- 

  **B选项**：`temp`是成员变量，其作用域是整个 JSP 页面转换后的 Servlet 类，在 `convertMoney`方法中可以正常访问。B错误。

- 

  **C选项**：`out`是 JSP 的内置对象（隐式对象），在 JSP 声明中可以直接使用，无需额外声明。C错误。

- 

  **D选项**：由于存在语法错误（拼写错误），程序无法通过编译。这是最准确的描述。

**答案：D**

------

### 图2（第39题）

**解析：**

- 

  在 Servlet 中获取 POST 请求参数时，为了防止中文乱码，需要在获取参数之前设置请求体的字符编码。

- 

  `request.setCharacterEncoding("utf-8")`正是用于设置请求内容的编码格式。

- 

  B选项是 JSP 页面指令中的写法；C、D选项是设置响应（Response）的编码，与获取请求参数无关。

**答案：A**

------

### 图3（第38题）

**解析：**

- 

  A选项：GET 方法会将参数暴露在 URL 中，不适合提交敏感数据（如密码），应使用 POST。A错误。

- 

  B选项：GET 请求的 URL 可以被收藏为书签，POST 请求的数据在请求体中，无法被收藏。B错误。

- 

  C选项：GET 请求通常比 POST 请求更快，因为 GET 只需发送一次请求头，而 POST 通常需要发送两次（先发头，再发体）。C错误。

- 

  D选项：GET 请求对 URL 长度有限制，而 POST 请求提交的数据量理论上没有限制（受服务器配置限制）。D正确。

**答案：D**

------

### 图4（第37题）

**解析：**

- 

  数据被存入 Session 作用域，key 为 `"myuser"`。

- 

  在 EL 表达式中，访问对象的属性使用 `.`操作符（点运算符）。

- 

  因此，要取出 `myuser`对象中的 `name`属性，正确的 EL 表达式是 `${myuser.name}`。

- 

  `${user.name}`错误，因为 Session 中的属性名是 `myuser`而不是 `user`。

**答案：C**

------

### 图5（第36题）

**解析：**

- 

  JSP 表达式 `<%= expression %>`用于输出表达式的计算结果。

- 

  表达式 `"1+4"`是一个字符串常量，而不是数学运算式。

- 

  因此，该代码会原样输出字符串 `1+4`，而不会计算其数值结果。

**答案：C**

------

### 图6（第35题）

**解析：**

- 

  JSP（JavaServer Pages）本质上是一个简化的 Servlet 设计。

- 

  当客户端第一次请求 JSP 页面时，Web 容器（如 Tomcat）会先将 JSP 文件**翻译**成一个 `.java`源文件（Servlet），然后再将其**编译**成 `.class`字节码文件，最后载入容器执行。

- 

  A选项说“无需转译”错误；C、D选项忽略了 JSP 会被编译成 Servlet 的过程。

**答案：B**

------

### 图7（第34题）

**解析：**

- 

  `HttpServletRequest`接口中，用于获取客户端请求参数的方法是 `getParameter(String name)`。

- 

  `getAttribute()`用于获取在请求范围内设置的属性值，而非请求参数。

**答案：C**

------

### 图8（第33题）

**解析：**

- 

  在 Java 中，创建一个过滤器（Filter）需要实现 `javax.servlet.Filter`接口。

- 

  实现接口的关键字是 `implements`。

- 

  `extends`用于继承类。

**答案：A**

------

### 图9（第32题）

**解析：**

- 

  题目询问 JSP 中哪个作用域的范围最小。

- 

  JSP 四大作用域从小到大依次为：**page**（页面级别，最小） < **request**（请求级别） < **session**（会话级别） < **application**（应用级别，最大）。

- 

  因此范围最小的是 `page`。

**答案：C**

------

### 图10（第31题）

**解析：**

- 

  JSP 的隐式对象（内置对象）共有 9 个：`request`, `response`, `session`, `application`, `out`, `page`, `config`, `pageContext`, `exception`。

- 

  A `pageContext`、B `request`都是隐式对象。

- 

  C `param`和 D `cookie`属于 EL（表达式语言）的隐式对象，而不是 JSP Scriptlet 中的隐式对象。

- 

  题目要求选出“不是”的选项，且是单选题。在严格的 JSP 九大内置对象语境下，`param`和 `cookie`都不属于。但通常此类考题中，`cookie`有时会被误认为对象，而 `param`是纯粹的 EL 对象。根据常见题库，此题通常答案为 **C** 或 **D**。结合选项设置，最标准的 JSP 隐式对象中没有 `param`。

**答案：C**

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=b54133e89d434a1d7de5739b19299837_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=32d51092a665816c83b14e548cd733eb_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=17b89a6174e5b1a9e88a886bde3532fe_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=bc5cb7898751ab793a03aee670fe19ae_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=1dafcbe26695ae9be15c667d9ed9c71d_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=2039b14236f481d977a5836a4e358204_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=43fb70447f23ba55bad0e19019b70ddb_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=3461ba3f1380a75a171ab7d58e07a4b2_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=daffe77e512ccc7e8fac13a9d9f40f1c_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=7894ed85e714c74f87f4ae28fd0b8f3f_54)

### 第50题（图1）

**解析：**

- 

  A选项：JavaBean 规范要求属性私有（private），通过公共的 getter/setter 方法访问，正确。

- 

  B选项：**错误**。JavaBean 不需要像 Servlet 那样在 `web.xml`中注册，通常直接使用 `<jsp:useBean>`或在普通 Java 类中实例化。

- 

  C选项：JavaBean 的属性名可以与表单控件的 `name`属性自动匹配，用于接收表单参数，正确。

- 

  D选项：JavaBean 类必须是 public 的，并且通常包含一个无参的公共构造器，正确。

**答案：B**

------

### 第49题（图2）

**解析：**

- 

  A选项：`Statement`接口用于执行静态 SQL 语句并返回其生成的结果。

- 

  B选项：`Connection`接口代表与数据库的连接，本身不执行 SQL。

- 

  C选项：`DriverManager`用于管理 JDBC 驱动程序，建立数据库连接。

- 

  D选项：`ResultSet`用于封装查询结果集。

**答案：A**

------

### 第48题（图3）

**解析：**

- 

  A选项：**错误**。在 JSP 的 Java 脚本（Scriptlet）中，可以使用 `//`进行单行注释，也可以使用 `/* */`进行多行注释。

- 

  B选项：JSP 本质就是 Servlet，可以在脚本中通过 `out.println()`等方式控制 HTML 标签的生成，正确。

- 

  C选项：JSP 既可以编写 HTML 等静态内容，也可以通过脚本处理动态内容，正确。

- 

  D选项：JSP 在第一次被访问时，会被 Web 容器（如 Tomcat）翻译成 Servlet（.java），然后编译成字节码（.class）文件执行，正确。

**答案：A**

------

### 第47题（图4）

**解析：**

- 

  在 Java Web 中，所有的过滤器（Filter）都必须直接或间接实现 `javax.servlet.Filter`接口。

- 

  `HttpFilter`是 Spring 框架中的类，不是 Servlet 规范中的标准接口。

**答案：A**

------

### 第46题（图5）

**解析：**

- 

  A选项：`getRealPath("/")`方法用于获取当前 Web 应用在服务器文件系统上的真实路径，正确。

- 

  B选项：`getInitParameter()`是 `ServletContext`的方法，用于获取 `web.xml`中配置的 `<context-param>`全局参数，正确。

- 

  C选项：**错误**。`ServletContext`对象是在 Web 应用启动时创建的，对整个 Web 应用而言是唯一的，被所有用户共享，而不是每个用户独有一个。

- 

  D选项：`ServletContext`作为域对象，其作用域是整个 Web 应用，数据在所有用户间共享，正确。

- 

  题目要求选择“描述确”（应为“正确”）的，A、B、D 都看似正确，但单选题通常只有一个最佳答案。C 选项的描述明显错误，因此排除 C。A 和 B 都是正确的描述，但结合常见考题，A 选项是 `ServletContext`非常典型的应用场景，且描述完全准确。

**答案：A**

------

### 第45题（图6）

**解析：**

- 

  JSP 四大作用域从小到大依次为：**pageContext**（页面级别）< **request**（请求级别）< **session**（会话级别）< **application**（应用级别）。

- 

  其中作用域最大的是 `application`。

**答案：C**

------

### 第44题（图7）

**解析：**

- 

  A选项：`getServletContext()`是 `ServletConfig`接口中定义的方法，用于获取 `ServletContext`对象。

- 

  B选项：`getInitParameter()`是 `ServletConfig`接口中定义的方法，用于获取当前 Servlet 的初始化参数。

- 

  C选项：`getParameter()`是 `ServletRequest`接口中定义的方法，用于获取客户端请求参数，不属于 `ServletConfig`接口。

- 

  D选项：`getServletName()`是 `ServletConfig`接口中定义的方法。

**答案：C**

------

### 第43题（图8）

**解析：**

- 

  A选项：将 Web 项目放在 Tomcat 的 `webapps`目录下即可完成部署，正确。

- 

  B选项：可以将 JavaWeb 项目打包为 `.war`(Web Archive) 文件进行部署，正确。

- 

  C选项：Tomcat 的默认端口确实是 8080，正确。

- 

  D选项：**错误**。JavaWeb 项目打包后的扩展名是 `.war`，而 `.jar`是普通的 Java 类库归档文件。

**答案：D**

------

### 第42题（图9）

**解析：**

- 

  `request.getRequestDispatcher("a.jsp")`获取请求转发器。

- 

  `dispatcher.forward(request, response)`执行转发操作。

- 

  转发（Forward）是服务器内部行为，将请求从一个资源（如 Servlet）转发到服务器内部的另一个资源（如 a.jsp），客户端地址栏不变。

- 

  A、B 选项描述的是“重定向”（Redirect），与代码不符；D 选项方向反了。

**答案：C**

------

### 第41题（图10）

**解析：**

- 

  在 JSP 中，定义成员方法（全局方法）必须使用 **JSP 声明** 标签。

- 

  JSP 声明的语法是：`<%! Java代码 %>`。

- 

  观察选项，只有 A 选项的结构最接近 `<%! %>`（尽管图片中显示为 `<$ \%!=(string=...) \%!>`，这明显是 OCR 识别错误或图片显示异常，其本意就是指 `<%! %>`标签）。

**答案：A**

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=b25128841f4b66d6ef838bb4b4c6fcd5_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=59634edaec4fb9f995e6bb8ec0ad8f04_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=9e730c3ac03c77474f6c1c5877e2c863_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=e6b6eead48f3dbf07ebfffbd7f286945_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=29d3e42e903c14d54bd9b44a22cdea06_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=f9fcee3bae963eff2191938edbc55152_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=92266d6a27231e910ae4f52304087f9a_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=01ddb0992f4f3047727e072bce895448_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=a2a3df7d92a5d1dcb9d4648c96783c96_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=7511ce390ef78239b67a4606214ba6c1_54)

以下是针对您上传的图片中题目的详细解答：

### 图1（第60题）

**解析：**

- 

  在 JSP 中，作用域从小到大依次为：

  - 

    **pageContext**：页面上下文，作用范围最小，只在当前 JSP 页面有效。

  - 

    **request**：请求作用域，在一次请求/响应过程中有效。

  - 

    **session**：会话作用域，在一个用户会话期间有效。

  - 

    **application**：应用作用域，作用范围最大，在整个 Web 应用运行期间有效。

- 

  选项 A 中的 `page`是 JSP 隐式对象，不是作用域名（作用域名是 `pageContext`）；选项 C 顺序错误；选项 D 是 EL 表达式中的隐式对象，不是 JSP 的作用域名称。

**答案：B**

------

### 图2（第59题）

**解析：**

- 

  题干代码：`<%@ page ... errorPage="error.jsp" isErrorPage="false" %>`

- 

  A选项：**错误**。当一个页面设置了 `errorPage`属性时，并不强制要求必须设置 `isErrorPage`属性。`isErrorPage`默认值为 `false`，可以不写。

- 

  B选项：**错误**。`exception`对象是 JSP 的隐式对象之一，但它**仅在 `isErrorPage="true"`的页面中才可用**。当前页面 `isErrorPage="false"`，因此不能使用 `exception`对象。

- 

  C选项：正确。设置 `errorPage="error.jsp"`后，当前页面发生异常时会自动跳转到 `error.jsp`。

- 

  D选项：正确。`error.jsp`作为错误处理页面，必须设置 `isErrorPage="true"`才能接收和处理异常。

**答案：A** (注：题目要求选错误的，A 和 B 似乎都错，但单选题通常只有一个最佳答案。A 选项关于“必须”的描述过于绝对，是明显的错误；B 选项在特定语境下可能被误解，但严格来说也是错的。根据常见考题套路，此题通常选 A。)

------

### 图3（第58题）

**解析：**

- 

  本题考查 JSP `page`指令的属性。

- 

  `isErrorPage`属性用于声明当前页面是否为错误处理页面。

- 

  当 `isErrorPage="true"`时，该页面可以使用内置的 `exception`对象来处理异常。

- 

  A选项 `pageEndcoding`属性用于设置页面编码；B选项 `info`属性用于设置页面信息；D选项 `errorPage`属性用于指定当前页面出错时跳转的页面，而非声明自身为错误页。

**答案：C**

------

### 图4（第57题）

**解析：**

- 

  JSTL（JavaServer Pages Standard Tag Library）中用于循环遍历集合或数组的标签是 `<c:forEach>`。

- 

  `<c:every>`和 `<c:item>`不是标准的 JSTL 标签。

**答案：D**

------

### 图5（第56题）

**解析：**

- 

  A选项：`<%! String name="Jack"; %>`是 JSP 声明，语法正确。

- 

  B选项：`<%! public void say(){System.out.println("HelloWorld");} %>`是 JSP 声明，语法正确（注意图片中 `say(`后面可能有 OCR 识别缺失，但不影响判断）。

- 

  C选项：`<%= 10/2 %>`是 JSP 表达式，用于输出表达式的值，语法正确。

- 

  D选项：`<%! String name = "Jack"; %>`是 JSP 声明，语法正确。

- 

  **注意**：如果图片中 D 选项写成了 `<%!! String name = "Jack"; %>`（双感叹号），则属于语法错误，无法编译。但根据常规题库，此题通常考察 `<%! %>`和 `<% %>`的区别，或者考察变量声明。如果所有选项看起来都对，可能是题目有误。但从提供的文本看，A、C、D 都使用了正确的标签，B 选项如果方法体不完整也会报错。**最可能的错误选项是 B**，因为它的方法定义在大括号和分号上可能存在 OCR 识别不清导致的语法问题。

**答案：B** (基于常见考点推断)

------

### 图6（第55题）

**解析：**

- 

  `page`指令（`<%@ page ... %>`）用于定义整个 JSP 页面的属性，如 `language`、`import`、`contentType`、`errorPage`等。

- 

  A选项是 `<jsp:include>`动作的功能；C选项是 `<%@ include %>`指令或 `<jsp:include>`动作的功能；D选项与 `page`指令无关。

**答案：B**

------

### 图7（第54题）

**解析：**

- 

  在 MVC 设计模式中：

  - 

    **Model（模型）**：由 JavaBean 或 EJB 充当，负责业务数据和业务逻辑。

  - 

    **View（视图）**：由 JSP 页面或 HTML 充当，负责数据显示。

  - 

    **Controller（控制器）**：由**一个或多个 Servlet 对象**充当，负责接收请求、调用模型、选择视图。

**答案：A**

------

### 图8（第53题）

**解析：**

- 

  在 Servlet 或 JSP 中，设置请求体（Request Body）的字符编码以防止中文乱码，正确的方法是 `request.setCharacterEncoding("UTF-8")`。

- 

  A、B 选项方法名错误；D 选项是设置响应的内容类型。

**答案：C**

------

### 图9（第52题）

**解析：**

- 

  Servlet 生命周期方法：

  - 

    `init()`：初始化，只执行一次。

  - 

    `service()`：处理请求，每次请求调用。

  - 

    `doPost()`：处理 POST 请求。

  - 

    `destroy()`：销毁方法，**当服务器关闭或 Servlet 被卸载时调用**，用于释放资源。

**答案：D**

------

### 图10（第51题）

**解析：**

- 

  代码中：`request.setAttribute("login", map);`，意味着在 EL 表达式中应使用 `${login}`来获取该 Map。

- 

  Map 中的 key 是 `"student.name"`，包含特殊字符 `.`。

- 

  在 EL 表达式中，如果 Map 的 key 包含 `.`，必须使用**方括号 `["key"]`** 的语法来访问，而不能使用点号 `.`。

- 

  因此，正确的表达式是 `${login["student.name"]}`。

**答案：A**

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=d644ed9738cd9b4111440cc460e9500b_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=586d2128c3f0bd16ac7fb7cf5bb1804e_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=625ba1af111473013c1697d35b53d880_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=4e6f9c702aa0cba11497bf0c7accf8c8_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=34497216926e41c99e78e726116d05f9_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=70a7bf2380acef973df073403e44f216_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=dc9d48b03798a18b998b1daae6b45a2e_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=8f6c48beb57a331f954cc2372f76909d_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=98b74b7844164d9e252345e3a5f557a8_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=b28b8fc85241c10bc7bfae443e6411fd_54)

以下是针对您上传的多选题和单选题的解答：

### 图1（第70题）

**解析：**

- 

  A选项：Web 应用的部署描述符文件名确实是 `web.xml`，正确。

- 

  B选项：在 Servlet 3.0 及以上版本中，支持使用 `@WebServlet`注解来配置和部署 Servlet，无需在 `web.xml`中配置，正确。

- 

  C选项：`server.xml`是 Tomcat 服务器的配置文件，不是 Web 应用部署文件，错误。

- 

  D选项：`web.xml`文件位于 Web 应用目录下的 `WEB-INF`子目录中，正确。

**答案：ABD**

------

### 图2（第69题）

**解析：**

- 

  A选项：**错误**。ServletConfig 对象是在 Servlet **初始化时**（即 `init()`方法调用时）由容器创建的，而不是在初始化“之前”。

- 

  B选项：ServletConfig 对象的主要作用是封装 Servlet 的初始化参数（`<init-param>`），正确。

- 

  C选项：**错误**。每个 Servlet 都有自己独立的 ServletConfig 对象，不共享。

- 

  D选项：一个 Servlet 实例对应唯一的一个 ServletConfig 对象，正确。

**答案：BD**

------

### 图3（第68题）

**解析：**

- 

  A选项：ServletContext 代表整个 Web 应用，所有 Servlet 共享该对象，正确。

- 

  B选项：ServletContext 的中文翻译即为“Servlet 上下文”，正确。

- 

  C选项：可以通过 `getInitParameter()`方法获取 `web.xml`中配置的全局初始化参数，正确。

- 

  D选项：服务器会为每个 Web 应用（工程）创建一个唯一的 ServletContext 对象，正确。

**答案：ABCD**

------

### 图4（第67题）

**解析：**

- 

  ServletConfig 接口中定义了以下四个方法：

  - 

    `getServletName()`：获取 Servlet 的名称。

  - 

    `getServletContext()`：获取 ServletContext 对象。

  - 

    `getInitParameter(String name)`：获取指定名称的初始化参数。

  - 

    `getInitParameterNames()`：获取所有初始化参数的名称枚举。

- 

  A、B、C、D 四个选项均为该接口下的方法。

**答案：ABCD**

------

### 图5（第66题）

**解析：**

- 

  HttpServletRequest 接口中获取请求参数的方法包括：

  - 

    `getParameter(String name)`：获取指定名称的单值参数。

  - 

    `getParameterValues(String name)`：获取指定名称的多值参数（如复选框）。

  - 

    `getParameterNames()`：获取所有参数名的枚举。

  - 

    `getParameterMap()`：获取所有参数名和参数值的 Map 集合。

- 

  A、B、C、D 四个选项均正确。

**答案：ABCD**

------

### 图6（第65题）

**解析：**

- 

  FilterConfig 接口提供了获取过滤器配置信息的方法：

  - 

    `getServletContext()`：获取 Servlet 上下文对象。

  - 

    `getInitParameter(String name)`：获取过滤器的初始化参数。

  - 

    `getFilterName()`：获取过滤器的名称。

  - 

    `getInitParameterNames()`：获取所有初始化参数的名称枚举。

- 

  A、B、C、D 四个选项均正确。

**答案：ABCD**

------

### 图7（第64题）

**解析：**

- 

  A选项：服务器端创建 Cookie 后，需要通过 `response.addCookie(cookie)`将其发送给客户端，正确。

- 

  B选项：服务器端通过 `request.getCookies()`方法获取客户端发送过来的所有 Cookie，正确。

- 

  C选项：**错误**。Cookie 数据是保存在**客户端**的，Session 数据才是保存在服务器端的。

- 

  D选项：创建 Cookie 对象使用 `new Cookie("key", "value")`构造方法，正确。

**答案：ABD**

------

### 图8（第63题）

**解析：**

- 

  题目要求选择 FilterConfig 中获取初始化参数名称的方法。

- 

  A选项 `getFilterName()`：获取过滤器名称。

- 

  B选项 `getServletContext()`：获取 Servlet 上下文。

- 

  C选项 `getInitParameter(String name)`：获取指定名称的初始化参数值。

- 

  D选项 `getInitParameterNames()`：获取所有初始化参数的名称枚举。

**答案：D**

------

### 图9（第62题）

**解析：**

- 

  代码中 `OneServlet`类定义了一个**私有（private）的无参构造方法**。

- 

  根据 Java 语法规则，如果一个类显式定义了构造方法（无论访问修饰符是什么），编译器就不会再提供默认的无参构造方法。

- 

  由于构造方法是 `private`的，除了 `OneServlet`类自身以外，外部类（包括 Servlet 容器）都无法通过 `new OneServlet()`来实例化该对象。

- 

  因此，该 Servlet 不能被容器实例化。

**答案：C**

------

### 图10（第61题）

**解析：**

- 

  题目中的“JSF编译指令”应该是 OCR 识别错误，实际应为 **JSP 指令（Directive）**。

- 

  JSP 指令的语法格式是：`<%@ directive attribute="value" %>`

- 

  它以 `<%@`开始，以 `%>`结束。

- 

  选项 B 中的描述 `<%!@ ... %!>`包含了 OCR 识别产生的乱码 `(MISSING)`，但其本意是指 `<%@ ... %>`。

- 

  选项 A 是 JSP 动作标签（Action）的语法；C 是 JSP 声明（Declaration）的语法；D 是 HTML 标签的语法。

**答案：B**

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=5b5533186d3d992bc09c47bacd70abe0_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=bf4c511d7e9ebee324185c083b5759bb_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=b007cd18374f56edc77a3849fef35751_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=cc699ca2153e1e1d7d93f5c42e5aba31_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=e7e16ab76616daf4b000b062181928ed_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=9b0e8a3c3c44cd3d03a7423267ba80fd_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=3f6fc56a1515164d5be021bbfcb9e609_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=8f113c717c6830e3411b2669435205e6_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=5809196e84aadb8fb7b81e6f5a90869a_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=0b3e011390dcdaf55e35fe11a0e83f9d_54)

以下是针对您上传的10张图片中多选题的解答：

### 图1（第80题）

**解析：**

- 

  在 JSP 中出现中文乱码，通常与字符编码设置有关。

- 

  **B `pageEncoding`**：指定 JSP 页面本身的编码格式，容器在翻译 JSP 时会使用该编码读取源文件。

- 

  **D `contentType`**：指定响应内容的 MIME 类型和字符集（如 `text/html; charset=UTF-8`），影响浏览器如何解析响应流。

- 

  A `language`指定脚本语言（如 Java）；C `extends`指定 JSP 继承的父类，均与乱码无关。

**答案：BD**

------

### 图2（第79题）

**解析：**

- 

  A选项：`addCookie()`是 `HttpServletResponse`接口中的方法，但语法应为 `response.addCookie(cookie)`，而不是 `add()`。

- 

  B选项：Cookie 构造方法接收的是 `String key`和 `String value`，而不是 `Object value`，因此该写法错误。

- 

  C选项：语法错误，不存在 `add Cookie.cookie()`这种写法。

- 

  D选项：虽然图片中未显示完整，但 `Cookie cookie = new Cookie(`是创建 Cookie 对象的正确起始语法。在常见的此类考题中，通常会有一个选项是 `Cookie cookie = new Cookie("name", "value");`，结合选项设置，D 是最接近正确的创建语句。

**答案：D** (注：严格来说，只有 D 选项的起始部分是正确的，其他选项均有明显语法错误)

------

### 图3（第78题）

**解析：**

- 

  A选项：通过 `request.getParameter()`等方法可以获取客户端提交的参数信息，正确。

- 

  B选项：通过 `request.getHeader()`等方法可以获取客户机请求头的信息，正确。

- 

  C选项：HttpServletRequest **无法直接获取**客户端的 MAC 物理地址，错误。

- 

  D选项：通过 `request.getRequestURI()`可以获取请求的统一资源标识符（URI），正确。

**答案：ABD**

------

### 图4（第77题）

**解析：**

- 

  A选项：Servlet 运行在服务器端（Servlet Container 中），正确。

- 

  B选项：Servlet 可以通过 `response.getWriter().write("<html>...</html>")`向浏览器发送 HTML 标签，错误。

- 

  C选项：Servlet 的生命周期包括：加载实例化 -> 初始化（init）-> 服务（service）-> 销毁（destroy），正确。

- 

  D选项：在浏览器地址栏直接输入 URL 发起的是 **GET** 请求，会调用 `doGet()`方法，而不是 `doPost()`，错误。

**答案：AC**

------

### 图5（第76题）

**解析：**

- 

  Filter（过滤器）接口中定义的三个核心生命周期方法分别是：

  - 

    `init(FilterConfig config)`：初始化

  - 

    `doFilter(ServletRequest, ServletResponse, FilterChain)`：执行过滤

  - 

    `destroy()`：销毁

- 

  `service()`是 Servlet 接口中的方法，不是 Filter 的。

**答案：ABC**

------

### 图6（第75题）

**解析：**

- 

  HttpServletRequest 接口中用于操作请求域（Request Scope）数据的方法包括：

  - 

    `setAttribute(String name, Object o)`：设置属性

  - 

    `getAttribute(String name)`：获取属性

  - 

    `removeAttribute(String name)`：移除属性

- 

  `getInitParameter()`用于获取 Servlet 的初始化参数，不属于操作请求数据的 API。

**答案：ACD**

------

### 图7（第74题）

**解析：**

- 

  `setAttribute()`方法是域对象（Domain Object）的核心方法，用于向作用域中存储数据。

- 

  A `ServletContext`（应用域）、B `HttpSession`（会话域）、D `HttpServletRequest`（请求域）都具有 `setAttribute()`方法。

- 

  C `ServletConfig`对象用于获取配置信息（如 `getInitParameter()`），它没有 `setAttribute()`方法。

**答案：ABD**

------

### 图8（第73题）

**解析：**

- 

  自定义 Filter 必须实现 `javax.servlet.Filter`接口。

- 

  该接口中包含的生命周期方法有：`init()`, `doFilter()`, `destroy()`。

- 

  `service()`是 Servlet 接口的方法。

**答案：ABC**

------

### 图9（第72题）

**解析：**

- 

  A选项：**错误**。如果在 `doFilter`方法中不调用 `chain.doFilter(request, response)`，请求将被拦截，服务器不会自动放行，客户端将收不到响应。

- 

  B选项：可以通过 `FilterChain`对象获取过滤链的相关信息（如下一个过滤器），正确。

- 

  C选项：调用 `chain.doFilter()`是将请求传递给下一个过滤器或目标资源（Servlet/JSP）的标准做法，正确。

- 

  D选项：过滤器可以在 `doFilter`方法中对 `request`和 `response`进行修改后再放行，正确。

**答案：BCD**

------

### 图10（第71题）

**解析：**

- 

  JSP 隐式对象 `out`是 `JspWriter`类的实例。

- 

  A `out.println()`：输出内容并换行，正确。

- 

  B `out.write()`：输出字符或字符串，正确。

- 

  C `out.print()`：输出内容但不换行，正确。

- 

  D `out.writeln()`：**错误**。`JspWriter`类中没有 `writeln()`方法。

**答案：ABC**

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=1279c19ee8fb2b23d3653a0e512d25f0_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=c6fd960a75ab509aa6b706f9e195c848_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=d2fecfaa5f9b5cfaaf54d3f04dbbefac_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=95d64a82306362284afe3a076842d6f9_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=2849223f1b8f9d0734dfe01b19184fe6_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=984fb832edbc6abdb1a3bf88d7322057_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=cdcbeaba9c7b0510eb95d1650d99e480_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=66b1205fbf55008525605c022405dca9_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=d7c62c01c5b3bb354c5551ac29880aef_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=3753a9980cfec9d83b4cb39bd1848c82_54)

以下是针对您上传的10张图片中填空题和多选题的解答：

### 图1（第90题）

**解析：**

- 

  文章点击率属于**应用级别**的数据，需要被所有用户共享，并且在服务器运行期间一直存在。

- 

  `application`对象（即 `ServletContext`）的作用域是整个 Web 应用，最适合保存全局统计数据。

**答案：application**

------

### 图2（第89题）

**解析：**

- 

  保存会话的两种技术是 **Cookie** 和 **Session**。

- 

  Cookie 是客户端技术（数据保存在浏览器）；

- 

  Session 是服务器端技术（数据保存在服务器内存或持久化存储中）。

**答案：Session**

------

### 图3（第88题）

**解析：**

- 

  JSP 的 9 大内置对象包括：`request`, `response`, `session`, `application`, `out`, `page`, `config`, `exception`, `pageContext`。

- 

  题目中已给出 `request`和 `config`, `exception`，空缺的五个分别是 `response`, `session`, `application`, `out`, `pageContext`。

**答案：response、session、application、out、pageContext**

*(注：顺序通常不影响得分，但一般按常用顺序排列)*

------

### 图4（第87题）

**解析：**

- 

  在 Tomcat 容器中，JSP 页面在第一次被访问时，会被翻译（转译）成 Java 源文件（Servlet），然后编译成 `.class`字节码文件。

- 

  这些生成的文件默认存储在 Tomcat 安装目录下的 `work`目录中。

**答案：work**

------

### 图5（第86题）

**解析：**

- 

  JSP 的三大指令（Directive）是：

  - 

    **page**：用于定义页面属性（如 contentType, import 等）。

  - 

    **include**：用于包含其他文件。

  - 

    **taglib**：用于引入标签库（如 JSTL）。

**答案：page、include、taglib**

*(注：题目空格数量不确定，通常填这三个)*

------

### 图6（第85题）

**解析：**

- 

  要在 JSP 中使用 JSTL（JavaServer Pages Standard Tag Library）标签库，必须使用 **taglib** 指令来声明。

- 

  语法示例：`<%@ taglib uri="..." prefix="c" %>`

**答案：taglib**

------

### 图7（第84题）

**解析：**

- 

  题干提到“重写了其父类的 service() 方法”。

- 

  A 选项 `HttpServlet`：继承了 `GenericServlet`，其父类中有 `service()`方法可供重写。

- 

  B 选项 `GenericServlet`：实现了 `Servlet`接口，接口中只有 `service()`的定义，没有具体实现，因此不存在“重写父类的 service()”这一说法（因为父类没实现）。

- 

  C、D 选项是接口，不是类，不能作为父类继承。

- 

  因此，如果该 Servlet 重写了 `service()`，其父类最有可能是 `HttpServlet`。

**答案：A**

------

### 图8（第83题）

**解析：**

- 

  A选项：在 `ServletContext`的路径中，`/`确实代表 Web 应用的根目录（上下文环境根），正确。

- 

  B选项：`getRealPath("/")`方法的作用就是根据虚拟路径获取服务器文件系统中的绝对路径，正确。

- 

  C选项：`getResource("/")`返回的是一个 `URL`对象，正确。

- 

  D选项：调用 `getRealPath`和 `getResource`时，参数路径确实必须以 `/`开头，正确。

**答案：ABCD**

------

### 图9（第82题）

**解析：**

- 

  A选项：**错误**。请求转发（Forward）是服务器内部行为，重定向（Redirect）是客户端行为，两者网络协议执行机制完全不同。

- 

  B选项：通过设置响应头 `Refresh`可以实现定时刷新或跳转，正确。

- 

  C选项：`sendRedirect()`是 HttpServletResponse 中实现重定向的标准方法，正确。

- 

  D选项：`getRequestDispatcher().forward()`是实现请求转发的标准方法，正确。

**答案：BCD**

------

### 图10（第81题）

**解析：**

- 

  A选项：继承 `HttpServlet`类是编写 Servlet 最常用、最推荐的方式，正确。

- 

  B选项：Servlet 是 Java 类，类名结尾叫什么无所谓，只要符合 Java 命名规范并通过配置（注解或 web.xml）告诉容器即可，技术上可行，正确。

- 

  C选项：继承 `GenericServlet`类（它是 Servlet 接口的通用实现）也是可以的，正确。

- 

  D选项：直接实现 `Servlet`接口也是合法的，只是需要自己实现所有方法，正确。

**答案：ABCD**

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=e2cb59126edf46f0cc7199084c09d927_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=7a8a6ad99ed98f743c75d2f4aba6bf6a_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=878e720a61b8537e4bea8f38dfe2ee73_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=4e68345337acde0b7f5d37ec4931109d_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=9fbf4dee0ae911fb57b7117d68e4e1fd_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=22aa14dd1252162c209b466b8da786c4_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=f19e2f98880470a7ab083c54f6ec09ac_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=0a7e42bef3ae27928b81768759d1dfb9_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=ac845070770cfda4f4a833e9d05e3cbf_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=7a3eebaa1982b461fd2da224a8c2ccae_54)

以下是针对您上传的10张图片中填空题的解答：

### 图1（第100题）

**解析：**

- 

  在 Java Web 开发中，Servlet 本质上就是一个特殊的 Java 类。

- 

  创建一个 Servlet 类，最直接的方式是使用 `@WebServlet`注解（Servlet 3.0+）或者继承 `HttpServlet`类。

**答案：@WebServlet** (或 **extends HttpServlet**)

------

### 图2（第99题）

**解析：**

- 

  在 JSP 中，创建 JavaBean 对象的动作标签是 `<jsp:useBean>`。

- 

  其标准用法是：`<jsp:useBean id="对象名" class="类的全限定名" scope="作用域"/>`

**答案：`<jsp:useBean>`**

------

### 图3（第98题）

**解析：**

- 

  JSP 脚本元素（Scripting Elements）根据作用不同分为三种：

  1. 

     **脚本片段（Scriptlet）**：`<% Java代码 %>`—— 用于编写可执行逻辑。

  2. 

     **表达式（Expression）**：`<%= 表达式 %>`—— 用于向页面输出结果。

  3. 

     **声明（Declaration）**：`<%! 声明成员 %>`—— 用于声明全局变量或方法。

**答案：脚本片段（或Scriptlet）、表达式（或Expression）、声明（或Declaration）**

------

### 图4（第97题）

**解析：**

- 

  JSP 四大域对象（pageContext, request, session, application）都提供了统一的方法来操作属性：

  - 

    获取数据：`getAttribute(String name)`

  - 

    删除数据：`removeAttribute(String name)`

**答案：getAttribute()、removeAttribute()**

------

### 图5（第96题）

**解析：**

- 

  Tomcat 服务器的默认端口号是 **8080**。

- 

  修改端口号需要编辑 Tomcat 安装目录下 `conf`文件夹中的 **`server.xml`** 文件。

- 

  部署项目时，将 `.war`包放入 Tomcat 的 **`webapps`** 目录中，启动时会自动解压部署。

**答案：8080、server.xml、webapps**

------

### 图6（第95题）

**解析：**

- 

  JSP 的执行过程分为两个主要时期：

  1. 

     **翻译（Translation）时期**：JSP 文件被翻译成 Java 源文件（Servlet）。

  2. 

     **编译（Compilation）时期**：Java 源文件被编译成 `.class`字节码文件。

**答案：翻译（或转译）、编译**

------

### 图7（第94题）

**解析：**

- 

  与第96题考点相同。

- 

  Tomcat 默认端口是 **8080**。

- 

  修改端口在 **`conf/server.xml`** 文件中进行。

**答案：8080、server.xml**

------

### 图8（第93题）

**解析：**

- 

  Servlet 的生命周期由容器（如 Tomcat）管理，包含三个核心方法：

  1. 

     **`init()`**：初始化方法，只执行一次。

  2. 

     **`service()`**：服务方法，每次请求都会执行（通常由 `doGet/doPost`处理）。

  3. 

     **`destroy()`**：销毁方法，服务器关闭时执行。

**答案：init()、service()**

------

### 图9（第92题）

**解析：**

- 

  获取 HTML 表单（Form）提交的数据，需要使用 `request`对象的 `getParameter()`方法。

- 

  语法：`String value = request.getParameter("inputName");`

**答案：getParameter()**

------

### 图10（第91题）

**解析：**

- 

  在处理 POST 请求时，为了防止中文乱码，需要在获取参数之前设置请求体的编码。

- 

  使用 `request.setCharacterEncoding("UTF-8")`可以有效解决中文乱码问题。

**答案：UTF-8**

查看全部(2)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=711393c52c2ce7c1d5fe7a49b8830d6b_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=7a9008fac42dcd5412679f22c5578fc7_54)

### 图1（第14题）

**解析：**

- 

  在 Servlet 或 JSP 中，处理 POST 请求时防止中文乱码，需要设置请求体的字符编码。

- 

  正确的方法是使用 `request.setCharacterEncoding("UTF-8")`。

- 

  A选项方法名错误；B选项方法名错误（正确的是 `setCharacterEncoding`）；D选项方法名错误（`setCharset`通常用于响应 Response）。

- 

  C选项虽然文本显示不全，但它是唯一包含正确方法名 `setCharacterEncoding`的选项。

**答案：C**

------

### 图2（第13题）

**解析：**

- 

  HTTP 状态码的含义：

  - 

    **404 Not Found**：表示服务器无法找到请求的资源，即用户请求的资源不可用。

  - 

    303：表示重定向（See Other）。

  - 

    202：表示请求已接受但尚未处理完成。

  - 

    101：表示协议切换（Switching Protocols）。

- 

  题目问“资源不可用”，对应的是 404。

**答案：D**





### 多选题部分

**第30题：ZooKeeper在HBase中的作用包括？**

- 

  **解析**：在HBase集群中，ZooKeeper扮演着至关重要的协调者角色。它负责监控Region Server的状态（当Region Server宕机时通知HMaster），参与维护集群的元数据（如ROOT表和META表的位置信息），并且利用ZooKeeper的分布式锁机制来完成HMaster的主节点选举。ZooKeeper本身并不负责存储HBase的实际业务数据，实际数据存储在HDFS上。

- 

  **正确答案**：B、C、D

**第29题：HBase数据模型中的概念包括？**

- 

  **解析**：HBase的数据模型是一套分布式的、面向列（Column Family）的数据库系统。其核心概念包括：Row（行键，作为数据的唯一标识，按字典序排列）、Column Family（列族，是列的集合，物理上存储在同一个文件中）、Time Stamp（时间戳，用于区分同一行同一列的不同版本数据），以及Name Space（命名空间，用于逻辑隔离不同的表）。

- 

  **正确答案**：A、B、C、D

**第28题：HBase架构体系的组成部分包括？**

- 

  **解析**：HBase的整体架构主要由以下几个核心组件构成：HMaster（主节点，负责表的创建、删除以及Region的分配与负载均衡）、Region Server（从节点，负责处理用户的读写请求并存储实际数据）、ZooKeeper（协调服务，负责集群状态同步和主节点选举），以及HBase Client（客户端，负责与HMaster和Region Server进行通信）。

- 

  **正确答案**：A、B、C、D

**第27题：以下属于HBase特点的有？**

- 

  **解析**：HBase作为一个分布式、可扩展的列式存储系统，具备海量存储能力（可以存储PB级别甚至EB级别的数据），能够支持极高的并发访问，并且由于其列式存储的特性，在横向扩展上非常容易，即“极易扩展”。

- 

  **正确答案**：A、B、C、D

**第26题：HMaster的职责包括？**

- 

  **解析**：HMaster主要负责HBase集群的管理工作。它的职责包括管理数据库表（如表结构的修改）、监控Region Server的状态（发现故障节点）、进行Region的分配（将新生成的Region分配给合适的Region Server）。而实际的用户读写请求是由Region Server来处理的，HMaster不直接参与。

- 

  **正确答案**：B、C、D

------

### 单选题部分

**第25题：HBase适合存储哪种级别的数据？**

- 

  **解析**：HBase设计的目标就是为了解决海量结构化/半结构化数据的存储问题，它能够很好地支持PB级别（Petabyte，千万亿字节）的海量数据存储，这是其最核心的应用场景之一。

- 

  **正确答案**：A

**第24题：HBase的'稀疏'特点主要体现在哪里？**

- 

  **解析**：HBase的“稀疏”是指，在表中，如果某一行某一列的单元格中没有存储任何实际数据（即为空），那么该单元格在底层存储中根本不会占用任何磁盘空间。这使得HBase非常适合存储具有大量空值的宽表。

- 

  **正确答案**：C

**第23题：HBase表中数据的存储顺序是？**

- 

  **解析**：HBase中的数据是按照RowKey（行键）的字典序（Lexicographic Order）进行连续存储的。这意味着RowKey的设计对查询性能有决定性影响，相邻的行键通常会被分配到同一个Region中进行存储。

- 

  **正确答案**：C

**第22题：HBase适合存储哪种级别的数据？**

- 

  **解析**：同第25题，HBase的核心优势在于处理大规模数据，适合存储PB级别的数据。

- 

  **正确答案**：B

**第21题：HBase通过哪个组件完成HMaster的选举？**

- 

  **解析**：在HBase集群启动时，多个HMaster实例会通过ZooKeeper提供的分布式锁机制（如临时节点）来竞争主节点地位，最终由ZooKeeper选出一个Active HMaster。

- 

  **正确答案**：B















### 第1题 (3.0分) HBase中存储数据的底层文件系统是？

**分析**：HBase 是一个构建在 Hadoop 文件系统之上的分布式数据库。HBase 本身不直接负责底层数据的持久化存储，而是将数据存储在 HDFS（Hadoop Distributed File System）中。NTFS 和 Ext4 是单机操作系统常用的磁盘文件系统，Ceph 是另一种分布式存储系统，均不是 HBase 默认的底层文件系统。

**答案**：B HDFS

### 第2题 (3.0分) HBase中用户默认使用的命名空间是？

**分析**：在 HBase 中，命名空间（Namespace）类似于关系型数据库中的 Schema。当一个表被创建而没有显式指定命名空间时，它会被自动分配到 `default`（默认）命名空间下。而 `hbase`命名空间是系统保留的，用于存放 HBase 内部的管理表。

**答案**：A default

### 第3题 (3.0分) HBase的稀疏特性指的是？

**分析**：HBase 是一个列式存储数据库，其“稀疏”特性是指，在每一行数据中，如果某个列（或列族）没有值，那么 HBase 就不会在磁盘上为其分配存储空间（即不存储空值），从而节省了大量的存储空间。

**答案**：C 列数据为空时不占用存储空间

### 第4题 (3.0分) HBase Client维护缓存的主要目的是什么？

**分析**：HBase Client 会维护一份元数据缓存（包括 Region 的位置信息等）。当客户端发起读写请求时，如果缓存中已有对应的 Region 地址，就可以直接连接对应的 RegionServer 进行访问，而无需每次都去询问 Master 或 Meta 表。这样做的主要目的是减少网络交互，加速 HBase 的访问速度。

**答案**：B 加速HBase访问

### 第5题 (3.0分) HBase的'列式存储'实际指的是什么？

**分析**：HBase 虽然在物理存储上是以行（Row）为单位连续写入的，但在逻辑结构和访问方式上，它是按照“列族（Column Family）”来组织数据的。不同的列族的数据会被分别存储在不同的文件（HFile）中。因此，HBase 的“列式存储”特性主要体现在它按列族来存储和检索数据，而不是传统意义上的按单个列存储。

**答案**：B 按列族存储数据

### 第6题 (3.0分) HBase 中由 {rowkey, column Family:column Qualifier, timestamp}唯一确定的单元是？

**分析**：在 HBase 的数据模型中，一个具体的、不可再分的数据存储单元是由 RowKey（行键）、Column Family（列族）、Column Qualifier（列限定符）以及 Timestamp（时间戳）共同唯一确定的，这个最小的数据单元在 HBase 中被称为 Cell（单元格）。

**答案**：A Cell

### 第7题 (3.0分) HBase的列存储实际上指的是？

**分析**：同第5题，HBase 的数据模型是基于列族组织的。虽然它在物理磁盘上的存储块可能包含同一行内不同列的数据（为了利用局部性），但从逻辑架构和数据访问的角度来看，它是按照列族来划分和管理的，因此通常被称为列族存储。

**答案**：B 列族存储

### 第8题 (3.0分) HBase中直接处理用户读写请求并与HDFS交互存储数据的组件是？

**分析**：HBase 的架构中，RegionServer 是真正承载数据和处理业务逻辑的服务端节点。它负责响应客户端的读写请求，将数据写入 HDFS，并从 HDFS 读取数据返回给客户端。HMaster 负责集群管理，Client 是请求发起方，ZooKeeper 负责协调服务。

**答案**：A Region Server

### 第9题 (3.0分) HBase集群中负责管理整个集群的主节点是？

**分析**：HMaster 是 HBase 集群中的主节点（Master 节点），主要负责整个集群的管理工作，例如 Region 的分配与负载均衡、表的创建与删除、以及监控 RegionServer 的状态等。

**答案**：B HMaster

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=fe9b291e4f0ad34e9b62682546158027_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=281e0e2b500756873ce629710330624a_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=9f6bc2faead65b2d4db0e03cf4f5f3b0_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=37b9e020735caeec50b6356091bdbddd_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=81a9be6fa14e271a9479d930a50d1572_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=ea0722bcbd750c0fb54809682be49cf6_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=12919ec200b8dc5424604c8c94522534_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=27385b945684e138b0239be1a22641fd_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=3abe7a13fa0be779fe8c19b7e31f3ffd_54)

### 第10题 (3.0分) HBase 中负责Region拆分和StoreFile合并的组件是？

**分析**：在 HBase 架构中，`HMaster`作为集群的主节点，主要负责管理 Region 的分配、负载均衡以及执行 Region 的分裂（Split）和 StoreFile 的合并（Compaction）等后台管理操作。RegionServer 主要负责处理客户端的读写请求和数据的本地存储。

**答案**：A HMaster

### 第11题 (3.0分) HMaster不负责以下哪项工作？

**分析**：`HMaster`主要负责集群的宏观管理，如 Region 分配、监控 RegionServer 状态、管理数据库表（DDL 操作）等。而具体的用户读写请求（DML 操作）是由 `RegionServer`直接处理和响应的。

**答案**：A 处理用户读写请求

### 第12题 (3.0分) HBase Client维护缓存的目的是？

**分析**：HBase Client 会在本地维护一份缓存（主要是 Meta 表的缓存），用来记录 Region 的分布信息。当客户端再次发起请求时，可以直接从缓存中获取目标 RegionServer 的地址，从而避免频繁的去查询 ZooKeeper 或 Meta 表，从而加速 HBase 的访问。

**答案**：C 加速HBase访问

### 第13题 (3.0分) 直接对接用户读写请求的节点是？

**分析**：在 HBase 的读写流程中，客户端（HBase Client）发出的读写请求最终会直接落到 `RegionServer`上进行处理。RegionServer 是 HBase 中真正承载数据存储和处理工作负载的节点。

**答案**：C Region Server

### 第14题 (3.0分) HBase在哪一年成为Apache顶级项目？

**分析**：HBase 最初是作为 Hadoop 的一个子项目开发的，后来在 **2010年** 正式升级为 Apache 软件基金会的顶级项目（Top-Level Project）。

**答案**：C 2010年

### 第15题 (3.0分) HBase通过哪个组件实现HMaster的选举和Region Server的状态监控？

**分析**：ZooKeeper 在 HBase 集群中扮演着非常重要的协调者角色。它不仅负责 HMaster 的主备选举，还会实时监控各个 RegionServer 的运行状态，并在发生故障时通知 HMaster 进行相应的处理。

**答案**：D ZooKeeper

### 第16题 (3.0分) HBase成为Apache顶级项目的时间是？

**分析**：同第14题，HBase 是在 **2010年** 成为 Apache 顶级项目的。

**答案**：C 2010年

### 第17题 (3.0分) HBase集群中负责管理Region分配和监控Region Server状态的组件是？

**分析**：`HMaster`是 HBase 集群的大脑，其核心职责之一就是管理 Region 的分配与再分配（在 RegionServer 宕机或负载不均时触发），同时负责监控各个 RegionServer 的健康状态。

**答案**：A HMaster

### 第18题 (3.0分) HBase中默认的用户命名空间是？

**分析**：在 HBase 中，如果用户在创建表时没有显式指定命名空间，该表会被默认创建在 `default`（默认）命名空间下。其他选项中，`hbase`是系统表所在的命名空间。

**答案**：D default

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=a02b6cce2bccc4924b8f7878143168a1_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=53d8fbdafd3d4d6862d0f1642cec6b77_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=9f5aef3f7027caac09347220038e414b_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=5ec7c43d0556b961687eb45820e8e283_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=fd19465c8ecc4eb2253e757df9883944_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=60003d477475abf8e731b465d67f1ab5_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=566d99fed4def5113cb28831b18fbd23_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=8424f12e968e68862e6a4a206c56b6f8_54)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=f22c405f19c963eb369cc55e262c9cb2_54)

### 第19题 (3.0分) HBase表中的数据是按照什么顺序存储的?

**分析**：HBase 是面向列族的分布式数据库，所有数据在物理存储和逻辑排序上，都是严格按照 **RowKey（行键）的字典序（lexicographical order）** 进行排列的。这也是为什么设计 RowKey 时需要特别注意散列性和顺序性的原因。

**答案**：A RowKey的字典顺序

### 第20题 (3.0分) HBase中用于标识数据不同版本的字段是？

**分析**：HBase 支持数据的多版本特性。在 HBase 的数据模型 `{RowKey, ColumnFamily:Qualifier, Timestamp}`中，**Timestamp（时间戳）** 用来区分同一单元格（Cell）的不同版本，默认情况下时间戳越大，代表数据越新。

**答案**：C Time Stamp

### 第21题 (3.0分) HBase通过哪个组件完成HMaster的选举?

**分析**：ZooKeeper 在 HBase 集群中充当“协调者”的角色。它利用自身的临时节点和 Watch 机制，负责在多个 HMaster 候选节点中选举出一个 Active Master，并监控 Master 的状态。

**答案**：B ZooKeeper

### 第22题 (3.0分) HBase适合存储哪种级别的数据？

**分析**：HBase 构建在 HDFS 之上，具有良好的线性扩展能力，能够通过增加节点来应对数据量的增长。它通常被设计用来存储和处理 **PB 级别（Petabyte）** 的海量数据，这是它与传统关系型数据库的一个重要区别。

**答案**：B PB级别

### 第23题 (3.0分) HBase表中数据的存储顺序是?

**分析**：同第19题，HBase 表中所有的数据行都是按照 RowKey 的字典顺序进行排序和存储的。

**答案**：C 按RowKey的字典顺序

### 第24题 (3.0分) HBase的'稀疏'特点主要体现在哪里?

**分析**：HBase 是列式存储数据库，其“稀疏”特性是指：对于一张表中的某一行，如果某些列没有值（即为空），HBase 在物理存储时不会为这些空列分配任何存储空间，这与需要为每个字段预留空间的宽表（如关系型数据库）形成鲜明对比。

**答案**：C 列数据为空时不占用存储空间

### 第25题 (3.0分) HBase适合存储哪种级别的数据?

**分析**：同第22题，HBase 作为海量 NoSQL 数据库，主要面向 PB 级别的大数据存储场景。

**答案**：A PB级别

### 第26题 (5.0分) HMaster的职责包括?

**分析**：

- 

  A 处理用户读写请求：**错误**，这是 RegionServer 的职责。

- 

  B 管理数据库表：**正确**，如建表、删表（DDL 操作）。

- 

  C 监控Region Server状态：**正确**，通过 ZooKeeper 监听 RegionServer 的存活状态。

- 

  D Region分配：**正确**，负责将 Region 分配给具体的 RegionServer 进行管理。

  **答案**：B, C, D

### 第27题 (5.0分) 以下属于HBase特点的有?

**分析**：

- 

  A 极易扩展：**正确**，通过横向增加 RegionServer 节点即可线性扩展。

- 

  B 高并发：**正确**，特别适合高吞吐量的随机读写场景。

- 

  C 列式存储：**正确**，按列族存储数据，支持稀疏结构。

- 

  D 海量存储：**正确**，能够支撑 PB 级以上的数据存储。

  **答案**：A, B, C, D





这是一套关于Hadoop生态和Linux系统管理的单选题试卷。以下是针对图片中可见的9道题目的正确答案及解析：

**第1题：在core-site.xml文件中，用于指定HDFS的默认文件系统的属性是？**

- 

  **答案：B fs.defaultFS**

- 

  **解析：** `fs.defaultFS`是 Hadoop 核心配置文件 `core-site.xml`中用于指定默认文件系统 URI 的属性，通常配置为 `hdfs://namenode:port`。

**第2题：在yarn-site.xml文件中，用于指定YARN资源管理器主机名的属性是？**

- 

  **答案：B yarn.resourcemanager.hostname**

- 

  **解析：** 该属性明确用于设置 YARN ResourceManager 所在的主机名。

**第3题：计算每天的营业情况适合采用哪种数据处理方式？**

- 

  **答案：C 离线批处理**

- 

  **解析：** “每天”意味着数据是周期性产生的，不需要毫秒级的实时响应。离线批处理（如 MapReduce 或 Spark Batch）非常适合处理这种历史数据汇总、报表生成等任务。

**第4题：以下哪个命令用于将本地文件复制到HDFS，且复制后删除本地源文件？**

- 

  **答案：B hdfs dfs -moveFromLocal**

- 

  **解析：**

  - 

    `-put`/ `-copyFromLocal`：复制后保留本地文件。

  - 

    `-moveFromLocal`：复制后删除本地文件。

  - 

    `-get`：从 HDFS 下载到本地。

**第5题：HDFS的设计目标不包括以下哪项？**

- 

  **答案：A 适合处理小文件**

- 

  **解析：** HDFS 的设计目标是高吞吐量、高容错性和低成本硬件支持，但它**不适合**存储大量小文件，因为 NameNode 的内存会成为瓶颈，且寻址开销大。

**第6题：安装CentOS7时，若选择默认磁盘分区格式化，下一步应点击哪个选项完成配置？**

- 

  **答案：A 软件选择** （注：此题可能存在争议，通常默认分区后下一步是“网络和主机名”或“开始安装”，但在某些特定的教学流程或版本界面中，可能将软件选择作为下一步配置项。结合选项来看，A是唯一合理的后续配置步骤，其他选项如时间日期通常在网络之前或之后，但软件选择是必须的后续动作。）

- 

  **更正解析：** 在 CentOS 7 的标准安装流程中，完成“安装位置”（分区）后，通常下一步是“网络和主机名”。但如果题目语境下“默认磁盘分区格式化”是在某个特定步骤中，紧接着可能是指向“软件选择”。不过严格来说，标准流程是：安装位置 -> 网络和主机名 -> 软件选择。如果必须选一个最符合“下一步”的，通常是网络和主机名。但考虑到选项限制，如果这是一个特定的考题，**A 软件选择** 可能是出题人期望的答案，因为它是安装前必须设置的组件之一。但在标准 ISO 流程中，选 B 更合理。**鉴于题目问的是“完成配置”，可能是指整个初步配置流程的下一步，选 A 的可能性较大。**

- 

  **最终确认：** 根据常见考题套路，此处选 **A 软件选择** 较为稳妥，尽管在标准 GUI 流程中可能顺序略有不同。

**第7题：在配置Hadoop在/opt/hadoop-record/目录下创建四个子文件夹，以下哪个不属于这四个文件夹？**

- 

  **答案：D name**

- 

  **解析：** 通常 Hadoop 的配置中会创建 `data`（存放数据块）、`log`（日志）、`temp`（临时文件）等目录。`name`目录通常是指 HDFS 的 NameNode 元数据目录，它一般位于 HDFS 的命名空间下，而不是在 `/opt/hadoop-record/`这种本地配置目录下作为子文件夹。标准的四个子目录通常是 `data`, `logs`, `tmp`, `name`(如果是本地文件系统的话)。但结合 Hadoop 常规配置，`./data`, `./logs`, `./tmp`是常见目录，`./name`有时也会建，但如果说“不属于”，可能是题目设定中只有前三个。**重新思考：** 在伪分布式或全分布式配置中，`dfs.namenode.name.dir`通常指向一个路径，比如 `/opt/hadoop-record/name`，而 `dfs.datanode.data.dir`指向 `/opt/hadoop-record/data`。所以 `name`和 `data`都是常见的。但选项中只有 D 是 `name`，其他 A/B/C 都是 `data/log/temp`。这可能是考察标准的三类目录。如果必须选一个不属于的，可能是 `name`。**实际上，在 Hadoop 安装教程中，通常会创建 data, logs, tmp 三个目录，而 name 目录有时是隐含的或由配置自动生成的。因此，选 D name 是合理的。**

**第8题：编辑Hadoop环境变量后，需执行了哪个命令使其生效？**

- 

  **答案：A source /etc/profile.d/hadoop-eco.sh**

- 

  **解析：** `source`命令用于在当前 shell 环境中执行脚本，使脚本中定义的环境变量立即生效。修改配置文件后必须执行此操作。

**第9题：若执行hadoop version命令可能需要修改哪个配置文件中的JAVA_HOME路径？**

- 

  **答案：A hadoop-env.sh**

- 

  **解析：** `hadoop-env.sh`是 Hadoop 的环境变量配置文件，其中专门设置了 `JAVA_HOME`路径，Hadoop 启动脚本会读取这个文件来定位 Java。

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=79235e7834cf0f425f1bb59ed24b3c99)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=b56fd1e92f8be627e3bc44b60cefdcc2)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=f429d02122f2d5c45e8ea0eadd34497e)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=500396d18a934dfbb7a57cea2ba33ac3)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=57f77228d636899f2003414a0bab68a3)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=d0c950e8a9edda804f36675e58b0afca)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=a111233ca9f9a215ab446edf9a2f25dd)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=8dd367608ce3ef15299e0f48ab853cc9)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=7310b502af29a8d247006d9c1478ad8f)

以下是针对图片中第10题至第18题的正确答案及详细解析：

**第10题：以下不属于大数据5V特点的是？**

- 

  **答案：D Validity**

- 

  **解析：** 大数据的5V特征分别是：**Volume**（大量）、**Velocity**（高速）、**Variety**（多样）、**Veracity**（真实）、**Value**（价值）。**Validity**（有效性）虽然重要，但并不属于经典的5V定义范畴。

**第11题：以下哪个命令用于查看hdfs文件的内容？**

- 

  **答案：D hdfs dfs -cat**

- 

  **解析：**

  - 

    `-mkdir`：创建目录。

  - 

    `-ls`：列出目录内容。

  - 

    `-put`：上传文件到HDFS。

  - 

    `-cat`：查看文件内容，类似于Linux系统中的`cat`命令。

**第12题：修改CentOS7的IP地址为静态IP后，需执行哪个命令重启网络服务？**

- 

  **答案：A service network restart**

- 

  **解析：** 在CentOS 7中，虽然引入了`systemctl`，但`service network restart`依然是重启网络服务的常用且兼容性好的命令。选项D的`systemctl start network`仅启动不重启，且通常服务名为`network.service`。

**第13题：启动HDFS服务的命令是？**

- 

  **答案：A start-dfs.sh**

- 

  **解析：** Hadoop官方提供的脚本中，`start-dfs.sh`专门用于启动HDFS相关进程（NameNode, DataNode, SecondaryNameNode等）。`start-yarn.sh`用于启动YARN。

**第14题：Hadoop的孵化机构是？**

- 

  **答案：C Apache**

- 

  **解析：** Hadoop最初由Doug Cutting开发，后来贡献给了Apache软件基金会（Apache Software Foundation），并在Apache旗下孵化成为顶级项目。

**第15题：用户在CentOS 7系统中安装Hadoop后...以下哪个命令序列可以完成该任务？**

- 

  **答案：B mkdir /opt/hadoop-record; cd /opt/hadoop-record; mkdir name secondary data temp**

- 

  **解析：** 题目要求在`/opt/hadoop-record/`目录下创建四个子目录。选项B首先创建了父目录，进入该目录后，使用`mkdir`一次性创建了四个指定的子目录，语法和路径均正确。选项A使用了`touch`（创建空文件而非目录），选项C和D的路径不符合题干描述的`/opt/hadoop-record`。

**第16题：以下哪种Hadoop集群部署方式可用于生产环境？**

- 

  **答案：B 完全分布式HA集群**

- 

  **解析：** 生产环境要求高可用性（High Availability）和高可靠性。完全分布式HA（High Availability）集群通过双NameNode（Active/Standby）解决了单点故障问题，是唯一适合生产环境的选项。伪分布式和单机模式仅用于测试和学习。

**第17题：Hadoop 2.x版本的核心组特征以下哪项？**

- 

  **答案：D YARN**

- 

  **解析：** Hadoop 2.x 相对于 1.x 最大的变革就是引入了 **YARN**（Yet Another Resource Negotiator）作为资源管理系统，取代了原有的JobTracker/TaskTracker架构，使得Hadoop可以运行多种计算框架（如MapReduce, Spark, Flink等）。

**第18题：以下哪个场景不适合使用Hadoop？**

- 

  **答案：B 实时导航系统**

- 

  **解析：** Hadoop及其生态系统（HDFS, MapReduce, Hive等）主要面向**离线批处理**和大数据分析。实时导航系统需要处理毫秒级的数据流和计算（如GPS定位、路况实时更新），这属于**实时流计算**的范畴，更适合使用Spark Streaming, Flink, Storm等实时计算框架，而非传统的Hadoop批处理。

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=c53f77312a7e239f2e657ef236c36e2e)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=cf318f965989f26dce3838f538d65f79)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=235889555251b414dc2f61f1f7cf1e92)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=b07512ec2704f128a33d48225a98f167)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=da7d7e7d4dc31eeabf2bd5720f6283ae)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=6190c68550f3ee5a218ac843a452488e)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=253c0cad6689006b8694314782bf7d55)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=44837743a112f5b9974e21dfddb115e6)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=1378a2eb3a3c3d5aad12dc1567ca6c3a)

以下是针对您上传的第19题至第27题的正确答案及详细解析：

**第19题：HDFS的主要作用是什么？**

- 

  **答案：B 分布式文件存储**

- 

  **解析：** HDFS（Hadoop Distributed File System）是Hadoop的分布式文件系统，其核心设计目标就是在廉价硬件上实现海量数据的**分布式存储**，具有高容错性、高吞吐量的特点。

**第20题：MapReduce中的Map阶段主要完成什么任务？**

- 

  **答案：B 数据分片与转换**

- 

  **解析：** Map阶段主要负责读取输入数据，将其拆分成键值对（Key-Value），并进行初步的**转换和处理**（如过滤、映射），为后续的Shuffle和Reduce阶段做准备。

**第21题：MapReduce框架的核心组成部分不包括以下哪项？**

- 

  **答案：C YARN阶段**

- 

  **解析：** MapReduce的核心执行流程包括：**Map阶段**、**Shuffle阶段**和**Reduce阶段**。YARN是Hadoop 2.x之后的资源管理系统，它负责为MapReduce作业分配资源，本身不属于MapReduce的计算阶段。

**第22题：解压Hadoop安装包后，若需删除安装包文件，应使用哪个命令？**

- 

  **答案：A rm -rf \***

- 

  **解析：**

  - 

    `rm -rf *`：`-r`表示递归删除（用于目录），`-f`表示强制删除（不提示确认），`*`表示当前目录下所有文件。这是删除解压后残留安装包及其目录的最彻底命令。

  - 

    `rm -r *`缺少 `-f`可能会在遇到写保护文件时询问。

  - 

    `rm -f *`和 `rm *`无法删除非空目录。

**第23题：在CentOS7中修改网络配置静态IP时，需编辑哪个文件？**

- 

  **答案：C /etc/sysconfig/network-scripts/ifcfg-ens33**

- 

  **解析：** CentOS 7 默认使用可预测的网络接口名称（如 ens33），其网卡配置文件位于 `/etc/sysconfig/network-scripts/`目录下，文件名通常为 `ifcfg-ens33`。选项B中的 `eth0`是CentOS 6及以前版本的命名方式。

**第24题：YARN中负责资源分配的组件是？**

- 

  **答案：A ResourceManager**

- 

  **解析：** 在YARN架构中，**ResourceManager (RM)** 是全局的资源管理器，负责整个集群资源的统一管理和分配。NodeManager是每个节点的代理，ApplicationMaster是应用程序的管理者，Container是资源抽象。

**第25题：关于分布式与集群的描述，正确的是？**

- 

  **答案：D 分布式是将任务拆分到多个节点并行处理**

- 

  **解析：**

  - 

    A 错误：集群不一定是分布式的（例如一台机器也可以叫单机集群，但通常集群指多台；且分布式强调任务拆分，集群强调多机协同）。

  - 

    B 描述不准确：集群是多台计算机协同工作，但不一定是“同一任务”的简单叠加，更多是共同支撑服务。

  - 

    C 错误：分布式通常需要集群环境支持。

  - 

    D 正确：分布式系统的核心思想就是将业务分解为多个子任务，分布在不同节点上并行计算。

**第26题：创建普通用户后，若要使其获得管理员权限，应将其添加到哪个配置文件中？**

- 

  **答案：D /etc/sudoers**

- 

  **解析：** `/etc/sudoers`文件定义了哪些用户或用户组可以以root或其他用户身份执行特权命令。通常通过 `visudo`命令安全地编辑此文件，赋予普通用户 `sudo`权限。

**第27题：YARN的主要功能是什么？**

- 

  **答案：D 资源管理与作业调度**

- 

  **解析：** YARN（Yet Another Resource Negotiator）是Hadoop 2.0引入的资源管理系统，它将资源管理和作业调度/监控的功能从MapReduce中分离出来，负责集群计算资源的统一管理和调度各种计算框架（不仅仅是MapReduce）。

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=5b8b82f7feec1814963cd437af16a032)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=830e01ac7ff5df3e6204a6f6d6f503fa)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=bc82dc2b42fc3646d2d8a4a8bb9021ce)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=a742a020e3559704d35be66b713fb385)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=a3a15ca87b9898d0126115ffa7e0b75d)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=6740cd138d99bb75a060e6bd9ea3312f)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=7d7903ce5a23097ed3d0030eaa81d3a6)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=dff5c8feb91d6bf48f1cc4f35bd3545c)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=54bf636c5d754c616d4bd9dccf848355)

以下是针对您上传的图片中第28题至第36题的正确答案及详细解析：

**第28题：在core-site.xml文件中，HDFS默认文件系统的属性名是？**

- 

  **答案：D fs.defaultFS**

- 

  **解析：** `fs.defaultFS`是 Hadoop 核心配置文件 `core-site.xml`中用于指定默认文件系统 URI 的关键属性（例如 `hdfs://namenode:8020`）。其他选项：A是YARN配置，B是HDFS副本数配置，C是MapReduce运行框架配置。

**第29题：若要将本地文件复制到目标文件，应使用以下哪个命令?**

- 

  **答案：B hdfs dfs -put -f localfile hdfsfile**

- 

  **解析：** 题目要求“复制”且未提及删除源文件。`-put`命令用于复制。选项B中的 `-f`(force) 参数表示如果目标文件已存在则覆盖，符合“复制到目标文件”的场景。A选项会删除本地源文件，C选项是追加内容，D选项语法正确但通常不如 `-put`通用。

**第30题：安装 JDK 和 Hadoop 后，为使配置生效，需执行哪个命令？**

- 

  **答案：D source /etc/profile**

- 

  **解析：** 通常环境变量（如 `JAVA_HOME`, `HADOOP_HOME`）会配置在 `/etc/profile`或 `/etc/profile.d/`下的脚本中。要使当前Shell会话立即生效，需使用 `source`命令。选项A的文件名疑似笔误（应为 `.sh`后缀），且不是标准路径；选项D是最通用、最可能的标准答案。

**第31题：在Hadoop配置中，yarn-site.xml文件用于设置YARN的相关参数。以下哪个配置项用于指定YARN资源管理器的主机名?**

- 

  **答案：C yarn.resourcemanager.hostname**

- 

  **解析：** 这是YARN配置中最基础且明确的属性。A是HDFS副本配置，B是默认文件系统配置，D是MapReduce框架配置。

**第32题：以下关于Hadoop核心组件的描述正确的有？**

- 

  **答案：A YARN负责资源管理, B HDFS负责分布式存储, C MapReduce负责分布式计算**

- 

  **解析：** Hadoop三大核心组件即HDFS（存储）、YARN（资源管理与调度）、MapReduce（计算）。ZooKeeper是一个独立的分布式协调服务，并非Hadoop核心组件，也不负责数据可视化。

**第33题：在配置Hadoop时，需要创建哪些目录？**

- 

  **答案：A /opt/hadoop-record/log, B /opt/hadoop-record/temp, C /opt/hadoop-record/name, D /opt/hadoop-record/data**

- 

  **解析：** 在典型的Hadoop部署中，通常会创建这些目录用于存放不同组件的运行时数据：`name`(NameNode元数据), `data`(DataNode数据块), `log`(日志), `temp`(临时文件)。

**第34题：以下哪些命令可用于将本地文件复制到HDFS?**

- 

  **答案：B hdfs dfs -moveFromLocal, C hdfs dfs -put, D hdfs dfs -copyFromLocal**

- 

  **解析：** 这三个命令都可以实现将本地文件传输到HDFS。区别在于：`put`和 `copyFromLocal`复制后保留源文件，`moveFromLocal`复制后删除源文件。`-get`命令是从HDFS下载到本地，方向相反。

**第35题：安装CentOS7时，以下哪三步骤是正确的？**

- 

  **答案：A 选择简体中文, B 手动分区并设置挂载点, C 设置root密码**

- 

  **解析：** 这是CentOS 7图形化安装界面的标准流程：选择语言 -> 设置安装位置（分区） -> 设置网络和主机名（可选） -> 设置Root密码 -> 开始安装。选项D“点击安装位置”只是进入配置界面，并非完成步骤。

**第36题：修改网络配置文件设置，需要修改哪些参数?**

- 

  **答案：A BOOTPROTO=static, B IPADDR=192.168.1.100, C ONBOOT=yes**

- 

  **解析：** 配置静态IP时，这三个参数是必须的：A定义使用静态协议，B定义具体IP地址，C定义开机启动网卡。D选项 `DNS1`用于域名解析，虽然常用，但题目问的是“修改网络配置文件设置”（通常指基础IP配置），相比之下ABC是核心必选项。如果允许多选，ABCD都可配置，但根据常规考题思路，ABC是构成静态IP的基础要素。

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=50398a26b832f8c7134e930e8ec846e7)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=f74180f14f656b1502fca3dad09688ef)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=b36ba67d28658f6ac0ac360d5a95bc44)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=64be9905b06b188a31608d42ccfff076)

以下是针对您上传的第37题至第40题的正确答案及详细解析：

**第37题：创建Hadoop相关虚拟机的，以下哪些步骤是正确的？**

- 

  **答案：A、C、D**

- 

  **解析：**

  - 

    **A 选择桥接模式网络适配器**：正确。在虚拟机网络设置中，选择“桥接模式”可以让虚拟机像局域网内的一台独立物理机一样获取IP，便于集群节点间通信。

  - 

    **B 选择典型配置**：错误。在安装虚拟机时，“典型配置”通常是默认向导，但对于学习Hadoop，往往需要自定义硬件（如内存、CPU、网络），因此通常选择“自定义（高级）”配置。

  - 

    **C 自定义硬件时确认网络适配器为NAT模式**：正确。虽然A选项提到桥接，但在实际安装过程中，如果在自定义硬件步骤中确认网络适配器设置为NAT模式（或桥接），这也是正确的配置步骤之一。此处可能考察安装流程中的具体环节。

  - 

    **D 将虚拟磁盘存储为单个文件**：正确。这有利于磁盘性能和迁移，是推荐的设置方式。

**第38题：以下哪些是Hadoop的配置文件？**

- 

  **答案：A、B、C、D**

- 

  **解析：** 这四个选项均为Hadoop的核心配置文件：

  - 

    **core-site.xml**：Hadoop核心配置（如默认文件系统）。

  - 

    **hdfs-site.xml**：HDFS守护进程配置（如副本数）。

  - 

    **yarn-site.xml**：YARN守护进程配置（如ResourceManager地址）。

  - 

    **mapred-site.xml**：MapReduce配置（如指定运行在YARN上）。

**第39题：在配置Hadoop时，以下哪些属性需要在core-site.xml或hdfs-site.xml中设置？**

- 

  **答案：A、B、C**

- 

  **解析：**

  - 

    **A dfs.replication**：HDFS文件副本数，配置在 `hdfs-site.xml`中。

  - 

    **B fs.defaultFS**：默认文件系统URI，配置在 `core-site.xml`中。

  - 

    **C hadoop.tmp.dir**：Hadoop临时目录基路径，配置在 `core-site.xml`中。

  - 

    **D yarn.resourcemanager.hostname**：YARN资源管理器主机名，配置在 `yarn-site.xml`中，因此不符合题意。

**第40题：启动Hadoop集群需要哪三个命令？**

- 

  **答案：A、B、C、D（注：通常选 C、D，但本题为多选且分值较高，可能包含细分命令）**

- 

  **解析：**

  - 

    **C start-dfs.sh**：一键启动HDFS服务（NameNode, DataNode等），是启动集群的标准命令。

  - 

    **D start-yarn.sh**：一键启动YARN服务（ResourceManager, NodeManager等），是启动集群的标准命令。

  - 

    **A yarn-daemon.sh start resourcemanager** 和 **B hadoop-daemon.sh start namenode**：这两个是单独启动某个守护进程的命令，在精细维护或故障恢复时使用。

  - 

    **结论**：如果题目问的是“启动集群”的标准操作，通常选 **C 和 D**。如果题目允许选择所有可用的启动命令，则 **A、B、C、D** 均可用于启动相应服务。结合多选题性质及分值，建议全选或根据教材侧重选择 C、D 为核心答案。

**第1题**

- 

  **题目：** 用户编写了一个文本文件a.txt，怎样把文件名称改为txt.a，下列命令（ ）可以实现。

- 

  **正确答案：D**

- 

  **解析：**

  - 

    A `cd`是切换目录命令。

  - 

    B `echo`是输出命令，`echo a.txt > txt.a`会把字符串 "a.txt" 写入到 txt.a 文件中，而不是改名。

  - 

    C `rm`是删除命令。

  - 

    D `cat a.txt > txt.a`虽然通常用于查看文件内容并重定向输出，但在这里，如果目的是复制内容并生成新文件，它可以实现将 a.txt 的内容复制到 txt.a。但在标准Linux中，改名通常用 `mv`。不过在给定的选项中，只有D涉及到了文件内容的重定向生成新文件。如果严格理解“改名”，标准命令是 `mv a.txt txt.a`，但这不在选项中。考虑到题目可能考察的是通过重定向生成同名内容的新文件，D是唯一涉及输出到新文件的选项。但在实际考试中，这道题的选项设计可能有瑕疵，标准改名命令缺失。如果必须选一个最接近的，D选项能生成一个名为txt.a的文件，但严格来说不是改名而是复制内容。**注：通常这类题目如果选项没有mv，可能是考察重定向，但更严谨的改名命令是mv。不过在提供的选项中，D是唯一能生成txt.a文件的命令（尽管是复制内容）。** 但仔细看题干，可能是考察重定向生成新文件。不过在Linux中，标准的改名是mv。如果选项里实在没有mv，这道题可能存在争议。但如果理解为“把内容变成txt.a”，那D是对的。但通常改名是mv。**重新评估：** 题目问的是“改名”。在Linux中，改名命令是 `mv source dest`。选项中没有mv。但是D选项 `cat a.txt > txt.a`会读取a.txt的内容并写入到txt.a，这会导致txt.a的内容和a.txt一样，但文件名变了。这在某些语境下也可以算作一种“改名”（通过复制内容），但严格来说不是原地改名。不过在单选题中，如果没有mv，D是最接近的能生成新文件名的方式。但更有可能的是题目考察的是重定向。`cat a.txt > txt.a`会将a.txt的内容输出到txt.a，从而创建一个新的txt.a文件。所以选D。

**第2题**

- 

  **题目：** 在使用mkdir命令创建新的目录时，让其父目录不存在时先创建父目录的选项是（ ）。

- 

  **正确答案：B**

- 

  **解析：** `mkdir -p`命令可以递归创建目录，即如果父目录不存在，会自动先创建父目录。例如 `mkdir -p a/b/c`会创建a，然后a下的b，然后b下的c。

**第3题**

- 

  **题目：** 下面关于i节点描述错误的是（ ）。

- 

  **正确答案：C**

- 

  **解析：** i节点（inode）是文件系统中用于存储文件元数据的数据结构。

  - 

    A 正确：i节点包含文件大小、指向数据块的指针等信息。

  - 

    B 正确：i节点记录文件占用的块数。

  - 

    C 错误：i节点和文件不是一一对应的。在Linux中，硬链接（hard link）是指向同一个i节点的不同文件名，所以多个文件名可以对应同一个i节点。

  - 

    D 正确：i节点连接了文件的逻辑结构（文件名）和物理结构（数据块）。

**第4题**

- 

  **题目：** 改变文件所有者的命令为（ ）

- 

  **正确答案：D**

- 

  **解析：**

  - 

    A `chmod`是改变文件权限的命令。

  - 

    B `touch`是创建空文件或更新文件时间戳的命令。

  - 

    C `cat`是查看文件内容的命令。

  - 

    D `chown`是改变文件所有者的命令（change owner）。

**第5题**

- 

  **题目：** FTP 传输中使用哪两个端口（ ）

- 

  **正确答案：C**

- 

  **解析：** FTP（文件传输协议）使用两个端口：

  - 

    端口21：用于控制连接（发送命令）。

  - 

    端口20：用于数据传输（主动模式）。

  - 

    所以选C（20和21）。

**第6题**

- 

  **题目：** usermod 命令无法实现的操作是（ ）

- 

  **正确答案：A**

- 

  **解析：** `usermod`命令用于修改已有用户的属性。

  - 

    A 删除指定的账户和对应的主目录：这是 `userdel -r`命令的功能，不是 `usermod`的功能。

  - 

    B 账户重命名：可以用 `usermod -l 新用户名 旧用户名`。

  - 

    C 加锁与解锁用户账户：可以用 `usermod -L`（加锁）和 `usermod -U`（解锁）。

  - 

    D 对用户密码进行加锁或解锁：虽然密码加锁通常用 `passwd -l`，但 `usermod`也可以间接影响密码状态。

**第7题**

- 

  **题目：** 哪个目录存放用户密码信息（ ）

- 

  **正确答案：A**

- 

  **解析：** 在Linux系统中，用户密码信息（加密后的）存放在 `/etc/shadow`文件中，而 `/etc`目录是系统配置文件的根目录，包含了 `/etc/passwd`和 `/etc/shadow`等。所以选A `/etc`。

**第8题**

- 

  **题目：** 欲把当前目录下的 file1.txt 复制为 file2.txt，正确的命令是（ ）

- 

  **正确答案：A**

- 

  **解析：**

  - 

    A `cat file1.txt > file2.txt`：使用重定向，将file1.txt的内容输出到file2.txt，实现了复制内容生成新文件。虽然在Linux中更常用 `cp file1.txt file2.txt`，但选项中没有 `cp`。

  - 

    B `cp file1.txt | file2.txt`：管道符 `|`用法错误，`cp`命令不需要管道。

  - 

    C `copy file1.txt file2.txt`：Linux中没有 `copy`命令，那是Windows的。

  - 

    D `cat file2.txt file1.txt`：这会显示file2和file1的内容，不是复制。

**第9题**

- 

  **题目：** 在LINUX中，要查看文件内容，可使用（ ）命令

- 

  **正确答案：C**

- 

  **解析：**

  - 

    A `logout`是退出登录的命令。

  - 

    B `cd`是切换目录的命令。

  - 

    C `more`是用于分页查看文件内容的命令（还有 `less`, `cat`, `tail`, `head`等）。

  - 

    D `login`是登录系统的命令。

希望这些解答对你有帮助！

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=c5f25801e7dbf40fea6ac054f1d3a623)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=ec1b86d744d67d9278a38d47e20f3eae)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=d5e647a6d46d4143f1a461bb4112fff9)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=4131e10f506cb5ec3ef5cd11a6372bd7)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=3e2ab87750943d87c7c9dae5ab3d42ae)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=2b9f6a9149b972ee5c815d95bf5a5130)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=f53ca12edeb599dce83aaa292089e6a4)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=9bace67ec7d683498372866712f6546e)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=ae80e7497186f074719c436ed2c5fd82)

以下是针对您上传的9张图片中Linux基础选择题的正确答案及详细解析：

**图1：第18题**

- 

  **题目：** 删除文件命令为( )

- 

  **正确答案：B**

- 

  **解析：**

  - 

    A `mkdir`：创建目录的命令。

  - 

    B `rm`：删除文件或目录的命令（remove）。

  - 

    C `mv`：移动文件或重命名的命令。

  - 

    D `move`：Linux中不存在此命令，属于干扰项。

**图2：第17题**

- 

  **题目：** 下面哪个命令是用来定义变量

- 

  **正确答案：D**

- 

  **解析：**

  - 

    A/C `exports`：通常是网络文件系统（NFS）相关的守护进程或服务，不是定义变量的命令。

  - 

    B `aliases`：通常指别名（alias）的复数形式，但设置别名的命令是 `alias`，且没有 `aliases`这个标准命令。

  - 

    D `export`：用于将Shell变量输出为环境变量，或者定义环境变量（如 `export PATH=$PATH:/bin`）。

**图3：第16题**

- 

  **题目：** 若要使用进程名来结束进程，应使用（ ）命令

- 

  **正确答案：A**

- 

  **解析：**

  - 

    虽然标准的 `kill`命令默认接收进程号（PID），但在实际使用和考试语境中，通常认为 `kill`是终止进程的代表性命令。如果要通过进程名操作，通常配合 `pkill`或 `killall`使用，但在本题给定选项中，A是最佳选择。

  - 

    B `ps`：查看进程状态。

  - 

    C `pss`：无效命令。

  - 

    D `pstree`：以树状图显示进程关系。

**图4：第15题**

- 

  **题目：** 存放Linux基本命令的目录是（）

- 

  **正确答案：D**

- 

  **解析：**

  - 

    A `/lib`：存放系统库文件。

  - 

    B `/root`：超级管理员（root）的家目录。

  - 

    C `/tmp`：临时文件目录。

  - 

    D `/bin`：存放系统最基本的可执行命令（如ls, cp, cat等）。

**图5：第11题**

- 

  **题目：** 默认情况下管理员创建了就会在（ ）目录下创建一个用户主目录。

- 

  **正确答案：A**

- 

  **解析：**

  - 

    A `/home`：普通用户的家目录默认存放位置（如 `/home/user1`）。

  - 

    B `/etc`：存放系统配置文件。

  - 

    C `/usr`：存放应用程序和文件。

  - 

    D `/root`：这是root用户的家目录，普通用户不在该目录下。

**图6：第12题**

- 

  **题目：** 按下（ ）键能终止当前运行的命令

- 

  **正确答案：C**

- 

  **解析：**

  - 

    A `Ctrl-D`：通常表示EOF（文件结束符），用于退出终端或输入流。

  - 

    B `Ctrl-F`：在终端中通常是向前翻页或查找。

  - 

    C `Ctrl-C`：发送SIGINT信号，**强制终止**当前前台运行的命令。

  - 

    D `Ctrl-B`：通常是光标后退。

**图7：第13题**

- 

  **题目：** 关闭linux系统（不重新启动）可使用（ ）命令

- 

  **正确答案：A**

- 

  **解析：**

  - 

    A `halt`：停止系统运行，即关机（不重启）。

  - 

    B `ctrl+alt+del`：通常是重启快捷键（取决于系统配置）。

  - 

    C `reboot`：重启系统。

  - 

    D `shutdown -r`：`-r`参数代表restart（重启），不是关机。

**图8：第14题**

- 

  **题目：** Linux文件权限一共10位长度，分成四段，第三段表示的内容是( )。

- 

  **正确答案：B**

- 

  **解析：**

  - 

    以 `drwxr-x---`为例：

    - 

      第一段（1位 `d`）：文件类型。

    - 

      第二段（3位 `rwx`）：**文件所有者**的权限。

    - 

      第三段（3位 `r-x`）：**文件所有者所在组**的权限。

    - 

      第四段（3位 `---`）：**其他用户**的权限。

**图9：第10题**

- 

  **题目：** 以下哪个命令可以终止一个有进程

- 

  **正确答案：C**

- 

  **解析：**

  - 

    A `killall`：通过**进程名**终止进程（注意：题目中写的是“一有”，推测应为“一个”或“已有”）。

  - 

    B/D `skill`/`skillall`：非标准通用命令（`skill`在某些系统存在但已过时）。

  - 

    C `kill`：通过**进程号（PID）**终止进程。

  - 

    **特别说明：** 如果题目强调“通过进程名”，应选A；如果强调通用的终止命令或给进程号终止，选C。鉴于图3已经考了“进程名”，此题大概率考察最基础的终止命令 `kill`，且选项C书写规范，故选C。

祝您答题顺利！

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=899cd89c4d5eb8583509e7629203fbe6)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=921e606bf965eba4867a6c7450a70f85)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=4276f27e37f11ba03cb02bd8b86bdabc)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=21abca37804e43bf91a1c343e7ab88e1)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=19ffb4460c1e0a084af9abf6c90e8340)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=8064d46e1820e2a0970f35890ca82e7d)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=46b150943ddf7ad34b04acbad05bf35f)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=4e0ad7bc419336cfd3535d3fcc25dc71)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=d948c712c1bebc37bf267e2c34ecd42b)

以下是针对您上传的9张图片中Linux基础选择题的正确答案及详细解析：

**图1：第27题**

- 

  **题目：** 建立一个新文件可以使用的命令为( )

- 

  **正确答案：D**

- 

  **解析：**

  - 

    A `more`：用于分页查看文件内容，不能创建文件。

  - 

    B `cp`：用于复制文件，不是创建新空文件。

  - 

    C `chmod`：用于修改文件权限。

  - 

    D `touch`：若文件不存在，则会创建一个空的普通文件；若存在，则更新文件的时间戳。这是创建新文件的标准命令。

**图2：第26题**

- 

  **题目：** 一个bash shell脚本的第（ ）（题干虽不完整，但根据选项可知是问第一行）

- 

  **正确答案：A**

- 

  **解析：**

  - 

    在Bash脚本中，第一行必须是 **Shebang（释伴）行**，格式为 `#!/bin/bash`，用于指定该脚本由哪个解释器执行。

  - 

    A `#!/bin/bash`：正确格式。

  - 

    B `/bin/bash`：缺少 `#!`，会被当作普通命令执行。

  - 

    C `#/bin/csh`：指定的是csh解释器，且格式不如A规范（通常写作#!/bin/csh）。

  - 

    D `#/bin/bash`：格式错误，缺少 `!`。

**图3：第25题**

- 

  **题目：** cd命令可以改变用户的当前目录，当用户键入命令“cd”并按Enter键后，（）

- 

  **正确答案：A**

- 

  **解析：**

  - 

    `cd`命令如果不带任何参数，默认功能是切换到当前用户的**家目录（Home Directory）**。

  - 

    A 当前目录改为用户主目录：正确。

  - 

    B 改为根目录：需要执行 `cd /`。

  - 

    C 当前目录不变：错误。

  - 

    D 改为上一级目录：需要执行 `cd ..`。

**图4：第24题**

- 

  **题目：** vi中哪条命令是不保存强制退出？

- 

  **正确答案：C**

- 

  **解析：**

  - 

    A `:wq`：保存并退出。

  - 

    B `:quit`：正常退出（如果有修改未保存会提示）。

  - 

    C `:q!`：强制退出，不保存修改。

  - 

    D `:wq!`：强制保存并退出（通常用于只读文件）。

**图5：第23题**

- 

  **题目：** 若要将当前目录中的myfile.txt压缩成myfile.txt.tar.gz，则实现的命令为（ ）。

- 

  **正确答案：B**

- 

  **解析：**

  - 

    `tar`命令打包压缩的格式为：`tar [选项] [生成的压缩包名] [源文件/目录]`。

  - 

    `-z`：通过gzip进行压缩。

  - 

    `-c`：创建新的归档文件。

  - 

    `-v`：显示过程。

  - 

    `-f`：指定文件名（必须紧跟文件名）。

  - 

    因此，正确的顺序是 `tar -zcvf myfile.txt.tar.gz myfile.txt`。

**图6：第22题**

- 

  **题目：** 在给定文件中查找与设定条件符字符串的命令为（ ）

- 

  **正确答案：A**

- 

  **解析：**

  - 

    A `grep`：用于在**文件内容**中搜索指定的字符串或正则表达式。

  - 

    B `find`：用于在**目录结构**中搜索符合条件的**文件或目录**（按名称、大小、时间等），而非文件内容。

  - 

    C `sort`：排序命令。

  - 

    D `gzip`：压缩命令。

**图7：第21题**

- 

  **题目：** 哪个命令可以将普通用户用户（题干似乎不完整，推测是“切换为超级用户”）

- 

  **正确答案：B**

- 

  **解析：**

  - 

    A `tar`：打包压缩命令。

  - 

    B `su`：切换用户命令（Switch User），`su -`或 `su root`可切换为超级用户。

  - 

    C `passwd`：修改密码命令。

  - 

    D `super`：非标准切换用户命令。

**图8：第20题**

- 

  **题目：** 某文件的组外成员的权限为只有...（题干似乎有部分缺失，根据选项反推应为：组外成员只读，组内读写，所有者全权）

- 

  **正确答案：A**

- 

  **解析：**

  - 

    Linux权限数字计算：读(r)=4，写(w)=2，执行(x)=1。

  - 

    所有者（User）：全部权限 = rwx = 4+2+1 = **7**。

  - 

    组内用户（Group）：读与写 = rw- = 4+2+0 = **6**。

  - 

    组外成员（Others）：只读 = r-- = 4+0+0 = **4**。

  - 

    组合起来即为 **764**。

**图9：第19题**

- 

  **题目：** 下列哪个命令在建立一个文件的时候列出详细列表（ ）。

- 

  **正确答案：D**

- 

  **解析：**

  - 

    本题考查 `tar`命令的参数。

  - 

    `-c`：建立新的归档文件（即“建立文件”）。

  - 

    `-v`：详细显示指令执行过程（即“列出详细列表”）。

  - 

    `-f`：指定归档文件名。

  - 

    因此，包含这三个参数的选项是 `tar -cvf`。A选项缺少 `-f`指定文件名，是不完整的。

希望这些解析能帮助您顺利通过考试！

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=eb461d6b335452fdf3a59efdf95bc84c)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=891d9bf6261cbe0664dad5652174a190)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=a6b1d215db5dff2741855d8eb391f606)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=4d6a99f50562ca128cecd32c540aa402)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=d816ee48afabdff3268ed3437d434523)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=382c86861a0e85157b5d00312623b2af)

![img](https://yuanbao.tencent.com/api/resource/download?resourceId=affcaedce37e94197be617f400aa915d)

以下是针对您上传的7张图片中Linux基础选择题的正确答案及详细解析：

**图1：第34题**

- 

  **题目：** 以下命令中，可以将用户名改为root的是

- 

  **正确答案：D**

- 

  **解析：**

  - 

    A `SU`和 D `su`：在Linux中，切换用户的命令是 `su`（Switch User）。虽然大小写在Linux命令中不严格区分，但标准写法为小写 `su`。输入 `su`或 `su root`可以切换到root用户。

  - 

    B `login`：用于登录系统，通常在终端提示符下输入以开始新的登录会话，不是直接切换用户。

  - 

    C `logout`：用于退出当前登录会话。

  - 

    因此，最标准的答案是 **D**。

**图2：第33题**

- 

  **题目：** 在vi编辑器中的命令模式下可在光标当前所在行下添加一新行

- 

  **正确答案：C**

- 

  **解析：**

  - 

    A `i`：进入插入模式，在**当前光标位置之前**插入。

  - 

    B `a`：进入插入模式，在**当前光标位置之后**插入。

  - 

    C `o`：进入插入模式，在**当前行的下方新建一行**。

  - 

    D `O`：进入插入模式，在**当前行的上方新建一行**。

**图3：第32题**

- 

  **题目：** 如何快速切换到用户John的主目录下？

- 

  **正确答案：A**

- 

  **解析：**

  - 

    在Linux/Unix系统中，`~`（波浪号）代表用户的主目录。

  - 

    `cd ~用户名`是切换到指定用户主目录的标准语法。

  - 

    因此，`cd ~John`是正确的命令。其他选项的符号（`#`, `@`, `&`）在shell中均无此功能。

**图4：第31题**

- 

  **题目：** 假设文件fileA的符号链接为fileB，那么删除fileA后，下面的描述正确的是（ ）。

- 

  **正确答案：B**

- 

  **解析：**

  - 

    符号链接（软链接）类似于Windows的快捷方式，它只存储指向源文件的路径。

  - 

    当源文件（fileA）被删除后，符号链接（fileB）本身依然存在，但因为它指向的目标消失了，此时fileB会变成一个无效的“悬空链接”（dangling link），无法访问。

  - 

    删除源文件不会自动重建，也不会连带删除链接文件。

**图5：第30题**

- 

  **题目：** 当登录Linux时，一个具有唯一ID号的shell将被调用，这个ID是什么

- 

  **正确答案：B**

- 

  **解析：**

  - 

    A `NID`：通常指节点ID，与网络相关。

  - 

    B `PID`：进程ID（Process ID）。每次登录启动的Shell都是一个独立的进程，系统会给它分配唯一的PID。

  - 

    C `UID`：用户ID（User ID），标识的是用户身份，不是进程。

  - 

    D `CID`：通常指容器ID或通道ID，与此处无关。

**图6：第29题**

- 

  **题目：** 在vi编辑器中的命令模式下，重启一次对编辑的文本进行的操作，可使用（）命令。

- 

  **正确答案：A**

- 

  **解析：**

  - 

    这里的“重启一次...操作”应理解为**重复最近一次的编辑操作**。

  - 

    在vi的命令模式下，输入 `.`（英文句号）可以重复执行上一条修改命令（如删除一行、粘贴等）。

  - 

    上下箭头通常用于移动光标历史命令（在末行模式）或文本行（在命令模式），`*`用于查找光标下的单词。

**图7：第28题**

- 

  **题目：** 如果要列出一个目录下的所有文件需要使用命令行

- 

  **正确答案：A**

- 

  **解析：**

  - 

    A `ls -a`：`-a`（all）选项会显示所有文件，包括以`.`开头的隐藏文件。

  - 

    B `ls`：默认只显示非隐藏文件。

  - 

    C `ls -l`：以长列表格式显示文件详细信息，但不包含隐藏文件。

  - 

    D `ls -d`：显示目录本身的信息，而不是目录内的内容。

祝您答题顺利！