// components/CurvyEdge.jsx
import React from 'react'

export default function CurvyEdge({ color = '#071228', className = '' }) {
  return (
    <div className={`hero-edge ${className}`}>
      <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-16 block">
        <path d="M0,20 C150,80 350,0 600,30 C850,60 1050,10 1200,70 L1200,100 L0,100 Z" fill={color} />
      </svg>
    </div>
  )
}
