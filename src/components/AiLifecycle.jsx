import { useRef, useState } from 'react'
import { aiLifecycle } from '../data/content'

const CX = 500
const CY = 500
const RING = 365
const PETAL_R = 120
const GATE_COLOR = '#c44536'
const STOPS = ['#197278', '#52796f', '#354f52', '#772e25']

const mix = (a, b, pct) => `color-mix(in oklab, ${a} ${100 - pct}%, ${b} ${pct}%)`
const petalColor = (t) => {
  const x = t * (STOPS.length - 1)
  const i = Math.min(Math.floor(x), STOPS.length - 2)
  return mix(STOPS[i], STOPS[i + 1], (x - i) * 100)
}

const a = PETAL_R / Math.SQRT2
const d = PETAL_R * Math.SQRT2
const TEAR = `M0 ${d.toFixed(2)} L${a.toFixed(2)} ${a.toFixed(2)} A${PETAL_R} ${PETAL_R} 0 1 0 -${a.toFixed(2)} ${a.toFixed(2)} Z`

const ICONS = [
  <>
    <path d="M10 2.5l7 4-7 4-7-4 7-4z" />
    <path d="M3 10.2l7 4 7-4" />
    <path d="M3 14.2l7 4 7-4" />
  </>,
  <>
    <path d="M3 4.5h14v9H8.3l-3.8 2.8v-2.8H3v-9z" />
    <circle cx="7.2" cy="8.9" r=".6" fill="currentColor" stroke="none" />
    <circle cx="10.3" cy="8.9" r=".6" fill="currentColor" stroke="none" />
    <circle cx="13.4" cy="8.9" r=".6" fill="currentColor" stroke="none" />
  </>,
  <>
    <path d="M5 2.3v2.6M5 15.1v2.6M15 2.3v2.6M15 15.1v2.6M2.3 5h2.6M15.1 5h2.6M2.3 15h2.6M15.1 15h2.6" />
    <rect x="5" y="5" width="10" height="10" rx="1.2" />
  </>,
  <>
    <path d="M10 2.3l6 2.2v4.6c0 4-2.6 6.8-6 8.1-3.4-1.3-6-4.1-6-8.1V4.5l6-2.2z" />
    <path d="M7.4 9.6l1.8 1.8 3.4-3.6" />
  </>,
  <>
    <path d="M5 2h7l4 4v12H5V2z" />
    <path d="M12 2v4h4" />
    <path d="M7.4 11h5.2M7.4 14h5.2" />
  </>,
  <>
    <rect x="3" y="4" width="2" height="2" fill="currentColor" stroke="none" />
    <rect x="3" y="9" width="2" height="2" fill="currentColor" stroke="none" />
    <rect x="3" y="14" width="2" height="2" fill="currentColor" stroke="none" />
    <path d="M8 5h9M8 10h9M8 15h9" />
  </>,
  <>
    <path d="M4.2 10.4a6 6 0 1 1 1.9 4.6" />
    <path d="M3 12.3l1.1 2.9 2.9-.9" />
  </>,
  <>
    <path d="M7 5.3l-5 4.7 5 4.7" />
    <path d="M13 5.3l5 4.7-5 4.7" />
  </>,
  <>
    <path d="M10 2.3c2.8 1 3.8 3.8 3.8 6.6 0 2-.9 3-.9 3H7.1s-.9-1-.9-3c0-2.8 1-5.6 3.8-6.6z" />
    <circle cx="10" cy="8" r="1.25" />
    <path d="M7.1 12.9l-1.8 3.6M12.9 12.9l1.8 3.6M8.4 16.9h3.2" />
  </>,
]

function Icon({ i }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[i]}
    </svg>
  )
}

const pad = (n) => String(n).padStart(2, '0')

