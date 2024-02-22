import languageTags from "./data/ieft-bcp-47-language-tags";
import { TLanguageTagCode, TLanguageTagKeys, ILanguageTag, TLanguageCode, TCountryCode } from "./types";

export const getAllLanguageTags = (keys?: TLanguageTagKeys[]): Partial<ILanguageTag>[] => {
  return (Object.keys(languageTags) as TLanguageTagCode[]).map((languageTagCode) => getLanguageTag(languageTagCode, keys));
};

export const getLanguageTags = (languageTagCodes: TLanguageTagCode[], keys?: TLanguageTagKeys[]): Partial<ILanguageTag>[] => {
  return languageTagCodes.map((languageTagCode) => getLanguageTag(languageTagCode, keys));
};

export const getLanguageTagsByLanguage = (languageCode: TLanguageCode, keys?: TLanguageTagKeys[]): Partial<ILanguageTag>[] => {
  return Object.entries(languageTags)
    .filter(([_, languageTag]) => languageTag.language === languageCode)
    .map(([languageTagCode]) => {
      return getLanguageTag(languageTagCode as TLanguageTagCode, keys);
    });
};

export const getLanguageTagsByCountry = (countryCode: TCountryCode, keys?: TLanguageTagKeys[]): Partial<ILanguageTag>[] => {
  return Object.entries(languageTags)
    .filter(([_, languageTag]) => languageTag.country === countryCode)
    .map(([languageTagCode]) => {
      return getLanguageTag(languageTagCode as TLanguageTagCode, keys);
    });
};

export const getLanguageTag = (languageTagCode: TLanguageTagCode, keys?: TLanguageTagKeys[]): Partial<ILanguageTag> => {
  // Parse the language tag

  const languageTag: ILanguageTag = languageTags[languageTagCode];
  let result: { [key: string]: any } = { code: languageTagCode }; // Initialize result with 'code' first

  if (keys) {
    keys.forEach((key) => {
      if (key in languageTag) {
        result[key] = languageTag[key];
      }
    });
  } else {
    result = { ...result, ...languageTag }; // If no keys specified, copy all properties
  }

  return result;
};
