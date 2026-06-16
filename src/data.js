export const navItems = [
  {path:'/', label:'Dashboard'},
  {path:'/courses', label:'Course Player'},
  {path:'/modules', label:'Modules'},
  {path:'/knowledge', label:'Knowledge Hub'},
  {path:'/english', label:'Business English'},
  {path:'/tools', label:'Tools Lab'},
  {path:'/resume', label:'Resume Lab'},
  {path:'/interview', label:'Interview Lab'}
]

export const defaultTodayTasks = [
  {text:'Review one HR module with full detail',done:false},
  {text:'Practice a STAR story with result language',done:false},
  {text:'Open a tool lab and complete one hands-on step',done:false}
]

export const coursePrograms = [
  {
    id:'foundation-course',
    title:'HR Foundations Course',
    subtitle:'Step-by-step HR core concepts and terminology',
    overview:'A structured course that teaches HR definitions, frameworks, people processes, and deep explanations so you can understand every HR concept from first principles.',
    duration:'6 lessons',
    lessons:[
      {title:'HR functions and the employee lifecycle',type:'Concept',detail:'Explore every stage of the HR lifecycle with clear examples from hiring to exit. Learn how HR attracts talent, hires the right people, welcomes them through onboarding, supports their work, and manages separation with respect. For example, a recruiter posts a role, a hiring manager interviews candidates, HR runs orientation, and later conducts an exit conversation with a departing employee.'},
      {title:'Core HR terms and fullforms',type:'Concept',detail:'Learn the important HR terms and acronyms that recruiters and people teams use every day. Understand HRIS, ATS, DE&I, TA, L&D, payroll, and performance management with concrete workplace meaning. For example, an ATS tracks candidate applications, while DE&I work makes hiring fairer for people from different backgrounds.'},
      {title:'Recruitment metrics and analytics',type:'Concept',detail:'Study the data that shows whether hiring is working and where it needs improvement. Learn time-to-fill, offer acceptance rate, quality of hire, and source effectiveness with real business examples. For example, a long time-to-fill can delay a project, and a low offer acceptance rate may mean the salary or role needs clearer communication.'},
      {title:'Onboarding and HR operations',type:'Concept',detail:'See how HR operations keep employee processes running smoothly every day. Learn about onboarding plans, compliance checklists, employee records, and experience tracking in practical terms. For example, a strong onboarding workflow makes sure new hires have IT access, training, manager check-ins, and benefits paperwork completed on time.'},
      {title:'People analytics and reporting',type:'Concept',detail:'Discover how HR uses data to make better people decisions and tell stories to leaders. Learn to turn hiring, retention, and engagement numbers into clear reports and action recommendations. For example, a dashboard might show that sales hires leave earlier than expected, which leads HR to review training and manager support.'},
      {title:'Career relaunch framework',type:'Concept',detail:'Build a strong comeback narrative for your HR career with clear examples and results. Learn how to describe gaps, highlight transferable skills, and explain your next role with confidence. For example, you can say you used time away to strengthen communication skills, study HR tools, and prepare for modern recruitment challenges.'}
    ]
  },
  {
    id:'hands-on-lab-course',
    title:'HR Practical Labs',
    subtitle:'Guided hands-on HR projects and tool workflows',
    overview:'A practice-first course that walks you through real HR labs using ATS, HRIS, reporting tools and hiring project work.',
    duration:'6 lessons',
    lessons:[
      {title:'ATS setup and candidate pipeline',type:'Lab',detail:'Set up roles, stages, and candidate movement in a real Applicant Tracking System so you can see how hiring flows in practice. Learn how to move applicants from screen to interview, collect feedback, and keep communication organized. For example, create a “Phone screen,” “Interview,” and “Offer” stage and move one candidate through each step.'},
      {title:'Resume lab and STAR story builder',type:'Lab',detail:'Rewrite your resume with strong metrics and build STAR stories that clearly describe your impact. Practice turning tasks into results-focused bullets that hiring managers understand immediately. For example, change “helped with recruitment” to “coordinated 12 interviews per week and reduced time-to-hire by 15%.”'},
      {title:'Onboarding workflow design',type:'Lab',detail:'Create a complete onboarding checklist and status tracker that guides a new hire through day one, week one, and first month. Learn how to include tasks for IT, training, manager meetings, and feedback. For example, add steps for equipment setup, orientation meeting, and first-week progress check.'},
      {title:'HR analytics dashboard',type:'Lab',detail:'Build a report with hiring metrics, source performance, and onboarding health so you can explain what the data means. Use charts and tables to show where the process is strong and where it needs attention. For example, compare application sources to offer acceptance rates to see which sources provide the best candidates.'},
      {title:'Interview practice and case work',type:'Lab',detail:'Practice interview answers, gap stories, and case challenges using structured responses that make your message clear. Learn to answer questions with context, action, and result so your examples feel credible. For example, describe a hiring challenge, your solution, and the measurable outcome.'},
      {title:'Application tracking system',type:'Lab',detail:'Build a job application tracker and follow-up workflow to manage your own job search like a recruiter. Track roles, companies, dates, status, and next actions so nothing falls through the cracks. For example, set reminders to follow up after application submission and after interviews.'}
    ]
  }
]

