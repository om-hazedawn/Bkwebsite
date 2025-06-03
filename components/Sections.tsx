'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export interface SectionItem {
  // id: number; // Removed as it's not in sample_notice.json for these items
  name: string;
  slug: string;
}

interface SectionsProps {
  initialSections: SectionItem[];
  basePath?: string; // Optional base path for links
}

const Sections: React.FC<SectionsProps> = ({ initialSections, basePath = '' }) => {
  const searchParams = useSearchParams();
  const selectedCollection = searchParams.get('collections');

  // Removed useState for sections, loading, and error as data is passed directly

  // useEffect for fetching data is removed as data is now passed as a prop.

  if (!initialSections || initialSections.length === 0) {
    return <p>No notices available.</p>;
  }

  return (
    <ul className="space-y-2">
      {initialSections.map((section, index) => (
        <li key={section.slug || index}>
          <Link
            href={`${basePath}?collections=${section.slug}`}
            className={`text-gray-600 hover:text-[#35b3a7] ${selectedCollection === section.slug ? 'font-bold text-[#35b3a7]' : ''}`}
            scroll={false}
          >
            {section.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Sections;