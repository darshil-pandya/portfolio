import { useState } from 'react'

export default function CaseStudyCard({ study }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col rounded-2xl border border-black/8 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/[0.03]">
      <div className="mb-3 flex flex-wrap gap-1.5">
        {study.domains.map((d) => (
          <span
            key={d}
            className="rounded-full bg-[#8B5CF6]/10 px-2.5 py-0.5 text-[11px] font-medium text-[#7C3AED] dark:bg-[#8B5CF6]/15 dark:text-[#A78BFA]"
          >
            {d}
          </span>
        ))}
      </div>

      <h3 className="font-display text-lg font-bold text-[#16161d] dark:text-white">{study.title}</h3>
      <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-black/40 dark:text-white/40">
        {study.company}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-black/65 dark:text-white/65">{study.hook}</p>

      <p className="mt-4 text-sm font-semibold text-[#7C3AED] dark:text-[#A78BFA]">↳ {study.impact}</p>

      {open && (
        <div className="mt-4 space-y-3 border-t border-black/8 pt-4 dark:border-white/10">
          {study.body.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-black/60 dark:text-white/60">
              {p}
            </p>
          ))}
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="mt-5 self-start text-sm font-semibold text-black/70 underline decoration-[#8B5CF6] decoration-2 underline-offset-4 transition hover:text-[#7C3AED] dark:text-white/70 dark:hover:text-[#A78BFA]"
      >
        {open ? 'Show less' : 'Read the full story'}
      </button>
    </div>
  )
}
