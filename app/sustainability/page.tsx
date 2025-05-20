import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"

export default function Sustainability() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Corporate Responsibility Tab */}
            <div className="flex flex-col items-center">
              <Link href="/sustainability/corporate-responsibility" className="text-xl font-medium text-[#35b3a7] mb-4">
                Corporate Responsibility
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

            {/* Corporate Newsletter Tab */}
            <div className="flex flex-col items-center">
              <Link
                href="/sustainability/corporate-newsletter"
                className="text-xl font-medium text-gray-500 hover:text-[#35b3a7] mb-4"
              >
                Corporate Newsletter
              </Link>
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

      {/* Quadrant layout with colored overlays */}
      <section className="relative">
        <div className="w-full">
          <div className="grid grid-cols-2 grid-rows-2">
            {/* Modern building background image that spans all quadrants */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/sustainability/modern-building.png"
                alt="Modern Building Architecture"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Corporate Governance - Dark blue overlay */}
            <div className="relative h-[300px] md:h-[400px] border border-white z-10">
              <div className="absolute inset-0 bg-[#2d3e50] bg-opacity-80 flex items-center p-8">
                <h2 className="text-2xl md:text-3xl font-light text-white">
                  Corporate
                  <br />
                  Governance
                </h2>
              </div>
              <Link href="/sustainability/corporate-governance" className="absolute inset-0 z-20">
                <span className="sr-only">Corporate Governance</span>
              </Link>
              {/* Top-right corner triangle */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-white border-r-transparent z-30"></div>
            </div>

            {/* Community and Charity - Teal overlay */}
            <div className="relative h-[300px] md:h-[400px] border border-white z-10">
              <div className="absolute inset-0 bg-[#35b3a7] bg-opacity-80 flex items-center p-8">
                <h2 className="text-2xl md:text-3xl font-light text-white">
                  Community and
                  <br />
                  Charity
                </h2>
              </div>
              <Link href="/sustainability/community-charity" className="absolute inset-0 z-20">
                <span className="sr-only">Community and Charity</span>
              </Link>
              {/* Top-right corner triangle */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-white border-r-transparent z-30"></div>
            </div>

            {/* Environmental, Social and Governance - Red overlay */}
            <div className="relative h-[300px] md:h-[400px] border border-white z-10">
              <div className="absolute inset-0 bg-[#e63946] bg-opacity-80 flex items-center p-8">
                <h2 className="text-2xl md:text-3xl font-light text-white">
                  Environmental,
                  <br />
                  Social and
                  <br />
                  Governance
                </h2>
              </div>
              <Link href="/sustainability/esg" className="absolute inset-0 z-20">
                <span className="sr-only">Environmental, Social and Governance</span>
              </Link>
              {/* Top-right corner triangle */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-white border-r-transparent z-30"></div>
            </div>

            {/* Empty quadrant - Just the building image */}
            <div className="relative h-[300px] md:h-[400px] border border-white z-10">
              {/* This quadrant is intentionally left without overlay to show the building image */}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Our Approach to Sustainability</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-gray-700 mb-6">
                At Build King, we are committed to sustainable development and responsible business practices that
                minimize our environmental impact and contribute positively to society.
              </p>
              <p className="text-gray-700 mb-6">
                We integrate sustainability into every aspect of our operations, from project planning and design to
                construction and completion. Our sustainability strategy focuses on three key areas: environmental
                protection, social responsibility, and economic sustainability.
              </p>
              <p className="text-gray-700">
                We continuously seek innovative solutions to reduce our carbon footprint, conserve resources, and
                promote sustainable construction practices.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/sustainability/green-building.png"
                alt="Green Building Project"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <h2 className="text-3xl font-semibold mb-8">Our Sustainability Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-[#35b3a7] mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Environmental Protection</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Reducing carbon emissions</li>
                <li>• Waste management and recycling</li>
                <li>• Energy-efficient construction methods</li>
                <li>• Water conservation measures</li>
                <li>• Use of sustainable materials</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-[#35b3a7] mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Social Responsibility</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Community engagement programs</li>
                <li>• Occupational health and safety</li>
                <li>• Employee development and well-being</li>
                <li>• Diversity and inclusion initiatives</li>
                <li>• Charitable contributions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-[#35b3a7] mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Economic Sustainability</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Ethical business practices</li>
                <li>• Responsible supply chain management</li>
                <li>• Innovation and technology adoption</li>
                <li>• Long-term value creation</li>
                <li>• Transparent reporting</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-semibold mb-8">Sustainable Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/sustainability/green-building-project.png"
                  alt="Green Building Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Green Building Certification</h3>
                <p className="text-gray-700 mb-4">
                  We have successfully completed multiple projects that have achieved green building certifications,
                  demonstrating our commitment to sustainable construction.
                </p>
                <Link href="#" className="text-[#35b3a7] hover:underline font-medium">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/sustainability/eco-infrastructure.png"
                  alt="Eco-friendly Infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Eco-friendly Infrastructure</h3>
                <p className="text-gray-700 mb-4">
                  Our infrastructure projects incorporate sustainable design principles and construction methods to
                  minimize environmental impact.
                </p>
                <Link href="#" className="text-[#35b3a7] hover:underline font-medium">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
