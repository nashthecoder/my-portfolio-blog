import Link from 'next/link'
import '/app/globals.css'

export const metadata = {
  title: 'My Portfolio',
  description: 'Built with NextJS, Sanity & Tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='max-w-3xl mx-auto py-10'>
        <header>
          <Link href='/' className="bg-gradient-to-r from-blue-400 via-white-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold">Nash The Coder</Link>
        </header>
        <main className='py-20'>{children}</main>
      </body>
    </html>
  )
}
