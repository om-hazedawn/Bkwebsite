"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function InvestorRelations() {
  const [selectedSection, setSelectedSection] = useState("financial-reports");

  const renderContent = () => {
    switch (selectedSection) {
      case "financial-reports":
        return (
          <div>
            <div className="relative max-w-[1831px] w-full h-[740px] mx-auto">
              <Image
                src="/investor-relations/banner/banner-invester-relations.png"
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
                  <div className="relative w-[370px] h-[370px] pl-8 pb-10 pt-8 flex items-start justify-start text-white transition-colors bg-transparent">
                    <h3 className="text-3xl font-semibold">
                      Financial Reports
                    </h3>
                  </div>

                  {/* Second box - with bg-[#35b3a7] */}

                  <div className="relative w-[370px] h-[370px]"></div>

                  {/* Third box - with bg-[#e63946] */}
                  <Link href="/our-business/environmental">
                    <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#35B3A7D6] text-white">
                      <h3 className="text-3xl font-normal">
                        We maintain{" "}
                        <strong>
                          resourceful <br />
                          capability{" "}
                        </strong>
                        to exceed clients&apos;expectations services
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
                    <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#E63946D6] text-white ">
                      <h3 className="text-3xl font-normal">
                        We are listed in <br />
                        The Hong Kong <br />
                        Stock Exchange <br />
                        <strong>(Stock code 240)</strong>
                      </h3>
                    </div>
                  </Link>

                  {/* Third box - with bg-[#e63946] */}
                  <div className="relative w-[370px] h-[370px]"></div>
                </div>
              </div>
            </div>
          </div>
        );
      case "announcements":
        return (
          <div>
            <div className="relative max-w-[1831px] w-full h-[740px] mx-auto">
              <Image
                src="/investor-relations/banner/banner-invester-relations.png"
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
                  <div className="relative w-[370px] h-[370px] pl-8 pb-10 pt-8 flex items-start justify-start text-[#838182] transition-colors bg-transparent">
                    <h3 className="text-3xl font-semibold">
                      Announcements
                      <br />
                      and Press
                      <br />
                      Releases
                    </h3>
                  </div>

                  {/* Second box - with bg-[#35b3a7] */}

                  <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#838182]/70 text-white">
                    <h3 className="text-3xl font-normal">
                      We maintain{" "}
                      <strong>
                        resourceful <br />
                        capability{" "}
                      </strong>
                      to exceed clients&apos;expectations services
                    </h3>
                  </div>

                  {/* Third box - with bg-[#e63946] */}
                  <div className="relative w-[370px] h-[370px]"></div>
                </div>
              </div>

              {/* Overlay boxes - Second Row */}
              <div className="absolute top-[372px] left-0 right-0 w-full">
                <div className="flex justify-center">
                  {/* First box - with shadow */}
                  <div className="relative w-[370px] h-[370px]"></div>

                  {/* Second box - with bg-[#35b3a7] */}
                  <div className="relative w-[370px] h-[370px]"></div>

                  {/* Third box - with bg-[#e63946] */}
                  <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#E63946D6] text-white ">
                    <h3 className="text-3xl font-normal">
                      We emphasise <strong>openness</strong> and <strong>transparency</strong>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "circulars":
        return (
          <div>
            <div className="relative max-w-[1831px] w-full h-[740px] mx-auto">
              <Image
                src="/investor-relations/banner/banner-invester-relations.png"
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
                  <div className="relative w-[370px] h-[370px] pl-8 pb-10 pt-8 flex items-start justify-start text-[#838182] transition-colors bg-transparent">
                    <h3 className="text-3xl font-semibold">
                      Circular and <br />
                      Notice
                    </h3>
                  </div>

                  {/* Second box - with bg-[#35b3a7] */}
                  <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#838182]/70 text-white ">
                    <h3 className="text-3xl font-normal">
                      We concern <br />
                      the <strong>relationship</strong> <br />
                      with the society
                    </h3>
                  </div>

                  <div className="relative w-[370px] h-[370px]"></div>
                </div>
              </div>

              {/* Overlay boxes - Second Row */}
              <div className="absolute top-[372px] left-0 right-0 w-full">
                <div className="flex justify-center">
                  {/* First box - with shadow */}
                  <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#35B3A7D6]/80 text-white ">
                    <h3 className="text-3xl font-normal">
                      To build{" "}
                      <strong>
                        better <br />
                        connectivity
                        <br />
                      </strong>
                      with public
                    </h3>
                  </div>

                  {/* Second box - with bg-[#35b3a7] */}

                  <div className="relative w-[370px] h-[370px]"></div>

                  {/* Third box - with bg-[#e63946] */}
                  <div className="relative w-[370px] h-[370px]"></div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen">
      <Header />
      <section className="container mx-auto py-12 bg-[#F1F1F1]">
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <div
            className="cursor-pointer"
            onClick={() => setSelectedSection("financial-reports")}
          >
            <h3
              className={`text-xl mb-3 ${
                selectedSection === "financial-reports"
                  ? "text-[#0099a7]"
                  : "text-gray-600"
              }`}
            >
              Financial Reports
            </h3>
            <Image
              src="/investor-relations/hero/financial-report.png"
              alt="Financial Reports"
              width={350}
              height={218}
              className="object-cover"
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setSelectedSection("announcements")}
          >
            <h3
              className={`text-xl mb-3 ${
                selectedSection === "announcements"
                  ? "text-[#0099a7]"
                  : "text-gray-600"
              }`}
            >
              Announcements and Press Releases
            </h3>
            <Image
              src="/investor-relations/hero/reports_announcement.png"
              alt="Announcement and Press Released"
              width={350}
              height={218}
              className="object-cover"
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setSelectedSection("circulars")}
          >
            <h3
              className={`text-xl mb-3 ${
                selectedSection === "circulars"
                  ? "text-[#0099a7]"
                  : "text-gray-600"
              }`}
            >
              Circular and Notice
            </h3>
            <Image
              src="/investor-relations/hero/circular-and-notice.png"
              alt="Circular and Notice"
              width={350}
              height={218}
              className="object-cover"
            />
          </div>
        </div>
        <div className="container mx-auto mb-20">{renderContent()}</div>
      </section>
      <Footer />
    </main>
  );
}
