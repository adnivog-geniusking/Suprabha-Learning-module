const timelineData = [
  {title:'Phase 1 - Foundation',time:'Weeks 1-3',description:'Build core HR knowledge, resume strength, and communication confidence.',tasks:['Study HR lifecycle & latest terms','Rewrite resume with measurable achievements','Practice foundational communication']},
  {title:'Phase 2 - Tool Mastery',time:'Weeks 4-8',description:'Master modern HR tools and complete real systems workflows.',tasks:['Use ATS for candidate pipelines','Build HRIS onboarding workflows','Create analytics reports for HR metrics']},
  {title:'Phase 3 - Project Practice',time:'Weeks 9-14',description:'Apply learning with portfolio-ready HR projects and case work.',tasks:['Build a hiring pipeline project','Design a new joiner onboarding kit','Complete mock interview drills']},
  {title:'Phase 4 - Interview Mastery',time:'Weeks 15-18',description:'Finalize interview prep with STAR stories, cases, and a strong relaunch pitch.',tasks:['Create 12 STAR stories','Practice 20 interview questions','Polish your gap story and personal brand']}
];

const modules = [
  {title:'HR Foundations',subtitle:'Understand the HR lifecycle',description:'Learn how HR supports business through recruitment, onboarding, operations and culture.',overview:'This module explains the key HR functions, terminology and the full employee lifecycle. You learn what HR does, why it matters, and how to talk confidently about talent work.',
    steps:['Review HR domains and modern HR terminology','Study talent acquisition metrics and performance indicators','Understand HRIS, employer branding, DE&I and people analytics'],
    stepsDetailed:['Read the full HR lifecycle, from attraction to separation, and write one short paragraph for each phase.','List the top HR metrics used in recruitment and onboarding, then map them to candidate experience and business results.','Explore HRIS, employer branding, DE&I and people analytics with examples; note how they connect to hiring and retention.'],
    keyTerms:[
      {term:'HRIS',desc:'Human Resource Information System that stores employee data, automation, workflows, and reports.'},
      {term:'DE&I',desc:'Diversity, equity, and inclusion practices that build fair hiring and workplace culture.'},
      {term:'Employer branding',desc:'How an organization presents itself to candidates and employees to attract talent.'},
      {term:'People analytics',desc:'Using HR data such as attrition, engagement and hiring metrics to make decisions.'}
    ],
    resources:['https://www.shrm.org','https://hbr.org/topic/human-resources']
  },
  {title:'Recruitment & ATS',subtitle:'Build candidate pipelines',description:'Practice full ATS workflows and learn how to source, screen and move candidates.',overview:'This module turns recruitment theory into a real hiring pipeline. You learn how ATS systems work, how to manage candidates, and how to track sourcing performance.',
    steps:['Set up Freshteam or Zoho Recruit','Import candidates and configure hiring stages','Design outreach templates and track source effectiveness'],
    stepsDetailed:['Create a role in an ATS, define interview stages, and add candidate details to a sample pipeline.','Import sample candidate data, assign stages, and practice moving profiles from screening to offer.','Write outreach messages for sourcing and build a tracker to compare the best source channels.'],
    keyTerms:[
      {term:'ATS',desc:'Applicant Tracking System used to manage job postings, candidates, stages and communication.'},
      {term:'Candidate pipeline',desc:'A visual flow of candidates from sourcing through screening to hiring.'},
      {term:'Sourcing',desc:'Finding and engaging candidates through job boards, referrals, LinkedIn and communities.'},
      {term:'Time-to-fill',desc:'How long it takes to hire for an open position; a key recruitment metric.'}
    ],
    resources:['https://freshteam.com','https://zoho.com/recruit']
  },
  {title:'HRIS & Onboarding',subtitle:'Run employee operations',description:'Build onboarding flows, maintain employee records, and manage joiner experience.',overview:'This module teaches modern employee operations and onboarding execution. You learn how to build HRIS workflows, handle documents, and design a first-week experience.',
    steps:['Create employee profiles in OrangeHRM/BambooHR','Build onboarding checklists and document tasks','Simulate new joiner status tracking'],
    stepsDetailed:['Set up a sample employee record with personal data, role details, and joining milestones.','Design a detailed checklist for a new hire, including pre-boarding, first-day tasks, and first-week activities.','Use a tracker to update documents, IT access, training, and buddy assignments for each joiner.'],
    keyTerms:[
      {term:'Onboarding',desc:'The process that welcomes, trains, and integrates new hires into the organization.'},
      {term:'Employee record',desc:'A formal profile containing compensation, role, compliance, and performance information.'},
      {term:'Workflow',desc:'A sequence of actions or approvals used to complete an HR process.'}
    ],
    resources:['https://www.orangehrm.com','https://www.bamboohr.com']
  },
  {title:'Analytics & Reporting',subtitle:'Turn data into insight',description:'Build HR dashboards and reports that show hiring, onboarding and performance health.',overview:'This module shows you how HR metrics and dashboards are created. You practice measuring hiring, onboarding, and employee health with real data and storytelling.',
    steps:['Create HR trackers in Excel','Build a Power BI dashboard for hiring metrics','Prepare stakeholder-ready insights'],
    stepsDetailed:['Build a tracker for hiring data, including roles, source, stage, time-to-fill and offer results.','Create charts for headcount, vacancy status and candidate movement using Power BI or Tableau.','Write a short report that explains the metrics, what changed, and the recommended next steps.'],
    keyTerms:[
      {term:'KPI',desc:'Key performance indicator used to track how well HR processes are working.'},
      {term:'Attrition',desc:'The rate at which employees leave the organization.'},
      {term:'Offer acceptance rate',desc:'The percentage of offers that candidates accept.'}
    ],
    resources:['https://powerbi.microsoft.com','https://www.tableau.com']
  },
  {title:'Interview Mastery',subtitle:'Practice confidently',description:'Prepare STAR stories, case answers, and communication for HR interviews.',overview:'This module gives you the exact frameworks to answer behavioral and HR case questions. You practice storytelling, gap explanations, and professional confidence.',
    steps:['Write 12 STAR stories with results','Practice behavioral and case questions','Refine your gap explanation and pitch'],
    stepsDetailed:['Build twelve STAR stories covering recruitment, onboarding, compliance, stakeholder communication, and process improvement.','Practise phrasing answers clearly, highlighting your role, result and learning.','Write a crisp gap story that positions your break as a learning and growth period.'],
    keyTerms:[
      {term:'STAR',desc:'Situation, Task, Action, Result — a structured way to answer behavioral interview questions.'},
      {term:'Gap story',desc:'Your explanation for a career break that keeps the focus on readiness and growth.'},
      {term:'Behavioral interview',desc:'An interview style that asks about past actions as predictors of future performance.'}
    ],
    resources:['https://hbr.org/2018/02/the-right-way-to-answer-behavioral-interview-questions','https://www.themuse.com']
  },
  {title:'Career Relaunch',subtitle:'Brand yourself professionally',description:'Strengthen your resume, profile, and job application process.',overview:'This module helps you package your experience and career gap professionally. You build a strong resume, LinkedIn presence, and a disciplined application tracker.',
    steps:['Rewrite resume bullets with metrics','Update LinkedIn headline and summary','Build a job application tracker'],
    stepsDetailed:['Rewrite every bullet to show what you did, how you did it, and the measurable impact.','Write a LinkedIn summary that explains your expertise, gap story and readiness for HR roles.','Create a tracker for applications, follow-ups, interviews, and outcomes.'],
    keyTerms:[
      {term:'Personal brand',desc:'The story you communicate about your professional strengths, values, and impact.'},
      {term:'Resume bullet',desc:'A concise statement showing results, action and context.'},
      {term:'Application tracker',desc:'A tool to monitor job submissions, follow-ups, and next steps.'}
    ],
    resources:['https://resume.io','https://www.linkedin.com']
  }
];

