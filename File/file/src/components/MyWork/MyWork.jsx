import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data.js'

const TECH_TAGS = {
  '01': ['React', 'Node.js', 'MongoDB'],
  '02': ['Java', 'Spring Boot', 'MySQL'],
  '03': ['React', 'Node.js', 'MySQL'],
}

const MyWork = () => {
  return (
    <section id="work" className="mywork">
      <div className="mywork__inner">
        {/* Header */}
        <div className="mywork__header reveal">
          <div className="section-tag">💼 Portfolio</div>
          <h2 className="section-title">
            My recent <span className="gradient-text">work</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects I've built — ranging from full-stack web apps to system-level software.
          </p>
        </div>

        {/* Project grid */}
        <div className="mywork__grid">
          {mywork_data.map((work, index) => (
            <a
              key={index}
              href={work.w_link}
              target="_blank"
              rel="noopener noreferrer"
              className={`mywork-item reveal reveal-delay-${index + 1}`}
              aria-label={`View project: ${work.w_name}`}
            >
              <img src={work.w_img} alt={work.w_name} />
              <div className="mywork-desc">
                {/* Tech tags */}
                <div className="mywork__tags">
                  {(TECH_TAGS[work.w_no] || []).map((t) => (
                    <span key={t} className="mywork__tag">{t}</span>
                  ))}
                </div>
                <p className="mywork__name">{work.w_name}</p>
                <span className="mywork__view-btn">
                  View Project
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Show More */}
        <div className="mywork__footer reveal">
          <a
            href="https://github.com/GayashanKavishka"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline mywork__more-btn"
            id="mywork-github-btn"
          >
            View all on GitHub
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default MyWork
