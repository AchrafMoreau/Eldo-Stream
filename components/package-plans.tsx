"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export default function PackagePlans() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const plans = [
    {
      name: "Basic",
      price: "$9.99",
      period: "month",
      description: "Perfect for casual viewers",
      features: [
        "5,000+ Live TV Channels",
        "Standard Definition Quality",
        "7-Day EPG (Electronic Program Guide)",
        "Access on 1 Device",
        "Basic Support",
      ],
      popular: false,
      buttonText: "Get Started",
    },
    {
      name: "Premium",
      price: "$19.99",
      period: "month",
      description: "Our most popular package",
      features: [
        "10,000+ Live TV Channels",
        "HD & Full HD Quality",
        "14-Day EPG (Electronic Program Guide)",
        "Access on 2 Devices",
        "VOD Library Access",
        "24/7 Priority Support",
        "Multi-language Subtitles",
      ],
      popular: true,
      buttonText: "Get Premium",
    },
    {
      name: "Ultimate",
      price: "$29.99",
      period: "month",
      description: "For the ultimate entertainment experience",
      features: [
        "15,000+ Live TV Channels",
        "4K Ultra HD Quality",
        "30-Day EPG (Electronic Program Guide)",
        "Access on 5 Devices",
        "Premium VOD Library",
        "24/7 VIP Support",
        "Multi-language Subtitles",
        "Catch-up TV (7 days)",
        "Recording Feature",
      ],
      popular: false,
      buttonText: "Get Ultimate",
    },
  ]

  return (
    <section id="plans" className="w-full py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div ref={ref} className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient-primary"
          >
            Package Plans
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
            Choose the perfect plan for your entertainment needs. All plans include a 7-day money-back guarantee.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card
                className={`h-full flex flex-col card-hover ${
                  plan.popular ? "border-primary shadow-lg relative overflow-hidden" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <Badge className="rounded-tl-none rounded-br-none rounded-tr-md rounded-bl-md bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90 text-primary-foreground" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">Need a custom plan for business or resellers?</p>
          <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/10">
            Contact Sales
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
