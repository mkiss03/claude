"use client"

import { motion } from "framer-motion"
import { Check, X, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  { name: "Belső nyilvántartás", traditional: false, temetkezespro: true },
  { name: "Digitális dokumentumok", traditional: false, temetkezespro: true },
  { name: "Automatizált folyamatok", traditional: false, temetkezespro: true },
  { name: "Online időpontfoglalás", traditional: false, temetkezespro: true },
  { name: "SMS/Email értesítések", traditional: false, temetkezespro: true },
  { name: "Real-time analitika", traditional: false, temetkezespro: true },
  { name: "Mobil hozzáférés", traditional: false, temetkezespro: true },
  { name: "GDPR kompatibilis", traditional: "partial", temetkezespro: true },
  { name: "Cloud alapú", traditional: false, temetkezespro: true },
  { name: "Automatikus mentés", traditional: false, temetkezespro: true },
  { name: "Papírmentes működés", traditional: false, temetkezespro: true },
  { name: "Keresés és szűrés", traditional: "partial", temetkezespro: true },
]

export function ComparisonTable() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              Összehasonlítás
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Hagyományos vs. TemetkezésPro
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Nézd meg, mennyivel hatékonyabb a modern digitális megoldás
            </p>
          </motion.div>

          {/* Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-slate-900/50 backdrop-blur-xl border-slate-800 overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-3 border-b border-slate-800">
                <div className="p-6">
                  <div className="text-slate-400 text-sm font-medium">Funkció</div>
                </div>
                <div className="p-6 bg-slate-800/30 border-x border-slate-800">
                  <div className="text-center">
                    <div className="text-slate-300 font-semibold mb-1">Hagyományos</div>
                    <div className="text-xs text-slate-500">Papír alapú</div>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-teal-500/5 to-blue-500/5 relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500"></div>
                  <div className="text-center">
                    <div className="text-white font-bold mb-1 flex items-center justify-center gap-2">
                      TemetkezésPro
                      <span className="px-2 py-0.5 bg-teal-500 text-white text-xs rounded-full">Új</span>
                    </div>
                    <div className="text-xs text-teal-400">Modern SaaS</div>
                  </div>
                </div>
              </div>

              {/* Table Rows */}
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="grid grid-cols-3 border-b border-slate-800 last:border-b-0 hover:bg-slate-800/20 transition-colors"
                >
                  {/* Feature Name */}
                  <div className="p-4 flex items-center">
                    <span className="text-slate-300 text-sm">{feature.name}</span>
                  </div>

                  {/* Traditional Column */}
                  <div className="p-4 bg-slate-800/10 border-x border-slate-800 flex items-center justify-center">
                    {feature.traditional === false ? (
                      <X className="w-5 h-5 text-red-400" />
                    ) : feature.traditional === "partial" ? (
                      <div className="text-yellow-400 text-xs font-semibold">Részben</div>
                    ) : (
                      <Check className="w-5 h-5 text-green-400" />
                    )}
                  </div>

                  {/* TemetkezésPro Column */}
                  <div className="p-4 flex items-center justify-center">
                    {feature.temetkezespro ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 + 0.2, type: "spring" }}
                      >
                        <Check className="w-6 h-6 text-teal-400" />
                      </motion.div>
                    ) : (
                      <X className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Footer */}
              <div className="grid grid-cols-3 bg-slate-800/30 border-t border-slate-800">
                <div className="p-6">
                  <div className="text-slate-400 text-sm">Összesen</div>
                </div>
                <div className="p-6 border-x border-slate-800 text-center">
                  <div className="text-2xl font-bold text-red-400">2/12</div>
                  <div className="text-xs text-slate-500 mt-1">17% lefedettség</div>
                </div>
                <div className="p-6 text-center">
                  <div className="text-2xl font-bold text-teal-400">12/12</div>
                  <div className="text-xs text-teal-500 mt-1">100% lefedettség</div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-xl shadow-lg shadow-teal-500/30 transition-all"
            >
              Váltás a modern megoldásra →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
