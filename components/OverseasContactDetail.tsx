import Image from "next/image";
import { CompanyData } from "./OverseasContactList";
import { useSearchParams } from "next/navigation";

interface OverseasContactDetailProps {
  companies: CompanyData[];
}

export default function OverseasContactDetail({ companies }: OverseasContactDetailProps) {
  const searchParams = useSearchParams();
  const selectedCompanyId = searchParams.get("overseasCompanyId");

  const selectedCompany = companies.find(
    (company) => company.id.toString() === selectedCompanyId
  );

  if (!selectedCompany) {
    return null; // Or a loading state, or a message indicating no company is selected
  }

  return (
    <div className="flex flex-col">
      <div className="mb-6">
        {selectedCompany.Logo && (
          <Image
            src={`${process.env.CMS_URL || 'http://52.175.21.181'}${selectedCompany.Logo.url}`}
            alt={selectedCompany.Logo.alternativeText || selectedCompany.CompanyNameShort}
            width={selectedCompany.Logo.width}
            height={selectedCompany.Logo.height}
          />
        )}
      </div>
      <h3 className="font-medium mb-2">{selectedCompany.CompanyName}</h3>
      {
        selectedCompany.CompanyInformation.map((infoBlock, index) => (
          <p key={index} className="text-gray-600 mb-1">
            {infoBlock.children.map((child, childIndex) => (
              child.type === "link" ? (
                <a key={childIndex} href={child.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {child.text}
                </a>
              ) : (
                <span key={childIndex}>{child.text}</span>
              )
            ))}
          </p>
        ))
      }
    </div>
  );
}