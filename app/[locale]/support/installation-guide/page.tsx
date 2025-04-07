"use client"

import { motion } from "framer-motion"
import { SupportLayout } from "@/components/support/page-layout"
import { PageTransition } from "@/components/support/page-translation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Smartphone, Tv, Laptop } from "lucide-react"

export default function InstallationGuidePage() {
  return (
    <PageTransition>
      <SupportLayout
        title="Installation Guide"
        description="Step-by-step instructions to set up our IPTV service on your devices"
      >
        <Tabs defaultValue="android" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="android" className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              <span className="hidden sm:inline">Android</span>
            </TabsTrigger>
            <TabsTrigger value="ios" className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              <span className="hidden sm:inline">iOS</span>
            </TabsTrigger>
            <TabsTrigger value="smart-tv" className="flex items-center gap-2">
              <Tv className="h-4 w-4" />
              <span className="hidden sm:inline">Smart TV</span>
            </TabsTrigger>
            <TabsTrigger value="pc" className="flex items-center gap-2">
              <Laptop className="h-4 w-4" />
              <span className="hidden sm:inline">PC/Mac</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="android" className="space-y-6">
            <InstallationSteps
              steps={[
                "Download and install the IPTV Player app from the Google Play Store",
                "Open the app and select 'Add Playlist'",
                "Enter the M3U URL provided in your welcome email",
                "Name your playlist (e.g., 'My IPTV')",
                "Click 'Save' to add the playlist",
                "Your channels should now load and be ready to watch",
              ]}
            />
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Recommended Apps:</h4>
              <ul className="space-y-2">
                <li>• TiviMate</li>
                <li>• IPTV Smarters Pro</li>
                <li>• GSE Smart IPTV</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="ios" className="space-y-6">
            <InstallationSteps
              steps={[
                "Download and install the IPTV Player app from the App Store",
                "Open the app and tap on the '+' icon to add a new playlist",
                "Select 'M3U Playlist' option",
                "Enter the M3U URL provided in your welcome email",
                "Name your playlist (e.g., 'My IPTV')",
                "Tap 'Save' to add the playlist",
                "Your channels should now load and be ready to watch",
              ]}
            />
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Recommended Apps:</h4>
              <ul className="space-y-2">
                <li>• IPTV Smarters Player</li>
                <li>• GSE Smart IPTV</li>
                <li>• IPTV Player</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="smart-tv" className="space-y-6">
            <InstallationSteps
              steps={[
                "On your Smart TV, go to the app store (Samsung Store, LG Content Store, etc.)",
                "Search for and download an IPTV player app",
                "Open the app and navigate to 'Settings' or 'Add Playlist'",
                "Select the option to add a playlist via URL",
                "Enter the M3U URL provided in your welcome email",
                "Name your playlist (e.g., 'My IPTV')",
                "Save the settings and return to the main screen",
                "Your channels should now load and be ready to watch",
              ]}
            />
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Recommended Apps:</h4>
              <ul className="space-y-2">
                <li>• SS IPTV</li>
                <li>• Smart IPTV</li>
                <li>• NET IPTV</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="pc" className="space-y-6">
            <InstallationSteps
              steps={[
                "Download and install VLC Media Player or another IPTV-compatible player",
                "Open the player and go to 'Media' > 'Open Network Stream'",
                "Paste the M3U URL provided in your welcome email",
                "Click 'Play' to start streaming",
                "For a better experience, consider using dedicated IPTV applications like MyIPTV Player or Kodi with the PVR IPTV Simple Client add-on",
              ]}
            />
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Recommended Apps:</h4>
              <ul className="space-y-2">
                <li>• VLC Media Player</li>
                <li>• Kodi (with PVR IPTV Simple Client)</li>
                <li>• MyIPTV Player</li>
                <li>• Perfect Player (Windows)</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-10 p-5 bg-primary/5 rounded-lg border border-primary/10">
          <h3 className="text-lg font-medium mb-3">Need Additional Help?</h3>
          <p className="text-muted-foreground mb-4">
            If you're experiencing issues with installation or setup, our support team is available 24/7 to assist you.
          </p>
          <div className="flex flex-wrap gap-3">
            <motion.a
              href="/support/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium"
            >
              Contact Support
            </motion.a>
            <motion.a
              href="/support/faq"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md text-sm font-medium"
            >
              View FAQ
            </motion.a>
          </div>
        </div>
      </SupportLayout>
    </PageTransition>
  )
}

function InstallationSteps({ steps }) {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="flex items-start gap-3 p-3 rounded-md hover:bg-accent transition-colors"
        >
          <div className="bg-primary/10 rounded-full p-1 mt-0.5">
            <Check className="h-4 w-4 text-primary" />
          </div>
          <div>
            <span className="font-medium">Step {index + 1}:</span> {step}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

