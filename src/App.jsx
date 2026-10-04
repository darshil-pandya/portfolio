import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import CaseStudies from './components/CaseStudies'
import Projects from './components/Projects'
import AiLifecycle from './components/AiLifecycle'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useDarkMode } from './hooks/useDarkMode'

export default function App() {
  const [isDark, setIsDark] = useDarkMode()

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <main>
        <Hero />
        <Metrics />
        <CaseStudies />
        <AiLifecycle />
        <Experience />
        <Testimonials />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
