import { getPosts } from '@/sanity/sanity-utils'
import Link from 'next/link'
import { YouTubeEmbed } from './YouTubeEmbed'

const C = {
  crimson:      '#C0392B',
  crimsonLight: '#FAEAE8',
  crimsonDark:  '#8B1F15',
  charcoal:     '#1E1E2E',
  warmBg:       '#FDF8F6',
  border:       '#E8E5E2',
  muted:        '#57534E',
  subtle:       '#A8A29E',
  amberDark:    '#633806',
  amberLight:   '#FAEEDA',
  greenDark:    '#1B6B3A',
  greenLight:   '#E6F7EC',
}

const TABS = [
  { key: 'all', label: 'All' },
  { key: 'article', label: 'Articles' },
  { key: 'talk', label: 'Talks' },
  { key: 'walkthrough', label: 'Walkthroughs' },
] as const

function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([\w-]+)/,
    /(?:youtu\.be\/)([\w-]+)/,
    /(?:youtube\.com\/embed\/)([\w-]+)/,
  ]
  for (const p of patterns) {
    const m = url.match(p)
    if (m) return m[1]
  }
  return null
}

function contentTypeBadge(type?: string) {
  switch (type) {
    case 'talk':         return { bg: C.amberLight, fg: C.amberDark, label: 'Talk' }
    case 'walkthrough':  return { bg: C.greenLight, fg: C.greenDark, label: 'Walkthrough' }
    default:             return { bg: C.crimsonLight, fg: C.crimsonDark, label: 'Article' }
  }
}

