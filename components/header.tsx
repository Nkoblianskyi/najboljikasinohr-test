"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleNavigation = () => {
    window.scrollTo(0, 0)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "shadow-lg bg-[#0c111a]/95 backdrop-blur-sm" : "bg-[#0c111a]"
        }`}
    >
      <div className="bg-[#080c14] text-gray-200 py-2 px-4 flex justify-between items-center text-xs border-b-2 border-[#19a0b9]">

        <div className="container mx-auto flex justify-center items-center">
          <Link
            href="/"
            className="flex items-center space-x-2 group transition-all duration-300"
            onClick={handleNavigation}
          >

            <div className="relative w-10 h-10 md:w-14 md:h-8 gap-2 flex items-center justify-center">
              <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
              <span className="text-lg md:text-xl font-bold text-white group-hover:text-[#19a0b9] transition-colors uppercase">
                najboljikasinohr
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
