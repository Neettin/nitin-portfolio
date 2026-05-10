// Hero.jsx
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import myPic from '../assets/my_pic.JPG'

export default function Hero() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)

  const words = [
    'AI/ML Engineer.',
    'Data Scientist.',
    'Problem Solver.',
    'Innovation Builder.',
  ]

  const period = 2000

  useEffect(() => {
    let timer
    const currentWord = words[loopNum % words.length]

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1))
      }, 100)
    } else {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1))
      }, 150)
    }

    if (!isDeleting && text === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), period)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
    }

    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum])

  return (
    <>
      <section
        id="hero"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: '#0a0a14',
        }}
      >
        {/* Animated Gradient Orbs */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.3), transparent 70%)',
          filter: 'blur(80px)',
          animation: 'float 20s ease-in-out infinite',
          pointerEvents: 'none',
        }} />

        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.3), transparent 70%)',
          filter: 'blur(100px)',
          animation: 'float 15s ease-in-out infinite reverse',
          pointerEvents: 'none',
        }} />

        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244, 114, 182, 0.15), transparent 70%)',
          filter: 'blur(70px)',
          transform: 'translate(-50%, -50%)',
          animation: 'heroPulse 8s ease-in-out infinite',
          pointerEvents: 'none',
        }} />

        <div
          className="container"
          style={{
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'center',
          }}>
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                style={{
                  fontSize: 'clamp(3rem, 8vw, 5.5rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  marginBottom: '1rem',
                  letterSpacing: '-0.02em',
                  background: 'linear-gradient(135deg, #ffffff, #94a3b8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Hi, I'm{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Nitin Gupta
                </span>
              </motion.h1>

              <div style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                fontWeight: 500,
                marginBottom: '1.5rem',
                color: '#94a3b8',
                lineHeight: 1.4,
              }}>
                {"I'm an "}
                <span style={{
                  color: '#60a5fa',
                  borderRight: '2px solid #60a5fa',
                  paddingRight: '0.3rem',
                }}>
                  {text}
                  <span style={{ opacity: 0.5, animation: 'blink 1s infinite' }}>|</span>
                </span>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{
                  fontSize: '1.1rem',
                  color: '#94a3b8',
                  lineHeight: 1.7,
                  marginBottom: '2.5rem',
                  maxWidth: '500px',
                }}
              >
                AI/ML Engineer specializing in production-grade ML systems.
                7+ successful deployments, transforming ideas into intelligent solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem', alignItems: 'center' }}
              >
                {/* Explore My Work */}
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    padding: '1rem 2.5rem',
                    background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: '0 0 20px rgba(96, 165, 250, 0.4)',
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    const x = e.clientX - rect.left
                    const y = e.clientY - rect.top
                    e.currentTarget.style.background = `radial-gradient(circle at ${x}px ${y}px, #a78bfa, #60a5fa)`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #60a5fa, #a78bfa)'
                  }}
                >
                  Explore My Work
                </button>

                {/* Get In Touch */}
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    padding: '1rem 2.5rem',
                    background: 'transparent',
                    color: '#e2e8f0',
                    border: '2px solid rgba(96, 165, 250, 0.3)',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#60a5fa'
                    e.currentTarget.style.color = '#60a5fa'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(96, 165, 250, 0.3)'
                    e.currentTarget.style.color = '#e2e8f0'
                  }}
                >
                  Get In Touch
                </button>

                {/* Download Resume */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: '1rem 2rem',
                    background: 'transparent',
                    color: '#a78bfa',
                    border: '2px solid rgba(167,139,250,0.3)',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#a78bfa'
                    e.currentTarget.style.color = '#a78bfa'
                    e.currentTarget.style.boxShadow = '0 0 16px rgba(167,139,250,0.25)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(167,139,250,0.3)'
                    e.currentTarget.style.color = '#a78bfa'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {/* Download icon */}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Resume
                </a>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}
              >
                {[
                  {
                    href: 'https://github.com/Neettin',
                    hoverBg: '#60a5fa',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    ),
                  },
                  {
                    href: 'https://www.linkedin.com/in/nitin-gupta-0522b43a3/',
                    hoverBg: '#0077b5',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" />
                      </svg>
                    ),
                  },
                  {
                    href: 'mailto:nitinnggupta04@gmail.com',
                    hoverBg: '#ea4335',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    ),
                  },
                ].map(({ href, hoverBg, icon }, i) => (
                  <a
                    key={i}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noreferrer"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s',
                      border: '1px solid rgba(255,255,255,0.1)',
                      textDecoration: 'none',
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = hoverBg
                      e.currentTarget.style.transform = 'translateY(-3px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div style={{
                position: 'relative',
                width: 'clamp(260px, 30vw, 400px)',
                aspectRatio: '1',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                overflow: 'hidden',
                border: '2px solid rgba(255,255,255,0.1)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(96,165,250,0.2)',
                animation: 'morph 10s ease-in-out infinite',
              }}>
                <img
                  src={myPic}
                  alt="Nitin Gupta"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          <span style={{ color: '#64748b', fontSize: '0.7rem', letterSpacing: '0.2em' }}>SCROLL</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </motion.div>
      </section>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33%       { transform: translate(30px, -30px) rotate(5deg); }
          66%       { transform: translate(-20px, 20px) rotate(-5deg); }
        }
        @keyframes heroPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1);   opacity: 0.5; }
          50%       { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
        }
        @keyframes morph {
          0%   { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          25%  { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
          50%  { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
          75%  { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
          100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        }

        #hero *::before,
        #hero *::after {
          display: none !important;
          content: none !important;
        }
        #hero h1 span {
          display: inline !important;
        }
        @media (max-width: 968px) {
          #hero .container > div > div:first-child {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
        }

        @media (max-width: 968px) {
          #hero > div > div {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 3rem !important;
          }
        }
      `}</style>
    </>
  )
}