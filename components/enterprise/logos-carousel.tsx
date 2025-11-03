"use client"

import { motion } from "framer-motion"

// Mock company logos (using text placeholders - in production use actual SVG logos)
const companies = [
  { name: "Budapesti Temetkezés", category: "Enterprise" },
  { name: "Méltóság Temetkezési Szolgálat", category: "Partner" },
  { name: "Örökség Temetkezés", category: "Partner" },
  { name: "Pilóta Temetkezés Kft.", category: "Pilot" },
  { name: "Családi Temetkezési Szolgálat", category: "Partner" },
  { name: "Modern Temetkezés Zrt.", category: "Enterprise" },
]

export function LogosCarousel() {
  return (
    <section className="py-16 bg-slate-900/50 backdrop-blur-xl border-y border-slate-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-slate-400 uppercase tracking-wider mb-4">
            Megbíznak bennünk
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Gyorsan növekvő temetkezési vállalkozások választása
          </h3>
        </motion.div>

        {/* Infinite Scrolling Logos */}
        <div className="relative overflow-hidden">
          {/* Gradient masks on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>

          {/* Scrolling container */}
          <motion.div
            className="flex gap-12"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate the array to create seamless loop */}
            {[...companies, ...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 group"
              >
                <div className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-teal-500/50 rounded-xl px-8 py-6 transition-all duration-300 min-w-[280px]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      {company.name.charAt(0)}
                    </div>
                    <span className="text-xs text-teal-400 font-semibold px-2 py-1 bg-teal-500/10 rounded-full">
                      {company.category}
                    </span>
                  </div>
                  <div className="text-white font-semibold text-sm group-hover:text-teal-400 transition-colors">
                    {company.name}
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats below */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-12"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-400 mb-1">15+</div>
            <div className="text-sm text-slate-400">Aktív Partnerek</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-400 mb-1">98%</div>
            <div className="text-sm text-slate-400">Elégedettségi Arány</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-400 mb-1">24/7</div>
            <div className="text-sm text-slate-400">Tervezett Támogatás</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
