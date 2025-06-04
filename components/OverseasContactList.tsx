import { useRouter, useSearchParams } from "next/navigation";

export interface CompanyInfo {
  type: string;
  children: { text: string; url?: string; type?: string }[];
}

export interface CompanyData {
  id: number;
  documentId: string;
  CompanyNameShort: string;
  CompanyName: string;
  CompanyInformation: CompanyInfo[];
  RecipientsEmail: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  Logo: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: Record<string, {
      url: string;
      width: number;
      height: number;
      size: number;
      mime: string;
    }>;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata?: null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
  localizations: { id: number; locale: string; }[];
}

interface OverseasContactListProps {
  companies: CompanyData[];
  onSelect: () => void;
}

export default function OverseasContactList({ companies, onSelect }: OverseasContactListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCompanyClick = (companyId: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("overseasCompanyId", companyId.toString());
    params.delete("companyId");
    router.push(`?${params.toString()}`, { scroll: false });
    onSelect();
  };

  const selectedCompanyId = searchParams.get("overseasCompanyId");

  return (
    <div className="mb-8">
      {/* Overseas offices */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-[#0099A7]">Overseas</h2>
        <ul className="space-y-2 text-gray-600">
          {companies.map((company) => (
            <li
            key={company.id}
            className="flex items-center cursor-pointer text-lg"
            onClick={() => handleCompanyClick(company.id)}
          >
              <span>{company.CompanyNameShort}</span>
              {selectedCompanyId === company.id.toString() && (
                <svg
                  className="ml-1 w-6 h-6 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}