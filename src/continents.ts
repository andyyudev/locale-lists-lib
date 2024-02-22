import continents from "./data/iso-3166-continents";
import { TContinentCode, TContinentKeys, IContinent, TCountryCode } from "./types";

export const getAllContinents = (keys?: TContinentKeys[]): Partial<IContinent>[] => {
  return (Object.keys(continents) as TContinentCode[]).map((continentCode) => getContinent(continentCode, keys));
};

export const getContinents = (continentCodes: TContinentCode[], keys?: TContinentKeys[]): Partial<IContinent>[] => {
  return continentCodes.map((continentCode) => getContinent(continentCode, keys));
};

export const getContinentsByCountry = (countryCode: TCountryCode, keys?: TContinentKeys[]): Partial<IContinent>[] => {
  return Object.entries(continents)
    .filter(([_, continent]) => continent.countries.some((c) => c === countryCode))
    .map(([continentCode]) => {
      return getContinent(continentCode as TContinentCode, keys);
    });
};

export const getContinent = (continentCode: TContinentCode, keys?: TContinentKeys[]): Partial<IContinent> => {
  const continent: IContinent = continents[continentCode];
  let result: { [key: string]: any } = { code: continentCode }; // Initialize result with 'code' first

  if (keys) {
    keys.forEach((key) => {
      if (key in continent) {
        result[key] = continent[key];
      }
    });
  } else {
    result = { ...result, ...continent }; // If no keys specified, copy all properties
  }

  return result;
};
