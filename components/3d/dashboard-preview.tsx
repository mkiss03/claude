"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { CheckCircle, Clock, Users, FileText, TrendingUp } from "lucide-react"

export function DashboardPreview() {
  return (
    <div className="relative w-full max-w-5xl mx-auto perspective-1000">
      {/* Main Dashboard Card with 3D effect */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Card className="bg-slate-800/90 backdrop-blur-xl border-slate-700 p-6 shadow-2xl shadow-teal-500/20">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Temetkezés Dashboard</h3>
              <p className="text-sm text-slate-400">Mai statisztikák</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-slate-400">Élő</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { icon: Users, label: "Aktív ügyek", value: "12", change: "+3" },
              { icon: FileText, label: "Dokumentumok", value: "48", change: "+8" },
              { icon: Clock, label: "Időpontok ma", value: "6", change: "+2" },
              { icon: CheckCircle, label: "Lezárt ügyek", value: "24", change: "+5" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-900/50 rounded-lg p-4 border border-slate-700 hover:border-teal-500/50 transition-all cursor-pointer"
              >
                <stat.icon className="w-6 h-6 text-teal-400 mb-2" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
                <div className="text-xs text-green-400 mt-1">{stat.change} ma</div>
              </motion.div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-400">Legutóbbi tevékenységek</span>
              <TrendingUp className="w-4 h-4 text-teal-400" />
            </div>

            {[
              { name: "Kovács János", action: "Új ügy létrehozva", time: "5 perce", status: "success" },
              { name: "Nagy Éva", action: "Dokumentum generálva", time: "12 perce", status: "success" },
              { name: "Szabó Péter", action: "Időpont foglalva", time: "1 órája", status: "pending" },
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-3 p-3 bg-slate-900/30 rounded-lg border border-slate-800 hover:border-teal-500/30 transition-all"
              >
                <div className={`w-2 h-2 rounded-full ${activity.status === 'success' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                <div className="flex-1">
                  <div className="text-sm text-white">{activity.name}</div>
                  <div className="text-xs text-slate-500">{activity.action}</div>
                </div>
                <div className="text-xs text-slate-400">{activity.time}</div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Floating Badge 1 */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="absolute -top-4 -right-4 bg-gradient-to-br from-teal-400 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-teal-500/50 cursor-pointer"
        style={{ transform: "translateZ(50px)" }}
      >
        ✓ GDPR-kompatibilis
      </motion.div>

      {/* Floating Badge 2 */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: 10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1, rotate: -5 }}
        className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-500 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/50 cursor-pointer"
        style={{ transform: "translateZ(50px)" }}
      >
        🚀 Real-time frissítés
      </motion.div>
    </div>
  )
}
