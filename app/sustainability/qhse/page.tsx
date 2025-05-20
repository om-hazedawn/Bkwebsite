import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"

export default function QHSE() {
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

            {/* QHSE Tab - Active */}
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-medium text-[#35b3a7] mb-4">QHSE</h2>
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
            src="/sustainability/qhse-banner.png"
            alt="QHSE Banner"
            width={1600}
            height={800}
            className="w-full"
            priority
          />
          <div className="absolute top-12 left-0 w-full text-center">
            <h1 className="text-4xl md:text-5xl font-light text-white">Quality, Health, Safety & Environment</h1>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Our QHSE Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-gray-700 mb-6">
                At Build King, we are committed to maintaining the highest standards of Quality, Health, Safety, and
                Environmental (QHSE) management in all our operations. We believe that excellence in QHSE is essential
                for the success of our business and the well-being of our employees, clients, and the communities in
                which we operate.
              </p>
              <p className="text-gray-700 mb-6">
                Our integrated QHSE management system is designed to ensure that all our projects are delivered safely,
                efficiently, and with to ensure that all our projects are delivered safely, efficiently, and with
                minimal impact on the environment. We continuously monitor and improve our QHSE performance through
                regular audits, inspections, and training programs.
              </p>
              <p className="text-gray-700">
                Our QHSE policies and procedures are aligned with international standards and best practices, including
                ISO 9001, ISO 14001, and ISO 45001. We are proud of our strong safety record and our commitment to
                protecting the health and safety of everyone involved in our projects.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/sustainability/safety-meeting.png"
                alt="Safety Meeting"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <h2 className="text-3xl font-semibold mb-8">Our QHSE Framework</h2>
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality</h3>
              <p className="text-gray-700">
                We maintain rigorous quality control processes to ensure that all our projects meet or exceed client
                expectations and industry standards.
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Health</h3>
              <p className="text-gray-700">
                We prioritize the health and wellbeing of our employees through comprehensive health programs, regular
                check-ups, and a supportive work environment.
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
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Safety</h3>
              <p className="text-gray-700">
                We implement comprehensive safety protocols and training programs to prevent accidents and ensure a safe
                working environment for all our employees and contractors.
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
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Environment</h3>
              <p className="text-gray-700">
                We are committed to minimizing our environmental impact through sustainable construction practices,
                waste reduction, and resource conservation.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-semibold mb-8">QHSE Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image src="/sustainability/safety-award.png" alt="Safety Award" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Safety Excellence Award</h3>
                <p className="text-gray-700 mb-4">
                  Build King received the Safety Excellence Award for achieving over 1 million man-hours without a
                  lost-time incident on our major infrastructure project.
                </p>
                <Link href="#" className="text-[#35b3a7] hover:underline font-medium">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/sustainability/iso-certification.png"
                  alt="ISO Certification"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">ISO Certifications</h3>
                <p className="text-gray-700 mb-4">
                  We have successfully maintained our ISO 9001, ISO 14001, and ISO 45001 certifications, demonstrating
                  our commitment to quality, environmental, and safety management.
                </p>
                <Link href="#" className="text-[#35b3a7] hover:underline font-medium">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/sustainability/environmental-initiative.png"
                  alt="Environmental Initiative"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Environmental Initiative</h3>
                <p className="text-gray-700 mb-4">
                  Our innovative waste management system has reduced construction waste by 30% across all our projects,
                  significantly lowering our environmental footprint.
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
