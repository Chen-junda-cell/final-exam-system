#!/usr/bin/env node
const fs=require('fs');
let s=fs.readFileSync('./script.js','utf8');

const kbPart=`
  'ECharts & Matplotlib': {
    subject:'ECharts & Matplotlib 数据可视化',
    topics:[
      {id:'em1',name:'ECharts 概述与初始化',level:'A',freq:10,content:'ECharts由百度主导开发(现Apache顶级项目)。初始化：echarts.init(dom)传入DOM容器返回实例。核心方法：setOption(option)设置/更新图表配置和数据。每个图表容器需唯一id。',keywords:['ECharts','百度','Apache','初始化','echarts.init','setOption']},
      {id:'em2',name:'ECharts 坐标系',level:'A',freq:8,content:'支持四种坐标系：直角坐标系(grid，最常用)、极坐标系(polar)、地理坐标系(geo，地图用)、单轴坐标系。不支持对数坐标系作为独立坐标系。grid定义绘图网格区域，控制位置大小。',keywords:['坐标系','grid','polar','geo','直角','极坐标','地理','对数']},
      {id:'em3',name:'ECharts 核心组件',level:'A',freq:12,content:'title标题(主+副)、tooltip提示框(trigger:axis坐标轴/trigger:item数据项)、legend图例(默认水平居中上方)、toolbox工具栏(saveAsImage/dataView/magicType/restore)、dataZoom区域缩放、visualMap视觉映射(数据值映射到颜色/大小)。',keywords:['title','tooltip','legend','toolbox','dataZoom','visualMap','trigger','axis','item','saveAsImage']},
      {id:'em4',name:'ECharts 图表类型',level:'A',freq:12,content:'series.type指定图表类型：bar柱状图、line折线图、pie饼图、scatter散点图、radar雷达图、map地图、candlestick K线图、funnel漏斗图、gauge仪表盘、heatmap热力图、tree树图。',keywords:['series','type','bar','line','pie','scatter','radar','map','柱状图','折线图','饼图']},
      {id:'em5',name:'ECharts 坐标轴类型',level:'A',freq:8,content:'xAxis和yAxis的type属性：category类目轴(离散数据如月份产品名)、value数值轴(连续数值)、time时间轴、log对数轴。类目轴需设data数组定义刻度标签。',keywords:['xAxis','yAxis','category','value','类目轴','数值轴','坐标轴']},
      {id:'em6',name:'Matplotlib 基础绘图',level:'A',freq:10,content:'Python最常用的2D绘图库。基本流程：import matplotlib.pyplot as plt→创建画布→绘图→plt.show()显示。plt.plot(x,y)折线图、plt.scatter散点、plt.bar柱状、plt.pie饼图、plt.hist直方图。',keywords:['Matplotlib','pyplot','plt','figure','plot','scatter','bar','pie','hist']},
      {id:'em7',name:'Matplotlib 图表装饰',level:'A',freq:10,content:'plt.title标题、plt.xlabel/ylabel轴标签、plt.xlim/ylim轴范围、plt.legend图例、plt.grid网格、plt.text文本注释。颜色参数：red/#FF0000/(1,0,0)。marker数据点样式：o圆点/s方形/^三角。',keywords:['title','xlabel','ylabel','legend','grid','color','marker','装饰']},
      {id:'em8',name:'Matplotlib 子图与输出',level:'B',freq:7,content:'plt.subplot(行,列,序号)创建子图。plt.subplots(行,列)返回画布+子图数组。figsize设置画布大小。plt.tight_layout()自动调间距。plt.savefig保存图片(png/jpg/svg/pdf，dpi设分辨率)。',keywords:['subplot','subplots','figsize','tight_layout','savefig','子图','布局']},
      {id:'em9',name:'Matplotlib 饼图与柱状图',level:'B',freq:7,content:'饼图：plt.pie(data,labels,autopct,explode,startangle)。autopct显示百分比格式，explode突出扇区。柱状：plt.bar(x,height)垂直柱，plt.barh(y,width)水平柱。plt.hist(data,bins)频数分布直方图。',keywords:['pie','autopct','explode','bar','barh','hist','饼图','柱状图','直方图']},
      {id:'em10',name:'Matplotlib 高级图表',level:'B',freq:5,content:'箱线图：plt.boxplot()显示数据分布(中位数/四分位数/异常值)。雷达图：plt.subplot(projection=polar)极坐标，手动算角度，fill()填充。plt.rcParams配置中文字体：font.sans-serif=[SimHei]，axes.unicode_minus=False。',keywords:['boxplot','箱线图','雷达图','polar','rcParams','中文字体']},
      {id:'em11',name:'ECharts 高级功能',level:'B',freq:5,content:'MarkPoint标注点(最大最小值)、MarkLine标记线(平均值)、MarkArea标记区域。dataset统一数据源。transform数据变换。异步加载：showLoading()+ajax+hideLoading()+setOption。自适应：window.onresize+chart.resize()。',keywords:['MarkPoint','MarkLine','dataset','showLoading','resize','自适应','异步']},
    ]
  }`;

// Insert before the closing }; of KNOWLEDGE_BASE
// Find KNOWLEDGE_BASE closing
const kbStart=s.indexOf('const KNOWLEDGE_BASE =');
let depth=0, kbEnd=kbStart;
for(let i=kbStart;i<s.length;i++){
  if(s[i]==='{') depth++;
  if(s[i]==='}'){ depth--; if(depth===0) { kbEnd=i+1; break; } }
}
s=s.substring(0, kbEnd)+kbPart+s.substring(kbEnd);
fs.writeFileSync('./script.js', s, 'utf8');
console.log('KNOWLEDGE_BASE updated');
