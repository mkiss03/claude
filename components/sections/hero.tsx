"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket } from "lucide-react"
import { motion } from "framer-motion"
import { DashboardPreview } from "@/components/3d/dashboard-preview"

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
          {/* Badge - PILOT PROGRAM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 text-amber-200 rounded-full text-sm font-semibold backdrop-blur-sm border border-amber-500/30"
          >
            <Rocket className="w-4 h-4" />
            <span>PILOT PROGRAM • Legyen Ön az első ügyfelünk</span>
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

          {/* Pilot Program Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="inline-block max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-6">
              <p className="text-slate-200 text-lg leading-relaxed">
                🎯 <strong className="text-teal-300">Pilot partnereinknek különleges kondíciókat kínálunk!</strong><br/>
                <span className="text-slate-300 text-base">
                  Csatlakozzon hozzánk a termék fejlesztésének korai szakaszában, és közösen alakítsuk ki a tökéletes megoldást az Ön igényei szerint.
                </span>
              </p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center items-center pt-4"
          >
            <Button size="lg" className="group bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600" asChild>
              <a href="#kapcsolat">
                Érdekel a Pilot Program
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>

          {/* 3D Dashboard Preview */}
          <div className="pt-12">
            <DashboardPreview />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
