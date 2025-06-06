"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';

import { getCorporateGovernance } from "@/lib/api/corporate-governance";
import { useLanguage } from "@/contexts/language-context";
import { BoxMessageItem } from "@/components/BoxMessage";
import BoxMessage from "@/components/BoxMessage";

import Sections from "@/components/Sections";
import DynamicFileList from "@/components/DynamicFileList";

interface Image {
  url: string
}

interface CorporateGovernanceData { 
  data: {
    PageTitle: string;
    MainImage: Image;
    MessageRedArea: BoxMessageItem[];
    MessageTurquoiseArea: BoxMessageItem[];
    locale: string;
    localizations: CorporateGovernanceData[];
  };
}

export default function CorporateGovernance() {

  const { language } = useLanguage();
  // const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_URL || 'https://bk-data-migrate.onrender.com';
  const searchParams = useSearchParams();
  const collection = searchParams.get('collections');
  const [corporateGovernanceData, setCorporateGovernanceData] = useState<CorporateGovernanceData>();

  const sections = [{
    "name": "Corporate Governance Report",
    "slug": "corporate-governance-report-collections"
  }, {
    "name": "Others",
    "slug": "others-collections"
  }]
  

  useEffect(() => {
    const fetchCorporateGovernanceData = async () => {
      try {
        const corporateGovernanceData: CorporateGovernanceData = await getCorporateGovernance(language);
        if (corporateGovernanceData && corporateGovernanceData.data) {
          setCorporateGovernanceData(corporateGovernanceData);
        }
      } catch (error) {
        console.error("Failed to load corporate governance data:", error);
        // Optionally, set a default or show an error message to the user
      }
    };

    fetchCorporateGovernanceData();
  }, [language]);

  return (
    <main className="min-h-screen">
      <Header />
      <section className="container mx-auto py-12 bg-[#F1F1F1]">
        
          <div className="relative max-w-[1831px] w-full h-[740px] mx-auto">
            {/* <Image
              src=""
              alt="Sustainability View"
              fill
              className="object-cover"
              priority
            /> */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>

            {/* Overlay boxes - First Row */}
            <div className="absolute top-0 left-0 right-0 w-full">
              <div className="flex justify-start gap-0">
                <div className="w-[945px] h-[370px] bg-[#1aabaf]/80 text-white text-2xl flex flex-col items-start justify-center px-16 space-y-6">
                  <BoxMessage
                    items={corporateGovernanceData?.data.MessageTurquoiseArea || []}
                  />
                </div>
                <div className="relative w-[370px] h-[370px] bg-transparent"></div>
               
              </div>
            </div>

            {/* Overlay boxes - Second Row */}
            <div className="absolute top-[370px] left-0 right-0 w-full">
              <div className="flex justify-center gap-0">
                <div className="relative w-[370px] h-[370px] bg-transparent"></div>
                <div className="relative w-[370px] h-[370px]"></div>
                <div className="w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#e63946]/80 text-white text-3xl">
                  <BoxMessage
                    items={corporateGovernanceData?.data.MessageRedArea || []}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Corporate Governance Section */}
          <div className="mt-20">
            <div className="container mx-auto max-w-6xl">
              <h3
                className="text-2xl font-bold mb-3 text-[#0099a7]"
              >
                {corporateGovernanceData?.data.PageTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] justify-center">
                <Sections initialSections={sections} basePath="/sustainability/corporate-governance" />
                <div>
                  <DynamicFileList collections={collection || 'corporate-governance-report-collections'} language={language} />
                </div>
              </div>
            </div>
          </div>
        </section>
      <Footer />
    </main>
  );
}