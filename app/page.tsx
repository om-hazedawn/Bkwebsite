"use client"

import Header from "@/components/Header"
import HomeHero from "@/components/HomeHero"
import BuildingSection from "@/components/BuildingSection"
import CoreValues from "@/components/CoreValues"
import CompanyHighlights from "@/components/CompanyHighlights"
import NewsSection from "@/components/NewsSection"
import Footer from "@/components/Footer"
import { getHome } from "@/lib/api/home";
import { getMessageIconAreas } from "@/lib/api/message-icon-areas"
import { BoxMessageItem } from "@/components/BoxMessage";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";

interface Image {
  url: string
}

interface HomeData { 
  data: {
    PageTitle: string;
    TopBanner: Image[];
    TopMessage: BoxMessageItem[];
    TopVideoImage: Image;
    MessageLeftImg: Image;
    WhatsNewMessage: BoxMessageItem[];
    WhatsNewLinkText: string;
    Section2Banner: Image;
    Section2Image: Image;
    MessagRedArea: BoxMessageItem[];
    MessageBlackArea: BoxMessageItem[];
    Message: BoxMessageItem[];
    WhatsNewBoxImg1: Image;
    WhatsNewBoxImg2: Image;
    WhatsNewBoxImg3: Image;
    locale: string;
    localizations: HomeData[];
  };
}

interface MessageIconAreasData { 
  data: {
    Image: Image;
    Title: string;
    Description: BoxMessageItem[],
    locale: string;
    localizations: MessageIconAreasData[];
  };
}

export default function Home() {

  const [homeData, setHomeData] = useState<HomeData>();
  
  const { language } = useLanguage();

  useEffect(() => {
    const fetchHome = async () => {
      try {
        const data = await getHome(language);
        console.log("Fetched data:", data); // Log the fetched data to the console
        setHomeData(data);
      } catch (error) {
        console.error("Failed to load home years:", error);
        // Optionally, set a default or show an error message to the user
      }
    };

    fetchHome();
  }, [language]);

  return (
    <main className="min-h-screen">
      <Header />
      <HomeHero
        topMessage={homeData?.data.TopMessage || []}
        topBanner={homeData?.data.TopBanner || []}
        topVideoImage={homeData?.data.TopVideoImage || { url: "" }}
      />
      <BuildingSection 
        message={homeData?.data.Message || []} 
        messageLeftImage={homeData?.data.MessageLeftImg || { url: "" }}
      />
      <CoreValues />
      <CompanyHighlights
        messagRedArea={homeData?.data.MessagRedArea || []}
        messagBlackArea={homeData?.data.MessageBlackArea || []}
        Section2Banner={homeData?.data.Section2Banner || { url: "" }}
        Section2Image={homeData?.data.Section2Image || { url: "" }}
      />
      <NewsSection 
        whatsNewMessage={homeData?.data.WhatsNewMessage || []}
        whatsNewLinkText={homeData?.data.WhatsNewLinkText || ""}
        whatsNewBoxImg1={homeData?.data.WhatsNewBoxImg1 || { url: "" }}
        whatsNewBoxImg2={homeData?.data.WhatsNewBoxImg2 || { url: "" }}
        whatsNewBoxImg3={homeData?.data.WhatsNewBoxImg3 || { url: "" }}
      />
      <Footer />
    </main>
  )
}
