import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'PULSE – L\'assurance qui s\'adapte à l\'usage',
    description: 'Activez, utilisez, comprenez. Vous ne payez plus à l\'aveugle.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr" className={inter.variable}>
            <body className="font-inter antialiased">{children}</body>
        </html>
    )
}
