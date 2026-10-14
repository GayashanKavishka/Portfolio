import React, { useState, useEffect } from 'react'
import './Journey.css'
import Mepa1 from '../../assets/Mepa1.jpeg'
import Mepa2 from '../../assets/Mepa2.jpeg'
import Mepa3 from '../../assets/Mepa3.jpeg'
import Mepa4 from '../../assets/Mepa4.jpeg'
import Sliot1 from '../../assets/sliot1.jpeg'
import Sliot2 from '../../assets/sliot2.jpeg'
import Robogames1 from '../../assets/robogames1.jpeg'

/* ─── DATA ─────────────────────────────────────────────── */
const EXPERIENCE = [
  {
    role: 'Intern Software Engineer',
    company: 'ISA — Information Services Group',
    period: '2024 — 2025',
    url: 'https://www.isa.ae/',
    type: 'Internship',
    color: '#7C3AED',
    logo: '✈️',
    desc: [
      'Contributed to the <strong>AeroLine</strong> product — a cutting-edge aviation software solution used across the aviation industry.',
      'Worked with a cross-functional engineering team at one of the leading software companies providing digital solutions for the aviation sector.',
      'Gained hands-on experience building and maintaining enterprise-grade features in a production environment.',
    ],
    tags: ['Aviation Software', 'Enterprise', 'AeroLine'],
  },
]

const EDUCATION = [
  {
    degree: 'BSc (Hons) Computer Science & Engineering',
    institution: 'University of Moratuwa',
    period: '2022 — Present (Final Year)',
    type: 'Undergraduate',
    color: '#06B6D4',
    logo: '🎓',
    desc: [
      'Faculty of Engineering, Department of Computer Science and Engineering.',
      'Final year student specialising in software engineering, algorithms, and distributed systems.',
    ],
    tags: ['Computer Science', 'Engineering', 'Final Year'],
  },
  {
    degree: 'Advanced Level — Physical Science Stream',
    institution: 'Rahula College, Matara',
    period: '2019 — 2021',
    type: 'Secondary',
    color: '#F59E0B',
    logo: '🏫',
    desc: [
      'Completed A/L in the Physical Science stream with outstanding results.',
      'Achieved <strong>Island Rank 66</strong> in the 2021 A/L examination — a testament to academic excellence at national level.',
    ],
    tags: ['Physical Science', 'Island Rank 66', '2021'],
  },
]

const SKILL_GROUPS = [
  {
    label: 'Frontend',
    icon: '🖥️',
    color: '#06B6D4',
    skills: ['React JS', 'Angular JS', 'Node.js (SSR)', 'HTML5', 'CSS3'],
  },
  {
    label: 'Backend',
    icon: '⚙️',
    color: '#7C3AED',
    skills: ['Spring Boot', 'FastAPI', 'Express JS', 'Node.js', 'REST APIs'],
  },
  {
    label: 'Programming Languages',
    icon: '💻',
    color: '#10B981',
    skills: ['Java', 'Python', 'JavaScript', 'C', 'C++'],
  },
  {
    label: 'AI & ML',
    icon: '🤖',
    color: '#F59E0B',
    skills: ['LangChain', 'RAG', 'MCP', 'Fast-MCP', 'LLM Integration'],
  },
  {
    label: 'Version Control & DevOps',
    icon: '🔧',
    color: '#EC4899',
    skills: ['Git', 'GitHub', 'Bitbucket', 'Agile / Scrum'],
  },
  {
    label: 'Soft Skills',
    icon: '🤝',
    color: '#8B5CF6',
    skills: ['Team Collaboration', 'Time Management', 'Project Management', 'Problem Solving', 'Communication'],
  },
]

const VOLUNTEERING = [
  {
    id: 'mepa',
    org: 'MEPA',
    title: 'Matara Engineering Professionals Association',
    role: 'Speaker — Seminar Series for A/L Students',
    desc: 'Delivered speeches and guidance sessions for Advanced Level students, bridging the gap between academia and engineering careers.',
    images: [Mepa1, Mepa2, Mepa3, Mepa4],
    icon: '🎤',
    color: '#7c3aed',
  },
  {
    id: 'sliot',
    org: 'SLIOT',
    title: 'SLIOT Challenge 2025',
    role: 'Program Committee Member',
    desc: 'Dept. of Computer Science and Engineering. Served as a program committee member for SLIOT Challenge 2025.',
    images: [Sliot1, Sliot2],
    icon: '💡',
    color: '#0ea5e9',
  },
  {
    id: 'robogames',
    org: 'IESL',
    title: 'IESL Robo Games 2024',
    role: 'Program Committee Member',
    desc: 'IESL, Dept. of Computer Science and Engineering. Contributed as a program committee member for IESL Robo Games 2025.',
    images: [Robogames1],
    icon: '🤖',
    color: '#10b981',
  },
]

