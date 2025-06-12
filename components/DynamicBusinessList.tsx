'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import { getDynamicCollections } from '@/lib/api/dynamic-collections'; // Assuming this can fetch generic collections or a similar function exists for business data

// Define the structure for ProjectSummary items
interface ProjectSummaryItem {
  type: string;
  children: { text: string; type: string }[];
}

// Define the structure for MainImage and its formats
interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

interface MainImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    small?: ImageFormat;
    medium?: ImageFormat;
    thumbnail?: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Updated interface to match sample_business.json structure
interface BusinessData {
  id: number;
  documentId: string;
  Title: string; // This seems to be a general title, ProjectName is more specific
  ProjectName: string;
  Client: string;
  ContractPeriod: string;
  ProjectSummary: ProjectSummaryItem[];
  MainImage: MainImage | null; // MainImage can be null
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  localizations: { id: number; locale: string; }[]; // Define more specifically if needed
}

// Props for the component
interface DynamicBusinessListProps {
  collections: string; // Identifier for the data collection to fetch
  language: string; // Language identifier
  onItemExpandChange?: (isExpanded: boolean) => void; // New prop
  pageSize?: number; // Number of items per page
}

interface PaginationMeta {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

const DynamicBusinessList: React.FC<DynamicBusinessListProps> = ({ collections, language, onItemExpandChange, pageSize = 10 }) => {
  const [expandedBusinessId, setExpandedBusinessId] = useState<number | null>(null);
  const [businesses, setBusinesses] = useState<BusinessData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [paginationMeta, setPaginationMeta] = useState<PaginationMeta | null>(null);

  useEffect(() => {
    const fetchBusinessData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Assuming getDynamicCollections can fetch the business data based on the 'collections' prop
        // Or replace with a specific function e.g., getBusinessData(collections)
        const result = await getDynamicCollections(collections, language, currentPage, pageSize);
        console.log('Fetched business data for collection:', collections, result);

        if (result && Array.isArray(result.data)) {
          setPaginationMeta(result.meta?.pagination || null);
          // No specific filtering needed here unless business rules dictate it
          // (e.g., filter out items without a MainImage if it's essential for display)
          setBusinesses(result.data as BusinessData[]);
        } else {
          console.error('Fetched business data is not an array or is undefined:', result);
          setBusinesses([]);
          setError('Failed to load business data in the expected format.');
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

    if (collections) {
      fetchBusinessData();
    }
  }, [collections, language, currentPage, pageSize]);

  if (loading) {
    return <p className="text-center py-10">Loading business data...</p>;
  }

  if (error) {
    return <p className="text-center py-10 text-red-500">Error loading data: {error}</p>;
  }

  const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_URL || 'http://52.175.21.181'; // Default to common local Strapi URL

  const handleToggleDetails = (id: number) => {
    const newExpandedId = expandedBusinessId === id ? null : id;
    setExpandedBusinessId(newExpandedId);
    if (onItemExpandChange) {
      onItemExpandChange(newExpandedId !== null);
    }
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    setExpandedBusinessId(null);
  };

  return (
    <div className="container mx-auto p-0">
      {businesses.length === 0 && !loading && (
        <p className="text-center py-10">No business data found for {collections}.</p>
      )}

      <div>
        {expandedBusinessId !== null ? (
          // Only render the expanded item if expandedBusinessId is set
          businesses
            .filter((item) => item.id === expandedBusinessId)
            .map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden">
                <button
                  onClick={() => handleToggleDetails(item.id)}
                  className="w-full text-left p-4 focus:outline-none focus:bg-gray-100 hover:bg-gray-50"
                >
                  <h2 className="text-xl font-semibold text-gray-700 hover:underline">
                    {item.ProjectName}
                  </h2>
                </button>
                {expandedBusinessId === item.id && (
                  <div className="p-6 flex flex-col gap-4">
                    {/* Project Name as a title for the expanded section, matching the image's top title */}
                    <h3 className="text-2xl font-bold text-[#0099a7] mb-4">
                      {item.ProjectName}
                    </h3>

                    {item.MainImage && item.MainImage.url && (
                      <div className="relative w-3/5 h-96 overflow-hidden mb-4">
                        <Image
                          src={`${cmsBaseUrl}${item.MainImage.formats?.small?.url || item.MainImage.url}`}
                          alt={item.MainImage.alternativeText || item.ProjectName}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    )}
                    
                    <div className="space-y-3 text-[#838182]">
                      {/* Labeled "Project Name" as per OCR, distinct from the top title */}
                      <p className="text-bold">
                        <strong className="font-semibold">Project Name</strong> 
                      </p>
                      {item.ProjectName}
                      <br />
                      <p className="text-base">
                        <strong className="font-semibold">Client</strong>
                      </p>
                      {item.Client}
                      <br />
                      <p className="text-base">
                        <strong className="font-semibold">Contract Period</strong> 
                      </p>
                      {item.ContractPeriod}
                      <br />
                      <div className="text-base">
                        <strong className="font-semibold block mb-1">Project Summary</strong>
                        {item.ProjectSummary && item.ProjectSummary.length > 0 ? (
                          item.ProjectSummary.map((summaryItem, index) => (
                            <p key={index} className="mt-1 first:mt-0">
                              {summaryItem.children.map(child => child.text).join(' ')}
                            </p>
                          ))
                        ) : (
                          <p className="mt-1 italic">No summary available.</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
        ) : (
          // Render all items if no item is expanded
          businesses.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => handleToggleDetails(item.id)}
                className="w-full text-left p-2 focus:outline-none hover:bg-transparent group"
              >
                <h2 className="text-s text-[#838182] group-hover:text-[#0099a7]">
                  {item.ProjectName}
                </h2>
              </button>
              {expandedBusinessId === item.id && (
                <div className="p-6 border-t border-gray-200 flex flex-col gap-4">
                  {/* Project Name as a title for the expanded section, matching the image's top title */}
                  <h3 className="text-2xl font-bold text-blue-700 mb-4">
                    {item.ProjectName}
                  </h3>

                  {item.MainImage && item.MainImage.url && (
                    <div className="relative w-full h-96 rounded overflow-hidden mb-4">
                      <Image
                        src={`${cmsBaseUrl}${item.MainImage.formats?.small?.url || item.MainImage.url}`}
                        alt={item.MainImage.alternativeText || item.ProjectName}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  )}
                  
                  <div className="space-y-3 text-gray-800">
                    {/* Labeled "Project Name" as per OCR, distinct from the top title */}
                    <p className="text-base">
                      <strong className="font-semibold text-gray-900">Project Name</strong> {item.ProjectName}
                    </p>
                    <p className="text-base">
                      <strong className="font-semibold text-gray-900">Client</strong> {item.Client}
                    </p>
                    <p className="text-base">
                      <strong className="font-semibold text-gray-900">Contract Period</strong> {item.ContractPeriod}
                    </p>
                    <div className="text-base">
                      <strong className="font-semibold text-gray-900 block mb-1">Project Summary</strong>
                      {item.ProjectSummary && item.ProjectSummary.length > 0 ? (
                        item.ProjectSummary.map((summaryItem, index) => (
                          <p key={index} className="mt-1 first:mt-0">
                            {summaryItem.children.map(child => child.text).join(' ')}
                          </p>
                        ))
                      ) : (
                        <p className="mt-1 italic">No summary available.</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>

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

export default DynamicBusinessList;