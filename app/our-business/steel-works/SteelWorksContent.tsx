"use client"

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import { useLanguage } from "@/contexts/language-context";
import { getStructuralSteelWork } from "@/lib/api/structural-steel-work"; // Added import
import { SectionItem } from '@/components/Sections';
import Sections from '@/components/Sections'; // Added import for Sections
import DynamicBusinessList from "@/components/DynamicBusinessList"; // Added import for CircularsList

export default function SteelWorks() {

  const { language } = useLanguage();
  const [steelWorksSectionsData, setSteelWorksSectionsData] = useState<SectionItem[]>([]);
  const searchParams = useSearchParams();
  const selectedCollections = searchParams.get('collections');

  useEffect(() => {
    const fetchSteelWorksData = async () => {
      const steelWorksResponse = await getStructuralSteelWork();
      if (steelWorksResponse) {
        setSteelWorksSectionsData(steelWorksResponse.data.Sections.sections);
      }
    };
    fetchSteelWorksData();
  }, [language]);


  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative">
        <div className="relative max-w-[1690px] w-full h-[400px] sm:h-[500px] md:h-[640px] lg:h-[740px] mx-auto overflow-hidden">
          <Image
            src="/our-business/heroimageofbusiness.jpg"
            alt="Steel Works Hero"
            fill
            sizes="100vw"
            className="object-cover object-center transition-all duration-300"
            priority
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>

          <div className="absolute inset-0">
            <div className="hidden min-[750px]:grid grid-cols-3 grid-rows-2 gap-0 w-full h-full max-w-[1110px] mx-auto">
              {/* First Row */}
              <div className="w-full h-full flex items-start pt-8 pl-8 text-white">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Our Business</h3>
              </div>

              {/* Second box - Steel Works */}
              <div className="relative w-full h-full flex items-end pl-8 pb-10 bg-[#D94055] text-white">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Structural Steel Works</h3>
              </div>

              {/* Third box - Empty */}
              <div className="relative w-full h-full"></div>

              {/* Second Row */}
              <Link href="/our-business">
                <div className="relative w-full h-full flex items-end pl-8 pb-10 bg-[#D5D4D5] text-[#595957] transition-colors duration-300 hover:bg-[#D5D4D5]/60">
                  <h3 className="text-lg sm:text-xl lg:text-[1.50rem] font-semibold">
                    ◄ back to Our Business
                  </h3>
                </div>
              </Link>

              {/* Fifth box - Empty */}
              <div className="relative w-full h-full"></div>

              {/* Sixth box - Empty */}
              <div className="relative w-full h-full"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto pl-64">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-1">
              {/* Steel Works section */}
              <h2 className="text-2xl font-medium text-gray-700 mb-6">Structural Steel Works</h2>
              <Sections initialSections={steelWorksSectionsData} basePath="/our-business/steel-works?" />
            </div>
            <div className="md:col-span-2">
              {selectedCollections === null ? (
                <DynamicBusinessList collections="structural-steel-work-collections" language={language} key="structural-steel-work-collections" />
              ) : (
                <DynamicBusinessList collections={selectedCollections || ''} language={language}  key={selectedCollections} />
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}