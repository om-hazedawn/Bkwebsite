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
            className={`text-xl text-[#818182] ${selectedYear === year ? 'font-black flex items-center' : 'font-extralight hover:font-black'}`}
            scroll={false}
          >
            {year}
            {selectedYear === year && (
              <span className="text-3xl font-black">&#9656;</span> // Unicode right-pointing triangle
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Years;