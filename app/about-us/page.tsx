"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const timelineData = [
  {
    year: "2016",
    description: 'Unified the subsidiaries under the name of "Build King"',
    image: "/about-us/milestone/2016.jpg",
  },
  {
    year: "2014",
    description: "Awarded 5 nos of MTRC Shatin to Central Links Contracts",
    image: "/about-us/milestone/2014.jpg",
  },
  {
    year: "2011",
    description:
      "Awarded Wan Chai Development Phase II - Central Wan Chai Bypass over MTR Tsuen Wan Line",
    image: "/about-us/milestone/2010.jpg",
  },
  {
    year: "2010",
    description:
      "Achieved Group C status in all 5 categories of works in the List of Approved Contractors for Public Works",
    image: "/about-us/milestone/2010.jpg",
  },
  {
    year: "2004",
    description:
      "The Group was listed in The Stock Exchange of Hong Kong (Stock code 240)",
    image: "/about-us/milestone/2004.jpg",
  },
  {
    year: "2002",
    description: "Acquisition of Kier Hong Kong Limited",
    image: "/about-us/milestone/2002.jpg",
  },
  {
    year: "1995",
    description: "Acquisition of Leader Civil Engineering Corporation Limited",
    image: "/about-us/milestone/1995.jpg",
  },
  {
    year: "1980",
    description:
      "Formation of Wai Kee C&T as a Site Formation Works Contractors",
    image: "/about-us/milestone/1980.jpg",
  },
];

export default function AboutUs() {
  const [selectedSection, setSelectedSection] = useState("who-we-are");

  const renderContent = () => {
    switch (selectedSection) {
      case "who-we-are":
        return (
          <div>
            <div className="relative max-w-[1690px] w-full h-[740px] mx-auto">
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
                  <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-starttext-white transition-colors text-white bg-[#838182]/50">
                    <h3 className="text-3xl font-normal">
                      <strong>Undertake</strong>
                      <br />
                      all types of construction works
                    </h3>
                  </div>

                  {/* Second box - with bg-[#35b3a7] */}

                  <div className="relative w-[370px] h-[370px]"></div>

                  {/* Third box - with bg-[#e63946] */}
                  <Link href="/our-business/environmental">
                    <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#E63946D6] text-white">
                      <h3 className="text-3xl font-normal">
                        We provide
                        <br />
                        <strong>
                          full project
                          <br />
                          life-cycle
                        </strong>{" "}
                        services
                      </h3>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Overlay boxes - Second Row */}
              <div className="absolute top-[372px] left-0 right-0 w-full">
                <div className="flex justify-center">
                  {/* First box - with shadow */}
                  <div className="relative w-[370px] h-[370px]"></div>

                  {/* Second box - with bg-[#35b3a7] */}
                  <Link href="/our-business/civil-works">
                    <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start text-white bg-[#35B3A7D6]">
                      <h3 className="text-3xl font-normal">
                        We pursue
                        <br />
                        <strong>teamwork</strong>
                        <br />
                        and <strong>trust</strong>
                      </h3>
                    </div>
                  </Link>

                  {/* Third box - with bg-[#e63946] */}
                  <div className="relative w-[370px] h-[370px]"></div>
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
                  <strong>Build King</strong> has developed a unique competitive
                  edge - a lean management adopting an entrepreneurial spirit
                  that enable quick decision making and rapid responses for
                  result oriented.
                </p>
              </div>
            </div>

            {/* Who We Are Section */}
            <div className="mt-16 max-w-[1300px] mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-[#838182]">
                Who We Are
              </h2>
              <h3 className="text-3xl mb-6 text-[#838182]">Our Mission</h3>
              <div className="text-[#838182] space-y-6">
                <p>
                  Build King focuses on becoming one of the top construction
                  companies in Hong Kong and the preferred partner for
                  customers, subcontractors, suppliers and joint ventures. To
                  achieve these goals, we have developed a unique competitive
                  edge - a lean management with an entrepreneurial style that
                  enable quick decision making and rapid responses. Our highly
                  motivated management team includes more than 300 professional
                  engineers and commercial specialists and is supported by over
                  3000 other staff;
                </p>
                <p>
                  We offer comprehensive construction service in 3 major areas -
                  civil engineering, buildings and environmental. With a
                  proactive management philosophy and multidisciplinary
                  competency, we bring broad-based skills to bear on great
                  variety of projects in both the private and public sectors.
                </p>
                <p>
                  Our services cover full project life-cycle including: design,
                  construction, testing and commissioning, maintenance, facility
                  management and operation. We undertake all types of
                  construction works with contract sums in excess of billions of
                  Hong Kong dollars.
                </p>
              </div>
            </div>
          </div>
        );
      case "milestones":
        return (
          <div className="mx-auto max-w-[1200px] relative py-25">
            <div
              className="absolute w-[1px] bg-black left-1/2 -translate-x-1/2"
              style={{ top: "-8rem", bottom: "-8rem" }}
            />
            {timelineData.map((item, idx) => (
              <div key={idx} className="relative mb-60">
                <div className="flex justify-center">
                  <div className="flex justify-between items-center w-full max-w-[900px]">
                    {/* Image Side */}
                    <div
                      className={`absolute ${
                        idx % 2 === 0
                          ? "left-1/2"
                          : "left-1/2 -translate-x-[306px]"
                      }`}
                    >
                      {/* Timeline dot positioned at corner */}
                      <div
                        className={`absolute ${
                          idx % 2 === 0
                            ? "left-0 -translate-x-[10px]"
                            : "right-0 translate-x-[10px]"
                        } -top-[10px]`}
                      >
                        <div className="w-5 h-5 bg-[#D0374C] rounded-full border-2 border-white z-10" />
                      </div>

                      <Image
                        src={item.image}
                        alt={`Timeline ${item.year}`}
                        width={306}
                        height={306}
                      />
                    </div>

                    {/* Content Side */}
                    <div
                      className={`w-[400px] ${idx % 2 === 0 ? "" : "ml-auto"}`}
                    >
                      <div className="py-6 mt-12">
                        <h2 className="text-2xl font-bold text-teal-600 mb-3">
                          {item.year}
                        </h2>
                        <p className="text-gray-700 text-lg">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
        <div
          className={`container mx-auto mb-20 ${
            selectedSection === "milestones" ? "mt-48" : "mt-0"
          }`}
        >
          {renderContent()}
        </div>
      </section>
      <Footer />
    </main>
  );
}
