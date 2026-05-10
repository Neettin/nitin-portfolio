// Projects.jsx
import { useRef, useEffect, useState } from 'react'
import p1 from '../assets/project1.png'
import p2 from '../assets/project2.png'
import p3 from '../assets/project3.png'
import p4 from '../assets/project4.png'
import p5 from '../assets/project5.png'
import p6 from '../assets/project6.png'
import p7 from '../assets/project7.jpg'

const projects = [
  {
    num: '01', name: 'Solanix AI', sub: 'Potato Disease Detection',
    desc: 'AI-powered potato disease detection platform. Analyses uploaded leaf photos and detects Early Blight, Late Blight, or healthy plants using a TensorFlow CNN with 96.7% validation accuracy.',
    highlights: [
      'AI-based leaf disease classification — Early Blight, Late Blight, Healthy',
      '96.7% detection accuracy on validation dataset',
      'Real-time image upload and analysis with high-speed response',
      'React.js + Tailwind CSS frontend, FastAPI/Flask backend',
      'TensorFlow CNN model with Image Data Generator',
    ],
    tags: ['TensorFlow', 'Keras', 'CNN', 'FastAPI', 'React.js', 'Python'],
    metric: '96.7%', metricLabel: 'Accuracy',
    img: p1, github: 'https://github.com/Neettin/potato-disease-frontend',
    demo: 'https://solanix-ai.vercel.app/',
    accent: '#34d399', accentDim: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.18)',
  },
  {
    num: '02', name: 'CardGuard', sub: 'Fraud Detection System',
    desc: 'Production-grade AI app for real-time credit card fraud detection. XGBoost on 6.3M PaySim transactions with ROC-AUC of 0.9998. Dockerized FastAPI with HIGH/MEDIUM/LOW risk tiering and 3D card flip reveal.',
    highlights: [
      'XGBoost on 6.3M PaySim transactions — ROC-AUC: 0.9998',
      'Decision threshold tuned to 0.49 for maximum fraud recall',
      '9 engineered features including balance differentials',
      'Batch predict endpoint — up to 500 transactions per call',
      'CI/CD: GitHub → Vercel auto-deploy on every push',
    ],
    tags: ['XGBoost', 'FastAPI', 'Docker', 'React', 'Vite', 'HuggingFace'],
    metric: '0.9998', metricLabel: 'ROC-AUC',
    img: p4, github: 'https://github.com/Neettin/cardguard-frontend',
    demo: 'https://cardguard.vercel.app/',
    accent: '#f472b6', accentDim: 'rgba(244,114,182,0.08)', border: 'rgba(244,114,182,0.18)',
  },
  {
    num: '03', name: 'Smart Hospital AI', sub: 'Clinical Intelligence Platform',
    desc: 'Symptom to confirmed specialist appointment in under 60 seconds. Logistic Regression maps symptoms to 32 doctors across 14 specializations. XGBoost predicts no-show risk. flan-T5 auto-generates SOAP-style clinical notes.',
    highlights: [
      'Symptom → specialist mapping via Logistic Regression (14 specializations)',
      'XGBoost no-show risk prediction per appointment',
      'flan-T5 + Sumy for SOAP-style clinical note auto-generation',
      'Next.js 16 + TypeScript frontend, FastAPI + PostgreSQL backend',
      'Deployed: Vercel + Render + Neon',
    ],
    tags: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'XGBoost', 'flan-T5'],
    metric: '<60s', metricLabel: 'To booking',
    img: p2, github: 'https://github.com/Neettin/smart-hospital-AI',
    demo: 'https://smart-hospital-ai.vercel.app/',
    accent: '#60a5fa', accentDim: 'rgba(96,165,250,0.08)', border: 'rgba(96,165,250,0.18)',
  },
  {
    num: '04', name: 'WordFlow', sub: 'Next Word Prediction',
    desc: 'Full-stack NLP app powered by a custom LSTM. Word Predictor returns top 5 next words with confidence scores. Sentence Generator auto-builds full sentences from any seed phrase. 8,978 unique tokens.',
    highlights: [
      'LSTM trained on custom corpus — 8,978 unique tokens',
      'Word Predictor: top 5 next words with live confidence scores',
      'Sentence Generator: auto-builds full sentence from seed phrase',
      'Keras 3 → 2.15 mismatch solved via NumPy weight serialization',
      'Deployed on Streamlit Cloud',
    ],
    tags: ['TensorFlow', 'Keras', 'LSTM', 'NLP', 'Streamlit', 'Python'],
    metric: '8,978', metricLabel: 'Token vocab',
    img: p3, github: 'https://github.com/Neettin/Next-Word-Predictor',
    demo: 'https://next-word-predictor.streamlit.app/',
    accent: '#a78bfa', accentDim: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.18)',
  },
  {
    num: '05', name: 'CineRecSys', sub: 'Movie Recommendation Engine',
    desc: 'TF-IDF vectorization across genres, cast, crew, keywords, and overview. Cosine similarity over 45,000+ movies. Sub-second results via FastAPI on Render, React + Vite on Vercel.',
    highlights: [
      'TF-IDF vectorization across genres, cast, crew, keywords, overview',
      'Cosine similarity ranking over 45,000+ movie corpus',
      'Sub-second recommendation response time',
      'FastAPI backend on Render, React + Vite frontend on Vercel',
    ],
    tags: ['TF-IDF', 'Cosine Similarity', 'NLP', 'FastAPI', 'React', 'Vite'],
    metric: '45k+', metricLabel: 'Movies',
    img: p5, github: 'https://github.com/Neettin/movie-recommender-api',
    demo: 'https://cinerecsys.vercel.app/',
    accent: '#fbbf24', accentDim: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.18)',
  },
  {
    num: '06', name: 'SentimentX', sub: 'Emotion AI Platform',
    desc: 'Detects and classifies human emotions: Sadness, Anger, Love, Surprise, Fear, Joy. TF-IDF + Logistic Regression with GridSearchCV achieves 88.7% test accuracy with advanced NLTK preprocessing.',
    highlights: [
      'Six emotion classes: Sadness, Anger, Love, Surprise, Fear, Joy',
      'TF-IDF + Logistic Regression with GridSearchCV tuning',
      '88.7% test accuracy on held-out emotion corpus',
      'Models saved with Pickle for production reuse',
    ],
    tags: ['NLP', 'TF-IDF', 'Logistic Regression', 'GridSearchCV', 'NLTK', 'Scikit-learn'],
    metric: '88.7%', metricLabel: 'Accuracy',
    img: p6, github: 'https://github.com/Neettin/emotion-ai-platform',
    demo: 'https://sentimentx-ai-platform.streamlit.app/',
    accent: '#22d3ee', accentDim: 'rgba(34,211,238,0.08)', border: 'rgba(34,211,238,0.18)',
  },
  {
    num: '07', name: 'Diamond Price', sub: 'ML Price Prediction',
    desc: 'Estimates market value of a diamond from physical attributes on the Kaggle Diamonds dataset (~54,000 entries). Full data science workflow: EDA, label encoding, null handling, model training. R² = 0.97.',
    highlights: [
      '~54,000 diamonds — Carat, Cut, Color, Clarity, Depth, Table, X/Y/Z',
      'Label encoding for all ordinal categorical features',
      'Full EDA: distributions, correlation heatmaps, pairplots',
      'Regression model — R² = 0.97',
    ],
    tags: ['Scikit-learn', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'Regression'],
    metric: '0.97', metricLabel: 'R² Score',
    img: p7, github: 'https://github.com/Neettin/Diamond-Price-Prediction',
    demo: null,
    accent: '#e879f9', accentDim: 'rgba(232,121,249,0.08)', border: 'rgba(232,121,249,0.18)',
  },
]

