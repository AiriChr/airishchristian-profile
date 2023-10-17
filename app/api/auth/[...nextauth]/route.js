import { PrismaClient } from '@prisma/client'
import { compare } from 'bcrypt'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const prisma = new PrismaClient();
export const authOptions = {
    session: {
        strategy: 'jwt'
    },
    theme: {
        colorScheme: "auto", // "auto" | "dark" | "light"
        brandColor: "", // Hex color code
        logo: "/assets/navLogo.png", // Absolute URL to image
        buttonText: "" // Hex color code
      },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'hello@example.com' },
                password: { label: 'Password', type: 'password'}
            },
            async authorize(credentials) {
                //Handle Auth
                if (!credentials.email || !credentials.password) {
                    return null
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                if (!user) {
                    return null
                }

                const isPasswordValid = await compare(
                    credentials.password,
                    user.password
                )

                if (!isPasswordValid) {
                    return null
                }

                return {
                    id: user.id + '',
                    email: user.email,
                    name: user.name
                }
            }
        })
    ]
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }