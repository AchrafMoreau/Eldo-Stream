"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Shield, Clock, Globe, Headphones, Tv } from "lucide-react"

export default function WhyUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: <Zap className="h-10 w-10" />,
      title: "High-Speed Streaming",
      description: "Experience buffer-free streaming with our high-performance servers located worldwide.",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Secure Connection",
      description: "Your data and viewing habits are protected with our secure encrypted connections.",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "99.9% Uptime",
      description: "Enjoy uninterrupted entertainment with our reliable service and redundant infrastructure.",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Global Content",
      description: "Access channels and content from around the world, breaking geographical restrictions.",
    },
    {
      icon: <Headphones className="h-10 w-10" />,
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist with any issues.",
    },
    {
      icon: <Tv className="h-10 w-10" />,
      title: "Multi-Device Support",
      description: "Watch on your TV, computer, tablet, smartphone, or any other compatible device.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="why-us" className="w-full py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div ref={ref} className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient-primary"
          >
            Why Choose Us
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-primary mx-auto my-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed"
          >
            We stand out from the competition with our premium features and commitment to quality service.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-border hover:border-primary/50 transition-colors duration-300 card-hover">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-1 w-12 bg-primary/30 rounded-full" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

