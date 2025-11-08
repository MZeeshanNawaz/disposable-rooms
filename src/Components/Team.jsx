// components/Team.jsx
'use client'
import { motion } from 'framer-motion'

const team = [
  { name: 'Saeed Raja', role: 'General Manager' },
  { name: 'Ali Hassan', role: 'Site Supervisor' },
]

export default function Team() {
  return (
    <section id="team" className="bg-[#041426] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-semibold text-[#dfefff]">Our Team</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((t,i)=>(
            <motion.div key={t.name} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity:1, y:0 }} transition={{ delay:i*0.12 }} className="p-6 rounded-lg bg-[#071526]">
              <h4 className="font-semibold">{t.name}</h4>
              <p className="text-gray-300">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
