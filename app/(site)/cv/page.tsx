// app/(site)/cv/page.tsx

const C = {
  crimson:      '#C0392B',
  crimsonLight: '#FAEAE8',
  crimsonDark:  '#8B1F15',
  charcoal:     '#1E1E2E',
  warmBg:       '#FDF8F6',
  surface:      '#FFFFFF',
  border:       '#E8E5E2',
  muted:        '#57534E',
  stone100:     '#F5F4F2',
}

export default function CVPage() {
  return (
    <div style={{ background: C.warmBg, minHeight: '100vh' }}>
      <div style={{ maxWidth:'42rem', margin:'0 auto', padding:'3rem 1.5rem' }}>

        {/* Header */}
        <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:'2.5rem', flexWrap:'wrap', gap:'1rem' }}>
          <div>
            <h1 style={{ fontFamily:'"DM Serif Display",Georgia,serif', fontSize:'2.5rem', color:C.charcoal, letterSpacing:'-0.025em', marginBottom:'4px' }}>Naijeria Toweett</h1>
            <p style={{ fontSize:'15px', color:C.crimson, fontWeight:'500' }}>Systems Architect · Fractional Product CTO · FemTech Founder</p>
            <p style={{ fontSize:'13px', color:C.muted, marginTop:'4px' }}>Nairobi, Kenya · naijeriatoweett.com</p>
          </div>
          <a href="/Naijeria_Toweett_CV_2026.pdf" download
            style={{ fontSize:'13px', fontWeight:'500', padding:'0.55rem 1.25rem', borderRadius:'100px', background:C.crimson, color:'#fff', textDecoration:'none', alignSelf:'flex-start' }}>
            Download PDF ↓
          </a>
        </div>

        {/* Placeholder for CV content */}
        <div style={{ background: C.surface, border:`1px solid ${C.border}`, borderRadius:'16px', padding:'2rem', textAlign:'center' }}>
          <p style={{ color: C.muted, marginBottom: '1rem' }}>CV content coming soon.</p>
          <p style={{ fontSize: '14px', color: C.muted }}>
            Paste the CV content from <code style={{ background: C.stone100, padding: '2px 6px', borderRadius: '4px' }}>content-cv.md</code> into Sanity Studio → Pages → CV
          </p>
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop:'3rem', paddingTop:'2rem', borderTop:`1px solid ${C.border}`, display:'flex', gap:'10px', flexWrap:'wrap' }}>
          <a href="https://quickjobs.naijeriatoweett.com/" target="_blank" rel="noopener noreferrer"
            style={{ fontSize:'13px', fontWeight:'500', padding:'0.6rem 1.4rem', borderRadius:'100px', background:C.crimson, color:'#fff', textDecoration:'none' }}>
            Brief me on a project →
          </a>
          <a href="https://www.linkedin.com/in/naijeriatoweett/" target="_blank" rel="noopener noreferrer"
            style={{ fontSize:'13px', padding:'0.6rem 1.35rem', borderRadius:'100px', border:`1px solid ${C.border}`, color:C.charcoal, textDecoration:'none' }}>
            Connect on LinkedIn
          </a>
        </div>

      </div>
    </div>
  )
}
