import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#16161d] dark:text-white">
        Skills & tools
      </h2>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.group}>
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#7C3AED] dark:text-[#A78BFA]">
              {group.group}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-black/8 bg-white px-3 py-1.5 text-sm text-black/70 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
