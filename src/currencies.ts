import currencies from "./data/iso-4217-currencies";
import { TCurrencyCode, TCurrencyKeys, ICurrency, TCountryCode } from "./types";

export const getAllCurrencies = (keys?: TCurrencyKeys[]): Partial<ICurrency>[] => {
  return (Object.keys(currencies) as TCurrencyCode[]).map((currencyCode) => getCurrency(currencyCode, keys));
};

export const getCurrencies = (currencyCodes: TCurrencyCode[], keys?: TCurrencyKeys[]): Partial<ICurrency>[] => {
  return currencyCodes.map((currencyCode) => getCurrency(currencyCode, keys));
};

export const getCurrenciesByCountry = (countryCode: TCountryCode, keys?: TCurrencyKeys[]): Partial<ICurrency>[] => {
  return Object.entries(currencies)
    .filter(([_, currency]) => currency.countries.some((c) => c === countryCode))
    .map(([currencyCode]) => {
      return getCurrency(currencyCode as TCurrencyCode, keys);
    });
};

export const getCurrency = (currencyCode: TCurrencyCode, keys?: TCurrencyKeys[]): Partial<ICurrency> => {
  const currency: ICurrency = currencies[currencyCode];
  let result: { [key: string]: any } = { code: currencyCode }; // Initialize result with 'code' first

  if (keys) {
    keys.forEach((key) => {
      if (key in currency) {
        result[key] = currency[key];
      }
    });
  } else {
    result = { ...result, ...currency }; // If no keys specified, copy all properties
  }

  return result;
};
