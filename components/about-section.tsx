"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Tv, Film, Globe, Shield } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="w-full py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div ref={ref} className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient-primary"
          >
            Who We Are
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
            We are a leading provider of premium IPTV services, dedicated to bringing you the best entertainment
            experience possible. With years of industry expertise, we deliver reliable, high-quality streaming solutions
            to customers worldwide.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Tv className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Premium Content</h3>
                <p className="text-muted-foreground">
                  Access to over 10,000 live TV channels from around the world, including sports, news, entertainment,
                  and more.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Film className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">On-Demand Library</h3>
                <p className="text-muted-foreground">
                  Extensive collection of movies and TV shows available on-demand, updated regularly with the latest
                  releases.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Global Coverage</h3>
                <p className="text-muted-foreground">
                  Content from all major countries and regions, with multi-language support and international channels.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Reliable Service</h3>
                <p className="text-muted-foreground">
                  99.9% uptime guarantee with redundant servers, ensuring your entertainment is always available.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Our team at work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-xl">
                  <p className="font-medium text-lg">

                  </p>
                  <p className="text-primary font-bold mt-2">— Eldo-Stream CEO & Founder</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 p-3 -left-6 h-24 w-24 bg-accent rounded-lg flex items-center justify-center text-accent-foreground">
              <div className="text-center">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-xs">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
