// app/page.js
import Head from 'next/head'
import Layout from '@/components/Layout'
import HeroHome from '@/components/HeroHome'
import IntroSection from '@/components/IntroSection'
import ServicesSection from '@/components/ServicesSection'
import Gallery from '@/components/Gallery'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/Components/Navbar'

export default function Page() {
  return (
    <>
      <Head>
        <title>Tariq Al Khoud LLC — Modular Portable Rooms in Oman</title>
        <meta name="description" content="Tariq Al Khoud LLC builds high-quality modular and portable disposable rooms across Oman. Fast installation, durable materials, and custom solutions. Contact +968 98164264." />
        <meta name="keywords" content="portable rooms, modular rooms, disposable rooms, prefabricated rooms, Oman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://your-site-url.netlify.app/" />
        <meta property="og:title" content="Tariq Al Khoud LLC — Modular Portable Rooms" />
        <meta property="og:description" content="Fast installation, durable materials, and custom portable rooms across Oman." />
      </Head>

      <Layout>
        <Navbar />
        <HeroHome />
        <IntroSection />
        <ServicesSection />
        <Gallery />
        <Team />
        <Contact />
        <Footer />
      </Layout>
    </>
  )
}
