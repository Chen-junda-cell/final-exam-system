#!/usr/bin/env node
/* ================================================================
   解析 questions.md 中缩进的 Linux 题目（153道）
   输出: parsed/indented_linux.json
   ================================================================ */
const fs = require('fs'), path = require('path');

const INPUT = path.join(__dirname, 'questions.md');
const OUT = path.join(__dirname, 'parsed');

const raw = fs.readFileSync(INPUT, 'utf8');
const lines = raw.split('\n');

// ===== 提取缩进区域 =====
// 特征：以 4空格 + ### N. (题型 开头
// 缩进区域从第一个缩进的 ### 开始，到连续的缩进题目结束
const indentedLines = [];
let inIndented = false;
let lastIndentedLine = 0;
for (let i = 0; i < lines.length; i++) {
  const l = lines[i];
  if (/^    ###\s+\d+\.\s*[（(]/.test(l)) {
    inIndented = true;
    lastIndentedLine = i;
  }
  if (inIndented) {
    indentedLines.push(l);
    // 检测缩进区域结束：遇到非缩进、非空、非选项续行的 ## 或 ### 行
    if (!l.startsWith('    ') && l.trim() && /^(##\s+[一二三四五六七八九十]|###\s+\d+\.)/.test(l) && i > lastIndentedLine + 20) {
      // 回退：不包含这一行
      indentedLines.pop();
      inIndented = false;
      break;
    }
  }
}

console.log(`📖 提取到 ${indentedLines.length} 行缩进内容`);

// ===== 分割为单个题目 =====
const text = indentedLines.join('\n');
// 按 ### N. 分割（注意缩进）
const blocks = text.split(/\n(?=    ###\s+\d+\.\s*[（(])/);

console.log(`📦 分割为 ${blocks.length} 个题目块`);

// ===== 解析每个题目 =====
const questions = [];
let globalId = 557; // 从 GEN0558 开始

for (const blk of blocks) {
  const ls = blk.split('\n');
  if (!ls.length) continue;

  // 提取标题行
  const titleLine = ls[0].trim();
  const tm = titleLine.match(/^###\s+\d+\.\s*[（(]([^）)]+)[）)]\s*(.*)/);
  if (!tm) {
    // 可能是子标题，跳过
    if (/^##\s+[一二三四]/.test(titleLine)) continue;
    console.log(`  ⚠️ 跳过非题目行: ${titleLine.substring(0, 60)}`);
    continue;
  }

  const typeRaw = tm[1].trim();
  let rawTitle = (tm[2] || '').trim();

  // 判断题型
  let qType = '单选题';
  if (/多选/.test(typeRaw)) qType = '多选题';
  else if (/填空/.test(typeRaw)) qType = '填空题';
  else if (/判断/.test(typeRaw)) qType = '判断题';
  else if (/简答/.test(typeRaw)) qType = '简答题';
  else if (/单选/.test(typeRaw)) qType = '单选题';

  // 清理标题：移除分数后缀
  rawTitle = rawTitle.replace(/[，,]\s*[\d.]+\s*分\s*$/, '').trim();

  // ===== 解析选项、答案、解析 =====
  const opts = [];
  let ans = '';
  let exp = '';
  let inAnswer = false;
  let inExp = false;
  let answerLines = [];

  for (let i = 1; i < ls.length; i++) {
    let ln = ls[i];
    const trimmed = ln.trim();
    if (!trimmed) continue;

    // 先检测解析行 (避免被误当作答案)
    if (/\[\*AI讲解\*\]/.test(trimmed)) {
      inAnswer = false;
      inExp = false;
      continue;
    }

    // 格式1: *我的答案:*:*正确答案:* (单选题/多选题/判断题)
    if (/\*我的答案[:：]\*/.test(trimmed) && /\*正确答案[:：]\*/.test(trimmed)) {
      inAnswer = true;
      const am = trimmed.match(/\*正确答案[:：]\*\s*(.*)/);
      if (am && am[1]) answerLines.push(am[1].trim());
      continue;
    }

    // 格式2: - *我的答案：* (填空题/简答题格式，带 - 前缀)
    if (/^[-—]\s*\*我的答案[：:]\*/.test(trimmed)) {
      inAnswer = true;
      continue;
    }

    // 格式3: - *正确答案：* (填空题/简答题格式，带 - 前缀)
    if (/^[-—]\s*\*正确答案[：:]\*/.test(trimmed)) {
      inAnswer = true;
      const am = trimmed.match(/^[-—]\s*\*正确答案[：:]\*\s*(.*)/);
      if (am && am[1] && am[1].trim()) answerLines.push(am[1].trim());
      continue;
    }

    if (inAnswer) {
      // 收集后续答案行，但排除新的标记行、空行、和下一节标题
      const cl = trimmed.replace(/^[-—]\s*/, '').trim();
      // 遇到非缩进的 ## 或 ### 表明进入了下一节，停止收集
      if (/^(##\s+[一二三四五六七八九十]|###\s+\d+\.)/.test(trimmed) && !trimmed.startsWith('    ')) {
        inAnswer = false;
        continue;
      }
      if (cl && !cl.startsWith('[') && !/^\*.*(我的答案|正确答案).*\*/.test(cl)) {
        answerLines.push(cl);
      }
      continue;
    }

    if (inExp) {
      const cl = trimmed.replace(/^[-—*]\s*/, '');
      if (cl && !cl.startsWith('[')) exp += (exp ? ' ' : '') + cl;
      continue;
    }

    // 检测子标题 (## 二. 填空题 等)
    if (/^##\s+[一二三四]/.test(trimmed)) continue;

    // 检测选项: - A. text 或 - A.\ntext (选项标签和文本可能在不同行)
    const optMatch = trimmed.match(/^-\s*([A-G])\s*[\.\s、](.*)/);
    if (optMatch && !inAnswer) {
      const label = optMatch[1];
      const text = optMatch[2].trim();
      opts.push({ label, text: text || '' });
      continue;
    }

    // 检测上一选项的续行：选项文本在单独一行
    // 前提：前一选项已存在且文本为空
    if (opts.length > 0 && opts[opts.length - 1].text === '' && !inAnswer && !inExp) {
      const prevOpt = opts[opts.length - 1];
      // 判断当前行是否是合理的选项文本（不是答案标记、不是另一个选项、不是特殊行）
      if (trimmed.length > 0 && trimmed.length < 200 &&
          !/^\*.*(我的答案|正确答案).*\*/.test(trimmed) &&
          !/^[-—]\s*[A-G]/.test(trimmed) &&
          !/^\[/.test(trimmed) &&
          !/^##\s/.test(trimmed)) {
        prevOpt.text = trimmed;
        continue;
      }
    }

    // 如果不是选项也不是答案，且标题不长，追加到标题
    if (!inAnswer && !inExp && opts.length === 0 && rawTitle.length < 500) {
      rawTitle += ' ' + trimmed;
    }
  }

  // 构建最终答案
  ans = answerLines.join(' ').trim();

  // ===== 按题型规范化 =====
  if (qType === '填空题') {
    // 填空题答案格式: (1) xxx (2) yyy → 合并
    ans = ans.replace(/\(\d+\)\s*/g, '').trim();
    // 无选项
  }

  if (qType === '简答题') {
    // 简答题无选项
  }

  if (qType === '单选题' || qType === '多选题') {
    // 清理选项文本
    opts.forEach(o => {
      o.text = o.text.replace(/\s+/g, ' ').trim();
    });

    // 多选题答案格式: "BCD:p(打印); d(删除); s(替换);" → "BCD"
    if (qType === '多选题') {
      const multiMatch = ans.match(/^([A-G]+)[：:]/);
      if (multiMatch) {
        ans = multiMatch[1];
      }
    }

    // 单选题答案格式: "B:kill;" → "B"
    if (qType === '单选题') {
      const singleMatch = ans.match(/^([A-G])[：:]/);
      if (singleMatch) {
        ans = singleMatch[1];
      }
    }
  }

  // ===== 质量检查 =====
  let skip = false;
  let issue = '';

  if (qType === '单选题' && opts.length < 2) {
    issue = `选项不足(${opts.length}个)`;
    skip = true;
  }
  if (qType === '多选题' && opts.length < 2) {
    issue = `选项不足(${opts.length}个)`;
    skip = true;
  }
  if (rawTitle.length < 3) {
    issue = '题干过短';
    skip = true;
  }

  if (skip) {
    console.log(`  ⚠️ 跳过不完整题目: ${issue} — "${rawTitle.substring(0, 60)}"`);
    continue;
  }

  globalId++;
  const id = 'GEN' + String(globalId).padStart(4, '0');

  // 判断难度等级
  let level = 'B';
  if (qType === '简答题') level = 'A';
  else if (opts.length <= 2) level = 'C';

  const question = {
    subject: 'Linux',
    type: qType,
    title: rawTitle,
    options: opts,
    answer: ans,
    explanation: exp || '',
    topic: '',
    id: id,
    level: level,
    correctCount: 0,
    wrongCount: 0,
    lastPractice: null,
    nextReview: null,
    reviewStage: 0
  };

  questions.push(question);
}

console.log(`\n✅ 成功解析 ${questions.length} 道题目`);
console.log(`   ID范围: GEN0558 ~ GEN${String(557 + questions.length).padStart(4, '0')}`);

// 统计
const typeCount = {};
questions.forEach(q => { typeCount[q.type] = (typeCount[q.type] || 0) + 1; });
console.log('   题型分布:', JSON.stringify(typeCount));

// ===== 输出 =====
const outPath = path.join(OUT, 'indented_linux.json');
fs.writeFileSync(outPath, JSON.stringify(questions, null, 2), 'utf8');
console.log(`📄 输出: ${outPath}`);
