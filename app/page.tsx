import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <ScrollToTop />
    </>
  )
}