/* ─── SUB-COMPONENTS ────────────────────────────────────── */

// Note: uses journey__animate (CSS keyframe) instead of reveal (observer-based)
// because these elements are conditionally rendered inside tabs

const TimelineCard = ({ item, index, isEdu = false }) => (
  <div
    className="journey__timeline-item journey__animate"
    style={{ animationDelay: `${index * 0.12}s` }}
  >
    {/* Timeline spine */}
    <div className="journey__spine">
      <div
        className="journey__spine-dot"
        style={{ background: item.color, boxShadow: `0 0 16px ${item.color}66` }}
      >
        <span>{item.logo}</span>
      </div>
      {index < (isEdu ? EDUCATION.length - 1 : EXPERIENCE.length - 1) && (
        <div className="journey__spine-line" />
      )}
    </div>

    {/* Card */}
    <div className="journey__card glass-card">
      <div className="journey__card-header">
        <div>
          <span
            className="journey__type-badge"
            style={{
              color: item.color,
              background: `${item.color}18`,
              border: `1px solid ${item.color}33`,
            }}
          >
            {item.type}
          </span>
          <h3 className="journey__card-title">{isEdu ? item.degree : item.role}</h3>
          <div className="journey__card-meta">
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="journey__company-link"
              >
                {isEdu ? item.institution : item.company}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            ) : (
              <span className="journey__company">{isEdu ? item.institution : item.company}</span>
            )}
            <span className="journey__period">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {item.period}
            </span>
          </div>
        </div>
      </div>

      <ul className="journey__desc-list">
        {item.desc.map((d, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: d }} />
        ))}
      </ul>

      <div className="journey__tags">
        {item.tags.map((t) => (
          <span
            key={t}
            className="journey__tag"
            style={{
              color: item.color,
              background: `${item.color}12`,
              border: `1px solid ${item.color}28`,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
)

const SkillGroup = ({ group, index }) => (
  <div
    className="journey__skill-group glass-card journey__animate"
    style={{ animationDelay: `${index * 0.08}s` }}
  >
    <div className="journey__skill-group-header">
      <span className="journey__skill-icon">{group.icon}</span>
      <h4 className="journey__skill-label" style={{ color: group.color }}>
        {group.label}
      </h4>
    </div>
    <div className="journey__skill-badges">
      {group.skills.map((s) => (
        <span
          key={s}
          className="journey__skill-badge"
          style={{
            color: group.color,
            background: `${group.color}12`,
            border: `1px solid ${group.color}28`,
          }}
        >
          {s}
        </span>
      ))}
    </div>
  </div>
)

const VolSlideshow = ({ images, title, color }) => {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = images.length

  // Auto-advance every 3s unless paused
  useEffect(() => {
    if (total <= 1 || paused) return
    const t = setInterval(() => setIdx((i) => (i + 1) % total), 3000)
    return () => clearInterval(t)
  }, [total, paused])

  const prev = () => setIdx((i) => (i - 1 + total) % total)
  const next = () => setIdx((i) => (i + 1) % total)

  return (
    <div
      className="vol-slide"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ '--slide-color': color }}
    >
      {/* Image track */}
      <div className="vol-slide__track" style={{ transform: `translateX(-${idx * 100}%)` }}>
        {images.map((img, i) => (
          <img key={i} src={img} alt={`${title} photo ${i + 1}`} className="vol-slide__img" />
        ))}
      </div>

      {/* Counter badge */}
      <span className="vol-slide__counter">{idx + 1} / {total}</span>

      {/* Arrows */}
      {total > 1 && (
        <>
          <button className="vol-slide__arrow vol-slide__arrow--prev" onClick={prev} aria-label="Previous photo">
            &#8249;
          </button>
          <button className="vol-slide__arrow vol-slide__arrow--next" onClick={next} aria-label="Next photo">
            &#8250;
          </button>
        </>
      )}

      {/* Dots */}
      {total > 1 && (
        <div className="vol-slide__dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`vol-slide__dot${i === idx ? ' active' : ''}`}
              onClick={() => setIdx(i)}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

/* ─── MAIN COMPONENT ────────────────────────────────────── */
const Journey = () => {
  const [activeTab, setActiveTab] = useState('experience')

  const tabs = [
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'education',  label: 'Education',  icon: '🎓' },
    { id: 'skills',     label: 'Skills',     icon: '⚡' },
  ]

  return (
    <>
    <section id="journey" className="journey">
      <div className="journey__inner">

        {/* ── Section header (uses reveal — always rendered) ── */}
        <div className="journey__header reveal">
          <div className="section-tag">📌 My Journey</div>
          <h2 className="section-title">
            Experience, Education<br />
            <span className="gradient-text">&amp; Skills</span>
          </h2>
          <p className="section-subtitle">
            A snapshot of my professional journey, academic background, and the technologies I work with daily.
          </p>
        </div>

        {/* ── Tab bar (always rendered, uses reveal) ── */}
        <div className="journey__tabs reveal">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`journey__tab ${activeTab === tab.id ? 'journey__tab--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              id={`journey-tab-${tab.id}`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Tab content (uses journey__animate, NOT reveal) ── */}
        <div className="journey__content">

          {/* EXPERIENCE */}
          {activeTab === 'experience' && (
            <div className="journey__tab-panel journey__animate">
              <div className="journey__panel-intro">
                <h3 className="journey__panel-title">Professional Journey &amp; Growth</h3>
                <p className="journey__panel-desc">
                  Real-world engineering experience working on production-grade software for the global aviation industry.
                </p>
              </div>
              <div className="journey__timeline">
                {EXPERIENCE.map((item, i) => (
                  <TimelineCard key={i} item={item} index={i} />
                ))}
              </div>
            </div>
          )}

          {/* EDUCATION */}
          {activeTab === 'education' && (
            <div className="journey__tab-panel journey__animate">
              <div className="journey__panel-intro">
                <h3 className="journey__panel-title">Academic Journey &amp; Qualifications</h3>
                <p className="journey__panel-desc">
                  My educational path — from a top-ranked A/L performance to a Computer Science degree at one of Sri Lanka's finest universities.
                </p>
              </div>
              <div className="journey__timeline">
                {EDUCATION.map((item, i) => (
                  <TimelineCard key={i} item={item} index={i} isEdu />
                ))}
              </div>
            </div>
          )}

          {/* SKILLS */}
          {activeTab === 'skills' && (
            <div className="journey__tab-panel journey__animate">
              <div className="journey__panel-intro">
                <h3 className="journey__panel-title">Technologies I Work With</h3>
                <p className="journey__panel-desc">
                  A broad and deep skill set spanning frontend, backend, AI/ML, and beyond — with Agile methodology at the heart of how I work.
                </p>
              </div>
              <div className="journey__skills-grid">
                {SKILL_GROUPS.map((group, i) => (
                  <SkillGroup key={group.label} group={group} index={i} />
                ))}
              </div>

              {/* Volunteering */}
              <div className="journey__vol-section journey__animate" style={{ animationDelay: '0.5s' }}>
                <h4 className="journey__vol-heading">🤝 Volunteering</h4>
                <div className="journey__vol-list">
                  {VOLUNTEERING.map((v) => (
                    <div key={v.id} className="journey__vol-card" style={{ '--vol-color': v.color }}>
                      {/* Slideshow */}
                      <VolSlideshow images={v.images} title={v.title} color={v.color} />
                      {/* Info */}
                      <div className="journey__vol-info">
                        <div className="journey__vol-card-header">
                          <span className="journey__vol-icon">{v.icon}</span>
                          <div className="journey__vol-meta">
                            <span className="journey__vol-org">{v.org}</span>
                            <h5 className="journey__vol-title">{v.title}</h5>
                            <span className="journey__vol-role">{v.role}</span>
                          </div>
                        </div>
                        <p className="journey__vol-desc">{v.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  </>
  )
}

export default Journey
