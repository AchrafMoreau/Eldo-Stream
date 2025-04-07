"use client"

import { motion } from "framer-motion"
import { SupportLayout } from "@/components/support/page-layout"
import { PageTransition } from "@/components/support/page-translation"
import { Smartphone, Tv, Tablet, Laptop, Box, CheckCircle2, XCircle, AlertCircle } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function DeviceCompatibilityPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDevices = devices.filter(
    (device) =>
      device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      device.type.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <PageTransition>
      <SupportLayout
        title="Device Compatibility"
        description="Check if your device is compatible with our IPTV service"
      >
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Supported Devices</h2>
            <p className="text-muted-foreground mb-6">
              Our IPTV service is compatible with a wide range of devices. Check the list below to see if your device is
              supported.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <DeviceTypeCard icon={<Tv />} title="Smart TVs" description="Samsung, LG, Sony, etc." />
              <DeviceTypeCard icon={<Box />} title="Streaming Devices" description="Fire TV, Android TV, Apple TV" />
              <DeviceTypeCard icon={<Smartphone />} title="Mobile Devices" description="iOS and Android phones" />
              <DeviceTypeCard icon={<Tablet />} title="Tablets" description="iPad, Android tablets" />
              <DeviceTypeCard icon={<Laptop />} title="Computers" description="Windows, Mac, Linux" />
              <DeviceTypeCard icon={<Box />} title="IPTV Boxes" description="MAG, Formuler, Dreamlink" />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Compatibility List</h2>
              <div className="w-full max-w-xs">
                <Input
                  type="text"
                  placeholder="Search devices..."
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
                    <TableHead>Device</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Compatibility</TableHead>
                    <TableHead className="hidden md:table-cell">Recommended App</TableHead>
                    <TableHead className="hidden md:table-cell">Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDevices.map((device, index) => (
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
                        No devices found matching your search
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium mb-2">Don't see your device?</h3>
            <p className="text-muted-foreground mb-3">
              If your specific device is not listed, it may still be compatible. Contact our support team for
              assistance.
            </p>
            <motion.a
              href="/support/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium"
            >
              Contact Support
            </motion.a>
          </div>
        </div>
      </SupportLayout>
    </PageTransition>
  )
}

function DeviceTypeCard({ icon, title, description }) {
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

function CompatibilityBadge({ status }) {
  if (status === "Full") {
    return (
      <div className="flex items-center gap-1 text-green-600">
        <CheckCircle2 className="h-4 w-4" />
        <span>Full</span>
      </div>
    )
  } else if (status === "Partial") {
    return (
      <div className="flex items-center gap-1 text-amber-600">
        <AlertCircle className="h-4 w-4" />
        <span>Partial</span>
      </div>
    )
  } else {
    return (
      <div className="flex items-center gap-1 text-red-600">
        <XCircle className="h-4 w-4" />
        <span>Not Compatible</span>
      </div>
    )
  }
}

const devices = [
  {
    name: "Samsung Smart TV (2016+)",
    type: "Smart TV",
    compatibility: "Full",
    recommendedApp: "Smart IPTV, SS IPTV",
    notes: "Works best with Tizen OS 2.4 or higher",
  },
  {
    name: "LG Smart TV (WebOS 3.0+)",
    type: "Smart TV",
    compatibility: "Full",
    recommendedApp: "Smart IPTV, SS IPTV",
    notes: "WebOS 3.0 or higher required",
  },
  {
    name: "Sony Android TV",
    type: "Smart TV",
    compatibility: "Full",
    recommendedApp: "TiviMate, IPTV Smarters",
    notes: "Android TV 7.0 or higher recommended",
  },
  {
    name: "Hisense Smart TV",
    type: "Smart TV",
    compatibility: "Partial",
    recommendedApp: "Smart IPTV",
    notes: "Some models may have performance issues",
  },
  {
    name: "Amazon Fire TV Stick",
    type: "Streaming Device",
    compatibility: "Full",
    recommendedApp: "TiviMate, IPTV Smarters",
    notes: "All generations supported",
  },
  {
    name: "Amazon Fire TV Cube",
    type: "Streaming Device",
    compatibility: "Full",
    recommendedApp: "TiviMate, IPTV Smarters",
    notes: "Excellent performance",
  },
  {
    name: "Nvidia Shield TV",
    type: "Streaming Device",
    compatibility: "Full",
    recommendedApp: "TiviMate, Kodi",
    notes: "Best performance of all Android devices",
  },
  {
    name: "Apple TV 4K",
    type: "Streaming Device",
    compatibility: "Full",
    recommendedApp: "iPlayTV, GSE Smart IPTV",
    notes: "tvOS 14.0 or higher recommended",
  },
  {
    name: "Roku",
    type: "Streaming Device",
    compatibility: "Partial",
    recommendedApp: "Web browser channel",
    notes: "Limited functionality, not recommended",
  },
  {
    name: "Chromecast with Google TV",
    type: "Streaming Device",
    compatibility: "Full",
    recommendedApp: "TiviMate, IPTV Smarters",
    notes: "Older Chromecast models require casting from another device",
  },
  {
    name: "iPhone/iPad",
    type: "Mobile Device",
    compatibility: "Full",
    recommendedApp: "GSE Smart IPTV, IPTV Smarters",
    notes: "iOS 12.0 or higher recommended",
  },
  {
    name: "Android Phone/Tablet",
    type: "Mobile Device",
    compatibility: "Full",
    recommendedApp: "TiviMate, IPTV Smarters",
    notes: "Android 7.0 or higher recommended",
  },
  {
    name: "Windows PC",
    type: "Computer",
    compatibility: "Full",
    recommendedApp: "VLC, MyIPTV Player",
    notes: "Windows 10 or higher recommended",
  },
  {
    name: "Mac",
    type: "Computer",
    compatibility: "Full",
    recommendedApp: "VLC, IPTV",
    notes: "macOS 10.14 or higher recommended",
  },
  {
    name: "Linux",
    type: "Computer",
    compatibility: "Full",
    recommendedApp: "VLC, Kodi",
    notes: "Most distributions supported",
  },
  {
    name: "MAG 322/324",
    type: "IPTV Box",
    compatibility: "Full",
    recommendedApp: "Built-in",
    notes: "Optimized for IPTV services",
  },
  {
    name: "Formuler Z8/Z10",
    type: "IPTV Box",
    compatibility: "Full",
    recommendedApp: "MyTVOnline",
    notes: "One of the best dedicated IPTV boxes",
  },
  {
    name: "Dreamlink T3",
    type: "IPTV Box",
    compatibility: "Full",
    recommendedApp: "DOL3",
    notes: "Excellent for IPTV services",
  },
  {
    name: "BuzzTV XRS 4500",
    type: "IPTV Box",
    compatibility: "Full",
    recommendedApp: "Built-in",
    notes: "Good performance for IPTV",
  },
  {
    name: "Xiaomi Mi Box S",
    type: "Streaming Device",
    compatibility: "Full",
    recommendedApp: "TiviMate, IPTV Smarters",
    notes: "Good budget Android TV box",
  },
  {
    name: "PlayStation 4/5",
    type: "Gaming Console",
    compatibility: "Partial",
    recommendedApp: "Plex, Web Browser",
    notes: "Limited functionality through browser",
  },
  {
    name: "Xbox Series X/S",
    type: "Gaming Console",
    compatibility: "Partial",
    recommendedApp: "Web Browser",
    notes: "Limited functionality through browser",
  },
  {
    name: "Samsung Galaxy Watch",
    type: "Smartwatch",
    compatibility: "Not Compatible",
    recommendedApp: "N/A",
    notes: "Screen too small for practical use",
  },
  {
    name: "Amazon Echo Show",
    type: "Smart Display",
    compatibility: "Partial",
    recommendedApp: "Web Browser",
    notes: "Limited functionality through browser",
  },
]

