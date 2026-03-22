// app/(site)/blog/[slug]/page.tsx

import { getPost } from '@/sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
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

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  if (!post) notFound()

  return (
    <div style={{ background: C.warmBg, minHeight: '100vh' }}>
      <div style={{ maxWidth:'42rem', margin:'0 auto', padding:'3rem 1.5rem' }}>

        {/* Back */}
        <Link href="/blog" style={{ fontSize:'13px', color:C.muted, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:'5px', marginBottom:'2rem' }}>
          ← Writing
        </Link>

        {/* Header */}
        <div style={{ marginBottom:'2.5rem' }}>
          {post.publishedAt && (
            <p style={{ fontSize:'12px', color:C.subtle, marginBottom:'10px' }}>
              {new Date(post.publishedAt).toLocaleDateString('en-GB',{ day:'numeric', month:'long', year:'numeric' })}
            </p>
          )}
          <h1 style={{ fontFamily:'"DM Serif Display",Georgia,serif', fontSize:'clamp(1.75rem,4vw,2.5rem)', color:C.charcoal, lineHeight:1.15, letterSpacing:'-0.02em', marginBottom:'1rem' }}>
            {post.title}
          </h1>
          {post.tags && (
            <div style={{ display:'flex', gap:'6px', flexWrap:'wrap' }}>
              {post.tags.map((t: string) => (
                <span key={t} style={{ fontSize:'11px', fontWeight:'500', padding:'3px 11px', borderRadius:'100px', background:C.crimsonLight, color:C.crimsonDark }}>{t}</span>
              ))}
            </div>
          )}
        </div>

        {/* Post body */}
        <article className="prose">
          <PortableText value={post.content} />
        </article>

        {/* Footer */}
        <div style={{ marginTop:'3rem', paddingTop:'1.5rem', borderTop:`1px solid ${C.border}` }}>
          <Link href="/blog" style={{ fontSize:'13px', fontWeight:'500', color:C.crimson, textDecoration:'none' }}>← Back to writing</Link>
        </div>

      </div>
    </div>
  )
}
