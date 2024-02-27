import { TLanguageTags } from "../types";

export default {
  en_GB: {
    name: "English (UK)",
    native: "English (UK)",
    language: "en",
    country: "GB",
    rtl: false,
  },
  en_US: {
    name: "English (US)",
    native: "English (US)",
    language: "en",
    country: "US",
    rtl: false,
  },
  fr_CA: {
    name: "French (Canada)",
    native: "Français (Canada)",
    language: "fr",
    country: "CA",
    rtl: false,
  },
  fr_FR: {
    name: "French (France)",
    native: "Français (France)",
    language: "fr",
    country: "FR",
    rtl: false,
  },
  pt_BR: {
    name: "Portuguese (Brasil)",
    native: "Português (Brasil)",
    language: "pt",
    country: "BR",
    rtl: false,
  },
  pt_PT: {
    name: "Portuguese (Portugal)",
    native: "Português (Portugal)",
    language: "pt",
    country: "PT",
    rtl: false,
  },
  zh_CN: {
    name: "Simplified Chinese (China)",
    native: "中文(简体)",
    language: "zh",
    country: "CN",
    rtl: false,
  },
  zh_HK: {
    name: "Traditional Chinese (Hong Kong)",
    native: "中文(香港)",
    language: "zh",
    country: "HK",
    rtl: false,
  },
  zh_TW: {
    name: "Traditional Chinese (Taiwan)",
    native: "中文(台灣)",
    language: "zh",
    country: "TW",
    rtl: false,
  },
} satisfies Partial<TLanguageTags>;
