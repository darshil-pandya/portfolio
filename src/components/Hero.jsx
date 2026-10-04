import { profile } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <div className="mb-5 flex flex-wrap gap-2">
        <p className="inline-flex items-center gap-2 rounded-full border border-[#197278]/20 bg-[#197278]/5 px-3 py-1 text-xs font-medium text-[#197278] dark:border-[#84a98c]/25 dark:bg-[#84a98c]/10 dark:text-[#84a98c]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#c44536]" />
          Atlanta, GA · Open to Senior Product Manager roles
        </p>
        <p className="inline-flex items-center gap-1.5 rounded-full border border-[#84a98c]/50 bg-[#84a98c]/15 px-3 py-1 text-xs font-medium text-[#354f52] dark:border-[#84a98c]/30 dark:bg-[#84a98c]/10 dark:text-[#cad2c5]">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
            <circle cx="12" cy="9.5" r="2.5" />
          </svg>
          Open to relocation
        </p>
      </div>

      <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-[#283d3b] sm:text-6xl dark:text-[#edddd4]">
        {profile.tagline}
      </h1>

      <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-[#283d3b]/65 dark:text-[#edddd4]/65">
        {profile.summary.split('\n\n').map((paragraph, i) => (
          <p key={i} className="text-balance">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-9 flex flex-wrap items-center gap-4">
        <a
          href="#work"
          className="rounded-full bg-[#197278] px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-[#197278]/20 transition hover:bg-[#283d3b]"
        >
          See my work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-[#283d3b]/10 px-6 py-3 text-sm font-semibold text-[#283d3b]/80 transition hover:border-[#197278] hover:text-[#197278] dark:border-[#edddd4]/15 dark:text-[#edddd4]/80 dark:hover:text-[#84a98c]"
        >
          Get in touch
        </a>
        <a
          href={`${import.meta.env.BASE_URL}Darshil_Pandya_Resume.pdf`}
          download
          className="inline-flex items-center gap-1.5 px-2 py-3 text-sm font-semibold text-[#283d3b]/60 underline decoration-[#c44536] decoration-2 underline-offset-4 transition hover:text-[#197278] dark:text-[#edddd4]/60 dark:hover:text-[#84a98c]"
        >
          Download resume
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" />
          </svg>
        </a>
      </div>
    </section>
  )
}
