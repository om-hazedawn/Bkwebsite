'use client';

import React, { useEffect, useState } from 'react';
import { getDynamicCollections } from '@/lib/api/dynamic-collections'; // Corrected path

interface DynamicFile {
  id: number;
  name: string;
  url: string;
  // Add other relevant file properties if needed
}

interface DynamicData {
  id: number;
  Title: string;
  File: DynamicFile | null; // File can be null based on sample data
  // Date is no longer used for filtering in this component, but kept for potential display
  Date: string | null; 
  // Add other relevant circular properties if needed
}

const DynamicsFileList: React.FC<{ collections: string, language: string }> = ({ collections, language }) => {
  const [circulars, setDynamics] = useState<DynamicData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDynamics = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch data based on the provided collection
        const result = await getDynamicCollections(collections, language); 
        console.log('Fetched dynamics data for collection:', collections, result);
        if (result && Array.isArray(result.data)) {
          // Filter out items that don't have a File, as they cannot be displayed as a link
          // The API now sorts by Title, so no client-side sorting by Title is needed here.
          // If Date-based sorting or filtering were still required, it would be done here.
          const processedDynamics = result.data
            .filter((c: DynamicData) => c.File)
            .sort((a: DynamicData, b: DynamicData) => {
              // Handle potential null dates by placing them at the end
              if (!a.Date && !b.Date) return 0;
              if (!a.Date) return 1;
              if (!b.Date) return -1;
              return new Date(b.Date).getTime() - new Date(a.Date).getTime();
            });

          setDynamics(processedDynamics);
        } else {
          console.error('Fetched dynamics data is not an array or is undefined:', result);
          setDynamics([]);
          setError('Failed to load dynamics in the expected format.');
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

    if (collections) { // Only fetch if a collection is provided
      fetchDynamics();
    }
  }, [collections, language]);

  // if (loading) {
  //   return <p>Loading data...</p>;
  // }

  if (error) {
    return <p>Error loading data: {error}</p>;
  }

  const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_URL || 'https://bk-data-migrate.onrender.com';

  return (
    <div className="container mx-auto p-4">
      {circulars.length === 0 && !loading && (
        <p>No data found for {collections}.</p>
      )}

      <ul className="space-y-2">
        {circulars.map((item) => (
          // File check is already done during processing
          <li key={item.id} className="pb-2 mb-2 border-b border-gray-200 last:border-b-0">
            <a
              href={`${cmsBaseUrl}${item.File!.url}`} // File is guaranteed to exist here by the filter
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0099A7] hover:underline block"
            >
              {item.Title}
            
            {/* Displaying date if available, though it's not used for sorting/filtering anymore */}
            {item.Date && <span className="text-sm text-gray-500 block mt-1">{new Date(item.Date).toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' })} &#9656;</span>}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicsFileList;