import { useMemo, useState } from 'react'
import { caseStudies, domains } from '../data/content'
import CaseStudyCard from './CaseStudyCard'

export default function CaseStudies() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(() => {
    if (active === 'All') return caseStudies
    return caseStudies.filter((c) => c.domains.includes(active))
  }, [active])

  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-10">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#283d3b] dark:text-[#edddd4]">
          Selected work
        </h2>
        <p className="mt-3 max-w-2xl text-[#283d3b]/60 dark:text-[#edddd4]/60">
          Seven case studies spanning healthtech, fintech, and AI-native enterprise SaaS. Filter by domain to see
          what's most relevant to you.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap gap-2">
        {domains.map((d) => (
          <button
            key={d}
            onClick={() => setActive(d)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              active === d
                ? 'bg-[#197278] text-white'
                : 'bg-[#cad2c5]/60 text-[#354f52] hover:bg-[#cad2c5] dark:bg-[#2f3e46] dark:text-[#cad2c5] dark:hover:bg-[#354f52]'
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {filtered.map((cs) => (
          <CaseStudyCard key={cs.id} study={cs} />
        ))}
      </div>
    </section>
  )
}
