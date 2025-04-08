import type { MetadataRoute } from "next"

// Generate robots.txt for search engine crawling instructions
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/private/"],
    },
    sitemap: "https://eldoiptv.com/sitemap.xml",
  }
}

