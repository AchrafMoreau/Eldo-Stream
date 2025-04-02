"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Plus, ThumbsUp, Info } from "lucide-react"
import Image from "next/image"

export default function ContentShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Categories of content
  const categories = [
    {
      name: "Popular TV Shows",
      items: [
        { id: 1, title: "Breaking Point", image: "/placeholder.svg?height=400&width=300", year: "2023", rating: "8.9" },
        { id: 2, title: "Dark Waters", image: "/placeholder.svg?height=400&width=300", year: "2022", rating: "9.1" },
        { id: 3, title: "The Kingdom", image: "/placeholder.svg?height=400&width=300", year: "2023", rating: "8.7" },
        { id: 4, title: "Midnight Sky", image: "/placeholder.svg?height=400&width=300", year: "2022", rating: "8.5" },
        { id: 5, title: "Lost Empire", image: "/placeholder.svg?height=400&width=300", year: "2023", rating: "9.3" },
        { id: 6, title: "The Last Hope", image: "/placeholder.svg?height=400&width=300", year: "2022", rating: "8.8" },
      ],
    },
    {
      name: "Blockbuster Movies",
      items: [
        {
          id: 7,
          title: "Eternal Shadows",
          image: "/placeholder.svg?height=400&width=300",
          year: "2023",
          rating: "8.6",
        },
        { id: 8, title: "Rising Storm", image: "/placeholder.svg?height=400&width=300", year: "2022", rating: "9.0" },
        { id: 9, title: "The Awakening", image: "/placeholder.svg?height=400&width=300", year: "2023", rating: "8.9" },
        { id: 10, title: "Frozen Heart", image: "/placeholder.svg?height=400&width=300", year: "2022", rating: "8.4" },
        { id: 11, title: "Crimson Peak", image: "/placeholder.svg?height=400&width=300", year: "2023", rating: "9.2" },
        { id: 12, title: "Silent Echo", image: "/placeholder.svg?height=400&width=300", year: "2022", rating: "8.7" },
      ],
    },
    {
      name: "Live Sports",
      items: [
        {
          id: 13,
          title: "Premier League",
          image: "/placeholder.svg?height=400&width=300",
          year: "Live",
          rating: "9.5",
        },
        { id: 14, title: "NBA Finals", image: "/placeholder.svg?height=400&width=300", year: "Live", rating: "9.3" },
        { id: 15, title: "Formula 1", image: "/placeholder.svg?height=400&width=300", year: "Live", rating: "9.1" },
        {
          id: 16,
          title: "UFC Championship",
          image: "/placeholder.svg?height=400&width=300",
          year: "Live",
          rating: "9.4",
        },
        { id: 17, title: "Tennis Open", image: "/placeholder.svg?height=400&width=300", year: "Live", rating: "8.9" },
        { id: 18, title: "Golf Masters", image: "/placeholder.svg?height=400&width=300", year: "Live", rating: "8.8" },
      ],
    },
  ]

  // State for carousel scrolling
  const [scrollPositions, setScrollPositions] = useState({})
  const carouselRefs = useRef({})

  const scroll = (categoryName, direction) => {
    const container = carouselRefs.current[categoryName]
    if (container) {
      const scrollAmount = direction === "left" ? -container.offsetWidth * 0.75 : container.offsetWidth * 0.75
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section ref={ref} className="w-full py-16 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8"
        >
          Explore Our Vast Library
        </motion.h2>

        {categories.map((category, categoryIndex) => (
          <div key={category.name} className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              className="flex items-center justify-between mb-4"
            >
              <h3 className="text-2xl font-bold">{category.name}</h3>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={() => scroll(category.name, "left")}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={() => scroll(category.name, "right")}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </motion.div>

            <div
              ref={(el) => (carouselRefs.current[category.name] = el)}
              className="flex overflow-x-auto space-x-4 pb-4 hide-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {category.items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.1 * categoryIndex + 0.05 * index }}
                  className="flex-shrink-0 relative group"
                  style={{ width: "250px" }}
                >
                  <div className="relative h-[150px] w-[250px] overflow-hidden rounded-md transition-transform duration-300 group-hover:scale-105">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                      >
                        <Play className="h-5 w-5 fill-white" />
                      </Button>
                    </div>
                  </div>

                  <div className="mt-2">
                    <h4 className="font-medium text-sm truncate">{item.title}</h4>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      <span>{item.year}</span>
                      <span className="mx-1">•</span>
                      <span className="flex items-center">
                        <ThumbsUp className="h-3 w-3 mr-1" />
                        {item.rating}
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-7 w-7 rounded-full bg-background/80 backdrop-blur-sm"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-7 w-7 rounded-full bg-background/80 backdrop-blur-sm"
                    >
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-7 w-7 rounded-full bg-background/80 backdrop-blur-sm"
                    >
                      <Info className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-xl mb-6">Ready to explore thousands more titles?</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
            Get Full Access Now
          </Button>
        </motion.div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

