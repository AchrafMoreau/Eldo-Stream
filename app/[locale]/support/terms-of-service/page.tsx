"use client"

import { motion } from "framer-motion"
import { SupportLayout } from "@/components/support/page-layout"
import { PageTransition } from "@/components/support/page-translation"
import { useTranslations } from "next-intl"

export default function TermsOfServicePage() {
  const t = useTranslations("terms")
  return (
    <PageTransition>
      <SupportLayout title={t('title')} description={t('description')}>
        <div className="prose prose-sm sm:prose max-w-none">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2>
              {t("sections.acceptance.title")}
            </h2>
            <p>
              {t('sections.acceptance.content')}
            </p>

            <h2>
              {t("sections.description.title")}
            </h2>
            <p>
              {t("sections.description.content")}
            </p>

            <h2>
              {t("sections.subscription.title")}
            </h2>
            <p>
              {t("sections.subscription.points.p1")}
            </p>
            <p>
              {t("sections.subscription.points.p2")}
            </p>
            <p>
              {t("sections.subscription.points.p3")}
            </p>
            <p>
              {t("sections.subscription.points.p4")}
            </p>

            <h2>
              {t("sections.responsibilities.title")}
            </h2>
            <p>
              {t("sections.responsibilities.points.p1")}
            </p>
            <p>
              {t("sections.responsibilities.points.p2")}
            </p>
            <p>
              {t("sections.responsibilities.points.p3")}
            </p>
            <p>
              {t("sections.responsibilities.points.p4")}
            </p>

            <h2>
              {t("sections.disclaimer.title")}
            </h2>
            <p>
              {t("sections.disclaimer.points.p1")}
            </p>
            <p>
              {t("sections.disclaimer.points.p2")}
            </p>

            <h2>
              {t("sections.availability.title")}
            </h2>
            <p>
              {t("sections.availability.points.p1")}
            </p>
            <p>
              {t("sections.availability.points.p2")}
            </p>

            <h2>
              {t("sections.intellectual.title")}
            </h2>
            <p>
              {t("sections.intellectual.content")}
            </p>

            <h2>
              {t("sections.termination.title")}
            </h2>
            <p>
              {t("sections.termination.points.p1")}
            </p>
            <p>
              {t("sections.termination.points.p2")}
            </p>

            <h2>
              {t("sections.liability.title")}
            </h2>
            <p>
              {t("sections.liability.content")}
            </p>

            <h2>
              {t("sections.changes.title")}
            </h2>
            <p>
              {t("sections.changes.content")}
            </p>

            <h2>
              {t("sections.contact.title")}
            </h2>
            <p>
              {t("sections.contact.content")}
            </p>

            <p className="text-muted-foreground mt-8">
              {t("sections.lastUpdated")}
            </p>
          </motion.div>
        </div>
      </SupportLayout>
    </PageTransition>
  )
}

