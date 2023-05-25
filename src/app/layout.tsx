import { Metadata } from 'next'

import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'

export const metadata: Metadata = {
    title: 'Stock Manager',
    description: 'Personal Stock Manager',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="pt">
                <body>{children}</body>
            </html>
        </ClerkProvider>
    )
}
