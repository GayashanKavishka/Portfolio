import React, { useState, useEffect, useRef } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const NAV_LINKS = [
  { label: 'Home',      href: '#home',     offset: 0 },
  { label: 'About',     href: '#about',    offset: 50 },
  { label: 'Journey',   href: '#journey',  offset: 50 },
  { label: 'Portfolio', href: '#work',     offset: 50 },
  { label: 'Contact',   href: '#contact',  offset: 50 },
]

const NavBar = () => {
  const [active, setActive]   = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#home" className="navbar__logo" aria-label="Home">
          <img src={logo} alt="GK Logo" width={48} height={48} />
          <span className="navbar__logo-text">Gayashan<span>.</span></span>
        </a>

        {/* Desktop nav links */}
        <nav className="navbar__links" role="navigation" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <AnchorLink
              key={link.href}
              href={link.href}
              offset={link.offset}
              className={`navbar__link ${active === link.href.slice(1) ? 'navbar__link--active' : ''}`}
              onClick={() => setActive(link.href.slice(1))}
            >
              {link.label}
            </AnchorLink>
          ))}
        </nav>

        {/* CTA */}
        <AnchorLink href="#contact" offset={50} className="btn-primary navbar__cta" aria-label="Connect with me">
          Connect with me
        </AnchorLink>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="navbar__mobile" role="navigation" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <AnchorLink
              key={link.href}
              href={link.href}
              offset={link.offset}
              className="navbar__mobile-link"
              onClick={() => { setActive(link.href.slice(1)); setMenuOpen(false) }}
            >
              {link.label}
            </AnchorLink>
          ))}
          <AnchorLink href="#contact" offset={50} className="btn-primary navbar__mobile-cta" onClick={() => setMenuOpen(false)}>
            Connect with me
          </AnchorLink>
        </nav>
      )}
    </header>
  )
}

export default NavBar
