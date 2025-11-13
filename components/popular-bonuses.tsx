"use client"

import { useState, useEffect } from "react"
import { CasinoCard } from "@/components/casino-card"
import type { Casino } from "@/lib/data"

interface PopularBonusesProps {
  casinos: Casino[]
}

export function PopularBonuses({ casinos }: PopularBonusesProps) {
  const [userCount, setUserCount] = useState(0)

  useEffect(() => {
    const randomCount = Math.floor(Math.random() * (200 - 50 + 1)) + 50
    setUserCount(randomCount)

    const interval = setInterval(
      () => {
        setUserCount((prev) => {
          const change = Math.floor(Math.random() * 9) - 3
          const newCount = prev + change
          return newCount < 30 ? 30 : newCount > 250 ? 250 : newCount
        })
      },
      Math.random() * 5000 + 5000,
    )

    return () => clearInterval(interval)
  }, [])

  const topCasino = casinos[0]

  return (
    <section className="py-20 bg-[#0c111a] border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-6 text-white">Preporučeni Casino Ovog Mjeseca</h2>

          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-gray-300 leading-relaxed mb-4">
              Na temelju sveobuhvatne analize performansi hrvatskog casino tržišta, naši analitičari identificirali su
              najkvalitetnijeg operatera ovog mjeseca. Procjena integrira regulatornu usklađenost, tehničku stabilnost,
              omjer vrijednosti bonusa, efikasnost plaćanja i dokumentirano zadovoljstvo kupaca.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Sljedeća platforma demonstrira dosljedno visoke standarde u sigurnosnim protokolima, transparentnoj
              formulaciji uvjeta i brzom rješavanju sporova. Real-time korisnički podaci ukazuju na značajnu aktivnost,
              što odražava povjerenje tržišta i pozitivno korisničko iskustvo.
            </p>

            <div className="flex items-center gap-3 mb-8">
              
            </div>
          </div>

          <CasinoCard casino={topCasino} rank={1} featured={true} />
        </div>
      </div>
    </section>
  )
}
