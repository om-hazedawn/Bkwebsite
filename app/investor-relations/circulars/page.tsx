import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"

export default function Circulars() {
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

            {/* Announcements Tab */}
            <div className="flex flex-col items-center">
              <Link
                href="/investor-relations/announcements"
                className="text-xl font-medium text-gray-500 hover:text-[#35b3a7] mb-4"
              >
                Announcements and Press Releases
              </Link>
              <div className="relative w-full h-[120px] overflow-hidden">
                <Image
                  src="/investor-relations/announcements-thumb.png"
                  alt="Announcements and Press Releases"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Circulars Tab - Active */}
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-medium text-[#35b3a7] mb-4">Circulars and Notices</h2>
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

          {/* Circulars title overlay - top left */}
          <div className="col-span-2 row-span-1 relative z-10 flex items-center p-12">
            <h1 className="text-3xl md:text-4xl font-light text-gray-700">
              Circulars and
              <br />
              Notices
            </h1>
          </div>

          {/* Gray relationship overlay - top right */}
          <div className="col-span-2 row-span-1 relative z-10">
            <div className="absolute inset-0 bg-gray-700 bg-opacity-70 flex flex-col justify-center p-8">
              <p className="text-white text-lg mb-2">We concern the</p>
              <p className="text-white text-2xl font-bold">relationship</p>
              <p className="text-white text-lg">with</p>
              <p className="text-white text-lg">the society</p>
            </div>
          </div>

          {/* Teal connectivity overlay - bottom left */}
          <div className="col-span-2 row-span-1 relative z-10">
            <div className="absolute inset-0 bg-[#35b3a7] bg-opacity-80 flex flex-col justify-center p-8">
              <p className="text-white text-lg mb-1">To build</p>
              <p className="text-white text-lg font-bold">better</p>
              <p className="text-white text-2xl font-bold">connectivity</p>
              <p className="text-white text-lg">with public</p>
            </div>
          </div>

          {/* Empty cell - bottom right */}
          <div className="col-span-2 row-span-1"></div>
        </div>
      </section>

      {/* Circulars section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Year filter sidebar */}
            <div>
              <h2 className="text-2xl font-medium text-[#35b3a7] mb-6">Circulars</h2>
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
                    2013
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
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#35b3a7] hover:underline">
                    2006
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#35b3a7] hover:underline">
                    2005
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#35b3a7] hover:underline">
                    2004
                  </Link>
                </li>
              </ul>

              {/* Notices section */}
              <h2 className="text-2xl font-medium text-[#35b3a7] mt-12 mb-6">Notices</h2>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#35b3a7] hover:underline">
                    Replacement of Lost Share Certificates
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#35b3a7] hover:underline">
                    Dissemination of Corporate Communications
                  </Link>
                </li>
              </ul>
            </div>

            {/* Circulars list */}
            <div className="md:col-span-3">
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <Link href="#" className="text-[#35b3a7] hover:underline block mb-1">
                    NOTIFICATION LETTER AND REQUEST FORM TO NON-REGISTERED HOLDERS
                  </Link>
                  <p className="text-sm text-gray-500">16 April 2025 ›</p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <Link href="#" className="text-[#35b3a7] hover:underline block mb-1">
                    NOTIFICATION LETTER AND REPLY FORM TO REGISTERED SHAREHOLDERS
                  </Link>
                  <p className="text-sm text-gray-500">16 April 2025 ›</p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <Link href="#" className="text-[#35b3a7] hover:underline block mb-1">
                    FORM OF PROXY FOR USE AT THE ANNUAL GENERAL MEETING (OR AT ANY ADJOURNMENT THEREOF)
                  </Link>
                  <p className="text-sm text-gray-500">16 April 2025 ›</p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <Link href="#" className="text-[#35b3a7] hover:underline block mb-1">
                    PROPOSED RE-ELECTION OF RETIRING DIRECTORS, PROPOSED GENERAL MANDATES TO ISSUE AND REPURCHASE SHARES
                    AND NOTICE OF ANNUAL GENERAL MEETING
                  </Link>
                  <p className="text-sm text-gray-500">16 April 2025 ›</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
