import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
// import WhatsNewList, { YearData } from "@/components/WhatsNewList"
// import WhatsNewDetail from "@/components/WhatsNewDetail"
import { getWhatsNew } from "@/lib/api/what-s-new";
import { BoxMessageItem } from "@/components/BoxMessage";
import BoxMessage from "@/components/BoxMessage"
import { useLanguage } from "@/contexts/language-context";
import Years from "@/components/Years"
import NewsList from "@/components/NewsList";
import { useSearchParams } from 'next/navigation';

interface Image {
  url: string
}

interface NewsData { 
  data: {
    PageTitle: string;
    MainImage: Image;
    MessageLeftImg: Image;
    MessageTurquoiseArea: BoxMessageItem[];
    MessageWhiteArea: BoxMessageItem[];
    locale: string;
    localizations: NewsData[];
  };
}

export default function WhatsNew() {
  const [newsData, setNewsData] = useState<NewsData>();
  const { language } = useLanguage();
  const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_URL || 'http://52.175.21.181';
  const searchParams = useSearchParams();
  const year = searchParams.get('year');

  useEffect(() => {
    const fetchHome = async () => {
      try {
        const data = await getWhatsNew(language);
        console.log("Fetched data:", data); // Log the fetched data to the console
        setNewsData(data);
      } catch (error) {
        console.error("Failed to load home years:", error);
        // Optionally, set a default or show an error message to the user
      }
    };
    fetchHome();
  }, [language]);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero section */}
      <section className="relative">
        <div className="relative max-w-[1540px] w-full h-[740px] mx-auto">
          <Image
            src={cmsBaseUrl + newsData?.data.MainImage?.url}
            alt="What's New at Build King"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>

          {/* Overlay boxes - First Row */}
          <div className="absolute top-0 left-0 right-0 w-full">
            <div className="flex justify-center space-x-0">
              {/* Title box */}
              <div className="w-[370px] h-[370px] px-8 py-8 text-white">
                <h3 className="text-3xl font-semibold">What&apos;s New</h3>
              </div>

              {/* Spacer box */}
              <div className="w-[370px] h-[370px] bg-[#FFFFFFD6]"></div>

              {/* Welcome box */}
              <div className="relative w-[370px] h-[370px] px-8 py-8 flex items-end justify-start">
              </div>
            </div>
          </div>

          {/* Overlay boxes - Second Row */}
          <div className="absolute top-[370px] left-0 right-0 w-full">
            <div className="flex justify-center space-x-0">
              {/* First box */}
              <div className="relative w-[370px] h-[370px] px-8 py-8 flex items-end justify-start bg-[#35b3a7]/80 text-white text-2xl font-light">
                <BoxMessage items={newsData?.data.MessageTurquoiseArea || []}/>
              </div>

              {/* Second box */}
              <div className="relative w-[370px] h-[370px] px-8 py-8 flex items-end justify-start">
              </div>

              {/* Third box */}
              <div className="relative w-[370px] h-[370px] px-8 py-8 flex items-end justify-start">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content section */}
      <section className="py-24">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center">
            <div>
              <h2 className="text-2xl font-bold text-[#0099A7] mb-6">What&apos;s New</h2>
              <Years years={['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015']} basePath="/whats-new?" />
            </div>
            <div className="result_box w-full">
              <NewsList initialYear={year || ''} language={language} key={year || language} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}