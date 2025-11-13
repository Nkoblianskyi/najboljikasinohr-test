import Link from "next/link"
import { ArrowLeft, Cookie, Settings, Shield, Info } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Politika Kolačića - najboljikasinohr.com",
  description: "Saznajte kako najboljikasinohr.com koristi kolačiće za poboljšanje vašeg iskustva na web stranici.",
}

export default function CookiePolicyPage() {
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
              Politika Kolačića
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">Kako koristimo kolačiće na najboljikasinohr.com</p>
            <p className="text-sm text-gray-400 mt-4">
              Posljednje ažuriranje: {new Date().toLocaleDateString("hr-HR")}
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* What Are Cookies */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                
                <h2 className="text-2xl font-bold">Što su Kolačići?</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Kolačići su male tekstualne datoteke koje web stranica pohranjuje na vaše računalo ili mobilni uređaj
                  kada je posjetite. Oni omogućuju web stranici da zapamti vaše radnje i postavke (kao što su prijava,
                  jezik, veličina fonta i druge postavke prikaza) kroz određeno vrijeme.
                </p>
                <p>
                  To znači da ne morate ponovno unositi te informacije svaki put kada se vratite na stranicu ili
                  pregledavate različite stranice.
                </p>
              </div>
            </section>

            {/* How We Use Cookies */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                
                <h2 className="text-2xl font-bold">Kako Koristimo Kolačiće</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>Na našoj web stranici koristimo kolačiće za različite svrhe:</p>
              </div>
            </section>

            {/* Essential Cookies */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-[#19a0b9]/20 px-4 py-2 rounded-lg mb-4">
                  
                  <h3 className="text-xl font-bold">1. Nužni Kolačići</h3>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Ovi kolačići su neophodni za funkcioniranje web stranice i ne mogu se onemogućiti u našim sustavima.
                    Obično se postavljaju samo kao odgovor na vaše radnje koje predstavljaju zahtjev za uslugama, kao
                    što su postavljanje vaših postavki privatnosti, prijava ili popunjavanje obrazaca.
                  </p>
                  <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4 mt-4">
                    <p className="text-sm">
                      <strong>Primjeri:</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                      <li>Zapamćivanje vaših postavki privatnosti i kolačića</li>
                      <li>Održavanje sigurnosti i sprječavanje prijevara</li>
                      <li>Omogućavanje osnovnih funkcija stranice</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Analytics Cookies */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-[#19a0b9]/20 px-4 py-2 rounded-lg mb-4">
                  
                  <h3 className="text-xl font-bold">2. Analitički Kolačići</h3>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Ovi kolačići nam omogućuju da brojimo posjete i izvore prometa kako bismo mogli mjeriti i poboljšati
                    učinkovitost naše stranice. Oni nam pomažu znati koje su stranice najpopularnije i najmanje
                    popularne te vidjeti kako se posjetitelji kreću po stranici.
                  </p>
                  <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4 mt-4">
                    <p className="text-sm">
                      <strong>Primjeri:</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                      <li>Google Analytics - za analizu ponašanja korisnika</li>
                      <li>Praćenje broja posjeta i vremena provedenog na stranici</li>
                      <li>Razumijevanje koje su stranice najposećenije</li>
                    </ul>
                  </div>
                  <p className="text-sm italic">
                    Sve informacije koje ovi kolačići prikupljaju su agregirane i stoga anonimne. Možete odbiti ove
                    kolačiće putem postavki u našem cookie banneru.
                  </p>
                </div>
              </div>
            </section>

            {/* Marketing Cookies */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-[#19a0b9]/20 px-4 py-2 rounded-lg mb-4">
                  
                  <h3 className="text-xl font-bold">3. Marketinški Kolačići</h3>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Ovi kolačići mogu biti postavljeni kroz našu stranicu od strane naših oglašivačkih partnera. Mogu ih
                    koristiti te tvrtke za izgradnju profila vaših interesa i prikazivanje relevantnih oglasa na drugim
                    stranicama.
                  </p>
                  <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4 mt-4">
                    <p className="text-sm">
                      <strong>Primjeri:</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                      <li>Prikazivanje personaliziranih casino ponuda</li>
                      <li>Praćenje efektivnosti naših marketing kampanja</li>
                      <li>Retargeting oglasi na drugim platformama</li>
                    </ul>
                  </div>
                  <p className="text-sm italic">
                    Možete odbiti ove kolačiće putem postavki u našem cookie banneru. Ako ih odbijete, nećete vidjeti
                    ciljane oglase.
                  </p>
                </div>
              </div>
            </section>

            {/* Managing Cookies */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Upravljanje Kolačićima</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Većina web preglednika automatski prihvaća kolačiće, ali možete promijeniti postavke svog preglednika
                  kako biste odbili kolačiće ako želite. Imajte na umu da to može utjecati na funkcionalnost naše web
                  stranice.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4">
                    <h3 className="font-bold text-white mb-2">Chrome</h3>
                    <p className="text-sm">Postavke → Privatnost i sigurnost → Kolačići</p>
                  </div>
                  <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4">
                    <h3 className="font-bold text-white mb-2">Firefox</h3>
                    <p className="text-sm">Opcije → Privatnost i sigurnost → Kolačići</p>
                  </div>
                  <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4">
                    <h3 className="font-bold text-white mb-2">Safari</h3>
                    <p className="text-sm">Postavke → Privatnost → Blokiraj kolačiće</p>
                  </div>
                  <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4">
                    <h3 className="font-bold text-white mb-2">Edge</h3>
                    <p className="text-sm">Postavke → Privatnost → Kolačići</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Updates */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Ažuriranja Politike</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Možemo s vremena na vrijeme ažurirati ovu Politiku kolačića kako bismo odražavali promjene u
                  tehnologiji, zakonodavstvu ili našoj poslovnoj praksi. Preporučujemo da povremeno pregledate ovu
                  stranicu kako biste bili informirani o načinu na koji koristimo kolačiće.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Kontakt</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Ako imate bilo kakva pitanja o našoj upotrebi kolačića, možete nas kontaktirati putem naše web
                  stranice.
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
