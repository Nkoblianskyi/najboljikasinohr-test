import { casinos } from "@/lib/data"
import { HeroSection } from "@/components/hero-section"
import { CasinoCard } from "@/components/casino-card"
import { ResponsibleGaming } from "@/components/responsible-gaming"
import { SelectionCriteria } from "@/components/selection-criteria"
import { FaqSection } from "@/components/faq-section"
import { PopularBonuses } from "@/components/popular-bonuses"
import { AboutUs } from "@/components/about-us"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"
import { WelcomeModal } from "@/components/welcome-modal"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />

      <section id="casino-list" className="py-12 bg-gradient-to-b from-[#0c111a] to-[#080c14]">
        <div className="container mx-auto px-4 max-w-[1250px]">
          <div className="flex flex-col gap-6">
            {casinos.map((casino, index) => (
              <CasinoCard key={casino.id} casino={casino} rank={index + 1} />
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-400 text-sm font-light">
              * Primjenjuju se uvjeti i odredbe. Kockanje može izazvati ovisnost. 18+
            </p>
          </div>
        </div>
      </section>

      <AboutUs />
      <ResponsibleGaming />
      <SelectionCriteria />
      <PopularBonuses casinos={casinos} />
      <FaqSection />
      <Footer />
      <CookieConsent />
      <WelcomeModal />
      <ScrollToTopButton />
    </>
  )
}
