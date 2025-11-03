"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, X, Volume2 } from "lucide-react"
import { Card } from "@/components/ui/card"

export function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false)

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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-semibold mb-6">
              <Play className="w-4 h-4" />
              2 perces bemutató
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nézd meg működés közben
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Fedezd fel, hogyan alakítja át a TemetkezésPro a mindennapi munkát
            </p>
          </motion.div>

          {/* Video Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <Card className="bg-slate-800/50 backdrop-blur-xl border-slate-700 overflow-hidden relative aspect-video">
              {/* Thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900">
                {/* Mock Dashboard Screenshot */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
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
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              </div>

              {/* Play Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 z-20 flex items-center justify-center group"
              >
                <div className="relative">
                  {/* Pulsing rings */}
                  <div className="absolute inset-0 rounded-full bg-teal-500/20 animate-ping"></div>
                  <div className="absolute inset-0 rounded-full bg-teal-500/30 animate-ping" style={{ animationDelay: "0.5s" }}></div>

                  {/* Play button */}
                  <div className="relative w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full border-2 border-white/30 flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/50 transition-all duration-300 shadow-2xl">
                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
                  </div>
                </div>
              </motion.button>

              {/* Info overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="bg-slate-900/80 backdrop-blur-xl rounded-xl p-4 border border-slate-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold mb-1">TemetkezésPro Platform Tour</div>
                      <div className="text-sm text-slate-400">2:15 · Magyar nyelvű</div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Volume2 className="w-5 h-5" />
                      <span className="text-sm">HD</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Corner badge */}
              <div className="absolute top-6 right-6 z-10">
                <div className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  LIVE DEMO
                </div>
              </div>
            </Card>

            {/* Glow effect */}
            <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 blur-3xl"></div>
            </div>
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
              { icon: "📱", title: "Mobil app", desc: "iOS és Android támogatás" },
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

      {/* Video Modal */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-slate-900 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-20 h-20 text-white/50 mx-auto mb-4" />
                  <p className="text-white/70">Video player - Demo mode</p>
                  <p className="text-white/50 text-sm mt-2">
                    Éles verzióban itt jelenne meg a tényleges videó
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
