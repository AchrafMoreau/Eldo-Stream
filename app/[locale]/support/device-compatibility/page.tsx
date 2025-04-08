"use client"

import { motion } from "framer-motion"
import { SupportLayout } from "@/components/support/page-layout"
import { PageTransition } from "@/components/support/page-translation"
import { Smartphone, Tv, Tablet, Laptop, Box, CheckCircle2, XCircle, AlertCircle } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useTranslations } from "next-intl"

type Device = {
  name: string
  type: string
  compatibility: string
  recommendedApp: string
  notes?: string
}
export default function DeviceCompatibilityPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const t = useTranslations("deviceCompatibility")

  const devices = t.raw('devices');
  const filteredDevices = devices && devices.filter(
    (device: Device) =>
      device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      device.type.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <PageTransition>
      <SupportLayout
        title={t("title")}
        description={t("description")}
      >
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              {t("supportedDevices.title")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t("supportedDevices.description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <DeviceTypeCard icon={<Tv />} title={t('supportedDevices.deviceCards.smartTvs.title')} description={t('supportedDevices.deviceCards.smartTvs.description')} />
              <DeviceTypeCard icon={<Box />} title={t('supportedDevices.deviceCards.streamingDevices.title')} description={t('supportedDevices.deviceCards.streamingDevices.description')} />
              <DeviceTypeCard icon={<Smartphone />} title={t('supportedDevices.deviceCards.mobileDevices.title')} description={t('supportedDevices.deviceCards.mobileDevices.description')} />
              <DeviceTypeCard icon={<Tablet />} title={t('supportedDevices.deviceCards.tablets.title')} description={t('supportedDevices.deviceCards.tablets.description')} />
              <DeviceTypeCard icon={<Laptop />} title={t('supportedDevices.deviceCards.computers.title')} description={t('supportedDevices.deviceCards.computers.description')}/>
              <DeviceTypeCard icon={<Box />} title={t('supportedDevices.deviceCards.iptvBoxes.title')} description={t('supportedDevices.deviceCards.iptvBoxes.description')} />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">
                {t('compatibilityList.title')}
              </h2>
              <div className="w-full max-w-xs">
                <Input
                  type="text"
                  placeholder={t('compatibilityList.searchPlaceholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      {t('compatibilityList.tableHeaders.device')}
                    </TableHead>
                    <TableHead>
                      {t('compatibilityList.tableHeaders.type')}
                    </TableHead>
                    <TableHead>
                      {t('compatibilityList.tableHeaders.compatibility')}
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      {t('compatibilityList.tableHeaders.recommendedApp')}
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      {t('compatibilityList.tableHeaders.notes')}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDevices.map((device: Device, index: number) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{device.name}</TableCell>
                      <TableCell>{device.type}</TableCell>
                      <TableCell>
                        <CompatibilityBadge status={device.compatibility} />
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{device.recommendedApp}</TableCell>
                      <TableCell className="hidden md:table-cell text-muted-foreground text-sm">
                        {device.notes}
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredDevices.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-4 text-muted-foreground">
                        {t('compatibilityList.noResults')}
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium mb-2">
              {t('missingDevice.title')}
            </h3>
            <p className="text-muted-foreground mb-3">
              {t('missingDevice.description')}
            </p>
            <motion.a
              href="/support/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium"
            >
              {t('missingDevice.contactButton')}
            </motion.a>
          </div>
        </div>
      </SupportLayout>
    </PageTransition>
  )
}

function DeviceTypeCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div whileHover={{ y: -5 }} className="bg-card border rounded-lg p-4 flex items-start gap-3 shadow-sm">
      <div className="bg-primary/10 p-2 rounded-full">{icon}</div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  )
}

function CompatibilityBadge({ status }: { status: string }) {
  const t = useTranslations("deviceCompatibility.compatibilityList.compatibilityStatuses")
  if (status === "Full"
    || status === "Completa"
    || status === "Vollständig"
    || status === "Complet"
  ) {
    return (
      <div className="flex items-center gap-1 text-green-600">
        <CheckCircle2 className="h-4 w-4" />
        <span>
          {t("full")}
        </span>
      </div>
    )
  } else if (status === "Partial"
    || status === "Parcial"
    || status === "Teilweise"
    || status === "Partiel"
    || status === "Parziale"
  ) {
    return (
      <div className="flex items-center gap-1 text-amber-600">
        <AlertCircle className="h-4 w-4" />
        <span>
          {t("partial")}
        </span>
      </div>
    )
  } else {
    return (
      <div className="flex items-center gap-1 text-red-600">
        <XCircle className="h-4 w-4" />
        <span>
          {t("notCompatible")}
        </span>
      </div>
    )
  }
}


