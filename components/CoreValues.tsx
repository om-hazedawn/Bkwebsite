"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { locales } from "@/locales"

export default function CoreValues() {
  const { language } = useLanguage()
  const t = locales[language]

  return (
    <section className="py-12 container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 relative w-[180px] h-[180px]">
            <Image src="/icons/ico_1.png" alt="Professionalism" fill className="object-contain" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-[#35b3a7]">{t.coreValues.professionalismTitle}</h3>
          <p className="text-gray-600 text-center max-w-xs">{t.coreValues.professionalismDesc}</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mb-4 relative w-[180px] h-[180px]">
            <Image src="/icons/ico_2.png" alt="Innovation" fill className="object-contain" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-[#35b3a7]">{t.coreValues.innovationTitle}</h3>
          <p className="text-gray-600 text-center max-w-xs">{t.coreValues.innovationDesc}</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mb-4 relative w-[180px] h-[180px]">
            <Image src="/icons/ico_3.png" alt="Integrity" fill className="object-contain" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-[#35b3a7]">{t.coreValues.integrityTitle}</h3>
          <p className="text-gray-600 text-center max-w-xs">{t.coreValues.integrityDesc}</p>
        </div>
      </div>
    </section>
  )
}
