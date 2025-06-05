"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function CommunityAndCharity() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="relative max-w-[1831px] w-full h-[740px] mx-auto">
        <Image
          src="/sustainability/banner/top1banner.jpg"
          alt="Community and Charity"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>

        {/* Main Content Section */}
        <div className="absolute top-[100px] left-0 right-0 w-full">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white/90 p-8 rounded-lg">
              <h1 className="text-4xl font-bold mb-6 text-[#0099a7]">Community and Charity</h1>
              <div className="space-y-6 text-gray-800">
                <p className="text-lg">
                  We are dedicated to making a positive impact in our communities through various 
                  charitable initiatives and community engagement programs. Our commitment extends 
                  beyond construction to building better communities.
                </p>
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#0099a7]">Our Initiatives</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Community development projects</li>
                    <li>Educational support programs</li>
                    <li>Environmental conservation efforts</li>
                    <li>Charitable donations and sponsorships</li>
                    <li>Employee volunteer programs</li>
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