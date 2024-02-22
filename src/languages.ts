import languages from "./data/iso-639-1-languages";
import { TLanguageCode, TLanguageKeys, ILanguage, TCountryCode } from "./types";

export const getAllLanguages = (keys?: TLanguageKeys[]): Partial<ILanguage>[] => {
  return (Object.keys(languages) as TLanguageCode[]).map((languageCode) => getLanguage(languageCode, keys));
};

export const getLanguages = (languageCodes: TLanguageCode[], keys?: TLanguageKeys[]): Partial<ILanguage>[] => {
  return languageCodes.map((languageCode) => getLanguage(languageCode, keys));
};

export const getLanguagesByCountry = (countryCode: TCountryCode, keys?: TLanguageKeys[]): Partial<ILanguage>[] => {
  return Object.entries(languages)
    .filter(([_, language]) => language.countries.some((c) => c === countryCode))
    .map(([languageCode]) => {
      return getLanguage(languageCode as TLanguageCode, keys);
    });
};

export const getLanguage = (languageCode: TLanguageCode, keys?: TLanguageKeys[]): Partial<ILanguage> => {
  const language: ILanguage = languages[languageCode];
  let result: { [key: string]: any } = { code: languageCode }; // Initialize result with 'code' first

  if (keys) {
    keys.forEach((key) => {
      if (key in language) {
        result[key] = language[key];
      }
    });
  } else {
    result = { ...result, ...language }; // If no keys specified, copy all properties
  }

  return result;
};
