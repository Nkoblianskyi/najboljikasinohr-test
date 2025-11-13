"use client"

import { useState, useEffect } from "react"
import { Star, CheckCircle, Users } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [currentDate, setCurrentDate] = useState("")

  useEffect(() => {
    const getCurrentDate = () => {
      const now = new Date()
      const months = [
        "siječanj",
        "veljača",
        "ožujak",
        "travanj",
        "svibanj",
        "lipanj",
        "srpanj",
        "kolovoz",
        "rujan",
        "listopad",
        "studeni",
        "prosinac",
      ]
      const month = months[now.getMonth()]
      const year = now.getFullYear()
      return `${month} ${year}`
    }

    setCurrentDate(getCurrentDate())
  }, [])

  return (
    <section className="bg-gradient-to-b from-[#0a0e16] via-[#0c111a] to-[#0d1420] text-white py-8 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#19a0b9]/10 via-transparent to-transparent" />
        <div
          className="w-full h-full opacity-10"
          style={{
            backgroundImage: 'url("/casino-business-bg.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(2px)",
          }}
        />
      </div>

      <div className="absolute top-10 right-10 w-32 h-32 bg-[#19a0b9]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#1ebecf]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 bg-[#19a0b9]/10 border border-[#19a0b9]/20 rounded-full px-4 py-2 mb-4">
              
              <span className="text-xs md:text-sm text-gray-300">Najpouzdaniji casino vodič u Hrvatskoj</span>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
              <span className="text-white">
                Otkrijte <span className="text-[#19a0b9]">Vrhunske Casino Platforme</span>
              </span>
              <br />
              <span className="text-lg md:text-2xl lg:text-3xl text-gray-400 font-normal">
                Prilagođeno za hrvatske igrače
              </span>
            </h1>

            <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
              Detaljne analize, usporedbe bonusa i objektivne recenzije najboljih licenciranih casino platformi. Vaš
              sigurni put do zabave i dobitaka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 bg-[#0c111a]/50 backdrop-blur-sm border border-[#19a0b9]/20 rounded-lg p-4">
              <CheckCircle className="w-5 h-5 text-[#19a0b9] flex-shrink-0" />
              <div>
                <div className="text-sm font-semibold text-white">Licencirani casini</div>
                <div className="text-xs text-gray-400">Provjerena sigurnost</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#0c111a]/50 backdrop-blur-sm border border-[#19a0b9]/20 rounded-lg p-4">
              <Users className="w-5 h-5 text-[#1ebecf] flex-shrink-0" />
              <div>
                <div className="text-sm font-semibold text-white">50,000+ igrača</div>
                <div className="text-xs text-gray-400">Vjeruje nam</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#0c111a]/50 backdrop-blur-sm border border-[#19a0b9]/20 rounded-lg p-4">
              <Image src="/flag.png" alt="HR" width={20} height={15} className="flex-shrink-0" />
              <div>
                <div className="text-sm font-semibold text-white">Ažurirano</div>
                <div className="text-xs text-gray-400">{currentDate}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
