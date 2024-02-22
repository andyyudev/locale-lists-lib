import countries from "./data/iso-3166-1-a2-countries";
import { TCountryCode, TCountryKeys, ICountry } from "./types";

export const getAllCountries = (keys?: TCountryKeys[]): Partial<ICountry>[] => {
  return (Object.keys(countries) as TCountryCode[]).map((countryCode) => getCountry(countryCode, keys));
};

export const getCountries = (countryCodes: TCountryCode[], keys?: TCountryKeys[]): Partial<ICountry>[] => {
  return countryCodes.map((countryCode) => getCountry(countryCode, keys));
};

export const getCountry = (countryCode: TCountryCode, keys?: TCountryKeys[]): Partial<ICountry> => {
  const country: ICountry = countries[countryCode];
  let result: { [key: string]: any } = { code: countryCode }; // Initialize result with 'code' first

  if (keys) {
    keys.forEach((key) => {
      if (key in country) {
        result[key] = country[key];
      }
    });
  } else {
    result = { ...result, ...country }; // If no keys specified, copy all properties
  }

  return result;
};
