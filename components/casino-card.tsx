"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import type { Casino } from "@/lib/data"

interface CasinoCardProps {
  casino: Casino
  rank: number
}

export function CasinoCard({ casino, rank }: CasinoCardProps) {
  const [showFullTerms, setShowFullTerms] = useState(false)
  const isFirstItem = rank === 1

  const getPrimaryBadge = () => {
    if (rank === 1) return { text: "TOP PREPORUKA", color: "bg-yellow-400 text-black border-2 border-[#19a0b9]" }
    if (rank === 2) return { text: "NAJBOLJI IZBOR", color: "bg-yellow-400 text-black border-2 border-[#19a0b9]" }
    if (rank === 3) return { text: "POPULARAN", color: "bg-yellow-400 text-black border-2 border-[#19a0b9]" }
    return null
  }

  const calculateStars = (rating: number) => {
    const starValue = rating / 2
    const roundedStars = Math.round(starValue * 5) / 5
    const fullStars = Math.floor(roundedStars)
    const partialFill = roundedStars - fullStars
    const emptyStars = 5 - fullStars - (partialFill > 0 ? 1 : 0)

    return { fullStars, partialFill, emptyStars }
  }

  const { fullStars, partialFill, emptyStars } = calculateStars(casino.rating)

  const renderStars = (size: "sm" | "md") => {
    const starClass = size === "sm" ? "w-3 h-3" : "w-4 h-4"
    const stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className={`${starClass} fill-yellow-400 text-yellow-400 stroke-yellow-400 stroke-[1.5px]`}
        />,
      )
    }

    if (partialFill > 0) {
      const fillPercentage = partialFill * 100
      stars.push(
        <div key="partial" className={`relative ${starClass}`}>
          <Star className={`absolute ${starClass} text-transparent stroke-yellow-400 stroke-[1.5px]`} />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
            <Star className={`${starClass} fill-yellow-400 text-yellow-400 stroke-yellow-400 stroke-[1.5px]`} />
          </div>
        </div>,
      )
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className={`${starClass} text-transparent stroke-yellow-400 stroke-[1.5px]`} />,
      )
    }

    return stars
  }

  const primaryBadge = getPrimaryBadge()

  return (
    <div className="relative">
      <a
        href={casino.url}
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className={`block relative rounded-xl p-4 md:p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer ${
          isFirstItem
            ? "bg-gradient-to-br from-[#0a1520] via-[#0c1821] to-[#0a1520] border-2 border-[#19a0b9] shadow-lg shadow-[#19a0b9]/20"
            : "bg-[#0c111a] border-2 border-slate-700 shadow-md"
        }`}
      >
        <div className="absolute inset-0 overflow-hidden rounded-none"></div>

        {primaryBadge && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
            <Badge
              className={`${primaryBadge.color} px-2 py-1 md:px-3 md:py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider shadow-md rounded-none border-yellow-400`}
            >
              {primaryBadge.text}
            </Badge>
          </div>
        )}

        <div className="relative z-10">
          {/* Desktop Layout */}
          <div className="hidden md:flex md:items-center md:gap-4 lg:gap-6 pt-4">
            <div
              className={`w-10 h-10 lg:w-12 lg:h-12 font-bold rounded-full flex items-center justify-center text-lg lg:text-xl flex-shrink-0 ${
                isFirstItem
                  ? "bg-gradient-to-br from-[#19a0b9] to-[#0d7a8f] text-white border-2 border-[#1ebecf] shadow-md"
                  : "bg-gradient-to-br from-slate-700 to-slate-800 text-slate-300 border-2 border-slate-600"
              }`}
            >
              {rank}
            </div>

            <div className="flex-shrink-0 bg-[#1a1d24] p-2 md:p-3 rounded-lg border border-slate-700">
              <Image
                src={casino.logo || "/placeholder.svg"}
                alt={casino.name}
                width={180}
                height={96}
                className="w-[140px] h-[70px] lg:w-[180px] lg:h-[96px] object-contain"
              />
            </div>

            <div className="flex-1 text-center min-w-0">
              <div className="text-[#19a0b9] font-bold mb-1 text-base lg:text-xl">BONUS</div>
              <p className="text-white font-semibold leading-tight text-lg lg:text-2xl break-words">{casino.bonus}</p>
            </div>

            <div className="text-center flex-shrink-0">
              <div className="text-xl lg:text-2xl font-bold text-[#19a0b9] mb-1">
                {casino.rating.toFixed(1)}
                <span className="text-sm text-slate-400">/10</span>
              </div>
              <div className="flex items-center justify-center mb-1">{renderStars("md")}</div>
              <div className="text-slate-400 text-xs">
                <span>({casino.votes})</span>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="bg-gradient-to-r from-[#19a0b9] to-[#1ebecf] hover:from-[#1ebecf] hover:to-[#19a0b9] text-white font-bold px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base border-2 border-[#1ebecf] rounded-lg flex items-center gap-2 transition-all shadow-md whitespace-nowrap">
                POSJETITE STRANICU
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col gap-3 p-3">
            <div className="grid grid-cols-2 items-start gap-2 min-h-[100px]">
              <div className="flex justify-center items-center h-full">
                <div className="bg-[#1a1d24] p-2 rounded shadow-sm w-32 h-16 flex items-center justify-center overflow-hidden border border-slate-700">
                  <Image
                    src={casino.logo || "/placeholder.svg"}
                    alt={casino.name}
                    width={100}
                    height={40}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
              <div className="text-center flex flex-col justify-center h-full min-h-[80px]">
                <div className="uppercase font-bold mb-1 text-xs text-[#19a0b9]">BONUS</div>
                <div className="font-bold text-white text-lg leading-tight">{casino.bonus}</div>
              </div>
            </div>
            <div className="grid grid-cols-3 items-center gap-2 pt-2 border-t border-slate-700 min-h-[60px]">
              <div className="text-center">
                <div className="text-lg font-bold text-[#19a0b9]">{casino.rating.toFixed(1)}</div>
                <div className="text-[10px] text-slate-400 font-semibold">Ocjena</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center gap-0.5 mb-1">{renderStars("sm")}</div>
                <div className="text-[10px] text-slate-400 font-semibold">({casino.votes})</div>
              </div>
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-[#19a0b9] to-[#1ebecf] hover:from-[#1ebecf] hover:to-[#19a0b9] text-white text-xs px-4 py-2 font-semibold shadow border-2 border-[#1ebecf] rounded-lg">
                  Posjeti
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 md:mt-4 pt-3 border-t border-slate-700">
            <p className="text-slate-400 text-[10px] sm:text-xs text-center leading-relaxed">{casino.terms}</p>
          </div>
        </div>
      </a>
    </div>
  )
}
