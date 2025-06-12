"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { getOurBusiness } from "@/lib/api/our-business";

interface OurBusinessData {
  data: {
    PageTitle: string;
    Detail: string;
    locale: string;
    localizations: OurBusinessData[];
  };
}

export default function OurBusiness() {
  const [ourBusinessData, setOurBusinessData] = useState<OurBusinessData>();
  const { language } = useLanguage();

  useEffect(() => {
    const fetchOurBusiness = async () => {
      try {
        const data = await getOurBusiness(language);
        console.log("Fetched data:", data); // Log the fetched data to the console
        setOurBusinessData(data);
      } catch (error) {
        console.error("Failed to load our business data:", error);
        // Optionally, set a default or show an error message to the user
      }
    };

    fetchOurBusiness();
  }, [language]);

  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative">
        {/* Background aerial construction site image */}
        <div className="relative max-w-[1690px] w-full h-[400px] sm:h-[500px] md:h-[640px] lg:h-[740px] mx-auto overflow-hidden">
          <Image
            src="/our-business/heroimageofbusiness.jpg"
            alt="Aerial view of construction site"
            fill
            sizes="100vw"
            className="object-cover object-center transition-all duration-300"
            priority
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>

          {/* All boxes in one grid */}
          <div className="absolute inset-0">
            <div className="hidden min-[750px]:grid grid-cols-3 grid-rows-2 gap-0 w-full h-full max-w-[1110px] mx-auto">
              {/* First Row */}
              <div className="w-full h-full flex items-center pl-8 text-white transition-all duration-300">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">Our Businesses</h3>
              </div>
              <Link href="/our-business/buildings">
                <div className="relative w-full h-full flex items-end pl-8 pb-6 bg-[#1aabaf]/80 text-white transition-all duration-300 hover:bg-[#1aabaf]/40">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">Buildings</h3>
                  <div className="absolute top-4 right-4 w-8 h-8">
                    <Image
                      src="/our-business/white_co.webp"
                      alt="Corner decoration"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </Link>
              <Link href="/our-business/environmental">
                <div className="relative w-full h-full flex items-end pl-8 pb-6 bg-[#e63946]/80 text-white transition-all duration-300 hover:bg-[#e63946]/40">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">Environmental</h3>
                  <div className="absolute top-4 right-4 w-8 h-8">
                    <Image
                      src="/our-business/white_co.webp"
                      alt="Corner decoration"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </Link>

              {/* Second Row */}
              <Link href="/our-business/foundations">
                <div className="relative w-full h-full flex items-end pl-8 pb-6 bg-[#D5D4D5] text-black transition-all duration-300 hover:bg-[#D5D4D5]/40">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">Foundations</h3>
                  <div className="absolute top-4 right-4 w-8 h-8">
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
                <div className="relative w-full h-full flex items-end pl-8 pb-6 text-white transition-all duration-300 shadow-lg hover:bg-black/40 hover:shadow-none">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                    General Civil Works
                  </h3>
                  <div className="absolute top-4 right-4 w-8 h-8">
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
                <div className="relative w-full h-full flex items-end pl-8 pb-6 bg-[#1aabaf]/80 text-white transition-all duration-300 hover:bg-[#1aabaf]/40">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                    Railway &<br />
                    Associated Works
                  </h3>
                  <div className="absolute top-4 right-4 w-8 h-8">
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
      </section>

      {/* Additional blocks section */}
      <section className="relative">
        <div className="relative max-w-[1690px] w-full h-[200px] sm:h-[250px] md:h-[320px] lg:h-[370px] mx-auto overflow-hidden">
          <div className="absolute inset-0">
            <div className="hidden min-[750px]:grid grid-cols-3 grid-rows-1 gap-0 w-full h-full max-w-[1110px] mx-auto">
          {/* First box - with shadow */}
          <Link href="/our-business/steel-works">
            <div className="relative w-full h-full flex items-end pl-8 pb-6 bg-[#D94055] text-white transition-all duration-300 hover:bg-[#e63946]/80">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">Structural Steel Works</h3>
              <div className="absolute top-4 right-4 w-8 h-8">
                <Image
                  src="/our-business/white_co.webp"
                  alt="Corner decoration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </Link>
          {/* Second box - with bg-[#1aabaf] */}
          <Link href="/our-business/tunnels">
            <div className="relative w-full h-full flex items-end pl-8 pb-6 bg-white text-black transition-all duration-300 hover:bg-white/80">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">Tunnels</h3>
              <div className="absolute top-4 right-4 w-8 h-8">
                <Image
                  src="/our-business/gray_co.webp"
                  alt="Corner decoration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </Link>
          {/* Third box - with bg-[#e63946] */}
          <Link href="/our-business/marine-works">
            <div className="relative w-full h-full flex items-end pl-8 pb-6 bg-[#B0B0B1] text-white transition-all duration-300 hover:bg-[#b1b1b1]/80">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">Marine Works</h3>
              <div className="absolute top-4 right-4 w-8 h-8">
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
      </section>

      <section className="bg-[#f1f1f1] py-12">
        <div className="max-w-5xl mx-auto px-6 text-gray-600 text-xl leading-relaxed font-sans">
          {/* <p className="mb-6">
            Build King offers a comprehensive construction and engineering
            service for a wide variety of project types.
          </p>
          <p className="mb-6">
            We have consistently demonstrated our ability to achieve the highest
            standards of engineering works despite encountering numerous
            extremely challenging conditions in different projects.
          </p>

          <p className="mb-6">
            Supported by our competent and professional team, we have earned an
            excellent track record in construction sector.
          </p> */}
          {ourBusinessData?.data.Detail}
        </div>
      </section>

      <Footer />
    </main>
  );
}
