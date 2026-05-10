// Contact.jsx
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)

  const words = ["Let's build something amazing", "I'm ready to collaborate", "Your next ML project", "Innovation awaits"]
  const period = 2000

  useEffect(() => {
    let timer
    const currentWord = words[loopNum % words.length]
    if (isDeleting) {
      timer = setTimeout(() => setText(currentWord.substring(0, text.length - 1)), 80)
    } else {
      timer = setTimeout(() => setText(currentWord.substring(0, text.length + 1)), 100)
    }
    if (!isDeleting && text === currentWord) timer = setTimeout(() => setIsDeleting(true), period)
    else if (isDeleting && text === '') { setIsDeleting(false); setLoopNum(loopNum + 1) }
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum])

  // SVG Icons
  const GitHubIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="currentColor"/>
    </svg>
  )

  const LinkedInIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.203 0 22.225 0z" fill="currentColor"/>
    </svg>
  )

  return (
    <>
      <section id="contact" style={{
        padding: '7rem 0 5rem 0',
        background: '#0a0a14',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        {/* Orbs */}
        <div style={{
          position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
          width: '600px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(96,165,250,0.08) 0%, rgba(167,139,250,0.06) 40%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto', position: 'relative' }}
          >
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px', color: '#60a5fa',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              fontWeight: 500, display: 'block', marginBottom: '1rem',
            }}>
              // Get In Touch
            </span>

            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              fontWeight: 800, letterSpacing: '-0.02em',
              lineHeight: 1.15, marginBottom: '1rem', color: '#f1f5f9',
            }}>
              Let's build something{' '}
              <span style={{
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                real.
              </span>
            </h2>

            {/* Typing */}
            <div style={{
              fontSize: '1rem', color: '#64748b',
              marginBottom: '2rem', minHeight: '2rem',
              fontFamily: "'JetBrains Mono', monospace",
            }}>
              <span style={{
                color: '#a78bfa',
                borderRight: '2px solid #a78bfa',
                paddingRight: '0.3rem',
              }}>
                {text}
                <span style={{ animation: 'blink 1s infinite', opacity: 0.5 }}>|</span>
              </span>
            </div>

            <p style={{
              color: '#64748b', lineHeight: 1.8,
              marginBottom: '2.5rem', fontSize: '0.95rem',
            }}>
              Open to full-time ML roles, freelance projects, and meaningful collaborations.
              If you're building something that matters — my inbox is always open.
            </p>

            {/* Email */}
            <motion.a
              href="mailto:nitinnggupta04@gmail.com"
              whileHover={{ scale: 1.03 }}
              style={{
                display: 'inline-block',
                fontSize: '1.15rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textDecoration: 'none',
                marginBottom: '0.75rem',
                letterSpacing: '-0.01em',
              }}
            >
              nitinnggupta04@gmail.com
            </motion.a>

            <p style={{
              color: '#475569', fontSize: '0.875rem',
              marginBottom: '1.5rem',
              fontFamily: "'JetBrains Mono', monospace",
            }}>
              +91 7317809357
            </p>

            {/* Resume download line */}
            <div style={{ marginBottom: '2.5rem' }}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '0.6rem 1.6rem',
                  borderRadius: '50px',
                  border: '1px solid rgba(167,139,250,0.3)',
                  background: 'rgba(167,139,250,0.06)',
                  color: '#a78bfa',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontFamily: "'JetBrains Mono', monospace",
                  transition: 'all 0.25s',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#a78bfa'
                  e.currentTarget.style.background = 'rgba(167,139,250,0.12)'
                  e.currentTarget.style.boxShadow = '0 0 16px rgba(167,139,250,0.2)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(167,139,250,0.3)'
                  e.currentTarget.style.background = 'rgba(167,139,250,0.06)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Or download my resume directly
              </a>
            </div>

            {/* Social buttons with icons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              {[
                { label: 'GitHub', href: 'https://github.com/Neettin', accent: '#60a5fa', icon: GitHubIcon },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nitin-gupta-0522b43a3/', accent: '#a78bfa', icon: LinkedInIcon },
              ].map(({ label, href, accent, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: '10px 28px',
                    borderRadius: '50px',
                    background: 'rgba(255,255,255,0.04)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#94a3b8',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.25s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = `${accent}18`
                    e.currentTarget.style.borderColor = `${accent}40`
                    e.currentTarget.style.color = accent
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.color = '#94a3b8'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <Icon />
                  {label} ↗
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Improved Footer */}
      <footer style={{
        background: '#07070f',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '3rem 0 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Footer glow */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.3), rgba(167,139,250,0.3), rgba(244,114,182,0.3), transparent)',
        }} />

        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '2rem',
          }}>
            {/* Logo / Name */}
            <div>
              <h3 style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '1rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
              }}>
                NITIN GUPTA
              </h3>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '9px',
                color: '#334155',
                marginTop: '0.25rem',
              }}>
                Machine Learning Engineer
              </p>
            </div>

            {/* Quick links */}
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '10px',
                    color: '#475569',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    letterSpacing: '0.05em',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#60a5fa'}
                  onMouseLeave={e => e.currentTarget.style.color = '#475569'}
                >
                  {link.toUpperCase()}
                </a>
              ))}
            </div>

            {/* Social mini icons */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href="https://github.com/Neettin"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#475569',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#60a5fa'}
                onMouseLeave={e => e.currentTarget.style.color = '#475569'}
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/nitin-gupta-0522b43a3/"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#475569',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
                onMouseLeave={e => e.currentTarget.style.color = '#475569'}
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
            margin: '1rem 0 1.5rem',
          }} />

          {/* Copyright */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '9px',
              color: '#2a2a3a',
              letterSpacing: '0.1em',
            }}>
              © 2026 NITIN GUPTA — ALL RIGHTS RESERVED
            </p>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '8px',
              color: '#2a2a3a',
              letterSpacing: '0.05em',
            }}>
              BUILT WITH PRECISION • ML OPS READY
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </>
  )
}