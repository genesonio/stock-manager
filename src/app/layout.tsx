'use client'

import { MantineProvider } from '@mantine/core'

import './globals.css'
import { Navbar } from '@/components/Navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <html lang="pt">
                <body>
                    <Navbar />
                    {children}
                </body>
            </html>
        </MantineProvider>
    )
}
