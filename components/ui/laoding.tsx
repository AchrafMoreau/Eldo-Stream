"use client"

import { useState, useEffect } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { Rss } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        // Calculate what percentage of 30 seconds has passed
        const newProgress = oldProgress + 100 / (30 * 10) // Update 10 times per second
        return newProgress > 100 ? 100 : newProgress
      })
    }, 100) // Update every 100ms for smooth animation

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <Rss className="h-6 w-6" />
            <span className="text-xl font-bold">IPTV Blog</span>
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-10 w-20 rounded-md" />
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="text-center space-y-8 max-w-md px-4">
          <div className="flex justify-center">
            <Rss className="h-16 w-16 text-primary animate-pulse" />
          </div>

          <h1 className="text-3xl font-bold">Loading IPTV Blog</h1>
          <p className="text-muted-foreground">Preparing the latest IPTV news, reviews, and guides for you...</p>

          <div className="w-full space-y-2">
            <Progress value={progress} className="h-2 w-full" />
            <p className="text-sm text-right text-muted-foreground">{Math.round(progress)}%</p>
          </div>

          <div className="pt-8">
            <p className="text-sm text-muted-foreground italic">
              "Streaming the future of television, one pixel at a time."
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container flex justify-center">
          <p className="text-center text-sm text-muted-foreground">© 2023 IPTV Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

