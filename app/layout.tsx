import './globals.css'

export const metadata = {
  title: 'Naijeria Toweett — Systems Architect · Fractional Product CTO · FemTech Founder',
  description: 'Building Africa\'s digital infrastructure for impact. Founder of Mama Tech / TichLabs. Creator of DADA.',
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
