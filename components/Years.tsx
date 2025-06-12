'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface YearsProps {
  years: string[];
  basePath?: string;
}

const Years: React.FC<YearsProps> = ({ years, basePath = '' }) => {
  const searchParams = useSearchParams();
  const selectedYear = searchParams.get('year');
  // Removed useState for sections, loading, and error as data is passed directly

  // useEffect for fetching data is removed as data is now passed as a prop.

  if (!years || years.length === 0) {
    return <p>No years available.</p>;
  }

  return (
    <ul className="space-y-2">
      {years.map((year, index) => (
        <li key={year || index}>
          <Link
            href={`${basePath}?year=${year}`}
            className={`text-gray-600 hover:text-[#838182] hover:underline ${selectedYear === year ? 'font-black text-[#838182]' : ''}`}
            scroll={false}
          >
            {year}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Years;