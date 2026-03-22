// app/(site)/about/page.tsx  — ABOUT PAGE

const C = {
  crimson:      '#C0392B',
  crimsonLight: '#FAEAE8',
  crimsonDark:  '#8B1F15',
  burgundy:     '#6B2737',
  burgundyLight:'#F2E8EA',
  charcoal:     '#1E1E2E',
  warmBg:       '#FDF8F6',
  surface:      '#FFFFFF',
  border:       '#E8E5E2',
  muted:        '#57534E',
  subtle:       '#A8A29E',
  stone100:     '#F5F4F2',
  stone200:     '#E8E5E2',
  amber:        '#FAEEDA',
  amberDark:    '#633806',
}

export const metadata = {
  title: 'About — Naijeria Toweett',
  description: 'Systems architect, fractional product CTO, and founder of Mama Tech / TichLabs.',
}

export default function AboutPage() {
  return (
    <div style={{ background: C.warmBg, minHeight: '100vh' }}>
      <div className="page-container py-12">

        {/* ── Eyebrow ── */}
        <p style={{ fontSize: '11px', fontWeight: '500', color: C.crimson, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '2.5rem' }}>About</p>

        {/* PROFILE CARD */}
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '2.5rem', alignItems: 'start', marginBottom: '4rem' }}>

          {/* Left — photo card */}
          <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: '18px', overflow: 'hidden' }}>

            {/* Photo placeholder */}
            <div style={{ position: 'relative', aspectRatio: '3/4', background: '#FBF4F1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', border: `2px dashed #EDE5E1` }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="1.2">
                <rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/>
                <path d="M6 21c0-3.314 2.686-6 6-6s6 2.686 6 6"/>
              </svg>
              <span style={{ fontSize: '10px', color: '#C4A882', textTransform: 'uppercase', letterSpacing: '0.07em', textAlign: 'center', lineHeight: 1.6 }}>
                Headshot<br />400×500px min<br />/public/images/<br />naijeria-profile.jpg
              </span>
            </div>

            {/* Meta */}
            <div style={{ padding: '1.25rem' }}>
              <p style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '1.25rem', color: C.charcoal, marginBottom: '3px' }}>Naijeria Toweett</p>
              <p style={{ fontSize: '12px', fontWeight: '500', color: C.crimson, marginBottom: '1rem' }}>Founder, Mama Tech / TichLabs</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {[
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/naijeriatoweett/' },
                  { label: 'GitHub',   href: 'https://github.com/nashthecoder' },
                  { label: 'YouTube',  href: 'https://youtube.com/' },
                  { label: 'X',        href: 'https://x.com/NaijeriaToweett' },
                ].map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: '11px', padding: '3px 10px', borderRadius: '100px', border: `1px solid ${C.border}`, color: C.muted, textDecoration: 'none', display: 'inline-block' }}>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem', paddingTop: '0.25rem' }}>

            {/* Pull quote */}
            <p style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '1.5rem', color: C.charcoal, lineHeight: 1.3, letterSpacing: '-0.015em' }}>
              I&apos;ve spent 20+ years at the intersection of technology, communications,
              and <em style={{ color: C.crimson, fontStyle: 'italic' }}>social impact.</em>
            </p>

            {/* Body */}
            <p style={{ fontSize: '14.5px', color: C.muted, lineHeight: 1.8 }}>
              Today I work as a Systems Architect and Fractional Product CTO, helping impact-sector
              organisations go from problem definition to shipped product — fast, sustainably, and
              without vendor lock-in. I specialise in the gap most consultants avoid: the messy middle
              between "we have a great idea" and "we have a working product that users trust."
            </p>

            <p style={{ fontSize: '14.5px', color: C.muted, lineHeight: 1.8 }}>
              I&apos;m the founder of <strong style={{ fontWeight: '500', color: C.charcoal }}>Mama Tech / TichLabs</strong> — a feminist tech studio
              building DADA, a menopause companion designed specifically for African women, and
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
                  <p style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '2rem', color: C.crimson, lineHeight: 1, marginBottom: '4px' }}>{n}</p>
                  <p style={{ fontSize: '11px', color: C.subtle, lineHeight: 1.4 }}>{l}</p>
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
                <span key={text} style={{ fontSize: '11px', fontWeight: '500', padding: '5px 13px', borderRadius: '100px', background: bg, color: fg }}>
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* WHAT I DO */}
        <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: '3.5rem', marginBottom: '3.5rem' }}>
          <h2 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '1.9rem', color: C.charcoal, letterSpacing: '-0.02em', marginBottom: '2rem' }}>
            What I do
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '12px' }}>
            {[
              { title: 'Fractional Product CTO',    desc: 'Strategic product and tech leadership for impact-sector orgs that need senior direction without full-time overhead.' },
              { title: 'MVP Architecture & Build',  desc: 'From problem definition to deployed prototype. Specialising in DPG-aligned, open-source stacks that teams can own.' },
              { title: 'DPI / DPG Advisory',        desc: 'Open-source strategy, interoperability design, and digital public infrastructure for governments and NGOs.' },
              { title: 'Co-design Facilitation',    desc: 'Multi-stakeholder workshops, user journey mapping, and participatory design for complex civic and health platforms.' },
              { title: 'FemTech & SRHR Tech',       desc: 'Specialist experience building safe, evidence-based digital health platforms designed for and with African women.' },
              { title: 'Technical Documentation',   desc: 'Product docs, developer onboarding, community playbooks, and knowledge systems for open platforms.' },
            ].map(({ title, desc }) => (
              <div key={title} style={{ borderLeft: `2px solid ${C.crimson}`, paddingLeft: '1rem', paddingTop: '0.1rem' }}>
                <p style={{ fontSize: '13.5px', fontWeight: '500', color: C.charcoal, marginBottom: '5px' }}>{title}</p>
                <p style={{ fontSize: '12.5px', color: C.muted, lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: '16px', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '1.5rem', color: C.charcoal, marginBottom: '0.5rem' }}>
            Let&apos;s build something that lasts.
          </h3>
          <p style={{ fontSize: '14px', color: C.muted, marginBottom: '1.25rem', lineHeight: 1.65 }}>
            I work with impact-sector orgs, GovTech teams, and African startups who need a product leader who also ships code.
          </p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://quickjobs.naijeriatoweett.com/" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '13px', fontWeight: '500', padding: '0.6rem 1.4rem', borderRadius: '100px', background: C.crimson, color: '#fff', textDecoration: 'none' }}>
              Brief me on a project →
            </a>
            <a href="/cv"
              style={{ fontSize: '13px', padding: '0.6rem 1.35rem', borderRadius: '100px', border: `1px solid ${C.border}`, color: C.charcoal, textDecoration: 'none' }}>
              View my CV
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
