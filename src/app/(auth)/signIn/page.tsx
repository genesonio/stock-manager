'use client'

import { SignIn } from '@clerk/nextjs'

import useStyles from './page.styles'

export default function Page() {
    const { classes } = useStyles()

    return (
        <section className={classes.root}>
            <div className="">
                <SignIn redirectUrl={'/dashboard'} />
            </div>
        </section>
    )
}
