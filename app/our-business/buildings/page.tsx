import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Buildings() {
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

      <section className="max-w-[1050px] mx-auto py-16">
        <h2 className="text-4xl font-semibold mb-6 text-gray-500">Buildings</h2>
        <p className="text-[#0099a7] font-bold">
          St. Paul&apos;s Hospital Redevelopment - Demolition of Existing Old Block
          and Structures, Construction of a New <br />
          Basement and Extension of Block A, Alteration and Addition Works to
          Block A, Block B and Basement D
        </p>
        <div className="relative w-[800px] h-[600px] mt-8 ml-0">
          <Image
            src="/our-business/subimage.jpg"
            alt="Building Subimage"
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-2xl font-semibold mt-6 mb-3 text-gray-500">
          Project Name
        </h3>
        <p className="text-gray-500">
          St. Paul&apos;s Hospital Redevelopment - Demolition of Existing Old Block
          and Structures, Construction of a New <br />
          Basement and Extension of Block A, Alteration and Addition Works to
          Block A, Block B and Basement D
        </p>
        <h3 className="text-2xl font-semibold mt-6 mb-3 text-gray-500">
          Client{" "}
        </h3>
        <p className="text-gray-500">
          The Mother Superior of the Soeurs De Saint Paul De Chartres (Hong
          Kong)
        </p>
        <h3 className="text-2xl font-semibold mt-6 mb-3 text-gray-500">
          Contract Period
        </h3>
        <p className="text-gray-500">10 October 2017 - 25 September 2024</p>
        <h3 className="text-2xl font-semibold mt-6 mb-3 text-gray-500">
          Project Summary
        </h3>
        <p className="text-gray-500">
          St. Paul&apos;s Hospital was founded in 1898 by the Sisters of St. Paul de
          Chartres. Located in the heart of Causeway <br />
          Bay, this comprehensive, acute private hospital provides around 500
          beds across over 20 departments, with <br /> ongoing redevelopment to
          expand its facilities and diversify services.
          <br />
          This project involves the construction of a new basement and extension
          of Block A, alteration and addition works
          <br />
          to Blocks A, B, and Basement D, conversion of an open car park to a
          landscaped garden, road widening and paving <br />
          works at Eastern Hospital Road, and the demolition of an existing old
          block followed by the construction of a new <br />
          basement structure and superstructure.
       </p>
       <div className="flex justify-end mt-20">
         <Link href="/our-business" className="text-[#595957] hover:text-[#1aabaf] transition-colors duration-300 mr-64">
           <span className="text-xl font-semibold">◄ Back</span>
         </Link>
       </div>
     </section>
      <Footer />
    </main>
  );
}
