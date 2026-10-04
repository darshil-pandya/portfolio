import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#283d3b] dark:text-[#edddd4]">
        Skills & tools
      </h2>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.group}>
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#197278] dark:text-[#84a98c]">
              {group.group}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-[#84a98c]/40 bg-white px-3 py-1.5 text-sm text-[#354f52] dark:border-[#edddd4]/10 dark:bg-[#2f3e46]/70 dark:text-[#cad2c5]"
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
