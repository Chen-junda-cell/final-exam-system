#!/usr/bin/env node
/* ================================================================
   按《数据可视化重点知识整理》重建 ECharts & Matplotlib 题库
   删掉知识点以外的题目，补齐所有考点
   ================================================================ */
const fs = require('fs'), path = require('path');

const L = ['A','B','C','D','E','F','G','H'];
function Q(type, title, opts, ans, exp){
  return { subject:'ECharts & Matplotlib', type, title,
    options: (typeof opts === 'string' ? opts.split('|') : (opts || [])).map((t,i)=>({label:L[i], text:t})),
    answer: ans, explanation: exp || '' };
}
function MC(t,o,a,e){ return Q('单选题',t,o,a,e); }
function MS(t,o,a,e){ return Q('多选题',t,o,a,e); }
function PD(t,o,a,e){ return Q('判断题',t,o,a,e); }
function SA(t,a,e){ return Q('简答题',t,null,a,e); }
function PROG(t,a,e){ return Q('程序题',t,null,a,e); }

const newQs = [
  // ============ ECharts 概念 / 绘制步骤 ============
  MC('ECharts 是一个基于什么技术的开源可视化图表库？','Java|JavaScript|Python|C++','B','ECharts 使用 JavaScript 实现，可流畅运行在 PC 和移动设备上。'),
  MC('ECharts 底层依赖的矢量图形库是？','D3.js|ZRender|Canvas|Three.js','B','ECharts 底层依赖矢量图形库 ZRender。'),
  MC('在 HTML 中使用 ECharts 的第一步是？','准备 DOM 容器|引入 ECharts 的 JavaScript 文件(echarts.js)|定义 option|调用 setOption','B','第一步先引入 echarts.js 类库文件。'),
  MC('ECharts 初始化图表实例的方法是？','echarts.init(dom)|echarts.create(dom)|new ECharts(dom)|echarts.render(dom)','A','通过 echarts.init(dom) 初始化一个 echarts 实例。'),
  MC('ECharts 中加载配置项和数据的方法是？','setData()|setOption(option)|render()|draw()','B','通过 setOption(option) 加载配置项和数据并渲染图表。'),
  MC('使用 ECharts 时，必须为它准备一个怎样的 DOM 容器？','一个具备高宽的 DOM 容器(一般为 div)|任意标签即可|无需 DOM 容器，直接在 body 绘制|一个 canvas 标签','A','必须准备一个定义了高宽的 DOM 容器，一般为 div。'),
  MC('ECharts 绘制图表的固定代码结构是？','div容器 → 引入JS → init → option → setOption|引入JS → div容器 → init → option → setOption|引入JS → init → div容器 → setOption|option → init → 引入JS → setOption','B','顺序：引入JS → div容器 → echarts.init() → 定义 option → setOption(option)。'),
  // ============ ECharts 特性 ============
  MS('ECharts 支持的渲染方案有？','Canvas|SVG|VML|WebGL','ABC','ECharts 支持 Canvas、SVG、VML 三种渲染模式，浏览器自动适配。'),
  MC('ECharts 中适合展示千万级大数据量的渲染方案是？','SVG|Canvas|VML|三者一样','B','Canvas 适合大数据量渲染；SVG 高清精细；VML 仅兼容老旧 IE。'),
  MC('ECharts 中高清精细、缩放不失真的渲染方案是？','Canvas|SVG|VML|三者一样','B','SVG 高清精细。'),
  PD('ECharts 支持动态数据更新，数据变化可实时驱动图表自动更新。','对|错','对','ECharts 支持动态数据更新，可实时刷新图表。'),
  // ============ title / legend / tooltip ============
  MC('ECharts 中 title 组件用于设置主标题文本的属性是？','text|subtext|link|titleText','A','text 设置主标题，subtext 设置副标题。'),
  MC('ECharts 中 title 组件用于设置副标题文本的属性是？','text|subtext|sublink|name','B','subtext 设置副标题文本。'),
  MC('ECharts 中 title 的 textAlign 属性用于设置？','标题水平对齐方式|标题垂直对齐方式|标题字体大小|标题颜色','A','textAlign 设置主副标题的水平对齐(auto/left/right/center)。'),
  MC('ECharts 中 legend 图例较多、需要可滚动翻页时，type 应设为？','plain|scroll|vertical|horizontal','B','type 为 scroll 时图例可滚动翻页，默认 plain。'),
  MC('ECharts 中 legend 默认的布局朝向 orient 是？','vertical|horizontal|diagonal|无默认值','B','legend 的 orient 默认 horizontal(水平)。'),
  MC('ECharts 中 legend 的 orient 属性用于设置？','图例布局朝向|图例形状|图例文本样式|图例边框','A','orient 设置图例列表布局朝向 horizontal/vertical。'),
  MC('ECharts 中 tooltip 组件的 trigger 属性可选值不包括？','item|axis|none|mousemove','D','trigger 可选 item(数据项触发)、axis(坐标轴触发)、none(不触发)。'),
  MC('ECharts 中 tooltip 的 formatter 属性用于？','设置提示内容|设置触发类型|设置提示框位置|设置提示框样式','A','formatter 设置提示内容，支持字符串模板和回调函数。'),
  // ============ series / toolbox ============
  MC('ECharts 中 series 用于指定图表类型（折线/柱状/饼图）的属性是？','type|name|data|radius','A','series.type 指定图表类型，如 line/bar/pie/scatter。'),
  MC('ECharts 中 series 的 name 属性主要作用？','用于 tooltip 显示和 legend 图例匹配|设置图表颜色|设置数据|设置半径','A','name 是系列名称，用于 tooltip 显示与 legend 匹配。'),
  MC('ECharts 饼图中 series 的 data 数据格式是？','[{value, name}]|一维数值数组|二维数组|JSON 字符串','A','饼图 data 为 [{value, name}] 格式。'),
  MC('ECharts 中 series 的 radius 设为数组如 [\'25%\',\'80%\'] 可实现？','圆环图(环状图)|玫瑰图|散点图|折线图','A','radius 为数组时表示内半径+外半径，可实现圆环图。'),
  MC('ECharts 中 series 的 roseType 用于实现什么图？','南丁格尔图(玫瑰图)|圆环图|热力图|雷达图','A','roseType 可选 angle 或 area，实现南丁格尔玫瑰图。'),
  MC('ECharts 中设置饼图扇区颜色用哪个属性？','series.color|series.data|series.type|series.radius','A','series.color 设置饼图扇区颜色。'),
  MC('ECharts 中 toolbox 的哪个工具用于保存为图片？','saveAsImage|dataView|magicType|dataZoom','A','saveAsImage 保存为图片。'),
  MC('ECharts 中 toolbox 的哪个工具用于展现/编辑图表数据？','dataView|restore|dataZoom|saveAsImage','A','dataView 是数据视图工具，编辑后可动态更新。'),
  MC('ECharts 中 toolbox 的哪个工具用于动态类型切换？','magicType|restore|dataZoom|saveAsImage','A','magicType 动态切换图表类型。'),
  MC('ECharts 中 toolbox 的哪个工具用于数据区域缩放？','dataZoom|restore|magicType|saveAsImage','A','dataZoom 数据区域缩放(放大镜)，目前只支持直角坐标系。'),
  MC('ECharts 中 toolbox 的哪个工具用于配置项还原？','restore|dataView|magicType|dataZoom','A','restore 配置项还原。'),
  // ============ ECharts 高频考点 ============
  PD('ECharts 是 Python 可视化库，可以直接在 Python 脚本运行。','对|错','错','ECharts 是基于 JavaScript 的前端库，不是 Python 库。'),
  MC('Pyecharts 是什么？','Python 库，其底层基于 ECharts|JavaScript 库|Java 库|C++ 库','A','Pyecharts 是 Python 库，底层技术基于 ECharts。'),
  MC('ECharts 中设置坐标轴名称的属性是？','name|type|axisLabel|data','A','坐标轴名称用 name 属性设置。'),
  PD('ECharts 的所有图表类型都支持交互功能（放大、缩小、拖拽等）。','对|错','错','并非所有图表类型都支持交互，取决于图表类型和配置。'),
  // ============ Matplotlib 概念 / 步骤 ============
  MC('Matplotlib 是什么？','一个 Python 2D 绘图库|一个 JavaScript 图表库|一个数据库|一个 Web 框架','A','Matplotlib 是 Python 2D 绘图库，主打静态、专业、离线图表。'),
  MC('Matplotlib 约定俗成的导入别名写法是？','import matplotlib as plt|import matplotlib.pyplot as plt|import matplotlib.plt as pyplot|import plot as plt','B','行业通用约定：import matplotlib.pyplot as plt。'),
  MC('用清华镜像源安装 Matplotlib 的正确命令是？','pip install matplotlib.pyplot -i https://pypi.tuna.tsinghua.edu.cn/simple|pip install matplotlib -i https://pypi.tuna.tsinghua.edu.cn/simple|pip matplotlib install -i https://pypi.tuna.tsinghua.edu.cn/simple|conda install matplotlib simple','B','正确命令：pip install matplotlib -i https://pypi.tuna.tsinghua.edu.cn/simple。'),
  MC('Matplotlib 绘图的第一步是？','导入库|创建画布|调用绘图函数|显示图形','A','第一步先导入库 import matplotlib.pyplot as plt。'),
  MC('plt.figure() 的 figsize 参数用于设置？','画布的宽和高|分辨率|背景颜色|边框颜色','A','figsize 指定画布宽和高。'),
  MC('plt.figure() 的 dpi 参数用于设置？','分辨率(每英寸像素数)|画布宽高|背景颜色|边框','A','dpi 是分辨率，每英寸像素数，默认 80。'),
  // ============ Matplotlib 绘图函数 ============
  MC('Matplotlib 绘制折线图的核心函数是？','plt.plot()|plt.scatter()|plt.pie()|plt.bar()','A','plt.plot() 绘制折线图，展示数据变化趋势。'),
  MC('Matplotlib 绘制散点图的函数是？','plt.scatter()|plt.plot()|plt.bar()|plt.hist()','A','plt.scatter() 绘制散点图，展示变量间关系。'),
  MC('Matplotlib 绘制柱状图的函数是？','plt.bar() / plt.barh()|plt.pie()|plt.hist()|plt.plot()','A','plt.bar() 垂直柱状图、plt.barh() 水平柱状图。'),
  MC('Matplotlib 绘制直方图（展示数据分布）的函数是？','plt.hist()|plt.pie()|plt.bar()|plt.scatter()','A','plt.hist() 展示数据分布情况。'),
  MC('Matplotlib 绘制饼图的函数是？','plt.pie()|plt.hist()|plt.plot()|plt.fill_between()','A','plt.pie() 展示各部分占比。'),
  MC('Matplotlib 绘制面积图的函数是？','plt.fill_between() / plt.stackplot()|plt.pie()|plt.hist()|plt.bar()','A','fill_between()/stackplot() 填充区域，展示累积关系。'),
  MC('Matplotlib 中显示图形的函数是？','plt.show()|plt.savefig()|plt.display()|plt.render()','A','plt.show() 显示图形。'),
  MC('Matplotlib 中保存图表的函数是？','plt.savefig()|plt.show()|plt.export()|plt.write()','A','plt.savefig() 保存图表，支持 PNG、PDF、SVG 等格式。'),
  // ============ Matplotlib 常用配置 ============
  MC('Matplotlib 中设置图表标题的函数是？','plt.title()|plt.legend()|plt.xlabel()|plt.grid()','A','plt.title() 设置标题。'),
  MC('Matplotlib 中设置图例的函数是？','plt.legend()|plt.title()|plt.grid()|plt.text()','A','plt.legend() 设置图例。'),
  MC('Matplotlib 中设置坐标轴标题的函数是？','plt.xlabel() / plt.ylabel()|plt.xticks()|plt.xlim()|plt.title()','A','xlabel()/ylabel() 设置坐标轴标题。'),
  MC('Matplotlib 中设置坐标轴刻度的函数是？','plt.xticks() / plt.yticks()|plt.xlim()|plt.xlabel()|plt.grid()','A','xticks()/yticks() 设置坐标轴刻度。'),
  MC('Matplotlib 中设置坐标轴范围的函数是？','plt.xlim() / plt.ylim()|plt.xticks()|plt.xlabel()|plt.grid()','A','xlim()/ylim() 设置坐标轴范围。'),
  MC('Matplotlib 中设置网格线的函数是？','plt.grid()|plt.legend()|plt.title()|plt.text()','A','plt.grid() 设置网格线。'),
  MC('Matplotlib 中设置文本标签的函数是？','plt.text()|plt.grid()|plt.legend()|plt.xlim()','A','plt.text(x, y, s) 添加文本标签。'),
  MC('Matplotlib 解决中文乱码的正确配置是？','plt.rcParams["font.sans-serif"]=["SimHei"]；plt.rcParams["axes.unicode_minus"]=False|plt.rcParams["font"]="utf-8"|plt.encoding("utf-8")|plt.font("SimHei")','A','设置 sans-serif 为 SimHei，并关闭 unicode_minus 负号。'),
  // ============ Matplotlib 高频考点 ============
  MS('plt.plot() 支持设置的参数有？','color 线条颜色|linestyle 线条样式|marker 标记形状|mfc 标记填充色','ABCD','四个参数 plt.plot() 都支持。'),
  MC('plt.plot() 中 linestyle=\'--\' 代表的线条样式是？','虚线|实线|点划线|双划线','A','按规范：- 实线、-- 虚线、-. 点划线。'),
  MC('plt.plot() 中 marker 参数的作用是？','设置数据点标记形状|设置线条颜色|设置线条粗细|设置画布大小','B','marker 设置数据点标记形状。'),
  MC('plt.plot() 中 mfc 参数的作用是？','设置标记填充颜色|设置线条颜色|设置标记大小|设置线条样式','A','mfc(markerfacecolor) 设置标记填充颜色。'),
  MC('plt.plot() 中 ms（markersize）参数的作用是？','设置标记大小|设置标记填充色|设置线条粗细|设置画布大小','A','ms 是 markersize 简写，控制标记大小。'),
  PD('tooltip 提示框属于 Matplotlib 图表的基础组成。','对|错','错','tooltip 是 ECharts 的组件，Matplotlib 没有 tooltip 提示框。'),
  MS('以下属于 Python 可视化库的有？','Matplotlib|Seaborn|Pyecharts|ECharts','ABC','ECharts 是 JavaScript 库，不属于 Python 可视化库。'),
  // ============ 简答：ECharts vs Matplotlib 区别 ============
  SA('请简述 ECharts 与 Matplotlib 的核心区别。','①核心定位：ECharts 是前端交互式图表利器，主打网页/动态/易交互；Matplotlib 是 Python 端静态图表王者，主打离线/静态/高定制。②技术栈：ECharts 基于 JavaScript，结合 HTML/CSS 在浏览器渲染；Matplotlib 基于 Python，在 Python 环境(Jupyter/VSCode)运行。③交互性：ECharts 支持 tooltip 悬浮、拖拽缩放、数据筛选、图表联动；Matplotlib 是静态图表，无法点击/悬浮查看。④适用场景：ECharts 适用于网页展示、管理系统、大屏可视化、SpringBoot 前端；Matplotlib 适用于离线分析、毕设论文、科研图表、PNG/PDF 报告。⑤输出形式：ECharts 输出交互式网页图表；Matplotlib 输出静态图片(PNG/PDF/SVG)。⑥定制化：ECharts 配置项驱动、交互丰富；Matplotlib 精准定制静态图表细节、满足学术标准。'),
  // ============ 程序题 ============
  PROG('【ECharts 饼状图】对直接访问量统计用饼图呈现，请写出完整 HTML 代码（引入JS → div容器 → init → option → setOption）。',`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>访问量统计-饼图</title>
  <!-- 1. 引入 js -->
  <script type="text/javascript" src="js/echarts.js"></script>
</head>
<body>
  <!-- 2. 准备放图表的容器 -->
  <div id="main" style="width:900px;height:400px;"></div>
  <script type="text/javascript">
    // 3. 实例化 echarts 对象
    var main = document.getElementById('main');
    var mychart = echarts.init(main);
    // 4. 指定配置项和数据
    var option = {
      title: { text: '访问来源统计-饼图' },
      tooltip: { formatter: '{a} <br/>{b} : {c} ({d}%)' },
      series: [{
        name: '访问来源', type: 'pie', radius: '55%',
        data: [
          {value:235, name:'直接访问'},
          {value:274, name:'视频广告'},
          {value:89,  name:'联盟广告'},
          {value:158, name:'邮件营销'},
          {value:400, name:'搜索引擎'}
        ]
      }]
    };
    // 5. 使用配置项和数据显示图表
    mychart.setOption(option);
  </script>
</body>
</html>`),
  PROG('【ECharts 环状图】家庭 A5 月费用开支统计，通过 radius 数组实现圆环图，请写出关键配置（含 legend 图例）。',`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>家庭 A5 月费用开支情况统计</title>
  <script type="text/javascript" src="js/echarts.js"></script>
</head>
<body>
  <div id="main" style="width:900px;height:400px;"></div>
  <script type="text/javascript">
    var main = document.getElementById('main');
    var mychart = echarts.init(main);
    var option = {
      title: { text: '家庭 A5 月费用开支情况统计', left: 'center', top: 'top' },
      tooltip: { formatter: '{a} <br/>{b} : {c} ({d}%)' },
      legend: {
        left: 'left', top: 'top', orient: 'vertical',
        data: ['住房贷款','车贷','日常开支','孩子教育','额外开支']
      },
      series: [{
        name: '家庭 A5 月费用开支情况统计',
        type: 'pie',
        radius: ['25%','80%'],   // 数组实现圆环图(内半径+外半径)
        // roseType: 'angle',     // 南丁格尔图-玫瑰图
        data: [
          {value:835, name:'住房贷款'},
          {value:374, name:'车贷'},
          {value:189, name:'日常开支'},
          {value:558, name:'孩子教育'},
          {value:40,  name:'额外开支'}
        ]
      }]
    };
    mychart.setOption(option);
  </script>
</body>
</html>`),
  PROG('【Matplotlib 折线图】按绘图步骤画出「一周销售额趋势图」折线图（导入库→创建画布→准备数据→plot→配置→显示/保存）。',`import matplotlib.pyplot as plt
import numpy as np

# 解决中文乱码
plt.rcParams["font.sans-serif"] = ["SimHei"]
plt.rcParams["axes.unicode_minus"] = False

# 1. 创建画布
plt.figure(figsize=(8, 5), dpi=100)

# 2. 准备数据
x = np.arange(1, 8)  # 周一到周日
y = [20, 25, 22, 30, 28, 35, 32]  # 每日销售额

# 3. 调用 plot 函数绘制折线图
plt.plot(x, y, color='blue', marker='o', linestyle='-', linewidth=2, label='销售额')

# 4. 设置标题和坐标轴
plt.title('一周销售额趋势图', fontsize=14)
plt.xlabel('日期', fontsize=12)
plt.ylabel('销售额（万元）', fontsize=12)

# 5. 设置图例和网格线
plt.legend(loc='upper left')
plt.grid(linestyle='--', alpha=0.5)

# 6. 保存图表（可选）
plt.savefig('折线图.png')

# 7. 显示图形
plt.show()`),
];

// ==================== 重建 ECharts & Matplotlib 题库 ====================
function rebuild(){
  const dbPath = path.join(__dirname, 'parsed', 'questions_data.js');
  const content = fs.readFileSync(dbPath, 'utf8');
  const match = content.match(/const PREPARSED_QUESTIONS = (\[[\s\S]*\]);/);
  if (!match) { console.error('❌ 无法解析题库'); process.exit(1); }
  const existing = JSON.parse(match[1]);

  const emOld = existing.filter(q => q.subject === 'ECharts & Matplotlib');
  const kept = existing.filter(q => q.subject !== 'ECharts & Matplotlib');

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
  html = html.replace(/questions_data\.js\?v=\d+/, 'questions_data.js?v=27');
  fs.writeFileSync(htmlPath, html, 'utf8');

  console.log('✅ 删除旧 ECharts & Matplotlib 题:', emOld.length, '道');
  console.log('   新增重点题:', newQs.length, '道');
  console.log('   题库: 原', existing.length, '题 → 现', merged.length, '题');
  const types = {};
  newQs.forEach(q => types[q.type] = (types[q.type]||0)+1);
  console.log('   题型:', JSON.stringify(types));
}

rebuild();


