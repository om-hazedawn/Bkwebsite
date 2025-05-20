"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Array of image sets (one set for each slide)
  const imageSets = [
    {
      topLeft: "/harbor-construction-top-left.jpeg",
      bottomLeft: "/modern-building.png",
      rightFull: "/harbor-construction.jpeg",
    },
    {
      topLeft: "/sleek-cityscape.png",
      bottomLeft: "/urban-development-nature.png",
      rightFull: "/harbor-construction-2.jpeg",
    },
    {
      topLeft: "/urban-infrastructure-progress.png",
      bottomLeft: "/modern-construction-hq.png",
      rightFull: "/harbor-construction-3.jpeg",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSets.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [imageSets.length])

  return (
    <section className="relative w-full">
      <div className="grid grid-cols-2">
        {/* Left column - split into two rows */}
        <div className="grid grid-rows-2">
          {/* Top left image */}
          <div className="relative h-[250px]">
            {imageSets.map((set, index) => (
              <div
                key={`top-left-${index}`}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={set.topLeft || "/placeholder.svg"}
                  alt={`Top left slide ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Bottom left image */}
          <div className="relative h-[250px]">
            {imageSets.map((set, index) => (
              <div
                key={`bottom-left-${index}`}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={set.bottomLeft || "/placeholder.svg"}
                  alt={`Bottom left slide ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right column - full height with teal overlay */}
        <div className="relative h-[500px]">
          {/* Background images */}
          {imageSets.map((set, index) => (
            <div
              key={`right-${index}`}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={set.rightFull || "/placeholder.svg"}
                alt={`Right slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}

          {/* Teal overlay with text - fixed position */}
          <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-[#35b3a7] bg-opacity-80 text-white p-8 flex flex-col justify-center z-10">
            <h1 className="text-3xl font-bold mb-6">Build King</h1>
            <ul className="space-y-2">
              <li className="text-xl">Integrity</li>
              <li className="text-xl">Innovation</li>
              <li className="text-xl">Professionalism</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 right-8 flex space-x-2">
        {imageSets.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full border border-gray-400 ${
              index === currentImageIndex ? "bg-[#e63946]" : "bg-white"
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
