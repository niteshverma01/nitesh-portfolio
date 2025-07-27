import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { EnhancedFooter } from "@/components/enhanced-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nitesh Verma - Full Stack Developer",
  description:
    "Portfolio of Nitesh Verma, a passionate full-stack developer and AI enthusiast specializing in modern web technologies.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <EnhancedFooter />
      </body>
    </html>
  )
}
