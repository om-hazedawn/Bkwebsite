import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"

export default function Buildings() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative">
        <div className="relative w-full h-[400px]">
          <Image
            src="/our-business/buildings-hero.png"
            alt="Buildings construction"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#35b3a7] bg-opacity-70 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-light text-white mb-4">Buildings</h1>
              <p className="text-white text-xl max-w-2xl">
                Delivering high-quality building projects with a focus on excellence and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-[#35b3a7]">Our Building Services</h2>
              <p className="text-gray-700 mb-4">
                Build King has extensive experience in constructing various types of buildings, including residential,
                commercial, institutional, and industrial facilities.
              </p>
              <p className="text-gray-700 mb-4">
                We provide comprehensive building services, from foundation work to finishing, ensuring that each
                project meets the specific requirements of our clients.
              </p>
              <p className="text-gray-700">
                Our building construction division is committed to delivering high-quality buildings that are safe,
                functional, and aesthetically pleasing.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/our-business/building-construction.png"
                alt="Building Construction"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">Featured Building Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/our-business/residential-project.png"
                  alt="Residential Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Residential Complex</h3>
                <p className="text-gray-700 mb-4">
                  Development of high-quality residential buildings with modern amenities and sustainable features.
                </p>
                <Link href="#" className="text-[#35b3a7] hover:underline font-medium">
                  View Project
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/our-business/commercial-project.png"
                  alt="Commercial Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Commercial Building</h3>
                <p className="text-gray-700 mb-4">
                  Construction of modern office buildings and retail spaces designed for functionality and efficiency.
                </p>
                <Link href="#" className="text-[#35b3a7] hover:underline font-medium">
                  View Project
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/our-business/institutional-project.png"
                  alt="Institutional Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Institutional Facility</h3>
                <p className="text-gray-700 mb-4">
                  Development of educational and healthcare facilities that serve the community&rsquo;s needs.
                </p>
                <Link href="#" className="text-[#35b3a7] hover:underline font-medium">
                  View Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <Link href="/our-business" className="flex items-center text-[#35b3a7] hover:underline font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Our Business
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
