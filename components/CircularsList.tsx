'use client';

import React, { useEffect, useState } from 'react';
import { getCircularsCollections } from '@/lib/api/cirulars-collections'; // Corrected path

interface CircularFile {
  id: number;
  name: string;
  url: string;
  // Add other relevant file properties if needed
}

interface CircularData {
  id: number;
  Title: string;
  File: CircularFile | null; // File can be null based on sample data
  Date: string | null;
  // Add other relevant circular properties if needed
}

interface PaginationMeta {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface CircularsListProps {
  initialYear: string;
  language?: string;
  pageSize?: number;
}

const CircularsList: React.FC<CircularsListProps> = ({ initialYear, language = 'en', pageSize = 10 }) => {
  const [circulars, setCirculars] = useState<CircularData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [paginationMeta, setPaginationMeta] = useState<PaginationMeta | null>(null);

  useEffect(() => {
    setCurrentPage(1);
  }, [initialYear]);

  useEffect(() => {
    const fetchCirculars = async () => {
      setLoading(true);
      setError(null);
      try {
        const yearToFetch = initialYear === '' ? '2025' : initialYear;
        // Always fetch all circulars, then filter based on initialYear
        const result = await getCircularsCollections(yearToFetch, language, currentPage, pageSize); 
        console.log('Fetched circulars data:', result);
        if (result && Array.isArray(result.data)) {
          let processedCirculars = result.data.filter((c: CircularData) => c.Date && c.File);

          if (initialYear && initialYear !== initialYear) {
            processedCirculars = processedCirculars.filter((circular: CircularData) => {
              if (!circular.Date) return false;
              const circularYear = circular.Date.substring(0, 4);
              return circularYear === initialYear;
            });
          }

          // Sort by date descending
          processedCirculars.sort((a: CircularData, b: CircularData) => {
            if (!a.Date && !b.Date) return 0; // Should not happen due to filter
            if (!a.Date) return 1;
            if (!b.Date) return -1;
            return new Date(b.Date).getTime() - new Date(a.Date).getTime(); // Descending
          });

          setCirculars(processedCirculars);
          setPaginationMeta(result.meta?.pagination || null);
        } else {
          console.error('Fetched circulars data is not an array or is undefined:', result);
          setCirculars([]);
          setError('Failed to load circulars in the expected format.');
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

    fetchCirculars();
  }, [initialYear, language, currentPage, pageSize]);

  if (loading) {
    return <p>Loading circulars...</p>;
  }

  if (error) {
    return <p>Error loading circulars: {error}</p>;
  }

  const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_URL || 'http://52.175.21.181';

  return (
    <div className="container mx-auto p-4">
      {circulars.length === 0 && !loading && (
        <p>No circulars found{initialYear && initialYear !== initialYear ? ` for the year ${initialYear}` : ''}.</p>
      )}

      <ul className="space-y-2">
        {circulars.map((circular) => (
          // File check is already done during processing
          <li key={circular.id} className="pb-2 mb-2 border-b border-gray-200 last:border-b-0">
            <a
              href={`${cmsBaseUrl}${circular.File!.url}`} // File is guaranteed to exist here
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0099A7] hover:underline block"
            >
              {circular.Title}
            
            {circular.Date && <span className="text-sm text-gray-500 block mt-1">{new Date(circular.Date).toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' })} &#9656;</span>}
            </a>
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
    </div>
  );
};

export default CircularsList;