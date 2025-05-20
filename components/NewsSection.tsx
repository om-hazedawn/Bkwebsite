"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { locales } from "@/locales"

const newsItems = [
  {
    title: "Contract No. NL/2023/13 Open Space Development in Tung Chung New Town Extension (East) – Phase 1",
    date: "03/04/2025",
  },
  {
    title: "Main Contract Works for Proposed Composite Development at No.17 A-25 Sun Chun Street, Tai Hang, Hong Kong",
    date: "06/03/2025",
  },
  {
    title: "Main Contract Works for Proposed Redevelopment at KIL No.10555 at No.7-8 Tak Hing Street, Jordan, Kowloon",
    date: "06/02/2025",
  },
];

const colorBlocks = ["bg-[#1aabaf]/80", "bg-gray-400", "bg-rose-400"];

export default function NewsSection() {
  const { language } = useLanguage()
  const t = locales[language]

  return (
    <section>
      <div className="flex flex-col md:flex-row max-w-[1440px] mx-auto">
        {/* Left Section */}
        <div className="w-full md:w-[28%] pr-0 pl-24">
          <div className="h-[168px] md:h-[264px] flex flex-col justify-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-700 mb-4">{t.news.whatsNew}</h2>
              <p className="text-gray-500 text-lg mb-4">{t.news.keepUpToDate}</p>
              <Link href="/news" className="text-[#35b3a7] font-semibold flex items-center">
                {t.news.findMoreNews} <span className="ml-1">▶</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[72%] flex flex-col md:flex-row pr-12 md:pr-16 md:ml-[215px]">
          {/* Colored Blocks */}
          <div className="flex md:flex-col w-[270px] mr-6">
            {colorBlocks.map((color, index) => (
              <div
                key={index}
                className={`${color} w-full h-[178px] md:h-[274px]`}
              />
            ))}
          </div>

          {/* News Items */}
          <div className="flex-1 pl-2">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="h-[168px] md:h-[264px] flex flex-col justify-center"
              >
                <div>
                  <p className="text-gray-500 text-lg mb-2">{item.title}</p>
                  <p className="text-gray-500 text-base mb-4">{item.date}</p>
                  <Link
                    href="#"
                    className="border border-cyan-600 text-cyan-600 px-3 py-1 text-sm hover:bg-cyan-50"
                  >
                    {t.news.readMore}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
