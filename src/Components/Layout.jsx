// components/Layout.jsx
import React from 'react'

export default function Layout({ children }) {
  return (
    <div>
      <header className="fixed w-full z-40 bg-black/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="text-lg font-semibold text-[#cfe3ff]">Tariq Al Khoud LLC</div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-200">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#gallery" className="hover:underline">Gallery</a>
            <a href="#team" className="hover:underline">Team</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <div className="text-sm text-gray-200 hidden md:block">📞 +968 98164264</div>
        </div>
      </header>

      <main className="pt-20">
        {children}
      </main>
    </div>
  )
}
