import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"

export default function InvestorRelations() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Sub-navigation tabs */}
      <section className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Financial Reports Tab */}
            <div className="flex flex-col items-center">
              <Link href="/investor-relations/financial-reports" className="text-xl font-medium text-[#35b3a7] mb-4">
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
          <div className="col-span-2 row-span-1 relative z-10 flex items-center p-12">
            <h1 className="text-3xl md:text-4xl font-light text-gray-700">Financial Reports</h1>
          </div>

          {/* Teal capability overlay - top right */}
          <div className="col-span-2 row-span-1 relative z-10">
            <div className="absolute inset-0 bg-[#35b3a7] bg-opacity-90 flex flex-col justify-center p-8">
              <p className="text-white text-lg mb-1">We maintain</p>
              <p className="text-white text-2xl font-bold">resourceful</p>
              <p className="text-white text-2xl font-bold">capability</p>
              <p className="text-white text-lg">to exceed clients&rsquo;</p>
              <p className="text-white text-lg">expectations</p>
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

      {/* Financial Reports section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Report categories sidebar */}
            <div>
              <h2 className="text-2xl font-medium text-[#35b3a7] mb-6">Annual Report</h2>
              <ul className="space-y-2 mb-8">
                <li>
                  <Link href="#" className="text-[#35b3a7] hover:underline font-medium">
                    2018-2024 ›
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#35b3a7] hover:underline">
                    2011-2017
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#35b3a7] hover:underline">
                    2001-2010
                  </Link>
                </li>
              </ul>

              <h2 className="text-2xl font-medium text-[#35b3a7] mb-6">Interim Report</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#35b3a7] hover:underline">
                    2019-2024
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#35b3a7] hover:underline">
                    2011-2018
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#35b3a7] hover:underline">
                    2001-2010
                  </Link>
                </li>
              </ul>
            </div>

            {/* Reports list */}
            <div className="md:col-span-3">
              <div className="space-y-4">
                <div>
                  <Link href="#" className="text-[#35b3a7] hover:underline block">
                    Annual Report 2024
                  </Link>
                </div>
                <div>
                  <Link href="#" className="text-[#35b3a7] hover:underline block">
                    Annual Report 2023
                  </Link>
                </div>
                <div>
                  <Link href="#" className="text-[#35b3a7] hover:underline block">
                    Annual Report 2022
                  </Link>
                </div>
                <div>
                  <Link href="#" className="text-[#35b3a7] hover:underline block">
                    Annual Report 2021
                  </Link>
                </div>
                <div>
                  <Link href="#" className="text-[#35b3a7] hover:underline block">
                    Annual Report 2020
                  </Link>
                </div>
                <div>
                  <Link href="#" className="text-[#35b3a7] hover:underline block">
                    Annual Report 2019
                  </Link>
                </div>
                <div>
                  <Link href="#" className="text-[#35b3a7] hover:underline block">
                    Annual Report 2018
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional investor information */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Investor Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[#35b3a7]">Financial Calendar</h3>
              <ul className="space-y-4">
                <li className="flex justify-between">
                  <span className="text-gray-600">Annual General Meeting:</span>
                  <span className="font-semibold">May 25, 2025</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Interim Results:</span>
                  <span className="font-semibold">August 15, 2025</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Final Results:</span>
                  <span className="font-semibold">March 21, 2026</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[#35b3a7]">Financial Highlights</h3>
              <ul className="space-y-4">
                <li className="flex justify-between">
                  <span className="text-gray-600">Revenue:</span>
                  <span className="font-semibold">HK$7,589 million</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Net Profit:</span>
                  <span className="font-semibold">HK$342 million</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Earnings Per Share:</span>
                  <span className="font-semibold">HK$0.28</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[#35b3a7]">Contact IR</h3>
              <p className="text-gray-700 mb-4">For investor relations inquiries, please contact:</p>
              <ul className="space-y-2 text-gray-700">
                <li>Email: ir@buildking.hk</li>
                <li>Phone: +852 1234 5678</li>
                <li>Address: 123 Construction Road, Central District, Hong Kong</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
