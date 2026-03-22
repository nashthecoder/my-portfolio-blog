// app/(site)/blog/page.tsx

import { getPosts } from '@/sanity/sanity-utils'
import Link from 'next/link'

const C = {
  crimson:      '#C0392B',
  crimsonLight: '#FAEAE8',
  crimsonDark:  '#8B1F15',
  charcoal:     '#1E1E2E',
  warmBg:       '#FDF8F6',
  border:       '#E8E5E2',
  muted:        '#57534E',
  subtle:       '#A8A29E',
}

export default async function BlogPage() {
  const posts = await getPosts().catch(() => [])

  return (
    <div style={{ background: C.warmBg, minHeight: '100vh' }}>
      <div style={{ maxWidth:'42rem', margin:'0 auto', padding:'3rem 1.5rem' }}>

        <p style={{ fontSize:'11px', fontWeight:'500', color:C.crimson, textTransform:'uppercase', letterSpacing:'0.09em', marginBottom:'0.4rem' }}>Writing</p>
        <h1 style={{ fontFamily:'"DM Serif Display",Georgia,serif', fontSize:'2.5rem', color:C.charcoal, letterSpacing:'-0.025em', marginBottom:'0.4rem' }}>What I&apos;m thinking about</h1>
        <p style={{ fontSize:'15px', color:C.muted, marginBottom:'2.5rem', lineHeight:1.7 }}>
          GovTech · DPI · FemTech · AI in the impact sector · Product · Open source
        </p>

        {posts.length === 0 ? (
          <p style={{ fontSize:'14px', color:C.subtle }}>First post coming soon.</p>
        ) : (
          <div>
            {posts.map(post => (
              <a key={post._id} href={"/blog/" + post.slug.current}
                style={{ display:'block', textDecoration:'none', borderBottom:`1px solid ${C.border}` }}
                className="group">
                <div style={{ padding:'1.75rem 0' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'8px', flexWrap:'wrap' }}>
                    {post.publishedAt && (
                      <span style={{ fontSize:'12px', color:C.subtle }}>
                        {new Date(post.publishedAt).toLocaleDateString('en-GB',{ day:'numeric', month:'long', year:'numeric' })}
                      </span>
                    )}
                    {post.tags?.slice(0,2).map((t: string) => (
                      <span key={t} style={{ fontSize:'11px', fontWeight:'500', padding:'2px 9px', borderRadius:'100px', background:C.crimsonLight, color:C.crimsonDark }}>{t}</span>
                    ))}
                  </div>
                  <h2 style={{ fontFamily:'"DM Serif Display",Georgia,serif', fontSize:'1.35rem', color:C.charcoal, marginBottom:'6px', lineHeight:1.25 }}>{post.title}</h2>
                  {post.excerpt && <p style={{ fontSize:'14px', color:C.muted, lineHeight:1.65, margin:0 }}>{post.excerpt}</p>}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
