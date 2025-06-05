"use client"

import Image from "next/image"
import { BoxMessageItem } from "@/components/BoxMessage";
import BoxMessage from "@/components/BoxMessage";

interface Image {
  url: string
}

interface CompanyHighlightsProps {
  messagRedArea: BoxMessageItem[];
  messagBlackArea: BoxMessageItem[];
  Section2Banner: Image;
  Section2Image: Image;
}

export default function CompanyHighlights({ messagRedArea, messagBlackArea, Section2Banner, Section2Image }: CompanyHighlightsProps) {

  const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_URL || 'https://bk-data-migrate.onrender.com';

  return (
    <section className="relative">
      <div className="relative h-[735px]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={cmsBaseUrl + Section2Banner.url}
            alt="Company background"
            fill
            className="object-cover"
          />
        </div>

        {/* First Overlay block - Professional count */}
        <div className="absolute top-0 left-60 text-white flex flex-col">
          <div className="bg-[#a91127]/80 text-white px-12 py-12 flex flex-col justify-center w-[370px] h-[370px]">
            {/* <h2 className="text-3xl font-medium mb-2">
              More than 300
            </h2>
            <h2 className="text-3xl font-medium ">
              professional
            </h2>
            <p className="text-lg">
              engineers and commercial specialists
            </p> */}
            <BoxMessage items={messagRedArea} />
          </div>
        </div>

        {/* History Overlay block */}
        <div className="absolute bottom-0 left-[606px] right-0 text-white flex flex-col">
          <div className="bg-gray-800/80 text-white px-12 py-12 flex flex-col justify-center w-full h-[365px]">
            {/* <h2 className="text-3xl font-medium mb-6">
              About us
            </h2>
            <h3 className="text-2xl font-medium mb-4">
              History
            </h3>
            <p className="text-lg leading-relaxed">
              We have over 45 years of experience in civil engineering and building construction and a proud track record of high-quality construction projects.
            </p> */}
            <BoxMessage items={messagBlackArea} />
          </div>
        </div>

        {/* Bottom overlay block with image */}
        <div className="absolute bottom-0 left-0">
          <div className="w-[606px] h-[365px] relative">
            <Image
              src={cmsBaseUrl + Section2Image.url}
              alt="Company overlay"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