export default function AiLifecycle() {
  const { eyebrow, title, subtitle, stages, summary } = aiLifecycle
  const n = stages.length
  const [sel, setSel] = useState(0)
  const [hov, setHov] = useState(null)
  const [touched, setTouched] = useState(false)
  const btnRefs = useRef([])

  let aiIndex = 0
  const items = stages.map((s, i) => {
    const color = s.gate ? GATE_COLOR : petalColor(aiIndex++ / (n - 2))
    const th = ((-90 + (360 / n) * i) * Math.PI) / 180
    return {
      ...s,
      color,
      px: CX + RING * Math.cos(th),
      py: CY + RING * Math.sin(th),
      rot: (th * 180) / Math.PI + 90,
    }
  })

  const select = (i) => {
    setSel(i)
    setTouched(true)
  }

  const onKeyDown = (e, i) => {
    let to = null
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') to = (i + 1) % n
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') to = (i - 1 + n) % n
    if (to !== null) {
      e.preventDefault()
      select(to)
      btnRefs.current[to]?.focus()
    }
  }

  const cur = items[sel]
  const prev = items[(sel - 1 + n) % n]
  const next = items[(sel + 1) % n]

  return (
    <section id="ai-workflow" className="lc border-t border-[#283d3b]/5 dark:border-[#edddd4]/10">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#197278]/20 bg-[#197278]/5 px-3 py-1 text-xs font-medium text-[#197278] dark:border-[#84a98c]/25 dark:bg-[#84a98c]/10 dark:text-[#84a98c]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#c44536]" />
          {eyebrow}
        </p>

        <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#283d3b] dark:text-[#edddd4]">{title}</h2>
        <p className="mt-3 max-w-2xl text-[#283d3b]/60 dark:text-[#edddd4]/60">{subtitle}</p>

        <div className="lc-stage">
          <div className="lc-wheel-col">
            <div className="lc-wheel">
              <svg viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">
                <defs>
                  <clipPath id="lc-tear">
                    <path d={TEAR} />
                  </clipPath>
                  <filter id="lc-glow" filterUnits="userSpaceOnUse" x="-200" y="-200" width="400" height="450" colorInterpolationFilters="sRGB">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="b" />
                    <feColorMatrix in="b" type="matrix" values="1.35 0 0 0 .06  0 1.35 0 0 .06  0 0 1.35 0 .06  0 0 0 2.1 0" result="g" />
                    <feMerge>
                      <feMergeNode in="g" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="lc-drop" x="-10%" y="-10%" width="120%" height="125%">
                    <feDropShadow dx="0" dy="9" stdDeviation="9" floodColor="#0f1f1e" floodOpacity=".26" />
                  </filter>
                </defs>
                <g filter="url(#lc-drop)">
                  {items.map((s, i) => (
                    <g key={s.title} className="lc-bloom" style={{ animationDelay: `${i * 60}ms` }}>
                      <g
                        className={`lc-petal${i === sel ? ' on' : ''}${i === hov ? ' hov' : ''}`}
                        transform={`translate(${s.px.toFixed(2)} ${s.py.toFixed(2)}) rotate(${s.rot.toFixed(2)})`}
                      >
                        <g className="lc-pop" filter={i === sel ? 'url(#lc-glow)' : undefined}>
                          <path d={TEAR} style={{ fill: s.color }} />
                          <circle cx="0" cy={RING} r="243" fill="none" stroke="#000" strokeOpacity=".17" strokeWidth="95" clipPath="url(#lc-tear)" />
                        </g>
                      </g>
                    </g>
                  ))}
                </g>
              </svg>

              <div className="lc-hub">
                <div className="lc-hub-k">Backlog → release</div>
                <div className="lc-hub-big">
                  {n} stages
                  <span className="lc-hub-of">of AI PM lifecycle</span>
                </div>
                <div className="lc-hub-note">One Cursor project carries the context end to end.</div>
              </div>

              <div>
                {items.map((s, i) => (
                  <button
                    key={s.title}
                    ref={(el) => (btnRefs.current[i] = el)}
                    type="button"
                    className="lc-pbtn"
                    style={{ left: `${s.px / 10}%`, top: `${s.py / 10}%` }}
                    aria-pressed={i === sel}
                    aria-label={`Stage ${i + 1} of ${n}: ${s.title}`}
                    onClick={() => select(i)}
                    onMouseEnter={() => setHov(i)}
                    onMouseLeave={() => setHov(null)}
                    onFocus={() => setHov(i)}
                    onBlur={() => setHov(null)}
                    onKeyDown={(e) => onKeyDown(e, i)}
                  >
                    <span className="lc-num">{pad(i + 1)}</span>
                    <span className="lc-rule" />
                    <span className="lc-ttl">{s.title}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          <aside className="lc-panel" aria-live="polite">
            <div key={sel} className={`lc-pcontent${touched ? ' lc-swap' : ''}`}>
              <div className="lc-phead">
                <span className="lc-badge" style={{ background: cur.color }}>
                  <Icon i={sel} />
                </span>
                <span className="lc-step">
                  Stage {pad(sel + 1)} / {pad(n)}
                </span>
                {cur.gate && <span className="lc-gatepill">Human-only gate</span>}
              </div>
              <h3 className="lc-ptitle">{cur.title}</h3>
              <p className="lc-pbody">{cur.body}</p>
              <div className="lc-edge">
                <span>→</span>
                <p>{cur.edge}</p>
              </div>
              {cur.verify && (
                <div className="lc-verify">
                  <span>✓</span>
                  <p>{cur.verify}</p>
                </div>
              )}
              <div className="lc-chips">
                {cur.chips.map((c) => (
                  <span key={c} className="lc-chip">
                    {c}
                  </span>
                ))}
              </div>
              {cur.stat && (
                <div className="lc-stat">
                  <b>{cur.stat.value}</b>
                  <span>{cur.stat.label}</span>
                </div>
              )}
            </div>
            <div className="lc-nav">
              <button type="button" onClick={() => select((sel - 1 + n) % n)}>
                ←&nbsp;{prev.title}
              </button>
              <button type="button" onClick={() => select((sel + 1) % n)}>
                {next.title}&nbsp;→
              </button>
            </div>
          </aside>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-[#283d3b]/5 pt-10 dark:border-[#edddd4]/10 sm:grid-cols-4">
          {summary.map((s) => (
            <div key={s.label}>
              <div className="font-display text-2xl font-extrabold text-[#283d3b] dark:text-[#edddd4]">{s.value}</div>
              <div className="mt-1 text-xs leading-snug text-[#283d3b]/55 dark:text-[#edddd4]/55">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
