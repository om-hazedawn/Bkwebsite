"use client"

import Image from "next/image"

export default function CompanyHighlights() {
  return (
    <section className="relative">
      <div className="relative h-[735px]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/new folder/1308_KTPS_2_r1_compress.webp"
            alt="Company background"
            fill
            className="object-cover"
          />
        </div>

        {/* First Overlay block - Professional count */}
        <div className="absolute top-0 left-64 text-white flex flex-col">
          <div className="bg-[#a91127]/80 text-white px-12 py-12 flex flex-col justify-center w-[350px] h-[370px]">
            <h2 className="text-3xl font-medium mb-2">
              More than 300
            </h2>
            <h2 className="text-3xl font-medium ">
              professional
            </h2>
            <p className="text-lg">
              engineers and commercial specialists
            </p>
          </div>
        </div>

        {/* History Overlay block */}
        <div className="absolute bottom-0 left-[606px] right-0 text-white flex flex-col">
          <div className="bg-gray-800/80 text-white px-12 py-12 flex flex-col justify-center w-full h-[365px]">
            <h2 className="text-3xl font-medium mb-6">
              About us
            </h2>
            <h3 className="text-2xl font-medium mb-4">
              History
            </h3>
            <p className="text-lg leading-relaxed">
              We have over 45 years of experience in civil engineering and building construction and a proud track record of high-quality construction projects.
            </p>
          </div>
        </div>

        {/* Bottom overlay block with image */}
        <div className="absolute bottom-0 left-0">
          <div className="w-[606px] h-[365px] relative">
            <Image
              src="/new folder/K0903 TKO_1_r1.jpg"
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
