# 期末冲刺学习系统

纯前端 SPA，六科期末考试复习刷题系统。

## 功能

- 📊 学习仪表盘 — 六科进度一目了然
- ✅ 知识清单 — 156条考点逐条打卡
- 📅 五天冲刺计划
- 📖 知识点学习 — 按等级/科目筛选
- ✍️ 真题练习 — 单选/多选/判断/填空/简答/编程
- 🎲 随机组卷 — 模拟考试
- 📝 错题本 — 自动收录+重做
- 📚 零基础教程 — 六科从零到考试
- 🔄 艾宾浩斯记忆曲线复习
- 🔮 考前预测卷
- 🌙 暗色模式

## 六科覆盖

| 科目 | 题数 |
|------|------|
| ☕ Java Web | JSP/Servlet/Filter/MVC |
| 🐧 Linux | 文件/权限/vi/Shell/进程 |
| 🐘 Hadoop | HDFS/YARN/MapReduce |
| ⚡ Scala & Spark | Scala语法/RDD/算子 |
| 🗄️ HBase / ZooKeeper | 架构/数据模型/ZK机制 |
| 🌐 Web前端 | HTML/CSS/JS — 三年真题全覆盖 |

## 使用方式

纯静态文件，无需服务器。直接双击 `index.html` 即可。

或使用任意 HTTP 服务器：
```bash
python -m http.server 8080
# 然后打开 http://localhost:8080
```

所有数据存储在浏览器 localStorage 中，不会上传到任何服务器。
