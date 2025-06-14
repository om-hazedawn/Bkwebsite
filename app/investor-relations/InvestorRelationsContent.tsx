import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import { getFinancialReport } from "@/lib/api/financial-report";
import { getAnnouncementAndPressRelease } from "@/lib/api/announcement-and-press-release";
import { getAnnouncement } from "@/lib/api/announcement"; // Added import
import { BoxMessageItem } from "@/components/BoxMessage";
import BoxMessage from "@/components/BoxMessage";
import Years from "@/components/Years";
import AnnouncementsList from '@/components/AnnouncementsList'; // Adjust path if necessary
import CircularList from '@/components/CircularsList'; // Adjust path if necessary
import { getCircular } from "@/lib/api/circular"; // Added import
import Sections from '@/components/Sections'; // Added import for Sections
import { getNotice, NoticeApiResponse, NoticeSectionItem } from "@/lib/api/notice"; // Updated import for getNotice
import DynamicFileList from "@/components/DynamicFileList";
import { getCircularAndNotice } from "@/lib/api/circular-and-notice";
import { getAnnualReport } from "@/lib/api/annual-report";
import { getInteriumReport } from "@/lib/api/interium-report";
import AnnualYearRanges from "@/components/AnnualYearRanges";
import InteriumYearRanges from "@/components/InteriumYearRanges";
import AnnualReportList from "@/components/AnnualReportList";
import InteriumReportList from "@/components/InteriumReportList";
import { useLanguage } from "@/contexts/language-context";
import { getInvestorRelation } from "@/lib/api/investor-relation";

interface Image {
  url: string
}

interface InvestorRelationsData { 
  data: {
    Title1ParentMenuBox: string;
    Title1ImageParentMenuBox: Image;
    Title2ParentMenuBox: string;
    Title2ImageParentMenuBox: Image;
    Title3ParentMenuBox: string;
    Title3ImageParentMenuBox: Image;
    locale: string;
    localizations: InvestorRelationsData[];
  };
}

interface FinancialReportData { 
  data: {
    PageTitle: string;
    MessageTurquoiseArea: BoxMessageItem[];
    MessageRedArea: BoxMessageItem[];
    locale: string;
    MainImage: {"url": string};
    localizations: FinancialReportData[];
  };
}

interface ReportData { 
  data: {
    PageTitle: string;
    YearRanges: YearRangesData;
    locale: string;
    localizations: ReportData[];
  };
}

interface AnnouncementData { 
  data: {
    PageTitle: string;
    MessageBlackArea: BoxMessageItem[];
    MessageRedArea: BoxMessageItem[];
    locale: string;
    MainImage: {"url": string};
    localizations: AnnouncementData[];
  };
}

interface CircularAndNoticeData { 
  data: {
    PageTitle: string;
    MessageBlackArea: BoxMessageItem[];
    MessageTurquoiseArea: BoxMessageItem[];
    locale: string;
    MainImage: {"url": string};
    localizations: CircularAndNoticeData[];
  };
}

interface YearsData {
  data: {
    Years: {
      years: string[];
    };
  }
}

interface YearRangesData {
  yearRanges: string[];
}

