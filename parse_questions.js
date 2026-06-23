#!/usr/bin/env node
/* ================================================================
   题库全格式解析器 v2 — 处理 questions.md 中所有格式
   输出: parsed/ 目录下分科 MD + questions_data.js
   ================================================================ */
const fs = require('fs'), path = require('path');
const INPUT = path.join(__dirname, 'questions.md');
const OUT = path.join(__dirname, 'parsed');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT);

const raw = fs.readFileSync(INPUT, 'utf8');
const allQuestions = [];

// ===== 工具函数 =====
let uid = 0;
function makeQuestion(subject, type, title, options, answer, explanation) {
  uid++;
  return { id: 'Q' + uid, subject, type, title: title.replace(/\s+/g, ' ').trim(),
    options, answer: (answer || '见解析').trim(), explanation: (explanation || '').trim() };
}

const SUBJECT_KEYWORDS = [
  { s: 'Java Web', re: /jsp|servlet|filter|mvc|web\.xml|javabean|jstl|tomcat|session|cookie|转发|重定向|jdbc|隐式对象|作用域|el表达式|include.*指令|page指令|httpservlet|b\/s|c\/s|颜色条/i },
  { s: 'Linux', re: /linux|shell\b|vi\s|vim|chmod|bash|权限|ls\s-|mkdir|useradd|userdel|grep|管道|重定向|tar\s|pid\b|kill|文件系统|\/bin|\/etc|\/home|进程.*id|端口.*20|fifo|inode|软链接|硬链接/i },
  { s: 'Hadoop', re: /hdfs|namenode|datanode|yarn|resourcemanager|nodemanager|mapreduce|shuffle|hadoop|block.*mb|副本|机架|fsimage|edits|writable|inputsplit|textinputformat|dfs\./i },
  { s: 'Scala & Spark', re: /scala|arraybuffer|元组|tuple|val\s|var\s|def\s|不可变列表|不可变集合|rdd|spark|弹性分布式|惰性求值|standalone|mesos|spark.*sql|spark.*streaming/i },
  { s: 'HBase / ZooKeeper', re: /hbase|zookeeper|znode|hmaster|regionserver|rowkey|hbase-site|hbase\.cluster|myid|过半|4v|大数据.*特点|价值密度|zkcli|follower|leader选举/i },
];

function detectSubject(text) {
  for (const {s, re} of SUBJECT_KEYWORDS) if (re.test(text)) return s;
  return 'Java Web';
}

