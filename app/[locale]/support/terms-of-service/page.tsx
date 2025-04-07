"use client"

import { motion } from "framer-motion"
import { SupportLayout } from "@/components/support/page-layout"
import { PageTransition } from "@/components/support/page-translation"

export default function TermsOfServicePage() {
  return (
    <PageTransition>
      <SupportLayout title="Terms of Service" description="Please read these terms carefully before using our service">
        <div className="prose prose-sm sm:prose max-w-none">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using our IPTV service, you agree to be bound by these Terms of Service and all applicable
              laws and regulations. If you do not agree with any of these terms, you are prohibited from using or
              accessing this service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              Our IPTV service provides users with access to television content over Internet Protocol networks. The
              content available through our service may change from time to time without prior notice.
            </p>

            <h2>3. Subscription and Billing</h2>
            <p>3.1. To access our IPTV service, you must purchase a subscription.</p>
            <p>3.2. All subscription fees are non-refundable except as expressly set forth in our refund policy.</p>
            <p>
              3.3. We reserve the right to change subscription fees at any time. Any changes to subscription fees will
              be effective upon renewal of your subscription.
            </p>
            <p>3.4. You are responsible for all charges incurred under your account, including applicable taxes.</p>

            <h2>4. User Responsibilities</h2>
            <p>4.1. You agree not to share your account credentials with any third party.</p>
            <p>
              4.2. You agree not to use our service for any illegal purpose or in violation of any local, state,
              national, or international law.
            </p>
            <p>
              4.3. You agree not to redistribute, retransmit, or rebroadcast any content obtained through our service.
            </p>
            <p>
              4.4. You are responsible for maintaining the confidentiality of your account information and for all
              activities that occur under your account.
            </p>

            <h2>5. Content Disclaimer</h2>
            <p>5.1. We do not guarantee the availability of any specific content.</p>
            <p>
              5.2. We are not responsible for the content provided through our service and make no warranties or
              representations regarding the content's accuracy, reliability, or quality.
            </p>

            <h2>6. Service Availability</h2>
            <p>
              6.1. We strive to provide uninterrupted service, but we do not guarantee that the service will be
              available at all times.
            </p>
            <p>
              6.2. We reserve the right to suspend or terminate the service for maintenance or any other reason without
              prior notice.
            </p>

            <h2>7. Intellectual Property</h2>
            <p>
              All content provided through our service is protected by copyright, trademark, and other intellectual
              property laws. You agree not to reproduce, distribute, modify, or create derivative works based on any
              content obtained through our service.
            </p>

            <h2>8. Termination</h2>
            <p>
              8.1. We reserve the right to terminate or suspend your account and access to our service immediately,
              without prior notice or liability, for any reason.
            </p>
            <p>8.2. Upon termination, your right to use the service will immediately cease.</p>

            <h2>9. Limitation of Liability</h2>
            <p>
              In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages,
              including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting
              from your access to or use of or inability to access or use the service.
            </p>

            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms of Service at any time. It is your responsibility to
              review these Terms of Service periodically for changes.
            </p>

            <h2>11. Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us at support@example.com.</p>

            <p className="text-muted-foreground mt-8">Last updated: April 6, 2025</p>
          </motion.div>
        </div>
      </SupportLayout>
    </PageTransition>
  )
}

