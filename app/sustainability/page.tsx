"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

import { useState } from "react";

export default function Sustainability() {
  const [selectedSection, setSelectedSection] = useState(
    "corporate-responsibility"
  );

  const renderContent = () => {
    switch (selectedSection) {
      case "corporate-responsibility":
        return (
          <div>
            <section className="relative">
              {/* Background aerial construction site image */}
              <div className="relative max-w-[1690px] w-full h-[740px] mx-auto">
                <Image
                  src="/sustainability/banner/top1banner.jpg"
                  alt="Aerial view of construction site"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>

                {/* Overlay boxes - First Row */}
                <div className="absolute top-0 left-0 right-0 w-full">
                  <div className="flex justify-center gap-0">
                    {/* First box - with shadow */}
                    <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-black/80 text-white transition-colors duration-300 hover:bg-black/40">
                      <h3 className="text-3xl font-semibold">
                        Corporate Governance
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

                    {/* Second box - with bg-[#35b3a7] */}
                    <div className="relative w-[370px] h-[370px] bg-transparent"></div>

                    {/* Third box */}
                    <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#1aabaf]/80 text-white transition-colors duration-300 hover:bg-[#1aabaf]/40">
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
                  </div>
                </div>

                {/* Overlay boxes - Second Row */}
                <div className="absolute top-[370px] left-0 right-0 w-full">
                  <div className="flex justify-center gap-0">
                    {/* First box - with shadow */}
                    <div className="relative w-[370px] h-[370px] bg-transparent"></div>

                    {/* Second box */}
                    <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#e63946]/80 text-white transition-colors duration-300 hover:bg-[#e63946]/40">
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

                    {/* Third box - with bg-[#e63946] */}
                    <div className="relative w-[370px] h-[370px] bg-transparent"></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      case "qhse":
        return (
          <div>
            <div className="relative max-w-[1831px] w-full h-[740px] mx-auto">
              <Image
                src="/sustainability/banner/Qhsbanner.jpg"
                alt="Sustainability View"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>

              {/* Overlay boxes - First Row */}
              <div className="absolute top-0 left-0 right-0 w-full">
                <div className="flex justify-center gap-0">
                  <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex flex-col justify-end bg-[#e63946]/80 text-white">
                    <h3 className="text-3xl font-semibold">WE CARE</h3>
                    <p className="text-lg mt-4 font-light">
                      about our people, our <br />
                      stakeholders, and the world
                      <br />
                      around us.
                    </p>
                  </div>
                  <div className="relative w-[370px] h-[370px]"></div>
                  <div className="relative w-[370px] h-[370px]"></div>
                </div>
              </div>
              {/* Overlay boxes - Second Row */}
              <div className="absolute top-[370px] left-0 right-0 w-full">
                <div className="flex justify-end gap-0">
                  <div className="relative w-[370px] h-[370px] bg-transparent"></div>
                  <div className="w-[945px] h-[370px] bg-black/40 text-white flex flex-col items-start justify-center px-16 space-y-6">
                    <h3 className="text-3xl font-semibold">WE COMMIT</h3>
                    <p className="text-2xl font-light leading-relaxed text-center max-w-4xl">
                      to be leading contractor in quality, sharing the worldwide
                      concern towards preserving and improving the environment
                      and providing healthy and safe working environment of the
                      highest practical standard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "corporate-newsletter":
        return (
          <div>
            <div className="relative max-w-[1831px] w-full h-[740px] mx-auto">
              <Image
                src="/sustainability/banner/Corporate_banner.jpg"
                alt="Sustainability View"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>

              {/* Overlay boxes - First Row */}
              <div className="absolute top-0 left-0 right-0 w-full">
                <div className="flex justify-center gap-0">
                  <div className="relative w-[370px] h-[370px] pl-8 pb-10 pt-8 flex items-start justify-start text-[#838182] transition-colors bg-transparent">
                    <h3 className="text-3xl font-semibold">
                      Corporate
                      <br />
                      Newsletter
                    </h3>
                  </div>
                  <div className="relative w-[370px] h-[370px]"></div>
                  <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#E63946D6] text-white">
                    <h3 className="text-3xl font-normal">
                      Keeping you <strong>informed</strong>
                      <br />
                      about our progress
                    </h3>
                  </div>
                </div>
              </div>

              {/* Overlay boxes - Second Row */}
              <div className="absolute top-[370px] left-0 right-0 w-full">
                <div className="flex justify-center gap-0">
                  <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#35B3A7D6] text-white">
                    <h3 className="text-3xl font-normal">
                      Stay updated with our
                      <br />
                      <strong>latest developments</strong>
                    </h3>
                  </div>
                  <div className="relative w-[370px] h-[370px]"></div>
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
            onClick={() => setSelectedSection("corporate-responsibility")}
          >
            <h3
              className={`text-xl mb-3 ${
                selectedSection === "corporate-responsibility"
                  ? "text-[#0099a7]"
                  : "text-gray-600 hover:text-[#0099a7]"
              }`}
            >
              Corporate Responsibility
            </h3>
            <Image
              src="/sustainability/thumbnail_Corporate_Responsibility.webp"
              alt="Corporate Responsibility"
              width={350}
              height={218}
              className="object-cover"
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setSelectedSection("qhse")}
          >
            <h3
              className={`text-xl mb-3 ${
                selectedSection === "qhse"
                  ? "text-[#0099a7]"
                  : "text-gray-600 hover:text-[#0099a7]"
              }`}
            >
              QHSE
            </h3>
            <Image
              src="/sustainability/csr_cc.webp"
              alt="QHSE"
              width={350}
              height={218}
              className="object-cover"
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setSelectedSection("corporate-newsletter")}
          >
            <h3
              className={`text-xl mb-3 ${
                selectedSection === "corporate-newsletter"
                  ? "text-[#0099a7]"
                  : "text-gray-600 hover:text-[#0099a7]"
              }`}
            >
              Corporate Newsletter
            </h3>
            <Image
              src="/sustainability/csr_newsletter.webp"
              alt="Corporate Newsletter"
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
