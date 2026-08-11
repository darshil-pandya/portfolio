import { profile } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3 py-1 text-xs font-medium text-indigo-600 dark:border-indigo-400/25 dark:bg-indigo-400/10 dark:text-indigo-300">
        <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
        Atlanta, GA · Open to product roles
      </p>

      <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-[#16161d] sm:text-6xl dark:text-white">
        {profile.tagline}
      </h1>

      <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-black/65 dark:text-white/65">
        {profile.summary}
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-4">
        <a
          href="#work"
          className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 transition hover:bg-indigo-500"
        >
          See my work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-black/80 transition hover:border-indigo-400 hover:text-indigo-600 dark:border-white/15 dark:text-white/80 dark:hover:text-indigo-400"
        >
          Get in touch
        </a>
        <a
          href={`${import.meta.env.BASE_URL}Darshil_Pandya_Resume.pdf`}
          download
          className="inline-flex items-center gap-1.5 px-2 py-3 text-sm font-semibold text-black/60 underline decoration-indigo-400 decoration-2 underline-offset-4 transition hover:text-indigo-600 dark:text-white/60 dark:hover:text-indigo-400"
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
