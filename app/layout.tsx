import './globals.css'

export const metadata = {
  title: 'My Portfolio',
  description: 'Portfolio built with NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
