// Cursor.jsx
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
    }

    window.addEventListener('mousemove', move)

    return () => {
      window.removeEventListener('mousemove', move)
    }
  }, [])

  if (window.matchMedia('(hover: none)').matches) return null

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        width: '8px',
        height: '8px',
        background: '#60a5fa',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 12px rgba(96,165,250,0.8)',
      }}
    />
  )
}