const tools = [
  {name:'Freshteam / Zoho Recruit',why:'ATS & hiring workflow',time:'1-2 weeks',steps:['Sign up for a free trial','Create open roles and hiring stages','Import candidate CSV and move profiles through stages','Build communication templates for outreach and offers'],resources:['https://freshteam.com','https://zoho.com/recruit']},
  {name:'OrangeHRM / BambooHR',why:'HRIS & onboarding',time:'1 week',steps:['Create employee records and roles','Build onboarding checklists and tasks','Track joiner completion status','Review HRIS reports for employees'],resources:['https://www.orangehrm.com','https://www.bamboohr.com']},
  {name:'LinkedIn & Sourcing',why:'Candidate sourcing',time:'ongoing',steps:['Build Boolean strings for key roles','Save candidate searches and perform outreach','Track response rate and update pipeline','Practice referral and portal sourcing'],resources:['https://linkedin.com']},
  {name:'Power BI / Tableau',why:'People analytics',time:'2-4 weeks',steps:['Export sample recruitment data','Create visuals for hires and time-to-fill','Build a dashboard for leadership review','Present insights with context'],resources:['https://powerbi.microsoft.com','https://www.tableau.com']},
  {name:'Moodle / LMS',why:'Training design',time:'1 week',steps:['Create a mini onboarding course','Add lessons, quizzes, and tasks','Assign learners and review completion','Gather feedback and iterate'],resources:['https://moodle.org']}
];

