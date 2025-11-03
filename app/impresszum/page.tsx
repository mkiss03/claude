import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ImprintPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Vissza a főoldalra
          </Link>
        </Button>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-8 text-slate-900">Impresszum</h1>

          <div className="space-y-8">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-slate-50">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-2 text-slate-900">
                    Szolgáltató adatai
                  </h2>
                  <p className="text-slate-600">
                    A TemetkezésPro weboldal üzemeltetője
                  </p>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Cégnév</h3>
                  <p className="text-slate-700">[Cégnév - kitöltendő]</p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Székhely</h3>
                  <div className="flex items-start gap-2 text-slate-700">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-600" />
                    <span>[Cím - kitöltendő]<br />Budapest, Magyarország</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Cégjegyzékszám
                    </h3>
                    <p className="text-slate-700">[Cégjegyzékszám - kitöltendő]</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Adószám</h3>
                    <p className="text-slate-700">[Adószám - kitöltendő]</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6 text-slate-900">
                Kapcsolat
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@temetkezespro.hu"
                      className="text-blue-600 hover:underline"
                    >
                      info@temetkezespro.hu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Telefon</h3>
                    <a href="tel:+36301234567" className="text-blue-600 hover:underline">
                      +36 30 123 4567
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-slate-50">
              <h2 className="text-2xl font-semibold mb-4 text-slate-900">
                Tárhely szolgáltató
              </h2>
              <div className="space-y-2 text-slate-700">
                <p>
                  <strong>Név:</strong> Vercel Inc.
                </p>
                <p>
                  <strong>Székhely:</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
                </p>
                <p>
                  <strong>Weboldal:</strong>{" "}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://vercel.com
                  </a>
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-slate-900">
                Szerzői jogok
              </h2>
              <p className="text-slate-700 mb-4">
                A weboldalon található tartalmak (szövegek, képek, grafikai elemek) szerzői
                jogi védelem alatt állnak. A tartalmak másolása, terjesztése vagy
                felhasználása csak az üzemeltető írásos engedélyével lehetséges.
              </p>
              <p className="text-slate-600 text-sm">
                © {new Date().getFullYear()} TemetkezésPro. Minden jog fenntartva.
              </p>
            </Card>

            <Card className="p-6 bg-blue-50 border-blue-200">
              <h2 className="text-2xl font-semibold mb-4 text-slate-900">
                Felelősség korlátozása
              </h2>
              <p className="text-slate-700 mb-3">
                Az üzemeltető fenntartja a jogot, hogy a weboldalon található információkat
                bármikor, előzetes értesítés nélkül módosítsa vagy frissítse.
              </p>
              <p className="text-slate-700">
                Az üzemeltető nem vállal felelősséget a weboldalon található információk
                pontosságáért, teljességéért vagy időszerűségéért. A weboldal használata a
                felhasználó saját felelősségére történik.
              </p>
            </Card>

            <div className="border-t border-slate-200 pt-6 mt-8">
              <p className="text-sm text-slate-500 mb-4">
                Ez az impresszum megfelel az elektronikus kereskedelmi szolgáltatások,
                valamint az információs társadalommal összefüggő szolgáltatások egyes
                kérdéseiről szóló 2001. évi CVIII. törvény előírásainak.
              </p>
              <p className="text-sm text-slate-500">
                <strong>Utolsó frissítés:</strong> {new Date().toLocaleDateString("hu-HU")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
