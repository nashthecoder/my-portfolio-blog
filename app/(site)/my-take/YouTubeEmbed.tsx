'use client'

export function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      paddingBottom: '56.25%',
      borderRadius: '12px',
      overflow: 'hidden',
      background: '#000',
    }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0,
        }}
      />
    </div>
  )
}
