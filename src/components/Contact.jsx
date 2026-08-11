import { profile } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#16161d] sm:text-4xl dark:text-white">
          Let's talk product.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-black/60 dark:text-white/60">
          Open to Product Manager roles in AI-native, healthtech, and fintech SaaS. Reach out — I'll get back to
          you quickly.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-[#7C3AED] px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-[#7C3AED]/20 transition hover:bg-[#8B5CF6]"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-black/80 transition hover:border-[#8B5CF6] hover:text-[#7C3AED] dark:border-white/15 dark:text-white/80 dark:hover:text-[#A78BFA]"
          >
            <img src={`${import.meta.env.BASE_URL}logos/linkedin.svg`} alt="" className="h-4 w-4 rounded-[3px]" />
            LinkedIn ↗
          </a>
          <a
            href={`${import.meta.env.BASE_URL}Darshil_Pandya_Resume.pdf`}
            download
            className="rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-black/80 transition hover:border-[#8B5CF6] hover:text-[#7C3AED] dark:border-white/15 dark:text-white/80 dark:hover:text-[#A78BFA]"
          >
            Download resume
          </a>
        </div>
      </div>
    </section>
  )
}
