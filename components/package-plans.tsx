"use client"

import { motion } from "framer-motion"
import { Check, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PackagePlans() {
  const features = [
    "+25,000 TV Channels",
    "+66,000 Movies & Series",
    "4K / Ultra HD Picture Quality",
    "FREE Channels & VOD Updates",
    "99.9% Server Uptime",
    "Antifreeze​",
    "All Devices are Supported",
    "Adult content",
    "24/7 Technical Assistance",
  ]

  const plans = [
    {
      name: "1 Month",
      price: 19.99,
      regularPrice: 19.99,
      description: "Perfect for trying out our service",
      popular: false,
      savings: null,
      features: features,
    },
    {
      name: "3 Months",
      price: 49.99,
      regularPrice: 59.97, // 19.99 * 3
      description: "Our most popular short-term plan",
      popular: true,
      savings: "Save 17%",
      features: features,
    },
    {
      name: "6 Months",
      price: 89.99,
      regularPrice: 119.94, // 19.99 * 6
      description: "Great value for medium-term use",
      popular: false,
      savings: "Save 25%",
      features: features,
    },
    {
      name: "12 Months",
      price: 149.99,
      regularPrice: 239.88, // 19.99 * 12
      description: "Best value for long-term commitment",
      popular: false,
      savings: "Save 37%",
      features: features,
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section id="plans" className="py-20 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 px-10 md:px-15">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tighter"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Choose Your Perfect Plan
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Unlock premium entertainment with our flexible subscription options
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {plans.map((plan, index) => (
            <motion.div key={plan.name} variants={itemVariants} className="h-full">
              <Card
                className={`h-full flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  plan.popular ? "border-primary shadow-lg" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current" />
                      POPULAR
                    </div>
                  </div>
                )}
                {plan.savings && (
                  <div className="absolute top-0 left-0">
                    <div className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-br-lg flex items-center gap-1">
                      <Zap className="h-3 w-3" />
                      {plan.savings}
                    </div>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl !mt-5" style={{marginTop:"10px"}}>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-4 flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <div className="text-muted-foreground text-sm mt-1">
                      {plan.savings && <span className="line-through">${plan.regularPrice.toFixed(2)}</span>}
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    Buy Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p>All plans include a 7-day money-back guarantee. No questions asked.</p>
        </motion.div>
      </div>
    </section>
  )
}

