"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import NewsletterList, { NewsletterData } from "@/components/NewsletterList";
import NewsletterDetail from "@/components/NewsletterDetail";

export default function Sustainability() {
  const [selectedSection, setSelectedSection] = useState(
    "corporate-responsibility"
  );

  const [newsletters] = useState<NewsletterData[]>([
    {
      id: 1,
      year: 2024,
      description: "Our 2024 newsletter highlights the company's achievements, sustainable initiatives, and major project milestones throughout the year. Read about our commitment to environmental stewardship and community engagement."
    },
    {
      id: 2,
      year: 2023,
      description: "The 2023 newsletter showcases our innovative approaches to construction, featuring key projects that demonstrate our dedication to quality and sustainability in the built environment."
    },
    {
      id: 3,
      year: 2022,
      description: "In 2022, we focused on strengthening our core values and expanding our expertise in sustainable construction. This newsletter details our progress and achievements in various sectors."
    }
  ]);

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
                    <Link href="/sustainability/corporate-governance">
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
                    </Link>

                    {/* Second box - with bg-[#35b3a7] */}
                    <div className="relative w-[370px] h-[370px] bg-transparent"></div>

                    {/* Third box */}
                    <Link href="/sustainability/community-and-charity">
                      <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#1aabaf]/80 text-white transition-colors duration-300 hover:bg-[#1aabaf]/40">
                        <h3 className="text-3xl font-semibold">Community and Charity</h3>
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
                <div className="absolute top-[370px] left-0 right-0 w-full">
                  <div className="flex justify-center gap-0">
                    {/* First box - with shadow */}
                    <div className="relative w-[370px] h-[370px] bg-transparent"></div>

                    {/* Second box */}
                    <Link href="/sustainability/environmental-social-governance">
                      <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#e63946]/80 text-white transition-colors duration-300 hover:bg-[#e63946]/40">
                        <h3 className="text-3xl font-semibold">
                          Environmental, Social and Governance
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
                <div className="flex justify-end gap-0">
                  <div className="relative w-[370px] h-[370px] bg-transparent"></div>
                  <div className="w-[945px] h-[370px] bg-[#e63946]/80 text-white flex flex-col items-start justify-center px-16 space-y-6">
                    <h3 className="text-3xl font-semibold">
                      Build and operate for a brighter and greener future
                    </h3>
                    <p className="text-2xl font-light leading-relaxed text-center max-w-4xl">
                      In the past decades, we have been involved in various
                      kinds of projects which improved the community and the
                      quality of life. We endeavour to relate the principles of
                      sustainable development into all aspects of our business.
                    </p>
                  </div>
                </div>
              </div>

              {/* Overlay boxes - Second Row */}
              <div className="absolute top-[370px] left-0 right-0 w-full">
                <div className="flex justify-center gap-0">
                  <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#D5D4D5] text-[#838182]">
                    <h3 className="text-3xl font-normal">
                      We are committed to operating in an{" "}
                      <strong>environmentally responsible manner</strong>
                    </h3>
                  </div>
                  <div className="relative w-[370px] h-[370px]"></div>
                  <div className="relative w-[370px] h-[370px]"></div>
                </div>
              </div>
            </div>

            {/* Corporate Newsletter Section */}
            <div className="mt-20">
              <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] justify-center">
                  <div className="pr-8">
                    <NewsletterList
                      newsletters={newsletters}
                      onSelect={() => {}}
                    />
                  </div>
                  <div>
                    <NewsletterDetail
                      newsletters={newsletters}
                    />
                  </div>
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
