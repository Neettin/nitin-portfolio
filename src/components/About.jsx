// About.jsx
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)

  const words = ['Machine Learning Engineer.', 'Problem Solver.', 'Innovation Driver.', 'Tech Enthusiast.']
  const period = 2000

  useEffect(() => {
    let timer
    const currentWord = words[loopNum % words.length]
    if (isDeleting) {
      timer = setTimeout(() => setText(currentWord.substring(0, text.length - 1)), 80)
    } else {
      timer = setTimeout(() => setText(currentWord.substring(0, text.length + 1)), 120)
    }
    if (!isDeleting && text === currentWord) timer = setTimeout(() => setIsDeleting(true), period)
    else if (isDeleting && text === '') { setIsDeleting(false); setLoopNum(loopNum + 1) }
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum])

  return (
    <section id="about" style={{
      padding: '7rem 0',
      background: '#0d0d1a',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Orbs */}
      <div style={{
        position: 'absolute', top: '10%', right: '-5%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(167,139,250,0.12), transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '-5%',
        width: '350px', height: '350px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(96,165,250,0.1), transparent 70%)',
        filter: 'blur(70px)', pointerEvents: 'none',
      }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'var(--about-cols, 1fr 1fr)',
          gap: 'var(--about-gap, 4rem)',
          alignItems: 'start',
        }}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              color: '#60a5fa',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 500,
              display: 'block',
              marginBottom: '1rem',
            }}>
              // ABOUT ME
            </span>

            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '1.5rem',
              color: '#f1f5f9',
            }}>
              The person behind<br />
              <span style={{
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                the model.
              </span>
            </h2>

            {/* Typing */}
            <div style={{
              fontSize: '1rem',
              fontWeight: 500,
              marginBottom: '1.75rem',
              color: '#94a3b8',
            }}>
              I'm a{' '}
              <span style={{
                color: '#a78bfa',
                borderRight: '2px solid #a78bfa',
                paddingRight: '0.3rem',
              }}>
                {text}
                <span style={{ animation: 'blink 1s infinite', opacity: 0.6 }}>|</span>
              </span>
            </div>

            <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.95rem' }}>
              I'm a <span style={{ color: '#60a5fa', fontWeight: 600 }}>Computer Systems Engineering graduate</span> with a genuine obsession for machine learning — the kind that keeps you debugging at 2am because you know the model can do better.
            </p>
            <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.95rem' }}>
              While others were taking notes, I was building. Every concept I learned became a working system — a fraud detector, a disease classifier, a hospital AI, a word predictor. Not to pad a resume — because I wanted to see it work.
            </p>
            <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '0.95rem' }}>
              I've shipped <span style={{ color: '#f472b6', fontWeight: 600 }}>7 live projects</span> using Python, TensorFlow, Scikit-learn, FastAPI, and Next.js — from data wrangling to production deployment.
            </p>
          </motion.div>

          {/* Right — Education card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            }}>
              <h3 style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10px',
                fontWeight: 700,
                color: '#60a5fa',
                marginBottom: '2rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}>
                Education Journey
              </h3>

              {/* Entry 1 */}
              <div style={{ marginBottom: '2rem', position: 'relative', paddingLeft: '1.75rem' }}>
                <div style={{
                  position: 'absolute', left: 0, top: '4px',
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                  boxShadow: '0 0 10px rgba(96,165,250,0.5)',
                }} />
                <div style={{
                  position: 'absolute', left: '4px', top: '14px',
                  width: '2px', height: 'calc(100% + 1rem)',
                  background: 'linear-gradient(to bottom, rgba(96,165,250,0.3), transparent)',
                }} />
                <h4 style={{ fontWeight: 700, marginBottom: '0.3rem', color: '#e2e8f0', fontSize: '0.95rem' }}>
                  BSc (Hons) Computer Systems Engineering
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.25rem' }}>ISMT, Kathmandu</p>
                <span style={{
                  display: 'inline-block',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '10px',
                  color: '#60a5fa',
                  fontWeight: 600,
                  background: 'rgba(96,165,250,0.1)',
                  padding: '2px 10px',
                  borderRadius: '100px',
                  border: '1px solid rgba(96,165,250,0.2)',
                }}>
                  2022 — 2025
                </span>
              </div>

              {/* Entry 2 */}
              <div style={{ position: 'relative', paddingLeft: '1.75rem' }}>
                <div style={{
                  position: 'absolute', left: 0, top: '4px',
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #a78bfa, #f472b6)',
                  boxShadow: '0 0 10px rgba(167,139,250,0.5)',
                }} />
                <h4 style={{ fontWeight: 700, marginBottom: '0.3rem', color: '#e2e8f0', fontSize: '0.95rem' }}>
                  Higher Secondary Level (+2)
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.25rem' }}>Modern Public School, Nepalgunj</p>
                <span style={{
                  display: 'inline-block',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '10px',
                  color: '#a78bfa',
                  fontWeight: 600,
                  background: 'rgba(167,139,250,0.1)',
                  padding: '2px 10px',
                  borderRadius: '100px',
                  border: '1px solid rgba(167,139,250,0.2)',
                }}>
                  2020 — 2022
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        :root {
          --about-cols: 1fr 1fr;
          --about-gap: 4rem;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (max-width: 768px) {
          :root {
            --about-cols: 1fr !important;
            --about-gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  )
}