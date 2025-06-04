"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getWhoWeAre } from "@/lib/api/who-we-are";
import { BoxMessageItem } from "@/components/BoxMessage";
import BoxMessage from "@/components/BoxMessage";
import { getMilestone } from "@/lib/api/milestone";
import { useLanguage } from "@/contexts/language-context";

interface WhoWeAreData { 
  data: {
    PageTitle: string;
    BoxMessageBlack: BoxMessageItem[];
    BoxMessageTurquoise: BoxMessageItem[];
    BoxMessageRed: BoxMessageItem[];
    Message: BoxMessageItem[];
    Detail: BoxMessageItem[];
    locale: string;
    MainImage: {"url": string};
    SecondBannerBackground: {"url": string};
    localizations: WhoWeAreData[];
  };
}

interface MileStone {
  Title: string;
  Description: string;
}

interface MilestoneData { 
  data: {
    PageTitle: string;
    Milestones: MileStone[];
    localizations: MilestoneData[];
  };
}

export default function AboutUs() {
  const { language } = useLanguage();
  const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_URL || 'http://52.175.21.181';
  const [selectedSection, setSelectedSection] = useState("who-we-are");
  const [whoWeAreData, setWhoWeAreData] = useState<WhoWeAreData>();
  const [milestoneData, setMilestoneData] = useState<MilestoneData>();

  useEffect(() => {
    const fetchWhoWeAreData = async () => {
      const data = await getWhoWeAre(language);
      console.log("Fetched data:", data); // Log the fetched data to the console
      setWhoWeAreData(data);
    };
    fetchWhoWeAreData();
  }, [language]);

  useEffect(() => {
    const fetchMilestoneData = async () => {
      const data = await getMilestone(language);
      console.log("Fetched milestone data:", data); // Log the fetched data to the console
      setMilestoneData(data);
    };

    fetchMilestoneData();
  }, [language]);

  if (!whoWeAreData) {
    return <div>Loading...</div>; // Or a more sophisticated loading component
  }

  const renderContent = () => {
    switch (selectedSection) {
      case "who-we-are":
        return (
          <div>
            <div className="relative max-w-[1690px] w-full h-[740px] mx-auto">
              <Image
                src={cmsBaseUrl + whoWeAreData.data.MainImage.url}
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
                  <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-starttext-white transition-colors text-white bg-[#838182]/50">
                    <h3 className="text-3xl font-normal">
                      <BoxMessage items={whoWeAreData.data.BoxMessageBlack}></BoxMessage>
                    </h3>
                  </div>

                  {/* Second box - with bg-[#35b3a7] */}

                  <div className="relative w-[370px] h-[370px]"></div>

                  {/* Third box - with bg-[#e63946] */}
                  
                  <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#E63946D6] text-white">
                    <h3 className="text-3xl font-normal">
                    <BoxMessage items={whoWeAreData.data.BoxMessageRed}></BoxMessage>
                    </h3>
                  </div>
                  
                </div>
              </div>

              {/* Overlay boxes - Second Row */}
              <div className="absolute top-[372px] left-0 right-0 w-full">
                <div className="flex justify-center">
                  {/* First box - with shadow */}
                  <div className="relative w-[370px] h-[370px]"></div>

                  {/* Second box - with bg-[#35b3a7] */}
                  
                  <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start text-white bg-[#35B3A7D6]">
                    <h3 className="text-3xl font-normal">
                    <BoxMessage items={whoWeAreData.data.BoxMessageTurquoise}></BoxMessage>
                    </h3>
                  </div>
                  

                  {/* Third box - with bg-[#e63946] */}
                  <div className="relative w-[370px] h-[370px]"></div>
                </div>
              </div>
            </div>
            <div className="relative mx-auto w-[1535px] h-[300px] group">
              <Image
                src={cmsBaseUrl + whoWeAreData.data.SecondBannerBackground.url}
                alt="About us frame"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="text-white text-4xl w-[1300px] font-normal">
                  <BoxMessage items={whoWeAreData.data.Message}></BoxMessage>
                </div>
              </div>
            </div>

            {/* Who We Are Section */}
            <div className="mt-16 max-w-[1000px] mx-auto">
              <BoxMessage items={whoWeAreData.data.Detail} />
            </div>
          </div>
        );
      case "milestones":

        return (
          <div className="mx-auto max-w-[1200px] relative py-25">
            <div
              className="absolute w-[1px] bg-black left-1/2 -translate-x-1/2"
              style={{ top: "-8rem", bottom: "-8rem" }}
            />
            {milestoneData?.data.Milestones.map((item, idx) => (
              <div key={idx} className="relative mb-60">
                <div className="flex justify-center">
                  <div className="flex justify-between items-center w-full max-w-[900px]">
                    {/* Image Side */}
                    <div
                      className={`absolute ${
                        idx % 2 === 0
                          ? "left-1/2"
                          : "left-1/2 -translate-x-[247px]"
                      }`}
                    >
                      {/* Timeline dot positioned at corner */}
                      <div
                        className={`absolute ${
                          idx % 2 === 0
                            ? "left-0 -translate-x-[10px]"
                            : "right-0 translate-x-[10px]"
                        } -top-[10px]`}
                      >
                        <div className="w-5 h-5 bg-[#D0374C] rounded-full border-2 border-white z-10" />
                      </div>

                      <Image
                        src={cmsBaseUrl +　item.Title}
                        alt={''}
                        width={247}
                        height={247}
                      />
                    </div>

                    {/* Content Side */}
                    <div
                      className={`w-[400px] ${idx % 2 === 0 ? "" : "ml-auto"}`}
                    >
                      <div className="py-6 mt-12">
                        <p className={`text-[#0099A7] text-4xl font-bold mb-2 ${idx % 2 === 0 ? "text-right" : "text-left"}`}>
                          {item.Description.substring(0, 4)}
                        </p>
                        <p className={`text-gray-700 text-lg ${idx % 2 === 0 ? "text-right" : "text-left"}`}>
                          {item.Description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case "management":
        return (
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-normal mb-12 text-[#838182]">
              Board of Directors
            </h2>

            <div className="flex flex-col md:flex-row md:gap-16 lg:gap-24">
              <div>
                <h3 className="text-[20px] font-bold mb-4 text-[#0099a7]">
                  EXECUTIVE DIRECTORS
                </h3>
                <div className="grid grid-cols-1 gap-4 text-lg text-[#838182]">
                  <p>ZEN Wei Peu, Derek (Chairman)</p>
                  <p>LUI Yau Chun, Paul (Chief Operating Officer)</p>
                  <p>TSUI Wai Tim</p>
                  <p>CHAN Chi Ming, Benson</p>
                </div>
              </div>

              <div>
                <h3 className="text-[20px] font-bold mb-4 text-[#0099a7]">
                  NON-EXECUTIVE DIRECTORS
                </h3>
                <div className="grid grid-cols-1 gap-4 text-lg text-[#838182]">
                  <p>GEM David Howard</p>
                  <p>CHAN Chi Hung, Anthony</p>
                  <p>CHANG Kam Chuen, Desmond</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[20px] font-bold mb-4 mt-12 text-[#0099a7]">
                INDEPENDENT NON-EXECUTIVE DIRECTORS
              </h3>
              <div className="grid grid-cols-1 gap-4 text-lg text-[#838182]">
                <p>HO Tai Wai, David</p>
                <p>LING LEE Ching Man, Eleanor</p>
                <p>LO Yiu Ching, Dantes</p>
                <p>NG Cheuk Hei, Shirley</p>
              </div>
            </div>

            <div>
                <h3 className="text-[20px] font-bold mb-4 mt-12 text-[#0099a7]">SENIOR MANAGEMENT</h3>
                <div className="grid grid-cols-1 gap-4 text-lg text-[#838182]">
                  <p>CHAN Wing Ho, Vincent - Civil</p>
                  <p>CHEUNG Siu Lun - Senior Consultant</p>
                  <p>FONG Wai Pan, Felix - Building (Head of Building)</p>
                  <p>KWOK Chi Ko, Enmale (Head of Commercial)</p>
                  <p>LEE Man Wai - Estimating</p>
                  <p>LIU Hoi Yu, Paul - Building</p>
                  <p>LIU Sing Pang, Simon - Civil</p>
                  <p>SO Yiu Wing, Wilfred - Civil (Head of Civil)</p>
                  <p>TSE Mau Kay, Keith - Civil</p>
                  <p>YIU Cheuk Hung, Kenneth - Building</p>
                  <p>YU Man Kit, Andy - Civil</p>
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
      <section className="container mx-auto py-12">
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <div
            className="cursor-pointer"
            onClick={() => setSelectedSection("who-we-are")}
          >
            <h3
              className={`text-xl  mb-3 ${
                selectedSection === "who-we-are"
                  ? "text-[#0099a7]"
                  : "text-gray-600"
              }`}
            >
              Who We Are
            </h3>
            <Image
              src="/about-us/Whoweare.png"
              alt="Who we are"
              width={350}
              height={218}
              className="object-cover"
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setSelectedSection("milestones")}
          >
            <h3
              className={`text-xl  mb-3 ${
                selectedSection === "milestones"
                  ? "text-[#0099a7]"
                  : "text-gray-600"
              }`}
            >
              Milestones
            </h3>
            <Image
              src="/about-us/milestone.jpg"
              alt="Milestone"
              width={350}
              height={218}
              className="object-cover"
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setSelectedSection("management")}
          >
            <h3
              className={`text-xl  mb-3 ${
                selectedSection === "management"
                  ? "text-[#0099a7]"
                  : "text-gray-600"
              }`}
            >
              Our Management
            </h3>
            <Image
              src="/about-us/ourmanagement.png"
              alt="Our management"
              width={350}
              height={218}
              className="object-cover"
            />
          </div>
        </div>
        <div
          className={`container mx-auto mb-20 ${
            selectedSection === "milestones" ? "mt-48" : "mt-0"
          }`}
        >
          {renderContent()}
        </div>
      </section>
      <Footer />
    </main>
  );
}
