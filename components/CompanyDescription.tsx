import Image from "next/image"
import Link from "next/link"

export default function CompanyDescription() {
  return (
    <section className="py-12 container mx-auto px-4">
      {/* Core values section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 relative w-[180px] h-[180px]">
            <Image src="/icons/ico_1.png" alt="Professionalism" fill className="object-contain" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-[#35b3a7]">Professionalism</h3>
          <p className="text-gray-600 text-center max-w-xs">
            Delivering an integrated range of professional, technical and commercial services
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mb-4 relative w-[180px] h-[180px]">
            <Image src="/icons/ico_2.png" alt="Innovation" fill className="object-contain" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-[#35b3a7]">Innovation</h3>
          <p className="text-gray-600 text-center max-w-xs">
            Our engineering innovation and resourcefulness have always been appreciated
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mb-4 relative w-[180px] h-[180px]">
            <Image src="/icons/ico_3.png" alt="Integrity" fill className="object-contain" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-[#35b3a7]">Integrity</h3>
          <p className="text-gray-600 text-center max-w-xs">
            We fulfill our commitments with honesty and high moral standard
          </p>
        </div>
      </div>

      {/* Professional team section - Updated to match reference layout */}
      <div className="grid grid-cols-2 gap-0 mb-16">
        {/* Top row */}
        <div className="relative h-[300px]">
          <Image
            src="/building-interior-structure.png"
            alt="Building interior structure"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[300px]">
          <Image src="/office-interior.png" alt="Office interior with atrium" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#e63946] text-white p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-2">More than 300</h3>
            <h3 className="text-2xl font-bold mb-4">professional</h3>
            <p className="text-lg">
              engineers and
              <br />
              commercial specialists
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="relative h-[300px]">
          <Image src="/harbor-construction-site.png" alt="Harbor construction site" fill className="object-cover" />
        </div>
        <div className="relative h-[300px]">
          <Image src="/modern-atrium.png" alt="Modern building atrium with plants" fill className="object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 text-white p-8 flex flex-col justify-center">
            <h3 className="text-xl mb-2">About us</h3>
            <h4 className="text-2xl font-bold mb-4">History</h4>
            <p className="text-sm">
              We have over 45 years of experience in civil engineering and building construction and a proud track
              record of high-quality construction projects.
            </p>
          </div>
        </div>
      </div>

      {/* News section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
        <div className="p-8 bg-white">
          <h3 className="text-xl font-semibold mb-4">What&rsquo;s New!</h3>
          <p className="text-gray-600 mb-6">Keep up to date with our latest information.</p>
          <Link href="/news" className="text-[#35b3a7] hover:underline flex items-center">
            Find more news
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="md:col-span-3">
          <div className="grid grid-cols-1">
            <div className="bg-[#35b3a7] p-8">
              <div className="text-white">
                <p className="mb-2">
                  Contract No. NL/2023/13 Open Space Development in Tung Chung New Town Extension (East) – Phase 1
                </p>
                <p className="mb-4">03/04/2025</p>
                <Link
                  href="#"
                  className="inline-block text-[#35b3a7] bg-white px-3 py-1 text-xs hover:bg-gray-100 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>

            <div className="bg-gray-400 p-8">
              <div className="text-white">
                <p className="mb-2">
                  Main Contract Works for Proposed Composite Development at No.17 & 25 Sun Chun Street, Tai Hang, Hong
                  Kong
                </p>
                <p className="mb-4">06/03/2025</p>
                <Link
                  href="#"
                  className="inline-block text-gray-500 bg-white px-3 py-1 text-xs hover:bg-gray-100 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>

            <div className="bg-[#e63946] p-8">
              <div className="text-white">
                <p className="mb-2">
                  Main Contract Works for Proposed Redevelopment at KIL No.10555 at No.8 Tai Hing Street, Jordan,
                  Kowloon
                </p>
                <p className="mb-4">06/02/2025</p>
                <Link
                  href="#"
                  className="inline-block text-[#e63946] bg-white px-3 py-1 text-xs hover:bg-gray-100 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
