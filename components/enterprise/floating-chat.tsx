"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [showInitial, setShowInitial] = useState(false)

  useEffect(() => {
    // Show initial prompt after 3 seconds
    const timer = setTimeout(() => {
      setShowInitial(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Chat Bubble Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50"
      >
        {/* Initial Message Tooltip */}
        <AnimatePresence>
          {showInitial && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="absolute bottom-20 right-0 mb-2"
            >
              <div className="bg-white text-slate-900 px-4 py-3 rounded-2xl shadow-2xl max-w-xs relative">
                <button
                  onClick={() => setShowInitial(false)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-slate-200 hover:bg-slate-300 rounded-full flex items-center justify-center text-slate-600 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
                <p className="text-sm font-medium">
                  👋 Szia! Van kérdésed a TemetkezésPro-ról?
                </p>
                <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 rounded-full shadow-2xl shadow-teal-500/50 flex items-center justify-center text-white transition-all duration-300 relative"
        >
          {/* Notification Badge */}
          {!isOpen && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold"
            >
              1
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pulsing ring */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-teal-500 animate-ping opacity-20"></span>
          )}
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 right-6 w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-xl">
                  👋
                </div>
                <div className="flex-1">
                  <div className="font-semibold">TemetkezésPro Support</div>
                  <div className="text-xs text-teal-100 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Általában 2 percen belül válaszolunk
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-slate-50">
              {/* Bot Message */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex gap-2"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                  TP
                </div>
                <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm max-w-[75%]">
                  <p className="text-sm text-slate-700">
                    Szia! 👋 Miben segíthetek? Írd le a kérdésed, vagy válassz az alábbi lehetőségek közül:
                  </p>
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-2 pl-10"
              >
                <button
                  onClick={() => {
                    setIsOpen(false)
                    setTimeout(() => {
                      document.getElementById('kapcsolat')?.scrollIntoView({ behavior: 'smooth' })
                    }, 100)
                  }}
                  className="block w-full text-left px-4 py-2 bg-white hover:bg-teal-50 border border-slate-200 hover:border-teal-300 rounded-xl text-sm text-slate-700 hover:text-teal-700 transition-all"
                >
                  📊 Demó kérése
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false)
                    setTimeout(() => {
                      document.getElementById('arak')?.scrollIntoView({ behavior: 'smooth' })
                    }, 100)
                  }}
                  className="block w-full text-left px-4 py-2 bg-white hover:bg-teal-50 border border-slate-200 hover:border-teal-300 rounded-xl text-sm text-slate-700 hover:text-teal-700 transition-all"
                >
                  💰 Árazás megbeszélése
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false)
                    setTimeout(() => {
                      document.getElementById('kapcsolat')?.scrollIntoView({ behavior: 'smooth' })
                    }, 100)
                  }}
                  className="block w-full text-left px-4 py-2 bg-white hover:bg-teal-50 border border-slate-200 hover:border-teal-300 rounded-xl text-sm text-slate-700 hover:text-teal-700 transition-all"
                >
                  🚀 Pilot program
                </button>
                <a
                  href="mailto:info@temetkezespro.hu?subject=Visszahívást kérek"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-left px-4 py-2 bg-white hover:bg-teal-50 border border-slate-200 hover:border-teal-300 rounded-xl text-sm text-slate-700 hover:text-teal-700 transition-all"
                >
                  📞 Visszahívás kérése
                </a>
              </motion.div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-200 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Írj egy üzenetet..."
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      setIsOpen(false)
                      setTimeout(() => {
                        document.getElementById('kapcsolat')?.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    }
                  }}
                />
                <button
                  onClick={() => {
                    setIsOpen(false)
                    setTimeout(() => {
                      document.getElementById('kapcsolat')?.scrollIntoView({ behavior: 'smooth' })
                    }, 100)
                  }}
                  className="w-10 h-10 bg-teal-500 hover:bg-teal-600 text-white rounded-xl flex items-center justify-center transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-2 text-center">
                Kattints vagy írj egy üzenetet
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
