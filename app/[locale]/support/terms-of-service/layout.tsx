import type React from "react"
import { Metadata } from "next"

interface SupportLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Get help with your service",
}

export default function RootLayout({ children }: SupportLayoutProps) {

  return (
    <div>
        {children}
    </div>
  )
}

