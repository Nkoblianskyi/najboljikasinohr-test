"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Shield, X, Cookie, Check } from "lucide-react"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    localStorage.setItem("cookie-preferences", JSON.stringify({ essential: true, analytics: true, marketing: true }))
    setShowConsent(false)
    setShowModal(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    localStorage.setItem("cookie-preferences", JSON.stringify({ essential: true, analytics: false, marketing: false }))
    setShowConsent(false)
    setShowModal(false)
  }

  const savePreferences = () => {
    localStorage.setItem("cookie-consent", "custom")
    localStorage.setItem("cookie-preferences", JSON.stringify(cookiePreferences))
    setShowConsent(false)
    setShowModal(false)
  }

  if (!showConsent) return null

  return (
    <>
      <div className="fixed bottom-0 inset-x-0 z-50 animate-in slide-in-from-bottom duration-500">
        <div className="bg-gradient-to-br from-[#0c111a] via-[#0f1621] to-[#080c14] border-t-2 border-accent shadow-[0_-10px_50px_rgba(25,160,185,0.15)] backdrop-blur-md">
          <div className="container mx-auto max-w-7xl px-4 py-6 md:py-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
              {/* Icon & Content */}
              <div className="flex items-start gap-4 flex-1">
                <div className="flex-shrink-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl p-3.5 border border-accent/40 shadow-lg shadow-accent/20">
                  <Cookie className="h-7 w-7 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    Kolačići i Privatnost
                    <Shield className="h-5 w-5 text-accent" />
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-3xl">
                    Koristimo kolačiće kako bismo vam pružili najbolje iskustvo i personalizirane sadržaje. Vaša
                    privatnost je naš prioritet.{" "}
                    <button
                      onClick={() => setShowModal(true)}
                      className="text-accent hover:text-accent-light underline underline-offset-2 font-semibold transition-colors inline-flex items-center gap-1"
                    >
                      Pogledajte detalje
                    </button>
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 w-full lg:w-auto flex-col sm:flex-row">
                <button
                  onClick={acceptCookies}
                  className="group relative bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 hover:scale-105 uppercase tracking-wider text-sm flex items-center justify-center gap-2"
                >
                  <Check className="h-5 w-5" />
                  Prihvati sve
                </button>
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 rounded-xl font-bold transition-all border-2 border-white/20 hover:border-accent/50 uppercase tracking-wider text-sm backdrop-blur-sm"
                >
                  Postavke
                </button>
                <button
                  onClick={declineCookies}
                  className="bg-white/5 hover:bg-white/10 text-gray-300 px-6 py-3.5 rounded-xl font-semibold transition-all border border-white/10 text-sm hidden sm:block"
                >
                  Odbij
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setShowModal(false)} />

          <div className="relative bg-gradient-to-br from-[#0c111a] via-[#0f1621] to-[#080c14] rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden border-2 border-accent/30 animate-in zoom-in-95 duration-300">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-gradient-to-r from-accent/10 to-accent-light/10 border-b-2 border-accent/30 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-accent/30 to-accent/10 rounded-xl p-3 border border-accent/40">
                    <Cookie className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Postavke Kolačića</h2>
                    <p className="text-sm text-gray-400 mt-1">Prilagodite svoje iskustvo</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg group"
                  aria-label="Zatvori"
                >
                  <X className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="bg-accent/5 rounded-xl p-5 border border-accent/20">
                <p className="text-gray-300 leading-relaxed">
                  Koristimo kolačiće kako bismo osigurali najbolje iskustvo na našoj web stranici. Možete odabrati koje
                  vrste kolačića želite prihvatiti.
                </p>
              </div>

              <div className="space-y-4">
                {/* Essential Cookies */}
                <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-6 border-2 border-white/10 hover:border-accent/30 transition-all">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-5 w-5 text-accent" />
                        <h3 className="font-bold text-white text-lg">Nužni Kolačići</h3>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">
                        Ovi kolačići su potrebni za osnovne funkcije web stranice i ne mogu se isključiti.
                      </p>
                      <p className="text-xs text-gray-500">
                        Omogućuju navigaciju, pristup sigurnim područjima i osnovne funkcionalnosti stranice.
                      </p>
                    </div>
                    <div className="flex-shrink-0 bg-accent/20 text-accent px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider border border-accent/30">
                      Uvijek aktivni
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-6 border-2 border-white/10 hover:border-accent/30 transition-all">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                        <h3 className="font-bold text-white text-lg">Analitički Kolačići</h3>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">
                        Pomažu nam razumjeti kako posjetitelji koriste stranicu i poboljšati korisničko iskustvo.
                      </p>
                      <p className="text-xs text-gray-500">
                        Prikupljaju anonimizirane podatke o najposjećenijim stranicama i korisničkom ponašanju.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.analytics}
                        onChange={(e) => setCookiePreferences({ ...cookiePreferences, analytics: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-14 h-7 bg-white/10 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-accent border-2 border-white/20 peer-checked:border-accent"></div>
                    </label>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-6 border-2 border-white/10 hover:border-accent/30 transition-all">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                          />
                        </svg>
                        <h3 className="font-bold text-white text-lg">Marketinški Kolačići</h3>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">
                        Koriste se za prikaz relevantnih oglasa i personaliziranih kampanja.
                      </p>
                      <p className="text-xs text-gray-500">
                        Prate posjete različitim stranicama kako bi prikazali najprikladnije oglase i ponude.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.marketing}
                        onChange={(e) => setCookiePreferences({ ...cookiePreferences, marketing: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-14 h-7 bg-white/10 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-accent border-2 border-white/20 peer-checked:border-accent"></div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t-2 border-white/10">
                <p className="text-sm text-gray-400 mb-6">
                  Za više informacija pogledajte našu{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-accent hover:text-accent-light underline font-semibold transition-colors"
                  >
                    politiku privatnosti
                  </Link>{" "}
                  i{" "}
                  <Link
                    href="/cookie-policy"
                    className="text-accent hover:text-accent-light underline font-semibold transition-colors"
                  >
                    politiku kolačića
                  </Link>
                  .
                </p>

                <div className="flex gap-3 flex-col sm:flex-row">
                  <button
                    onClick={acceptCookies}
                    className="bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 uppercase tracking-wider text-sm flex-1 flex items-center justify-center gap-2 hover:scale-105"
                  >
                    <Check className="h-5 w-5" />
                    Prihvati sve kolačiće
                  </button>
                  <button
                    onClick={savePreferences}
                    className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all border-2 border-white/20 hover:border-accent/50 uppercase tracking-wider text-sm flex-1"
                  >
                    Spremi odabir
                  </button>
                  <button
                    onClick={declineCookies}
                    className="bg-white/5 hover:bg-white/10 text-gray-300 px-6 py-4 rounded-xl font-semibold transition-all border border-white/10 text-sm sm:hidden"
                  >
                    Odbij sve
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
