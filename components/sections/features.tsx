"use client"

import { motion } from "framer-motion"
import { BentoGrid } from "@/components/layouts/bento-grid"

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

        {/* Bento Grid */}
        <BentoGrid />
      </div>
    </section>
  )
}
