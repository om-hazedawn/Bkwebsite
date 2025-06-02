'use client';

import * as React from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
// import setupFade from 'embla-carousel-fade';

interface ImageSlideshowProps {
  images: Array<{
    url: string;
    alt?: string;
    width?: number;
    height?: number;
  }>;
}

export function ImageSlideshow({ images }: ImageSlideshowProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  // const [count, setCount] = React.useState(0);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    // setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // Start automatic slideshow
    intervalRef.current = setInterval(() => {
      if (api.selectedScrollSnap() === api.scrollSnapList().length - 1) {
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
    }, 5000); // Change image every 5 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api]);

  return (
    <Carousel setApi={setApi} className="w-full max-w-xs mx-auto relative" >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
                  <Image
                    src={image.url}
                    alt={image.alt || `Image ${index + 1}`}
                    width={image.width || 500}
                    height={image.height || 300}
                    layout="responsive"
                    objectFit="contain"
                  />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-2 right-2 flex space-x-1">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-4 h-4 bg-gray-300 rounded-sm ${current === idx + 1 ? 'bg-red-500' : ''}`}
            onClick={() => api && api.scrollTo(idx)}
          />
        ))}
      </div>
    </Carousel>
  );
}