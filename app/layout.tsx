import type React from "react"
import type { Metadata } from "next"
import { Lato } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato'
})

export const metadata: Metadata = {
  title: "Build King",
  description: "A leading construction company in Hong Kong",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
