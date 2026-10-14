import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const NAV_LINKS = [
  { label: 'Home',      href: '#home' },
  { label: 'About',     href: '#about' },
  { label: 'Journey',   href: '#journey' },
  { label: 'Portfolio', href: '#work' },
  { label: 'Contact',   href: '#contact' },
]

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top gradient divider */}
      <div className="footer__divider" aria-hidden="true" />

      <div className="footer__inner">
        {/* Brand column */}
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={logo} alt="GK Logo" width={40} height={40} />
            <span className="footer__logo-text">Gayashan<span>.</span></span>
          </div>
          <p className="footer__bio">
            Fullstack Developer from Sri Lanka, building scalable web applications and elegant user experiences.
          </p>
          {/* Social icons */}
          <div className="footer__socials">
            <a href="https://github.com/GayashanKavishka" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/gayashan-de-silva/" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:gayashankavishka2@gmail.com" className="footer__social" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick nav */}
        <div className="footer__nav-col">
          <h4 className="footer__col-title">Quick Links</h4>
          <nav className="footer__nav">
            {NAV_LINKS.map((link) => (
              <AnchorLink key={link.href} href={link.href} offset={50} className="footer__nav-link">
                {link.label}
              </AnchorLink>
            ))}
          </nav>
        </div>

        {/* Newsletter */}
        <div className="footer__subscribe-col">
          <h4 className="footer__col-title">Stay updated</h4>
          <p className="footer__sub-desc">Subscribe to get notified about new projects and updates.</p>
          <div className="footer__subscribe">
            <input type="email" placeholder="Enter your email" className="footer__email-input" aria-label="Email for newsletter" />
            <button className="btn-primary footer__sub-btn">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p className="footer__copy">© 2024 Gayashan De Silva. All rights reserved.</p>
        <div className="footer__legal">
          <a href="#" className="footer__legal-link">Privacy Policy</a>
          <a href="#" className="footer__legal-link">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
