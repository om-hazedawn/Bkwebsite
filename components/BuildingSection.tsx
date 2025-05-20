"use client"

import Image from "next/image"
import buildingImage from "@/public/bk_home1_img1.jpg"

export default function BuildingSection() {
  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="flex flex-col md:flex-row h-full shadow-lg bg-[#4d4d4d]">
      {/* Left Side - Image */}
      <div className="md:w-1/3 w-full h-40 md:h-auto md:aspect-square">
        <Image
          src={buildingImage}
          alt="Building and Tree"
          className="w-full h-full object-cover rounded-l"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="md:w-2/3 w-full text-white p-6 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4">
          A <span className="text-white">leading</span>
          <br />
          <span className="font-normal">construction company</span>
        </h1>
        <p className="text-lg">
          <strong>Build King</strong> is one of the top construction companies in Hong Kong and the preferred partner for customers, subcontractors, suppliers and joint ventures.
        </p>
      </div>
      </div>
    </div>
  )
}