export const modules = [
  {
    id:'hr-foundations',
    title:'HR Foundations',
    subtitle:'Learn the complete HR lifecycle',
    description:'Detailed module on HR roles, terminology, frameworks and people functions.',
    overview:'This module is your HR encyclopedia. It explains the end-to-end HR lifecycle, why each HR function matters, and how modern HR supports business strategy.',
    learnings:[
      'What HR does from recruitment to exit',
      'How HR supports employee experience and culture',
      'Key HR functions: TA, onboarding, HRIS, analytics and DE&I'
    ],
    steps:[
      'Read the HR lifecycle and write a quick summary for each phase.',
      'Study key HR metrics and link them to business outcomes.',
      'Learn HRIS, employer branding, DE&I and people analytics with examples.'
    ],
    stepsDetailed:[
      'Attract: Understand employer branding, job design, and sourcing strategy.',
      'Hire: Learn how sourcing, screening, interviewing and offers flow together.',
      'Onboard: Explore pre-boarding, day one, training, and first-week success actions.',
      'Support: Review HR operations, employee communication, policies and engagement.',
      'Grow: Study performance development, feedback and career path planning.',
      'Exit: Learn separation conversations, handover and retention lessons.'
    ],
    keyTerms:[
      {term:'HRIS',desc:'A Human Resource Information System is the central software where HR stores employee data, payroll details, approvals, training records, and workflow tasks. It helps HR teams avoid repeated paperwork and keeps people information accurate. For example, when a new hire joins, HR enters their details once and the HRIS updates payroll, access approvals, and onboarding reminders automatically.'},
      {term:'ATS',desc:'An Applicant Tracking System is the tool recruiters use to manage job postings, applications, interviews, and candidate communication. It gives a clear view of the hiring pipeline and reduces email back-and-forth. For example, a recruiter can see which candidates are “screened,” “interviewed,” or “offered” in one dashboard.'},
      {term:'DE&I',desc:'Diversity, equity and inclusion describes the work HR does to build a fair workplace for people from different backgrounds and identities. Diversity means hiring a mix of people, equity means making sure rules are fair, and inclusion means every person feels valued. For example, inclusive hiring might involve using gender-neutral job descriptions and fair interview scorecards.'},
      {term:'People analytics',desc:'People analytics is the practice of studying HR data to understand patterns and make better decisions. It uses metrics like turnover, time-to-hire, and engagement scores to identify opportunities. For example, if analysis shows a department loses staff quickly, HR can investigate training, workload, or manager support.'}
    ],
    resources:[
      {label:'SHRM HR glossary',url:'https://www.shrm.org'},
      {label:'HBR HR topic guides',url:'https://hbr.org/topic/human-resources'}
    ]
  },
  {
    id:'recruitment-ats',
    title:'Recruitment & ATS',
    subtitle:'Build real candidate pipelines',
    description:'A practical module to master applicant tracking systems and pipeline management.',
    overview:'This module teaches how modern recruiters use ATS, sourcing, candidate screening and stage movement in a real hiring funnel.',
    learnings:[
      'How ATS tracks candidates, stages, and communication',
      'How to import and manage candidate data',
      'How to build outreach templates and measure source performance'
    ],
    steps:[
      'Set up an ATS environment in Freshteam or Zoho Recruit.',
      'Import sample candidates and move them through hiring stages.',
      'Create outreach templates and measure sourcing effectiveness.'
    ],
    stepsDetailed:[
      'Open the ATS, create a role, and define hiring stages clearly.',
      'Add candidate profiles, attach resumes, and capture interview progress.',
      'Use candidate tags, notes and evaluation fields to manage quality.',
      'Build outreach messages for sourcing and follow-up communication.',
      'Measure pipeline conversion and report on stage drop-offs.'
    ],
    keyTerms:[
      {term:'Candidate pipeline',desc:'The visual flow of candidates through hiring stages such as applied, screened, interviewed, and offered. It helps recruiters see where candidates are and what action is next. For example, a pipeline shows that five candidates are at the interview stage and two are waiting for feedback.'},
      {term:'Sourcing',desc:'The process of finding potential candidates through job boards, referrals, LinkedIn, and professional networks. Good sourcing brings strong candidates into the pipeline. For example, sourcing may include searching LinkedIn for people with the right skills and inviting them to apply.'},
      {term:'Time-to-fill',desc:'The number of days from when a job opens until someone accepts an offer. It measures hiring speed and the business cost of open roles. For example, if a role is open for 45 days, HR may review the process to make it faster.'}
    ],
    resources:[
      {label:'Freshteam ATS',url:'https://freshteam.com'},
      {label:'Zoho Recruit',url:'https://zoho.com/recruit'}
    ]
  },
  {
    id:'hris-onboarding',
    title:'HRIS & Onboarding',
    subtitle:'Run employee operations with structure',
    description:'A hands-on module for employee records, onboarding and operational workflows.',
    overview:'Learn how to use HRIS systems to create records, manage onboarding checklists, and maintain compliance and people data.',
    learnings:[
      'How to build employee profiles and role data in HRIS',
      'How to design onboarding journeys and checklist workflows',
      'How to track new hire progress and completion status'
    ],
    steps:[
      'Create employee profiles in OrangeHRM or BambooHR.',
      'Build onboarding checklists and task workflows.',
      'Track new joiner status through first week and handover.'
    ],
    stepsDetailed:[
      'Create sample employee records with position, department and joining details.',
      'Add documents, compliance items and access approvals into the system.',
      'Design a day-one plan, buddy assignments and orientation tasks.',
      'Build a status tracker for onboarding completion and feedback touchpoints.'
    ],
    keyTerms:[
      {term:'Onboarding',desc:'The structured process that helps a new hire settle into their job, team, and company culture. It includes tasks, introductions, training, and check-ins to make the first weeks successful. For example, onboarding can include a first-day welcome, IT setup, manager meeting, and a 30-day progress review.'},
      {term:'Employee record',desc:'A complete profile of an employee that includes personal details, job information, salary, training, and performance notes. It gives HR and managers a trusted source of truth. For example, an employee record may show the hire date, role, manager, and completed compliance training.'},
      {term:'Workflow',desc:'A repeatable sequence of steps or approvals used to complete HR tasks in the right order. Workflows make sure nothing is missed and that work moves smoothly. For example, an onboarding workflow may include creating an IT account, assigning a buddy, and approving training requests.'}
    ],
    resources:[
      {label:'OrangeHRM',url:'https://www.orangehrm.com'},
      {label:'BambooHR',url:'https://www.bamboohr.com'}
    ]
  },
  {
    id:'analytics-reporting',
    title:'Analytics & Reporting',
    subtitle:'Turn data into people insight',
    description:'A module to build HR dashboards, trackers and stakeholder reports.',
    overview:'Learn how to collect HR data, create meaningful visuals, and turn metrics into action plans for leadership.',
    learnings:[
      'Which HR metrics matter for hiring and retention',
      'How to build dashboards for people decisions',
      'How to present recommendations with data storytelling'
    ],
    steps:[
      'Build HR trackers for roles, sources, and stage movement.',
      'Create a dashboard using Power BI or Tableau.',
      'Write a stakeholder summary with insights and actions.'
    ],
    stepsDetailed:[
      'Capture hiring metrics such as vacancies, time-to-fill and offer acceptance.',
      'Create visuals for hiring funnel, source performance and onboarding health.',
      'Highlight risks and opportunities with clear recommendations.',
      'Practice explaining why the data matters and what should change next.'
    ],
    keyTerms:[
      {term:'KPI',desc:'A key performance indicator is a measurable value that shows whether a process is working as intended. In HR, KPIs help leaders see progress and make changes. For example, time-to-fill and retention rate are common HR KPIs.'},
      {term:'Attrition',desc:'Attrition is the rate at which employees leave the organization over time. It helps HR understand retention challenges. For example, if attrition increases in one department, HR may investigate the reasons and improve support.'},
      {term:'Offer acceptance rate',desc:'The percentage of job offers that candidates accept. It shows how attractive the role and the hiring experience are. For example, a low offer acceptance rate may mean the salary, role clarity, or communication needs improvement.'}
    ],
    resources:[
      {label:'Power BI',url:'https://powerbi.microsoft.com'},
      {label:'Tableau',url:'https://www.tableau.com'}
    ]
  },
  {
    id:'interview-mastery',
    title:'Interview Mastery',
    subtitle:'Practice like an HR leader',
    description:'A module for mastering STAR stories, case answers and gap explanations.',
    overview:'This module teaches you how to answer interview questions with confidence and structure, using real HR examples and proven frameworks.',
    learnings:[
      'How to build powerful STAR stories for HR interviews',
      'How to answer behavioral and case questions clearly',
      'How to explain a career gap as a growth story'
    ],
    steps:[
      'Write twelve STAR stories covering recruitment, onboarding, change and teamwork.',
      'Practice common HR questions with clear structure and outcomes.',
      'Refine your gap story to position it as a strategic restart.'
    ],
    stepsDetailed:[
      'Choose six professional stories and six growth/learning stories.',
      'Frame each story with Situation, Task, Action and Result.',
      'Practice answering questions out loud with measurable examples.',
      'Write a gap explanation that shows development, reflection and readiness.'
    ],
    keyTerms:[
      {term:'STAR',desc:'A storytelling method for interviews: Situation, Task, Action, Result. It helps you answer questions with a clear beginning, middle, and outcome. For example, describe the challenge, your role, what you did, and the result such as improved hiring speed.'},
      {term:'Behavioral interview',desc:'An interview style where the interviewer asks about real past actions to predict future performance. It focuses on what you actually did in a situation. For example, you may be asked, “Tell me about a time you managed a difficult stakeholder.”'},
      {term:'Gap story',desc:'The positive explanation you give for a career break or time away from work. It should show learning and readiness to return. For example, you might say you used the gap to complete HR training, volunteer, and prepare for your next role.'}
    ],
    resources:[
      {label:'HBR behavioral interviews',url:'https://hbr.org/2018/02/the-right-way-to-answer-behavioral-interview-questions'},
      {label:'The Muse interview guide',url:'https://www.themuse.com'}
    ]
  },
  {
    id:'career-relaunch',
    title:'Career Relaunch',
    subtitle:'Brand yourself for HR roles',
    description:'A module to polish your resume, LinkedIn, and application process for a strong relaunch.',
    overview:'This module helps you build a professional brand, tell your comeback story, and track applications like an HR operations expert.',
    learnings:[
      'How to write resume bullets with impact',
      'How to craft a LinkedIn summary for HR roles',
      'How to manage applications and follow-ups consistently'
    ],
    steps:[
      'Rewrite resume bullets with metrics and results.',
      'Update LinkedIn headline and summary.',
      'Build a job application tracker with status and next steps.'
    ],
    stepsDetailed:[
      'Identify accomplishments and quantify them with numbers or outcomes.',
      'Write your professional headline and summary with HR keywords.',
      'Use a tracker to capture role, company, stage, follow-up dates and results.'
    ],
    keyTerms:[
      {term:'Personal brand',desc:'The professional story and reputation you share through your resume, LinkedIn, and conversations. It shows what makes you unique and valuable. For example, your personal brand may be “HR recruiter who improves candidate experience and reduces hiring time.”'},
      {term:'Application tracker',desc:'A tool or spreadsheet that monitors job applications, deadlines, interview dates, follow-ups, and status updates. It keeps your search organized and helps you take action at the right time. For example, you can note when you last emailed hiring managers and when to follow up again.'},
      {term:'Resume bullet',desc:'A short sentence on your resume that explains what you did, how you did it, and why it mattered. It should show results and value. For example, “Coordinated 20 interviews per month and reduced hiring lead time by 15%.”'}
    ],
    resources:[
      {label:'Resume.IO examples',url:'https://resume.io'},
      {label:'LinkedIn career profile tips',url:'https://www.linkedin.com'}
    ]
  }
]

