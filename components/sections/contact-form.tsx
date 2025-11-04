"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, Loader2 } from "lucide-react"
import { motion } from "framer-motion"

export function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [consent, setConsent] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)

    // Manually construct the data object to ensure proper types
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      city: formData.get("city") as string,
      message: formData.get("message") as string,
      consent: consent, // Use the controlled state value
    }

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error("Hiba történt")

      window.location.href = "/koszonjuk"
    } catch (err) {
      setError("Hiba történt az űrlap küldése közben. Kérjük, próbálja újra.")
      setLoading(false)
    }
  }

  return (
    <section id="kapcsolat" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Kérjen visszahívást</h2>
            <p className="text-lg text-slate-400">
              Töltse ki az alábbi űrlapot, és kollégáink 24 órán belül felveszik Önnel a kapcsolatot.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="space-y-2">
              <Label htmlFor="company">Cégnév *</Label>
              <Input id="company" name="company" required placeholder="pl. Temetkezési Szolgáltatás Kft." />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">Település *</Label>
                <Input id="city" name="city" required placeholder="pl. Budapest" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Kapcsolattartó neve *</Label>
                <Input id="name" name="name" required placeholder="pl. Kovács János" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Telefonszám *</Label>
                <Input id="phone" name="phone" type="tel" required placeholder="+36 30 123 4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail cím *</Label>
                <Input id="email" name="email" type="email" required placeholder="info@ceg.hu" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Megjegyzés</Label>
              <Textarea id="message" name="message" placeholder="Írja le röviden igényeit..." rows={4} />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(checked) => setConsent(checked === true)}
                required
              />
              <Label htmlFor="consent" className="text-sm leading-relaxed">
                Elfogadom az <a href="/adatkezeles" className="text-blue-600 underline">adatkezelési tájékoztatót</a>.
                Hozzájárulok, hogy a megadott adataimat a TemetkezésPro felhasználja a kapcsolatfelvétel céljából. *
              </Label>
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                {error}
              </div>
            )}

            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Küldés folyamatban...
                </>
              ) : (
                <>
                  Küldés
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
