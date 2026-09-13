import { aiLifecycle } from '../data/content'

const ICONS = [
  // Prioritize — layers
  <svg key="layers" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
    <path d="M10 2.5l7 4-7 4-7-4 7-4z" />
    <path d="M3 10.2l7 4 7-4" />
    <path d="M3 14.2l7 4 7-4" />
  </svg>,
  // Discover — chat
  <svg key="chat" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
    <path d="M3 4.5h14v9H8.3l-3.8 2.8v-2.8H3v-9z" />
    <circle cx="7.2" cy="8.9" r=".6" fill="currentColor" stroke="none" />
    <circle cx="10.3" cy="8.9" r=".6" fill="currentColor" stroke="none" />
    <circle cx="13.4" cy="8.9" r=".6" fill="currentColor" stroke="none" />
  </svg>,
  // Prototype — frame
  <svg key="frame" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
    <path d="M5 2.3v2.6M5 15.1v2.6M15 2.3v2.6M15 15.1v2.6M2.3 5h2.6M15.1 5h2.6M2.3 15h2.6M15.1 15h2.6" />
    <rect x="5" y="5" width="10" height="10" rx="1.2" />
  </svg>,
  // Regulatory review — shield
  <svg key="shield" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
    <path d="M10 2.3l6 2.2v4.6c0 4-2.6 6.8-6 8.1-3.4-1.3-6-4.1-6-8.1V4.5l6-2.2z" />
    <path d="M7.4 9.6l1.8 1.8 3.4-3.6" />
  </svg>,
  // Define — document
  <svg key="doc" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
    <path d="M5 2h7l4 4v12H5V2z" />
    <path d="M12 2v4h4" />
    <path d="M7.4 11h5.2M7.4 14h5.2" />
  </svg>,
  // Write stories — checklist
  <svg key="checklist" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
    <rect x="3" y="4" width="2" height="2" fill="currentColor" stroke="none" />
    <rect x="3" y="9" width="2" height="2" fill="currentColor" stroke="none" />
    <rect x="3" y="14" width="2" height="2" fill="currentColor" stroke="none" />
    <path d="M8 5h9M8 10h9M8 15h9" />
  </svg>,
  // Refine — loop
  <svg key="refresh" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
    <path d="M4.2 10.4a6 6 0 1 1 1.9 4.6" />
    <path d="M3 12.3l1.1 2.9 2.9-.9" />
  </svg>,
  // Build — code
  <svg key="code" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
    <path d="M7 5.3l-5 4.7 5 4.7" />
    <path d="M13 5.3l5 4.7-5 4.7" />
  </svg>,
  // Ship & document — rocket
  <svg key="rocket" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
    <path d="M10 2.3c2.8 1 3.8 3.8 3.8 6.6 0 2-.9 3-.9 3H7.1s-.9-1-.9-3c0-2.8 1-5.6 3.8-6.6z" />
    <circle cx="10" cy="8" r="1.25" />
    <path d="M7.1 12.9l-1.8 3.6M12.9 12.9l1.8 3.6M8.4 16.9h3.2" />
  </svg>,
]

export default function AiLifecycle() {
  const { eyebrow, title, subtitle, stages, summary } = aiLifecycle

  return (
    <section id="ai-workflow" className="border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/5 px-3 py-1 text-xs font-medium text-[#7C3AED] dark:border-[#8B5CF6]/25 dark:bg-[#8B5CF6]/10 dark:text-[#A78BFA]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]" />
          {eyebrow}
        </p>

        <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#16161d] dark:text-white">{title}</h2>
        <p className="mt-3 max-w-2xl text-black/60 dark:text-white/60">{subtitle}</p>

        <div className="relative mt-14 pl-14 sm:pl-16">
          <div className="absolute top-1 bottom-1 left-5 w-px bg-[#8B5CF6]/20 dark:bg-[#8B5CF6]/25 sm:left-6" />

          <div className="space-y-10">
            {stages.map((stage, i) => (
              <div key={stage.title} className="relative">
                <span className="absolute -left-14 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[#7C3AED] shadow-sm dark:border-white/15 dark:bg-[#141319] dark:text-[#A78BFA] sm:-left-16">
                  {ICONS[i]}
                </span>

                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="font-display text-xl font-bold text-[#16161d] dark:text-white">{stage.title}</h3>
                  <span className="font-plex text-xs text-black/35 dark:text-white/35">
                    {i + 1} / {stages.length}
                  </span>
                </div>

                <p className="mt-1.5 max-w-xl text-[15px] leading-relaxed text-black/65 dark:text-white/65">{stage.body}</p>

                <div className="mt-2.5 flex max-w-xl items-start gap-2 rounded-lg border border-[#8B5CF6]/15 bg-[#8B5CF6]/5 px-3 py-2 dark:border-[#8B5CF6]/20 dark:bg-[#8B5CF6]/10">
                  <span className="font-plex shrink-0 text-xs text-[#7C3AED] dark:text-[#A78BFA]">→</span>
                  <p className="font-plex text-[12.5px] leading-relaxed text-[#6D28D9] dark:text-[#C4B5FD]">{stage.edge}</p>
                </div>

                {stage.verify && (
                  <div className="mt-2 flex max-w-xl items-start gap-2 px-3">
                    <span className="font-plex shrink-0 text-xs text-black/40 dark:text-white/40">✓</span>
                    <p className="font-plex text-[12.5px] leading-relaxed text-black/40 dark:text-white/40">{stage.verify}</p>
                  </div>
                )}

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {stage.chips.map((c) => (
                    <span
                      key={c}
                      className="font-plex rounded-full border border-black/10 px-2.5 py-1 text-[11px] text-black/50 dark:border-white/15 dark:text-white/50"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                {stage.stat && (
                  <div className="mt-3 inline-flex items-baseline gap-2.5 rounded-xl border border-black/10 px-3.5 py-2.5 dark:border-white/15">
                    <span className="font-display text-xl font-extrabold text-[#7C3AED] dark:text-[#A78BFA]">{stage.stat.value}</span>
                    <span className="text-xs text-black/55 dark:text-white/55">{stage.stat.label}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-black/5 pt-10 dark:border-white/10 sm:grid-cols-4">
          {summary.map((s) => (
            <div key={s.label}>
              <div className="font-display text-2xl font-extrabold text-[#16161d] dark:text-white">{s.value}</div>
              <div className="mt-1 text-xs leading-snug text-black/55 dark:text-white/55">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
