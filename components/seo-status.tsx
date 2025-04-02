"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Clock, AlertCircle } from "lucide-react"

export default function SeoStatus() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const seoTasks = [
    {
      task: "SSG/ISR Implemented",
      status: "complete",
      description: "Static Site Generation with Incremental Static Regeneration for optimal performance and freshness",
    },
    {
      task: "Metadata Optimized",
      status: "complete",
      description: "Enhanced meta tags, Open Graph, Twitter Cards, and canonical URLs",
    },
    {
      task: "Mobile-Friendly",
      status: "complete",
      description: "Fully responsive design that works perfectly on all devices",
    },
    {
      task: "Schema Markup Added",
      status: "complete",
      description: "Structured data for Organization, Service, and FAQ for rich search results",
    },
    {
      task: "Backlinks Built",
      status: "pending",
      description: "Ongoing process of building high-quality backlinks from relevant websites",
    },
    {
      task: "Core Web Vitals",
      status: "complete",
      description: "Optimized for LCP, FID, and CLS performance metrics",
    },
    {
      task: "Semantic HTML",
      status: "complete",
      description: "Proper HTML structure with semantic elements for better accessibility and SEO",
    },
    {
      task: "Image Optimization",
      status: "complete",
      description: "Compressed images with proper alt text and lazy loading",
    },
  ]

  return (
    <section ref={ref} className="w-full py-16 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient-primary">
            SEO Optimization Status
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
            We've implemented comprehensive SEO strategies to ensure our website ranks highly in search engines, making
            it easier for potential customers to find us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {seoTasks.map((task, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300 card-hover">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">{task.task}</CardTitle>
                  {task.status === "complete" ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : task.status === "pending" ? (
                    <Clock className="h-5 w-5 text-accent" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-destructive" />
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{task.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-secondary/5 p-6 rounded-lg border border-border"
        >
          <h3 className="text-xl font-bold mb-4">Why SEO Matters for Our IPTV Service</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <h4 className="font-medium">Increased Visibility</h4>
              <p className="text-sm text-muted-foreground">
                Our SEO optimization ensures potential customers can find us when searching for IPTV services online.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Better User Experience</h4>
              <p className="text-sm text-muted-foreground">
                SEO best practices improve site speed, mobile-friendliness, and overall user experience.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Targeted Traffic</h4>
              <p className="text-sm text-muted-foreground">
                We attract users specifically looking for IPTV services, increasing conversion rates.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

