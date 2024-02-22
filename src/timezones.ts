import timezones from "./data/iana-timezones";
import { TTimezoneCode, TTimezoneKeys, ITimezone, TCountryCode } from "./types";

export const getAllTimezones = (keys?: TTimezoneKeys[]): Partial<ITimezone>[] => {
  return (Object.keys(timezones) as TTimezoneCode[]).map((timezoneCode) => getTimezone(timezoneCode, keys));
};

export const getTimezones = (timezoneCodes: TTimezoneCode[], keys?: TTimezoneKeys[]): Partial<ITimezone>[] => {
  return timezoneCodes.map((timezoneCode) => getTimezone(timezoneCode, keys));
};

export const getTimezonesByCountry = (countryCode: TCountryCode, keys?: TTimezoneKeys[]): Partial<ITimezone>[] => {
  return Object.entries(timezones)
    .filter(([_, timezone]) => timezone.countries.some((c) => c === countryCode))
    .map(([timezoneCode]) => {
      return getTimezone(timezoneCode as TTimezoneCode, keys);
    });
};

export const getTimezone = (timezoneCode: TTimezoneCode, keys?: TTimezoneKeys[]): Partial<ITimezone> => {
  const timezone: ITimezone = timezones[timezoneCode];
  let result: { [key: string]: any } = { code: timezoneCode }; // Initialize result with 'code' first

  if (keys) {
    keys.forEach((key) => {
      if (key in timezone) {
        result[key] = timezone[key];
      }
    });
  } else {
    result = { ...result, ...timezone }; // If no keys specified, copy all properties
  }

  return result;
};
