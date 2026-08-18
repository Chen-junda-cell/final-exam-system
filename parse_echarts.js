#!/usr/bin/env node
/* 解析 ECharts/Matplotlib 题库 docx → 添加到题库 */
const fs=require('fs');

const raw=fs.readFileSync('./temp_echarts.txt','utf8');
const blocks = raw.split(/\n(?=\u3010)/);

console.log('Blocks:', blocks.length);

const allQs=[];
const subject='ECharts & Matplotlib';

for (const blk of blocks) {
  // Title: 【单选·第N题】question
  const titleMatch=blk.match(/【([^】]+)】\s*(.+?)(?=\s{2,}[A-G]\.\s|\n📌)/s);
  if (!titleMatch) continue;
  
  const typeTag=titleMatch[1];
  let title=titleMatch[2].trim();
  let qType='单选题';
  if (typeTag.includes('多选')) qType='多选题';
  else if (typeTag.includes('填空')) qType='填空题';
  else if (typeTag.includes('判断')) qType='判断题';
  else if (typeTag.includes('简答')) qType='简答题';
  else if (typeTag.includes('编程')) qType='程序题';

  // Options: A. xxx  B. xxx
  const opts=[];
  const optMatches=[...blk.matchAll(/\s{2,}([A-H])\.\s(.+?)(?=\s{2,}[A-H]\.\s|\n📌|\n📝|\n✅|\n📖)/gs)];
  for (const m of optMatches) {
    opts.push({label:m[1], text:m[2].trim()});
  }

  // Knowledge point
  const kpMatch=blk.match(/📌\s*知识点[：:]\s*(.+)/);
  const topic=kpMatch?kpMatch[1].trim():'';

  // Explanation
  const expMatch=blk.match(/📝\s*解析[：:]\s*([\s\S]+?)(?=\n✅|\n📖|$)/);
  let exp=expMatch?expMatch[1].trim():'';

  // Answer
  const ansMatch=blk.match(/✅\s*答案[\/要点]?\s*[：:]\s*(.+)/);
  let ans=ansMatch?ansMatch[1].trim():'';

  // Parse answer format
  if (qType==='单选题') {
    const m=ans.match(/^([A-H])/);
    if (m) ans=m[1];
  } else if (qType==='多选题') {
    const m=ans.match(/^([A-H,\s]+)/);
    if (m) ans=m[1].replace(/[,，\s]/g,'').trim();
  } else if (qType==='判断题') {
    if (/对|正确|✅|True/i.test(ans)) ans='A';
    else if (/错|错误|❌|False/i.test(ans)) ans='B';
  } else if (qType==='填空题') {
    // Keep as-is (text)
  } else if (qType==='简答题'||qType==='程序题') {
    // Parse multi-line answer
    const ansParts=blk.substring(blk.lastIndexOf('✅')).replace(/✅\s*答案[\/要点]?\s*[：:]\s*/, '').trim();
    if (ansParts.length>10) ans=ansParts;
  }

  if (title.length<3) continue;

  allQs.push({
    subject, type:qType, title,
    options:opts, answer:ans, explanation:exp||'',
    topic, id:'', level:'B',
    correctCount:0, wrongCount:0,
    lastPractice:null, nextReview:null, reviewStage:0
  });
}

console.log('Parsed:', allQs.length);
const types={};
allQs.forEach(q=>{types[q.type]=(types[q.type]||0)+1;});
console.log('Types:', JSON.stringify(types));

// Save
fs.writeFileSync('./parsed/echarts_parsed.json', JSON.stringify(allQs, null, 2), 'utf8');
console.log('Saved to parsed/echarts_parsed.json');
