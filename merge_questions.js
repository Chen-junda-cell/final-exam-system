#!/usr/bin/env node
/* 将 indented_linux.json 合并到 parsed/questions_data.js */
const fs = require('fs'), path = require('path');

const existingPath = path.join(__dirname, 'parsed', 'questions_data.js');
const newPath = path.join(__dirname, 'parsed', 'indented_linux.json');

// 读取新题目
const newQuestions = JSON.parse(fs.readFileSync(newPath, 'utf8'));
console.log(`📥 读取新题目: ${newQuestions.length} 道`);

// 读取现有文件
let existingContent = fs.readFileSync(existingPath, 'utf8');

// 找到最后一个 ] 的位置（数组结束）
const lastBracket = existingContent.lastIndexOf(']');
if (lastBracket === -1) {
  console.error('❌ 找不到数组结束标记 ]');
  process.exit(1);
}

// 构建新题目 JSON
const newJson = JSON.stringify(newQuestions, null, 2)
  // 去掉开头的 [ 和结尾的 ]
  .replace(/^\[\n/, '')
  .replace(/\n\]$/, '');

// 在 ] 之前插入新题目
const before = existingContent.substring(0, lastBracket);
const after = existingContent.substring(lastBracket);

// 如果最后一个元素后没有逗号，需要加逗号
// 查找 ] 之前的最后一个非空白字符
const trimmedBefore = before.trimEnd();
let insert;
if (trimmedBefore.endsWith('}')) {
  insert = ',\n' + newJson + '\n';
} else {
  insert = newJson + '\n';
}

const newContent = trimmedBefore + insert + after;

// 更新统计信息
// 旧题目数
const oldCount = (existingContent.match(/"id": "GEN\d+"/g) || []).length;
const totalCount = oldCount + newQuestions.length;
console.log(`📊 旧题目: ${oldCount} → 新题目: ${totalCount}`);

// 更新头部注释
let updatedContent = newContent.replace(
  /\/\/ 六科完整题库 — \d+题 含复习重点全部知识点/,
  `// 六科完整题库 — ${totalCount}题 含复习重点全部知识点`
);

// 写回
fs.writeFileSync(existingPath, updatedContent, 'utf8');
console.log(`✅ 已合并到 parsed/questions_data.js (共${totalCount}题)`);

// 同时更新 questions_data.json
const jsonPath = path.join(__dirname, 'parsed', 'questions_data.json');
if (fs.existsSync(jsonPath)) {
  const existingJson = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const merged = [...existingJson, ...newQuestions];
  fs.writeFileSync(jsonPath, JSON.stringify(merged, null, 2), 'utf8');
  console.log(`✅ 已更新 parsed/questions_data.json (共${merged.length}题)`);
}
