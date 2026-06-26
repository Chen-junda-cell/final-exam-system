#!/usr/bin/env node
/* ================================================================
   解析补充题目.md → 替换题库中 JavaWeb/Linux/Hadoop/HBase
   ================================================================ */
const fs = require('fs'), path = require('path');

const INPUT = 'D:\\HuaweiMoveData\\Users\\86147\\Desktop\\期末\\补充题目.md';
const raw = fs.readFileSync(INPUT, 'utf8');
const lines = raw.split('\n');

// ===== 科目检测 =====
function detectSubject(title, opts, ans, exp) {
  const text = title + ' ' + (ans||'') + ' ' + (exp||'');
  if (/hbase|zookeeper|znode|hmaster|regionserver|rowkey|hbase-site/i.test(text)) return 'HBase / ZooKeeper';
  if (/hdfs|yarn|resourcemanager|nodemanager|mapreduce|namenode|datanode|shuffle|hadoop|block|副本|机架|fsimage|edits/i.test(text)) return 'Hadoop';
  if (/linux|shell\b|vi\s|vim|chmod|bash|权限|ls\s-|mkdir|useradd|grep|管道|重定向|tar\s|kill|pid|文件系统|\/bin|\/etc|\/home|进程|端口|fifo|inode|软链接|硬链接/i.test(text)) return 'Linux';
  if (/jsp|servlet|filter|web\.xml|javabean|jstl|tomcat|session|cookie|转发|重定向|jdbc|隐式对象|作用域|el表达式|include|page指令|httpservlet|b\/s|c\/s|GenericServlet|ServletConfig|ServletContext|HttpServlet|RequestDispatcher/i.test(text)) return 'Java Web';
  return 'Java Web'; // 默认
}

