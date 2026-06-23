# ☕ Java Web — 题库（171题）

> 自动解析自 questions.md | 含答案和解析 | 已修复缺失题目

---

## 单选题（44题）

### 1. 图10（21. 单选题：定义有参方法的语法）

- **A.** 错：参数类型应写在参数后，不能写成 `add a:Int`。
- **C.** 错：应为 `(a:Int)`，不是 `(a) Int`。
- **D.** 错：返回类型应在参数列表后，用 `: Int`，而不是 `:Int (a)`。

> ✅ **答案：** 正确答案：B

---

### 2. 以下关于 * 文章点击率属于应用级别的数据，需要被所有用户共享，并且在服务器运行期间一直存在 的描述，正确的是？

> ✅ **答案：** application
> 📝 **解析：** * 文章点击率属于应用级别的数据，需要被所有用户共享，并且在服务器运行期间一直存在。 `application`对象（即 `ServletContext`）的作用域是整个 Web 应用，最适合保存全局统计数据。 -----

---

### 3. 以下关于 * 保存会话的两种技术是 Cookie 和 Session 的描述，正确的是？

> ✅ **答案：** Session
> 📝 **解析：** * 保存会话的两种技术是 Cookie 和 Session。 Cookie 是客户端技术（数据保存在浏览器）； Session 是服务器端技术（数据保存在服务器内存或持久化存储中）。 -----

---

### 4. 以下关于 * JSP 的 9 大内置对象包括：`request`, `response`, `session`, `application`, `out`, `page` 的描述，正确的是？

> ✅ **答案：** response、session、application、out、pageContext
> 📝 **解析：** * JSP 的 9 大内置对象包括：`request`, `response`, `session`, `application`, `out`, `page`, `config`, `exception`, `pageContext`。 题目中已给出 `request`和 `config`, `exception`，空缺的五个分别是 `response`, `session`, `application`, `out`, `pageContext`。 (注：顺序通常不影响得分，但一般按常用顺序排列) -----

---

### 5. 以下关于 * 在 Tomcat 容器中，JSP 页面在第一次被访问时，会被翻译（转译）成 Java 源文件（Servlet），然后编译成 `.class`字节码文件 的描述，正确的是？

> ✅ **答案：** work
> 📝 **解析：** * 在 Tomcat 容器中，JSP 页面在第一次被访问时，会被翻译（转译）成 Java 源文件（Servlet），然后编译成 `.class`字节码文件。 这些生成的文件默认存储在 Tomcat 安装目录下的 `work`目录中。 -----

---

### 6. 以下关于 * JSP 的三大指令（Directive）是： page：用于定义页面属性（如 contentType, import 等） 的描述，正确的是？

> ✅ **答案：** page、include、taglib
> 📝 **解析：** * JSP 的三大指令（Directive）是： page：用于定义页面属性（如 contentType, import 等）。 include：用于包含其他文件。 taglib：用于引入标签库（如 JSTL）。 (注：题目空格数量不确定，通常填这三个) -----

---

### 7. 以下关于 * 要在 JSP 中使用 JSTL（JavaServer Pages Standard Tag Library）标签库，必须使用 taglib 指令来声明 的描述，正确的是？

> ✅ **答案：** taglib
> 📝 **解析：** * 要在 JSP 中使用 JSTL（JavaServer Pages Standard Tag Library）标签库，必须使用 taglib 指令来声明。 语法示例：`<%@ taglib uri="..." prefix="c" %>` -----

---

### 8. 以下关于 * 在 JSP 中，创建 JavaBean 对象的动作标签是 `<jsp:useBean>` 的描述，正确的是？

> ✅ **答案：** `<jsp:useBean>`
> 📝 **解析：** * 在 JSP 中，创建 JavaBean 对象的动作标签是 `<jsp:useBean>`。 其标准用法是：`<jsp:useBean id="对象名" class="类的全限定名" scope="作用域"/>` -----

---

### 9. 以下关于 * Tomcat 服务器的默认端口号是 8080 的描述，正确的是？

> ✅ **答案：** 8080、server.xml、webapps
> 📝 **解析：** * Tomcat 服务器的默认端口号是 8080。 修改端口号需要编辑 Tomcat 安装目录下 `conf`文件夹中的 `server.xml` 文件。 部署项目时，将 `.war`包放入 Tomcat 的 `webapps` 目录中，启动时会自动解压部署。 -----

---

### 10. 以下关于 * JSP 的执行过程分为两个主要时期： 1. 翻译（Translation）时期：JSP 文件被翻译成 Java 源文件（Servlet） 的描述，正确的是？

> ✅ **答案：** 翻译（或转译）、编译
> 📝 **解析：** * JSP 的执行过程分为两个主要时期： 1. 翻译（Translation）时期：JSP 文件被翻译成 Java 源文件（Servlet）。 2. 编译（Compilation）时期：Java 源文件被编译成 `.class`字节码文件。 -----

---

### 11. 以下关于 * 与第96题考点相同 的描述，正确的是？

> ✅ **答案：** 8080、server.xml
> 📝 **解析：** * 与第96题考点相同。 Tomcat 默认端口是 8080。 修改端口在 `conf/server.xml` 文件中进行。 -----

---

### 12. 以下关于 * Servlet 的生命周期由容器（如 Tomcat）管理，包含三个核心方法： 1. `init()`：初始化方法，只执行一次 的描述，正确的是？

> ✅ **答案：** init()、service()
> 📝 **解析：** * Servlet 的生命周期由容器（如 Tomcat）管理，包含三个核心方法： 1. `init()`：初始化方法，只执行一次。 2. `service()`：服务方法，每次请求都会执行（通常由 `doGet/doPost`处理）。 3. `destroy()`：销毁方法，服务器关闭时执行。 -----

---

### 13. 以下关于 * 获取 HTML 表单（Form）提交的数据，需要使用 `request`对象的 `getParameter()`方法 的描述，正确的是？

> ✅ **答案：** getParameter()
> 📝 **解析：** * 获取 HTML 表单（Form）提交的数据，需要使用 `request`对象的 `getParameter()`方法。 语法：`String value = request.getParameter("inputName");` -----

---

### 14. 以下关于 * 在处理 POST 请求时，为了防止中文乱码，需要在获取参数之前设置请求体的编码 的描述，正确的是？

> ✅ **答案：** UTF-8
> 📝 **解析：** * 在处理 POST 请求时，为了防止中文乱码，需要在获取参数之前设置请求体的编码。 使用 `request.setCharacterEncoding("UTF-8")`可以有效解决中文乱码问题。 查看全部(2)

---

### 15. 第12题：修改CentOS7的IP地址为静态IP后，需执行哪个命令重启网络服务？

> ✅ **答案：** A service network restart
> 📝 **解析：** * 在CentOS 7中，虽然引入了`systemctl`，但`service network restart`依然是重启网络服务的常用且兼容性好的命令。选项D的`systemctl start network`仅启动不重启，且通常服务名为`network.service`。

---

### 16. 第23题：在CentOS7中修改网络配置静态IP时，需编辑哪个文件？

> ✅ **答案：** C /etc/sysconfig/network-scripts/ifcfg-ens33
> 📝 **解析：** * CentOS 7 默认使用可预测的网络接口名称（如 ens33），其网卡配置文件位于 `/etc/sysconfig/network-scripts/`目录下，文件名通常为 `ifcfg-ens33`。选项B中的 `eth0`是CentOS 6及以前版本的命名方式。

---

### 17. 第25题：关于分布式与集群的描述，正确的是？

> ✅ **答案：** D 分布式是将任务拆分到多个节点并行处理
> 📝 **解析：** * A 错误：集群不一定是分布式的（例如一台机器也可以叫单机集群，但通常集群指多台；且分布式强调任务拆分，集群强调多机协同）。 B 描述不准确：集群是多台计算机协同工作，但不一定是“同一任务”的简单叠加，更多是共同支撑服务。 C 错误：分布式通常需要集群环境支持。 D 正确：分布式系统的核心思想就是将业务分解为多个子任务，分布在不同节点上并行计算。

---

### 18. 第26题：创建普通用户后，若要使其获得管理员权限，应将其添加到哪个配置文件中？

> ✅ **答案：** D /etc/sudoers
> 📝 **解析：** * `/etc/sudoers`文件定义了哪些用户或用户组可以以root或其他用户身份执行特权命令。通常通过 `visudo`命令安全地编辑此文件，赋予普通用户 `sudo`权限。

---

### 19. 以下关于 jsp:useBean`动作标签用于实例化 JavaBean 对象 的描述，正确的是？

> ✅ **答案：** A
> 📝 **解析：** jsp:useBean`动作标签用于实例化 JavaBean 对象。 其标准属性包括 `id`（实例名）、`class`（类的全限定名）、`scope`（作用域）。 A选项：`id`、`class`、`scope`属性齐全且 `class`使用了完整的包路径，写法完全正确。 B选项：缺少必需的 `id`属性。 C选项：`jsp:useBean`标签中没有 `import`属性，导入包通常在 JSP 页面的 page 指令中使用 `import`属性。 D选项：`jsp:useBean`标签中没有 `name`属性，对应的属性名是 `id`。 -----

---

### 20. 以下关于 B选项：Web 应用程序的部署描述符 `web.xml`位于项目目录下的 `WEB-INF`子目录中，而不是整个 Web 服务目录的 `WEB-INF` 的说法，错误的是？

> ✅ **答案：** C
> 📝 **解析：** A选项：Tomcat 的核心配置文件 `server.xml`位于 Tomcat 安装目录下的 `conf`文件夹中，而不是 `bin`文件夹。 B选项：Web 应用程序的部署描述符 `web.xml`位于项目目录下的 `WEB-INF`子目录中，而不是整个 Web 服务目录的 `WEB-INF`。 C选项：在 Servlet 3.0 及以上版本中，确实可以使用 `@WebServlet`注解直接在 Java 类上配置 Servlet 的映射信息，无需在 `web.xml`中配置，说法正确。 D选项：虽然传统 Web 应用的部署文件名为 `web.xml`，但 A 选项的描述是明显错误的，因此

---

### 21. `RequestDispatcher`的 `forward(request, response)`方法的作用是将当前的请求对象（`request`）和响应对象（`response`）转发给服务器上的另一个资源（如 JSP、Servlet）。

> ✅ **答案：** C
> 📝 **解析：** RequestDispatcher`的 `forward(request, response)`方法的作用是将当前的请求对象（`request`）和响应对象（`response`）转发给服务器上的另一个资源（如 JSP、Servlet）。 这属于服务器端跳转，浏览器地址栏不会发生变化。 A选项是重定向（Redirect）的效果。 B和D选项的方向描述反了，是从当前页面转发到目标页面，而不是从目标页面转发回来。 C选项准确描述了 `forward`的作用。 -----

---

### 22. 以下关于 题目中指出类为 `bean.Student`，即类的全限定名为 `bean.Student` 的说法，错误的是？

> ✅ **答案：** B
> 📝 **解析：** 题目中指出类为 `bean.Student`，即类的全限定名为 `bean.Student`。 A选项：`class`属性值缺少包名前缀，应为 `"bean.Student"`。 B选项：`id`属性指定实例名，`class`属性指定类的全限定名 `"bean.Student"`，且 `scope`属性值合法，符合 `jsp:useBean`的语法要求。 C选项：同 A 选项，`class`属性值错误。 D选项：`jsp:getProperty`标签的 `name`属性应该对应 `jsp:useBean`中的 `id`属性值（即实例名），而 `property`属性才是指定 Bean 的属性名

---

### 23. 以下关于 代码中首先定义了一个整型变量 `counter`并赋值为 `10` 的描述，正确的是？

> ✅ **答案：** A
> 📝 **解析：** 代码中首先定义了一个整型变量 `counter`并赋值为 `10`。 <c:if test="${counter%2==1}">`判断 `counter`除以 2 的余数是否等于 1。因为 10 % 2 = 0，所以条件为假，`<c:set>`标签内的代码不会执行，因此 `isOdd`变量不会被设置为 `true`。 接下来进入 `<c:choose>`结构： <c:when test="${isOdd==true}">`判断 `isOdd`是否为 `true`。由于前面的 `if`条件未满足，`isOdd`未被赋值（在 EL 表达式中默认视为 `false`），所以该 `when`条件不成立

---

### 24. A选项：`GenericServlet`是一个抽象类，它实现了 `Servlet`和 `ServletConfig`接口，而不是一个接口。描述错误。

> ✅ **答案：** A
> 📝 **解析：** A选项：`GenericServlet`是一个抽象类，它实现了 `Servlet`和 `ServletConfig`接口，而不是一个接口。描述错误。 B选项：`GenericServlet`确实同时实现了 `Servlet`和 `ServletConfig`两个接口。描述正确。 C选项：在 `GenericServlet`类中，`service`方法是一个具体的方法（非抽象），它接收 `ServletRequest`和 `ServletResponse`参数。描述正确。 D选项：`GenericServlet`类中确实定义了一个 `ServletConfig`类型的私有成员变量（通常名为 `c

---

### 25. 当 Tomcat 端口号被占用时，需要修改 Tomcat 的配置文件来更换端口。

> ✅ **答案：** D
> 📝 **解析：** 当 Tomcat 端口号被占用时，需要修改 Tomcat 的配置文件来更换端口。 这个配置文件是 `server.xml`，它位于 Tomcat 安装目录的 `conf`文件夹下。 在 `server.xml`文件中，找到 `<Connector port="8080" ... />`标签，将 `port`属性的值修改为其他未被占用的端口号即可。 综合以上分析，正确的修改位置是 `\conf`文件夹 `\server.xml`文件中，修改 `Connector`的 `port`。 -----

---

### 26. JSP 的隐式对象（内置对象）是 JSP 容器自动创建并供开发者直接使用的对象，共有 9 个：`request`, `response`, `session`, `application`, `out`, `page`, `config`, `pageContext`, `exception`。

> ✅ **答案：** C
> 📝 **解析：** JSP 的隐式对象（内置对象）是 JSP 容器自动创建并供开发者直接使用的对象，共有 9 个：`request`, `response`, `session`, `application`, `out`, `page`, `config`, `pageContext`, `exception`。 A选项 `config`是隐式对象，代表 Servlet 的配置信息。 B选项 `session`是隐式对象，代表用户的会话。 C选项 `pageScope`不是隐式对象。在 JSP 2.0 引入的 EL（表达式语言）中，有 `pageScope`这个隐式对象，它代表了 PageContext 中的属

---

### 27. 在标准的 Java Web 应用目录结构中，部署描述符 `web.xml`必须放置在项目的 `WEB-INF`目录下。

> ✅ **答案：** C
> 📝 **解析：** 在标准的 Java Web 应用目录结构中，部署描述符 `web.xml`必须放置在项目的 `WEB-INF`目录下。 假设项目名为 `LoginDemo`，通常其 Web 应用的根目录就是 `LoginDemo`本身（或者 `LoginDemo/webapp`等），那么 `web.xml`的位置就是 `LoginDemo/WEB-INF/web.xml`。 A选项 `src`是存放 Java 源代码的地方。 B选项 `WEB-INF/bin`目录不存在。 C选项 `LoginDemo/logindemo/WEB-INF/`路径层级看起来不合理。 D选项 `LoginDemo/`是项目根目录，

---

### 28. 以下关于 B选项 `Filter`是 Java EE 中定义的接口，所有过滤器都必须实现 `javax.servlet.Filter`接口 的说法，错误的是？

> ✅ **答案：** B
> 📝 **解析：** A选项 `JSP`是一种动态网页技术，不是接口。 B选项 `Filter`是 Java EE 中定义的接口，所有过滤器都必须实现 `javax.servlet.Filter`接口。 C选项 `Listener`通常指的是监听器，监听器有多种接口，如 `ServletContextListener`、`HttpSessionListener`等，它们不是单一的 `Listener`接口。 D选项 `HttpServlet`是一个抽象类，它继承自 `GenericServlet`，用于处理 HTTP 协议的请求。

---

### 29. Session（会话）机制用于在服务器端跟踪用户的操作状态。

> ✅ **答案：** A
> 📝 **解析：** Session（会话）机制用于在服务器端跟踪用户的操作状态。 同一个用户在同一台浏览器中访问同一个Web项目的不同资源时，使用的是同一个Session对象。 不同用户访问同一个项目时，各自拥有独立的Session对象。 Session对象保存在服务器端的，通过浏览器地址栏无法直接访问（那是客户端行为）。 -----

---

### 30. 在Java Web中，实现重定向需要使用 `response`对象的 `sendRedirect()`方法。

> ✅ **答案：** C
> 📝 **解析：** 在Java Web中，实现重定向需要使用 `response`对象的 `sendRedirect()`方法。 request`对象主要用于处理客户端的请求，不能用来重定向。 正确的语法是 `response.sendRedirect("重定向的目标路径")`。 -----

