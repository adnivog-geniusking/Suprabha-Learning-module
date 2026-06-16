import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter as Router, NavLink, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { coursePrograms, englishItems, englishPractice, interviewKit, knowledgeItems, modules, navItems, projects, templates, tools, defaultTodayTasks } from './data'

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = window.localStorage.getItem(key)
    return stored ? JSON.parse(stored) : initialValue
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

function pageTitle(title) {
  return title ? `${title} · HR Career Growth Platform` : 'HR Career Growth Platform'
}

function Header() {
  return (
    <header className="app-header">
      <div>
        <p className="eyebrow">HR Career Platform</p>
        <h1>HR Career Growth Platform</h1>
        <p className="subtitle">A professional HR development workspace with structured learning, practical labs, and career-ready preparation for HR returners.</p>
      </div>
      <div className="hero-actions">
        <span className="badge">Built for HR returners</span>
        <span className="badge accent">Structured, practical, deploy-ready</span>
      </div>
    </header>
  )
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">HR Career Hub</div>
      <nav>
        {navItems.map(item => (
          <NavLink key={item.path} to={item.path} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} end>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-card">
        <h3>Training Commitments</h3>
        <ul>
          <li>Complete detailed modules, not just pointers.</li>
          <li>Use the knowledge hub for definitions, terms and deep context.</li>
          <li>Practice labs with step-by-step hands-on tasks.</li>
          <li>Build resume and interview mastery inside the app.</li>
        </ul>
      </div>
    </aside>
  )
}

function progressSummary(todayTasks, moduleProgress) {
  const completedToday = todayTasks.filter(task => task.done).length
  const todayRatio = todayTasks.length ? completedToday / todayTasks.length : 0
  const completedModuleSteps = moduleProgress.flat().filter(Boolean).length
  const moduleRatio = moduleProgress.flat().length ? completedModuleSteps / moduleProgress.flat().length : 0
  return {
    overall: Math.round(((todayRatio + moduleRatio) / 2) * 100),
    todayRatio,
    moduleRatio
  }
}

function DashboardPage({ todayTasks, setTodayTasks, moduleProgress }) {
  const { overall, todayRatio, moduleRatio } = progressSummary(todayTasks, moduleProgress)
  const level = overall < 25 ? 'Beginner' : overall < 55 ? 'Developing' : overall < 85 ? 'Advanced' : 'Mastering'

  const toggleTask = index => {
    const copy = [...todayTasks]
    copy[index] = {...copy[index], done: !copy[index].done}
    setTodayTasks(copy)
  }

  return (
    <section className="page-grid">
      <div className="dashboard-card hero-card">
        <span className="pill">Career readiness</span>
        <h2>From HR returner to workplace-ready</h2>
        <p>This platform delivers structured HR skills, practical labs, expert reference content, and progress tracking for a confident career relaunch.</p>
        <div className="status-grid">
          <div>
            <span className="label">Training Level</span>
            <strong>{level}</strong>
          </div>
          <div>
            <span className="label">Overall progress</span>
            <strong>{overall}%</strong>
          </div>
          <div>
            <span className="label">Daily mission</span>
            <strong>{Math.round(todayRatio * 100)}%</strong>
          </div>
          <div>
            <span className="label">Module work</span>
            <strong>{Math.round(moduleRatio * 100)}%</strong>
          </div>
        </div>
      </div>

      <div className="dashboard-card">
        <h3>What this training covers</h3>
        <ul>
          <li>Detailed HR concepts with definitions, terms, and real meaning.</li>
          <li>Module-based learning with step-by-step practice tasks.</li>
          <li>Knowledge hub for HR terms, frameworks, and analytics insight.</li>
          <li>Resume Lab with action-driven rewrite guides and STAR story management.</li>
          <li>Interview Lab with question tips, case approaches and mastery guidance.</li>
        </ul>
      </div>

      <div className="dashboard-card wide-card">
        <h3>Today’s mission</h3>
        <p>Finish one module detail, complete a lab task, and practice one interview story.</p>
        <ol className="mini-list">
          {todayTasks.map((task,index) => (
            <li key={task.text}>
              <button className={task.done ? 'check-button done' : 'check-button'} onClick={() => toggleTask(index)}>
                {task.done ? '✓' : '○'}
              </button>
              <span>{task.text}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="dashboard-card">
        <h3>Startup concerns answered</h3>
        <p>This training suite is not a summary dashboard. It is purpose-built for deep HR learning, with:
          <strong>definitions, terms, fullforms, explanations, labs, templates, and practice work.</strong>
        </p>
      </div>
    </section>
  )
}

function ModulesPage({ moduleProgress, setModuleProgress }) {
  const completedCounts = moduleProgress.map((progress, index) => progress.filter(Boolean).length)

  const toggleStep = (moduleIndex, stepIndex) => {
    const copy = moduleProgress.map((list, idx) => idx === moduleIndex ? list.map((value, step) => step === stepIndex ? !value : value) : list)
    setModuleProgress(copy)
  }

  const toggleModule = moduleIndex => {
    const current = moduleProgress[moduleIndex]
    const allDone = current.every(Boolean)
    const copy = moduleProgress.map((list, idx) => idx === moduleIndex ? list.map(() => !allDone) : list)
    setModuleProgress(copy)
  }

  return (
    <section className="page-grid">
      <div className="wide-card">
        <h2>Module Academy</h2>
        <p>Click any module to open the full training detail page. Each module contains definitions, meaning, HR terms, step-by-step tasks and resources.</p>
      </div>

      {modules.map((module, index) => {
        const completeCount = completedCounts[index]
        const percent = Math.round((completeCount / module.steps.length) * 100)
        return (
          <div key={module.id} className="module-card">
            <div className="module-top">
              <div>
                <h3>{module.title}</h3>
                <p className="muted">{module.subtitle}</p>
              </div>
              <span className="badge small">{percent}% complete</span>
            </div>
            <p>{module.description}</p>
            <div className="progress-bar small">
              <span style={{width:`${percent}%`}}></span>
            </div>
            <div className="actions-row">
              <NavLink to={`/modules/${module.id}`} className="btn-outline">Open module</NavLink>
              <button className="btn-secondary" onClick={() => toggleModule(index)}>{completeCount === module.steps.length ? 'Reset' : 'Complete'}</button>
            </div>
          </div>
        )
      })}
    </section>
  )
}

function ModuleDetailPage({ moduleProgress, setModuleProgress }) {
  const { moduleId } = useParams()
  const navigate = useNavigate()
  const module = modules.find(item => item.id === moduleId)

  if (!module) {
    return <div className="page-grid"><div className="wide-card"><h2>Module not found</h2></div></div>
  }

  const progress = moduleProgress[modules.indexOf(module)]

  const toggleStep = stepIndex => {
    const copy = moduleProgress.map((list, idx) => idx === modules.indexOf(module) ? list.map((value, step) => step === stepIndex ? !value : value) : list)
    setModuleProgress(copy)
  }

  const toggleAll = () => {
    const index = modules.indexOf(module)
    const done = progress.every(Boolean)
    const copy = moduleProgress.map((list, idx) => idx === index ? list.map(() => !done) : list)
    setModuleProgress(copy)
  }

  return (
    <section className="page-grid">
      <div className="wide-card detail-header">
        <button className="btn-outline" onClick={() => navigate('/modules')}>← Back to modules</button>
        <div>
          <span className="pill">{module.subtitle}</span>
          <h2>{module.title}</h2>
          <p>{module.overview}</p>
        </div>
      </div>

      <div className="module-detail-card">
        <h3>What you will master</h3>
        <ul>{module.learnings.map(item => <li key={item}>{item}</li>)}</ul>
      </div>

      <div className="module-detail-card">
        <h3>Step-by-step guide</h3>
        <ol>
          {module.stepsDetailed.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
      </div>

      <div className="module-detail-card">
        <h3>Module checklist</h3>
        <div className="task-list">
          {module.steps.map((step, idx) => (
            <label key={step} className="checkbox-row">
              <input type="checkbox" checked={progress[idx]} onChange={() => toggleStep(idx)} />
              <span>{step}</span>
            </label>
          ))}
        </div>
        <button className="btn-primary" onClick={toggleAll}>{progress.every(Boolean) ? 'Reset module' : 'Mark full complete'}</button>
      </div>

      <div className="module-detail-card">
        <h3>Key HR terms</h3>
        <div className="term-grid">
          {module.keyTerms.map(item => (
            <div key={item.term} className="term-card">
              <strong>{item.term}</strong>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="module-detail-card">
        <h3>Resources</h3>
        <ul>
          {module.resources.map(resource => (
            <li key={resource.url}><a href={resource.url} target="_blank" rel="noreferrer">{resource.label}</a></li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function CoursePlayerPage({ courseProgress }) {
  const navigate = useNavigate()
  return (
    <section className="page-grid">
      <div className="wide-card">
        <h2>Course Player</h2>
        <p>Choose a career-focused learning track with built-in progress tracking and practical notes for each lesson.</p>
      </div>
      {coursePrograms.map((course, index) => {
        const progress = courseProgress[index]
        const percent = Math.round((progress.filter(Boolean).length / course.lessons.length) * 100)
        return (
          <div key={course.id} className="course-card">
            <div className="module-top">
              <div>
                <h3>{course.title}</h3>
                <p className="muted">{course.subtitle}</p>
              </div>
              <span className="badge small">{course.duration}</span>
            </div>
            <p>{course.overview}</p>
            <div className="progress-bar small">
              <span style={{width:`${percent}%`}}></span>
            </div>
            <div className="course-footer">
              <button className="btn-primary" onClick={() => navigate(`/courses/${course.id}`)}>Open course</button>
              <span>{percent}% complete</span>
            </div>
          </div>
        )
      })}
    </section>
  )
}

function CourseDetailPage({ courseProgress, setCourseProgress, courseNotes, setCourseNotes }) {
  const { courseId } = useParams()
  const navigate = useNavigate()
  const courseIndex = coursePrograms.findIndex(item => item.id === courseId)
  const course = coursePrograms[courseIndex]

  if (!course) {
    return <div className="page-grid"><div className="wide-card"><h2>Course not found</h2></div></div>
  }

  const progress = courseProgress[courseIndex]
  const notes = courseNotes[courseId] || ''
  const percent = Math.round((progress.filter(Boolean).length / course.lessons.length) * 100)

  const toggleLesson = lessonIndex => {
    const copy = courseProgress.map((list, idx) => idx === courseIndex ? list.map((value, step) => step === lessonIndex ? !value : value) : list)
    setCourseProgress(copy)
  }

  const updateNotes = e => {
    setCourseNotes({...courseNotes, [courseId]: e.target.value})
  }

  return (
    <section className="page-grid">
      <div className="wide-card detail-header">
        <button className="btn-outline" onClick={() => navigate('/courses')}>← Back to course list</button>
        <div>
          <span className="pill">Course player</span>
          <h2>{course.title}</h2>
          <p>{course.overview}</p>
        </div>
      </div>

      <div className="course-detail-card">
        <h3>Progress overview</h3>
        <p className="muted">Track lesson completion and build the notes that matter for your career relaunch.</p>
        <div className="progress-bar small">
          <span style={{width:`${percent}%`}}></span>
        </div>
        <p><strong>{percent}% complete</strong></p>
      </div>

      <div className="course-detail-card">
        <h3>Lesson path</h3>
        <ol>
          {course.lessons.map((lesson, index) => (
            <li key={lesson.title} className="lesson-row">
              <div className="lesson-row-top">
                <label className="checkbox-row">
                  <input type="checkbox" checked={progress[index]} onChange={() => toggleLesson(index)} />
                  <div>
                    <strong>{lesson.title}</strong>
                    <p className="muted">{lesson.type}</p>
                  </div>
                </label>
              </div>
              <div className="lesson-detail">
                <p>{lesson.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="course-detail-card note-panel">
        <h3>Lesson notes</h3>
        <p className="muted">Capture action items, examples, questions, and interview cues for this course.</p>
        <textarea value={notes} onChange={updateNotes} rows={8} className="notes-textarea" />
      </div>

      <div className="course-detail-card">
        <h3>How to use this course</h3>
        <ul>
          <li>Progress through lessons, mark key points, and review the knowledge hub for deeper context.</li>
          <li>Use notes to retain ideas, HR examples, and follow-up actions.</li>
          <li>Pair this course with resume and interview labs for a complete relaunch plan.</li>
        </ul>
      </div>
    </section>
  )
}

function EnglishTrainingPage() {
  const navigate = useNavigate()
  return (
    <section className="page-grid">
      <div className="wide-card">
        <h2>Business English Training</h2>
        <p>Practical English for meetings, business discussions, emails, and professional communication. This section helps you speak clearly, use the right terms, and improve grammar in real workplace situations.</p>
      </div>
      <div className="wide-card">
        <h3>Business English Practice Lab</h3>
        <p>Move from entry-level English to confident business communication with structured grammar coaching and real work examples.</p>
        <button className="btn-primary" onClick={() => navigate('/english/practice')}>Open practice lab</button>
      </div>
      {englishItems.map(item => (
        <div key={item.title} className="glossary-card">
          <h3>{item.title}</h3>
          <p className="muted">{item.description}</p>
          <p>{item.content}</p>
        </div>
      ))}
    </section>
  )
}

function evaluateEnglishText(text) {
  const trimmed = text.trim()
  const issues = []
  let corrected = trimmed

  if (!trimmed) {
    return {issues, corrected: '', detail: 'Write a sentence in the box and click Check sentence to get feedback.'}
  }

  if (/^[a-z]/.test(trimmed)) {
    issues.push('Start with a capital letter at the beginning of the sentence.')
    corrected = corrected.replace(/^[a-z]/, char => char.toUpperCase())
  }

  if (!/[.?!]$/.test(trimmed)) {
    issues.push('End the sentence with a period, question mark, or appropriate punctuation.')
    corrected = corrected + '.'
  }

  if (/\bI think maybe\b/i.test(trimmed)) {
    issues.push('Avoid uncertain phrases like “I think maybe”. Use stronger alternatives such as “I suggest” or “My recommendation is”.')
    corrected = corrected.replace(/I think maybe/i, 'I suggest')
  }

  if (/\bcan you please\b/i.test(trimmed)) {
    issues.push('Use more formal request phrasing such as “Could you please” to sound professional.')
    corrected = corrected.replace(/can you please/i, 'Could you please')
  }

  if (/\b(?:send|review|check|confirm|provide|share)\b\s+(?:report|file|details|info|update)\b/i.test(trimmed) && !/\bthe\b/i.test(trimmed)) {
    issues.push('Add a definite article like “the” before common nouns such as report, file or details when you refer to specific items.')
    corrected = corrected.replace(/\b(report|file|details|info|update)\b/i, 'the $1')
  }

  if (/\bwas (sent|done|completed) by\b/i.test(trimmed)) {
    issues.push('Prefer active voice when possible. Use a clear subject and verb for stronger business writing.')
    corrected = corrected.replace(/\bwas sent by\b/i, 'sent')
  }

  if (issues.length === 0) {
    return {
      issues:['Your sentence is clear. For professional writing, keep your message direct, use active voice, and avoid filler words.'],
      corrected: trimmed,
      detail:'This sentence is already well written. Consider if you can make it even more concise or specific for business communication.'
    }
  }

  return {
    issues,
    corrected,
    detail:'Review the feedback above and compare it with the improved sentence. Use the same style for other business messages.'
  }
}

function EnglishPracticePage() {
  const [answers, setAnswers] = useState(() => englishPractice.map(() => ''))
  const [feedback, setFeedback] = useState(() => englishPractice.map(() => null))
  const [commonInput, setCommonInput] = useState('')
  const [commonFeedback, setCommonFeedback] = useState(null)

  const handleChange = (index, value) => {
    const next = [...answers]
    next[index] = value
    setAnswers(next)
  }

  const checkAnswer = index => {
    const correct = englishPractice[index].correct
    const isMatch = answers[index].trim().toLowerCase() === correct.trim().toLowerCase()
    const next = [...feedback]
    next[index] = isMatch ? 'correct' : 'incorrect'
    setFeedback(next)
  }

  const resetExercise = index => {
    const nextAnswers = [...answers]
    const nextFeedback = [...feedback]
    nextAnswers[index] = ''
    nextFeedback[index] = null
    setAnswers(nextAnswers)
    setFeedback(nextFeedback)
  }

  const checkCommonSentence = () => {
    const result = evaluateEnglishText(commonInput)
    setCommonFeedback(result)
  }

  const resetCommonSentence = () => {
    setCommonInput('')
    setCommonFeedback(null)
  }

  return (
    <section className="page-grid">
      <div className="wide-card">
        <h2>English Practice Lab</h2>
        <p>Grammar coaching and business writing correction exercises from beginner to business fluent. Try each sentence, check your answer, and read the clear explanation.</p>
      </div>
      <div className="course-card chat-card">
        <div className="module-top">
          <div>
            <h3>Common sentence feedback</h3>
            <p className="muted">Write any general sentence or short business message. The feedback will show what can be improved and how to reframe it better.</p>
          </div>
          <span className="badge small">General review</span>
        </div>
        <div className="course-detail-card">
          <h4>Try your own sentence</h4>
          <textarea
            className="notes-textarea"
            value={commonInput}
            onChange={e => setCommonInput(e.target.value)}
            rows={5}
            placeholder="Type a sentence, email line, meeting note, or request here..."
          />
          <div className="exercise-actions">
            <button className="btn-primary" onClick={checkCommonSentence}>Check sentence</button>
            <button className="btn-outline" onClick={resetCommonSentence}>Reset</button>
          </div>
          {commonFeedback && (
            <div className="feedback chat-feedback correct">
              <h4>Feedback</h4>
              <ul>
                {commonFeedback.issues.map((issue, idx) => <li key={idx}>{issue}</li>)}
              </ul>
              <p><strong>How it could be framed better:</strong></p>
              <p>{commonFeedback.corrected}</p>
              <p className="muted">{commonFeedback.detail}</p>
            </div>
          )}
        </div>
      </div>
      {englishPractice.map((section, index) => (
        <div key={section.title} className="course-card">
          <div className="module-top">
            <div>
              <h3>{section.title}</h3>
              <p className="muted">{section.level}</p>
            </div>
            <span className="badge small">{section.focus}</span>
          </div>
          <p>{section.explanation}</p>
          <div className="course-detail-card">
            <h4>Example</h4>
            <p>{section.example}</p>
          </div>
          <div className="course-detail-card">
            <h4>Your correction</h4>
            <textarea
              className="notes-textarea"
              placeholder={section.prompt}
              value={answers[index]}
              onChange={e => handleChange(index, e.target.value)}
              rows={4}
            />
            <div className="exercise-actions">
              <button className="btn-secondary" onClick={() => checkAnswer(index)}>Check answer</button>
              <button className="btn-outline" onClick={() => resetExercise(index)}>Reset</button>
            </div>
            {feedback[index] === 'correct' && <p className="feedback correct">Great! Your correction matches the model answer.</p>}
            {feedback[index] === 'incorrect' && (
              <div className="feedback incorrect">
                <p>Try again or compare with the example below.</p>
                <p><strong>Model answer:</strong> {section.correct}</p>
              </div>
            )}
          </div>
          <div className="course-detail-card">
            <h4>Practice tip</h4>
            <p>{section.tip}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

function KnowledgePage() {
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => {
    return knowledgeItems.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.content.toLowerCase().includes(query.toLowerCase())
    )
  }, [query])

  return (
    <section className="page-grid">
      <div className="wide-card">
        <h2>Knowledge Hub</h2>
        <p>Search concepts, terminology, HR frameworks and detailed definitions without leaving the app.</p>
        <input className="search-bar" placeholder="Search HR terms, tools, onboarding…" value={query} onChange={e => setQuery(e.target.value)} />
      </div>
      {filtered.length ? filtered.map(item => (
        <div key={item.title} className="glossary-card">
          <h3>{item.title}</h3>
          <p className="muted">{item.description}</p>
          <p>{item.content}</p>
        </div>
      )) : (
        <div className="wide-card"><p className="muted">No results found. Try search terms like ATS, onboarding, HRIS, analytics or DE&I.</p></div>
      )}
    </section>
  )
}

function ToolsPage() {
  return (
    <section className="page-grid">
      <div className="wide-card">
        <h2>Tools Lab</h2>
        <p>Use these tool-focused learning cards to follow step-by-step practice in ATS, HRIS and analytics tools.</p>
      </div>
      {tools.map(tool => (
        <div key={tool.title} className="tool-card">
          <div className="module-top">
            <h3>{tool.title}</h3>
            <span className="badge small">Lab Work</span>
          </div>
          <p className="muted">{tool.description}</p>
          <p>{tool.details}</p>
          <h4>Hands-on steps</h4>
          <ol>
            {tool.steps.map(step => <li key={step}>{step}</li>)}
          </ol>
          <p className="muted">Resources</p>
          <ul>
            {tool.resources.map(url => <li key={url}><a href={url} target="_blank" rel="noreferrer">{url}</a></li>)}
          </ul>
        </div>
      ))}
    </section>
  )
}

function ProjectsPage() {
  return (
    <section className="page-grid">
      <div className="wide-card">
        <h2>Project Lab</h2>
        <p>Build portfolio-ready HR projects that demonstrate process, tools, and analytics mastery.</p>
      </div>
      {projects.map(project => (
        <div key={project.title} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <div className="project-footer"><span>Outcome</span><strong>{project.outcome}</strong></div>
        </div>
      ))}
    </section>
  )
}

function ResumeLabPage({ resumeText, setResumeText, starStories, setStarStories }) {
  const [draft, setDraft] = useState('')
  const addStar = () => {
    if (!draft.trim()) return
    setStarStories([draft.trim(), ...starStories])
    setDraft('')
  }

  const copyTemplate = text => {
    setResumeText(text)
  }

  return (
    <section className="page-grid">
      <div className="wide-card">
        <h2>Resume Lab</h2>
        <p>This lab is designed to turn your experience into measurable, HR-focused achievements and strong career branding.</p>
      </div>
      <div className="resume-card">
        <h3>Resume rewrite guide</h3>
        <ul>
          <li>Use action verbs and results.</li>
          <li>Include HR tools, systems and processes you drove.</li>
          <li>Position the gap as a time for learning, growth and readiness.</li>
        </ul>
      </div>
      <textarea value={resumeText} onChange={e => setResumeText(e.target.value)} rows={12} className="resume-textarea" />
      <div className="resume-actions">
        <div className="resume-form">
          <input value={draft} onChange={e => setDraft(e.target.value)} placeholder="Add a STAR story" />
          <button className="btn-primary" onClick={addStar}>Add STAR story</button>
        </div>
        <div>
          <h4>Templates</h4>
          <div className="template-grid">
            {templates.map(template => (
              <button key={template.label} className="btn-outline small" onClick={() => copyTemplate(template.text)}>{template.label}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="wide-card">
        <h3>Saved STAR stories</h3>
        <ol className="star-list">
          {starStories.map((story, index) => <li key={`${story}-${index}`}>{story}</li>)}
        </ol>
      </div>
    </section>
  )
}

function InterviewLabPage() {
  return (
    <section className="page-grid">
      <div className="wide-card">
        <h2>Interview Lab</h2>
        <p>Practice answers with structure, context, and HR-specific examples. This page is built for mastery, not a quick checklist.</p>
      </div>
      <div className="interview-card">
        <h3>Question guide</h3>
        <ol>
          {interviewKit.questions.map(item => (
            <li key={item.question}>
              <strong>{item.question}</strong>
              <p className="muted">Tip: {item.tip}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="interview-card">
        <h3>Case challenge practice</h3>
        <ol>
          {interviewKit.cases.map(item => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <p className="muted">Approach: {item.approach}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="wide-card">
        <h3>How to practice</h3>
        <ul>
          <li>Answer questions out loud and record your timing.</li>
          <li>Use STAR structure for all behavioral responses.</li>
          <li>Refine your gap story to show readiness and resilience.</li>
        </ul>
      </div>
    </section>
  )
}

function App() {
  const [todayTasks, setTodayTasks] = useLocalStorage('hrcom.today', defaultTodayTasks)
  const [resumeText, setResumeText] = useLocalStorage('hrcom.resume', 'Suprabha K N\nSenior Process Executive - Talent Acquisition (HR Operations)\nInfosys BPM Limited, Bengaluru - Apr 2021 - Nov 2021\n- Managed end-to-end non-IT recruitment, onboarding, and joining formalities.\n- Maintained trackers, prepared stakeholder reports, and reduced joiner delays.\n\nEarlier: Process Executive (Talent Acquisition) - Nov 2019 - Apr 2021\nEducation: BBA\nSkills: Recruitment, Onboarding, Reporting, HR Operations, Excel, Communication')
  const [starStories, setStarStories] = useLocalStorage('hrcom.stars', [
    'Handled high-volume campus hiring with a faster turnaround.',
    'Introduced candidate tracking that reduced joining delays by 15%.',
    'Coordinated onboarding tasks and improved joiner experience.'
  ])
  const [moduleProgress, setModuleProgress] = useLocalStorage('hrcom.modules', modules.map(module => module.steps.map(() => false)))
  const [courseProgress, setCourseProgress] = useLocalStorage('hrcom.courseProgress', coursePrograms.map(course => course.lessons.map(() => false)))
  const [courseNotes, setCourseNotes] = useLocalStorage('hrcom.courseNotes', {})

  useEffect(() => {
    document.title = pageTitle('HR Career Growth Platform')
  }, [])

  return (
    <Router>
      <div className="app-shell">
        <Sidebar />
        <main className="app-main">
          <Header />
          <Routes>
            <Route path="/" element={<DashboardPage todayTasks={todayTasks} setTodayTasks={setTodayTasks} moduleProgress={moduleProgress} />} />
            <Route path="/courses" element={<CoursePlayerPage courseProgress={courseProgress} />} />
            <Route path="/courses/:courseId" element={<CourseDetailPage courseProgress={courseProgress} setCourseProgress={setCourseProgress} courseNotes={courseNotes} setCourseNotes={setCourseNotes} />} />
            <Route path="/modules" element={<ModulesPage moduleProgress={moduleProgress} setModuleProgress={setModuleProgress} />} />
            <Route path="/modules/:moduleId" element={<ModuleDetailPage moduleProgress={moduleProgress} setModuleProgress={setModuleProgress} />} />
            <Route path="/knowledge" element={<KnowledgePage />} />
            <Route path="/english" element={<EnglishTrainingPage />} />
            <Route path="/english/practice" element={<EnglishPracticePage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/resume" element={<ResumeLabPage resumeText={resumeText} setResumeText={setResumeText} starStories={starStories} setStarStories={setStarStories} />} />
            <Route path="/interview" element={<InterviewLabPage />} />
            <Route path="*" element={<div className="page-grid"><div className="wide-card"><h2>Page not found</h2><p>Use the sidebar to navigate to the training content.</p></div></div>} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
