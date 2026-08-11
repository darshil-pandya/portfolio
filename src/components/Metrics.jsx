import { metrics } from '../data/content'

export default function Metrics() {
  return (
    <section className="border-y border-black/5 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.02]">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-3 md:grid-cols-6">
        {metrics.map((m) => (
          <div key={m.label} className="text-center sm:text-left">
            <div className="font-display text-2xl font-extrabold text-[#7C3AED] sm:text-3xl dark:text-[#A78BFA]">
              {m.value}
            </div>
            <div className="mt-1 text-xs leading-snug text-black/55 dark:text-white/55">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
