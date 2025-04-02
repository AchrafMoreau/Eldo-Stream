import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import PackagePlans from "@/components/package-plans"
import HowToUse from "@/components/how-to-use"
import WhyUs from "@/components/why-us"
import Testimonials from "@/components/testimonials"
import SeoStatus from "@/components/seo-status"
import Footer from "@/components/footer"
import SchemaMarkup from "@/components/schema-markup"
import Navbar from "@/components/navbar"
import LenisProvider from "@/components/lein-provider"

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  title: "Premium IPTV Service | 10,000+ Live Channels & HD Streaming",
  description:
    "Access 10,000+ live TV channels, movies, and shows with our premium IPTV service. HD & 4K quality, reliable streams, sports coverage, and 24/7 support. Try risk-free today!",
  keywords:
    "IPTV service, streaming service, live TV, HD channels, 4K streaming, sports channels, movies, TV shows, on-demand content, premium IPTV",
  alternates: {
    canonical: "https://yourdomainname.com",
  },
  openGraph: {
    title: "Premium IPTV Service | 10,000+ Live Channels & HD Streaming",
    description:
      "Access 10,000+ live TV channels, movies, and shows with our premium IPTV service. HD & 4K quality, reliable streams, and 24/7 support.",
    url: "https://yourdomainname.com",
    siteName: "Premium IPTV Service",
    images: [
      {
        url: "https://yourdomainname.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Premium IPTV Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium IPTV Service | 10,000+ Live Channels & HD Streaming",
    description:
      "Access 10,000+ live TV channels, movies, and shows with our premium IPTV service. HD & 4K quality, reliable streams, and 24/7 support.",
    images: ["https://yourdomainname.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

// This enables Static Site Generation (SSG)
export const dynamic = "force-static"
export const revalidate = 86400 // Revalidate once per day (ISR)

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Schema.org structured data for rich results */}
      <SchemaMarkup />
      <Navbar />
      <LenisProvider />
      <HeroSection />
      <div className="px-10 md:px-20">
        <AboutSection />
        <PackagePlans />
        <HowToUse />
        <WhyUs />
        <SeoStatus />
        <Testimonials />
      </div>
      <Footer />
    </main>
  )
}