---

### 31. 在JDBC中，加载数据库驱动通常使用反射机制中的 `Class.forName()`方法。

> ✅ **答案：** D
> 📝 **解析：** 在JDBC中，加载数据库驱动通常使用反射机制中的 `Class.forName()`方法。 该方法传入的参数必须是驱动类的全限定类名（即包含包名的完整类名）。 Oracle JDBC驱动类的全限定名通常是 `oracle.jdbc.driver.OracleDriver`。 A、B选项方法名错误；C选项传入的不是完整的类名（缺少包名前缀）；D选项写法完全正确。 -----

---

### 32. 在JSP的MVC设计模式中，不同的组件有不同的职责：

> ✅ **答案：** B
> 📝 **解析：** 在JSP的MVC设计模式中，不同的组件有不同的职责： Model（模型）：由Java Bean或EJB担当，负责处理业务逻辑和数据。 View（视图）：由JSP页面担当，负责数据的显示。 Controller（控制器）：由一个或多个Servlet对象担当，负责接收客户端的请求，调用模型进行处理，并决定跳转到哪个视图。 -----

---

### 33. Web应用的标准目录结构中，`WEB-INF`目录位于Web应用的根目录下。

> ✅ **答案：** D
> 📝 **解析：** Web应用的标准目录结构中，`WEB-INF`目录位于Web应用的根目录下。 WEB-INF`目录下的所有资源（包括JSP页面、HTML页面、classes目录、lib目录等）都是受保护的，不能直接通过浏览器的地址栏访问。 但是，这些资源可以通过Servlet或JSP页面的请求转发（RequestDispatcher.forward）来访问。 -----

---

### 34. 以下关于 在MVC模式中，正确的分工是：一般用Servlet来处理业务逻辑和控制流程，用JSP来实现页面显示 的说法，错误的是？

> ✅ **答案：** C
> 📝 **解析：** A选项：错误。在MVC模式中，正确的分工是：一般用Servlet来处理业务逻辑和控制流程，用JSP来实现页面显示。 B选项：正确，JSP页面会被Web容器翻译成Servlet的字节码文件执行。 C选项：正确，JSP是建立在Servlet技术之上的，可以看作是Servlet的简化和扩展。 D选项：正确，早期的JSP中大量使用脚本语言（Scriptlet）会导致代码和HTML混合，可读性和维护性变差。 好的，这是针对您上传的图片中题目的解答： ### 图1（第30题） 200 OK：请求成功。 302 Found：临时重定向。 404 Not Found：请求的资源不存在。 500 Interna

---

### 35. 以下关于 JavaBean 不需要像 Servlet 那样在 `web.xml`中注册，通常直接使用 `<jsp:useBean>`或在普通 Java 类中实例化 的说法，错误的是？

> ✅ **答案：** B
> 📝 **解析：** A选项：JavaBean 规范要求属性私有（private），通过公共的 getter/setter 方法访问，正确。 B选项：错误。JavaBean 不需要像 Servlet 那样在 `web.xml`中注册，通常直接使用 `<jsp:useBean>`或在普通 Java 类中实例化。 C选项：JavaBean 的属性名可以与表单控件的 `name`属性自动匹配，用于接收表单参数，正确。 D选项：JavaBean 类必须是 public 的，并且通常包含一个无参的公共构造器，正确。 -----

---

### 36. 以下关于 B选项：`Connection`接口代表与数据库的连接，本身不执行 SQL 的描述，正确的是？

> ✅ **答案：** A
> 📝 **解析：** A选项：`Statement`接口用于执行静态 SQL 语句并返回其生成的结果。 B选项：`Connection`接口代表与数据库的连接，本身不执行 SQL。 C选项：`DriverManager`用于管理 JDBC 驱动程序，建立数据库连接。 D选项：`ResultSet`用于封装查询结果集。 -----

---

### 37. 以下关于 在 JSP 的 Java 脚本（Scriptlet）中，可以使用 `//`进行单行注释，也可以使用 `/* */`进行多行注释 的说法，错误的是？

> ✅ **答案：** A
> 📝 **解析：** A选项：错误。在 JSP 的 Java 脚本（Scriptlet）中，可以使用 `//`进行单行注释，也可以使用 `/* */`进行多行注释。 B选项：JSP 本质就是 Servlet，可以在脚本中通过 `out.println()`等方式控制 HTML 标签的生成，正确。 C选项：JSP 既可以编写 HTML 等静态内容，也可以通过脚本处理动态内容，正确。 D选项：JSP 在第一次被访问时，会被 Web 容器（如 Tomcat）翻译成 Servlet（.java），然后编译成字节码（.class）文件执行，正确。 -----

---

### 38. 在 Java Web 中，所有的过滤器（Filter）都必须直接或间接实现 `javax.servlet.Filter`接口。

> ✅ **答案：** A
> 📝 **解析：** 在 Java Web 中，所有的过滤器（Filter）都必须直接或间接实现 `javax.servlet.Filter`接口。 HttpFilter`是 Spring 框架中的类，不是 Servlet 规范中的标准接口。 -----

---

### 39. 以下关于 B选项：`getInitParameter()`是 `ServletContext`的方法，用于获取 `web.xml`中配置的 `<context-param 的说法，错误的是？

> ✅ **答案：** A
> 📝 **解析：** A选项：`getRealPath("/")`方法用于获取当前 Web 应用在服务器文件系统上的真实路径，正确。 B选项：`getInitParameter()`是 `ServletContext`的方法，用于获取 `web.xml`中配置的 `<context-param>`全局参数，正确。 C选项：错误。`ServletContext`对象是在 Web 应用启动时创建的，对整个 Web 应用而言是唯一的，被所有用户共享，而不是每个用户独有一个。 D选项：`ServletContext`作为域对象，其作用域是整个 Web 应用，数据在所有用户间共享，正确。 题目要求选择“描述确”（应为“正确”

---

### 40. JSP 四大作用域从小到大依次为：pageContext（页面级别）< request（请求级别）< session（会话级别）< application（应用级别）。

> ✅ **答案：** C
> 📝 **解析：** JSP 四大作用域从小到大依次为：pageContext（页面级别）< request（请求级别）< session（会话级别）< application（应用级别）。 其中作用域最大的是 `application`。 -----

---

### 41. 以下关于 B选项：`getInitParameter()`是 `ServletConfig`接口中定义的方法，用于获取当前 Servlet 的初始化参数 的说法，错误的是？

> ✅ **答案：** C
> 📝 **解析：** A选项：`getServletContext()`是 `ServletConfig`接口中定义的方法，用于获取 `ServletContext`对象。 B选项：`getInitParameter()`是 `ServletConfig`接口中定义的方法，用于获取当前 Servlet 的初始化参数。 C选项：`getParameter()`是 `ServletRequest`接口中定义的方法，用于获取客户端请求参数，不属于 `ServletConfig`接口。 D选项：`getServletName()`是 `ServletConfig`接口中定义的方法。 -----

---

### 42. 以下关于 B选项：可以将 JavaWeb 项目打包为 `.war`(Web Archive) 文件进行部署，正确 的说法，错误的是？

> ✅ **答案：** D
> 📝 **解析：** A选项：将 Web 项目放在 Tomcat 的 `webapps`目录下即可完成部署，正确。 B选项：可以将 JavaWeb 项目打包为 `.war`(Web Archive) 文件进行部署，正确。 C选项：Tomcat 的默认端口确实是 8080，正确。 D选项：错误。JavaWeb 项目打包后的扩展名是 `.war`，而 `.jar`是普通的 Java 类库归档文件。 -----

---

### 43. 以下关于 request.getRequestDispatcher("a.jsp")`获取请求转发器 的描述，正确的是？

> ✅ **答案：** C
> 📝 **解析：** request.getRequestDispatcher("a.jsp")`获取请求转发器。 dispatcher.forward(request, response)`执行转发操作。 转发（Forward）是服务器内部行为，将请求从一个资源（如 Servlet）转发到服务器内部的另一个资源（如 a.jsp），客户端地址栏不变。 A、B 选项描述的是“重定向”（Redirect），与代码不符；D 选项方向反了。 -----

---

### 44. 在 JSP 中，定义成员方法（全局方法）必须使用 JSP 声明 标签。

> ✅ **答案：** D
> 📝 **解析：** 在 JSP 中，定义成员方法（全局方法）必须使用 JSP 声明 标签。 JSP 声明的语法是：`<%! Java代码 %>`。 观察选项，只有 A 选项的结构最接近 `<%! %>`（尽管图片中显示为 `<$ \%!=(string=...) \%!>`，这明显是 OCR 识别错误或图片显示异常，其本意就是指 `<%! %>`标签）。 以下是针对您上传的图片中题目的详细解答： ### 图1（第60题） 在 JSP 中，作用域从小到大依次为： pageContext：页面上下文，作用范围最小，只在当前 JSP 页面有效。 request：请求作用域，在一次请求/响应过程中有效。 session：

---

## 多选题（17题）

### 1. 图2（29. 多选题：Map 集合）

- **A.** 对：Map 以键值对（key -> value）形式存储。
- **B.** 对：Key 唯一，不能重复。
- **C.** 对：Scala 有可变 Map 和不可变 Map。
- **D.** 错：Map 可以遍历，例如 `for ((k,v) <- map)`。

> ✅ **答案：** 正确答案：A、B、C

---

### 2. 图3（28. 多选题：Set 集合）

- **A.** 对：Set 会自动去重。
- **B.** 对：分为可变 Set 和不可变 Set。
- **C.** 对：默认无序（除非使用有序 Set）。
- **D.** 错：Set 中元素不允许重复。

> ✅ **答案：** 正确答案：A、B、C

---

### 3. 图4（27. 多选题：定长数组 Array）

- **A.** 对：Array 长度初始化后固定不变。
- **B.** 对：支持通过下标（如 `arr(0)`）读取元素。
- **C.** 对：Array 内部元素可以修改（如 `arr(0)=10`）。
- **D.** 错：Array 不支持动态添加新元素（需用 ArrayBuffer）。

> ✅ **答案：** 正确答案：A、B、C

---

### 4. 图5（26. 多选题：可变集合）

- **A.** 对：ArrayBuffer 是可变数组。
- **B.** 对：ListBuffer 是可变列表。
- **C.** 对：可变 Set 属于可变集合。
- **D.** 错：不可变 Map 显然不是可变集合。

> ✅ **答案：** 正确答案：A、B、C

---

### 5. 图8（23. 多选题：数组相关类型）

- **A.** 对：Array 是定长数组。
- **B.** 对：ArrayBuffer 是变长数组。
- **C.** 错：List 是列表，不是数组。
- **D.** 错：Tuple 是元组，也不是数组。

> ✅ **答案：** 正确答案：A、B

---

### 6. 图9（22. 多选题：定义变量的合法关键字）

- **A.** 对：`val`定义不可变变量。
- **B.** 对：`var`定义可变变量。
- **C.** 错：Scala 没有 `let`。
- **D.** 错：Scala 没有 `const`。

> ✅ **答案：** 正确答案：A、B

---

### 7. 第7题（多选题）

> ✅ **答案：** A、B、E
> 📝 **解析：** 解析： A正确：`less`支持搜索（输入 `/keyword`向前搜索，`?keyword`向后搜索）。 B正确：`less`可通过 PageDown/PageUp（或方向键）向前/向后翻页。 C错误：`less`支持双向翻页，而 `more`只能向前。 D错误：`less`支持行号显示（如 `-N`参数）。 E正确：`less`到达文件末尾时会自动退出（或按 `q`退出）。

---

### 8. 第6题（多选题）

> ✅ **答案：** C、D、E
> 📝 **解析：** 解析： A错误：`tail`看末尾，开头用 `head`。 B错误：分页查看用 `more`/`less`。 C正确：`tail -f`可循环读取（跟踪文件实时更新）。 D正确：`tail`默认查看文件末尾内容。 E正确：`tail -F --sleep-interval=1`可设置刷新间隔（如每秒刷新一次）。

---

### 9. 以下关于 * A选项：ServletContext 代表整个 Web 应用，所有 Servlet 共享该对象，正确 的描述，正确的是？

> ✅ **答案：** ABCD
> 📝 **解析：** * A选项：ServletContext 代表整个 Web 应用，所有 Servlet 共享该对象，正确。 B选项：ServletContext 的中文翻译即为“Servlet 上下文”，正确。 C选项：可以通过 `getInitParameter()`方法获取 `web.xml`中配置的全局初始化参数，正确。 D选项：服务器会为每个 Web 应用（工程）创建一个唯一的 ServletContext 对象，正确。 -----

---

### 10. 以下关于 * ServletConfig 接口中定义了以下四个方法： `getServletName()`：获取 Servlet 的名称 的描述，正确的是？

> ✅ **答案：** ABCD
> 📝 **解析：** * ServletConfig 接口中定义了以下四个方法： `getServletName()`：获取 Servlet 的名称。 `getServletContext()`：获取 ServletContext 对象。 `getInitParameter(String name)`：获取指定名称的初始化参数。 `getInitParameterNames()`：获取所有初始化参数的名称枚举。 A、B、C、D 四个选项均为该接口下的方法。 -----

---

### 11. 以下关于 * HttpServletRequest 接口中获取请求参数的方法包括： `getParameter(String name)`：获取指定名称的单值参数 的描述，正确的是？

> ✅ **答案：** ABCD
> 📝 **解析：** * HttpServletRequest 接口中获取请求参数的方法包括： `getParameter(String name)`：获取指定名称的单值参数。 `getParameterValues(String name)`：获取指定名称的多值参数（如复选框）。 `getParameterNames()`：获取所有参数名的枚举。 `getParameterMap()`：获取所有参数名和参数值的 Map 集合。 A、B、C、D 四个选项均正确。 -----

---

### 12. 以下关于 * FilterConfig 接口提供了获取过滤器配置信息的方法： `getServletContext()`：获取 Servlet 上下文对象 的描述，正确的是？

> ✅ **答案：** ABCD
> 📝 **解析：** * FilterConfig 接口提供了获取过滤器配置信息的方法： `getServletContext()`：获取 Servlet 上下文对象。 `getInitParameter(String name)`：获取过滤器的初始化参数。 `getFilterName()`：获取过滤器的名称。 `getInitParameterNames()`：获取所有初始化参数的名称枚举。 A、B、C、D 四个选项均正确。 -----

---

