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
  amber:       '#FAEEDA',
  amberDark:   '#633806',
}

const ORGS = ['World Bank','Girl Effect','NAILAB','DHCK Alliance','HURIDOCS']

// Fallback projects if Sanity not yet populated
const FALLBACK_PROJECTS = [
  {
    _id: '1', title: 'NairobiTalks', client: 'World Bank · Nairobi County Gov',
    sector: 'govtech', summary: 'Co-designed with citizens, officials, and civil society in a 1.5-day World Bank sprint.',
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
    cta_label: 'Join the community →',
    cta_url: 'https://mt-teaches.lovable.app/',
  },
  {
    _id: '4', title: 'Njiapanda', client: 'TichLabs',
    sector: 'civic', summary: 'Product and UX lead — design, decisions, and direction across web and mobile.',
    impact_metric: null, tags: ['Product','UX lead','Mobile'],
    external_url: 'https://tich-labs.github.io/njiapanda-case-study/', live_url: 'https://njiapanda-v2.web.app/',
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
      <section className="page-container pt-10 pb-12">
        <div style={{
          background: C.surface,
          borderRadius: '18px',
          overflow: 'hidden',
          border: `1px solid ${C.border}`,
          padding: '3rem 2.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '1.1rem',
          marginBottom: '2rem',
        }}>
          {/* Eyebrow pills */}
          <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap' }}>
            {[
              { label: 'Systems architect',      bg: C.crimsonLight, fg: C.crimsonDark },
              { label: 'Fractional product CTO', bg: C.burgundyLight, fg: C.burgundy },
              { label: 'FemTech founder',         bg: C.stone100,     fg: C.muted },
            ].map(({ label, bg, fg }) => (
              <span key={label} style={{ fontSize: '18px', fontWeight: '500', padding: '3px 11px', borderRadius: '100px', background: bg, color: fg }}>
                {label}
              </span>
            ))}
          </div>

          {/* Headline */}
          <h1 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 'clamp(1.56rem,3.9vw,3.38rem)', lineHeight: 1.1, letterSpacing: '-0.025em', color: C.charcoal }}>
            Building Africa&apos;s <span style={{ color: C.crimson }}>digital infrastructure</span> for impact.
          </h1>

          {/* CTA */}
          <a href="/cv"
            style={{ fontSize: '17px', padding: '0.55rem 1.25rem', borderRadius: '100px', background: 'transparent', color: C.charcoal, border: `1px solid ${C.border}`, display: 'inline-block', textDecoration: 'none', width: 'fit-content' }}>
            Download CV
          </a>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          ABOUT / BIO SECTION
      ════════════════════════════════════════════════ */}
      <section className="page-container py-12">
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '2.5rem', alignItems: 'start' }}>

          {/* Left — photo card */}
          <div style={{ background: C.surface, borderRadius: '18px', overflow: 'hidden', border: `1px solid ${C.border}` }}>
            <div style={{ position: 'relative', aspectRatio: '3/4', borderRadius: '12px', overflow: 'hidden' }}>
              <Image src="/images/naijeria-profile.jpg" alt="Naijeria Toweett" fill sizes="280px" priority style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.25rem' }}>
              <p style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '1.6rem', color: C.charcoal, marginBottom: '3px' }}>Naijeria Toweett</p>
              <p style={{ fontSize: '16px', fontWeight: '500', color: C.crimson, marginBottom: '1rem' }}>Founder, Mama Tech / TichLabs</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {[
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/naijeriatoweett/' },
                  { label: 'GitHub',   href: 'https://github.com/nashthecoder' },
                  { label: 'YouTube', href: 'https://youtube.com/' },
                  { label: 'X',       href: 'https://x.com/NaijeriaToweett' },
                ].map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: '18px', padding: '3px 10px', borderRadius: '100px', border: `1px solid ${C.border}`, color: C.muted, textDecoration: 'none', display: 'inline-block' }}>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem', paddingTop: '0.5rem' }}>
            {/* Pull quote */}
            <p style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '2.6rem', color: C.charcoal, lineHeight: 1.3, letterSpacing: '-0.015em' }}>
              I&apos;ve spent 20+ years at the intersection of technology, communications,
              and <em style={{ color: C.crimson, fontStyle: 'italic' }}>social impact.</em>
            </p>

            {/* Body */}
            <p style={{ fontSize: '19px', color: C.muted, lineHeight: 1.8 }}>
              Today I work as a Systems Architect and Fractional Product CTO, helping impact-sector
              organisations go from problem definition to shipped product — fast, sustainably, and
              without vendor lock-in.
            </p>

            <p style={{ fontSize: '19px', color: C.muted, lineHeight: 1.8 }}>
              I architect and ship open-source, interoperable platforms: from DPG-aligned government
              systems to feminist healthtech. I specialise in the messy middle most consultants avoid —
              between &ldquo;we have a great idea&rdquo; and &ldquo;we have a working product that users trust.&rdquo;
            </p>

            <p style={{ fontSize: '19px', color: C.muted, lineHeight: 1.8 }}>
              I&apos;m the founder of <strong style={{ fontWeight: '500', color: C.charcoal }}>Mama Tech / TichLabs</strong> — a feminist tech studio
              building DADA, a menopause companion for African women, and
              Mama Tech Teaches, a learning community where women build from day one.
            </p>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px' }}>
              {[
                { n: '20+', l: 'Years in impact sector' },
                { n: '8+',  l: 'Countries reached' },
                { n: 'DPG', l: 'Open source advocate' },
              ].map(({ n, l }) => (
                <div key={n} style={{ background: C.stone100, borderRadius: '12px', padding: '1rem' }}>
                  <p style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '2.6rem', color: C.crimson, lineHeight: 1, marginBottom: '4px' }}>{n}</p>
                  <p style={{ fontSize: '18px', color: C.subtle, lineHeight: 1.4 }}>{l}</p>
                </div>
              ))}
            </div>

            {/* Credential badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
              {[
                { text: 'World Bank Civic Residency 2025', bg: C.crimsonLight, fg: C.crimsonDark },
                { text: 'Women in GovTech',               bg: C.burgundyLight, fg: C.burgundy },
                { text: 'Friendly.rb 2023 Speaker',        bg: C.amber,         fg: C.amberDark },
                { text: 'GitHub Tech for Social Good',     bg: C.crimsonLight, fg: C.crimsonDark },
              ].map(({ text, bg, fg }) => (
                <span key={text} style={{ fontSize: '18px', fontWeight: '500', padding: '5px 13px', borderRadius: '100px', background: bg, color: fg }}>
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════
            WHAT I DO
        ════════════════════════════════════════════════ */}
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: '18px', padding: '2.5rem', marginTop: '3.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '2.5rem', color: C.charcoal, letterSpacing: '-0.02em', marginBottom: '2rem' }}>What I do</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '12px' }}>
            {[
              { title: 'Fractional Product CTO', desc: 'Strategic product and tech leadership for impact-sector orgs that need senior direction without full-time overhead.' },
              { title: 'MVP Architecture & Build', desc: 'From problem definition to deployed prototype. Specialising in DPG-aligned, open-source stacks that teams can own.' },
              { title: 'DPI / DPG Advisory', desc: 'Open-source strategy, interoperability design, and digital public infrastructure for governments and NGOs.' },
              { title: 'Co-design Facilitation', desc: 'Multi-stakeholder workshops, user journey mapping, and participatory design for complex civic and health platforms.' },
              { title: 'FemTech & SRHR Tech', desc: 'Specialist experience building safe, evidence-based digital health platforms designed for and with African women.' },
              { title: 'Technical Documentation', desc: 'Product docs, developer onboarding, community playbooks, and knowledge systems for open platforms.' },
            ].map(({ title, desc }) => (
              <div key={title} style={{ borderLeft: `2px solid ${C.crimson}`, paddingLeft: '1rem', paddingTop: '0.1rem' }}>
                <p style={{ fontSize: '18px', fontWeight: '500', color: C.charcoal, marginBottom: '5px' }}>{title}</p>
                <p style={{ fontSize: '16px', color: C.muted, lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          WORK — PROJECT GRID
      ════════════════════════════════════════════════ */}
      <section className="page-container pt-16 pb-12">
        <div style={{ border: `1px solid ${C.border}`, borderRadius: '18px', padding: '2.5rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: '18px', fontWeight: '500', color: C.crimson, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '0.4rem' }}>Selected work</p>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
            <h2 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '2.6rem', color: C.charcoal, letterSpacing: '-0.02em' }}>What I&apos;ve built</h2>
            <Link href="/work" style={{ fontSize: '17px', fontWeight: '500', color: C.crimson, textDecoration: 'none' }}>All projects →</Link>
          </div>
          <p style={{ fontSize: '18px', color: C.muted, marginBottom: '2rem', lineHeight: 1.65 }}>From co-design sprint to shipped product — built with the communities they serve.</p>

          {/* Project grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '14px' }}>
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
                    <span style={{ fontSize: '17px', color: '#C4A882', textTransform: 'uppercase', letterSpacing: '0.06em', textAlign: 'center', lineHeight: 1.5, padding: '0 1rem' }}>
                      {p.screenshot_label || `${p.title} · 1200×675px`}
                    </span>
                    {/* Sector badge */}
                    <span style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '17px', fontWeight: '500', padding: '3px 9px', borderRadius: '100px', background: s.bg + 'EE', color: s.fg }}>
                      {s.label}
                    </span>
                  </div>

                  {/* Body */}
                  <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                    {p.client && <p style={{ fontSize: '18px', color: C.subtle, margin: 0 }}>{p.client}</p>}
                    <h3 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '1.75rem', color: C.charcoal, margin: 0, lineHeight: 1.2 }}>{p.title}</h3>
                    {p.summary && <p style={{ fontSize: '16px', color: C.muted, lineHeight: 1.55, margin: 0, flex: 1 }}>{p.summary}</p>}
                    {p.impact_metric && (
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '18px', fontWeight: '500', padding: '4px 10px', background: C.stone100, borderRadius: '6px', color: C.muted, width: 'fit-content' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: C.crimsonMid, flexShrink: 0 }} />
                        {p.impact_metric}
                      </div>
                    )}
                    {/* Tags */}
                    {p.tags?.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                        {p.tags.slice(0,4).map((t: string) => (
                          <span key={t} style={{ fontSize: '17px', fontWeight: '500', padding: '2px 8px', borderRadius: '100px', background: s.bg, color: s.fg }}>{t}</span>
                        ))}
                      </div>
                    )}
                    {/* CTAs */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '6px', borderTop: `1px solid ${C.stone200}`, marginTop: 'auto' }}>
                      {p.cta_url ? (
                        <a href={p.cta_url} target="_blank" rel="noopener noreferrer"
                          style={{ fontSize: '12px', fontWeight: '500', color: C.crimson, textDecoration: 'none' }}>
                          {p.cta_label || 'Join the community →'}
                        </a>
                      ) : p.external_url && (
                        <a href={p.external_url} target="_blank" rel="noopener noreferrer"
                          style={{ fontSize: '12px', fontWeight: '500', color: C.crimson, textDecoration: 'none' }}>
                          Read full case study →
                        </a>
                      )}
                      {p.live_url && (
                        <a href={p.live_url} target="_blank" rel="noopener noreferrer"
                          style={{ fontSize: '18px', color: C.subtle, textDecoration: 'none' }}>
                          Live product ↗
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SPRINT CTA BANNER
      ════════════════════════════════════════════════ */}
      <section className="page-container pt-12 pb-12">
        <div style={{ background: '#FAEAE8', border: '1px solid #F5C4BE', borderRadius: '16px', padding: '2rem 2.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', maxWidth: '520px' }}>
            <p style={{ fontSize: '18px', fontWeight: '500', color: '#C0392B', textTransform: 'uppercase', letterSpacing: '0.09em', margin: 0 }}>
              Work with me
            </p>
            <p style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '1.75rem', color: '#1E1E2E', lineHeight: 1.25, margin: 0, letterSpacing: '-0.01em' }}>
              You launched. People signed up. Then went quiet.
            </p>
            <p style={{ fontSize: '18px', color: '#57534E', lineHeight: 1.7, margin: 0 }}>
              I run focused 3–5 day sprints where we find exactly where users are dropping off — and ship the fixes together before we&apos;re done. Not a report. Real changes, real fast.
            </p>
            <p style={{ fontSize: '12px', color: '#8B1F15', margin: 0, fontWeight: '500' }}>
              Typical investment: $250–400 · Limited spots available
            </p>
          </div>
          <a href="https://quickjobs.naijeriatoweett.com/" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '17px', fontWeight: '500', padding: '0.7rem 1.5rem', borderRadius: '100px', background: '#C0392B', color: '#fff', textDecoration: 'none', flexShrink: 0, whiteSpace: 'nowrap' }}>
            Apply for a sprint →
          </a>
        </div>
      </section>

      {/* Pulse animation */}
      <style>{`@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.8)} }`}</style>
    </>
  )
}