// CARD_HEIGHT in px — how tall each card renders. Used to compute scroll spacer.
const CARD_HEIGHT = 300
// Extra scroll distance per card so the next card has room to slide over
const SCROLL_PER_CARD = 500

function ProjectCard({ p, index, isMobile }) {
  const [expanded, setExpanded] = useState(false)
  const TOP = 72 + index * 14

  const cardStyle = isMobile
    ? {
        marginBottom: '1.25rem',
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.02)',
        border: `1px solid ${p.border}`,
        boxShadow: `0 4px 24px -4px ${p.accent}15`,
      }
    : {
        position: 'sticky',
        top: TOP,
        zIndex: index + 2,
        marginBottom: 0,
        borderRadius: '20px',
        overflow: 'hidden',
        background: `linear-gradient(160deg, rgba(255,255,255,0.03) 0%, rgba(10,10,20,0.6) 100%)`,
        border: `1px solid ${p.border}`,
        boxShadow: `0 8px 32px -8px ${p.accent}20, 0 0 0 1px ${p.border}`,
        backdropFilter: 'blur(16px)',
      }

  return (
    <div style={cardStyle}>
      {/* Top grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: p.img && !isMobile ? '1fr 300px' : '1fr',
        minHeight: isMobile ? 'auto' : '260px',
      }}>
        {/* Info panel */}
        <div style={{
          padding: isMobile ? '1.25rem' : '1.75rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '0.75rem',
        }}>
          <div>
            {/* Badge row */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.75rem',
              flexWrap: 'wrap',
              gap: '8px',
            }}>
              <span style={{
                background: p.accent,
                color: '#0a0a14',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '9px', fontWeight: 700,
                padding: '3px 10px', borderRadius: '100px',
              }}>
                {p.num} / 07
              </span>
              <div style={{ display: 'flex', gap: '6px' }}>
                <a href={p.github} target="_blank" rel="noreferrer"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '9px', fontWeight: 600,
                    color: '#64748b', textDecoration: 'none',
                    padding: '3px 9px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '5px',
                    background: 'rgba(255,255,255,0.04)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#e2e8f0'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
                >
                  GitHub ↗
                </a>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '9px', fontWeight: 600,
                      color: '#0a0a14', textDecoration: 'none',
                      padding: '3px 9px', borderRadius: '5px',
                      background: p.accent,
                    }}
                  >
                    Demo →
                  </a>
                )}
              </div>
            </div>

            {/* Title */}
            <h3 style={{
              margin: 0,
              fontSize: isMobile ? '1.2rem' : 'clamp(1.1rem, 1.8vw, 1.45rem)',
              fontWeight: 800, color: '#f1f5f9',
              letterSpacing: '-0.02em', lineHeight: 1.15,
            }}>
              {p.name}
            </h3>
            <p style={{
              margin: '3px 0 8px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '9px', fontWeight: 600,
              color: p.accent, textTransform: 'uppercase', letterSpacing: '0.1em',
            }}>
              {p.sub}
            </p>
            <p style={{
              margin: '0 0 10px',
              fontSize: isMobile ? '0.8rem' : '0.82rem',
              color: '#94a3b8', lineHeight: 1.65,
            }}>
              {p.desc}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {p.tags.map((tag, i) => (
                <span key={i} style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '8px', fontWeight: 600,
                  padding: '2px 7px',
                  background: p.accentDim,
                  color: p.accent,
                  border: `1px solid ${p.border}`,
                  borderRadius: '4px',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Metric + toggle */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            paddingTop: '0.65rem', borderTop: `1px solid ${p.border}`,
            flexWrap: 'wrap', gap: '8px',
          }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
              <span style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                fontWeight: 800, color: p.accent,
                letterSpacing: '-0.02em', lineHeight: 1,
              }}>
                {p.metric}
              </span>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '8px', color: '#475569',
                textTransform: 'uppercase', letterSpacing: '0.1em',
              }}>
                {p.metricLabel}
              </span>
            </div>
            <button
              onClick={() => setExpanded(x => !x)}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '8px', fontWeight: 700,
                color: p.accent, background: p.accentDim,
                border: `1px solid ${p.border}`,
                borderRadius: '5px', padding: '4px 9px',
                cursor: 'pointer', letterSpacing: '0.04em',
              }}
            >
              {expanded ? 'HIDE ↑' : 'HIGHLIGHTS ↓'}
            </button>
          </div>
        </div>

        {/* Image — desktop only on right */}
        {p.img && !isMobile && (
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <img src={p.img} alt={p.name} loading="lazy" style={{
              width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(135deg, ${p.accent}18 0%, rgba(10,10,20,0.5) 100%)`,
              pointerEvents: 'none',
            }} />
          </div>
        )}

        {/* Image — mobile below info */}
        {p.img && isMobile && (
          <div style={{ height: '160px', overflow: 'hidden' }}>
            <img src={p.img} alt={p.name} loading="lazy" style={{
              width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            }} />
          </div>
        )}
      </div>

      {/* Expandable highlights */}
      <div style={{
        maxHeight: expanded ? '500px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease',
      }}>
        <div style={{
          padding: '1rem 1.75rem 1.5rem',
          borderTop: `1px solid ${p.border}`,
          background: p.accentDim,
        }}>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '9px', fontWeight: 700,
            color: p.accent, letterSpacing: '0.15em',
            textTransform: 'uppercase', marginBottom: '0.6rem',
          }}>
            Key Highlights
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {p.highlights.map((h, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <span style={{ color: p.accent, fontWeight: 800, flexShrink: 0, fontSize: '12px', marginTop: '2px' }}>→</span>
                <span style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.6 }}>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Scroll spacer — sits between sticky cards to provide scroll distance
function ScrollSpacer({ height }) {
  return <div style={{ height, flexShrink: 0 }} aria-hidden="true" />
}

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 860)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section
      id="projects"
      style={{
        padding: '6rem 0 5rem',
        background: '#0d0d1a',
        position: 'relative',
        // NO overflow:hidden — kills position:sticky
      }}
    >
      {/* Background orbs */}
      <div style={{
        position: 'absolute', top: '5%', right: '-8%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(96,165,250,0.05), transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', left: '-8%',
        width: '350px', height: '350px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(244,114,182,0.05), transparent 70%)',
        filter: 'blur(70px)', pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px', color: '#60a5fa',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            fontWeight: 500, display: 'block', marginBottom: '0.75rem',
          }}>
            // Featured Work
          </span>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 5vw, 3.2rem)',
            fontWeight: 800, letterSpacing: '-0.02em',
            lineHeight: 1.15, marginBottom: '0.75rem', color: '#f1f5f9',
          }}>
            Things I've{' '}
            <span style={{
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              built.
            </span>
          </h2>
          <p style={{
            color: '#475569',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
          }}>
            {isMobile ? '7 real-world projects ↓' : '7 real-world projects — scroll to stack ↓'}
          </p>
        </div>

        {isMobile ? (
          // ── MOBILE: plain vertical list, no stacking ──
          <div>
            {projects.map((project, index) => (
              <ProjectCard key={project.num} p={project} index={index} isMobile={true} />
            ))}
          </div>
        ) : (
          // ── DESKTOP: sticky stacking ──
          // The trick: each card is sticky, and a ScrollSpacer AFTER it
          // provides the scroll distance before the next card overlaps it.
          // No paddingBottom on wrapper needed — spacers handle it.
          // The last card has no spacer so there's zero gap after projects.
          <div style={{ position: 'relative' }}>
            {projects.map((project, index) => (
              <div key={project.num}>
                <ProjectCard p={project} index={index} isMobile={false} />
                {/* Spacer only between cards, not after the last */}
                {index < projects.length - 1 && (
                  <ScrollSpacer height={SCROLL_PER_CARD} />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}