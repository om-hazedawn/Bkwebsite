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

const CircularsList: React.FC<{ initialYear: string }> = ({ initialYear }) => {
  const [circulars, setCirculars] = useState<CircularData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCirculars = async () => {
      setLoading(true);
      setError(null);
      try {
        if (initialYear == '')
          initialYear = '2025'
        // Always fetch all circulars, then filter based on initialYear
        const result = await getCircularsCollections(initialYear); 
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
  }, [initialYear]);

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
          <li key={circular.id} className="p-2 border rounded hover:bg-gray-100">
            <a
              href={`${cmsBaseUrl}${circular.File!.url}`} // File is guaranteed to exist here
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {circular.Title}
            </a>
            {circular.Date && <span className="text-sm text-gray-500 ml-2">({circular.Date.substring(0,10)})</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CircularsList;