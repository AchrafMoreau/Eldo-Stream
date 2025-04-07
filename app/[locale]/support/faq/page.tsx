"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { SupportLayout } from "@/components/support/page-layout"
import { PageTransition } from "@/components/support/page-translation"

export default function FAQPage() {
  return (
    <PageTransition>
      <SupportLayout
        title="Frequently Asked Questions"
        description="Find answers to the most common questions about our IPTV service"
      >
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </SupportLayout>
    </PageTransition>
  )
}

function FAQItem({ question, answer }) {
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

const faqItems = [
  {
    question: "What is IPTV?",
    answer:
      "IPTV (Internet Protocol Television) is a service that delivers television content over Internet Protocol networks. This is in contrast to delivery through traditional terrestrial, satellite, and cable television formats.",
  },
  {
    question: "How many devices can I use with one subscription?",
    answer:
      "Our standard subscription allows you to use our service on up to 2 devices simultaneously. Premium subscriptions allow for up to 4 devices at once.",
  },
  {
    question: "Do I need a special device to use your IPTV service?",
    answer:
      "Our service works on many devices including smart TVs, smartphones, tablets, computers, and streaming devices like Amazon Fire Stick, Android TV Box, and Apple TV. Check our Device Compatibility page for more details.",
  },
  {
    question: "What internet speed do I need?",
    answer:
      "We recommend a minimum internet speed of 10 Mbps for SD content, 25 Mbps for HD content, and 50 Mbps for 4K content. A stable connection is more important than raw speed.",
  },
  {
    question: "Can I watch content on-demand?",
    answer:
      "Yes, our service includes a large library of on-demand content including movies and TV shows, in addition to live TV channels.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "You can cancel your subscription at any time from your account dashboard. Navigate to 'Subscription' and click on 'Cancel Subscription'. Your service will remain active until the end of your current billing period.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 24-hour free trial so you can test our service before committing to a subscription. Contact our support team to request a trial.",
  },
]

