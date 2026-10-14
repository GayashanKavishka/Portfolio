import React, { useState } from 'react'
import './Contact.css'
import gmail from '../../assets/mail_icon.svg'
import telephone from '../../assets/call_icon.svg'
import location from '../../assets/location_icon.svg'

const CONTACT_INFO = [
  { icon: gmail,      label: 'Email',    value: 'gayashankavishka2@gmail.com', href: 'mailto:gayashankavishka2@gmail.com' },
  { icon: telephone,  label: 'Phone',    value: '+94 71 355 3579',             href: 'tel:+94713553579' },
  { icon: location,   label: 'Location', value: 'Matara, Sri Lanka',           href: null },
]

const Contact = () => {
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const onSubmit = async (event) => {
    event.preventDefault()
    setStatus('loading')
    const formData = new FormData(event.target)
    formData.append('access_key', '61101b9f-b0ed-46ad-8f9f-b89dff670c97')
    const json = JSON.stringify(Object.fromEntries(formData))

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: json,
      }).then((r) => r.json())

      if (res.success) {
        setStatus('success')
        event.target.reset()
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        {/* Header */}
        <div className="contact__header reveal">
          <div className="section-tag">📬 Get in touch</div>
          <h2 className="section-title">
            Let's <span className="gradient-text">work together</span>
          </h2>
          <p className="section-subtitle">
            I'm currently available for new projects. Send me a message and let's talk!
          </p>
        </div>

        {/* Body */}
        <div className="contact__body">
          {/* Left info */}
          <div className="contact__left reveal reveal-delay-1">
            <h3 className="contact__left-title">Contact Information</h3>
            <p className="contact__left-desc">
              Feel free to reach out via any of the channels below. I typically respond within 24 hours.
            </p>

            <div className="contact__info-list">
              {CONTACT_INFO.map((item) => (
                <div key={item.label} className="contact__info-item">
                  <div className="contact__info-icon">
                    <img src={item.icon} alt={item.label} width={20} height={20} />
                  </div>
                  <div className="contact__info-text">
                    <span className="contact__info-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="contact__info-value">{item.value}</a>
                    ) : (
                      <span className="contact__info-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="contact__socials">
              <a href="https://github.com/GayashanKavishka" target="_blank" rel="noopener noreferrer" className="contact__social" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/gayashan-de-silva/" target="_blank" rel="noopener noreferrer" className="contact__social" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: form */}
          <form className="contact__form glass-card reveal reveal-delay-2" onSubmit={onSubmit} noValidate>
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div className="contact__field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              type="submit"
              className={`btn-primary contact__submit ${status === 'loading' ? 'loading' : ''}`}
              disabled={status === 'loading'}
              id="contact-submit-btn"
            >
              {status === 'loading' ? (
                <>
                  <span className="contact__spinner" aria-hidden="true" />
                  Sending…
                </>
              ) : (
                <>
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </>
              )}
            </button>

            {/* Toast */}
            {status === 'success' && (
              <div className="contact__toast contact__toast--success" role="alert">
                ✅ Message sent! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="contact__toast contact__toast--error" role="alert">
                ❌ Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
