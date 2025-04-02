"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Regular Viewer",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "I've tried several IPTV services, but this one stands out for its reliability and channel selection. The HD quality is consistently excellent, and I rarely experience any buffering issues.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Sports Enthusiast",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "As a sports fan, having access to all major sporting events worldwide is crucial. This service delivers on that promise with dedicated sports channels and special event coverage. Customer support is also top-notch!",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Movie Buff",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "The VOD library is impressive with new releases added regularly. I particularly enjoy the international movie selection that I can't find on mainstream streaming platforms.",
      rating: 4,
    },
    {
      name: "David Wilson",
      role: "Tech Enthusiast",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Setup was straightforward on all my devices. The app interface is intuitive and user-friendly. I appreciate the regular updates and new features being added.",
      rating: 5,
    },
    {
      name: "Olivia Thompson",
      role: "Family Subscription",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Our family loves the variety of channels available for everyone's tastes. The parental controls are excellent for managing what our kids can access. Great value for money!",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1))
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3)

  return (
    <section id="testimonials" className="w-full py-20 ">
      <div className="container px-4 md:px-6 mx-auto">
        <div ref={ref} className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient-primary"
          >
            What Our Customers Say
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
            Don't just take our word for it. Here's what our satisfied customers have to say about our service.
          </motion.p>
        </div>

        <div className="relative">
          <div className="hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 text-primary"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 text-primary"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next</span>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${currentIndex + index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Card className="h-full flex flex-col card-hover">
                  <CardContent className="pt-6 flex-grow">
                    <div className="flex mb-4">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < testimonial.rating ? "text-accent fill-accent" : "text-muted-foreground"}`}
                          />
                        ))}
                    </div>
                    <p className="text-muted-foreground">"{testimonial.content}"</p>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 md:hidden space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 border-primary/20 text-primary"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className={`h-2 w-2 rounded-full p-0 ${
                  index >= currentIndex && index < currentIndex + 3 ? "bg-primary" : "bg-muted"
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 border-primary/20 text-primary"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

