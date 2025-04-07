"use client"

import type React from "react"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

interface SupportLayoutProps {
  children: React.ReactNode
  title: string
  description?: string
}

export function SupportLayout({ children, title, description }: SupportLayoutProps) {
  const pathname = usePathname()

  return (
    <div className="container py-12 px-10 md-px-20">
      <div className="mb-8">
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
          <Link
            href="/support"
            className="flex items-center text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Support
          </Link>
        </motion.div>

        <motion.h1
          className="text-4xl font-bold tracking-tight mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {description}
          </motion.p>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-card rounded-lg border shadow-sm p-6 md:p-8"
      >
        {children}
      </motion.div>
    </div>
  )
}

