'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface YearRangesProps {
  yearRanges: string[];
  basePath?: string;
}

const InteriumYearRanges: React.FC<YearRangesProps> = ({ yearRanges, basePath = '' }) => {
  const searchParams = useSearchParams();
  const selectedYearRange = searchParams.get('interiumYearRange');

  if (!yearRanges || yearRanges.length === 0) {
    return <p>No year ranges available.</p>;
  }

  return (
    <ul className="space-y-2">
      {yearRanges.map((yearRange, index) => (
        <li key={yearRange || index}>
          <Link
            href={`${basePath}?interiumYearRange=${yearRange}`}
            className={`text-xl text-[#818182] ${selectedYearRange === yearRange ? 'font-black flex items-center' : 'font-extralight hover:font-black'}`}
            scroll={false}
          >
            {yearRange}
            {selectedYearRange === yearRange && (
              <span className="text-3xl font-black">&#9656;</span> // Unicode right-pointing triangle
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default InteriumYearRanges;