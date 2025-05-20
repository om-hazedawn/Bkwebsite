import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Main contact section with full-width customer service image */}
      <section className="relative">
        <div className="relative w-full h-[400px]">
          <Image
            src="/contact/customer-service-rep.png"
            alt="Customer service representative"
            fill
            className="object-cover object-center"
          />

          {/* Red welcome box */}
          <div className="absolute top-8 right-8 bg-[#e63946] text-white p-6 w-[200px]">
            <p className="text-sm">Welcome to</p>
            <p className="font-bold">Build King</p>
            <p>support</p>
          </div>
        </div>
      </section>

      {/* Contact information section */}
      <section className="py-8 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hong Kong offices */}
          <div>
            <h2 className="text-[#35b3a7] text-xl font-medium mb-4">Hong Kong</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="font-medium">Build King Holdings Limited</span>
                <span className="ml-1">»</span>
              </li>
              <li>Build King Civil Engineering Limited</li>
              <li>Build King Construction Limited</li>
              <li>Build King Interior & Construction Limited</li>
              <li>Build King Management Limited</li>
              <li>Build King (ZENS) Engineering Limited</li>
              <li>Integral E&M Engineering Limited</li>
              <li>Integral E&M Contracting Limited</li>
              <li>Leader Marine Contractors Limited</li>
              <li>Titan Foundation Limited</li>
            </ul>
          </div>

          {/* Company logo and address */}
          <div className="flex flex-col">
            <div className="mb-6">
              <Image src="/logo.png" alt="Build King Logo" width={150} height={45} />
            </div>
            <h3 className="font-medium mb-2">Build King Holdings Limited</h3>
            <p className="text-gray-600 mb-1">6/F., Tower B, Manulife Financial Centre, 223 Wai Yip</p>
            <p className="text-gray-600 mb-4">Street, Kwun Tong, Kowloon, Hong Kong</p>

            <p className="text-gray-600 mb-1">Email: info@buildking.hk</p>
            <p className="text-gray-600 mb-1">Tel: (852) - 2272 3680</p>
            <p className="text-gray-600">Fax: (852) - 2375 3655</p>
          </div>
        </div>

        {/* Overseas offices */}
        <div className="mt-8">
          <h2 className="text-[#35b3a7] text-xl font-medium mb-4">Overseas</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Leader Marine Cont. LLC (U.A.E.)</li>
            <li>Wai Kee China Construction Co., Ltd. (Shanghai Office)</li>
            <li>Wuxi Qianhui Sewage Treatment Co., Ltd.</li>
          </ul>
        </div>
      </section>

      {/* Contact form section */}
      <section className="py-12 bg-[#00a0a0]">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#00a0a0]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-white text-center text-2xl mb-8">E-mail Us</h2>

          <div className="max-w-xl mx-auto">
            <form className="space-y-4">
              <div className="grid grid-cols-[100px_1fr] items-center">
                <label htmlFor="name" className="text-white">
                  Name
                </label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300" required />
              </div>

              <div className="grid grid-cols-[100px_1fr] items-center">
                <label htmlFor="phone" className="text-white">
                  Phone
                </label>
                <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 border border-gray-300" />
              </div>

              <div className="grid grid-cols-[100px_1fr] items-center">
                <label htmlFor="company" className="text-white">
                  Company
                </label>
                <select id="company" name="company" className="w-full px-3 py-2 border border-gray-300">
                  <option>Build King Holdings Limited</option>
                  <option>Build King Civil Engineering Limited</option>
                  <option>Build King Construction Limited</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="grid grid-cols-[100px_1fr] items-center">
                <label htmlFor="email" className="text-white">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300"
                  required
                />
              </div>

              <div className="grid grid-cols-[100px_1fr] items-start">
                <label htmlFor="message" className="text-white pt-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300"
                  required
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button type="submit" className="bg-white text-[#00a0a0] px-6 py-1 text-sm">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
