import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"

export default function Careers() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Sub-navigation tabs */}
      <section className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Careers Tab - Active */}
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-medium text-[#35b3a7] mb-4">Careers</h2>
              <div className="relative w-full h-[120px] overflow-hidden">
                <Image src="/contemporary-workspace.png" alt="Modern Office Space" fill className="object-cover" />
              </div>
            </div>

            {/* Job Opportunities Tab */}
            <div className="flex flex-col items-center">
              <Link
                href="/careers/job-opportunities"
                className="text-xl font-medium text-gray-500 hover:text-[#35b3a7] mb-4"
              >
                Job Opportunities
              </Link>
              <div className="relative w-full h-[120px] overflow-hidden">
                <Image src="/collaborative-agreement.png" alt="Business Handshake" fill className="object-cover" />
              </div>
            </div>

            {/* Training and Development Tab */}
            <div className="flex flex-col items-center">
              <Link
                href="/careers/training-development"
                className="text-xl font-medium text-gray-500 hover:text-[#35b3a7] mb-4"
              >
                Training and Development
              </Link>
              <div className="relative w-full h-[120px] overflow-hidden">
                <Image src="/corporate-training-session.png" alt="Training Session" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Opportunity Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-light text-gray-600 mb-8">Careers Opportunity</h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Build King Holdings Limited, one of the leading construction groups in Hong Kong. With over 45 years of
            experiences in civil engineering and building construction, we have a long and proud track record of
            applying innovative solution to the development and management of high-quality, construction projects. The
            Group has over 3,000 employees and is always recruiting new talents to contribute to our business growth.
          </p>

          <div className="my-12">
            <Image
              src="/professional-certification-badge.png"
              alt="MD_ERB Certification"
              width={300}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Alumni Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-light text-gray-600 mb-8">Build King Alumni</h2>

          <p className="text-gray-600 mb-8">
            Please click below to join our Alumni to stay connected with us about job opportunities, career events and
            news!
          </p>

          <div className="flex justify-center">
            <Link href="#" className="block">
              <Image
                src="/vibrant-alumni-sign-up.png"
                alt="Build King Alumni - Stay in touch with us"
                width={600}
                height={200}
                className="object-contain"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-light text-gray-600 mb-8">Current Openings</h2>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold mb-2">Civil Engineer</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Full-time</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Hong Kong</span>
              </div>
              <p className="text-gray-700 mb-4">
                We are seeking an experienced Civil Engineer to join our team and contribute to the planning and
                execution of infrastructure projects.
              </p>
              <Link href="/careers/civil-engineer" className="text-primary hover:underline font-medium">
                View Details
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold mb-2">Project Manager</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Full-time</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Hong Kong</span>
              </div>
              <p className="text-gray-700 mb-4">
                We are looking for a skilled Project Manager to oversee construction projects, manage resources, and
                ensure timely completion.
              </p>
              <Link href="/careers/project-manager" className="text-primary hover:underline font-medium">
                View Details
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold mb-2">Quantity Surveyor</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Full-time</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Hong Kong</span>
              </div>
              <p className="text-gray-700 mb-4">
                We are seeking a Quantity Surveyor to manage costs, prepare estimates, and handle contract
                administration for our construction projects.
              </p>
              <Link href="/careers/quantity-surveyor" className="text-primary hover:underline font-medium">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
