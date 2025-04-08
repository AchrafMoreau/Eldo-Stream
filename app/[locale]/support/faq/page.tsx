"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { SupportLayout } from "@/components/support/page-layout"
import { PageTransition } from "@/components/support/page-translation"
import { useTranslations } from "next-intl"

type FAQItemProps = {
  question: string
  answer: string
}
export default function FAQPage() {
  const t = useTranslations("faq")
  const faqItems = t.raw("items")
  return (
    <PageTransition>
      <SupportLayout
        title={t("title")}
        description={t("description")}
      >
        <div className="space-y-6">
          {faqItems.map((item:FAQItemProps, index:number) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </SupportLayout>
    </PageTransition>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left py-2 focus:outline-none"
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-4 text-muted-foreground">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


