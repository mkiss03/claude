"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto text-center space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold"
          >
            🚀 Modern digitális megoldások temetkezési vállalkozásoknak
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            Tegye <span className="text-blue-600">digitálissá</span><br />
            temetkezési vállalkozását
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Belső elhunyt- és ügyfél-nyilvántartás hivatalos irat-előkészítéssel.
            Nem kapcsolódunk közvetlenül az e-Anyakönyvhöz – az anyakönyvi bejelentéshez szükséges dokumentumokat automatikusan előkészítjük.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button size="lg" className="group" asChild>
              <a href="#kapcsolat">
                Kérek visszahívást
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={process.env.NEXT_PUBLIC_CAL_URL || "#"} target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-4 w-4" />
                Demó időpont foglalás
              </a>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">Pilot</div>
              <div className="text-sm text-muted-foreground mt-1">Partnereket keresünk</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">2026</div>
              <div className="text-sm text-muted-foreground mt-1">Célunk 50+ partner</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">Pro+</div>
              <div className="text-sm text-muted-foreground mt-1">24/7 támogatás tervben</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
