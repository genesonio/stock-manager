'use client'

import { MantineProvider } from '@mantine/core'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <html lang="pt">
                <body>{children}</body>
            </html>
        </MantineProvider>
    )
}
