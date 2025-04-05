"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import OptimizedImage from "../optimaze-image"
import { memo } from "react"

const ThreeDMarqueeComponent = ({
  images,
  className,
}: {
  images: string[]
  className?: string
}) => {
  // Split the images array into 8 equal parts instead of 4
  const chunkSize = Math.ceil(images.length / 12)
  const chunks = Array.from({ length: 12 }, (_, colIndex) => {
    const start = colIndex * chunkSize
    return images.slice(start, start + chunkSize)
  })

  return (
    <div className={cn("mx-auto block h-[500px] overflow-hidden max-sm:h-100", className)}>
      <div className="flex size-full items-center justify-center">
        <div className="size-[1920px] shrink-0 scale-50 sm:scale-75 lg:scale-100">
          <div
            style={{
              transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
            }}
            className="relative top-[60rem] right-[380px] grid size-full origin-top-left grid-cols-8 gap-4 transform-3d"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                transition={{
                  duration: colIndex % 2 === 0 ? 10 : 15,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                key={colIndex + "marquee"}
                className="flex flex-col items-start gap-4"
              >
                <GridLineVertical className="-left-2" offset="40px" />
                {subarray.map((image, imageIndex) => image && (
                  <div className="relative" key={imageIndex + image}>
                    <GridLineHorizontal className="-top-2" offset="10px" />
                    <OptimizedImage
                        key={imageIndex + image}
                        src={image}
                        alt={`Movie Poster ${imageIndex + 1} - Brief description of the content`}
                        width={200}
                        height={300}
                        className="aspect-[2/3] w-full rounded-lg object-cover ring ring-gray-950/5 hover:shadow-2xl"
                        priority={imageIndex < 4}
                    />
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string
  offset?: string
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px",
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  )
}

const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string
  offset?: string
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset || "150px",
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  )
}

export const ThreeDMarquee = memo(ThreeDMarqueeComponent)
