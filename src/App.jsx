import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import CaseStudies from './components/CaseStudies'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useDarkMode } from './hooks/useDarkMode'

export default function App() {
  const [isDark, setIsDark] = useDarkMode()

  return (
    <div className="min-h-screen">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <main>
        <Hero />
        <Metrics />
        <CaseStudies />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