const projects = [
  {title:'Talent Acquisition Pipeline',desc:'Build a complete recruitment workflow with source tracking and candidate reporting.'},
  {title:'Onboarding Launch Kit',desc:'Create a new joiner welcome kit, checklist, and training plan.'},
  {title:'HR Analytics Dashboard',desc:'Deliver a dashboard showing hiring, onboarding, and HR metrics.'}
];

const motivationalQuotes = [
  'Every restart is a strategic move - this time, come back stronger.',
  'Learn the tools, own the process, and lead with confidence.',
  'One focused step today makes the interview stage easier tomorrow.',
  'Train like an HR expert; speak like an HR leader.',
  'Consistency in practice turns skill into mastery.'
];

const interviewKit = {
  questions: [
    {text:'Tell me about your HR experience and why you want to return now.',tips:'Share specific HR tasks, learning from your gap, and your motivation to return with confidence.'},
    {text:'Describe a hiring project you coordinated end-to-end.',tips:'Explain the role, candidate journey, your actions, and the outcome clearly.'},
    {text:'How do you improve candidate experience across recruitment?',tips:'Talk about communication, speed, feedback, and making every step easy for candidates.'},
    {text:'What HR metrics do you track and why?',tips:'Mention time-to-fill, offer acceptance, quality of hire, and candidate source effectiveness.'},
    {text:'How would you handle a difficult hiring manager request?',tips:'Show how you listen, align priorities, set clear expectations, and provide data-backed options.'}
  ],
  caseStudies: [
    {title:'Design a 45-day onboarding program for 40 new hires.',approach:'Outline pre-boarding, first-day welcome, training schedule, buddy support, and feedback checkpoints.'},
    {title:'Your offer acceptance rate is low. Diagnose and improve it.',approach:'Review offer competitiveness, hiring manager experience, communication, and candidate follow-up.'},
    {title:'Create the structure for an HR hiring dashboard for Bangalore operations.',approach:'Include vacancies, pipeline stage counts, time-to-fill, source performance and risk flags.'}
  ]
};

const templates = {
  'Job Description (JD)': `Job Title: [Title]\nLocation: Bengaluru\nRole Summary: Responsible for end-to-end recruitment for assigned roles.\nKey Responsibilities:\n- Source candidates using LinkedIn and referrals\n- Coordinate interviews and manage ATS stages\n- Conduct offer and onboarding formalities\n- Maintain recruitment trackers and hiring dashboards\n\nQualifications: Bachelor degree; 1-3 years experience in recruitment.`,
  'Offer Letter (sample)': `Date: [Date]\nDear [Candidate],\nWe are pleased to offer you the position of [Role] at [Company]. Salary: [CTC]. Joining Date: [Date].\nPlease review and confirm your acceptance.`,
  'Onboarding Checklist': `Before joining:\n- Send offer letter\n- Collect documents\n- Create IT account\nOn day 1:\n- Welcome session\n- Complete forms\n- Assign buddy\nFirst week:\n- Assign training modules\n- Check in with manager.`
};

