import { useRouter, useSearchParams } from "next/navigation";

export interface NewsletterData {
  id: number;
  year: number;
  description: string;
}

interface NewsletterListProps {
  newsletters: NewsletterData[];
  onSelect: () => void;
}

export default function NewsletterList({ newsletters, onSelect }: NewsletterListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleNewsletterClick = (newsletterId: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("newsletterId", newsletterId.toString());
    router.push(`?${params.toString()}`, { scroll: false });
    onSelect();
  };

  const selectedNewsletterId = searchParams.get("newsletterId");

  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold mb-6 text-[#0099A7]">
          Corporate
          <br />
          Newsletter
        </h2>
        <ul className="space-y-2 text-gray-600">
          {newsletters.map((newsletter) => (
            <li
              key={newsletter.id}
              className="flex items-center cursor-pointer text-lg"
              onClick={() => handleNewsletterClick(newsletter.id)}
            >
              <span>{newsletter.year}</span>
              {selectedNewsletterId === newsletter.id.toString() && (
                <svg
                  className="ml-2 w-5 h-5 text-[#838182]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}