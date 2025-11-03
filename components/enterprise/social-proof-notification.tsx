"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, Users, X } from "lucide-react"

const notifications = [
  {
    name: "Kovács János",
    company: "Budapesti Temetkezés",
    action: "regisztrált a Pilot programba",
    icon: "👤",
    time: "2 perce",
  },
  {
    name: "Nagy Éva",
    company: "Méltóság Temetkezés",
    action: "demót foglalt",
    icon: "📅",
    time: "5 perce",
  },
  {
    name: "Szabó Péter",
    company: "Örökség Kft.",
    action: "Pro csomagot választotta",
    icon: "⭐",
    time: "8 perce",
  },
  {
    name: "Tóth Anna",
    company: "Családi Temetkezés",
    action: "csatlakozott a platformhoz",
    icon: "🚀",
    time: "12 perce",
  },
]

export function SocialProofNotification() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    if (isDismissed) return

    // Show first notification after 5 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true)
    }, 5000)

    return () => clearTimeout(initialTimer)
  }, [isDismissed])

  useEffect(() => {
    if (!isVisible || isDismissed) return

    // Hide after 5 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false)
    }, 5000)

    // Show next notification after 12 seconds
    const nextTimer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % notifications.length)
      setIsVisible(true)
    }, 12000)

    return () => {
      clearTimeout(hideTimer)
      clearTimeout(nextTimer)
    }
  }, [isVisible, currentIndex, isDismissed])

  const notification = notifications[currentIndex]

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-24 left-6 z-40 max-w-sm"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 relative overflow-hidden">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500"></div>

            {/* Close button */}
            <button
              onClick={() => setIsDismissed(true)}
              className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content */}
            <div className="flex items-start gap-3 pr-6">
              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-lg">
                {notification.icon}
              </div>

              {/* Text */}
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-slate-900">{notification.name}</span>
                  <CheckCircle className="w-4 h-4 text-teal-500" />
                </div>
                <div className="text-sm text-slate-600 mb-1">
                  <span className="text-slate-800">{notification.company}</span> · {notification.action}
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <Users className="w-3 h-3" />
                  <span>{notification.time}</span>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
