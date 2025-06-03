import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { getEnvironmental } from "@/lib/api/environmental"; // Added import
import { SectionItem } from '@/components/Sections';
import Sections from '@/components/Sections'; // Added import for Sections
import DynamicBusinessList from "@/components/DynamicBusinessList"; // Added import for CircularsList

interface EnvironmentalPageProps {
  searchParams?: {
    collections?: string;
  };
}

export default async function Environmental({ searchParams }: EnvironmentalPageProps) {

  let environmentalSectionsData: SectionItem[] = []; // Added to store fetched environmental sections
  const awaitedSearchParams = await searchParams; // Await searchParams
  const selectedCollections = awaitedSearchParams?.collections || '';

  try {
    const environmentalResponse = await getEnvironmental();
    if (environmentalResponse) {
      environmentalSectionsData = environmentalResponse.data.Sections.sections;
    }
  } catch (error) {
    console.error("Failed to load notice sections:", error);
    // Optionally, set a default or show an error message to the user
  }

  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative">
        <div className="relative max-w-[1690px] w-full h-[744px] mx-auto">
          <Image
           src="/our-business/heroimageofbusiness.jpg"
            alt="Environmental Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>

          {/* Overlay boxes - First Row */}
          <div className="absolute top-0 left-0 right-0 w-full">
            <div className="flex justify-center">
              {/* First box - Our Business */}
              <div className="w-[350px] h-[372px] pl-8 pt-8 text-white">
                <h3 className="text-3xl font-semibold">Our Business</h3>
              </div>

              {/* Second box - Environmental */}
              <div className="relative w-[350px] h-[372px] pl-8 pb-10 flex items-end justify-start bg-[#e63946]/80 text-white">
                <h3 className="text-3xl font-semibold">Environmental</h3>
                
              </div>

              {/* Third box - Black transparent */}
              <div className="relative w-[350px] h-[372px] pl-8 pb-10 flex items-end justify-start">
                <h3 className="text-3xl font-semibold text-white"></h3>
              </div>
            </div>
          </div>

          {/* Overlay boxes - Second Row */}
          <div className="absolute top-[372px] left-0 right-0 w-full">
            <div className="flex justify-center">
              {/* Fourth box - Back to Business */}
              <Link href="/our-business">
                <div className="relative w-[350px] h-[372px] pl-8 pb-10 flex items-end justify-start bg-[#D5D4D5] text-[#595957] transition-colors duration-300 hover:bg-[#D5D4D5]/60">
                  <h3 className="text-[1.50rem] font-semibold">◄ back to Our Business</h3>
                 
                </div>
              </Link>

              {/* Fifth box - Black transparent */}
              <div className="relative w-[350px] h-[372px] pl-8 pb-10 flex items-end justify-start">
                <h3 className="text-3xl font-semibold text-white"></h3>
              </div>

              {/* Sixth box - Black transparent */}
              <div className="relative w-[350px] h-[372px] pl-8 pb-10 flex items-end justify-start">
                <h3 className="text-3xl font-semibold text-white"></h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto pl-64">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-1">
              {/* Buildings section */}
              <h2 className="text-2xl font-medium text-gray-700 mb-6">Environmental</h2>
              <Sections initialSections={environmentalSectionsData} basePath="/our-business/environmental" />
            </div>
            <div className="md:col-span-2">
              {selectedCollections === '' ? (
                <DynamicBusinessList collections="environmental-collections" key="environmental-collections"/>
              ) : (
                <DynamicBusinessList collections={selectedCollections} key={selectedCollections} />
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}