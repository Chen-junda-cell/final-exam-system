// 六科完整题库 — 782题 含复习重点全部知识点
const PREPARSED_QUESTIONS = [
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "B/S架构中，客户端通过什么与服务器交互？",
    "options": [
      {
        "label": "A",
        "text": "专用的客户端软件"
      },
      {
        "label": "B",
        "text": "浏览器"
      },
      {
        "label": "C",
        "text": "命令行终端"
      },
      {
        "label": "D",
        "text": "FTP客户端"
      }
    ],
    "answer": "B",
    "explanation": "B/S(Browser/Server)架构中客户端使用浏览器访问服务器，无需安装专用软件。",
    "id": "GEN0001",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "以下哪个不是JSP隐式对象？",
    "options": [
      {
        "label": "A",
        "text": "request"
      },
      {
        "label": "B",
        "text": "response"
      },
      {
        "label": "C",
        "text": "connection"
      },
      {
        "label": "D",
        "text": "pageContext"
      }
    ],
    "answer": "C",
    "explanation": "connection是JDBC中的对象，不是JSP的9大隐式对象之一。",
    "id": "GEN0002",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "JSP中，application对象的类型是？",
    "options": [
      {
        "label": "A",
        "text": "HttpServletRequest"
      },
      {
        "label": "B",
        "text": "HttpSession"
      },
      {
        "label": "C",
        "text": "ServletContext"
      },
      {
        "label": "D",
        "text": "PageContext"
      }
    ],
    "answer": "C",
    "explanation": "application是ServletContext类型，代表整个Web应用的上下文环境。",
    "id": "GEN0003",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "以下哪个对象可以用于获取其他8个隐式对象？",
    "options": [
      {
        "label": "A",
        "text": "request"
      },
      {
        "label": "B",
        "text": "session"
      },
      {
        "label": "C",
        "text": "pageContext"
      },
      {
        "label": "D",
        "text": "config"
      }
    ],
    "answer": "C",
    "explanation": "pageContext对象提供了访问其他所有隐式对象的方法，如getRequest()、getResponse()等。",
    "id": "GEN0004",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "out对象的类型是？",
    "options": [
      {
        "label": "A",
        "text": "OutputStream"
      },
      {
        "label": "B",
        "text": "PrintWriter"
      },
      {
        "label": "C",
        "text": "JspWriter"
      },
      {
        "label": "D",
        "text": "Writer"
      }
    ],
    "answer": "C",
    "explanation": "out是JspWriter类的实例，专门为JSP输出设计，继承自java.io.Writer。",
    "id": "GEN0005",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "以下哪种写法是JSP声明标签的正确用法？",
    "options": [
      {
        "label": "A",
        "text": "<% int count=0; %>"
      },
      {
        "label": "B",
        "text": "<%= count %>"
      },
      {
        "label": "C",
        "text": "<%! int count=0; %>"
      },
      {
        "label": "D",
        "text": "<%@ int count=0; %>"
      }
    ],
    "answer": "C",
    "explanation": "<%! %>声明标签定义成员变量和方法。A是脚本片段(局部变量)，B是表达式。",
    "id": "GEN0006",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "在JSP中输出表达式的值到页面，应该使用？",
    "options": [
      {
        "label": "A",
        "text": "<% 表达式 %>"
      },
      {
        "label": "B",
        "text": "<%= 表达式 %>"
      },
      {
        "label": "C",
        "text": "<%! 表达式 %>"
      },
      {
        "label": "D",
        "text": "<%@ 表达式 %>"
      }
    ],
    "answer": "B",
    "explanation": "<%= %>表达式标签将Java表达式的计算结果输出到页面。",
    "id": "GEN0007",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "page指令的errorPage属性用于？",
    "options": [
      {
        "label": "A",
        "text": "设置页面编码"
      },
      {
        "label": "B",
        "text": "指定当前页面为错误页面"
      },
      {
        "label": "C",
        "text": "指定发生错误时跳转的页面"
      },
      {
        "label": "D",
        "text": "导入Java类"
      }
    ],
    "answer": "C",
    "explanation": "errorPage指定当前页发生异常时跳转到的错误处理页面。isErrorPage=\"true\"声明本页是错误页面。",
    "id": "GEN0008",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "要在一个JSP页面中包含另一个JSP页面的输出结果，并传递参数，应使用？",
    "options": [
      {
        "label": "A",
        "text": "<%@ include file=\"b.jsp\" %>"
      },
      {
        "label": "B",
        "text": "<jsp:include page=\"b.jsp\">"
      },
      {
        "label": "C",
        "text": "<jsp:forward page=\"b.jsp\">"
      },
      {
        "label": "D",
        "text": "<%@ page import=\"b.jsp\" %>"
      }
    ],
    "answer": "B",
    "explanation": "<jsp:include>动作标签可在运行时包含页面输出，并支持<jsp:param>传参。include指令不支持传参。",
    "id": "GEN0009",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "JavaBean中，对于boolean类型的属性isAvailable，getter方法应为？",
    "options": [
      {
        "label": "A",
        "text": "getAvailable()"
      },
      {
        "label": "B",
        "text": "isAvailable()"
      },
      {
        "label": "C",
        "text": "getIsAvailable()"
      },
      {
        "label": "D",
        "text": "A和B都可以"
      }
    ],
    "answer": "B",
    "explanation": "JavaBean规范：boolean类型属性的getter方法用isXxx()格式，如isAvailable()，而非getAvailable()。",
    "id": "GEN0010",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "EL表达式${empty list}的含义是？",
    "options": [
      {
        "label": "A",
        "text": "判断list是否为null或空字符串/空集合"
      },
      {
        "label": "B",
        "text": "清空list的内容"
      },
      {
        "label": "C",
        "text": "获取list的第一个元素"
      },
      {
        "label": "D",
        "text": "判断list是否为null但不包括空字符串"
      }
    ],
    "answer": "A",
    "explanation": "empty运算符判断对象是否为null、空字符串(\"\")、空数组、空Map、空List等。",
    "id": "GEN0011",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "JSTL中，<c:forEach>标签的var属性表示？",
    "options": [
      {
        "label": "A",
        "text": "要遍历的集合对象"
      },
      {
        "label": "B",
        "text": "当前迭代元素的变量名"
      },
      {
        "label": "C",
        "text": "遍历的起始索引"
      },
      {
        "label": "D",
        "text": "遍历的结束索引"
      }
    ],
    "answer": "B",
    "explanation": "var指定每次迭代中当前元素的引用变量名。items指定要遍历的集合。",
    "id": "GEN0012",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "JDBC中，负责执行SQL语句的接口是？",
    "options": [
      {
        "label": "A",
        "text": "Connection"
      },
      {
        "label": "B",
        "text": "DriverManager"
      },
      {
        "label": "C",
        "text": "Statement"
      },
      {
        "label": "D",
        "text": "ResultSet"
      }
    ],
    "answer": "C",
    "explanation": "Statement(及PreparedStatement、CallableStatement)负责执行SQL。Connection管理连接，ResultSet存结果。",
    "id": "GEN0013",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "JDBC中， executeUpdate()方法通常用于？",
    "options": [
      {
        "label": "A",
        "text": "执行SELECT查询"
      },
      {
        "label": "B",
        "text": "执行INSERT/UPDATE/DELETE操作"
      },
      {
        "label": "C",
        "text": "执行存储过程"
      },
      {
        "label": "D",
        "text": "创建数据库连接"
      }
    ],
    "answer": "B",
    "explanation": "executeUpdate()用于增删改操作，返回受影响的行数。executeQuery()用于SELECT查询，返回ResultSet。",
    "id": "GEN0014",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "下列关于PreparedStatement的描述，正确的是？",
    "options": [
      {
        "label": "A",
        "text": "PreparedStatement不能防止SQL注入"
      },
      {
        "label": "B",
        "text": "PreparedStatement是Statement的子接口"
      },
      {
        "label": "C",
        "text": "PreparedStatement只能执行一次"
      },
      {
        "label": "D",
        "text": "PreparedStatement不能使用占位符?"
      }
    ],
    "answer": "B",
    "explanation": "PreparedStatement是Statement的子接口，支持预编译SQL、使用?占位符、防止SQL注入、可重复执行。",
    "id": "GEN0015",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "在Servlet中获取表单提交的用户名，正确的代码是？",
    "options": [
      {
        "label": "A",
        "text": "request.getAttribute(\"username\")"
      },
      {
        "label": "B",
        "text": "request.getParameter(\"username\")"
      },
      {
        "label": "C",
        "text": "request.getQueryString()"
      },
      {
        "label": "D",
        "text": "response.getParameter(\"username\")"
      }
    ],
    "answer": "B",
    "explanation": "getParameter()获取客户端提交的请求参数(如表单数据)。getAttribute()获取request域中存储的对象。",
    "id": "GEN0016",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "以下哪个方法用于从当前Servlet转发到另一个页面？",
    "options": [
      {
        "label": "A",
        "text": "response.sendRedirect(\"url\")"
      },
      {
        "label": "B",
        "text": "request.getRequestDispatcher(\"url\").forward(req,resp)"
      },
      {
        "label": "C",
        "text": "response.forward(\"url\")"
      },
      {
        "label": "D",
        "text": "request.sendRedirect(\"url\")"
      }
    ],
    "answer": "B",
    "explanation": "转发使用RequestDispatcher.forward()。A是重定向，C和D是错误的方法名。",
    "id": "GEN0017",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "关于Filter的doFilter方法，以下哪个参数表示过滤器链？",
    "options": [
      {
        "label": "A",
        "text": "ServletRequest"
      },
      {
        "label": "B",
        "text": "ServletResponse"
      },
      {
        "label": "C",
        "text": "FilterChain"
      },
      {
        "label": "D",
        "text": "FilterConfig"
      }
    ],
    "answer": "C",
    "explanation": "doFilter(ServletRequest req, ServletResponse resp, FilterChain chain)。chain.doFilter()放行请求到下一个过滤器或目标资源。",
    "id": "GEN0018",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "多个Filter组成的过滤器链，执行顺序由什么决定？",
    "options": [
      {
        "label": "A",
        "text": "Filter类名首字母"
      },
      {
        "label": "B",
        "text": "web.xml中<filter-mapping>的注册顺序"
      },
      {
        "label": "C",
        "text": "Filter创建的时间顺序"
      },
      {
        "label": "D",
        "text": "随机顺序"
      }
    ],
    "answer": "B",
    "explanation": "Filter的执行顺序按web.xml中<filter-mapping>的声明顺序，或使用@WebFilter注解时按类名字母序。",
    "id": "GEN0019",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "以下哪个不属于Servlet生命周期方法？",
    "options": [
      {
        "label": "A",
        "text": "init()"
      },
      {
        "label": "B",
        "text": "start()"
      },
      {
        "label": "C",
        "text": "service()"
      },
      {
        "label": "D",
        "text": "destroy()"
      }
    ],
    "answer": "B",
    "explanation": "Servlet三大生命周期方法：init()、service()、destroy()。start()不是Servlet的方法。",
    "id": "GEN0020",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "在web.xml中，<url-pattern>/login</url-pattern>表示什么？",
    "options": [
      {
        "label": "A",
        "text": "Servlet的Java类名"
      },
      {
        "label": "B",
        "text": "浏览器访问该Servlet的URL路径"
      },
      {
        "label": "C",
        "text": "Servlet的文件存储路径"
      },
      {
        "label": "D",
        "text": "Servlet的别名"
      }
    ],
    "answer": "B",
    "explanation": "url-pattern定义浏览器访问Servlet的URL映射路径。如/login表示访问http://host:port/项目名/login。",
    "id": "GEN0021",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "关于Cookie，以下描述正确的是？",
    "options": [
      {
        "label": "A",
        "text": "Cookie存储在服务器端"
      },
      {
        "label": "B",
        "text": "Cookie没有过期时间限制"
      },
      {
        "label": "C",
        "text": "Cookie通过response.addCookie()发送到客户端"
      },
      {
        "label": "D",
        "text": "Cookie可以存储任意大小的数据"
      }
    ],
    "answer": "C",
    "explanation": "Cookie通过response.addCookie()发送到浏览器。A错(Cookie存客户端)，B错(可设setMaxAge过期)，D错(一般≤4KB)。",
    "id": "GEN0022",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "Tomcat默认端口在哪个配置文件中设置？",
    "options": [
      {
        "label": "A",
        "text": "web.xml"
      },
      {
        "label": "B",
        "text": "tomcat-users.xml"
      },
      {
        "label": "C",
        "text": "server.xml"
      },
      {
        "label": "D",
        "text": "context.xml"
      }
    ],
    "answer": "C",
    "explanation": "Tomcat主配置文件server.xml在conf目录下，端口、虚拟主机等都在此配置。",
    "id": "GEN0023",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "以下哪个HTTP方法通常用于提交表单数据并创建新资源？",
    "options": [
      {
        "label": "A",
        "text": "GET"
      },
      {
        "label": "B",
        "text": "POST"
      },
      {
        "label": "C",
        "text": "PUT"
      },
      {
        "label": "D",
        "text": "DELETE"
      }
    ],
    "answer": "B",
    "explanation": "POST用于提交表单数据(如登录、注册)。GET用于查询，PUT用于更新，DELETE用于删除。",
    "id": "GEN0024",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "HTTP状态码404表示什么？",
    "options": [
      {
        "label": "A",
        "text": "服务器内部错误"
      },
      {
        "label": "B",
        "text": "重定向"
      },
      {
        "label": "C",
        "text": "请求的资源未找到"
      },
      {
        "label": "D",
        "text": "请求成功"
      }
    ],
    "answer": "C",
    "explanation": "404=Not Found(资源不存在)。500=服务器错误，302=重定向，200=成功。",
    "id": "GEN0025",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "在JSP中，page指令的import属性的作用是？",
    "options": [
      {
        "label": "A",
        "text": "导入Java类或包"
      },
      {
        "label": "B",
        "text": "引入另一个JSP文件"
      },
      {
        "label": "C",
        "text": "导入JavaScript文件"
      },
      {
        "label": "D",
        "text": "引入CSS样式"
      }
    ],
    "answer": "A",
    "explanation": "import属性用于导入Java类/包，如import=\"java.util.*,java.sql.*\"，多个用逗号分隔。",
    "id": "GEN0026",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "下列哪个标签用于在JSP中引入JSTL核心标签库？",
    "options": [
      {
        "label": "A",
        "text": "<%@ page %>"
      },
      {
        "label": "B",
        "text": "<%@ include %>"
      },
      {
        "label": "C",
        "text": "<%@ taglib prefix=\"c\" uri=\"http://java.sun.com/jsp/jstl/core\" %>"
      },
      {
        "label": "D",
        "text": "<%! import %>"
      }
    ],
    "answer": "C",
    "explanation": "通过taglib指令引入JSTL标签库。prefix定义标签前缀(常用c)，uri指定标签库的命名空间。",
    "id": "GEN0027",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "web.xml中，<welcome-file>标签的作用是？",
    "options": [
      {
        "label": "A",
        "text": "指定错误页面"
      },
      {
        "label": "B",
        "text": "指定Web应用的默认首页"
      },
      {
        "label": "C",
        "text": "配置Servlet映射"
      },
      {
        "label": "D",
        "text": "设置过滤器"
      }
    ],
    "answer": "B",
    "explanation": "<welcome-file>指定用户访问应用根路径时默认显示的页面，如index.jsp。",
    "id": "GEN0028",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "JSP编译后的.class文件存放在Tomcat的哪个目录？",
    "options": [
      {
        "label": "A",
        "text": "/bin"
      },
      {
        "label": "B",
        "text": "/conf"
      },
      {
        "label": "C",
        "text": "/work"
      },
      {
        "label": "D",
        "text": "/webapps"
      }
    ],
    "answer": "C",
    "explanation": "Tomcat将JSP编译后的.java和.class文件存放在work目录下。webapps存放Web项目。",
    "id": "GEN0029",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "MVC模式中，Controller(控制器)通常由什么技术实现？",
    "options": [
      {
        "label": "A",
        "text": "JSP"
      },
      {
        "label": "B",
        "text": "HTML"
      },
      {
        "label": "C",
        "text": "Servlet"
      },
      {
        "label": "D",
        "text": "JavaScript"
      }
    ],
    "answer": "C",
    "explanation": "MVC中Controller由Servlet实现，负责接收请求、调用Model、分派View。JSP通常作为View。",
    "id": "GEN0030",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "在Filter中获取初始化参数的方法是？",
    "options": [
      {
        "label": "A",
        "text": "getInitParameter(String name)"
      },
      {
        "label": "B",
        "text": "getFilterParameter(String name)"
      },
      {
        "label": "C",
        "text": "getConfigParameter(String name)"
      },
      {
        "label": "D",
        "text": "getServletParameter(String name)"
      }
    ],
    "answer": "A",
    "explanation": "FilterConfig的getInitParameter()用于获取web.xml中为过滤器配置的初始化参数。",
    "id": "GEN0031",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "以下关于ServletContext的描述，错误的是？",
    "options": [
      {
        "label": "A",
        "text": "每个Web应用有唯一的ServletContext"
      },
      {
        "label": "B",
        "text": "ServletContext可以获取全局初始化参数"
      },
      {
        "label": "C",
        "text": "ServletContext仅在单个Servlet中可用"
      },
      {
        "label": "D",
        "text": "ServletContext可以获取服务器信息"
      }
    ],
    "answer": "C",
    "explanation": "ServletContext是整个Web应用共享的，所有Servlet都能访问，不是单个Servlet专用。",
    "id": "GEN0032",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "response.sendRedirect()方法执行后，客户端会收到哪个HTTP状态码？",
    "options": [
      {
        "label": "A",
        "text": "200"
      },
      {
        "label": "B",
        "text": "302"
      },
      {
        "label": "C",
        "text": "404"
      },
      {
        "label": "D",
        "text": "500"
      }
    ],
    "answer": "B",
    "explanation": "sendRedirect()向浏览器发送302(Found/临时重定向)状态码，浏览器收到后自动向新URL发起请求。",
    "id": "GEN0033",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "关于Servlet的线程安全问题，以下描述正确的是？",
    "options": [
      {
        "label": "A",
        "text": "Servlet是单线程的，不存在线程安全问题"
      },
      {
        "label": "B",
        "text": "多个请求会共享同一个Servlet实例，需要注意线程安全"
      },
      {
        "label": "C",
        "text": "每个请求创建一个新的Servlet实例"
      },
      {
        "label": "D",
        "text": "Servlet自动处理所有线程安全问题"
      }
    ],
    "answer": "B",
    "explanation": "Servlet容器对每个Servlet只创建一个实例，多个请求并发调用service()方法共享该实例。应避免在Servlet中使用实例变量存储请求相关数据。",
    "id": "GEN0034",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "在web.xml中，配置Session超时时间的标签是？",
    "options": [
      {
        "label": "A",
        "text": "<session-timeout>"
      },
      {
        "label": "B",
        "text": "<session-config>"
      },
      {
        "label": "C",
        "text": "<session-timeout>在<session-config>内部"
      },
      {
        "label": "D",
        "text": "<timeout-config>"
      }
    ],
    "answer": "C",
    "explanation": "在<session-config>标签内使用<session-timeout>设置Session超时(单位分钟)。",
    "id": "GEN0035",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "多选题",
    "title": "以下属于JSP隐式对象的是？",
    "options": [
      {
        "label": "A",
        "text": "request"
      },
      {
        "label": "B",
        "text": "response"
      },
      {
        "label": "C",
        "text": "application"
      },
      {
        "label": "D",
        "text": "database"
      },
      {
        "label": "E",
        "text": "session"
      }
    ],
    "answer": "A;B;C;E",
    "explanation": "database不是JSP隐式对象。JSP有9个隐式对象，request/response/session/application/page/out/config/pageContext/exception。",
    "id": "GEN0036",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "多选题",
    "title": "以下关于ServletConfig的描述，正确的有？",
    "options": [
      {
        "label": "A",
        "text": "代表单个Servlet的配置信息"
      },
      {
        "label": "B",
        "text": "通过getServletConfig()方法获取"
      },
      {
        "label": "C",
        "text": "可获取Servlet的初始化参数"
      },
      {
        "label": "D",
        "text": "被整个Web应用的所有Servlet共享"
      }
    ],
    "answer": "A;B;C",
    "explanation": "ServletConfig仅代表单个Servlet的配置，不被共享。D描述的是ServletContext。",
    "id": "GEN0037",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "多选题",
    "title": "以下哪些是JavaBean的规范要求？",
    "options": [
      {
        "label": "A",
        "text": "类必须是public的"
      },
      {
        "label": "B",
        "text": "必须有无参构造方法"
      },
      {
        "label": "C",
        "text": "属性必须是public的"
      },
      {
        "label": "D",
        "text": "提供getter/setter方法访问属性"
      },
      {
        "label": "E",
        "text": "必须实现Serializable接口"
      }
    ],
    "answer": "A;B;D",
    "explanation": "JavaBean规范：public类、private属性、public的getter/setter、无参构造。Serializable不是必须的，但在某些场景(如分布式)建议实现。",
    "id": "GEN0038",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "多选题",
    "title": "以下方法属于HttpServletRequest接口的有？",
    "options": [
      {
        "label": "A",
        "text": "getParameter(String name)"
      },
      {
        "label": "B",
        "text": "getAttribute(String name)"
      },
      {
        "label": "C",
        "text": "setAttribute(String name, Object o)"
      },
      {
        "label": "D",
        "text": "getRequestDispatcher(String path)"
      },
      {
        "label": "E",
        "text": "sendRedirect(String url)"
      }
    ],
    "answer": "A;B;C;D",
    "explanation": "sendRedirect()是HttpServletResponse的方法，不是HttpServletRequest的。其他四项都是request的方法。",
    "id": "GEN0039",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "多选题",
    "title": "以下关于MVC模式的描述，正确的有？",
    "options": [
      {
        "label": "A",
        "text": "Model负责业务逻辑和数据处理"
      },
      {
        "label": "B",
        "text": "View负责用户界面展示"
      },
      {
        "label": "C",
        "text": "Controller负责调度和流程控制"
      },
      {
        "label": "D",
        "text": "MVC提高了代码的耦合度"
      },
      {
        "label": "E",
        "text": "JSP通常扮演View角色"
      }
    ],
    "answer": "A;B;C;E",
    "explanation": "MVC降低代码耦合度(而非提高)，通过分层使各层职责清晰、易于维护。",
    "id": "GEN0040",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "多选题",
    "title": "JSTL中，<c:choose>标签内可以包含哪些子标签？",
    "options": [
      {
        "label": "A",
        "text": "<c:when>"
      },
      {
        "label": "B",
        "text": "<c:otherwise>"
      },
      {
        "label": "C",
        "text": "<c:else>"
      },
      {
        "label": "D",
        "text": "<c:if>"
      }
    ],
    "answer": "A;B",
    "explanation": "<c:choose>内部只能包含<c:when>(一个或多个)和<c:otherwise>(零个或一个)。没有<c:else>标签，也不能嵌套<c:if>。",
    "id": "GEN0041",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "多选题",
    "title": "以下哪些是JDBC编程中需要释放的资源？",
    "options": [
      {
        "label": "A",
        "text": "Connection"
      },
      {
        "label": "B",
        "text": "Statement"
      },
      {
        "label": "C",
        "text": "ResultSet"
      },
      {
        "label": "D",
        "text": "DriverManager"
      }
    ],
    "answer": "A;B;C",
    "explanation": "JDBC需要依次关闭ResultSet→Statement→Connection。DriverManager不需要手动关闭。",
    "id": "GEN0042",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "多选题",
    "title": "关于Filter过滤器，以下描述正确的有？",
    "options": [
      {
        "label": "A",
        "text": "必须实现javax.servlet.Filter接口"
      },
      {
        "label": "B",
        "text": "可用于统一的编码处理"
      },
      {
        "label": "C",
        "text": "可用于权限验证和访问控制"
      },
      {
        "label": "D",
        "text": "一个Web应用只能定义一个Filter"
      }
    ],
    "answer": "A;B;C",
    "explanation": "一个Web应用可以定义多个Filter，按注册顺序组成过滤器链。Filter的典型应用：编码过滤、权限检查、日志记录、IP过滤。",
    "id": "GEN0043",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "多选题",
    "title": "以下哪些属于JSP的page指令的属性？",
    "options": [
      {
        "label": "A",
        "text": "import"
      },
      {
        "label": "B",
        "text": "pageEncoding"
      },
      {
        "label": "C",
        "text": "contentType"
      },
      {
        "label": "D",
        "text": "errorPage"
      },
      {
        "label": "E",
        "text": "scope"
      }
    ],
    "answer": "A;B;C;D",
    "explanation": "scope不是page指令的属性(scope是<jsp:useBean>动作标签的属性)。page指令常用属性：import/pageEncoding/contentType/errorPage/isErrorPage/language/session等。",
    "id": "GEN0044",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "多选题",
    "title": "关于转发和重定向，描述正确的有？",
    "options": [
      {
        "label": "A",
        "text": "转发是一次请求，重定向是两次请求"
      },
      {
        "label": "B",
        "text": "转发时URL不变，重定向时URL改变"
      },
      {
        "label": "C",
        "text": "转发可以共享request数据"
      },
      {
        "label": "D",
        "text": "重定向可以跨域访问"
      },
      {
        "label": "E",
        "text": "转发的速度比重定向慢"
      }
    ],
    "answer": "A;B;C;D",
    "explanation": "E错误：转发速度比重定向快(转发是服务器内部操作，重定向需要浏览器重新发送请求)。",
    "id": "GEN0045",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "多选题",
    "title": "以下属于JSP动作标签的有？",
    "options": [
      {
        "label": "A",
        "text": "<jsp:useBean>"
      },
      {
        "label": "B",
        "text": "<jsp:include>"
      },
      {
        "label": "C",
        "text": "<jsp:forward>"
      },
      {
        "label": "D",
        "text": "<jsp:setProperty>"
      },
      {
        "label": "E",
        "text": "<%@ include %>"
      }
    ],
    "answer": "A;B;C;D",
    "explanation": "E是JSP指令标签(编译时)，不是动作标签(运行时)。常用JSP动作：useBean/setProperty/getProperty/include/forward/plugin。",
    "id": "GEN0046",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "多选题",
    "title": "以下哪些措施可以防止JSP/Servlet中的中文乱码？",
    "options": [
      {
        "label": "A",
        "text": "设置JSP的pageEncoding=\"UTF-8\""
      },
      {
        "label": "B",
        "text": "调用request.setCharacterEncoding(\"UTF-8\")"
      },
      {
        "label": "C",
        "text": "设置response.setContentType(\"text/html;charset=UTF-8\")"
      },
      {
        "label": "D",
        "text": "使用GBK编码代替UTF-8"
      }
    ],
    "answer": "A;B;C",
    "explanation": "乱码的根本原因是编码不一致。三处统一设UTF-8可解决大部分乱码问题。GBK不是通用方案(国际化支持差)。",
    "id": "GEN0047",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "判断题",
    "title": "JSP最终会被编译成Servlet。",
    "options": [],
    "answer": "对",
    "explanation": "JSP本质上就是Servlet，JSP引擎会将.jsp文件转译成Servlet源码(.java)，再编译成.class执行。",
    "id": "GEN0048",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "判断题",
    "title": "application隐式对象的类型是HttpSession。",
    "options": [],
    "answer": "错",
    "explanation": "application的类型是ServletContext，不是HttpSession。session的类型才是HttpSession。",
    "id": "GEN0049",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "判断题",
    "title": "EL表达式${3+5}的输出结果是8。",
    "options": [],
    "answer": "对",
    "explanation": "EL支持算术运算，${3+5}计算结果为8并输出。",
    "id": "GEN0050",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "判断题",
    "title": "<jsp:forward>标签执行后，浏览器地址栏会改变。",
    "options": [],
    "answer": "错",
    "explanation": "<jsp:forward>本质是服务器内部转发，浏览器地址栏不变。重定向才会改变地址栏。",
    "id": "GEN0051",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "判断题",
    "title": "JDBC中，PreparedStatement可以防止SQL注入攻击。",
    "options": [],
    "answer": "对",
    "explanation": "PreparedStatement使用预编译和参数绑定(?)方式，将SQL逻辑与数据分离，有效防止SQL注入。Statement拼接字符串则不安全。",
    "id": "GEN0052",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "判断题",
    "title": "Servlet的init()方法在每次请求时都会被调用。",
    "options": [],
    "answer": "错",
    "explanation": "init()只在Servlet第一次加载时调用一次。每次请求调用的是service()方法。",
    "id": "GEN0053",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "判断题",
    "title": "Cookie数据存储在服务器端。",
    "options": [],
    "answer": "错",
    "explanation": "Cookie存储在客户端浏览器中。Session数据才存储在服务器端。",
    "id": "GEN0054",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "判断题",
    "title": "HTTP协议中，GET方法比POST方法更安全。",
    "options": [],
    "answer": "错",
    "explanation": "POST比GET更安全：POST将数据放在请求体中不可见，GET将数据附在URL后可见且有长度限制。",
    "id": "GEN0055",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "判断题",
    "title": "一个Web应用只能定义一个Servlet。",
    "options": [],
    "answer": "错",
    "explanation": "一个Web应用可以定义多个Servlet，每个Servlet处理不同的URL映射。",
    "id": "GEN0056",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "判断题",
    "title": "Filter的doFilter方法中必须调用chain.doFilter()才能将请求传递给下一个资源。",
    "options": [],
    "answer": "对",
    "explanation": "如果不调用chain.doFilter()，请求会在当前Filter被拦截，无法到达目标Servlet或JSP。",
    "id": "GEN0057",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "Linux中，查看当前目录路径的命令是？",
    "options": [
      {
        "label": "A",
        "text": "ls"
      },
      {
        "label": "B",
        "text": "cd"
      },
      {
        "label": "C",
        "text": "pwd"
      },
      {
        "label": "D",
        "text": "dir"
      }
    ],
    "answer": "C",
    "explanation": "pwd(print working directory)显示当前工作目录的绝对路径。",
    "id": "GEN0058",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "删除一个非空目录，应使用？",
    "options": [
      {
        "label": "A",
        "text": "rm dir"
      },
      {
        "label": "B",
        "text": "rm -r dir"
      },
      {
        "label": "C",
        "text": "rmdir dir"
      },
      {
        "label": "D",
        "text": "delete dir"
      }
    ],
    "answer": "B",
    "explanation": "rm -r递归删除目录及其内容。rmdir只能删除空目录。",
    "id": "GEN0059",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "在Linux中，创建一个空文件应使用？",
    "options": [
      {
        "label": "A",
        "text": "cat"
      },
      {
        "label": "B",
        "text": "touch"
      },
      {
        "label": "C",
        "text": "mkdir"
      },
      {
        "label": "D",
        "text": "new"
      }
    ],
    "answer": "B",
    "explanation": "touch创建空文件(若文件已存在则更新其访问/修改时间戳)。cat查看内容，mkdir建目录。",
    "id": "GEN0060",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "将两个文件file1和file2合并输出到file3，正确的命令是？",
    "options": [
      {
        "label": "A",
        "text": "cat file1 file2 > file3"
      },
      {
        "label": "B",
        "text": "cp file1 file2 file3"
      },
      {
        "label": "C",
        "text": "mv file1 file2 > file3"
      },
      {
        "label": "D",
        "text": "merge file1 file2 file3"
      }
    ],
    "answer": "A",
    "explanation": "cat可连接多个文件并输出，配合>重定向将结果写入file3。",
    "id": "GEN0061",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "查看文本文件前20行的命令是？",
    "options": [
      {
        "label": "A",
        "text": "cat -20 file"
      },
      {
        "label": "B",
        "text": "head -20 file"
      },
      {
        "label": "C",
        "text": "tail -20 file"
      },
      {
        "label": "D",
        "text": "more -20 file"
      }
    ],
    "answer": "B",
    "explanation": "head -n显示文件前n行(默认10行)。tail显示末尾，cat显示全部。",
    "id": "GEN0062",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "分页查看大文件内容，支持上下翻页的命令是？",
    "options": [
      {
        "label": "A",
        "text": "cat"
      },
      {
        "label": "B",
        "text": "head"
      },
      {
        "label": "C",
        "text": "more"
      },
      {
        "label": "D",
        "text": "less"
      }
    ],
    "answer": "D",
    "explanation": "less支持上下翻页、搜索等。more只能向下翻页。cat一次性输出全部。",
    "id": "GEN0063",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "Linux中切换到用户主目录的命令是？",
    "options": [
      {
        "label": "A",
        "text": "cd /"
      },
      {
        "label": "B",
        "text": "cd .."
      },
      {
        "label": "C",
        "text": "cd ~"
      },
      {
        "label": "D",
        "text": "cd /root"
      }
    ],
    "answer": "C",
    "explanation": "cd ~或直接cd(无参数)回到当前用户的主目录。cd /回到根目录，cd ..回上级目录。",
    "id": "GEN0064",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "以下哪个命令用于查找文件？",
    "options": [
      {
        "label": "A",
        "text": "grep"
      },
      {
        "label": "B",
        "text": "find"
      },
      {
        "label": "C",
        "text": "locate"
      },
      {
        "label": "D",
        "text": "B和C都正确"
      }
    ],
    "answer": "D",
    "explanation": "find按条件(名称/大小/时间)查找文件。locate基于数据库快速定位文件。grep搜索文件内容。",
    "id": "GEN0065",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "统计文件行数的命令是？",
    "options": [
      {
        "label": "A",
        "text": "wc -l file"
      },
      {
        "label": "B",
        "text": "wc -w file"
      },
      {
        "label": "C",
        "text": "wc -c file"
      },
      {
        "label": "D",
        "text": "count file"
      }
    ],
    "answer": "A",
    "explanation": "wc -l统计行数(line)、wc -w统计单词数(word)、wc -c统计字节数(byte)。",
    "id": "GEN0066",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "Linux中，哪个命令用于查看文件类型？",
    "options": [
      {
        "label": "A",
        "text": "cat"
      },
      {
        "label": "B",
        "text": "type"
      },
      {
        "label": "C",
        "text": "file"
      },
      {
        "label": "D",
        "text": "ls"
      }
    ],
    "answer": "C",
    "explanation": "file命令根据文件内容(而非扩展名)判断文件类型，如文本、二进制、目录、符号链接等。",
    "id": "GEN0067",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "chmod 755 file 执行后，其他用户的权限是？",
    "options": [
      {
        "label": "A",
        "text": "rwx"
      },
      {
        "label": "B",
        "text": "rw-"
      },
      {
        "label": "C",
        "text": "r-x"
      },
      {
        "label": "D",
        "text": "r--"
      }
    ],
    "answer": "C",
    "explanation": "755=rwx(7)+r-x(5)+r-x(5)。其他用户(第三位5)权限为r-x(读+执行)。",
    "id": "GEN0068",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "修改文件使其所有者具有读写执行权限，组和其他用户只读，数字应为？",
    "options": [
      {
        "label": "A",
        "text": "755"
      },
      {
        "label": "B",
        "text": "744"
      },
      {
        "label": "C",
        "text": "766"
      },
      {
        "label": "D",
        "text": "777"
      }
    ],
    "answer": "B",
    "explanation": "744=rwx(7)+r--(4)+r--(4)，即所有者rwx，组r--，其他r--。755多给了组和其他用户执行权限。",
    "id": "GEN0069",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "符号权限 rw-r--r-- 对应的数字是？",
    "options": [
      {
        "label": "A",
        "text": "755"
      },
      {
        "label": "B",
        "text": "644"
      },
      {
        "label": "C",
        "text": "744"
      },
      {
        "label": "D",
        "text": "654"
      }
    ],
    "answer": "B",
    "explanation": "rw-(6)+r--(4)+r--(4)=644。这是普通文件的常用权限。",
    "id": "GEN0070",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "在vi中，从命令模式进入插入模式，应按哪个键在当前光标前插入？",
    "options": [
      {
        "label": "A",
        "text": "a"
      },
      {
        "label": "B",
        "text": "i"
      },
      {
        "label": "C",
        "text": "o"
      },
      {
        "label": "D",
        "text": "A"
      }
    ],
    "answer": "B",
    "explanation": "i(insert)在光标前插入。a在光标后(append)，o在下一行新建，A在行尾插入。",
    "id": "GEN0071",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "在vi中，删除光标所在行应使用？",
    "options": [
      {
        "label": "A",
        "text": "d"
      },
      {
        "label": "B",
        "text": "x"
      },
      {
        "label": "C",
        "text": "dd"
      },
      {
        "label": "D",
        "text": "delete"
      }
    ],
    "answer": "C",
    "explanation": "dd删除整行。x删除光标处单个字符。d后跟移动命令可删除指定范围。",
    "id": "GEN0072",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "vi中复制当前行的命令是？",
    "options": [
      {
        "label": "A",
        "text": "cc"
      },
      {
        "label": "B",
        "text": "cp"
      },
      {
        "label": "C",
        "text": "yy"
      },
      {
        "label": "D",
        "text": "copy"
      }
    ],
    "answer": "C",
    "explanation": "yy(yank)复制当前行。之后用p(paste)粘贴。dd删除实质是剪切(可用p粘贴回来)。",
    "id": "GEN0073",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "在vi末行模式中，保存并退出的命令是？",
    "options": [
      {
        "label": "A",
        "text": ":q"
      },
      {
        "label": "B",
        "text": ":w"
      },
      {
        "label": "C",
        "text": ":wq"
      },
      {
        "label": "D",
        "text": ":exit"
      }
    ],
    "answer": "C",
    "explanation": ":wq(write+quit)保存并退出。:w仅保存，:q仅退出(未修改时)，:q!强制退出不保存。",
    "id": "GEN0074",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "在Shell中，以下哪个变量表示上一条命令的退出状态？",
    "options": [
      {
        "label": "A",
        "text": "$#"
      },
      {
        "label": "B",
        "text": "$0"
      },
      {
        "label": "C",
        "text": "$?"
      },
      {
        "label": "D",
        "text": "$!"
      }
    ],
    "answer": "C",
    "explanation": "$?返回上一条命令的退出状态码(0表示成功，非0表示失败)。$#参数个数，$0脚本名，$!后台进程PID。",
    "id": "GEN0075",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "Shell中要判断两个数值是否相等，应使用？",
    "options": [
      {
        "label": "A",
        "text": "[ $a = $b ]"
      },
      {
        "label": "B",
        "text": "[ $a -eq $b ]"
      },
      {
        "label": "C",
        "text": "[ $a == $b ]"
      },
      {
        "label": "D",
        "text": "B和C都可以"
      }
    ],
    "answer": "B",
    "explanation": "数值比较用-eq(equal)、-gt、-lt等。=和==用于字符串比较。",
    "id": "GEN0076",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "Shell脚本中，for循环的正确语法是？",
    "options": [
      {
        "label": "A",
        "text": "for i in list; do ... done"
      },
      {
        "label": "B",
        "text": "for (i=0;i<10;i++) do ... done"
      },
      {
        "label": "C",
        "text": "for i in list { ... }"
      },
      {
        "label": "D",
        "text": "foreach i in list do ... done"
      }
    ],
    "answer": "A",
    "explanation": "Bash中for循环语法为for var in list; do ... done。B是C语言风格(for((i=0;i<10;i++));do ... done)也支持但不是默认写法。",
    "id": "GEN0077",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "以下哪个命令用于查看磁盘使用情况？",
    "options": [
      {
        "label": "A",
        "text": "ps"
      },
      {
        "label": "B",
        "text": "top"
      },
      {
        "label": "C",
        "text": "df"
      },
      {
        "label": "D",
        "text": "du"
      }
    ],
    "answer": "C",
    "explanation": "df(disk free)查看磁盘分区使用情况(总容量/已用/可用)。du(disk usage)查看目录/文件占用空间。",
    "id": "GEN0078",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "查看当前目录下每个文件/子目录占用磁盘空间大小，应使用？",
    "options": [
      {
        "label": "A",
        "text": "ls -l"
      },
      {
        "label": "B",
        "text": "df -h"
      },
      {
        "label": "C",
        "text": "du -sh *"
      },
      {
        "label": "D",
        "text": "free -h"
      }
    ],
    "answer": "C",
    "explanation": "du -sh *查看当前目录下各文件/子目录大小。df看分区，free看内存。",
    "id": "GEN0079",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "查看系统内存使用情况的命令是？",
    "options": [
      {
        "label": "A",
        "text": "df -h"
      },
      {
        "label": "B",
        "text": "du -sh"
      },
      {
        "label": "C",
        "text": "free -h"
      },
      {
        "label": "D",
        "text": "ps -aux"
      }
    ],
    "answer": "C",
    "explanation": "free查看内存(RAM+Swap)使用情况。df看磁盘，du看目录大小，ps看进程。",
    "id": "GEN0080",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "实时显示系统进程信息的命令是？",
    "options": [
      {
        "label": "A",
        "text": "ps"
      },
      {
        "label": "B",
        "text": "top"
      },
      {
        "label": "C",
        "text": "jobs"
      },
      {
        "label": "D",
        "text": "bg"
      }
    ],
    "answer": "B",
    "explanation": "top实时刷新显示进程信息(CPU/内存占用)。ps是快照(一次性输出)。jobs看后台任务。",
    "id": "GEN0081",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "终止所有名为httpd的进程，应使用？",
    "options": [
      {
        "label": "A",
        "text": "kill httpd"
      },
      {
        "label": "B",
        "text": "killall httpd"
      },
      {
        "label": "C",
        "text": "stop httpd"
      },
      {
        "label": "D",
        "text": "end httpd"
      }
    ],
    "answer": "B",
    "explanation": "killall终止所有同名进程。kill需要指定PID。stop和end不是Linux标准命令。",
    "id": "GEN0082",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "Linux中，创建新用户并指定其主目录为/home/newuser，应使用？",
    "options": [
      {
        "label": "A",
        "text": "useradd -d /home/newuser newuser"
      },
      {
        "label": "B",
        "text": "useradd -h /home/newuser newuser"
      },
      {
        "label": "C",
        "text": "adduser newuser /home/newuser"
      },
      {
        "label": "D",
        "text": "usermod -d /home/newuser newuser"
      }
    ],
    "answer": "A",
    "explanation": "useradd -d指定新用户的主目录。usermod是修改已有用户，不是创建。",
    "id": "GEN0083",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "删除用户wangwu及其主目录，应使用？",
    "options": [
      {
        "label": "A",
        "text": "userdel wangwu"
      },
      {
        "label": "B",
        "text": "userdel -r wangwu"
      },
      {
        "label": "C",
        "text": "usermod -d wangwu"
      },
      {
        "label": "D",
        "text": "rm -rf /home/wangwu"
      }
    ],
    "answer": "B",
    "explanation": "userdel -r删除用户同时删除其主目录和邮件池。不加-r只删除用户账户不删主目录。",
    "id": "GEN0084",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "查看当前登录用户名的命令是？",
    "options": [
      {
        "label": "A",
        "text": "pwd"
      },
      {
        "label": "B",
        "text": "hostname"
      },
      {
        "label": "C",
        "text": "whoami"
      },
      {
        "label": "D",
        "text": "id"
      }
    ],
    "answer": "C",
    "explanation": "whoami显示当前用户名。pwd显示当前路径，hostname显示主机名，id显示用户uid/gid。",
    "id": "GEN0085",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "查看Linux内核版本信息的命令是？",
    "options": [
      {
        "label": "A",
        "text": "lsb_release -a"
      },
      {
        "label": "B",
        "text": "uname -r"
      },
      {
        "label": "C",
        "text": "cat /etc/version"
      },
      {
        "label": "D",
        "text": "kernel -v"
      }
    ],
    "answer": "B",
    "explanation": "uname -r查看内核版本号。uname -a查看完整系统信息。lsb_release看发行版信息。",
    "id": "GEN0086",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "以下哪个是Linux默认的Shell？",
    "options": [
      {
        "label": "A",
        "text": "csh"
      },
      {
        "label": "B",
        "text": "ksh"
      },
      {
        "label": "C",
        "text": "bash"
      },
      {
        "label": "D",
        "text": "zsh"
      }
    ],
    "answer": "C",
    "explanation": "bash(Bourne Again Shell)是大多数Linux发行版的默认Shell。csh/ksh/zsh是其他类型的Shell。",
    "id": "GEN0087",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "若当前目录为/home/user，执行cd /etc后，执行cd -会？",
    "options": [
      {
        "label": "A",
        "text": "切换到/root"
      },
      {
        "label": "B",
        "text": "切换到/home/user"
      },
      {
        "label": "C",
        "text": "切换到/etc"
      },
      {
        "label": "D",
        "text": "切换到根目录/"
      }
    ],
    "answer": "B",
    "explanation": "cd -切换到上一次所在目录。从/home/user切换到/etc后再cd -回到/home/user。",
    "id": "GEN0088",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "tar命令中，-z选项的含义是？",
    "options": [
      {
        "label": "A",
        "text": "创建归档"
      },
      {
        "label": "B",
        "text": "解压归档"
      },
      {
        "label": "C",
        "text": "使用gzip压缩/解压"
      },
      {
        "label": "D",
        "text": "显示详细信息"
      }
    ],
    "answer": "C",
    "explanation": "-z表示通过gzip进行压缩或解压。c=创建，x=解压，v=显示过程，f=指定文件名。",
    "id": "GEN0089",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "查看tar包内容但不解压，应使用？",
    "options": [
      {
        "label": "A",
        "text": "tar -xvf file.tar"
      },
      {
        "label": "B",
        "text": "tar -cvf file.tar"
      },
      {
        "label": "C",
        "text": "tar -tvf file.tar"
      },
      {
        "label": "D",
        "text": "tar -zvf file.tar"
      }
    ],
    "answer": "C",
    "explanation": "-t(list)列出归档内容但不解压。x=解压，c=创建。",
    "id": "GEN0090",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "grep命令中，-i选项的含义是？",
    "options": [
      {
        "label": "A",
        "text": "递归搜索"
      },
      {
        "label": "B",
        "text": "忽略大小写"
      },
      {
        "label": "C",
        "text": "显示行号"
      },
      {
        "label": "D",
        "text": "反向匹配"
      }
    ],
    "answer": "B",
    "explanation": "-i(ignore case)不区分大小写。r=递归，n=显示行号，v=反向(不匹配行)。",
    "id": "GEN0091",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "以下哪个正则表达式表示\"以数字开头\"？",
    "options": [
      {
        "label": "A",
        "text": "[0-9]$"
      },
      {
        "label": "B",
        "text": "^[0-9]"
      },
      {
        "label": "C",
        "text": "[0-9]*"
      },
      {
        "label": "D",
        "text": "[^0-9]"
      }
    ],
    "answer": "B",
    "explanation": "^在正则中表示行首，^[0-9]表示以数字开头。$表示行尾，*表示重复0或多次，[^]表示取反。",
    "id": "GEN0092",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "将命令的输出同时显示在屏幕和保存到文件，应使用？",
    "options": [
      {
        "label": "A",
        "text": "command > file"
      },
      {
        "label": "B",
        "text": "command | tee file"
      },
      {
        "label": "C",
        "text": "command 2>&1 file"
      },
      {
        "label": "D",
        "text": "command && file"
      }
    ],
    "answer": "B",
    "explanation": "tee命令将标准输入复制到标准输出和文件，实现\"分叉\"效果。command | tee file。",
    "id": "GEN0093",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "将错误输出重定向到与标准输出相同位置，正确写法是？",
    "options": [
      {
        "label": "A",
        "text": "command > file 2> file"
      },
      {
        "label": "B",
        "text": "command > file 2>&1"
      },
      {
        "label": "C",
        "text": "command 2> file > file"
      },
      {
        "label": "D",
        "text": "command 1>&2 > file"
      }
    ],
    "answer": "B",
    "explanation": "2>&1将标准错误(文件描述符2)重定向到标准输出(1)当前指向的位置。必须写在>之后。",
    "id": "GEN0094",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "让命令在后台运行，应在命令末尾加？",
    "options": [
      {
        "label": "A",
        "text": "&&"
      },
      {
        "label": "B",
        "text": "||"
      },
      {
        "label": "C",
        "text": "&"
      },
      {
        "label": "D",
        "text": "$"
      }
    ],
    "answer": "C",
    "explanation": "命令后加&使其在后台运行，终端可继续输入其他命令。&&表示前命令成功后执行，||表示前命令失败后执行。",
    "id": "GEN0095",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "查看某个端口是否被占用的命令是？",
    "options": [
      {
        "label": "A",
        "text": "ping port"
      },
      {
        "label": "B",
        "text": "netstat -an | grep port"
      },
      {
        "label": "C",
        "text": "traceroute port"
      },
      {
        "label": "D",
        "text": "telnet port"
      }
    ],
    "answer": "B",
    "explanation": "netstat显示网络连接/端口信息，配合grep过滤特定端口。ping测试网络连通，不检查端口。",
    "id": "GEN0096",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "SSH的默认端口号是？",
    "options": [
      {
        "label": "A",
        "text": "21"
      },
      {
        "label": "B",
        "text": "22"
      },
      {
        "label": "C",
        "text": "23"
      },
      {
        "label": "D",
        "text": "80"
      }
    ],
    "answer": "B",
    "explanation": "SSH默认端口22(安全远程登录)。21=FTP，23=Telnet(不安全明文)，80=HTTP。",
    "id": "GEN0097",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "以下哪个Linux命令用于测试网络连通性？",
    "options": [
      {
        "label": "A",
        "text": "netstat"
      },
      {
        "label": "B",
        "text": "ifconfig"
      },
      {
        "label": "C",
        "text": "ping"
      },
      {
        "label": "D",
        "text": "ssh"
      }
    ],
    "answer": "C",
    "explanation": "ping发送ICMP请求测试与目标主机的连通性。netstat查看网络状态，ifconfig查看/配置网络接口。",
    "id": "GEN0098",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "Linux普通用户的提示符通常是什么？",
    "options": [
      {
        "label": "A",
        "text": "#"
      },
      {
        "label": "B",
        "text": "$"
      },
      {
        "label": "C",
        "text": "%"
      },
      {
        "label": "D",
        "text": ">"
      }
    ],
    "answer": "B",
    "explanation": "普通用户提示符为$，root超级用户提示符为#。",
    "id": "GEN0099",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "以下哪个目录存放系统配置文件？",
    "options": [
      {
        "label": "A",
        "text": "/bin"
      },
      {
        "label": "B",
        "text": "/tmp"
      },
      {
        "label": "C",
        "text": "/etc"
      },
      {
        "label": "D",
        "text": "/dev"
      }
    ],
    "answer": "C",
    "explanation": "/etc存放系统配置文件(网络、用户、服务等)。/bin命令，/tmp临时文件，/dev设备文件。",
    "id": "GEN0100",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "如果命令在/bin和/usr/bin中都有，执行时先找哪个？",
    "options": [
      {
        "label": "A",
        "text": "/bin中的"
      },
      {
        "label": "B",
        "text": "/usr/bin中的"
      },
      {
        "label": "C",
        "text": "取决于PATH变量中的顺序"
      },
      {
        "label": "D",
        "text": "随机选择"
      }
    ],
    "answer": "C",
    "explanation": "Shell按PATH环境变量中目录的顺序依次查找命令，先找到的优先执行。",
    "id": "GEN0101",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "vim中，在命令模式下撤销上一次操作应使用？",
    "options": [
      {
        "label": "A",
        "text": "Ctrl+Z"
      },
      {
        "label": "B",
        "text": "u"
      },
      {
        "label": "C",
        "text": "Ctrl+R"
      },
      {
        "label": "D",
        "text": "backspace"
      }
    ],
    "answer": "B",
    "explanation": "u(undo)撤销。Ctrl+R恢复(redo)。Ctrl+Z通常表示暂停进程。",
    "id": "GEN0102",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "Shell脚本运行时，$0表示什么？",
    "options": [
      {
        "label": "A",
        "text": "第一个参数"
      },
      {
        "label": "B",
        "text": "脚本本身的名字"
      },
      {
        "label": "C",
        "text": "参数个数"
      },
      {
        "label": "D",
        "text": "当前进程PID"
      }
    ],
    "answer": "B",
    "explanation": "$0是脚本自身的名称。$1是第一个参数，$#是参数个数，$是当前Shell的PID。",
    "id": "GEN0103",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "Linux中文本三剑客不包括以下哪个？",
    "options": [
      {
        "label": "A",
        "text": "grep"
      },
      {
        "label": "B",
        "text": "sed"
      },
      {
        "label": "C",
        "text": "awk"
      },
      {
        "label": "D",
        "text": "sort"
      }
    ],
    "answer": "D",
    "explanation": "文本三剑客：grep(搜索过滤)、sed(流编辑器-替换)、awk(文本分析-按列处理)。sort是排序工具。",
    "id": "GEN0104",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下哪些是Linux常用的文件查看命令？",
    "options": [
      {
        "label": "A",
        "text": "cat"
      },
      {
        "label": "B",
        "text": "more"
      },
      {
        "label": "C",
        "text": "less"
      },
      {
        "label": "D",
        "text": "touch"
      },
      {
        "label": "E",
        "text": "head"
      }
    ],
    "answer": "A;B;C;E",
    "explanation": "touch用于创建空文件/更新时间戳，不是查看命令。cat/more/less/head/tail都是文件查看命令。",
    "id": "GEN0105",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下关于Linux权限的描述，正确的有？",
    "options": [
      {
        "label": "A",
        "text": "r表示读权限，对应数字4"
      },
      {
        "label": "B",
        "text": "w表示写权限，对应数字2"
      },
      {
        "label": "C",
        "text": "x表示执行权限，对应数字1"
      },
      {
        "label": "D",
        "text": "权限755表示所有用户都有写权限"
      }
    ],
    "answer": "A;B;C",
    "explanation": "755=rwxr-xr-x，组和其他用户只有r-x，没有w写权限。ABC正确。",
    "id": "GEN0106",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "vi编辑器的三种工作模式是？",
    "options": [
      {
        "label": "A",
        "text": "命令模式"
      },
      {
        "label": "B",
        "text": "插入模式"
      },
      {
        "label": "C",
        "text": "编辑模式"
      },
      {
        "label": "D",
        "text": "末行模式"
      }
    ],
    "answer": "A;B;D",
    "explanation": "vi三种模式：命令模式(默认)、插入模式(编辑文本)、末行模式(执行保存退出等)。没有\"编辑模式\"这个名称。",
    "id": "GEN0107",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下关于Shell变量的描述，正确的有？",
    "options": [
      {
        "label": "A",
        "text": "变量名可以由字母、数字和下划线组成"
      },
      {
        "label": "B",
        "text": "变量赋值等号两边不能有空格"
      },
      {
        "label": "C",
        "text": "引用变量时需加$符号"
      },
      {
        "label": "D",
        "text": "变量名可以以数字开头"
      }
    ],
    "answer": "A;B;C",
    "explanation": "变量名不能以数字开头。ABC都是Shell变量的正确规则。",
    "id": "GEN0108",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下哪些命令可以终止进程？",
    "options": [
      {
        "label": "A",
        "text": "kill"
      },
      {
        "label": "B",
        "text": "killall"
      },
      {
        "label": "C",
        "text": "stop"
      },
      {
        "label": "D",
        "text": "pkill"
      },
      {
        "label": "E",
        "text": "Ctrl+C"
      }
    ],
    "answer": "A;B;D;E",
    "explanation": "kill(指定PID)、killall(指定进程名)、pkill(模式匹配进程名)、Ctrl+C(终止前台进程)。stop不是Linux标准命令。",
    "id": "GEN0109",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下哪些属于Linux的标准目录结构？",
    "options": [
      {
        "label": "A",
        "text": "/bin — 基本用户命令"
      },
      {
        "label": "B",
        "text": "/etc — 系统配置文件"
      },
      {
        "label": "C",
        "text": "/proc — 进程和内核信息"
      },
      {
        "label": "D",
        "text": "/app — 应用程序目录"
      },
      {
        "label": "E",
        "text": "/var — 可变数据(日志等)"
      }
    ],
    "answer": "A;B;C;E",
    "explanation": "/app不是FHS标准目录。第三方软件通常安装在/opt或/usr/local。其他四个都是标准目录。",
    "id": "GEN0110",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "关于硬链接和软链接，描述正确的有？",
    "options": [
      {
        "label": "A",
        "text": "硬链接共享源文件的i节点"
      },
      {
        "label": "B",
        "text": "软链接可以跨文件系统"
      },
      {
        "label": "C",
        "text": "删除源文件后硬链接仍然可用"
      },
      {
        "label": "D",
        "text": "软链接可以链接目录"
      },
      {
        "label": "E",
        "text": "硬链接可以链接目录"
      }
    ],
    "answer": "A;B;C;D",
    "explanation": "E错误：硬链接不能链接目录(防止循环引用)。其他四项都正确。",
    "id": "GEN0111",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "Shell脚本中，以下哪些是合法的流程控制结构？",
    "options": [
      {
        "label": "A",
        "text": "if...then...else...fi"
      },
      {
        "label": "B",
        "text": "for...in...do...done"
      },
      {
        "label": "C",
        "text": "while...do...done"
      },
      {
        "label": "D",
        "text": "case...in...esac"
      },
      {
        "label": "E",
        "text": "try...catch...finally"
      }
    ],
    "answer": "A;B;C;D",
    "explanation": "try-catch-finally是Java的异常处理，不是Shell语法。其他四项都是Shell的标准流程控制。",
    "id": "GEN0112",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下哪些是tar命令的合法选项？",
    "options": [
      {
        "label": "A",
        "text": "-c 创建归档"
      },
      {
        "label": "B",
        "text": "-x 解压归档"
      },
      {
        "label": "C",
        "text": "-z 使用gzip"
      },
      {
        "label": "D",
        "text": "-j 使用bzip2"
      },
      {
        "label": "E",
        "text": "-d 删除归档中文件"
      }
    ],
    "answer": "A;B;C;D",
    "explanation": "tar没有-d选项(删除归档中的文件)。--delete可以但非常用。c/x/z/j/v/f/t都是常用选项。",
    "id": "GEN0113",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "Linux系统运行级别描述正确的有？",
    "options": [
      {
        "label": "A",
        "text": "运行级别0表示关机"
      },
      {
        "label": "B",
        "text": "运行级别3表示多用户命令行模式"
      },
      {
        "label": "C",
        "text": "运行级别5表示图形界面模式"
      },
      {
        "label": "D",
        "text": "运行级别6表示重启"
      }
    ],
    "answer": "A;B;C;D",
    "explanation": "常用运行级别：0关机、1单用户、2多用户(无NFS)、3完全多用户(命令行)、4保留、5图形界面、6重启。",
    "id": "GEN0114",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "查看系统信息的命令包括？",
    "options": [
      {
        "label": "A",
        "text": "uname -a — 系统基本信息"
      },
      {
        "label": "B",
        "text": "df -h — 磁盘使用情况"
      },
      {
        "label": "C",
        "text": "free -h — 内存使用情况"
      },
      {
        "label": "D",
        "text": "uptime — 系统运行时间"
      },
      {
        "label": "E",
        "text": "who — 当前登录用户"
      }
    ],
    "answer": "A;B;C;D;E",
    "explanation": "所有选项都是合法的系统信息查看命令。",
    "id": "GEN0115",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "Shell中，以下哪些是正确的条件测试写法？",
    "options": [
      {
        "label": "A",
        "text": "test -f file — 测试是否为普通文件"
      },
      {
        "label": "B",
        "text": "[ -d dir ] — 测试是否为目录"
      },
      {
        "label": "C",
        "text": "[ $a -eq $b ] — 数值相等测试"
      },
      {
        "label": "D",
        "text": "[ \"$str1\" = \"$str2\" ] — 字符串相等测试"
      },
      {
        "label": "E",
        "text": "[[ $a -gt 10 ]] — 扩展测试(大于)"
      }
    ],
    "answer": "A;B;C;D;E",
    "explanation": "全部正确。test命令和[ ]等价，[[ ]]是bash扩展(支持更多操作符和模式匹配)。",
    "id": "GEN0116",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "Linux文件名区分大小写。",
    "options": [],
    "answer": "对",
    "explanation": "Linux文件系统区分大小写，file.txt和File.txt是两个不同的文件。Windows不区分大小写。",
    "id": "GEN0117",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "rmdir命令可以删除非空目录。",
    "options": [],
    "answer": "错",
    "explanation": "rmdir只能删除空目录。非空目录需用rm -r删除。",
    "id": "GEN0118",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "Linux中，cat命令可以用于合并多个文件。",
    "options": [],
    "answer": "对",
    "explanation": "cat f1 f2 > f3将f1和f2的内容合并输出到f3。cat名称来源于concatenate(连接)。",
    "id": "GEN0119",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "在vi中，按i进入插入模式后，按Esc可返回命令模式。",
    "options": [],
    "answer": "对",
    "explanation": "Esc键从插入模式返回命令模式，这是vi最基本的模式切换操作。",
    "id": "GEN0120",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "chmod 777使所有用户对文件拥有全部权限，这是安全的做法。",
    "options": [],
    "answer": "错",
    "explanation": "777权限意味着任何人都可以读/写/执行该文件，存在严重安全隐患。应使用最小权限原则。",
    "id": "GEN0121",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "ps -aux命令中的a表示显示所有用户的进程。",
    "options": [],
    "answer": "对",
    "explanation": "a=所有用户(与终端相关)，u=用户格式显示，x=包括无终端的进程。组合显示完整进程列表。",
    "id": "GEN0122",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "kill -9是最温和的终止进程方式。",
    "options": [],
    "answer": "错",
    "explanation": "kill -9(SIGKILL)是强制杀死进程，不给进程清理资源的机会，是最暴力的方式。kill不带参数默认发送SIGTERM(15)，允许进程优雅退出。",
    "id": "GEN0123",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "管道|可以将前一个命令的标准错误输出传递给后一个命令。",
    "options": [],
    "answer": "错",
    "explanation": "管道只传递标准输出(stdout)，不传递标准错误(stderr)。要同时传递需用2>&1先将stderr重定向到stdout。",
    "id": "GEN0124",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "Linux中，普通用户可以修改自己的密码。",
    "options": [],
    "answer": "对",
    "explanation": "普通用户可以用passwd命令修改自己的密码(需输入旧密码验证)。修改他人密码需要root权限。",
    "id": "GEN0125",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "/tmp目录下的文件在系统重启后会被清空。",
    "options": [],
    "answer": "对",
    "explanation": "/tmp用于存放临时文件，很多Linux发行版会在重启时清空/tmp目录。",
    "id": "GEN0126",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "grep -v \"pattern\" 表示查找不匹配pattern的行。",
    "options": [],
    "answer": "对",
    "explanation": "-v(invert-match)反向匹配，输出不包含指定模式的行。",
    "id": "GEN0127",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "ln -s创建的是硬链接。",
    "options": [],
    "answer": "错",
    "explanation": "ln -s创建软链接(符号链接)。不带-s的ln创建硬链接。",
    "id": "GEN0128",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "usermod命令可以用于删除用户账户。",
    "options": [],
    "answer": "错",
    "explanation": "usermod只能修改已存在用户的属性。删除用户需要使用userdel命令。",
    "id": "GEN0129",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "环境变量PATH决定了Shell查找可执行文件的目录顺序。",
    "options": [],
    "answer": "对",
    "explanation": "当输入一个命令时，Shell按PATH变量中的目录顺序依次查找该命令的可执行文件。",
    "id": "GEN0130",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "单选题",
    "title": "HDFS中，NameNode将元数据保存在哪里？",
    "options": [
      {
        "label": "A",
        "text": "硬盘上的fsimage文件中"
      },
      {
        "label": "B",
        "text": "内存中"
      },
      {
        "label": "C",
        "text": "DataNode上"
      },
      {
        "label": "D",
        "text": "ZooKeeper中"
      }
    ],
    "answer": "B",
    "explanation": "NameNode将所有元数据保存在内存中以保证高性能，同时通过fsimage和edits持久化到磁盘防止丢失。",
    "id": "GEN0131",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "单选题",
    "title": "HDFS的Block大小相比传统文件系统的Block更大的原因是？",
    "options": [
      {
        "label": "A",
        "text": "减少元数据开销和寻址时间占比"
      },
      {
        "label": "B",
        "text": "提高单盘读写速度"
      },
      {
        "label": "C",
        "text": "降低存储成本"
      },
      {
        "label": "D",
        "text": "兼容更多文件格式"
      }
    ],
    "answer": "A",
    "explanation": "大Block(128MB)减少NameNode元数据数量和磁盘寻址开销占总传输时间的比例，提高大数据处理吞吐量。",
    "id": "GEN0132",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "单选题",
    "title": "DataNode定期向NameNode发送什么信息？",
    "options": [
      {
        "label": "A",
        "text": "用户请求日志"
      },
      {
        "label": "B",
        "text": "心跳信号和块报告"
      },
      {
        "label": "C",
        "text": "系统资源使用率"
      },
      {
        "label": "D",
        "text": "MapReduce任务状态"
      }
    ],
    "answer": "B",
    "explanation": "DataNode每3秒发送心跳，每6小时(或启动时)发送块报告(Block Report)，告诉NameNode自己存了哪些Block。",
    "id": "GEN0133",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "单选题",
    "title": "HDFS中，如果DataNode失效，NameNode会怎么做？",
    "options": [
      {
        "label": "A",
        "text": "立即删除所有数据"
      },
      {
        "label": "B",
        "text": "将失效节点上的Block从其他副本重新复制"
      },
      {
        "label": "C",
        "text": "等待管理员手动恢复"
      },
      {
        "label": "D",
        "text": "将NameNode切换到Standby"
      }
    ],
    "answer": "B",
    "explanation": "NameNode检测到DataNode心跳超时(默认10分钟)后，将该节点标记为死亡，并在其他节点上重新复制丢失的Block以维持副本数。",
    "id": "GEN0134",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "单选题",
    "title": "HDFS中，客户端读取文件时首先向谁请求？",
    "options": [
      {
        "label": "A",
        "text": "DataNode"
      },
      {
        "label": "B",
        "text": "NameNode"
      },
      {
        "label": "C",
        "text": "SecondaryNameNode"
      },
      {
        "label": "D",
        "text": "ResourceManager"
      }
    ],
    "answer": "B",
    "explanation": "客户端先向NameNode请求文件的元数据(Block位置列表)，然后直接从最近的DataNode读取数据。",
    "id": "GEN0135",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "单选题",
    "title": "关于HDFS的edits文件，描述正确的是？",
    "options": [
      {
        "label": "A",
        "text": "存储文件的数据内容"
      },
      {
        "label": "B",
        "text": "记录对文件系统的所有修改操作日志"
      },
      {
        "label": "C",
        "text": "存储NameNode的内存快照"
      },
      {
        "label": "D",
        "text": "存储DataNode的块报告"
      }
    ],
    "answer": "B",
    "explanation": "edits(编辑日志)记录所有对HDFS元数据的修改操作(创建/删除/重命名文件等)。fsimage是元数据的内存快照。",
    "id": "GEN0136",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "单选题",
    "title": "YARN中，Container封装了什么？",
    "options": [
      {
        "label": "A",
        "text": "Java应用程序代码"
      },
      {
        "label": "B",
        "text": "CPU和内存资源"
      },
      {
        "label": "C",
        "text": "HDFS数据块"
      },
      {
        "label": "D",
        "text": "网络带宽"
      }
    ],
    "answer": "B",
    "explanation": "Container封装了一定量的CPU和内存资源，是YARN中资源分配的最小单位。任务在Container中运行。",
    "id": "GEN0137",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "单选题",
    "title": "YARN的ResourceManager包含哪两个核心组件？",
    "options": [
      {
        "label": "A",
        "text": "NameNode和DataNode"
      },
      {
        "label": "B",
        "text": "Scheduler和ApplicationsManager"
      },
      {
        "label": "C",
        "text": "HMaster和RegionServer"
      },
      {
        "label": "D",
        "text": "JobTracker和TaskTracker"
      }
    ],
    "answer": "B",
    "explanation": "RM由Scheduler(资源调度分配)和ApplicationsManager(管理应用提交和AM启动)组成。D是Hadoop 1.x的组件。",
    "id": "GEN0138",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "单选题",
    "title": "MapReduce中，Combiner的作用是？",
    "options": [
      {
        "label": "A",
        "text": "将Map和Reduce的结果合并"
      },
      {
        "label": "B",
        "text": "在Map端对输出进行局部归约以减少网络传输"
      },
      {
        "label": "C",
        "text": "替代Reduce的功能"
      },
      {
        "label": "D",
        "text": "将数据写入HDFS"
      }
    ],
    "answer": "B",
    "explanation": "Combiner在Map端对输出做局部归约(类似mini-Reduce)，减少Shuffle阶段的数据传输量。适合可交换可结合的操作(如求和)。",
    "id": "GEN0139",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "单选题",
    "title": "InputSplit的大小默认等于？",
    "options": [
      {
        "label": "A",
        "text": "64MB"
      },
      {
        "label": "B",
        "text": "128MB(与Block一致)"
      },
      {
        "label": "C",
        "text": "1MB"
      },
      {
        "label": "D",
        "text": "由文件总大小决定"
      }
    ],
    "answer": "B",
    "explanation": "默认InputSplit大小等于Block大小(128MB)，一个Split对应一个Map任务。也可以通过参数修改。",
    "id": "GEN0140",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "多选题",
    "title": "HDFS元数据包括以下哪些信息？",
    "options": [
      {
        "label": "A",
        "text": "文件目录结构"
      },
      {
        "label": "B",
        "text": "文件分块信息"
      },
      {
        "label": "C",
        "text": "Block到DataNode的映射"
      },
      {
        "label": "D",
        "text": "DataNode的CPU使用率"
      },
      {
        "label": "E",
        "text": "文件权限和修改时间"
      }
    ],
    "answer": "A;B;C;E",
    "explanation": "DataNode的CPU使用率是系统监控信息，不是HDFS元数据。元数据包括目录、分块、映射、权限、时间戳等。",
    "id": "GEN0141",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "多选题",
    "title": "以下关于YARN的描述，正确的有？",
    "options": [
      {
        "label": "A",
        "text": "分离了资源管理和作业调度"
      },
      {
        "label": "B",
        "text": "支持多种计算框架(不仅MapReduce)"
      },
      {
        "label": "C",
        "text": "ApplicationMaster负责向RM申请资源"
      },
      {
        "label": "D",
        "text": "NodeManager是YARN的主节点"
      }
    ],
    "answer": "A;B;C",
    "explanation": "D错误：NodeManager是每个节点上的从节点，主节点是ResourceManager。ABC正确。",
    "id": "GEN0142",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "多选题",
    "title": "以下关于MapReduce的Shuffle阶段描述正确的有？",
    "options": [
      {
        "label": "A",
        "text": "Shuffle发生在Map和Reduce之间"
      },
      {
        "label": "B",
        "text": "包括分区(Partition)、排序(Sort)、合并(Merge)等步骤"
      },
      {
        "label": "C",
        "text": "Shuffle会触发大量的网络传输"
      },
      {
        "label": "D",
        "text": "Combiner可以在Shuffle前做局部归约优化"
      },
      {
        "label": "E",
        "text": "Shuffle阶段不需要磁盘IO"
      }
    ],
    "answer": "A;B;C;D",
    "explanation": "E错误：Shuffle阶段涉及大量的磁盘IO(溢写spill、合并merge等)，是MapReduce中开销最大的阶段之一。",
    "id": "GEN0143",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "多选题",
    "title": "以下属于Hadoop 2.x相比1.x的改进有？",
    "options": [
      {
        "label": "A",
        "text": "引入YARN分离资源管理"
      },
      {
        "label": "B",
        "text": "支持HDFS HA高可用"
      },
      {
        "label": "C",
        "text": "支持HDFS Federation联邦"
      },
      {
        "label": "D",
        "text": "默认Block大小从64MB增大到128MB"
      },
      {
        "label": "E",
        "text": "移除了MapReduce计算框架"
      }
    ],
    "answer": "A;B;C;D",
    "explanation": "E错误：MapReduce仍然是Hadoop 2.x的核心计算框架，没有被移除。YARN的引入使得Spark等其他框架也能运行在Hadoop集群上。",
    "id": "GEN0144",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "判断题",
    "title": "HDFS的默认副本数为3。",
    "options": [],
    "answer": "对",
    "explanation": "dfs.replication默认为3，可通过hdfs-site.xml修改。",
    "id": "GEN0145",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "判断题",
    "title": "NameNode存储实际的数据块内容。",
    "options": [],
    "answer": "错",
    "explanation": "NameNode只存储元数据(文件与Block的映射关系)。实际数据块存储在DataNode上。",
    "id": "GEN0146",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "判断题",
    "title": "HDFS适合存储大量小文件。",
    "options": [],
    "answer": "错",
    "explanation": "HDFS设计用于大文件存储。大量小文件会耗尽NameNode内存，且每个文件至少占一个Block，造成严重浪费。",
    "id": "GEN0147",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "判断题",
    "title": "MapReduce的Map任务数量等于输入文件的Split数量。",
    "options": [],
    "answer": "对",
    "explanation": "每个InputSplit对应一个Map任务，默认Split大小等于Block大小。",
    "id": "GEN0148",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "判断题",
    "title": "YARN只能运行MapReduce类型的应用程序。",
    "options": [],
    "answer": "错",
    "explanation": "YARN支持多种计算框架，包括MapReduce、Spark、Flink、Tez等。这是YARN相比Hadoop 1.x的重要进步。",
    "id": "GEN0149",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "判断题",
    "title": "ZooKeeper在HDFS HA中用于实现NameNode的故障自动切换。",
    "options": [],
    "answer": "对",
    "explanation": "ZK监控Active NameNode健康状态，故障时自动选举Standby切换为Active。",
    "id": "GEN0150",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "简答题",
    "title": "简述HDFS的写数据流程。",
    "options": [],
    "answer": "(1)客户端调用create()向NameNode请求创建文件；(2)NameNode检查权限和路径，创建元数据记录，计算并返回DataNode列表；(3)客户端向第一个DataNode写入数据；(4)DataNode之间形成Pipeline管道依次传输副本；(5)每个DataNode写完返回ack确认；(6)所有副本写完通知NameNode关闭文件并更新元数据。",
    "explanation": "需写出客户端→NameNode→DataNode Pipeline的完整流程。",
    "id": "GEN0151",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "简答题",
    "title": "简述YARN的工作流程。",
    "options": [],
    "answer": "(1)Client提交作业到ResourceManager；(2)RM分配一个Container启动ApplicationMaster；(3)AM向RM申请资源；(4)RM以Container形式分配资源；(5)AM在分配的Container中启动Map/Reduce等任务；(6)任务执行完毕，AM向RM报告完成并释放资源。",
    "explanation": "需写出6个关键步骤和RM/AM/Container的角色。",
    "id": "GEN0152",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "Scala中，以下哪个关键字定义不可变变量？",
    "options": [
      {
        "label": "A",
        "text": "var"
      },
      {
        "label": "B",
        "text": "val"
      },
      {
        "label": "C",
        "text": "def"
      },
      {
        "label": "D",
        "text": "const"
      }
    ],
    "answer": "B",
    "explanation": "val定义不可变引用(类似Java final)。var定义可变变量，def定义方法。Scala没有const关键字。",
    "id": "GEN0153",
    "level": "A",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "以下关于Scala的说法，错误的是？",
    "options": [
      {
        "label": "A",
        "text": "Scala运行在JVM上"
      },
      {
        "label": "B",
        "text": "Scala兼容Java代码"
      },
      {
        "label": "C",
        "text": "Scala是纯面向对象语言，不支持函数式编程"
      },
      {
        "label": "D",
        "text": "Scala源码编译后生成.class文件"
      }
    ],
    "answer": "C",
    "explanation": "Scala同时支持面向对象和函数式编程，被称为多范式语言。其他三项都正确。",
    "id": "GEN0154",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "Scala中，List(1,2,3).map(_*2)的结果是？",
    "options": [
      {
        "label": "A",
        "text": "List(1,2,3)"
      },
      {
        "label": "B",
        "text": "List(2,4,6)"
      },
      {
        "label": "C",
        "text": "6"
      },
      {
        "label": "D",
        "text": "List(1,2,3,1,2,3)"
      }
    ],
    "answer": "B",
    "explanation": "map对每个元素执行函数(_*2)，返回新List(2,4,6)。_是参数的占位符。",
    "id": "GEN0155",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "Scala中，List(1,2,3,4).filter(_>2)的结果是？",
    "options": [
      {
        "label": "A",
        "text": "List(1,2)"
      },
      {
        "label": "B",
        "text": "List(3,4)"
      },
      {
        "label": "C",
        "text": "List(2,3,4)"
      },
      {
        "label": "D",
        "text": "List()"
      }
    ],
    "answer": "B",
    "explanation": "filter保留满足条件(_>2)的元素，即3和4。",
    "id": "GEN0156",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "RDD的什么特性使得Spark能够在节点故障时恢复数据？",
    "options": [
      {
        "label": "A",
        "text": "可分区"
      },
      {
        "label": "B",
        "text": "不可变"
      },
      {
        "label": "C",
        "text": "血缘依赖(Lineage)"
      },
      {
        "label": "D",
        "text": "可持久化"
      }
    ],
    "answer": "C",
    "explanation": "RDD记录了自己是如何从父RDD转换而来的(血缘关系Lineage)。当分区数据丢失时，可通过血缘关系从原始数据重新计算恢复。",
    "id": "GEN0157",
    "level": "A",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "Spark应用程序中，SparkContext的作用是？",
    "options": [
      {
        "label": "A",
        "text": "存储数据"
      },
      {
        "label": "B",
        "text": "连接Spark集群的入口"
      },
      {
        "label": "C",
        "text": "执行SQL查询"
      },
      {
        "label": "D",
        "text": "管理HDFS文件"
      }
    ],
    "answer": "B",
    "explanation": "SparkContext(sc)是Spark应用与集群的连接入口，用于创建RDD、累加器、广播变量等。",
    "id": "GEN0158",
    "level": "A",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "以下哪个不是RDD的转换操作？",
    "options": [
      {
        "label": "A",
        "text": "map"
      },
      {
        "label": "B",
        "text": "filter"
      },
      {
        "label": "C",
        "text": "reduce"
      },
      {
        "label": "D",
        "text": "flatMap"
      }
    ],
    "answer": "C",
    "explanation": "reduce是行动操作(Action)，返回计算结果。map/filter/flatMap都是转换操作(Transformation)，返回新RDD。",
    "id": "GEN0159",
    "level": "A",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "Spark中，textFile()方法返回什么？",
    "options": [
      {
        "label": "A",
        "text": "DataFrame"
      },
      {
        "label": "B",
        "text": "Dataset"
      },
      {
        "label": "C",
        "text": "RDD[String]"
      },
      {
        "label": "D",
        "text": "Array[String]"
      }
    ],
    "answer": "C",
    "explanation": "textFile读取文本文件返回RDD[String]，每行为一个元素。读取结构化数据可用spark.read返回DataFrame。",
    "id": "GEN0160",
    "level": "A",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "以下关于Spark RDD的描述，正确的是？",
    "options": [
      {
        "label": "A",
        "text": "RDD中的数据可以被直接修改"
      },
      {
        "label": "B",
        "text": "RDD一经创建就不可改变"
      },
      {
        "label": "C",
        "text": "RDD只支持MapReduce计算模型"
      },
      {
        "label": "D",
        "text": "RDD不支持容错"
      }
    ],
    "answer": "B",
    "explanation": "RDD是不可变的(Immutable)，只能通过转换生成新RDD，不能直接修改。RDD通过血缘关系实现容错。",
    "id": "GEN0161",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "多选题",
    "title": "以下哪些是Spark RDD的行动操作？",
    "options": [
      {
        "label": "A",
        "text": "collect"
      },
      {
        "label": "B",
        "text": "count"
      },
      {
        "label": "C",
        "text": "map"
      },
      {
        "label": "D",
        "text": "reduce"
      },
      {
        "label": "E",
        "text": "take"
      }
    ],
    "answer": "A;B;D;E",
    "explanation": "collect/count/reduce/take都是行动操作，会触发计算。map是转换操作，惰性求值。",
    "id": "GEN0162",
    "level": "A",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "多选题",
    "title": "关于Spark相比MapReduce的优势，正确的有？",
    "options": [
      {
        "label": "A",
        "text": "基于内存计算，迭代效率高"
      },
      {
        "label": "B",
        "text": "支持多种计算范式(SQL/流/ML/图)"
      },
      {
        "label": "C",
        "text": "编程API更简洁"
      },
      {
        "label": "D",
        "text": "完全不需要磁盘存储"
      }
    ],
    "answer": "A;B;C",
    "explanation": "D错误：Spark虽然内存计算为主，但在内存不足时仍会溢写到磁盘，且初始数据仍需从磁盘/HDFS读取。",
    "id": "GEN0163",
    "level": "A",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Scala中，ArrayBuffer是可变的，支持动态增删元素。",
    "options": [],
    "answer": "对",
    "explanation": "ArrayBuffer在scala.collection.mutable包中，支持+=追加、-=删除等操作。",
    "id": "GEN0164",
    "level": "A",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Scala元组tuple._1访问的是第二个元素。",
    "options": [],
    "answer": "错",
    "explanation": "元组下标从1开始，._1是第一个元素，._2是第二个元素。",
    "id": "GEN0165",
    "level": "A",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Spark的转换操作是惰性求值的。",
    "options": [],
    "answer": "对",
    "explanation": "转换如map/filter不会立即执行，只记录操作序列，遇到行动操作才触发计算。",
    "id": "GEN0166",
    "level": "A",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Scala的List默认是不可变的。",
    "options": [],
    "answer": "对",
    "explanation": "Scala默认导入scala.collection.immutable.List，方法如:+返回新List而不修改原List。",
    "id": "GEN0167",
    "level": "A",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "RDD的cache()方法可以将数据持久化到内存中。",
    "options": [],
    "answer": "对",
    "explanation": "cache()等价于persist(MEMORY_ONLY)，将RDD缓存到内存，后续操作直接读缓存避免重复计算。",
    "id": "GEN0168",
    "level": "A",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "单选题",
    "title": "HBase的数据最终存储在哪里？",
    "options": [
      {
        "label": "A",
        "text": "本地文件系统"
      },
      {
        "label": "B",
        "text": "HDFS"
      },
      {
        "label": "C",
        "text": "MySQL"
      },
      {
        "label": "D",
        "text": "Redis"
      }
    ],
    "answer": "B",
    "explanation": "HBase底层数据以HFile格式存储在HDFS上，依赖HDFS的分布式存储和容错能力。",
    "id": "GEN0169",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "单选题",
    "title": "HBase中，Region的分裂和合并由谁负责？",
    "options": [
      {
        "label": "A",
        "text": "ZooKeeper"
      },
      {
        "label": "B",
        "text": "DataNode"
      },
      {
        "label": "C",
        "text": "HMaster"
      },
      {
        "label": "D",
        "text": "Client"
      }
    ],
    "answer": "C",
    "explanation": "HMaster负责Region的分配、负载均衡(分裂Region移走)、故障恢复。Region过大时会自动分裂。",
    "id": "GEN0170",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "单选题",
    "title": "HBase的稀疏性是指？",
    "options": [
      {
        "label": "A",
        "text": "数据存储在很少的节点上"
      },
      {
        "label": "B",
        "text": "空列不占用存储空间"
      },
      {
        "label": "C",
        "text": "数据访问频率低"
      },
      {
        "label": "D",
        "text": "表结构简单"
      }
    ],
    "answer": "B",
    "explanation": "稀疏性(Sparsity)是列式存储的重要特性：每行可以有不同数量的列，空列不占存储空间。这与关系数据库每列都占位不同。",
    "id": "GEN0171",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "单选题",
    "title": "ZooKeeper中，创建临时节点的命令是？",
    "options": [
      {
        "label": "A",
        "text": "create /node data"
      },
      {
        "label": "B",
        "text": "create -e /node data"
      },
      {
        "label": "C",
        "text": "create -s /node data"
      },
      {
        "label": "D",
        "text": "ephemeral /node data"
      }
    ],
    "answer": "B",
    "explanation": "create -e创建临时节点(-e=ephemeral)。create -s创建顺序节点(-s=sequential)。无选项创建持久节点。",
    "id": "GEN0172",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "单选题",
    "title": "以下哪个不是ZooKeeper的典型应用？",
    "options": [
      {
        "label": "A",
        "text": "分布式锁"
      },
      {
        "label": "B",
        "text": "服务注册与发现"
      },
      {
        "label": "C",
        "text": "大文件存储"
      },
      {
        "label": "D",
        "text": "集群成员管理"
      }
    ],
    "answer": "C",
    "explanation": "ZooKeeper不适合大文件存储(ZNode最大1MB)。ZK主要用于协调：分布式锁、服务发现、配置管理、Leader选举等。",
    "id": "GEN0173",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "单选题",
    "title": "HBase中，HMaster默认的Web UI端口是(1.0版本后)？",
    "options": [
      {
        "label": "A",
        "text": "8080"
      },
      {
        "label": "B",
        "text": "50070"
      },
      {
        "label": "C",
        "text": "16010"
      },
      {
        "label": "D",
        "text": "2181"
      }
    ],
    "answer": "C",
    "explanation": "HBase 1.0+ Master Web UI默认端口16010。8080=Tomcat，50070=Hadoop NameNode Web，2181=ZK客户端端口。",
    "id": "GEN0174",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "单选题",
    "title": "ZooKeeper集群中，myid文件的作用是？",
    "options": [
      {
        "label": "A",
        "text": "存储集群名称"
      },
      {
        "label": "B",
        "text": "标识ZK节点的唯一ID"
      },
      {
        "label": "C",
        "text": "存储选举算法类型"
      },
      {
        "label": "D",
        "text": "存储客户端连接信息"
      }
    ],
    "answer": "B",
    "explanation": "myid文件存放在dataDir目录下，内容为数字(1、2、3...)，与zoo.cfg中server.X的X对应，用于节点身份识别。",
    "id": "GEN0175",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "单选题",
    "title": "以下哪一种数据类型最适合用HBase存储？",
    "options": [
      {
        "label": "A",
        "text": "小型关系型数据"
      },
      {
        "label": "B",
        "text": "PB级别的日志数据"
      },
      {
        "label": "C",
        "text": "实时股票交易数据"
      },
      {
        "label": "D",
        "text": "小型配置文件"
      }
    ],
    "answer": "B",
    "explanation": "HBase设计用于海量数据(PB级)的存储和实时读写。小数据用传统数据库更合适。实时交易可用Redis等内存数据库。",
    "id": "GEN0176",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "填空题",
    "title": "ZK集群中，如果共有5台服务器，最多允许______台服务器故障。",
    "options": [],
    "answer": "2",
    "explanation": "5=2×2+1，最多允许2台故障(需要3台存活>半数才能选举)。",
    "id": "GEN0177",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "填空题",
    "title": "HBase Shell中，禁用表的命令是______，删除表的命令是______。",
    "options": [],
    "answer": "disable, drop",
    "explanation": "HBase中删除表需要先disable再drop。直接drop会报错。",
    "id": "GEN0178",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "填空题",
    "title": "ZooKeeper中，______节点在客户端断开连接后会自动删除。",
    "options": [],
    "answer": "临时",
    "explanation": "临时节点(Ephemeral Node)与客户端会话绑定，会话结束(超时/断开)自动删除。用于故障检测。",
    "id": "GEN0179",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "填空题",
    "title": "大数据5V特征分别是Volume(大量)、______(高速)、Variety(多样)、______(真实性)和Value(价值)。",
    "options": [],
    "answer": "Velocity, Veracity",
    "explanation": "5V=Volume+Velocity+Variety+Veracity+Value。有时简化为4V(去掉Veracity)。",
    "id": "GEN0180",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "多选题",
    "title": "以下关于HBase体系架构的描述，正确的有？",
    "options": [
      {
        "label": "A",
        "text": "HMaster负责Region的分配和管理"
      },
      {
        "label": "B",
        "text": "RegionServer负责处理客户端读写请求"
      },
      {
        "label": "C",
        "text": "ZooKeeper负责HMaster的选举"
      },
      {
        "label": "D",
        "text": "HBase可以不依赖HDFS独立运行"
      },
      {
        "label": "E",
        "text": "Client直接与RegionServer交互读写数据"
      }
    ],
    "answer": "A;B;C;E",
    "explanation": "D错误：HBase必须依赖HDFS作为底层存储。其他四项描述都正确。",
    "id": "GEN0181",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "多选题",
    "title": "ZK的ZNode节点类型包括？",
    "options": [
      {
        "label": "A",
        "text": "持久节点"
      },
      {
        "label": "B",
        "text": "临时节点"
      },
      {
        "label": "C",
        "text": "持久顺序节点"
      },
      {
        "label": "D",
        "text": "临时顺序节点"
      },
      {
        "label": "E",
        "text": "会话节点"
      }
    ],
    "answer": "A;B;C;D",
    "explanation": "ZNode四种类型：PERSISTENT(持久)、EPHEMERAL(临时)、PERSISTENT_SEQUENTIAL(持久顺序)、EPHEMERAL_SEQUENTIAL(临时顺序)。没有会话节点。",
    "id": "GEN0182",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "判断题",
    "title": "HBase是关系型数据库。",
    "options": [],
    "answer": "错",
    "explanation": "HBase是NoSQL(非关系型)数据库，属于列式存储数据库。不支持SQL和ACID事务(仅单行事务)。",
    "id": "GEN0183",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "判断题",
    "title": "ZooKeeper集群的服务器数量通常为偶数。",
    "options": [],
    "answer": "错",
    "explanation": "ZK集群通常为奇数台(2n+1)，如3/5/7台。奇数集群在过半选举中性价比最优。",
    "id": "GEN0184",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "判断题",
    "title": "HBase中，数据按照RowKey的降序排列。",
    "options": [],
    "answer": "错",
    "explanation": "HBase数据按RowKey的字典序(升序)排列，不是降序。RowKey设计要考虑数据的读取模式。",
    "id": "GEN0185",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "单选题",
    "title": "以下关于ServletContext的描述，不正确的是？",
    "options": [
      {
        "label": "A",
        "text": "每个Web应用有唯一的ServletContext"
      },
      {
        "label": "B",
        "text": "ServletContext可以获取全局初始化参数"
      },
      {
        "label": "C",
        "text": "ServletContext仅在单个Servlet中可用"
      },
      {
        "label": "D",
        "text": "ServletContext可以获取服务器信息"
      }
    ],
    "answer": "C",
    "explanation": "ServletContext是整个Web应用共享的，所有Servlet都能访问，不是单个Servlet专用。",
    "id": "GEN0186",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "多选题",
    "title": "以下关于ServletConfig的描述，正确的有有？",
    "options": [
      {
        "label": "A",
        "text": "代表单个Servlet的配置信息"
      },
      {
        "label": "B",
        "text": "通过getServletConfig()方法获取"
      },
      {
        "label": "C",
        "text": "可获取Servlet的初始化参数"
      },
      {
        "label": "D",
        "text": "被整个Web应用的所有Servlet共享"
      },
      {
        "label": "E",
        "text": "被整个Web应用的所有Servlet共享（不适用）"
      }
    ],
    "answer": "A;B;C",
    "explanation": "ServletConfig仅代表单个Servlet的配置，不被共享。D描述的是ServletContext。",
    "id": "GEN0187",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "多选题",
    "title": "关于Filter过滤器，以下描述正确的有有？",
    "options": [
      {
        "label": "A",
        "text": "必须实现javax.servlet.Filter接口"
      },
      {
        "label": "B",
        "text": "可用于统一的编码处理"
      },
      {
        "label": "C",
        "text": "可用于权限验证和访问控制"
      },
      {
        "label": "D",
        "text": "一个Web应用只能定义一个Filter"
      },
      {
        "label": "E",
        "text": "一个Web应用只能定义一个Filter（不适用）"
      }
    ],
    "answer": "A;B;C",
    "explanation": "一个Web应用可以定义多个Filter，按注册顺序组成过滤器链。Filter的典型应用：编码过滤、权限检查、日志记录、IP过滤。",
    "id": "GEN0188",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "多选题",
    "title": "关于转发和重定向，描述正确的有有？",
    "options": [
      {
        "label": "A",
        "text": "转发是一次请求，重定向是两次请求"
      },
      {
        "label": "B",
        "text": "转发时URL不变，重定向时URL改变"
      },
      {
        "label": "C",
        "text": "转发可以共享request数据"
      },
      {
        "label": "D",
        "text": "重定向可以跨域访问"
      },
      {
        "label": "E",
        "text": "转发的速度比重定向慢"
      },
      {
        "label": "F",
        "text": "转发的速度比重定向慢（不适用）"
      }
    ],
    "answer": "A;B;C;D",
    "explanation": "E错误：转发速度比重定向快(转发是服务器内部操作，重定向需要浏览器重新发送请求)。",
    "id": "GEN0189",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下关于Linux权限的描述，正确的有有？",
    "options": [
      {
        "label": "A",
        "text": "r表示读权限，对应数字4"
      },
      {
        "label": "B",
        "text": "w表示写权限，对应数字2"
      },
      {
        "label": "C",
        "text": "x表示执行权限，对应数字1"
      },
      {
        "label": "D",
        "text": "权限755表示所有用户都有写权限"
      },
      {
        "label": "E",
        "text": "权限755表示所有用户都有写权限（不适用）"
      }
    ],
    "answer": "A;B;C",
    "explanation": "755=rwxr-xr-x，组和其他用户只有r-x，没有w写权限。ABC正确。",
    "id": "GEN0190",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下关于Shell变量的描述，正确的有有？",
    "options": [
      {
        "label": "A",
        "text": "变量名可以由字母、数字和下划线组成"
      },
      {
        "label": "B",
        "text": "变量赋值等号两边不能有空格"
      },
      {
        "label": "C",
        "text": "引用变量时需加$符号"
      },
      {
        "label": "D",
        "text": "变量名可以以数字开头"
      },
      {
        "label": "E",
        "text": "变量名可以以数字开头（不适用）"
      }
    ],
    "answer": "A;B;C",
    "explanation": "变量名不能以数字开头。ABC都是Shell变量的正确规则。",
    "id": "GEN0191",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "Linux系统运行级别描述正确的有有？",
    "options": [
      {
        "label": "A",
        "text": "运行级别0表示关机"
      },
      {
        "label": "B",
        "text": "运行级别3表示多用户命令行模式"
      },
      {
        "label": "C",
        "text": "运行级别5表示图形界面模式"
      },
      {
        "label": "D",
        "text": "运行级别6表示重启"
      },
      {
        "label": "E",
        "text": "运行级别6表示重启（不适用）"
      }
    ],
    "answer": "A;B;C;D",
    "explanation": "常用运行级别：0关机、1单用户、2多用户(无NFS)、3完全多用户(命令行)、4保留、5图形界面、6重启。",
    "id": "GEN0192",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "Shell中，以下哪些是正确的有条件测试写法？",
    "options": [
      {
        "label": "A",
        "text": "test -f file — 测试是否为普通文件"
      },
      {
        "label": "B",
        "text": "[ -d dir ] — 测试是否为目录"
      },
      {
        "label": "C",
        "text": "[ $a -eq $b ] — 数值相等测试"
      },
      {
        "label": "D",
        "text": "[ \"$str1\" = \"$str2\" ] — 字符串相等测试"
      },
      {
        "label": "E",
        "text": "[[ $a -gt 10 ]] — 扩展测试(大于)"
      },
      {
        "label": "F",
        "text": "[[ $a -gt 10 ]] — 扩展测试(大于)（不适用）"
      }
    ],
    "answer": "A;B;C;D;E",
    "explanation": "全部正确。test命令和[ ]等价，[[ ]]是bash扩展(支持更多操作符和模式匹配)。",
    "id": "GEN0193",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "多选题",
    "title": "以下关于YARN的描述，正确的有有？",
    "options": [
      {
        "label": "A",
        "text": "分离了资源管理和作业调度"
      },
      {
        "label": "B",
        "text": "支持多种计算框架(不仅MapReduce)"
      },
      {
        "label": "C",
        "text": "ApplicationMaster负责向RM申请资源"
      },
      {
        "label": "D",
        "text": "NodeManager是YARN的主节点"
      },
      {
        "label": "E",
        "text": "NodeManager是YARN的主节点（不适用）"
      }
    ],
    "answer": "A;B;C",
    "explanation": "D错误：NodeManager是每个节点上的从节点，主节点是ResourceManager。ABC正确。",
    "id": "GEN0194",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "多选题",
    "title": "关于Spark相比MapReduce的优势，正确的有有？",
    "options": [
      {
        "label": "A",
        "text": "基于内存计算，迭代效率高"
      },
      {
        "label": "B",
        "text": "支持多种计算范式(SQL/流/ML/图)"
      },
      {
        "label": "C",
        "text": "编程API更简洁"
      },
      {
        "label": "D",
        "text": "完全不需要磁盘存储"
      },
      {
        "label": "E",
        "text": "完全不需要磁盘存储（不适用）"
      }
    ],
    "answer": "A;B;C",
    "explanation": "D错误：Spark虽然内存计算为主，但在内存不足时仍会溢写到磁盘，且初始数据仍需从磁盘/HDFS读取。",
    "id": "GEN0195",
    "level": "A",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "判断题",
    "title": "判断：JSP最终会被编译成Servlet。",
    "options": [],
    "answer": "对",
    "explanation": "JSP本质上就是Servlet，JSP引擎会将.jsp文件转译成Servlet源码(.java)，再编译成.class执行。",
    "id": "GEN0196",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "判断题",
    "title": "判断：<jsp:forward>标签执行后，浏览器地址栏会改变。",
    "options": [],
    "answer": "错",
    "explanation": "<jsp:forward>本质是服务器内部转发，浏览器地址栏不变。重定向才会改变地址栏。",
    "id": "GEN0197",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "判断题",
    "title": "判断：Cookie数据存储在服务器端。",
    "options": [],
    "answer": "错",
    "explanation": "Cookie存储在客户端浏览器中。Session数据才存储在服务器端。",
    "id": "GEN0198",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "判断题",
    "title": "判断：Filter的doFilter方法中必须调用chain.doFilter()才能将请求传递给下一个资源。",
    "options": [],
    "answer": "对",
    "explanation": "如果不调用chain.doFilter()，请求会在当前Filter被拦截，无法到达目标Servlet或JSP。",
    "id": "GEN0199",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "Linux中，cat命令能够用于合并多个文件。",
    "options": [],
    "answer": "对",
    "explanation": "cat f1 f2 > f3将f1和f2的内容合并输出到f3。cat名称来源于concatenate(连接)。",
    "id": "GEN0200",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "判断：ps -aux命令中的a表示显示所有用户的进程。",
    "options": [],
    "answer": "对",
    "explanation": "a=所有用户(与终端相关)，u=用户格式显示，x=包括无终端的进程。组合显示完整进程列表。",
    "id": "GEN0201",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "Linux中，普通用户能够修改自己的密码。",
    "options": [],
    "answer": "对",
    "explanation": "普通用户可以用passwd命令修改自己的密码(需输入旧密码验证)。修改他人密码需要root权限。",
    "id": "GEN0202",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "判断：ln -s创建的是硬链接。",
    "options": [],
    "answer": "错",
    "explanation": "ln -s创建软链接(符号链接)。不带-s的ln创建硬链接。",
    "id": "GEN0203",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "判断题",
    "title": "判断：HDFS的默认副本数为3。",
    "options": [],
    "answer": "对",
    "explanation": "dfs.replication默认为3，可通过hdfs-site.xml修改。",
    "id": "GEN0204",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "判断题",
    "title": "判断：MapReduce的Map任务数量等于输入文件的Split数量。",
    "options": [],
    "answer": "对",
    "explanation": "每个InputSplit对应一个Map任务，默认Split大小等于Block大小。",
    "id": "GEN0205",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "判断：Scala中，ArrayBuffer是可变的，支持动态增删元素。",
    "options": [],
    "answer": "对",
    "explanation": "ArrayBuffer在scala.collection.mutable包中，支持+=追加、-=删除等操作。",
    "id": "GEN0206",
    "level": "A",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "判断：Scala的List默认是不可变的。",
    "options": [],
    "answer": "对",
    "explanation": "Scala默认导入scala.collection.immutable.List，方法如:+返回新List而不修改原List。",
    "id": "GEN0207",
    "level": "A",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "判断题",
    "title": "判断：ZooKeeper集群的服务器数量通常为偶数。",
    "options": [],
    "answer": "错",
    "explanation": "ZK集群通常为奇数台(2n+1)，如3/5/7台。奇数集群在过半选举中性价比最优。",
    "id": "GEN0208",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "填空题",
    "title": "HBase Shell中，禁用表的命令是______，删除表的命令是______。 (变式)",
    "options": [],
    "answer": "disable, drop",
    "explanation": "HBase中删除表需要先disable再drop。直接drop会报错。",
    "id": "GEN0209",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "填空题",
    "title": "大数据5V特征分别是Volume(大量)、______(高速)、Variety(多样)、______(真实性)和Value(价值)。 (变式)",
    "options": [],
    "answer": "Velocity, Veracity",
    "explanation": "5V=Volume+Velocity+Variety+Veracity+Value。有时简化为4V(去掉Veracity)。",
    "id": "GEN0210",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "判断题",
    "title": "判断正误：JSP最终会被编译成Servlet。",
    "options": [],
    "answer": "错",
    "explanation": "JSP本质上就是Servlet，JSP引擎会将.jsp文件转译成Servlet源码(.java)，再编译成.class执行。",
    "id": "GEN0211",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "判断题",
    "title": "判断正误：<jsp:forward>标签执行后，浏览器地址栏会改变。",
    "options": [],
    "answer": "对",
    "explanation": "<jsp:forward>本质是服务器内部转发，浏览器地址栏不变。重定向才会改变地址栏。",
    "id": "GEN0212",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "判断题",
    "title": "判断正误：Cookie数据存储在服务器端。",
    "options": [],
    "answer": "对",
    "explanation": "Cookie存储在客户端浏览器中。Session数据才存储在服务器端。",
    "id": "GEN0213",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "判断题",
    "title": "判断正误：Filter的doFilter方法中必须调用chain.doFilter()才能将请求传递给下一个资源。",
    "options": [],
    "answer": "错",
    "explanation": "如果不调用chain.doFilter()，请求会在当前Filter被拦截，无法到达目标Servlet或JSP。",
    "id": "GEN0214",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "Linux中，cat命令不可以用于合并多个文件。",
    "options": [],
    "answer": "错",
    "explanation": "cat f1 f2 > f3将f1和f2的内容合并输出到f3。cat名称来源于concatenate(连接)。",
    "id": "GEN0215",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "判断正误：ps -aux命令中的a表示显示所有用户的进程。",
    "options": [],
    "answer": "错",
    "explanation": "a=所有用户(与终端相关)，u=用户格式显示，x=包括无终端的进程。组合显示完整进程列表。",
    "id": "GEN0216",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "Linux中，普通用户不可以修改自己的密码。",
    "options": [],
    "answer": "错",
    "explanation": "普通用户可以用passwd命令修改自己的密码(需输入旧密码验证)。修改他人密码需要root权限。",
    "id": "GEN0217",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "判断正误：ln -s创建的是硬链接。",
    "options": [],
    "answer": "对",
    "explanation": "ln -s创建软链接(符号链接)。不带-s的ln创建硬链接。",
    "id": "GEN0218",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "判断题",
    "title": "判断正误：HDFS的默认副本数为3。",
    "options": [],
    "answer": "错",
    "explanation": "dfs.replication默认为3，可通过hdfs-site.xml修改。",
    "id": "GEN0219",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "判断题",
    "title": "判断正误：MapReduce的Map任务数量等于输入文件的Split数量。",
    "options": [],
    "answer": "错",
    "explanation": "每个InputSplit对应一个Map任务，默认Split大小等于Block大小。",
    "id": "GEN0220",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Scala中，ArrayBuffer是可变的，不支持动态增删元素。",
    "options": [],
    "answer": "错",
    "explanation": "ArrayBuffer在scala.collection.mutable包中，支持+=追加、-=删除等操作。",
    "id": "GEN0221",
    "level": "A",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Scala的List默认是可变的。",
    "options": [],
    "answer": "错",
    "explanation": "Scala默认导入scala.collection.immutable.List，方法如:+返回新List而不修改原List。",
    "id": "GEN0222",
    "level": "A",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "判断题",
    "title": "判断正误：ZooKeeper集群的服务器数量通常为偶数。",
    "options": [],
    "answer": "对",
    "explanation": "ZK集群通常为奇数台(2n+1)，如3/5/7台。奇数集群在过半选举中性价比最优。",
    "id": "GEN0223",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "判断题",
    "title": "判断正误：判断：<jsp:forward>标签执行后，浏览器地址栏会改变。",
    "options": [],
    "answer": "对",
    "explanation": "<jsp:forward>本质是服务器内部转发，浏览器地址栏不变。重定向才会改变地址栏。",
    "id": "GEN0224",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "判断正误：Linux中，cat命令能够用于合并多个文件。",
    "options": [],
    "answer": "错",
    "explanation": "cat f1 f2 > f3将f1和f2的内容合并输出到f3。cat名称来源于concatenate(连接)。",
    "id": "GEN0225",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "判断正误：判断：ln -s创建的是硬链接。",
    "options": [],
    "answer": "对",
    "explanation": "ln -s创建软链接(符号链接)。不带-s的ln创建硬链接。",
    "id": "GEN0226",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "判断：Scala中，ArrayBuffer是可变的，不支持动态增删元素。",
    "options": [],
    "answer": "错",
    "explanation": "ArrayBuffer在scala.collection.mutable包中，支持+=追加、-=删除等操作。",
    "id": "GEN0227",
    "level": "A",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "简答题",
    "title": "请简要说明YARN的工作流程。",
    "options": [],
    "answer": "(1)Client提交作业到ResourceManager；(2)RM分配一个Container启动ApplicationMaster；(3)AM向RM申请资源；(4)RM以Container形式分配资源；(5)AM在分配的Container中启动Map/Reduce等任务；(6)任务执行完毕，AM向RM报告完成并释放资源。",
    "explanation": "需写出6个关键步骤和RM/AM/Container的角色。",
    "id": "GEN0228",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "填空题",
    "title": "JSP的9大隐式对象中，代表请求对象的是______，代表会话对象的是______。",
    "options": [],
    "answer": "request, session",
    "explanation": "request(HttpServletRequest)和session(HttpSession)是使用最频繁的两个隐式对象。",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0,
    "id": "GEN0229"
  },
  {
    "subject": "Java Web",
    "type": "填空题",
    "title": "JavaBean中，对于boolean类型的属性visible，其getter方法应命名为______。",
    "options": [],
    "answer": "isVisible",
    "explanation": "boolean类型属性的getter用is前缀而非get前缀，这是JavaBean规范的规定。",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0,
    "id": "GEN0230"
  },
  {
    "subject": "Java Web",
    "type": "填空题",
    "title": "Servlet的初始化方法是______，销毁方法是______。",
    "options": [],
    "answer": "init, destroy",
    "explanation": "init()在第一次请求时调用一次，destroy()在服务器关闭时调用一次。",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0,
    "id": "GEN0231"
  },
  {
    "subject": "Java Web",
    "type": "填空题",
    "title": "Filter的doFilter方法中，调用______的doFilter方法可以使请求继续传递到下一个资源。",
    "options": [],
    "answer": "FilterChain",
    "explanation": "FilterChain.doFilter(req,resp)将请求传递给过滤器链中的下一个过滤器或目标资源。",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0,
    "id": "GEN0232"
  },
  {
    "subject": "Java Web",
    "type": "填空题",
    "title": "JDBC中，执行查询使用______方法返回ResultSet，执行增删改用______方法返回影响行数。",
    "options": [],
    "answer": "executeQuery, executeUpdate",
    "explanation": "Statement的executeQuery用于SELECT，executeUpdate用于INSERT/UPDATE/DELETE。",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0,
    "id": "GEN0233"
  },
  {
    "subject": "Java Web",
    "type": "填空题",
    "title": "HTTP协议中，状态码200表示______，状态码404表示______。",
    "options": [],
    "answer": "成功, 未找到",
    "explanation": "2xx成功，3xx重定向，4xx客户端错误(404资源不存在)，5xx服务器错误。",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0,
    "id": "GEN0234"
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "Linux中，查看当前路径使用______命令，切换目录使用______命令。",
    "options": [],
    "answer": "pwd, cd",
    "explanation": "pwd(print working directory)和cd(change directory)是最基本的目录操作命令。",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0,
    "id": "GEN0235"
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "修改文件权限的命令是______，改变文件所有者的命令是______。",
    "options": [],
    "answer": "chmod, chown",
    "explanation": "chmod(change mode)改权限，chown(change owner)改所有者。",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0,
    "id": "GEN0236"
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "Shell中，if语句以______结尾，case语句以______结尾。",
    "options": [],
    "answer": "fi, esac",
    "explanation": "if→fi，case→esac，都是反写。do→done也是如此。",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0,
    "id": "GEN0237"
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "tar命令中，创建归档用______选项，解压归档用______选项。",
    "options": [],
    "answer": "c, x",
    "explanation": "c=create创建，x=extract解压。常配合z(gzip)、v(verbose)、f(file)使用。",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0,
    "id": "GEN0238"
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "Linux的三种基本权限是______、______和______。",
    "options": [],
    "answer": "读, 写, 执行",
    "explanation": "r=read(读/4)，w=write(写/2)，x=execute(执行/1)。",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0,
    "id": "GEN0239"
  },
  {
    "subject": "Hadoop",
    "type": "填空题",
    "title": "HDFS中，数据块默认大小是______MB，默认副本数是______。",
    "options": [],
    "answer": "128, 3",
    "explanation": "HDFS 2.x默认Block=128MB，dfs.replication=3。",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0,
    "id": "GEN0240"
  },
  {
    "subject": "Hadoop",
    "type": "填空题",
    "title": "YARN的核心组件包括ResourceManager、______和ApplicationMaster。",
    "options": [],
    "answer": "NodeManager",
    "explanation": "YARN三核心：RM(全局资源)、NM(节点管理)、AM(应用协调)。Container是资源封装单位。",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0,
    "id": "GEN0241"
  },
  {
    "subject": "Scala & Spark",
    "type": "填空题",
    "title": "Scala中，______关键字定义不可变变量，______关键字定义方法。",
    "options": [],
    "answer": "val, def",
    "explanation": "val=不可变(类似final)，var=可变，def=方法。",
    "level": "A",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0,
    "id": "GEN0242"
  },
  {
    "subject": "Scala & Spark",
    "type": "填空题",
    "title": "Spark的核心数据抽象是______，全称是______。",
    "options": [],
    "answer": "RDD, Resilient Distributed Dataset",
    "explanation": "RDD(弹性分布式数据集)是Spark最基础的数据抽象，支持容错和并行计算。",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0,
    "id": "GEN0243"
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "填空题",
    "title": "HBase是______式存储的分布式数据库，底层数据存储在______上。",
    "options": [],
    "answer": "列, HDFS",
    "explanation": "HBase是列式存储NoSQL数据库，数据以HFile格式存HDFS，依赖ZK协调。",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0,
    "id": "GEN0244"
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "填空题",
    "title": "ZooKeeper集群通常配置______台服务器（填数字类型，如奇数），使用______机制选举Leader。",
    "options": [],
    "answer": "奇数, 过半",
    "explanation": "ZK集群2n+1台(奇数)，过半(>半数)同意才能选出Leader。",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0,
    "id": "GEN0245"
  },
  {
    "subject": "Java Web",
    "type": "简答题",
    "title": "简述JSP的运行原理。",
    "options": [],
    "answer": "JSP第一次被请求时：JSP引擎将.jsp文件转译成Servlet源码(.java)→编译成.class字节码→执行响应客户端。再次请求时直接执行已编译的.class文件。整个过程可概括为：翻译→编译→执行。",
    "explanation": "需写出首次请求和再次请求的区别。",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0,
    "id": "GEN0246"
  },
  {
    "subject": "Linux",
    "type": "简答题",
    "title": "简述Linux中硬链接和软链接的区别。",
    "options": [],
    "answer": "硬链接共享源文件i节点，删除源文件后仍可访问；不能跨文件系统；不能链接目录。软链接(符号链接)存储目标路径，类似快捷方式；删除源文件后变为悬空链接失效；可跨文件系统和链接目录。",
    "explanation": "高频简答题，需从i节点、源文件删除后表现、跨文件系统支持三方面回答。",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0,
    "id": "GEN0247"
  },
  {
    "subject": "Linux",
    "type": "简答题",
    "title": "简述Linux中vi编辑器的三种工作模式。",
    "options": [],
    "answer": "(1)命令模式：vi默认进入，可执行dd/yy/p/u等操作；(2)插入模式：按i/a/o进入，可编辑文本，Esc退回命令模式；(3)末行模式：按:进入，可执行:w保存、:q退出、:wq保存退出、:q!强制退出。",
    "explanation": "需写出三种模式名称、进入方式、常用命令。",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0,
    "id": "GEN0248"
  },
  {
    "subject": "Hadoop",
    "type": "简答题",
    "title": "简述MapReduce的Shuffle阶段的作用。",
    "options": [],
    "answer": "Shuffle是Map和Reduce之间的关键环节。Map端：输出数据经过分区(Partition)、排序(Sort)、合并(Merge/Combiner)后写入磁盘。Reduce端：通过HTTP从Map端拉取数据，经过合并、排序、分组后传给Reduce函数。Shuffle涉及大量网络传输和磁盘IO，是MapReduce性能优化的关键。",
    "explanation": "需写出Map端和Reduce端分别做了什么。",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0,
    "id": "GEN0249"
  },
  {
    "subject": "Scala & Spark",
    "type": "简答题",
    "title": "简述Spark RDD的五大特性。",
    "options": [],
    "answer": "(1)可分区的(Partition)：数据划分为多个分区分布在集群节点；(2)可并行计算(Compute)：每个分区独立并行处理；(3)容错(Lineage/Dependencies)：通过血缘关系记录依赖，数据丢失可从父RDD重新计算；(4)不可变(Immutable)：创建后不能修改，只能生成新RDD；(5)可持久化(Persistence)：可缓存到内存/磁盘加速重复计算。",
    "explanation": "需写出5个特性及其含义。",
    "level": "A",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0,
    "id": "GEN0250"
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "简答题",
    "title": "简述ZooKeeper在分布式系统中的主要作用。",
    "options": [],
    "answer": "(1)统一命名服务：为分布式系统提供统一的命名空间；(2)配置管理：集群配置集中管理，修改后自动推送到各节点；(3)集群管理：通过临时节点监控节点上下线；(4)分布式锁：提供互斥访问机制；(5)Leader选举：如HDFS HA中NameNode的故障切换、HBase中HMaster选举。",
    "explanation": "需写出至少4个应用场景。",
    "level": "A",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0,
    "id": "GEN0251"
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "HTML 网页的核心基础结构是？",
    "options": [
      {
        "label": "A",
        "text": "<html><body>...</body><frame>...</frame></html>"
      },
      {
        "label": "B",
        "text": "<html><head>...</head><body>...</body></html>"
      },
      {
        "label": "C",
        "text": "<html><title>...</title><body>...</body></html>"
      },
      {
        "label": "D",
        "text": "<html><head>...</head><title>...</title></html>"
      }
    ],
    "answer": "B",
    "explanation": "HTML核心结构为<html><head>...</head><body>...</body></html>，head放元数据，body放可见内容。",
    "level": "A",
    "id": "GEN0252",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "以下哪个HTML标签用于定义页面的独立内容区块？",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<section>"
      },
      {
        "label": "C",
        "text": "<article>"
      },
      {
        "label": "D",
        "text": "<header>"
      }
    ],
    "answer": "C",
    "explanation": "<article>表示独立完整的内容区块（如一篇博客文章），<section>是文档分节，<div>是通用容器。",
    "level": "A",
    "id": "GEN0253",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "在CSS文字、排版、边界等的设置上，下列表示像素单位是？",
    "options": [
      {
        "label": "A",
        "text": "px"
      },
      {
        "label": "B",
        "text": "ex"
      },
      {
        "label": "C",
        "text": "cm"
      },
      {
        "label": "D",
        "text": "pt"
      }
    ],
    "answer": "A",
    "explanation": "px = 像素，屏幕最小单位。ex = x字母高度，cm = 厘米，pt = 磅（1/72英寸）。",
    "level": "A",
    "id": "GEN0254",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "HTML中，用于创建超链接的标签是？",
    "options": [
      {
        "label": "A",
        "text": "<img>"
      },
      {
        "label": "B",
        "text": "<a>"
      },
      {
        "label": "C",
        "text": "<link>"
      },
      {
        "label": "D",
        "text": "<button>"
      }
    ],
    "answer": "B",
    "explanation": "<a>（anchor锚点标签）通过href属性创建超链接。<link>用于引入外部资源。",
    "level": "A",
    "id": "GEN0255",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "CSS选择器中，#demo 表示选择什么？",
    "options": [
      {
        "label": "A",
        "text": "类名为 demo 的元素"
      },
      {
        "label": "B",
        "text": "id 为 demo 的元素"
      },
      {
        "label": "C",
        "text": "标签名为 demo 的元素"
      },
      {
        "label": "D",
        "text": "所有子元素"
      }
    ],
    "answer": "B",
    "explanation": "#是ID选择器前缀，.是类选择器前缀。",
    "level": "A",
    "id": "GEN0256",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "下列对于<th></th>标签描述正确的是？",
    "options": [
      {
        "label": "A",
        "text": "用于定义一个表格开始和结束"
      },
      {
        "label": "B",
        "text": "定义表头单元格，文字以粗体显示，<th>标签必须放在<tr>标签内"
      },
      {
        "label": "C",
        "text": "定义一行标签，一组标签内可以建立多个由<td>或<th>标签所定义的单元格"
      },
      {
        "label": "D",
        "text": "定义单元格标签，一组<td>标签将建立一个单元格，<td>标签必须放在<tr>标签中"
      }
    ],
    "answer": "B",
    "explanation": "<th>定义表头单元格（粗体居中），必须放在<tr>中。A描述的是<table>，C描述的是<tr>，D描述的是<td>。",
    "level": "B",
    "id": "GEN0257",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "下列关于表格中属性叙述不正确的是？",
    "options": [
      {
        "label": "A",
        "text": "border属性定义表格边框的背景"
      },
      {
        "label": "B",
        "text": "cellspacing属性定义单元格间距"
      },
      {
        "label": "C",
        "text": "cellpadding属性定义单元格填充"
      },
      {
        "label": "D",
        "text": "align属性设置表格对齐方式"
      }
    ],
    "answer": "A",
    "explanation": "border定义表格边框粗细，而非背景。cellspacing定义单元格间距，cellpadding定义单元格内边距。",
    "level": "B",
    "id": "GEN0258",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "CSS中，实现元素水平居中（块级元素）的核心属性是？",
    "options": [
      {
        "label": "A",
        "text": "text-align:center"
      },
      {
        "label": "B",
        "text": "margin:0 auto"
      },
      {
        "label": "C",
        "text": "float:center"
      },
      {
        "label": "D",
        "text": "position:center"
      }
    ],
    "answer": "B",
    "explanation": "块级元素水平居中用margin:0 auto（自适应左右边距）。text-align:center居中内部行内元素，float没有center值。",
    "level": "A",
    "id": "GEN0259",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "JavaScript中，let和const的关键区别是？",
    "options": [
      {
        "label": "A",
        "text": "作用域不同"
      },
      {
        "label": "B",
        "text": "const 声明的变量不可修改"
      },
      {
        "label": "C",
        "text": "let声明的变量必须赋值"
      },
      {
        "label": "D",
        "text": "无区别"
      }
    ],
    "answer": "B",
    "explanation": "const声明常量（不可重新赋值），let声明可变变量。两者作用域相同（块级作用域）。",
    "level": "A",
    "id": "GEN0260",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "以下哪个 HTML 标签用于定义无序列表？",
    "options": [
      {
        "label": "A",
        "text": "<ol>"
      },
      {
        "label": "B",
        "text": "<ul>"
      },
      {
        "label": "C",
        "text": "<li>"
      },
      {
        "label": "D",
        "text": "<dl>"
      }
    ],
    "answer": "B",
    "explanation": "<ul>=无序列表（圆点），<ol>=有序列表（数字），<dl>=定义列表，<li>=列表项。",
    "level": "A",
    "id": "GEN0261",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "CSS中，display:none和visibility:hidden的区别是？",
    "options": [
      {
        "label": "A",
        "text": "无区别"
      },
      {
        "label": "B",
        "text": "前者不占空间，后者占空间"
      },
      {
        "label": "C",
        "text": "前者占空间，后者不占空间"
      },
      {
        "label": "D",
        "text": "都隐藏元素且占空间"
      }
    ],
    "answer": "B",
    "explanation": "display:none完全移除元素（不占位），visibility:hidden隐藏但仍占用布局空间。",
    "level": "A",
    "id": "GEN0262",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "JavaScript中，用于获取当前时间的对象是？",
    "options": [
      {
        "label": "A",
        "text": "Date"
      },
      {
        "label": "B",
        "text": "Time"
      },
      {
        "label": "C",
        "text": "DateTime"
      },
      {
        "label": "D",
        "text": "Now"
      }
    ],
    "answer": "A",
    "explanation": "new Date()获取当前日期时间对象。JS中没有Time/DateTime/Now这些内置对象。",
    "level": "B",
    "id": "GEN0263",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "HTML表单中，用于输入密码的input类型是？",
    "options": [
      {
        "label": "A",
        "text": "text"
      },
      {
        "label": "B",
        "text": "password"
      },
      {
        "label": "C",
        "text": "hidden"
      },
      {
        "label": "D",
        "text": "submit"
      }
    ],
    "answer": "B",
    "explanation": "<input type='password'> 输入内容以圆点显示，保护隐私。hidden=隐藏域，submit=提交按钮。",
    "level": "A",
    "id": "GEN0264",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "关于定位position叙述不正确的是？",
    "options": [
      {
        "label": "A",
        "text": "position:static 静态定位元素出现在正常的文档流中"
      },
      {
        "label": "B",
        "text": "position:relative 相对定位参照物为自己原来的位置"
      },
      {
        "label": "C",
        "text": "position:absolute 绝对定位参照已经定位的祖先元素/浏览器窗口"
      },
      {
        "label": "D",
        "text": "position:fixed 固定定位没有参照物"
      }
    ],
    "answer": "D",
    "explanation": "fixed也有参照物——浏览器可视窗口（viewport），不是没有参照物。",
    "level": "B",
    "id": "GEN0265",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "CSS中，哪个属性控制文字字体？",
    "options": [
      {
        "label": "A",
        "text": "font-size"
      },
      {
        "label": "B",
        "text": "font-family"
      },
      {
        "label": "C",
        "text": "text-align"
      },
      {
        "label": "D",
        "text": "font-weight"
      }
    ],
    "answer": "B",
    "explanation": "font-family设置字体族（如'微软雅黑'），font-size=字号，text-align=对齐，font-weight=粗细。",
    "level": "A",
    "id": "GEN0266",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "多选题",
    "title": "浏览器端的技术包括？",
    "options": [
      {
        "label": "A",
        "text": "HTML"
      },
      {
        "label": "B",
        "text": "CSS"
      },
      {
        "label": "C",
        "text": "JavaScript"
      },
      {
        "label": "D",
        "text": "Java"
      }
    ],
    "answer": "ABC",
    "explanation": "HTML/CSS/JS是浏览器端三大核心技术。Java是后端/桌面语言，不运行在浏览器中。",
    "level": "A",
    "id": "GEN0267",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "多选题",
    "title": "CSS中，能实现元素定位的属性有？",
    "options": [
      {
        "label": "A",
        "text": "position"
      },
      {
        "label": "B",
        "text": "float"
      },
      {
        "label": "C",
        "text": "display"
      },
      {
        "label": "D",
        "text": "z-index"
      }
    ],
    "answer": "AB",
    "explanation": "position（静态/相对/绝对/固定定位）和float（浮动定位）可实现定位。display控制显示类型，z-index控制堆叠顺序。",
    "level": "B",
    "id": "GEN0268",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "多选题",
    "title": "以下属于内联元素的是？",
    "options": [
      {
        "label": "A",
        "text": "<input>"
      },
      {
        "label": "B",
        "text": "<a>"
      },
      {
        "label": "C",
        "text": "<img>"
      },
      {
        "label": "D",
        "text": "<div>"
      }
    ],
    "answer": "ABC",
    "explanation": "<input>、<a>、<img>都是内联元素（行内元素），<div>是块级元素。",
    "level": "B",
    "id": "GEN0269",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "多选题",
    "title": "以下属于 CSS 盒模型组成部分的有？",
    "options": [
      {
        "label": "A",
        "text": "内容(content)"
      },
      {
        "label": "B",
        "text": "内边距(padding)"
      },
      {
        "label": "C",
        "text": "边框(border)"
      },
      {
        "label": "D",
        "text": "外边距(margin)"
      }
    ],
    "answer": "ABC",
    "explanation": "盒模型由content + padding + border + margin四部分组成。注意此题原始答案标注为ABC，但实际盒模型包含margin。",
    "level": "A",
    "id": "GEN0270",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "多选题",
    "title": "以下可以获取HTML元素的JavaScript方法有？",
    "options": [
      {
        "label": "A",
        "text": "getElementById()"
      },
      {
        "label": "B",
        "text": "getElementsByClassName()"
      },
      {
        "label": "C",
        "text": "querySelector()"
      },
      {
        "label": "D",
        "text": "innerHTML()"
      }
    ],
    "answer": "ABC",
    "explanation": "前三个是DOM选择方法。innerHTML是属性（不是方法），用于获取/设置元素内容。",
    "level": "A",
    "id": "GEN0271",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "判断题",
    "title": "<div> 是行内元素，<span> 是块级元素。",
    "options": [],
    "answer": "错",
    "explanation": "反了：<div>是块级元素（独占一行），<span>是行内元素（不换行）。",
    "level": "A",
    "id": "GEN0272",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "判断题",
    "title": "JavaScript 是弱类型、解释型脚本语言。",
    "options": [],
    "answer": "对",
    "explanation": "JS变量声明不需指定类型（弱类型），由浏览器引擎解释执行（非编译）。",
    "level": "A",
    "id": "GEN0273",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "判断题",
    "title": "CSS中，类选择器优先级高于ID选择器。",
    "options": [],
    "answer": "错",
    "explanation": "ID选择器(#id)优先级(100)高于类选择器(.class)(10)。",
    "level": "A",
    "id": "GEN0274",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "判断题",
    "title": "HTML标签可以嵌套使用，但不能交叉嵌套。",
    "options": [],
    "answer": "对",
    "explanation": "标签可以嵌套但必须正确闭合顺序（先开后关），交叉嵌套<p><div></p></div>不合法。",
    "level": "B",
    "id": "GEN0275",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "判断题",
    "title": "var声明的变量存在变量提升，let不存在。",
    "options": [],
    "answer": "错",
    "explanation": "let也存在变量提升，但存在暂时性死区（TDZ），在声明前访问会报ReferenceError而非返回undefined。",
    "level": "B",
    "id": "GEN0276",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "填空题",
    "title": "HTML中，注释的写法是？",
    "options": [],
    "answer": "<!-- 注释内容 -->",
    "explanation": "HTML注释格式：<!-- 注释内容 -->，浏览器不会渲染注释内容。",
    "level": "A",
    "id": "GEN0277",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "填空题",
    "title": "JavaScript中，声明常量的关键字是？",
    "options": [],
    "answer": "const",
    "explanation": "const声明常量（不可重新赋值），ES6引入，与let一样是块级作用域。",
    "level": "A",
    "id": "GEN0278",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "填空题",
    "title": "让CSS样式作用于整个页面，需要将样式写在什么标签内？",
    "options": [],
    "answer": "<style>",
    "explanation": "内嵌样式写在<head>中的<style>标签内。外部样式用<link>引入.css文件。",
    "level": "A",
    "id": "GEN0279",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "填空题",
    "title": "在DOM操作中，哪个方法返回一个给定id属性的元素节点相对应的对象？",
    "options": [],
    "answer": "getElementById",
    "explanation": "document.getElementById('id值')根据ID获取单个DOM元素。",
    "level": "A",
    "id": "GEN0280",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "填空题",
    "title": "数组的什么属性可以获取数组的长度？",
    "options": [],
    "answer": "length",
    "explanation": "arr.length返回数组元素个数。字符串也有length属性。",
    "level": "A",
    "id": "GEN0281",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "简答题",
    "title": "简述CSS盒模型，并说明box-sizing的两种取值区别。",
    "options": [],
    "answer": "盒模型由content（内容）、padding（内边距）、border（边框）、margin（外边距）四部分组成。box-sizing:content-box（默认）：width只作用于内容区，总宽度=width+padding+border。box-sizing:border-box：width包含content+padding+border，总宽度=width，更便于布局控制。",
    "explanation": "必考简答题！content-box下设置width:100px，实际占用可能更大。border-box是更直观的盒模型。",
    "level": "A",
    "id": "GEN0282",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "简答题",
    "title": "解释JavaScript中null与undefined的区别。",
    "options": [],
    "answer": "undefined表示变量已声明但未赋值（默认未定义状态），或对象属性不存在。null表示空值，是主动赋值的空对象引用（typeof null返回'object'）。两者==比较为true，===比较为false。",
    "explanation": "undefined是'还没给值'，null是'故意给空值'。面试频率极高！",
    "level": "A",
    "id": "GEN0283",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "在HTML中，用于定义文档标题（显示在浏览器标签栏）的标签是？",
    "options": [
      {
        "label": "A",
        "text": "<title>"
      },
      {
        "label": "B",
        "text": "<head>"
      },
      {
        "label": "C",
        "text": "<header>"
      },
      {
        "label": "D",
        "text": "<h1>"
      }
    ],
    "answer": "A",
    "explanation": "<title>定义浏览器标签栏标题，必须放在<head>中。<h1>是页面正文标题，<header>是HTML5语义化头部区域。",
    "level": "A",
    "id": "GEN0284",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "下列哪个JavaScript方法用于将字符串解析为整数（允许指定进制）？",
    "options": [
      {
        "label": "A",
        "text": "Number()"
      },
      {
        "label": "B",
        "text": "parseInt()"
      },
      {
        "label": "C",
        "text": "parseFloat()"
      },
      {
        "label": "D",
        "text": "toFixed()"
      }
    ],
    "answer": "B",
    "explanation": "parseInt('10',2)第二个参数可指定进制（2-36）。Number()不能指定进制，parseFloat只解析浮点数。",
    "level": "B",
    "id": "GEN0285",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "盒模型中，box-sizing: content-box下，元素的实际宽度由哪些部分组成？",
    "options": [
      {
        "label": "A",
        "text": "width + padding + border"
      },
      {
        "label": "B",
        "text": "width + margin"
      },
      {
        "label": "C",
        "text": "width + padding"
      },
      {
        "label": "D",
        "text": "width"
      }
    ],
    "answer": "A",
    "explanation": "content-box（默认）：width仅指内容宽度，实际占用=width+padding+border+margin。",
    "level": "A",
    "id": "GEN0286",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "下列CSS选择器中，优先级最低的是？",
    "options": [
      {
        "label": "A",
        "text": "#id"
      },
      {
        "label": "B",
        "text": ".class"
      },
      {
        "label": "C",
        "text": "div"
      },
      {
        "label": "D",
        "text": "*"
      }
    ],
    "answer": "D",
    "explanation": "优先级：!important > 行内(1000) > #id(100) > .class(10) > 标签(1) > *(0)。通配符*优先级最低。",
    "level": "B",
    "id": "GEN0287",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "在页面中通过 document.getElementById('demo') 获取不到元素时返回什么？",
    "options": [
      {
        "label": "A",
        "text": "null"
      },
      {
        "label": "B",
        "text": "undefined"
      },
      {
        "label": "C",
        "text": "false"
      },
      {
        "label": "D",
        "text": "空字符串"
      }
    ],
    "answer": "A",
    "explanation": "getElementById找不到元素返回null（空对象引用），不是undefined。",
    "level": "B",
    "id": "GEN0288",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "JavaScript中，const声明的对象，以下哪个操作是允许的？",
    "options": [
      {
        "label": "A",
        "text": "obj = {}"
      },
      {
        "label": "B",
        "text": "obj.name = '张三'"
      },
      {
        "label": "C",
        "text": "重复声明 const obj"
      },
      {
        "label": "D",
        "text": "先声明后赋值"
      }
    ],
    "answer": "B",
    "explanation": "const声明的对象不能重新赋值（obj={}），但可以修改对象属性（obj.name='...'）。对象引用不变，内容可变。",
    "level": "B",
    "id": "GEN0289",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "下列哪个CSS属性可以控制元素在z轴上的堆叠顺序？",
    "options": [
      {
        "label": "A",
        "text": "z-order"
      },
      {
        "label": "B",
        "text": "stack-level"
      },
      {
        "label": "C",
        "text": "z-index"
      },
      {
        "label": "D",
        "text": "layer"
      }
    ],
    "answer": "C",
    "explanation": "z-index控制定位元素的垂直堆叠顺序，数值越大越靠前。只对position非static的元素有效。",
    "level": "B",
    "id": "GEN0290",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "哪个HTML标签用于定义文档标题（显示在浏览器标签栏）？",
    "options": [
      {
        "label": "A",
        "text": "<title>"
      },
      {
        "label": "B",
        "text": "<head>"
      },
      {
        "label": "C",
        "text": "<header>"
      },
      {
        "label": "D",
        "text": "<h1>"
      }
    ],
    "answer": "A",
    "explanation": "<title>放在<head>中，定义浏览器标签栏显示的文字，也是搜索引擎结果标题。",
    "level": "A",
    "id": "GEN0291",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "盒模型中，box-sizing: content-box时元素实际宽度等于？",
    "options": [
      {
        "label": "A",
        "text": "width + padding + border"
      },
      {
        "label": "B",
        "text": "width + margin"
      },
      {
        "label": "C",
        "text": "width + padding"
      },
      {
        "label": "D",
        "text": "只有width"
      }
    ],
    "answer": "A",
    "explanation": "content-box下width仅内容宽度，实际渲染宽度=width+左右padding+左右border。",
    "level": "A",
    "id": "GEN0292",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "下列CSS选择器优先级最低的是？",
    "options": [
      {
        "label": "A",
        "text": "#id"
      },
      {
        "label": "B",
        "text": ".class"
      },
      {
        "label": "C",
        "text": "div标签选择器"
      },
      {
        "label": "D",
        "text": "* 通配符"
      }
    ],
    "answer": "D",
    "explanation": "优先级：!important > 行内样式 > id > class > 标签 > *。*通配符权重为0。",
    "level": "B",
    "id": "GEN0293",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "多选题",
    "title": "关于CSS盒模型，正确的说法有？",
    "options": [
      {
        "label": "A",
        "text": "margin不会影响元素背景区域"
      },
      {
        "label": "B",
        "text": "padding会影响元素背景区域"
      },
      {
        "label": "C",
        "text": "border默认值为0"
      },
      {
        "label": "D",
        "text": "width在border-box下包含border和padding"
      }
    ],
    "answer": "ABD",
    "explanation": "margin是外边距（透明，不显背景色），padding扩展背景区域，border-box下width含border+padding。",
    "level": "A",
    "id": "GEN0294",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "判断题",
    "title": "JavaScript中，NaN === NaN的结果是true。",
    "options": [],
    "answer": "错",
    "explanation": "NaN不等于任何值，包括它自己！NaN === NaN返回false。用isNaN()函数判断是否为NaN。",
    "level": "B",
    "id": "GEN0295",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "判断题",
    "title": "HTML中，<img>标签的alt属性用于图片无法显示时的替代文本。",
    "options": [],
    "answer": "错",
    "explanation": "B卷答案标注为错，但实际alt属性就是用于图片无法显示时的替代文本。可能是本题表述有歧义或老师标注有误。",
    "level": "B",
    "id": "GEN0296",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "判断题",
    "title": "HTML中，<input type='text' readonly> 表示只读，但用户仍可修改。",
    "options": [],
    "answer": "错",
    "explanation": "readonly属性的输入框内容不可编辑（只读），但可以选中复制。disabled也是不可编辑但不能选中。",
    "level": "B",
    "id": "GEN0297",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "判断题",
    "title": "CSS盒模型中，总宽度 = 内容宽度 + 内边距 + 边框 + 外边距。",
    "options": [],
    "answer": "对",
    "explanation": "完整CSS盒模型：元素总占用宽度 = content + padding + border + margin。这也是盒模型四个组成部分。",
    "level": "A",
    "id": "GEN0298",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "判断题",
    "title": "querySelectorAll() 获取的是元素集合。",
    "options": [],
    "answer": "对",
    "explanation": "querySelectorAll()返回NodeList（节点列表/集合），可通过forEach遍历。querySelector()返回单个元素。",
    "level": "B",
    "id": "GEN0299",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "填空题",
    "title": "CSS中，设置背景图片的属性是什么？",
    "options": [],
    "answer": "background-image",
    "explanation": "background-image:url('图片路径')设置背景图。background是简写属性。",
    "level": "A",
    "id": "GEN0300",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "填空题",
    "title": "设置元素相对定位的CSS属性值是？",
    "options": [],
    "answer": "relative",
    "explanation": "position:relative 相对定位，参照物为自己原来的位置，不脱离文档流。",
    "level": "A",
    "id": "GEN0301",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "简答题",
    "title": "简述CSS三种样式引入方式及其优先级顺序。",
    "options": [],
    "answer": "三种引入方式：1.行内样式（元素style属性）优先级最高；2.内嵌样式（<head>中<style>标签）优先级中等；3.外部样式（<link>引入.css文件）优先级最低。优先级顺序：行内 > 内嵌 > 外部。!important可以打破这个规则。",
    "explanation": "B卷真题！优先级是CSS核心概念。实际权重：!important > 行内(1000) > id(100) > class(10) > 元素(1)。",
    "level": "A",
    "id": "GEN0302",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "CSS中，设置文本颜色的属性是？",
    "options": [
      {
        "label": "A",
        "text": "font-color"
      },
      {
        "label": "B",
        "text": "text-color"
      },
      {
        "label": "C",
        "text": "color"
      },
      {
        "label": "D",
        "text": "foreground"
      }
    ],
    "answer": "C",
    "explanation": "CSS中用color属性设置文本颜色，没有font-color/text-color这些属性。",
    "level": "A",
    "id": "GEN0303",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "以下哪个是HTML5新增的语义化标签？",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<span>"
      },
      {
        "label": "C",
        "text": "<nav>"
      },
      {
        "label": "D",
        "text": "<font>"
      }
    ],
    "answer": "C",
    "explanation": "<nav>是HTML5新增的导航语义化标签。还有<header>、<footer>、<article>、<section>等。<font>已废弃。",
    "level": "B",
    "id": "GEN0304",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "JavaScript中，typeof undefined 的返回值是？",
    "options": [
      {
        "label": "A",
        "text": "'null'"
      },
      {
        "label": "B",
        "text": "'undefined'"
      },
      {
        "label": "C",
        "text": "'object'"
      },
      {
        "label": "D",
        "text": "'string'"
      }
    ],
    "answer": "B",
    "explanation": "typeof undefined返回'undefined'（字符串类型）。注意typeof null返回'object'（这是JS的历史bug）。",
    "level": "B",
    "id": "GEN0305",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "CSS中，哪个属性用于设置背景颜色？",
    "options": [
      {
        "label": "A",
        "text": "color"
      },
      {
        "label": "B",
        "text": "bgcolor"
      },
      {
        "label": "C",
        "text": "background-color"
      },
      {
        "label": "D",
        "text": "bg-color"
      }
    ],
    "answer": "C",
    "explanation": "background-color设置背景色。color设置文本色。bgcolor是HTML属性（已废弃），bg-color不存在。",
    "level": "A",
    "id": "GEN0306",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "HTML中，<ol>标签的type属性不能取哪个值？",
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "a"
      },
      {
        "label": "C",
        "text": "i"
      },
      {
        "label": "D",
        "text": "x"
      }
    ],
    "answer": "D",
    "explanation": "<ol type='?'>合法值：1（数字）、a（小写字母）、A（大写字母）、i（小写罗马）、I（大写罗马）。没有'x'。",
    "level": "B",
    "id": "GEN0307",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "JavaScript中，以下哪个关键字用于声明变量但不赋值？",
    "options": [
      {
        "label": "A",
        "text": "var x"
      },
      {
        "label": "B",
        "text": "int x"
      },
      {
        "label": "C",
        "text": "string x"
      },
      {
        "label": "D",
        "text": "variable x"
      }
    ],
    "answer": "A",
    "explanation": "var x声明变量x，此时x的值为undefined。JS是弱类型语言，不用int/string等类型声明。",
    "level": "A",
    "id": "GEN0308",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "CSS中，使用什么符号表示类选择器？",
    "options": [
      {
        "label": "A",
        "text": "#"
      },
      {
        "label": "B",
        "text": "."
      },
      {
        "label": "C",
        "text": "@"
      },
      {
        "label": "D",
        "text": "&"
      }
    ],
    "answer": "B",
    "explanation": ".类名 = 类选择器（可重复使用）；#id名 = ID选择器（唯一）。",
    "level": "A",
    "id": "GEN0309",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "通过CSS设置文字大小为18像素的正确写法是？",
    "options": [
      {
        "label": "A",
        "text": "font-size: 18"
      },
      {
        "label": "B",
        "text": "text-size: 18px"
      },
      {
        "label": "C",
        "text": "font-size: 18px"
      },
      {
        "label": "D",
        "text": "size: 18px"
      }
    ],
    "answer": "C",
    "explanation": "设置字号用font-size属性，px单位不能省略。没有text-size和size这些属性。",
    "level": "A",
    "id": "GEN0310",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "哪个HTML标签用于在网页中嵌入图片？",
    "options": [
      {
        "label": "A",
        "text": "<image>"
      },
      {
        "label": "B",
        "text": "<img>"
      },
      {
        "label": "C",
        "text": "<pic>"
      },
      {
        "label": "D",
        "text": "<picture>"
      }
    ],
    "answer": "B",
    "explanation": "<img>是图片标签（自闭合）。<picture>是HTML5响应式图片容器。<image>和<pic>不存在。",
    "level": "A",
    "id": "GEN0311",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "title": "JavaScript中，alert()方法的作用是？",
    "options": [
      {
        "label": "A",
        "text": "在控制台输出信息"
      },
      {
        "label": "B",
        "text": "弹出警告对话框"
      },
      {
        "label": "C",
        "text": "在页面写入内容"
      },
      {
        "label": "D",
        "text": "关闭浏览器窗口"
      }
    ],
    "answer": "B",
    "explanation": "alert()弹出带确定按钮的警告框。console.log()是控制台输出，document.write()是页面写入。",
    "level": "A",
    "id": "GEN0312",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "多选题",
    "title": "以下属于块级元素的有？",
    "options": [
      {
        "label": "A",
        "text": "<div>"
      },
      {
        "label": "B",
        "text": "<p>"
      },
      {
        "label": "C",
        "text": "<h1>"
      },
      {
        "label": "D",
        "text": "<span>"
      }
    ],
    "answer": "ABC",
    "explanation": "div、p、h1都是块级元素（独占一行）。span是行内元素。",
    "level": "A",
    "id": "GEN0313",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "多选题",
    "title": "CSS中，以下哪些属性与文字样式相关？",
    "options": [
      {
        "label": "A",
        "text": "font-size"
      },
      {
        "label": "B",
        "text": "font-weight"
      },
      {
        "label": "C",
        "text": "color"
      },
      {
        "label": "D",
        "text": "margin"
      }
    ],
    "answer": "ABC",
    "explanation": "font-size字号、font-weight粗细、color颜色都与文字相关。margin是外边距。",
    "level": "A",
    "id": "GEN0314",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "多选题",
    "title": "HTML表单中，以下哪些是合法的input type值？",
    "options": [
      {
        "label": "A",
        "text": "text"
      },
      {
        "label": "B",
        "text": "password"
      },
      {
        "label": "C",
        "text": "email"
      },
      {
        "label": "D",
        "text": "radio"
      }
    ],
    "answer": "ABCD",
    "explanation": "四者都是合法的input类型。text文本、password密码、email邮箱、radio单选按钮。",
    "level": "B",
    "id": "GEN0315",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "多选题",
    "title": "以下哪些是CSS定位方式？",
    "options": [
      {
        "label": "A",
        "text": "static"
      },
      {
        "label": "B",
        "text": "relative"
      },
      {
        "label": "C",
        "text": "absolute"
      },
      {
        "label": "D",
        "text": "fixed"
      }
    ],
    "answer": "ABCD",
    "explanation": "四大定位方式：static默认，relative相对自身，absolute相对定位祖先，fixed相对视口。",
    "level": "A",
    "id": "GEN0316",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "多选题",
    "title": "以下哪些DOM方法返回的是集合（多个元素）？",
    "options": [
      {
        "label": "A",
        "text": "getElementsByClassName()"
      },
      {
        "label": "B",
        "text": "querySelectorAll()"
      },
      {
        "label": "C",
        "text": "getElementById()"
      },
      {
        "label": "D",
        "text": "getElementsByTagName()"
      }
    ],
    "answer": "ABD",
    "explanation": "getElementsByClassName/ByTagName返回HTMLCollection，querySelectorAll返回NodeList。getElementById返回单个元素。",
    "level": "B",
    "id": "GEN0317",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "判断题",
    "title": "CSS中，margin可以设置负值。",
    "options": [],
    "answer": "对",
    "explanation": "margin可以取负值实现特殊布局效果（如元素重叠）。padding不能取负值。",
    "level": "B",
    "id": "GEN0318",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "判断题",
    "title": "<script>标签必须放在<head>中。",
    "options": [],
    "answer": "错",
    "explanation": "<script>可以放在<head>或<body>中，通常放在<body>末尾以避免阻塞页面渲染。",
    "level": "B",
    "id": "GEN0319",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "判断题",
    "title": "CSS的注释写法是/* 注释内容 */。",
    "options": [],
    "answer": "对",
    "explanation": "CSS使用/* */注释，不同于HTML的<!-- -->和JS的//或/* */。",
    "level": "A",
    "id": "GEN0320",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "判断题",
    "title": "HTML文档中只能有一个<h1>标签。",
    "options": [],
    "answer": "错",
    "explanation": "HTML5规范建议一个页面一个<h1>（语义最佳），但不强制。多个<h1>技术上合法但不利于SEO。",
    "level": "B",
    "id": "GEN0321",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "判断题",
    "title": "text-align:center可以居中块级元素本身。",
    "options": [],
    "answer": "错",
    "explanation": "text-align:center居中块级元素内部的行内内容，不能居中块级元素本身。块级居中用margin:0 auto。",
    "level": "A",
    "id": "GEN0322",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "填空题",
    "title": "CSS中，设置元素外边距的简写属性是？",
    "options": [],
    "answer": "margin",
    "explanation": "margin:上 右 下 左 设置外边距。padding是内边距简写。",
    "level": "A",
    "id": "GEN0323",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "填空题",
    "title": "JavaScript中，声明变量的关键字（ES6之前）是？",
    "options": [],
    "answer": "var",
    "explanation": "ES6之前用var声明变量。ES6新增let和const，推荐用let/const。",
    "level": "A",
    "id": "GEN0324",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "填空题",
    "title": "HTML中，定义无序列表的标签是？",
    "options": [],
    "answer": "<ul>",
    "explanation": "<ul>定义无序列表（圆点），<ol>定义有序列表（数字）。",
    "level": "A",
    "id": "GEN0325",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "填空题",
    "title": "CSS中，能够让元素浮动的属性是？",
    "options": [],
    "answer": "float",
    "explanation": "float属性让元素浮动（left/right），使文字环绕。clear属性清除浮动。",
    "level": "A",
    "id": "GEN0326",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "填空题",
    "title": "HTML中，最大的一级标题标签是？",
    "options": [],
    "answer": "<h1>",
    "explanation": "<h1>至<h6>，数字越大标题级别越低字体越小。<h1>是最重要/最大的标题。",
    "level": "A",
    "id": "GEN0327",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "简答题",
    "title": "简述HTML、CSS、JavaScript三者在网页开发中的作用。",
    "options": [],
    "answer": "HTML：定义网页的结构和内容（骨架）。CSS：控制网页的样式和布局（皮肤/外观）。JavaScript：实现网页的交互和动态功能（行为）。三者分离：HTML负责内容，CSS负责表现，JS负责行为。",
    "explanation": "前端三剑客分工！面试/考试基础题。",
    "level": "A",
    "id": "GEN0328",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "简答题",
    "title": "简述CSS中id选择器和class选择器的区别。",
    "options": [],
    "answer": "id选择器(#id名)：唯一性，一个页面中同一个id只能出现一次，优先级权重100。class选择器(.类名)：可重复使用，同一元素可以有多个class，优先级权重10。一般用class设置样式，用id配合JS获取元素。",
    "explanation": "核心区别：唯一性、优先级权重、复用性。考试高频！",
    "level": "A",
    "id": "GEN0329",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "简答题",
    "title": "简述块级元素和行内元素的区别。",
    "options": [],
    "answer": "块级元素（div/p/h1）：独占一行，可设置宽高，默认宽度100%。行内元素（span/a/img）：不换行，宽高由内容决定，margin/padding仅左右有效。可通过display:block/inline/inline-block互相转换。",
    "explanation": "布局基础概念。display:inline-block兼具两者特性。",
    "level": "A",
    "id": "GEN0330",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "多选题",
    "title": "以下属于JSP九大隐式对象的有？",
    "options": [
      {
        "label": "A",
        "text": "request"
      },
      {
        "label": "B",
        "text": "response"
      },
      {
        "label": "C",
        "text": "session"
      },
      {
        "label": "D",
        "text": "servletContext"
      }
    ],
    "answer": "ABC",
    "explanation": "request、response、session、application、config、out、page、pageContext、exception是九大隐式对象。servletContext不是隐式对象名。",
    "level": "A",
    "id": "GEN0331",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "多选题",
    "title": "关于Servlet生命周期，以下说法正确的有？",
    "options": [
      {
        "label": "A",
        "text": "init()在首次请求时调用"
      },
      {
        "label": "B",
        "text": "service()每次请求都会调用"
      },
      {
        "label": "C",
        "text": "destroy()在服务器关闭时调用"
      },
      {
        "label": "D",
        "text": "init()每次请求都会调用"
      }
    ],
    "answer": "ABC",
    "explanation": "init()只调一次（首次加载），service()每次请求调用，destroy()服务器关闭时调用。",
    "level": "A",
    "id": "GEN0332",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "多选题",
    "title": "关于请求转发和重定向的区别，正确的有？",
    "options": [
      {
        "label": "A",
        "text": "转发URL不变，重定向URL改变"
      },
      {
        "label": "B",
        "text": "转发是1次请求，重定向是2次"
      },
      {
        "label": "C",
        "text": "转发可共享request数据"
      },
      {
        "label": "D",
        "text": "重定向可以跨域访问"
      }
    ],
    "answer": "ABCD",
    "explanation": "四大区别全部正确。转发是服务器内部跳转，重定向是浏览器重新请求。",
    "level": "A",
    "id": "GEN0333",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "多选题",
    "title": "以下哪些是Tomcat的默认配置特点？",
    "options": [
      {
        "label": "A",
        "text": "默认端口8080"
      },
      {
        "label": "B",
        "text": "WEB-INF目录不可直接访问"
      },
      {
        "label": "C",
        "text": "work目录存放编译后的Servlet"
      },
      {
        "label": "D",
        "text": "默认端口80"
      }
    ],
    "answer": "ABC",
    "explanation": "Tomcat默认端口8080，WEB-INF受保护（安全），work目录存编译Servlet类文件。",
    "level": "B",
    "id": "GEN0334",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "多选题",
    "title": "关于Filter过滤器，以下说法正确的有？",
    "options": [
      {
        "label": "A",
        "text": "实现Filter接口"
      },
      {
        "label": "B",
        "text": "三个方法：init()/doFilter()/destroy()"
      },
      {
        "label": "C",
        "text": "FilterChain.doFilter()放行请求"
      },
      {
        "label": "D",
        "text": "只能用于编码过滤"
      }
    ],
    "answer": "ABC",
    "explanation": "Filter可用于编码过滤、IP控制、权限校验等多种场景，不限于编码。",
    "level": "B",
    "id": "GEN0335",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "判断题",
    "title": "Session数据存储在客户端浏览器中。",
    "options": [],
    "answer": "错",
    "explanation": "Session数据存储在服务器端。Cookie存储在客户端浏览器中（≤4KB）。",
    "level": "A",
    "id": "GEN0336",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "判断题",
    "title": "response.sendRedirect()可以实现请求转发。",
    "options": [],
    "answer": "错",
    "explanation": "sendRedirect()是重定向（浏览器重新请求，URL改变）。请求转发用request.getRequestDispatcher().forward()。",
    "level": "A",
    "id": "GEN0337",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "判断题",
    "title": "EL表达式${name}可以取出session中的属性值。",
    "options": [],
    "answer": "对",
    "explanation": "EL表达式${name}按page→request→session→application顺序查找属性。",
    "level": "B",
    "id": "GEN0338",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "判断题",
    "title": "一个Servlet只能配置一个url-pattern。",
    "options": [],
    "answer": "错",
    "explanation": "一个Servlet可以配置多个<url-pattern>，通过多个<servlet-mapping>实现，也可以使用通配符。",
    "level": "B",
    "id": "GEN0339",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "判断题",
    "title": "JSP中page指令的import属性可以引入Java类。",
    "options": [],
    "answer": "对",
    "explanation": "<%@ page import='java.util.*' %>可以在JSP中导入所需的Java类/包。",
    "level": "B",
    "id": "GEN0340",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "判断题",
    "title": "MVC模式中，Model负责处理用户请求的调度。",
    "options": [],
    "answer": "错",
    "explanation": "Controller（控制器）负责调度，接收请求分派处理。Model（模型）负责数据存储和业务逻辑。",
    "level": "A",
    "id": "GEN0341",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "判断题",
    "title": "JDBC操作完成后，应该按ResultSet→Statement→Connection的顺序关闭资源。",
    "options": [],
    "answer": "对",
    "explanation": "关闭顺序：先ResultSet，再Statement，最后Connection。反向关闭避免资源泄漏。",
    "level": "B",
    "id": "GEN0342",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "判断题",
    "title": "<%@ include file='...'%>是动态包含，在运行时合并结果。",
    "options": [],
    "answer": "错",
    "explanation": "<%@ include %>是指令包含，在编译时合并源码。<jsp:include>才是动作包含，运行时合并。",
    "level": "B",
    "id": "GEN0343",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "填空题",
    "title": "JSP中，获取当前请求对象使用的隐式对象名是？",
    "options": [],
    "answer": "request",
    "explanation": "request是HttpServletRequest类型的隐式对象，可获取请求参数、属性等。",
    "level": "A",
    "id": "GEN0344",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "填空题",
    "title": "Servlet配置文件中，配置Servlet的XML文件名是？",
    "options": [],
    "answer": "web.xml",
    "explanation": "web.xml是Web应用部署描述文件，配置Servlet映射、Filter、监听器等。",
    "level": "A",
    "id": "GEN0345",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "填空题",
    "title": "JSP九大隐式对象中，用于向客户端输出的对象是？",
    "options": [],
    "answer": "out",
    "explanation": "out是JspWriter类型，用于向客户端输出内容，类似PrintWriter。",
    "level": "A",
    "id": "GEN0346",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "填空题",
    "title": "设置请求编码为UTF-8的方法是request._________。",
    "options": [],
    "answer": "setCharacterEncoding",
    "explanation": "request.setCharacterEncoding('UTF-8')设置请求体的编码格式。",
    "level": "B",
    "id": "GEN0347",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "填空题",
    "title": "JDBC中，获取数据库连接使用DriverManager的哪个方法？",
    "options": [],
    "answer": "getConnection",
    "explanation": "DriverManager.getConnection(url, username, password)获取数据库连接对象。",
    "level": "B",
    "id": "GEN0348",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "填空题",
    "title": "JSTL中，用于循环遍历的标签是？",
    "options": [],
    "answer": "c:forEach",
    "explanation": "<c:forEach>遍历集合/数组，设置var和items属性。",
    "level": "B",
    "id": "GEN0349",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "填空题",
    "title": "四大作用域中，范围最大的是哪个？",
    "options": [],
    "answer": "application",
    "explanation": "application(ServletContext)范围最大，整个Web应用共享，服务器关闭才销毁。",
    "level": "A",
    "id": "GEN0350",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "填空题",
    "title": "Cookie在客户端存储，单个Cookie最大不超过多少KB？",
    "options": [],
    "answer": "4KB",
    "explanation": "Cookie大小限制约4KB，不适合存储大量数据，重要信息用Session。",
    "level": "B",
    "id": "GEN0351",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "填空题",
    "title": "获取Session对象的方法是request._________。",
    "options": [],
    "answer": "getSession",
    "explanation": "request.getSession()获取或创建当前会话的HttpSession对象。",
    "level": "A",
    "id": "GEN0352",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "填空题",
    "title": "JSP中包含其他文件的动作标签是？",
    "options": [],
    "answer": "jsp:include",
    "explanation": "<jsp:include page='...'/>运行时合并HTML结果，区别于<%@ include %>编译时合并。",
    "level": "B",
    "id": "GEN0353",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "简答题",
    "title": "简述JSP的四种作用域及其范围。",
    "options": [],
    "answer": "page：当前页面有效，离开页面销毁。request：一次请求内有效，转发可共享。session：一次会话内有效，关闭浏览器或超时销毁。application：整个Web应用有效，服务器关闭销毁。范围从小到大：page < request < session < application。",
    "explanation": "作用域是JSP核心概念，决定了数据共享的范围。",
    "level": "A",
    "id": "GEN0354",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "简答题",
    "title": "简述MVC开发模式中Model、View、Controller各自的作用。",
    "options": [],
    "answer": "Model（模型）：负责数据存储和业务逻辑处理（如数据库操作）。View（视图）：负责用户界面展示（如JSP页面）。Controller（控制器）：负责调度，接收用户请求，调用Model处理，将结果分派给View展示。",
    "explanation": "MVC分离关注点，便于维护和分工。",
    "level": "A",
    "id": "GEN0355",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "简答题",
    "title": "简述Cookie和Session的区别。",
    "options": [],
    "answer": "存储位置：Cookie存客户端浏览器，Session存服务器内存。容量：Cookie≤4KB，Session无严格限制。安全性：Session更安全（服务器端），Cookie相对不安全。生命周期：Cookie可设MaxAge持久化，Session默认浏览器关闭失效。",
    "explanation": "登录信息等重要数据用Session，记住用户名等用Cookie。",
    "level": "A",
    "id": "GEN0356",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "简答题",
    "title": "简述Servlet的生命周期。",
    "options": [],
    "answer": "1.加载和实例化：服务器启动或首次请求时创建Servlet实例。2.初始化init()：只调用一次，完成初始化工作。3.服务service()：每次请求调用，根据请求方式调用doGet()/doPost()。4.销毁destroy()：服务器关闭时调用，释放资源。",
    "explanation": "生命周期是Servlet最常考的简答题。",
    "level": "A",
    "id": "GEN0357",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Java Web",
    "type": "简答题",
    "title": "简述Filter过滤器的作用和典型应用场景。",
    "options": [],
    "answer": "Filter（过滤器）：拦截客户端请求和服务器响应，可在请求到达Servlet前/响应返回客户端前进行处理。典型应用：编码统一设置、IP访问控制/黑名单、用户登录权限校验、敏感词过滤、请求日志记录。通过FilterChain.doFilter()放行请求。",
    "explanation": "Filter是AOP思想的体现，横切关注点统一处理。",
    "level": "B",
    "id": "GEN0358",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下哪些Linux命令可以查看文件内容？",
    "options": [
      {
        "label": "A",
        "text": "cat"
      },
      {
        "label": "B",
        "text": "more"
      },
      {
        "label": "C",
        "text": "less"
      },
      {
        "label": "D",
        "text": "cd"
      }
    ],
    "answer": "ABC",
    "explanation": "cat/more/less均可查看文件内容。cd是切换目录命令。",
    "level": "A",
    "id": "GEN0359",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "关于chmod权限，以下说法正确的有？",
    "options": [
      {
        "label": "A",
        "text": "7代表rwx"
      },
      {
        "label": "B",
        "text": "755表示所有者rwx，组和其他人r-x"
      },
      {
        "label": "C",
        "text": "chmod u+x给所有者加执行权限"
      },
      {
        "label": "D",
        "text": "chmod 777给所有人全部权限"
      }
    ],
    "answer": "ABCD",
    "explanation": "全部正确。r=4 w=2 x=1，7=4+2+1=rwx，755=rwxr-xr-x。",
    "level": "A",
    "id": "GEN0360",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "vi/vim的三种模式包括？",
    "options": [
      {
        "label": "A",
        "text": "命令模式"
      },
      {
        "label": "B",
        "text": "插入模式"
      },
      {
        "label": "C",
        "text": "末行模式"
      },
      {
        "label": "D",
        "text": "编辑模式"
      }
    ],
    "answer": "ABC",
    "explanation": "vi/vim三种模式：命令模式（默认）、插入模式（i/a/o进入）、末行模式（:进入）。'编辑模式'不是标准名称。",
    "level": "A",
    "id": "GEN0361",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下哪些是Linux中正确的重定向操作？",
    "options": [
      {
        "label": "A",
        "text": ">  覆盖写入"
      },
      {
        "label": "B",
        "text": ">> 追加写入"
      },
      {
        "label": "C",
        "text": "2>&1 错误合并到标准输出"
      },
      {
        "label": "D",
        "text": "<  输入重定向"
      }
    ],
    "answer": "ABCD",
    "explanation": "四种重定向全部正确。>覆盖、>>追加、2>&1合并stderr、<输入重定向。",
    "level": "B",
    "id": "GEN0362",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "关于软链接和硬链接，说法正确的有？",
    "options": [
      {
        "label": "A",
        "text": "软链接类似快捷方式"
      },
      {
        "label": "B",
        "text": "硬链接共享i节点"
      },
      {
        "label": "C",
        "text": "软链接可跨文件系统"
      },
      {
        "label": "D",
        "text": "硬链接删原文件后仍可用"
      }
    ],
    "answer": "ABCD",
    "explanation": "全部正确。软链接(ln -s)存路径，硬链接(ln)共享inode。",
    "level": "B",
    "id": "GEN0363",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "Linux中，ls -a命令可以显示隐藏文件。",
    "options": [],
    "answer": "对",
    "explanation": "ls -a显示所有文件（含.开头的隐藏文件），ls -A不显示.和..。",
    "level": "A",
    "id": "GEN0364",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "chmod 777 file 给所有人只读权限。",
    "options": [],
    "answer": "错",
    "explanation": "777是rwxrwxrwx（所有人可读写执行），不是只读。只读是444（r--r--r--）。",
    "level": "A",
    "id": "GEN0365",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "kill -9可以强制终止进程。",
    "options": [],
    "answer": "对",
    "explanation": "kill -9 PID发送SIGKILL信号，强制终止进程（不能被进程捕获/忽略）。",
    "level": "A",
    "id": "GEN0366",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "mkdir命令只能创建单级目录。",
    "options": [],
    "answer": "错",
    "explanation": "mkdir -p可以递归创建多级目录（如mkdir -p a/b/c）。不加-p且父目录不存在则报错。",
    "level": "B",
    "id": "GEN0367",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "Shell脚本的首行必须是#!/bin/bash。",
    "options": [],
    "answer": "错",
    "explanation": "Shebang行可以是#!/bin/sh、#!/bin/bash、#!/usr/bin/python等，取决于用什么解释器。",
    "level": "B",
    "id": "GEN0368",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "grep命令可以使用正则表达式搜索文本。",
    "options": [],
    "answer": "对",
    "explanation": "grep（Global Regular Expression Print）支持基本正则和扩展正则（-E参数）。",
    "level": "B",
    "id": "GEN0369",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "tar -xzvf只能解压.tar.gz文件。",
    "options": [],
    "answer": "错",
    "explanation": "tar可以解压多种格式：.tar.gz(.tgz)、.tar.bz2、.tar.xz等，根据文件后缀自动识别或通过参数指定。",
    "level": "B",
    "id": "GEN0370",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "ps -aux可以查看系统中所有进程。",
    "options": [],
    "answer": "对",
    "explanation": "ps -aux（或ps aux）显示系统中所有用户的全部进程信息。",
    "level": "A",
    "id": "GEN0371",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "userdel命令可以直接删除正在使用系统的用户。",
    "options": [],
    "answer": "错",
    "explanation": "如果用户正在登录/有进程运行，userdel无法删除。需要先终止该用户所有进程。",
    "level": "B",
    "id": "GEN0372",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "判断题",
    "title": "rm -rf / 命令会删除整个系统，应该谨慎使用。",
    "options": [],
    "answer": "对",
    "explanation": "rm -rf / 递归强制删除根目录，会导致系统崩溃。千万不要执行此命令！",
    "level": "A",
    "id": "GEN0373",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "Linux中，显示当前工作目录的命令是？",
    "options": [],
    "answer": "pwd",
    "explanation": "pwd（Print Working Directory）显示当前所在目录的绝对路径。",
    "level": "A",
    "id": "GEN0374",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "Linux中，用于切换用户身份的命令是？",
    "options": [],
    "answer": "su",
    "explanation": "su（Switch User）切换用户。su - username完整切换（加载环境变量）。",
    "level": "A",
    "id": "GEN0375",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "vi编辑器中，保存并退出的命令是？",
    "options": [],
    "answer": ":wq",
    "explanation": ":wq = write + quit，保存并退出。:q!不保存强制退出。ZZ也可保存退出。",
    "level": "A",
    "id": "GEN0376",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "Linux中，用于创建空文件或更新文件时间戳的命令是？",
    "options": [],
    "answer": "touch",
    "explanation": "touch filename创建空文件；若文件已存在则更新其访问和修改时间戳。",
    "level": "A",
    "id": "GEN0377",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "显示文件前10行的命令是？",
    "options": [],
    "answer": "head",
    "explanation": "head file默认显示前10行。head -n 20 file显示前20行。tail显示尾部。",
    "level": "A",
    "id": "GEN0378",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "Linux中，管道操作使用的符号是？",
    "options": [],
    "answer": "|",
    "explanation": "管道|将前一个命令的标准输出作为后一个命令的标准输入。",
    "level": "A",
    "id": "GEN0379",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "设置环境变量的命令是（bash中）？",
    "options": [],
    "answer": "export",
    "explanation": "export VAR=value设置环境变量，子进程可继承。不加export只设Shell变量。",
    "level": "B",
    "id": "GEN0380",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "tar命令中，创建压缩包的参数组合是？",
    "options": [],
    "answer": "-zcvf",
    "explanation": "tar -zcvf 包名.tar.gz 源文件。z=gzip压缩，c=创建，v=显示过程，f=指定文件名。",
    "level": "B",
    "id": "GEN0381",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "Linux中，配置文件通常存放在哪个目录？",
    "options": [],
    "answer": "/etc",
    "explanation": "/etc存放系统和应用配置文件（如/etc/passwd、/etc/hosts）。",
    "level": "B",
    "id": "GEN0382",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "vi中，从命令模式进入插入模式的按键是（任意一个即可）？",
    "options": [],
    "answer": "i",
    "explanation": "按i在光标前插入，a在光标后插入，o在下一行插入。i最常用。",
    "level": "A",
    "id": "GEN0383",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "简答题",
    "title": "简述Linux文件权限的rwx含义。",
    "options": [],
    "answer": "r（read，4）：读取文件内容/列出目录。w（write，2）：修改文件/在目录中创建删除文件。x（execute，1）：执行文件/进入目录。权限对文件和目录的含义不同。三组权限分别对应所有者(user)、所属组(group)、其他人(others)。",
    "explanation": "权限是Linux安全基石，chmod数字和符号两种设置方式都要掌握。",
    "level": "A",
    "id": "GEN0384",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "简答题",
    "title": "简述vi/vim三种工作模式及切换方式。",
    "options": [],
    "answer": "命令模式（默认）：执行复制(yy)、粘贴(p)、删除(dd)、移动等操作。插入模式：按i/a/o进入，编辑文本内容。末行模式：按:进入，执行保存(:w)、退出(:q)、查找(/)、替换(:%s/old/new/g)等命令。Esc键从插入/末行模式返回命令模式。",
    "explanation": "vi是Linux标配编辑器，三种模式是考试重点。",
    "level": "A",
    "id": "GEN0385",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "简答题",
    "title": "简述Shell脚本中变量赋值的注意事项。",
    "options": [],
    "answer": "1.变量名=值（等号两边不能有空格）。2.引用变量用$变量名或${变量名}。3.单引号'不解释特殊字符（原样输出），双引号\"会解释$等特殊字符。4.命令替换用$(命令)或`命令`。5.脚本首行需指定解释器#!/bin/bash。6.注释用#。",
    "explanation": "Shell编程基础，空格规则最容易出错。",
    "level": "A",
    "id": "GEN0386",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "简答题",
    "title": "简述Linux目录结构中/bin、/etc、/home、/var的作用。",
    "options": [],
    "answer": "/bin：存放基本系统命令（ls、cp、cat等）。/etc：存放系统和应用配置文件。/home：普通用户的主目录（如/home/user/）。/var：存放经常变化的数据（日志、邮件、缓存等），/var/log是日志目录。",
    "explanation": "FHS（文件系统层次标准）基础知识。",
    "level": "B",
    "id": "GEN0387",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "多选题",
    "title": "HDFS架构中包含以下哪些组件？",
    "options": [
      {
        "label": "A",
        "text": "NameNode"
      },
      {
        "label": "B",
        "text": "DataNode"
      },
      {
        "label": "C",
        "text": "SecondaryNameNode"
      },
      {
        "label": "D",
        "text": "ResourceManager"
      }
    ],
    "answer": "ABC",
    "explanation": "HDFS包含NameNode、DataNode、SecondaryNameNode。ResourceManager是YARN的组件。",
    "level": "A",
    "id": "GEN0388",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "多选题",
    "title": "关于NameNode和DataNode，以下说法正确的有？",
    "options": [
      {
        "label": "A",
        "text": "NameNode管理元数据和命名空间"
      },
      {
        "label": "B",
        "text": "DataNode存储实际数据块"
      },
      {
        "label": "C",
        "text": "SecondaryNameNode是NameNode的热备"
      },
      {
        "label": "D",
        "text": "NameNode不存储实际数据"
      }
    ],
    "answer": "ABD",
    "explanation": "SecondaryNameNode不是热备（不能自动切换），它的作用是定期合并fsimage和edits日志。",
    "level": "A",
    "id": "GEN0389",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "多选题",
    "title": "以下哪些是Hadoop的组件？",
    "options": [
      {
        "label": "A",
        "text": "HDFS"
      },
      {
        "label": "B",
        "text": "MapReduce"
      },
      {
        "label": "C",
        "text": "YARN"
      },
      {
        "label": "D",
        "text": "Hive"
      }
    ],
    "answer": "ABCD",
    "explanation": "HDFS(存储)、MapReduce(计算)、YARN(资源调度)是Hadoop三大核心。Hive是构建在Hadoop上的数据仓库工具。",
    "level": "A",
    "id": "GEN0390",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "多选题",
    "title": "关于HDFS数据块，以下正确的有？",
    "options": [
      {
        "label": "A",
        "text": "默认块大小为128MB（Hadoop 2.x）"
      },
      {
        "label": "B",
        "text": "每个块默认有3个副本"
      },
      {
        "label": "C",
        "text": "块大小可以配置"
      },
      {
        "label": "D",
        "text": "块大小越大越好"
      }
    ],
    "answer": "ABC",
    "explanation": "块大小通过dfs.blocksize配置，默认128MB（2.x）/64MB（1.x），默认3副本。太大影响并行度，太小增加元数据开销。",
    "level": "B",
    "id": "GEN0391",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "多选题",
    "title": "关于MapReduce，以下说法正确的有？",
    "options": [
      {
        "label": "A",
        "text": "Map阶段负责数据映射和转换"
      },
      {
        "label": "B",
        "text": "Reduce阶段负责汇总和聚合"
      },
      {
        "label": "C",
        "text": "Shuffle阶段在Map和Reduce之间"
      },
      {
        "label": "D",
        "text": "MapReduce只能处理结构化数据"
      }
    ],
    "answer": "ABC",
    "explanation": "MapReduce可以处理结构化、半结构化、非结构化数据。Shuffle负责将Map输出按key分组传送给Reduce。",
    "level": "B",
    "id": "GEN0392",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "判断题",
    "title": "HDFS中的NameNode存储实际的数据块。",
    "options": [],
    "answer": "错",
    "explanation": "NameNode只存储元数据（文件目录结构），DataNode存储实际数据块。",
    "level": "A",
    "id": "GEN0393",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "判断题",
    "title": "HDFS数据块的默认副本数是3。",
    "options": [],
    "answer": "对",
    "explanation": "HDFS默认3副本策略：第一份在本地节点，第二份在同机架不同节点，第三份在不同机架节点。",
    "level": "A",
    "id": "GEN0394",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "判断题",
    "title": "SecondaryNameNode可以在NameNode故障时自动接管。",
    "options": [],
    "answer": "错",
    "explanation": "SecondaryNameNode不是热备！它只负责合并fsimage和edits，不能自动切换为主NameNode。",
    "level": "A",
    "id": "GEN0395",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "判断题",
    "title": "MapReduce是一种分布式计算模型。",
    "options": [],
    "answer": "对",
    "explanation": "MapReduce是Google提出的分布式计算模型，Hadoop是其开源实现。核心思想：分而治之。",
    "level": "A",
    "id": "GEN0396",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "判断题",
    "title": "HDFS的NameNode存在单点故障问题。",
    "options": [],
    "answer": "对",
    "explanation": "Hadoop 1.x中NameNode是单点（SPOF）。Hadoop 2.x引入HA（高可用）通过两个NameNode（Active/Standby）解决。",
    "level": "B",
    "id": "GEN0397",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "判断题",
    "title": "YARN负责Hadoop集群的资源管理和任务调度。",
    "options": [],
    "answer": "对",
    "explanation": "YARN（Yet Another Resource Negotiator）将资源管理与任务调度分离，是Hadoop 2.x的核心改进。",
    "level": "A",
    "id": "GEN0398",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "判断题",
    "title": "HDFS中数据块大小默认是64MB（Hadoop 2.x版本）。",
    "options": [],
    "answer": "错",
    "explanation": "Hadoop 1.x默认64MB，Hadoop 2.x默认128MB。块大小可通过配置调整。",
    "level": "B",
    "id": "GEN0399",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "判断题",
    "title": "MapReduce的Shuffle阶段发生在Map之后、Reduce之前。",
    "options": [],
    "answer": "对",
    "explanation": "Shuffle是MapReduce的关键阶段：Map输出→分区/排序/合并→通过网络传送给Reduce→归并排序。",
    "level": "B",
    "id": "GEN0400",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "判断题",
    "title": "Hive可以将SQL语句转换为MapReduce任务执行。",
    "options": [],
    "answer": "对",
    "explanation": "Hive是数据仓库工具，提供HiveQL（类SQL）查询接口，底层编译为MapReduce/Tez/Spark任务执行。",
    "level": "B",
    "id": "GEN0401",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "填空题",
    "title": "HDFS中管理文件系统元数据的节点叫？",
    "options": [],
    "answer": "NameNode",
    "explanation": "NameNode是HDFS的主节点，管理命名空间、文件目录结构、数据块映射关系。",
    "level": "A",
    "id": "GEN0402",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "填空题",
    "title": "HDFS中存储实际数据的节点叫？",
    "options": [],
    "answer": "DataNode",
    "explanation": "DataNode是HDFS的从节点，负责实际存储数据块并定期向NameNode汇报。",
    "level": "A",
    "id": "GEN0403",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "填空题",
    "title": "Hadoop 2.x中，HDFS数据块默认大小为多少MB？",
    "options": [],
    "answer": "128",
    "explanation": "Hadoop 2.x默认128MB，1.x默认64MB。块大小影响并行度和元数据开销。",
    "level": "B",
    "id": "GEN0404",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "填空题",
    "title": "Hadoop中用于资源管理和任务调度的组件叫？",
    "options": [],
    "answer": "YARN",
    "explanation": "YARN（Yet Another Resource Negotiator）统一管理集群资源，支持多种计算框架。",
    "level": "A",
    "id": "GEN0405",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "填空题",
    "title": "MapReduce中，负责数据映射转换的阶段叫？",
    "options": [],
    "answer": "Map",
    "explanation": "Map阶段将输入数据转换为键值对（key-value），作为Reduce阶段的输入。",
    "level": "A",
    "id": "GEN0406",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "填空题",
    "title": "MapReduce中，负责汇总聚合的阶段叫？",
    "options": [],
    "answer": "Reduce",
    "explanation": "Reduce阶段接收Map输出的键值对，按key进行汇总、聚合、统计等操作。",
    "level": "A",
    "id": "GEN0407",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "填空题",
    "title": "HDFS默认的数据副本数量是？",
    "options": [],
    "explanation": "3副本策略确保数据可靠性：丢失一块可从其他副本恢复。",
    "level": "A",
    "answer": "3",
    "id": "GEN0408",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "填空题",
    "title": "Hive提供的查询语言叫什么？",
    "options": [],
    "answer": "HiveQL",
    "explanation": "HiveQL（Hive Query Language）类SQL语法，自动转换为MapReduce/Tez/Spark作业。",
    "level": "B",
    "id": "GEN0409",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "填空题",
    "title": "NameNode元数据中，存储文件系统目录树的文件叫？",
    "options": [],
    "answer": "fsimage",
    "explanation": "fsimage是文件系统镜像，保存某个时间点的完整目录树。edits记录后续所有修改操作。",
    "level": "B",
    "id": "GEN0410",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "填空题",
    "title": "HDFS中，机架感知策略的目的是什么？",
    "options": [],
    "answer": "提高数据可靠性和网络性能",
    "explanation": "机架感知：将副本分布在不同机架，防止单机架故障导致数据丢失，同时优化网络带宽。",
    "level": "B",
    "id": "GEN0411",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "简答题",
    "title": "简述HDFS的读写流程（写流程即可）。",
    "options": [],
    "answer": "写流程：1.客户端向NameNode请求上传文件。2.NameNode检查权限和目录，返回可用的DataNode列表。3.客户端将文件切分成块，向第一个DataNode写入。4.第一个DataNode接收数据同时转发给第二个DataNode（副本链）。5.所有副本写入完成后，客户端通知NameNode。6.NameNode更新元数据。",
    "explanation": "掌握HDFS读写流程是理解分布式存储的关键。",
    "level": "A",
    "id": "GEN0412",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "简答题",
    "title": "简述Hadoop MapReduce的核心思想。",
    "options": [],
    "answer": "分而治之：将大数据集分解为小数据块，分配给多个节点并行处理（Map阶段），然后将各节点结果汇总合并得到最终结果（Reduce阶段）。核心流程：Input → Split → Map → Shuffle/Sort → Reduce → Output。优势：计算向数据移动（数据本地化），避免大规模数据传输。",
    "explanation": "MapReduce奠定了大数据处理的基本范式。",
    "level": "A",
    "id": "GEN0413",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "简答题",
    "title": "简述Hadoop 1.x和2.x的主要区别。",
    "options": [],
    "answer": "1.资源管理：1.x只有MapReduce（JobTracker/TaskTracker），2.x引入YARN分离资源管理。2.NameNode HA：1.x是单点故障，2.x支持高可用（Active/Standby）。3.扩展性：2.x支持更多节点。4.兼容性：2.x支持Spark、Storm等多种计算框架。",
    "explanation": "YARN是2.x最核心的改进，使Hadoop从单一计算框架变为通用大数据平台。",
    "level": "B",
    "id": "GEN0414",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "简答题",
    "title": "简述SecondaryNameNode的作用及其与NameNode的关系。",
    "options": [],
    "answer": "SecondaryNameNode的作用：定期从NameNode下载fsimage和edits日志，合并为新的fsimage，再传回NameNode。目的是防止edits日志过大导致重启恢复时间过长。它不是NameNode的热备（不能切换），只是NameNode的辅助/秘书角色。",
    "explanation": "这是考试高频题！很多人误以为SecondaryNameNode是备用NameNode。",
    "level": "A",
    "id": "GEN0415",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Hadoop",
    "type": "简答题",
    "title": "简述HDFS不适合存储大量小文件的原因。",
    "options": [],
    "answer": "1.元数据开销大：每个文件/目录/块都在NameNode内存中占约150字节元数据，大量小文件会耗尽NameNode内存。2.块浪费：每个文件至少占一个块，小文件会浪费存储空间。3.MapReduce效率低：每个文件会启动一个Map任务，小文件多导致任务过多开销大。解决方案：使用SequenceFile、HAR归档或合并小文件。",
    "explanation": "理解HDFS设计哲学：为大文件而生，非小文件存储。",
    "level": "B",
    "id": "GEN0416",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "多选题",
    "title": "以下关于Scala中var和val，说法正确的有？",
    "options": [
      {
        "label": "A",
        "text": "var可重新赋值"
      },
      {
        "label": "B",
        "text": "val不可重新赋值"
      },
      {
        "label": "C",
        "text": "val引用的Array内元素仍可修改"
      },
      {
        "label": "D",
        "text": "val和var完全一样"
      }
    ],
    "answer": "ABC",
    "explanation": "var=变量（可改），val=常量（不可改引用），但val引用的对象内部状态可修改（如Array元素）。",
    "level": "A",
    "id": "GEN0417",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "多选题",
    "title": "以下属于Scala集合类型的有？",
    "options": [
      {
        "label": "A",
        "text": "List"
      },
      {
        "label": "B",
        "text": "Set"
      },
      {
        "label": "C",
        "text": "Map"
      },
      {
        "label": "D",
        "text": "ArrayList"
      }
    ],
    "answer": "ABC",
    "explanation": "List/Set/Map是Scala三大核心集合。ArrayList是Java的集合类（Scala中可用但不常用）。",
    "level": "A",
    "id": "GEN0418",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "多选题",
    "title": "关于RDD，以下说法正确的有？",
    "options": [
      {
        "label": "A",
        "text": "RDD是不可变的分布式数据集合"
      },
      {
        "label": "B",
        "text": "RDD支持容错（血缘关系重建）"
      },
      {
        "label": "C",
        "text": "RDD操作分为转换(Transformation)和行动(Action)"
      },
      {
        "label": "D",
        "text": "cache()可以将RDD缓存到内存"
      }
    ],
    "answer": "ABCD",
    "explanation": "RDD五大特性：分区、不可变、容错、可缓存、可持久化。",
    "level": "A",
    "id": "GEN0419",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "多选题",
    "title": "以下哪些是Spark的转换操作（Transformation）？",
    "options": [
      {
        "label": "A",
        "text": "map"
      },
      {
        "label": "B",
        "text": "filter"
      },
      {
        "label": "C",
        "text": "reduce"
      },
      {
        "label": "D",
        "text": "flatMap"
      }
    ],
    "answer": "ABD",
    "explanation": "map/filter/flatMap属于转换操作（惰性）。reduce是行动操作（Action，触发实际计算）。",
    "level": "A",
    "id": "GEN0420",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "多选题",
    "title": "关于Scala元组，以下说法正确的有？",
    "options": [
      {
        "label": "A",
        "text": "最多22个元素"
      },
      {
        "label": "B",
        "text": "访问用._1 ._2（下标从1开始）"
      },
      {
        "label": "C",
        "text": "每个位置可存不同类型"
      },
      {
        "label": "D",
        "text": "创建后不可修改"
      }
    ],
    "answer": "ABCD",
    "explanation": "Scala元组特性：22元素上限，从1索引，异构存储，不可变。注意不能用t(0)访问！",
    "level": "A",
    "id": "GEN0421",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Scala中，val声明的变量可以重新赋值。",
    "options": [],
    "answer": "错",
    "explanation": "val声明的常量不可重新赋值（类似Java的final）。var声明的变量可以重新赋值。",
    "level": "A",
    "id": "GEN0422",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Scala中，ArrayBuffer是定长数组，长度不可改变。",
    "options": [],
    "answer": "错",
    "explanation": "ArrayBuffer是变长数组（可动态增删），Array是定长数组（长度不可变）。",
    "level": "A",
    "id": "GEN0423",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Scala元组访问元素使用t._1，索引从1开始。",
    "options": [],
    "answer": "对",
    "explanation": "Scala元组索引从1开始（不是0！）。t._1访问第一个元素，t._2第二个，以此类推。",
    "level": "A",
    "id": "GEN0424",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Spark的转换操作（Transformation）是立即执行的。",
    "options": [],
    "answer": "错",
    "explanation": "转换操作是惰性求值（lazy），只记录操作逻辑不立即执行。行动操作（Action）如count/collect才触发实际计算。",
    "level": "A",
    "id": "GEN0425",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "RDD的血缘关系（Lineage）用于容错恢复。",
    "options": [],
    "answer": "对",
    "explanation": "RDD通过血缘关系记录如何从其他RDD转换而来。当分区丢失时，可根据血缘重新计算恢复。",
    "level": "A",
    "id": "GEN0426",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Spark只能使用Scala语言开发。",
    "options": [],
    "answer": "错",
    "explanation": "Spark支持Scala、Java、Python、R等多种语言API。Scala是Spark的'母语'。",
    "level": "B",
    "id": "GEN0427",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Scala中List默认是不可变的。",
    "options": [],
    "answer": "对",
    "explanation": "Scala默认集合都是不可变的（immutable）。需要可变集合时需导入scala.collection.mutable包。",
    "level": "A",
    "id": "GEN0428",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Spark可以运行在Standalone、YARN、Mesos等集群模式。",
    "options": [],
    "answer": "对",
    "explanation": "Spark支持多种集群管理器：Standalone（自带）、YARN、Mesos、Kubernetes。",
    "level": "A",
    "id": "GEN0429",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Scala的模式匹配（match case）类似于Java的switch但更强大。",
    "options": [],
    "answer": "对",
    "explanation": "Scala模式匹配可以匹配类型、提取器、守卫条件等，远比switch灵活强大。",
    "level": "A",
    "id": "GEN0430",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Spark Streaming用于实时流处理。",
    "options": [],
    "answer": "对",
    "explanation": "Spark Streaming接收实时数据流，将数据分成小批次（micro-batch）用Spark引擎处理。",
    "level": "B",
    "id": "GEN0431",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "填空题",
    "title": "Scala中，声明不可变变量的关键字是？",
    "options": [],
    "answer": "val",
    "explanation": "val = value，不可变引用。var = variable，可变引用。",
    "level": "A",
    "id": "GEN0432",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "填空题",
    "title": "Scala中，变长数组的类型名称是？",
    "options": [],
    "answer": "ArrayBuffer",
    "explanation": "ArrayBuffer属于scala.collection.mutable包，支持动态增删元素。",
    "level": "A",
    "id": "GEN0433",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "填空题",
    "title": "Spark的核心数据结构叫？",
    "options": [],
    "answer": "RDD",
    "explanation": "RDD（Resilient Distributed Dataset）弹性分布式数据集，Spark的核心抽象。",
    "level": "A",
    "id": "GEN0434",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "填空题",
    "title": "Scala中，元组第二个元素的访问方式是？(假设变量名为t)",
    "options": [],
    "answer": "t._2",
    "explanation": "Scala元组索引从1开始，._1 ._2 ._3... 不能写成t(1)。",
    "level": "A",
    "id": "GEN0435",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "填空题",
    "title": "Spark中，将RDD数据持久化到内存的方法叫？",
    "options": [],
    "answer": "cache",
    "explanation": "cache()或persist()将RDD缓存到内存，避免每次Action都重新计算，提高迭代效率。",
    "level": "A",
    "id": "GEN0436",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "填空题",
    "title": "Spark的部署模式中，自带的集群管理器叫？",
    "options": [],
    "answer": "Standalone",
    "explanation": "Standalone是Spark内置的集群管理器，无需额外安装Hadoop/YARN即可运行Spark集群。",
    "level": "A",
    "id": "GEN0437",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "填空题",
    "title": "Scala中，用于定义函数的关键字是？",
    "options": [],
    "answer": "def",
    "explanation": "def funcName(params): ReturnType = { ... } 定义函数。匿名函数用=>。",
    "level": "A",
    "id": "GEN0438",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "填空题",
    "title": "Spark中，从集合创建RDD的方法是？（SparkContext的方法）",
    "options": [],
    "answer": "parallelize",
    "explanation": "sc.parallelize(Seq(1,2,3))从本地集合创建RDD。makeRDD用法类似。",
    "level": "A",
    "id": "GEN0439",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "填空题",
    "title": "Scala中，表示空值的类型是？",
    "options": [],
    "answer": "Option",
    "explanation": "Option[T]有两个子类：Some[T]（有值）和None（无值），用于安全处理空值避免NullPointerException。",
    "level": "B",
    "id": "GEN0440",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "填空题",
    "title": "Spark SQL中，表示分布式数据表的数据结构叫？",
    "options": [],
    "answer": "DataFrame",
    "explanation": "DataFrame是以列组织的分布式数据集，类似关系数据库的表。Dataset是类型安全的DataFrame。",
    "level": "A",
    "id": "GEN0441",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "简答题",
    "title": "简述Scala中var和val的区别。",
    "options": [],
    "answer": "var（variable）：可重新赋值的变量。val（value）：不可重新赋值的常量（类似Java的final）。但val引用的对象内部状态可修改（如val arr = Array(1,2); arr(0)=10 ✅）。函数式编程推荐优先使用val，减少可变状态。",
    "explanation": "var vs val是Scala入门最基础也是最重要的概念。",
    "level": "A",
    "id": "GEN0442",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "title": "简述RDD的五大特性。",
    "type": "简答题",
    "options": [],
    "answer": "1.分区列表（Partitions）：数据被分成多个分区分布在不同节点。2.计算函数（Compute）：每个分区应用相同的计算函数。3.依赖关系（Dependencies）：记录与其他RDD的血缘关系用于容错。4.分区器（Partitioner，可选）：键值RDD的分区方式。5.首选位置（Preferred Locations，可选）：数据本地化优化。",
    "explanation": "RDD是Spark最核心的概念，理解其特性有助于优化Spark程序。",
    "level": "A",
    "id": "GEN0443",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "简答题",
    "title": "简述Spark中Transformation和Action的区别。",
    "options": [],
    "answer": "Transformation（转换）：map、filter、flatMap等，记录对RDD的操作但不会立即执行（惰性求值），返回新的RDD。Action（行动）：count、collect、reduce等，触发实际计算并将结果返回给Driver或写入外部存储。核心区别：Transformation是懒加载（lazy），Action触发执行（eager）。",
    "explanation": "理解惰性求值对优化Spark程序至关重要。",
    "level": "A",
    "id": "GEN0444",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "简答题",
    "title": "简述Scala中Array和ArrayBuffer的区别。",
    "options": [],
    "answer": "Array：定长数组，长度创建后不可改变（可修改元素值）。适合元素数量固定的场景，性能更高。ArrayBuffer：变长数组，可动态添加（+=）、删除（-=）、插入元素。适合频繁增删元素的场景。两者都可通过索引访问arr(i)。",
    "explanation": "选择数组类型取决于是否需要动态改变长度。",
    "level": "A",
    "id": "GEN0445",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "简答题",
    "title": "简述Spark为什么比Hadoop MapReduce快。",
    "options": [],
    "answer": "1.内存计算：Spark将中间结果缓存到内存，MR频繁读写HDFS磁盘。2.DAG执行引擎：Spark构建DAG优化执行计划，MR是固定的Map-Reduce两阶段。3.线程级别：Spark任务以线程运行（轻量），MR以JVM进程运行（重量）。4.避免重复计算：cache/persist机制避免重复读取HDFS。",
    "explanation": "Spark不是替代Hadoop而是互补，Spark做计算HDFS做存储是经典组合。",
    "level": "A",
    "id": "GEN0446",
    "topic": "重点",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "多选题",
    "title": "以下哪些是HBase的特点？",
    "options": [
      {
        "label": "A",
        "text": "列式存储"
      },
      {
        "label": "B",
        "text": "基于HDFS"
      },
      {
        "label": "C",
        "text": "适合实时随机读写"
      },
      {
        "label": "D",
        "text": "是关系型数据库"
      }
    ],
    "answer": "ABC",
    "explanation": "HBase是非关系型（NoSQL）列式数据库，基于HDFS，适合实时随机读写大表。",
    "level": "A",
    "id": "GEN0447",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "多选题",
    "title": "ZooKeeper的主要应用场景包括？",
    "options": [
      {
        "label": "A",
        "text": "分布式协调/配置管理"
      },
      {
        "label": "B",
        "text": "分布式锁"
      },
      {
        "label": "C",
        "text": "集群选举（Leader Election）"
      },
      {
        "label": "D",
        "text": "替代关系型数据库"
      }
    ],
    "answer": "ABC",
    "explanation": "ZooKeeper用于分布式系统协调（配置管理、命名服务、分布式锁、Leader选举），不用于替代数据库。",
    "level": "A",
    "id": "GEN0448",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "多选题",
    "title": "关于HBase数据模型，以下正确的有？",
    "options": [
      {
        "label": "A",
        "text": "表由行(Row)和列(Column)组成"
      },
      {
        "label": "B",
        "text": "通过RowKey唯一标识一行"
      },
      {
        "label": "C",
        "text": "列族(Column Family)在创建表时定义"
      },
      {
        "label": "D",
        "text": "支持SQL查询"
      }
    ],
    "answer": "ABC",
    "explanation": "HBase不支持SQL（NoSQL），查询通过RowKey的get/scan操作实现。数据按RowKey字典序排列。",
    "level": "B",
    "id": "GEN0449",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "多选题",
    "title": "以下哪些是大数据的特征（4V）？",
    "options": [
      {
        "label": "A",
        "text": "Volume（大量）"
      },
      {
        "label": "B",
        "text": "Velocity（高速）"
      },
      {
        "label": "C",
        "text": "Variety（多样）"
      },
      {
        "label": "D",
        "text": "Value（价值）"
      }
    ],
    "answer": "ABCD",
    "explanation": "4V：Volume大规模、Velocity高速处理、Variety多样性、Value价值密度低。有时还加Veracity真实性。",
    "level": "A",
    "id": "GEN0450",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "多选题",
    "title": "ZooKeeper集群中，以下角色正确的有？",
    "options": [
      {
        "label": "A",
        "text": "Leader（领导者）"
      },
      {
        "label": "B",
        "text": "Follower（跟随者）"
      },
      {
        "label": "C",
        "text": "Observer（观察者）"
      },
      {
        "label": "D",
        "text": "Master（主节点）"
      }
    ],
    "answer": "ABC",
    "explanation": "ZooKeeper集群三种角色：Leader（处理写请求）、Follower（参与选举和投票）、Observer（不参与投票，仅转发请求）。",
    "level": "B",
    "id": "GEN0451",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "判断题",
    "title": "HBase是构建在HDFS之上的NoSQL数据库。",
    "options": [],
    "answer": "对",
    "explanation": "HBase底层存储依赖HDFS（数据文件存储在HDFS上），提供实时随机读写能力。",
    "level": "A",
    "id": "GEN0452",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "判断题",
    "title": "HBase的RowKey可以重复。",
    "options": [],
    "answer": "错",
    "explanation": "RowKey在HBase表中唯一标识一行，不能重复。相同RowKey的写入会覆盖之前的数据（可配置为多版本）。",
    "level": "A",
    "id": "GEN0453",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "判断题",
    "title": "ZooKeeper使用ZAB协议保证数据一致性。",
    "options": [],
    "answer": "对",
    "explanation": "ZAB（ZooKeeper Atomic Broadcast）是ZooKeeper的原子广播协议，用于实现分布式一致性。",
    "level": "B",
    "id": "GEN0454",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "判断题",
    "title": "大数据就是数据量很大的数据。",
    "options": [],
    "answer": "错",
    "explanation": "大数据不仅是量大的数据，核心在于多维度4V特征（大量、高速、多样、价值密度低），以及需要分布式技术处理无法用传统工具处理的数据集。",
    "level": "B",
    "id": "GEN0455",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "判断题",
    "title": "HBase支持SQL查询语句。",
    "options": [],
    "answer": "错",
    "explanation": "HBase不支持SQL。查询方式：通过RowKey的get（单行查询）、scan（范围扫描），或使用Apache Phoenix（在HBase上提供SQL层）。",
    "level": "B",
    "id": "GEN0456",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "判断题",
    "title": "ZooKeeper集群中，只要半数以上节点存活就可以正常服务。",
    "options": [],
    "answer": "对",
    "explanation": "ZooKeeper基于过半存活原则：集群需≥半数节点存活才能服务。这就是为什么集群推荐奇数台（3/5/7）。",
    "level": "B",
    "id": "GEN0457",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "判断题",
    "title": "HBase中的列可以动态增加。",
    "options": [],
    "answer": "对",
    "explanation": "HBase是稀疏列存储，列不需要预先定义，可以随时添加新的列（区别于关系数据库的固定列）。",
    "level": "B",
    "id": "GEN0458",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "判断题",
    "title": "Hadoop和Spark技术属于大数据技术栈的核心组件。",
    "options": [],
    "answer": "对",
    "explanation": "Hadoop（HDFS+MapReduce+YARN）和Spark是大数据处理的基础设施，也是大数据技术栈的核心。",
    "level": "A",
    "id": "GEN0459",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "判断题",
    "title": "HBase适合存储并快速查询单行记录。",
    "options": [],
    "answer": "对",
    "explanation": "HBase设计目标就是高效的随机实时读写（单行get毫秒级响应），适合查询某用户的最新状态等场景。",
    "level": "A",
    "id": "GEN0460",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "判断题",
    "title": "分布式系统CAP理论中，最多只能同时满足两个特性。",
    "options": [],
    "answer": "对",
    "explanation": "CAP定理：一致性(Consistency)、可用性(Availability)、分区容错性(Partition tolerance)三者最多满足两个。分布式系统必须选P，所以在C和A之间取舍。",
    "level": "B",
    "id": "GEN0461",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "填空题",
    "title": "HBase表中，唯一标识一行的字段叫？",
    "options": [],
    "answer": "RowKey",
    "explanation": "RowKey是HBase行键，按字典序存储。RowKey设计直接影响查询性能和数据分布。",
    "level": "A",
    "id": "GEN0462",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "填空题",
    "title": "ZooKeeper集群中负责处理写请求的节点角色是？",
    "options": [],
    "answer": "Leader",
    "explanation": "Leader处理所有写请求并广播给Follower。读请求可由任意节点处理。",
    "level": "A",
    "id": "GEN0463",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "填空题",
    "title": "大数据的4V特征分别是什么？",
    "options": [],
    "answer": "Volume Velocity Variety Value",
    "explanation": "大量(Volume)、高速(Velocity)、多样(Variety)、价值(Value)。5V还包括真实性(Veracity)。",
    "level": "A",
    "id": "GEN0464",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "填空题",
    "title": "HBase的底层数据存储在哪？",
    "options": [],
    "answer": "HDFS",
    "explanation": "HBase的数据文件（HFile）存储在HDFS上，利用HDFS的分布式存储和容错特性。",
    "level": "A",
    "id": "GEN0465",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "填空题",
    "title": "ZooKeeper中，数据存储在哪？",
    "options": [],
    "answer": "ZNode",
    "explanation": "ZNode是ZooKeeper的数据节点，类似文件系统中的目录/文件。ZNode可存储数据和子节点。",
    "level": "B",
    "id": "GEN0466",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "填空题",
    "title": "HBase的表创建时必须定义什么？",
    "options": [],
    "answer": "列族(Column Family)",
    "explanation": "创建HBase表时必须指定列族（Column Family），列族下可以有任意多个列限定符（Column Qualifier）。",
    "level": "B",
    "id": "GEN0467",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "填空题",
    "title": "ZooKeeper集群一般推荐多少个节点？",
    "options": [],
    "answer": "奇数个（3/5/7）",
    "explanation": "奇数个节点（通常是3或5）既能满足过半存活要求，又能减少资源浪费。偶数是浪费的。",
    "level": "B",
    "id": "GEN0468",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "填空题",
    "title": "HBase中，获取单行数据的方法叫？",
    "options": [],
    "answer": "get",
    "explanation": "get按RowKey精确查询单行。scan按范围扫描多行。HBase查询方式比RDBMS简单很多。",
    "level": "A",
    "id": "GEN0469",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "填空题",
    "title": "分布式系统理论CAP中，C代表什么？",
    "options": [],
    "answer": "Consistency（一致性）",
    "explanation": "CAP: Consistency一致性、Availability可用性、Partition Tolerance分区容错性。",
    "level": "B",
    "id": "GEN0470",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "填空题",
    "title": "HBase中，数据按什么顺序存储？",
    "options": [],
    "answer": "RowKey字典序",
    "explanation": "HBase数据按RowKey字典序（字节序）排列，这是RowKey设计需考虑的最重要因素。",
    "level": "B",
    "id": "GEN0471",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "简答题",
    "title": "简述大数据技术中4V特征的含义。",
    "options": [],
    "answer": "Volume（大量）：数据量巨大（TB/PB级别），传统工具无法处理。Velocity（高速）：数据产生和处理速度极快（实时流）。Variety（多样）：数据类型繁多（结构化、半结构化、非结构化）。Value（价值/低价值密度）：海量数据中有价值的信息相对稀疏，需要分析和挖掘。",
    "explanation": "4V是理解大数据的基础框架，考试必考。",
    "level": "A",
    "id": "GEN0472",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "简答题",
    "title": "简述ZooKeeper在HBase中的作用。",
    "options": [],
    "answer": "1.主节点选举：管理HBase集群的HMaster选举，保证只有一个Active Master。2.集群元数据存储：存储HBase的meta表位置（hbase:meta）。3.集群成员管理：跟踪RegionServer的上下线状态。4.配置管理：存储和同步集群配置信息。ZooKeeper是HBase集群的'大脑'。",
    "explanation": "ZooKeeper是分布式协调的核心，HBase强依赖它。",
    "level": "A",
    "id": "GEN0473",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "简答题",
    "title": "简述HBase与关系型数据库的主要区别。",
    "options": [],
    "answer": "数据模型：RDBMS是行式+固定列，HBase是列式+稀疏列。扩展性：RDBMS垂直扩展（加硬件），HBase水平扩展（加节点）。查询方式：RDBMS支持SQL（复杂查询），HBase只支持RowKey的get/scan。事务：RDBMS强ACID，HBase行级原子性。适用场景：RDBMS OLTP事务处理，HBase海量数据实时读写。",
    "explanation": "理解NoSQL与SQL的区别有助于选择合适的存储方案。",
    "level": "B",
    "id": "GEN0474",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "简答题",
    "title": "简述HBase的Region概念及其分裂过程。",
    "options": [],
    "answer": "Region是HBase存储的基本单元，一个表被水平切分为多个Region（按RowKey范围划分）。每个Region由多个Store组成（每个列族一个Store）。当Region数据超过阈值（默认10GB），会自动分裂（split）为两个子Region，分配到不同RegionServer上。分裂过程对客户端透明。",
    "explanation": "Region机制使HBase具备水平扩展能力，类似HDFS的块。",
    "level": "B",
    "id": "GEN0475",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "HBase / ZooKeeper",
    "type": "简答题",
    "title": "简述ZooKeeper如何实现分布式锁。",
    "options": [],
    "answer": "利用ZooKeeper的临时顺序节点：1.所有客户端在指定路径下创建临时顺序节点。2.检查自己是否是序号最小的节点，如果是则获得锁。3.如果不是，监听比自己序号小的前一个节点的删除事件。4.前一个节点释放（连接断开或主动删除），当前客户端获得锁。利用临时节点的特性，客户端崩溃时锁自动释放。",
    "explanation": "分布式锁是ZooKeeper的经典应用场景。",
    "level": "B",
    "id": "GEN0476",
    "topic": "",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "A",
    "title": "用HTML标记语言编写一个简单的网页，网页最基本的结构是（ ）",
    "options": [
      {
        "label": "A",
        "text": "<html><head>…</head><frame>…</frame></html>"
      },
      {
        "label": "B",
        "text": "<html><title>…</title><body>…</body></html>"
      },
      {
        "label": "C",
        "text": "<html><title>…</title><frame>…</frame></html>"
      },
      {
        "label": "D",
        "text": "<html><head>…</head><body>…</body></html>"
      }
    ],
    "answer": "D",
    "explanation": "网页最基本结构是<html><head>…</head><body>…</body></html>。A错在<frame>不是基本结构；B/C错在<title>不能替代<head>作为容器。",
    "topic": "HTML基础结构",
    "id": "GEN0477",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "A",
    "title": "以下（ ）是有序列表标记",
    "options": [
      {
        "label": "A",
        "text": "<ol></ol>"
      },
      {
        "label": "B",
        "text": "<ul></ul>"
      },
      {
        "label": "C",
        "text": "<dl></dl>"
      },
      {
        "label": "D",
        "text": "<li></li>"
      }
    ],
    "answer": "A",
    "explanation": "<ol>是有序列表（ordered list），显示数字编号；<ul>是无序列表（圆点）；<dl>是定义列表；<li>是列表项，不能独立使用。",
    "topic": "HTML常用标签",
    "id": "GEN0478",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "A",
    "title": "以下的HTML中，（ ）是正确引用外部样式表的方法",
    "options": [
      {
        "label": "A",
        "text": "<style src=\"mystyle.css\">"
      },
      {
        "label": "B",
        "text": "<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">"
      },
      {
        "label": "C",
        "text": "<stylesheet>mystyle.css</stylesheet>"
      },
      {
        "label": "D",
        "text": "<style type=\"text/css\">…</style>"
      }
    ],
    "answer": "B",
    "explanation": "<link>标签的rel属性指定关系为stylesheet，href指定CSS文件路径。A的<style>没有src属性；C没有<stylesheet>标签；D是内嵌样式不是外部引用。",
    "topic": "CSS引入方式",
    "id": "GEN0479",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "B",
    "title": "设s1和s2均为字符类型变量，s1=\"JavaScript\"，则将s1中\"S\"赋给s2正确的语句是（ ）",
    "options": [
      {
        "label": "A",
        "text": "s2=\"S\""
      },
      {
        "label": "B",
        "text": "s2=s1.charAt(\"S\")"
      },
      {
        "label": "C",
        "text": "s2=s1.charAt(4)"
      },
      {
        "label": "D",
        "text": "s2=s1.charAt(5)"
      }
    ],
    "answer": "C",
    "explanation": "charAt(index)参数是数字索引（从0开始）。JavaScript中S是第5个字符，索引为4（J=0,a=1,v=2,a=3,S=4）。注意区分大小写！",
    "topic": "JavaScript数据类型",
    "id": "GEN0480",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "A",
    "title": "下面哪个定义样式表正确? ( )",
    "options": [
      {
        "label": "A",
        "text": "{body:color=black(body)}"
      },
      {
        "label": "B",
        "text": "body:color=black"
      },
      {
        "label": "C",
        "text": "body{color:black}"
      },
      {
        "label": "D",
        "text": "{body;color:black}"
      }
    ],
    "answer": "C",
    "explanation": "CSS正确语法：选择器{属性:值}。body是选择器，color:black是声明。A用=号错误，B缺少大括号，D缺少选择器位置。",
    "topic": "CSS选择器",
    "id": "GEN0481",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "B",
    "title": "在下列的选项中，对于表单<input>标签中type描述不正确的是（ ）",
    "options": [
      {
        "label": "A",
        "text": "radio在开发中适合男-女性别单选项使用"
      },
      {
        "label": "B",
        "text": "checkbox为复选框在开发中多用于爱好"
      },
      {
        "label": "C",
        "text": "text为按钮多用于按钮的选择使用"
      },
      {
        "label": "D",
        "text": "password为密文，用于输入密码，用户可以看不到具体输入信息"
      }
    ],
    "answer": "C",
    "explanation": "text是普通文本框，不是按钮！按钮类型是submit（提交按钮）或button（普通按钮）。A/B/D描述都正确。",
    "topic": "HTML表单",
    "id": "GEN0482",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "C",
    "title": "<frameset cols=\"25%,50%,*\" rows=\"50%,*\" border=\"5\"><frame src=\"the_first.html\">…</frameset>观看代码选出正确描述选项（ ）",
    "options": [
      {
        "label": "A",
        "text": "cols=\"25%,50%,*\"将窗口分割成左中右3部分"
      },
      {
        "label": "B",
        "text": "rows=\"50%\"将窗口分割左右两个部分"
      },
      {
        "label": "C",
        "text": "border修饰框架的背景颜色"
      },
      {
        "label": "D",
        "text": "<frame src=\"the_first.html\">框架集中任意一个窗口显示的网页"
      }
    ],
    "answer": "A",
    "explanation": "cols按列分割窗口，25%,50%,*表示三列（左25%、中50%、右剩余）。B错rows是上下分割不是左右；C错border是边框粗细不是背景颜色；D错frame的src指定该框架窗格显示哪个网页。",
    "topic": "HTML标签杂项",
    "id": "GEN0483",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "B",
    "title": "在样式表类型中<link href=\"newstyle.css\" rel=\"stylesheet\" type=\"text/css\">属于哪种类型（ ）",
    "options": [
      {
        "label": "A",
        "text": "行内样式表"
      },
      {
        "label": "B",
        "text": "内嵌样式表"
      },
      {
        "label": "C",
        "text": "外部样式表"
      },
      {
        "label": "D",
        "text": "内部样式表"
      }
    ],
    "answer": "C",
    "explanation": "<link>标签引用外部.css文件，属于外部样式表。行内样式写在元素style属性中，内嵌样式写在<style>标签内。注意区分！",
    "topic": "CSS引入方式",
    "id": "GEN0484",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "A",
    "title": "文字样式属性中叙述错误的是（ ）",
    "options": [
      {
        "label": "A",
        "text": "font-family设置字体"
      },
      {
        "label": "B",
        "text": "font-size设置字号"
      },
      {
        "label": "C",
        "text": "font-weight设置文字效果属性"
      },
      {
        "label": "D",
        "text": "font设置综合字体属性"
      }
    ],
    "answer": "C",
    "explanation": "font-weight设置文字粗细（如bold=700, normal=400），不是\"文字效果\"（文字效果通常指text-decoration如下划线等）。font是综合属性可同时设多个字体属性。",
    "topic": "CSS常用属性",
    "id": "GEN0485",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "B",
    "title": "观看代码分析下列选项叙述正确（ ）: <style> a:link{color:#FF0000;text-decoration:none} a:visited{color:#333} a:hover{text-decoration:none;color:#FFF;background-color:#00F} </style>",
    "options": [
      {
        "label": "A",
        "text": "以上使用的标签选择器对a标签进行修饰"
      },
      {
        "label": "B",
        "text": "以上使用的伪类对a标签进行修饰，伪类使用没有顺序规定"
      },
      {
        "label": "C",
        "text": "以上使用的伪类对超链接进行修饰，伪类使用按照a:link,a:visited,a:hover,a:active的顺序使用"
      },
      {
        "label": "D",
        "text": "以上叙述都正确"
      }
    ],
    "answer": "C",
    "explanation": "a:link/a:visited/a:hover/a:active是伪类选择器（不是标签选择器），必须按LVHA顺序（Link-Visited-Hover-Active），否则可能失效。口诀：LoVe/HAte。",
    "topic": "CSS选择器",
    "id": "GEN0486",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "B",
    "title": "关于JS变量命名约定不正确的是（ ）",
    "options": [
      {
        "label": "A",
        "text": "变量名必须以字母或下划线(_)开头"
      },
      {
        "label": "B",
        "text": "变量名中可以包含数字"
      },
      {
        "label": "C",
        "text": "由于JavaScript区分大小写，所以可用的字母包括A到Z和a到z的字符"
      },
      {
        "label": "D",
        "text": "JS变量可以使用#、&、*等特殊符号"
      }
    ],
    "answer": "D",
    "explanation": "JS变量名只能包含字母、数字、下划线(_)和美元符号($)，不能包含#、&、*等特殊符号。变量名必须以字母、下划线或$开头。",
    "topic": "JavaScript变量声明",
    "id": "GEN0487",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "多选题",
    "level": "A",
    "title": "块级元素包括（ ）",
    "options": [
      {
        "label": "A",
        "text": "<p>"
      },
      {
        "label": "B",
        "text": "<h1>"
      },
      {
        "label": "C",
        "text": "<ul><ol><li>"
      },
      {
        "label": "D",
        "text": "<div><form>"
      }
    ],
    "answer": "ABCD",
    "explanation": "块级元素独占一行，可设宽高。<p>、<h1>~<h6>、<ul>/<ol>/<li>、<div>、<form>都是块级元素。行内元素包括<span>、<a>、<img>、<input>等。",
    "topic": "块级vs行内元素",
    "id": "GEN0488",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "多选题",
    "level": "B",
    "title": "有关Window对象，下列说法正确的是（ ）",
    "options": [
      {
        "label": "A",
        "text": "代表一个浏览器的窗口或者框架"
      },
      {
        "label": "B",
        "text": "是一个文档，链接或历史对象组的顶层对象"
      },
      {
        "label": "C",
        "text": "窗口对象不能设置状态栏默认信息"
      },
      {
        "label": "D",
        "text": "设置窗口左边界的X坐标，可以使用窗口对象的screenX属性"
      }
    ],
    "answer": "ABD",
    "explanation": "Window对象是BOM的顶层对象，代表浏览器窗口/框架。screenX设置窗口X坐标。C错，window.status可以设置状态栏信息。",
    "topic": "JavaScript事件",
    "id": "GEN0489",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "多选题",
    "level": "A",
    "title": "以下选项属于定位的是（ ）",
    "options": [
      {
        "label": "A",
        "text": "position:static静态定位"
      },
      {
        "label": "B",
        "text": "position:relative相对定位"
      },
      {
        "label": "C",
        "text": "position:absolute绝对定位"
      },
      {
        "label": "D",
        "text": "position:fixed固定定位"
      }
    ],
    "answer": "ABCD",
    "explanation": "CSS四大定位方式：static（默认/正常流）、relative（相对自身原位置偏移）、absolute（相对定位祖先/脱离文档流）、fixed（固定视口/脱离文档流）。",
    "topic": "CSS定位position",
    "id": "GEN0490",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "判断题",
    "level": "A",
    "title": "HTML标记符名称通常不区分大小写，但标记符属性名称区分大小写。（ ）",
    "options": [],
    "answer": "错",
    "explanation": "HTML标记符名称和属性名称都不区分大小写。<DIV>和<div>效果相同，<img SRC=\"...\">和<img src=\"...\">效果也相同。但推荐使用小写（XHTML标准）。",
    "topic": "HTML基础结构",
    "id": "GEN0491",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "判断题",
    "level": "A",
    "title": "所有的HTML标记符都包括开始标记符和结束标记符。（ ）",
    "options": [],
    "answer": "错",
    "explanation": "自闭合标签（空元素）没有结束标签：<br>、<img>、<input>、<hr>、<meta>、<link>等。它们不需要</...>闭合。",
    "topic": "HTML基础结构",
    "id": "GEN0492",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "判断题",
    "level": "A",
    "title": "TITLE标记符通常位于BODY标记符之间。（ ）",
    "options": [],
    "answer": "错",
    "explanation": "<title>标签必须放在<head>标签内，用于定义浏览器标签栏显示的标题文字。放在<body>内是错误的。",
    "topic": "HTML基础结构",
    "id": "GEN0493",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "判断题",
    "level": "B",
    "title": "title标记符和title属性的作用是相同的。（ ）",
    "options": [],
    "answer": "错",
    "explanation": "<title>标签定义整个页面的标题（显示在浏览器标签栏）；title属性是元素的提示文字（鼠标悬停时显示tooltip）。两者作用完全不同。",
    "topic": "HTML基础结构",
    "id": "GEN0494",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "判断题",
    "level": "B",
    "title": "HR标记符的size属性用于指定水平线的粗细。（ ）",
    "options": [],
    "answer": "对",
    "explanation": "<hr>标签的size属性指定水平线的粗细（高度），单位为像素。如<hr size=\"5\">表示5像素粗的水平线。",
    "topic": "HTML常用标签",
    "id": "GEN0495",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "填空题",
    "level": "A",
    "title": "在js中，调用浏览器弹出警告框，使用的是window对象的（ ）方法",
    "options": [],
    "answer": "alert()",
    "explanation": "window.alert(\"消息\")弹出带确定按钮的警告对话框。window可以省略，直接写alert()。这是JS最基础的浏览器交互方法。",
    "topic": "JavaScript事件",
    "id": "GEN0496",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "填空题",
    "level": "B",
    "title": "（ ）窗口显示提示信息和两个按钮Yes/No，如果点击Yes返回true，否则为false",
    "options": [],
    "answer": "confirm()",
    "explanation": "window.confirm(\"提示信息\")弹出带确定和取消按钮的确认框。点击确定返回true，取消返回false。常用于删除确认等场景。",
    "topic": "JavaScript事件",
    "id": "GEN0497",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "填空题",
    "level": "B",
    "title": "（ ）窗口获取用户的输入，message为提示信息，default为默认值",
    "options": [],
    "answer": "prompt()",
    "explanation": "window.prompt(\"提示信息\", \"默认值\")弹出输入对话框，用户输入内容后返回字符串；点击取消返回null。",
    "topic": "JavaScript事件",
    "id": "GEN0498",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "填空题",
    "level": "A",
    "title": "改变网页结构的DOM方法中创建新的元素节点方法（ ）",
    "options": [],
    "answer": "document.createElement()",
    "explanation": "document.createElement(\"标签名\")创建新的HTML元素节点。创建后还需用appendChild()或insertBefore()将其插入DOM树中才能显示。",
    "topic": "DOM操作",
    "id": "GEN0499",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "简答题",
    "level": "B",
    "title": "列举DOM中节点的类型并做简单表述",
    "options": [],
    "answer": "DOM节点主要类型：①元素节点（Element Node）- HTML标签，如<div>、<p>，nodeType=1；②属性节点（Attribute Node）- 元素的属性，如id、class，nodeType=2；③文本节点（Text Node）- 标签内的文字内容，nodeType=3；④注释节点（Comment Node）- HTML注释<!-- -->，nodeType=8；⑤文档节点（Document Node）- 整个HTML文档，nodeType=9。最常用的是元素节点和文本节点。",
    "explanation": "DOM将HTML文档建模为节点树，每种节点有nodeType属性标识类型。操作DOM本质就是增删改查这些节点。",
    "topic": "DOM操作",
    "id": "GEN0500",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "简答题",
    "level": "A",
    "title": "简述JavaScript语言的基本特点",
    "options": [],
    "answer": "①解释型脚本语言：不需要编译，浏览器直接解释执行；②弱类型/动态类型：变量声明时不需要指定类型，运行时自动推断；③基于对象：支持内置对象（Date、Math、Array等）和自定义对象；④事件驱动：通过事件（onclick、onsubmit等）响应用户操作；⑤跨平台：只要有浏览器就能运行，与操作系统无关；⑥区分大小写：变量名myVar和myvar是不同的。",
    "explanation": "JavaScript是Web前端三大核心技术之一（HTML+CSS+JS），负责页面交互行为。理解其基本特点有助于正确编写代码。",
    "topic": "JavaScript变量声明",
    "id": "GEN0501",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "程序题",
    "level": "A",
    "title": "使用JavaScript对用户注册进行校验。要求：1）两次密码输入相同 2）密码不能输入空 3）验证通过使用document.write打印\"<h2>注册成功！欢迎\"+username+\"</h2>\" 4）验证不通过用alert提示。表单name=\"form01\"，字段username、pass1、pass2。请补充check()函数实现代码",
    "options": [],
    "answer": "function check(){ var username=document.form01.username.value; var pass1=document.form01.pass1.value; var pass2=document.form01.pass2.value; if(pass1==\"\"){ alert(\"密码不能为空！请输入密码：\"); return false; } if(pass1!=pass2){ alert(\"密码有误！请检查密码和确认密码输入是否一致！\"); return false; } document.write(\"<h2>注册成功！欢迎\"+username+\"</h2>\"); return false; }",
    "explanation": "表单验证三步：①获取表单值(document.form名.字段名.value) ②if判断+alert提示+return false ③验证通过执行后续操作。注意onsubmit需return check()，return false阻止表单提交。此题要求只验证密码（不验证用户名空），注意审题！",
    "topic": "表单验证",
    "id": "GEN0502",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "程序题",
    "level": "A",
    "title": "【2025-2026 A卷】使用CSS修改页面样式。HTML含上部(img+form)、主体左侧(#mainLeft+目录)、主体右侧(#mainRight+.vip新闻列表)。要求：1）元素选择器设置图片宽度100px 2）类选择器设置.vip字体颜色蓝色、字号18px 3）ID选择器设置#mainLeft宽度240px、高度800px。请写出test.css",
    "options": [],
    "answer": "img { width: 100px; }\n.vip { color: blue; font-size: 18px; }\n#mainLeft { width: 240px; height: 800px; }",
    "explanation": "CSS编程题固定模板：①元素选择器直接写标签名(img) ②类选择器前面加.(.vip) ③ID选择器前面加#(#mainLeft)。属性值必须带单位px！注意审题：本题是宽度100px不是高度。",
    "topic": "CSS编程题实操",
    "id": "GEN0503",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "程序题",
    "level": "A",
    "title": "【2025-2026 A卷】使用JavaScript对用户登录进行校验。要求：1）用户名和密码都不能空 2）两次密码一致 3）验证通过document.write打印\"<h2>登录成功！欢迎您，\"+username+\"</h2>\"。表单name=\"form01\"，字段username、pass1、pass2。onsubmit=\"check()\"，请补充check()实现",
    "options": [],
    "answer": "function check(){ var username=document.form01.username.value; var pass1=document.form01.pass1.value; var pass2=document.form01.pass2.value; if(username==\"\"){ alert(\"用户名不能为空！请输入用户名：\"); return false; } if(pass1==\"\"){ alert(\"密码不能为空！请输入密码：\"); return false; } if(pass1!=pass2){ alert(\"密码有误！请检查密码和确认密码输入是否一致！\"); return false; } document.write(\"<h2>登录成功！欢迎您，\"+username+\"</h2>\"); return false; }",
    "explanation": "与注册版区别：多了用户名非空验证！三步走：取表单值→if判空/不一致→alert+return false→通过后document.write输出。return false同时阻止表单提交。",
    "topic": "表单验证",
    "id": "GEN0504",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "程序题",
    "level": "A",
    "title": "【2025-2026 B卷】使用CSS修改页面样式。HTML含头部(img+form)、主体左侧(#sidebar+商品分类)、主体右侧(#content+.hot热销商品)。要求：1）元素选择器设置图片高度80px 2）类选择器设置.hot字体颜色红色、字号20px 3）ID选择器设置#sidebar宽度300px、高度600px。请写出style.css",
    "options": [],
    "answer": "img { height: 80px; }\n.hot { color: red; font-size: 20px; }\n#sidebar { width: 300px; height: 600px; }",
    "explanation": "B卷CSS编程题与A卷模板相同但数值不同：①图片设height不是width ②颜色红色不是蓝色 ③字号20px不是18px ④左侧宽度300px不是240px。考试注意审题！",
    "topic": "CSS编程题实操",
    "id": "GEN0505",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "程序题",
    "level": "A",
    "title": "【2025-2026 B卷】使用JavaScript对用户登录进行校验。要求同A卷：1）用户名和密码都不能空 2）两次密码一致 3）验证通过打印欢迎信息。表单name=\"form01\"，字段username、pass1、pass2。请补充check()函数实现代码",
    "options": [],
    "answer": "function check(){ var username=document.form01.username.value; var pass1=document.form01.pass1.value; var pass2=document.form01.pass2.value; if(username==\"\"){ alert(\"用户名不能为空！请输入用户名：\"); return false; } if(pass1==\"\"){ alert(\"密码不能为空！请输入密码：\"); return false; } if(pass1!=pass2){ alert(\"密码有误！请检查密码和确认密码输入是否一致！\"); return false; } document.write(\"<h2>登录成功！欢迎您，\"+username+\"</h2>\"); return false; }",
    "explanation": "JS表单验证标准答案模板。核心考点：①document.formName.fieldName.value获取值 ②字符串比较用==或=== ③alert弹提示 ④return false阻止提交 ⑤document.write输出结果。此题15分必须拿满！",
    "topic": "表单验证",
    "id": "GEN0506",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "A",
    "title": "在HTML表格中，colspan属性的作用是（ ）",
    "options": [
      {
        "label": "A",
        "text": "合并列"
      },
      {
        "label": "B",
        "text": "合并行"
      },
      {
        "label": "C",
        "text": "设置列宽"
      },
      {
        "label": "D",
        "text": "设置边框"
      }
    ],
    "answer": "A",
    "explanation": "colspan(column span)跨列合并单元格，rowspan跨行合并。如<td colspan=\"2\">表示该单元格横跨2列。",
    "topic": "HTML表格",
    "id": "GEN0507",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "A",
    "title": "在HTML表格中，rowspan属性的作用是（ ）",
    "options": [
      {
        "label": "A",
        "text": "合并列"
      },
      {
        "label": "B",
        "text": "合并行"
      },
      {
        "label": "C",
        "text": "设置行高"
      },
      {
        "label": "D",
        "text": "设置边框"
      }
    ],
    "answer": "B",
    "explanation": "rowspan(row span)跨行合并单元格。常与colspan对比考查，注意区分。",
    "topic": "HTML表格",
    "id": "GEN0508",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "B",
    "title": "关于iframe标签，以下说法正确的是（ ）",
    "options": [
      {
        "label": "A",
        "text": "iframe是内联框架，可在页面中嵌入另一个HTML页面"
      },
      {
        "label": "B",
        "text": "iframe只能放在frameset中使用"
      },
      {
        "label": "C",
        "text": "iframe无法设置宽高"
      },
      {
        "label": "D",
        "text": "iframe与frame完全相同"
      }
    ],
    "answer": "A",
    "explanation": "iframe是内联框架，比frameset更灵活，可在页面任意位置嵌入其他页面。frame只能在frameset中使用，iframe可单独使用。",
    "topic": "HTML表格",
    "id": "GEN0509",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "判断题",
    "level": "B",
    "title": "HTML表格中，<th>标签定义的单元格文字默认以粗体居中显示。（ ）",
    "options": [],
    "answer": "对",
    "explanation": "<th>(table header)表头单元格默认样式为粗体+居中。必须放在<tr>标签内。",
    "topic": "HTML表格",
    "id": "GEN0510",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "B",
    "title": "HTML中，<label>标签的for属性用于（ ）",
    "options": [
      {
        "label": "A",
        "text": "关联表单控件，点击label自动聚焦对应控件"
      },
      {
        "label": "B",
        "text": "设置标签文字颜色"
      },
      {
        "label": "C",
        "text": "指定表单提交地址"
      },
      {
        "label": "D",
        "text": "设置标签字体大小"
      }
    ],
    "answer": "A",
    "explanation": "for属性值对应控件的id，实现点击标签文字自动聚焦/激活对应控件，提升表单可访问性。",
    "topic": "HTML表单",
    "id": "GEN0511",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "B",
    "title": "HTML表单中，用于对表单控件进行分组的标签是（ ）",
    "options": [
      {
        "label": "A",
        "text": "<fieldset>配合<legend>"
      },
      {
        "label": "B",
        "text": "<group>配合<name>"
      },
      {
        "label": "C",
        "text": "<div>配合<span>"
      },
      {
        "label": "D",
        "text": "<form>配合<label>"
      }
    ],
    "answer": "A",
    "explanation": "<fieldset>绘制分组边框，<legend>定义分组标题。如注册表单中\"基本信息\"和\"详细信息\"分组。",
    "topic": "HTML表单",
    "id": "GEN0512",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "C",
    "title": "表单中上传文件时，form的enctype属性应设置为（ ）",
    "options": [
      {
        "label": "A",
        "text": "multipart/form-data"
      },
      {
        "label": "B",
        "text": "application/x-www-form-urlencoded"
      },
      {
        "label": "C",
        "text": "text/plain"
      },
      {
        "label": "D",
        "text": "application/json"
      }
    ],
    "answer": "A",
    "explanation": "文件上传必须用multipart/form-data编码类型。默认值是application/x-www-form-urlencoded。text/plain用于纯文本。",
    "topic": "HTML表单",
    "id": "GEN0513",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "填空题",
    "level": "B",
    "title": "HTML中，多行文本输入框的标签是（ ）",
    "options": [],
    "answer": "textarea",
    "explanation": "<textarea rows=\"行数\" cols=\"列数\">默认文字</textarea>。不同于<input type=\"text\">单行输入，textarea支持多行文字输入。",
    "topic": "HTML表单",
    "id": "GEN0514",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "A",
    "title": "CSS中，div p { color: red; } 表示（ ）",
    "options": [
      {
        "label": "A",
        "text": "div内部所有后代p元素文字变红"
      },
      {
        "label": "B",
        "text": "div的直接子元素p变红"
      },
      {
        "label": "C",
        "text": "div和p都变红"
      },
      {
        "label": "D",
        "text": "div后面的兄弟p变红"
      }
    ],
    "answer": "A",
    "explanation": "空格是后代选择器，匹配div内所有层级的p元素。div>p（子元素选择器）只匹配直接子代。注意区分！",
    "topic": "CSS选择器",
    "id": "GEN0515",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "B",
    "title": "CSS中，div > p 表示（ ）",
    "options": [
      {
        "label": "A",
        "text": "div的直接子元素p"
      },
      {
        "label": "B",
        "text": "div的所有后代p"
      },
      {
        "label": "C",
        "text": "div和p兄弟关系"
      },
      {
        "label": "D",
        "text": "div前面相邻的p"
      }
    ],
    "answer": "A",
    "explanation": ">(子元素选择器)只匹配直接子代。而空格(后代选择器)匹配所有后代。h1+p是相邻兄弟选择器。",
    "topic": "CSS选择器",
    "id": "GEN0516",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "多选题",
    "level": "B",
    "title": "以下属于CSS选择器的有（ ）",
    "options": [
      {
        "label": "A",
        "text": "标签选择器"
      },
      {
        "label": "B",
        "text": "类选择器"
      },
      {
        "label": "C",
        "text": "ID选择器"
      },
      {
        "label": "D",
        "text": "后代选择器"
      }
    ],
    "answer": "ABCD",
    "explanation": "四种都是CSS选择器类型。此外还有子元素选择器(>)、相邻兄弟(+)、属性选择器([])、伪类(:)等。",
    "topic": "CSS选择器",
    "id": "GEN0517",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "判断题",
    "level": "B",
    "title": "CSS中，子元素可以继承父元素的所有样式属性。（ ）",
    "options": [],
    "answer": "错",
    "explanation": "CSS继承不是全部属性！文字相关属性(color/font-size/font-family等)可继承，盒子相关属性(width/height/margin/padding/border)不可继承。",
    "topic": "CSS选择器",
    "id": "GEN0518",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "C",
    "title": "CSS中，@import和<link>引入外部样式表的区别，正确的是（ ）",
    "options": [
      {
        "label": "A",
        "text": "<link>在页面加载时同时加载，@import在页面加载完后加载"
      },
      {
        "label": "B",
        "text": "@import比<link>加载更快"
      },
      {
        "label": "C",
        "text": "@import没有兼容性问题"
      },
      {
        "label": "D",
        "text": "两者完全一样"
      }
    ],
    "answer": "A",
    "explanation": "<link>是HTML标签，并行加载；@import是CSS语法，等CSS文件下载后才加载，可能导致无样式闪烁(FOUC)。推荐使用<link>。",
    "topic": "CSS引入方式",
    "id": "GEN0519",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "B",
    "title": "CSS中，border-style属性不可以设置为（ ）",
    "options": [
      {
        "label": "A",
        "text": "solid（实线）"
      },
      {
        "label": "B",
        "text": "dashed（虚线）"
      },
      {
        "label": "C",
        "text": "double（双线）"
      },
      {
        "label": "D",
        "text": "block（块级）"
      }
    ],
    "answer": "D",
    "explanation": "border-style可取值：none/solid/dashed/dotted/double/groove/ridge/inset/outset。\"block\"是display属性值，不是border样式。",
    "topic": "CSS盒模型",
    "id": "GEN0520",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "判断题",
    "level": "A",
    "title": "标准文档流中，块级元素独占一行，行内元素在同一行内从左到右排列。（ ）",
    "options": [],
    "answer": "对",
    "explanation": "这是标准文档流的基本规则。块级(div/p/h1)独占一行；行内(span/a/img)共享一行。脱离文档流：float/absolute/fixed。",
    "topic": "CSS定位position",
    "id": "GEN0521",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "B",
    "title": "CSS3中，:nth-child(2n)选择器的作用是（ ）",
    "options": [
      {
        "label": "A",
        "text": "选择所有偶数位置的子元素"
      },
      {
        "label": "B",
        "text": "选择第2个子元素"
      },
      {
        "label": "C",
        "text": "选择所有子元素"
      },
      {
        "label": "D",
        "text": "选择前2个子元素"
      }
    ],
    "answer": "A",
    "explanation": ":nth-child(2n)选偶数位（2,4,6...），等价于:nth-child(even)。:nth-child(2n+1)选奇数位（1,3,5...），等价:nth-child(odd)。:nth-child(1)只选第1个。",
    "topic": "CSS3",
    "id": "GEN0522",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "B",
    "title": "CSS3中，text-overflow:ellipsis实现文字溢出显示省略号，需要配合哪些属性？（ ）",
    "options": [
      {
        "label": "A",
        "text": "overflow:hidden 和 white-space:nowrap"
      },
      {
        "label": "B",
        "text": "display:none"
      },
      {
        "label": "C",
        "text": "visibility:hidden"
      },
      {
        "label": "D",
        "text": "单独使用即可"
      }
    ],
    "answer": "A",
    "explanation": "text-overflow:ellipsis必须配合overflow:hidden（隐藏溢出）和white-space:nowrap（禁止换行）才能生效。三者缺一不可。",
    "topic": "CSS3",
    "id": "GEN0523",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "B",
    "title": "CSS3中，text-shadow属性的正确语法是（ ）",
    "options": [
      {
        "label": "A",
        "text": "text-shadow:水平偏移 垂直偏移 模糊半径 颜色"
      },
      {
        "label": "B",
        "text": "text-shadow:颜色 大小"
      },
      {
        "label": "C",
        "text": "text-shadow:粗细 颜色"
      },
      {
        "label": "D",
        "text": "text-shadow:字体 颜色"
      }
    ],
    "answer": "A",
    "explanation": "如 text-shadow:2px 2px 4px #000 表示向右2px、向下2px、模糊4px、黑色阴影。多个阴影用逗号分隔。",
    "topic": "CSS3",
    "id": "GEN0524",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "A",
    "title": "CSS3中，使用RGBA设置半透明红色背景的正确写法是（ ）",
    "options": [
      {
        "label": "A",
        "text": "background-color:rgba(255,0,0,0.5)"
      },
      {
        "label": "B",
        "text": "background-color:rgb(255,0,0)"
      },
      {
        "label": "C",
        "text": "background-color:red"
      },
      {
        "label": "D",
        "text": "background-color:#ff0000"
      }
    ],
    "answer": "A",
    "explanation": "RGBA在RGB基础上加Alpha(透明度)通道，值0(完全透明)~1(完全不透明)。0.5即半透明。A/B/C都是完全不透明。",
    "topic": "CSS3",
    "id": "GEN0525",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "B",
    "title": "CSS3中，选择所有class属性以\"btn-\"开头的元素，正确写法是（ ）",
    "options": [
      {
        "label": "A",
        "text": "[class^=\"btn-\"]"
      },
      {
        "label": "B",
        "text": "[class$=\"btn-\"]"
      },
      {
        "label": "C",
        "text": "[class*=\"btn-\"]"
      },
      {
        "label": "D",
        "text": "class^=\"btn-\""
      }
    ],
    "answer": "A",
    "explanation": "[att^=val]匹配属性值以val开头；[att$=val]匹配以val结尾；[att*=val]匹配包含val。注意必须用方括号！",
    "topic": "CSS3",
    "id": "GEN0526",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "填空题",
    "level": "B",
    "title": "CSS3中，选择class属性值包含\"nav\"的所有元素，选择器写法是（ ）",
    "options": [],
    "answer": "[class*=\"nav\"]",
    "explanation": "[att*=val]是CSS3属性选择器，匹配属性值中包含指定字符串的元素。^=匹配开头，$=匹配结尾。",
    "topic": "CSS3",
    "id": "GEN0527",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "B",
    "title": "CSS3中，:not(p)选择器的含义是（ ）",
    "options": [
      {
        "label": "A",
        "text": "选择所有不是<p>的元素"
      },
      {
        "label": "B",
        "text": "选择所有<p>元素"
      },
      {
        "label": "C",
        "text": "选择p的父元素"
      },
      {
        "label": "D",
        "text": "选择p后面的元素"
      }
    ],
    "answer": "A",
    "explanation": ":not(selector)是否定伪类，排除匹配selector的元素。如:not(.active)选择所有没有active类的元素。",
    "topic": "CSS3",
    "id": "GEN0528",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "判断题",
    "level": "B",
    "title": "CSS3中，:checked伪类用于匹配被选中的单选按钮或复选框。（ ）",
    "options": [],
    "answer": "对",
    "explanation": ":checked匹配radio/checkbox选中状态。:enabled匹配可用元素，:disabled匹配禁用元素，都是CSS3 UI伪类。",
    "topic": "CSS3",
    "id": "GEN0529",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "A",
    "title": "JavaScript中，Math.random()返回的随机数范围是（ ）",
    "options": [
      {
        "label": "A",
        "text": "[0, 1) 即大于等于0小于1"
      },
      {
        "label": "B",
        "text": "[0, 1] 包括1"
      },
      {
        "label": "C",
        "text": "(0, 1) 不包括0"
      },
      {
        "label": "D",
        "text": "任意整数"
      }
    ],
    "answer": "A",
    "explanation": "Math.random()返回[0,1)之间的浮点数。生成min~max随机整数：Math.floor(Math.random()*(max-min+1))+min。",
    "topic": "JavaScript数据类型",
    "id": "GEN0530",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "A",
    "title": "JavaScript中，Math.floor(3.7)的返回值是（ ）",
    "options": [
      {
        "label": "A",
        "text": "3"
      },
      {
        "label": "B",
        "text": "4"
      },
      {
        "label": "C",
        "text": "3.7"
      },
      {
        "label": "D",
        "text": "3.5"
      }
    ],
    "answer": "A",
    "explanation": "Math.floor()向下取整（往小）。Math.ceil(3.2)→4向上取整。Math.round(3.5)→4四舍五入。Math.round(3.4)→3。",
    "topic": "JavaScript数据类型",
    "id": "GEN0531",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "B",
    "title": "JavaScript中，Math.ceil(3.2)的返回值是（ ）",
    "options": [
      {
        "label": "A",
        "text": "4"
      },
      {
        "label": "B",
        "text": "3"
      },
      {
        "label": "C",
        "text": "3.2"
      },
      {
        "label": "D",
        "text": "3.5"
      }
    ],
    "answer": "A",
    "explanation": "Math.ceil()向上取整（往大），ceil=天花板。对比：floor(3.7)→3（向下），ceil(3.2)→4（向上），round(3.5)→4（四舍五入）。",
    "topic": "JavaScript数据类型",
    "id": "GEN0532",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "填空题",
    "level": "B",
    "title": "JavaScript中，获取数组长度的属性是（ ）",
    "options": [],
    "answer": "length",
    "explanation": "arr.length返回数组元素个数。注意length是属性不是方法（没有括号）。字符串也有length属性。",
    "topic": "JavaScript数据类型",
    "id": "GEN0533",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "多选题",
    "level": "A",
    "title": "以下哪些是JavaScript中Array（数组）的方法？（ ）",
    "options": [
      {
        "label": "A",
        "text": "push()向末尾添加元素"
      },
      {
        "label": "B",
        "text": "pop()删除末尾元素"
      },
      {
        "label": "C",
        "text": "sort()排序"
      },
      {
        "label": "D",
        "text": "reverse()反转"
      }
    ],
    "answer": "ABCD",
    "explanation": "还有：concat()合并、join()连接为字符串、slice()截取、splice()增删改、indexOf()查找。全部都是数组常用方法。",
    "topic": "JavaScript数据类型",
    "id": "GEN0534",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "B",
    "title": "JavaScript中，arr.join(\"-\")的作用是（ ）",
    "options": [
      {
        "label": "A",
        "text": "用-连接数组元素返回字符串"
      },
      {
        "label": "B",
        "text": "向数组添加元素-"
      },
      {
        "label": "C",
        "text": "用-替换数组元素"
      },
      {
        "label": "D",
        "text": "拆分字符串为数组"
      }
    ],
    "answer": "A",
    "explanation": "join(分隔符)将数组元素连接成字符串。如[\"a\",\"b\",\"c\"].join(\"-\")→\"a-b-c\"。split()是反向操作：字符串→数组。",
    "topic": "JavaScript数据类型",
    "id": "GEN0535",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "B",
    "title": "JavaScript中，str.split(\",\")的作用是（ ）",
    "options": [
      {
        "label": "A",
        "text": "用逗号将字符串分割成数组"
      },
      {
        "label": "B",
        "text": "用逗号连接数组"
      },
      {
        "label": "C",
        "text": "删除字符串中的逗号"
      },
      {
        "label": "D",
        "text": "查找逗号位置"
      }
    ],
    "answer": "A",
    "explanation": "split(分隔符)将字符串按分隔符拆分为数组。join()是反向操作：数组→字符串。如\"a,b,c\".split(\",\")→[\"a\",\"b\",\"c\"]。",
    "topic": "JavaScript数据类型",
    "id": "GEN0536",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "B",
    "title": "JavaScript中，str.indexOf(\"abc\")的作用是（ ）",
    "options": [
      {
        "label": "A",
        "text": "返回\"abc\"首次出现的位置索引，找不到返回-1"
      },
      {
        "label": "B",
        "text": "返回\"abc\"最后一次出现的位置"
      },
      {
        "label": "C",
        "text": "将\"abc\"插入字符串"
      },
      {
        "label": "D",
        "text": "删除字符串中的\"abc\""
      }
    ],
    "answer": "A",
    "explanation": "indexOf(子串)返回首次出现位置（从0开始），未找到返回-1。lastIndexOf()返回最后出现位置。注意返回值是数字索引。",
    "topic": "JavaScript数据类型",
    "id": "GEN0537",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "填空题",
    "level": "B",
    "title": "JavaScript中，将字符串全部转为小写的String方法是（ ）",
    "options": [],
    "answer": "toLowerCase()",
    "explanation": "str.toLowerCase()转为全小写，str.toUpperCase()转为全大写。两者都不修改原字符串（字符串是不可变的），返回新字符串。",
    "topic": "JavaScript数据类型",
    "id": "GEN0538",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "B",
    "title": "JavaScript中，new Date().getMonth()返回1月对应的值是（ ）",
    "options": [
      {
        "label": "A",
        "text": "0"
      },
      {
        "label": "B",
        "text": "1"
      },
      {
        "label": "C",
        "text": "12"
      },
      {
        "label": "D",
        "text": "-1"
      }
    ],
    "answer": "A",
    "explanation": "getMonth()返回值0~11（0=1月...11=12月）。getDay()返回星期0~6（0=周日）。getFullYear()返回四位年份。注意：getMonth从0开始！",
    "topic": "JavaScript数据类型",
    "id": "GEN0539",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "B",
    "title": "JavaScript中，parseInt(\"10\", 2)的返回值是（ ）",
    "options": [
      {
        "label": "A",
        "text": "2"
      },
      {
        "label": "B",
        "text": "10"
      },
      {
        "label": "C",
        "text": "1"
      },
      {
        "label": "D",
        "text": "NaN"
      }
    ],
    "answer": "A",
    "explanation": "parseInt(string, radix)按指定进制(2~36)解析字符串。\"10\"按二进制→十进制2。parseInt(\"FF\",16)→255(十六进制)。不指定radix可能误解析。",
    "topic": "JavaScript数据类型",
    "id": "GEN0540",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "B",
    "title": "JavaScript中，isNaN(\"hello\")的返回值是（ ）",
    "options": [
      {
        "label": "A",
        "text": "true"
      },
      {
        "label": "B",
        "text": "false"
      },
      {
        "label": "C",
        "text": "\"hello\""
      },
      {
        "label": "D",
        "text": "undefined"
      }
    ],
    "answer": "A",
    "explanation": "isNaN()判断值是否为NaN(非数字)。\"hello\"无法转换为数字→true。isNaN(\"123\")→false(可转为数字123)。注意NaN===NaN→false！",
    "topic": "JavaScript数据类型",
    "id": "GEN0541",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "A",
    "title": "JavaScript中，addEventListener方法的第三个参数通常设置为（ ）",
    "options": [
      {
        "label": "A",
        "text": "false（冒泡阶段处理）"
      },
      {
        "label": "B",
        "text": "true（捕获阶段处理）"
      },
      {
        "label": "C",
        "text": "元素的id"
      },
      {
        "label": "D",
        "text": "事件类型"
      }
    ],
    "answer": "A",
    "explanation": "addEventListener(event, handler, useCapture)。第三个参数false（默认）在冒泡阶段处理事件，true在捕获阶段处理。通常使用false。",
    "topic": "JavaScript事件",
    "id": "GEN0542",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "多选题",
    "level": "B",
    "title": "以下哪些是JavaScript中注册事件处理函数的方式？（ ）",
    "options": [
      {
        "label": "A",
        "text": "HTML标签属性：<div onclick=\"func()\">"
      },
      {
        "label": "B",
        "text": "JS对象属性：element.onclick=function(){}"
      },
      {
        "label": "C",
        "text": "addEventListener方法"
      },
      {
        "label": "D",
        "text": "@Event注解"
      }
    ],
    "answer": "ABC",
    "explanation": "三种注册事件方式：①HTML标签onclick属性 ②JS对象属性赋值 ③addEventListener。方式③最灵活，支持绑定多个处理函数。",
    "topic": "JavaScript事件",
    "id": "GEN0543",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "A",
    "title": "当用户点击页面元素时，鼠标事件的触发顺序是（ ）",
    "options": [
      {
        "label": "A",
        "text": "mousedown → mouseup → click"
      },
      {
        "label": "B",
        "text": "click → mousedown → mouseup"
      },
      {
        "label": "C",
        "text": "mouseup → click → mousedown"
      },
      {
        "label": "D",
        "text": "mousedown → click → mouseup"
      }
    ],
    "answer": "A",
    "explanation": "点击顺序：按下(mousedown)→松开(mouseup)→完成点击(click)。理解这个顺序有助于调试事件冲突问题。",
    "topic": "JavaScript事件",
    "id": "GEN0544",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "判断题",
    "level": "B",
    "title": "JavaScript中，onchange事件在表单元素内容改变后立即触发。（ ）",
    "options": [],
    "answer": "错",
    "explanation": "onchange在内容改变且失去焦点后才触发，不是立即触发。实时监测需用oninput事件（每次输入都触发）。",
    "topic": "JavaScript事件",
    "id": "GEN0545",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "填空题",
    "level": "A",
    "title": "HTML中，页面加载完成后自动执行的JavaScript代码应写在（ ）事件中",
    "options": [],
    "answer": "onload",
    "explanation": "window.onload或<body onload=\"...\">在页面全部加载完（含图片/CSS）后触发。确保DOM元素已存在再操作。",
    "topic": "JavaScript事件",
    "id": "GEN0546",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "A",
    "title": "DOM中，parentNode属性的作用是（ ）",
    "options": [
      {
        "label": "A",
        "text": "获取当前节点的父节点"
      },
      {
        "label": "B",
        "text": "获取当前节点的第一个子节点"
      },
      {
        "label": "C",
        "text": "获取当前节点的下一个兄弟节点"
      },
      {
        "label": "D",
        "text": "获取当前节点的上一个兄弟节点"
      }
    ],
    "answer": "A",
    "explanation": "DOM关系：parentNode(父)、childNodes(所有子)、firstChild/lastChild(首/末子)、nextSibling/previousSibling(相邻兄弟)。",
    "topic": "DOM操作",
    "id": "GEN0547",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "B",
    "title": "DOM中，节点类型为元素节点时，nodeType的值为（ ）",
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "2"
      },
      {
        "label": "C",
        "text": "3"
      },
      {
        "label": "D",
        "text": "8"
      }
    ],
    "answer": "A",
    "explanation": "nodeType值：1=元素节点(<div>)，2=属性节点，3=文本节点，8=注释节点(<!-- -->)，9=文档节点(document)。",
    "topic": "DOM操作",
    "id": "GEN0548",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "B",
    "title": "JavaScript中，document.createElement(\"div\")的作用是（ ）",
    "options": [
      {
        "label": "A",
        "text": "创建一个新的div元素节点（不在页面中）"
      },
      {
        "label": "B",
        "text": "在页面中创建一个div"
      },
      {
        "label": "C",
        "text": "查找所有div元素"
      },
      {
        "label": "D",
        "text": "删除所有div元素"
      }
    ],
    "answer": "A",
    "explanation": "createElement仅创建节点（在内存中），需用appendChild()或insertBefore()插入DOM树才能在页面显示。",
    "topic": "DOM操作",
    "id": "GEN0549",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "多选题",
    "level": "A",
    "title": "以下哪些是DOM中对元素节点的操作方法？（ ）",
    "options": [
      {
        "label": "A",
        "text": "appendChild()添加子节点"
      },
      {
        "label": "B",
        "text": "removeChild()删除子节点"
      },
      {
        "label": "C",
        "text": "createElement()创建节点"
      },
      {
        "label": "D",
        "text": "getElementById()获取节点"
      }
    ],
    "answer": "ABCD",
    "explanation": "DOM操作四件套：查找(getElementById/querySelector)、创建(createElement)、添加(appendChild/insertBefore)、删除(removeChild)。还有replaceChild替换、getAttribute/setAttribute属性操作。",
    "topic": "DOM操作",
    "id": "GEN0550",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "B",
    "title": "BOM中，window.history.back()的作用是（ ）",
    "options": [
      {
        "label": "A",
        "text": "返回上一页"
      },
      {
        "label": "B",
        "text": "前进到下一页"
      },
      {
        "label": "C",
        "text": "刷新当前页"
      },
      {
        "label": "D",
        "text": "关闭浏览器"
      }
    ],
    "answer": "A",
    "explanation": "history.back()=浏览器后退按钮。history.forward()前进。history.go(-2)后退2页。location.reload()刷新页面。",
    "topic": "JavaScript事件",
    "id": "GEN0551",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "B",
    "title": "JavaScript中，window.location.href的作用是（ ）",
    "options": [
      {
        "label": "A",
        "text": "获取或设置当前页面的完整URL地址"
      },
      {
        "label": "B",
        "text": "获取浏览器名称"
      },
      {
        "label": "C",
        "text": "获取屏幕宽度"
      },
      {
        "label": "D",
        "text": "获取页面标题"
      }
    ],
    "answer": "A",
    "explanation": "location.href可读取当前URL，也可赋值跳转：location.href=\"http://example.com\"。location.reload()刷新，location.replace()替换不产生历史记录。",
    "topic": "JavaScript事件",
    "id": "GEN0552",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "填空题",
    "level": "B",
    "title": "JavaScript中，设置定时器延迟执行一次代码使用window对象的（ ）方法",
    "options": [],
    "answer": "setTimeout()",
    "explanation": "setTimeout(fn, ms)延迟ms毫秒后执行fn一次。setInterval(fn, ms)每隔ms毫秒重复执行。clearTimeout()/clearInterval()取消定时器。",
    "topic": "JavaScript事件",
    "id": "GEN0553",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "填空题",
    "level": "B",
    "title": "JavaScript中，定时重复执行代码使用window对象的（ ）方法",
    "options": [],
    "answer": "setInterval()",
    "explanation": "setInterval(fn, 1000)每隔1秒执行一次fn。与setTimeout(fn, 1000)区别：前者重复执行，后者只执行一次。",
    "topic": "JavaScript事件",
    "id": "GEN0554",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "B",
    "title": "HTML中，表示不间断空格的字符实体是（ ）",
    "options": [
      {
        "label": "A",
        "text": "&nbsp;"
      },
      {
        "label": "B",
        "text": "&lt;"
      },
      {
        "label": "C",
        "text": "&gt;"
      },
      {
        "label": "D",
        "text": "&copy;"
      }
    ],
    "answer": "A",
    "explanation": "常用字符实体：&nbsp;(空格)、&lt;(<)、&gt;(>)、&amp;(&)、&copy;(©)。都在HTML中以&开头;结尾。",
    "topic": "HTML基础结构",
    "id": "GEN0555",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "填空题",
    "level": "B",
    "title": "HTML中，表示版权符号©的字符实体是（ ）",
    "options": [],
    "answer": "&copy;",
    "explanation": "字符实体格式：&名称;或&#编号;。copy=版权，lt=less than(<)，gt=greater than(>)，amp=ampersand(&)。",
    "topic": "HTML基础结构",
    "id": "GEN0556",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Web前端",
    "type": "单选题",
    "level": "A",
    "title": "CSS中，display:inline-block与display:inline的区别是（ ）",
    "options": [
      {
        "label": "A",
        "text": "inline-block可设置宽高，inline不能"
      },
      {
        "label": "B",
        "text": "inline-block独占一行"
      },
      {
        "label": "C",
        "text": "inline可设置宽高"
      },
      {
        "label": "D",
        "text": "两者完全相同"
      }
    ],
    "answer": "A",
    "explanation": "inline-block兼有inline(同行显示)和block(可设宽高)特性。inline不能设宽高。block独占一行可设宽高。",
    "topic": "display属性",
    "id": "GEN0557",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "若要使用进程名来结束进程，应使用（ ）命令",
    "options": [
      {
        "label": "A",
        "text": "ps"
      },
      {
        "label": "B",
        "text": "kill"
      },
      {
        "label": "C",
        "text": "pss"
      },
      {
        "label": "D",
        "text": "pstree"
      }
    ],
    "answer": "B",
    "explanation": "",
    "topic": "",
    "id": "GEN0558",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "删除文件命令为( )",
    "options": [
      {
        "label": "A",
        "text": "mkdir"
      },
      {
        "label": "B",
        "text": "mv"
      },
      {
        "label": "C",
        "text": "move"
      },
      {
        "label": "D",
        "text": "rm"
      }
    ],
    "answer": "D",
    "explanation": "",
    "topic": "",
    "id": "GEN0559",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "用户编写了一个文本文件 a.txt，想将该文件名称改为 txt.a，下列命令( )可以实现。",
    "options": [
      {
        "label": "A",
        "text": "rm a.txt txt.a"
      },
      {
        "label": "B",
        "text": "mv a.txt txt.a"
      },
      {
        "label": "C",
        "text": "cd a.txt txt.a"
      },
      {
        "label": "D",
        "text": "echo a.txt > txt.a"
      }
    ],
    "answer": "B",
    "explanation": "",
    "topic": "",
    "id": "GEN0560",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "用于文件系统直接修改文件权限管理命令为:( )。",
    "options": [
      {
        "label": "A",
        "text": "chmod"
      },
      {
        "label": "B",
        "text": "umask"
      },
      {
        "label": "C",
        "text": "chgrp"
      },
      {
        "label": "D",
        "text": "chown"
      }
    ],
    "answer": "A",
    "explanation": "",
    "topic": "",
    "id": "GEN0561",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "如果要列出一个目录下的隐藏文件需要使用命令",
    "options": [
      {
        "label": "A",
        "text": "ls –a"
      },
      {
        "label": "B",
        "text": "ls"
      },
      {
        "label": "C",
        "text": "ls –D"
      },
      {
        "label": "D",
        "text": "ls –l"
      }
    ],
    "answer": "A",
    "explanation": "",
    "topic": "",
    "id": "GEN0562",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "如果执行命令chmod 764 file，那么文件file的权限是",
    "options": [
      {
        "label": "A",
        "text": "r-xrw-r-x"
      },
      {
        "label": "B",
        "text": "rwxrw-r--"
      },
      {
        "label": "C",
        "text": "rw-rw-r--"
      },
      {
        "label": "D",
        "text": "rw-r--r--"
      }
    ],
    "answer": "B",
    "explanation": "",
    "topic": "",
    "id": "GEN0563",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "FTP 传输中使用哪两个端口（ ）",
    "options": [
      {
        "label": "A",
        "text": "23 和24"
      },
      {
        "label": "B",
        "text": "21 和22"
      },
      {
        "label": "C",
        "text": "20 和21"
      },
      {
        "label": "D",
        "text": "22 和23"
      }
    ],
    "answer": "C",
    "explanation": "",
    "topic": "",
    "id": "GEN0564",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "存放Linux 基本命令的目录是什么（ ）",
    "options": [
      {
        "label": "A",
        "text": "/tmp"
      },
      {
        "label": "B",
        "text": "/bin"
      },
      {
        "label": "C",
        "text": "/lib"
      },
      {
        "label": "D",
        "text": "/root"
      }
    ],
    "answer": "B",
    "explanation": "",
    "topic": "",
    "id": "GEN0565",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "下列不是 Linux 系统进程类型的是( )。",
    "options": [
      {
        "label": "A",
        "text": "守护进程"
      },
      {
        "label": "B",
        "text": "就绪进程"
      },
      {
        "label": "C",
        "text": "批处理进程"
      },
      {
        "label": "D",
        "text": "交互进程"
      }
    ],
    "answer": "B",
    "explanation": "",
    "topic": "",
    "id": "GEN0566",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "当登录Linux 时，一个具有唯一进程ID 号的shell将被调用，这个ID是什么",
    "options": [
      {
        "label": "A",
        "text": "PID"
      },
      {
        "label": "B",
        "text": "NID"
      },
      {
        "label": "C",
        "text": "CID"
      },
      {
        "label": "D",
        "text": "UID"
      }
    ],
    "answer": "A",
    "explanation": "",
    "topic": "",
    "id": "GEN0567",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "用户编写文件userinfo后，想要将该文件名修改为stuinfo，以下（  ）可以实现",
    "options": [
      {
        "label": "A",
        "text": "cat userinfo stuinfo"
      },
      {
        "label": "B",
        "text": "cp stuinfo userinfo"
      },
      {
        "label": "C",
        "text": "mv userinfo stuinfo"
      },
      {
        "label": "D",
        "text": "echo userinfo > stuinfo"
      }
    ],
    "answer": "C",
    "explanation": "",
    "topic": "",
    "id": "GEN0568",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "哪个命令可以将普通用户转换成超级用户",
    "options": [
      {
        "label": "A",
        "text": "super"
      },
      {
        "label": "B",
        "text": "passwd"
      },
      {
        "label": "C",
        "text": "su"
      },
      {
        "label": "D",
        "text": "tar"
      }
    ],
    "answer": "C",
    "explanation": "",
    "topic": "",
    "id": "GEN0569",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "usermod 命令无法实现的操作是（ ）",
    "options": [
      {
        "label": "A",
        "text": "账户重命名"
      },
      {
        "label": "B",
        "text": "加锁与解锁用户账户"
      },
      {
        "label": "C",
        "text": "删除指定的账户和对应的主目录"
      },
      {
        "label": "D",
        "text": "对用户密码进行加锁或解锁"
      }
    ],
    "answer": "C",
    "explanation": "",
    "topic": "",
    "id": "GEN0570",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "显示一个文件最后几行的命令是",
    "options": [
      {
        "label": "A",
        "text": "tail"
      },
      {
        "label": "B",
        "text": "tac"
      },
      {
        "label": "C",
        "text": "rear"
      },
      {
        "label": "D",
        "text": "last"
      }
    ],
    "answer": "A",
    "explanation": "",
    "topic": "",
    "id": "GEN0571",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "欲把当前目录下的 file1.txt 复制为 file2.txt，正确的命令是（ ）",
    "options": [
      {
        "label": "A",
        "text": "cat file2.txt file1.txt"
      },
      {
        "label": "B",
        "text": "copy file1.txt file2.txt"
      },
      {
        "label": "C",
        "text": "cat file1.txt > file2.txt"
      },
      {
        "label": "D",
        "text": "cp file1.txt | file2.txt"
      }
    ],
    "answer": "C",
    "explanation": "",
    "topic": "",
    "id": "GEN0572",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "在 vi 编辑器中的命令模式下，键入( )可在光标当前所在行下添加一新行。",
    "options": [
      {
        "label": "A",
        "text": "A"
      },
      {
        "label": "B",
        "text": "o"
      },
      {
        "label": "C",
        "text": "a"
      },
      {
        "label": "D",
        "text": "i"
      }
    ],
    "answer": "B",
    "explanation": "",
    "topic": "",
    "id": "GEN0573",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "在 shell 编程时，可以完成声明变量并赋值的格式是( )。",
    "options": [
      {
        "label": "A",
        "text": "$变量名=值"
      },
      {
        "label": "B",
        "text": "变量名=$值"
      },
      {
        "label": "C",
        "text": "变量名=值"
      },
      {
        "label": "D",
        "text": "$变量名=$值"
      }
    ],
    "answer": "C",
    "explanation": "",
    "topic": "",
    "id": "GEN0574",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "若要将当前目录中的myfile.txt 文件压缩成myfile.txt.tar.gz,则实现的命令为（ ）。",
    "options": [
      {
        "label": "A",
        "text": "tar –zcvf myfile.txt.tar.gz myfile.txt"
      },
      {
        "label": "B",
        "text": "tar –zcvf myfile.txt myfile.txt.tar.gz"
      },
      {
        "label": "C",
        "text": "tar –cvf myfile.txt.tar.gz myfile.txt"
      },
      {
        "label": "D",
        "text": "tar –cvf myfile.txt myfile.txt.tar.gz"
      }
    ],
    "answer": "A",
    "explanation": "",
    "topic": "",
    "id": "GEN0575",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "如果要列出一个目录下的所有文件需要使用命令行( )。",
    "options": [
      {
        "label": "A",
        "text": "ls–a"
      },
      {
        "label": "B",
        "text": "ls–l"
      },
      {
        "label": "C",
        "text": "ls"
      },
      {
        "label": "D",
        "text": "ls–d"
      }
    ],
    "answer": "A",
    "explanation": "",
    "topic": "",
    "id": "GEN0576",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "能够查看当前工作区的完整绝对路径的命令是(  )",
    "options": [
      {
        "label": "A",
        "text": "path"
      },
      {
        "label": "B",
        "text": "pwd"
      },
      {
        "label": "C",
        "text": "cd"
      },
      {
        "label": "D",
        "text": "ls"
      }
    ],
    "answer": "B",
    "explanation": "",
    "topic": "",
    "id": "GEN0577",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "下列命令中可以起到对文件进行重命名作用的命令是( )。",
    "options": [
      {
        "label": "A",
        "text": "rm"
      },
      {
        "label": "B",
        "text": "ls"
      },
      {
        "label": "C",
        "text": "mv"
      },
      {
        "label": "D",
        "text": "cp"
      }
    ],
    "answer": "C",
    "explanation": "",
    "topic": "",
    "id": "GEN0578",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "某文件的组外成员的权限为只读；所有者有全部权限；组内的权限为读与写，则该文件的权限为。",
    "options": [
      {
        "label": "A",
        "text": "764"
      },
      {
        "label": "B",
        "text": "467"
      },
      {
        "label": "C",
        "text": "674"
      },
      {
        "label": "D",
        "text": "476"
      }
    ],
    "answer": "A",
    "explanation": "",
    "topic": "",
    "id": "GEN0579",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "建立一个新文件可以使用的命令为（ ）",
    "options": [
      {
        "label": "A",
        "text": "chmod"
      },
      {
        "label": "B",
        "text": "cp"
      },
      {
        "label": "C",
        "text": "touch"
      },
      {
        "label": "D",
        "text": "more"
      }
    ],
    "answer": "C",
    "explanation": "",
    "topic": "",
    "id": "GEN0580",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "下面关于i节点描述错误的是（） 。",
    "options": [
      {
        "label": "A",
        "text": "i节点和文件是一一对应的"
      },
      {
        "label": "B",
        "text": "通过i节点实现文件的逻辑结构和物理结构的转换"
      },
      {
        "label": "C",
        "text": "i节点能描述文件占用的块数"
      },
      {
        "label": "D",
        "text": "i节点描述了文件大小和指向数据块的指针"
      }
    ],
    "answer": "A",
    "explanation": "",
    "topic": "",
    "id": "GEN0581",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "显示文件\"longfile\"的最后10行，下面那个命令是正确的",
    "options": [
      {
        "label": "A",
        "text": "tail logfile"
      },
      {
        "label": "B",
        "text": "taiL －d 10 longfile"
      },
      {
        "label": "C",
        "text": "head longfile"
      },
      {
        "label": "D",
        "text": "head －10 longfile"
      }
    ],
    "answer": "A",
    "explanation": "",
    "topic": "",
    "id": "GEN0582",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "当字符串用单引号（’’）括起来时，SHELL将",
    "options": [
      {
        "label": "A",
        "text": "执行引号中的命令"
      },
      {
        "label": "B",
        "text": "结束进程"
      },
      {
        "label": "C",
        "text": "解释引号内的特殊字符"
      },
      {
        "label": "D",
        "text": "不解释引号内的特殊字符"
      }
    ],
    "answer": "D",
    "explanation": "",
    "topic": "",
    "id": "GEN0583",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "为了将当前目录下的压缩归档文件 name.zip 解压缩，我们可以使用( )。",
    "options": [
      {
        "label": "A",
        "text": "unzip name.zip"
      },
      {
        "label": "B",
        "text": "unzip -q name.zip"
      },
      {
        "label": "C",
        "text": "zip xvzf name.zip"
      },
      {
        "label": "D",
        "text": "unzip -n name.zip"
      }
    ],
    "answer": "A",
    "explanation": "",
    "topic": "",
    "id": "GEN0584",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "若当前目录为 /home，命令 ls–l 将显示 home 目录下的( )。",
    "options": [
      {
        "label": "A",
        "text": "文件的具体信息"
      },
      {
        "label": "B",
        "text": "所有隐含文件"
      },
      {
        "label": "C",
        "text": "所有文件"
      },
      {
        "label": "D",
        "text": "所有非隐含文件"
      }
    ],
    "answer": "A",
    "explanation": "",
    "topic": "",
    "id": "GEN0585",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "linux中root用户的代表符号为(   )",
    "options": [
      {
        "label": "A",
        "text": "//"
      },
      {
        "label": "B",
        "text": "$"
      },
      {
        "label": "C",
        "text": "/**/"
      },
      {
        "label": "D",
        "text": "\\#"
      }
    ],
    "answer": "D",
    "explanation": "",
    "topic": "",
    "id": "GEN0586",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "确定myfile的文件类型的命令是",
    "options": [
      {
        "label": "A",
        "text": "whatis myfile"
      },
      {
        "label": "B",
        "text": "file myfile"
      },
      {
        "label": "C",
        "text": "type -q myfile"
      },
      {
        "label": "D",
        "text": "type myfile"
      }
    ],
    "answer": "B",
    "explanation": "",
    "topic": "",
    "id": "GEN0587",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "下面关于Shell的说法，不正确的是",
    "options": [
      {
        "label": "A",
        "text": "用户与Linux内核之间的接口程序"
      },
      {
        "label": "B",
        "text": "编译型的程序设计语言"
      },
      {
        "label": "C",
        "text": "操作系统的外壳"
      },
      {
        "label": "D",
        "text": "一个命令语言解释器"
      }
    ],
    "answer": "B",
    "explanation": "",
    "topic": "",
    "id": "GEN0588",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "在shell中，export命令的作用是",
    "options": [
      {
        "label": "A",
        "text": "在子shell中运行一条命令"
      },
      {
        "label": "B",
        "text": "使在子shell中可以使用命令历史记录"
      },
      {
        "label": "C",
        "text": "提供nfs分区给网络中的其它系统使用"
      },
      {
        "label": "D",
        "text": "为其它应用程序设置环境变量"
      }
    ],
    "answer": "D",
    "explanation": "",
    "topic": "",
    "id": "GEN0589",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "在使用mkdir命令创建新的目录时，在其父目录不存在时先创建父目录的选项是（）。",
    "options": [
      {
        "label": "A",
        "text": "-f"
      },
      {
        "label": "B",
        "text": "-m"
      },
      {
        "label": "C",
        "text": "-p"
      },
      {
        "label": "D",
        "text": "-d"
      }
    ],
    "answer": "C",
    "explanation": "",
    "topic": "",
    "id": "GEN0590",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "下列哪个命令在建立一个 tar归档文件的时候列出详细列表（ ）。",
    "options": [
      {
        "label": "A",
        "text": "tar -t"
      },
      {
        "label": "B",
        "text": "tar -cv"
      },
      {
        "label": "C",
        "text": "tar –r"
      },
      {
        "label": "D",
        "text": "tar -cvf"
      }
    ],
    "answer": "A",
    "explanation": "",
    "topic": "",
    "id": "GEN0591",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "自由软件的含义是( )。",
    "options": [
      {
        "label": "A",
        "text": "软件发行商不能向用户收费"
      },
      {
        "label": "B",
        "text": "用户不需要付费"
      },
      {
        "label": "C",
        "text": "只有软件作者才能向用户收费"
      },
      {
        "label": "D",
        "text": "软件可以自由修改和发布"
      }
    ],
    "answer": "D",
    "explanation": "",
    "topic": "",
    "id": "GEN0592",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "一个bash shell脚本的第一行是（ ）",
    "options": [
      {
        "label": "A",
        "text": "#!/bin/bash"
      },
      {
        "label": "B",
        "text": "#/bin/bash"
      },
      {
        "label": "C",
        "text": "#/bin/csh"
      },
      {
        "label": "D",
        "text": "/bin/bash"
      }
    ],
    "answer": "A",
    "explanation": "",
    "topic": "",
    "id": "GEN0593",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "按下( )键能终止当前运行的命令。",
    "options": [
      {
        "label": "A",
        "text": "Ctrl-F"
      },
      {
        "label": "B",
        "text": "Ctrl-C"
      },
      {
        "label": "C",
        "text": "Ctrl-B"
      },
      {
        "label": "D",
        "text": "Ctrl-D"
      }
    ],
    "answer": "B",
    "explanation": "",
    "topic": "",
    "id": "GEN0594",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "看当前位置下，所有以“a”开头,且只有两个字符的文件，可以实现的命令是",
    "options": [
      {
        "label": "A",
        "text": "ls -a#"
      },
      {
        "label": "B",
        "text": "ls -a*"
      },
      {
        "label": "C",
        "text": "ls -a?"
      },
      {
        "label": "D",
        "text": "ls -a%"
      }
    ],
    "answer": "C",
    "explanation": "",
    "topic": "",
    "id": "GEN0595",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "在LINUX中，要查看文件内容，可使用（ ）命令",
    "options": [
      {
        "label": "A",
        "text": "login"
      },
      {
        "label": "B",
        "text": "cd"
      },
      {
        "label": "C",
        "text": "more"
      },
      {
        "label": "D",
        "text": "logout"
      }
    ],
    "answer": "C",
    "explanation": "",
    "topic": "",
    "id": "GEN0596",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "怎样更改一个文件的权限设置？",
    "options": [
      {
        "label": "A",
        "text": "change"
      },
      {
        "label": "B",
        "text": "attrib"
      },
      {
        "label": "C",
        "text": "file"
      },
      {
        "label": "D",
        "text": "chmod"
      }
    ],
    "answer": "D",
    "explanation": "",
    "topic": "",
    "id": "GEN0597",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "cd 命令可以改变用户的当前目录，当用户键入命令“cd”并按Enter键后，（ ）",
    "options": [
      {
        "label": "A",
        "text": "当前目录改为上一级目录"
      },
      {
        "label": "B",
        "text": "当前目录改为用户主目录"
      },
      {
        "label": "C",
        "text": "当前目录不变，屏幕显示当前目录"
      },
      {
        "label": "D",
        "text": "当前目录改为根目录"
      }
    ],
    "answer": "B",
    "explanation": "",
    "topic": "",
    "id": "GEN0598",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "以下不属于linux操作系统的是",
    "options": [
      {
        "label": "A",
        "text": "xp"
      },
      {
        "label": "B",
        "text": "suse"
      },
      {
        "label": "C",
        "text": "centos7"
      },
      {
        "label": "D",
        "text": "redhat"
      }
    ],
    "answer": "A",
    "explanation": "",
    "topic": "",
    "id": "GEN0599",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "你使用命令“vi  /etc/inittab”查看该文件的内容，你不小心改动了一些内容，为了防止系统出问题，你不想保存所修改内容，你应该如何操作(  ) 。",
    "options": [
      {
        "label": "A",
        "text": "在编辑模式下，键入“ESC”键直接退出vi"
      },
      {
        "label": "B",
        "text": "在末行模式下，键入:x!"
      },
      {
        "label": "C",
        "text": "在末行模式下，键入:wq"
      },
      {
        "label": "D",
        "text": "在末行模式下，键入:q!"
      }
    ],
    "answer": "D",
    "explanation": "",
    "topic": "",
    "id": "GEN0600",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "如下 shell 脚本程序: #!/bin/bash declare -i Number Number=1+2+3 echo \"$Number\" 执行脚本时输出的值为( )。",
    "options": [
      {
        "label": "A",
        "text": "6"
      },
      {
        "label": "B",
        "text": "“1+2+3”"
      },
      {
        "label": "C",
        "text": "123"
      },
      {
        "label": "D",
        "text": "1+2+3"
      }
    ],
    "answer": "A",
    "explanation": "",
    "topic": "",
    "id": "GEN0601",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "LINUX 用于启动系统所需加载的内核程序位于( )。",
    "options": [
      {
        "label": "A",
        "text": "/"
      },
      {
        "label": "B",
        "text": "/proc"
      },
      {
        "label": "C",
        "text": "/boot"
      },
      {
        "label": "D",
        "text": "/lib/modules/2.4.20_8/kernel"
      }
    ],
    "answer": "C",
    "explanation": "",
    "topic": "",
    "id": "GEN0602",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "如何快速切换到用户John 的主目录下？",
    "options": [
      {
        "label": "A",
        "text": "cd @John"
      },
      {
        "label": "B",
        "text": "cd &John"
      },
      {
        "label": "C",
        "text": "cd ~John"
      },
      {
        "label": "D",
        "text": "cd #John"
      }
    ],
    "answer": "C",
    "explanation": "",
    "topic": "",
    "id": "GEN0603",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "改变文件所有者的命令为（ ）",
    "options": [
      {
        "label": "A",
        "text": "touch"
      },
      {
        "label": "B",
        "text": "chmod"
      },
      {
        "label": "C",
        "text": "chown"
      },
      {
        "label": "D",
        "text": "cat"
      }
    ],
    "answer": "C",
    "explanation": "",
    "topic": "",
    "id": "GEN0604",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "以下命令中，可以将用户身份临时改变为root的是",
    "options": [
      {
        "label": "A",
        "text": "logout"
      },
      {
        "label": "B",
        "text": "su"
      },
      {
        "label": "C",
        "text": "SU"
      },
      {
        "label": "D",
        "text": "login"
      }
    ],
    "answer": "B",
    "explanation": "",
    "topic": "",
    "id": "GEN0605",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "通常在哪个目录存放配置文件信息",
    "options": [
      {
        "label": "A",
        "text": "/var"
      },
      {
        "label": "B",
        "text": "/etc"
      },
      {
        "label": "C",
        "text": "/home"
      },
      {
        "label": "D",
        "text": "/boot"
      }
    ],
    "answer": "B",
    "explanation": "",
    "topic": "",
    "id": "GEN0606",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "shell程序中声明数组类变量的方式是",
    "options": [
      {
        "label": "A",
        "text": "declare -a"
      },
      {
        "label": "B",
        "text": "declare -e"
      },
      {
        "label": "C",
        "text": "declare –v"
      },
      {
        "label": "D",
        "text": "declare -i"
      }
    ],
    "answer": "A",
    "explanation": "",
    "topic": "",
    "id": "GEN0607",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "如果执行命令#chmod 746 file.txt，那么该文件的权限是",
    "options": [
      {
        "label": "A",
        "text": "--xr—rwx"
      },
      {
        "label": "B",
        "text": "rwxr--rw-"
      },
      {
        "label": "C",
        "text": "rwxr--r—"
      },
      {
        "label": "D",
        "text": "rw-r--r--"
      }
    ],
    "answer": "B",
    "explanation": "",
    "topic": "",
    "id": "GEN0608",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "在使用 vi 编辑器时，如果需要取消行号需要在末行模式下输入的指令是( )。",
    "options": [
      {
        "label": "A",
        "text": "get no"
      },
      {
        "label": "B",
        "text": "set no"
      },
      {
        "label": "C",
        "text": "get nonu"
      },
      {
        "label": "D",
        "text": "set nonu"
      }
    ],
    "answer": "D",
    "explanation": "",
    "topic": "",
    "id": "GEN0609",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "Linux系统配置文件一般存放于以下（ ）路径下",
    "options": [
      {
        "label": "A",
        "text": "root"
      },
      {
        "label": "B",
        "text": "home"
      },
      {
        "label": "C",
        "text": "etc"
      },
      {
        "label": "D",
        "text": "bin"
      }
    ],
    "answer": "C",
    "explanation": "",
    "topic": "",
    "id": "GEN0610",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "usermod 命令无法实现的操作是( )。",
    "options": [
      {
        "label": "A",
        "text": "账户重命名"
      },
      {
        "label": "B",
        "text": "对用户密码进行加锁或解锁"
      },
      {
        "label": "C",
        "text": "加锁与解锁用户账户"
      },
      {
        "label": "D",
        "text": "删除指定的账户和对应的主目录"
      }
    ],
    "answer": "D",
    "explanation": "",
    "topic": "",
    "id": "GEN0611",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "对top命令描述正确的是（ ）",
    "options": [
      {
        "label": "A",
        "text": "查看进程名称"
      },
      {
        "label": "B",
        "text": "查看线程详情情况"
      },
      {
        "label": "C",
        "text": "用于实时动态显示 Linux进程 的动态信息"
      },
      {
        "label": "D",
        "text": "显示内存情况"
      }
    ],
    "answer": "C",
    "explanation": "",
    "topic": "",
    "id": "GEN0612",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "以长格式列目录时，若文件test的权限描述为：drwxrw-r–，则文件test的类型及文件主的权限是",
    "options": [
      {
        "label": "A",
        "text": "普通文件、读写"
      },
      {
        "label": "B",
        "text": "目录文件、读写执行"
      },
      {
        "label": "C",
        "text": "目录文件、读写"
      },
      {
        "label": "D",
        "text": "普通文件、读"
      }
    ],
    "answer": "B",
    "explanation": "",
    "topic": "",
    "id": "GEN0613",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "将n1行到n2行之间的内容拷贝到第n3行下的末行模式关键字是",
    "options": [
      {
        "label": "A",
        "text": "m"
      },
      {
        "label": "B",
        "text": "co"
      },
      {
        "label": "C",
        "text": "d"
      },
      {
        "label": "D",
        "text": "c"
      }
    ],
    "answer": "B",
    "explanation": "",
    "topic": "",
    "id": "GEN0614",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "Linux 系统的联机帮助命令是( )。",
    "options": [
      {
        "label": "A",
        "text": "man"
      },
      {
        "label": "B",
        "text": "mkdir"
      },
      {
        "label": "C",
        "text": "cd"
      },
      {
        "label": "D",
        "text": "tar"
      }
    ],
    "answer": "A",
    "explanation": "",
    "topic": "",
    "id": "GEN0615",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "默认情况下管理员创建了一个用户，就会在(   )目录下创建一个用户主目录",
    "options": [
      {
        "label": "A",
        "text": "/usr"
      },
      {
        "label": "B",
        "text": "/etc"
      },
      {
        "label": "C",
        "text": "/home"
      },
      {
        "label": "D",
        "text": "/root"
      }
    ],
    "answer": "C",
    "explanation": "",
    "topic": "",
    "id": "GEN0616",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "Shell 程序的注释符为( )。",
    "options": [
      {
        "label": "A",
        "text": "@"
      },
      {
        "label": "B",
        "text": "%"
      },
      {
        "label": "C",
        "text": "#"
      },
      {
        "label": "D",
        "text": "!"
      }
    ],
    "answer": "C",
    "explanation": "",
    "topic": "",
    "id": "GEN0617",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "在给定文件中查找与设定条件相符字符串的命令为（ ）",
    "options": [
      {
        "label": "A",
        "text": "find"
      },
      {
        "label": "B",
        "text": "sort"
      },
      {
        "label": "C",
        "text": "grep"
      },
      {
        "label": "D",
        "text": "gzip"
      }
    ],
    "answer": "C",
    "explanation": "",
    "topic": "",
    "id": "GEN0618",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "假设文件fileA的符号链接为fileB，那么删除fileA后，下面的描述正确的是（ ） 。",
    "options": [
      {
        "label": "A",
        "text": "因为fileB未被删除，所以fileA会被系统自动重新建立"
      },
      {
        "label": "B",
        "text": "fileB会随fileA的删除而被系统自动删除"
      },
      {
        "label": "C",
        "text": "fileB也随之被删除"
      },
      {
        "label": "D",
        "text": "fileB仍存在，但是属于无效文件"
      }
    ],
    "answer": "D",
    "explanation": "",
    "topic": "",
    "id": "GEN0619",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "关于 Linux 安装方式说法错误的是( )。",
    "options": [
      {
        "label": "A",
        "text": "如果 Linux 的安装程序无法启动图形安装程序，即使用户选择图形安装，也会自动的转入字符安装方式"
      },
      {
        "label": "B",
        "text": "图形安装模式耗费的系统资源比较少，字符方式耗费的系统资源较多"
      },
      {
        "label": "C",
        "text": "字符方式速度也比图形方式略快"
      },
      {
        "label": "D",
        "text": "图形安装方式易于使用"
      }
    ],
    "answer": "B",
    "explanation": "",
    "topic": "",
    "id": "GEN0620",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "在 centos Linux 系统中，默认的 shell 是(同时也是使用最广泛的)( )。",
    "options": [
      {
        "label": "A",
        "text": "csh"
      },
      {
        "label": "B",
        "text": "bash"
      },
      {
        "label": "C",
        "text": "gnush"
      },
      {
        "label": "D",
        "text": "ash"
      }
    ],
    "answer": "B",
    "explanation": "",
    "topic": "",
    "id": "GEN0621",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "以下哪个命令可以终止一个用户的所有进程( )。",
    "options": [
      {
        "label": "A",
        "text": "killall"
      },
      {
        "label": "B",
        "text": "kill"
      },
      {
        "label": "C",
        "text": "skillall"
      },
      {
        "label": "D",
        "text": "skill"
      }
    ],
    "answer": "A",
    "explanation": "",
    "topic": "",
    "id": "GEN0622",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "关闭linux 系统（不重新启动）可使用（ ）命令",
    "options": [
      {
        "label": "A",
        "text": "halt"
      },
      {
        "label": "B",
        "text": "reboot"
      },
      {
        "label": "C",
        "text": "shutdown -r"
      },
      {
        "label": "D",
        "text": "ctrl+alt+del"
      }
    ],
    "answer": "A",
    "explanation": "",
    "topic": "",
    "id": "GEN0623",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "使用标准的输出重定向符号(>)，重定向至‘file01'文件，能使文件 file01 的数据( )。",
    "options": [
      {
        "label": "A",
        "text": "被复制"
      },
      {
        "label": "B",
        "text": "被移动"
      },
      {
        "label": "C",
        "text": "被覆盖"
      },
      {
        "label": "D",
        "text": "被追加新内容"
      }
    ],
    "answer": "C",
    "explanation": "",
    "topic": "",
    "id": "GEN0624",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "以下命令可以把当前目录下（/home/test）的压缩文件myftp.tar.gz解压缩到/目录下的命令是",
    "options": [
      {
        "label": "A",
        "text": "tar xvzf myftp.tar.gz /"
      },
      {
        "label": "B",
        "text": "tar xvzf myftp.tar.gz -C /"
      },
      {
        "label": "C",
        "text": "tar cvzf myftp.tar.gz /"
      },
      {
        "label": "D",
        "text": "tar cvzf myftp.tar.gz -C /"
      }
    ],
    "answer": "B",
    "explanation": "",
    "topic": "",
    "id": "GEN0625",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "下列shell中检查数值的表达式的写法描述正确的是",
    "options": [
      {
        "label": "A",
        "text": "x -gt y 检查x是否大于y"
      },
      {
        "label": "B",
        "text": "x -gt y 检查x是否小于y"
      },
      {
        "label": "C",
        "text": "x -ne y 检查x和y是否相等"
      },
      {
        "label": "D",
        "text": "x -eq y 为检查x和y是否不相等"
      }
    ],
    "answer": "A",
    "explanation": "",
    "topic": "",
    "id": "GEN0626",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "有关vi的命令模式的dd命令描述正确的是",
    "options": [
      {
        "label": "A",
        "text": "删除光标所在的行并进入插入模式"
      },
      {
        "label": "B",
        "text": "删除文件开头的行"
      },
      {
        "label": "C",
        "text": "删除文件末尾的行"
      },
      {
        "label": "D",
        "text": "删除光标所在的行"
      }
    ],
    "answer": "D",
    "explanation": "",
    "topic": "",
    "id": "GEN0627",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "在vi 编辑器中的命令模式下，重复上一次对编辑的文本进行的操作，可使用（）命令。",
    "options": [
      {
        "label": "A",
        "text": "下箭头"
      },
      {
        "label": "B",
        "text": "“.”"
      },
      {
        "label": "C",
        "text": "“*”"
      },
      {
        "label": "D",
        "text": "上箭头"
      }
    ],
    "answer": "B",
    "explanation": "",
    "topic": "",
    "id": "GEN0628",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "/etc/passwd文件中存放(  )",
    "options": [
      {
        "label": "A",
        "text": "用户账号基本信息"
      },
      {
        "label": "B",
        "text": "用户组信息"
      },
      {
        "label": "C",
        "text": "管理员口令的加密信息"
      },
      {
        "label": "D",
        "text": "文件系统信息"
      }
    ],
    "answer": "A",
    "explanation": "",
    "topic": "",
    "id": "GEN0629",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "在 bash 中, 在一条命令后加入 \"2>&1\" 意味着",
    "options": [
      {
        "label": "A",
        "text": "标准错误输出重定向到标准输出"
      },
      {
        "label": "B",
        "text": "标准错误输出重定向到标准输入"
      },
      {
        "label": "C",
        "text": "标准输入重定向到标准错误输出"
      },
      {
        "label": "D",
        "text": "标准输出重定向到标准输入"
      }
    ],
    "answer": "A",
    "explanation": "",
    "topic": "",
    "id": "GEN0630",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "vi 中哪条命令是不保存强制退出( )。",
    "options": [
      {
        "label": "A",
        "text": ":wq"
      },
      {
        "label": "B",
        "text": ":q!"
      },
      {
        "label": "C",
        "text": ":quit"
      },
      {
        "label": "D",
        "text": ":wq!"
      }
    ],
    "answer": "B",
    "explanation": "",
    "topic": "",
    "id": "GEN0631",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "存放 Linux 基本命令的目录是什么( )。",
    "options": [
      {
        "label": "A",
        "text": "/tmp"
      },
      {
        "label": "B",
        "text": "/root"
      },
      {
        "label": "C",
        "text": "/bin"
      },
      {
        "label": "D",
        "text": "/lib"
      }
    ],
    "answer": "C",
    "explanation": "",
    "topic": "",
    "id": "GEN0632",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "Linux 有三个查看文件的命令，若希望在查看文件内容过程中可以用光标上下移动来查看文件内容，应使用命令( )。",
    "options": [
      {
        "label": "A",
        "text": "more"
      },
      {
        "label": "B",
        "text": "less"
      },
      {
        "label": "C",
        "text": "menu"
      },
      {
        "label": "D",
        "text": "cat"
      }
    ],
    "answer": "B",
    "explanation": "",
    "topic": "",
    "id": "GEN0633",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "以下可以正确执行对文件进行压缩的指令和选项是",
    "options": [
      {
        "label": "A",
        "text": "tar -fxvz"
      },
      {
        "label": "B",
        "text": "tar -fxzv"
      },
      {
        "label": "C",
        "text": "tar -zcvf"
      },
      {
        "label": "D",
        "text": "tar -xzf"
      }
    ],
    "answer": "C",
    "explanation": "",
    "topic": "",
    "id": "GEN0634",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "单选题",
    "title": "什么命令解压缩tar文件",
    "options": [
      {
        "label": "A",
        "text": "tar -czvf filename.tgz"
      },
      {
        "label": "B",
        "text": "tar -dzvf filename.tgz"
      },
      {
        "label": "C",
        "text": "tar -tzvf filename.tgz"
      },
      {
        "label": "D",
        "text": "tar -xzvf filename.tgz"
      }
    ],
    "answer": "D",
    "explanation": "",
    "topic": "",
    "id": "GEN0635",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "某文件的权限为：l-rw-_r--_r-x，用数值形式表示为___ __，该文件类型是_______。",
    "options": [],
    "answer": "645 链接文件",
    "explanation": "",
    "topic": "",
    "id": "GEN0636",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "将 /home/test 目录下的 myftp.tar.gz 文件解压缩到根目录的命令是 ____。",
    "options": [],
    "answer": "tar xvzf myftp.tar.gz -C /",
    "explanation": "",
    "topic": "",
    "id": "GEN0637",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "在Shell脚本中，将命令的返回值赋给变量的两种方式是 ____和 ____。",
    "options": [],
    "answer": "A=date A=$(date)",
    "explanation": "",
    "topic": "",
    "id": "GEN0638",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "在Shell脚本中，将命令执行结果赋给变量的两种方式是:反引号和 ____",
    "options": [],
    "answer": "$()",
    "explanation": "",
    "topic": "",
    "id": "GEN0639",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "在vim编辑器中，从普通模式进入插入模式的光标位置命令包括:i(当前位置)、I()、a()、A(行尾)。",
    "options": [],
    "answer": "行首 下一个字符",
    "explanation": "",
    "topic": "",
    "id": "GEN0640",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "普通用户的shell提示符是_____，管理员用户的shell提示符是_____",
    "options": [],
    "answer": "$ #",
    "explanation": "",
    "topic": "",
    "id": "GEN0641",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "创建用户 milan 并指定其家目录为 /home/ttt 的命令是 ____。",
    "options": [],
    "answer": "useradd -d /home/ttt milan",
    "explanation": "",
    "topic": "",
    "id": "GEN0642",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "在Linux系统中，常用来测试本机与远程主机的通信路径是否畅通的命令是_____。",
    "options": [],
    "answer": "ping",
    "explanation": "",
    "topic": "",
    "id": "GEN0643",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "在文件系统中查找名为\"test.txt\"文件的命令是 ____。",
    "options": [],
    "answer": "find / -name test.txt",
    "explanation": "",
    "topic": "",
    "id": "GEN0644",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "设置文件权限为所有者可读写执行(rwx)，同组用户可读执行(r-x)，其他用户可读执行(r-x)的命令是 ____。",
    "options": [],
    "answer": "chmod 755",
    "explanation": "",
    "topic": "",
    "id": "GEN0645",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "mv 命令可以移动文件和目录，还可以为文件和目录____________。",
    "options": [],
    "answer": "重命名",
    "explanation": "",
    "topic": "",
    "id": "GEN0646",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "默认情况下管理员创建了一个用户，就会在________ 目录下创建一个用户主目录。",
    "options": [],
    "answer": "/home",
    "explanation": "",
    "topic": "",
    "id": "GEN0647",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "shell脚本的_________位置参数可以表示传递参数的个数。",
    "options": [],
    "answer": "$#",
    "explanation": "",
    "topic": "",
    "id": "GEN0648",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "使用shutdown命令设置系统在30分钟后关机的命令是 ____。",
    "options": [],
    "answer": "shutdown -h +30",
    "explanation": "",
    "topic": "",
    "id": "GEN0649",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "某文件tmp当前权限是rwxrwxrwx，如果要改为rw-rw-rw-,可以使用________命令来实现。",
    "options": [],
    "answer": "chmod a-x",
    "explanation": "",
    "topic": "",
    "id": "GEN0650",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "在超级用户下，显示 Linux 系统中正在运行的全部进程，应使用的命令及参数是: ________",
    "options": [],
    "answer": "ps–aux",
    "explanation": "",
    "topic": "",
    "id": "GEN0651",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "Linux虚拟机网络连接的三种基本模式是:桥接模式、____模式和____模式。",
    "options": [],
    "answer": "NAT Host-Only",
    "explanation": "",
    "topic": "",
    "id": "GEN0652",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "设置系统在12:30关机的命令是 ____，取消该关机计划的命令是 ____。",
    "options": [],
    "answer": "shutdown -h 12:30 shutdown -c",
    "explanation": "",
    "topic": "",
    "id": "GEN0653",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "[root@localhost home]#行首提示的几个组成部分分别代表____，____，____和____。",
    "options": [],
    "answer": "当前激活用户 主机名 当前工作区 用户提示符",
    "explanation": "",
    "topic": "",
    "id": "GEN0654",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "在 Linux 系统中，压缩文件后生成后缀为.gz 文件的命令是: ________。",
    "options": [],
    "answer": "gzip",
    "explanation": "",
    "topic": "",
    "id": "GEN0655",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "创建用户时指定家目录的参数是 ____，删除用户时同时删除家目录的参数是 ____。",
    "options": [],
    "answer": "-d -r",
    "explanation": "",
    "topic": "",
    "id": "GEN0656",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "把文件file1和file2合并成file3的命令是____________。",
    "options": [],
    "answer": "cat  file1  file2  > file3",
    "explanation": "",
    "topic": "",
    "id": "GEN0657",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "查看当前工作目录内容的命令是 ____，查看当前所在目录的命令是 ____。",
    "options": [],
    "answer": "ls pwd",
    "explanation": "",
    "topic": "",
    "id": "GEN0658",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "为文件 filename 指定所有用户均具有读、写、执行权限的命令及参数是：________ 。",
    "options": [],
    "answer": "chmod 777 filename",
    "explanation": "",
    "topic": "",
    "id": "GEN0659",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "终止进程号为896的进程的命令是 ____。",
    "options": [],
    "answer": "kill 896",
    "explanation": "",
    "topic": "",
    "id": "GEN0660",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "显示计算机基本信息的命令是 ____，显示计算机名称的命令是 ____。",
    "options": [],
    "answer": "uname hostname",
    "explanation": "",
    "topic": "",
    "id": "GEN0661",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "将目录打包并压缩为demo.tar.gz文件的命令是 ____。",
    "options": [],
    "answer": "tar -zcf demo.tar.gz demo/",
    "explanation": "",
    "topic": "",
    "id": "GEN0662",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "查看当前系统进程详细信息的命令是 ____。",
    "options": [],
    "answer": "ps -aux",
    "explanation": "",
    "topic": "",
    "id": "GEN0663",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "________就是将前一个命令的标准输出作为后一个命令的_______。",
    "options": [],
    "answer": "管道符 (标准)输入",
    "explanation": "",
    "topic": "",
    "id": "GEN0664",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "将文件 aaa 改名为 bbb 的命令是 ____。",
    "options": [],
    "answer": "mv aaa bbb",
    "explanation": "",
    "topic": "",
    "id": "GEN0665",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "设置文件权限为所有者可读写(rw-)，同组用户可读(r--)，其他用户可读(r--)的命令是 ____。",
    "options": [],
    "answer": "chmod 644",
    "explanation": "",
    "topic": "",
    "id": "GEN0666",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "填空题",
    "title": "在 test.txt 文件中查找包含\"teacher\"字符串的行的命令是 ____。",
    "options": [],
    "answer": "grep \"teacher\" test.txt",
    "explanation": "",
    "topic": "",
    "id": "GEN0667",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下属于 sed 编辑器常用命令的有( )",
    "options": [
      {
        "label": "A",
        "text": "l(列表)"
      },
      {
        "label": "B",
        "text": "p(打印)"
      },
      {
        "label": "C",
        "text": "d(删除)"
      },
      {
        "label": "D",
        "text": "s(替换)"
      }
    ],
    "answer": "BCD",
    "explanation": "",
    "topic": "",
    "id": "GEN0668",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下属于 Linux 系统变量的有",
    "options": [
      {
        "label": "A",
        "text": "$PATH"
      },
      {
        "label": "B",
        "text": "$HOME"
      },
      {
        "label": "C",
        "text": "$USER"
      },
      {
        "label": "D",
        "text": "$PWD"
      }
    ],
    "answer": "ABCD",
    "explanation": "",
    "topic": "",
    "id": "GEN0669",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下关于 vim 编辑器模式切换的描述正确的有( )",
    "options": [
      {
        "label": "A",
        "text": "从普通模式按 “i” 进入插入模式"
      },
      {
        "label": "B",
        "text": "从插入模式按 “Esc” 回到普通模式"
      },
      {
        "label": "C",
        "text": "从普通模式输入 “:” 进入末行模式"
      },
      {
        "label": "D",
        "text": "末行模式可直接按 “i” 进入插入模式"
      }
    ],
    "answer": "ABC",
    "explanation": "",
    "topic": "",
    "id": "GEN0670",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下属于用户管理相关的命令有",
    "options": [
      {
        "label": "A",
        "text": "userdel"
      },
      {
        "label": "B",
        "text": "usermod"
      },
      {
        "label": "C",
        "text": "useradd"
      },
      {
        "label": "D",
        "text": "groupadd"
      }
    ],
    "answer": "ABCD",
    "explanation": "",
    "topic": "",
    "id": "GEN0671",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下关于正则表达式字符匹配的描述正确的有( )",
    "options": [
      {
        "label": "A",
        "text": "“.” 匹配任意单个字符"
      },
      {
        "label": "B",
        "text": "“[^]” 匹配指定范围外的任意单个字符"
      },
      {
        "label": "C",
        "text": "“*” 匹配前面的字符仅一次"
      },
      {
        "label": "D",
        "text": "“[]” 匹配指定范围内的任意单个字符"
      }
    ],
    "answer": "ABD",
    "explanation": "",
    "topic": "",
    "id": "GEN0672",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下能实现文件压缩功能的命令有",
    "options": [
      {
        "label": "A",
        "text": "gunzip"
      },
      {
        "label": "B",
        "text": "tar -zcf"
      },
      {
        "label": "C",
        "text": "zip -r"
      },
      {
        "label": "D",
        "text": "gzip"
      }
    ],
    "answer": "BCD",
    "explanation": "",
    "topic": "",
    "id": "GEN0673",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下关于 Linux 文件描述符的描述正确的有( )",
    "options": [
      {
        "label": "A",
        "text": "1 对应标准输出(stdout)"
      },
      {
        "label": "B",
        "text": "0 对应标准输入(stdin)"
      },
      {
        "label": "C",
        "text": "2 对应标准错误输出(stderr)"
      },
      {
        "label": "D",
        "text": "“2>&1” 表示将标准输出重定向到标准错误"
      }
    ],
    "answer": "ABC",
    "explanation": "",
    "topic": "",
    "id": "GEN0674",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下对 rmdir 命令的描述正确的有( )",
    "options": [
      {
        "label": "A",
        "text": "删除单个空目录时无需添加选项"
      },
      {
        "label": "B",
        "text": "-p 选项可递归删除多级空目录"
      },
      {
        "label": "C",
        "text": "仅能删除空目录"
      },
      {
        "label": "D",
        "text": "可直接删除包含文件的目录"
      }
    ],
    "answer": "ABC",
    "explanation": "",
    "topic": "",
    "id": "GEN0675",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下属于用户组管理相关的命令有( )",
    "options": [
      {
        "label": "A",
        "text": "groupdel:删除用户组"
      },
      {
        "label": "B",
        "text": "usermod -g:将用户添加到指定组"
      },
      {
        "label": "C",
        "text": "groupadd:创建用户组"
      },
      {
        "label": "D",
        "text": "groupmod:修改用户组属性"
      }
    ],
    "answer": "ABCD",
    "explanation": "",
    "topic": "",
    "id": "GEN0676",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下关于 sed 编辑器的描述正确的有( )",
    "options": [
      {
        "label": "A",
        "text": "sed 是无破坏性编辑器，默认不修改原文件"
      },
      {
        "label": "B",
        "text": "“s/old/new/g” 表示全局替换文本中的 old 为 newC. “d” 命令用于删除匹配的行D. “p” 命令单独使用时仅打印匹配行，不输出其他行"
      }
    ],
    "answer": "AB",
    "explanation": "",
    "topic": "",
    "id": "GEN0677",
    "level": "C",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "下列哪个命令可以起到Linux操作系统关机的效果( )。",
    "options": [
      {
        "label": "A",
        "text": "shutdown -r"
      },
      {
        "label": "B",
        "text": "shutdown -h"
      },
      {
        "label": "C",
        "text": "poweroff"
      },
      {
        "label": "D",
        "text": "halt"
      }
    ],
    "answer": "BCD",
    "explanation": "",
    "topic": "",
    "id": "GEN0678",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下关于 touch 命令的选项及功能描述正确的有( )",
    "options": [
      {
        "label": "A",
        "text": "-c:若文件不存在则不创建新文件"
      },
      {
        "label": "B",
        "text": "-r:参考其他文件的时间戳更新目标文件"
      },
      {
        "label": "C",
        "text": "-a:仅修改文件的修改时间"
      },
      {
        "label": "D",
        "text": "-t:按指定格式设置文件时间戳"
      }
    ],
    "answer": "ABD",
    "explanation": "",
    "topic": "",
    "id": "GEN0679",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下关于管道符 “|” 的描述正确的有( )",
    "options": [
      {
        "label": "A",
        "text": "可用于连接任意两个命令"
      },
      {
        "label": "B",
        "text": "可将前一个命令的标准输出作为后一个命令的标准输入"
      },
      {
        "label": "C",
        "text": "不能处理前一个命令的标准错误"
      },
      {
        "label": "D",
        "text": "右侧命令必须能接收标准输入"
      }
    ],
    "answer": "BCD",
    "explanation": "",
    "topic": "",
    "id": "GEN0680",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下对 Linux 文件权限的理解正确的有( )",
    "options": [
      {
        "label": "A",
        "text": "目录的 “w” 权限允许在目录内创建、删除文件"
      },
      {
        "label": "B",
        "text": "仅修改文件所有者需使用 chmod 命令"
      },
      {
        "label": "C",
        "text": "权限 “755” 表示所有者可读可写可执行，同组和其他用户只读可执行"
      },
      {
        "label": "D",
        "text": "文件的 “x” 权限仅对可执行程序有效"
      }
    ],
    "answer": "ACD",
    "explanation": "",
    "topic": "",
    "id": "GEN0681",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下正则表达式元字符及匹配规则描述正确的有( )",
    "options": [
      {
        "label": "A",
        "text": "“^” 表示行首锚定"
      },
      {
        "label": "B",
        "text": "“.*” 表示匹配任意长度的任意字符"
      },
      {
        "label": "C",
        "text": "“$” 表示行尾锚定"
      },
      {
        "label": "D",
        "text": "“[]” 表示匹配指定范围外的任意单个字符"
      }
    ],
    "answer": "ABC",
    "explanation": "",
    "topic": "",
    "id": "GEN0682",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "在Shell中变量的赋值方法有( )。",
    "options": [
      {
        "label": "A",
        "text": "直接赋值"
      },
      {
        "label": "B",
        "text": "使用read命令"
      },
      {
        "label": "C",
        "text": "不可以赋值"
      },
      {
        "label": "D",
        "text": "使用命令行参数"
      }
    ],
    "answer": "BC",
    "explanation": "",
    "topic": "",
    "id": "GEN0683",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下关于 tar 命令的选项描述正确的有( )",
    "options": [
      {
        "label": "A",
        "text": "-v 表示显示操作过程"
      },
      {
        "label": "B",
        "text": "-z 表示支持 gzip 压缩"
      },
      {
        "label": "C",
        "text": "-c 表示创建压缩文件"
      },
      {
        "label": "D",
        "text": "-x 表示提取文件"
      }
    ],
    "answer": "ABCD",
    "explanation": "",
    "topic": "",
    "id": "GEN0684",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "vi/vim 编辑器中，能实现 “保存并退出” 功能的操作有",
    "options": [
      {
        "label": "A",
        "text": ":x"
      },
      {
        "label": "B",
        "text": "Shift+ZZ"
      },
      {
        "label": "C",
        "text": ":q!"
      },
      {
        "label": "D",
        "text": ":wq"
      }
    ],
    "answer": "ABD",
    "explanation": "",
    "topic": "",
    "id": "GEN0685",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下能终止进程的命令有",
    "options": [
      {
        "label": "A",
        "text": "kill"
      },
      {
        "label": "B",
        "text": "ps"
      },
      {
        "label": "C",
        "text": "killall"
      },
      {
        "label": "D",
        "text": "pkill"
      }
    ],
    "answer": "ACD",
    "explanation": "",
    "topic": "",
    "id": "GEN0686",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下属于 Linux 关机命令的有",
    "options": [
      {
        "label": "A",
        "text": "reboot"
      },
      {
        "label": "B",
        "text": "shutdown -h"
      },
      {
        "label": "C",
        "text": "poweroff"
      },
      {
        "label": "D",
        "text": "halt"
      }
    ],
    "answer": "BCD",
    "explanation": "",
    "topic": "",
    "id": "GEN0687",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "下列Shell结构化语句中能够起到循环作用的有( )。",
    "options": [
      {
        "label": "A",
        "text": "for"
      },
      {
        "label": "B",
        "text": "if"
      },
      {
        "label": "C",
        "text": "until"
      },
      {
        "label": "D",
        "text": "while"
      }
    ],
    "answer": "ABC",
    "explanation": "",
    "topic": "",
    "id": "GEN0688",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下能修改文件权限的命令及方式有( )",
    "options": [
      {
        "label": "A",
        "text": "chown 用户名 文件名"
      },
      {
        "label": "B",
        "text": "chmod u=rwx 文件名"
      },
      {
        "label": "C",
        "text": "chmod 755 文件名"
      },
      {
        "label": "D",
        "text": "chmod g+w 文件名"
      }
    ],
    "answer": "BCD",
    "explanation": "",
    "topic": "",
    "id": "GEN0689",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "下列属于Linux操作系统特点的是( )。",
    "options": [
      {
        "label": "A",
        "text": "便于定制和再开发"
      },
      {
        "label": "B",
        "text": "源码公开"
      },
      {
        "label": "C",
        "text": "性能高安全性强"
      },
      {
        "label": "D",
        "text": "与unix兼容"
      }
    ],
    "answer": "ABCD",
    "explanation": "",
    "topic": "",
    "id": "GEN0690",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "下面哪些是Linux中常用的环境变量( )。",
    "options": [
      {
        "label": "A",
        "text": "PWD"
      },
      {
        "label": "B",
        "text": "PATH"
      },
      {
        "label": "C",
        "text": "CD"
      },
      {
        "label": "D",
        "text": "RANDOM"
      }
    ],
    "answer": "ABD",
    "explanation": "",
    "topic": "",
    "id": "GEN0691",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下属于 awk 内置变量的有( )",
    "options": [
      {
        "label": "A",
        "text": "FS:输出字段分隔符"
      },
      {
        "label": "B",
        "text": "NF:当前行的字段数"
      },
      {
        "label": "C",
        "text": "NR:已读取的记录数(行号)"
      },
      {
        "label": "D",
        "text": "FILENAME:当前处理的文件名"
      }
    ],
    "answer": "BCD",
    "explanation": "",
    "topic": "",
    "id": "GEN0692",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下属于 Shell 变量定义规则的有( )",
    "options": [
      {
        "label": "A",
        "text": "变量名必须全大写"
      },
      {
        "label": "B",
        "text": "等号两侧不能有空格"
      },
      {
        "label": "C",
        "text": "变量名可由字母、数字和下划线组成"
      },
      {
        "label": "D",
        "text": "变量名不能以数字开头"
      }
    ],
    "answer": "BCD",
    "explanation": "",
    "topic": "",
    "id": "GEN0693",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "查看 Linux 系统进程信息的命令及选项有",
    "options": [
      {
        "label": "A",
        "text": "top"
      },
      {
        "label": "B",
        "text": "ps -aux"
      },
      {
        "label": "C",
        "text": "ps -ef"
      },
      {
        "label": "D",
        "text": "kill -9"
      }
    ],
    "answer": "ABC",
    "explanation": "",
    "topic": "",
    "id": "GEN0694",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "在终端上查一个很小的数据文件data的内容，我们可以通过( )。",
    "options": [
      {
        "label": "A",
        "text": "vi data"
      },
      {
        "label": "B",
        "text": "less data"
      },
      {
        "label": "C",
        "text": "cat data"
      },
      {
        "label": "D",
        "text": "man data"
      }
    ],
    "answer": "ABC",
    "explanation": "",
    "topic": "",
    "id": "GEN0695",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下属于 Shell 编程流程控制结构的有",
    "options": [
      {
        "label": "A",
        "text": "if...elif...fi"
      },
      {
        "label": "B",
        "text": "for 循环"
      },
      {
        "label": "C",
        "text": "while 循环"
      },
      {
        "label": "D",
        "text": "case...in...esac"
      }
    ],
    "answer": "ABCD",
    "explanation": "",
    "topic": "",
    "id": "GEN0696",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下对管道符 “|” 的使用规则描述正确的有( )",
    "options": [
      {
        "label": "A",
        "text": "仅能传递前一个命令的标准输出"
      },
      {
        "label": "B",
        "text": "右侧命令必须支持接收标准输入"
      },
      {
        "label": "C",
        "text": "可连接任意两个 Linux 命令直接传递数据"
      },
      {
        "label": "D",
        "text": "无法传递前一个命令的标准错误"
      }
    ],
    "answer": "ABD",
    "explanation": "",
    "topic": "",
    "id": "GEN0697",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "下列命令可以独立使用达到查看文件的效果的是( )。",
    "options": [
      {
        "label": "A",
        "text": "vi"
      },
      {
        "label": "B",
        "text": "more"
      },
      {
        "label": "C",
        "text": "cat"
      },
      {
        "label": "D",
        "text": "echo"
      }
    ],
    "answer": "ABC",
    "explanation": "",
    "topic": "",
    "id": "GEN0698",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下能查看文件内容的命令有",
    "options": [
      {
        "label": "A",
        "text": "more"
      },
      {
        "label": "B",
        "text": "cat"
      },
      {
        "label": "C",
        "text": "head"
      },
      {
        "label": "D",
        "text": "less"
      }
    ],
    "answer": "ABCD",
    "explanation": "",
    "topic": "",
    "id": "GEN0699",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下关于文件重定向的描述正确的有( )",
    "options": [
      {
        "label": "A",
        "text": "“>>” 表示追加重定向"
      },
      {
        "label": "B",
        "text": "“>” 表示覆盖重定向"
      },
      {
        "label": "C",
        "text": "“<” 表示标准输出重定向"
      },
      {
        "label": "D",
        "text": "“2>” 表示标准错误输出重定向"
      }
    ],
    "answer": "ABD",
    "explanation": "",
    "topic": "",
    "id": "GEN0700",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "命令模式进入插入模式的命令有( )。",
    "options": [
      {
        "label": "A",
        "text": "b"
      },
      {
        "label": "B",
        "text": "a"
      },
      {
        "label": "C",
        "text": "o"
      },
      {
        "label": "D",
        "text": "d"
      }
    ],
    "answer": "BC",
    "explanation": "",
    "topic": "",
    "id": "GEN0701",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "对权限rwxrw-r—描述正确的是( )",
    "options": [
      {
        "label": "A",
        "text": "可以使用chmod的数字设定法754设定"
      },
      {
        "label": "B",
        "text": "可以使用chmod的文字设定法g+rw设定中间三位"
      },
      {
        "label": "C",
        "text": "可以使用chmod的文字设定法u=rwx设定前三位"
      },
      {
        "label": "D",
        "text": "可以使用chmod的文字设定法o=r设定最后三位"
      }
    ],
    "answer": "CD",
    "explanation": "",
    "topic": "",
    "id": "GEN0702",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下对 declare 命令参数功能描述正确的有( )",
    "options": [
      {
        "label": "A",
        "text": "-x 用于将变量设为环境变量"
      },
      {
        "label": "B",
        "text": "-i 用于定义整数变量"
      },
      {
        "label": "C",
        "text": "-r 用于取消变量的只读属性"
      },
      {
        "label": "D",
        "text": "-a 用于定义数组变量"
      }
    ],
    "answer": "ABD",
    "explanation": "",
    "topic": "",
    "id": "GEN0703",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下对 Shell 脚本执行方式描述正确的有( )",
    "options": [
      {
        "label": "A",
        "text": "无需赋予执行权限，使用 sh 命令执行"
      },
      {
        "label": "B",
        "text": "直接双击脚本文件执行"
      },
      {
        "label": "C",
        "text": "赋予执行权限后，通过相对路径执行"
      },
      {
        "label": "D",
        "text": "赋予执行权限后，通过绝对路径执行"
      }
    ],
    "answer": "ACD",
    "explanation": "",
    "topic": "",
    "id": "GEN0704",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下属于 Linux 目录操作命令的有",
    "options": [
      {
        "label": "A",
        "text": "rmdir"
      },
      {
        "label": "B",
        "text": "cd"
      },
      {
        "label": "C",
        "text": "mkdir"
      },
      {
        "label": "D",
        "text": "pwd"
      }
    ],
    "answer": "ABCD",
    "explanation": "",
    "topic": "",
    "id": "GEN0705",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下对 cp 命令选项功能描述正确的有( )",
    "options": [
      {
        "label": "A",
        "text": "-a 选项适用于复制目录，保留链接、文件属性及目录下所有内容"
      },
      {
        "label": "B",
        "text": "-i 覆盖目标文件前会提示用户确认"
      },
      {
        "label": "C",
        "text": "-d 复制时保留源文件的链接属性(类似 Windows 快捷方式)"
      },
      {
        "label": "D",
        "text": "-p 仅复制文件内容，不保留原文件的修改时间和访问权限"
      }
    ],
    "answer": "ABC",
    "explanation": "",
    "topic": "",
    "id": "GEN0706",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下对 Linux 文件权限数字表示法描述正确的有",
    "options": [
      {
        "label": "A",
        "text": "755 表示所有者可读可写可执行，同组和其他用户只读"
      },
      {
        "label": "B",
        "text": "x 对应权限值 1"
      },
      {
        "label": "C",
        "text": "r 对应权限值 4"
      },
      {
        "label": "D",
        "text": "w 对应权限值 2"
      }
    ],
    "answer": "BCD",
    "explanation": "",
    "topic": "",
    "id": "GEN0707",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "多选题",
    "title": "以下关于 basename 和 dirname 命令的功能描述正确的有( )",
    "options": [
      {
        "label": "A",
        "text": "dirname /home/test/file.txt 输出 “/home/test”"
      },
      {
        "label": "B",
        "text": "basename /home/test/file.txt .txt 输出 “file”"
      },
      {
        "label": "C",
        "text": "dirname /home/test/ 输出 “/home/test”"
      },
      {
        "label": "D",
        "text": "basename /home/test/file.txt 输出 “file.txt”"
      }
    ],
    "answer": "ABD",
    "explanation": "",
    "topic": "",
    "id": "GEN0708",
    "level": "B",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "简答题",
    "title": "写出以下shell程序运行结果mystr=\"Hi there\"echo $mystrecho \"$mystr\"echo '$mystr'echo \\$mystrecho Enter x+y+zread mystr  #此时用户在键盘输入5+6+7echo '$mystr'  now  equals  $mystr",
    "options": [],
    "answer": "Hi there Hi there $mystr $mystr Enter x+y+z 5+6+7（输入） $mystr  now equals 5+6+7",
    "explanation": "",
    "topic": "",
    "id": "GEN0709",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Linux",
    "type": "简答题",
    "title": "按下列要求写出每一步骤的命令（1）新建一个用户user1，并指定其所属组为group1。（2）在用户user1个人目录下新建目录test。（3）复制/tmp/myfile目录下的所有以h开头目录或文件到test目录中。 ### 1. (简答题)介绍一下软连接和硬链接，以及两者之间的区别",
    "options": [],
    "answer": "（1）adduser –g group1 user1  或 useradd –g group1 user1（2）mkdir /home/user1/test （3）cp /tmp/myfile/h*  /home/user1/test",
    "explanation": "",
    "topic": "",
    "id": "GEN0710",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "获取元组val t=(1, \"Rose\",true)中的\" Rose \"的选项是( )。",
    "options": [
      {
        "label": "A",
        "text": "t._1"
      },
      {
        "label": "B",
        "text": "t._2"
      },
      {
        "label": "C",
        "text": "t(0)"
      },
      {
        "label": "D",
        "text": "t(1)"
      }
    ],
    "answer": "B",
    "explanation": "Scala元组通过._N访问元素，从1开始编号。t._1=1, t._2=\"Rose\", t._3=true。",
    "topic": "重点",
    "level": "A",
    "id": "GEN0711",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "Apache Spark提供了哪些编程语言的接口( )。",
    "options": [
      {
        "label": "A",
        "text": "Java"
      },
      {
        "label": "B",
        "text": "Scala"
      },
      {
        "label": "C",
        "text": "Python"
      },
      {
        "label": "D",
        "text": "以上选项都是"
      }
    ],
    "answer": "D",
    "explanation": "Spark原生支持Scala、Java、Python和R四种语言接口。",
    "topic": "Spark概述",
    "level": "A",
    "id": "GEN0712",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "以下选项中定义List列表错误的是( )。",
    "options": [
      {
        "label": "A",
        "text": "val list=2::3::List(4,5)"
      },
      {
        "label": "B",
        "text": "val list=List(1,2,3,4)"
      },
      {
        "label": "C",
        "text": "val list=2::3::4"
      },
      {
        "label": "D",
        "text": "val list=1::2::3::Nil"
      }
    ],
    "answer": "C",
    "explanation": "Scala中::是List的方法，右侧必须是List类型。2::3::4 中4是Int不是List，会报错。正确写法应为2::3::4::Nil或2::3::List(4)。",
    "topic": "Scala集合",
    "level": "B",
    "id": "GEN0713",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "以下RDD算子中具有懒加载特性的是( )。",
    "options": [
      {
        "label": "A",
        "text": "foreach( )"
      },
      {
        "label": "B",
        "text": "collect( )"
      },
      {
        "label": "C",
        "text": "reduce( )"
      },
      {
        "label": "D",
        "text": "flatMap( )"
      }
    ],
    "answer": "D",
    "explanation": "flatMap是转换(Transformation)算子，具有懒加载特性。foreach、collect、reduce都是行动(Action)算子，会触发实际计算。",
    "topic": "重点",
    "level": "A",
    "id": "GEN0714",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "阅读以下代码:val rdd1 = sc.parallelize(Array((\"Hadoop\",12), (\"Java\",32), (\"Spark\",22))); val rdd2 = rdd1.map(x=>(x._2,x._1)).sortByKey(false)。关于rdd2描述错误的是( )。",
    "options": [
      {
        "label": "A",
        "text": "sortByKey算子只能作用在key-value对的RDD上"
      },
      {
        "label": "B",
        "text": "rdd2的类型为RDD[(Int,String)]"
      },
      {
        "label": "C",
        "text": "rdd2中的元素是[(32, \"Java\"),(22, \"Spark\"),(12, \"Hadoop\")]"
      },
      {
        "label": "D",
        "text": "sortByKey是一个行动算子"
      }
    ],
    "answer": "D",
    "explanation": "sortByKey是转换(Transformation)算子，不是行动(Action)算子。sortByKey(false)表示降序排列，结果为(32,Java),(22,Spark),(12,Hadoop)。",
    "topic": "重点",
    "level": "A",
    "id": "GEN0715",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "Spark中触发真正计算的方法是( )。",
    "options": [
      {
        "label": "A",
        "text": "map( )"
      },
      {
        "label": "B",
        "text": "collect( )"
      },
      {
        "label": "C",
        "text": "sortBy( )"
      },
      {
        "label": "D",
        "text": "groupByKey( )"
      }
    ],
    "answer": "B",
    "explanation": "collect()是行动(Action)算子，会触发真正的计算并将结果返回到Driver。map、sortBy、groupByKey都是转换算子，具有懒加载特性。",
    "topic": "Spark RDD",
    "level": "A",
    "id": "GEN0716",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "多选题",
    "title": "以下属于Spark特点的是( )。",
    "options": [
      {
        "label": "A",
        "text": "快速"
      },
      {
        "label": "B",
        "text": "易用性"
      },
      {
        "label": "C",
        "text": "通用性"
      },
      {
        "label": "D",
        "text": "随处运行"
      }
    ],
    "answer": "ABCD",
    "explanation": "Spark的四大特点：快速(Fast)、易用(Easy to Use)、通用(General)、随处运行(Runs Everywhere)。",
    "topic": "重点",
    "level": "A",
    "id": "GEN0717",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "多选题",
    "title": "以下属于Spark模块的是( )。",
    "options": [
      {
        "label": "A",
        "text": "Spark Core"
      },
      {
        "label": "B",
        "text": "Spark SQL"
      },
      {
        "label": "C",
        "text": "Spark Streaming"
      },
      {
        "label": "D",
        "text": "Flink"
      }
    ],
    "answer": "ABC",
    "explanation": "Spark模块包括Spark Core、Spark SQL、Spark Streaming、MLlib、GraphX。Flink是另一个独立的流处理框架。",
    "topic": "重点",
    "level": "A",
    "id": "GEN0718",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "多选题",
    "title": "Spark可以使用的资源管理器有哪些( )。",
    "options": [
      {
        "label": "A",
        "text": "Mesos"
      },
      {
        "label": "B",
        "text": "Standalone"
      },
      {
        "label": "C",
        "text": "YARN"
      },
      {
        "label": "D",
        "text": "Cloud"
      }
    ],
    "answer": "ABC",
    "explanation": "Spark支持Standalone（自带）、YARN、Mesos和Kubernetes四种集群管理器。Cloud不是资源管理器。",
    "topic": "重点",
    "level": "A",
    "id": "GEN0719",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "多选题",
    "title": "以下关于Spark的描述中正确的是( )。",
    "options": [
      {
        "label": "A",
        "text": "快速"
      },
      {
        "label": "B",
        "text": "可扩展"
      },
      {
        "label": "C",
        "text": "具有容错能力"
      },
      {
        "label": "D",
        "text": "可以替代Hadoop"
      }
    ],
    "answer": "ABC",
    "explanation": "Spark快速、可扩展、具有容错能力，但它不能完全替代Hadoop生态圈（如HDFS、YARN等组件仍需要Hadoop）。",
    "topic": "Spark概述",
    "level": "B",
    "id": "GEN0720",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "多选题",
    "title": "属于RDD行动算子的方法是( )。",
    "options": [
      {
        "label": "A",
        "text": "reduce( )"
      },
      {
        "label": "B",
        "text": "foreach( )"
      },
      {
        "label": "C",
        "text": "collect( )"
      },
      {
        "label": "D",
        "text": "union( )"
      }
    ],
    "answer": "ABC",
    "explanation": "reduce、foreach、collect都是行动(Action)算子。union是转换(Transformation)算子，用于合并两个RDD。",
    "topic": "Spark RDD",
    "level": "A",
    "id": "GEN0721",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Spark是一个快速的、分布式的集群资源管理框架。( )",
    "options": [
      {
        "label": "A",
        "text": "对"
      },
      {
        "label": "B",
        "text": "错"
      }
    ],
    "answer": "B",
    "explanation": "Spark是分布式计算引擎，不是资源管理框架。YARN和Mesos才是集群资源管理框架。",
    "topic": "重点",
    "level": "A",
    "id": "GEN0722",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Spark是Hadoop的替代方案。( )",
    "options": [
      {
        "label": "A",
        "text": "对"
      },
      {
        "label": "B",
        "text": "错"
      }
    ],
    "answer": "B",
    "explanation": "Spark替代的是Hadoop的MapReduce计算模型，但不是整个Hadoop生态的替代方案。Spark通常与HDFS、YARN等Hadoop组件配合使用。",
    "topic": "Spark概述",
    "level": "A",
    "id": "GEN0723",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Scala支持的元组最大长度是22。( )",
    "options": [
      {
        "label": "A",
        "text": "对"
      },
      {
        "label": "B",
        "text": "错"
      }
    ],
    "answer": "A",
    "explanation": "Scala中Tuple2到Tuple22共21种元组类型，最大支持22个元素。",
    "topic": "重点",
    "level": "A",
    "id": "GEN0724",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Scala类有主构造和辅助构造，其中主构造会执行类中所有代码块。( )",
    "options": [
      {
        "label": "A",
        "text": "对"
      },
      {
        "label": "B",
        "text": "错"
      }
    ],
    "answer": "A",
    "explanation": "Scala类的主构造器会执行类定义体中除方法和辅助构造器外的所有代码。",
    "topic": "Scala基础",
    "level": "B",
    "id": "GEN0725",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Spark作业中，窄依赖是划分Stage的依据。( )",
    "options": [
      {
        "label": "A",
        "text": "对"
      },
      {
        "label": "B",
        "text": "错"
      }
    ],
    "answer": "B",
    "explanation": "宽依赖(Shuffle Dependency)才是划分Stage的依据。遇到宽依赖时Spark会划分新的Stage，窄依赖不会导致Stage划分。",
    "topic": "重点",
    "level": "A",
    "id": "GEN0726",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "Spark SQL 中用于处理结构化数据的编程入口是( )。",
    "options": [
      {
        "label": "A",
        "text": "SparkContext"
      },
      {
        "label": "B",
        "text": "SparkSession"
      },
      {
        "label": "C",
        "text": "StreamingContext"
      },
      {
        "label": "D",
        "text": "SQLContext"
      }
    ],
    "answer": "B",
    "explanation": "Spark 2.0+中SparkSession是统一的编程入口，整合了SparkContext、SQLContext和HiveContext。",
    "topic": "重点",
    "level": "A",
    "id": "GEN0727",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "下列关于 DataFrame 描述错误的是( )。",
    "options": [
      {
        "label": "A",
        "text": "是列命名的分布式数据集"
      },
      {
        "label": "B",
        "text": "等价于 DataSet[Row]"
      },
      {
        "label": "C",
        "text": "不支持 SQL 查询"
      },
      {
        "label": "D",
        "text": "可从 RDD、文件、Hive 表创建"
      }
    ],
    "answer": "C",
    "explanation": "DataFrame支持SQL查询，可通过createOrReplaceTempView注册临时视图后使用spark.sql()执行SQL。",
    "topic": "重点",
    "level": "A",
    "id": "GEN0728",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "Spark SQL 默认读取的文件格式是( )。",
    "options": [
      {
        "label": "A",
        "text": "CSV"
      },
      {
        "label": "B",
        "text": "JSON"
      },
      {
        "label": "C",
        "text": "Parquet"
      },
      {
        "label": "D",
        "text": "Text"
      }
    ],
    "answer": "C",
    "explanation": "Spark SQL默认使用Parquet列式存储格式，具有高压缩比和高效的列裁剪特性。",
    "topic": "重点",
    "level": "A",
    "id": "GEN0729",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "下列哪个方法用于将 DataFrame 注册为临时视图( )。",
    "options": [
      {
        "label": "A",
        "text": "createTable"
      },
      {
        "label": "B",
        "text": "createOrReplaceTempView"
      },
      {
        "label": "C",
        "text": "registerTable"
      },
      {
        "label": "D",
        "text": "createGlobalView"
      }
    ],
    "answer": "B",
    "explanation": "createOrReplaceTempView()将DataFrame注册为临时视图，仅在当前SparkSession生命周期内有效。createGlobalTempView()创建全局临时视图。",
    "topic": "重点",
    "level": "A",
    "id": "GEN0730",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "想要将 DataFrame 保存为覆盖已有数据的模式，应选择( )。",
    "options": [
      {
        "label": "A",
        "text": "SaveMode.ErrorIfExists"
      },
      {
        "label": "B",
        "text": "SaveMode.Append"
      },
      {
        "label": "C",
        "text": "SaveMode.Overwrite"
      },
      {
        "label": "D",
        "text": "SaveMode.Ignore"
      }
    ],
    "answer": "C",
    "explanation": "SaveMode.Overwrite覆盖已存在的数据；ErrorIfExists(默认)数据存在则报错；Append追加；Ignore存在则忽略。",
    "topic": "重点",
    "level": "A",
    "id": "GEN0731",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "多选题",
    "title": "Spark SQL 的核心特点包括( )。",
    "options": [
      {
        "label": "A",
        "text": "与 Spark 应用无缝集成"
      },
      {
        "label": "B",
        "text": "统一访问多种数据源"
      },
      {
        "label": "C",
        "text": "兼容 Hive"
      },
      {
        "label": "D",
        "text": "提供标准 JDBC/ODBC 连接"
      }
    ],
    "answer": "ABCD",
    "explanation": "Spark SQL四大特点：无缝集成Spark应用、统一数据访问、Hive兼容、标准化JDBC/ODBC连接。",
    "topic": "重点",
    "level": "A",
    "id": "GEN0732",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "多选题",
    "title": "下列属于 Spark SQL 支持的数据源有( )。",
    "options": [
      {
        "label": "A",
        "text": "Hive"
      },
      {
        "label": "B",
        "text": "Parquet"
      },
      {
        "label": "C",
        "text": "JSON"
      },
      {
        "label": "D",
        "text": "JDBC"
      }
    ],
    "answer": "ABCD",
    "explanation": "Spark SQL支持多种数据源，包括Hive、Parquet、JSON、JDBC、CSV、ORC等。",
    "topic": "重点",
    "level": "A",
    "id": "GEN0733",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "多选题",
    "title": "DataFrame 常用的查看数据方法有( )。",
    "options": [
      {
        "label": "A",
        "text": "show( )"
      },
      {
        "label": "B",
        "text": "printSchema( )"
      },
      {
        "label": "C",
        "text": "take( )"
      },
      {
        "label": "D",
        "text": "first( )"
      }
    ],
    "answer": "ABCD",
    "explanation": "show()显示前20行、printSchema()打印结构、take(n)返回前n行数组、first()返回第一行。",
    "topic": "重点",
    "level": "A",
    "id": "GEN0734",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "多选题",
    "title": "下列属于 DataFrame 保存模式 SaveMode 的有( )。",
    "options": [
      {
        "label": "A",
        "text": "ErrorIfExists"
      },
      {
        "label": "B",
        "text": "Append"
      },
      {
        "label": "C",
        "text": "Overwrite"
      },
      {
        "label": "D",
        "text": "Ignore"
      }
    ],
    "answer": "ABCD",
    "explanation": "SaveMode四种模式：ErrorIfExists(默认，存在则报错)、Append(追加)、Overwrite(覆盖)、Ignore(存在则忽略)。",
    "topic": "重点",
    "level": "A",
    "id": "GEN0735",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "多选题",
    "title": "关于 DataSet 说法正确的有( )。",
    "options": [
      {
        "label": "A",
        "text": "强类型数据集"
      },
      {
        "label": "B",
        "text": "支持 RDD 算子"
      },
      {
        "label": "C",
        "text": "可与 DataFrame 相互转换"
      },
      {
        "label": "D",
        "text": "Scala/Java 可用"
      }
    ],
    "answer": "ABCD",
    "explanation": "DataSet是强类型的，支持函数式算子，可通过toDF()转DataFrame，DataFrame通过as[T]转DataSet。Python不支持DataSet。",
    "topic": "重点",
    "level": "A",
    "id": "GEN0736",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Spark SQL 的 Catalyst 是查询优化框架。( )",
    "options": [
      {
        "label": "A",
        "text": "对"
      },
      {
        "label": "B",
        "text": "错"
      }
    ],
    "answer": "A",
    "explanation": "Catalyst是Spark SQL的核心查询优化器，负责SQL/DataFrame的逻辑优化和物理执行计划生成。",
    "topic": "重点",
    "level": "A",
    "id": "GEN0737",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "DataFrame 本质上是 Dataset [Row]。( )",
    "options": [
      {
        "label": "A",
        "text": "对"
      },
      {
        "label": "B",
        "text": "错"
      }
    ],
    "answer": "A",
    "explanation": "DataFrame是Dataset[Row]的类型别名，Row是弱类型的。",
    "topic": "重点",
    "level": "A",
    "id": "GEN0738",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "spark-sql 命令可直接在 Linux 终端执行 SQL。( )",
    "options": [
      {
        "label": "A",
        "text": "对"
      },
      {
        "label": "B",
        "text": "错"
      }
    ],
    "answer": "A",
    "explanation": "spark-sql是Spark提供的命令行工具，可在终端直接执行SQL查询。类似于Hive的CLI。",
    "topic": "Spark SQL",
    "level": "B",
    "id": "GEN0739",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "使用 DataSet 必须导入 spark.implicits._。( )",
    "options": [
      {
        "label": "A",
        "text": "对"
      },
      {
        "label": "B",
        "text": "错"
      }
    ],
    "answer": "A",
    "explanation": "使用DataSet的toDS()、toDF()等隐式转换需要导入spark.implicits._。",
    "topic": "重点",
    "level": "A",
    "id": "GEN0740",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "spark-shell 中默认已提供 spark 对象即 SparkSession。( )",
    "options": [
      {
        "label": "A",
        "text": "对"
      },
      {
        "label": "B",
        "text": "错"
      }
    ],
    "answer": "A",
    "explanation": "Spark 2.0+的spark-shell启动时会自动创建名为spark的SparkSession对象和名为sc的SparkContext对象。",
    "topic": "重点",
    "level": "A",
    "id": "GEN0741",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "以下关于MapReduce缺点的描述，错误的是( )。",
    "options": [
      {
        "label": "A",
        "text": "每次Job结果写入磁盘，大量IO开销"
      },
      {
        "label": "B",
        "text": "编程模型只有Map和Reduce，表达能力有限"
      },
      {
        "label": "C",
        "text": "不适合迭代式计算和交互式查询"
      },
      {
        "label": "D",
        "text": "MapReduce比Spark速度更快"
      }
    ],
    "answer": "D",
    "explanation": "MapReduce的缺点包括磁盘IO大、编程模型单一、不适合迭代计算。Spark比MapReduce快10-100倍。",
    "topic": "Spark vs MapReduce",
    "id": "GEN0742",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "多选题",
    "title": "Spark 相比 MapReduce 的优势包括( )。",
    "options": [
      {
        "label": "A",
        "text": "内存迭代计算，速度快10-100倍"
      },
      {
        "label": "B",
        "text": "提供丰富的转换和行动算子"
      },
      {
        "label": "C",
        "text": "支持迭代计算和交互式查询"
      },
      {
        "label": "D",
        "text": "API更简洁易用"
      }
    ],
    "answer": "ABCD",
    "explanation": "Spark核心优势：内存计算(快)、丰富算子、支持迭代/交互、简洁API。",
    "topic": "Spark vs MapReduce",
    "id": "GEN0743",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "简答题",
    "title": "简述MapReduce的两大缺点，并说明Spark是如何解决这些问题的。",
    "options": [],
    "answer": "1) 磁盘IO大：MR每次Job结果写磁盘；Spark基于内存迭代计算。2) 编程模型单一：MR只有Map和Reduce；Spark提供flatMap/map/reduceByKey等丰富算子。",
    "explanation": "Spark vs MapReduce",
    "topic": "重点",
    "id": "GEN0744",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "某企业需要对用户行为日志进行实时分析并及时告警，应使用Spark的哪个组件？( )",
    "options": [
      {
        "label": "A",
        "text": "Spark SQL"
      },
      {
        "label": "B",
        "text": "Spark Streaming"
      },
      {
        "label": "C",
        "text": "MLlib"
      },
      {
        "label": "D",
        "text": "GraphX"
      }
    ],
    "answer": "B",
    "explanation": "Spark Streaming用于流式计算和实时处理，适合实时日志分析场景。Spark SQL用于结构化数据，MLlib用于机器学习，GraphX用于图计算。",
    "topic": "Spark组件选型",
    "id": "GEN0745",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "某电商平台需要分析用户购买行为，构建商品推荐模型，应使用Spark的哪个组件？( )",
    "options": [
      {
        "label": "A",
        "text": "Spark Streaming"
      },
      {
        "label": "B",
        "text": "Spark SQL"
      },
      {
        "label": "C",
        "text": "MLlib"
      },
      {
        "label": "D",
        "text": "GraphX"
      }
    ],
    "answer": "C",
    "explanation": "MLlib是Spark的机器学习库，适用于推荐系统、分类、聚类等场景。",
    "topic": "Spark组件选型",
    "id": "GEN0746",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "分析社交网络中用户之间的关系(如好友推荐、影响力分析)，最适合使用Spark的哪个组件？( )",
    "options": [
      {
        "label": "A",
        "text": "MLlib"
      },
      {
        "label": "B",
        "text": "Spark SQL"
      },
      {
        "label": "C",
        "text": "GraphX"
      },
      {
        "label": "D",
        "text": "Spark Streaming"
      }
    ],
    "answer": "C",
    "explanation": "GraphX是Spark的图计算组件，适用于社交网络分析、PageRank等图算法场景。",
    "topic": "Spark组件选型",
    "id": "GEN0747",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "对Hive中的结构化数据执行SQL查询分析，应使用( )。",
    "options": [
      {
        "label": "A",
        "text": "Spark Core"
      },
      {
        "label": "B",
        "text": "Spark SQL"
      },
      {
        "label": "C",
        "text": "Spark Streaming"
      },
      {
        "label": "D",
        "text": "MLlib"
      }
    ],
    "answer": "B",
    "explanation": "Spark SQL用于结构化数据处理和SQL查询，兼容Hive。",
    "topic": "Spark组件选型",
    "id": "GEN0748",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "Scala中，以下for循环语法正确的是( )。",
    "options": [
      {
        "label": "A",
        "text": "for (i = 0; i < 10; i++)"
      },
      {
        "label": "B",
        "text": "for (i <- 1 to 10)"
      },
      {
        "label": "C",
        "text": "for (i in 1..10)"
      },
      {
        "label": "D",
        "text": "for (int i : list)"
      }
    ],
    "answer": "B",
    "explanation": "Scala的for循环使用生成器语法：for (变量 <- 集合/范围)。1 to 10 表示1到10的Range。",
    "topic": "Scala for循环",
    "id": "GEN0749",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Scala中，for (i <- 1 to 10) 表示i从1遍历到10（包含10）。( )",
    "options": [
      {
        "label": "A",
        "text": "对"
      },
      {
        "label": "B",
        "text": "错"
      }
    ],
    "answer": "A",
    "explanation": "1 to 10 包含10；1 until 10 不包含10。",
    "topic": "Scala for循环",
    "id": "GEN0750",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "Scala中，for (i <- 1 until 5) 循环执行的次数是( )。",
    "options": [
      {
        "label": "A",
        "text": "3"
      },
      {
        "label": "B",
        "text": "4"
      },
      {
        "label": "C",
        "text": "5"
      },
      {
        "label": "D",
        "text": "6"
      }
    ],
    "answer": "B",
    "explanation": "1 until 5 表示[1,5)，即1,2,3,4共4次。to是闭区间[1,5]。",
    "topic": "Scala for循环",
    "id": "GEN0751",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "Scala中，以下创建不可变Set的语法正确的是( )。",
    "options": [
      {
        "label": "A",
        "text": "val s = Set(1, 2, 3)"
      },
      {
        "label": "B",
        "text": "val s = new Set(1, 2, 3)"
      },
      {
        "label": "C",
        "text": "val s = [1, 2, 3]"
      },
      {
        "label": "D",
        "text": "val s = {1, 2, 3}"
      }
    ],
    "answer": "A",
    "explanation": "Scala默认导入不可变Set，使用Set(元素...)创建。Set特性：元素不重复。",
    "topic": "Scala集合",
    "id": "GEN0752",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "Scala中，以下创建包含键值对的Map语法正确的是( )。",
    "options": [
      {
        "label": "A",
        "text": "val m = Map{\"a\"->1, \"b\"->2}"
      },
      {
        "label": "B",
        "text": "val m = Map(\"a\"->1, \"b\"->2)"
      },
      {
        "label": "C",
        "text": "val m = [\"a\":1, \"b\":2]"
      },
      {
        "label": "D",
        "text": "val m = {\"a\":1, \"b\":2}"
      }
    ],
    "answer": "B",
    "explanation": "Scala使用Map(键->值, ...)创建映射。-> 是Scala中创建键值对的方法。",
    "topic": "Scala集合",
    "id": "GEN0753",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Scala中Set与List的主要区别是Set元素不重复且无序。( )",
    "options": [
      {
        "label": "A",
        "text": "对"
      },
      {
        "label": "B",
        "text": "错"
      }
    ],
    "answer": "A",
    "explanation": "Set是无序不重复集合；List是有序可重复集合。",
    "topic": "Scala集合",
    "id": "GEN0754",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "Scala中，class和object的主要区别是( )。",
    "options": [
      {
        "label": "A",
        "text": "class可以有方法，object不能"
      },
      {
        "label": "B",
        "text": "class是多例的，object是单例的"
      },
      {
        "label": "C",
        "text": "class能继承，object不能"
      },
      {
        "label": "D",
        "text": "class运行快，object运行慢"
      }
    ],
    "answer": "B",
    "explanation": "class用于创建多个实例(多例)；object是单例对象，类似Java的静态工具类。",
    "topic": "Scala类与对象",
    "id": "GEN0755",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Scala中，用object关键字定义的伴生对象是单例的，所有静态成员应放在object中。( )",
    "options": [
      {
        "label": "A",
        "text": "对"
      },
      {
        "label": "B",
        "text": "错"
      }
    ],
    "answer": "A",
    "explanation": "Scala没有static关键字，静态成员放在object（单例对象）中。同名class和object互为伴生关系。",
    "topic": "Scala类与对象",
    "id": "GEN0756",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "Scala中，用于实现类继承的关键字是( )。",
    "options": [
      {
        "label": "A",
        "text": "implements"
      },
      {
        "label": "B",
        "text": "extends"
      },
      {
        "label": "C",
        "text": "inherit"
      },
      {
        "label": "D",
        "text": "derive"
      }
    ],
    "answer": "B",
    "explanation": "Scala使用extends实现继承，与Java一致。",
    "topic": "Scala面向对象",
    "id": "GEN0757",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "Scala中，与Java的interface类似、可被多重继承的特性是( )。",
    "options": [
      {
        "label": "A",
        "text": "class"
      },
      {
        "label": "B",
        "text": "object"
      },
      {
        "label": "C",
        "text": "trait"
      },
      {
        "label": "D",
        "text": "abstract"
      }
    ],
    "answer": "C",
    "explanation": "trait（特质）类似Java 8的接口，可包含抽象和具体方法，支持多重混入(with)。",
    "topic": "Scala面向对象",
    "id": "GEN0758",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Scala中，子类重写父类方法时必须使用override关键字。( )",
    "options": [
      {
        "label": "A",
        "text": "对"
      },
      {
        "label": "B",
        "text": "错"
      }
    ],
    "answer": "A",
    "explanation": "Scala要求重写方法时必须显式使用override，避免意外覆盖。",
    "topic": "Scala面向对象",
    "id": "GEN0759",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "Spark Standalone模式下，负责资源管理和任务调度的主节点是( )。",
    "options": [
      {
        "label": "A",
        "text": "Worker"
      },
      {
        "label": "B",
        "text": "Executor"
      },
      {
        "label": "C",
        "text": "Master"
      },
      {
        "label": "D",
        "text": "Driver"
      }
    ],
    "answer": "C",
    "explanation": "Master是Standalone模式的主节点，负责资源管理。Worker是从节点，Executor是执行器，Driver是驱动程序。",
    "topic": "Spark架构",
    "id": "GEN0760",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "Spark中，负责运行具体Task、并将结果返回给Driver的组件是( )。",
    "options": [
      {
        "label": "A",
        "text": "Master"
      },
      {
        "label": "B",
        "text": "Worker"
      },
      {
        "label": "C",
        "text": "Executor"
      },
      {
        "label": "D",
        "text": "NameNode"
      }
    ],
    "answer": "C",
    "explanation": "Executor是运行在Worker节点上的JVM进程，负责执行具体Task和存储数据。",
    "topic": "Spark架构",
    "id": "GEN0761",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "多选题",
    "title": "以下属于Spark基本架构组件的包括( )。",
    "options": [
      {
        "label": "A",
        "text": "Driver（驱动程序）"
      },
      {
        "label": "B",
        "text": "Executor（执行器）"
      },
      {
        "label": "C",
        "text": "Master（主节点）"
      },
      {
        "label": "D",
        "text": "Worker（从节点）"
      }
    ],
    "answer": "ABCD",
    "explanation": "Spark架构包含Driver(运行main)、Master(资源管理)、Worker(工作节点)、Executor(任务执行)。",
    "topic": "Spark架构",
    "id": "GEN0762",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Spark中，Driver程序运行在Master节点上。( )",
    "options": [
      {
        "label": "A",
        "text": "对"
      },
      {
        "label": "B",
        "text": "错"
      }
    ],
    "answer": "B",
    "explanation": "Driver可以在任意节点上运行（通常在提交作业的客户端），不一定在Master上。",
    "topic": "Spark架构",
    "id": "GEN0763",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "填空题",
    "title": "Spark中，创建SparkConf并设置应用名称的代码是：val conf = new SparkConf().____(\"MyApp\")。",
    "options": [],
    "answer": "setAppName",
    "explanation": "SparkConf.setAppName()设置应用名称，setMaster()设置运行模式。",
    "topic": "SparkConf/SparkContext",
    "id": "GEN0764",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "填空题",
    "title": "Spark中，设置本地运行模式的代码是：conf.setMaster(\"____\")。",
    "options": [],
    "answer": "local[*]",
    "explanation": "local[*]表示使用本地所有CPU核心运行Spark。local[2]指定2个核心。",
    "topic": "SparkConf/SparkContext",
    "id": "GEN0765",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "以下创建SparkContext的正确代码是( )。",
    "options": [
      {
        "label": "A",
        "text": "val sc = SparkContext(conf)"
      },
      {
        "label": "B",
        "text": "val sc = new SparkContext(conf)"
      },
      {
        "label": "C",
        "text": "val sc = SparkSession(conf)"
      },
      {
        "label": "D",
        "text": "val sc = SparkContext.create(conf)"
      }
    ],
    "answer": "B",
    "explanation": "使用new SparkContext(conf)创建。Spark 2.0+也可通过SparkSession.sparkContext获取。",
    "topic": "SparkConf/SparkContext",
    "id": "GEN0766",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "多选题",
    "title": "RDD的五大属性包括( )。",
    "options": [
      {
        "label": "A",
        "text": "分区列表（Partitions）"
      },
      {
        "label": "B",
        "text": "依赖关系（Dependencies）"
      },
      {
        "label": "C",
        "text": "计算函数（Compute）"
      },
      {
        "label": "D",
        "text": "分区器（Partitioner，可选）"
      },
      {
        "label": "E",
        "text": "优先位置列表（Preferred Locations）"
      }
    ],
    "answer": "ABCDE",
    "explanation": "RDD五大属性：分区列表、每个分区的计算函数、依赖关系、分区器(可选)、优先位置列表。",
    "topic": "RDD五大属性",
    "id": "GEN0767",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "填空题",
    "title": "RDD全称是弹性分布式数据集，英文是____ Distributed Dataset。",
    "options": [],
    "answer": "Resilient",
    "explanation": "RDD = Resilient Distributed Dataset，Spark的核心数据抽象。",
    "topic": "RDD概念",
    "id": "GEN0768",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "简答题",
    "title": "简述使用Spark RDD进行编程的五大步骤。",
    "options": [],
    "answer": "1) 创建SparkConf设置参数（AppName、Master）；2) 创建SparkContext(sc)；3) 读取数据源创建RDD并执行转换操作；4) 通过行动操作触发计算并存储结果；5) 调用sc.stop()停止SparkContext。",
    "explanation": "RDD编程步骤",
    "topic": "重点",
    "id": "GEN0769",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "程序题",
    "title": "使用Spark RDD编写WordCount程序（统计文本中每个单词出现次数），请写出完整代码。",
    "options": [],
    "answer": "val conf = new SparkConf().setAppName(\"WordCount\").setMaster(\"local[*]\"); val sc = new SparkContext(conf); val rdd = sc.textFile(\"input.txt\"); val result = rdd.flatMap(_.split(\" \")).map((_, 1)).reduceByKey(_ + _); result.saveAsTextFile(\"output\"); sc.stop()",
    "explanation": "RDD编程模板",
    "topic": "重点",
    "id": "GEN0770",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "Spark中，自定义分区需要继承的类是( )。",
    "options": [
      {
        "label": "A",
        "text": "Partitioner"
      },
      {
        "label": "B",
        "text": "Partition"
      },
      {
        "label": "C",
        "text": "RDD"
      },
      {
        "label": "D",
        "text": "SparkConf"
      }
    ],
    "answer": "A",
    "explanation": "自定义分区器需继承Partitioner类，重写numPartitions和getPartition方法。",
    "topic": "RDD分区",
    "id": "GEN0771",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "RDD的partitioner属性仅对Key-Value类型的RDD有效，对非Key-Value类型为None。( )",
    "options": [
      {
        "label": "A",
        "text": "对"
      },
      {
        "label": "B",
        "text": "错"
      }
    ],
    "answer": "A",
    "explanation": "分区器仅适用于key-value RDD。HashPartitioner是默认分区器。",
    "topic": "RDD分区",
    "id": "GEN0772",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "Spark中，下列哪个算子会产生宽依赖(Shuffle)？( )",
    "options": [
      {
        "label": "A",
        "text": "map()"
      },
      {
        "label": "B",
        "text": "filter()"
      },
      {
        "label": "C",
        "text": "reduceByKey()"
      },
      {
        "label": "D",
        "text": "flatMap()"
      }
    ],
    "answer": "C",
    "explanation": "reduceByKey、groupByKey、sortByKey等需要跨分区重组数据的算子会产生宽依赖(Shuffle)。map/filter/flatMap是窄依赖。",
    "topic": "宽窄依赖",
    "id": "GEN0773",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "多选题",
    "title": "以下关于Spark RDD依赖关系的描述，正确的有( )。",
    "options": [
      {
        "label": "A",
        "text": "窄依赖：子RDD的每个分区仅依赖父RDD的少数几个分区"
      },
      {
        "label": "B",
        "text": "宽依赖：子RDD的一个分区依赖父RDD的所有分区"
      },
      {
        "label": "C",
        "text": "遇到宽依赖时会划分新的Stage"
      },
      {
        "label": "D",
        "text": "Stage内的算子都是窄依赖关系"
      }
    ],
    "answer": "ABCD",
    "explanation": "窄依赖一对一或少数对少数；宽依赖(Shuffle)一对多。宽依赖触发Stage划分。Stage内全是窄依赖的流水线操作。",
    "topic": "宽窄依赖",
    "id": "GEN0774",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Spark中，Stage划分的依据是遇到宽依赖(Shuffle Dependency)。( )",
    "options": [
      {
        "label": "A",
        "text": "对"
      },
      {
        "label": "B",
        "text": "错"
      }
    ],
    "answer": "A",
    "explanation": "每个Stage由一组可流水线执行的窄依赖算子组成，宽依赖触发新Stage。",
    "topic": "宽窄依赖",
    "id": "GEN0775",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "Spark SQL中，以下哪种方式是先注册临时视图再用SQL查询？( )",
    "options": [
      {
        "label": "A",
        "text": "df.select(\"name\").show()"
      },
      {
        "label": "B",
        "text": "df.createOrReplaceTempView(\"t\"); spark.sql(\"SELECT * FROM t\")"
      },
      {
        "label": "C",
        "text": "df.filter($\"age\">20).show()"
      },
      {
        "label": "D",
        "text": "df.groupBy(\"dept\").count().show()"
      }
    ],
    "answer": "B",
    "explanation": "Spark SQL支持两种分析方式：1) DataFrame API（select/filter/groupBy）；2) 视图+SQL（createOrReplaceTempView + spark.sql）。",
    "topic": "Spark SQL分析方式",
    "id": "GEN0776",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "简答题",
    "title": "简述Spark SQL中DataFrame的两种数据分析方式，并举例说明各自适用场景。",
    "options": [],
    "answer": "方式1：DataFrame API直接操作（df.select/filter/groupBy），适合编程式链式调用；方式2：注册视图后使用SQL查询（df.createOrReplaceTempView + spark.sql），适合复杂SQL和熟悉SQL的人员。",
    "explanation": "Spark SQL分析方式",
    "topic": "重点",
    "id": "GEN0777",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "多选题",
    "title": "以下关于RDD、DataFrame、DataSet三者的描述，正确的有( )。",
    "options": [
      {
        "label": "A",
        "text": "RDD是最底层的API，无Schema信息"
      },
      {
        "label": "B",
        "text": "DataFrame = Dataset[Row]，有Schema信息"
      },
      {
        "label": "C",
        "text": "DataSet是强类型的，编译时类型安全"
      },
      {
        "label": "D",
        "text": "DataFrame通过Catalyst优化器进行查询优化"
      }
    ],
    "answer": "ABCD",
    "explanation": "Spark 2.0统一了API：RDD(无schema)→DataFrame(有schema,弱类型)→DataSet(强类型)。DataFrame走Catalyst优化。",
    "topic": "Spark SQL概念",
    "id": "GEN0778",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "单选题",
    "title": "Scala中，以下定义方法(method)正确的是( )。",
    "options": [
      {
        "label": "A",
        "text": "val add = (a:Int,b:Int) => a+b"
      },
      {
        "label": "B",
        "text": "def add(a:Int,b:Int):Int = {a+b}"
      },
      {
        "label": "C",
        "text": "function add(a,b){return a+b}"
      },
      {
        "label": "D",
        "text": "method add(a:Int,b:Int) = a+b"
      }
    ],
    "answer": "B",
    "explanation": "Scala方法用def定义：def 方法名(参数):返回类型 = {方法体}。val+箭头是函数(Function)。",
    "topic": "Scala方法与函数",
    "id": "GEN0779",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "判断题",
    "title": "Scala中，方法是类的成员用def定义，函数是对象可以赋值给变量用val定义。( )",
    "options": [
      {
        "label": "A",
        "text": "对"
      },
      {
        "label": "B",
        "text": "错"
      }
    ],
    "answer": "A",
    "explanation": "方法(method)用def定义属于类；函数(function)是FunctionN的实例，可作为值传递。",
    "topic": "Scala方法与函数",
    "id": "GEN0780",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "程序题",
    "title": "使用Spark RDD统计文本文件中每个省份出现的次数，写出核心代码（假设文件每行是一个省份名）。",
    "options": [],
    "answer": "val conf = new SparkConf().setAppName(\"ProvinceCount\").setMaster(\"local[*]\"); val sc = new SparkContext(conf); val rdd = sc.textFile(\"provinces.txt\"); val result = rdd.map((_, 1)).reduceByKey(_ + _); result.foreach(println); sc.stop()",
    "explanation": "RDD编程案例",
    "topic": "重点",
    "id": "GEN0781",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  },
  {
    "subject": "Scala & Spark",
    "type": "简答题",
    "title": "使用Spark SQL统计CSV文件中各部门(dept)的人数，写出核心代码。",
    "options": [],
    "answer": "val spark = SparkSession.builder().appName(\"DeptCount\").master(\"local[*]\").getOrCreate(); val df = spark.read.format(\"csv\").option(\"header\",\"true\").load(\"employees.csv\"); df.createOrReplaceTempView(\"emp\"); spark.sql(\"SELECT dept, COUNT(*) FROM emp GROUP BY dept\").show(); spark.stop()",
    "explanation": "Spark SQL编程案例",
    "topic": "重点",
    "id": "GEN0782",
    "level": "A",
    "correctCount": 0,
    "wrongCount": 0,
    "lastPractice": null,
    "nextReview": null,
    "reviewStage": 0
  }
];