export const knowledgeItems = [
  {
    title:'HR Lifecycle',
    description:'The employee journey from attraction through separation.',
    content:'The HR lifecycle is the full journey an employee takes in a company, from the first job ad to the day they leave. It includes how HR attracts people, hires the right person, welcomes them through onboarding, supports their daily work, helps them grow, and manages the exit. For example, HR may launch a recruitment campaign, onboard the new hire with a first-week plan, and later run a retention survey. Understanding the lifecycle helps HR improve each step and keep people engaged.'
  },
  {
    title:'Applicant Tracking System (ATS)',
    description:'A system for managing candidates and hiring stages.',
    content:'An ATS is the digital tool recruiters use to keep all job applicants organized in one place. It stores resumes, tracks interview stages, records feedback, and sends status updates to hiring teams. For example, a recruiter can quickly see which candidate is at “phone screen” or “offer stage” without searching messy email threads. This makes hiring faster, more consistent, and easier to manage.'
  },
  {
    title:'HRIS',
    description:'The system that manages employee data and workflows.',
    content:'HRIS is the software that holds employee details, payroll data, leave information, training history, and approval workflows. It works like a central control panel for HR operations so teams do not repeat the same data entry. For example, HR enters a new hire’s name, position, and salary once, and the system updates payroll, access requests, and compliance checklists automatically. This keeps records accurate and saves time.'
  },
  {
    title:'Onboarding',
    description:'The structured process to welcome and activate new hires.',
    content:'Onboarding is the step-by-step process that helps a new hire become productive, comfortable, and connected in a new job. It includes preparing their workspace, introducing them to the team, explaining responsibilities, and checking progress in the first days and weeks. For example, a good onboarding plan includes a welcome message, training sessions, a mentor, and a 30-day check-in. This reduces confusion and helps people feel supported from the start.'
  },
  {
    title:'DE&I',
    description:'Diversity, equity and inclusion in talent practices.',
    content:'DE&I stands for diversity, equity and inclusion, and it describes how organizations make work fair and welcoming for everyone. Diversity means hiring people from different backgrounds, equity means creating fair policies, and inclusion means making sure every person feels respected. For example, DE&I work may include using neutral language in job ads, training interviewers on bias, and listening to employee feedback. This helps teams perform better and people stay longer.'
  },
  {
    title:'People Analytics',
    description:'Using HR data to make informed people decisions.',
    content:'People analytics is the practice of studying HR data to answer questions and guide action. It uses information such as hiring speed, turnover, engagement scores, and training completion to reveal what is working and what is not. For example, if analytics show that many new hires leave in the first three months, HR may improve onboarding or clarify job expectations. This turns HR from guesswork into evidence-based decision making.'
  }
]

