"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Tv, Film, Globe, Shield } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import Title from "./ui/title"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const t = useTranslations("aboutUs")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="w-full py-20 px-10 md:px-20 bg-gradient-to-b from-background to-slate-50 dark:from-background dark:to-slate-950">
      <div className="container px-4 md:px-6 mx-auto">
        <div ref={ref} className="text-center mb-12">
          <Title title={t("title")} description={t("description")} />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Tv className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {t('features.premiumContent.title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('features.premiumContent.description')}
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Film className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {t('features.onDemandLibrary.title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('features.onDemandLibrary.description')}
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {t('features.globalCoverage.title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('features.globalCoverage.description')}
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {t('features.reliableService.title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('features.reliableService.description')}
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/eldo-stream-tv.png"
                alt="Our team at work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent " />
              <div className="absolute bottom-6 left-6 right-6 ">
                <div className="backdrop-blur-lg p-4 rounded-xl">
                  <p className="text-white font-medium text-lg">
                    {t('missionStatement.quote')}
                  </p>
                  <p className="text-primary font-bold mt-2">
                    {t('missionStatement.author')}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 p-3 -left-6 h-24 w-24 bg-accent rounded-lg flex items-center justify-center text-accent-foreground">
              <div className="text-center">
                <div className="text-3xl font-bold">{t('experience.years')}</div>
                <div className="text-xs">
                  {t('experience.label')}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
