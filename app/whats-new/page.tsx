"use client"

import { useState, Suspense } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import WhatsNewList, { YearData } from "@/components/WhatsNewList"
import WhatsNewDetail from "@/components/WhatsNewDetail"

const dummyData: YearData[] = [
  {
    year: "2025",
    news: [
      {
        id: "2025-1",
        heading: "Build King Announces Major Infrastructure Project",
        date: "03 April 2025",
        description: "Build King Holdings Limited is pleased to announce the successful acquisition of a major infrastructure development project valued at HK$2.5 billion. This project will strengthen our position in the construction industry and contribute to Hong Kong's development."
      },
      {
        id: "2025-2",
        heading: "Sustainability Achievement Recognition",
        date: "15 March 2025",
        description: "Build King has been awarded the Green Construction Excellence Award for our commitment to sustainable construction practices and environmental protection initiatives."
      }
    ]
  },
  {
    year: "2024",
    news: [
      {
        id: "2024-1",
        heading: "New Technology Implementation",
        date: "20 December 2024",
        description: "Build King successfully implements state-of-the-art BIM technology across all major projects, enhancing efficiency and project delivery capabilities."
      },
      {
        id: "2024-2",
        heading: "Community Engagement Initiative",
        date: "05 September 2024",
        description: "Launch of Build King Community Program, aimed at supporting local education and environmental conservation efforts."
      }
    ]
  },
  {
    year: "2023",
    news: [
      {
        id: "2023-1",
        heading: "Record-Breaking Project Completion",
        date: "30 November 2023",
        description: "Build King completes the landmark harbor development project ahead of schedule, setting new industry standards for project management and execution."
      },
      {
        id: "2023-2",
        heading: "Innovation Award",
        date: "18 July 2023",
        description: "Build King receives the Construction Innovation Award for pioneering new construction methodologies that improve safety and efficiency."
      }
    ]
  }
];

export default function WhatsNew() {
  const [, setSelectedType] = useState("news");

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero section */}
      <section className="relative">
        <div className="relative max-w-[1540px] w-full h-[740px] mx-auto">
          <Image
            src="/contact/conatactus_whatsnew.png"
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
              <div className="relative w-[370px] h-[370px] px-8 py-8 flex items-end justify-start bg-[#35b3a7]/80 text-white">
                <p className="text-3xl">Let&apos;s build a better future</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-center">
            <div>
              <Suspense fallback={<div>Loading...</div>}>
                <WhatsNewList years={dummyData} onSelect={() => setSelectedType("news")} />
              </Suspense>
            </div>
            <div className="result_box">
              <Suspense fallback={<div>Loading...</div>}>
                <WhatsNewDetail years={dummyData} />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}