export const englishItems = [
  {
    title:'Meeting language',
    description:'How to speak clearly and professionally in discussions.',
    content:'In meetings, use simple sentences and say the purpose first. Start with phrases like “I would like to share” or “My point is” before giving details. For example, instead of saying “Maybe we can sort this out later,” say “Let us agree on the next step today.” This makes you sound confident and easy to follow.'
  },
  {
    title:'Business terms',
    description:'Everyday business words and how to use them correctly.',
    content:'Business language uses words like “stakeholder,” “deliverable,” and “timeline” to describe work clearly. Learn one term at a time and practice it in real sentences. For example, say “We need a deliverable by Friday” rather than “We should finish it sometime.” This makes your message sound precise and professional.'
  },
  {
    title:'Professional tone',
    description:'How to keep your language polite, direct, and positive.',
    content:'A professional tone is friendly but not too casual. Use polite words like “please,” “thank you,” and “I suggest,” and avoid slang such as “yeah” or “kinda.” For example, instead of “That idea is okay,” say “I think this idea works well because…” This helps others trust your judgment.'
  },
  {
    title:'Grammar upgrades',
    description:'Simple grammar fixes that improve clarity and confidence.',
    content:'Use short, complete sentences and the active voice to sound stronger. For example, say “I will send the report” instead of “The report will be sent by me.” Also keep verb tenses consistent: “I worked with the team and delivered the update,” not “I worked with the team and deliver the update.”'
  },
  {
    title:'Email and follow-up',
    description:'Write clear business messages that get a response.',
    content:'A strong email starts with a short opening, a clear request, and a polite close. For example, “Hello Team, please review the attached report by Thursday. Let me know if you have questions. Thank you.” This helps busy readers understand what you need and reply faster.'
  }
]

