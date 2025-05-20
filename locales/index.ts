import { en } from "./en"
import { zhCN } from "./zh-cn"
import { zhHK } from "./zh-hk"

export const locales = {
  en,
  "zh-cn": zhCN,
  "zh-hk": zhHK,
}

export type Language = "en" | "zh-cn" | "zh-hk"
