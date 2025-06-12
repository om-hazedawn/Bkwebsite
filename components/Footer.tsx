"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { locales } from "@/locales"

export default function Footer() {
  const { language } = useLanguage()
  const t = locales[language]

  return (
    <footer>
      {/* Main footer section with gray background */}
      <div className="bg-[#808184] text-gray-300 px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* About Us Column */}
            <div className="text-center">
              <ul className="space-y-4 flex flex-col items-center text-center">
                <li>
                  <Link href="/about-us" className="cursor-pointer text-gray-300 hover:text-white font-semibold max-w-[200px] inline-block">
                    {t.header.aboutUs}
                  </Link>
                </li>
                <li>
                  <Link href="/about-us?section=who-we-are" className="cursor-pointer text-gray-300 hover:text-white max-w-[200px] inline-block">
                    {language === "en" ? "Who We Are" : language === "zh-cn" ? "我们是谁" : "我們是誰"}
                  </Link>
                </li>
                <li>
                  <Link href="/about-us?section=milestones" className="cursor-pointer text-gray-300 hover:text-white max-w-[200px] inline-block">
                    {language === "en" ? "Milestones" : language === "zh-cn" ? "里程碑" : "里程碑"}
                  </Link>
                </li>
                <li>
                  <Link href="/about-us?section=management" className="cursor-pointer text-gray-300 hover:text-white max-w-[200px] inline-block">
                    {language === "en" ? "Our Management" : language === "zh-cn" ? "我们的管理团队" : "我們的管理團隊"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Our Business Column */}
            <div className="text-center">
              <ul className="space-y-4 flex flex-col items-center text-center">
                <li>
                  <Link href="/our-business" className="cursor-pointer text-gray-300 hover:text-white font-semibold max-w-[200px] inline-block">
                  { t.header.ourBusiness}
                  </Link>
                </li>
                <li>
                  <Link href="/investor-relations" className="cursor-pointer text-gray-300 hover:text-white font-semibold max-w-[200px] inline-block">
                    {t.header.investorRelations}
                  </Link>
                </li>
                <li>
                  <Link href="/financial-reports?section=financial-reports" className="cursor-pointer text-gray-300 hover:text-white max-w-[200px] inline-block">
                    {language === "en" ? "Financial Reports" : language === "zh-cn" ? "财务报告" : "財務報告"}
                  </Link>
                </li>
                <li>
                  <Link href="/investor-relations?section=announcements" className="cursor-pointer text-gray-300 hover:text-white max-w-[200px] inline-block">
                    {language === "en"
                      ? "Announcements and Press Releases"
                      : language === "zh-cn"
                        ? "公告和新闻稿"
                        : "公告和新聞稿"}
                  </Link>
                </li>
                <li>
                  <Link href="/investor-relations?section=circulars" className="cursor-pointer text-gray-300 hover:text-white max-w-[200px] inline-block">
                    {language === "en" ? "Circulars and Notices" : language === "zh-cn" ? "通函和通知" : "通函和通知"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Sustainability Column */}
            <div className="text-center">
              <ul className="space-y-4 flex flex-col items-center text-center">
                <li>
                  <Link href="/sustainability" className="cursor-pointer text-gray-300 hover:text-white font-semibold max-w-[200px] inline-block">
                    {t.header.sustainability}
                  </Link>
                </li>
                <li>
                  <Link href="/sustainability?section=corporate-responsibility" className="cursor-pointer text-gray-300 hover:text-white max-w-[200px] inline-block">
                    {language === "en" ? "Corporate Responsibility" : language === "zh-cn" ? "企业责任" : "企業責任"}
                  </Link>
                </li>
                <li>
                  <Link href="/sustainability?section=qhse" className="cursor-pointer text-gray-300 hover:text-white max-w-[200px] inline-block">
                    QHSE
                  </Link>
                </li>
                <li>
                  <Link href="/sustainability?section=corporate-newsletter" className="cursor-pointer text-gray-300 hover:text-white max-w-[200px] inline-block">
                    {language === "en" ? "Corporate Newsletter" : language === "zh-cn" ? "企业通讯" : "企業通訊"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Careers Column */}
            <div className="text-center">
              <ul className="space-y-4 flex flex-col items-center text-center">
              <li>
                  <Link href="/careers" className="cursor-pointer text-gray-300 hover:text-white font-semibold max-w-[200px] inline-block">
                    {t.header.careers}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="cursor-pointer text-gray-300 hover:text-white font-semibold max-w-[200px] inline-block">
                    {t.header.contact}
                  </Link>
                </li>
                <li>
                  <Link href="/whats-new" className="cursor-pointer text-gray-300 hover:text-white font-semibold max-w-[200px] inline-block">
                    {language === "en" ? "What's New" : language === "zh-cn" ? "最新消息" : "最新消息"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer section with lighter gray background */}
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link href="/terms" className="text-gray-600 text-sm hover:text-gray-800 cursor-pointer">
                {language === "en" ? "Terms and Conditions" : language === "zh-cn" ? "条款和条件" : "條款和條件"}
              </Link>
              <Link href="/privacy" className="text-gray-600 text-sm hover:text-gray-800 cursor-pointer">
                {language === "en" ? "Privacy Policy" : language === "zh-cn" ? "隐私政策" : "隱私政策"}
              </Link>
            </div>
            <div className="text-gray-600 text-sm">© 2016 Build King Holdings Limited</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
