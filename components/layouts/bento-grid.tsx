"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { BookOpen, Calendar, Shield, Zap, Bell, FileText, BarChart3, Smartphone } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Belső elhunyt-nyilvántartás",
    description: "Központi adatbázis az elhunytakról, hozzátartozókról, ügyletekről. Az e-Anyakönyvi bejelentéshez szükséges dokumentumokat automatikusan előkészítjük.",
    span: "md:col-span-2",
    gradient: "from-teal-500/10 to-blue-500/10",
    preview: true,
  },
  {
    icon: Calendar,
    title: "Online Időpontfoglalás",
    description: "Hozzátartozók 0-24-ben foglalhatnak időpontot, automatikus emlékeztetők.",
    span: "md:col-span-1",
    gradient: "from-blue-500/10 to-purple-500/10",
  },
  {
    icon: Zap,
    title: "Automatizált Folyamatok",
    description: "E-mail és SMS értesítések, dokumentumok automatikus generálása, számlázás integrálása.",
    span: "md:col-span-1",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: Shield,
    title: "GDPR Kompatibilis",
    description: "Biztonságos adattárolás EU-n belül, titkosított kapcsolat, automatikus adatvédelmi funkciók.",
    span: "md:col-span-1",
    gradient: "from-green-500/10 to-teal-500/10",
  },
  {
    icon: BarChart3,
    title: "Analitika & Jelentések",
    description: "Részletes statisztikák és riportok a vállalkozás működéséről. Real-time dashboardok.",
    span: "md:col-span-2 md:row-span-1",
    gradient: "from-orange-500/10 to-red-500/10",
    chart: true,
  },
  {
    icon: Bell,
    title: "Értesítések",
    description: "Automatikus SMS/e-mail küldés a hozzátartozóknak és munkatársaknak.",
    span: "md:col-span-1",
    gradient: "from-yellow-500/10 to-orange-500/10",
  },
  {
    icon: FileText,
    title: "Dokumentum Kezelés",
    description: "Szerződések, számlák, engedélyek digitális kezelése sablonokkal.",
    span: "md:col-span-1",
    gradient: "from-indigo-500/10 to-blue-500/10",
  },
  {
    icon: Smartphone,
    title: "Mobil App",
    description: "iOS és Android alkalmazás (fejlesztés alatt) a mindenkori hozzáféréshez.",
    span: "md:col-span-1",
    gradient: "from-pink-500/10 to-rose-500/10",
  },
]

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className={feature.span}
        >
          <Card className={`h-full bg-gradient-to-br ${feature.gradient} backdrop-blur-sm border-slate-700 hover:border-teal-500/50 transition-all duration-300 group overflow-hidden relative`}>
            <div className="p-6 relative z-10">
              {/* Icon */}
              <div className="w-12 h-12 bg-slate-800/80 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-teal-400" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>

              {/* Preview Mock for large card */}
              {feature.preview && (
                <div className="mt-4 space-y-2">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-3 p-2 bg-slate-800/50 rounded-lg border border-slate-700"
                    >
                      <div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-teal-400 text-xs font-mono">#{i}</span>
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-slate-700 rounded w-3/4 mb-1"></div>
                        <div className="h-2 bg-slate-800 rounded w-1/2"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Chart Mock for analytics card */}
              {feature.chart && (
                <div className="mt-4 flex items-end gap-1 h-20">
                  {[40, 70, 50, 90, 60, 100, 75].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                      className="flex-1 bg-gradient-to-t from-teal-500 to-blue-500 rounded-t"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent"></div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
