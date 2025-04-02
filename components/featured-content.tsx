"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, Info } from "lucide-react"
import Image from "next/image"

export default function FeaturedContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const featuredItems = [
    {
      id: 1,
      title: "Game of Crowns",
      description:
        "In a land of kings and betrayal, seven families fight for control of the realm while ancient enemies threaten from beyond.",
      image: "/placeholder.svg?height=600&width=1000",
      logo: "/placeholder.svg?height=200&width=400",
      category: "Fantasy Drama",
    },
    {
      id: 2,
      title: "Breaking News",
      description:
        "A high school chemistry teacher turned drug lord builds a meth empire while dealing with the consequences of his choices.",
      image: "/placeholder.svg?height=600&width=1000",
      logo: "/placeholder.svg?height=200&width=400",
      category: "Crime Drama",
    },
    {
      id: 3,
      title: "Stranger Things",
      description:
        "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, supernatural forces, and one strange girl.",
      image: "/placeholder.svg?height=600&width=1000",
      logo: "/placeholder.svg?height=200&width=400",
      category: "Sci-Fi Horror",
    },
  ]

  return (
    <section ref={ref} className="w-full py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8"
        >
          Featured This Week
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-3 h-12">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-white/70">{item.category}</p>
                  </div>

                  <p className="text-sm text-white/80 mb-4 line-clamp-3">{item.description}</p>

                  <div className="flex gap-3">
                    <Button size="sm" className="bg-white text-black hover:bg-white/90">
                      <Play className="mr-1 h-4 w-4 fill-black" />
                      Watch
                    </Button>
                    <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/20">
                      <Info className="mr-1 h-4 w-4" />
                      More Info
                    </Button>
                  </div>
                </div>
              </div>

              <div className="absolute top-3 right-3 bg-primary/90 text-white text-xs px-2 py-1 rounded">NEW</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

