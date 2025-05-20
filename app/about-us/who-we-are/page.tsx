import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"

export default function WhoWeAre() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Who We Are Tab - Active */}
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-medium text-[#35b3a7] mb-4">Who We Are</h2>
              <div className="relative w-full h-[180px] overflow-hidden">
                <Image src="/about-us/hong-kong-skyline.png" alt="Hong Kong Skyline" fill className="object-cover" />
              </div>
            </div>

            {/* Milestones Tab */}
            <div className="flex flex-col items-center">
              <Link href="/about-us/milestones" className="text-xl font-medium text-gray-500 hover:text-[#35b3a7] mb-4">
                Milestones
              </Link>
              <div className="relative w-full h-[180px] overflow-hidden">
                <Image
                  src="/about-us/architectural-structure.png"
                  alt="Architectural Structure"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Our Management Tab */}
            <div className="flex flex-col items-center">
              <Link
                href="/about-us/our-management"
                className="text-xl font-medium text-gray-500 hover:text-[#35b3a7] mb-4"
              >
                Our Management
              </Link>
              <div className="relative w-full h-[180px] overflow-hidden">
                <Image src="/about-us/management-team.png" alt="Management Team" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Gray section */}
          <div className="bg-gray-600 text-white p-16 flex flex-col justify-center min-h-[300px]">
            <h2 className="text-3xl font-light mb-4">Undertake</h2>
            <p className="text-2xl font-light">
              all types of
              <br />
              construction works
            </p>
          </div>

          {/* Red section */}
          <div className="bg-[#e63946] text-white p-16 flex flex-col justify-center min-h-[300px]">
            <h2 className="text-3xl font-light mb-4">We provide</h2>
            <p className="text-2xl font-bold">
              full project
              <br />
              life-cycle
            </p>
            <p className="text-2xl font-light">services</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Teal section */}
          <div className="bg-[#35b3a7] text-white p-16 flex flex-col justify-center min-h-[300px]">
            <h2 className="text-3xl font-light mb-4">We are</h2>
            <p className="text-2xl font-bold">
              committed to
              <br />
              excellence
            </p>
            <p className="text-2xl font-light">in all our projects</p>
          </div>

          {/* Company description section */}
          <div className="bg-white p-16 flex flex-col justify-center min-h-[300px]">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">About Build King</h2>
            <p className="text-gray-600 mb-4">
              Build King Holdings Limited is a leading construction company in Hong Kong with over 45 years of
              experience in civil engineering and building construction.
            </p>
            <p className="text-gray-600">
              We focus on becoming one of the top construction companies in Hong Kong and the preferred partner for
              customers, subcontractors, suppliers and joint ventures.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <div className="border-2 border-[#35b3a7] rounded-md p-4 w-20 h-20 flex items-center justify-center">
                  <Image src="/icons/integrity.png" alt="Integrity" width={50} height={50} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-[#35b3a7]">Integrity</h3>
              <p className="text-gray-600 text-center">
                We fulfill our commitments with honesty and high moral standard.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <div className="border-2 border-[#35b3a7] rounded-md p-4 w-20 h-20 flex items-center justify-center">
                  <Image src="/icons/innovation.png" alt="Innovation" width={50} height={50} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-[#35b3a7]">Innovation</h3>
              <p className="text-gray-600 text-center">
                Our engineering innovation and resourcefulness have always been appreciated.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <div className="border-2 border-[#35b3a7] rounded-md p-4 w-20 h-20 flex items-center justify-center">
                  <Image src="/icons/professionalism.png" alt="Professionalism" width={50} height={50} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-[#35b3a7]">Professionalism</h3>
              <p className="text-gray-600 text-center">
                Delivering an integrated range of professional technical and commercial services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
