'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface YearRangesProps {
  yearRanges: string[];
  basePath?: string;
}

const AnnualYearRanges: React.FC<YearRangesProps> = ({ yearRanges, basePath = '' }) => {
  const searchParams = useSearchParams();
  const selectedYearRange = searchParams.get('annualYearRange');

  if (!yearRanges || yearRanges.length === 0) {
    return <p>No year ranges available.</p>;
  }

  return (
    <ul className="space-y-2">
      {yearRanges.map((yearRange, index) => (
        <li key={yearRange || index}>
          <Link
            href={`${basePath}?annualYearRange=${yearRange}`}
            className={`text-xl text-[#818182] hover:font-black ${selectedYearRange === yearRange ? 'text-[#818182] font-black flex items-center' : ''}`}
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

export default AnnualYearRanges;