// app/(site)/page.tsx  — HOMEPAGE
// All colours hardcoded. No Tailwind colour tokens — exact hex throughout.

import Image from 'next/image'
import Link from 'next/link'
import { getFeaturedCaseStudies } from '@/sanity/sanity-utils'

// ── Brand constants ──────────────────────────────────────────────────────────
const C = {
  crimson:     '#C0392B',
  crimsonMid:  '#E8554A',
  crimsonLight:'#FAEAE8',
  crimsonDark: '#8B1F15',
  burgundy:    '#6B2737',
  burgundyLight:'#F2E8EA',
  charcoal:    '#1E1E2E',
  warmBg:      '#FDF8F6',
  surface:     '#FFFFFF',
  border:      '#E8E5E2',
  text:        '#1E1E2E',
  muted:       '#57534E',
  subtle:      '#A8A29E',
  stone100:    '#F5F4F2',
  stone200:    '#E8E5E2',
}

const ORGS = ['World Bank','Girl Effect','NAILAB','DHCK Alliance','OpenFN','Africa Media Trust','HURIDOCS']

// Fallback projects if Sanity not yet populated
const FALLBACK_PROJECTS = [
  {
    _id: '1', title: 'NairobiTalks', client: 'World Bank · Nairobi County Gov',
    sector: 'govtech', summary: 'Civic platform co-designed with citizens and officials in 1.5 days. OpenFn-ready architecture.',
    impact_metric: '1.5 days to prototype', tags: ['DPI','Co-design','Rails','World Bank'],
    external_url: 'https://mamatechafrica.github.io/NairobiTalks-NCG/', live_url: null,
    screenshot_label: 'NairobiTalks dashboard — 1200×675px',
  },
  {
    _id: '2', title: 'AskRafikey', client: 'Digital Health Coalition of Kenya',
    sector: 'healthtech', summary: "Kenya's first AI-driven SRHR chatbot. 5 rounds co-design, zero vendor lock-in.",
    impact_metric: '5 rounds · 20 testers', tags: ['AI','SRHR','DPI','Open source'],
    external_url: 'https://rafikey-portfolio.lovable.app/', live_url: 'https://askrafikey.com/',
    screenshot_label: 'AskRafikey chat interface — 1200×675px',
  },
  {
    _id: '3', title: 'Mama Tech Teaches', client: 'Mama Tech',
    sector: 'education', summary: 'Build. Belong. Become. Learning community for women stepping into tech as builders.',
    impact_metric: 'Build from day one', tags: ['EdTech','Women in Tech','AI learning'],
    external_url: 'https://mt-teaches.lovable.app/', live_url: 'https://mt-teaches.lovable.app/',
    screenshot_label: 'Mama Tech Teaches screenshot — 1200×675px',
  },
  {
    _id: '4', title: 'Njiapanda', client: 'TichLabs',
    sector: 'civic', summary: 'Product and UX lead — design, decisions, and direction across web and mobile.',
    impact_metric: null, tags: ['Product','UX lead','Mobile'],
    external_url: 'https://tich-labs.github.io/njiapanda-case-study/', live_url: null,
    screenshot_label: 'Njiapanda screenshot — 1200×675px',
  },
  {
    _id: '5', title: 'DADA', client: 'Mama Tech / TichLabs',
    sector: 'femtech', summary: 'Menopause companion designed for African women. Culturally grounded, AI-powered.',
    impact_metric: 'In development', tags: ['FemTech','AI companion',"Women's health"],
    external_url: null, live_url: null,
    screenshot_label: 'DADA brand image — 1200×675px',
  },
]

const SECTOR: Record<string, { bg: string; fg: string; label: string }> = {
  govtech:    { bg: '#FAEAE8', fg: '#8B1F15', label: 'GovTech · DPI' },
  healthtech: { bg: '#F2E8EA', fg: '#3D1520', label: 'HealthTech · SRHR' },
  education:  { bg: '#F5F4F2', fg: '#2E2E42', label: 'EdTech · Women in Tech' },
  civic:      { bg: '#EEF4FB', fg: '#0C447C', label: 'Civic Tech' },
  femtech:    { bg: '#F2E8EA', fg: '#6B2737', label: 'FemTech' },
}

