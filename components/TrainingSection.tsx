import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

interface TrainingCollectionItem {
  id: number;
  Title: string;
  Description: string;
  Images: { url: string }[];
  locale: string;
}

interface TrainingSectionProps {
  data: TrainingCollectionItem[];
}

const backgroundColors = [
  "#33b9af",
  "#4A4A4A",
  "#D0374C",
  // Add more colors if there are more than 3 training programs
];

export default function TrainingSection({ data }: TrainingSectionProps) {
  const carouselApis = useRef<Array<CarouselApi | null>>([]);
  const [currentSlides, setCurrentSlides] = useState<number[]>([]);
  const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_URL || 'https://bk-data-migrate.onrender.com';

  useEffect(() => {
    if (data) {
      setCurrentSlides(new Array(data.length).fill(0));
      carouselApis.current = new Array(data.length).fill(null);
    }
  }, [data]);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    data.forEach((_, index) => {
      timers.push(setInterval(() => {
        setCurrentSlides(prev => {
          const newSlides = [...prev];
          newSlides[index] = (newSlides[index] + 1) % (data[index]?.Images?.length || 1);
          return newSlides;
        });
      }, 3500 + index * 500)); // Staggered auto-advance
    });
    return () => timers.forEach(clearInterval);
  }, [data]);

  useEffect(() => {
    currentSlides.forEach((slide, index) => {
      if (carouselApis.current[index]) {
        carouselApis.current[index]?.scrollTo(slide);
      }
    });
  }, [currentSlides]);

  if (!data || data.length === 0) {
    return null; // Or a loading spinner, or a message
  }

  return (
    <div className="space-y-12 mt-8">
      {data.map((program, programIndex) => (
        <section key={program.id} className="w-[1110px] h-[370px] mx-auto">
          <div className="flex h-full">
            {/* Carousel Section */}
            <div className="relative w-[370px] h-[370px]">
              <Carousel
                className="w-full h-full"
                setApi={(api: CarouselApi) => {
                  carouselApis.current[programIndex] = api;
                  if (api) {
                    api.on("select", () => {
                      setCurrentSlides(prev => {
                        const newSlides = [...prev];
                        newSlides[programIndex] = api.selectedScrollSnap();
                        return newSlides;
                      });
                    });
                  }
                }}
              >
                <CarouselContent>
                  {program.Images.map((image, imageIndex) => (
                    <CarouselItem key={imageIndex} className="h-[370px]">
                      <div className="relative w-full h-full">
                        <Image
                          src={cmsBaseUrl + image.url}
                          alt={`${program.Title} slide ${imageIndex + 1}`}
                          fill
                          className="object-cover"
                          priority={imageIndex === 0}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* Navigation dots */}
                <div className="absolute bottom-4 right-8 flex gap-2 z-40">
                  {program.Images.map((_, dotIndex) => (
                    <button
                      key={dotIndex}
                      onClick={() => setCurrentSlides(prev => {
                        const newSlides = [...prev];
                        newSlides[programIndex] = dotIndex;
                        return newSlides;
                      })}
                      className={`w-4 h-4 transition-colors ${
                        currentSlides[programIndex] === dotIndex ? 'bg-red-600' : 'bg-white'
                      } hover:bg-red-700`}
                      aria-label={`Go to slide ${dotIndex + 1}`}
                    />
                  ))}
                </div>
              </Carousel>
            </div>

            {/* Text Section */}
            <div
              className="flex-1 text-white p-6 flex flex-col justify-center"
              style={{ backgroundColor: backgroundColors[programIndex % backgroundColors.length] }}
            >
              <h2 className="text-2xl font-bold mb-4">{program.Title}</h2>
              <p className="text-base leading-relaxed">
                {program.Description}
              </p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}