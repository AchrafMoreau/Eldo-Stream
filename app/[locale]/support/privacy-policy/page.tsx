"use client"

import { motion } from "framer-motion"
import { SupportLayout } from "@/components/support/page-layout"
import { PageTransition } from "@/components/support/page-translation"
import { useTranslations } from "next-intl"

export default function PrivacyPolicyPage() {
  const t = useTranslations("privacy_policy")
  return (
    <PageTransition>
      <SupportLayout
        title={t("title")}
        description={t("description")}
      >
        <div className="prose prose-sm sm:prose max-w-none">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2>{t('sections.introduction.title')}</h2>
            <p>
              {t('sections.introduction.content')}
            </p>

            <h2>{t('sections.information_we_collect.title')}</h2>
            <p>
              {t('sections.information_we_collect.content')}
            </p>
            <ul>
              {t.raw('sections.information_we_collect.items').map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2>{t("sections.how_we_collect.title")}</h2>
            <p>
              {t("sections.how_we_collect.content")}
            </p>
            <ul>
              {t.raw("sections.how_we_collect.items").map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2>{t('sections.how_we_use.title')}</h2>
            <p>
              {t('sections.how_we_use.content')}
            </p>
            <ul>
              {t.raw('sections.how_we_use.items').map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2>{t('sections.disclosure.title')}</h2>
            <p>
              {t('sections.disclosure.content')}
            </p>
            <ul>
              {t.raw('sections.disclosure.items').map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2>{t('sections.security.title')}</h2>
            <p>
              {t('sections.security.content')}
            </p>

            <h2>{t('sections.your_rights.title')}</h2>
            <p>
              {t('sections.your_rights.content')}
            </p>
            <ul>
              {t.raw('sections.your_rights.items').map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2>
              {t('sections.children.title')}
            </h2>
            <p>
              {t('sections.children.content')}
            </p>

            <h2>
              {t('sections.changes.title')}
            </h2>
            <p>
              {t('sections.changes.content')}
            </p>

            <h2>
              {t('sections.contact.title')}
            </h2>
            <p>
              {t('sections.contact.content')}
            </p>
            <p className="text-muted-foreground mt-8">
              {t('last_updated')}
            </p>
          </motion.div>
        </div>
      </SupportLayout>
    </PageTransition>
  )
}

