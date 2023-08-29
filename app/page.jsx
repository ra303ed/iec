import Banner from '@/components/Banner'
import Welcome from '@/components/Welcome'
import OurServices from '@/components/OurServices'
import ContactUs from '@/components/ContactUs'
import Image from 'next/image'
import Link from 'next/link'
import Projects from '@/components/Projects'
import OurTeam from '@/components/OurTeam'

export default function Home() {
  return (
    <main>
      <Banner />
      <Welcome />
      <OurServices />
      <Projects />
      <OurTeam />
      <ContactUs />
    </main>
  )
}
