import { profile } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="border-t border-[#283d3b]/5 dark:border-[#edddd4]/10">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#283d3b] sm:text-4xl dark:text-[#edddd4]">
          Let's talk product.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[#283d3b]/60 dark:text-[#edddd4]/60">
          Open to Product Manager roles in AI-native, healthtech, and fintech SaaS. Reach out — I'll get back to
          you quickly.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-[#197278] px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-[#197278]/20 transition hover:bg-[#283d3b]"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#283d3b]/10 px-6 py-3 text-sm font-semibold text-[#283d3b]/80 transition hover:border-[#197278] hover:text-[#197278] dark:border-[#edddd4]/15 dark:text-[#edddd4]/80 dark:hover:text-[#84a98c]"
          >
            <img src={`${import.meta.env.BASE_URL}logos/linkedin.svg`} alt="" className="h-4 w-4 rounded-[3px]" />
            LinkedIn ↗
          </a>
          <a
            href={`${import.meta.env.BASE_URL}Darshil_Pandya_Resume.pdf`}
            download
            className="rounded-full border border-[#283d3b]/10 px-6 py-3 text-sm font-semibold text-[#283d3b]/80 transition hover:border-[#197278] hover:text-[#197278] dark:border-[#edddd4]/15 dark:text-[#edddd4]/80 dark:hover:text-[#84a98c]"
          >
            Download resume
          </a>
        </div>
      </div>
    </section>
  )
}
