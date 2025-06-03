"use client"

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getCurrentVacanciesCollections } from "@/lib/api/current-vacancies-collections";

interface DescriptionItem {
  type: string;
  format?: string;
  children: {
    text: string;
    type: string;
    url?: string;
    bold?: boolean;
    children?: {
      text: string;
      type: string;
      url?: string;
      bold?: boolean;
    }[];
  }[];
}

interface Vacancy {
  id: number;
  Title: string;
  Description: DescriptionItem[];
}

export default function CurrentVacanciesList() {
  const [vacancies, setVacancies] = React.useState<Vacancy[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [expandedVacancyId, setExpandedVacancyId] = React.useState<number | null>(null);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await getCurrentVacanciesCollections();
        // Assuming the API returns an object with a 'data' array
        if (response && Array.isArray(response.data)) {
          setVacancies(response.data);
        } else {
          setError("Unexpected data format");
        }
      } catch (err) {
        console.error("Failed to fetch vacancies:", err);
        setError("Failed to load job vacancies.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading job vacancies...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  if (vacancies.length === 0) {
    return <div className="text-center py-8 text-gray-500">No current job vacancies available.</div>;
  }

  const renderDescription = (description: DescriptionItem[]) => {
    return description.map((item, index) => {
      if (item.type === 'paragraph') {
        return (
          <p key={index} className="mb-2 leading-relaxed text-[#666666]">
            {item.children.map((child, childIndex) => {
              if (child.type === 'link' && child.url) {
                return (
                  <a key={childIndex} href={child.url} className="text-[#009999] hover:underline" target="_blank" rel="noopener noreferrer">
                    {child.text || child.url}
                  </a>
                );
              } else if (child.bold) {
                return <strong key={childIndex}>{child.text}</strong>;
              } else if (child.text === '') {
                return <br key={childIndex} />;
              } else {
                return <span key={childIndex}>{child.text}</span>;
              }
            })}
          </p>
        );
      } else if (item.type === 'list' && item.format === 'unordered') {
        return (
          <ul key={index} className="list-disc pl-5 mb-2 text-[#666666]">
            {item.children.map((listItem, listItemIndex) => (
              <li key={listItemIndex} className="mb-1">
                {listItem.children && listItem.children.map((child, childIndex) => {
                  if (child.type === 'link' && child.url) {
                    return (
                      <a key={childIndex} href={child.url} className="text-[#009999] hover:underline" target="_blank" rel="noopener noreferrer">
                        {child.text || child.url}
                      </a>
                    );
                  } else if (child.bold) {
                    return <strong key={childIndex}>{child.text}</strong>;
                  } else if (child.text === '') {
                    return <br key={childIndex} />;
                  } else {
                    return <span key={childIndex}>{child.text}</span>;
                  }
                })}
              </li>
            ))}
          </ul>
        );
      } else if (item.type === 'heading') {
        return (
          <h3 key={index} className="text-[#009999] text-lg font-bold mt-4 mb-2">
            {item.children.map((child, childIndex) => (
              <span key={childIndex}>{child.text}</span>
            ))}
          </h3>
        );
      }
      return null;
    });
  };

  const handleToggle = (id: number) => {
    setExpandedVacancyId(expandedVacancyId === id ? null : id);
  };

  return (
    <div className="w-full">
      {vacancies.map((vacancy) => (
        <div key={vacancy.id} className="mb-8 border-b border-gray-200 pb-4">
          <h2
            className="text-[#009999] text-xl font-bold mb-4 flex items-center cursor-pointer"
            onClick={() => handleToggle(vacancy.id)}
          >
            <span className="mr-2">•</span> {vacancy.Title}
            <span className="ml-2 text-gray-500">
              {expandedVacancyId === vacancy.id ? '▲' : '▼'}
            </span>
          </h2>
          {expandedVacancyId === vacancy.id && (
            <div className="prose prose-sm max-w-none">
              {renderDescription(vacancy.Description)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}