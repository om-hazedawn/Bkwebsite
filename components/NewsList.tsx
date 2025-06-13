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

interface PaginationMeta {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface NewsListProps {
  initialYear: string;
  language: string;
  pageSize?: number;
}

const NewsList: React.FC<NewsListProps> = ({ initialYear, language, pageSize = 10 }) => {
  const [news, setNews] = useState<NewsData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsData | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [paginationMeta, setPaginationMeta] = useState<PaginationMeta | null>(null);

  const handleNewsClick = (newsItem: NewsData) => {
    setSelectedNews(newsItem);
  };

  const handleCloseDetail = () => {
    setSelectedNews(null);
  };

  useEffect(() => {
    setCurrentPage(1); // Reset to first page when year changes
  }, [initialYear]);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        let yearToFetch = initialYear;
        if (yearToFetch === '') {
          yearToFetch = '2025'; // Default year if none provided
        }
        // Pass currentPage and pageSize to the API call
        const result = await getWhatsNewCollections(yearToFetch, language, currentPage, pageSize);
        console.log('Fetched news data:', result);

        if (result && Array.isArray(result.data)) {
          // The API should ideally handle year filtering when paginating.
          // If client-side filtering is still needed, it should be applied carefully.
          // For now, assuming API handles year filtering with pagination.
          const processedNews = result.data.filter((c: NewsData) => c.Date); // Basic validation

          // Sorting should ideally be done by the API or after all data for the current view is fetched.
          // If API doesn't sort, and we are paginating, this sort is only for the current page.
          processedNews.sort((a: NewsData, b: NewsData) => {
            if (!a.Date && !b.Date) return 0;
            if (!a.Date) return 1;
            if (!b.Date) return -1;
            return new Date(b.Date).getTime() - new Date(a.Date).getTime(); // Descending
          });

          setNews(processedNews);
          setPaginationMeta(result.meta?.pagination || null);
        } else {
          console.error('Fetched news data is not an array or is undefined:', result);
          setNews([]);
          setPaginationMeta(null);
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
  }, [initialYear, language, currentPage, pageSize]);

  if (loading) {
    return <p>Loading news...</p>;
  }

  if (error) {
    return <p>Error loading news: {error}</p>;
  }

  return (
    <div className="container mx-auto p-4 max-w-screen-lg">
      {news.length === 0 && !loading && (
        <p>No news found{initialYear ? ` for the year ${initialYear}` : ''}.</p>
      )}

      {!selectedNews ? (
        <>
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

          {/* Pagination Controls */} 
          {paginationMeta && paginationMeta.pageCount > 1 && (
            <div className="flex items-center space-x-4 mt-6 mb-4">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2 rounded-full ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : ' hover:text-[#0099a7]'}`}
                aria-label="Previous page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div className="flex items-center space-x-1">
                {Array.from({ length: paginationMeta.pageCount }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 flex items-center justify-center rounded-full text-sm
                      ${currentPage === page 
                        ? ' text-[#0099a7]'
                        : 'text-gray-600 hover:text-[#0099a7]'}`}
                    aria-label={`Go to page ${page}`}
                    aria-current={currentPage === page ? 'page' : undefined}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === paginationMeta.pageCount}
                className={`p-2 rounded-full ${currentPage === paginationMeta.pageCount ? 'text-gray-400 cursor-not-allowed' : ' hover:text-[#0099a7]'}`}
                aria-label="Next page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          )}
        </>
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