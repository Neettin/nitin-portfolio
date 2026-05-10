// Loader.jsx
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Loader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(interval); return 100 }
        return prev + 2
      })
    }, 20)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#0a0a14',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2.5rem',
      }}
    >
      {/* Background orbs matching Hero */}
      <div style={{
        position: 'absolute',
        top: '20%', left: '10%',
        width: '300px', height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(96,165,250,0.15), transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%', right: '10%',
        width: '300px', height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(167,139,250,0.15), transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      {/* Logo */}
      <motion.div
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <span style={{
          fontSize: '3.5rem',
          fontWeight: 800,
          fontFamily: "'JetBrains Mono', monospace",
          background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '-0.04em',
          lineHeight: 1,
        }}>
          Nitin Gupta
        </span>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '9px',
          color: '#475569',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
        }}>
          AI/ML Engineer
        </span>
      </motion.div>

      {/* Progress bar */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '220px' }}>
        <div style={{
          width: '100%',
          height: '2px',
          background: 'rgba(255,255,255,0.06)',
          borderRadius: '2px',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)',
              borderRadius: '2px',
              boxShadow: '0 0 10px rgba(96,165,250,0.5)',
            }}
          />
        </div>

        <motion.p
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '9px',
            color: '#475569',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
          }}
        >
          Loading {progress}%
        </motion.p>
      </div>
    </motion.div>
  )
}