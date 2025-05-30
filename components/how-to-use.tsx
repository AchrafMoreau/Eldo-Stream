"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Download, Tv, Settings, Play } from "lucide-react"
import { useTranslations } from "next-intl"
import Title from "./ui/title"

export default function HowToUse() {
  const t = useTranslations("HowToUse")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const stepTrans = t.raw('steps')

  const steps = [
    {
      icon: <Download className="h-10 w-10" />,
      title: stepTrans[0].title,
      description: stepTrans[0].description,
      image: "/step1.png",
    },
    {
      icon: <Settings className="h-10 w-10" />,
      title: stepTrans[1].title,
      description: stepTrans[1].description,
      image: "/step2.jpg",
    },
    {
      icon: <Tv className="h-10 w-10" />,
      title: stepTrans[2].title,
      description: stepTrans[2].description,
      image: "/step3.jpg",
    },
  ]

  return (
    <section id="how-to-use" className="w-full py-20 px-10 md:px-20 bg-gradient-to-t from-background to-slate-100 dark:from-background dark:to-slate-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div ref={ref} className="text-center mb-16">
          <Title title={t("title")} description={t("subtitle")} />
        </div>
        
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-primary/20 hidden md:block" />

          <div className="space-y-20 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div
                  className={`flex flex-col ${index % 2 === 1 ? "md:items-start md:text-left" : "md:items-end md:text-right"}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="hidden md:block">
                      <div className="top-1/2  w-12 h-1 bg-primary/30" />
                    </div>
                    <div
                      className={`${index % 2 === 1 ? "order-first" : "order-last"} flex-shrink-0 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary`}
                    >
                      {step.icon}
                    </div>
                    <div className="md:hidden">
                      <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground max-w-md">{step.description}</p>
                </div>

                <div className={`relative ${index % 2 === 1 ? "md:order-first" : ""}`}>
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/5 rounded-2xl blur-xl opacity-70" />
                  <div className="relative rounded-xl overflow-hidden border shadow-lg">
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  <div className="absolute -bottom-4 -right-4 hidden md:flex h-8 w-8 rounded-full bg-accent text-accent-foreground font-bold items-center justify-center">
                    {index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