export default async function BlogPage({ searchParams }: { searchParams: { tab?: string } }) {
  const posts = await getPosts().catch(() => [])
  const activeTab = TABS.find(t => t.key === searchParams.tab)?.key ?? 'all'
  const filtered = activeTab === 'all' ? posts : posts.filter(p => p.contentType === activeTab)

  return (
    <div style={{ background: C.warmBg, minHeight: '100vh' }}>
      <div className="page-container py-12">

        <p style={{ fontSize:'18px', fontWeight:'500', color:C.crimson, textTransform:'uppercase', letterSpacing:'0.09em', marginBottom:'0.4rem' }}>My Take</p>
        <h1 style={{ fontFamily:'"DM Serif Display",Georgia,serif', fontSize:'2.5rem', color:C.charcoal, letterSpacing:'-0.025em', marginBottom:'0.4rem' }}>What I&apos;m thinking about</h1>
        <p style={{ fontSize:'20px', color:C.muted, marginBottom:'2rem', lineHeight:1.7 }}>
          GovTech · DPI · FemTech · AI in the impact sector · Product · Open source
        </p>

        {/* Tabs */}
        <div style={{ display:'flex', gap:'6px', marginBottom:'2.5rem', flexWrap:'wrap' }}>
          {TABS.map(tab => {
            const isActive = tab.key === activeTab
            return (
              <Link
                key={tab.key}
                href={tab.key === 'all' ? '/my-take' : `/my-take?tab=${tab.key}`}
                style={{
                  fontSize:'18px', fontWeight:'500', padding:'5px 16px', borderRadius:'100px',
                  background: isActive ? C.crimson : 'transparent',
                  color: isActive ? '#fff' : C.muted,
                  textDecoration:'none', border: `1px solid ${isActive ? C.crimson : C.border}`,
                  transition:'all 0.15s ease',
                }}
              >
                {tab.label}
              </Link>
            )
          })}
        </div>

        {/* List */}
        {filtered.length === 0 ? (
          <p style={{ fontSize:'18px', color:C.subtle }}>Nothing here yet — coming soon.</p>
        ) : (
          <div>
            {filtered.map(post => {
              const badge = contentTypeBadge(post.contentType)
              const videoId = post.videoUrl ? extractYouTubeId(post.videoUrl) : null

              return (
                <div key={post._id}
                  style={{ display:'block', textDecoration:'none', borderBottom:`1px solid ${C.border}` }}
                >
                  {post.contentType === 'talk' || post.contentType === 'walkthrough' ? (
                    /* ── Video card (talk / walkthrough) ── */
                    <div style={{ padding:'1.75rem 0' }}>
                      <div style={{ display:'flex', alignItems:'flex-start', gap:'1.25rem', flexWrap:'wrap' }}>
                        {videoId && (
                          <div style={{ flexShrink:0, width:'280px', maxWidth:'100%' }}>
                            <YouTubeEmbed videoId={videoId} />
                          </div>
                        )}
                        <div style={{ flex:1, minWidth:'200px' }}>
                          <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'6px', flexWrap:'wrap' }}>
                            <span style={{ fontSize:'14px', fontWeight:'500', padding:'2px 9px', borderRadius:'100px', background:badge.bg, color:badge.fg }}>
                              {badge.label}
                            </span>
                            {post.eventName && (
                              <span style={{ fontSize:'16px', color:C.subtle }}>{post.eventName}</span>
                            )}
                            {post.publishedAt && (
                              <span style={{ fontSize:'16px', color:C.subtle }}>
                                {new Date(post.publishedAt).toLocaleDateString('en-GB',{ day:'numeric', month:'long', year:'numeric' })}
                              </span>
                            )}
                          </div>
                          <h2 style={{ fontFamily:'"DM Serif Display",Georgia,serif', fontSize:'1.75rem', color:C.charcoal, marginBottom:'6px', lineHeight:1.25 }}>
                            {post.title}
                          </h2>
                          {post.excerpt && <p style={{ fontSize:'18px', color:C.muted, lineHeight:1.65, margin:'0 0 10px' }}>{post.excerpt}</p>}
                          <div style={{ display:'flex', gap:'10px', flexWrap:'wrap' }}>
                            <a href={post.videoUrl!} target="_blank" rel="noopener noreferrer"
                              style={{ fontSize:'15px', fontWeight:'500', color:C.crimson, textDecoration:'none' }}>
                              Watch {post.contentType === 'walkthrough' ? 'demo' : 'talk'} ▶
                            </a>
                            {post.linkedinUrl && (
                              <a href={post.linkedinUrl} target="_blank" rel="noopener noreferrer"
                                style={{ fontSize:'15px', fontWeight:'500', color:'#0A66C2', textDecoration:'none' }}>
                                LinkedIn ↗
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* ── Article card ── */
                    <Link href={"/my-take/" + post.slug.current}
                      style={{ display:'block', textDecoration:'none' }}
                      className="group">
                      <div style={{ padding:'1.75rem 0' }}>
                        <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'8px', flexWrap:'wrap' }}>
                          <span style={{ fontSize:'14px', fontWeight:'500', padding:'2px 9px', borderRadius:'100px', background:badge.bg, color:badge.fg }}>
                            {badge.label}
                          </span>
                          {post.publishedAt && (
                            <span style={{ fontSize:'16px', color:C.subtle }}>
                              {new Date(post.publishedAt).toLocaleDateString('en-GB',{ day:'numeric', month:'long', year:'numeric' })}
                            </span>
                          )}
                          {post.tags?.slice(0,2).map((t: string) => (
                            <span key={t} style={{ fontSize:'18px', fontWeight:'500', padding:'2px 9px', borderRadius:'100px', background:C.crimsonLight, color:C.crimsonDark }}>{t}</span>
                          ))}
                        </div>
                        <h2 style={{ fontFamily:'"DM Serif Display",Georgia,serif', fontSize:'1.75rem', color:C.charcoal, marginBottom:'6px', lineHeight:1.25 }}>{post.title}</h2>
                        {post.excerpt && <p style={{ fontSize:'18px', color:C.muted, lineHeight:1.65, margin:0 }}>{post.excerpt}</p>}
                        {post.linkedinUrl && (
                          <p style={{ margin:'8px 0 0' }}>
                            <a href={post.linkedinUrl} target="_blank" rel="noopener noreferrer"
                              style={{ fontSize:'15px', fontWeight:'500', color:'#0A66C2', textDecoration:'none' }}
                              onClick={e => e.stopPropagation()}>
                              Read on LinkedIn ↗
                            </a>
                          </p>
                        )}
                      </div>
                    </Link>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