### 13. 以下关于 * A选项：在 `ServletContext`的路径中，`/`确实代表 Web 应用的根目录（上下文环境根），正确 的描述，正确的是？

> ✅ **答案：** ABCD
> 📝 **解析：** * A选项：在 `ServletContext`的路径中，`/`确实代表 Web 应用的根目录（上下文环境根），正确。 B选项：`getRealPath("/")`方法的作用就是根据虚拟路径获取服务器文件系统中的绝对路径，正确。 C选项：`getResource("/")`返回的是一个 `URL`对象，正确。 D选项：调用 `getRealPath`和 `getResource`时，参数路径确实必须以 `/`开头，正确。 -----

---

### 14. 以下关于 * A选项：继承 `HttpServlet`类是编写 Servlet 最常用、最推荐的方式，正确 的描述，正确的是？

> ✅ **答案：** ABCD
> 📝 **解析：** * A选项：继承 `HttpServlet`类是编写 Servlet 最常用、最推荐的方式，正确。 B选项：Servlet 是 Java 类，类名结尾叫什么无所谓，只要符合 Java 命名规范并通过配置（注解或 web.xml）告诉容器即可，技术上可行，正确。 C选项：继承 `GenericServlet`类（它是 Servlet 接口的通用实现）也是可以的，正确。 D选项：直接实现 `Servlet`接口也是合法的，只是需要自己实现所有方法，正确。 以下是针对您上传的10张图片中填空题的解答：

---

### 15. 以下关于 * JSP 脚本元素（Scripting Elements）根据作用不同分为三种： 1. 脚本片段（Scriptlet）：`<% Java代码 %>`—— 用于 的描述，正确的是？

> ✅ **答案：** 脚本片段（或Scriptlet）、表达式（或Expression）、声明（或Declaration）
> 📝 **解析：** * JSP 脚本元素（Scripting Elements）根据作用不同分为三种： 1. 脚本片段（Scriptlet）：`<% Java代码 %>`—— 用于编写可执行逻辑。 2. 表达式（Expression）：`<%= 表达式 %>`—— 用于向页面输出结果。 3. 声明（Declaration）：`<%! 声明成员 %>`—— 用于声明全局变量或方法。 -----

---

### 16. 以下关于 * JSP 四大域对象（pageContext, request, session, application）都提供了统一的方法来操作属性： 获取数据：`get 的描述，正确的是？

> ✅ **答案：** getAttribute()、removeAttribute()
> 📝 **解析：** * JSP 四大域对象（pageContext, request, session, application）都提供了统一的方法来操作属性： 获取数据：`getAttribute(String name)` 删除数据：`removeAttribute(String name)` -----

---

### 17. 第35题：安装CentOS7时，以下哪三步骤是正确的？

> ✅ **答案：** A 选择简体中文, B 手动分区并设置挂载点, C 设置root密码
> 📝 **解析：** * 这是CentOS 7图形化安装界面的标准流程：选择语言 -> 设置安装位置（分区） -> 设置网络和主机名（可选） -> 设置Root密码 -> 开始安装。选项D“点击安装位置”只是进入配置界面，并非完成步骤。

---

## 判断题（2题）

### 1. 第12题（判断题）

> ✅ **答案：** A（对）
> 📝 **解析：** 解析：`less`命令支持向前（PageUp）和向后（PageDown）翻页，还支持搜索、跳转行等功能，灵活性比 `more`更高。

---

### 2. 第11题（判断题）

> ✅ **答案：** B（错）
> 📝 **解析：** 解析：`tail`命令的默认功能是查看文件的末尾内容（如前10行）；若要查看文件开头，应使用 `head`命令。`tail -f`还可用于跟踪文件实时更新。

---

## 填空题（82题）

### 1. 第4题（单选题）

> ✅ **答案：** B
> 📝 **解析：** 解析：`head`默认显示文件前10行（可用 `-n`指定行数）；`cat`全量输出，`tail`看末尾，`more`分页。

---

### 2. 第3题（单选题）

> ✅ **答案：** B
> 📝 **解析：** 解析：`file`命令通过内容分析文件类型（如文本、二进制、压缩包）；`more`分页，`ls`列目录，`cat`查看内容。

---

### 3. 第1题（单选题）

> ✅ **答案：** A
> 📝 **解析：** 解析：`more`是经典的“分页查看”工具（一次性加载，适合大文件）；`less`更灵活但非传统“分页”定义，`head`看开头，`cat`全量输出。

---

### 4. 第2题（单选题）

> ✅ **答案：** C
> 📝 **解析：** * A选项：Tomcat 的核心配置文件 `server.xml`位于 Tomcat 安装目录下的 `conf`文件夹中，而不是 `bin`文件夹。 B选项：Web 应用程序的部署描述符 `web.xml`位于项目目录下的 `WEB-INF`子目录中，而不是整个 Web 服务目录的 `WEB-INF`。 C选项：在 Servlet 3.0 及以上版本中，确实可以使用 `@WebServlet`注解直接在 Java 类上配置 Servlet 的映射信息，无需在 `web.xml`中配置，说法正确。 D选项：虽然传统 Web 应用的部署文件名为 `web.xml`，但 A 选项的描述是明显错误的，

---

### 5. 第5题（单选题）

> ✅ **答案：** A
> 📝 **解析：** * 代码中首先定义了一个整型变量 `counter`并赋值为 `10`。 `<c:if test="${counter%2==1}">`判断 `counter`除以 2 的余数是否等于 1。因为 10 % 2 = 0，所以条件为假，`<c:set>`标签内的代码不会执行，因此 `isOdd`变量不会被设置为 `true`。 接下来进入 `<c:choose>`结构： `<c:when test="${isOdd==true}">`判断 `isOdd`是否为 `true`。由于前面的 `if`条件未满足，`isOdd`未被赋值（在 EL 表达式中默认视为 `false`），所以该 `when`条

---

### 6. 第6题（单选题）

> ✅ **答案：** A
> 📝 **解析：** * A选项：`GenericServlet`是一个抽象类，它实现了 `Servlet`和 `ServletConfig`接口，而不是一个接口。描述错误。 B选项：`GenericServlet`确实同时实现了 `Servlet`和 `ServletConfig`两个接口。描述正确。 C选项：在 `GenericServlet`类中，`service`方法是一个具体的方法（非抽象），它接收 `ServletRequest`和 `ServletResponse`参数。描述正确。 D选项：`GenericServlet`类中确实定义了一个 `ServletConfig`类型的私有成员变量（通常名为 

---

### 7. 第7题（单选题）

> ✅ **答案：** D
> 📝 **解析：** * 当 Tomcat 端口号被占用时，需要修改 Tomcat 的配置文件来更换端口。 这个配置文件是 `server.xml`，它位于 Tomcat 安装目录的 `conf`文件夹下。 在 `server.xml`文件中，找到 `<Connector port="8080" ... />`标签，将 `port`属性的值修改为其他未被占用的端口号即可。 综合以上分析，正确的修改位置是 `\conf`文件夹 `\server.xml`文件中，修改 `Connector`的 `port`。 -----

---

### 8. 第8题（单选题）

> ✅ **答案：** C
> 📝 **解析：** * JSP 的隐式对象（内置对象）是 JSP 容器自动创建并供开发者直接使用的对象，共有 9 个：`request`, `response`, `session`, `application`, `out`, `page`, `config`, `pageContext`, `exception`。 A选项 `config`是隐式对象，代表 Servlet 的配置信息。 B选项 `session`是隐式对象，代表用户的会话。 C选项 `pageScope`不是隐式对象。在 JSP 2.0 引入的 EL（表达式语言）中，有 `pageScope`这个隐式对象，它代表了 PageContext 中

---

### 9. 第9题（单选题）

> ✅ **答案：** C
> 📝 **解析：** * 在标准的 Java Web 应用目录结构中，部署描述符 `web.xml`必须放置在项目的 `WEB-INF`目录下。 假设项目名为 `LoginDemo`，通常其 Web 应用的根目录就是 `LoginDemo`本身（或者 `LoginDemo/webapp`等），那么 `web.xml`的位置就是 `LoginDemo/WEB-INF/web.xml`。 A选项 `src`是存放 Java 源代码的地方。 B选项 `WEB-INF/bin`目录不存在。 C选项 `LoginDemo/logindemo/WEB-INF/`路径层级看起来不合理。 D选项 `LoginDemo/`是项目根目

---

### 10. 第10题（单选题）

> ✅ **答案：** B
> 📝 **解析：** * A选项 `JSP`是一种动态网页技术，不是接口。 B选项 `Filter`是 Java EE 中定义的接口，所有过滤器都必须实现 `javax.servlet.Filter`接口。 C选项 `Listener`通常指的是监听器，监听器有多种接口，如 `ServletContextListener`、`HttpSessionListener`等，它们不是单一的 `Listener`接口。 D选项 `HttpServlet`是一个抽象类，它继承自 `GenericServlet`，用于处理 HTTP 协议的请求。

---

### 11. 第15题（单选题）

> ✅ **答案：** A
> 📝 **解析：** * Session（会话）机制用于在服务器端跟踪用户的操作状态。 同一个用户在同一台浏览器中访问同一个Web项目的不同资源时，使用的是同一个Session对象。 不同用户访问同一个项目时，各自拥有独立的Session对象。 Session对象保存在服务器端的，通过浏览器地址栏无法直接访问（那是客户端行为）。 -----

---

### 12. 第16题（单选题）

> ✅ **答案：** C
> 📝 **解析：** * 在Java Web中，实现重定向需要使用 `response`对象的 `sendRedirect()`方法。 `request`对象主要用于处理客户端的请求，不能用来重定向。 正确的语法是 `response.sendRedirect("重定向的目标路径")`。 -----

---

### 13. 第17题（单选题）

> ✅ **答案：** D
> 📝 **解析：** * 在JDBC中，加载数据库驱动通常使用反射机制中的 `Class.forName()`方法。 该方法传入的参数必须是驱动类的全限定类名（即包含包名的完整类名）。 Oracle JDBC驱动类的全限定名通常是 `oracle.jdbc.driver.OracleDriver`。 A、B选项方法名错误；C选项传入的不是完整的类名（缺少包名前缀）；D选项写法完全正确。 -----

---

### 14. 第18题（单选题）

> ✅ **答案：** B
> 📝 **解析：** * 在JSP的MVC设计模式中，不同的组件有不同的职责： Model（模型）：由Java Bean或EJB担当，负责处理业务逻辑和数据。 View（视图）：由JSP页面担当，负责数据的显示。 Controller（控制器）：由一个或多个Servlet对象担当，负责接收客户端的请求，调用模型进行处理，并决定跳转到哪个视图。 -----

---

### 15. 第19题（单选题）

> ✅ **答案：** D
> 📝 **解析：** * Web应用的标准目录结构中，`WEB-INF`目录位于Web应用的根目录下。 `WEB-INF`目录下的所有资源（包括JSP页面、HTML页面、classes目录、lib目录等）都是受保护的，不能直接通过浏览器的地址栏访问。 但是，这些资源可以通过Servlet或JSP页面的请求转发（RequestDispatcher.forward）来访问。 -----

---

### 16. 第20题（单选题）

> ✅ **答案：** A
> 📝 **解析：** * A选项：错误。在MVC模式中，正确的分工是：一般用Servlet来处理业务逻辑和控制流程，用JSP来实现页面显示。 B选项：正确，JSP页面会被Web容器翻译成Servlet的字节码文件执行。 C选项：正确，JSP是建立在Servlet技术之上的，可以看作是Servlet的简化和扩展。 D选项：正确，早期的JSP中大量使用脚本语言（Scriptlet）会导致代码和HTML混合，可读性和维护性变差。 好的，这是针对您上传的图片中题目的解答：

---

### 17. 以下关于 * 200 OK：请求成功 的说法，错误的是？

> ✅ **答案：** 见解析
> 📝 **解析：** * 200 OK：请求成功。 302 Found：临时重定向。 404 Not Found：请求的资源不存在。 500 Internal Server Error：服务器内部错误。 常见的HTTP状态码中不存在选项C（302）以外的其他三个选项之外的常见状态码，但根据题目要求选择“不存在”的，结合选项设置，C 302 是实际存在的重定向状态码，而题目问“哪一不存在”，推测是出题者笔误或选项设置问题，但在标准状态码中，这四个都是存在的。不过结合下一题（图10）专门考重定向，此处可能是想考“哪个不是常见的成功或错误码”，但严格来说302是存在的。如果必须选一个，可能是题目有误，但按常规考试逻辑，此

---

### 18. 以下关于 * `page`指令的 `import`属性专门用于导入 Java 包或类，例如 `<%@ page import="java.util." %>` 的描述，正确的是？

> ✅ **答案：** A
> 📝 **解析：** * `page`指令的 `import`属性专门用于导入 Java 包或类，例如 `<%@ page import="java.util." %>`。 `language`指定脚本语言（如Java）。 `extends`指定JSP生成的Servlet继承的父类。 `contentType`设置响应内容类型和字符编码。 -----

---

### 19. 以下关于 * 数据存储在 `request`作用域中，key 为 `"login"`，其值是一个 Map 的描述，正确的是？

