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

const DynamicsFileList: React.FC<{ collections: string }> = ({ collections }) => {
  const [circulars, setDynamics] = useState<DynamicData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDynamics = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch data based on the provided collection
        const result = await getDynamicCollections(collections); 
        console.log('Fetched dynamics data for collection:', collections, result);
        if (result && Array.isArray(result.data)) {
          // Filter out items that don't have a File, as they cannot be displayed as a link
          // The API now sorts by Title, so no client-side sorting by Title is needed here.
          // If Date-based sorting or filtering were still required, it would be done here.
          let processedDynamics = result.data.filter((c: DynamicData) => c.File);

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
  }, [collections]);

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error loading data: {error}</p>;
  }

  const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_URL || 'http://52.175.21.181';

  return (
    <div className="container mx-auto p-4">
      {circulars.length === 0 && !loading && (
        <p>No data found for {collections}.</p>
      )}

      <ul className="space-y-2">
        {circulars.map((item) => (
          // File check is already done during processing
          <li key={item.id} className="p-2 border rounded hover:bg-gray-100">
            <a
              href={`${cmsBaseUrl}${item.File!.url}`} // File is guaranteed to exist here by the filter
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {item.Title}
            </a>
            {/* Displaying date if available, though it's not used for sorting/filtering anymore */}
            {item.Date && <span className="text-sm text-gray-500 ml-2">({item.Date.substring(0,10)})</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicsFileList;