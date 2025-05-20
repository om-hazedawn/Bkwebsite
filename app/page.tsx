"use client"

import Header from "@/components/Header"
import HomeHero from "@/components/HomeHero"
import BuildingSection from "@/components/BuildingSection"
import CoreValues from "@/components/CoreValues"
import CompanyHighlights from "@/components/CompanyHighlights"
import NewsSection from "@/components/NewsSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HomeHero />
      <BuildingSection />
      <CoreValues />
      <CompanyHighlights />
      <NewsSection />
      <Footer />
    </main>
  )
}
