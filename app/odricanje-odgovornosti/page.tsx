import Link from "next/link"
import { ArrowLeft, AlertTriangle, FileText, Scale } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Odricanje Odgovornosti - najboljikasinohr.com",
  description: "Pročitajte odricanje odgovornosti i važne napomene o korištenju najboljikasinohr.com.",
}

export default function DisclaimerPage() {
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#19a0b9] to-[#1ebecf] rounded-full mb-6">
              <AlertTriangle className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#19a0b9] to-[#1ebecf] bg-clip-text text-transparent">
              Odricanje Odgovornosti
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">Važne napomene i pravne informacije</p>
            <p className="text-sm text-gray-400 mt-4">
              Posljednje ažuriranje: {new Date().toLocaleDateString("hr-HR")}
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* General Disclaimer */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-8 h-8 text-[#19a0b9]" />
                <h2 className="text-2xl font-bold">Opće Odricanje</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Informacije sadržane na web stranici najboljikasinohr.com ("Stranica") namijenjene su isključivo
                  informativnim i zabavnim svrhama. Sve informacije na Stranici pružaju se "kakve jesu", bez bilo kakvih
                  jamstava o točnosti, potpunosti ili prikladnosti za određenu svrhu.
                </p>
                <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4 mt-4">
                  <p className="text-sm">
                    <strong className="text-[#19a0b9]">Važno:</strong> Korištenjem ove Stranice, prihvaćate uvjete ovog
                    odricanja odgovornosti u cijelosti.
                  </p>
                </div>
              </div>
            </section>

            {/* Accuracy */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-8 h-8 text-[#19a0b9]" />
                <h2 className="text-2xl font-bold">Točnost Informacija</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Iako se trudimo osigurati da su sve informacije na ovoj Stranici točne i ažurne, ne možemo jamčiti
                  točnost, potpunost ili aktualnost sadržaja. Online casino industrija brzo se mijenja, a bonusi, uvjeti
                  i ponude se mogu promijeniti bez prethodne najave.
                </p>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#19a0b9] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Uvijek provjerite najnovije uvjete i odredbe izravno na web stranici casina</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#19a0b9] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Bonusi i promocije podliježu promjenama i mogu imati posebne uvjete</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#19a0b9] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Ocjene i mišljenja odražavaju naše iskustvo u vrijeme recenzije</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Affiliate Disclosure */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-8 h-8 text-[#19a0b9]" />
                <h2 className="text-2xl font-bold">Affiliate Odnosi</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  najboljikasinohr.com sudjeluje u affiliate programima s online casinima. To znači da možemo primiti
                  proviziju kada korisnici kliknu na naše linkove i registriraju se na casino stranicama.
                </p>
                <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4 mt-4">
                  <h3 className="font-bold text-white mb-2">Važne Napomene:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#19a0b9]">•</span>
                      <span>Naše recenzije i ocjene ostaju neovisne i objektivne</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#19a0b9]">•</span>
                      <span>Provizije ne utječu na naše preporuke ili rangiranje</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#19a0b9]">•</span>
                      <span>Recenziramo samo casine koje smatramo pouzdanima i sigurnima</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#19a0b9]">•</span>
                      <span>Transparentnost je naš prioritet</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Gambling Risks */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-[#19a0b9]" />
                <h2 className="text-2xl font-bold">Rizici Kockanja</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                  <h3 className="font-bold text-red-400 mb-3">⚠️ UPOZORENJE</h3>
                  <p className="text-sm mb-3">
                    Kockanje nosi financijske rizike i može uzrokovati ovisnost. Nikada ne kockajte s novcem koji si ne
                    možete priuštiti izgubiti.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Kockanje treba biti zabava, ne način za zaradu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Postavite limite i pridržavajte ih se</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Nikada ne pokušavajte "vratiti" gubitke</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Tražite pomoć ako primijetite znakove problema</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm italic">
                  Za pomoć s problemima kockanja, kontaktirajte Hrvatski centar za odgovorno kockanje ili organizacije
                  navedene u našem footeru.
                </p>
              </div>
            </section>

            {/* Age Restriction */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Dobna Ograničenja</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Ova Stranica i svi recenzirani casini namijenjeni su isključivo osobama starijim od 18 godina.
                  Kockanje maloljetnika je ilegalno u Hrvatskoj i većini jurisdikcija.
                </p>
                <div className="bg-[#19a0b9]/10 border border-[#19a0b9]/30 rounded-lg p-4 mt-4 text-center">
                  <div className="inline-flex items-center gap-3 text-2xl font-bold">
                    <span className="text-4xl">18+</span>
                    <span className="text-sm text-left">
                      Ova stranica je
                      <br />
                      samo za odrasle
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Legal Compliance */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Zakonska Usklađenost</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Vi ste odgovorni za poštivanje zakona i propisa vaše jurisdikcije u vezi s online kockanjem. Zakoni se
                  razlikuju ovisno o lokaciji, a vi ste dužni osigurati da je vaše sudjelovanje u online kockanju
                  legalno u vašoj jurisdikciji.
                </p>
                <p>najboljikasinohr.com ne snosi odgovornost za bilo kakvo kršenje zakona od strane korisnika.</p>
              </div>
            </section>

            {/* Third Party Links */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Linkovi Trećih Strana</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Naša Stranica sadrži linkove na web stranice trećih strana (casino operatora). Ne kontroliramo te web
                  stranice i ne odgovaramo za njihov sadržaj, politike privatnosti ili prakse.
                </p>
                <p>
                  Korištenje web stranica trećih strana je na vaš vlastiti rizik, i preporučujemo da pročitate njihove
                  uvjete korištenja i politike privatnosti prije registracije ili igranja.
                </p>
              </div>
            </section>

            {/* No Warranty */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Izostanak Jamstava</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Ne jamčimo da će ova Stranica biti uvijek dostupna ili da će raditi bez grešaka. Zadržavamo pravo
                  suspendirati, povući ili promijeniti cijelu ili bilo koji dio Stranice bez prethodne najave.
                </p>
                <p>Ne snosimo odgovornost za bilo kakve gubitke ili štete uzrokovane:</p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#19a0b9] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Tehničkim problemima ili nedostupnošću Stranice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#19a0b9] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Pogreškama ili netočnostima u sadržaju</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#19a0b9] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Radnjama ili propustima trećih strana (casino operatora)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#19a0b9] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Vašim odlukama temeljenim na informacijama s naše Stranice</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Changes */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Izmjene Odricanja</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Zadržavamo pravo ažurirati ovo odricanje odgovornosti u bilo koje vrijeme. Sve promjene će biti
                  objavljene na ovoj stranici s novim datumom "Posljednje ažuriranje". Nastavljajući koristiti Stranicu
                  nakon promjena, prihvaćate revidirano odricanje.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-[#080c14] border border-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Kontakt</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Ako imate bilo kakva pitanja o ovom odricanju odgovornosti, molimo kontaktirajte nas putem naše web
                  stranice.
                </p>
              </div>
            </section>
          </div>

          {/* Back to Home CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-[#19a0b9]/20 to-[#1ebecf]/20 border border-[#19a0b9]/30 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Pročitali Ste Odricanje</h2>
            <p className="text-gray-300 mb-6">Sada možete nastaviti istraživati najbolje online casine u Hrvatskoj.</p>
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-[#19a0b9] to-[#1ebecf] text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-[#19a0b9]/50 transition-all"
            >
              Povratak na Početnu
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
