import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import PackagePlans from "@/components/package-plans"
import HowToUse from "@/components/how-to-use"
import WhyUs from "@/components/why-us"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import SchemaMarkup from "@/components/schema-markup"
import Navbar from "@/components/navbar"
import LenisProvider from "@/components/lein-provider"
import MoviesSlide from "@/components/movies-slide"
import ChannelsSlide from "@/components/channels-slide"
import { Suspense, useEffect, useState } from "react"
import LoadingScreen from "@/components/ui/laoding"

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  title: "ELDO IPTV Service | 10,000+ Live Channels & HD Streaming",
  description:
    "Access 10,000+ live TV channels, movies, and shows with our premium IPTV service. HD & 4K quality, reliable streams, sports coverage, and 24/7 support. Try risk-free today!",
  keywords:
    "IPTV service, streaming service, live TV, HD channels, 4K streaming, sports channels, movies, TV shows, on-demand content, premium IPTV",
  alternates: {
    canonical: "https://www.eldoiptv.com",
  },
  openGraph: {
    title: "ELDO IPTV Service | 10,000+ Live Channels & HD Streaming",
    description:
      "Access 10,000+ live TV channels, movies, and shows with our premium IPTV service. HD & 4K quality, reliable streams, and 24/7 support.",
    url: "https://www.eldoiptv.com",
    siteName: "ELDO IPTV Service",
    images: [
      {
        url: "https://www.eldoiptv.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "ELDO IPTV Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELDO IPTV Service | 10,000+ Live Channels & HD Streaming",
    description:
      "Access 10,000+ live TV channels, movies, and shows with our premium IPTV service. HD & 4K quality, reliable streams, and 24/7 support.",
    images: ["https://www.eldoiptv.com/twitter-image.jpg"],
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
  icons:[
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ]
}

// This enables Static Site Generation (SSG)
export const dynamic = "force-static"
export const revalidate = 86400 // Revalidate once per day (ISR)

export default function Home() {
  return (
    <main className="min-h-screen" >
      <Suspense fallback={null}>
      {/* Schema.org structured data for rich results */}
        <SchemaMarkup />
        <Navbar />
        <LenisProvider />
        <HeroSection />
        <ChannelsSlide />
        <AboutSection />
        <MoviesSlide />
        <PackagePlans />
        <HowToUse />
        <WhyUs />
        <Testimonials />
        <Footer />
      </Suspense>
    </main>
  )
}

