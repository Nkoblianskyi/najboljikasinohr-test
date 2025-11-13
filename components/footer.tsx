"use client"

import Link from "next/link"
import Image from "next/image"
import { Shield, Info, FileText } from "lucide-react"

export function Footer() {
  const handleNavigation = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer className="bg-[#05070a] text-gray-300 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <Image src="/favicon.ico" alt="Logo" width={24} height={24} />
                <h2 className="text-xl font-bold text-white uppercase">najboljikasinohr</h2>
              </div>
              <div className="h-1 w-16 bg-[#19a0b9] rounded-full"></div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Najpouzdaniji izvor objektivnih casino recenzija u Hrvatskoj. Pomažemo vam pronaći najbolje online casine
              s licenciranim i sigurnim igranjem.
            </p>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#19a0b9] to-[#1ebecf] text-white px-5 py-2.5 rounded-md font-bold text-lg shadow-lg">
              <span className="text-2xl">18+</span>
              <span className="text-xs font-normal">Samo za odrasle</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg text-white mb-6 flex items-center gap-2">
              O Nama
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/o-nama"
                  className="text-sm text-gray-400 hover:text-[#19a0b9] transition-colors inline-flex items-center gap-2 group"
                  onClick={handleNavigation}
                >
                  <span className="w-1 h-1 bg-[#19a0b9] rounded-full group-hover:w-2 transition-all"></span>O
                  najboljikasinohr
                </Link>
              </li>
              <li>
                <Link
                  href="/politika-kolacica"
                  className="text-sm text-gray-400 hover:text-[#19a0b9] transition-colors inline-flex items-center gap-2 group"
                  onClick={handleNavigation}
                >
                  <span className="w-1 h-1 bg-[#19a0b9] rounded-full group-hover:w-2 transition-all"></span>
                  Politika Kolačića
                </Link>
              </li>
              <li>
                <Link
                  href="/politika-privatnosti"
                  className="text-sm text-gray-400 hover:text-[#19a0b9] transition-colors inline-flex items-center gap-2 group"
                  onClick={handleNavigation}
                >
                  <span className="w-1 h-1 bg-[#19a0b9] rounded-full group-hover:w-2 transition-all"></span>
                  Politika Privatnosti
                </Link>
              </li>

            </ul>
          </div>

          {/* Legal Notice */}
          <div>
            <h3 className="font-bold text-lg text-white mb-6 flex items-center gap-2">

              Pravne Informacije
            </h3>
            <div className="text-sm text-gray-400 leading-relaxed space-y-3">
              <p>Primamo proviziju od oglašenih casina, ali naše recenzije ostaju neovisne i objektivne.</p>
              <p>Svi recenzirani casini potpuno su licencirani od hrvatskih regulatora.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 bg-[#030507]">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-6">
            <h3 className="font-bold text-lg text-white mb-2 flex items-center justify-center gap-2">

              Odgovorno Kockanje
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <a
              href="https://www.gambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/50 backdrop-blur-sm p-3 rounded-md hover:bg-white/10 transition-all border border-gray-800 hover:border-[#19a0b9] flex items-center justify-center group"
            >
              <Image
                src="/gamble-aware.webp"
                alt="GambleAware"
                width={100}
                height={40}
                className="h-10 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://www.hupis.hr/klok"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-sm p-3 rounded-md hover:bg-white/10 transition-all border border-gray-800 hover:border-[#19a0b9] flex items-center justify-center group"
            >
              <Image
                src="/hupis.png"
                alt="HUPIS"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>

            <a
              href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-sm p-3 rounded-md hover:bg-white/10 transition-all border border-gray-800 hover:border-[#19a0b9] flex items-center justify-center group"
            >
              <Image
                src="/pbsvi.svg"
                alt="PBSVI"
                width={100}
                height={40}
                className="h-10 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://www.gamstop.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-sm p-3 rounded-md hover:bg-white/10 transition-all border border-gray-800 hover:border-[#19a0b9] flex items-center justify-center group"
            >
              <Image
                src="/gamstop.svg"
                alt="GamStop"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/50 backdrop-blur-sm p-3 rounded-md hover:bg-white/10 transition-all border border-gray-800 hover:border-[#19a0b9] flex items-center justify-center group"
            >
              <Image
                src="/gamecare-new.svg"
                alt="GamCare"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-md p-4">
              <p className="text-xs text-gray-400 leading-relaxed text-center">
                <strong className="text-[#19a0b9] block mb-1">Upozorenje:</strong>
                Kockanje može biti ovisnost. Igrajte samo radi zabave i kontaktirajte Hrvatski centar za odgovorno
                kockanje ako imate problema.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-[#05070a]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 text-center md:text-left">
              &copy; {new Date().getFullYear()} najboljikasinohr.com - Sva prava pridržana
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <Link href="/o-nama" className="hover:text-[#19a0b9] transition-colors" onClick={handleNavigation}>
                Hrvatska
              </Link>
              <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
              <span>Ažurirano svakodnevno</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
