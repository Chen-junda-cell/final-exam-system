#!/usr/bin/env node
/* ================================================================
   修复「图片题」：为 ECharts & Matplotlib 中选项缺失的
   单选/多选题目补上选项、清理题干、抽出解析
   ================================================================ */
const fs = require('fs'), path = require('path');

const dbPath = path.join(__dirname, 'parsed', 'questions_data.js');
const content = fs.readFileSync(dbPath, 'utf8');
const m = content.match(/const PREPARSED_QUESTIONS = (\[[\s\S]*\]);/);
if (!m) { console.error('❌ 无法解析题库'); process.exit(1); }
const data = JSON.parse(m[1]);

const L = 'ABCDEFGH';
function opts(list){ return list.map((t,i)=>({label:L[i], text:t})); }

// key 用于按题干开头精确匹配；title 为新题干；options 为选项文本；answer 保持不变
const fixes = [
  { key:'数据可视化的主要作用是将数据通过图形方式直观展示', title:'数据可视化的主要作用是（ ）。', options:['存储数据','删除数据','将数据通过图形方式直观展示','加密数据'], answer:'C', explanation:'数据可视化用图形/图表把复杂数据转换成直观信息，帮助用户理解数据，而不是存储或删除数据。' },
  { key:'Echarts属于数据可视化工具', title:'ECharts 属于（ ）。', options:['MySQL 数据库','Word 文字编辑软件','数据可视化工具','Windows 操作系统'], answer:'C', explanation:'ECharts 是开源的数据可视化图表库，用于网页端交互式图表；MySQL/Word/Windows 都不是。' },
  { key:'Echarts主要基于JavaScript语言开发', title:'ECharts 主要基于（ ）语言开发。', options:['Java','Python','JavaScript','C 语言'], answer:'C', explanation:'ECharts 运行在浏览器环境中，核心开发语言是 JavaScript。' },
  { key:'option是Echarts最核心的配置对象', title:'ECharts 中最核心的配置对象是（ ）。', options:['option','series','title','legend'], answer:'A', explanation:'option 是 ECharts 绘制图表的核心配置对象，最终通过 chart.setOption(option) 应用。' },
  { key:'xAxis表示X轴', title:'ECharts 中表示横坐标（X 轴）的是（ ）。', options:['yAxis','title','xAxis','legend'], answer:'C', explanation:'xAxis 表示横坐标（X 轴），yAxis 表示纵坐标（Y 轴）。' },
  { key:'title用于设置图表标题', title:'ECharts 中用于设置图表标题的是（ ）。', options:['title','tooltip','legend','series'], answer:'A', explanation:'title 配置用于设置图表标题，如 title:{text:\'学生成绩统计\'}。' },
  { key:'Echarts支持柱状图、饼图、折线图等多种图形', title:'ECharts 支持的图形类型包括（ ）。', options:['柱状图','饼图','折线图','以上都是'], answer:'D', explanation:'ECharts 支持柱状图(bar)、折线图(line)、饼图(pie)、散点图(scatter)等，故选项 A、B、C 都正确。' },
  { key:'Matplotlib主要用于数据可视化绘图', title:'Matplotlib 主要用于（ ）。', options:['数据库管理','网络通信','数据可视化绘图','文字处理'], answer:'C', explanation:'Matplotlib 是 Python 最常用的绘图库，用于数据可视化绘图，不是数据库或网络工具。' },
  { key:'plot()用于绘制折线图', title:'Matplotlib 中用于绘制折线图的函数是（ ）。', options:['bar()','pie()','plot()','scatter()'], answer:'C', explanation:'plt.plot(x,y) 绘制折线图；bar()柱状图、pie()饼图、scatter()散点图。' },
  { key:'tooltip用于显示数据提示信息', title:'ECharts 中用于显示鼠标悬浮提示信息的是（ ）。', options:['title','tooltip','legend','grid'], answer:'B', explanation:'tooltip 是提示框，当鼠标移动到图形上时显示详细数据。' },
  { key:'legend用于设置图例', title:'ECharts 中用于设置图例的是（ ）。', options:['title','legend','tooltip','series'], answer:'B', explanation:'legend 表示图例，用于区分不同数据系列。' },
  { key:'dataset 用于管理大量数据', title:'ECharts 中用于统一管理大量数据的是（ ）。', options:['Word 文档','Excel 表格','series','dataset'], answer:'D', explanation:'dataset 用于统一管理大量数据；Word/Excel 是文档/表格格式，不能直接作为 ECharts 数据。' },
  { key:'series用于设置数据系列', title:'ECharts 中用于设置数据系列的是（ ）。', options:['title','series','legend','tooltip'], answer:'B', explanation:'series 是数据系列配置，负责图表类型(type)和数据内容(data)。' },
  { key:'柱状图、折线图、饼图都属于数据可视化图形', title:'以下属于数据可视化图形的是（ ）。', options:['柱状图','折线图','饼图','以上都是'], answer:'D', explanation:'柱状图、折线图、饼图都是常见的数据可视化图形。' },
  { key:'Matplotlib属于Python第三方库', title:'Matplotlib 属于（ ）。', options:['Python 第三方库','Java 框架','数据库管理系统','操作系统'], answer:'A', explanation:'Matplotlib 是 Python 第三方库，需 pip install matplotlib 安装，常与 NumPy、Pandas 一起使用。' },
  { key:'ECharts是一个基于什么技术的可视化库', title:'ECharts是一个基于什么技术的可视化库？', options:['Java','JavaScript','Python','C++'], answer:'B', explanation:'ECharts 是基于 JavaScript 的开源可视化库。' },
  { key:'数据可视化的作用包括', title:'数据可视化的作用包括（ ）。', options:['发现数据规律','提高数据理解效率','直观展示数据关系'], answer:'ABC', explanation:'数据可视化能发现规律、提高理解效率、直观展示数据关系，三个选项均正确。' },
  { key:'Echarts常用配置包括', title:'ECharts 常用配置包括（ ）。', options:['title','legend','tooltip'], answer:'ABC', explanation:'title(标题)、legend(图例)、tooltip(提示框) 都是 ECharts 常用配置。' },
  { key:'Echarts支持的常见图形', title:'ECharts 支持的常见图形有（ ）。', options:['柱状图','折线图','饼图'], answer:'ABC', explanation:'ECharts 支持柱状图(bar)、折线图(line)、饼图(pie)等基础图形。' },
  { key:'Matplotlib可以绘制', title:'Matplotlib 可以绘制（ ）。', options:['折线图','柱状图','散点图'], answer:'ABC', explanation:'Matplotlib 常用绘图函数：plot()折线图、bar()柱状图、scatter()散点图。' },
  { key:'Echarts读取数据方式包括', title:'ECharts 读取数据的方式包括（ ）。', options:['数组','JSON 数据','dataset 数据集'], answer:'ABC', explanation:'ECharts 支持普通数组、JSON 数据、dataset 数据集等多种数据来源。' },
];

