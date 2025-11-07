"use client"

import { motion } from "framer-motion"
import { Play, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"

export function VideoDemo() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.05),transparent)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm font-semibold mb-6">
              <Clock className="w-4 h-4" />
              Hamarosan
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Platform Bemutató Videó
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Jelenleg dolgozunk a részletes bemutató videón, amely hamarosan elérhető lesz
            </p>
          </motion.div>

          {/* Video Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <Card className="bg-slate-800/50 backdrop-blur-xl border-slate-700 overflow-hidden relative aspect-video">
              {/* Thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900">
                {/* Mock Dashboard Screenshot */}
                <div className="absolute inset-0 flex items-center justify-center p-8 opacity-30">
                  <div className="w-full h-full bg-slate-900/80 rounded-lg border border-slate-700 p-6">
                    {/* Mock UI */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="flex-1 h-8 bg-slate-800 rounded ml-4"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-20 bg-slate-800 rounded-lg"></div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-12 bg-slate-800 rounded-lg"></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/90"></div>
              </div>

              {/* Coming Soon Content */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
                <div className="text-center space-y-6">
                  {/* Icon */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="relative w-32 h-32 bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-xl rounded-full border-2 border-amber-500/30 flex items-center justify-center mx-auto shadow-2xl">
                      <Play className="w-16 h-16 text-amber-400 ml-2" />
                    </div>
                  </motion.div>

                  {/* Text */}
                  <div className="space-y-3">
                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                      Hamarosan
                    </h3>
                    <p className="text-lg text-slate-300 max-w-md mx-auto px-4">
                      A platform bemutató videónk jelenleg készül.<br/>
                      Eközben <a href="#kapcsolat" className="text-teal-400 hover:text-teal-300 underline">kérj visszahívást</a> és mutassuk meg élőben!
                    </p>
                  </div>

                  {/* Progress indicator */}
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
              </div>

              {/* Corner badge */}
              <div className="absolute top-6 right-6 z-10">
                <div className="px-3 py-1 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 text-amber-300 text-xs font-semibold rounded-full flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  KÉSZÜLŐBEN
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Features below video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            {[
              { icon: "🎯", title: "Gyors beállítás", desc: "5 perc alatt indulhatsz" },
              { icon: "📱", title: "Mobil app", desc: "iOS és Android támogatás (tervezett)" },
              { icon: "🔒", title: "Biztonságos", desc: "EU-alapú adattárolás" },
            ].map((feature, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-teal-500/50 transition-all">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <div className="text-white font-semibold mb-1">{feature.title}</div>
                <div className="text-sm text-slate-400">{feature.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
