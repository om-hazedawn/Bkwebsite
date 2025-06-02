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
            className={`text-gray-600 hover:text-[#35b3a7] hover:underline ${selectedYearRange === yearRange ? 'font-bold text-[#35b3a7]' : ''}`}
            scroll={false}
          >
            {yearRange}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default InteriumYearRanges;