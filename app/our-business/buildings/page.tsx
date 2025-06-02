import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { getBuilding } from "@/lib/api/building"; // Added import
import { SectionItem } from '@/components/Sections';
import Sections from '@/components/Sections'; // Added import for Sections
import DynamicBusinessList from "@/components/DynamicBusinessList"; // Added import for CircularsList

interface BuildingsPageProps {
  searchParams?: {
    collections?: string;
  };
}

export default async function Buildings({ searchParams }: BuildingsPageProps) {

  let buildingSectionsData: SectionItem[] = []; // Added to store fetched building sections
  const awaitedSearchParams = await searchParams; // Await searchParams
  const selectedCollections = awaitedSearchParams?.collections || '';

  try {
    const buildingResponse = await getBuilding();
    if (buildingResponse) {
      buildingSectionsData = buildingResponse.data.Sections.sections;
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
            alt="Buildings Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>

          {/* Overlay boxes - First Row */}
          {/* Overlay boxes - First Row */}
          <div className="absolute top-0 left-0 right-0 w-full">
            <div className="flex justify-center">
              {/* First box - Our Business */}
              <div className="w-[350px] h-[372px] pl-8 pt-8 text-white">
                <h3 className="text-3xl font-semibold">Our Business</h3>
              </div>

              {/* Second box - Buildings */}
              <div className="relative w-[350px] h-[372px] pl-8 pb-10 flex items-end justify-start bg-[#1aabaf]/80 text-white">
                <h3 className="text-3xl font-semibold">Buildings</h3>
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
                  <h3 className="text-[1.50rem] font-semibold">
                    ◄ back to Our Business
                  </h3>
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
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              {/* Buildings section */}
              <h2 className="text-2xl font-medium text-gray-700 mb-6">Buildings</h2>
              <Sections initialSections={buildingSectionsData} basePath="/our-business/buildings" />
            </div>
            <div>
              {selectedCollections === '' ? (
                <DynamicBusinessList collections="addition-and-alteration-collections" />
              ) : (
                <DynamicBusinessList collections={selectedCollections} />
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
