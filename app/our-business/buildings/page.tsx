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
            src="/our-business/buildings-hero.png"
            alt="Buildings Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>

          {/* Overlay boxes - First Row */}
          <div className="absolute top-0 left-0 right-0 w-full">
            <div className="flex ml-52">
              {/* First box - with shadow */}
              <div className="w-[350px] h-[372px] pl-8 pt-8 text-white transition-colors duration-300">
                <h3 className="text-3xl font-semibold">Our Business</h3>
              </div>

              {/* Second box */}
              <Link href="#">
                <div className="relative w-[350px] h-[372px] pl-8 pb-10 flex items-end justify-start bg-[#1aabaf]/80 text-white transition-colors duration-300 hover:bg-[#1aabaf]/40">
                  <h3 className="text-3xl font-semibold">Buildings</h3>
                </div>
              </Link>
            </div>
          </div>

          {/* Overlay boxes - Second Row */}
          <div className="absolute top-[372px] left-0 right-0 w-full">
            <div className="flex ml-52">
              {/* First box */}
              <Link href="#">
                <div className="relative w-[350px] h-[372px] pl-8 pb-10 flex items-end justify-start bg-[#D5D4D5] text-black transition-colors duration-300 hover:bg-[#D5D4D5]/40">
                  <h3 className="text-3xl font-semibold">Back to Our Business </h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
