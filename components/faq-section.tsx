"use client"

import { useState } from "react"

interface FaqItem {
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    question: "Koji su pravni zahtjevi za hrvatske online casine?",
    answer:
      "Hrvatski online casini moraju posjedovati važeću licencu Ministarstva financija, implementirati obaveznu integraciju sa sustavom samoisključenja, osigurati GDPR-usklađeno rukovanje podacima s 256-bitnom SSL enkripcijom, ponuditi transparentne uvjete bonusa i isplata te omogućiti alate za odgovorno kockanje. Operateri također moraju plaćati 15% poreza na bruto prihod od igara i proći godišnje revizije usklađenosti za obnovu licence.",
  },
  {
    question: "Kako provjeriti status licence hrvatskog casina?",
    answer:
      "Provjeru licence možete izvršiti putem javne baze podataka Ministarstva financija na porezna-uprava.hr, gdje su registrirani svi aktivni licencirani operateri s jedinstvenim kodom licence, datumom izdavanja i eventualnim regulatornim upozorenjima. Broj licence mora biti jasno prikazan u podnožju casina i može se unakrsno provjeriti s registrom ministarstva. Preporučujemo provjeru statusa licence prije kreiranja računa igrača.",
  },
  {
    question: "Što su razumni zahtjevi za promet casino bonusa?",
    answer:
      "Industrijski standardi klasificiraju zahtjeve za promet između 30-40x kao fer i ostvarive. Zahtjevi preko 50x smatraju se nepovolјnim i treba ih izbjegavati. Pri procjeni treba uzeti u obzir postotke doprinosa igara – slotovi tipično doprinose 100%, dok stolne igre često doprinose samo 10-20%. Vremenska ograničenja trebala bi biti minimum 30 dana za realističnu provedbu. Transparentni uvjeti bez skrivenih ograničenja su bitni.",
  },
  {
    question: "Kako funkcionira sustav samoisključenja u Hrvatskoj?",
    answer:
      "Hrvatski nacionalni sustav samoisključenja centralizirani je registar gdje se igrači mogu isključiti iz svih hrvatskih licenciranih casina istovremeno. Registracija se može pokrenuti putem web stranice Ministarstva financija ili kroz Hrvatski centar za odgovorno kockanje s trenutnim učinkom. Periodi isključenja kreću se od 6 mjeseci do trajnog isključenja. Sustav je pravno obvezujući i kršenja rezultiraju sankcijama za operatere.",
  },
  {
    question: "Oporezuju li se casino dobici u Hrvatskoj?",
    answer:
      "Hrvatski igrači uživaju oslobođenje od poreza na sve dobitke iz licenciranih online casina koji djeluju pod hrvatskom jurisdikcijom. Oporezivanje se nameće operaterima kroz 15% poreza na bruto prihod od igara te naknade za licence Ministarstvu financija. To osigurava dobitke bez poreza za igrače, ali zahtijeva da dobici potječu s hrvatskih licenciranih platformi. Dobici iz stranih nelicenciranih casina mogu potencijalno biti oporezivi.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-[#080c14] border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-6 text-white">Često Postavljana Pitanja</h2>

          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-gray-300 leading-relaxed">
              Sljedeća sekcija obrađuje najčešća pitanja vezana uz hrvatsko online casino tržište, regulatorne aspekte i
              zaštitu igrača. Odgovori su temeljeni na važećem zakonodavstvu i industrijskim standardima.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-700 rounded-md overflow-hidden">
                <button
                  className="w-full flex justify-between items-start bg-[#14161f] p-6 hover:bg-[#1a1e29] transition-colors text-left group"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-white text-lg pr-8 leading-relaxed group-hover:text-[#19a0b9] transition-colors">
                    {item.question}
                  </span>
                  <span className="text-2xl text-gray-400 group-hover:text-[#19a0b9] transition-colors flex-shrink-0 mt-1">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="bg-[#0f1117] px-6 py-6 border-t border-gray-700">
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
