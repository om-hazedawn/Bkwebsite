import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"

export default function FinancialReports() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Financial Reports Tab - Active */}
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-medium text-[#35b3a7] mb-4">Financial Reports</h2>
              <div className="relative w-full h-[180px] overflow-hidden">
                <Image
                  src="/investor-relations/financial-reports.png"
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
              <div className="relative w-full h-[180px] overflow-hidden">
                <Image
                  src="/investor-relations/announcements.png"
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
              <div className="relative w-full h-[180px] overflow-hidden">
                <Image
                  src="/investor-relations/circulars.png"
                  alt="Circulars and Notices"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Harbor view banner with overlays */}
      <section className="relative">
        <div className="w-full">
          <Image
            src="/investor-relations/harbor-view-complete.png"
            alt="Hong Kong Harbor View"
            width={1600}
            height={800}
            className="w-full"
            priority
          />
          <div className="absolute top-12 left-0 w-full text-center">
            <h1 className="text-4xl md:text-5xl font-light text-white">Financial Reports</h1>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Annual Reports</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative h-64 mb-4">
                  <Image
                    src="/investor-relations/annual-report-2023.png"
                    alt="Annual Report 2023"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Annual Report 2023</h3>
                <div className="flex space-x-4 mt-4">
                  <Link
                    href="#"
                    className="px-4 py-2 bg-[#35b3a7] text-white rounded-md hover:bg-[#2a8f86] transition-colors"
                  >
                    View
                  </Link>
                  <Link
                    href="#"
                    className="px-4 py-2 border border-[#35b3a7] text-[#35b3a7] rounded-md hover:bg-[#35b3a7] hover:text-white transition-colors"
                  >
                    Download
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative h-64 mb-4">
                  <Image
                    src="/investor-relations/annual-report-2022.png"
                    alt="Annual Report 2022"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Annual Report 2022</h3>
                <div className="flex space-x-4 mt-4">
                  <Link
                    href="#"
                    className="px-4 py-2 bg-[#35b3a7] text-white rounded-md hover:bg-[#2a8f86] transition-colors"
                  >
                    View
                  </Link>
                  <Link
                    href="#"
                    className="px-4 py-2 border border-[#35b3a7] text-[#35b3a7] rounded-md hover:bg-[#35b3a7] hover:text-white transition-colors"
                  >
                    Download
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative h-64 mb-4">
                  <Image
                    src="/investor-relations/annual-report-2021.png"
                    alt="Annual Report 2021"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Annual Report 2021</h3>
                <div className="flex space-x-4 mt-4">
                  <Link
                    href="#"
                    className="px-4 py-2 bg-[#35b3a7] text-white rounded-md hover:bg-[#2a8f86] transition-colors"
                  >
                    View
                  </Link>
                  <Link
                    href="#"
                    className="px-4 py-2 border border-[#35b3a7] text-[#35b3a7] rounded-md hover:bg-[#35b3a7] hover:text-white transition-colors"
                  >
                    Download
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6">Interim Reports</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative h-64 mb-4">
                  <Image
                    src="/investor-relations/interim-report-2023.png"
                    alt="Interim Report 2023"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Interim Report 2023</h3>
                <div className="flex space-x-4 mt-4">
                  <Link
                    href="#"
                    className="px-4 py-2 bg-[#35b3a7] text-white rounded-md hover:bg-[#2a8f86] transition-colors"
                  >
                    View
                  </Link>
                  <Link
                    href="#"
                    className="px-4 py-2 border border-[#35b3a7] text-[#35b3a7] rounded-md hover:bg-[#35b3a7] hover:text-white transition-colors"
                  >
                    Download
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative h-64 mb-4">
                  <Image
                    src="/investor-relations/interim-report-2022.png"
                    alt="Interim Report 2022"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Interim Report 2022</h3>
                <div className="flex space-x-4 mt-4">
                  <Link
                    href="#"
                    className="px-4 py-2 bg-[#35b3a7] text-white rounded-md hover:bg-[#2a8f86] transition-colors"
                  >
                    View
                  </Link>
                  <Link
                    href="#"
                    className="px-4 py-2 border border-[#35b3a7] text-[#35b3a7] rounded-md hover:bg-[#35b3a7] hover:text-white transition-colors"
                  >
                    Download
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative h-64 mb-4">
                  <Image
                    src="/investor-relations/interim-report-2021.png"
                    alt="Interim Report 2021"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Interim Report 2021</h3>
                <div className="flex space-x-4 mt-4">
                  <Link
                    href="#"
                    className="px-4 py-2 bg-[#35b3a7] text-white rounded-md hover:bg-[#2a8f86] transition-colors"
                  >
                    View
                  </Link>
                  <Link
                    href="#"
                    className="px-4 py-2 border border-[#35b3a7] text-[#35b3a7] rounded-md hover:bg-[#35b3a7] hover:text-white transition-colors"
                  >
                    Download
                  </Link>
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
