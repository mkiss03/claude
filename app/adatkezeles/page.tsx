import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-slate-900">
            Adatkezelési Tájékoztató
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-6">
              Hatályos: {new Date().toLocaleDateString("hu-HU")}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-slate-900">
                1. Adatkezelő adatai
              </h2>
              <p className="text-slate-700 mb-2">
                <strong>Név:</strong> [Cégnév - kitöltendő]
              </p>
              <p className="text-slate-700 mb-2">
                <strong>Székhely:</strong> [Cím - kitöltendő]
              </p>
              <p className="text-slate-700 mb-2">
                <strong>Email:</strong> info@temetkezespro.hu
              </p>
              <p className="text-slate-700 mb-2">
                <strong>Telefonszám:</strong> +36 30 123 4567
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-slate-900">
                2. Kezelt adatok köre
              </h2>
              <p className="text-slate-700 mb-4">
                A TemetkezésPro weboldalon keresztül az alábbi személyes adatokat kezeljük:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Név</li>
                <li>Email cím</li>
                <li>Telefonszám</li>
                <li>Cégnév (opcionális)</li>
                <li>Üzenet tartalma (opcionális)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-slate-900">
                3. Az adatkezelés célja és jogalapja
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
                <p className="text-slate-700 mb-2">
                  <strong>Cél:</strong> Kapcsolatfelvétel, érdeklődés kezelése, ajánlat
                  küldése
                </p>
                <p className="text-slate-700">
                  <strong>Jogalap:</strong> Az érintett önkéntes hozzájárulása (GDPR 6. cikk
                  (1) a) pont)
                </p>
              </div>
              <p className="text-slate-700">
                Az adatokat kizárólag a megadott célból használjuk fel. Harmadik félnek nem
                adjuk át, kivéve, ha törvény kötelez erre.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-slate-900">
                4. Az adatkezelés időtartama
              </h2>
              <p className="text-slate-700 mb-4">
                A megadott személyes adatokat{" "}
                <strong>a hozzájárulás visszavonásáig</strong>, de legfeljebb{" "}
                <strong>2 évig</strong> tároljuk. Ezen időtartam elteltével az adatokat
                töröljük.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-slate-900">
                5. Az érintettek jogai
              </h2>
              <p className="text-slate-700 mb-4">Önnek joga van:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>
                  <strong>Hozzáférés:</strong> Tájékoztatást kérni az általunk kezelt
                  adatairól
                </li>
                <li>
                  <strong>Helyesbítés:</strong> Kérni az adatok módosítását
                </li>
                <li>
                  <strong>Törlés:</strong> Kérni az adatok törlését ("elfeledtetéshez való
                  jog")
                </li>
                <li>
                  <strong>Korlátozás:</strong> Kérni az adatkezelés korlátozását
                </li>
                <li>
                  <strong>Tiltakozás:</strong> Tiltakozni az adatkezelés ellen
                </li>
                <li>
                  <strong>Hordozhatóság:</strong> Kérni az adatok átadását
                </li>
                <li>
                  <strong>Panasz:</strong> Panaszt tenni a Nemzeti Adatvédelmi és
                  Információszabadság Hatóságnál (NAIH)
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-slate-900">
                6. Adatbiztonság
              </h2>
              <p className="text-slate-700 mb-4">
                Az Ön által megadott adatokat biztonságos szerveren tároljuk, és megfelelő
                technikai és szervezési intézkedésekkel védjük az illetéktelen hozzáférés,
                módosítás vagy törlés ellen.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>HTTPS titkosított kapcsolat</li>
                <li>EU-alapú cloud tárhely (GDPR-kompatibilis)</li>
                <li>Hozzáférés-korlátozás és naplózás</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-slate-900">7. Sütik (Cookies)</h2>
              <p className="text-slate-700 mb-4">
                Weboldalunk analitikai sütiket használ (pl. Vercel Analytics, Plausible
                Analytics) a látogatottság mérésére. Ezek nem azonosítják személyazonosságát.
              </p>
              <p className="text-slate-700">
                A sütik használatát bármikor letilthatja böngészőjében.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-slate-900">
                8. Kapcsolat és kérdések
              </h2>
              <p className="text-slate-700 mb-4">
                Ha kérdése van az adatkezeléssel kapcsolatban, vagy élni kíván valamelyik
                jogával, kérjük, vegye fel velünk a kapcsolatot:
              </p>
              <div className="bg-slate-100 rounded-lg p-6">
                <p className="text-slate-700 mb-2">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@temetkezespro.hu"
                    className="text-blue-600 hover:underline"
                  >
                    info@temetkezespro.hu
                  </a>
                </p>
                <p className="text-slate-700">
                  <strong>Telefon:</strong>{" "}
                  <a href="tel:+36301234567" className="text-blue-600 hover:underline">
                    +36 30 123 4567
                  </a>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-slate-900">
                9. Felügyeleti hatóság
              </h2>
              <p className="text-slate-700 mb-4">
                <strong>Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)</strong>
              </p>
              <ul className="list-none space-y-1 text-slate-700">
                <li>
                  <strong>Cím:</strong> 1055 Budapest, Falk Miksa utca 9-11.
                </li>
                <li>
                  <strong>Levélcím:</strong> 1363 Budapest, Pf. 9.
                </li>
                <li>
                  <strong>Telefon:</strong> +36 1 391 1400
                </li>
                <li>
                  <strong>Email:</strong> ugyfelszolgalat@naih.hu
                </li>
                <li>
                  <strong>Weboldal:</strong>{" "}
                  <a
                    href="https://naih.hu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://naih.hu
                  </a>
                </li>
              </ul>
            </section>

            <div className="border-t border-slate-200 pt-6 mt-8">
              <p className="text-sm text-slate-500">
                Ez az adatkezelési tájékoztató a GDPR (EU 2016/679 rendelet) követelményei
                alapján készült.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
