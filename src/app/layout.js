// app/layout.js
import '../styles/globals.css'

export const metadata = {
  title: 'Tariq Al Khoud LLC — Modular Portable Rooms in Oman',
  description: 'Tariq Al Khoud LLC builds high-quality modular and portable disposable rooms across Oman. Fast installation, durable materials, and custom solutions. Contact +968 98164264.',
  keywords: 'portable rooms, modular rooms, disposable rooms, prefabricated rooms, Oman, site offices',
  authors: [{ name: 'Tariq Al Khoud LLC' }],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#071228] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
