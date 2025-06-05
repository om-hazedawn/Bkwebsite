'use client';

import React, { useEffect, useState } from 'react';
import { getWhatsNewCollections } from '@/lib/api/what-s-new-collections'; // Corrected path
import { BoxMessageItem } from './BoxMessage';
import BoxMessage from './BoxMessage';

interface NewsData {
  id: number;
  Title: string;
  Date: string;
  PageTtile: string;
  Detail: BoxMessageItem[];
  // Add other relevant announcement properties if needed
}

const NewsList: React.FC<{ initialYear: string, language: string }> = ({ initialYear, language }) => {

  const [news, setNews] = useState<NewsData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsData | null>(null);

  const handleNewsClick = (newsItem: NewsData) => {
    setSelectedNews(newsItem);
  };

  const handleCloseDetail = () => {
    setSelectedNews(null);
  };

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        let yearToFetch = initialYear;
        if (yearToFetch === '') {
          yearToFetch = '2025';
        }
        // Always fetch all news, then filter based on initialYear
        const result = await getWhatsNewCollections(yearToFetch, language); 
        console.log('Fetched news data:', result);
        if (result && Array.isArray(result.data)) {
          let processedNews = result.data.filter((c: NewsData) => c.Date);

          if (initialYear && initialYear !== yearToFetch) {
            processedNews = processedNews.filter((announcement: NewsData) => {
              if (!announcement.Date) return false;
              const announcementYear = announcement.Date.substring(0, 4);
              return announcementYear === initialYear;
            });
          }

          // Sort by date descending
          processedNews.sort((a: NewsData, b: NewsData) => {
            if (!a.Date && !b.Date) return 0; // Should not happen due to filter
            if (!a.Date) return 1;
            if (!b.Date) return -1;
            return new Date(b.Date).getTime() - new Date(a.Date).getTime(); // Descending
          });

          setNews(processedNews);
        } else {
          console.error('Fetched news data is not an array or is undefined:', result);
          setNews([]);
          setError('Failed to load news in the expected format.');
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

    fetchNews();
  }, [initialYear, language]);

  if (loading) {
    return <p>Loading news...</p>;
  }

  if (error) {
    return <p>Error loading news: {error}</p>;
  }

  return (
    <div className="container mx-auto p-4 max-w-screen-lg">
      {news.length === 0 && !loading && (
        <p>No news found{initialYear && initialYear !== initialYear ? ` for the year ${initialYear}` : ''}.</p>
      )}

      {!selectedNews ? (
        <ul className="space-y-2">
          {news.map((announcement) => (
            <li key={announcement.id} className="pb-2 mb-2 border-b border-gray-200 last:border-b-0">
              <div
                onClick={() => handleNewsClick(announcement)}
                className="text-[#0099A7] hover:underline block cursor-pointer"
              >
                {announcement.Title}
              
              {announcement.Date && <span className="text-sm text-gray-500 block mt-1">{new Date(announcement.Date).toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' })} &#9656;</span>}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="news-detail-view">
          <h2 className="text-2xl font-bold mb-4 text-[#0099A7]">{selectedNews.Title}</h2>
          <div className="border-b border-black mb-4"></div>
          <div className="space-y-4 text-[#838182]">
              <BoxMessage items={selectedNews.Detail} />
          </div>
          <button
            onClick={handleCloseDetail}
            className="mb-4 text-[#0099A7] hover:underline flex items-center"
          >
            &larr; Back to News List
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsList;