"use client"

import { motion } from "framer-motion"
import { SupportLayout } from "@/components/support/page-layout"
import { PageTransition } from "@/components/support/page-translation"

export default function PrivacyPolicyPage() {
  return (
    <PageTransition>
      <SupportLayout
        title="Privacy Policy"
        description="Learn how we collect, use, and protect your personal information"
      >
        <div className="prose prose-sm sm:prose max-w-none">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use
              our IPTV service. Please read this Privacy Policy carefully. By using our service, you consent to the data
              practices described in this policy.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect several types of information from and about users of our service, including:</p>
            <ul>
              <li>Personal information such as name, email address, and payment information</li>
              <li>Usage data such as viewing habits, login times, and device information</li>
              <li>Technical data such as IP address, browser type, and operating system</li>
            </ul>

            <h2>3. How We Collect Information</h2>
            <p>We collect information:</p>
            <ul>
              <li>Directly from you when you register for our service, make a purchase, or contact customer support</li>
              <li>Automatically as you navigate through our service using cookies and similar technologies</li>
              <li>From third-party service providers such as payment processors</li>
            </ul>

            <h2>4. How We Use Your Information</h2>
            <p>We may use the information we collect about you for various purposes, including:</p>
            <ul>
              <li>Providing and maintaining our service</li>
              <li>Processing your payments and subscriptions</li>
              <li>Personalizing your experience</li>
              <li>Improving our service</li>
              <li>Communicating with you about service updates, offers, and promotions</li>
              <li>Monitoring and analyzing usage patterns and trends</li>
              <li>Detecting, preventing, and addressing technical issues</li>
            </ul>

            <h2>5. Disclosure of Your Information</h2>
            <p>We may disclose your personal information:</p>
            <ul>
              <li>To comply with legal obligations</li>
              <li>To protect and defend our rights and property</li>
              <li>To prevent or investigate possible wrongdoing in connection with the service</li>
              <li>To third-party service providers who perform services on our behalf</li>
              <li>With your consent</li>
            </ul>

            <h2>6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal
              information. However, no method of transmission over the Internet or electronic storage is 100% secure,
              and we cannot guarantee absolute security.
            </p>

            <h2>7. Your Data Protection Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>The right to access your personal information</li>
              <li>The right to rectify inaccurate personal information</li>
              <li>The right to request the deletion of your personal information</li>
              <li>The right to restrict the processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to object to processing</li>
            </ul>

            <h2>8. Children's Privacy</h2>
            <p>
              Our service is not intended for children under the age of 18. We do not knowingly collect personal
              information from children under 18. If you are a parent or guardian and believe your child has provided us
              with personal information, please contact us.
            </p>

            <h2>9. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2>10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@example.com.</p>

            <p className="text-muted-foreground mt-8">Last updated: April 6, 2025</p>
          </motion.div>
        </div>
      </SupportLayout>
    </PageTransition>
  )
}

