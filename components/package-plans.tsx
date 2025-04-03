"use client"

import { motion } from "framer-motion"
import { Check, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"

export default function PackagePlans() {
  const t = useTranslations('PackagePlans')
  const features = t.raw('features') 

  const plansTrans = t.raw('plans');

  console.log(plansTrans)
  const plans = [
    {
      name: plansTrans[0].name,
      price: 19.99,
      regularPrice: 19.99,
      description: plansTrans[0].description,
      popular: false,
      savings: plansTrans[0].savings,
      features: features,
    },
    {
      name: plansTrans[1].name,
      price: 49.99,
      regularPrice: 59.97, // 19.99 * 3
      description: plansTrans[1].description,
      popular: true,
      savings: plansTrans[1].savings,
      features: features,
    },
    {
      name: plansTrans[2].name,
      price: 89.99,
      regularPrice: 119.94, // 19.99 * 6
      description: plansTrans[2].description,
      popular: false,
      savings: plansTrans[2].savings,
      features: features,
    },
    {
      name: plansTrans[3].name,
      price: 149.99,
      regularPrice: 239.88, // 19.99 * 12
      description: plansTrans[3].description,
      popular: false,
      savings: plansTrans[3].savings,
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
            {t('title')}
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('subtitle')}
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
                      {t('popularBadge')}
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
                    {t('buyButton')}
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
          <p>
            {t('guaranteeText')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

