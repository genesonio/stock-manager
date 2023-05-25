'use client'

import { useRouter } from 'next/navigation'

import { useUser, SignedIn } from '@clerk/nextjs'

export default function Dashboard() {
    const { isLoaded, isSignedIn, user } = useUser()
    const router = useRouter()

    if (isLoaded && !isSignedIn) {
        router.push('/signIn?redirectUrl=/dashboard')
    }

    return (
        <SignedIn>
            <section>Olá, {user?.firstName}</section>
        </SignedIn>
    )
}
