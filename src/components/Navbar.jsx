import { useState } from 'react'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#ai-workflow', label: 'AI Workflow' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ isDark, setIsDark }) {
  const [open, setOpen] = useState(false)

  return (
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

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="rounded-md p-2 text-[#283d3b]/70 hover:bg-[#283d3b]/5 dark:text-[#edddd4]/70 dark:hover:bg-[#edddd4]/10"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[#283d3b]/5 px-6 py-4 md:hidden dark:border-[#edddd4]/10">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[#283d3b]/70 dark:text-[#edddd4]/70"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
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
