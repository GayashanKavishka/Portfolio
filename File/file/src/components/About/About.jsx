import React, { useEffect, useRef, useState } from 'react'
import './About.css'
import Profile from '../../assets/Profile.svg'

const SKILLS = [
  { name: 'Java',         pct: 72 },
  { name: 'Spring Boot',  pct: 70 },
  { name: 'React JS',     pct: 78 },
  { name: 'JavaScript',   pct: 75 },
  { name: 'Node JS',      pct: 70 },
  { name: 'Python',       pct: 65 },
  { name: 'HTML & CSS',   pct: 85 },
]



const STATS = [
  { value: 10, suffix: '+', label: 'Projects Completed' },
  { value: 2,  suffix: '+', label: 'Years of Learning' },
  { value: 5,  suffix: '+', label: 'Tech Stacks' },
]

const useCountUp = (target, duration = 1500, trigger) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [trigger, target, duration])
  return count
}

const StatCard = ({ value, suffix, label, trigger }) => {
  const count = useCountUp(value, 1200, trigger)
  return (
    <div className="about__stat">
      <span className="about__stat-num gradient-text">{count}{suffix}</span>
      <span className="about__stat-label">{label}</span>
    </div>
  )
}

const About = () => {
  const statsRef = useRef(null)
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
      { threshold: 0.4 }
    )
    if (statsRef.current) obs.observe(statsRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="about">
      <div className="about__inner">
        {/* Header */}
        <div className="about__header reveal">
          <div className="section-tag">🙋 About me</div>
          <h2 className="section-title">
            Turning ideas into<br />
            <span className="gradient-text">real-world products</span>
          </h2>
        </div>

        {/* Main content */}
        <div className="about__body">
          {/* Left: image */}
          <div className="about__img-wrap reveal reveal-delay-1">
            <img src={Profile} alt="Gayashan De Silva profile" className="about__img" />
            <div className="about__img-glow" aria-hidden="true" />
          </div>

          {/* Right: text + skills */}
          <div className="about__right">
            <div className="about__para reveal reveal-delay-2">
              <p>
                I'm a passionate <strong>Fullstack Developer</strong> from Sri Lanka, currently
                pursuing a Computer Science &amp; Engineering degree at the{' '}
                <strong>University of Moratuwa</strong>. I love building scalable, efficient web
                solutions and have a deep interest in backend architecture.
              </p>
              <p>
                My go-to stack includes <strong>React, Node.js</strong>, and{' '}
                <strong>Spring Boot</strong>. I'm always exploring new technologies and enjoy
                contributing to projects that make a real difference.
              </p>
            </div>

            {/* Skills */}
            <div className="about__skills reveal reveal-delay-3">
              <h3 className="about__skills-title">Technical Skills</h3>
              {SKILLS.map((skill) => (
                <div key={skill.name} className="about__skill">
                  <div className="about__skill-header">
                    <span className="about__skill-name">{skill.name}</span>
                    <span className="about__skill-pct">{skill.pct}%</span>
                  </div>
                  <div className="about__skill-track">
                    <div
                      className="about__skill-fill"
                      style={{ '--skill-pct': `${skill.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="about__stats reveal" ref={statsRef}>
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} trigger={statsVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}


export default About
