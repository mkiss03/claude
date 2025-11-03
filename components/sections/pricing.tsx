"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star } from "lucide-react"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Kezdő",
    price: "49",
    description: "Kisebb temetkezési vállalkozásoknak",
    features: [
      "Belső nyilvántartás (max 500 rekord)",
      "Online időpontfoglalás",
      "Alapvető automatizálás",
      "E-mail értesítések",
      "Alap dokumentum sablonok",
      "E-mail támogatás (munkanap)",
    ],
    cta: "Kezdjük el",
    featured: false,
  },
  {
    name: "Professzionális",
    price: "79",
    description: "Legtöbbet választott csomag",
    features: [
      "Minden a Kezdő csomagból",
      "Korlátlan nyilvántartás",
      "SMS értesítések",
      "Haladó automatizálás",
      "Egyedi dokumentum sablonok",
      "Analitika & jelentések",
      "Prioritásos támogatás (tervezett 24/7)",
      "Integráció számlázó rendszerrel",
    ],
    cta: "Ezt választom",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "99",
    description: "Több telephelyes vállalkozásoknak",
    features: [
      "Minden a Professzionális csomagból",
      "Multi-lokáció támogatás",
      "Dedikált account manager",
      "Testreszabott funkciók",
      "API hozzáférés",
      "On-site betanítás",
      "SLA garancia",
      "Egyedi integráció fejlesztés",
    ],
    cta: "Egyeztessünk",
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="arak" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Átlátható árazás
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            Válassza a vállalkozásához legjobban illő csomagot. Pilot programban érhető el.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`relative h-full flex flex-col bg-slate-800/50 border-slate-700 ${plan.featured ? "ring-2 ring-teal-500 shadow-xl shadow-teal-500/20 scale-105" : ""}`}>
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                      <Star className="w-4 h-4" />
                      Legnépszerűbb
                    </div>
                  </div>
                )}

                <CardHeader>
                  <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                  <CardDescription className="text-slate-400">{plan.description}</CardDescription>
                  <div className="flex items-baseline gap-2 mt-4">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400">€/hó</span>
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-teal-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    className="w-full"
                    variant={plan.featured ? "default" : "outline"}
                    asChild
                  >
                    <a href="#kapcsolat">{plan.cta}</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-12 text-center"
        >
          <p className="text-sm text-slate-500">
            * Az árak tájékoztató jellegűek, HUF-ban is fizethető a mindenkori MNB árfolyamon.
            Az oldalon szereplő funkciók és szolgáltatási szintek pilot programban érhetők el; a részleteket egyeztetjük.
            Pilot partnerek számára kedvezményes feltételek.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
