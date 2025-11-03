"use client"

import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"

export function Testimonial() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-24 h-24 text-teal-400" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
                "A TemetkezésPro rendszer <span className="text-teal-400">átláthatóbbá és gördülékenyebbé</span> tette a mindennapi munkánkat. Az adminisztráció ideje felére csökkent, és végre digitálisan kezeljük az ügyfeleinket."
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  TK
                </div>
                <div>
                  <div className="font-semibold text-white text-lg">
                    Kiss Tamás
                  </div>
                  <div className="text-slate-400">
                    Ügyvezető, Temetkezési Kft.
                  </div>
                  <div className="text-teal-400 text-sm mt-1">
                    Pilot Partner · 2025
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
