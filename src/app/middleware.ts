import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
    publicRoutes: ['/', '/signIn'],
})

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
