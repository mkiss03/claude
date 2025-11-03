"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calendar, Shield, Zap, Bell, FileText } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: BookOpen,
    title: "Belső elhunyt-nyilvántartás és ügykezelés",
    description:
      "Központi adatbázis az elhunytakról, hozzátartozókról, ügyletekről. Gyors keresés, adminisztrációs sablonok, papírmentes működés. Az e-Anyakönyvi bejelentéshez szükséges dokumentumokat automatikusan előkészítjük.",
  },
  {
    icon: Calendar,
    title: "Online Időpontfoglalás (opcionális modul)",
    description:
      "Hozzátartozók 0-24-ben foglalhatnak időpontot, naptár-szinkronizálás, automatikus emlékeztetők. Pilot programban érhető el.",
  },
  {
    icon: Zap,
    title: "Automatizált Folyamatok",
    description:
      "E-mail és SMS értesítések, dokumentumok automatikus generálása, számlázás integrálása. Időmegtakarítás és kevesebb hiba.",
  },
  {
    icon: Shield,
    title: "GDPR Kompatibilis",
    description:
      "Biztonságos adattárolás, titkosított kapcsolat, automatikus adatvédelmi funkciók. Nyugodtan kezelheti az érzékeny adatokat.",
  },
  {
    icon: Bell,
    title: "Értesítések & Emlékeztetők",
    description:
      "Automatikus SMS/e-mail küldés a hozzátartozóknak és munkatársaknak. Időpontok, határidők, feladatok nyomon követése.",
  },
  {
    icon: FileText,
    title: "Dokumentum Kezelés",
    description:
      "Szerződések, számlák, engedélyek digitális kezelése. Sablonok, digitális aláírás, egyszerű archiválás és visszakeresés.",
  },
]

export function Features() {
  return (
    <section id="szolgaltatasok" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Miért válassza a TemetkezésPro-t?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            Minden funkció, amit egy modern temetkezési vállalkozásnak szüksége van egy helyen, felhasználóbarát felülettel.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-slate-900 border-slate-800 hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4 border border-teal-500/20">
                    <feature.icon className="w-6 h-6 text-teal-400" />
                  </div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-400">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
