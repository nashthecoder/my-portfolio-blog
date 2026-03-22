// app/(site)/work/page.tsx

import Image from 'next/image'
import Link from 'next/link'
import { getAllCaseStudies } from '@/sanity/sanity-utils'

export const metadata = { title: 'Work — Naijeria Toweett' }

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
}

const ALL_PROJECTS = [
  { _id:'1', title:'NairobiTalks', client:'World Bank · Nairobi County Gov', sector:'govtech',
    summary:'Civic tech platform co-designed with citizens and officials in 1.5 days. Filterable admin dashboard, swipe-based public interface, AI chatbot for planning literacy. MIT licensed.',
    impact_metric:'1.5 days to prototype', tags:['DPI','Co-design','Rails','World Bank'],
    external_url:'https://mamatechafrica.github.io/NairobiTalks-NCG/', live_url:null,
    delivers:['1.5 days from problem to prototype','Co-design with 4 stakeholder groups','Non-technical handover documentation','MIT open source'],
    screenshot_label:'NairobiTalks dashboard — 1200×675px' },
  { _id:'2', title:'AskRafikey', client:'Digital Health Coalition of Kenya', sector:'healthtech',
    summary:"Kenya's first AI-driven SRHR chatbot. 18 verified topic areas, GPS service finder, full admin CMS for non-technical coalition staff. 5 rounds of co-design and usability testing.",
    impact_metric:'5 rounds · 20 testers', tags:['AI','SRHR','DPI','Open source','Coalition CMS'],
    external_url:'https://rafikey-portfolio.lovable.app/', live_url:'https://askrafikey.com/',
    delivers:['5 co-design rounds with 20 testers','Non-technical admin CMS','7-organisation coalition delivery','Zero vendor lock-in','GPS-based service finder'],
    screenshot_label:'AskRafikey chat interface — 1200×675px' },
  { _id:'3', title:'Mama Tech Teaches', client:'Mama Tech', sector:'education',
    summary:'Build. Belong. Become. Learning community for women stepping into tech as builders. Translates career experience into tech foundation. AI as co-builder. Virtual + physical cohorts.',
    impact_metric:'Build from day one', tags:['EdTech','Women in Tech','AI learning','Mama Tech'],
    external_url:'https://mt-teaches.lovable.app/', live_url:'https://mt-teaches.lovable.app/',
    delivers:['Women career-transitioners into tech','AI-assisted learning at every level','Build from week one','Africa + diaspora community'],
    screenshot_label:'Mama Tech Teaches screenshot — 1200×675px' },
  { _id:'4', title:'Njiapanda', client:'TichLabs', sector:'civic',
    summary:'Product and UX lead — design, decisions, and direction across web and mobile.',
    impact_metric:null, tags:['Product','UX lead','Mobile','TichLabs'],
    external_url:'https://tich-labs.github.io/njiapanda-case-study/', live_url:null,
    delivers:['End-to-end product ownership','Mobile-first UX design','Full handover documentation'],
    screenshot_label:'Njiapanda screenshot — 1200×675px' },
  { _id:'5', title:'DADA', client:'Mama Tech / TichLabs', sector:'femtech',
    summary:'Menopause companion designed specifically for African women. Culturally grounded, AI-powered, human-centred. Currently in design and build phase.',
    impact_metric:'In development', tags:['FemTech','AI companion',"Women's health"],
    external_url:null, live_url:null,
    delivers:['First-of-its-kind for African women','Culturally grounded design','AI-powered companion'],
    screenshot_label:'DADA brand image or wireframe — 1200×675px' },
]

const SECTOR: Record<string, { bg: string; fg: string; label: string }> = {
  govtech:    { bg: '#FAEAE8', fg: '#8B1F15', label: 'GovTech · DPI' },
  healthtech: { bg: '#F2E8EA', fg: '#3D1520', label: 'HealthTech · SRHR' },
  education:  { bg: '#F5F4F2', fg: '#2E2E42', label: 'EdTech · Women in Tech' },
  civic:      { bg: '#EEF4FB', fg: '#0C447C', label: 'Civic Tech' },
  femtech:    { bg: '#F2E8EA', fg: '#6B2737', label: 'FemTech' },
}

