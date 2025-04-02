"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
  index?: number
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 85,
  index = 0,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  return (
    <div className="relative overflow-hidden">
      {isLoading && <Skeleton className={cn("absolute inset-0 bg-muted/50 animate-pulse", className)} />}

      <motion.div
        whileHover={{
          y: -10,
          scale: 1.05,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          priority={priority}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          className={cn(
            "transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100",
            isError ? "hidden" : "block",
            className,
          )}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setIsError(true)
          }}
        />

        {isError && (
          <div
            className={cn("flex items-center justify-center bg-muted/20 text-muted-foreground text-sm", className)}
            style={{ width, height }}
          >
            Failed to load image
          </div>
        )}
      </motion.div>
    </div>
  )
}

