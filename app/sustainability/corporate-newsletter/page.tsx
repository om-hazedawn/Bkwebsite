"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

export default function CorporateNewsletter() {
  const { language } = useLanguage()

  const [activeYear, setActiveYear] = useState("2018")
  const [activeIssue, setActiveIssue] = useState("")

  // Handle URL hash for direct linking to specific newsletters
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlHash = window.location.hash
      if (urlHash) {
        const parts = urlHash.replace("#", "").split("/")
        if (parts.length >= 2) {
          setActiveYear(parts[1])
          if (parts.length >= 3) {
            setActiveIssue(parts[2])
          }
        }
      }
    }
  }, [])

  const handleYearClick = (year: string) => {
    setActiveYear(year)
    setActiveIssue("")
    window.history.pushState(null, "", `#corporate-newsletter/${year}`)
  }

  const handleIssueClick = (issue: string) => {
    setActiveIssue(issue)
    window.history.pushState(null, "", `#corporate-newsletter/${activeYear}/${issue}`)
  }

  return (
    <main className="min-h-screen">
      <Header />

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Corporate Responsibility Tab */}
            <div className="flex flex-col items-center">
              <Link
                href="/sustainability/corporate-responsibility"
                className="text-xl font-medium text-gray-500 hover:text-[#35b3a7] mb-4"
              >
                {language === "en" ? "Corporate Responsibility" : language === "zh-cn" ? "企业责任" : "企業責任"}
              </Link>
              <div className="relative w-full h-[180px] overflow-hidden">
                <Image
                  src="/sustainability/corporate-responsibility.png"
                  alt="Corporate Responsibility"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* QHSE Tab */}
            <div className="flex flex-col items-center">
              <Link href="/sustainability/qhse" className="text-xl font-medium text-gray-500 hover:text-[#35b3a7] mb-4">
                QHSE
              </Link>
              <div className="relative w-full h-[180px] overflow-hidden">
                <Image src="/sustainability/qhse.png" alt="QHSE" fill className="object-cover" />
              </div>
            </div>

            {/* Corporate Newsletter Tab - Active */}
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-medium text-[#35b3a7] mb-4">
                {language === "en" ? "Corporate Newsletter" : language === "zh-cn" ? "企业通讯" : "企業通訊"}
              </h2>
              <div className="relative w-full h-[180px] overflow-hidden">
                <Image
                  src="/sustainability/corporate-newsletter.png"
                  alt="Corporate Newsletter"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner section with sustainability message */}
      <section className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left side - image */}
          <div className="relative h-[450px]">
            <Image
              src="/sustainability/newsletter-writing-desk.png"
              alt="Person writing at desk"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right side - red box with text */}
          <div className="bg-[#e63946] text-white p-12 flex flex-col justify-center">
            <h1 className="text-3xl font-light mb-6">
              {language === "en"
                ? "Build and operate for a brighter and greener future"
                : language === "zh-cn"
                  ? "建设和运营更光明和更环保的未来"
                  : "建設和營運更光明和更環保的未來"}
            </h1>
            <p className="text-lg">
              {language === "en"
                ? "In the past decades, we have been involved in various kinds of projects which improved the community and the quality of life. We endeavour to relate the principles of sustainable development into all aspects of our business."
                : language === "zh-cn"
                  ? "在过去的几十年中，我们参与了各种改善社区和生活质量的项目。我们努力将可持续发展原则融入我们业务的各个方面。"
                  : "在過去的幾十年中，我們參與了各種改善社區和生活質量的項目。我們努力將可持續發展原則融入我們業務的各個方面。"}
            </p>
          </div>
        </div>

        {/* Bottom section - commitment message */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left side - light gray box with text */}
          <div className="bg-gray-100 p-12 flex flex-col justify-center">
            <p className="text-gray-600 text-xl">
              {language === "en"
                ? "We are committed to operating in an"
                : language === "zh-cn"
                  ? "我们致力于以"
                  : "我們致力於以"}
            </p>
            <p className="text-gray-700 text-2xl font-semibold">
              {language === "en"
                ? "environmentally responsible manner"
                : language === "zh-cn"
                  ? "环保负责任的方式运营"
                  : "環保負責任的方式營運"}
            </p>
          </div>

          {/* Right side - image continuation */}
          <div className="relative h-[200px]">
            <Image
              src="/sustainability/newsletter-writing-desk.png"
              alt="Person writing at desk"
              fill
              className="object-cover object-bottom"
            />
          </div>
        </div>
      </section>

      {/* Newsletter archive section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Year navigation sidebar */}
            <div>
              <h2 className="text-2xl font-semibold text-[#35b3a7] mb-6">
                {language === "en" ? "Corporate Newsletter" : language === "zh-cn" ? "企业通讯" : "企業通訊"}
              </h2>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => handleYearClick("2021")}
                    className={`${
                      activeYear === "2021" ? "text-[#35b3a7] font-medium" : "text-gray-600 hover:text-[#35b3a7]"
                    }`}
                  >
                    2021
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleYearClick("2020")}
                    className={`${
                      activeYear === "2020" ? "text-[#35b3a7] font-medium" : "text-gray-600 hover:text-[#35b3a7]"
                    }`}
                  >
                    2020
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleYearClick("2019")}
                    className={`${
                      activeYear === "2019" ? "text-[#35b3a7] font-medium" : "text-gray-600 hover:text-[#35b3a7]"
                    }`}
                  >
                    2019
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleYearClick("2018")}
                    className={`${
                      activeYear === "2018" ? "text-[#35b3a7] font-medium" : "text-gray-600 hover:text-[#35b3a7]"
                    }`}
                  >
                    2018 {activeYear === "2018" && "›"}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleYearClick("2017")}
                    className={`${
                      activeYear === "2017" ? "text-[#35b3a7] font-medium" : "text-gray-600 hover:text-[#35b3a7]"
                    }`}
                  >
                    2017
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleYearClick("2016")}
                    className={`${
                      activeYear === "2016" ? "text-[#35b3a7] font-medium" : "text-gray-600 hover:text-[#35b3a7]"
                    }`}
                  >
                    2016
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleYearClick("2015")}
                    className={`${
                      activeYear === "2015" ? "text-[#35b3a7] font-medium" : "text-gray-600 hover:text-[#35b3a7]"
                    }`}
                  >
                    2015
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleYearClick("2014")}
                    className={`${
                      activeYear === "2014" ? "text-[#35b3a7] font-medium" : "text-gray-600 hover:text-[#35b3a7]"
                    }`}
                  >
                    2014
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleYearClick("2013")}
                    className={`${
                      activeYear === "2013" ? "text-[#35b3a7] font-medium" : "text-gray-600 hover:text-[#35b3a7]"
                    }`}
                  >
                    2013
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleYearClick("2012")}
                    className={`${
                      activeYear === "2012" ? "text-[#35b3a7] font-medium" : "text-gray-600 hover:text-[#35b3a7]"
                    }`}
                  >
                    2012
                  </button>
                </li>
              </ul>
            </div>

            {/* Newsletter issues */}
            <div className="md:col-span-3">
              {activeYear === "2018" && (
                <div className="space-y-6">
                  <div className="mb-8">
                    <button
                      onClick={() => handleIssueClick("2")}
                      className="text-[#35b3a7] hover:underline text-lg block mb-2"
                    >
                      DEC 2018 ISSUE
                    </button>
                    {activeIssue === "2" && (
                      <div className="mt-4">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                          <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-1/3">
                              <div className="relative h-64 w-full">
                                <Image
                                  src="/sustainability/newsletter-cover-dec-2018.png"
                                  alt="December 2018 Newsletter Cover"
                                  fill
                                  className="object-contain"
                                />
                              </div>
                            </div>
                            <div className="md:w-2/3">
                              <h3 className="text-xl font-semibold mb-4">December 2018 Newsletter</h3>
                              <p className="text-gray-700 mb-6">
                                {language === "en"
                                  ? "Our winter edition highlights the company's achievements in the second half of 2018, featuring completed projects, safety milestones, and community initiatives."
                                  : language === "zh-cn"
                                    ? "我们的冬季版重点介绍了公司2018年下半年的成就，包括已完成的项目、安全里程碑和社区倡议。"
                                    : "我們的冬季版重點介紹了公司2018年下半年的成就，包括已完成的項目、安全里程碑和社區倡議。"}
                              </p>
                              <div className="flex space-x-4">
                                <Link
                                  href="#"
                                  className="px-4 py-2 bg-[#35b3a7] text-white rounded-md hover:bg-[#2a8f86] transition-colors"
                                >
                                  {language === "en" ? "View" : language === "zh-cn" ? "查看" : "查看"}
                                </Link>
                                <Link
                                  href="#"
                                  className="px-4 py-2 border border-[#35b3a7] text-[#35b3a7] rounded-md hover:bg-[#35b3a7] hover:text-white transition-colors"
                                >
                                  {language === "en" ? "Download" : language === "zh-cn" ? "下载" : "下載"}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <button
                      onClick={() => handleIssueClick("1")}
                      className="text-[#35b3a7] hover:underline text-lg block mb-2"
                    >
                      JUN 2018 ISSUE
                    </button>
                    {activeIssue === "1" && (
                      <div className="mt-4">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                          <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-1/3">
                              <div className="relative h-64 w-full">
                                <Image
                                  src="/sustainability/newsletter-cover-jun-2018.png"
                                  alt="June 2018 Newsletter Cover"
                                  fill
                                  className="object-contain"
                                />
                              </div>
                            </div>
                            <div className="md:w-2/3">
                              <h3 className="text-xl font-semibold mb-4">June 2018 Newsletter</h3>
                              <p className="text-gray-700 mb-6">
                                {language === "en"
                                  ? "Our summer edition showcases the company's progress in the first half of 2018, featuring new project wins, employee recognition, and sustainability initiatives."
                                  : language === "zh-cn"
                                    ? "我们的夏季版展示了公司2018年上半年的进展，包括新项目中标、员工表彰和可持续发展倡议。"
                                    : "我們的夏季版展示了公司2018年上半年的進展，包括新項目中標、員工表彰和可持續發展倡議。"}
                              </p>
                              <div className="flex space-x-4">
                                <Link
                                  href="#"
                                  className="px-4 py-2 bg-[#35b3a7] text-white rounded-md hover:bg-[#2a8f86] transition-colors"
                                >
                                  {language === "en" ? "View" : language === "zh-cn" ? "查看" : "查看"}
                                </Link>
                                <Link
                                  href="#"
                                  className="px-4 py-2 border border-[#35b3a7] text-[#35b3a7] rounded-md hover:bg-[#35b3a7] hover:text-white transition-colors"
                                >
                                  {language === "en" ? "Download" : language === "zh-cn" ? "下载" : "下載"}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeYear !== "2018" && (
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-700">
                    {language === "en"
                      ? `Select an issue from ${activeYear} to view details.`
                      : language === "zh-cn"
                        ? `选择${activeYear}年的一期查看详情。`
                        : `選擇${activeYear}年的一期查看詳情。`}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
