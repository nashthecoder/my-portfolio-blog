// app/(site)/services/page.tsx

const C = {
  crimson:      '#C0392B',
  crimsonLight: '#FAEAE8',
  crimsonDark:  '#8B1F15',
  burgundy:     '#6B2737',
  charcoal:     '#1E1E2E',
  warmBg:       '#FDF8F6',
  surface:      '#FFFFFF',
  border:       '#E8E5E2',
  muted:        '#57534E',
  stone100:     '#F5F4F2',
}

const SERVICES = [
  { title: 'Fractional Product CTO', desc: 'Strategic product and tech leadership for impact-sector orgs that need senior direction without full-time overhead.' },
  { title: 'MVP Architecture & Build', desc: 'From problem definition to deployed prototype. Specialising in DPG-aligned, open-source stacks that teams can own.' },
  { title: 'DPI / DPG Advisory', desc: 'Open-source strategy, interoperability design, and digital public infrastructure for governments and NGOs.' },
  { title: 'Co-design Facilitation', desc: 'Multi-stakeholder workshops, user journey mapping, and participatory design for complex civic and health platforms.' },
  { title: 'FemTech & SRHR Tech', desc: 'Specialist experience building safe, evidence-based digital health platforms designed for and with African women.' },
  { title: 'Technical Documentation', desc: 'Product docs, developer onboarding, community playbooks, and knowledge systems for open platforms.' },
]

export default function ServicesPage() {
  return (
    <div style={{ background: C.warmBg, minHeight: '100vh' }}>
      <div className="page-container py-12">

        <p style={{ fontSize:'18px', fontWeight:'500', color:C.crimson, textTransform:'uppercase', letterSpacing:'0.09em', marginBottom:'0.4rem' }}>Services</p>
        <h1 style={{ fontFamily:'"DM Serif Display",Georgia,serif', fontSize:'2.5rem', color:C.charcoal, letterSpacing:'-0.025em', marginBottom:'0.5rem' }}>How I work with you</h1>
        <p style={{ fontSize:'20px', color:C.muted, marginBottom:'3rem', lineHeight:1.7, maxWidth:'52ch' }}>
          Fractional, embedded, or advisory — depending on what you need. All rooted in co-creation from design to launch.
        </p>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,minmax(0,1fr))', gap:'12px', marginBottom:'3rem' }}>
          {SERVICES.map(({ title, desc }) => (
            <div key={title} style={{ padding:'1.25rem 1.25rem 1.25rem 1.1rem', background:C.surface, borderRadius:'0 12px 12px 0', border:`1px solid ${C.border}`, borderLeft:`3px solid ${C.crimson}` }}>
              <p style={{ fontSize:'18px', fontWeight:'500', color:C.charcoal, marginBottom:'6px' }}>{title}</p>
              <p style={{ fontSize:'17px', color:C.muted, lineHeight:1.65, margin:0 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background:C.crimsonLight, border:'1px solid #F5C4BE', borderRadius:'16px', padding:'2rem', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'1.5rem', flexWrap:'wrap' }}>
          <div>
            <p style={{ fontSize:'20px', fontWeight:'500', color:C.crimsonDark, marginBottom:'4px' }}>Ready to work together?</p>
            <p style={{ fontSize:'18px', color:C.muted, margin:0, lineHeight:1.6 }}>Tell me what you&apos;re building. I&apos;ll tell you how I can help.</p>
          </div>
          <a href="https://quickjobs.naijeriatoweett.com/" target="_blank" rel="noopener noreferrer"
            style={{ fontSize:'17px', fontWeight:'500', padding:'0.65rem 1.5rem', borderRadius:'100px', background:C.crimson, color:'#fff', textDecoration:'none', flexShrink:0 }}>
            Brief me on a project →
          </a>
        </div>

      </div>
    </div>
  )
}
