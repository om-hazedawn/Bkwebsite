"use client"

import Image from "next/image"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/contexts/language-context'
import { locales } from "@/locales"

export default function Header() {
  const { language, setLanguage } = useLanguage()
  const t = locales[language]

  const handleLanguageChange = (lang: "en" | "zh-cn" | "zh-Hant-HK") => {
    setLanguage(lang)
  }

  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
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
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
      </div>
    </header>
  )
}

