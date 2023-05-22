'use client'

import { Text, Burger, Transition, Paper, Header, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { SignInButton, SignUpButton } from '@clerk/nextjs'

import useStyles, { HEADER_HEIGHT } from './Navbar.style'

export default function MyNavbar() {
    const [opened, { toggle /* , close */ }] = useDisclosure(false)

    const { classes } = useStyles()
    return (
        <Header height={HEADER_HEIGHT} className={classes.root}>
            <Text component="h1">Stock Manager</Text>

            <Group className={classes.buttons}>
                <SignUpButton />
                <SignInButton />
            </Group>

            <Burger opened={opened} onClick={toggle} className={classes.burger} />

            <Transition transition="pop-top-right" duration={300} mounted={opened}>
                {(styles) => (
                    <Paper withBorder style={styles} className={classes.dropdown}>
                        <SignUpButton />
                        <SignInButton />
                    </Paper>
                )}
            </Transition>
        </Header>
    )
}