export const englishPractice = [
  {
    title:'Beginner grammar',
    level:'Level 1 – Fresh English',
    focus:'Simple sentence structure',
    explanation:'Start with short, complete sentences that follow the basic subject-verb-object order. This is the foundation for clear business communication, especially for everyday status updates and introductions.',
    example:'“I will send the report.” instead of “Send report I will.”',
    prompt:'Correct this sentence: “Please send report tomorrow.”',
    correct:'Please send the report tomorrow.',
    tip:'Practice writing one simple sentence per idea, then add one extra detail once it feels natural.'
  },
  {
    title:'Intermediate grammar',
    level:'Level 2 – Work-ready sentences',
    focus:'Modal verbs and polite requests',
    explanation:'Use modal verbs like can, should, need to, and would to make your language sound professional but still clear. These help you politely ask for action or give suggestions.',
    example:'“Could you review the draft by Friday?” instead of “Review draft Friday.”',
    prompt:'Correct this sentence: “Can you please send me details?”',
    correct:'Could you please send me the details?',
    tip:'Convert direct commands into polite requests using “could,” “would,” or “please.”'
  },
  {
    title:'Advanced grammar',
    level:'Level 3 – Business fluent',
    focus:'Connectors, clarity, and tone',
    explanation:'Use words like however, therefore, because, and additionally to connect ideas and keep your message logical. This makes emails and meeting comments easier to follow and more professional.',
    example:'“We need more data before we approve the plan, because accuracy is critical.”',
    prompt:'Correct this sentence: “We can approve the plan, it has enough details.”',
    correct:'We can approve the plan because it has enough details.',
    tip:'Read your sentence aloud and make sure it flows from one idea to the next with a clear link word.'
  },
  {
    title:'Professional email structure',
    level:'Level 4 – Business writing',
    focus:'Opening, request, closing',
    explanation:'A strong business email has a greeting, a clear purpose sentence, supporting details, and a polite close. This structure helps the reader know exactly what you need and why.',
    example:'“Hello Team, please review the attached report and share comments by Thursday. Thank you.”',
    prompt:'Correct this sentence: “Hi, check the file and confirm.”',
    correct:'Hello, please check the file and confirm.',
    tip:'Use the formula: greeting + purpose + detail + next step + thank you.'
  },
  {
    title:'Meeting phrases',
    level:'Level 5 – Confident conversation',
    focus:'Participation and summary',
    explanation:'In meetings, use phrases like “My point is,” “To summarize,” and “I suggest” to sound clear and confident. This helps you participate without sounding uncertain.',
    example:'“To summarize, we should prioritize the budget review before approving the new hire.”',
    prompt:'Correct this sentence: “I think maybe we should discuss this later.”',
    correct:'I suggest we discuss this later.',
    tip:'Practice replacing unsure phrases like “I think maybe” with stronger choices like “I suggest” or “My recommendation is.”'
  }
]