const knowledgeItems = [
  {title:'HR Lifecycle',description:'Core HR phases from attraction through separation.',content:'The HR lifecycle defines how candidates are sourced, hired, onboarded, developed, and retained. Understanding these phases helps you place each activity in context for recruiters and managers.'},
  {title:'Applicant Tracking System (ATS)',description:'A tool to manage hiring stages, candidates and communication.',content:'An ATS centralizes recruitment workflows. It helps you post jobs, screen applications, update candidate status, and build repeatable hiring pipelines.'},
  {title:'HRIS',description:'The system behind employee records, workflows and reporting.',content:'HRIS is where employee data lives. It supports onboarding, payroll, document management, and internal operations for HR teams.'},
  {title:'Onboarding',description:'How new hires are welcomed, setup and made productive.',content:'Onboarding includes pre-joining preparation, orientation, training, buddy support and check-ins. Great onboarding reduces early attrition and builds confidence.'},
  {title:'DE&I',description:'Diversity, equity, and inclusion practices in HR.',content:'DE&I encourages fair hiring, belonging and equal growth opportunities. A strong HR hub explains how this improves culture, trust and employer reputation.'},
  {title:'People Analytics',description:'Using HR data to make people decisions.',content:'People analytics turns HR metrics into insight. Common measures include time-to-fill, turnover, offer acceptance, and employee engagement.'}
];

function el(selector){return document.querySelector(selector)}
function createEl(tag, props={}){const element=document.createElement(tag);Object.entries(props).forEach(([key,value])=>{if(key==='text')element.textContent=value;else if(key==='html')element.innerHTML=value;else element.setAttribute(key,value)});return element}
function loadJSON(key,fallback){const raw=localStorage.getItem(key);return raw?JSON.parse(raw):fallback}
function saveJSON(key,value){localStorage.setItem(key,JSON.stringify(value))}

function renderTimeline(){const container=el('#timeline');container.innerHTML='';timelineData.forEach(item=>{const card=createEl('div',{class:'card'});card.innerHTML=`<strong>${item.title}</strong><div class='muted'>${item.time}</div><p>${item.description}</p><ul>${item.tasks.map(task=>`<li>${task}</li>`).join('')}</ul>`;container.appendChild(card)})}

function renderModules(){const container=el('#moduleGrid');container.innerHTML='';modules.forEach((module,index)=>{const card=createEl('div',{class:'module-card'});const status=loadJSON(`hrcom.module.${index}`,Array(module.steps.length).fill(false));const completed=status.every(Boolean);card.innerHTML=`<h3>${module.title}</h3><p class='muted'>${module.subtitle}</p><p>${module.description}</p><ul>${module.steps.map((step,stepIndex)=>`<li><label><input type='checkbox' data-module='${index}' data-step='${stepIndex}' ${status[stepIndex]?'checked':''}/> ${step}</label></li>`).join('')}</ul><div class='module-actions'><button class='btn-outline' data-detail-button='${index}'>Explore module</button><button class='btn-secondary' data-module='${index}' data-module-button='${index}'>${completed?'Reset module':'Complete module'}</button></div>`;container.appendChild(card)})
  container.querySelectorAll('input[type=checkbox]').forEach(input=>input.addEventListener('change',toggleModuleStep));
  container.querySelectorAll('[data-module-button]').forEach(button=>button.addEventListener('click',toggleModule));
  container.querySelectorAll('[data-detail-button]').forEach(button=>button.addEventListener('click',()=>renderModuleDetail(button.dataset.detailButton)))}

function toggleModuleStep(event){const index=event.target.dataset.module;const step=Number(event.target.dataset.step);const key=`hrcom.module.${index}`;const status=loadJSON(key,Array(modules[index].steps.length).fill(false));status[step]=event.target.checked;saveJSON(key,status);updateProgress();renderModules()}

function toggleModule(event){const index=event.target.dataset.module;const key=`hrcom.module.${index}`;const status=loadJSON(key,Array(modules[index].steps.length).fill(false));const allDone=status.every(Boolean);saveJSON(key,allDone?Array(status.length).fill(false):Array(status.length).fill(true));renderModules();updateProgress()}

