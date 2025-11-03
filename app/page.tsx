import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Testimonial } from "@/components/sections/testimonial"
import { Pricing } from "@/components/sections/pricing"
import { FAQ } from "@/components/sections/faq"
import { ContactForm } from "@/components/sections/contact-form"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero />
      <Features />
      <Testimonial />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}