export const tools = [
  {
    title:'Freshteam / Zoho Recruit',
    description:'Hands-on ATS practice for recruitment workflow.',
    details:'Practice building hiring stages, moving candidates, and tracking outreach in a real ATS environment.',
    steps:[
      'Sign up for a free account.',
      'Create roles and hiring stages.',
      'Import sample candidates and update statuses.',
      'Build email templates and move a candidate through an interview stage.'
    ],
    resources:['https://freshteam.com','https://zoho.com/recruit']
  },
  {
    title:'OrangeHRM / BambooHR',
    description:'HRIS practice for employee records and onboarding.',
    details:'Learn how HRIS systems manage employee data, onboarding tasks, document approvals and people workflows.',
    steps:[
      'Create employee records and role data.',
      'Build onboarding checklists with tasks.',
      'Track joiner progress and completion.',
      'Review HRIS reports for new hires.'
    ],
    resources:['https://www.orangehrm.com','https://www.bamboohr.com']
  },
  {
    title:'LinkedIn & Sourcing',
    description:'Candidate sourcing and networking practice.',
    details:'Practice Boolean searches, candidate pipelines, and outreach messaging for HR sourcing.',
    steps:[
      'Build Boolean strings for open roles.',
      'Save candidate searches and evaluate profiles.',
      'Draft outreach messages that sound professional and direct.',
      'Track response rates and update your pipeline.'
    ],
    resources:['https://linkedin.com']
  },
  {
    title:'Power BI / Tableau',
    description:'People analytics dashboards and reporting.',
    details:'Turn HR numbers into visual insights that executives can use to make decisions.',
    steps:[
      'Export or create sample hiring data.',
      'Build charts for pipeline, sources and time-to-fill.',
      'Create a dashboard with KPIs and trends.',
      'Write a short insight summary for leadership.'
    ],
    resources:['https://powerbi.microsoft.com','https://www.tableau.com']
  }
]

