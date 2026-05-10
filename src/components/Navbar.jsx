// Navbar.jsx
import { useEffect, useState } from 'react'

const links = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: scrolled ? '0.8rem 2rem' : '1.2rem 2rem',
        background: scrolled ? 'rgba(10, 10, 20, 0.95)' : 'rgba(10, 10, 20, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.05)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        {/* Left Logo */}
        <span
          onClick={() => scrollTo('hero')}
          style={{
            fontSize: '1.2rem',
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: "'JetBrains Mono', monospace",
            color: '#60a5fa',
            letterSpacing: '-0.02em',
            userSelect: 'none',
            display: 'inline-block',
            lineHeight: 1,
          }}
        >
          NITIN.py
        </span>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: '#e2e8f0',
                cursor: 'pointer',
                transition: 'color 0.2s',
                padding: '0.5rem 0',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#60a5fa'}
              onMouseLeave={e => e.currentTarget.style.color = '#e2e8f0'}
            >
              {link.label}
            </button>
          ))}

          {/* Resume button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: '0.6rem 1.5rem',
              background: 'transparent',
              color: '#e2e8f0',
              borderRadius: '50px',
              border: '1px solid rgba(96,165,250,0.3)',
              fontSize: '0.85rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#60a5fa'
              e.currentTarget.style.color = '#60a5fa'
              e.currentTarget.style.boxShadow = '0 0 12px rgba(96,165,250,0.2)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(96,165,250,0.3)'
              e.currentTarget.style.color = '#e2e8f0'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Resume ↓
          </a>

          {/* Let's Talk button */}
          <button
            onClick={() => scrollTo('contact')}
            style={{
              padding: '0.6rem 1.5rem',
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
              color: 'white',
              borderRadius: '50px',
              border: 'none',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: '0 0 20px rgba(96, 165, 250, 0.3)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 0 30px rgba(96, 165, 250, 0.5)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(96, 165, 250, 0.3)'
            }}
          >
            Let's Talk →
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-btn"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '1.8rem',
            cursor: 'pointer',
            color: '#e2e8f0',
          }}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '4rem',
          left: 0,
          right: 0,
          background: 'rgba(10, 10, 20, 0.98)',
          backdropFilter: 'blur(20px)',
          padding: '1.5rem',
          zIndex: 99,
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}>
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                display: 'block',
                width: '100%',
                padding: '0.75rem',
                textAlign: 'center',
                fontSize: '1rem',
                fontWeight: 500,
                color: '#e2e8f0',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#60a5fa'}
              onMouseLeave={e => e.currentTarget.style.color = '#e2e8f0'}
            >
              {link.label}
            </button>
          ))}

          {/* Mobile Resume link */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'block',
              width: '100%',
              padding: '0.75rem',
              textAlign: 'center',
              background: 'transparent',
              color: '#60a5fa',
              border: '1px solid rgba(96,165,250,0.3)',
              borderRadius: '50px',
              marginTop: '0.5rem',
              fontWeight: 600,
              textDecoration: 'none',
              boxSizing: 'border-box',
            }}
          >
            Resume ↓
          </a>

          <button
            onClick={() => scrollTo('contact')}
            style={{
              display: 'block',
              width: '100%',
              padding: '0.75rem',
              textAlign: 'center',
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
              color: 'white',
              borderRadius: '50px',
              border: 'none',
              marginTop: '0.5rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Let's Talk →
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .mobile-btn {
            display: block !important;
          }
          nav > div:nth-child(2) {
            display: none !important;
          }
        }

        nav *::before,
        nav *::after {
          display: none !important;
          content: none !important;
        }
      `}</style>
    </>
  )
}