function renderTools(){const grid=el('#toolGrid');grid.innerHTML='';tools.forEach(tool=>{const card=createEl('div',{class:'tool'});card.innerHTML=`<h4>${tool.name}</h4><p>${tool.why} - <span class='muted'>${tool.time}</span></p><strong>Hands-on</strong><ol class='steps'>${tool.steps.map(step=>`<li>${step}</li>`).join('')}</ol><p class='resources'><strong>Resources:</strong> ${tool.resources.map(url=>`<a href='${url}' target='_blank'>${url}</a>`).join(' · ')}</p>`;grid.appendChild(card)})}

function renderProjects(){const container=el('#projectsList');container.innerHTML='';projects.forEach(project=>{const card=createEl('div',{class:'project-card'});card.innerHTML=`<h4>${project.title}</h4><p>${project.desc}</p>`;container.appendChild(card)})}

function renderModuleDetail(index){const module=modules[index];el('#detailTitle').textContent=module.title;const content=el('#detailContent');content.innerHTML=`<p>${module.overview}</p><h3>What you will master</h3><ul>${module.steps.map(step=>`<li>${step}</li>`).join('')}</ul><h3>Step-by-step training</h3><ol>${module.stepsDetailed.map(detail=>`<li>${detail}</li>`).join('')}</ol><h3>Key HR terms</h3><div class='term-list'>${module.keyTerms.map(term=>`<div class='term-card'><strong>${term.term}</strong><p>${term.desc}</p></div>`).join('')}</div><h3>Resources</h3><ul>${module.resources.map(url=>`<li><a href='${url}' target='_blank'>${url}</a></li>`).join('')}</ul>`;el('#moduleDetail').classList.remove('hidden');window.scrollTo({top:el('#moduleDetail').offsetTop-24,behavior:'smooth'})}

function closeModuleDetail(){el('#moduleDetail').classList.add('hidden')}

function renderKnowledgeHub(){const grid=el('#knowledgeGrid');grid.innerHTML=knowledgeItems.map(item=>`<div class='glossary-card'><h4>${item.title}</h4><p class='muted'>${item.description}</p><p>${item.content}</p></div>`).join('')}

function filterKnowledgeHub(){const query=el('#knowledgeSearch').value.toLowerCase();const grid=el('#knowledgeGrid');const filtered=knowledgeItems.filter(item=>item.title.toLowerCase().includes(query)||item.description.toLowerCase().includes(query)||item.content.toLowerCase().includes(query));grid.innerHTML=filtered.length?filtered.map(item=>`<div class='glossary-card'><h4>${item.title}</h4><p class='muted'>${item.description}</p><p>${item.content}</p></div>`).join(''):'<p class="muted">No matching knowledge items found. Try keywords like ATS, onboarding, HRIS, analytics or DE&I.</p>'}

function renderInterview(){el('#questionList').innerHTML=interviewKit.questions.map(q=>`<li><strong>${q.text}</strong><div class='muted'>${q.tips}</div></li>`).join('');el('#caseList').innerHTML=interviewKit.caseStudies.map(c=>`<li><strong>${c.title}</strong><div class='muted'>${c.approach}</div></li>`).join('')}

function renderInterviewKitCard(){const card=createEl('div',{class:'card'});card.innerHTML=`<h3>Interview Kit</h3><h4>Common Questions</h4><ol>${interviewKit.questions.map(q=>`<li><strong>${q.text}</strong><div class='muted'>${q.tips}</div></li>`).join('')}</ol><h4>Case Studies</h4><ol>${interviewKit.caseStudies.map(c=>`<li><strong>${c.title}</strong><div class='muted'>${c.approach}</div></li>`).join('')}</ol>`;el('#interview').appendChild(card)}

function loadToday(){const key='hrcom.today';const defaults=['Practice Boolean search (30m)','Import sample candidates into ATS','Practice one interview answer'];const tasks=loadJSON(key,defaults.map(text=>({text,done:false})));saveJSON(key,tasks);renderTodayChecklist(tasks)}

function renderTodayChecklist(tasks){const list=el('#todayChecklist');list.innerHTML='';tasks.forEach((task,index)=>{const li=createEl('li');const input=createEl('input',{type:'checkbox'});input.checked=task.done;input.addEventListener('change',()=>{task.done=input.checked;saveJSON('hrcom.today',tasks);updateProgress()});li.appendChild(input);li.appendChild(document.createTextNode(task.text));list.appendChild(li)})}

