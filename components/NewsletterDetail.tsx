import { NewsletterData } from "./NewsletterList";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

interface NewsletterDetailProps {
  newsletters: NewsletterData[];
}

export default function NewsletterDetail({ newsletters }: NewsletterDetailProps) {
  const searchParams = useSearchParams();
  const selectedId = searchParams.get("newsletterId");
  const [isLoading, setIsLoading] = useState(false);
  const [currentNewsletter, setCurrentNewsletter] = useState<NewsletterData | undefined>();
  
  useEffect(() => {
    setIsLoading(true);
    const selected = newsletters.find(
      (newsletter) => newsletter.id.toString() === selectedId
    );
    
    // Simulate loading delay
    const timer = setTimeout(() => {
      setCurrentNewsletter(selected);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedId, newsletters]);

  if (isLoading) {
    return (
      <div className="p-4">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-2/3"></div>
          <div className="space-y-2">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center space-x-3">
                <div className="bg-gray-200 h-10 w-12 rounded"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!currentNewsletter) {
    return (
      <div className="p-4">
        <p className="text-gray-500"></p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-2xl font-bold text-[#838182] mb-4 pb-2 border-b">
        {currentNewsletter.year} Issue
      </h3>
      <div className="prose max-w-none">
        <p className="text-gray-600 leading-relaxed">
          {currentNewsletter.description}
        </p>
      </div>
    </div>
  );
}