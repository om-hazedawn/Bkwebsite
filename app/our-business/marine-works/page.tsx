import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function MarineWorks() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative">
        <div className="relative max-w-[1690px] w-full h-[744px] mx-auto">
          <Image
            src="/our-business/heroimageofbusiness.jpg"
            alt="Marine Works Hero"
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

              {/* Second box - Marine Works */}
              <div className="relative w-[350px] h-[372px] pl-8 pb-10 flex items-end justify-start bg-black/70 text-white">
                <h3 className="text-3xl font-semibold">Marine Works</h3>
               
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
      <Footer />
    </main>
  );
}