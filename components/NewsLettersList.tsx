'use client';

import React, { useEffect, useState } from 'react';
import { getCorporateNewsletterCollections } from '@/lib/api/corporate-newsletter-collections'; // Corrected path

interface NewsLetterFile {
  id: number;
  name: string;
  url: string;
  // Add other relevant file properties if needed
}

interface NewsLetterData {
  id: number;
  Title: string;
  File: NewsLetterFile | null; // File can be null based on sample data
  Date: string | null;
  // Add other relevant newsLetter properties if needed
}

const NewsLettersList: React.FC<{ initialYear: string, language: string }> = ({ initialYear, language }) => {

  const [newsLetters, setNewsLetters] = useState<NewsLetterData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNewsLetters = async () => {
      setLoading(true);
      setError(null);
      try {
        let yearToFetch = initialYear;
        if (yearToFetch === '') {
          yearToFetch = '2025';
        }
        // Always fetch all newsLetters, then filter based on initialYear
        const result = await getCorporateNewsletterCollections(yearToFetch, language); 
        console.log('Fetched newsLetters data:', result);
        if (result && Array.isArray(result.data)) {
          setNewsLetters(result.data);
        } else {
          console.error('Fetched newsLetters data is not an array or is undefined:', result);
          setNewsLetters([]);
          setError('Failed to load newsLetters in the expected format.');
        }
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNewsLetters();
  }, [initialYear, language]);

  if (loading) {
    return <p>Loading newsLetters...</p>;
  }

  if (error) {
    return <p>Error loading newsLetters: {error}</p>;
  }

  const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_URL || 'https://bk-data-migrate.onrender.com';

  return (
    <div className="container mx-auto p-4">
      {newsLetters.length === 0 && !loading && (
        <p>No newsLetters found.</p>
      )}

      <ul className="space-y-2">
        {newsLetters.map((newsLetter) => (
          <li key={newsLetter.id} className="pb-2 mb-2 border-b border-gray-200 last:border-b-0">
            <a
              href={`${cmsBaseUrl}${newsLetter.File!.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0099A7] hover:underline block"
            >
              {newsLetter.Title}
            
            {newsLetter.Date && <span className="text-sm text-gray-500 block mt-1">{new Date(newsLetter.Date).toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' })} &#9656;</span>}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsLettersList;