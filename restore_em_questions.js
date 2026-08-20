#!/usr/bin/env node
/* ================================================================
   把旧 ECharts & Matplotlib 题库中「含知识点」的题目保留回来
   重点：多选题 + 简答题（按重点知识关键词筛选，并去重）
   ================================================================ */
const fs = require('fs'), path = require('path'), cp = require('child_process');

// 1. 从 git 历史取旧题库
const oldSrc = cp.execSync('git show 28994a2:parsed/questions_data.js', {encoding:'utf8', maxBuffer: 50*1024*1024});
const oldAll = JSON.parse(oldSrc.match(/const PREPARSED_QUESTIONS = (\[[\s\S]*\]);/)[1]);
const oldEM = oldAll.filter(q => q.subject === 'ECharts & Matplotlib');

// 2. 关键词：命中则视为「含知识点」，保留
const kwMC = /图表类型|支持的图表|trigger|toolbox|渲染方式|输出图片格式|线型|linestyle|绘制的图表|核心配置|折线图与面积图|Pyecharts|美化图表|常用配置|常见图形|可以绘制|读取数据|title 配置|图表基础组成|支持的参数|核心区别|线条样式|绘制的场景/;
const kwSA = /基本使用步骤|Canvas 和 SVG|优势.*适用场景|折线图、柱状图、饼图|柱状图与直方图|玫瑰图|堆叠柱状图|五大步骤/;

const keep = oldEM.filter(q => (q.type === '多选题' && kwMC.test(q.title)) || (q.type === '简答题' && kwSA.test(q.title)));

// 3. 读当前题库，去重后合并
const dbPath = path.join(__dirname, 'parsed', 'questions_data.js');
const cur = fs.readFileSync(dbPath, 'utf8');
const curAll = JSON.parse(cur.match(/const PREPARSED_QUESTIONS = (\[[\s\S]*\]);/)[1]);

const norm = t => String(t).replace(/[^\u4e00-\u9fa5a-zA-Z0-9]+/g, '').toLowerCase();
const curNorm = new Set(curAll.map(q => norm(q.title)));

let added = 0;
const skipped = [];
let maxId = 0;
curAll.forEach(q => { const m = q.id && q.id.match(/GEN(\d+)/); if (m) maxId = Math.max(maxId, parseInt(m[1], 10)); });

for (const q of keep) {
  if (curNorm.has(norm(q.title))) { skipped.push(q.title.slice(0, 40)); continue; }
  maxId++;
  q.id = 'GEN' + String(maxId).padStart(4, '0');
  q.level = 'B';
  q.topic = '';
  q.correctCount = 0; q.wrongCount = 0;
  q.lastPractice = null; q.nextReview = null; q.reviewStage = 0;
  // 清理题干里混入的选项文本（如 "A.xxx B.xxx"）
  const optStart = q.title.search(/\s+[A-H]\.\s/);
  if (q.options.length === 0 && optStart > 0) q.title = q.title.substring(0, optStart);
  curAll.push(q);
  added++;
}

const header = '// 九科完整题库 — ' + curAll.length + '题\nconst PREPARSED_QUESTIONS = ';
fs.writeFileSync(dbPath, header + JSON.stringify(curAll, null, 2) + ';\n', 'utf8');
fs.writeFileSync(path.join(__dirname, 'parsed', 'questions_data.json'), JSON.stringify(curAll, null, 2), 'utf8');

const htmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');
html = html.replace(/questions_data\.js\?v=\d+/, 'questions_data.js?v=28');
fs.writeFileSync(htmlPath, html, 'utf8');

console.log('✅ 保留旧题(含知识点):', added, '道');
console.log('   跳过重复:', skipped.length, '道');
if (skipped.length) skipped.forEach(s => console.log('   ⏭️', s));
console.log('   题库: 现', curAll.length, '题');
const em = curAll.filter(q => q.subject === 'ECharts & Matplotlib');
const t = {};
em.forEach(q => t[q.type] = (t[q.type]||0)+1);
console.log('   ECharts & Matplotlib 题型:', JSON.stringify(t));
