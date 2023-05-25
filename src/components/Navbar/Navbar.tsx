'use client'

import Link from 'next/link'

import { Text, Burger, Transition, Paper, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { SignInButton, SignOutButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import useStyles from './Navbar.style'

export default function MyNavbar() {
    const [opened, { toggle, close }] = useDisclosure(false)

    const { classes } = useStyles()
    return (
        <header className={classes.root}>
            <nav className={classes.nav}>
                <Link href="/">
                    <Text component="h1">Stock Manager</Text>
                </Link>

                <Group className={classes.buttons}>
                    <SignedOut>
                        <SignUpButton mode="modal" />
                        <SignInButton mode="modal" />
                    </SignedOut>
                    <SignedIn>
                        <Link href="/dashboard">Dashboard</Link>
                        <SignOutButton />
                    </SignedIn>
                </Group>

                <Burger opened={opened} onClick={toggle} className={classes.burger} />

                <Transition transition="pop-top-right" duration={300} mounted={opened}>
                    {(styles) => (
                        <Paper withBorder style={styles} className={classes.dropdown}>
                            <SignedOut>
                                <button onClick={() => close()}>
                                    <SignUpButton />
                                </button>
                                <button onClick={() => close()}>
                                    <SignInButton />
                                </button>
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                                <Link onClick={() => close()} href="/dashboard">
                                    Dashboard
                                </Link>
                            </SignedIn>
                        </Paper>
                    )}
                </Transition>
            </nav>
        </header>
    )
}
