import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              TemetkezésPro
            </h3>
            <p className="text-slate-400 mb-4">
              Modern ügyviteli rendszer temetkezési vállalkozásoknak
            </p>
            <div className="flex gap-2">
              <div className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                Pilot fázis
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Navigáció</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-slate-400 hover:text-white transition-colors">
                  Funkciók
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-400 hover:text-white transition-colors">
                  Árak
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-white transition-colors">
                  GYIK
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  Kapcsolat
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Jogi információk</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/adatkezeles" className="text-slate-400 hover:text-white transition-colors">
                  Adatkezelési tájékoztató
                </Link>
              </li>
              <li>
                <Link href="/impresszum" className="text-slate-400 hover:text-white transition-colors">
                  Impresszum
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Kapcsolat</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-400">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@temetkezespro.hu" className="hover:text-white transition-colors">
                  info@temetkezespro.hu
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+36301234567" className="hover:text-white transition-colors">
                  +36 30 123 4567
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Budapest, Magyarország</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} TemetkezésPro. Minden jog fenntartva.
            </p>
            <p className="text-slate-500 text-sm">
              Fejlesztés alatt · Pilot verzió
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