// ===== 解析器 1: ### N. (xxx) 主格式 =====
function parseMain(lines) {
  const qs = [];
  // Split by ## headers
  const sections = []; let ch = '', cl = [];
  for (const l of lines) {
    if (/^##\s+[一二三四五六七八九十]/.test(l) || /^##\s+[课堂测试]/.test(l)) {
      if (cl.length) sections.push({h: ch, c: cl.join('\n')}); ch = l; cl = [];
    } else cl.push(l);
  }
  if (cl.length) sections.push({h: ch, c: cl.join('\n')});

  let curSubj = 'Java Web';
  for (const sec of sections) {
    const s = detectSubject(sec.h + ' ' + sec.c.substring(0, 2000));
    if (s !== 'Java Web' || sec.h.includes('简答') || sec.h.includes('程序')) curSubj = s;

    const blocks = sec.c.split(/(?=^###\s+\d+\.\s*[（(])/m);
    for (const blk of blocks) {
      const ls = blk.split('\n').map(l => l.trim()).filter(l => l);
      if (!ls.length) continue;
      const tm = ls[0].match(/^###\s+\d+\.\s*[（(]([^）)]+)[）)](.*)/);
      if (!tm) continue;

      let qType = '简答题'; const tr = tm[1];
      if (/单选/.test(tr)) qType = '单选题'; else if (/多选/.test(tr)) qType = '多选题';
      else if (/判断/.test(tr)) qType = '判断题'; else if (/填空/.test(tr)) qType = '填空题';
      else if (/程序/.test(tr)) qType = '程序题'; else if (/简答/.test(tr)) qType = '简答题';

      let title = (tm[2] || '').replace(/\*\*.*?\*\*/g, '').replace(/\!\[img\].*?\)/g, '[图]');
      const opts = []; let ans = '', exp = '', inA = false, inE = false; let ap = [];

      for (let i = 1; i < ls.length; i++) {
        const ln = ls[i]; if (!ln) continue;
        const om = ln.match(/^-\s*([A-G])[\.\s、]+(.+)/);
        if (om && !inA) { opts.push({label: om[1], text: om[2]}); continue; }
        if (/\*正确答案[:：]\*/.test(ln)) { inA = true; const a = ln.replace(/^.*\*正确答案[:：]\*\s*/, ''); if (a) ap.push(a); continue; }
        if (/\*我的答案/.test(ln)) continue;
        if (/\*答案解析/.test(ln)) { inA = false; inE = true; const e = ln.replace(/^.*\*答案解析[:：]\*\s*/, ''); if (e) exp += e; continue; }
        if (inA) { if (/^\[.*AI|^\d+\.?\d*\s*分|^知识点|^\*\[/.test(ln)) inA = false; else ap.push(ln); continue; }
        if (inE) { if (/^\[.*AI|^\*\[/.test(ln)) inE = false; else exp += ln + '\n'; continue; }
        if (!inA && !inE && !/^\*.*\*$/.test(ln) && !/^\[/.test(ln) && !ln.startsWith('知识点') && title.length < 500) title += ' ' + ln;
      }
      title = title.replace(/\s+/g, ' ').trim();
      if (title.length >= 3) qs.push(makeQuestion(curSubj, qType, title, opts, ap.join(' ').trim(), exp));
    }
  }
  return qs;
}

// ===== 解析器 2: **N. 题目** 格式 (Scala + Linux前期 + HBase/ZK) =====
function parseStarStar(lines) {
  const qs = [];
  // 找起始行
  let start = 0;
  for (let i = 6200; i < lines.length; i++) {
    if (/^\*\*\d+\.\s/.test(lines[i].trim())) { start = i; break; }
  }
  if (!start) return qs;

  const text = lines.slice(start).join('\n');
  // 按多种分隔符切分
  const blocks = text.split(/\n(?=\*\*\d+\.\s|\*\*第\d+题|###\s+图\d+|###\s+第\d+题)/);
  for (const blk of blocks) {
    const ls = blk.split('\n').map(l => l.trim());
    if (!ls.length) continue;

    // 提取标题
    let title = '';
    const tm = ls[0].match(/^\*\*(\d+)\.\s*(.+?)\*\*$/);
    if (tm) title = tm[2].replace(/\*\*/g, '').trim();
    else title = ls[0].replace(/\*\*/g, '').replace(/^#+\s*/, '').trim();
    if (title.length < 3) continue;

    const opts = []; let ans = '', exp = '', inExp = false;

    for (let i = 1; i < ls.length; i++) {
      const ln = ls[i]; if (!ln || ln === '---' || ln.startsWith('![')) continue;

      // ✅ **答案：X xxx** 或 ✅ **X. xxx**
      if (ln.startsWith('✅')) {
        const am = ln.match(/✅\s*\*\*答案[：:]\s*(.+?)\*\*/);
        const om = ln.match(/✅\s*\*\*([A-G])[\.\s、](.+?)\*\*/);
        const sm = ln.match(/✅\s*\*\*答案[：:]\s*([A-G])\*\*/);
        if (am) { ans = am[1].replace(/\*\*/g, '').trim(); }
        else if (om) { ans = (ans ? ans + '; ' : '') + om[1] + ': ' + om[2].replace(/\*\*/g, '').trim(); opts.push({label: om[1], text: om[2].replace(/\*\*/g, '').trim()}); }
        else if (sm) { ans = (ans ? ans + '; ' : '') + sm[1]; }
        else ans = ln.replace('✅', '').replace(/\*\*/g, '').trim();
        continue;
      }

      // **答案：X** (无✅)
      const nam = ln.match(/^\*\*答案[：:]\s*(.+?)\*\*\s*$/);
      if (nam) { ans = nam[1].replace(/\*\*/g, '').trim(); continue; }

      // 解析
      if (/^[*_]\s*解析[：:]/.test(ln) || ln.startsWith('**解析')) { inExp = true; exp = ln.replace(/^[*_]+\s*解析[：:]\s*[*_]?\s*/, '').replace(/\*\*/g, '').replace(/^[-—]\s*/, ''); continue; }
      if (inExp) {
        const cl = ln.replace(/^[-—]\s*/, '').replace(/[*_]/g, '').replace(/\*\*/g, '');
        if (cl && !cl.startsWith('[') && cl.length > 1) exp += ' ' + cl;
      }

      // 普通选项
      const om = ln.match(/^([A-G])[\.\s、](.+)/);
      if (om && ln.length < 120 && !inExp && opts.length < 8) opts.push({label: om[1], text: om[2].replace(/\*\*/g, '').trim()});

      // 选项: A 对/B 对 (多选题解析格式)
      const ocm = ln.match(/^([A-G])\s+(对|错)[：:]/);
      if (ocm && ans.length < 3) { ans = (ans ? ans + ';' : '') + ocm[1]; }
    }

    let qType = '单选题';
    if (ans.includes(';') || (ans.match(/[A-G]/g) || []).length >= 2) qType = '多选题';
    if (opts.length === 0 && ans.length < 4) qType = '填空题';
    if (opts.length === 0 && ans.length > 50) qType = '简答题';
    if (/对|错|正确|错误/.test(ans) && ans.length <= 4) qType = '判断题';

    const subj = detectSubject(title + ' ' + ans + ' ' + exp);
    qs.push(makeQuestion(subj, qType, title, opts, ans, exp));
  }
  return qs;
}

// ===== 解析器 3: ### 第N题（xxx）格式 (Java Web 选择/多选/判断) =====
function parseJavaWebFigures(lines) {
  const qs = [];
  // Java Web 内容在 lines 7500+
  const text = lines.slice(7500).join('\n');
  const blocks = text.split(/\n(?=###\s+第\d+题)/);
  for (const blk of blocks) {
    const ls = blk.split('\n');
    if (!ls.length) continue;

    const hm = ls[0].trim().match(/^###\s+第(\d+)题[（(]([^）)]+)[）)]/);
    if (!hm) continue;
    const qTypeRaw = hm[2];
    let qType = '单选题';
    if (/多选/.test(qTypeRaw)) qType = '多选题';
    else if (/判断/.test(qTypeRaw)) qType = '判断题';
    else if (/填空/.test(qTypeRaw)) qType = '填空题';

    // 找答案
    let ans = '', exp = '', inExp = false;
    for (let i = 1; i < ls.length; i++) {
      const ln = ls[i].trim();
      if (/\*\*答案[：:]\s*(.+?)\*\*/.test(ln)) {
        const m = ln.match(/\*\*答案[：:]\s*(.+?)\*\*/);
        ans = m[1].replace(/\*\*/g, '').trim();
        continue;
      }
      if (/\*\*解析[：:]/.test(ln)) { inExp = true; continue; }
      if (inExp) {
        const cl = ln.replace(/^[-—]\s*/, '').replace(/\*\*/g, '').replace(/^`|`$/g, '');
        if (cl && !cl.startsWith('![') && cl.length > 2) exp += (exp ? ' ' : '') + cl;
      }
    }

    // 从解析中推断题目（解析通常以题目要点开头）
    let title = '';
    // 提取解析中第一句作为标题
    const firstExpLine = ls.slice(1).find(l => l.trim() && !l.trim().startsWith('*') && !l.trim().startsWith('![') && !l.trim().startsWith('-'));
    if (firstExpLine) title = firstExpLine.trim().replace(/\*\*/g, '').substring(0, 250);
    else title = hm[2] + ' 第' + hm[1] + '题';

    const subj = detectSubject(title + ' ' + exp);
    qs.push(makeQuestion(subj, qType, title, [], ans, exp));
  }
  return qs;
}

// ===== 解析器 4: ### 图N（xxx）格式 (Linux 选择题补充) =====
function parseFigureBlocks(lines) {
  const qs = [];
  const text = lines.slice(10000).join('\n');
  const blocks = text.split(/\n(?=###\s+图\d+[（(])/);
  for (const blk of blocks) {
    const ls = blk.split('\n');
    if (!ls.length) continue;
    const hm = ls[0].trim().match(/^###\s+图(\d+)[（(]([^）)]+)[）)]/);
    if (!hm) continue;

    let title = hm[2].replace(/\*\*/g, '').trim();
    let ans = '', exp = '', inExp = false;

    for (let i = 1; i < ls.length; i++) {
      const ln = ls[i].trim();
      if (/\*\*正确答案[：:]\s*(.+?)\*\*/.test(ln)) { ans = ln.match(/\*\*正确答案[：:]\s*(.+?)\*\*/)[1].trim(); continue; }
      if (/\*\*答案[：:]\s*(.+?)\*\*/.test(ln) && !ans) { ans = ln.match(/\*\*答案[：:]\s*(.+?)\*\*/)[1].trim(); continue; }
      if (/\*\*解析[：:]/.test(ln) || /^\*解析/.test(ln)) { inExp = true; continue; }
      if (inExp) {
        const cl = ln.replace(/^[-—]\s*/, '').replace(/[*_]/g, '').replace(/\*\*/g, '').replace(/^`|`$/g, '');
        if (cl && cl.length > 1) exp += ' ' + cl;
      }
      // 普通选项
      const om = ln.match(/^([A-G])[\.\s、](.+)/);
      if (om && !inExp && ln.length < 120) {
        if (title.length < 200) title += ' | ' + om[1] + '. ' + om[2].replace(/\*\*/g, '').substring(0, 60);
      }
    }

    let qType = '单选题';
    if (ans.includes(',')) qType = '多选题';
    const subj = detectSubject(title + ' ' + exp);
    qs.push(makeQuestion(subj, qType, title, [], ans, exp));
  }
  return qs;
}

// ===== 执行全部解析 =====
console.log('📖 多格式解析 questions.md ...\n');

const main = parseMain(raw.split('\n'));
console.log(`  格式1 (### N. 标题): ${main.length} 题`);

const star = parseStarStar(raw.split('\n'));
console.log(`  格式2 (**N. 题目):    ${star.length} 题`);

const jwFigs = parseJavaWebFigures(raw.split('\n'));
console.log(`  格式3 (### 第N题):     ${jwFigs.length} 题`);

const figs = parseFigureBlocks(raw.split('\n'));
console.log(`  格式4 (### 图N):       ${figs.length} 题`);

let all = [...main, ...star, ...jwFigs, ...figs];

// 去重
const seen = new Set();
const unique = [];
for (const q of all) {
  const key = (q.title + q.subject).substring(0, 100);
  if (!seen.has(key)) { seen.add(key); unique.push(q); }
}
all = unique;
console.log(`\n  ✅ 去重后总计: ${all.length} 题\n`);

// ===== 统计 =====
const subjects = ['Java Web', 'Linux', 'Hadoop', 'Scala & Spark', 'HBase / ZooKeeper'];
const bySubject = {};
for (const s of subjects) bySubject[s] = all.filter(q => q.subject === s);

console.log('📊 各科题目分布：');
for (const s of subjects) {
  const qs = bySubject[s];
  const types = {};
  for (const q of qs) types[q.type] = (types[q.type] || 0) + 1;
  console.log(`  ${s}: ${qs.length} 题 — ${Object.entries(types).map(([t,n])=>t+n+'题').join(', ')}`);
}

// ===== 输出分科 MD =====
const SUBJECT_FILES = {
  'Java Web': 'JavaWeb.md', 'Linux': 'Linux.md', 'Hadoop': 'Hadoop.md',
  'Scala & Spark': 'ScalaSpark.md', 'HBase / ZooKeeper': 'HBaseZK.md',
};
const SUBJECT_ICONS = {
  'Java Web': '☕', 'Linux': '🐧', 'Hadoop': '🐘', 'Scala & Spark': '⚡', 'HBase / ZooKeeper': '🗄️',
};

for (const s of subjects) {
  const qs = bySubject[s];
  let md = `# ${SUBJECT_ICONS[s]} ${s} — 题库（${qs.length}题）\n\n`;
  md += `> 自动解析自 questions.md | 含答案和解析\n\n---\n\n`;

  const typeOrder = ['单选题', '多选题', '判断题', '填空题', '简答题', '程序题'];
  for (const t of typeOrder) {
    const tqs = qs.filter(q => q.type === t);
    if (!tqs.length) continue;
    md += `## ${t}（${tqs.length}题）\n\n`;
    tqs.forEach((q, idx) => {
      md += `### ${idx + 1}. ${q.title}\n\n`;
      if (q.options.length > 0) md += q.options.map(o => `- **${o.label}.** ${o.text}`).join('\n') + '\n\n';
      md += `> ✅ **答案：** ${q.answer}\n`;
      if (q.explanation) md += `> 📝 **解析：** ${q.explanation}\n`;
      md += '\n---\n\n';
    });
  }
  fs.writeFileSync(path.join(OUT, SUBJECT_FILES[s]), md, 'utf8');
  console.log(`📄 输出: parsed/${SUBJECT_FILES[s]} (${qs.length}题)`);
}

// ===== 输出 JSON =====
const jsonData = all.map(q => ({subject:q.subject, type:q.type, title:q.title, options:q.options, answer:q.answer, explanation:q.explanation||''}));
const jsContent = `// 自动解析自 questions.md — ${all.length} 题\n// 生成: ${new Date().toISOString()}\nconst PREPARSED_QUESTIONS = ${JSON.stringify(jsonData)};\n`;
fs.writeFileSync(path.join(OUT, 'questions_data.js'), jsContent, 'utf8');
fs.writeFileSync(path.join(OUT, 'questions_data.json'), JSON.stringify(jsonData, null, 2), 'utf8');
console.log(`\n📦 输出: parsed/questions_data.js + .json (${all.length}题)`);
console.log('🎉 全部完成！');
