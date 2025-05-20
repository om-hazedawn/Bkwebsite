import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"

export default function CorporateResponsibility() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Corporate Responsibility Tab - Active */}
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-medium text-[#35b3a7] mb-4">Corporate Responsibility</h2>
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

      {/* Banner image with overlays */}
      <section className="relative">
        <div className="w-full">
          <Image
            src="/sustainability/corporate-responsibility-banner.png"
            alt="Corporate Responsibility Banner"
            width={1600}
            height={800}
            className="w-full"
            priority
          />
          <div className="absolute top-12 left-0 w-full text-center">
            <h1 className="text-4xl md:text-5xl font-light text-white">Corporate Responsibility</h1>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Our Corporate Responsibility</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-gray-700 mb-6">
                At Build King, we believe that corporate responsibility is integral to our business success and
                sustainability. We are committed to operating in a way that is ethical, transparent, and beneficial to
                all our stakeholders.
              </p>
              <p className="text-gray-700 mb-6">
                Our corporate responsibility framework encompasses environmental stewardship, social impact, and
                governance practices. We strive to make a positive difference in the communities where we operate and to
                minimize our environmental footprint.
              </p>
              <p className="text-gray-700">
                Through our various initiatives and programs, we aim to create long-term value for our shareholders,
                employees, customers, and the broader society.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/sustainability/community-engagement.png"
                alt="Community Engagement"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <h2 className="text-3xl font-semibold mb-8">Our Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
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
              <h3 className="text-xl font-semibold mb-4">Community Engagement</h3>
              <p className="text-gray-700">
                We actively engage with local communities through various initiatives, including education programs,
                charitable donations, and volunteer activities.
              </p>
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
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Environmental Protection</h3>
              <p className="text-gray-700">
                We implement environmentally friendly practices in our operations and projects to minimize our
                ecological footprint and preserve natural resources.
              </p>
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Health and Safety</h3>
              <p className="text-gray-700">
                We prioritize the health and safety of our employees, contractors, and the public by maintaining strict
                safety standards and continuous improvement.
              </p>
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Ethical Business</h3>
              <p className="text-gray-700">
                We conduct our business with integrity, transparency, and accountability, adhering to the highest
                ethical standards in all our operations and relationships.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-semibold mb-8">Recent Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/sustainability/tree-planting.png"
                  alt="Tree Planting Initiative"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Tree Planting Initiative</h3>
                <p className="text-gray-700 mb-4">
                  Our employees participated in a tree planting event to contribute to local reforestation efforts and
                  combat climate change.
                </p>
                <Link href="#" className="text-[#35b3a7] hover:underline font-medium">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/sustainability/education-program.png"
                  alt="Education Program"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Education Program</h3>
                <p className="text-gray-700 mb-4">
                  We launched a scholarship program to support students pursuing careers in engineering and construction
                  management.
                </p>
                <Link href="#" className="text-[#35b3a7] hover:underline font-medium">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image src="/sustainability/safety-campaign.png" alt="Safety Campaign" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Safety Campaign</h3>
                <p className="text-gray-700 mb-4">
                  Our comprehensive safety campaign aims to raise awareness and improve safety practices across all our
                  construction sites.
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
