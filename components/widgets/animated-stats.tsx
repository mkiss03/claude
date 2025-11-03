"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useRef } from "react"

interface AnimatedStatProps {
  value: number
  label: string
  suffix?: string
  delay?: number
}

function AnimatedStat({ value, label, suffix = "", delay = 0 }: AnimatedStatProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000 // 2 seconds
      const increment = value / (duration / 16) // 60fps

      const timer = setInterval(() => {
        start += increment
        if (start >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="relative group"
    >
      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
        <div className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent mb-2">
          {count}{suffix}
        </div>
        <div className="text-slate-400 text-sm">{label}</div>

        {/* Animated border glow on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/20 to-blue-500/20 blur-xl"></div>
        </div>
      </div>
    </motion.div>
  )
}

export function AnimatedStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <AnimatedStat value={98} label="Időmegtakarítás" suffix="%" delay={0} />
      <AnimatedStat value={50} label="Kevesebb papírmunka" suffix="%" delay={0.1} />
      <AnimatedStat value={24} label="Hozzáférés" suffix="/7" delay={0.2} />
      <AnimatedStat value={100} label="Adatbiztonság" suffix="%" delay={0.3} />
    </div>
  )
}
