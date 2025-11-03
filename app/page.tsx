import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { LogosCarousel } from "@/components/enterprise/logos-carousel"
import { VideoDemo } from "@/components/enterprise/video-demo"
import { ComparisonTable } from "@/components/enterprise/comparison-table"
import { Testimonial } from "@/components/sections/testimonial"
import { ROICalculator } from "@/components/enterprise/roi-calculator"
import { Pricing } from "@/components/sections/pricing"
import { TrustBadges } from "@/components/enterprise/trust-badges"
import { FAQ } from "@/components/sections/faq"
import { ContactForm } from "@/components/sections/contact-form"
import { Footer } from "@/components/sections/footer"
import { FloatingChat } from "@/components/enterprise/floating-chat"
import { SocialProofNotification } from "@/components/enterprise/social-proof-notification"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero />
      <LogosCarousel />
      <Features />
      <VideoDemo />
      <ComparisonTable />
      <Testimonial />
      <ROICalculator />
      <Pricing />
      <TrustBadges />
      <FAQ />
      <ContactForm />
      <Footer />

      {/* Floating Components */}
      <FloatingChat />
      <SocialProofNotification />
    </main>
  )
}
