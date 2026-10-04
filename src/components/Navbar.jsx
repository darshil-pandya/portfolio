import { useEffect, useState } from 'react'

const svgProps = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const links = [
  {
    href: '#work',
    label: 'Work',
    mobile: 'Work',
    icon: (
      <svg {...svgProps}>
        <rect x="2.5" y="3.5" width="19" height="13" rx="2" />
        <path d="M8 21h8M12 16.5V21" />
      </svg>
    ),
  },
  {
    href: '#ai-workflow',
    label: 'AI Workflow',
    mobile: 'Workflow',
    icon: (
      <svg {...svgProps}>
        <path d="M12 3l1.8 4.6L18.5 9l-4.7 1.4L12 15l-1.8-4.6L5.5 9l4.7-1.4L12 3zM18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15z" />
      </svg>
    ),
  },
  {
    href: '#experience',
    label: 'Experience',
    mobile: 'Career',
    icon: (
      <svg {...svgProps}>
        <circle cx="12" cy="7.2" r="3.4" />
        <path d="M4.5 21c0-4.1 3.4-7.2 7.5-7.2s7.5 3.1 7.5 7.2" />
        <path d="M9.6 13.9L12 16.3l2.4-2.4M12 16.3l-1.1 2.2L12 21l1.1-2.5L12 16.3z" />
      </svg>
    ),
  },
  {
    href: '#skills',
    label: 'Skills',
    mobile: 'Skills',
    icon: (
      <svg {...svgProps}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8z" />
      </svg>
    ),
  },
  {
    href: '#projects',
    label: 'Projects',
    mobile: 'Projects',
    icon: (
      <svg {...svgProps}>
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zM4 7.5l8 4.5 8-4.5M12 12v9" />
      </svg>
    ),
  },
  {
    href: '#contact',
    label: 'Contact',
    mobile: 'Contact',
    icon: (
      <svg {...svgProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
]

const SECTION_IDS = ['work', 'ai-workflow', 'experience', 'testimonials', 'skills', 'projects', 'contact']

function useActiveSection() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    let raf = 0
    const update = () => {
      const line = window.innerHeight * 0.35
      let current = null
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = 'contact'
      setActive(current === 'testimonials' ? 'experience' : current)
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return [active, setActive]
}

export default function Navbar({ isDark, setIsDark }) {
  const [active, setActive] = useActiveSection()

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#283d3b]/5 bg-[#f6eee9]/80 backdrop-blur-md dark:border-[#edddd4]/10 dark:bg-[#1f2b30]/80">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg font-bold tracking-tight text-[#283d3b] dark:text-[#edddd4]">
            Darshil Pandya
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-[#283d3b]/60 transition hover:text-[#197278] dark:text-[#edddd4]/60 dark:hover:text-[#84a98c]"
              >
                {l.label}
              </a>
            ))}
            <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
          </div>

          <div className="md:hidden">
            <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
          </div>
        </nav>
      </header>

      <nav
        aria-label="Sections"
        className="fixed inset-x-3 z-50 md:hidden"
        style={{ bottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      >
        <ul className="mx-auto flex max-w-md items-stretch justify-between rounded-full border border-[#283d3b]/10 bg-white/90 p-1.5 shadow-lg shadow-[#283d3b]/15 backdrop-blur-xl dark:border-[#edddd4]/10 dark:bg-[#2f3e46]/90 dark:shadow-black/40">
          {links.map((l) => {
            const id = l.href.slice(1)
            const on = active === id
            return (
              <li key={l.href} className="min-w-0 flex-1">
                <a
                  href={l.href}
                  onClick={() => setActive(id)}
                  aria-current={on ? 'true' : undefined}
                  className={`flex flex-col items-center gap-0.5 rounded-full px-0.5 py-2 text-[10px] leading-none transition ${
                    on
                      ? 'bg-[#197278]/10 font-semibold text-[#283d3b] dark:bg-[#84a98c]/15 dark:text-[#edddd4]'
                      : 'font-medium text-[#283d3b]/55 dark:text-[#edddd4]/55'
                  }`}
                >
                  <span className={on ? 'text-[#c44536] dark:text-[#ef7a6c]' : ''}>{l.icon}</span>
                  <span className="max-w-full truncate">{l.mobile}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

function ThemeToggle({ isDark, setIsDark }) {
  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setIsDark((d) => !d)}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#283d3b]/10 text-[#283d3b]/70 transition hover:border-[#197278] hover:text-[#197278] dark:border-[#edddd4]/15 dark:text-[#edddd4]/70 dark:hover:text-[#84a98c]"
    >
      {isDark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
        </svg>
      )}
    </button>
  )
}
