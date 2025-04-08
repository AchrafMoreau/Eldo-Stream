export default function SchemaMarkup() {
  // JSON-LD structured data for better search engine understanding
  const DomainName = "https://www.eldoiptv.com"
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ELDO IPTV Service",
    url: DomainName,
    logo: `${DomainName}/logo.png`,
    description:
      "Access 10,000+ live TV channels, movies, and shows with our premium IPTV service. HD & 4K quality, reliable streams, and 24/7 support.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Entertainment District",
      postalCode: "10001",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "customer service",
      availableLanguage: ["English", "Spanish"],
    },
    sameAs: [
      "https://facebook.com/premiumiptv",
      "https://twitter.com/premiumiptv",
      "https://instagram.com/premiumiptv",
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "15.00",
      highPrice: "115.00",
      offerCount: "4",
    },
    potentialAction: {
      "@type": "ViewAction",
      target: `${DomainName}#plans`,
    },
  }

  // Additional schema for the service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "ELDO IPTV Streaming",
    serviceType: "Streaming Service",
    provider: {
      "@type": "Organization",
      name: "ELDO IPTV Service",
    },
    description:
      "Access 10,000+ live TV channels, movies, and shows with our premium IPTV service. HD & 4K quality, reliable streams, and 24/7 support.",
    offers: {
      "@type": "Offer",
      price: "15.00",
      priceCurrency: "USD",
      priceValidUntil: "2024-12-31",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "1250",
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Achraf Zepam",
      },
      reviewBody:
        "I've tried several IPTV services, but this one stands out for its reliability and channel selection. The HD quality is consistently excellent, and I rarely experience any buffering issues.",
    },
  }

  // FAQ schema for common questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What devices can I use with your IPTV service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our IPTV service works on a wide range of devices including Smart TVs, Android TV boxes, Amazon Fire Stick, Apple TV, smartphones, tablets, and computers. Any device that supports IPTV players like VLC, IPTV Smarters, or Perfect Player will work with our service.",
        },
      },
      {
        "@type": "Question",
        name: "How many devices can I use simultaneously?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The number of simultaneous connections depends on your subscription plan. Our Basic plan supports 1 device, Premium plan supports 2 devices, and Ultimate plan supports up to 5 devices streaming at the same time.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer a money-back guarantee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer a 7-day money-back guarantee on all our subscription plans. If you're not satisfied with our service, you can request a full refund within 7 days of your purchase.",
        },
      },
      {
        "@type": "Question",
        name: "What channels are included in your IPTV service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our service includes over 10,000 live TV channels from around the world, including sports, news, entertainment, movies, kids channels, and more. We also offer an extensive VOD (Video on Demand) library with thousands of movies and TV shows.",
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}

