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
        <h2 className="text-lg font-bold mb-4">Overseas</h2>
        <ul className="space-y-2 text-gray-600">
          {companies.map((company) => (
            <li
            key={company.id}
            className={`flex items-center cursor-pointer ${selectedCompanyId === company.id.toString() ? "font-bold text-[#0099a7]" : ""}`}
            onClick={() => handleCompanyClick(company.id)}
          >
              <span>{company.CompanyNameShort}</span>
              <span className="ml-1 text-gray-400">»</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}