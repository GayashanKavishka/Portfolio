import React from 'react'
import './Services.css'

const SERVICES = [
  {
    id: '01',
    icon: '🌐',
    name: 'Web Development',
    desc: 'Building responsive, performant web applications using React, Node.js, and modern web technologies. From landing pages to complex SPAs.',
    tags: ['React', 'Node.js', 'REST APIs'],
  },
  {
    id: '02',
    icon: '📱',
    name: 'App Development',
    desc: 'Creating cross-platform mobile experiences with React Native and Flutter. Clean UIs with smooth, native-feel interactions.',
    tags: ['React Native', 'Flutter', 'Firebase'],
  },
  {
    id: '03',
    icon: '⚙️',
    name: 'Backend Engineering',
    desc: 'Designing scalable server-side architecture using Spring Boot and Express. Database design, REST/GraphQL APIs, and microservices.',
    tags: ['Spring Boot', 'Express', 'PostgreSQL'],
  },
]

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services__inner">
        {/* Header */}
        <div className="services__header reveal">
          <div className="section-tag">🚀 What I do</div>
          <h2 className="section-title">
            Services I <span className="gradient-text">offer</span>
          </h2>
          <p className="section-subtitle">
            I help businesses and individuals bring their ideas to life through modern, scalable software solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="services__grid">
          {SERVICES.map((svc, i) => (
            <div key={svc.id} className={`services__card glass-card reveal reveal-delay-${i + 1}`}>
              <div className="services__card-top">
                <span className="services__icon">{svc.icon}</span>
                <span className="services__num gradient-text">/{svc.id}</span>
              </div>
              <h3 className="services__name">{svc.name}</h3>
              <p className="services__desc">{svc.desc}</p>
              <div className="services__tags">
                {svc.tags.map((t) => (
                  <span key={t} className="services__tag">{t}</span>
                ))}
              </div>
              <div className="services__arrow" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
