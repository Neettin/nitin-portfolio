// Skills.jsx
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'HTML/CSS'],
    accent: '#60a5fa',
    accentDim: 'rgba(96,165,250,0.1)',
    border: 'rgba(96,165,250,0.15)',
  },
  {
    title: 'Machine Learning & AI',
    skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Deep Learning', 'NLP', 'Computer Vision', 'Transformers', 'XGBoost'],
    accent: '#a78bfa',
    accentDim: 'rgba(167,139,250,0.1)',
    border: 'rgba(167,139,250,0.15)',
  },
  {
    title: 'Data Science & Analytics',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Feature Engineering', 'Statistical Analysis'],
    accent: '#f472b6',
    accentDim: 'rgba(244,114,182,0.1)',
    border: 'rgba(244,114,182,0.15)',
  },
  {
    title: 'Tools & Deployment',
    skills: ['FastAPI', 'Docker', 'Git', 'PostgreSQL', 'Vercel', 'Render'],
    accent: '#34d399',
    accentDim: 'rgba(52,211,153,0.1)',
    border: 'rgba(52,211,153,0.15)',
  },
]

export default function Skills() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)

  const words = ['Python', 'TensorFlow', 'FastAPI', 'Next.js']
  const period = 2000

  useEffect(() => {
    let timer
    const currentWord = words[loopNum % words.length]
    if (isDeleting) {
      timer = setTimeout(() => setText(currentWord.substring(0, text.length - 1)), 100)
    } else {
      timer = setTimeout(() => setText(currentWord.substring(0, text.length + 1)), 150)
    }
    if (!isDeleting && text === currentWord) timer = setTimeout(() => setIsDeleting(true), period)
    else if (isDeleting && text === '') { setIsDeleting(false); setLoopNum(loopNum + 1) }
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum])

  return (
    <section id="skills" style={{
      padding: '7rem 0',
      background: '#0a0a14',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Orbs */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)',
        width: '500px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(167,139,250,0.08), transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
            // Technical Expertise
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            marginBottom: '1rem',
            color: '#f1f5f9',
          }}>
            What I{' '}
            <span style={{
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              work with.
            </span>
          </h2>

          <div style={{ fontSize: '0.95rem', color: '#64748b' }}>
            Currently mastering{' '}
            <span style={{
              color: '#a78bfa',
              fontWeight: 600,
              borderRight: '2px solid #a78bfa',
              paddingRight: '0.3rem',
            }}>
              {text}
              <span style={{ animation: 'blink 1s infinite', opacity: 0.5 }}>|</span>
            </span>
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: `1px solid ${cat.border}`,
                borderRadius: '16px',
                padding: '1.75rem',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              whileHover={{
                y: -4,
                boxShadow: `0 20px 40px -10px ${cat.accent}20`,
              }}
            >
              {/* Glow corner */}
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: '80px', height: '80px',
                background: `radial-gradient(circle at top right, ${cat.accentDim}, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              <h3 style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10px',
                fontWeight: 700,
                color: cat.accent,
                marginBottom: '1.25rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}>
                {cat.title}
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + i * 0.03 }}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '11px',
                      fontWeight: 500,
                      padding: '5px 12px',
                      background: cat.accentDim,
                      color: '#94a3b8',
                      border: `1px solid ${cat.border}`,
                      borderRadius: '6px',
                      cursor: 'default',
                      transition: 'all 0.2s ease',
                      display: 'inline-block',
                    }}
                    whileHover={{
                      color: cat.accent,
                      scale: 1.05,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (max-width: 768px) {
          #skills .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}