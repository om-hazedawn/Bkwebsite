"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function CorporateGovernance() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="relative max-w-[1831px] w-full h-[740px] mx-auto">
        <Image
          src="/sustainability/banner/Corporate_banner.jpg"
          alt="Corporate Governance"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>

        {/* Main Content Section */}
        <div className="absolute top-[100px] left-0 right-0 w-full">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white/90 p-8 rounded-lg">
              <h1 className="text-4xl font-bold mb-6 text-[#0099a7]">Corporate Governance</h1>
              <div className="space-y-6 text-gray-800">
                <p className="text-lg">
                  Our commitment to corporate governance is fundamental to our business operations. 
                  We maintain high standards of corporate governance to ensure sustainable long-term 
                  success and create value for our stakeholders.
                </p>
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#0099a7]">Our Principles</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Transparency in all business operations</li>
                    <li>Accountability to stakeholders</li>
                    <li>Regular review and enhancement of governance practices</li>
                    <li>Compliance with regulatory requirements</li>
                    <li>Ethical business conduct</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}