// ===== 按 ### 分割题目 =====
const text = raw;
const blocks = text.split(/\n(?=###\s+\d+\.?\s*[（(])/);

console.log(`📖 分割为 ${blocks.length} 个题目块`);

const allQuestions = [];
let globalId = 9999; // 预留ID空间

for (const blk of blocks) {
  const ls = blk.split('\n');
  if (ls.length < 3) continue;

  // 标题行
  const titleLine = ls[0].trim();

  // 匹配标题: ### N. (type, score)复制题目 title
  let tm = titleLine.match(/^###\s+\d+\.\s*[（(]([^）)]+)[）)]\s*复制题目\s*(.*)/);
  if (!tm) {
    tm = titleLine.match(/^###\s+\d+\.\s*[（(]([^）)]+)[）)]\s*(.*)/);
  }
  if (!tm) {
    tm = titleLine.match(/^###\s+\d+\.\s*(复制题目\s*)?(.*)/);
    if (tm) {
      // 无类型标注，尝试从选项推断
    } else {
      continue;
    }
  }

  let typeRaw = '';
  let title = '';

  if (tm[1] && /单|多|判断|填空|简答|程序/.test(tm[1])) {
    typeRaw = tm[1].trim();
    title = (tm[2] || '').trim();
  } else if (tm[2]) {
    title = (tm[1] || '') + (tm[2] || '');
  } else {
    title = (tm[1] || '').trim();
  }
  title = title.replace(/^复制题目\s*/, '').trim();

  // 判断题型
  let qType = '单选题';
  if (/多选/.test(typeRaw)) qType = '多选题';
  else if (/填空/.test(typeRaw)) qType = '填空题';
  else if (/判断/.test(typeRaw)) qType = '判断题';
  else if (/简答/.test(typeRaw)) qType = '简答题';
  else if (/程序/.test(typeRaw)) qType = '程序题';
  else if (/单选/.test(typeRaw)) qType = '单选题';

  // 尝试从内容推断题型（无类型标注时）
  if (!typeRaw) {
    if (title.includes('判断') || title.includes('正确') || title.includes('错误')) qType = '判断题';
  }

  // ===== 解析选项、答案、解析 =====
  const opts = [];
  let ans = '';
  let exp = '';
  let inAnswer = false;
  let inExp = false;
  let answerParts = [];
  let pendingOpt = null; // 选项标签在上一行，文本在下一行

  for (let i = 1; i < ls.length; i++) {
    const ln = ls[i];
    const trimmed = ln.trim();
    if (!trimmed) {
      // 空行：如果有待填充选项，跳过
      continue;
    }

    // AI讲解标记
    if (/\[\*AI讲解\*\]/.test(trimmed)) {
      inAnswer = false;
      inExp = false;
      continue;
    }

    // 答案行: *我的答案:*X*正确答案:*Y 或 *我的答案:*:*正确答案:*X:text;
    if (/\*我的答案[:：]\*/.test(trimmed)) {
      inAnswer = true;
      inExp = false;
      // 格式1: *我的答案:*A*正确答案:*B
      let am = trimmed.match(/\*正确答案[:：]\*\s*([A-G](?:\s|;|$))/);
      if (!am) {
        // 格式2: *我的答案:*:*正确答案:*X:text;
        am = trimmed.match(/\*正确答案[:：]\*\s*([A-G]+)[:：]/);
      }
      if (!am) {
        // 格式3: *我的答案:*B*正确答案:*B (single letter no separator)
        am = trimmed.match(/\*正确答案[:：]\*\s*([A-G]+)/);
      }
      if (am) {
        if (answerParts.length === 0) answerParts.push(am[1].trim());
      }
      continue;
    }

    // 解析行
    if (/\*答案解析[:：]/.test(trimmed) || /\*知识点[:：]/.test(trimmed)) {
      inAnswer = false;
      inExp = true;
      const em = trimmed.match(/\*答案解析[:：]\*\s*(.*)/);
      if (em && em[1]) exp = em[1].trim();
      continue;
    }

    if (inExp) {
      const cl = trimmed.replace(/^[-—*]\s*/, '');
      if (cl && !cl.startsWith('[') && cl.length > 1) exp += (exp ? ' ' : '') + cl;
      continue;
    }

    if (inAnswer) {
      const cl = trimmed.replace(/^[-—*]\s*/, '');
      if (cl && !cl.startsWith('[') && !/^\*.*答案/.test(cl)) {
        answerParts.push(cl);
      }
      continue;
    }

    // 选项: - A. text
    const optMatch = trimmed.match(/^-\s*([A-G])\s*[\.\s、](.*)/);
    if (optMatch) {
      const label = optMatch[1];
      const text = optMatch[2].trim();
      if (text) {
        // 完整的选项
        if (pendingOpt) { opts.push(pendingOpt); pendingOpt = null; }
        opts.push({ label, text });
      } else {
        // 只有标签，文本在下一行
        if (pendingOpt) opts.push(pendingOpt);
        pendingOpt = { label, text: '' };
      }
      continue;
    }

    // 选项文本续行（上一行是光秃秃的 - A.）
    if (pendingOpt && pendingOpt.text === '') {
      const cl = trimmed.replace(/^[-—]\s*/, '');
      if (cl && !/^[A-G][\.\s、]/.test(cl) && cl.length < 200) {
        pendingOpt.text = cl;
        continue;
      } else {
        // 不是选项文本，放弃pending
        opts.push(pendingOpt);
        pendingOpt = null;
      }
    }

    // 选项文本在第2行之后（- A.\n\n text 格式）
    if (pendingOpt && pendingOpt.text !== '' && trimmed.length < 200 && !/^[-*]/.test(trimmed) && !/^##/.test(trimmed)) {
      pendingOpt.text += ' ' + trimmed;
      continue;
    }

    // 未识别的行，如果标题还短，追加到标题
    if (opts.length === 0 && title.length < 300 && trimmed.length > 2) {
      title += ' ' + trimmed;
    }
  }

  // 最后检查pending
  if (pendingOpt) opts.push(pendingOpt);

  // 构建答案
  if (answerParts.length > 0) {
    ans = answerParts.join(' ').trim();
  }

  // 清理答案 - 单选题/判断题只取第一个字母
  if (qType === '单选题' || qType === '判断题') {
    const single = ans.match(/^([A-G])/);
    if (single) ans = single[1];
  }
  // 多选题取所有字母
  if (qType === '多选题') {
    const multi = ans.match(/^([A-G]+)/);
    if (multi) ans = multi[1];
  }

  // ===== 质量检查 =====
  if (title.length < 3) continue;
  if ((qType === '单选题' || qType === '多选题') && opts.length < 2) continue;
  if (qType === '判断题' && opts.length === 0) {
    opts.push({label:'A', text:'对 / 正确'}, {label:'B', text:'错 / 错误'});
  }

  // 整理选项文本
  opts.forEach(o => { o.text = o.text.replace(/\s+/g, ' ').trim(); });

  // 检测科目
  const subject = detectSubject(title, opts.map(o=>o.text).join(' '), ans, exp);

  // 只保留4个目标科目
  const targetSubjects = ['Java Web', 'Linux', 'Hadoop', 'HBase / ZooKeeper'];
  if (!targetSubjects.includes(subject)) {
    // 可能是 Scala/Spark 误判，跳过
    continue;
  }

  globalId++;
  const id = 'GEN' + String(globalId).padStart(4, '0');

  allQuestions.push({
    subject, type: qType, title,
    options: opts, answer: ans, explanation: exp || '',
    topic: '', id, level: 'B',
    correctCount: 0, wrongCount: 0,
    lastPractice: null, nextReview: null, reviewStage: 0
  });
}

console.log(`✅ 解析完成: ${allQuestions.length} 题`);

// 统计
const subjects = {};
allQuestions.forEach(q => { subjects[q.subject] = (subjects[q.subject] || 0) + 1; });
console.log('\n📊 科目分布:');
Object.entries(subjects).sort((a,b)=>b[1]-a[1]).forEach(([s,n]) => console.log(`  ${s}: ${n}`));

const types = {};
allQuestions.forEach(q => { types[q.type] = (types[q.type] || 0) + 1; });
console.log('\n📊 题型分布:');
Object.entries(types).sort((a,b)=>b[1]-a[1]).forEach(([t,n]) => console.log(`  ${t}: ${n}`));

// ===== 合并到题库 =====
const dbPath = path.join(__dirname, 'parsed', 'questions_data.js');
const dbContent = fs.readFileSync(dbPath, 'utf8');
const match = dbContent.match(/const PREPARSED_QUESTIONS = (\[[\s\S]*\]);/);
const existing = JSON.parse(match[1]);

// 保留 Scala & Spark 和 Web前端，替换其他4科
const keepSubjects = ['Scala & Spark', 'Web前端'];
const kept = existing.filter(q => keepSubjects.includes(q.subject));
console.log(`\n保留: Scala & Spark ${kept.filter(q=>q.subject==='Scala & Spark').length}题, Web前端 ${kept.filter(q=>q.subject==='Web前端').length}题`);

// 合并
const merged = [...allQuestions, ...kept];
console.log(`合并后总数: ${merged.length} 题`);

// 写回
const newJsContent = `// 六科完整题库 — ${merged.length}题 含复习重点全部知识点\nconst PREPARSED_QUESTIONS = ${JSON.stringify(merged, null, 2)};\n`;
fs.writeFileSync(dbPath, newJsContent, 'utf8');
fs.writeFileSync(path.join(__dirname, 'parsed', 'questions_data.json'), JSON.stringify(merged, null, 2), 'utf8');

// 更新版本
const htmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');
html = html.replace(/questions_data\.js\?v=\d+/, 'questions_data.js?v=20');
fs.writeFileSync(htmlPath, html, 'utf8');

console.log('\n✅ 题库已更新，版本 → v20');
