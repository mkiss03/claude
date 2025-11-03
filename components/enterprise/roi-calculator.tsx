"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Calculator, TrendingUp, Clock, DollarSign } from "lucide-react"

export function ROICalculator() {
  const [employees, setEmployees] = useState(5)
  const [cases, setCases] = useState(100)

  // Calculations
  const hoursPerCase = 2 // Manual hours per case
  const savedHoursPerCase = 1.5 // 75% time saved
  const hourlyWage = 15 // EUR per hour
  const monthlySubscription = 79 // EUR per month (Professional plan)

  const totalHoursSaved = cases * savedHoursPerCase
  const monthlySavings = totalHoursSaved * hourlyWage
  const netSavings = monthlySavings - monthlySubscription
  const annualSavings = netSavings * 12
  const roi = ((netSavings / monthlySubscription) * 100).toFixed(0)

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
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
              <Calculator className="w-4 h-4" />
              ROI Kalkulátor
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Számold ki a megtakarításod
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Nézd meg, mennyit takaríthat meg vállalkozásod havonta a TemetkezésPro használatával
            </p>
          </motion.div>

          {/* Calculator Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-slate-800/50 backdrop-blur-xl border-slate-700 p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left: Inputs */}
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Vállalkozásod adatai
                  </h3>

                  {/* Employees Slider */}
                  <div>
                    <label className="flex items-center justify-between mb-3">
                      <span className="text-slate-300 font-medium">Alkalmazottak száma</span>
                      <span className="text-2xl font-bold text-teal-400">{employees}</span>
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={employees}
                      onChange={(e) => setEmployees(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>1</span>
                      <span>50</span>
                    </div>
                  </div>

                  {/* Cases Slider */}
                  <div>
                    <label className="flex items-center justify-between mb-3">
                      <span className="text-slate-300 font-medium">Havi ügyek száma</span>
                      <span className="text-2xl font-bold text-teal-400">{cases}</span>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="500"
                      step="10"
                      value={cases}
                      onChange={(e) => setCases(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>10</span>
                      <span>500</span>
                    </div>
                  </div>

                  {/* Info Cards */}
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700">
                      <div className="text-xs text-slate-400 mb-1">Megtakarított idő/ügy</div>
                      <div className="text-lg font-bold text-white">{savedHoursPerCase}h</div>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700">
                      <div className="text-xs text-slate-400 mb-1">Óradíj</div>
                      <div className="text-lg font-bold text-white">€{hourlyWage}</div>
                    </div>
                  </div>
                </div>

                {/* Right: Results */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Várható megtakarítás
                  </h3>

                  {/* Big ROI Number */}
                  <motion.div
                    key={roi}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-2xl p-6 mb-6 border border-teal-500/30"
                  >
                    <div className="flex items-center gap-2 text-teal-400 text-sm font-semibold mb-2">
                      <TrendingUp className="w-4 h-4" />
                      ROI (Befektetés megtérülés)
                    </div>
                    <div className="text-6xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                      {roi}%
                    </div>
                    <div className="text-sm text-slate-400 mt-2">
                      havonta a előfizetési díj után
                    </div>
                  </motion.div>

                  {/* Savings Cards */}
                  <div className="space-y-3">
                    <motion.div
                      key={`hours-${totalHoursSaved}`}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="bg-slate-900/50 rounded-lg p-4 border border-slate-700"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center">
                            <Clock className="w-5 h-5 text-teal-400" />
                          </div>
                          <div>
                            <div className="text-xs text-slate-400">Megtakarított idő/hó</div>
                            <div className="text-xl font-bold text-white">{totalHoursSaved.toFixed(0)} óra</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      key={`savings-${monthlySavings}`}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="bg-slate-900/50 rounded-lg p-4 border border-slate-700"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                            <DollarSign className="w-5 h-5 text-green-400" />
                          </div>
                          <div>
                            <div className="text-xs text-slate-400">Havi nettó megtakarítás</div>
                            <div className="text-xl font-bold text-green-400">€{netSavings.toFixed(0)}</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      key={`annual-${annualSavings}`}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg p-4 border border-green-500/30"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-green-300 font-medium mb-1">Éves megtakarítás</div>
                          <div className="text-3xl font-bold text-white">€{annualSavings.toFixed(0)}</div>
                        </div>
                        <div className="text-4xl">💰</div>
                      </div>
                    </motion.div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-6 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-4 rounded-xl shadow-lg shadow-teal-500/30 transition-all"
                  >
                    Kezdjük el a megtakarítást →
                  </motion.button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-sm text-slate-500 mt-6"
          >
            * Az eredmények becslések, a tényleges megtakarítás vállalkozásonként változhat
          </motion.p>
        </div>
      </div>
    </section>
  )
}
