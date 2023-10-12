import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/layout/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter'})

export const metadata: Metadata = {
  title: 'Issue Tracker',
  description: 'Created By Naimur Reza',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`p-5 ${inter.variable}` }>
        {children}
      </body>
    </html>
  )
}
