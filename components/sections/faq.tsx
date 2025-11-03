"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "Kapcsolódik a rendszer az állami e-Anyakönyvhöz?",
    answer: "Nem. Az e-Anyakönyv egy állami rendszer. A TemetkezésPro nem kapcsolódik közvetlenül hozzá. Mi a belső adminisztrációt és az anyakönyvi bejelentéshez szükséges dokumentumok előkészítését automatizáljuk (Word/PDF sablonok). Ezzel az anyakönyvi ügyintézés gyorsabban, hibamentesebben végezhető.",
  },
  {
    question: "Mennyire biztonságos az adataim tárolása?",
    answer: "Rendkívül komolyan vesszük az adatbiztonságot. Adatainkat EU-alapú felhőszolgáltatón tároljuk, minden adatátvitel TLS-sel titkosított. GDPR-kompatibilis folyamatok, többszintű biztonsági mentés (napi automatikus), hozzáférések naplózása. Az adatokat kizárólag EU-n belül tároljuk.",
  },
  {
    question: "Mennyi idő alatt tudunk elindulni?",
    answer: "Az átlagos bevezetési idő 2-3 hét. Ez magában foglalja: a rendszer testreszabását, meglévő adatok importálását (ha van), csapatának betanítását online képzéssel, tesztelést és éles indítást. A folyamat alatt végig segítünk, hogy zökkenőmentes legyen az átállás.",
  },
  {
    question: "Mi van, ha technikai problémám van?",
    answer: "Tervezett 24/7 támogatás a Professzionális és Enterprise csomagokhoz. Pilot fázisban magyar nyelvű e-mail és telefonos support munkanapok 8-18 között. Online tudásbázis és videós útmutatók fejlesztés alatt. Az éles verzióban dedikált account manager segíti majd az ügyfeleket.",
  },
  {
    question: "Van lehetőség kipróbálni a rendszert?",
    answer: "Igen! Pilot programunkban keresünk partnereket, akik kedvezményes feltételekkel kipróbálhatják a rendszert. Teljes hozzáférés minden funkcióhoz, dedikált support a pilot időszak alatt, demo adatok a gyors induláshoz. Jelentkezz most!",
  },
]

export function FAQ() {
  return (
    <section id="gyik" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Gyakori kérdések
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Minden, amit tudnia kell a TemetkezésPro rendszerről.
          </motion.p>
        </div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
