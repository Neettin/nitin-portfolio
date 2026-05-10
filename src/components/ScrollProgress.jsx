// ScrollProgress.jsx
import { useScroll, motion } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)',
        scaleX: scrollYProgress,
        transformOrigin: 'left',
        zIndex: 200,
        boxShadow: '0 0 10px rgba(96,165,250,0.6)',
      }}
    />
  )
}