"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function AboutUs() {
  const [selectedSection, setSelectedSection] = useState("who-we-are");

  const renderContent = () => {
    switch (selectedSection) {
      case "who-we-are":
        return (
          <div>
            <div className="relative max-w-[1690px] w-full h-[744px] mx-auto">
              <Image
                src="/about-us/who-we-are/BK_About_Us.png"
                alt="Aerial view of construction site"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>

              {/* Overlay boxes - First Row */}
              <div className="absolute top-0 left-0 right-0 w-full">
                <div className="flex justify-center">
                  {/* First box - with shadow */}
                  <div className="w-[350px] h-[372px] pl-8 pt-8 text-white transition-colors duration-300">
                    <h3 className="text-3xl font-semibold">Our Businesses</h3>
                  </div>

                  {/* Second box - with bg-[#35b3a7] */}
                  <Link href="/our-business/buildings">
                    <div className="relative w-[350px] h-[372px] pl-8 pb-10 flex items-end justify-start bg-[#1aabaf]/80 text-white transition-colors duration-300 hover:bg-[#1aabaf]/40">
                      <h3 className="text-3xl font-semibold">Buildings</h3>
                      <div className="absolute top-4 right-5 w-8 h-8">
                        <Image
                          src="/our-business/white_co.webp"
                          alt="Corner decoration"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </Link>

                  {/* Third box - with bg-[#e63946] */}
                  <Link href="/our-business/environmental">
                    <div className="relative w-[350px] h-[372px] pl-8 pb-10 flex items-end justify-start bg-[#e63946]/80 text-white transition-colors duration-300 hover:bg-[#e63946]/40">
                      <h3 className="text-3xl font-semibold">Environmental</h3>
                      <div className="absolute top-4 right-5 w-8 h-8">
                        <Image
                          src="/our-business/white_co.webp"
                          alt="Corner decoration"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Overlay boxes - Second Row */}
              <div className="absolute top-[372px] left-0 right-0 w-full">
                <div className="flex justify-center">
                  {/* First box - with shadow */}
                  <Link href="/our-business/foundations">
                    <div className="relative w-[350px] h-[372px] pl-8 pb-10 flex items-end justify-start  bg-[#D5D4D5] text-black transition-colors duration-300 hover:bg-[#D5D4D5]/40">
                      <h3 className="text-3xl font-semibold">Foundations</h3>
                      <div className="absolute top-4 right-5 w-8 h-8">
                        <Image
                          src="/our-business/gray_co.webp"
                          alt="Corner decoration"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </Link>

                  {/* Second box - with bg-[#35b3a7] */}
                  <Link href="/our-business/civil-works">
                    <div className="relative w-[350px] h-[372px] pl-8 pb-10 flex items-end justify-start text-white transition-all duration-300 shadow-lg hover:bg-black/40 hover:shadow-none">
                      <h3 className="text-3xl font-semibold">
                        General Civil Works
                      </h3>
                      <div className="absolute top-4 right-5 w-8 h-8">
                        <Image
                          src="/our-business/white_co.webp"
                          alt="Corner decoration"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </Link>

                  {/* Third box - with bg-[#e63946] */}
                  <Link href="/our-business/railway-works">
                    <div className="relative w-[350px] h-[372px] pl-8 pb-10 flex items-end justify-start bg-[#1aabaf]/80 text-white transition-colors duration-300 hover:bg-[#1aabaf]/40">
                      <h3 className="text-3xl font-semibold">
                        Railway &<br />
                        Associated Works
                      </h3>
                      <div className="absolute top-4 right-5 w-8 h-8">
                        <Image
                          src="/our-business/white_co.webp"
                          alt="Corner decoration"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative mx-auto w-[1535px] h-[300px] group">
              <Image
                src="/about-us/who-we-are/about_us_frame.png"
                alt="About us frame"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <p className="text-white text-4xl w-[1300px] font-normal">
                  <strong>Build King</strong> has developed a unique competitive edge - a lean
                  management adopting an entrepreneurial spirit that enable
                  quick decision making and rapid responses for result oriented.
                </p>
              </div>
            </div>

            {/* Who We Are Section */}
            <div className="mt-16 max-w-[1300px] mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-[#838182]">Who We Are</h2>
              <h3 className="text-3xl mb-6 text-[#838182]">Our Mission</h3>
              <div className="text-[#838182] space-y-6">
                <p>
                  Build King focuses on becoming one of the top construction companies in Hong Kong and the preferred partner for customers, subcontractors, suppliers and joint ventures. To achieve these goals, we have developed a unique competitive edge - a lean management with an entrepreneurial style that enable quick decision making and rapid responses. Our highly motivated management team includes more than 300 professional engineers and commercial specialists and is supported by over 3000 other staff;
                </p>
                <p>
                  We offer comprehensive construction service in 3 major areas - civil engineering, buildings and environmental. With a proactive management philosophy and multidisciplinary competency, we bring broad-based skills to bear on great variety of projects in both the private and public sectors.
                </p>
                <p>
                  Our services cover full project life-cycle including: design, construction, testing and commissioning, maintenance, facility management and operation. We undertake all types of construction works with contract sums in excess of billions of Hong Kong dollars.
                </p>
              </div>
            </div>
          </div>
        );
      case "milestones":
        return (
          <div className="mx-auto">
            <h2 className="text-2xl font-bold mb-6">Milestones</h2>
            <p>Content for Milestones section will go here</p>
          </div>
        );
      case "management":
        return (
          <div className="mx-auto">
            <h2 className="text-2xl font-bold mb-6">Our Management</h2>
            <p>Content for Our Management section will go here</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen">
      <Header />
      <section className="container mx-auto py-12">
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <div
            className="cursor-pointer"
            onClick={() => setSelectedSection("who-we-are")}
          >
            <h3
              className={`text-xl  mb-3 ${
                selectedSection === "who-we-are"
                  ? "text-[#0099a7]"
                  : "text-gray-600"
              }`}
            >
              Who We Are
            </h3>
            <Image
              src="/about-us/Whoweare.png"
              alt="Who we are"
              width={350}
              height={218}
              className="object-cover"
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setSelectedSection("milestones")}
          >
            <h3
              className={`text-xl  mb-3 ${
                selectedSection === "milestones"
                  ? "text-[#0099a7]"
                  : "text-gray-600"
              }`}
            >
              Milestones
            </h3>
            <Image
              src="/about-us/milestone.jpg"
              alt="Milestone"
              width={350}
              height={218}
              className="object-cover"
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setSelectedSection("management")}
          >
            <h3
              className={`text-xl  mb-3 ${
                selectedSection === "management"
                  ? "text-[#0099a7]"
                  : "text-gray-600"
              }`}
            >
              Our Management
            </h3>
            <Image
              src="/about-us/ourmanagement.png"
              alt="Our management"
              width={350}
              height={218}
              className="object-cover"
            />
          </div>
        </div>
        <div className="container mx-auto">{renderContent()}</div>
      </section>
      <Footer />
    </main>
  );
}
