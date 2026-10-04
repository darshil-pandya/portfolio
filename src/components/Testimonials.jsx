import { testimonials } from '../data/content'

const initials = (name) =>
  name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

function Quote({ text, highlight }) {
  const at = highlight ? text.indexOf(highlight) : -1
  if (at === -1) return text
  return (
    <>
      {text.slice(0, at)}
      <strong className="font-semibold text-[#283d3b] dark:text-[#edddd4]">{highlight}</strong>
      {text.slice(at + highlight.length)}
    </>
  )
}

export default function Testimonials() {
  const { title, subtitle, linkedinUrl, items } = testimonials

  return (
    <section id="testimonials" className="border-t border-[#283d3b]/5 dark:border-[#edddd4]/10">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#283d3b] dark:text-[#edddd4]">{title}</h2>
            <p className="mt-3 max-w-2xl text-[#283d3b]/60 dark:text-[#edddd4]/60">{subtitle}</p>
          </div>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-[#283d3b]/60 underline decoration-[#c44536] decoration-2 underline-offset-4 transition hover:text-[#197278] dark:text-[#edddd4]/60 dark:hover:text-[#84a98c]"
          >
            See all on LinkedIn ↗
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-[#283d3b]/8 bg-white p-6 shadow-sm dark:border-[#edddd4]/10 dark:bg-[#2f3e46]/70"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-[#197278]/40">
                <path d="M9.5 5C6 6.2 4 9 4 12.5V19h6.5v-6.5H7c0-2 .9-3.3 2.9-4.1L9.5 5zm10 0c-3.5 1.2-5.5 4-5.5 7.5V19h6.5v-6.5H17c0-2 .9-3.3 2.9-4.1L19.5 5z" />
              </svg>
              <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-[#283d3b]/65 dark:text-[#edddd4]/65">
                <Quote text={t.quote} highlight={t.highlight} />
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-[#283d3b]/5 pt-5 dark:border-[#edddd4]/10">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#197278]/10 text-sm font-semibold text-[#197278] dark:bg-[#84a98c]/15 dark:text-[#84a98c]">
                  {initials(t.name)}
                </span>
                <span>
                  <span className="block font-display text-sm font-bold text-[#283d3b] dark:text-[#edddd4]">{t.name}</span>
                  <span className="block text-xs text-[#283d3b]/50 dark:text-[#edddd4]/50">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
