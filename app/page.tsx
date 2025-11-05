import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { VideoDemo } from "@/components/enterprise/video-demo"
import { ComparisonTable } from "@/components/enterprise/comparison-table"
import { ROICalculator } from "@/components/enterprise/roi-calculator"
import { Pricing } from "@/components/sections/pricing"
import { TrustBadges } from "@/components/enterprise/trust-badges"
import { FAQ } from "@/components/sections/faq"
import { ContactForm } from "@/components/sections/contact-form"
import { Footer } from "@/components/sections/footer"
import { FloatingChat } from "@/components/enterprise/floating-chat"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero />
      <Features />
      <VideoDemo />
      <ComparisonTable />
      <ROICalculator />
      <Pricing />
      <TrustBadges />
      <FAQ />
      <ContactForm />
      <Footer />

      {/* Floating Components */}
      <FloatingChat />
    </main>
  )
}
