"use client"

import React from 'react'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useLanguage } from "@/contexts/language-context"

interface Definition {
  description: string;
}

interface SubSectionWithDefinitions {
  subtitle: string;
  definitions: Definition[];
}

interface SubSectionWithPoints {
  subtitle: string;
  points: string[];
}

interface TermsSection {
  id: string;
  title?: string;
  content: string | SubSectionWithDefinitions[] | SubSectionWithPoints[];
}

const termsData: TermsSection[] = [
  {
    id: 'intro',
    content: 'YOUR USE OF THIS WEBSITE SIGNIFIES YOUR ACCEPTANCE OF THESE TERMS AND CONDITIONS AND AGREEMENT TO BE BOUND BY THEM.'
  },
  {
    id: 'definitions',
    title: '1. Definitions',
    content: [{
      subtitle: '1.1 Capitalised terms used in these Terms shall have the following meanings:',
      definitions: [
        {
          description: 'Intellectual Property Rights means any trademarks, service marks, logos, trade names, corporate names, Internet domain names, patents, registered designs, copyrights, database rights, rights in designs, inventions, semiconductor topography rights, know-how, trade secrets or any similar right exercisable in any part of the world, whether registered or not, and including any applications for the registration of any such rights.'
        },
        {
          description: 'Loss or Losses means losses, damages, liabilities, judgments, awards, fines, penalties, sanctions, settlements, claims, demands, actions, costs and expenses of whatsoever nature (including, without limitation, attorney/legal fees for both internal and external counsel; costs related to investigation, arbitration, litigation or settlement; loss of profit; loss of revenue; loss of business; loss of data; loss of opportunity; business interruption; and loss of goodwill).'
        },
        {
          description: 'Personal Data means any data or information relating to an individual and from which it is practicable for the identity of the individual to be directly or indirectly ascertained, and in a form in which access to or processing of the data is practicable (including, but not limited to, photographs, names, addresses, titles, telephone numbers, email addresses and other personal details).'
        },
        {
          description: 'Privacy Policy means our privacy policy found here, which may be amended by us from time to time at our sole discretion, without any prior notice to you.'
        },
        {
          description: 'Terms means these terms and conditions for use of the Website.'
        },
        {
          description: 'Website Content means any data, material or information, in any format whatsoever, including (without limitation) any data files, text, computer software, images, graphics, photos, video clips, sound, audio files, directories or databases, that are made available on or through the Website.'
        }
      ]
    }]
  },
  {
    id: 'acceptance',
    title: '2. Acceptance of these Terms',
    content: '2.1 By accessing this website (www.buildking.hk) ("Website") you agree to be bound by and accept these Terms and the Privacy Policy. You may not use the Website if you do not agree to accept all of these Terms and the Privacy Policy.'
  },
  {
    id: 'changes',
    title: '3. Changes to these Terms',
    content: '3.1 We may amend the Terms from time to time in our sole discretion without any notice or liability to you. Without prejudice to the foregoing, the latest version of the Terms shall be posted on the Website. By continuing to use the Website after such amended Terms have been posted on the Website, you agree to be bound by such amendments.'
  },
  {
    id: 'website-changes',
    title: '4. Changes to the Website',
    content: '4.1 We may, in our sole discretion and at any time, without notice to you, add to, amend, remove, alter, suspend or terminate the Website or Website Content.'
  },
  {
    id: 'conduct',
    title: '5. Your Conduct',
    content: [{
      subtitle: '5.1 You agree that:',
      points: [
        "a) you will not use the Website or Website Content in any way that is unlawful and/or breaches any applicable laws, regulations, codes, guidelines or orders",
        "b) you agree not to use the Website or Website Content in anyway that contravenes or infringes upon any of our rights or any third party's rights (including Intellectual Property Rights)",
        "c) you will not use the Website or Website Content to send, communicate or engage in any harassing, disruptive, offensive, abusive, threatening, indecent, defamatory, obscene or menacing behaviour",
        "d) you will not modify, copy, reproduce, download, re-publish, sell or distribute any part of (or create derivative works) based on any part of the Website or Website Content",
        "e) you will not use of the Website or any Website Content for any purpose not expressly permitted in these Terms",
        "f) you shall not take any action or allow any third party to take any action that would interfere with or disrupt the Website"
      ]
    }]
  }
];

export default function TermsAndConditions() {
  const { language } = useLanguage()

  const isSubSectionWithDefinitions = (
    content: any
  ): content is SubSectionWithDefinitions => {
    return 'definitions' in content;
  }

  const isSubSectionWithPoints = (
    content: any
  ): content is SubSectionWithPoints => {
    return 'points' in content;
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Content Section */}
      <div className="container mx-auto py-12 px-7 md:px-11">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl leading-8 font-bold text-[#838182]">Terms and Conditions</h1>
          </div>
          
          {/* Introduction */}
          <div className="text-[#838182] mb-12">
            <p className="font-light text-xl leading-8">
              {typeof termsData[0].content === 'string' ? termsData[0].content : ''}
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {termsData.slice(1).map((section) => (
              <section key={section.id} className="text-[#838182]">
                <h2 className="text-4xl leading-8 font-light mb-6 text-[#0099a7]">{section.title}</h2>
                
                {Array.isArray(section.content) ? (
                  <div className="space-y-6">
                    {section.content.map((subSection, index) => (
                      <div key={index}>
                        <p className="mb-4 text-xl leading-8 font-light text-[#838182]">{subSection.subtitle}</p>
                        
                        {isSubSectionWithDefinitions(subSection) && (
                          <div className="space-y-6">
                            {subSection.definitions.map((def, idx) => (
                              <p key={idx} className="mb-6 text-[#838182] text-xl leading-8 font-light">
                                {def.description}
                              </p>
                            ))}
                          </div>
                        )}
                        
                        {isSubSectionWithPoints(subSection) && (
                          <div className="space-y-3">
                            {subSection.points.map((point, idx) => (
                              <p key={idx} className="text-[#838182] text-xl leading-8 font-light">{point}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-[#838182] text-xl leading-8 font-light">{section.content}</p>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}