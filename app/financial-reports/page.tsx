import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"

export default function FinancialReports() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Sub-navigation tabs */}
      <section className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Financial Reports Tab - Active */}
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-medium text-[#35b3a7] mb-4">Financial Reports</h2>
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

          {/* Financial Reports title overlay - top left */}
          <div className="col-span-2 row-span-1 relative z-10 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-light text-white drop-shadow-lg">Financial Reports</h1>
          </div>

          {/* Teal capability overlay - top right */}
          <div className="col-span-2 row-span-1 relative z-10">
            <div className="absolute inset-0 bg-[#35b3a7] bg-opacity-90 flex flex-col justify-center p-8">
              <p className="text-white text-lg mb-2">We maintain</p>
              <p className="text-white text-2xl font-bold mb-2">resourceful capability</p>
              <p className="text-white text-lg">
                to exceed clients&rsquo;
                <br />
                expectations
              </p>
            </div>
          </div>

          {/* Empty cell - bottom left */}
          <div className="col-span-2 row-span-1"></div>

          {/* Red stock exchange overlay - bottom right */}
          <div className="col-span-2 row-span-1 relative z-10">
            <div className="absolute inset-0 bg-[#e63946] bg-opacity-90 flex flex-col justify-center p-8">
              <p className="text-white text-lg mb-1">We are listed in</p>
              <p className="text-white text-2xl font-bold mb-1">The Hong Kong</p>
              <p className="text-white text-2xl font-bold mb-1">Stock Exchange</p>
              <p className="text-white text-lg">(Stock code 240)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reports section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Annual Reports */}
            <div>
              <h2 className="text-2xl font-medium text-[#35b3a7] mb-6">Annual Report</h2>

              <div className="mb-8">
                <h3 className="text-lg font-medium mb-3">2018-2024</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Annual Report 2024
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Annual Report 2023
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Annual Report 2022
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Annual Report 2021
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Annual Report 2020
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Annual Report 2019
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Annual Report 2018
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium mb-3">2011-2017</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Annual Report 2017
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Annual Report 2016
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Annual Report 2015
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Annual Report 2014
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Annual Report 2013
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Annual Report 2012
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Annual Report 2011
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">2001-2010</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Annual Reports 2001-2010
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Interim Reports */}
            <div>
              <h2 className="text-2xl font-medium text-[#35b3a7] mb-6">Interim Report</h2>

              <div className="mb-8">
                <h3 className="text-lg font-medium mb-3">2019-2024</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Interim Report 2024
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Interim Report 2023
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Interim Report 2022
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Interim Report 2021
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Interim Report 2020
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Interim Report 2019
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium mb-3">2011-2018</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Interim Report 2018
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Interim Report 2017
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Interim Report 2016
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Interim Report 2015
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Interim Report 2014
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Interim Report 2013
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Interim Report 2012
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Interim Report 2011
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">2001-2010</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <Link href="#" className="hover:text-[#35b3a7] hover:underline">
                      Interim Reports 2001-2010
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Empty column for spacing - matches the reference design */}
            <div></div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