> ✅ **答案：** A
> 📝 **解析：** * 数据存储在 `request`作用域中，key 为 `"login"`，其值是一个 Map。 Map 中有一个 key 为 `"student.name"`（包含特殊字符`.`）。 在 EL 表达式中，访问 Map 的值有两种方式： 1. `${map.key}`：要求 key 符合 Java 标识符命名规则（不能有`.`）。 2. `${map["key"]}`：可以处理包含特殊字符的 key。 因为 key 是 `"student.name"`，包含点号，所以必须使用 `["student.name"]`的形式。 同时，存入 request 时的 attribute name 是 `l

---

### 20. 以下关于 * JSP 表达式的语法是 `<%= 表达式 %>`，用于向页面输出表达式的计算结果 的说法，错误的是？

> ✅ **答案：** C
> 📝 **解析：** * JSP 表达式的语法是 `<%= 表达式 %>`，用于向页面输出表达式的计算结果。 表达式 `"1+6"`是一个字符串，而不是计算式。因此，它会原样输出字符串 `1+6`，而不会计算成 `7`。 注意：如果是 `<%= 1+6 %>`，则会输出 `7`。 -----

---

### 21. 以下关于 * Servlet 生命周期方法： `init()`：初始化，只执行一次 的描述，正确的是？

> ✅ **答案：** D
> 📝 **解析：** * Servlet 生命周期方法： `init()`：初始化，只执行一次。 `service()`：处理请求，每次请求都会调用。 `doGet()/doPost()`：处理具体的 GET/POST 请求。 `destroy()`：销毁方法，当 Servlet 被卸载或服务器关闭时调用，用于释放资源。 -----

---

### 22. 以下关于 * Servlet 接口中定义的核心方法是 `service(ServletRequest req, ServletResponse res)` 的描述，正确的是？

> ✅ **答案：** B
> 📝 **解析：** * Servlet 接口中定义的核心方法是 `service(ServletRequest req, ServletResponse res)`。 HttpServlet 中提供了 `doGet()`, `doPost()`等方法。 Servlet 接口及 HttpServlet 类中均没有定义 `close()`方法。 -----

---

### 23. 以下关于 * JSP 指令（Directive）的语法格式是：`<%@ directive attribute="value" %>` 它以 `<%@`开始，以 `%>` 的说法，错误的是？

> ✅ **答案：** B
> 📝 **解析：** * JSP 指令（Directive）的语法格式是：`<%@ directive attribute="value" %>` 它以 `<%@`开始，以 `%>`结束。 选项 B 的描述最接近，虽然它写的 `“<%!@(MISSING)“`可能是 OCR 识别错误，实际应为 `<%@`。 -----

---

### 24. 以下关于 * A、B、D 选项描述均正确 的说法，错误的是？

> ✅ **答案：** C
> 📝 **解析：** * A、B、D 选项描述均正确。 C 选项描述错误：在 MVC 模式中，通常用 Servlet 来处理业务逻辑和控制流程，用 JSP 来实现页面显示。C 选项说反了。 -----

---

### 25. 以下关于 * `<context-param>`配置的是上下文参数（Application Scope） 的描述，正确的是？

> ✅ **答案：** B
> 📝 **解析：** * `<context-param>`配置的是上下文参数（Application Scope）。 在 Servlet 中，可以通过 `ServletContext`对象来获取这些参数。 `getInitParameter("param-name")`是 `ServletContext`接口中定义的方法。 -----

---

### 26. 以下关于 * 302 Found：表示临时重定向，资源临时从不同的 URI 响应请求 的说法，错误的是？

> ✅ **答案：** A
> 📝 **解析：** * 302 Found：表示临时重定向，资源临时从不同的 URI 响应请求。 200：成功。 404：未找到资源。 500：服务器内部错误。

---

### 27. 以下关于 * 代码位于 `<%! %>`声明标签中，用于声明成员变量和方法 的说法，错误的是？

> ✅ **答案：** D
> 📝 **解析：** * 代码位于 `<%! %>`声明标签中，用于声明成员变量和方法。 A选项：代码中存在拼写错误，`retrun`应为 `return`，因此无法通过编译。A错误。 B选项：`temp`是成员变量，其作用域是整个 JSP 页面转换后的 Servlet 类，在 `convertMoney`方法中可以正常访问。B错误。 C选项：`out`是 JSP 的内置对象（隐式对象），在 JSP 声明中可以直接使用，无需额外声明。C错误。 D选项：由于存在语法错误（拼写错误），程序无法通过编译。这是最准确的描述。 -----

---

### 28. 以下关于 * 在 Servlet 中获取 POST 请求参数时，为了防止中文乱码，需要在获取参数之前设置请求体的字符编码 的描述，正确的是？

> ✅ **答案：** A
> 📝 **解析：** * 在 Servlet 中获取 POST 请求参数时，为了防止中文乱码，需要在获取参数之前设置请求体的字符编码。 `request.setCharacterEncoding("utf-8")`正是用于设置请求内容的编码格式。 B选项是 JSP 页面指令中的写法；C、D选项是设置响应（Response）的编码，与获取请求参数无关。 -----

---

### 29. 以下关于 * A选项：GET 方法会将参数暴露在 URL 中，不适合提交敏感数据（如密码），应使用 POST 的说法，错误的是？

> ✅ **答案：** D
> 📝 **解析：** * A选项：GET 方法会将参数暴露在 URL 中，不适合提交敏感数据（如密码），应使用 POST。A错误。 B选项：GET 请求的 URL 可以被收藏为书签，POST 请求的数据在请求体中，无法被收藏。B错误。 C选项：GET 请求通常比 POST 请求更快，因为 GET 只需发送一次请求头，而 POST 通常需要发送两次（先发头，再发体）。C错误。 D选项：GET 请求对 URL 长度有限制，而 POST 请求提交的数据量理论上没有限制（受服务器配置限制）。D正确。 -----

---

### 30. 以下关于 * 数据被存入 Session 作用域，key 为 `"myuser"` 的说法，错误的是？

> ✅ **答案：** C
> 📝 **解析：** * 数据被存入 Session 作用域，key 为 `"myuser"`。 在 EL 表达式中，访问对象的属性使用 `.`操作符（点运算符）。 因此，要取出 `myuser`对象中的 `name`属性，正确的 EL 表达式是 `${myuser.name}`。 `${user.name}`错误，因为 Session 中的属性名是 `myuser`而不是 `user`。 -----

---

### 31. 以下关于 * JSP 表达式 `<%= expression %>`用于输出表达式的计算结果 的说法，错误的是？

> ✅ **答案：** C
> 📝 **解析：** * JSP 表达式 `<%= expression %>`用于输出表达式的计算结果。 表达式 `"1+4"`是一个字符串常量，而不是数学运算式。 因此，该代码会原样输出字符串 `1+4`，而不会计算其数值结果。 -----

---

### 32. 以下关于 * JSP（JavaServer Pages）本质上是一个简化的 Servlet 设计 的说法，错误的是？

> ✅ **答案：** B
> 📝 **解析：** * JSP（JavaServer Pages）本质上是一个简化的 Servlet 设计。 当客户端第一次请求 JSP 页面时，Web 容器（如 Tomcat）会先将 JSP 文件翻译成一个 `.java`源文件（Servlet），然后再将其编译成 `.class`字节码文件，最后载入容器执行。 A选项说“无需转译”错误；C、D选项忽略了 JSP 会被编译成 Servlet 的过程。 -----

---

### 33. 以下关于 * `HttpServletRequest`接口中，用于获取客户端请求参数的方法是 `getParameter(String name)` 的描述，正确的是？

> ✅ **答案：** C
> 📝 **解析：** * `HttpServletRequest`接口中，用于获取客户端请求参数的方法是 `getParameter(String name)`。 `getAttribute()`用于获取在请求范围内设置的属性值，而非请求参数。 -----

---

### 34. 以下关于 * 在 Java 中，创建一个过滤器（Filter）需要实现 `javax.servlet.Filter`接口 的描述，正确的是？

> ✅ **答案：** A
> 📝 **解析：** * 在 Java 中，创建一个过滤器（Filter）需要实现 `javax.servlet.Filter`接口。 实现接口的关键字是 `implements`。 `extends`用于继承类。 -----

---

### 35. * 题目询问 JSP 中哪个作用域的范围最小

> ✅ **答案：** C
> 📝 **解析：** * 题目询问 JSP 中哪个作用域的范围最小。 JSP 四大作用域从小到大依次为：page（页面级别，最小） < request（请求级别） < session（会话级别） < application（应用级别，最大）。 因此范围最小的是 `page`。 -----

---

### 36. 以下关于 * JSP 的隐式对象（内置对象）共有 9 个：`request`, `response`, `session`, `application`, `out`,  的说法，错误的是？

> ✅ **答案：** C
> 📝 **解析：** * JSP 的隐式对象（内置对象）共有 9 个：`request`, `response`, `session`, `application`, `out`, `page`, `config`, `pageContext`, `exception`。 A `pageContext`、B `request`都是隐式对象。 C `param`和 D `cookie`属于 EL（表达式语言）的隐式对象，而不是 JSP Scriptlet 中的隐式对象。 题目要求选出“不是”的选项，且是单选题。在严格的 JSP 九大内置对象语境下，`param`和 `cookie`都不属于。但通常此类考题中，`coo

---

### 37. 第50题（图1）

> ✅ **答案：** B
> 📝 **解析：** * A选项：JavaBean 规范要求属性私有（private），通过公共的 getter/setter 方法访问，正确。 B选项：错误。JavaBean 不需要像 Servlet 那样在 `web.xml`中注册，通常直接使用 `<jsp:useBean>`或在普通 Java 类中实例化。 C选项：JavaBean 的属性名可以与表单控件的 `name`属性自动匹配，用于接收表单参数，正确。 D选项：JavaBean 类必须是 public 的，并且通常包含一个无参的公共构造器，正确。 -----

---

### 38. 第49题（图2）

> ✅ **答案：** A
> 📝 **解析：** * A选项：`Statement`接口用于执行静态 SQL 语句并返回其生成的结果。 B选项：`Connection`接口代表与数据库的连接，本身不执行 SQL。 C选项：`DriverManager`用于管理 JDBC 驱动程序，建立数据库连接。 D选项：`ResultSet`用于封装查询结果集。 -----

---

### 39. 第48题（图3）

> ✅ **答案：** A
> 📝 **解析：** * A选项：错误。在 JSP 的 Java 脚本（Scriptlet）中，可以使用 `//`进行单行注释，也可以使用 `/ /`进行多行注释。 B选项：JSP 本质就是 Servlet，可以在脚本中通过 `out.println()`等方式控制 HTML 标签的生成，正确。 C选项：JSP 既可以编写 HTML 等静态内容，也可以通过脚本处理动态内容，正确。 D选项：JSP 在第一次被访问时，会被 Web 容器（如 Tomcat）翻译成 Servlet（.java），然后编译成字节码（.class）文件执行，正确。 -----

---

### 40. 第47题（图4）

> ✅ **答案：** A
> 📝 **解析：** * 在 Java Web 中，所有的过滤器（Filter）都必须直接或间接实现 `javax.servlet.Filter`接口。 `HttpFilter`是 Spring 框架中的类，不是 Servlet 规范中的标准接口。 -----

---

### 41. 第46题（图5）

> ✅ **答案：** A
> 📝 **解析：** * A选项：`getRealPath("/")`方法用于获取当前 Web 应用在服务器文件系统上的真实路径，正确。 B选项：`getInitParameter()`是 `ServletContext`的方法，用于获取 `web.xml`中配置的 `<context-param>`全局参数，正确。 C选项：错误。`ServletContext`对象是在 Web 应用启动时创建的，对整个 Web 应用而言是唯一的，被所有用户共享，而不是每个用户独有一个。 D选项：`ServletContext`作为域对象，其作用域是整个 Web 应用，数据在所有用户间共享，正确。 题目要求选择“描述确”（应为“正

---

### 42. 第45题（图6）

> ✅ **答案：** C
> 📝 **解析：** * JSP 四大作用域从小到大依次为：pageContext（页面级别）< request（请求级别）< session（会话级别）< application（应用级别）。 其中作用域最大的是 `application`。 -----

---

### 43. 第44题（图7）

> ✅ **答案：** C
> 📝 **解析：** * A选项：`getServletContext()`是 `ServletConfig`接口中定义的方法，用于获取 `ServletContext`对象。 B选项：`getInitParameter()`是 `ServletConfig`接口中定义的方法，用于获取当前 Servlet 的初始化参数。 C选项：`getParameter()`是 `ServletRequest`接口中定义的方法，用于获取客户端请求参数，不属于 `ServletConfig`接口。 D选项：`getServletName()`是 `ServletConfig`接口中定义的方法。 -----

---

### 44. 第43题（图8）

> ✅ **答案：** D
> 📝 **解析：** * A选项：将 Web 项目放在 Tomcat 的 `webapps`目录下即可完成部署，正确。 B选项：可以将 JavaWeb 项目打包为 `.war`(Web Archive) 文件进行部署，正确。 C选项：Tomcat 的默认端口确实是 8080，正确。 D选项：错误。JavaWeb 项目打包后的扩展名是 `.war`，而 `.jar`是普通的 Java 类库归档文件。 -----

---

### 45. 第42题（图9）

> ✅ **答案：** C
> 📝 **解析：** * `request.getRequestDispatcher("a.jsp")`获取请求转发器。 `dispatcher.forward(request, response)`执行转发操作。 转发（Forward）是服务器内部行为，将请求从一个资源（如 Servlet）转发到服务器内部的另一个资源（如 a.jsp），客户端地址栏不变。 A、B 选项描述的是“重定向”（Redirect），与代码不符；D 选项方向反了。 -----

---

### 46. 第41题（图10）

> ✅ **答案：** A
> 📝 **解析：** * 在 JSP 中，定义成员方法（全局方法）必须使用 JSP 声明 标签。 JSP 声明的语法是：`<%! Java代码 %>`。 观察选项，只有 A 选项的结构最接近 `<%! %>`（尽管图片中显示为 `<$ \%!=(string=...) \%!>`，这明显是 OCR 识别错误或图片显示异常，其本意就是指 `<%! %>`标签）。 以下是针对您上传的图片中题目的详细解答：

---

### 47. 以下关于 * 在 JSP 中，作用域从小到大依次为： pageContext：页面上下文，作用范围最小，只在当前 JSP 页面有效 的说法，错误的是？

> ✅ **答案：** B
> 📝 **解析：** * 在 JSP 中，作用域从小到大依次为： pageContext：页面上下文，作用范围最小，只在当前 JSP 页面有效。 request：请求作用域，在一次请求/响应过程中有效。 session：会话作用域，在一个用户会话期间有效。 application：应用作用域，作用范围最大，在整个 Web 应用运行期间有效。 选项 A 中的 `page`是 JSP 隐式对象，不是作用域名（作用域名是 `pageContext`）；选项 C 顺序错误；选项 D 是 EL 表达式中的隐式对象，不是 JSP 的作用域名称。 -----

---

### 48. 以下关于 * 题干代码：`<%@ page ... errorPage="error.jsp" isErrorPage="false" %>` A选项：错误 的说法，错误的是？

