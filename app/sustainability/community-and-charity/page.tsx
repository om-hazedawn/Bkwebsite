"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

/**
 * Community and Charity Page Component
 * Displays community engagement and charitable activities
 */
export default function CommunityAndCharity() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const carouselApi = React.useRef<CarouselApi>(null);

  // Mock images array - replace with your actual images
  const carouselImages = [
    "/sustainability/banner/Corporate_banner.jpg",
    "/sustainability/banner/Qhsbanner.jpg",
    "/sustainability/banner/top1banner.jpg",
  ];

  // Auto-advance slides
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [carouselImages.length]);

  // Update carousel position when slide changes
  React.useEffect(() => {
    if (carouselApi.current) {
      carouselApi.current.scrollTo(currentSlide);
    }
  }, [currentSlide]);
  return (
    <main className="min-h-screen">
      <Header />
      <section className="container mx-auto py-12 bg-[#F1F1F1]">
        <div className="relative max-w-[1831px] w-full h-[740px] mx-auto">
          {/* <Image
              src=""
              alt="Sustainability View"
              fill
              className="object-cover"
              priority
            /> */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>

          {/* Overlay boxes - First Row */}
          <div className="absolute top-0 left-0 right-0 w-full">
            <div className="flex justify-center gap-0">
              <div className="relative w-[370px] h-[370px] bg-transparent"></div>
              <div className="relative w-[370px] h-[370px]"></div>
              <div className="w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#e63946]/80 text-white text-3xl">
                {/* Placeholder for future message content */}
              </div>
            </div>
          </div>

          {/* Overlay boxes - Second Row */}
          <div className="absolute top-[370px] left-0 right-0 w-full">
            <div className="flex justify-start gap-0">
              <div className="w-[945px] h-[370px] bg-black/40 text-white text-2xl flex flex-col items-start justify-center px-16 space-y-6">
                {/* Placeholder for future message content */}
              </div>
              <div className="relative w-[370px] h-[370px] bg-transparent"></div>
            </div>
          </div>
        </div>
        {/* Corporate Governance Section */}
        <div className="mt-20">
          <div className="container mx-auto max-w-6xl px-0">
            <h3 className="text-2xl font-bold mb-3 text-[#0099a7]">
              Community and Charity
            </h3>
            {/* Carousel Section */}
            <div className="mt-12 mb-16 max-w-full">
              <Carousel
                className="w-full max-w-full relative h-[600px] overflow-hidden mx-auto !p-0"
                setApi={(api: CarouselApi) => {
                  if (api) {
                    carouselApi.current = api;
                    api.on("select", () => {
                      setCurrentSlide(api.selectedScrollSnap());
                    });
                  }
                }}
              >
                <CarouselContent className="relative h-[600px] w-full [&>*]:w-full !p-0 !m-0">
                  {carouselImages.map((image, index) => (
                    <CarouselItem
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out w-full ${
                        currentSlide === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="relative h-[600px] w-full">
                        <Image
                          src={image}
                          alt={`Carousel slide ${index + 1}`}
                          fill
                          sizes="100vw"
                          className="object-cover object-center w-full"
                          priority={index === 0}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* Navigation dots */}
                <div className="absolute bottom-4 right-8 flex gap-2 z-40">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-4 h-4 transition-colors ${
                        currentSlide === index ? "bg-red-600" : "bg-white"
                      } hover:bg-red-700`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </Carousel>
            </div>
            <div className="grid grid-cols-1 justify-center mt-8">
              <p className="text-gray-600 leading-relaxed">
                Build King has been keen and dedicated in caring of the
                community and participating actively in charity work. In the
                past years we took part and contributed in many charity fund
                raising programs organized by various charity organizations,
                educational programs organized for students by local
                universities and territory institutions, on-job-training
                programs tailor-made for the graduated engineers, quantity
                surveyors and construction apprentices etc. In addition, we have
                set up a Recreational Committee since early 2008 to organise
                recreational activities for the staffs as well as participating
                in charity events and providing voluntary services to the
                public. Through public service events such as paying visits to
                the orphans, children and the singleton elders, we aim at
                promoting the spirit of mutual care and support among the staffs
                and to boost the staff`&apos;`s support and commitment in caring for
                the community.
              </p>
            </div>
          </div>
        </div>
        {/* Back Button Section */}
        <div className="container mx-auto max-w-6xl mt-8">
          <div className="flex items-center justify-end">
            <span
              className="text-gray-600 flex items-center cursor-pointer"
              onClick={() => router.back()}
            >
              <svg
                className="mr-1 w-6 h-6 text-gray-400"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ transform: "rotate(180deg)" }}
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Back
            </span>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
