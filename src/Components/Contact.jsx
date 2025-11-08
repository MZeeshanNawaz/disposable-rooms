// src/components/Contact.jsx
'use client'    

import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <h3 className="text-2xl font-semibold text-[#dfefff]">Contact</h3>
      <p className="mt-2 text-gray-300">Call or message us — we respond within 24 hours.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <div><strong>Phone:</strong> +968 98164264</div>
          <div><strong>Email:</strong> saeedraja830@gmail.com</div>
          <div><strong>Location:</strong> Muscat, Oman</div>
        </div>

        <form name="contact" method="POST" data-netlify="true" onSubmit={() => setSent(true)} className="grid grid-cols-1 gap-3">
          <input type="hidden" name="form-name" value="contact" />
          <input name="name" required placeholder="Your name" className="p-3 rounded bg-[#071526]" />
          <input name="email" type="email" required placeholder="Email" className="p-3 rounded bg-[#071526]" />
          <input name="phone" placeholder="Phone" className="p-3 rounded bg-[#071526]" />
          <textarea name="message" rows="4" placeholder="Message" className="p-3 rounded bg-[#071526]" />
          <button type="submit" className="px-6 py-3 bg-[#0f3b6a] rounded-md">Send Message</button>
        </form>
      </div>

      {sent && <p className="mt-4 text-green-300">Thank you — your message has been sent.</p>}
    </section>
  )
}
