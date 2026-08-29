import { sideProjects } from '../data/content'

const OWNER_ROWS = [
  { rank: 1, name: 'Darshil', pts: '1,284', color: '#38bdf8', medal: '🥇' },
  { rank: 2, name: 'Bhavya', pts: '1,211', color: '#e879f9' },
  { rank: 3, name: 'Prajin', pts: '1,198', color: '#2dd4bf' },
  { rank: 4, name: 'Sanket', pts: '1,143', color: '#fb923c' },
  { rank: 5, name: 'Hersh', pts: '1,087', color: '#a3e635' },
  { rank: 6, name: 'Jash', pts: '1,052', color: '#818cf8' },
  { rank: 7, name: 'Karan', pts: '984', color: '#fb7185' },
]

const NAV_ITEMS = ['Home', 'Teams', 'Match Center', 'Players', 'Waivers', 'Predictions', 'Rules']

export default function Projects() {
  return (
    <section id="projects" className="border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#16161d] dark:text-white">
          Side projects
        </h2>
        <p className="mt-3 max-w-2xl text-black/60 dark:text-white/60">
          Things I've designed and built end-to-end outside of work — product, data model, and code.
        </p>

        <div className="mt-10 space-y-10">
          {sideProjects.map((project) => (
            <IplCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function IplCard({ project }) {
  return (
    <div className="ipl-card">
      <style>{`
        .ipl-card {
          --ipl-font-display: 'Bebas Neue', sans-serif;
          --ipl-font-body: 'DM Sans', sans-serif;
          border-radius: 20px;
          border: 1px solid rgba(56,189,248,0.18);
          background: linear-gradient(135deg, #0c1428 0%, #090d1f 60%, #07091a 100%);
          box-shadow: 0 0 60px rgba(56,189,248,0.07), 0 24px 48px rgba(0,0,0,0.35);
          overflow: hidden;
          color: #e2e8f0;
          font-family: var(--ipl-font-body);
        }
        .ipl-preview {
          width: 100%;
          background: #050810;
          border-bottom: 1px solid rgba(56,189,248,0.12);
          padding: 1.25rem 1.5rem 0;
          position: relative;
          overflow: hidden;
        }
        .ipl-preview::before {
          content: '';
          position: absolute;
          top: -60px; left: 50%;
          transform: translateX(-50%);
          width: 500px; height: 200px;
          background: radial-gradient(ellipse, rgba(56,189,248,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .ipl-mock-nav { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.2rem; flex-wrap: wrap; }
        .ipl-mock-logo { font-family: var(--ipl-font-display); font-size: 1.3rem; color: #fff; letter-spacing: 0.05em; display: flex; align-items: center; gap: 0.4rem; }
        .ipl-mock-logo span { color: #fbbf24; }
        .ipl-mock-nav-links { display: flex; gap: 0.4rem; flex-wrap: wrap; }
        .ipl-mock-nav-link { font-size: 0.65rem; font-weight: 600; padding: 4px 10px; border-radius: 8px; color: #94a3b8; background: rgba(148,163,184,0.07); }
        .ipl-mock-nav-link.active { color: #fff; background: rgba(56,189,248,0.18); }
        .ipl-mock-body { display: grid; grid-template-columns: 1fr; gap: 1rem; padding-bottom: 1.25rem; }
        @media (min-width: 640px) { .ipl-mock-body { grid-template-columns: 1fr 1fr; } }
        .ipl-mock-leaderboard { display: flex; flex-direction: column; gap: 0.45rem; }
        .ipl-mock-section-label { font-size: 0.6rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #38bdf8; margin-bottom: 0.2rem; }
        .ipl-mock-row { display: flex; align-items: center; gap: 0.6rem; padding: 0.45rem 0.6rem; border-radius: 10px; background: rgba(15,23,42,0.6); border: 1px solid rgba(255,255,255,0.05); }
        .ipl-mock-rank { font-size: 0.6rem; font-weight: 700; color: #475569; width: 14px; text-align: center; }
        .ipl-mock-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
        .ipl-mock-owner-name { font-size: 0.65rem; font-weight: 600; flex: 1; }
        .ipl-mock-pts { font-size: 0.65rem; font-weight: 700; color: #38bdf8; font-variant-numeric: tabular-nums; }
        .ipl-mock-chart-wrap { display: flex; flex-direction: column; gap: 0.4rem; }
        .ipl-mock-chart { flex: 1; border-radius: 12px; border: 1px solid rgba(56,189,248,0.1); background: rgba(15,23,42,0.5); padding: 0.6rem; display: flex; flex-direction: column; gap: 0.4rem; min-height: 160px; position: relative; overflow: hidden; }
        .ipl-mock-chart svg { width: 100%; height: 100%; position: absolute; inset: 0.5rem; }
        .ipl-mock-performer-row { display: flex; gap: 0.45rem; }
        .ipl-mock-performer-card { flex: 1; border-radius: 10px; border: 1px solid rgba(56,189,248,0.12); background: rgba(15,23,42,0.7); padding: 0.5rem 0.6rem; }
        .ipl-mock-performer-match { font-size: 0.5rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #fbbf24; margin-bottom: 0.2rem; }
        .ipl-mock-performer-name { font-size: 0.62rem; font-weight: 700; color: #fff; }
        .ipl-mock-performer-pts { font-size: 0.58rem; font-weight: 700; color: #38bdf8; margin-top: 1px; }
        .ipl-content { padding: 2rem; }
        .ipl-project-meta { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.9rem; flex-wrap: wrap; }
        .ipl-project-tag { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #fbbf24; background: rgba(251,191,36,0.1); border: 1px solid rgba(251,191,36,0.25); border-radius: 99px; padding: 3px 10px; }
        .ipl-project-year { font-size: 0.7rem; color: #64748b; font-weight: 500; }
        .ipl-project-title { font-family: var(--ipl-font-display); font-size: 2.4rem; letter-spacing: 0.04em; color: #fff; line-height: 1; margin-bottom: 0.6rem; }
        .ipl-project-title span { color: #38bdf8; }
        .ipl-project-desc { font-size: 0.9rem; line-height: 1.65; color: #94a3b8; max-width: 640px; margin-bottom: 1.5rem; }
        .ipl-features { display: grid; grid-template-columns: 1fr; gap: 0.6rem; margin-bottom: 1.75rem; }
        @media (min-width: 640px) { .ipl-features { grid-template-columns: 1fr 1fr; } }
        .ipl-feature { display: flex; align-items: flex-start; gap: 0.5rem; padding: 0.7rem 0.9rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); background: rgba(15,23,42,0.4); }
        .ipl-feature-icon { font-size: 1rem; flex-shrink: 0; margin-top: 1px; }
        .ipl-feature-title { font-size: 0.75rem; font-weight: 700; color: #e2e8f0; }
        .ipl-feature-desc { font-size: 0.68rem; color: #64748b; line-height: 1.45; margin-top: 1px; }
        .ipl-stack-section { margin-bottom: 1.75rem; }
        .ipl-stack-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #475569; margin-bottom: 0.6rem; }
        .ipl-stack-pills { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .ipl-stack-pill { font-size: 0.7rem; font-weight: 600; padding: 4px 12px; border-radius: 99px; border: 1px solid rgba(148,163,184,0.15); background: rgba(148,163,184,0.06); color: #cbd5e1; }
        .ipl-stack-pill.highlight { border-color: rgba(56,189,248,0.3); background: rgba(56,189,248,0.08); color: #7dd3fc; }
        .ipl-ctas { display: flex; gap: 0.75rem; flex-wrap: wrap; }
        .ipl-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.65rem 1.5rem; border-radius: 12px; font-size: 0.85rem; font-weight: 700; text-decoration: none; transition: all 0.15s; cursor: pointer; }
        .ipl-btn-primary { background: #38bdf8; color: #020617; border: 1px solid #38bdf8; }
        .ipl-btn-primary:hover { background: #7dd3fc; border-color: #7dd3fc; }
        .ipl-btn-secondary { background: transparent; color: #94a3b8; border: 1px solid rgba(148,163,184,0.2); }
        .ipl-btn-secondary:hover { color: #e2e8f0; border-color: rgba(148,163,184,0.4); }
        .ipl-btn svg { width: 16px; height: 16px; }
      `}</style>

      <div className="ipl-preview">
        <div className="ipl-mock-nav">
          <div className="ipl-mock-logo">
            IPL <span>FANTASY</span>
          </div>
          <div className="ipl-mock-nav-links">
            {NAV_ITEMS.map((item, i) => (
              <div key={item} className={`ipl-mock-nav-link${i === 0 ? ' active' : ''}`}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="ipl-mock-body">
          <div className="ipl-mock-leaderboard">
            <div className="ipl-mock-section-label">Season Standings</div>
            {OWNER_ROWS.map((o) => (
              <div key={o.name} className="ipl-mock-row">
                <div className="ipl-mock-rank">{o.rank}</div>
                <div className="ipl-mock-dot" style={{ background: o.color }} />
                <div className="ipl-mock-owner-name" style={{ color: o.color }}>
                  {o.name}
                </div>
                <div className="ipl-mock-pts">{o.pts}</div>
                {o.medal && (
                  <div
                    className="ipl-mock-badge"
                    style={{
                      fontSize: '0.5rem',
                      fontWeight: 700,
                      padding: '2px 6px',
                      borderRadius: '99px',
                      background: 'rgba(56,189,248,0.15)',
                      color: '#38bdf8',
                    }}
                  >
                    {o.medal}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="ipl-mock-chart-wrap">
            <div className="ipl-mock-section-label">Points Over Time</div>
            <div className="ipl-mock-chart">
              <svg viewBox="0 0 240 130" preserveAspectRatio="none">
                <line x1="0" y1="32" x2="240" y2="32" stroke="rgba(148,163,184,0.06)" strokeWidth="1" />
                <line x1="0" y1="65" x2="240" y2="65" stroke="rgba(148,163,184,0.06)" strokeWidth="1" />
                <line x1="0" y1="98" x2="240" y2="98" stroke="rgba(148,163,184,0.06)" strokeWidth="1" />
                <polyline
                  points="10,118 40,102 70,88 100,74 130,58 160,44 190,30 220,18"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <polyline
                  points="10,120 40,108 70,95 100,82 130,70 160,56 190,44 220,32"
                  fill="none"
                  stroke="#e879f9"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  strokeDasharray="4,2"
                />
                <polyline
                  points="10,122 40,110 70,98 100,86 130,72 160,62 190,52 220,38"
                  fill="none"
                  stroke="#2dd4bf"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  strokeDasharray="4,2"
                />
                <polyline
                  points="10,124 40,114 70,104 100,92 130,82 160,72 190,64 220,54"
                  fill="none"
                  stroke="#fb923c"
                  strokeWidth="1"
                  strokeLinejoin="round"
                  strokeDasharray="3,3"
                  opacity="0.7"
                />
                <polyline
                  points="10,124 40,116 70,106 100,96 130,88 160,80 190,74 220,66"
                  fill="none"
                  stroke="#a3e635"
                  strokeWidth="1"
                  strokeLinejoin="round"
                  strokeDasharray="3,3"
                  opacity="0.7"
                />
                <circle cx="220" cy="18" r="3" fill="#38bdf8" />
              </svg>
            </div>
            <div className="ipl-mock-section-label" style={{ marginTop: '0.2rem' }}>
              Top Performers
            </div>
            <div className="ipl-mock-performer-row">
              <div className="ipl-mock-performer-card">
                <div className="ipl-mock-performer-match">MI vs RCB</div>
                <div className="ipl-mock-performer-name">V. Kohli</div>
                <div className="ipl-mock-performer-pts">94 pts · RCB</div>
              </div>
              <div className="ipl-mock-performer-card">
                <div className="ipl-mock-performer-match">CSK vs KKR</div>
                <div className="ipl-mock-performer-name">R. Jadeja</div>
                <div className="ipl-mock-performer-pts">87 pts · CSK</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ipl-content">
        <div className="ipl-project-meta">
          <div className="ipl-project-tag">{project.tag}</div>
          <div className="ipl-project-year">{project.status}</div>
        </div>

        <div className="ipl-project-title">
          IPL <span>Fantasy</span>
        </div>

        <p className="ipl-project-desc">{project.description}</p>

        <div className="ipl-features">
          {project.features.map((f) => (
            <div key={f.title} className="ipl-feature">
              <div className="ipl-feature-icon">{f.icon}</div>
              <div>
                <div className="ipl-feature-title">{f.title}</div>
                <div className="ipl-feature-desc">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="ipl-stack-section">
          <div className="ipl-stack-label">Tech Stack</div>
          <div className="ipl-stack-pills">
            {project.stack.map((s) => (
              <div key={s.name} className={`ipl-stack-pill${s.highlight ? ' highlight' : ''}`}>
                {s.name}
              </div>
            ))}
          </div>
        </div>

        <div className="ipl-ctas">
          <a className="ipl-btn ipl-btn-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            View Live App
          </a>
          <a className="ipl-btn ipl-btn-secondary" href={project.codeUrl} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
