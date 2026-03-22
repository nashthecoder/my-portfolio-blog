// app/(site)/ventures/page.tsx

const C = {
  crimson:      '#C0392B',
  crimsonMid:   '#E8554A',
  crimsonLight: '#FAEAE8',
  crimsonDark:  '#8B1F15',
  burgundy:     '#6B2737',
  burgundyLight:'#F2E8EA',
  burgundyDark: '#3D1520',
  charcoal:     '#1E1E2E',
  charcoalMid:  '#2E2E42',
  warmBg:       '#FDF8F6',
  surface:      '#FFFFFF',
  border:       '#E8E5E2',
  muted:        '#57534E',
  subtle:       '#A8A29E',
  stone100:     '#F5F4F2',
}

const VENTURES = [
  {
    id: 'mamatech', dark: true,
    status: 'Active · Feminist tech studio',
    name: 'TichLabs',
    tagline: 'Powered by Mama Tech',
    description: 'Full-stack platforms in feminist tech, healthtech, and justice. Concept to deployed product. Focus on open-source, interoperable technology for the impact sector.',
    tags: ['DPG-aligned', 'Impact sector', '6 years', 'Open source'],
    cta: 'See our work →', ctaHref: '/work',
  },
  {
    id: 'dada', dark: false,
    status: 'In development · FemTech',
    name: 'DADA',
    tagline: 'A menopause companion for African women.',
    description: 'Culturally grounded, AI-powered, human-centred. Being built at Mama Tech. First of its kind on the continent.',
    tags: ['AI companion', "Women's health", 'In development', 'Mama Tech'],
    cta: 'Follow the build →', ctaHref: '#',
  },
  {
    id: 'teaches', dark: false,
    status: 'Active · EdTech',
    name: 'Mama Tech Teaches',
    tagline: 'Build. Belong. Become.',
    description: 'Learning community for women stepping into tech as builders. Translates career experience into tech foundation. AI as co-builder. Virtual + physical cohorts across Africa and diaspora.',
    tags: ['Women in tech', 'AI learning', 'Africa + diaspora', 'Community'],
    cta: 'Join the community →', ctaHref: 'https://mt-teaches.lovable.app/',
  },
]

