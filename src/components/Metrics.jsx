import { metrics } from '../data/content'

export default function Metrics() {
  return (
    <section className="border-y border-[#283d3b]/5 bg-[#edddd4]/70 dark:border-[#edddd4]/10 dark:bg-[#2f3e46]/50">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 py-12 sm:grid-cols-3 md:grid-cols-5 lg:gap-10">
        {metrics.map((m) => (
          <div key={m.label} className="text-center sm:text-left">
            <div className="font-display bg-gradient-to-r from-[#197278] to-[#52796f] bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl dark:from-[#84a98c] dark:to-[#cad2c5]">
              {m.value}
            </div>
            <div className="mt-1 text-xs leading-snug text-[#283d3b]/55 dark:text-[#edddd4]/55">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
