"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import HongKongContactList, {
  CompanyData,
} from "@/components/HongKongContactList";
import HongKongContactDetail from "@/components/HongKongContactDetail";
import { getContactHongKongCollections } from "@/lib/api/contact-hong-kong-collections";
import { useState, useEffect } from "react";
import OverseasContactList, {
  CompanyData as OverseasCompanyData,
} from "@/components/OverseasContactList";

type ContactType = "hongkong" | "overseas";
import OverseasContactDetail from "@/components/OverseasContactDetail";
import { getContactOverseaCollections } from "@/lib/api/contact-overseas-collections";


export default function Contact() {
  const [hkCompanies, setHkCompanies] = useState<CompanyData[]>([]);
  const [hkLoading, setHkLoading] = useState(true);
  const [hkError, setHkError] = useState<string | null>(null);

  const [overseasCompanies, setOverseasCompanies] = useState<
    OverseasCompanyData[]
  >([]);
  const [overseasLoading, setOverseasLoading] = useState(true);
  const [overseasError, setOverseasError] = useState<string | null>(null);

  const [selectedContactType, setSelectedContactType] =
    useState<ContactType>("hongkong");

  useEffect(() => {
    async function fetchHkData() {
      try {
        const data = await getContactHongKongCollections();
        if (data && data.data) {
          setHkCompanies(data.data);
        }
      } catch (err) {
        console.error("Error fetching Hong Kong contact data:", err);
        setHkError("Failed to load Hong Kong contact information.");
      } finally {
        setHkLoading(false);
      }
    }

    async function fetchOverseasData() {
      try {
        const data = await getContactOverseaCollections();
        if (data && data.data) {
          setOverseasCompanies(data.data);
        }
      } catch (err) {
        console.error("Error fetching overseas contact data:", err);
        setOverseasError("Failed to load overseas contact information.");
      } finally {
        setOverseasLoading(false);
      }
    }

    fetchHkData();
    fetchOverseasData();
  }, []);

  if (hkLoading || overseasLoading) {
    return <div>Loading contact information...</div>;
  }

  if (hkError) {
    return <div className="text-red-500">{hkError}</div>;
  }

  if (overseasError) {
    return <div className="text-red-500">{overseasError}</div>;
  }
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Main contact section with full-width customer service image */}
      <section className="relative">
        {/* Background aerial construction site image */}
        <div className="relative max-w-[1540px] w-full h-[740px] mx-auto">
          <Image
            src="/contact/Contactus_img.png"
            alt="Aerial view of construction site"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>

          {/* Overlay boxes - First Row */}
          <div className="absolute top-0 left-0 right-0 w-full">
            <div className="flex justify-center space-x-0">
              {/* First box - with shadow */}
              <div className="w-[370px] h-[370px] pl-8 pt-8 text-[#838182] transition-colors duration-300">
                <h3 className="text-3xl font-semibold">Contact</h3>
              </div>

              {/* Second box - with bg-[#35b3a7] */}
              <div className="w-[370px] h-[370px] pl-8 pt-8 text-[#838182] transition-colors duration-300"></div>
              {/* Third box - with bg-[#e63946] */}

              <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#e63946]/80 text-white transition-colors duration-300 hover:bg-[#e63946]/40">
                <h3 className="text-3xl font-semibold">
                  Welcome to Build King support
                </h3>
              </div>
            </div>
          </div>

          {/* Overlay boxes - Second Row */}
          <div className="absolute top-[370px] left-0 right-0 w-full">
            <div className="flex justify-center space-x-0">
              {/* First box - with shadow */}

              <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start text-white bg-black/40"></div>

              {/* Second box - with bg-[#35b3a7] */}

              <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start "></div>

              {/* Third box - with bg-[#e63946] */}

              <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-center">
            <div>
              <HongKongContactList
                companies={hkCompanies}
                onSelect={() => setSelectedContactType("hongkong")}
              />
              <OverseasContactList
                companies={overseasCompanies}
                onSelect={() => setSelectedContactType("overseas")}
              />
            </div>
            <div className="result_box">
              {selectedContactType === "hongkong" && (
                <HongKongContactDetail companies={hkCompanies} />
              )}
              {selectedContactType === "overseas" && (
                <OverseasContactDetail companies={overseasCompanies} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact form section */}
      <section className="py-12 bg-[#0099A7]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="relative w-full h-[100px]">
                <Image
                  src="/contact/Contactus.png"
                  alt="Contact Us"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-white text-4xl font-semibold mt-4">E-mail US</h3>
            </div>
            <div>
            <form className="space-y-4">
              <div className="grid grid-cols-[100px_1fr] items-center">
                <label htmlFor="name" className="text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300"
                  required
                />
              </div>

              <div className="grid grid-cols-[100px_1fr] items-center">
                <label htmlFor="phone" className="text-white">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 border border-gray-300"
                />
              </div>

              <div className="grid grid-cols-[100px_1fr] items-center">
                <label htmlFor="company" className="text-white">
                  Company
                </label>
                <select
                  id="company"
                  name="company"
                  className="w-full px-3 py-2 border border-gray-300"
                >
                  <option>Build King Holdings Limited</option>
                  <option>Build King Civil Engineering Limited</option>
                  <option>Build King Construction Limited</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="grid grid-cols-[100px_1fr] items-center">
                <label htmlFor="email" className="text-white">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300"
                  required
                />
              </div>

              <div className="grid grid-cols-[100px_1fr] items-start">
                <label htmlFor="message" className="text-white pt-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300"
                  required
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-white text-[#00a0a0] px-6 py-1 text-sm"
                >
                  Send
                </button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
