import '@styles/globals.css'
import { Inter } from 'next/font/google'
import Providers from '@providers/Providers.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AC Tabay | Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900`}>
        <Providers>
          {children}
          </Providers>  
      </body>
    </html>
  )
}
