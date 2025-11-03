"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { DashboardPreview } from "@/components/3d/dashboard-preview"
import { AnimatedStats } from "@/components/widgets/animated-stats"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-teal-700">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/20 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(20,184,166,0.1),transparent)] -z-10" />

      <div className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto text-center space-y-12"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center px-4 py-2 bg-teal-500/20 text-teal-200 rounded-full text-sm font-semibold backdrop-blur-sm border border-teal-500/30"
          >
            🚀 Modern digitális megoldások temetkezési vállalkozásoknak
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white"
          >
            Tegye <span className="text-teal-400">digitálissá</span><br />
            temetkezési vállalkozását
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
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

          {/* 3D Dashboard Preview */}
          <div className="pt-12">
            <DashboardPreview />
          </div>

          {/* Animated Stats */}
          <div className="pt-12">
            <AnimatedStats />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
