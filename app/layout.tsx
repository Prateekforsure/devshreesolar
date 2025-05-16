import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import ChatAgent from '@/components/ChatAgent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Devshree Solar Lights - Solar Energy Solutions',
  description: 'Devshree Solar Lights Private Limited - Leading provider of solar energy solutions and products in India',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ChatAgent />
        </ThemeProvider>
      </body>
    </html>
  )
}