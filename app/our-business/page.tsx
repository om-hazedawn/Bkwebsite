import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"

export default function OurBusiness() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative">
        {/* Background aerial construction site image */}
        <div className="relative w-full h-[800px] md:h-[1000px]">
          <Image
            src="/our-business/aerial-construction-site.png"
            alt="Aerial view of construction site"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>
          <div className="absolute top-20 left-10 md:left-20">
            <h1 className="text-4xl md:text-5xl font-light text-white">Our Business</h1>
          </div>
        </div>

        {/* Grid overlay */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="grid grid-cols-3 grid-rows-3 h-full">
            {/* Row 1 */}
            <div className="col-span-1 row-span-1"></div>
            <Link href="/our-business/buildings" className="relative col-span-1 row-span-1 group">
              <div className="absolute inset-0 bg-[#35b3a7] bg-opacity-80 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-90">
                <h2 className="text-2xl md:text-3xl font-light text-white">Buildings</h2>
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-6 h-6 border-t-2 border-r-2 border-white transform rotate-45"></div>
              </div>
            </Link>
            <Link href="/our-business/environmental" className="relative col-span-1 row-span-1 group">
              <div className="absolute inset-0 bg-[#e63946] bg-opacity-80 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-90">
                <h2 className="text-2xl md:text-3xl font-light text-white">Environmental</h2>
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-6 h-6 border-t-2 border-r-2 border-white transform rotate-45"></div>
              </div>
            </Link>

            {/* Row 2 */}
            <Link href="/our-business/foundations" className="relative col-span-1 row-span-1 group">
              <div className="absolute inset-0 bg-gray-100 bg-opacity-80 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-90">
                <h2 className="text-2xl md:text-3xl font-light text-gray-800">Foundations</h2>
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-6 h-6 border-t-2 border-r-2 border-gray-800 transform rotate-45"></div>
              </div>
            </Link>
            <Link href="/our-business/general-civil-works" className="relative col-span-1 row-span-1 group">
              <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-20">
                <h2 className="text-2xl md:text-3xl font-light text-white">
                  General Civil
                  <br />
                  Works
                </h2>
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-6 h-6 border-t-2 border-r-2 border-white transform rotate-45"></div>
              </div>
            </Link>
            <Link href="/our-business/railway-works" className="relative col-span-1 row-span-1 group">
              <div className="absolute inset-0 bg-[#35b3a7] bg-opacity-80 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-90">
                <h2 className="text-2xl md:text-3xl font-light text-white text-center">
                  Railway &
                  <br />
                  Associated Works
                </h2>
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-6 h-6 border-t-2 border-r-2 border-white transform rotate-45"></div>
              </div>
            </Link>

            {/* Row 3 */}
            <Link href="/our-business/marine-works" className="relative col-span-1 row-span-1 group">
              <div className="absolute inset-0 bg-[#e63946] bg-opacity-80 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-90">
                <h2 className="text-2xl md:text-3xl font-light text-white">Marine Works</h2>
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-6 h-6 border-t-2 border-r-2 border-white transform rotate-45"></div>
              </div>
            </Link>
            <div className="col-span-1 row-span-1"></div>
            <Link href="/our-business/site-formation" className="relative col-span-1 row-span-1 group">
              <div className="absolute inset-0 bg-gray-600 bg-opacity-80 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-90">
                <h2 className="text-2xl md:text-3xl font-light text-white">Site Formation</h2>
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-6 h-6 border-t-2 border-r-2 border-white transform rotate-45"></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Our Expertise</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Build King has extensive experience in various types of construction projects, delivering high-quality
            results across different sectors. Our comprehensive range of services covers the entire project lifecycle,
            from planning and design to construction and completion.
          </p>
          <p className="text-gray-700 mb-6 max-w-3xl">
            With a strong focus on innovation, safety, and sustainability, we have successfully completed numerous
            projects that have contributed to the development of Hong Kong&rsquo;s infrastructure and built environment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#35b3a7] mb-2">45+</div>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#35b3a7] mb-2">500+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#35b3a7] mb-2">3,000+</div>
              <p className="text-gray-600">Employees</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#35b3a7] mb-2">7</div>
              <p className="text-gray-600">Business Sectors</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
