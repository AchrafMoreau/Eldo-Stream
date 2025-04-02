"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Tv, Radio, Clock } from "lucide-react"
import Image from "next/image"

export default function LiveChannels() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const [activeTab, setActiveTab] = useState("all")

  const channels = [
    {
      id: 1,
      name: "Sports HD",
      logo: "/placeholder.svg?height=60&width=60",
      category: "sports",
      viewers: "15.2K",
      live: true,
    },
    {
      id: 2,
      name: "Movies Central",
      logo: "/placeholder.svg?height=60&width=60",
      category: "movies",
      viewers: "8.7K",
      live: true,
    },
    {
      id: 3,
      name: "News 24/7",
      logo: "/placeholder.svg?height=60&width=60",
      category: "news",
      viewers: "12.3K",
      live: true,
    },
    {
      id: 4,
      name: "Kids Zone",
      logo: "/placeholder.svg?height=60&width=60",
      category: "kids",
      viewers: "5.1K",
      live: true,
    },
    {
      id: 5,
      name: "Documentary+",
      logo: "/placeholder.svg?height=60&width=60",
      category: "documentary",
      viewers: "3.8K",
      live: true,
    },
    {
      id: 6,
      name: "Music Hits",
      logo: "/placeholder.svg?height=60&width=60",
      category: "music",
      viewers: "9.4K",
      live: true,
    },
    {
      id: 7,
      name: "Entertainment One",
      logo: "/placeholder.svg?height=60&width=60",
      category: "entertainment",
      viewers: "7.6K",
      live: false,
    },
    {
      id: 8,
      name: "Premium Sports",
      logo: "/placeholder.svg?height=60&width=60",
      category: "sports",
      viewers: "18.9K",
      live: true,
    },
  ]

  const filteredChannels = activeTab === "all" ? channels : channels.filter((channel) => channel.category === activeTab)

  const categories = [
    { id: "all", label: "All Channels" },
    { id: "sports", label: "Sports" },
    { id: "movies", label: "Movies" },
    { id: "news", label: "News" },
    { id: "entertainment", label: "Entertainment" },
    { id: "kids", label: "Kids" },
  ]

  return (
    <section ref={ref} className="w-full py-16 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Live TV Channels</h2>
            <p className="text-muted-foreground mt-2">Watch thousands of live channels from around the world</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Button className="bg-primary hover:bg-primary/90">
              <Tv className="mr-2 h-4 w-4" />
              View All Channels
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex overflow-x-auto pb-4 mb-6 hide-scrollbar"
        >
          <div className="flex space-x-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeTab === category.id ? "default" : "outline"}
                className={`rounded-full ${activeTab === category.id ? "bg-primary hover:bg-primary/90" : ""}`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredChannels.map((channel, index) => (
            <motion.div
              key={channel.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 4) }}
              className="group relative bg-card hover:bg-card/80 rounded-lg p-4 border border-border transition-colors"
            >
              <div className="flex items-center mb-3">
                <div className="relative h-10 w-10 mr-3 rounded-full overflow-hidden bg-muted">
                  <Image src={channel.logo || "/placeholder.svg"} alt={channel.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-medium text-sm">{channel.name}</h3>
                  <p className="text-xs text-muted-foreground capitalize">{channel.category}</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center">
                  {channel.live ? (
                    <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">
                      <span className="mr-1 h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse"></span>
                      LIVE
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-muted/50">
                      <Clock className="mr-1 h-3 w-3" />
                      UPCOMING
                    </Badge>
                  )}
                </div>
                <div className="text-muted-foreground">
                  <Radio className="h-3 w-3 inline mr-1" />
                  {channel.viewers} viewers
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 rounded-lg">
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  <Play className="mr-1 h-4 w-4" />
                  Watch Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-muted-foreground mb-4">And thousands more channels available with our premium packages</p>
          <Button variant="outline">Explore Channel List</Button>
        </motion.div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