let fixed = 0;
for (const f of fixes) {
  const hits = data.filter(q => q.subject === 'ECharts & Matplotlib' && (!q.options || q.options.length === 0) && q.title.indexOf(f.key) === 0);
  if (hits.length === 0) { console.log('⚠️ 未找到:', f.key); continue; }
  if (hits.length > 1) { console.log('⚠️ 匹配到多个:', f.key, hits.length); }
  const q = hits[0];
  q.title = f.title;
  q.options = opts(f.options);
  q.answer = f.answer;
  q.explanation = f.explanation;
  fixed++;
}
console.log('✅ 已修复', fixed, '道图片题');

// 验证是否还有遗漏的图片题（单选/多选无选项）
const remaining = data.filter(q => (q.type === '单选题' || q.type === '多选题') && (!q.options || q.options.length === 0));
console.log('   剩余无选项的单选/多选:', remaining.length);

// 写回
fs.writeFileSync(dbPath, '// 八科完整题库 — ' + data.length + '题\nconst PREPARSED_QUESTIONS = ' + JSON.stringify(data, null, 2) + ';\n', 'utf8');
fs.writeFileSync(path.join(__dirname, 'parsed', 'questions_data.json'), JSON.stringify(data, null, 2), 'utf8');

const htmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');
html = html.replace(/questions_data\.js\?v=\d+/, 'questions_data.js?v=23');
fs.writeFileSync(htmlPath, html, 'utf8');
console.log('✅ 已写回题库，index.html 版本 → v23');