function loadResume(){const key='hrcom.resume';const defaultResume=`Suprabha K N\nSenior Process Executive - Talent Acquisition (HR Operations)\nInfosys BPM Limited, Bengaluru - Apr 2021 - Nov 2021\n- Managed end-to-end non-IT recruitment, onboarding, and joining formalities.\n- Maintained trackers, prepared stakeholder reports, and reduced joiner delays.\n\nEarlier: Process Executive (Talent Acquisition) - Nov 2019 - Apr 2021\nEducation: BBA\nSkills: Recruitment, Onboarding, Reporting, HR Operations, Excel, Communication`;const resume=localStorage.getItem(key)||defaultResume;el('#resumeText').value=resume;saveJSON(key,resume);el('#resumeText').addEventListener('input',e=>saveJSON(key,e.target.value))}

function loadStarStories(){const key='hrcom.stars';const defaults=['Handled high-volume campus hiring with a faster turnaround.','Introduced candidate tracking that reduced joining delays by 15%.','Coordinated onboarding tasks and improved joiner experience.'];const stories=loadJSON(key,defaults);saveJSON(key,stories);renderStarList(stories)}

function renderStarList(stories){el('#starUserList').innerHTML=stories.map(story=>`<li>${story}</li>`).join('')}

function addStarStory(){const input=el('#starInput');const text=input.value.trim();if(!text) return;const key='hrcom.stars';const stories=loadJSON(key,[]);stories.unshift(text);saveJSON(key,stories);renderStarList(stories);input.value=''}

function updateProgress(){const today=loadJSON('hrcom.today',[]);const todayScore=today.length?today.filter(task=>task.done).length/today.length:0;const moduleStatus=modules.flatMap((_,index)=>loadJSON(`hrcom.module.${index}`,Array(modules[index].steps.length).fill(false)));const moduleScore=moduleStatus.length?moduleStatus.filter(Boolean).length/moduleStatus.length:0;const overall=Math.round(((todayScore+moduleScore)/2)*100);el('#progressPct').textContent=`${overall}%`;el('#progressBarFill').style.width=`${overall}%`;const level=overall<30?'Beginner':overall<60?'Developing':overall<85?'Advanced':'Mastering';el('#trainingLevel').textContent=level;el('#trainingSummary').textContent=`Training level: ${level}. Keep completing modules and daily practice to level up.`}

function setMotivationQuote(){const index=new Date().getDate()%motivationalQuotes.length;el('#motivationalQuote').textContent=motivationalQuotes[index]}

function renderTemplates(){const card=createEl('div',{class:'card'});card.innerHTML='<h3>Templates</h3>';Object.entries(templates).forEach(([title,text])=>{const block=createEl('div',{class:'template-block'});block.innerHTML=`<h4>${title}</h4><pre>${text}</pre>`;card.appendChild(block)});const wrapper=el('#projectsList').parentElement;wrapper.insertBefore(card,el('#projectsList'))}

function renderInterviewKitCard(){const card=createEl('div',{class:'card'});card.innerHTML=`<h3>Interview Kit</h3><h4>Common Questions</h4><ol>${interviewKit.questions.map(q=>`<li><strong>${q.text}</strong><div class='muted'>${q.tips}</div></li>`).join('')}</ol><h4>Case Studies</h4><ol>${interviewKit.caseStudies.map(c=>`<li><strong>${c.title}</strong><div class='muted'>${c.approach}</div></li>`).join('')}</ol>`;el('#interview').appendChild(card)}

function setup(){renderTimeline();renderModules();renderTools();renderProjects();renderInterview();renderKnowledgeHub();loadToday();loadResume();loadStarStories();updateProgress();setMotivationQuote();renderTemplates();renderInterviewKitCard();el('#printBtn').addEventListener('click',()=>window.open('poster.html','_blank'));el('#resumeBtn').addEventListener('click',()=>el('#resumeSection').scrollIntoView({behavior:'smooth'}));el('#resetBtn').addEventListener('click',()=>{localStorage.clear();location.reload()});el('#addStar').addEventListener('click',addStarStory);el('#closeDetail').addEventListener('click',closeModuleDetail);el('#knowledgeSearch').addEventListener('input',filterKnowledgeHub)}

document.addEventListener('DOMContentLoaded',setup)


