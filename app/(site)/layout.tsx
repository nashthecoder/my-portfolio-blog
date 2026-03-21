import '/app/globals.css'
import Link from 'next/link'
import { getPages } from '@/sanity/sanity-utils'

export const metadata = {
  title: 'My Portfolio',
  description: 'Built with NextJS, Sanity & Tailwind',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body className='max-w-3xl mx-auto py-10'>
        <header className="flex items-center justify-between">
          <Link href='/' className="bg-gradient-to-r from-blue-400 via-white-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold">
            Nash The Coder
          </Link>
          <div className="flex items-center gap-5 text-sm text-gray-600">
            {/* Dynamic pages from Sanity */}
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className="hover:underline">
                {page.title}
              </Link>
            ))}

            {/* Static link to QuickJobs GH Pages */}
            <a
              href="https://nashthecoder.github.io/quickjobs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              QuickJobs
            </a>
          </div>
        </header>

        <main className='py-20'>{children}</main>

        <footer className="fixed bottom-0 w-full bg-white py-3">
          <div className="text-center w-full">
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023 <a href="https://github.com/nashthecoder" className="hover:underline">NashTheCoder</a>.
            </span>
          </div>
        </footer>
      </body>
    </html>
  )
}
