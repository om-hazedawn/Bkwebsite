"use client"

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import { useLanguage } from "@/contexts/language-context";
import { getFoundation } from "@/lib/api/foundation"; // Added import
import { SectionItem } from '@/components/Sections';
import Sections from '@/components/Sections'; // Added import for Sections
import DynamicBusinessList from "@/components/DynamicBusinessList"; // Added import for CircularsList

export default function Foundations() {

  const { language } = useLanguage();
  const [foundationsSectionsData, setFoundationsSectionsData] = useState<SectionItem[]>([]);
  const searchParams = useSearchParams();
  const selectedCollections = searchParams.get('collections');

  useEffect(() => {
    const fetchFoundationsData = async () => {
      const foundationsResponse = await getFoundation(language);
    if (foundationsResponse) {
      setFoundationsSectionsData(foundationsResponse.data.Sections.sections);
    }
    };
    fetchFoundationsData();
  }, [language]);

  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative">
        <div className="relative max-w-[1690px] w-full h-[400px] sm:h-[500px] md:h-[640px] lg:h-[740px] mx-auto overflow-hidden">
          <Image
            src="/our-business/heroimageofbusiness.jpg"
            alt="Foundations Hero"
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
                <h3 className="text-3xl font-semibold">Our Business</h3>
              </div>

              {/* Second box - Foundations */}
              <div className="relative w-full h-full flex items-end pl-8 pb-10 bg-[#D5D4D5] text-black">
                <h3 className="text-3xl font-semibold">Foundations</h3>
              </div>

              {/* Third box - Empty */}
              <div className="relative w-full h-full"></div>

              {/* Second Row */}
              <Link href="/our-business">
                <div className="relative w-full h-full flex items-end pl-8 pb-10 bg-[#D5D4D5] text-[#595957] transition-colors duration-300 hover:bg-[#D5D4D5]/60">
                  <h3 className="text-[1.50rem] font-semibold">
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
              {/* Foundations section */}
              <h2 className="text-2xl font-medium text-gray-700 mb-6">Foundations</h2>
              <Sections initialSections={foundationsSectionsData} basePath="/our-business/foundations?" />
            </div>
            <div className="md:col-span-2">
              {selectedCollections === null ? (
                <DynamicBusinessList collections="foundations-collections" language={language} key="foundations-collections" />
              ) : (
                <DynamicBusinessList collections={selectedCollections || ''} language={language} key={selectedCollections} />
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}