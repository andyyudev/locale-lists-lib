import { continentList, countryList, currencyList, languageList, languageTagList, languageTagListUnique, timezoneList } from "../../dist/index.mjs";

// Generate a string of all the keys for type unions
const generateKeyValues = (data) => {
  const keys = Object.keys(data);
  const keyValues = keys.join('" | "');
  return `"${keyValues}"`;
};

console.log(generateKeyValues(languageTagList));
