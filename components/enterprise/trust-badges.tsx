"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Server, Award, CheckCircle, Zap } from "lucide-react"

const badges = [
  {
    icon: Shield,
    title: "GDPR",
    subtitle: "Kompatibilis",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Lock,
    title: "SSL/TLS",
    subtitle: "Titkosított",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Server,
    title: "EU Cloud",
    subtitle: "Adattárolás",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Award,
    title: "ISO 27001",
    subtitle: "Folyamatban",
    color: "from-yellow-500 to-orange-600",
  },
  {
    icon: CheckCircle,
    title: "99.9%",
    subtitle: "Uptime",
    color: "from-teal-500 to-green-600",
  },
  {
    icon: Zap,
    title: "Real-time",
    subtitle: "Sync",
    color: "from-pink-500 to-rose-600",
  },
]

export function TrustBadges() {
  return (
    <section className="py-16 bg-slate-900/30 backdrop-blur-sm border-y border-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Enterprise-szintű biztonság és megfelelőség
            </h3>
            <p className="text-slate-400">
              Az adataid biztonságban vannak nálunk
            </p>
          </motion.div>

          {/* Badges Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-teal-500/50 transition-all duration-300 relative overflow-hidden">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${badge.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                  {/* Icon */}
                  <div className="relative z-10">
                    <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${badge.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <badge.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Text */}
                    <div className="text-white font-bold text-lg mb-1">
                      {badge.title}
                    </div>
                    <div className="text-xs text-slate-400">
                      {badge.subtitle}
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-8 text-sm text-slate-500"
          >
            <p>
              🔒 Minden adat titkosítva van · ☁️ EU-alapú szerverek · 🛡️ Automatikus mentések · 📊 Teljes auditálhatóság
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
