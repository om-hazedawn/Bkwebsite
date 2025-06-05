"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
// import { locales } from "@/locales"
import { getMessageIconAreas } from "@/lib/api/message-icon-areas"
import { useEffect, useState } from "react"

interface MessageIconArea {
  id: number
  Title: string
  Description: { type: string; children: { text: string }[] }[]
  Image: {
    url: string
  }
  localizations: {
    Title: string
    Description: { type: string; children: { text: string }[] }[]
    locale: string
  }[]
}

export default function CoreValues() {
  const { language } = useLanguage()
  const [coreValues, setCoreValues] = useState<MessageIconArea[]>([])
  const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || 'https://bk-data-migrate.onrender.com';

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getMessageIconAreas()
        setCoreValues(response.data)
      } catch (error) {
        console.error("Failed to fetch core values:", error)
      }
    }
    fetchData()
  }, [])

  const getLocalizedContent = (item: MessageIconArea) => {
    const localizedItem = item.localizations.find(loc => loc.locale === language)
    if (localizedItem) {
      return {
        title: localizedItem.Title,
        description: localizedItem.Description[0]?.children[0]?.text,
      }
    } else {
      return {
        title: item.Title,
        description: item.Description[0]?.children[0]?.text,
      }
    }
  }

  return (
    <section className="py-12 container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {coreValues.map((value) => {
          const { title, description } = getLocalizedContent(value)
          return (
            <div key={value.id} className="flex flex-col items-center text-center">
              <div className="mb-4 relative w-[180px] h-[180px]">
                <Image src={`${CMS_URL}${value.Image.url}`} alt={title} fill className="object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#35b3a7]">{title}</h3>
              <p className="text-[#35b3a7] text-center max-w-xs">{description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