export default async function WorkPage() {
  const caseStudies = await getAllCaseStudies().catch(() => [])
  const projects = caseStudies.length > 0 ? caseStudies : ALL_PROJECTS

  return (
    <div style={{ background: C.warmBg, minHeight: '100vh' }}>
      <div className="page-container py-12">

        <p style={{ fontSize:'11px', fontWeight:'500', color:C.crimson, textTransform:'uppercase', letterSpacing:'0.09em', marginBottom:'0.4rem' }}>
          Selected work
        </p>
        <h1 style={{ fontFamily:'"DM Serif Display",Georgia,serif', fontSize:'2.5rem', color:C.charcoal, letterSpacing:'-0.025em', marginBottom:'0.4rem' }}>
          Impact delivered
        </h1>
        <p style={{ fontSize:'15px', color:C.muted, marginBottom:'2.5rem', lineHeight:1.7, maxWidth:'54ch' }}>
          From 1.5-day prototypes to multi-country platform deployments. Every project co-designed with the community it serves.
        </p>

        {/* Project list — alternating layout */}
        <div style={{ display:'flex', flexDirection:'column', gap:'3rem' }}>
          {projects.map((p: any, i: number) => {
            const s = SECTOR[p.sector] ?? { bg:C.stone100, fg:C.muted, label:'Project' }
            return (
              <article key={p._id}
                style={{ display:'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 420px' : '420px 1fr', gap:'2.5rem', alignItems:'start',
                  background:C.surface, borderRadius:'18px', border:`1px solid ${C.border}`, overflow:'hidden' }}>

                {/* Screenshot */}
                <div style={{ position:'relative', aspectRatio:'16/9', background:'#FBF4F1', order: i % 2 === 0 ? 2 : 1 }}>
                  {p.cover_image ? (
                    <Image src={p.cover_image} alt={p.title} fill style={{ objectFit:'cover' }} />
                  ) : (
                    <div style={{ width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'8px', padding:'1rem' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="1.2">
                        <rect x="3" y="3" width="18" height="18" rx="3"/><polyline points="3 9 21 9"/><line x1="9" y1="21" x2="9" y2="9"/>
                      </svg>
                      <span style={{ fontSize:'10px', color:'#C4A882', textAlign:'center', lineHeight:1.5 }}>{p.screenshot_label}</span>
                    </div>
                  )}
                  <span style={{ position:'absolute', top:'10px', left:'10px', fontSize:'10px', fontWeight:'500', padding:'3px 10px', borderRadius:'100px', background:s.bg+'EE', color:s.fg }}>
                    {s.label}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding:'2rem', display:'flex', flexDirection:'column', gap:'1rem', order: i % 2 === 0 ? 1 : 2 }}>
                  {p.client && <p style={{ fontSize:'12px', color:C.subtle, margin:0 }}>{p.client}</p>}
                  <h2 style={{ fontFamily:'"DM Serif Display",Georgia,serif', fontSize:'1.75rem', color:C.charcoal, lineHeight:1.15, margin:0 }}>{p.title}</h2>
                  <p style={{ fontSize:'14px', color:C.muted, lineHeight:1.75, margin:0 }}>{p.summary}</p>

                  {/* Delivers */}
                  {p.delivers && (
                    <div>
                      <p style={{ fontSize:'11px', fontWeight:'500', color:C.subtle, textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:'8px' }}>Directly delivers</p>
                      {p.delivers.map((d: string) => (
                        <div key={d} style={{ display:'flex', gap:'8px', marginBottom:'5px' }}>
                          <span style={{ color:C.crimson, fontWeight:'500', flexShrink:0 }}>✓</span>
                          <span style={{ fontSize:'13px', color:C.muted, lineHeight:1.55 }}>{d}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  {p.tags && (
                    <div style={{ display:'flex', flexWrap:'wrap', gap:'5px' }}>
                      {p.tags.map((t: string) => (
                        <span key={t} style={{ fontSize:'10px', fontWeight:'500', padding:'3px 9px', borderRadius:'100px', background:s.bg, color:s.fg }}>{t}</span>
                      ))}
                    </div>
                  )}

                  {/* CTAs */}
                  <div style={{ display:'flex', gap:'12px', flexWrap:'wrap' }}>
                    {p.external_url && (
                      <a href={p.external_url} target="_blank" rel="noopener noreferrer"
                        style={{ fontSize:'13px', fontWeight:'500', padding:'0.5rem 1.2rem', borderRadius:'100px', background:C.crimson, color:'#fff', textDecoration:'none' }}>
                          Read full case study →
                      </a>
                    )}
                    {p.live_url && (
                      <a href={p.live_url} target="_blank" rel="noopener noreferrer"
                        style={{ fontSize:'13px', padding:'0.5rem 1.15rem', borderRadius:'100px', border:`1px solid ${C.border}`, color:C.charcoal, textDecoration:'none' }}>
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
    </div>
  )
}
