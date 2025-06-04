import { en } from "./en"
import { zhCN } from "./zh-cn"
import { zhHK } from "./zh-Hant-HK"

export const locales = {
  en,
  "zh-cn": zhCN,
  "zh-Hant-HK": zhHK,
}

export type Language = "en" | "zh-cn" | "zh-Hant-HK"