export default function VenturesPage() {
  return (
    <div style={{ background: C.warmBg, minHeight: '100vh' }}>
      <div className="page-container py-12">

        <p style={{ fontSize:'14px', fontWeight:'500', color:C.crimson, textTransform:'uppercase', letterSpacing:'0.09em', marginBottom:'0.4rem' }}>My ventures</p>
        <h1 style={{ fontFamily:'"DM Serif Display",Georgia,serif', fontSize:'2.5rem', color:C.charcoal, letterSpacing:'-0.025em', marginBottom:'0.5rem' }}>What I&apos;m building</h1>
        <p style={{ fontSize:'20px', color:C.muted, marginBottom:'3rem', lineHeight:1.7, maxWidth:'52ch' }}>
          Three platforms. One mission: human-centred, open, sustainable technology built by and for African women.
        </p>

        {/* Ventures */}
        <div style={{ display:'flex', flexDirection:'column', gap:'1.5rem' }}>

          {/* TichLabs — DARK */}
          <div style={{ display:'grid', gridTemplateColumns:'240px 1fr', borderRadius:'18px', overflow:'hidden', border:`1px solid ${C.charcoal}` }}>
            <div style={{ background:C.charcoalMid, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'10px', padding:'2rem', minHeight:'240px' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M6 21c0-3.314 2.686-6 6-6s6 2.686 6 6"/></svg>
              <span style={{ fontSize:'17px', color:'rgba(255,255,255,0.25)', textAlign:'center', lineHeight:1.5, textTransform:'uppercase', letterSpacing:'0.06em' }}>TichLabs studio or team photo{'\n'}800×1067px{'\n'}/public/images/venture-tich.jpg</span>
            </div>
            <div style={{ background:C.charcoal, padding:'2rem', display:'flex', flexDirection:'column', gap:'0.9rem' }}>
              <p style={{ fontSize:'17px', fontWeight:'500', color:C.crimsonMid, textTransform:'uppercase', letterSpacing:'0.07em' }}>Active · Feminist tech studio</p>
              <h2 style={{ fontFamily:'"DM Serif Display",Georgia,serif', fontSize:'2.3rem', color:'#fff', lineHeight:1.15, margin:0 }}>TichLabs&nbsp;<em style={{ color:C.crimsonMid }}>/&nbsp;TichLabs</em></h2>
              <p style={{ fontSize:'18px', color:'rgba(255,255,255,0.55)', lineHeight:1.7 }}>{VENTURES[0].description}</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'5px' }}>
                {VENTURES[0].tags.map(t => (
                  <span key={t} style={{ fontSize:'17px', padding:'2px 9px', borderRadius:'100px', background:'rgba(255,255,255,0.07)', color:'rgba(255,255,255,0.55)' }}>{t}</span>
                ))}
              </div>
              <a href="/work" style={{ fontSize:'17px', fontWeight:'500', color:C.crimsonMid, textDecoration:'none' }}>See our work →</a>
            </div>
          </div>

          {/* DADA — BURGUNDY */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 240px', borderRadius:'18px', overflow:'hidden', border:`1px solid ${C.burgundy}` }}>
            <div style={{ background:'#fff', padding:'2rem', display:'flex', flexDirection:'column', gap:'0.9rem' }}>
              <p style={{ fontSize:'17px', fontWeight:'500', color:C.burgundy, textTransform:'uppercase', letterSpacing:'0.07em' }}>In development · FemTech</p>
              <h2 style={{ fontFamily:'"DM Serif Display",Georgia,serif', fontSize:'2.3rem', color:C.charcoal, lineHeight:1.15, margin:0 }}>DADA — <em style={{ color:C.burgundy }}>menopause companion</em></h2>
              <p style={{ fontSize:'18px', color:C.muted, lineHeight:1.7 }}>{VENTURES[1].description}</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'5px' }}>
                {VENTURES[1].tags.map(t => (
                  <span key={t} style={{ fontSize:'17px', padding:'2px 9px', borderRadius:'100px', background:C.burgundyLight, color:C.burgundy }}>{t}</span>
                ))}
              </div>
              <a href="#" style={{ fontSize:'17px', fontWeight:'500', color:C.burgundy, textDecoration:'none' }}>Follow the build →</a>
            </div>
            <div style={{ background:C.burgundyLight, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'10px', padding:'2rem' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={C.burgundy} strokeWidth="1.2" opacity="0.3"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M6 21c0-3.314 2.686-6 6-6s6 2.686 6 6"/></svg>
              <span style={{ fontSize:'17px', color:C.burgundy, textAlign:'center', lineHeight:1.5, textTransform:'uppercase', letterSpacing:'0.06em', opacity:0.6 }}>DADA brand image{'\n'}800×1067px{'\n'}/public/images/venture-dada.jpg</span>
            </div>
          </div>

          {/* Mama Tech Teaches — CRIMSON LIGHT */}
          <div style={{ display:'grid', gridTemplateColumns:'240px 1fr', borderRadius:'18px', overflow:'hidden', border:`1px solid ${C.crimson}` }}>
            <div style={{ background:C.crimsonLight, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'10px', padding:'2rem' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={C.crimson} strokeWidth="1.2" opacity="0.35"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M6 21c0-3.314 2.686-6 6-6s6 2.686 6 6"/></svg>
              <span style={{ fontSize:'17px', color:C.crimsonDark, textAlign:'center', lineHeight:1.5, textTransform:'uppercase', letterSpacing:'0.06em', opacity:0.7 }}>Community photo{'\n'}800×1067px{'\n'}/public/images/venture-teaches.jpg</span>
            </div>
            <div style={{ background:'#fff', padding:'2rem', display:'flex', flexDirection:'column', gap:'0.9rem' }}>
              <p style={{ fontSize:'17px', fontWeight:'500', color:C.crimson, textTransform:'uppercase', letterSpacing:'0.07em' }}>Active · EdTech</p>
              <h2 style={{ fontFamily:'"DM Serif Display",Georgia,serif', fontSize:'2.3rem', color:C.charcoal, lineHeight:1.15, margin:0 }}>Mama Tech Teaches — <em style={{ color:C.crimson }}>Build. Belong. Become.</em></h2>
              <p style={{ fontSize:'18px', color:C.muted, lineHeight:1.7 }}>{VENTURES[2].description}</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'5px' }}>
                {VENTURES[2].tags.map(t => (
                  <span key={t} style={{ fontSize:'17px', padding:'2px 9px', borderRadius:'100px', background:C.crimsonLight, color:C.crimsonDark }}>{t}</span>
                ))}
              </div>
              <a href="https://mt-teaches.lovable.app/" target="_blank" rel="noopener noreferrer" style={{ fontSize:'17px', fontWeight:'500', color:C.crimson, textDecoration:'none' }}>Join the community →</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
