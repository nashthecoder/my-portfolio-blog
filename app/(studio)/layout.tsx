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
        <body>{children}</body>
    </html>
    )
}
