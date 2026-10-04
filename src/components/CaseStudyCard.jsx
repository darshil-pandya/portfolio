import { useState } from 'react'

export default function CaseStudyCard({ study }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col rounded-2xl border border-[#283d3b]/8 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-[#edddd4]/10 dark:bg-[#2f3e46]/70">
      <div className="mb-3 flex flex-wrap gap-1.5">
        {study.domains.map((d) => (
          <span
            key={d}
            className="rounded-full bg-[#84a98c]/25 px-2.5 py-0.5 text-[11px] font-medium text-[#354f52] dark:bg-[#84a98c]/15 dark:text-[#84a98c]"
          >
            {d}
          </span>
        ))}
      </div>

      <h3 className="font-display text-lg font-bold text-[#283d3b] dark:text-[#edddd4]">{study.title}</h3>
      <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-[#283d3b]/40 dark:text-[#edddd4]/40">
        {study.company}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-[#283d3b]/65 dark:text-[#edddd4]/65">{study.hook}</p>

      <p className="mt-4 text-sm font-semibold text-[#197278] dark:text-[#84a98c]">↳ {study.impact}</p>

      {open && (
        <div className="mt-4 space-y-3 border-t border-[#283d3b]/8 pt-4 dark:border-[#edddd4]/10">
          {study.body.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-[#283d3b]/60 dark:text-[#edddd4]/60">
              {p}
            </p>
          ))}
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="mt-5 self-start text-sm font-semibold text-[#283d3b]/70 underline decoration-[#c44536] decoration-2 underline-offset-4 transition hover:text-[#197278] dark:text-[#edddd4]/70 dark:hover:text-[#84a98c]"
      >
        {open ? 'Show less' : 'Read the full story'}
      </button>
    </div>
  )
}
