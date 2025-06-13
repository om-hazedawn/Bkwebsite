"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import { locales } from "@/locales"
import { useState } from "react"

export default function Header() {
  const { language, setLanguage } = useLanguage()
  const t = locales[language]
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLanguageChange = (lang: "en" | "zh-cn" | "zh-Hant-HK") => {
    setLanguage(lang)
  }

  return (
    <header className="w-full relative overflow-x-hidden max-w-full">
      <div className="container mx-auto px-4 py-2 max-[750px]:hidden flex justify-end">
        <div className="text-base text-gray-500 flex items-center">
          <span className="mr-4 font-medium text-lg hidden sm:inline">Language:</span>
          <div className="flex items-center space-x-4 text-lg">
            <button
              onClick={() => handleLanguageChange("en")}
              className={`${language === "en" ? "text-primary" : "hover:text-gray-700"} transition-colors`}
            >
              Eng
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => handleLanguageChange("zh-cn")}
              className={`${language === "zh-cn" ? "text-primary" : "hover:text-gray-700"} transition-colors`}
            >
              简
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => handleLanguageChange("zh-Hant-HK")}
              className={`${language === "zh-Hant-HK" ? "text-primary" : "hover:text-gray-700"} transition-colors`}
            >
              繁
            </button>
          </div>
        </div>
      </div>
      <div className="w-full relative flex min-[750px]:justify-between items-center h-14 min-[750px]:h-auto sm:container sm:mx-auto sm:px-4 sm:py-2">
        <Link href="/" className="absolute min-[750px]:static left-0 top-1/2 -translate-y-1/2 min-[750px]:translate-y-0 pl-4 min-[750px]:pl-0">
          <Image
            src="/logo.png"
            alt="Build King Logo"
            width={200}
            height={84}
            className="w-[120px] h-auto min-[750px]:w-[180px] xl:w-[200px] transition-all duration-300"
            priority
          />
        </Link>
        <nav className="hidden min-[750px]:flex items-center justify-center flex-1 space-x-4 lg:space-x-8">
          <Link
            href="/about-us"
            className={`nav-link text-xl transition-colors ${pathname === '/about-us' ? 'text-primary' : 'text-gray-400'}`}
          >
            {t.header.aboutUs}
          </Link>
          <Link
            href="/our-business"
            className={`nav-link text-xl transition-colors ${pathname === '/our-business' ? 'text-primary' : 'text-gray-400'}`}
          >
            {t.header.ourBusiness}
          </Link>
          <Link
            href="/investor-relations"
            className={`nav-link text-xl transition-colors ${pathname === '/investor-relations' ? 'text-primary' : 'text-gray-400'}`}
          >
            {t.header.investorRelations}
          </Link>
          <Link
            href="/sustainability"
            className={`nav-link text-xl transition-colors ${pathname === '/sustainability' ? 'text-primary' : 'text-gray-400'}`}
          >
            {t.header.sustainability}
          </Link>
          <Link
            href="/careers"
            className={`nav-link text-xl transition-colors ${pathname === '/careers' ? 'text-primary' : 'text-gray-400'}`}
          >
            {t.header.careers}
          </Link>
          <Link
            href="/contact"
            className={`nav-link text-xl transition-colors ${pathname === '/contact' ? 'text-primary' : 'text-gray-400'}`}
          >
            {t.header.contact}
          </Link>
        </nav>
        <button className="min-[750px]:hidden absolute right-0 top-1/2 -translate-y-1/2 pr-1" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className="min-[750px]:hidden">
        <div className={`fixed inset-0 bg-black/90 z-50 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`} />
        <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="relative flex flex-col h-full bg-black/90">
            <div className="sticky top-0 flex items-center justify-between px-4 py-3 border-b border-gray-100/20 bg-black/90">
              <div className="flex items-center">
                <span className="font-bold text-lg text-white mr-4">LANGUAGE</span>
                <div className="flex items-center space-x-4 text-lg text-white">
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className={`${language === "en" ? "text-primary" : ""} hover:text-primary transition-colors`}
                  >
                    Eng
                  </button>
                  <span className="text-gray-300">|</span>
                  <button
                    onClick={() => handleLanguageChange("zh-cn")}
                    className={`${language === "zh-cn" ? "text-primary" : ""} hover:text-primary transition-colors`}
                  >
                    简
                  </button>
                  <span className="text-gray-300">|</span>
                  <button
                    onClick={() => handleLanguageChange("zh-Hant-HK")}
                    className={`${language === "zh-Hant-HK" ? "text-primary" : ""} hover:text-primary transition-colors`}
                  >
                    繁
                  </button>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col px-4">
              <Link
                href="/about-us"
                className={`pt-2 font-bold transition-colors ${pathname === '/about-us' ? 'text-primary' : 'text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.header.aboutUs}
              </Link>
              <Link
                href="/our-business"
                className={`pt-2 font-bold transition-colors ${pathname === '/our-business' ? 'text-primary' : 'text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.header.ourBusiness}
              </Link>
              <Link
                href="/investor-relations"
                className={`pt-2 font-bold transition-colors ${pathname === '/investor-relations' ? 'text-primary' : 'text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.header.investorRelations}
              </Link>
              <Link
                href="/sustainability"
                className={`pt-2 font-bold transition-colors ${pathname === '/sustainability' ? 'text-primary' : 'text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.header.sustainability}
              </Link>
              <Link
                href="/careers"
                className={`pt-2 font-bold transition-colors ${pathname === '/careers' ? 'text-primary' : 'text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.header.careers}
              </Link>
              <Link
                href="/contact"
                className={`pt-2 font-bold transition-colors ${pathname === '/contact' ? 'text-primary' : 'text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.header.contact}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
