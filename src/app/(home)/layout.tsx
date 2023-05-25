'use client'

import { MantineProvider } from '@mantine/core'

import { Navbar } from '@/components/Navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
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
