import React, { useState, useEffect } from 'react'
import './Hero.css'
import Profile from '../../assets/Profile-img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const ROLES = [
  'Fullstack Developer',
  'Backend Engineer',
  'UI Enthusiast',
  'Open-Source Contributor',
]

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  // Typing animation
  useEffect(() => {
    const target = ROLES[roleIdx]
    let timeout

    if (typing) {
      if (displayed.length < target.length) {
        timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setRoleIdx((i) => (i + 1) % ROLES.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIdx])

  return (
    <section id="home" className="hero">
      {/* Profile image with rotating ring */}
      <div className="hero__img-wrap reveal">
        <div className="hero__img-ring" aria-hidden="true" />
        <div className="hero__img-ring hero__img-ring--2" aria-hidden="true" />
        <img
          className="hero__img"
          src={Profile}
          alt="Gayashan De Silva"
          width={300}
          height={300}
        />
        {/* Availability badge */}
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Available for work
        </div>
      </div>

      {/* Text content */}
      <div className="hero__content">
        <div className="section-tag reveal reveal-delay-1">👋 Hello, I'm</div>

        <h1 className="hero__name reveal reveal-delay-2">
          Gayashan<br />
          <span className="gradient-text">De Silva</span>
        </h1>

        <div className="hero__role reveal reveal-delay-3">
          <span className="hero__role-prefix">I'm a </span>
          <span className="hero__role-typed">{displayed}<span className="hero__cursor">|</span></span>
        </div>

        <p className="hero__bio reveal reveal-delay-4">
          Computer Science &amp; Engineering student at <strong>University of Moratuwa</strong>,
          building scalable fullstack applications with modern technologies.
        </p>

        {/* CTAs */}
        <div className="hero__actions reveal reveal-delay-5">
          <AnchorLink href="#contact" offset={50} className="btn-primary" id="hero-connect-btn">
            Connect with me
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </AnchorLink>
          <a
            className="btn-outline"
            href="https://docs.google.com/document/d/1zRz0HEVddfIfx_dbTrHJVNFY5CiAn61eW7KHWkxYuhI/edit"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-resume-btn"
          >
            My Resume
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
          </a>
        </div>

        {/* Social links */}
        <div className="hero__socials reveal reveal-delay-5">
          <a href="https://github.com/GayashanKavishka" target="_blank" rel="noopener noreferrer" className="hero__social" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/gayashan-de-silva/" target="_blank" rel="noopener noreferrer" className="hero__social" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
