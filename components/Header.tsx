"use client"

import Image from "next/image"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/contexts/language-context'
import { locales } from "@/locales"
import { useState } from "react"

export default function Header() {
  const { language, setLanguage } = useLanguage()
  const t = locales[language]
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLanguageChange = (lang: "en" | "zh-cn" | "zh-Hant-HK") => {
    setLanguage(lang)
  }

  const pathname = usePathname()

  return (
    <header className="w-full relative overflow-x-hidden max-w-full z-40">
      <div className="container mx-auto px-4 py-2 max-[750px]:hidden flex justify-end">
        <div className="text-base text-gray-500 flex items-center">
          <span className="mr-3 font-medium text-lg">Language:</span>
          <div className="space-x-3 text-lg">
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
      </div>
      <div className="w-screen max-w-full relative flex min-[750px]:justify-center items-center h-14 min-[750px]:h-auto min-[750px]:gap-56 sm:container sm:mx-auto sm:px-4 sm:py-2">
        <Link href="/" className="absolute min-[750px]:static left-0 top-1/2 -translate-y-1/2 min-[750px]:translate-y-0 min-[750px]:-ml-20 pl-1">
          <Image
            src="/logo.png"
            alt="Build King Logo"
            width={200}
            height={84}
            className="w-[120px] h-auto min-[750px]:w-[200px]"
            priority
          />
        </Link>
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link
              href="/about-us"
              className={`text-xl ${pathname === '/about-us' ? 'text-[#0099A7]' : 'text-[#838182]'} hover:text-[#0099A7]`}
            >
              {t.header.aboutUs}
            </Link>
          </li>
          <li>
            <Link
              href="/our-business"
              className={`text-xl ${pathname === '/our-business' ? 'text-[#0099A7]' : 'text-[#838182]'} hover:text-[#0099A7]`}
            >
              {t.header.ourBusiness}
            </Link>
          </li>
          <li>
            <Link
              href="/investor-relations"
              className={`text-xl ${pathname === '/investor-relations' ? 'text-[#0099A7]' : 'text-[#838182]'} hover:text-[#0099A7]`}
            >
              {t.header.investorRelations}
            </Link>
          </li>
          <li>
            <Link
              href="/sustainability"
              className={`text-xl ${pathname === '/sustainability' ? 'text-[#0099A7]' : 'text-[#838182]'} hover:text-[#0099A7]`}
            >
              {t.header.sustainability}
            </Link>
          </li>
          <li>
            <Link
              href="/careers"
              className={`text-xl ${pathname === '/careers' ? 'text-[#0099A7]' : 'text-[#838182]'} hover:text-[#0099A7]`}
            >
              {t.header.careers}
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`text-xl ${pathname === '/contact' ? 'text-[#0099A7]' : 'text-[#838182]'} hover:text-[#0099A7]`}
            >
              {t.header.contact}
            </Link>
          </li>
        </ul>
          <button className="md:hidden">
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
      {isMobileMenuOpen && (
        <div className="min-[750px]:hidden fixed top-0 left-0 right-0 w-screen h-[400px] bg-black/90 shadow-lg z-50">
          <div className="relative z-50 flex flex-col h-full overflow-y-auto">
            <button
              className="absolute right-4 top-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                className="w-8 h-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          <div className="pt-20 px-4">
            <div className="text-base text-white flex items-center pb-6 border-b border-gray-100">
              <span className="mr-3 font-bold text-lg">LANGUAGE : </span>
              <div className="space-x-3 text-lg">
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
          </div>
          <nav className="flex flex-col p-4">
            <Link href="/about-us" className="py-2 text-white hover:text-primary font-bold">
              {t.header.aboutUs}
            </Link>
            <Link href="/our-business" className="py-2 text-white hover:text-primary font-bold">
              {t.header.ourBusiness}
            </Link>
            <Link href="/investor-relations" className="py-2 text-white hover:text-primary font-bold">
              {t.header.investorRelations}
            </Link>
            <Link href="/sustainability" className="py-2 text-white hover:text-primary font-bold">
              {t.header.sustainability}
            </Link>
            <Link href="/careers" className="py-2 text-white hover:text-primary font-bold">
              {t.header.careers}
            </Link>
            <Link href="/contact" className="py-2 text-white hover:text-primary font-bold">
              {t.header.contact}
            </Link>
          </nav>
          </div>
        </div>
      )}
    </header>
  )
}

