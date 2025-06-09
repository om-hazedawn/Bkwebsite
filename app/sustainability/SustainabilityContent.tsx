"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';

import Years from "@/components/Years";
import NewsLettersList from "@/components/NewsLettersList";

import { getSustainability } from "@/lib/api/sustainability";
import { getQhseAndAward } from "@/lib/api/qhse-and-award";
import { getCorporateNewsletter } from "@/lib/api/corporate-newsletter";
import { useLanguage } from "@/contexts/language-context";
import { BoxMessageItem } from "@/components/BoxMessage";
import BoxMessage from "@/components/BoxMessage";

interface QHSEData { 
  data: {
    PageTitle: string;
    MainImage: Image;
    MessageRedArea: BoxMessageItem[];
    MessageBlackArea: BoxMessageItem[];
    locale: string;
    localizations: QHSEData[];
  };
}

interface Image {
  url: string
}

interface SustainabilityData { 
  data: {
    Title1ParentMenuBox: string;
    Title1ImageParentMenuBox: Image;
    Title2ParentMenuBox: string;
    Title2ImageParentMenuBox: Image;
    Title3ParentMenuBox: string;
    Title3ImageParentMenuBox: Image;
    locale: string;
    localizations: SustainabilityData[];
  };
}

interface YearsData {
  years: string[];
}

interface NewsLetterData { 
  data: {
    PageTitle: string;
    MainImage: Image;
    MessageRedArea: BoxMessageItem[];
    MessageWhiteArea: BoxMessageItem[];
    Years: YearsData;
    locale: string;
    localizations: NewsLetterData[];
  };
}

export default function Sustainability() {
  const { language } = useLanguage();
  const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_URL || 'http://52.175.21.181';
  const searchParams = useSearchParams();
  const year = searchParams.get('year');
  const [sustainabilityData, setSustainabilityData] = useState<SustainabilityData>();
  const [QHSEData, setQHSEData] = useState<QHSEData>();
  const [newsLetterData, setNewsLetterData] = useState<NewsLetterData>();
  const [selectedSection, setSelectedSection] = useState(
    "corporate-responsibility"
  );

  useEffect(() => {
    const fetchSustainabilityData = async () => {
      const data = await getSustainability(language);
      console.log("Fetched data:", data); // Log the fetched data to the console
      setSustainabilityData(data);
    };
    fetchSustainabilityData();
  }, [language]);

  useEffect(() => {
    const fetchQHSEData = async () => {
      try {
        const QHSEData: QHSEData = await getQhseAndAward(language);
        if (QHSEData && QHSEData.data) {
          setQHSEData(QHSEData);
        }
      } catch (error) {
        console.error("Failed to load QHSE data:", error);
        // Optionally, set a default or show an error message to the user
      }
    };

    fetchQHSEData();
  }, [language]);

  useEffect(() => {
    const fetchNewsLetterData = async () => {
      try {
        const newsLetterData: NewsLetterData = await getCorporateNewsletter(language);
        if (newsLetterData && newsLetterData.data) {
          setNewsLetterData(newsLetterData);
        }
      } catch (error) {
        console.error("Failed to load news letter data:", error);
        // Optionally, set a default or show an error message to the user
      }
    };

    fetchNewsLetterData();
  }, [language]);

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
                  <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex flex-col justify-end bg-[#e63946]/80 text-white text-2xl">
                    <BoxMessage items={QHSEData?.data.MessageRedArea || []} />
                  </div>
                  <div className="relative w-[370px] h-[370px]"></div>
                  <div className="relative w-[370px] h-[370px]"></div>
                </div>
              </div>
              {/* Overlay boxes - Second Row */}
              <div className="absolute top-[370px] left-0 right-0 w-full">
                <div className="flex justify-end gap-0">
                  <div className="relative w-[370px] h-[370px] bg-transparent"></div>
                  <div className="w-[945px] h-[370px] bg-black/40 text-white flex flex-col items-start justify-center px-16 space-y-6 text-2xl">
                    <BoxMessage
                      items={QHSEData?.data.MessageBlackArea || []}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20">
              <div className="container mx-auto max-w-6xl">
                <h3
                  className="text-2xl font-bold mb-3 text-[#0099a7]"
                >
                  {QHSEData?.data.PageTitle}
                </h3>
              </div>
            </div>
          </div>
        );
      case "corporate-newsletter":
        return (
          <div>
            <div className="relative max-w-[1831px] w-full h-[740px] mx-auto">
              <Image
                src={cmsBaseUrl + newsLetterData?.data.MainImage.url}
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
                  <div className="w-[945px] h-[370px] bg-[#e63946]/80 text-white text-2xl flex flex-col items-start justify-center px-16 space-y-6">
                    <BoxMessage
                      items={newsLetterData?.data.MessageRedArea || []}
                    />
                  </div>
                </div>
              </div>

              {/* Overlay boxes - Second Row */}
              <div className="absolute top-[370px] left-0 right-0 w-full">
                <div className="flex justify-center gap-0">
                  <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#D5D4D5] text-[#838182] text-3xl">
                    <BoxMessage
                      items={newsLetterData?.data.MessageWhiteArea || []}
                    />
                  </div>
                  <div className="relative w-[370px] h-[370px]"></div>
                  <div className="relative w-[370px] h-[370px]"></div>
                </div>
              </div>
            </div>

            {/* Corporate Newsletter Section */}
            <div className="mt-20">
              <div className="container mx-auto max-w-6xl">
                <h3
                  className="text-2xl font-bold mb-3 text-[#0099a7]"
                >
                  {newsLetterData?.data.PageTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] justify-center">
                  <Years years={newsLetterData?.data.Years.years || []}/>
                  <div>
                    <NewsLettersList
                      initialYear={year || ''} language={language}
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
              {sustainabilityData?.data.Title1ParentMenuBox}
            </h3>
            <Image
              src={cmsBaseUrl + sustainabilityData?.data.Title1ImageParentMenuBox.url}
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
              {sustainabilityData?.data.Title2ParentMenuBox}
            </h3>
            <Image
              src={cmsBaseUrl + sustainabilityData?.data.Title2ImageParentMenuBox.url}
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
              {sustainabilityData?.data.Title3ParentMenuBox}
            </h3>
            <Image
              src={cmsBaseUrl + sustainabilityData?.data.Title3ImageParentMenuBox.url}
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
