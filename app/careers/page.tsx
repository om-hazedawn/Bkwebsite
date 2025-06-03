"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";


export default function Careers() {
  const [selectedSection, setSelectedSection] = useState("career");
 

  const renderContent = () => {
    switch (selectedSection) {
      case "career":
        return (
          <div className="max-w-[1115px] mx-auto py-6">
            <h2 className="text-3xl font-semibold mb-8 text-[#838182]">
              Careers Opportunity
            </h2>
            <p className="text-[#838182] mb-10">
              Build King Holdings Limited, one of the leading construction
              groups in Hong Kong. With over 45 years of experiences in civil
              engineering and building construction, we have a long and proud
              track record of applying innovative solution to the development
              and management of high-quality, construction projects. The Group
              has over 3,000 employees and is always recruiting new talents to
              contribute to our business growth.
            </p>
            <div className="flex justify-start mb-12">
              <Image
                src="/Career/MD.png"
                alt="Career MD"
                width={230}
                height={130}
                className="object-cover"
              />
            </div>
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-6 text-[#838182]">
                Build King Alumni
              </h3>
              <p className="text-[#838182] mb-8">
                Please click below to join our Alumni to stay connected with us
                about job opportunities, career events and news!
              </p>
            </div>
            <div className="flex justify-start">
              <Image
                src="/Career/BKAlumni.png"
                alt="BK Alumni"
                width={888}
                height={369}
                className="object-cover"
              />
            </div>
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
                      We are looking for suitable and qualified candidates
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
                      We continue to <br/> <strong>invest in our people</strong>
                    </h3>
                  </div>

                  <div className="relative w-[370px] h-[370px]"></div>
                </div>
              </div>
            </div>

            {/* Job Overview Section */}
            <div className="max-w-[1115px] mx-auto py-12">
              <h2 className="text-3xl font-semibold mb-8 text-[#838182]">
                Job Overview
              </h2>
              <p className="text-[#838182] mb-6 text-lg">
                Thank you for your interest in joining Build King Group. You may submit job applications via one of the following channels:
              </p>
              
              <div className="text-[#838182] mb-6">
                <h3 className="mb-2 text-xl">1)Online Application</h3>
                <p className="text-lg">Please click &quot;Apply Online&quot; (under the position applied for) to complete and submit the online application form.</p>
              </div>
              
              <div className="text-[#838182] mb-6">
                <h3 className="mb-2 text-xl">2) By Email</h3>
                <p className="text-lg">Please send your application with full resume and expected salary via email <a href="mailto:hr@buildking.hk" className="text-[#0099a7] hover:underline">hr@buildking.hk</a></p>
              </div>
              
              <div className="text-[#838182] mb-6">
                <h3 className="mb-2 text-xl">3) By Mail</h3>
                <p className="text-lg">Please send your application with full resume and expected salary to Human Resources Department, Units 601-605A, 6/F, Tower B, Manulife Financial Centre, 223 Wai Yip Street, Kwun Tong, Kowloon, Hong Kong.</p>
              </div>
              
              <p className="text-[#838182] text-lg">
                All information provided will be treated in strict confidence and be used only for consideration of your application for relevant / similar positions. All personal data of unsuccessful applicants will be destroyed within 12 months from the date of application.
              </p>
            </div>
          </div>
        );
      case "training":
        return (
          <div>
            <h2>hi2 </h2>
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
              Careers
            </h3>
            <Image
              src="/Career/Careers.jpg"
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
              Job Opportunities
            </h3>
            <Image
              src="/Career/job_vacancy.png"
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
              Training and Development
            </h3>
            <Image
              src="/Career/traning.png"
              alt="Training and Development"
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
