'use client';

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image";
import HongKongContactList, { CompanyData } from "@/components/HongKongContactList";
import HongKongContactDetail from "@/components/HongKongContactDetail";
import { getContactHongKongCollections } from "@/lib/api/contact-hong-kong-collections";
import { useState, useEffect } from "react";
import OverseasContactList, { CompanyData as OverseasCompanyData } from "@/components/OverseasContactList";

type ContactType = 'hongkong' | 'overseas';
import OverseasContactDetail from "@/components/OverseasContactDetail";
import { getContactOverseaCollections } from "@/lib/api/contact-overseas-collections";

export default function Contact() {
  const [hkCompanies, setHkCompanies] = useState<CompanyData[]>([]);
  const [hkLoading, setHkLoading] = useState(true);
  const [hkError, setHkError] = useState<string | null>(null);

  const [overseasCompanies, setOverseasCompanies] = useState<OverseasCompanyData[]>([]);
  const [overseasLoading, setOverseasLoading] = useState(true);
  const [overseasError, setOverseasError] = useState<string | null>(null);

  const [selectedContactType, setSelectedContactType] = useState<ContactType>('hongkong');

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
        <div className="relative w-full h-[400px]">
          <Image
            src="/contact/customer-service-rep.png"
            alt="Customer service representative"
            fill
            className="object-cover object-center"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <HongKongContactList companies={hkCompanies} onSelect={() => setSelectedContactType('hongkong')} />
              <OverseasContactList companies={overseasCompanies} onSelect={() => setSelectedContactType('overseas')} />
            </div>
            <div className="col-xs-12 col-sm-6 result_box pull-right">
              {selectedContactType === 'hongkong' && <HongKongContactDetail companies={hkCompanies} />}
              {selectedContactType === 'overseas' && <OverseasContactDetail companies={overseasCompanies} />}
            </div>
          </div>
        </div>
      </section>


      {/* Contact form section */}
      <section className="py-12 bg-[#00a0a0]">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#00a0a0]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-white text-center text-2xl mb-8">E-mail Us</h2>

          <div className="max-w-xl mx-auto">
            <form className="space-y-4">
              <div className="grid grid-cols-[100px_1fr] items-center">
                <label htmlFor="name" className="text-white">
                  Name
                </label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300" required />
              </div>

              <div className="grid grid-cols-[100px_1fr] items-center">
                <label htmlFor="phone" className="text-white">
                  Phone
                </label>
                <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 border border-gray-300" />
              </div>

              <div className="grid grid-cols-[100px_1fr] items-center">
                <label htmlFor="company" className="text-white">
                  Company
                </label>
                <select id="company" name="company" className="w-full px-3 py-2 border border-gray-300">
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
                <button type="submit" className="bg-white text-[#00a0a0] px-6 py-1 text-sm">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
