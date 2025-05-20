import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"

export default function Announcements() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Sub-navigation tabs */}
      <section className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Financial Reports Tab */}
            <div className="flex flex-col items-center">
              <Link href="/financial-reports" className="text-xl font-medium text-gray-500 hover:text-[#35b3a7] mb-4">
                Financial Reports
              </Link>
              <div className="relative w-full h-[120px] overflow-hidden">
                <Image
                  src="/investor-relations/financial-reports-thumb.png"
                  alt="Financial Reports"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Announcements Tab - Active */}
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-medium text-[#35b3a7] mb-4">Announcements and Press Releases</h2>
              <div className="relative w-full h-[120px] overflow-hidden">
                <Image
                  src="/investor-relations/announcements-thumb.png"
                  alt="Announcements and Press Releases"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Circulars Tab */}
            <div className="flex flex-col items-center">
              <Link
                href="/investor-relations/circulars"
                className="text-xl font-medium text-gray-500 hover:text-[#35b3a7] mb-4"
              >
                Circulars and Notices
              </Link>
              <div className="relative w-full h-[120px] overflow-hidden">
                <Image
                  src="/investor-relations/circulars-thumb.png"
                  alt="Circulars and Notices"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner section with overlays */}
      <section className="relative">
        <div className="grid grid-cols-4 grid-rows-2 h-[400px]">
          {/* Background harbor image spans all cells */}
          <div className="col-span-4 row-span-2 relative">
            <Image
              src="/investor-relations/harbor-view-banner.png"
              alt="Hong Kong Harbor View"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Announcements title overlay - top left */}
          <div className="col-span-2 row-span-1 relative z-10 flex items-center p-12">
            <h1 className="text-3xl md:text-4xl font-light text-gray-700">
              Announcements
              <br />
              and Press
              <br />
              Releases
            </h1>
          </div>

          {/* Gray social responsibility overlay - top right */}
          <div className="col-span-2 row-span-1 relative z-10">
            <div className="absolute inset-0 bg-gray-700 bg-opacity-70 flex flex-col justify-center p-8">
              <p className="text-white text-lg mb-2">We continue to</p>
              <p className="text-white text-lg mb-1">develop</p>
              <p className="text-white text-2xl font-bold">social</p>
              <p className="text-white text-2xl font-bold">responsibility</p>
            </div>
          </div>

          {/* Empty cell - bottom left */}
          <div className="col-span-2 row-span-1"></div>

          {/* Red transparency overlay - bottom right */}
          <div className="col-span-2 row-span-1 relative z-10">
            <div className="absolute inset-0 bg-[#e63946] bg-opacity-90 flex flex-col justify-center p-8">
              <p className="text-white text-lg mb-1">We emphasise</p>
              <p className="text-white text-2xl font-bold mb-1">openness</p>
              <p className="text-white text-lg">and</p>
              <p className="text-white text-2xl font-bold">transparency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Year filter sidebar */}
            <div>
              <h2 className="text-2xl font-medium text-[#35b3a7] mb-6">Announcement</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-[#35b3a7] hover:underline font-medium">
                    2025 ›
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#35b3a7] hover:underline">
                    2024
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#35b3a7] hover:underline">
                    2023
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#35b3a7] hover:underline">
                    2022
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#35b3a7] hover:underline">
                    2021
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#35b3a7] hover:underline">
                    2020
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#35b3a7] hover:underline">
                    2019
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#35b3a7] hover:underline">
                    2018
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#35b3a7] hover:underline">
                    2017
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#35b3a7] hover:underline">
                    2016
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#35b3a7] hover:underline">
                    2015
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#35b3a7] hover:underline">
                    2014
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#35b3a7] hover:underline">
                    2012
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#35b3a7] hover:underline">
                    2011
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#35b3a7] hover:underline">
                    2010
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#35b3a7] hover:underline">
                    2009
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#35b3a7] hover:underline">
                    2008
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#35b3a7] hover:underline">
                    2007
                  </Link>
                </li>
              </ul>
            </div>

            {/* Announcements list */}
            <div className="md:col-span-3">
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <Link href="#" className="text-[#35b3a7] hover:underline block mb-1">
                    NOTICE OF ANNUAL GENERAL MEETING
                  </Link>
                  <p className="text-sm text-gray-500">16 April 2025 ›</p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <Link href="#" className="text-[#35b3a7] hover:underline block mb-1">
                    Monthly Return of Equity Issuer on Movements in Securities for the month ended 31 March 2025
                  </Link>
                  <p className="text-sm text-gray-500">01 April 2025 ›</p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <Link href="#" className="text-[#35b3a7] hover:underline block mb-1">
                    SPECIAL DIVIDEND FOR THE YEAR ENDED 31 DECEMBER 2024
                  </Link>
                  <p className="text-sm text-gray-500">21 March 2025 ›</p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <Link href="#" className="text-[#35b3a7] hover:underline block mb-1">
                    FINAL DIVIDEND FOR THE YEAR ENDED 31 DECEMBER 2024
                  </Link>
                  <p className="text-sm text-gray-500">21 March 2025 ›</p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <Link href="#" className="text-[#35b3a7] hover:underline block mb-1">
                    ANNOUNCEMENT OF FINAL RESULTS FOR THE YEAR ENDED 31 DECEMBER 2024
                  </Link>
                  <p className="text-sm text-gray-500">21 March 2025 ›</p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <Link href="#" className="text-[#35b3a7] hover:underline block mb-1">
                    DATE OF BOARD MEETING
                  </Link>
                  <p className="text-sm text-gray-500">07 March 2025 ›</p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <Link href="#" className="text-[#35b3a7] hover:underline block mb-1">
                    Monthly Return of Equity Issuer on Movements in Securities for the month ended 28 February 2025
                  </Link>
                  <p className="text-sm text-gray-500">03 March 2025 ›</p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <Link href="#" className="text-[#35b3a7] hover:underline block mb-1">
                    SUPPLEMENTAL ANNOUNCEMENT - CHANGE OF EXECUTIVE DIRECTOR, COMPANY SECRETARY AND AUTHORISED
                    REPRESENTATIVE
                  </Link>
                  <p className="text-sm text-gray-500">17 February 2025 ›</p>
                </div>
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="inline-flex">
                  <Link
                    href="#"
                    className="px-3 py-1 border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
                    aria-label="Previous"
                  >
                    ‹
                  </Link>
                  <Link
                    href="#"
                    className="px-3 py-1 border border-gray-300 bg-white text-[#35b3a7] font-medium"
                    aria-current="page"
                  >
                    1
                  </Link>
                  <Link href="#" className="px-3 py-1 border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                    2
                  </Link>
                  <Link href="#" className="px-3 py-1 border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                    3
                  </Link>
                  <Link
                    href="#"
                    className="px-3 py-1 border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
                    aria-label="Next"
                  >
                    ›
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
