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

const AnnouncementsList: React.FC<{ initialYear: string }> = ({ initialYear }) => {
  const [announcements, setAnnouncements] = useState<AnnouncementData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      setLoading(true);
      setError(null);
      try {
        const yearToFetch = initialYear === '' ? '2025' : initialYear;
        // Always fetch all announcements, then filter based on initialYear
        const result = await getAnnouncementCollections(yearToFetch); 
        console.log('Fetched announcements data:', result);
        if (result && Array.isArray(result.data)) {
          let processedAnnouncements = result.data.filter((c: AnnouncementData) => c.Date && c.File);

          if (initialYear && initialYear !== initialYear) {
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
  }, [initialYear]);

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
          // File check is already done during processing
          <li key={announcement.id} className="p-2 border rounded hover:bg-gray-100">
            <a
              href={`${cmsBaseUrl}${announcement.File!.url}`} // File is guaranteed to exist here
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {announcement.Title}
            </a>
            {announcement.Date && <span className="text-sm text-gray-500 ml-2">({announcement.Date.substring(0,10)})</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnnouncementsList;