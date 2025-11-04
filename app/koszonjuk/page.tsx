import Link from "next/link"
import { CheckCircle, ArrowLeft, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-8 md:p-12 text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
          Köszönjük az érdeklődését!
        </h1>

        <p className="text-lg text-slate-600 mb-8">
          Üzenetét sikeresen megkaptuk. Kollégánk{" "}
          <strong>1 munkanapon belül</strong> felveszi Önnel a kapcsolatot.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-left">
          <h2 className="font-semibold text-slate-900 mb-3">Mi fog történni ezután?</h2>
          <ol className="space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                1
              </span>
              <span>
                <strong>Visszahívás:</strong> Kollégánk felveszi Önnel a kapcsolatot az
                egyeztetéshez
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </span>
              <span>
                <strong>Bemutató:</strong> Online demót tartunk a rendszer funkcióiról
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </span>
              <span>
                <strong>Pilot program:</strong> Lehetőség kedvezményes pilot
                partnerségre
              </span>
            </li>
          </ol>
        </div>

        <div className="flex justify-center mb-6">
          <Button asChild size="lg">
            <Link href="/">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Vissza a főoldalra
            </Link>
          </Button>
        </div>

        <div className="pt-6 border-t border-slate-200">
          <p className="text-sm text-slate-600 mb-2">
            Sürgős kérdése van? Írjon nekünk közvetlenül:
          </p>
          <a
            href="mailto:info@temetkezespro.hu"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <Mail className="w-4 h-4" />
            info@temetkezespro.hu
          </a>
        </div>
      </Card>
    </main>
  )
}
