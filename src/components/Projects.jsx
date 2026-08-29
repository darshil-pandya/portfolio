import { sideProjects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#16161d] dark:text-white">
          Side projects
        </h2>
        <p className="mt-3 max-w-2xl text-black/60 dark:text-white/60">
          Things I've designed and built end-to-end outside of work — product, data model, and code.
        </p>

        <div className="mt-10 space-y-10">
          {sideProjects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.03]"
            >
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="block">
                <img
                  src={`${import.meta.env.BASE_URL}${project.preview}`}
                  alt={`${project.title} preview`}
                  className="w-full border-b border-black/8 object-cover dark:border-white/10"
                  loading="lazy"
                />
              </a>

              <div className="p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold text-[#16161d] dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-black/55 dark:text-white/55">{project.tagline}</p>

                <p className="mt-4 text-sm leading-relaxed text-black/65 dark:text-white/65">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed text-black/65 dark:text-white/65">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#8B5CF6]" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-[#8B5CF6]/10 px-2.5 py-0.5 text-[11px] font-medium text-[#7C3AED] dark:bg-[#8B5CF6]/15 dark:text-[#A78BFA]"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[#7C3AED] px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#7C3AED]/20 transition hover:bg-[#8B5CF6]"
                  >
                    View live site ↗
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-semibold text-black/80 transition hover:border-[#8B5CF6] hover:text-[#7C3AED] dark:border-white/15 dark:text-white/80 dark:hover:text-[#A78BFA]"
                  >
                    View code ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