export default async function HomePage() {
  let projects = []
  try { projects = await getFeaturedCaseStudies() } catch {}
  if (!projects.length) projects = FALLBACK_PROJECTS as any

  return (
    <>
      {/* ════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════ */}
      <section className="page-container pt-10 pb-6">
        <div className="hero-grid">
          {/* Left — text */}
          <div style={{ background: C.surface, padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.1rem' }}>

            {/* Eyebrow pills */}
            <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap' }}>
              {[
                { label: 'Systems architect',      bg: C.crimsonLight, fg: C.crimsonDark },
                { label: 'Fractional product CTO', bg: C.burgundyLight, fg: C.burgundy },
                { label: 'FemTech founder',         bg: C.stone100,     fg: C.muted },
              ].map(({ label, bg, fg }) => (
                <span key={label} style={{ fontSize: '11px', fontWeight: '500', padding: '3px 11px', borderRadius: '100px', background: bg, color: fg }}>
                  {label}
                </span>
              ))}
            </div>

            {/* Headline */}
            <h1 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 'clamp(1.9rem,4vw,2.6rem)', lineHeight: 1.1, letterSpacing: '-0.025em', color: C.charcoal }}>
              Building Africa&apos;s<br />
              <span style={{ color: C.crimson }}>digital infrastructure</span><br />
              for impact.
            </h1>

            {/* Subtitle */}
            <p style={{ fontSize: '15px', color: C.muted, lineHeight: 1.75, maxWidth: '40ch' }}>
              I architect and ship open-source, interoperable platforms — from DPG-aligned government
              systems to feminist healthtech. Founder of Mama Tech&nbsp;/&nbsp;TichLabs. Creator of DADA.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a href="https://quickjobs.naijeriatoweett.com/" target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '13px', fontWeight: '500', padding: '0.55rem 1.3rem', borderRadius: '100px', background: C.crimson, color: '#fff', display: 'inline-block', textDecoration: 'none' }}>
                Brief me on a project →
              </a>
              <a href="/cv"
                style={{ fontSize: '13px', padding: '0.55rem 1.25rem', borderRadius: '100px', background: 'transparent', color: C.charcoal, border: `1px solid ${C.border}`, display: 'inline-block', textDecoration: 'none' }}>
                Download CV
              </a>
            </div>

            {/* Availability */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '12px', fontWeight: '500', color: C.crimson }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: C.crimsonMid, display: 'inline-block', animation: 'pulse 2s ease-in-out infinite' }} />
              Available for consulting · Nairobi, Kenya
            </div>
          </div>

          {/* Right — photo */}
          <div style={{ background: '#FBF4F1', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '2rem' }}>
            <div style={{ width: '160px', height: '213px', borderRadius: '12px', background: C.stone200, border: `2px dashed #D6D3D0`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '1rem', textAlign: 'center' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A8A29E" strokeWidth="1.2">
                <rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/>
                <path d="M6 21c0-3.314 2.686-6 6-6s6 2.686 6 6"/>
              </svg>
              <span style={{ fontSize: '10px', color: '#A8A29E', textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1.5 }}>
                Portrait photo<br />600×800px min<br />/public/images/<br />naijeria-hero.jpg
              </span>
            </div>

            {/* Floating tag chips */}
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {[
                { label: 'World Bank 2025', bg: C.crimsonLight, fg: C.crimsonDark },
                { label: 'OpenFn · DPI',    bg: C.burgundyLight, fg: C.burgundy },
                { label: 'DADA · FemTech',  bg: C.crimsonLight, fg: C.crimsonDark },
              ].map(({ label, bg, fg }) => (
                <span key={label} style={{ fontSize: '10px', fontWeight: '500', padding: '3px 10px', borderRadius: '100px', background: bg, color: fg }}>
                  {label}
                </span>
              ))}
            </div>

            {/* Name overlay */}
            <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem', background: 'rgba(30,30,46,0.7)', backdropFilter: 'blur(6px)', borderRadius: '10px', padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ color: '#fff', fontSize: '13px', fontWeight: '500', margin: 0 }}>Naijeria Toweett</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', margin: 0 }}>Systems Architect · Mama Tech Founder</p>
              </div>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px' }}>Nairobi, KE</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          LOGO STRIP
      ════════════════════════════════════════════════ */}
      <section className="page-container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', padding: '1.1rem 0', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
          <span style={{ fontSize: '11px', fontWeight: '500', letterSpacing: '0.07em', textTransform: 'uppercase', color: C.subtle }}>Worked with</span>
          {ORGS.map(org => (
            <span key={org} style={{ fontSize: '12px', padding: '4px 12px', borderRadius: '6px', border: `1px solid ${C.border}`, color: C.muted, background: C.surface }}>
              {org}
            </span>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          WORK — PROJECT GRID
      ════════════════════════════════════════════════ */}
      <section className="page-container py-12">
        <p style={{ fontSize: '11px', fontWeight: '500', color: C.crimson, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '0.4rem' }}>Selected work</p>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
          <h2 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '2rem', color: C.charcoal, letterSpacing: '-0.02em' }}>Impact delivered</h2>
          <Link href="/work" style={{ fontSize: '13px', color: C.subtle, textDecoration: 'none' }}>All projects →</Link>
        </div>
        <p style={{ fontSize: '14px', color: C.muted, marginBottom: '2rem', lineHeight: 1.65 }}>From prototype in 1.5 days to multi-country platform deployments.</p>

        {/* Project grid */}
        <div className="projects-grid">
          {projects.slice(0,3).map((p: any) => {
            const s = SECTOR[p.sector] ?? { bg: C.stone100, fg: C.muted, label: 'Project' }
            return (
              <article key={p._id}
                style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s, transform 0.2s' }}>

                {/* Screenshot / placeholder */}
                <div style={{ position: 'relative', aspectRatio: '16/9', background: '#FBF4F1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="1.2">
                    <rect x="3" y="3" width="18" height="18" rx="3"/><polyline points="3 9 21 9"/><line x1="9" y1="21" x2="9" y2="9"/>
                  </svg>
                  <span style={{ fontSize: '10px', color: '#C4A882', textTransform: 'uppercase', letterSpacing: '0.06em', textAlign: 'center', lineHeight: 1.5, padding: '0 1rem' }}>
                    {p.screenshot_label || `${p.title} · 1200×675px`}
                  </span>
                  {/* Sector badge */}
                  <span style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '10px', fontWeight: '500', padding: '3px 9px', borderRadius: '100px', background: s.bg + 'EE', color: s.fg }}>
                    {s.label}
                  </span>
                </div>

                {/* Body */}
                <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                  {p.client && <p style={{ fontSize: '11px', color: C.subtle, margin: 0 }}>{p.client}</p>}
                  <h3 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '1.05rem', color: C.charcoal, margin: 0, lineHeight: 1.2 }}>{p.title}</h3>
                  {p.summary && <p style={{ fontSize: '12.5px', color: C.muted, lineHeight: 1.55, margin: 0, flex: 1 }}>{p.summary}</p>}
                  {p.impact_metric && (
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '11px', fontWeight: '500', padding: '4px 10px', background: C.stone100, borderRadius: '6px', color: C.muted, width: 'fit-content' }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: C.crimsonMid, flexShrink: 0 }} />
                      {p.impact_metric}
                    </div>
                  )}
                  {/* Tags */}
                  {p.tags?.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                      {p.tags.slice(0,4).map((t: string) => (
                        <span key={t} style={{ fontSize: '10px', fontWeight: '500', padding: '2px 8px', borderRadius: '100px', background: s.bg, color: s.fg }}>{t}</span>
                      ))}
                    </div>
                  )}
                  {/* CTAs */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '6px', borderTop: `1px solid ${C.stone200}`, marginTop: 'auto' }}>
                    {p.external_url && (
                      <a href={p.external_url} target="_blank" rel="noopener noreferrer"
                        style={{ fontSize: '12px', fontWeight: '500', color: C.crimson, textDecoration: 'none' }}>
                        Read full case study →
                      </a>
                    )}
                    {p.live_url && (
                      <a href={p.live_url} target="_blank" rel="noopener noreferrer"
                        style={{ fontSize: '11px', color: C.subtle, textDecoration: 'none' }}>
                        Live product ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* See all */}
        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <Link href="/work"
            style={{ fontSize: '13px', fontWeight: '500', padding: '0.55rem 1.5rem', borderRadius: '100px', border: `1px solid ${C.border}`, color: C.charcoal, display: 'inline-block', textDecoration: 'none' }}>
            See all 5 projects
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SPRINT CTA BANNER
      ════════════════════════════════════════════════ */}
      <section className="page-container pb-12">
        <div style={{ background: C.crimsonLight, border: `1px solid #F5C4BE`, borderRadius: '16px', padding: '1.75rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '14px', fontWeight: '500', color: C.crimsonDark, marginBottom: '4px' }}>Product sprint · 3–5 days · $250–400</p>
            <p style={{ fontSize: '14px', color: '#57534E', margin: 0, lineHeight: 1.6 }}>
              You&apos;ve launched. Users sign up. Then nothing. Let&apos;s fix that together.
            </p>
          </div>
          <a href="https://quickjobs.naijeriatoweett.com/" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '13px', fontWeight: '500', padding: '0.6rem 1.4rem', borderRadius: '100px', background: C.crimson, color: '#fff', textDecoration: 'none', flexShrink: 0 }}>
            Apply for a sprint →
          </a>
        </div>
      </section>

      {/* Pulse animation */}
      <style>{`@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.8)} }`}</style>
    </>
  )
}
