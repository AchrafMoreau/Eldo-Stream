"use client"

import { motion } from "framer-motion"
import { Check, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import Title from "./ui/title"

export default function PackagePlans() {
  const t = useTranslations("PackagePlans")
  const features = t.raw("features")
  const plansTrans = t.raw("plans")

  // Function to redirect to WhatsApp with custom message for each package
  const redirectToWhatsApp = (packageName: string, price: number) => {
    const phoneNumber = "+212713720920" // Replace with your actual WhatsApp number

    // Create different messages for each package
    const message = t('ctaMessage',{
        packageName: packageName,
        price: price.toFixed(2),
      })
    const messageIncoded = encodeURIComponent(message)

    // Open WhatsApp in a new tab
    window.open(`https://wa.me/${phoneNumber}?text=${messageIncoded}`, "_blank")
  }

  const plans = [
    {
      name: plansTrans[0].name,
      price: 15.00,
      regularPrice: 19.99,
      description: plansTrans[0].description,
      popular: false,
      savings: plansTrans[0].savings,
      features: features,
      bgGradient: "from-blue-50 to-blue-100 dark:from-blue-950/40 dark:to-blue-900/30",
      buttonGradient: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      hoverEffect: "hover:shadow-blue-200 dark:hover:shadow-blue-900/30",
    },
    {
      name: plansTrans[1].name,
      price: 38.0,
      regularPrice: 45.0,
      description: plansTrans[1].description,
      popular: true,
      savings: plansTrans[1].savings,
      features: features,
      bgGradient: "from-purple-50 to-purple-100 dark:from-purple-950/40 dark:to-purple-900/30",
      buttonGradient: "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
      hoverEffect: "hover:shadow-purple-200 dark:hover:shadow-purple-900/30",
    },
    {
      name: plansTrans[2].name,
      price: 70.0,
      regularPrice: 90.0,
      description: plansTrans[2].description,
      popular: false,
      savings: plansTrans[2].savings,
      features: features,
      bgGradient: "from-emerald-50 to-emerald-100 dark:from-emerald-950/40 dark:to-emerald-900/30",
      buttonGradient: "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700",
      hoverEffect: "hover:shadow-emerald-200 dark:hover:shadow-emerald-900/30",
    },
    {
      name: plansTrans[3].name,
      price: 115.0,
      regularPrice: 180.0,
      description: plansTrans[3].description,
      popular: false,
      savings: plansTrans[3].savings,
      features: features,
      bgGradient: "from-amber-50 to-amber-100 dark:from-amber-950/40 dark:to-amber-900/30",
      buttonGradient: "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700",
      hoverEffect: "hover:shadow-amber-200 dark:hover:shadow-amber-900/30",
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
    <section
      id="plans"
      className="py-20 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 px-10 md:px-15"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <Title title={t("title")} description={t("subtitle")} />
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
                } ${plan.bgGradient} ${plan.hoverEffect}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current" />
                      {t("popularBadge")}
                    </div>
                  </div>
                )}
                {plan.savings && (
                  <div className="absolute top-0 left-0">
                    <div className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground text-xs font-bold px-3 py-1 rounded-br-lg flex items-center gap-1">
                      <Zap className="h-3 w-3" />
                      {plan.savings}
                    </div>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl !mt-5" style={{ marginTop: "10px" }}>
                    {plan.name}
                  </CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-4 flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${plan.price.toFixed(2)}</span>
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
                    className={`w-full ${plan.buttonGradient} text-white shadow-lg transition-all duration-300 transform hover:translate-y-[-2px]`}
                    size="lg"
                    onClick={() => redirectToWhatsApp(plan.name, plan.price)}
                  >
                    {t("buyButton")}
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
          <p>{t("guaranteeText")}</p>
        </motion.div>
      </div>
    </section>
  )
}