export const projects = [
  {
    title:'Talent Acquisition Pipeline',
    summary:'Build a hiring workflow with sourcing, screening and decision stages.',
    outcome:'A complete pipeline project that shows process, metrics and candidate movement.'
  },
  {
    title:'Onboarding Launch Kit',
    summary:'Create a first-day and first-week onboarding plan with tasks, training and touchpoints.',
    outcome:'A ready-to-use onboarding kit for new hires.'
  },
  {
    title:'HR Analytics Dashboard',
    summary:'Deliver a dashboard highlighting hiring, onboarding and retention metrics.',
    outcome:'A data story with visuals and improvement recommendations.'
  }
]

export const interviewKit = {
  questions:[
    {question:'Tell me about your HR experience and why you want to return now.',tip:'Share what you did, what you learned during the gap, and why you are now ready to excel in HR.'},
    {question:'Describe a hiring project you coordinated end-to-end.',tip:'Explain the role, the candidate journey, your contribution, and the outcome with metrics.'},
    {question:'How do you improve candidate experience across recruitment?',tip:'Mention communication, speed, clarity, feedback, and how you track improvements.'},
    {question:'What HR metrics do you track and why?',tip:'Talk about time-to-fill, offer acceptance, quality of hire, and candidate source performance.'},
    {question:'How would you handle a difficult hiring manager request?',tip:'Show empathy, align on priorities, set expectations, and offer data-backed alternatives.'}
  ],
  cases:[
    {title:'Design a 45-day onboarding program for 40 new hires.',approach:'Cover pre-boarding, first-day activities, training, buddy support, and feedback checkpoints.'},
    {title:'Your offer acceptance rate is low. Diagnose and improve it.',approach:'Review offer competitiveness, communication, role clarity, and candidate follow-up.'},
    {title:'Create the structure for an HR hiring dashboard for Bangalore operations.',approach:'Include vacancies, pipeline stages, time-to-fill, source performance and risk signals.'}
  ]
}

export const templates = [
  {
    label:'Job Description (JD)',
    text:'Job Title: [Title]\nLocation: Bengaluru\nRole Summary: Responsible for end-to-end recruitment for assigned roles.\nKey Responsibilities:\n- Source candidates using LinkedIn and referrals\n- Coordinate interviews and manage ATS stages\n- Conduct offer and onboarding formalities\n- Maintain recruitment trackers and hiring dashboards\n\nQualifications: Bachelor degree; 1-3 years experience in recruitment.'
  },
  {
    label:'Offer Letter (sample)',
    text:'Date: [Date]\nDear [Candidate],\nWe are pleased to offer you the position of [Role] at [Company]. Salary: [CTC]. Joining Date: [Date].\nPlease review and confirm your acceptance.'
  },
  {
    label:'Onboarding Checklist',
    text:'Before joining:\n- Send offer letter\n- Collect documents\n- Create IT account\nOn day 1:\n- Welcome session\n- Complete forms\n- Assign buddy\nFirst week:\n- Assign training modules\n- Check in with manager.'
  }
]
