import { profile } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/5 px-3 py-1 text-xs font-medium text-[#7C3AED] dark:border-[#8B5CF6]/25 dark:bg-[#8B5CF6]/10 dark:text-[#A78BFA]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]" />
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
          className="rounded-full bg-[#7C3AED] px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-[#7C3AED]/20 transition hover:bg-[#8B5CF6]"
        >
          See my work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-black/80 transition hover:border-[#8B5CF6] hover:text-[#7C3AED] dark:border-white/15 dark:text-white/80 dark:hover:text-[#A78BFA]"
        >
          Get in touch
        </a>
        <a
          href={`${import.meta.env.BASE_URL}Darshil_Pandya_Resume.pdf`}
          download
          className="inline-flex items-center gap-1.5 px-2 py-3 text-sm font-semibold text-black/60 underline decoration-[#8B5CF6] decoration-2 underline-offset-4 transition hover:text-[#7C3AED] dark:text-white/60 dark:hover:text-[#A78BFA]"
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
