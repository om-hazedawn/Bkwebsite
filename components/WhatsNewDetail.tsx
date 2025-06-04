"use client";

import { NewsItem, YearData } from './WhatsNewList';
import { useSearchParams } from 'next/navigation';

interface WhatsNewDetailProps {
  years: YearData[];
}

export default function WhatsNewDetail({ years }: WhatsNewDetailProps) {
  const searchParams = useSearchParams();
  const selectedNewsId = searchParams.get("newsId");

  const selectedNews = years.reduce<NewsItem | undefined>((found, yearData) => {
    if (found) return found;
    return yearData.news.find(news => news.id === selectedNewsId);
  }, undefined);

  if (!selectedNews) {
    return null;
  }

  return (
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-sm">
      <div className="space-y-4">
        <h3 className="text-xl font-medium text-[#0099a7]">{selectedNews.heading}</h3>
        <p className="text-sm text-gray-500">{selectedNews.date}</p>
        <p className="text-gray-600 text-lg">{selectedNews.description}</p>
      </div>
    </div>
  );
}