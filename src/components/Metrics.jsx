import { metrics } from '../data/content'

export default function Metrics() {
  return (
    <section className="border-y border-[#283d3b]/5 bg-[#edddd4]/70 dark:border-[#edddd4]/10 dark:bg-[#2f3e46]/50">
      <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-6 gap-y-8 px-6 py-12 lg:gap-x-10">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="basis-[calc(50%-0.75rem)] text-center sm:basis-[calc(33.333%-1rem)] md:basis-[calc(20%-1.2rem)] lg:basis-[calc(20%-2rem)]"
          >
            <div className="font-display bg-gradient-to-r from-[#197278] to-[#52796f] bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl dark:from-[#84a98c] dark:to-[#cad2c5]">
              {m.value}
            </div>
            <div className="mx-auto mt-1 max-w-[14rem] text-xs leading-snug text-[#283d3b]/55 dark:text-[#edddd4]/55">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
