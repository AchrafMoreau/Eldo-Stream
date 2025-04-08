"use client"

import { motion } from "framer-motion"
import { SupportLayout } from "@/components/support/page-layout"
import { PageTransition } from "@/components/support/page-translation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Smartphone, Tv, Laptop } from "lucide-react"
import { useTranslations } from "next-intl"

export default function InstallationGuidePage() {
  const t = useTranslations("installation")
  return (
    <PageTransition>
      <SupportLayout
        title={t('title')}
        description={t("description")}
      >
        <Tabs defaultValue="android" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="android" className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              <span className="hidden sm:inline">
                {t('tabs.android')}
              </span>
            </TabsTrigger>
            <TabsTrigger value="ios" className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              <span className="hidden sm:inline">
                {t('tabs.ios')}
              </span>
            </TabsTrigger>
            <TabsTrigger value="smart-tv" className="flex items-center gap-2">
              <Tv className="h-4 w-4" />
              <span className="hidden sm:inline">
                {t("tabs.smart-tv")}
              </span>
            </TabsTrigger>
            <TabsTrigger value="pc" className="flex items-center gap-2">
              <Laptop className="h-4 w-4" />
              <span className="hidden sm:inline">
                {t('tabs.pc')}
              </span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="android" className="space-y-6">
            <InstallationSteps
              steps={t.raw('steps.android')}
            />
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">
                {t('recommended_apps')}
              </h4>
              <ul className="space-y-2">
                {t.raw('android_apps').map((app: string, index: number) => (
                  <li key={index}>{app}</li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="ios" className="space-y-6">
            <InstallationSteps
              steps={t.raw('steps.ios')}
            />
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">
                {t('recommended_apps')}
              </h4>
              <ul className="space-y-2">
                {t.raw('ios_apps').map((app: string, index: number) => (
                  <li key={index}>{app}</li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="smart-tv" className="space-y-6">
            <InstallationSteps
              steps={t.raw('steps.smart-tv')}
            />
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">
                {t("recommended_apps")}
              </h4>
              <ul className="space-y-2">
                {t.raw('smart_tv_apps').map((app: string, index: number) => (
                  <li key={index}>{app}</li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="pc" className="space-y-6">
            <InstallationSteps
              steps={t.raw("steps.pc")}
            />
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">
                {t('recommended_apps')}
              </h4>
              <ul className="space-y-2">
                {t.raw('pc_apps').map((app: string, index: number) => (
                  <li key={index}>{app}</li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-10 p-5 bg-primary/5 rounded-lg border border-primary/10">
          <h3 className="text-lg font-medium mb-3">
            {t('help_section.title')}
          </h3>
          <p className="text-muted-foreground mb-4">
            {t('help_section.description')}
          </p>
          <div className="flex flex-wrap gap-3">
            <motion.a
              href="/support/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium"
            >
              {t('help_section.contact')}
            </motion.a>
            <motion.a
              href="/support/faq"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md text-sm font-medium"
            >
              {t('help_section.faq')}
            </motion.a>
          </div>
        </div>
      </SupportLayout>
    </PageTransition>
  )
}

function InstallationSteps({ steps }: { steps: string[] }) {
  const t = useTranslations("installation")
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="flex items-start gap-3 p-3 rounded-md hover:bg-primary/30 transition-colors"
        >
          <div className="bg-primary/10 rounded-full p-1 mt-0.5">
            <Check className="h-4 w-4 text-primary" />
          </div>
          <div>
            <span className="font-medium">
              {t('steps.key')}{" "}
               {index + 1}{" "}:</span> {step}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