export default function InvestorRelations() {
  const { language } = useLanguage();
  const [investorRelationsData, setInvestorRelationsData] = useState<InvestorRelationsData>();
  const [announcementYears, setAnnouncementYears] = useState<string[]>([]);
  const [circularYears, setCircularYears] = useState<string[]>([]);
  const [noticeSections, setNoticeSections] = useState<NoticeSectionItem[]>([]);
  const [annualReportData, setAnnualReportData] = useState<ReportData>();
  const [interiumReportData, setInteriumReportData] = useState<ReportData>();
  const searchParams = useSearchParams();
  const sectionParam = searchParams.get("section");
  const year = searchParams.get('year');
  const collection = searchParams.get('collections');
  const annualYearRange = searchParams.get('annualYearRange');
  const interiumYearRange = searchParams.get('interiumYearRange');

  useEffect(() => {
    const fetchInvestorRelationsData = async () => {
      const data = await getInvestorRelation(language);
      console.log("Fetched data:", data); // Log the fetched data to the console
      setInvestorRelationsData(data);
    };
    fetchInvestorRelationsData();
  }, [language]);

  useEffect(() => {
    const fetchAnnouncementYears = async () => {
      try {
        const announcementData: YearsData = await getAnnouncement();
        if (announcementData && announcementData.data && announcementData.data.Years && announcementData.data.Years.years) {
          setAnnouncementYears(announcementData.data.Years.years);
        }
      } catch (error) {
        console.error("Failed to load announcement years:", error);
        // Optionally, set a default or show an error message to the user
      }
    };

    fetchAnnouncementYears();
  }, [language]);

  useEffect(() => {
    const fetchCircularYears = async () => {
      try {
        const circularData: YearsData = await getCircular();
        if (circularData && circularData.data && circularData.data.Years && circularData.data.Years.years) {
          setCircularYears(circularData.data.Years.years);
        }
      } catch (error) {
        console.error("Failed to load circular years:", error);
        // Optionally, set a default or show an error message to the user
      }
    };

    fetchCircularYears();
  }, [language]);

  useEffect(() => {
    const fetchNoticeSectionData = async () => {
      try {
        const noticeResponse: NoticeApiResponse = await getNotice();
        
        if (noticeResponse && noticeResponse.data && noticeResponse.data.Sections && noticeResponse.data.Sections.sections) {
          setNoticeSections(noticeResponse.data.Sections.sections);
        }
      } catch (error) {
        console.error("Failed to load notice sections:", error);
        // Optionally, set a default or show an error message to the user
      }
    };

    fetchNoticeSectionData();
  }, [language]);

  useEffect(() => {
    const fetchAnnualReportData = async () => {
      try {
        const annualReportsData: ReportData = await getAnnualReport(language);
        if (annualReportsData && annualReportsData.data) {
          setAnnualReportData(annualReportsData);
        }
      } catch (error) {
        console.error("Failed to load annual report data:", error);
        // Optionally, set a default or show an error message to the user
      }
    };

    fetchAnnualReportData();
  }, [language]);

  useEffect(() => {
    const fetchInteriumReportData = async () => {
      try {
        const interiumReportsData: ReportData = await getInteriumReport(language);
        if (interiumReportsData && interiumReportsData.data) {
          setInteriumReportData(interiumReportsData);
        }
      } catch (error) {
        console.error("Failed to load interium report data:", error);
        // Optionally, set a default or show an error message to the user
      }
    };

    fetchInteriumReportData();
  }, [language]);

  const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_URL || 'http://52.175.21.181';
  const [selectedSection, setSelectedSection] = useState(sectionParam || "financial-reports");
  const [financialReportData, setFinancialReportData] = useState<FinancialReportData>();
  const [announcementData, setAnnouncementData] = useState<AnnouncementData>();
  const [circularAndNoticeData, setCircularAndNoticeData] = useState<CircularAndNoticeData>();

  useEffect(() => {
    setSelectedSection(searchParams.get("section") || "financial-reports");
  }, [searchParams]);

  useEffect(() => {
    const fetchFinancialReportData = async () => {
      const data = await getFinancialReport(language);
      console.log("Fetched data:", data); // Log the fetched data to the console
      setFinancialReportData(data);
    };
    fetchFinancialReportData();
  }, [language]);

  useEffect(() => {
    const fetchAnnouncementData = async () => {
      const data = await getAnnouncementAndPressRelease(language);
      console.log("Fetched data:", data); // Log the fetched data to the console
      setAnnouncementData(data);
    };
    fetchAnnouncementData();
  }, [language]);

  useEffect(() => {
    const fetchCircularAndNoticeData = async () => {
      const data = await getCircularAndNotice(language);
      console.log("Fetched data:", data); // Log the fetched data to the console
      setCircularAndNoticeData(data);
    };
    fetchCircularAndNoticeData();
  }, [language]);


  if (!financialReportData) {
    return <div>Loading...</div>; // Or a more sophisticated loading component
  }

  const renderContent = () => {
    switch (selectedSection) {
      case "financial-reports":
        return (
          <div>
            <div className="relative max-w-[1831px] w-full h-[740px] mx-auto">
              <Image
                src={cmsBaseUrl + financialReportData.data.MainImage.url}
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
                      {financialReportData.data.PageTitle}
                    </h3>
                  </div>

                  {/* Second box - with bg-[#0099A7] */}

                  <div className="relative w-[370px] h-[370px]"></div>

                  {/* Third box - with bg-[#e63946] */}
                    <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#0099A7D6] text-white">
                      <h3 className="text-3xl font-normal">
                        <BoxMessage items={financialReportData.data.MessageTurquoiseArea}></BoxMessage>
                      </h3>
                    </div>
                </div>
              </div>

              {/* Overlay boxes - Second Row */}
              <div className="absolute top-[372px] left-0 right-0 w-full">
                <div className="flex justify-center">
                  {/* First box - with shadow */}
                  <div className="relative w-[370px] h-[370px]"></div>

                  {/* Second box - with bg-[#0099A7] */}
                    <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#E63946D6] text-white ">
                      <h3 className="text-3xl font-normal">
                        <BoxMessage items={financialReportData.data.MessageRedArea}></BoxMessage>
                      </h3>
                    </div>

                  {/* Third box - with bg-[#e63946] */}
                  <div className="relative w-[370px] h-[370px]">
                  </div>
                </div>
              </div>
            </div>
            <section className="py-16">
              <div className="container mx-auto pl-64">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Year filter sidebar */}
                  <div className="flex flex-col space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-[#0099A7] mb-6">{annualReportData?.data.PageTitle}</h2>
                      <AnnualYearRanges yearRanges={annualReportData?.data.YearRanges.yearRanges || []} basePath="/investor-relations"/>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#0099A7] mb-6">{interiumReportData?.data.PageTitle}</h2>
                      <InteriumYearRanges yearRanges={interiumReportData?.data.YearRanges.yearRanges || []} basePath="/investor-relations"/>
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    {interiumYearRange === null && annualYearRange === null ? (
                      <AnnualReportList yearRange={annualYearRange || '2018-2024'} language={language} />
                    ) : (
                      <>
                        {interiumYearRange ? null : <AnnualReportList yearRange={annualYearRange || ''} language={language} />}
                        {annualYearRange ? null : <InteriumReportList yearRange={interiumYearRange || ''} language={language} />}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
          
        );
      case "announcements":
        return (
          <div>
            <div className="relative max-w-[1831px] w-full h-[740px] mx-auto">
              <Image
                src={cmsBaseUrl + announcementData?.data.MainImage.url}
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
                      {announcementData?.data?.PageTitle || ''}
                    </h3>
                  </div>

                  {/* Second box - with bg-[#0099A7] */}

                  <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#838182]/70 text-white">
                    <h3 className="text-3xl font-normal">
                      <BoxMessage items={announcementData?.data?.MessageBlackArea || []}></BoxMessage>
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

                  {/* Second box - with bg-[#0099A7] */}
                  <div className="relative w-[370px] h-[370px]"></div>

                  {/* Third box - with bg-[#e63946] */}
                  <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#E63946D6] text-white ">
                    <h3 className="text-3xl font-normal">
                      <BoxMessage items={announcementData?.data?.MessageRedArea || []}></BoxMessage>
                    </h3>
                  </div>
                </div>
              </div>
              
            </div>
            <section className="py-16">
              <div className="container mx-auto pl-64">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Year filter sidebar */}
                  <div>
                    <h2 className="text-2xl font-bold text-[#0099A7] mb-6">{announcementData?.data.PageTitle}</h2>
                    <Years years={announcementYears} basePath="/investor-relations?section=announcements&"/>
                  </div>
                  <div className="md:col-span-3">
                    <AnnouncementsList initialYear={year || ''} language={language} />
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      case "circulars":
        return (
          <div>
            <div className="relative max-w-[1831px] w-full h-[740px] mx-auto">
              <Image
                src={circularAndNoticeData?.data?.MainImage?.url ? cmsBaseUrl + circularAndNoticeData.data.MainImage.url : ''}
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
                      {circularAndNoticeData?.data?.PageTitle || ''}
                    </h3>
                  </div>

                  {/* Second box - with bg-[#0099A7] */}
                  <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#838182]/70 text-white ">
                    <h3 className="text-3xl font-normal">
                      <BoxMessage items={circularAndNoticeData?.data?.MessageBlackArea || []}></BoxMessage>
                    </h3>
                  </div>

                  <div className="relative w-[370px] h-[370px]"></div>
                </div>
              </div>

              {/* Overlay boxes - Second Row */}
              <div className="absolute top-[372px] left-0 right-0 w-full">
                <div className="flex justify-center">
                  {/* First box - with shadow */}
                  <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#0099A7D6]/80 text-white ">
                    <h3 className="text-3xl font-normal">
                      <BoxMessage items={circularAndNoticeData?.data?.MessageTurquoiseArea || []}></BoxMessage>
                    </h3>
                  </div>

                  {/* Second box - with bg-[#0099A7] */}

                  <div className="relative w-[370px] h-[370px]"></div>

                  {/* Third box - with bg-[#e63946] */}
                  <div className="relative w-[370px] h-[370px]"></div>
                </div>
              </div>
            </div>
            <section className="py-16">
              <div className="container mx-auto pl-64">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Year filter sidebar */}
                  <div className="flex flex-col space-y-8">
                    <h2 className="text-2xl font-bold text-[#0099A7]">Circulars</h2>
                    <Years years={circularYears} basePath="/investor-relations?section=circulars&"/>
                    <h2 className="text-2xl font-bold text-[#0099A7]">Notices</h2>
                    <Sections initialSections={noticeSections} basePath="/investor-relations?section=circulars&" />
                  </div>
                  <div className="md:col-span-3">
                    {collection || year ? (
                      collection ? (
                        <DynamicFileList collections={collection || ''} language={language} />
                      ) : (
                        <CircularList initialYear={year || ''} />
                      )
                    ) : (
                      <CircularList initialYear={year || ''} />
                    )}
                  </div>
                </div>
              </div>
            </section>
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
            onClick={() => setSelectedSection("financial-reports")}
          >
            <h3
              className={`text-xl mb-3 ${
                selectedSection === "financial-reports"
                  ? "text-[#0099a7]"
                  : "text-gray-600"
              }`}
            >
              {investorRelationsData?.data.Title1ParentMenuBox}
            </h3>
            <Image
              src={cmsBaseUrl + investorRelationsData?.data.Title1ImageParentMenuBox.url}
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
              {investorRelationsData?.data.Title2ParentMenuBox}
            </h3>
            <Image
              src={cmsBaseUrl + investorRelationsData?.data.Title2ImageParentMenuBox.url}
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
              {investorRelationsData?.data.Title3ParentMenuBox}
            </h3>
            <Image
              src={cmsBaseUrl + investorRelationsData?.data.Title3ImageParentMenuBox.url}
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