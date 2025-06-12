"use client"

import React from 'react'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function PrivacyPolicy() {
  const { language } = useLanguage()

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Content Section */}
      <div className="container mx-auto py-12 px-7 md:px-11">
        <div className="max-w-[70rem] mx-auto">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl leading-8 font-bold text-[#838182]">Privacy Policy</h1>
          </div>
          
          {/* Content */}
          <div className="space-y-6 text-[#838182]">
            <p className="font-light text-xl leading-8">
              We respect the privacy of visitors to this website Any personally identifiable information on site visitors is collected only for the purpose of providing requested information and/or services to them. We are committed to complying with the Personal Data (Privacy) Ordinance of the Hong Kong SAR, details of which can be found at the website of the <Link href="https://www.pcpd.org.hk/" target="_blank" rel="noopener noreferrer" className="text-[#0099A7] hover:underline">Privacy Commissioner This Privacy Policy applies solely to the information which is collected through this website.</Link>. 
            </p>

            <div className="space-y-6">
              <p className="font-light text-xl leading-8">
                We may use IP addresses and other anonymous data such as browser and operating system type, the time and duration of site visits and the pages visited for the purposes of:
              </p>
              <p className="font-light text-xl leading-8">
                (i) obtaining aggregate information on the whereabouts of visitors to the site; and<br />
                (ii) maintaining and enhancing our website and improving our services to clients.
              </p>
            </div>

            <p className="font-light text-xl leading-8">
              We may also use cookies – small data files stored on your computer that record information on your previous site visits – for the purpose of customizing your browsing experience to your needs. You may, if you wish, set your Web browser to reject cookies or to require confirmation from you before accepting them, and may delete existing cookies.
            </p>

            <div className="space-y-6">
              <p className="font-light text-xl leading-8">
                Any personal information submitted to us in enquiries through this site, by email or by other means, will be collected and used by us only for the purposes of:
              </p>
              <p className="font-light text-xl leading-8">
                (i) providing requested information on our products, services, pricing and processes.<br />
                (ii) providing information on other products and services offered by us that may be of interest to the enquirer. You may opt out of receiving such information on request to us.<br />
                (iii) providing requested services to clients.
              </p>
            </div>

            <p className="font-light text-xl leading-8">
              We may also aggregate such information, without personal identification details, for such purposes as generating demographic profiles of our customer base.
            </p>

            <div className="space-y-6">
              <p className="font-light text-xl leading-8">
                We will not disclose any personally identifiable information given by or collected from you to any third party without your consent. However, such data may be shared with our subsidiaries, trusted associates, business partners, contractors or agents where necessary for the purposes of:
              </p>
              <p className="font-light text-xl leading-8">
                (i) maintaining and improving our website; and/or<br />
                (ii) providing information and/or services requested by you
              </p>
            </div>

            <p className="font-light text-xl leading-8">
              In such cases, we require that these parties maintain your data in confidence and subject to the same restrictions as data held by ourselves, and that they use it for the specified purposes only. In order to protect the information, our servers are protected by reasonable physical and electronic security measures.
            </p>

            <div className="space-y-6">
              <p className="font-light text-xl leading-8">
                We also reserve the right to disclose such information to any third party if we believe that we are required to do so for any or all of the following reasons:
              </p>
              <p className="font-light text-xl leading-8">
                (i) by law;<br />
                (ii) to comply with legal processes or governmental requests;<br />
                (iii) to prevent, investigate, detect or prosecute criminal offences or attacks on the technical integrity of the website or our network; and/or<br />
                (iv) to protect the rights, property, or safety of ourselves, the users of the website, or the public.
              </p>
            </div>

            <div className="space-y-6">
              <p className="font-light text-xl leading-8">
                You may at any time request that we:
              </p>
              <p className="font-light text-xl leading-8">
                (i) inform you of the data we hold concerning you;<br />
                (ii) correct such data if it is inaccurate;<br />
                (iii) cease to send you marketing communications; or<br />
                (iv) delete from our records any data we may hold on you.
              </p>
            </div>

            <p className="font-light text-xl leading-8">
              If you wish to request the checking, correction or deletion of your data, or to opt out of receiving our marketing communications, or have any queries or concerns regarding this policy or its application, you may Contact Us by email at info@buildking.hk, and we will respond within a reasonable time.
            </p>

            <p className="font-light text-xl leading-8">
              This Privacy Policy applies solely to us, and we accept no responsibility for the privacy practices of any other website. Please be aware of this when clicking on links to third party websites (if any) from our site.
            </p>

            <p className="font-light text-xl leading-8">
              By visiting the site, you are acknowledging and accepting this Privacy Policy. In the event of any changes to our Privacy Policy, whether required by law or otherwise, we shall post such changes on our website. Your continued use of the site after changes have been posted to the Privacy Policy will constitute your acceptance of such changes.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}