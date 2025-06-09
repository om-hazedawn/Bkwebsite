"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import BoxMessage, { BoxMessageItem } from "@/components/BoxMessage";
import CurrentVacanciesList from "@/components/CurrentVacanciesList";
import { getCareer } from "@/lib/api/career";
import { getCareerDetail } from "@/lib/api/career-detail";
import { getJobOpportunity } from "@/lib/api/job-opportunity";
import { useLanguage } from "@/contexts/language-context";
import { getTraining } from "@/lib/api/training";
import { getTrainingCollections } from "@/lib/api/training-collections";
import TrainingSection from "@/components/TrainingSection";

interface Image {
  url: string
}

interface CareerData { 
  data: {
    Title1ParentMenuBox: string;
    Title1ImageParentMenuBox: Image;
    Title2ParentMenuBox: string;
    Title2ImageParentMenuBox: Image;
    Title3ParentMenuBox: string;
    Title3ImageParentMenuBox: Image;
    locale: string;
    localizations: CareerData[];
  };
}

interface CareerDetailData { 
  data: {
    Detail: BoxMessageItem[];
    locale: string;
    localizations: CareerDetailData[];
  };
}

interface JobOpportunityData { 
  data: {
    PageTitle: string;
    MainImage: Image;
    MessageRedArea: BoxMessageItem[];
    MessageBlackArea: BoxMessageItem[];
    Detail: BoxMessageItem[];
    locale: string;
    localizations: JobOpportunityData[];
  };
}

interface TrainingData { 
  data: {
    PageTitle: string;
    Detail: BoxMessageItem[];
    Detail2: BoxMessageItem[];
    Detail3: BoxMessageItem[];
    locale: string;
    localizations: TrainingData[];
  };
}

interface TrainingCollectionsData { 
  data: {
    id: number;
    Title: string;
    Description: string;
    Images: { url: string }[];
    locale: string;
    localizations: TrainingCollectionsData[];
  }[];
}

