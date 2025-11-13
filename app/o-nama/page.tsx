import Link from "next/link"
import { ArrowLeft, Shield, Users, Award, TrendingUp } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "O Nama - najboljikasinohr.com",
  description:
    "Saznajte više o najboljikasinohr.com - vašem pouzdanom izvoru za objektivne recenzije online casina u Hrvatskoj.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0c111a] text-white">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#19a0b9] hover:text-[#1ebecf] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Povratak na početnu</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#19a0b9] to-[#1ebecf] bg-clip-text text-transparent">
              O Nama
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Vaš pouzdani partner za sigurno i odgovorno online kockanje u Hrvatskoj
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Who We Are */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-[#19a0b9]" />
                <h2 className="text-2xl font-bold">Tko Smo Mi</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  najboljikasinohr.com je vodeća platforma za recenzije online casina u Hrvatskoj. Naš tim stručnjaka s
                  višegodišnjim iskustvom u industriji kockanja posvećen je pružanju najkvalitetnijih i najobjektivnijih
                  informacija o online casinima dostupnim hrvatskim igračima.
                </p>
                <p>
                  Osnovali smo se s jednostavnom misijom: pomoći igračima da donesu informirane odluke kada biraju
                  online casino. U svijetu punom opcija, razumijemo koliko može biti teško pronaći pouzdan, siguran i
                  zabavan casino.
                </p>
              </div>
            </section>

            {/* Our Mission */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                
                <h2 className="text-2xl font-bold">Naša Misija</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Naša misija je jednostavna: pružiti transparentne, detaljne i pouzdane recenzije online casina koji
                  djeluju na hrvatskom tržištu. Testiramo svaki casino prema strogim kriterijima koji uključuju:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#19a0b9] rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong className="text-white">Licenciranje i sigurnost:</strong> Svi recenzirani casini moraju
                      imati važeće licence
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#19a0b9] rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong className="text-white">Ponuda igara:</strong> Kvaliteta i raznolikost dostupnih igara
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#19a0b9] rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong className="text-white">Bonusi i promocije:</strong> Transparentnost uvjeta i povoljnost
                      ponuda
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#19a0b9] rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong className="text-white">Metode plaćanja:</strong> Sigurnost i brzina transakcija
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#19a0b9] rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong className="text-white">Korisnička podrška:</strong> Dostupnost i kvaliteta pomoći
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* How We Work */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                
                <h2 className="text-2xl font-bold">Kako Radimo</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Naš proces recenziranja je temeljit i nepristran. Svaki casino prolazi kroz detaljnu analizu koja
                  uključuje:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4">
                    <h3 className="font-bold text-white mb-2">1. Testiranje</h3>
                    <p className="text-sm">Registracija, igranje i isplate s pravim novcem</p>
                  </div>
                  <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4">
                    <h3 className="font-bold text-white mb-2">2. Analiza</h3>
                    <p className="text-sm">Detaljna provjera svih aspekata casina</p>
                  </div>
                  <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4">
                    <h3 className="font-bold text-white mb-2">3. Ocjenjivanje</h3>
                    <p className="text-sm">Objektivna ocjena prema našim kriterijima</p>
                  </div>
                  <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4">
                    <h3 className="font-bold text-white mb-2">4. Ažuriranje</h3>
                    <p className="text-sm">Redovito ažuriranje recenzija</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Responsible Gaming */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                
                <h2 className="text-2xl font-bold">Odgovorno Kockanje</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Podržavamo odgovorno kockanje i vjerujemo da online kockanje treba biti zabava, a ne problem.
                  Promovišemo samo casine koji nude alate za odgovorno igranje i surađujemo s organizacijama koje pomažu
                  osobama s problemima kockanja.
                </p>
                <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-6 mt-4">
                  <p className="text-sm">
                    <strong className="text-[#19a0b9]">Napomena:</strong> Svi recenzirani casini su namijenjeni osobama
                    starijim od 18 godina. Ako smatrate da imate problem s kockanjem, obratite se stručnjacima za pomoć.
                  </p>
                </div>
              </div>
            </section>

            {/* Transparency */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Transparentnost</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Mi primamo proviziju od nekih casina koje recenziramo kada igrači kliknu na naše linkove i
                  registriraju se. Međutim, ovo nikada ne utječe na naše recenzije ili ocjene. Naša reputacija ovisi o
                  pružanju istinitih i nepristranih informacija.
                </p>
                <p>
                  Sve naše recenzije su temeljene na stvarnim iskustvima i objektivnim kriterijima. Ako casino ne
                  zadovoljava naše standarde, nećemo ga preporučiti, bez obzira na moguću proviziju.
                </p>
              </div>
            </section>
          </div>

          {/* Contact CTA */}
          
        </div>
      </main>

      <Footer />
    </div>
  )
}
