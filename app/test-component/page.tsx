'use client'

import React, { useState, useEffect } from 'react';
import { ImageSlideshow } from '@/components/ImageSlideshow';
// import AnnualReportList from '@/components/AnnualReportList'; // Adjust path if necessary
import CircularsList from '@/components/CircularsList'; // Adjust path if necessary
import { getCommunityAndCharity } from '@/lib/api/community-and-charity';
import CurrentVacanciesList from "@/components/CurrentVacanciesList"


export default function TestComponentPage() {

  const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_URL || 'http://52.175.21.181';

  const [images, setImages] = useState<Array<{ url: string; alt?: string; width?: number; height?: number; }>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await getCommunityAndCharity();
        if (response && response.data && response.data.Images) {
          const fetchedImages = response.data.Images.map((img: { url: string; name: string; width: number; height: number; }) => ({
            url: `${cmsBaseUrl}${img.url}`,
            alt: img.name,
            width: img.width,
            height: img.height,
          }));
          setImages(fetchedImages);
        } else {
          setError('No image data found in the response.');
        }
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [cmsBaseUrl]);

  if (loading) {
    return <div className="container mx-auto py-10">Loading images...</div>;
  }

  if (error) {
    return <div className="container mx-auto py-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Image Slideshow Test</h1>
      {images.length > 0 ? (
        <ImageSlideshow images={images} />
      ) : (
        <div className="text-center">No images to display.</div>
      )}
      {/* Other page content */}
      <CircularsList initialYear='' />
      {/* Other page content */}
      <CurrentVacanciesList />
    </div>
  );
}