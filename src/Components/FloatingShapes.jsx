// components/FloatingShapes.jsx
'use client'
import { motion } from 'framer-motion'

export default function FloatingShapes() {
  return (
    <div aria-hidden className="pointer-events-none">
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute left-6 top-24 w-48 h-48 rounded-full bg-gradient-to-br from-[#0b2a48] to-[#123b6a] opacity-30 blur-2xl"
      />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute right-6 top-48 w-36 h-36 rounded-lg bg-gradient-to-tr from-[#102b4a] to-[#0f2340] opacity-25 blur-xl"
      />
    </div>
  )
}
