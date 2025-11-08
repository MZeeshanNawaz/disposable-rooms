// components/ServicesSection.jsx
'use client'
import { motion } from 'framer-motion'

const services = [
  { title: 'Site Offices', desc: 'Portable offices for construction sites and projects.' },
  { title: 'Temporary Housing', desc: 'Comfortable temporary living units for staff.' },
  { title: 'Event Cabins', desc: 'Quick-deploy cabins for events and camps.' },
  { title: 'Custom Solutions', desc: 'Tailored room sizes and interior finishes.' },
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#041426] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-semibold text-[#dfefff]">Our Services</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} className="p-6 rounded-lg bg-[#071526]">
              <h4 className="font-semibold">{s.title}</h4>
              <p className="mt-2 text-gray-300 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
