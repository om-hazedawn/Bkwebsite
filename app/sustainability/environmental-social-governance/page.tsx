"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function EnvironmentalSocialGovernance() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="relative max-w-[1831px] w-full h-[740px] mx-auto">
        <Image
          src="/sustainability/banner/Qhsbanner.jpg"
          alt="Environmental Social and Governance"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>

        {/* Main Content Section */}
        <div className="absolute top-[100px] left-0 right-0 w-full">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white/90 p-8 rounded-lg">
              <h1 className="text-4xl font-bold mb-6 text-[#0099a7]">Environmental, Social and Governance</h1>
              <div className="space-y-6 text-gray-800">
                <p className="text-lg">
                  Our ESG strategy is integral to our business operations, focusing on sustainable 
                  development, social responsibility, and ethical governance. We strive to create 
                  long-term value while minimizing environmental impact.
                </p>
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#0099a7]">Key Focus Areas</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Environmental sustainability and climate action</li>
                    <li>Social responsibility and stakeholder engagement</li>
                    <li>Corporate governance and business ethics</li>
                    <li>Sustainable supply chain management</li>
                    <li>Health, safety, and well-being</li>
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