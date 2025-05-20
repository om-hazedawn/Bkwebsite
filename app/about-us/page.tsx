import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function AboutUs() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-12 bg-light-gray">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Build King has been a leading construction company in Hong Kong for many years, focusing on delivering
                high-quality construction services to our clients.
              </p>
              <p className="text-gray-700 mb-4">
                We have established ourselves as a trusted partner for customers, subcontractors, suppliers, and joint
                ventures through our commitment to integrity, innovation, and professionalism.
              </p>
              <p className="text-gray-700">
                Our extensive portfolio includes major infrastructure projects, buildings, and civil engineering works
                that have contributed to the development of Hong Kong.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/modern-construction-hq.png"
                alt="Build King Headquarters"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary">Integrity</h3>
              <p className="text-gray-700">
                We conduct our business with honesty, transparency, and ethical standards. Our commitment to integrity
                builds trust with all our stakeholders.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary">Innovation</h3>
              <p className="text-gray-700">
                We continuously seek innovative solutions and technologies to improve our construction processes and
                deliver better results for our clients.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary">Professionalism</h3>
              <p className="text-gray-700">
                Our team consists of highly skilled professionals who are dedicated to excellence in every aspect of our
                work, from planning to execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
