"use client";

import React from "react";
import Image from "next/image";
// import { useLanguage } from "@/contexts/language-context";
// import { locales } from "@/locales";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { BoxMessageItem } from "@/components/BoxMessage";
import BoxMessage from "@/components/BoxMessage";

interface Image {
  url: string
}

interface HomeHeroProps {
  topMessage: BoxMessageItem[];
  topBanner: Image[];
  topVideoImage: Image;
}

export default function HomeHero({ topMessage, topBanner, topVideoImage }: HomeHeroProps) {
  // const { language } = useLanguage();
  // const t = locales[language];
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const carouselApi = React.useRef<CarouselApi>(null);
  const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_URL || 'https://bk-data-migrate.onrender.com';

  // Auto-advance slides
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % topBanner.length);
    }, 3500); // Change slide every 5 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, [topBanner.length]);

  // Update carousel position when slide changes
  React.useEffect(() => {
    if (carouselApi.current) {
      carouselApi.current.scrollTo(currentSlide);
    }
  }, [currentSlide]);

  return (
    <section className="relative w-full">
      <div className="relative">
        {/* Build King Values Overlay - Moved outside carousel */}
        <div className="absolute left-48 bottom-[320px] z-10 text-white">
          <div className="bg-[#1aabaf]/80 text-white px-12 py-12 flex flex-col w-[307px] h-[280px]">
            <div className="mt-12">
              {/* <h2 className="text-3xl font-medium mb-6">
                {t.hero.buildKing}
              </h2>
              <ul className="space-y-4 text-lg">
                <li>{t.hero.integrity}</li>
                <li>{t.hero.innovation}</li>
                <li>{t.hero.professionalism}</li>
              </ul> */}
              <BoxMessage items={topMessage} />  
            </div>
          </div>
        </div>

        {/* Overlay Image */}
        <div className="absolute top-[280px] left-0 z-20 w-[500px] h-[320px]">
          <Image
            src={cmsBaseUrl + topVideoImage.url}
            alt="Modern Building"
            fill
            className="object-cover"
          />
        </div>

        <Carousel
          className="w-full relative h-[600px] overflow-hidden"
          setApi={(api: CarouselApi) => {
            if (api) {
              carouselApi.current = api;
              api.on("select", () => {
                setCurrentSlide(api.selectedScrollSnap());
              });
            }
          }}
        >
          <CarouselContent className="relative h-[600px]">
            {topBanner.map((image, index) => (
              <CarouselItem
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="relative h-[600px] w-full">
                  <Image
                    src={cmsBaseUrl + image.url}
                    alt={`Hero slide ${index + 1}`}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Navigation dots */}
          <div className="absolute bottom-4 right-8 flex gap-2 z-40">
            {topBanner.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 transition-colors ${
                  currentSlide === index ? 'bg-red-600' : 'bg-white'
                } hover:bg-red-700`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>

        {/* Build King Values Section */}
      </div>
    </section>
  );
}
