import Link from "next/link"
import { ArrowLeft, Lock, Eye, Shield, Database, UserCheck, AlertCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Politika Privatnosti - najboljikasinohr.com",
  description: "Saznajte kako najboljikasinohr.com prikuplja, koristi i štiti vaše osobne podatke.",
}

export default function PrivacyPolicyPage() {
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
              Politika Privatnosti
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">Vaša privatnost je naš prioritet</p>
            <p className="text-sm text-gray-400 mt-4">
              Posljednje ažuriranje: {new Date().toLocaleDateString("hr-HR")}
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Introduction */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                
                <h2 className="text-2xl font-bold">Uvod</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  najboljikasinohr.com ("mi", "nas" ili "naš") poštuje vašu privatnost i obvezuje se zaštiti vaše osobne
                  podatke. Ova Politika privatnosti će vas obavijestiti o tome kako se brinemo o vašim osobnim podacima
                  kada posjetite našu web stranicu i o vašim pravima privatnosti.
                </p>
                <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4 mt-4">
                  <p className="text-sm">
                    <strong className="text-[#19a0b9]">Važno:</strong> Ova Politika privatnosti odnosi se samo na našu
                    web stranicu. Ako kliknete na link do trećih strana (kao što su online casini), biti ćete
                    preusmjereni na njihovu web stranicu gdje će se primjenjivati njihova politika privatnosti.
                  </p>
                </div>
              </div>
            </section>

            {/* Data We Collect */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                
                <h2 className="text-2xl font-bold">Koje Podatke Prikupljamo</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">1. Automatski Prikupljeni Podaci</h3>
                  <p className="text-gray-300 mb-4">
                    Kada posjetite našu web stranicu, automatski prikupljamo određene informacije:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-300">
                      <span className="w-2 h-2 bg-[#19a0b9] rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        <strong className="text-white">Tehnički podaci:</strong> IP adresa, tip preglednika, verzija
                        preglednika, postavke vremenske zone, vrste dodataka preglednika, operativni sustav i platforma
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <span className="w-2 h-2 bg-[#19a0b9] rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        <strong className="text-white">Podaci o korištenju:</strong> informacije o vašoj posjeti,
                        uključujući URL, podatke klikova, stranice koje ste pregledavali, vrijeme provedeno na
                        stranicama
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <span className="w-2 h-2 bg-[#19a0b9] rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        <strong className="text-white">Kolačići:</strong> Koristimo kolačiće za poboljšanje vašeg
                        iskustva (vidi našu Politiku kolačića)
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">2. Podaci Koje Dobrovoljno Pružate</h3>
                  <p className="text-gray-300 mb-4">
                    Možemo prikupljati podatke koje nam dobrovoljno pružite, kao što su:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-300">
                      <span className="w-2 h-2 bg-[#19a0b9] rounded-full mt-2 flex-shrink-0"></span>
                      <span>Informacije iz kontakt obrazaca (ako ih koristite)</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <span className="w-2 h-2 bg-[#19a0b9] rounded-full mt-2 flex-shrink-0"></span>
                      <span>Povratne informacije ili korespondenciju</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Data */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                
                <h2 className="text-2xl font-bold">Kako Koristimo Vaše Podatke</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>Vaše osobne podatke koristimo na sljedeće načine:</p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4">
                    <h3 className="font-bold text-white mb-2">Poboljšanje Usluga</h3>
                    <p className="text-sm">Analiza kako korisnici koriste našu stranicu kako bismo je poboljšali</p>
                  </div>
                  <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4">
                    <h3 className="font-bold text-white mb-2">Personalizacija</h3>
                    <p className="text-sm">Pružanje relevantnog sadržaja i preporuka</p>
                  </div>
                  <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4">
                    <h3 className="font-bold text-white mb-2">Sigurnost</h3>
                    <p className="text-sm">Sprječavanje prijevara i osiguravanje sigurnosti stranice</p>
                  </div>
                  <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4">
                    <h3 className="font-bold text-white mb-2">Marketing</h3>
                    <p className="text-sm">Prikazivanje relevantnih casino ponuda (samo uz vašu suglasnost)</p>
                  </div>
                  <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4">
                    <h3 className="font-bold text-white mb-2">Komunikacija</h3>
                    <p className="text-sm">Odgovaranje na vaše upite i zahtjeve</p>
                  </div>
                  <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4">
                    <h3 className="font-bold text-white mb-2">Analitika</h3>
                    <p className="text-sm">Razumijevanje trendova i ponašanja korisnika</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Sharing */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                
                <h2 className="text-2xl font-bold">Dijeljenje Podataka</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>Vaše osobne podatke možemo dijeliti sa sljedećim stranama:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#19a0b9] rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong className="text-white">Partnerski casini:</strong> Kada kliknete na naše affiliate
                      linkove, možemo dijeliti određene podatke s casino operatorima za praćenje provizija
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#19a0b9] rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong className="text-white">Analitički servisi:</strong> Koristimo Google Analytics za
                      razumijevanje korištenja stranice (svi podaci su anonimizirani)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#19a0b9] rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong className="text-white">Pružatelji usluga:</strong> Treće strane koje nam pomažu u radu web
                      stranice (hosting, održavanje)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#19a0b9] rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong className="text-white">Zakonske obveze:</strong> Ako je potrebno po zakonu ili za zaštitu
                      naših prava
                    </span>
                  </li>
                </ul>
                <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4 mt-6">
                  <p className="text-sm">
                    <strong className="text-[#19a0b9]">Napomena:</strong> Nikada ne prodajemo vaše osobne podatke trećim
                    stranama za njihove marketinške svrhe.
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                
                <h2 className="text-2xl font-bold">Vaša Prava</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>U skladu s GDPR-om i hrvatskim zakonima o zaštiti podataka, imate sljedeća prava:</p>
                <div className="space-y-4 mt-6">
                  <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4">
                    <h3 className="font-bold text-white mb-2">Pravo na pristup</h3>
                    <p className="text-sm">Možete zatražiti kopiju svojih osobnih podataka koje držimo</p>
                  </div>
                  <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4">
                    <h3 className="font-bold text-white mb-2">Pravo na ispravak</h3>
                    <p className="text-sm">Možete zatražiti ispravak netočnih ili nepotpunih podataka</p>
                  </div>
                  <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4">
                    <h3 className="font-bold text-white mb-2">Pravo na brisanje</h3>
                    <p className="text-sm">Možete zatražiti brisanje svojih osobnih podataka</p>
                  </div>
                  <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4">
                    <h3 className="font-bold text-white mb-2">Pravo na ograničenje obrade</h3>
                    <p className="text-sm">Možete zatražiti ograničenje kako obrađujemo vaše podatke</p>
                  </div>
                  <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4">
                    <h3 className="font-bold text-white mb-2">Pravo na prigovor</h3>
                    <p className="text-sm">Možete prigovoriti obradi vaših podataka</p>
                  </div>
                  <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4">
                    <h3 className="font-bold text-white mb-2">Pravo na prenosivost podataka</h3>
                    <p className="text-sm">Možete zatražiti prijenos svojih podataka drugom pružatelju usluga</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                
                <h2 className="text-2xl font-bold">Sigurnost Podataka</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Implementirali smo odgovarajuće sigurnosne mjere kako bismo spriječili slučajni gubitak, korištenje
                  ili pristup vašim osobnim podacima na neovlašteni način. Koristimo:
                </p>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#19a0b9] rounded-full mt-2 flex-shrink-0"></span>
                    <span>SSL enkripciju za prijenos podataka</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#19a0b9] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Sigurne servere za pohranu podataka</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#19a0b9] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Redovite sigurnosne revizije</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#19a0b9] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Ograničen pristup podacima samo ovlaštenom osoblju</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Retention */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                
                <h2 className="text-2xl font-bold">Zadržavanje Podataka</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Vaše osobne podatke zadržavamo samo onoliko dugo koliko je potrebno za svrhe opisane u ovoj Politici
                  privatnosti. Nakon toga, sigurno brišemo ili anonimiziramo vaše podatke.
                </p>
                <p>
                  Analitički podaci obično se zadržavaju 26 mjeseci, dok se tehnički podaci mogu zadržati kraće vrijeme
                  za dijagnostiku i sigurnost.
                </p>
              </div>
            </section>

            {/* Children */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                
                <h2 className="text-2xl font-bold">Maloljetnici</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Naša web stranica nije namijenjena osobama mlađim od 18 godina. Svjesno ne prikupljamo osobne podatke
                  od maloljetnika. Ako ste roditelj ili skrbnik i mislite da je vaše dijete pružilo osobne podatke,
                  molimo kontaktirajte nas kako bismo mogli poduzeti odgovarajuće radnje.
                </p>
              </div>
            </section>

            {/* Changes */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Izmjene Politike</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Možemo ažurirati ovu Politiku privatnosti s vremena na vrijeme. Svaka promjena će biti objavljena na
                  ovoj stranici s novim datumom "Posljednje ažuriranje". Preporučujemo povremeno pregledavanje ove
                  Politike kako biste bili informirani o tome kako štitimo vaše podatke.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Kontaktirajte Nas</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Ako imate bilo kakva pitanja o ovoj Politici privatnosti ili kako obrađujemo vaše osobne podatke, ili
                  želite ostvariti bilo koje od svojih prava, molimo kontaktirajte nas putem naše web stranice.
                </p>
                <p>
                  Također imate pravo podnijeti pritužbu Agenciji za zaštitu osobnih podataka (AZOP) ako smatrate da ne
                  obrađujemo vaše podatke na zakonit način.
                </p>
              </div>
            </section>
          </div>

          {/* Back to Home CTA */}
          
        </div>
      </main>

      <Footer />
    </div>
  )
}
