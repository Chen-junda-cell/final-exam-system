#!/usr/bin/env node
const fs=require('fs');
const path='D:\\HuaweiMoveData\\Users\\86147\\Desktop\\期末\\echarts和Matplotlib\\增补题库_完整版.md';
const raw=fs.readFileSync(path,'utf8');

const S='ECharts & Matplotlib';
const allQs=[];

// Split by ### N. pattern
const blocks=raw.split(/\n(?=### \d+\. )/);

for (let i=0; i<blocks.length; i++) {
  const blk=blocks[i];
  const titleMatch=blk.match(/^###\s+\d+\.\s+(.+)/m);
  if (!titleMatch) continue;
  let title=titleMatch[1].trim();

  // Clean title: remove options appended (space + letter + . + space)
  const optStart=title.search(/\s+[A-H]\.\s/);
  if (optStart>0) title=title.substring(0, optStart);

  // Determine section from context - check what's between this block and previous
  const blkIdx=raw.indexOf(blk);
  let lookBack=2000;
  let prevContent=raw.substring(Math.max(0,blkIdx-lookBack), blkIdx);
  
  // Find last ## section header
  const sectionMatch=[...prevContent.matchAll(/##\s+[一二三四五六七八九十]+、(.+)/g)];
  let sectionName='';
  if (sectionMatch.length>0) {
    sectionName=sectionMatch[sectionMatch.length-1][1];
  }
  // Also look for section markers within the block's context (they might be inline)
  const inlineSection=prevContent.match(/([一二三四五六七八九十]+)、?\s*(多选|填空|简答|编程|判断|单项)/);
  
  let qType='单选题';
  if (sectionName.includes('多选') || (inlineSection && inlineSection[2]==='多选')) qType='多选题';
  else if (sectionName.includes('填空') || (inlineSection && inlineSection[2]==='填空')) qType='填空题';
  else if (sectionName.includes('简答') || (inlineSection && inlineSection[2]==='简答')) qType='简答题';
  else if (sectionName.includes('编程') || (inlineSection && inlineSection[2]==='编程')) qType='程序题';
  else if (sectionName.includes('判断') || (inlineSection && inlineSection[2]==='判断')) qType='判断题';

  // Also detect type from block content patterns
  // If title ends with （） or ( ) and has option letters → 单选 or 多选
  const hasOptions=/\s[A-H]\.\s/.test(blk);
  
  // If it looks like a statement without options → likely 判断/简答
  if (!hasOptions && qType==='单选题') {
    if (title.includes('（）') || title.includes('( )')) {
      qType='填空题';
    } else {
      // Check if it ends with 判断题 markers
      const isJudgement=/正确|错误|对错|判断/.test(prevContent);
      if (isJudgement) qType='判断题';
      else qType='简答题';
    }
  }

  // Options
  const opts=[];
  const optPattern=/\s+([A-H])\.\s(.+?)(?=\s+[A-H]\.\s|\n\*\*答案|\n\*解析|$)/gs;
  let optMatch;
  while ((optMatch=optPattern.exec(blk))!==null) {
    opts.push({label:optMatch[1], text:optMatch[2].trim()});
  }

  // Answer
  const ansMatch=blk.match(/\*\*答案\*\*[：:]\s*(.+?)(?:\n|$)/);
  let ans=ansMatch?ansMatch[1].trim():'';

  if (qType==='单选题'){
    const m=ans.match(/^([A-H])/);
    if (m) ans=m[1];
  } else if (qType==='多选题'){
    ans=ans.replace(/[,，\s]/g,'');
  } else if (qType==='判断题'){
    if (/对|正确|A|✅/i.test(ans)) ans='A';
    else ans='B';
  }

  // Explanation
  const expMatch=blk.match(/\*解析\*[：:]\s*([\s\S]+?)(?=\n---|\n$|$)/);
  let exp=expMatch?expMatch[1].trim():'';

  if (title.length<3) continue;
  
  // For 判断题, auto-generate options
  if (qType==='判断题' && opts.length===0) {
    opts.push({label:'A',text:'✅ 对 / 正确'},{label:'B',text:'❌ 错 / 错误'});
  }

  allQs.push({
    subject:S, type:qType, title,
    options:opts, answer:ans, explanation:exp||'',
    topic:'', id:'', level:'B',
    correctCount:0, wrongCount:0,
    lastPractice:null, nextReview:null, reviewStage:0
  });
}

console.log('Parsed:', allQs.length);
const types={};
allQs.forEach(q=>{types[q.type]=(types[q.type]||0)+1;});
console.log('Types:', JSON.stringify(types));

// Verify against expected: 单选60, 多选18, 填空20, 简答6, 编程5 = 109
const expected={单选题:60,多选题:18,填空题:20,简答题:6,程序题:5};
for (const [t,n] of Object.entries(expected)) {
  const got=types[t]||0;
  console.log(`  ${t}: got ${got}, expected ${n} ${got===n?'✅':'❌'}`);
}

// Merge
const m=fs.readFileSync('./parsed/questions_data.js','utf8').match(/const PREPARSED_QUESTIONS = (\[[\s\S]*\]);/);
const d=JSON.parse(m[1]);
let maxId=Math.max(...d.map(q=>parseInt(q.id.substring(3))));
allQs.forEach(q=>{maxId++; q.id='GEN'+String(maxId).padStart(4,'0');});
const merged=[...d, ...allQs];
console.log('\\nMerged:', merged.length);
const subj={};
merged.forEach(q=>{subj[q.subject]=(subj[q.subject]||0)+1;});
Object.entries(subj).sort((a,b)=>b[1]-a[1]).forEach(([s,n])=>console.log('  '+s+': '+n));

const newJs='const PREPARSED_QUESTIONS = '+JSON.stringify(merged,null,2)+';';
fs.writeFileSync('./parsed/questions_data.js','// 七科完整题库 — '+merged.length+'题\n'+newJs,'utf8');
fs.writeFileSync('./parsed/questions_data.json', JSON.stringify(merged,null,2), 'utf8');
console.log('Done');
