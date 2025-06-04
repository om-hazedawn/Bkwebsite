"use client";

import { useRouter, useSearchParams } from "next/navigation";

export interface NewsItem {
  id: string;
  heading: string;
  date: string;
  description: string;
}

export interface YearData {
  year: string;
  news: NewsItem[];
}

interface WhatsNewListProps {
  years: YearData[];
  onSelect: () => void;
}

export default function WhatsNewList({ years, onSelect }: WhatsNewListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleNewsClick = (newsId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("newsId", newsId);
    router.push(`?${params.toString()}`, { scroll: false });
    onSelect();
  };

  const selectedNewsId = searchParams.get("newsId");

  return (
    <div className="mb-8">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-[#0099A7]">What&apos;s New</h2>
        <ul className="space-y-2 text-gray-600">
          {years.flatMap(yearData => 
            yearData.news.map((newsItem) => (
              <li
                key={newsItem.id}
                className="flex items-center cursor-pointer text-lg"
                onClick={() => handleNewsClick(newsItem.id)}
              >
                <span>{yearData.year}</span>
                {selectedNewsId === newsItem.id && (
                  <svg
                    className="ml-1 w-6 h-6 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}