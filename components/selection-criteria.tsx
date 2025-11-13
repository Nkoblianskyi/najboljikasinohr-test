export function SelectionCriteria() {
  return (
    <section className="py-20 bg-[#080c14] border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-6 text-white">Metodologija Procjene Casina</h2>

          <div className="prose prose-invert max-w-none">
            <div className="mb-8">
              <h3 className="font-serif text-2xl font-semibold text-[#19a0b9] mb-4">
                Licenca i Regulatorna Usklađenost
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Temelj svake recenzije casina je provjera važeće hrvatske licence za igre na sreću. Pregledavamo javne
                registre Ministarstva financija kako bismo potvrdili status licence, povijesnu usklađenost i eventualna
                regulatorna upozorenja. Operateri bez aktivne hrvatske licence automatski se isključuju s naše
                platforme, bez obzira na međunarodne certifikate.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Tehnička sigurnost procjenjuje se kroz provjeru implementacije SSL/TLS enkripcije (minimum 256-bitna
                enkripcija), dokumentacije usklađenosti s GDPR-om i integracije certificiranih generatora slučajnih
                brojeva (RNG) od priznatih testnih instituta poput eCOGRA ili iTech Labs. Dajemo prednost operaterima s
                ISO 27001 certifikatom informacijske sigurnosti.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-serif text-2xl font-semibold text-[#19a0b9] mb-4">
                Analiza Bonusa i Procjena Vrijednosti
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Bonuse dobrodošlice analiziramo kroz holistički pristup koji procjenjuje nominalnu vrijednost bonusa u
                odnosu na zahtjeve za promet (wagering requirements), postotke doprinosa igara, maksimalne limite
                depozita i vremenska ograničenja. Industrijski standardi nalažu da se zahtjevi za promet između 30-40x
                smatraju fer, dok se zahtjevi preko 50x klasificiraju kao nepovolјni.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Razlikujemo prave bonus ponude od marketinški vođenih kampanja s restriktivnim uvjetima. Poseban fokus
                stavljamo na maksimalne limite isplate iz bonus dobitaka, isključene metode plaćanja i ograničenja
                igara. Transparentni i lako razumljivi uvjeti bonusa pozitivno se vrednuju u našem sustavu bodovanja.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-serif text-2xl font-semibold text-[#19a0b9] mb-4">
                Infrastruktura Plaćanja i Obrada Transakcija
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Platna rješenja procjenjujemo na temelju brzine obrade, raznolikosti metoda i naknada za transakcije.
                Prva isplata uključuje tipično KYC provjeru (Know Your Customer), gdje vrijeme obrade ne bi trebalo
                prelaziti 48 sati uz ispravnu dokumentaciju. Testiramo tradicionalne bankovne transfere, e-novčanike
                (MobilePay, Skrill) i mogućnosti kriptovaluta.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Minimalni limiti za isplatu, maksimalni mjesečni withdrawal limiti i zahtjevi za verifikaciju
                eksplicitno se dokumentiraju u našim recenzijama. Operateri s dosljedno brzim isplatama (ispod 24 sata
                za e-novčanike) i minimalnim naknadama postižu značajno više rezultate u našem sustavu procjene.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
