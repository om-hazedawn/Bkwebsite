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

const AnnouncementsList: React.FC<{ initialYear: string, language: string }> = ({ initialYear, language }) => {

  const [announcements, setAnnouncements] = useState<AnnouncementData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
        const result = await getAnnouncementCollections(yearToFetch, language); 
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
  }, [initialYear, language]);

  if (loading) {
    return <p>Loading announcements...</p>;
  }

  if (error) {
    return <p>Error loading announcements: {error}</p>;
  }

  const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_URL || 'https://bk-data-migrate.onrender.com';

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
    </div>
  );
};

export default AnnouncementsList;