import { Metadata } from 'next'

import { ClerkProvider } from '@clerk/nextjs'

import { Navbar } from '@/components/Navbar'

import './globals.css'

export const metadata: Metadata = {
    title: 'Stock Manager',
    description: 'Personal Stock Manager',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="pt">
                <body>
                    <Navbar />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}
