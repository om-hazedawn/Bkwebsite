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
  data: {
    YearRanges: {
      yearRanges: string[];
    };
  }
}

export default function InvestorRelations() {
  const { language } = useLanguage();
  const [announcementYears, setAnnouncementYears] = useState<string[]>([]);
  const [circularYears, setCircularYears] = useState<string[]>([]);
  const [noticeSections, setNoticeSections] = useState<NoticeSectionItem[]>([]);
  const [annualReportYearRanges, setAnnualReportYearRanges] = useState<string[]>([]);
  const [interiumReportYearRanges, setInteriumReportYearRanges] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const year = searchParams.get('year');
  const collection = searchParams.get('collections');
  const annualYearRange = searchParams.get('annualYearRange');
  const interiumYearRange = searchParams.get('interiumYearRange');

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
  }, []);

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
  }, []);

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
  }, []);

  useEffect(() => {
    const fetchAnnualReportYearRanges = async () => {
      try {
        const annualReportsData: YearRangesData = await getAnnualReport();
        if (annualReportsData && annualReportsData.data && annualReportsData.data.YearRanges && annualReportsData.data.YearRanges.yearRanges) {
          setAnnualReportYearRanges(annualReportsData.data.YearRanges.yearRanges);
        }
      } catch (error) {
        console.error("Failed to load annual report year ranges:", error);
        // Optionally, set a default or show an error message to the user
      }
    };

    fetchAnnualReportYearRanges();
  }, []);

  useEffect(() => {
    const fetchInteriumReportYearRanges = async () => {
      try {
        const interiumReportsData: YearRangesData = await getInteriumReport();
        if (interiumReportsData && interiumReportsData.data && interiumReportsData.data.YearRanges && interiumReportsData.data.YearRanges.yearRanges) {
          setInteriumReportYearRanges(interiumReportsData.data.YearRanges.yearRanges);
        }
      } catch (error) {
        console.error("Failed to load interium report year ranges:", error);
        // Optionally, set a default or show an error message to the user
      }
    };

    fetchInteriumReportYearRanges();
  }, []);

  const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_URL || 'https://bk-data-migrate.onrender.com';
  const [selectedSection, setSelectedSection] = useState("financial-reports");
  const [financialReportData, setFinancialReportData] = useState<FinancialReportData>();
  const [announcementData, setAnnouncementData] = useState<AnnouncementData>();
  const [circularAndNoticeData, setCircularAndNoticeData] = useState<CircularAndNoticeData>();

  useEffect(() => {
    const fetchFinancialReportData = async () => {
      const data = await getFinancialReport();
      console.log("Fetched data:", data); // Log the fetched data to the console
      setFinancialReportData(data);
    };
    fetchFinancialReportData();
  }, []);

  useEffect(() => {
    const fetchAnnouncementData = async () => {
      const data = await getAnnouncementAndPressRelease();
      console.log("Fetched data:", data); // Log the fetched data to the console
      setAnnouncementData(data);
    };
    fetchAnnouncementData();
  }, []);

  useEffect(() => {
    const fetchCircularAndNoticeData = async () => {
      const data = await getCircularAndNotice();
      console.log("Fetched data:", data); // Log the fetched data to the console
      setCircularAndNoticeData(data);
    };
    fetchCircularAndNoticeData();
  }, []);


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
                      <h2 className="text-2xl font-bold text-[#0099A7] mb-6">Annual Report</h2>
                      <AnnualYearRanges yearRanges={annualReportYearRanges} basePath="/investor-relations"/>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#0099A7] mb-6">Interim Report</h2>
                      <InteriumYearRanges yearRanges={interiumReportYearRanges} basePath="/investor-relations"/>
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    {interiumYearRange ? null : <AnnualReportList yearRange={annualYearRange || ''} language={language} />}
                    {annualYearRange ? null : <InteriumReportList yearRange={interiumYearRange || ''} language={language} />}
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
                src={announcementData?.data?.MainImage?.url ? cmsBaseUrl + announcementData.data.MainImage.url : ''}
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
                    <h2 className="text-2xl font-bold text-[#0099A7] mb-6">Announcement</h2>
                    <Years years={announcementYears}/>
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
                    <Years years={circularYears}/>
                    <h2 className="text-2xl font-bold text-[#0099A7]">Notices</h2>
                    <Sections initialSections={noticeSections} basePath="/investor-relations" />
                  </div>
                  <div className="md:col-span-3">
                    {collection ? null : <CircularList initialYear={year || ''} />}
                    {year ? null : <DynamicFileList collections={collection || ''} />}
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