export default function Careers() {
  // const [jobIsOpen, setJobIsOpen] = useState<Record<number, boolean>>({});
  const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_URL || 'http://52.175.21.181';
  const [selectedSection, setSelectedSection] = useState("career");
  const [careerData, setCareerData] = useState<CareerData>();
  const [careerDetailData, setCareerDetailData] = useState<CareerDetailData>();
  const [jobOpprtunityData, setJobOpportunityData] = useState<JobOpportunityData>();
  const [trainingData, setTrainingData] = useState<TrainingData>();
  const [trainingCollectionsData, setTrainingCollectionsData] = useState<TrainingCollectionsData>();
  const { language } = useLanguage();

  useEffect(() => {
    const fetchCareerData = async () => {
      const data = await getCareer(language);
      console.log("Fetched data:", data); // Log the fetched data to the console
      setCareerData(data);
    };
    fetchCareerData();
  }, [language]);

  useEffect(() => {
    const fetchCareerData = async () => {
      try {
        const data = await getCareerDetail(language);
        console.log("Fetched data:", data); // Log the fetched data to the console
        setCareerDetailData(data);
      } catch (error) {
        console.error("Failed to load career details:", error);
        // Optionally, set a default or show an error message to the user
      }
    };
    fetchCareerData();
  }, [language]);

  useEffect(() => {
    const fetchJobOpportunityData = async () => {
      try {
        const data = await getJobOpportunity(language);
        console.log("Fetched data:", data); // Log the fetched data to the console
        setJobOpportunityData(data);
      } catch (error) {
        console.error("Failed to load job opportunity details:", error);
        // Optionally, set a default or show an error message to the user
      }
    };
    fetchJobOpportunityData();
  }, [language]);

  useEffect(() => {
    const fetchTrainingData = async () => {
      try {
        const data = await getTraining(language);
        console.log("Fetched data:", data); // Log the fetched data to the console
        setTrainingData(data);
      } catch (error) {
        console.error("Failed to load training details:", error);
        // Optionally, set a default or show an error message to the user
      }
    };
    fetchTrainingData();
  }, [language]);

  useEffect(() => {
    const fetchTrainingCollectionsData = async () => {
      try {
        const data = await getTrainingCollections(language);
        console.log("Fetched data:", data); // Log the fetched data to the console
        setTrainingCollectionsData(data);
      } catch (error) {
        console.error("Failed to load training collections details:", error);
        // Optionally, set a default or show an error message to the user
      }
    };
    fetchTrainingCollectionsData();
  }, [language]);



  const renderContent = () => {
    switch (selectedSection) {
      case "career":
        return (
          <div className="max-w-[1115px] mx-auto py-6">
            <BoxMessage items={careerDetailData?.data.Detail || []}/>
          </div>
        );
      case "job-opportunities":
        return (
          <div>
            <div className="relative max-w-[1831px] w-full h-[740px] mx-auto">
              <Image
                src="/Career/career_banner.jpg"
                alt="Job opportunities"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>

              {/* Overlay boxes - First Row */}
              <div className="absolute top-0 left-0 right-0 w-full">
                <div className="flex justify-center space-x-0">
                  <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#838182]/70 text-white">
                    <h3 className="text-3xl font-normal">
                      <BoxMessage items={jobOpprtunityData?.data.MessageBlackArea || []} />
                    </h3>
                  </div>

                  <div className="relative w-[370px] h-[370px]"></div>

                  <div className="relative w-[370px] h-[370px]"></div>
                </div>
              </div>

              {/* Overlay boxes - Second Row */}
              <div className="absolute top-[370px] left-0 right-0 w-full">
                <div className="flex justify-center space-x-0">
                  <div className="relative w-[370px] h-[370px]"></div>

                  <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#E63946D6] text-white">
                    <h3 className="text-3xl font-normal">
                      <BoxMessage items={jobOpprtunityData?.data.MessageRedArea || []} />
                    </h3>
                  </div>

                  <div className="relative w-[370px] h-[370px]"></div>
                </div>
              </div>
            </div>

            {/* Job Overview Section */}
            <div className="max-w-[1115px] mx-auto py-12">
              <BoxMessage items={jobOpprtunityData?.data.Detail || []} />
            </div>

            {/* Current Vacancies Section */}
            <div className="pl-48"><CurrentVacanciesList /></div>
            
          </div>
        );
      case "training":
        return (
          <div className="max-w-[1115px] mx-auto py-6">
            <h2 className="text-3xl font-semibold mb-8 text-[#838182]">
              {trainingData?.data.PageTitle || ""}
            </h2>
            <div className="text-[#838182] space-y-6">
              <BoxMessage items={trainingData?.data.Detail || []} />
            </div>

            <TrainingSection data={trainingCollectionsData?.data || []} />

            <div className="text-[#838182] mt-16">
              <BoxMessage items={trainingData?.data.Detail2 || []} />

              <hr className="my-8 border-[#838182]" />

              <BoxMessage items={trainingData?.data.Detail3 || []} />
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
            onClick={() => setSelectedSection("career")}
          >
            <h3
              className={`text-xl mb-3 ${
                selectedSection === "career"
                  ? "text-[#0099a7]"
                  : "text-gray-600"
              }`}
            >
              {careerData?.data.Title1ParentMenuBox}
            </h3>
            <Image
              src={cmsBaseUrl + careerData?.data.Title1ImageParentMenuBox.url}
              alt="Career at BK"
              width={350}
              height={218}
              className="object-cover"
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setSelectedSection("job-opportunities")}
          >
            <h3
              className={`text-xl mb-3 ${
                selectedSection === "job-opportunities"
                  ? "text-[#0099a7]"
                  : "text-gray-600"
              }`}
            >
              {careerData?.data.Title2ParentMenuBox}
            </h3>
            <Image
              src={cmsBaseUrl + careerData?.data.Title2ImageParentMenuBox.url}
              alt="Job Opportunities"
              width={350}
              height={218}
              className="object-cover"
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setSelectedSection("training")}
          >
            <h3
              className={`text-xl mb-3 ${
                selectedSection === "training"
                  ? "text-[#0099a7]"
                  : "text-gray-600"
              }`}
            >
              {careerData?.data.Title3ParentMenuBox}
            </h3>
            <Image
              src={cmsBaseUrl + careerData?.data.Title3ImageParentMenuBox.url}
              alt="Training and Development"
              width={350}
              height={218}
              className="object-cover"
            />
          </div>
        </div>
        <div className="container mx-auto mb-20 bg-white">{renderContent()}</div>
      </section>
      <Footer />
    </main>
  );
}