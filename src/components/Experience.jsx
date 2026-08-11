import { certifications, education, experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-black/5 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#16161d] dark:text-white">
          Experience
        </h2>

        <div className="mt-10 space-y-10">
          {experience.map((job) => (
            <div key={job.role + job.org} className="grid gap-2 sm:grid-cols-[220px_1fr] sm:gap-8">
              <div className="flex gap-3 sm:block">
                {job.logo && (
                  <div className="mb-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white p-1.5 shadow-sm ring-1 ring-black/5">
                    <img src={`${import.meta.env.BASE_URL}${job.logo}`} alt={`${job.org} logo`} className="max-h-full max-w-full object-contain" />
                  </div>
                )}
                <div>
                  <p className="font-display text-base font-bold text-[#16161d] dark:text-white">{job.role}</p>
                  <p className="text-sm text-black/55 dark:text-white/55">{job.org}</p>
                  <p className="mt-1 text-xs text-black/40 dark:text-white/40">{job.period}</p>
                  <p className="text-xs text-black/40 dark:text-white/40">{job.location}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed text-black/65 dark:text-white/65">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#8B5CF6]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-bold text-[#16161d] dark:text-white">Education</h3>
            <div className="mt-5 space-y-5">
              {education.map((ed) => (
                <div key={ed.degree} className="flex gap-3">
                  {ed.logo && (
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white p-1.5 shadow-sm ring-1 ring-black/5">
                      <img src={`${import.meta.env.BASE_URL}${ed.logo}`} alt={`${ed.org} logo`} className="max-h-full max-w-full object-contain" />
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-[#16161d] dark:text-white">{ed.degree}</p>
                    <p className="text-sm text-black/55 dark:text-white/55">{ed.org}</p>
                    <p className="text-xs text-black/40 dark:text-white/40">
                      {ed.period} · {ed.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-[#16161d] dark:text-white">Certifications</h3>
            <ul className="mt-5 space-y-2">
              {certifications.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-black/65 dark:text-white/65">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#8B5CF6]" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