> ✅ **答案：** 见解析
> 📝 **解析：** * 题干代码：`<%@ page ... errorPage="error.jsp" isErrorPage="false" %>` A选项：错误。当一个页面设置了 `errorPage`属性时，并不强制要求必须设置 `isErrorPage`属性。`isErrorPage`默认值为 `false`，可以不写。 B选项：错误。`exception`对象是 JSP 的隐式对象之一，但它仅在 `isErrorPage="true"`的页面中才可用。当前页面 `isErrorPage="false"`，因此不能使用 `exception`对象。 C选项：正确。设置 `errorPage="error

---

### 49. 以下关于 * 本题考查 JSP `page`指令的属性 的说法，错误的是？

> ✅ **答案：** C
> 📝 **解析：** * 本题考查 JSP `page`指令的属性。 `isErrorPage`属性用于声明当前页面是否为错误处理页面。 当 `isErrorPage="true"`时，该页面可以使用内置的 `exception`对象来处理异常。 A选项 `pageEndcoding`属性用于设置页面编码；B选项 `info`属性用于设置页面信息；D选项 `errorPage`属性用于指定当前页面出错时跳转的页面，而非声明自身为错误页。 -----

---

### 50. 以下关于 * JSTL（JavaServer Pages Standard Tag Library）中用于循环遍历集合或数组的标签是 `<c:forEach>` 的说法，错误的是？

> ✅ **答案：** D
> 📝 **解析：** * JSTL（JavaServer Pages Standard Tag Library）中用于循环遍历集合或数组的标签是 `<c:forEach>`。 `<c:every>`和 `<c:item>`不是标准的 JSTL 标签。 -----

---

### 51. 以下关于 * A选项：`<%! String name="Jack"; %>`是 JSP 声明，语法正确 的说法，错误的是？

> ✅ **答案：** 见解析
> 📝 **解析：** * A选项：`<%! String name="Jack"; %>`是 JSP 声明，语法正确。 B选项：`<%! public void say(){System.out.println("HelloWorld");} %>`是 JSP 声明，语法正确（注意图片中 `say(`后面可能有 OCR 识别缺失，但不影响判断）。 C选项：`<%= 10/2 %>`是 JSP 表达式，用于输出表达式的值，语法正确。 D选项：`<%! String name = "Jack"; %>`是 JSP 声明，语法正确。 注意：如果图片中 D 选项写成了 `<%!! String name = "Jack";

---

### 52. 以下关于 * `page`指令（`<%@ page ... %>`）用于定义整个 JSP 页面的属性，如 `language`、`import`、`contentType 的描述，正确的是？

> ✅ **答案：** B
> 📝 **解析：** * `page`指令（`<%@ page ... %>`）用于定义整个 JSP 页面的属性，如 `language`、`import`、`contentType`、`errorPage`等。 A选项是 `<jsp:include>`动作的功能；C选项是 `<%@ include %>`指令或 `<jsp:include>`动作的功能；D选项与 `page`指令无关。 -----

---

### 53. 以下关于 * 在 MVC 设计模式中： Model（模型）：由 JavaBean 或 EJB 充当，负责业务数据和业务逻辑 的描述，正确的是？

> ✅ **答案：** A
> 📝 **解析：** * 在 MVC 设计模式中： Model（模型）：由 JavaBean 或 EJB 充当，负责业务数据和业务逻辑。 View（视图）：由 JSP 页面或 HTML 充当，负责数据显示。 Controller（控制器）：由一个或多个 Servlet 对象充当，负责接收请求、调用模型、选择视图。 -----

---

### 54. 以下关于 * 在 Servlet 或 JSP 中，设置请求体（Request Body）的字符编码以防止中文乱码，正确的方法是 `request.setCharacter 的说法，错误的是？

> ✅ **答案：** C
> 📝 **解析：** * 在 Servlet 或 JSP 中，设置请求体（Request Body）的字符编码以防止中文乱码，正确的方法是 `request.setCharacterEncoding("UTF-8")`。 A、B 选项方法名错误；D 选项是设置响应的内容类型。 -----

---

### 55. 以下关于 * Servlet 生命周期方法： `init()`：初始化，只执行一次 的描述，正确的是？

> ✅ **答案：** D
> 📝 **解析：** * Servlet 生命周期方法： `init()`：初始化，只执行一次。 `service()`：处理请求，每次请求调用。 `doPost()`：处理 POST 请求。 `destroy()`：销毁方法，当服务器关闭或 Servlet 被卸载时调用，用于释放资源。 -----

---

### 56. 以下关于 * 代码中：`request.setAttribute("login", map);`，意味着在 EL 表达式中应使用 `${login}`来获取该 Map 的描述，正确的是？

> ✅ **答案：** A
> 📝 **解析：** * 代码中：`request.setAttribute("login", map);`，意味着在 EL 表达式中应使用 `${login}`来获取该 Map。 Map 中的 key 是 `"student.name"`，包含特殊字符 `.`。 在 EL 表达式中，如果 Map 的 key 包含 `.`，必须使用方括号 `["key"]` 的语法来访问，而不能使用点号 `.`。 因此，正确的表达式是 `${login["student.name"]}`。 以下是针对您上传的多选题和单选题的解答：

---

### 57. 以下关于 * A选项：Web 应用的部署描述符文件名确实是 `web.xml`，正确 的说法，错误的是？

> ✅ **答案：** ABD
> 📝 **解析：** * A选项：Web 应用的部署描述符文件名确实是 `web.xml`，正确。 B选项：在 Servlet 3.0 及以上版本中，支持使用 `@WebServlet`注解来配置和部署 Servlet，无需在 `web.xml`中配置，正确。 C选项：`server.xml`是 Tomcat 服务器的配置文件，不是 Web 应用部署文件，错误。 D选项：`web.xml`文件位于 Web 应用目录下的 `WEB-INF`子目录中，正确。 -----

---

### 58. 以下关于 ServletConfig 对象是在 Servlet 初始化时（即 `init()`方法调用时）由容器创建的，而不是在初始化“之前” 的说法，错误的是？

> ✅ **答案：** BD
> 📝 **解析：** * A选项：错误。ServletConfig 对象是在 Servlet 初始化时（即 `init()`方法调用时）由容器创建的，而不是在初始化“之前”。 B选项：ServletConfig 对象的主要作用是封装 Servlet 的初始化参数（`<init-param>`），正确。 C选项：错误。每个 Servlet 都有自己独立的 ServletConfig 对象，不共享。 D选项：一个 Servlet 实例对应唯一的一个 ServletConfig 对象，正确。 -----

---

### 59. 以下关于 * A选项：服务器端创建 Cookie 后，需要通过 `response.addCookie(cookie)`将其发送给客户端，正确 的说法，错误的是？

> ✅ **答案：** ABD
> 📝 **解析：** * A选项：服务器端创建 Cookie 后，需要通过 `response.addCookie(cookie)`将其发送给客户端，正确。 B选项：服务器端通过 `request.getCookies()`方法获取客户端发送过来的所有 Cookie，正确。 C选项：错误。Cookie 数据是保存在客户端的，Session 数据才是保存在服务器端的。 D选项：创建 Cookie 对象使用 `new Cookie("key", "value")`构造方法，正确。 -----

---

### 60. 以下关于 * 题目要求选择 FilterConfig 中获取初始化参数名称的方法 的描述，正确的是？

> ✅ **答案：** D
> 📝 **解析：** * 题目要求选择 FilterConfig 中获取初始化参数名称的方法。 A选项 `getFilterName()`：获取过滤器名称。 B选项 `getServletContext()`：获取 Servlet 上下文。 C选项 `getInitParameter(String name)`：获取指定名称的初始化参数值。 D选项 `getInitParameterNames()`：获取所有初始化参数的名称枚举。 -----

---

### 61. 以下关于 * 代码中 `OneServlet`类定义了一个私有（private）的无参构造方法 的描述，正确的是？

> ✅ **答案：** C
> 📝 **解析：** * 代码中 `OneServlet`类定义了一个私有（private）的无参构造方法。 根据 Java 语法规则，如果一个类显式定义了构造方法（无论访问修饰符是什么），编译器就不会再提供默认的无参构造方法。 由于构造方法是 `private`的，除了 `OneServlet`类自身以外，外部类（包括 Servlet 容器）都无法通过 `new OneServlet()`来实例化该对象。 因此，该 Servlet 不能被容器实例化。 -----

---

### 62. 以下关于 * 题目中的“JSF编译指令”应该是 OCR 识别错误，实际应为 JSP 指令（Directive） 的说法，错误的是？

> ✅ **答案：** B
> 📝 **解析：** * 题目中的“JSF编译指令”应该是 OCR 识别错误，实际应为 JSP 指令（Directive）。 JSP 指令的语法格式是：`<%@ directive attribute="value" %>` 它以 `<%@`开始，以 `%>`结束。 选项 B 中的描述 `<%!@ ... %!>`包含了 OCR 识别产生的乱码 `(MISSING)`，但其本意是指 `<%@ ... %>`。 选项 A 是 JSP 动作标签（Action）的语法；C 是 JSP 声明（Declaration）的语法；D 是 HTML 标签的语法。 以下是针对您上传的10张图片中多选题的解答：

---

### 63. 以下关于 * 在 JSP 中出现中文乱码，通常与字符编码设置有关 的描述，正确的是？

> ✅ **答案：** BD
> 📝 **解析：** * 在 JSP 中出现中文乱码，通常与字符编码设置有关。 B `pageEncoding`：指定 JSP 页面本身的编码格式，容器在翻译 JSP 时会使用该编码读取源文件。 D `contentType`：指定响应内容的 MIME 类型和字符集（如 `text/html; charset=UTF-8`），影响浏览器如何解析响应流。 A `language`指定脚本语言（如 Java）；C `extends`指定 JSP 继承的父类，均与乱码无关。 -----

---

### 64. 以下关于 * A选项：`addCookie()`是 `HttpServletResponse`接口中的方法，但语法应为 `response.addCookie(cooki 的说法，错误的是？

> ✅ **答案：** 见解析
> 📝 **解析：** * A选项：`addCookie()`是 `HttpServletResponse`接口中的方法，但语法应为 `response.addCookie(cookie)`，而不是 `add()`。 B选项：Cookie 构造方法接收的是 `String key`和 `String value`，而不是 `Object value`，因此该写法错误。 C选项：语法错误，不存在 `add Cookie.cookie()`这种写法。 D选项：虽然图片中未显示完整，但 `Cookie cookie = new Cookie(`是创建 Cookie 对象的正确起始语法。在常见的此类考题中，通常会有一个选项是

---

### 65. 以下关于 * A选项：通过 `request.getParameter()`等方法可以获取客户端提交的参数信息，正确 的说法，错误的是？

> ✅ **答案：** ABD
> 📝 **解析：** * A选项：通过 `request.getParameter()`等方法可以获取客户端提交的参数信息，正确。 B选项：通过 `request.getHeader()`等方法可以获取客户机请求头的信息，正确。 C选项：HttpServletRequest 无法直接获取客户端的 MAC 物理地址，错误。 D选项：通过 `request.getRequestURI()`可以获取请求的统一资源标识符（URI），正确。 -----

---

### 66. 以下关于 * A选项：Servlet 运行在服务器端（Servlet Container 中），正确 的说法，错误的是？

> ✅ **答案：** AC
> 📝 **解析：** * A选项：Servlet 运行在服务器端（Servlet Container 中），正确。 B选项：Servlet 可以通过 `response.getWriter().write("<html>...</html>")`向浏览器发送 HTML 标签，错误。 C选项：Servlet 的生命周期包括：加载实例化 -> 初始化（init）-> 服务（service）-> 销毁（destroy），正确。 D选项：在浏览器地址栏直接输入 URL 发起的是 GET 请求，会调用 `doGet()`方法，而不是 `doPost()`，错误。 -----

---

### 67. 以下关于 * Filter（过滤器）接口中定义的三个核心生命周期方法分别是： `init(FilterConfig config)`：初始化 `doFilter(Serv 的说法，错误的是？

> ✅ **答案：** ABC
> 📝 **解析：** * Filter（过滤器）接口中定义的三个核心生命周期方法分别是： `init(FilterConfig config)`：初始化 `doFilter(ServletRequest, ServletResponse, FilterChain)`：执行过滤 `destroy()`：销毁 `service()`是 Servlet 接口中的方法，不是 Filter 的。 -----

---

### 68. 以下关于 * HttpServletRequest 接口中用于操作请求域（Request Scope）数据的方法包括： `setAttribute(String name 的说法，错误的是？

> ✅ **答案：** ACD
> 📝 **解析：** * HttpServletRequest 接口中用于操作请求域（Request Scope）数据的方法包括： `setAttribute(String name, Object o)`：设置属性 `getAttribute(String name)`：获取属性 `removeAttribute(String name)`：移除属性 `getInitParameter()`用于获取 Servlet 的初始化参数，不属于操作请求数据的 API。 -----

---

### 69. 以下关于 * `setAttribute()`方法是域对象（Domain Object）的核心方法，用于向作用域中存储数据 的描述，正确的是？

> ✅ **答案：** ABD
> 📝 **解析：** * `setAttribute()`方法是域对象（Domain Object）的核心方法，用于向作用域中存储数据。 A `ServletContext`（应用域）、B `HttpSession`（会话域）、D `HttpServletRequest`（请求域）都具有 `setAttribute()`方法。 C `ServletConfig`对象用于获取配置信息（如 `getInitParameter()`），它没有 `setAttribute()`方法。 -----

---

### 70. 以下关于 * 自定义 Filter 必须实现 `javax.servlet.Filter`接口 的描述，正确的是？

> ✅ **答案：** ABC
> 📝 **解析：** * 自定义 Filter 必须实现 `javax.servlet.Filter`接口。 该接口中包含的生命周期方法有：`init()`, `doFilter()`, `destroy()`。 `service()`是 Servlet 接口的方法。 -----

---

### 71. 以下关于 如果在 `doFilter`方法中不调用 `chain.doFilter(request, response)`，请求将被拦截，服务器不会自动放行，客户端将收不 的说法，错误的是？

> ✅ **答案：** BCD
> 📝 **解析：** * A选项：错误。如果在 `doFilter`方法中不调用 `chain.doFilter(request, response)`，请求将被拦截，服务器不会自动放行，客户端将收不到响应。 B选项：可以通过 `FilterChain`对象获取过滤链的相关信息（如下一个过滤器），正确。 C选项：调用 `chain.doFilter()`是将请求传递给下一个过滤器或目标资源（Servlet/JSP）的标准做法，正确。 D选项：过滤器可以在 `doFilter`方法中对 `request`和 `response`进行修改后再放行，正确。 -----

---

### 72. 以下关于 * JSP 隐式对象 `out`是 `JspWriter`类的实例 的说法，错误的是？

> ✅ **答案：** ABC
> 📝 **解析：** * JSP 隐式对象 `out`是 `JspWriter`类的实例。 A `out.println()`：输出内容并换行，正确。 B `out.write()`：输出字符或字符串，正确。 C `out.print()`：输出内容但不换行，正确。 D `out.writeln()`：错误。`JspWriter`类中没有 `writeln()`方法。 以下是针对您上传的10张图片中填空题和多选题的解答：

---

### 73. 以下关于 * 题干提到“重写了其父类的 service() 方法” 的说法，错误的是？

> ✅ **答案：** A
> 📝 **解析：** * 题干提到“重写了其父类的 service() 方法”。 A 选项 `HttpServlet`：继承了 `GenericServlet`，其父类中有 `service()`方法可供重写。 B 选项 `GenericServlet`：实现了 `Servlet`接口，接口中只有 `service()`的定义，没有具体实现，因此不存在“重写父类的 service()”这一说法（因为父类没实现）。 C、D 选项是接口，不是类，不能作为父类继承。 因此，如果该 Servlet 重写了 `service()`，其父类最有可能是 `HttpServlet`。 -----

---

### 74. 以下关于 请求转发（Forward）是服务器内部行为，重定向（Redirect）是客户端行为，两者网络协议执行机制完全不同 的说法，错误的是？

> ✅ **答案：** BCD
> 📝 **解析：** * A选项：错误。请求转发（Forward）是服务器内部行为，重定向（Redirect）是客户端行为，两者网络协议执行机制完全不同。 B选项：通过设置响应头 `Refresh`可以实现定时刷新或跳转，正确。 C选项：`sendRedirect()`是 HttpServletResponse 中实现重定向的标准方法，正确。 D选项：`getRequestDispatcher().forward()`是实现请求转发的标准方法，正确。 -----

---

### 75. 以下关于 * 在 Java Web 开发中，Servlet 本质上就是一个特殊的 Java 类 的描述，正确的是？

> ✅ **答案：** 见解析
> 📝 **解析：** * 在 Java Web 开发中，Servlet 本质上就是一个特殊的 Java 类。 创建一个 Servlet 类，最直接的方式是使用 `@WebServlet`注解（Servlet 3.0+）或者继承 `HttpServlet`类。 答案：@WebServlet (或 extends HttpServlet) -----

---

### 76. 以下关于 * 在 Servlet 或 JSP 中，处理 POST 请求时防止中文乱码，需要设置请求体的字符编码 的说法，错误的是？

> ✅ **答案：** C
> 📝 **解析：** * 在 Servlet 或 JSP 中，处理 POST 请求时防止中文乱码，需要设置请求体的字符编码。 正确的方法是使用 `request.setCharacterEncoding("UTF-8")`。 A选项方法名错误；B选项方法名错误（正确的是 `setCharacterEncoding`）；D选项方法名错误（`setCharset`通常用于响应 Response）。 C选项虽然文本显示不全，但它是唯一包含正确方法名 `setCharacterEncoding`的选项。 -----

---

### 77. 以下关于 * HTTP 状态码的含义： 404 Not Found：表示服务器无法找到请求的资源，即用户请求的资源不可用 的描述，正确的是？

> ✅ **答案：** D
> 📝 **解析：** * HTTP 状态码的含义： 404 Not Found：表示服务器无法找到请求的资源，即用户请求的资源不可用。 303：表示重定向（See Other）。 202：表示请求已接受但尚未处理完成。 101：表示协议切换（Switching Protocols）。 题目问“资源不可用”，对应的是 404。 ### 多选题部分

---

### 78. 第13题 (3.0分) 直接对接用户读写请求的节点是？

> ✅ **答案：** 见解析

---

### 79. 第6题：安装CentOS7时，若选择默认磁盘分区格式化，下一步应点击哪个选项完成配置？

> ✅ **答案：** 见解析

---

### 80. 以下关于 * A `cd`是切换目录命令 的说法，错误的是？

> ✅ **答案：** 见解析
> 📝 **解析：** * A `cd`是切换目录命令。 B `echo`是输出命令，`echo a.txt > txt.a`会把字符串 "a.txt" 写入到 txt.a 文件中，而不是改名。 C `rm`是删除命令。 D `cat a.txt > txt.a`虽然通常用于查看文件内容并重定向输出，但在这里，如果目的是复制内容并生成新文件，它可以实现将 a.txt 的内容复制到 txt.a。但在标准Linux中，改名通常用 `mv`。不过在给定的选项中，只有D涉及到了文件内容的重定向生成新文件。如果严格理解“改名”，标准命令是 `mv a.txt txt.a`，但这不在选项中。考虑到题目可能考察的是通过重定向生成同

---

### 81. 以下关于 * 在Linux系统中，用户密码信息（加密后的）存放在 `/etc/shadow`文件中，而 `/etc`目录是系统配置文件的根目录，包含了 `/etc/pas 的描述，正确的是？

> ✅ **答案：** 见解析
> 📝 **解析：** * 在Linux系统中，用户密码信息（加密后的）存放在 `/etc/shadow`文件中，而 `/etc`目录是系统配置文件的根目录，包含了 `/etc/passwd`和 `/etc/shadow`等。所以选A `/etc`。

---

### 82. 以下关于 * A `cat file1.txt > file2.txt`：使用重定向，将file1.txt的内容输出到file2.txt，实现了复制内容生成新文件 的说法，错误的是？

> ✅ **答案：** 见解析
> 📝 **解析：** * A `cat file1.txt > file2.txt`：使用重定向，将file1.txt的内容输出到file2.txt，实现了复制内容生成新文件。虽然在Linux中更常用 `cp file1.txt file2.txt`，但选项中没有 `cp`。 B `cp file1.txt | file2.txt`：管道符 `|`用法错误，`cp`命令不需要管道。 C `copy file1.txt file2.txt`：Linux中没有 `copy`命令，那是Windows的。 D `cat file2.txt file1.txt`：这会显示file2和file1的内容，不是复制。

---

## 简答题（21题）

### 1. 简述C/S(客户端/服务器)和B/S(浏览器/服务器)两种体系结构的特点以及二者的区别？（）

> ✅ **答案：** 见解析

---

### 2. 编写一个JSP程序，使用JSP Script显示网页上如下颜色的颜色条：绿色、蓝绿色、黑色、红色、黄色以及粉红色（对应的颜色为：Green、Cyan、Black、Red、Yellow、Pink）。

> ✅ **答案：** 见解析

---

### 3. 编写过滤器，该过滤器可以过滤用户的IP地址以进行访问控制。要建有success.jsp和error.jsp两个页面，当用户访问success.jsp页面时输出欢迎用户访问的信息：“欢迎访问我们的网站！”，而对于IP地址为192.168.70.88的用户则显示error.jsp页面上的拒绝访问信息：“对不起，您的IP地址禁止访问该网站！”。

> ✅ **答案：** 见解析

---

### 4. 用servlet实现以下内容，在登录页面regUser.jsp输入用户名和密码，在servlet中进行用户名和密码验证，用户名用自己的姓名，用户名和密码正确进入登录成功页面，用户名和密码错误进入错误页面。（将代码和运行结果截图放入附件中进行上传）。

> ✅ **答案：** 见解析

---

### 5. 请谈一谈Servlet的生命周期

> ✅ **答案：** Servlet的生命周期主要有以下三个过程组成：(1)初始化servlet。servlet第一次被请求加载时，服务器初始化这个servlet，即创建一个servlet对象，这个对象调用init方法完成必要的初始化工作。(2)实例化的servlet对象再调用service方法响应客户的请求。(3)当服务器关闭时，调用destroy方法，了解servlet对象。init方法只被调用一次，即在servlet第一次被请求加载时调用该方法。当后续的客户请求servlet服务时，Web服务将启动一个新的线程，在该线程中，servlet调用服务方法响应客户的请求，由此，每个客户的每次请求都导致服务方法被调用执行。 [*人工智能讲解*](javascript:;)

---

### 6. 简JSP中的9大隐式对象有哪些？并做简单介绍。

> ✅ **答案：** （1）application对象允许代表应用程序上下文，它的JSP页面与包括在相同应用程序中的任何Web共享组件信息。（2）config对象表示servlet的配置对象，允许将初始化数据传递给一个JSP页面（3）exception对象表示异常对象，表示针对错误网页，捕捉一般网页中未捕捉的异常（4）out对象代表提供输出流对象（5）page对象代表JSP页面对应的Servlet类实例（6）pageContext对象是Jsp页面本身的作用上下文，它提供唯一一组方法来管理具有不同域的属性（7）request对象表示请求对象，提供对Http请求数据的访问，同时还提供用于加入特定请求数据的上下文。（8）response对象表示响应对象，表示网页传回客户端的响应（9）session对象表示会话对象，表示与请求有关的会话 [*人工智能讲解*](javascript:;)

---

### 7. 简述JSP中include动作和include指定指令的区别

> ✅ **答案：** 编译时机：include指令是编译时包含（将被包含页面的Java源码合并到当前页面后共同编译）；jsp:include动作是运行时包含（当前页面与被包含页面分别运行，再合并运行后的HTML结果）。 内容处理：include指令包含是包含页面的源码；jsp:include动作包含是包含页面运行后的HTML结果。3. 参数传递：jsp:include动作支持被包含页面传递参数；include指令不支持。4. 更改影响：include指令下，被包含页面更改后，当前页面需重新编译才会支持更改；jsp:include动作下，被包含页面更改后，直接生效。include指令的核心是编译时将被包含页面的源码与当前页面合并，因此其包含是源码，且被包含页面的更改需当前页面重新编译才生效；而jsp:include动作是在运行阶段将两个页面各自运行后的HTML结果合并，能传递参数，且被包含存在的页面的更改可直接反映在结果中。这两者的区别本质上源于编译与运行时机的不同内容，导致处理、参数传递及更改影响差异。 [*人工智能讲解*](javascript:;)

---

### 8. JSP运行流程经历了几个时期，每个时期更换的工作是什么

> ✅ **答案：** 当服务器上的一个JSP页面被第一次请求执行时，服务器上的JSP引擎首先将JSP页面文件转译成一个.java文件，然后servlet，并编译这个java文件生成.class的字节码文件，然后执行字节码文件响应客户端的请求。而当这个JSP页面被再次请求请求时，JSP引擎将直接执行字节码文件来响应客户端。该执行过程可以总结为四步：1）客户端发出Request请求；2）JSP Container 将 JSP 转译成 Servlet 的源代码； 3）将产生的Servlet源代码经过编译后，并加载到内存执行；4）把结果Response(响应)至客户端； [*人工智能讲解*](javascript:;)

---

### 9. JavaBean的书写规范是什么，请介绍一下

> ✅ **答案：** ①类必须是具体的和公共的；②类中属性必须干燥。③提供公共标准的访问属性的setter和getter方法：对于boolean类型的变量，即布尔逻辑类型的属性，允许使用“is”代替“get”。例如，某JavaBean类中有boolean类型的成员变量saleStatus，则该成员变量的get方法名为isSaleStatus。④必须提供无参的构造方法。 [*人工智能讲解*](javascript:;)

---

### 10. JSTL核心标签中的流程控制标签包括哪些？请分别说明<c:if>和<c:choose>标签的使用场景及区别。

> ✅ **答案：** JSTL核心标签中的流程控制标签包括<c:if>、<c:choose>、<c:when>、<c:otherwise>。<c:if>标签用于单条件判断，仅支持一个条件分支；<c:choose>标签需与<c:when>和<c:otherwi se>配合使用，用于多条件分支判断，类似Java中的switch-case结构。区别在于：<c:if>是单分支判断，无else分支；<c:choose>支持多分支，且<c:when>可定义多个条件，<c:otherwise>为默认分支。
> 📝 **解析：** 本题考查对JSTL流程控制标签的掌握，需要区分不同标签的语法结构和适用场景，重点关注多条件分支与单条件分支的差异。[*人工智能讲解*](javascript:;)

---

### 11. 使用MVC开发模式实现登录功能模块。（提示：假设用户名和密码分别为“zhangsan”和“111222”则认为登录成功，否则登录失败，登录成功后跳转到welcome.jsp页面（此页面省略不开发），登录失败后跳回登录页面（login.jsp），并在该页面错误显示信息提示）。要求如下：<%@page language="java" import="java.util. *" pageEncoding="UTF-8"%><html>* *<head>* *<title>在此处插入标题</title>* *</head>* *<body></html>（2）开发loginDao类：public class LoginDao{（3）开发LoginServlet类：（4）配置web.xml文件，配置LoginServlet：**<?xml version="1.0" encoding="UTF-8"?><web-app version="2.5" xmlns="http://java.sun.com/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd"> <display-name></display-name> <欢迎文件列表> <welcome-file>index.jsp</welcome-file> </welcome-file-list><!-- 在此处配置LoginServlet-->

> ✅ **答案：** （1）${错误信息}     <form action="loginServlet" method =" post ">  用户名:<input type="text" name="username"/><br>  密码：<input type="password" name="password"><br> <input type="提交" value="登录"> </form> （2）if(" zhangsan ".equals(username)&&"111222".equals(password)){  返回 true；   }别的{      返回 false；   } （3）String username = request.getParameter("username");String password = request.getParameter("password");LoginDao loginDao = new LoginDao();if(loginDao.login(username, password)){response.sendRedirect("/welcome.jsp") ;}别的{request.setAttribute("errorinfo", "用户名和密码错误！");request.getRequestDispatcher("/login.jsp").forward(request,response);} （4） <servlet>   <servlet-name>loginServlet</servlet-name>   <servlet-class>com.inspur.Controller.LoginServlet</servlet-class> </servlet> <servlet-mapping><servlet-name>登录Servlet</servlet-name>   <url-pattern>/loginServlet</url-pattern> </servlet-mapping> [*人工智能讲解*](javascript:;)

---

### 12. 在Servlet开发中，ServletConfig和ServletContext都可用于获取初始化参数，请简述两者的区别，并分别说明如何在Servlet中获取这两个参数。

> ✅ **答案：** 1. 作用范围：ServletConfig单个Servlet的初始化区别对应，ServletContext整个Web应用的初始化参数。 2. 生命周期：ServletConfig随Servlet初始化创建而创建，根据情况而定；ServletContext随Web应用启动而创建，关闭而休息。 3. 共享性：ServletConfig仅当前Servlet可用，ServletContext所有Servlet共享。 获取方式： 1. ServletConfig参数：通过init方法的ServletConfig参数获取，或在Servlet中调用getServletConfig()方法，再调用getInitParameter("参数名")。 2. ServletContext参数：通过ServletConfig的getServletContext()方法获取ServletContext对象，再调用getInitParameter("参数名")。
> 📝 **解析：** 本题考查ServletConfig和ServletContext的核心区别及使用方法，需从作用范围、生命周期、共享性三个维度分析，并掌握参数获取的代码实现。[*人工智能讲解*](javascript:;)

---

### 13. JSP运行流程经历了几个时期，每个时期更换的工作有哪些

> ✅ **答案：** 当服务器上的一个JSP页面被第一次请求执行时，服务器上的JSP引擎首先将JSP页面文件转译成一个.java文件，然后servlet，并编译这个java文件生成.class的字节码文件，然后执行字节码文件响应客户端的请求。而当这个JSP页面被再次请求请求时，JSP引擎将直接执行字节码文件来响应客户端。该执行过程可以总结为四步：1）客户端发出Request请求；2）JSP Container 将 JSP 转译成 Servlet 的源代码； 3）将产生的Servlet源代码经过编译后，并加载到内存执行；4）把结果Response(响应)至客户端； [*人工智能讲解*](javascript:;)

---

### 14. 简述session和cookie的区别

> ✅ **答案：** (1)cookie存放数据放在客户的浏览器上，session数据放在服务器上。(2)cookie相对不安全，session相对较安全。别人可以分析在本地的cookie并进行cookie欺骗，如果主要考虑到安全应该使用session。(3)session会在一定期限内保存在服务器上，增加服务器压力。当访问量增加，会占用服务器性能，如果主要考虑到减少服务器性能方面，应该使用cookie。(4)单个cookie在客户端存放有限制，一般不能超过3K。(5)一般，将登录信息等重要信息存放为session；其他信息如果需要保留，可以放置cookie。 [*人工智能讲解*](javascript:;)

---

### 15. 请求转发和请求重定向的定义及它们的区别

> ✅ **答案：** 请求转发：一种在服务器内部的资源跳转方式。浏览器发送请求给服务器，服务器中回复的资源A接收到请求，资源A处理请求将请求发送给资源B，资源B处理完成后将结果响应给浏览器，请求从资源A到资源B的过程就叫请求转发。请求重定向：是指Web服务器接收到客户端的请求后，由于某些条件限制，无法访问当前请求URL所指向的Web资源，而是指定新的资源路径，让客户端重新发送请求。区别：①请求转发时浏览器URL地址栏不变，重定向时浏览器URL地址栏改变；②请求转发是服务器行为，浏览器只做一次访问请求。重定向是客户端行为，浏览器做至少两次访问请求，页面重定向不是一个请求请求对象；③请求转发可以共享请求里面的数据，重定向不能共享数据；④再次重定向的速度比转发慢，因为浏览器需要发出新的请求，而转发需要；⑤ 重定向可以跨域跨服务器访问，而转发是在web服务器内部进行的，不能跨域 [*人工智能讲解*](javascript:;)

---

### 16. 在做项目的时候会用到MVC开发模式，请简单介绍一下MVC开发模式

> ✅ **答案：** MVC，全称是Model View Controller，是模型(model)－视图(view)－控制器(controller)的缩写，是一种软件开发模式，分为三层：①模型层（Model）：封装最核心的功能，用于数据存储及处理用户请求的业务逻辑②视图层（View）：系统和用于交互的页面，从模型中获取数据并表现数据③控制层（Controller）：调度者的角色，即控制器根据视图提交的请求判断将请求和数据排序哪个模型处理，处理后的相关结果哪个视图更新显示。 [*人工智能讲解*](javascript:;)

---

### 17. 在程序的时候需要与数据库进行开发连接，请简述一下 JDBC 开发步骤

> ✅ **答案：** （1）加载数据库驱动：通过Class.forName加载驱动程序；（2）建立数据库连接：通过DriverManager类获得表示数据库连接的连接类对象；（3）创建用于向数据库发送SQL的Statement对象，并发送SQL语句；通过Connection对象绑定要执行的语句，生成Statement类对象；完成对数据的添加、删除、查询等操作，并返回ResultSet结果集。通过Statement对象中executeUpdate完成添加、修改等操作，并返回影响的记录条数。（4）释放数据库资源：关闭ResultSet、Statement和Connection等数据资源。 [*人工智能讲解*](javascript:;)

---

### 18. 介绍一下软连接和硬链接，以及两者之间的区别

> ✅ **答案：** 见解析

---

### 19. 将以下vi操作的命令书写出来（只写过程命令）（1）打开准备编辑/etc/sudoers文件。（2）移动到第 11 行，向右移动 33 个字符。（3）在当前的下一行新增一行，并进入插入模式输入内容”hello world”，输入完退出插入模式。（4）将光标移动到“hello world”这一行的行尾，然后在后面插入” too”字符，输入完退出插入模式。

> ✅ **答案：** vi /etc/sudoers         11G 33l            o hello world esc键       end键 a too esc        ：50,100 s/root/ROOT/g
> 📝 **解析：** vi /etc/sudoers
11G 33l
o hello world esc键
end键 a too esc
：50,100 s/root/ROOT/g

---

### 20. 使用shell实现九九加法表

> ✅ **答案：** #! /bin/bash                    for i in 1 2 3 4 5 6 7 8 9              do                         for j in 1 2 3 4 5 6 7 8 9           do                        if ( test $j -le $i )              then                     echo -ne `expr $i \* $j` "\t"         else                       echo                     break                     fi                     done                     done

---

### 21. 第36题：修改网络配置文件设置，需要修改哪些参数?

> ✅ **答案：** A BOOTPROTO=static, B IPADDR=192.168.1.100, C ONBOOT=yes
> 📝 **解析：** * 配置静态IP时，这三个参数是必须的：A定义使用静态协议，B定义具体IP地址，C定义开机启动网卡。D选项 `DNS1`用于域名解析，虽然常用，但题目问的是“修改网络配置文件设置”（通常指基础IP配置），相比之下ABC是核心必选项。如果允许多选，ABCD都可配置，但根据常规考题思路，ABC是构成静态IP的基础要素。 以下是针对您上传的第37题至第40题的正确答案及详细解析：

---

## 程序题（5题）

### 1. 请阅读以下代码，根据要求进行补充，完成用户登录功能。<form action="/login" method="post"> 用户名：<input type="text" name="user_name"><br> 密码：<input type="password" name="user_password"><br> <input type="提交" value="登录"> </form>package com.ks.servlet;public class LoginServlet extends HttpServlet { protected void doPost(HttpServletRequest request,HttpServletResponse 响应) 抛出异常 { 如果("ksUser".equals(name)&&"ks1234".equals("password")) { }别的 { } }}<body>这是主页，欢迎您，！ </body> <web-app xmlns:xsi=http://www.w3.org/2001/XMLSchema-instance xmlns="http://java.sun.com/xml/ns/javaee"xsi:schemaLocation="http://java.sun.com/xml/ns/javaeehttp://java.sun.com/xml/ns/javaee/web-app_2_5.xsd" version="2.5"> <display-name>ks</display-name> <欢迎文件列表> <welcome-file>login.jsp</welcome-file> </welcome-file-list> </web-app>

> ✅ **答案：** （1）request.setCharacterEncoding( "UTF-8" )        String name = request.getParameter( " user_name " )    String password=request.getParameter( "user_password" ) （2）request.getSession().setAttribute( "name",name )   （3）Cookie cookie = new Cookie( "name",name )       cookie.setMaxAge(72 *60* 60)            response.addCookie(cookie)            (4) request.getRequestDispatcher( "/WEB-INF/pages/main.jsp" ).forward(request, response)      (5)response.sendDirect( "/ks/login.jsp" )      （6）${name}           （7）<servlet>   <servlet-name>登录</servlet-name>   <servlet-class>com.ks.servlet.LoginServlet</servlet-class></servlet>                     <servlet-mapping><servlet-name>登录</servlet-name>  <url-pattern>/login</url-pattern></servlet-mapping> [*人工智能讲解*](javascript:;)

---

### 2. 假设有如下JavaBean实体类--User类package com.inspur.javaBean;public class User {私有字符串 id；私有字符串名称；私有整数年龄；public User() {}public String getId() { 返回 id；}public void setId(String id) { this.id= id;}public String getName() { 返回名称；}public void setName(String name) { this.name = name; }public int getAge() { 返回年龄；}public void setAge(int age) {this.age = 年龄; }}要求在JSP页面对User类进行相关操作。<%@ 页面语言="java" import="java.util.*" pageEncoding="UTF-8"%><!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><html><head> <title>在此处插入标题</title> </head> <body><!-- 利用jsp的动作标签创建User类的对象，对象名要求为用户，并把创建后的user对象保存在session范围中-->________________________（1）___________________________;<!-- 利用JSP动作为user对象的name属性和age属性进行属性，分别为lisi和18 -->______________________（2）_____________________________;______________________（3）_____________________________;<!-- 利用JSP动作获取用户对象的名称和年龄，并在页面中展示输出-->_______________________（4）_________________________;_______________________（5）_____________________; </body></html>

> ✅ **答案：** （1）<jsp:useBean id=”user” class=”com.inspur.javaBean.User ” scope =” session” / >（2）<jsp:setProperty property=”name” name=”user” value=”lisi”/>（3）<jsp:setProperty property=”age” name=”user” value=”18”/>（4）<jsp:getProperty name = "user" property = "name"/>（5）<jsp:getProperty name = "user" property = "age"/> [*人工智能讲解*](javascript:;)

---

### 3. 请阅读以下代码，根据要求进行补充，完成学生信息添加功能。 <form action="/addStudent" method="post"> 用户名：<input type="text" name="name"><br> 密码：<input type="text" name="age"><br> 地址：<input type="text" name="sex"><br> <input type="submit" value="添加学生"> </form>public class Student { 私有字符串 id； 私有字符串名称； 私有整数年龄； 私密字符串性爱； public String getId() {return id;} public void setId(String id) {this.id = id;} public String getName() {return name;} public void setName(String name) {this.name = name;} public int getAge() {return age;} public void setAge(int age) {this.age = age;} public String getSex() {return sex;} public void setSex(String sex) {this.sex = sex;}}public class StudentAddServlet extends HttpServlet {public void doPost(HttpServletRequest request,HttpServletResponse 响应) 抛出异常 { int count = new StudentDao().addStudent(student); 如果(count>0) { writer.print("用户添加成功"); }别的 { writer.print("用户添加失败"); } }}public class StudentDao { private DataSource ds = DataSourceUtils.getDataSource(); public int addStudent(Student stud) { int count=0; String id=UUID.randomUUID().toString().replace(" ", ""); 返回计数； }}

> ✅ **答案：** （1）request.setCharacterEncoding( "UTF-8" )       （2）Student student = new Student()         BeanUtils.populate(student, request.getParameterMap());（3）response.setContentType("text/html;charset=UTF-8"); (4) PrintWriter writer = response.getWriter();     （5）QueryRunner run = new QueryRunner(ds);        （6） 字符串 sql = "insert into stud values(?,?,?,?,?)";       count=run.update(sql,id,stud.getName(),stud.getAge(),stud.getSex()); [*人工智能讲解*](javascript:;)

---

### 4. 请阅读以下代码，按照要求进行补充。package com.inspur.bean;public class User {私有字符串 id； 私有字符串名称； 私有整数年龄； ________________________________________________________________________________} <%@ 页 ____________________ pageEncoding="UTF-8"%><!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><html><body> ___________________________________________________ ____________________________________________________;_____________________________________________________; __________________________________________________;_______________________________________________; </body></html>2 5 ．使用M VC模式实现用户注册功能package com.inspur.javaBean;public class User {私有字符串 id； 私有字符串名称； 私钥 S字符串密码；} <%@page language="java" import="java.util.*" pageEncoding="UTF-8"%><!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><html> <head> <title>用户注册</title> </head> <body> ________________________________________ </body></html> package com.inspur.servlet;public class RegServlet extends HttpServlet{ protected void doPost(HttpServletRequest request, HttpServletResponseresponse)抛出ServletException、IOException { ________________________________________}} public class RegD ao { public int reg(String name;String password){ String sql = "insert into users values(?,?,?)"; return new QueryRunner(ds).update(sql,name,password)}}<?xml version="1.0" encoding="UTF-8"?><web-app version="2.5" xmlns="http://java.sun.com/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd"> <display-name></display-name> ________________________________________________________________________________</web-app>

> ✅ **答案：** （一）（1）public String getId() {return id;}       public void setId(String id) {this.id = id;}    public String getName() {return name;}       public void setName(String name) {this.name = name;}   public int getAge() {return age;}            public void setAge(int age) {this.age = age;}     （2）import="com.inspur.bean.User"          （3）<jsp:useBean id="user" class="com.inspur.bean.User" scop="session"></jsp:useBean>（4）<jsp:setProperty name="user",property="name" value="lisi"></jsp:setProperty>                    <jsp:setProperty name="user",property="age" value="18"></jsp:setProperty>                   （5）${user.name}   $ {user.age}  （二）（1） <form action="reg" method="post">              用户名：<input type="text" name="name">          密码：<input type="password" name="password">       <输入类型=“提交”值=“注册”>        </form>（2）request.setCharacterEncoding("UTF-8")                 String name = request.getParameter("name")           String password=request.getParameter("password")        int count=new RegDao(name,password)              response.setContentType("text/html;charset=UTF-8")       PrintWriter 输出 = response.getwriter()        如果(计数>0){                           out.println("注册成功")              }别的{                       out.println("注册的失败")             }（3）<servlet>   <servlet-name>Reg</servlet-name>   servlet-class>com.inspur.servlet.RegServlet</servlet-class></servlet>                      <servlet-mapping><servlet-name>Reg</servlet-name>  <url-pattern>/reg</url-pattern></servlet-mapping> [*人工智能讲解*](javascript:;)

---

### 5. 编程工具外汇功能：要求：编写JSP程序，实现简易计算器。输入“第一个数字” ，选择腐蚀类型（+ 、 - 、*、 / ），输入“第二个数” ，按“计算”按钮，将结果显示在“结果”文本框中。* *（如下图所示）； <%@ 页面语言="java" import="java.util.* " pageEncoding="utf-8"%><!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><html> <body><h1>我的外汇</h1><hr> <form action="________ ① ________" method="post"> 请输入第一个数字： <input type="text" name="num1""/><br> 请选择攻击方式： <select name="oper"> <option value="+">+</option> <option value="-">-</option> <option value=" *">* </option> <option value="/">/</option> </select><br> 请输入第二个数： <input type="text" name="num2"/><br> <input type="submit" value="计算"/><input type="reset" value="重置"/><br> 结果： <input type="text" name="result" value="________ ② ________"/> </form> </body></html>（ 2 ）在com.inspur.servlet包下开发ComputerServlet实现计算功能：package com.inspur.servlet;public class ComputerServlet extends HttpServlet { public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException { response.setContentType("text/html;charset=utf-8"); PrintWriter 输出 = response.getWriter(); 输出.flush(); out.close(); }}（ 3 ）在web.xml中配置ComputerServlet ：<?xml version="1.0" encoding="UTF-8"?><web-app version="2.5" xmlns="http://java.sun.com/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd"> <display-name></display-name> <欢迎文件列表> <welcome-file>index.jsp</welcome-file> </welcome-file-list></web-app>

- **A.** mkdir
- **B.** mv
- **C.** move
- **D.** rm
- **A.** rm a.txt txt.a
- **B.** mv a.txt txt.a
- **C.** cd a.txt txt.a
- **D.** echo a.txt > txt.a
- **A.** chmod
- **B.** umask
- **C.** chgrp
- **D.** chown
- **A.** 23 和24
- **B.** 21 和22
- **C.** 20 和21
- **D.** 22 和23
- **A.** /tmp
- **B.** /bin
- **C.** /lib
- **D.** /root
- **A.** 守护进程
- **B.** 就绪进程
- **C.** 批处理进程
- **D.** 交互进程
- **A.** PID
- **B.** NID
- **C.** CID
- **D.** UID
- **A.** 账户重命名
- **B.** 加锁与解锁用户账户
- **C.** 删除指定的账户和对应的主目录
- **D.** 对用户密码进行加锁或解锁
- **A.** cat file2.txt file1.txt
- **B.** copy file1.txt file2.txt
- **C.** cat file1.txt > file2.txt
- **D.** cp file1.txt | file2.txt
- **A.** A
- **B.** o
- **C.** a
- **D.** i
- **A.** $变量名=值
- **B.** 变量名=$值
- **C.** 变量名=值
- **D.** $变量名=$值
- **A.** tar –zcvf myfile.txt.tar.gz myfile.txt
- **B.** tar –zcvf myfile.txt myfile.txt.tar.gz
- **C.** tar –cvf myfile.txt.tar.gz myfile.txt
- **D.** tar –cvf myfile.txt myfile.txt.tar.gz
- **A.** ls–a
- **B.** ls–l
- **C.** ls
- **D.** ls–d
- **A.** rm
- **B.** ls
- **C.** mv
- **D.** cp
- **A.** 764
- **B.** 467
- **C.** 674
- **D.** 476
- **A.** chmod
- **B.** cp
- **C.** touch
- **D.** more
- **A.** unzip name.zip
- **B.** unzip -q name.zip
- **C.** zip xvzf name.zip
- **D.** unzip -n name.zip
- **A.** 文件的具体信息
- **B.** 所有隐含文件
- **C.** 所有文件
- **D.** 所有非隐含文件
- **A.** -f
- **B.** -m
- **C.** -p
- **D.** -d
- **A.** tar -t
- **B.** tar -cv
- **C.** tar –r
- **D.** tar -cvf
- **A.** 软件发行商不能向用户收费
- **B.** 用户不需要付费
- **C.** 只有软件作者才能向用户收费
- **D.** 软件可以自由修改和发布
- **A.** #!/bin/bash
- **B.** #/bin/bash
- **C.** #/bin/csh
- **D.** /bin/bash
- **A.** Ctrl-F
- **B.** Ctrl-C
- **C.** Ctrl-B
- **D.** Ctrl-D
- **A.** login
- **B.** cd
- **C.** more
- **D.** logout
- **A.** 当前目录改为上一级目录
- **B.** 当前目录改为用户主目录
- **C.** 当前目录不变，屏幕显示当前目录
- **D.** 当前目录改为根目录
- **A.** 6
- **B.** “1+2+3”
- **C.** 123
- **D.** 1+2+3
- **A.** /
- **B.** /proc
- **C.** /boot
- **D.** /lib/modules/2.4.20_8/kernel
- **A.** cd @John
- **B.** cd &John
- **C.** cd ~John
- **D.** cd #John
- **A.** touch
- **B.** chmod
- **C.** chown
- **D.** cat
- **A.** logout
- **B.** su
- **C.** SU
- **D.** login
- **A.** get no
- **B.** set no
- **C.** get nonu
- **D.** set nonu
- **A.** 账户重命名
- **B.** 对用户密码进行加锁或解锁
- **C.** 加锁与解锁用户账户
- **D.** 删除指定的账户和对应的主目录
- **A.** man
- **B.** mkdir
- **C.** cd
- **D.** tar
- **A.** @
- **B.** %
- **C.** #
- **D.** !
- **A.** find
- **B.** sort
- **C.** grep
- **D.** gzip
- **A.** 因为fileB未被删除，所以fileA会被系统自动重新建立
- **B.** fileB会随fileA的删除而被系统自动删除
- **C.** fileB也随之被删除
- **D.** fileB仍存在，但是属于无效文件
- **A.** 如果 Linux 的安装程序无法启动图形安装程序，即使用户选择图形安装，也会自动的转入字符安装方式
- **B.** 图形安装模式耗费的系统资源比较少，字符方式耗费的系统资源较多
- **C.** 字符方式速度也比图形方式略快
- **D.** 图形安装方式易于使用
- **A.** csh
- **B.** bash
- **C.** gnush
- **D.** ash
- **A.** killall
- **B.** kill
- **C.** skillall
- **D.** skill
- **A.** halt
- **B.** reboot
- **C.** shutdown -r
- **D.** ctrl+alt+del
- **A.** 被复制
- **B.** 被移动
- **C.** 被覆盖
- **D.** 被追加新内容
- **A.** 下箭头
- **B.** “.”
- **C.** “*”
- **D.** 上箭头
- **A.** :wq
- **B.** :q!
- **C.** :quit
- **D.** :wq!
- **A.** /tmp
- **B.** /root
- **C.** /bin
- **D.** /lib
- **A.** more
- **B.** less
- **C.** menu
- **D.** cat
- **A.** l(列表)
- **B.** p(打印)
- **C.** d(删除)
- **D.** s(替换)
- **A.** $PATH
- **B.** $HOME
- **C.** $USER
- **D.** $PWD
- **A.** 从普通模式按 “i” 进入插入模式
- **B.** 从插入模式按 “Esc” 回到普通模式
- **C.** 从普通模式输入 “:” 进入末行模式
- **D.** 末行模式可直接按 “i” 进入插入模式
- **A.** userdel
- **B.** usermod
- **C.** useradd
- **D.** groupadd
- **A.** “.” 匹配任意单个字符
- **B.** “[^]” 匹配指定范围外的任意单个字符
- **C.** “*” 匹配前面的字符仅一次
- **D.** “[]” 匹配指定范围内的任意单个字符
- **A.** gunzip
- **B.** tar -zcf
- **C.** zip -r
- **D.** gzip
- **A.** 1 对应标准输出(stdout)
- **B.** 0 对应标准输入(stdin)
- **C.** 2 对应标准错误输出(stderr)
- **D.** “2>&1” 表示将标准输出重定向到标准错误
- **A.** 删除单个空目录时无需添加选项
- **B.** -p 选项可递归删除多级空目录
- **C.** 仅能删除空目录
- **D.** 可直接删除包含文件的目录
- **A.** groupdel:删除用户组
- **B.** usermod -g:将用户添加到指定组
- **C.** groupadd:创建用户组
- **D.** groupmod:修改用户组属性
- **A.** shutdown -r
- **B.** shutdown -h
- **C.** poweroff
- **D.** halt
- **A.** -c:若文件不存在则不创建新文件
- **B.** -r:参考其他文件的时间戳更新目标文件
- **C.** -a:仅修改文件的修改时间
- **D.** -t:按指定格式设置文件时间戳
- **A.** 可用于连接任意两个命令
- **B.** 可将前一个命令的标准输出作为后一个命令的标准输入
- **C.** 不能处理前一个命令的标准错误
- **D.** 右侧命令必须能接收标准输入
- **A.** 目录的 “w” 权限允许在目录内创建、删除文件
- **B.** 仅修改文件所有者需使用 chmod 命令
- **C.** 权限 “755” 表示所有者可读可写可执行，同组和其他用户只读可执行
- **D.** 文件的 “x” 权限仅对可执行程序有效
- **A.** “^” 表示行首锚定
- **B.** “.*” 表示匹配任意长度的任意字符
- **C.** “$” 表示行尾锚定
- **D.** “[]” 表示匹配指定范围外的任意单个字符
- **A.** 直接赋值
- **B.** 使用read命令
- **C.** 不可以赋值
- **D.** 使用命令行参数
- **A.** -v 表示显示操作过程
- **B.** -z 表示支持 gzip 压缩
- **C.** -c 表示创建压缩文件
- **D.** -x 表示提取文件
- **A.** :x
- **B.** Shift+ZZ
- **C.** :q!
- **D.** :wq
- **A.** kill
- **B.** ps
- **C.** killall
- **D.** pkill
- **A.** reboot
- **B.** shutdown -h
- **C.** poweroff
- **D.** halt
- **A.** for
- **B.** if
- **C.** until
- **D.** while
- **A.** chown 用户名 文件名
- **B.** chmod u=rwx 文件名
- **C.** chmod 755 文件名
- **D.** chmod g+w 文件名
- **A.** 便于定制和再开发
- **B.** 源码公开
- **C.** 性能高安全性强
- **D.** 与unix兼容
- **A.** PWD
- **B.** PATH
- **C.** CD
- **D.** RANDOM
- **A.** FS:输出字段分隔符
- **B.** NF:当前行的字段数
- **C.** NR:已读取的记录数(行号)
- **D.** FILENAME:当前处理的文件名
- **A.** 变量名必须全大写
- **B.** 等号两侧不能有空格
- **C.** 变量名可由字母、数字和下划线组成
- **D.** 变量名不能以数字开头
- **A.** top
- **B.** ps -aux
- **C.** ps -ef
- **D.** kill -9
- **A.** vi data
- **B.** less data
- **C.** cat data
- **D.** man data
- **A.** if...elif...fi
- **B.** for 循环
- **C.** while 循环
- **D.** case...in...esac
- **A.** 仅能传递前一个命令的标准输出
- **B.** 右侧命令必须支持接收标准输入
- **C.** 可连接任意两个 Linux 命令直接传递数据
- **D.** 无法传递前一个命令的标准错误
- **A.** vi
- **B.** more
- **C.** cat
- **D.** echo
- **A.** more
- **B.** cat
- **C.** head
- **D.** less
- **A.** “>>” 表示追加重定向
- **B.** “>” 表示覆盖重定向
- **C.** “<” 表示标准输出重定向
- **D.** “2>” 表示标准错误输出重定向
- **A.** b
- **B.** a
- **C.** o
- **D.** d
- **A.** 可以使用chmod的数字设定法754设定
- **B.** 可以使用chmod的文字设定法g+rw设定中间三位
- **C.** 可以使用chmod的文字设定法u=rwx设定前三位
- **D.** 可以使用chmod的文字设定法o=r设定最后三位
- **A.** -x 用于将变量设为环境变量
- **B.** -i 用于定义整数变量
- **C.** -r 用于取消变量的只读属性
- **D.** -a 用于定义数组变量
- **A.** 无需赋予执行权限，使用 sh 命令执行
- **B.** 直接双击脚本文件执行
- **C.** 赋予执行权限后，通过相对路径执行
- **D.** 赋予执行权限后，通过绝对路径执行
- **A.** rmdir
- **B.** cd
- **C.** mkdir
- **D.** pwd
- **A.** -a 选项适用于复制目录，保留链接、文件属性及目录下所有内容
- **B.** -i 覆盖目标文件前会提示用户确认
- **C.** -d 复制时保留源文件的链接属性(类似 Windows 快捷方式)
- **D.** -p 仅复制文件内容，不保留原文件的修改时间和访问权限
- **A.** 755 表示所有者可读可写可执行，同组和其他用户只读
- **B.** x 对应权限值 1
- **C.** r 对应权限值 4
- **D.** w 对应权限值 2
- **A.** dirname /home/test/file.txt 输出 “/home/test”
- **B.** basename /home/test/file.txt .txt 输出 “file”
- **C.** dirname /home/test/ 输出 “/home/test”
- **D.** basename /home/test/file.txt 输出 “file.txt”

> ✅ **答案：** （1）① ComputerServlet #与配置servlet使<url-pattern>的值一致即可得分。② <span class="" style="text-wrap-mode: nowrap;" 宋体"="">![img](https://p.ananas.chaoxing.com/star3/origin/3aacfd848b3984326ad1fc8a8ec955ba.png) {sessionScope.result} 或${result} # 与servlet中的存储数据的作用域及名称对应，即可得分。（2）① //用户接收提交的数据信息String num1str=request.getParameter("num1");String num2str=request.getParameter("num2");String operstr=request.getParameter("oper");②double num1=Double.valueOf(num1str);double num2=Double.valueOf(num2str);如果("+".equals(operstr)){   结果 = num1 + num2;}else if("-".equals(operstr)){结果 = num1 - num2;}else if(" *".equals(operstr)){**结果 = num1* num2;}else if("/".equals(operstr)){结果 = num1 / num2;}request.setAttribute("result",result);request.getRequestDispatcher("computerPage.jsp").forward(request, response);（3) <servlet><servlet-name>ComputerServlet</servlet-name> <servlet-class>com.inspur.servlet.ComputerServlet</servlet-class></servlet>  <servlet-mapping> <servlet-name>ComputerServlet</servlet-name> <url-pattern>/ComputerServlet</url-pattern></servlet-mapping> ### 1. (简答题)建立两个组，分别是police（警察）、bandit（土匪），警察组中有XXX(自己名字缩写)用户和jerry1两名警察。土匪组中有xh1和xq1两人。请完成以下权限操作：创建两个组police、bandit根据组分别创建成员，添加自己的成员。XXX(自己名字缩写)用户创建一个文件（XXX.txt）自己可以读写，本组人可以读，其他组没有任何权限XXX(自己名字缩写)用户修改改文件，让其他组人可以有读，本组人可以读写xh1转到警察组，看看是否可以读写。**要求按照步骤进行程序操作截图，并将附件上传。** - ## 一. 单选题（共78题，39分） ### 1. (单选题, 0.5分)若要使用进程名来结束进程，应使用（ ）命令 - A. ps - B. kill - C. pss - D. pstree B:kill; D:rm; B:mv a.txt txt.a; A:chmod; A:ls –a; B:rwxrw-r--; C:20 和21; B:/bin; B:就绪进程; A:PID; C:mv userinfo stuinfo; C:su; C:删除指定的账户和对应的主目录; A:tail; C:cat file1.txt > file2.txt; B:o; C:变量名=值; A:tar –zcvf myfile.txt.tar.gz myfile.txt; A:ls–a; B:pwd; C:mv; A:764; C:touch; A:i节点和文件是一一对应的; A:tail logfile ; D:不解释引号内的特殊字符; A:unzip name.zip; A:文件的具体信息; D:# ; B:file myfile ; B:编译型的程序设计语言 ; D:为其它应用程序设置环境变量 ; C:-p; A:tar -t; D:软件可以自由修改和发布; A:#!/bin/bash; B:Ctrl-C; C:ls -a? ; C:more; D:chmod; B:当前目录改为用户主目录; A:xp ; D:在末行模式下，键入:q!; A:6; C:/boot; C:cd ~John; C:chown; B:su; B:/etc ; A:declare -a ; B:rwxr--rw- ; D:set nonu; C:etc; D:删除指定的账户和对应的主目录; C:用于实时动态显示 Linux进程 的动态信息; B:目录文件、读写执行; B:co ; A:man; C:/home; C:#; C:grep; D:fileB仍存在，但是属于无效文件; B:图形安装模式耗费的系统资源比较少，字符方式耗费的系统资源较多; B:bash; A:killall; A:halt; C:被覆盖; B:tar xvzf myftp.tar.gz -C / ; A:x -gt y 检查x是否大于y ; D:删除光标所在的行 ; B:“.”; A:用户账号基本信息; A:标准错误输出重定向到标准输出 ; B::q!; C:/bin; B:less; C:tar -zcvf ; D:tar -xzvf filename.tgz; (1)645 (2)链接文件 (1) tar xvzf myftp.tar.gz -C / (1) A=date (2) A=$(date) (1) $() (1)行首 (2)下一个字符 (1)$ (2)# (1) useradd -d /home/ttt milan (1)ping (1) find / -name test.txt (1) chmod 755 (1)重命名 (1)/home (1)$# (1) shutdown -h +30 (1)chmod a-x (1)ps–aux (1) NAT (2) Host-Only (1) shutdown -h 12:30 (2) shutdown -c (1) 当前激活用户 (2) 主机名 (3) 当前工作区 (4) 用户提示符 (1)gzip (1) -d (2) -r (1)cat  file1  file2  > file3 (1) ls (2) pwd (1)chmod 777 filename (1) kill 896 (1) uname (2) hostname (1) tar -zcf demo.tar.gz demo/ (1) ps -aux (1)管道符 (2)(标准)输入 (1) mv aaa bbb (1) chmod 644 (1) grep "teacher" test.txt BCD:p(打印); d(删除); s(替换); ABCD:$PATH; $HOME; $USER; $PWD; ABC:从普通模式按 “i” 进入插入模式; 从插入模式按 “Esc” 回到普通模式; 从普通模式输入 “:” 进入末行模式; ABCD:userdel; usermod; useradd; groupadd; ABD:“.” 匹配任意单个字符; “[^]” 匹配指定范围外的任意单个字符; “[]” 匹配指定范围内的任意单个字符; BCD:tar -zcf; zip -r; gzip; ABC:1 对应标准输出(stdout); 0 对应标准输入(stdin); 2 对应标准错误输出(stderr); ABC:删除单个空目录时无需添加选项; -p 选项可递归删除多级空目录; 仅能删除空目录; ABCD:groupdel:删除用户组; usermod -g:将用户添加到指定组; groupadd:创建用户组; groupmod:修改用户组属性; AB:sed 是无破坏性编辑器，默认不修改原文件; “s/old/new/g” 表示全局替换文本中的 old 为 newC. “d” 命令用于删除匹配的行D. “p” 命令单独使用时仅打印匹配行，不输出其他行; BCD:shutdown -h; poweroff; halt; ABD:-c:若文件不存在则不创建新文件; -r:参考其他文件的时间戳更新目标文件; -t:按指定格式设置文件时间戳; BCD:可将前一个命令的标准输出作为后一个命令的标准输入; 不能处理前一个命令的标准错误; 右侧命令必须能接收标准输入; ACD:目录的 “w” 权限允许在目录内创建、删除文件; 权限 “755” 表示所有者可读可写可执行，同组和其他用户只读可执行; 文件的 “x” 权限仅对可执行程序有效; ABC:“^” 表示行首锚定; “.*” 表示匹配任意长度的任意字符; “$” 表示行尾锚定; BC:使用read命令; 不可以赋值; ABCD:-v 表示显示操作过程; -z 表示支持 gzip 压缩; -c 表示创建压缩文件; -x 表示提取文件; ABD::x; Shift+ZZ; :wq; ACD:kill; killall; pkill; BCD:shutdown -h; poweroff; halt; ABC:for; if; until; BCD:chmod u=rwx 文件名; chmod 755 文件名; chmod g+w 文件名; ABCD:便于定制和再开发; 源码公开; 性能高安全性强; 与unix兼容; ABD:PWD; PATH; RANDOM; BCD:NF:当前行的字段数; NR:已读取的记录数(行号); FILENAME:当前处理的文件名; BCD:等号两侧不能有空格; 变量名可由字母、数字和下划线组成; 变量名不能以数字开头; ABC:top; ps -aux; ps -ef; ABC:vi data; less data; cat data; ABCD:if...elif...fi; for 循环; while 循环; case...in...esac; ABD:仅能传递前一个命令的标准输出; 右侧命令必须支持接收标准输入; 无法传递前一个命令的标准错误; ABC:vi; more; cat; ABCD:more; cat; head; less; ABD:“>>” 表示追加重定向; “>” 表示覆盖重定向; “2>” 表示标准错误输出重定向; BC:a; o; CD:可以使用chmod的文字设定法u=rwx设定前三位; 可以使用chmod的文字设定法o=r设定最后三位; ABD:-x 用于将变量设为环境变量; -i 用于定义整数变量; -a 用于定义数组变量; ACD:无需赋予执行权限，使用 sh 命令执行; 赋予执行权限后，通过相对路径执行; 赋予执行权限后，通过绝对路径执行; ABCD:rmdir; cd; mkdir; pwd; ABC:-a 选项适用于复制目录，保留链接、文件属性及目录下所有内容; -i 覆盖目标文件前会提示用户确认; -d 复制时保留源文件的链接属性(类似 Windows 快捷方式); BCD:x 对应权限值 1; r 对应权限值 4; w 对应权限值 2; ABD:dirname /home/test/file.txt 输出 “/home/test”; basename /home/test/file.txt .txt 输出 “file”; basename /home/test/file.txt 输出 “file.txt”; Hi there Hi there $mystr $mystr Enter x+y+z 5+6+7（输入） $mystr  now equals 5+6+7 （1）adduser –g group1 user1  或 useradd –g group1 user1（2）mkdir /home/user1/test （3）cp /tmp/myfile/h*  /home/user1/test

---

