'use client';

import React, { useEffect, useState } from 'react';
import { getAnnouncementCollections } from '@/lib/api/announcement-collections'; // Corrected path

interface AnnouncementFile {
  id: number;
  name: string;
  url: string;
  // Add other relevant file properties if needed
}

interface AnnouncementData {
  id: number;
  Title: string;
  File: AnnouncementFile | null; // File can be null based on sample data
  Date: string | null;
  // Add other relevant announcement properties if needed
}

interface PaginationMeta {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface AnnouncementsListProps {
  initialYear: string;
  language: string;
  pageSize?: number;
}

const AnnouncementsList: React.FC<AnnouncementsListProps> = ({ initialYear, language, pageSize = 10 }) => {

  const [announcements, setAnnouncements] = useState<AnnouncementData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [paginationMeta, setPaginationMeta] = useState<PaginationMeta | null>(null);

  useEffect(() => {
    setCurrentPage(1);
  }, [initialYear]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      setLoading(true);
      setError(null);
      try {
        let yearToFetch = initialYear;
        if (yearToFetch === '') {
          yearToFetch = '2025';
        }
        // Always fetch all announcements, then filter based on initialYear
        const result = await getAnnouncementCollections(yearToFetch, language, currentPage, pageSize); 
        console.log('Fetched announcements data:', result);
        if (result && Array.isArray(result.data)) {
          let processedAnnouncements = result.data.filter((c: AnnouncementData) => c.Date && c.File);

          if (initialYear && initialYear !== yearToFetch) {
            processedAnnouncements = processedAnnouncements.filter((announcement: AnnouncementData) => {
              if (!announcement.Date) return false;
              const announcementYear = announcement.Date.substring(0, 4);
              return announcementYear === initialYear;
            });
          }

          // Sort by date descending
          processedAnnouncements.sort((a: AnnouncementData, b: AnnouncementData) => {
            if (!a.Date && !b.Date) return 0; // Should not happen due to filter
            if (!a.Date) return 1;
            if (!b.Date) return -1;
            return new Date(b.Date).getTime() - new Date(a.Date).getTime(); // Descending
          });

          setAnnouncements(processedAnnouncements);
          setPaginationMeta(result.meta?.pagination || null);
        } else {
          console.error('Fetched announcements data is not an array or is undefined:', result);
          setAnnouncements([]);
          setError('Failed to load announcements in the expected format.');
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

    fetchAnnouncements();
  }, [initialYear, language, currentPage, pageSize]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  if (loading) {
    return <p>Loading announcements...</p>;
  }

  if (error) {
    return <p>Error loading announcements: {error}</p>;
  }

  const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_URL || 'http://52.175.21.181';

  return (
    <div className="container mx-auto p-4">
      {announcements.length === 0 && !loading && (
        <p>No announcements found{initialYear && initialYear !== initialYear ? ` for the year ${initialYear}` : ''}.</p>
      )}

      <ul className="space-y-2">
        {announcements.map((announcement) => (
          <li key={announcement.id} className="pb-2 mb-2 border-b border-gray-200 last:border-b-0">
            <a
              href={`${cmsBaseUrl}${announcement.File!.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0099A7] hover:underline block"
            >
              {announcement.Title}
            
            {announcement.Date && <span className="text-sm text-gray-500 block mt-1">{new Date(announcement.Date).toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' })} &#9656;</span>}
            </a>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      {paginationMeta && paginationMeta.pageCount > 1 && (
        <div className="flex items-center space-x-4 mt-6 mb-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
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
                onClick={() => handlePageChange(page)}
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
            onClick={() => handlePageChange(currentPage + 1)}
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

export default AnnouncementsList;