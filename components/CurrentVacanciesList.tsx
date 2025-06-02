"use client"

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getCurrentVacanciesCollections } from "@/lib/api/current-vacancies-collections";

interface DescriptionItem {
  type: string;
  children: {
    text: string;
    type: string;
    url?: string;
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
    return description.map((item, index) => (
      <p key={index} className="mb-2 leading-relaxed">
        {item.children.map((child, childIndex) => {
          if (child.type === 'link' && child.url) {
            return (
              <a key={childIndex} href={child.url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                {child.text || child.url}
              </a>
            );
          } else {
            return <span key={childIndex}>{child.text}</span>;
          }
        })}
      </p>
    ));
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      {vacancies.map((vacancy) => (
        <AccordionItem key={vacancy.id} value={`item-${vacancy.id}`}>
          <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
            {vacancy.Title}
          </AccordionTrigger>
          <AccordionContent>
            <div className="prose prose-sm max-w-none">
              {renderDescription(vacancy.Description)}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}