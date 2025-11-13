"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, Star } from "lucide-react"
import { casinos } from "@/lib/data"
import { linkifyText } from "@/lib/utils"

export function WelcomeModal() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const modalSeen = sessionStorage.getItem("welcome-modal-seen")
    if (!modalSeen) {
      const timer = setTimeout(() => {
        setShowModal(true)
      }, 8000)

      return () => clearTimeout(timer)
    }
  }, [])

  const closeModal = () => {
    sessionStorage.setItem("welcome-modal-seen", "true")
    setShowModal(false)
  }

  if (!showModal) return null

  const topCasino = casinos[0]

  const renderStars = (rating: number) => {
    const stars = []
    const normalizedRating = rating / 2

    for (let i = 1; i <= 5; i++) {
      const fillPercentage = Math.min(Math.max(normalizedRating - (i - 1), 0), 1) * 100

      stars.push(
        <div key={i} className="relative">
          <Star className="h-5 w-5 text-amber-500/20" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
            <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
          </div>
        </div>,
      )
    }
    return stars
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 md:p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeModal()
        }
      }}
    >
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg shadow-2xl w-full max-w-[380px] md:max-w-lg relative border border-slate-700/50 overflow-hidden">
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            closeModal()
          }}
          className="absolute top-3 right-3 text-slate-400 hover:text-white z-50 bg-slate-800/80 hover:bg-red-600 rounded-full p-2 transition-all duration-300 backdrop-blur-sm border border-slate-700/50 hover:border-red-500"
          type="button"
          aria-label="Zatvori"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="h-1 bg-gradient-to-r from-transparent via-[#19a0b9] to-transparent bg-destructive" />

        <div className="p-5 md:p-6">
          <div className="text-center mb-4">
            
            <h2 className="font-bold text-2xl md:text-3xl text-white mb-1 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Najbolje Ocijenjeni Casino
            </h2>
            <p className="text-slate-400 text-sm">Vaš pouzdani partner u Hrvatskoj</p>
          </div>

          <div className="text-center mb-4">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 md:p-5 shadow-xl mx-auto w-fit border border-slate-700/50 hover:border-[#19a0b9]/50 transition-all duration-300">
              <Image
                src={topCasino.logo || "/placeholder.svg?height=80&width=140&text=" + topCasino.name}
                alt={`${topCasino.name} logo`}
                width={160}
                height={90}
                className="object-contain w-[140px] h-auto md:w-52"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mb-4 pb-4 border-b border-slate-700/50">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">{renderStars(topCasino.rating)}</div>
              <div className="text-white font-bold text-xl ml-1">{topCasino.rating.toFixed(1)}</div>
              <div className="text-slate-500 text-sm">/10</div>
            </div>
            <div className="h-6 w-px bg-slate-700"></div>
            <div className="text-slate-400 text-sm font-medium">{topCasino.votes} recenzija</div>
          </div>

          <div className="text-center mb-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50 shadow-lg">
            <div className="text-[#19a0b9] text-xs font-bold uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-[#19a0b9]/50"></div>
              <span>Bonus Dobrodošlice</span>
              <div className="h-px w-8 bg-[#19a0b9]/50"></div>
            </div>
            <div className="text-white font-bold leading-tight mb-1 text-xl">{topCasino.bonus}</div>
            <div className="text-slate-400 text-xs mt-2">Samo za nove igrače</div>
          </div>

          <div className="mb-3">
            <button
              onClick={(e) => {
                e.preventDefault()
                window.open(topCasino.url, "_blank", "noopener,noreferrer")
                closeModal()
              }}
              className="w-full bg-gradient-to-r from-[#19a0b9] to-[#1ebecf] hover:from-[#1ebecf] hover:to-[#19a0b9] text-white font-bold py-3.5 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-[#19a0b9]/30 hover:shadow-[#19a0b9]/50 hover:scale-[1.02] border border-[#19a0b9]/30 text-base bg-amber-400"
            >
              Igraj Sada →
            </button>
          </div>

          <div className="text-center border-t border-slate-700/50 pt-3">
            <div
              className="text-slate-500 text-[10px] md:text-xs font-light leading-relaxed"
              onClick={(e) => e.stopPropagation()}
            >
              {linkifyText(topCasino.terms)}
            </div>
          </div>
        </div>

        <div className="h-1 bg-gradient-to-r from-transparent via-[#19a0b9]/30 to-transparent bg-blue-600" />
      </div>
    </div>
  )
}
