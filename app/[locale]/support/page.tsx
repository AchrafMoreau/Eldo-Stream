"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FileText, HelpCircle, Laptop, Shield, FileTerminal, ArrowLeft } from "lucide-react"

type SupportItem = {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  href: string
}
export default function SupportPage() {
  const supportItems = [
    {
      title: "FAQ",
      description: "Find answers to commonly asked questions",
      icon: HelpCircle,
      href: "/support/faqs",
    },
    {
      title: "Installation Guide",
      description: "Step-by-step instructions to set up your service",
      icon: FileTerminal,
      href: "/support/installation-guide",
    },
    {
      title: "Device Compatibility",
      description: "Check if your device is compatible with our service",
      icon: Laptop,
      href: "/support/device-compatibility",
    },
    {
      title: "Terms of Service",
      description: "Read our terms and conditions",
      icon: FileText,
      href: "/support/terms-of-service",
    },
    {
      title: "Privacy Policy",
      description: "Learn how we handle your data",
      icon: Shield,
      href: "/support/privacy-policy",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <div className="container py-12">

      <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
        <Link
          href="/"
          className="flex items-center text-muted-foreground hover:text-primary transition-colors mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home Page
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold tracking-tight mb-3">Support Center</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Find answers, guides, and resources to help you get the most out of our IPTV service
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {supportItems.map((item, index) => (
          <SupportCard key={index} item={item} variants={item} />
        ))}
      </motion.div>
    </div>
  )
}

function SupportCard({ item, variants }: { item: SupportItem, variants: any }) {
  const Icon = item.icon

  return (
    <motion.div variants={variants}>
      <Link href={item.href} className="block h-full">
        <div className="h-full bg-card hover:bg-primary/30 rounded-lg border p-6 transition-colors shadow-sm hover:shadow flex flex-col">
          <div className="mb-4 p-2 bg-primary/10 rounded-full w-fit">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-muted-foreground">{item.description}</p>
        </div>
      </Link>
    </motion.div>
  )
}

