"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { locales } from "@/locales"

export default function Header() {
  const { language, setLanguage } = useLanguage()
  const t = locales[language]

  const handleLanguageChange = (lang: "en" | "zh-cn" | "zh-Hant-HK") => {
    setLanguage(lang)
  }

  return (
    <header className="w-full">
      <div className="container mx-auto px-4 py-2 flex justify-end">
        <div className="text-sm space-x-2 text-gray-500">
          <button
            onClick={() => handleLanguageChange("en")}
            className={`${language === "en" ? "text-primary" : ""}`}
          >
            Eng
          </button>
          <span className="text-gray-300">|</span>
          <button
            onClick={() => handleLanguageChange("zh-cn")}
            className={`${language === "zh-cn" ? "text-primary" : ""}`}
          >
            简
          </button>
          <span className="text-gray-300">|</span>
          <button
            onClick={() => handleLanguageChange("zh-Hant-HK")}
            className={`${language === "zh-Hant-HK" ? "text-primary" : ""}`}
          >
            繁
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 py-2 flex justify-center items-center gap-56">
        <Link href="/" className="flex-shrink-0 -ml-20">
          <Image src="/logo.png" alt="Build King Logo" width={200} height={84} priority />
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/about-us" className="nav-link text-xl text-gray-400">
            {t.header.aboutUs}
          </Link>
          <Link href="/our-business" className="nav-link text-xl text-gray-400">
            {t.header.ourBusiness}
          </Link>
          <Link href="/investor-relations" className="nav-link text-xl text-gray-400">
            {t.header.investorRelations}
          </Link>
          <Link href="/sustainability" className="nav-link text-xl text-gray-400">
            {t.header.sustainability}
          </Link>
          <Link href="/careers" className="nav-link text-xl text-gray-400">
            {t.header.careers}
          </Link>
          <Link href="/contact" className="nav-link text-xl text-gray-400">
            {t.header.contact}
          </Link>
        </nav>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
      </div>
    </header>
  )
}
