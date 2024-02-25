# locale-lists-lib

### Lists & utility functions for Continents, Countries, Currencies, Timezones, Languages, and Language Tags.

While many packages offer the ISO lists found in this package, my goal was to create a single package that encompasses all these lists with a consistent data structure and utility functions. This eliminates the need to install multiple packages and concern over data inconsistency.

Designed for modern web development, this package provides the most current and complete ISO and other international standard lists to developers aiming at international audiences.

### Features:

- All lists are updated to the latest version.
- Supports CommonJS, ESM.
- Written in TypeScript, so you can use auto complete in your IDE. In addition, you can import types for your own validation.
- Each list that has a relationship has been cross validated for accuracy.

### What's included in this library

- <strong>Continents & Countries:</strong> `ISO 3166-1 alpha-2` - https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes <br />
- <strong>Currencies:</strong> `ISO 4217` - https://en.wikipedia.org/wiki/ISO_4217 <br />
- <strong>Languages:</strong> `ISO 639-1` - https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes <br />
- <strong>Timezones:</strong> `IANA tz database` - https://en.wikipedia.org/wiki/List_of_tz_database_time_zones <br />
- <strong>Language Tags:</strong> `IETF BCP 47 language tags (reference only)` - https://en.wikipedia.org/wiki/IETF_language_tag <br />

> [!NOTE]
> The language tags in this library has the full combination of countries + languages, plus unique language variations if available. i.e zh_CN, zh_TW, zh_HK. If there is a language tag detail that is not listed here, please contact me to update it.

# Installation

```bash
npm install locale-lists-lib
```

# Usage

### How To Import

Named imports only, just import the functions you need, see below for available functions.

```js
// ESM Modules
import { getAllCountries } from "locale-lists-lib";
```

```js
// Common JS
const { getAllCountries } = require("locale-lists-lib");
```

### Functions

```js
// Continents
import { getAllContinents, getContinents, getContinentsByCountry, getContinent } from "locale-lists-lib";

// Countries
import { getAllCountries, getCountries, getCountry } from "locale-lists-lib";

// Currencies
import { getAllCurrencies, getCurrencies, getCurrenciesByCountry, getCurrency } from "locale-lists-lib";

// Timezones
import { getAllTimezones, getTimezones, getTimezonesByCountry, getTimezone } from "locale-lists-lib";

// Languages
import { getAllLanguages, getLanguages, getLanguagesByCountry, getLanguage } from "locale-lists-lib";

// Language Tags
import { getAllLanguageTags, getLanguageTags, getLanguageTagsByLanguage, getLanguageTagsByCountry, getLanguageTag } from "locale-lists-lib";
```

### Types

Import the types you need for your own data validation

<!-- prettier-ignore-start -->
```ts
import type { 
  TContinentCode, 
  TCountryCode, 
  TCurrencyCode, 
  TTimezoneCode, 
  TLanguageCode, 
  TLanguageTagCode, 
  TContinentKeys, 
  TCountryKeys, 
  TCurrencyKeys, 
  TTimezoneKeys, 
  TLanguageKeys, 
  TLanguageTagKeys, 
  IContinent, 
  ICountry, 
  ICountryFlag,
  ICurrency, 
  ITimezone, 
  ILanguage, 
  ILanguageTag, 
} from "locale-lists-lib";
```
<!-- prettier-ignore-end -->

### Return Data Structure Examples

Multiple records will return array of objects

```js
// Continent
{
  code: "AN", // ts: TContinentCode
  name: "Antarctica",
  countries: ["AQ", "BV", "GS", "HM", "TF"], // ts: TCountryCode[]
} // ts: IContinent
```

```js
// Country
{
  code: "DK", // ts: TCountryCode
  name: "Denmark",
  native: "Danmark",
  capital: "Copenhagen",
  continents: ["EU"], // ts: TContinentCode[]
  callingCodes: [45],
  currencies: ["DKK"], // ts: TCurrencyCode[]
  languages: ["da"], // ts: TLanguageCode[]
  timezones: ["Europe/Berlin"], // ts: TTimezoneCode[]
  emoji: "🇩🇰",
  flag: {
    png: "https://flagcdn.com/w320/dk.png",
    svg: "https://flagcdn.com/dk.svg",
  }, // ts: ICountryFlag
} // ts: ICountry
```

```js
// Currency
{
  code: "CAD", // ts: TCurrencyCode
  number: "124",
  name: "Canadian dollar",
  symbol: "$",
  countries: ["CA"], // ts: TCountryCode[]
} // ts: ICurrency
```

```js
// Timezone
{
  code: "America/Los_Angeles", // ts: TTimezoneCode
  name: "(GMT-08:00) Los Angeles, San Diego, San Jose, San Francisco, Seattle",
  label: "America/Los_Angeles (GMT-08:00)",
  countries: ["US"],
  utcOffset: -480,
  utcOffsetStr: "-08:00",
  dstOffset: -420,
  dstOffsetStr: "-07:00",
  withCountries: true,
} // ts: ITimezone
```

```js
// Language
{
  code: "fr", // ts: TLanguageCode
  name: "French",
  native: "Français",
  rtl: false,
  countries: ["BE", "BF", "BI", "BJ", "BL", "CA", "CD", "CF", "CG", "CH", "CI", "CM", "DJ", "FR", "GA", "GF", "GG", "GN", "GP", "GQ", "HT", "JE", "KM", "LB", "LU", "MC", "MF", "MG", "ML", "MQ", "NC", "NE", "PF", "PM", "RE", "RW", "SC", "SN", "TD", "TF", "TG", "VU", "WF", "YT"], // ts: TCountryCode[]
} // ts: ILanguage
```

```js
// Language Tag
{
  code: "en_US", // ts: TLanguageTagCode
  name: "English (US)",
  native: "English (US)",
  language: "en", // ts: TLanguageCode
  country: "US", // ts: TCountryCode
  rtl: false,
} // ts: ILanguageTag
```

# API Reference

- Continents
  - **[getAllContinents](#getallcontinentskeys)**
  - **[getContinents](#getcontinentscontinentcodes-keys)**
  - **[getContinentsByCountry](#getcontinentsbycountrycountrycode-keys)**
  - **[getContinent](#getcontinentcontinentcode-keys)**
- Countries
  - **[getAllCountries](#getallcountrieskeys)**
  - **[getCountries](#getcountriescountrycodes-keys)**
  - **[getCountry](#getcountrycountrycode-keys)**
- Currencies
  - **[getAllCurrencies](#getallcurrencieskeys)**
  - **[getCurrencies](#getcurrenciescurrencycodes-keys)**
  - **[getCurrenciesByCountry](#getcurrenciesbycountrycountrycode-keys)**
  - **[getCurrency](#getcurrencycurrencycode-keys)**
- Timezones
  - **[getAllTimezones](#getalltimezoneskeys)**
  - **[getTimezones](#gettimezonestimezonecodes-keys)**
  - **[getTimezonesByCountry](#gettimezonesbycountrycountrycode-keys)**
  - **[getTimezone](#gettimezonetimezonecode-keys)**
- Languages
  - **[getAllLanguages](#getalllanguageskeys)**
  - **[getLanguages](#getlanguageslanguagecodes-keys)**
  - **[getLanguagesByCountry](#getlanguagesbycountrycountrycode-keys)**
  - **[getLanguage](#getlanguagelanguagecode-keys)**
- Language Tags
  - **[getAllLanguageTags](#getalllanguagetagskeys)**
  - **[getLanguageTags](#getlanguagetagslanguagetagcodes-keys)**
  - **[getLanguageTagsByLanguage](#getlanguagetagsbylanguagelanguagecode-keys)**
  - **[getLanguageTagsByCountry](#getlanguagetagsbycountrycountrycode-keys)**
  - **[getLanguageTag](#getlanguagetaglanguagetagcode-keys)**
  - **[formatLanguageTagCode](#formatlanguagetagcodelanguagetagcode)**

## `getAllContinents([keys])`

### Parameters

| Name | Required   | Type  | TS               |
| ---- | ---------- | ----- | ---------------- |
| keys | `Optional` | Array | TContinentKeys[] |

### Return

| Name       | Type  | TS           |
| ---------- | ----- | ------------ |
| Continents | Array | IContinent[] |

### Examples

```js
const allContinents = getAllContinents();

// console.log(allContinents);
[
  {
    code: "AF",
    name: "Africa",
    countries: ["AO", "BF", "BI", "BJ", "BW", "CD", "CF", "CG", "CI", "CM", "CV", "DJ", "DZ", "EG", "EH", "ER", "ET", "GA", "GH", "GM", "GN", "GQ", "GW", "KE", "KM", "LR", "LS", "LY", "MA", "MG", "ML", "MR", "MU", "MW", "MZ", "NA", "NE", "NG", "RE", "RW", "SC", "SD", "SH", "SL", "SN", "SO", "SS", "ST", "SZ", "TD", "TG", "TN", "TZ", "UG", "YT", "ZA", "ZM", "ZW"],
  },
  {
    code: "AN",
    name: "Antarctica",
    countries: ["AQ", "BV", "GS", "HM", "TF"],
  },
  ...
]
```

```js
const allContinents = getAllContinents(["name"]);

// console.log(allContinents)
[
  {
    code: "AF",
    name: "Africa",
  },
  {
    code: "AN",
    name: "Antarctica",
  },
  ...
]
```

## `getContinents([continentCodes], [keys])`

### Parameters

| Name           | Required   | Type  | TS               |
| -------------- | ---------- | ----- | ---------------- |
| continentCodes | `Required` | Array | TContinentCode[] |
| keys           | `Optional` | Array | TContinentKeys[] |

### Return

| Name       | Type  | TS           |
| ---------- | ----- | ------------ |
| Continents | Array | IContinent[] |

### Examples

```js
const selectedContinents = getContinents(["AN", "SA"]);

// console.log(selectedContinents);
[
  {
    code: "AN",
    name: "Antarctica",
    countries: ["AQ", "BV", "GS", "HM", "TF"],
  },
  {
    code: "SA",
    name: "South America",
    countries: ["AR", "BO", "BR", "CL", "CO", "EC", "FK", "GF", "GY", "PE", "PY", "SR", "UY", "VE"],
  },
];
```

```js
const selectedContinents = getContinents(["AN", "SA"], ["name"]);

// console.log(selectedContinents);
[
  {
    code: "AN",
    name: "Antarctica",
  },
  {
    code: "SA",
    name: "South America",
  },
];
```

## `getContinentsByCountry(countryCode, [keys])`

### Parameters

| Name        | Required   | Type   | TS               |
| ----------- | ---------- | ------ | ---------------- |
| countryCode | `Required` | String | TCountryCode     |
| keys        | `Optional` | Array  | TContinentKeys[] |

### Return

| Name       | Type  | TS           |
| ---------- | ----- | ------------ |
| Continents | Array | IContinent[] |

### Examples

```js
const continentsInRU = getContinentsByCountry("RU");

// console.log(continentsInRU);
[
  {
    code: "AS",
    name: "Asia",
    countries: ["AE", "AF", "AM", "AZ", "BD", "BH", "BN", "BT", "CC", "CN", "CX", "EG", "GE", "HK", "ID", "IL", "IN", "IO", "IQ", "IR", "JO", "JP", "KG", "KH", "KP", "KR", "KW", "KZ", "LA", "LB", "LK", "MM", "MN", "MO", "MV", "MY", "NP", "OM", "PH", "PK", "PS", "QA", "RU", "SA", "SG", "SY", "TH", "TJ", "TM", "TR", "TW", "UZ", "VN", "YE"],
  },
  {
    code: "EU",
    name: "Europe",
    countries: ["AD", "AL", "AT", "AX", "AZ", "BA", "BE", "BG", "BY", "CH", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FO", "FR", "GB", "GE", "GG", "GI", "GR", "HR", "HU", "IE", "IM", "IS", "IT", "JE", "KZ", "LI", "LT", "LU", "LV", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RS", "RU", "SE", "SI", "SJ", "SK", "SM", "TR", "UA", "VA", "XK"],
  },
];
```

```js
const continentsInRU = getContinentsByCountry("RU", ["name"]);

// console.log(continentsInRU);
[
  {
    code: "AS",
    name: "Asia",
  },
  {
    code: "EU",
    name: "Europe",
  },
];
```

## `getContinent(continentCode, [keys])`

### Parameters

| Name          | Required   | Type   | TS               |
| ------------- | ---------- | ------ | ---------------- |
| continentCode | `Required` | String | TContinentCode   |
| keys          | `Optional` | Array  | TContinentKeys[] |

### Return

| Name      | Type   | TS         |
| --------- | ------ | ---------- |
| Continent | Object | IContinent |

### Examples

```js
const continentOC = getContinent("OC");

// console.log(continentOC);
{
  code: "OC",
  name: "Oceania",
    countries: ["AS", "AU", "CK", "FJ", "FM", "GU", "KI", "MH", "MP", "NC", "NF", "NR", "NU", "NZ", "PF", "PG", "PN", "PW", "SB", "TK", "TL", "TO", "TV", "UM", "VU", "WF", "WS"],
}
```

```js
const continentOC = getContinent("OC", ["name"]);

// console.log(continentOC);
{
  code: "OC",
  name: "Oceania",
}
```

## `getAllCountries([keys])`

### Parameters

| Name | Required   | Type  | TS             |
| ---- | ---------- | ----- | -------------- |
| keys | `Optional` | Array | TCountryKeys[] |

### Return

| Name      | Type  | TS         |
| --------- | ----- | ---------- |
| Countries | Array | ICountry[] |

### Examples

```js
const allCountries = getAllCountries();

// console.log(allCountries);
[
  {
    code: "AD",
    name: "Andorra",
    native: "Andorra",
    capital: "Andorra la Vella",
    continents: ["EU"],
    callingCodes: [376],
    currencies: ["EUR"],
    languages: ["ca"],
    timezones: ["Europe/Andorra"],
    emoji: "🇦🇩",
    flag: {
      png: "https://flagcdn.com/w320/ad.png",
      svg: "https://flagcdn.com/ad.svg",
    },
  },
  {
    code: "AE",
    name: "United Arab Emirates",
    native: "دولة الإمارات العربية المتحدة",
    capital: "Abu Dhabi",
    continents: ["AS"],
    callingCodes: [971],
    currencies: ["AED"],
    languages: ["ar"],
    timezones: ["Asia/Dubai"],
    emoji: "🇦🇪",
    flag: {
      png: "https://flagcdn.com/w320/ae.png",
      svg: "https://flagcdn.com/ae.svg",
    },
  },
  ...
]
```

```js
const allCountries = getAllCountries(["name", "emoji"]);

// console.log(allCountries)
[
  {
    code: "AD",
    name: "Andorra",
    emoji: "🇦🇩",
  },
  {
    code: "AE",
    name: "United Arab Emirates",
    emoji: "🇦🇪",
  },
  ...
]
```

## `getCountries([countryCodes], [keys])`

### Parameters

| Name         | Required   | Type  | TS             |
| ------------ | ---------- | ----- | -------------- |
| countryCodes | `Required` | Array | TCountryCode[] |
| keys         | `Optional` | Array | TCountryKeys[] |

### Return

| Name      | Type  | TS         |
| --------- | ----- | ---------- |
| Countries | Array | ICountry[] |

### Examples

```js
const selectedCountries = getCountries(["DE", "GB"]);

// console.log(selectedCountries);
[
  {
    code: "DE",
    name: "Germany",
    native: "Deutschland",
    capital: "Berlin",
    continents: ["EU"],
    callingCodes: [49],
    currencies: ["EUR"],
    languages: ["de"],
    timezones: ["Europe/Berlin", "Europe/Zurich"],
    emoji: "🇩🇪",
    flag: {
      png: "https://flagcdn.com/w320/de.png",
      svg: "https://flagcdn.com/de.svg",
    },
  },
  {
    code: "GB",
    name: "United Kingdom",
    native: "United Kingdom",
    capital: "London",
    continents: ["EU"],
    callingCodes: [44],
    currencies: ["GBP"],
    languages: ["en"],
    timezones: ["Europe/London"],
    emoji: "🇬🇧",
    flag: {
      png: "https://flagcdn.com/w320/gb.png",
      svg: "https://flagcdn.com/gb.svg",
    },
  },
];
```

```js
const selectedCountries = getCountries(["DE", "GB"], ["name", "emoji"]);

// console.log(selectedCountries);
[
  {
    code: "DE",
    name: "Germany",
    emoji: "🇩🇪",
  },
  {
    code: "GB",
    name: "United Kingdom",
    emoji: "🇬🇧",
  },
];
```

## `getCountry(countryCode, [keys])`

### Parameters

| Name        | Required   | Type   | TS             |
| ----------- | ---------- | ------ | -------------- |
| countryCode | `Required` | String | TCountryCode   |
| keys        | `Optional` | Array  | TCountryKeys[] |

### Return

| Name    | Type   | TS       |
| ------- | ------ | -------- |
| Country | Object | ICountry |

### Examples

```js
const countryKR = getCountry("KR");

// console.log(countryKR);
{
  code: "KR",
  name: "South Korea",
  native: "대한민국",
  capital: "Seoul",
  continents: ["AS"],
  callingCodes: [82],
  currencies: ["KRW"],
  languages: ["ko"],
  timezones: ["Asia/Seoul"],
  emoji: "🇰🇷",
  flag: {
    png: "https://flagcdn.com/w320/kr.png",
    svg: "https://flagcdn.com/kr.svg",
  },
}
```

```js
const countryKR = getCountry("KR", ["name", "emoji"]);

// console.log(countryKR);
{
  code: "KR",
  name: "South Korea",
  emoji: "🇰🇷".
}
```

## `getAllCurrencies([keys])`

### Parameters

| Name | Required   | Type  | TS              |
| ---- | ---------- | ----- | --------------- |
| keys | `Optional` | Array | TCurrencyKeys[] |

### Return

| Name       | Type  | TS          |
| ---------- | ----- | ----------- |
| Currencies | Array | ICurrency[] |

### Examples

```js
const allCurrencies = getAllCurrencies();

// console.log(allCurrencies);
[
  {
    code: "AED",
    number: "784",
    name: "United Arab Emirates dirham",
    symbol: "د.إ",
    countries: ["AE"],
  },
  {
    code: "AFN",
    number: "971",
    name: "Afghan afghani",
    symbol: "؋",
    countries: ["AF"],
  },
  ...
]
```

```js
const allCurrencies = getAllCurrencies(["name", "symbol"]);

// console.log(allCurrencies)
[
  {
    code: "AED",
    name: "United Arab Emirates dirham",
    symbol: "د.إ",
  },
  {
    code: "AFN",
    name: "Afghan afghani",
    symbol: "؋",
  },
  ...
]
```

## `getCurrencies([currencyCodes], [keys])`

### Parameters

| Name          | Required   | Type  | TS              |
| ------------- | ---------- | ----- | --------------- |
| currencyCodes | `Required` | Array | TCurrencyCode[] |
| keys          | `Optional` | Array | TCurrencyKeys[] |

### Return

| Name       | Type  | TS          |
| ---------- | ----- | ----------- |
| Currencies | Array | ICurrency[] |

### Examples

```js
const selectedCurrencies = getCurrencies(["AUD", "BRL"]);

// console.log(selectedCurrencies);
[
  {
    code: "AUD",
    number: "036",
    name: "Australian dollar",
    symbol: "$",
    countries: ["AU", "CC", "HM", "KI", "NR", "NF", "TV"],
  },
  {
    code: "BRL",
    number: "986",
    name: "Brazilian real",
    symbol: "R$",
    countries: ["BR"],
  },
];
```

```js
const selectedCurrencies = getCurrencies(["AUD", "BRL"], ["name", "symbol"]);

// console.log(selectedCurrencies);
[
  {
    code: "AUD",
    name: "Australian dollar",
    symbol: "$",
  },
  {
    code: "BRL",
    name: "Brazilian real",
    symbol: "R$",
  },
];
```

## `getCurrenciesByCountry(countryCode, [keys])`

### Parameters

| Name        | Required   | Type   | TS              |
| ----------- | ---------- | ------ | --------------- |
| countryCode | `Required` | String | TCountryCode    |
| keys        | `Optional` | Array  | TCurrencyKeys[] |

### Return

| Name       | Type  | TS          |
| ---------- | ----- | ----------- |
| Currencies | Array | ICurrency[] |

### Examples

```js
const currenciesInFR = getCurrenciesByCountry("FR");

// console.log(currenciesInFR);
[
  {
    code: "EUR",
    number: "978",
    name: "Euro",
    symbol: "€",
    countries: ["AX", "AD", "AT", "BE", "HR", "CY", "EE", "FI", "FR", "GF", "TF", "DE", "GR", "GP", "IE", "IT", "XK", "LV", "LT", "LU", "MT", "MQ", "YT", "MC", "ME", "NL", "PT", "RE", "BL", "MF", "PM", "SM", "SK", "SI", "ES", "VA"],
  },
];
```

```js
const currenciesInFR = getCurrenciesByCountry("FR", ["name", "symbol"]);

// console.log(currenciesInFR);
[
  {
    code: "EUR",
    name: "Euro",
    symbol: "€",
  },
];
```

## `getCurrency(currencyCode, [keys])`

### Parameters

| Name         | Required   | Type   | TS              |
| ------------ | ---------- | ------ | --------------- |
| currencyCode | `Required` | String | TCurrencyCode   |
| keys         | `Optional` | Array  | TCurrencyKeys[] |

### Return

| Name     | Type   | TS        |
| -------- | ------ | --------- |
| Currency | Object | ICurrency |

### Examples

```js
const currencyJPY = getCurrency("JPY");

// console.log(currencyJPY);
{
  code: "JPY",
  number: "392",
  name: "Japanese yen",
  symbol: "¥",
  countries: ["JP"],
}
```

```js
const currencyJPY = getCurrency("JPY", ["name", "symbol"]);

// console.log(currencyJPY);
{
  code: "JPY",
  name: "Japanese yen",
  symbol: "¥",
}
```

## `getAllTimezones([keys])`

### Parameters

| Name | Required   | Type  | TS              |
| ---- | ---------- | ----- | --------------- |
| keys | `Optional` | Array | TTimezoneKeys[] |

### Return

| Name      | Type  | TS          |
| --------- | ----- | ----------- |
| Timezones | Array | ITimezone[] |

### Examples

```js
const allTimezones = getAllTimezones();

// console.log(allTimezones);
[
  {
    code: "Africa/Abidjan",
    name: "(GMT+00:00) Abidjan, Abobo, Bouaké, Daloa, San-Pédro",
    label: "Africa/Abidjan (GMT+00:00)",
    countries: ["CI", "BF", "GH", "GM", "GN", "IS", "ML", "MR", "SH", "SL", "SN", "TG"],
    utcOffset: 0,
    utcOffsetStr: "+00:00",
    dstOffset: 0,
    dstOffsetStr: "+00:00",
    withCountries: true,
  },
  {
    code: "Africa/Algiers",
    name: "(GMT+01:00) Algiers, Boumerdas, Oran, Tébessa, Constantine",
    label: "Africa/Algiers (GMT+01:00)",
    countries: ["DZ"],
    utcOffset: 60,
    utcOffsetStr: "+01:00",
    dstOffset: 60,
    dstOffsetStr: "+01:00",
    withCountries: true,
  },
  ...
]
```

```js
const allTimezones = getAllTimezones(["name", "label"]);

// console.log(allTimezones)
[
  {
    code: "Africa/Abidjan",
    name: "(GMT+00:00) Abidjan, Abobo, Bouaké, Daloa, San-Pédro",
    label: "Africa/Abidjan (GMT+00:00)",
  },
  {
    code: "Africa/Algiers",
    name: "(GMT+01:00) Algiers, Boumerdas, Oran, Tébessa, Constantine",
    label: "Africa/Algiers (GMT+01:00)",
  },
  ...
]
```

## `getTimezones([timezoneCodes], [keys])`

### Parameters

| Name          | Required   | Type  | TS              |
| ------------- | ---------- | ----- | --------------- |
| timezoneCodes | `Required` | Array | TTimezoneCode[] |
| keys          | `Optional` | Array | TTimezoneKeys[] |

### Return

| Name      | Type  | TS          |
| --------- | ----- | ----------- |
| Timezones | Array | ITimezone[] |

### Examples

```js
const selectedTimezones = getTimezones(["America/Cancun", "Asia/Dubai"]);

// console.log(selectedTimezones);
[
  {
    code: "America/Cancun",
    name: "(GMT-05:00) Cancún, Chetumal, Playa del Carmen, Cozumel, Felipe Carrillo Puerto",
    label: "America/Cancun (GMT-05:00)",
    countries: ["MX"],
    utcOffset: -300,
    utcOffsetStr: "-05:00",
    dstOffset: -300,
    dstOffsetStr: "-05:00",
    withCountries: true,
  },
  {
    code: "Asia/Dubai",
    name: "(GMT+04:00) Dubai, Sharjah, Abu Dhabi, Ajman City, Ras Al Khaimah City",
    label: "Asia/Dubai (GMT+04:00)",
    countries: ["AE", "OM", "RE", "SC", "TF"],
    utcOffset: 240,
    utcOffsetStr: "+04:00",
    dstOffset: 240,
    dstOffsetStr: "+04:00",
    withCountries: true,
  },
];
```

```js
const selectedTimezones = getTimezones(["America/Cancun", "Asia/Dubai"], ["name", "label"]);

// console.log(selectedTimezones);
[
  {
    code: "America/Cancun",
    name: "(GMT-05:00) Cancún, Chetumal, Playa del Carmen, Cozumel, Felipe Carrillo Puerto",
    label: "America/Cancun (GMT-05:00)",
  },
  {
    code: "Asia/Dubai",
    name: "(GMT+04:00) Dubai, Sharjah, Abu Dhabi, Ajman City, Ras Al Khaimah City",
    label: "Asia/Dubai (GMT+04:00)",
  },
];
```

## `getTimezonesByCountry(countryCode, [keys])`

### Parameters

| Name        | Required   | Type   | TS              |
| ----------- | ---------- | ------ | --------------- |
| countryCode | `Required` | String | TCountryCode    |
| keys        | `Optional` | Array  | TTimezoneKeys[] |

### Return

| Name      | Type  | TS          |
| --------- | ----- | ----------- |
| Timezones | Array | ITimezone[] |

### Examples

```js
const timezonesInTW = getTimezonesByCountry("TW");

// console.log(timezonesInTW);
[
  {
    code: "Asia/Taipei",
    name: "(GMT+08:00) Taipei, Kaohsiung, Taichung, Tainan, Banqiao",
    label: "Asia/Taipei (GMT+08:00)",
    countries: ["TW"],
    utcOffset: 480,
    utcOffsetStr: "+08:00",
    dstOffset: 480,
    dstOffsetStr: "+08:00",
    withCountries: true,
  },
];
```

```js
const timezonesInTW = getTimezonesByCountry("TW", ["name", "label"]);

// console.log(timezonesInTW);
[
  {
    code: "Asia/Taipei",
    name: "(GMT+08:00) Taipei, Kaohsiung, Taichung, Tainan, Banqiao",
    label: "Asia/Taipei (GMT+08:00)",
  },
];
```

## `getTimezone(timezoneCode, [keys])`

### Parameters

| Name         | Required   | Type   | TS              |
| ------------ | ---------- | ------ | --------------- |
| timezoneCode | `Required` | String | TTimezoneCode   |
| keys         | `Optional` | Array  | TTimezoneKeys[] |

### Return

| Name     | Type   | TS        |
| -------- | ------ | --------- |
| Timezone | Object | ITimezone |

### Examples

```js
const timezoneAtlanticBermuda = getTimezone("Atlantic/Bermuda");

// console.log(timezoneAtlanticBermuda);
{
  code: "Atlantic/Bermuda",
  name: "(GMT-04:00) Hamilton",
  label: "Atlantic/Bermuda (GMT-04:00)",
  countries: ["BM"],
  utcOffset: -240,
  utcOffsetStr: "-04:00",
  dstOffset: -180,
  dstOffsetStr: "-03:00",
  withCountries: true,
}
```

```js
const timezoneAtlanticBermuda = getTimezone("Atlantic/Bermuda", ["name", "label"]);

// console.log(timezoneAtlanticBermuda);
{
  code: "Atlantic/Bermuda",
  name: "(GMT-04:00) Hamilton",
  label: "Atlantic/Bermuda (GMT-04:00)",
}
```

## `getAllLanguages([keys])`

### Parameters

| Name | Required   | Type  | TS              |
| ---- | ---------- | ----- | --------------- |
| keys | `Optional` | Array | TLanguageKeys[] |

### Return

| Name      | Type  | TS          |
| --------- | ----- | ----------- |
| Languages | Array | ILanguage[] |

### Examples

```js
const allLanguages = getAllLanguages();

// console.log(allLanguages);
[
  {
    code: "aa",
    name: "Afar",
    native: "Afar",
    rtl: false,
    countries: [],
  },
  {
    code: "ab",
    name: "Abkhazian",
    native: "Аҧсуа",
    rtl: false,
    countries: [],
  },
  ...
]
```

```js
const allLanguages = getAllLanguages(["name", "native"]);

// console.log(allLanguages)
[
  {
    code: "aa",
    name: "Afar",
    native: "Afar",
  },
  {
    code: "ab",
    name: "Abkhazian",
    native: "Аҧсуа",
  },
  ...
]
```

## `getLanguages([languageCodes], [keys])`

### Parameters

| Name          | Required   | Type  | TS              |
| ------------- | ---------- | ----- | --------------- |
| languageCodes | `Required` | Array | TLanguageCode[] |
| keys          | `Optional` | Array | TLanguageKeys[] |

### Return

| Name      | Type  | TS          |
| --------- | ----- | ----------- |
| Languages | Array | ILanguage[] |

### Examples

```js
const selectedLanguages = getLanguages(["es", "th"]);

// console.log(selectedLanguages);
[
  {
    code: "es",
    name: "Spanish",
    native: "Español",
    rtl: false,
    countries: ["AR", "BO", "BZ", "CL", "CO", "CR", "CU", "DO", "EC", "EH", "ES", "GQ", "GT", "GU", "HN", "MX", "NI", "PA", "PE", "PR", "PY", "SV", "UY", "VE"],
  },
  {
    code: "th",
    name: "Thai",
    native: "ไทย / Phasa Thai",
    rtl: false,
    countries: ["TH"],
  },
];
```

```js
const selectedLanguages = getLanguages(["es", "th"], ["name", "native"]);

// console.log(selectedLanguages);
[
  {
    code: "es",
    name: "Spanish",
    native: "Español",
  },
  {
    code: "th",
    name: "Thai",
    native: "ไทย / Phasa Thai",
  },
];
```

## `getLanguagesByCountry(countryCode, [keys])`

### Parameters

| Name        | Required   | Type   | TS              |
| ----------- | ---------- | ------ | --------------- |
| countryCode | `Required` | String | TCountryCode    |
| keys        | `Optional` | Array  | TLanguageKeys[] |

### Return

| Name      | Type  | TS          |
| --------- | ----- | ----------- |
| Languages | Array | ILanguage[] |

### Examples

```js
const languagesInSE = getLanguagesByCountry("SE");

// console.log(languagesInSE);
[
  {
    code: "sv",
    name: "Swedish",
    native: "Svenska",
    rtl: false,
    countries: ["AX", "FI", "SE"],
  },
];
```

```js
const languagesInSE = getLanguagesByCountry("SE", ["name", "native"]);

// console.log(languagesInSE);
[
  {
    code: "sv",
    name: "Swedish",
    native: "Svenska",
  },
];
```

## `getLanguage(languageCode, [keys])`

### Parameters

| Name         | Required   | Type   | TS              |
| ------------ | ---------- | ------ | --------------- |
| languageCode | `Required` | String | TLanguageCode   |
| keys         | `Optional` | Array  | TLanguageKeys[] |

### Return

| Name     | Type   | TS        |
| -------- | ------ | --------- |
| Language | Object | ILanguage |

### Examples

```js
const languageRO = getLanguage("ro");

// console.log(languageRO);
{
  code: "ro",
  name: "Romanian",
  native: "Română",
  rtl: false,
  countries: ["MD", "RO"],
}
```

```js
const languageRO = getLanguage("ro", ["name", "native"]);

// console.log(languageRO);
{
  code: "ro",
  name: "Romanian",
  native: "Română",
}
```

## `getAllLanguageTags([keys])`

### Parameters

| Name | Required   | Type  | TS                 |
| ---- | ---------- | ----- | ------------------ |
| keys | `Optional` | Array | TLanguageTagKeys[] |

### Return

| Name         | Type  | TS             |
| ------------ | ----- | -------------- |
| LanguageTags | Array | ILanguageTag[] |

### Examples

```js
const allLanguageTags = getAllLanguageTags();

// console.log(allLanguageTags);
[
  {
    code: "af_NA",
    name: "Afrikaans",
    native: "Afrikaans",
    language: "af",
    country: "NA",
    rtl: false,
  },
  {
    code: "af_ZA",
    name: "Afrikaans",
    native: "Afrikaans",
    language: "af",
    country: "ZA",
    rtl: false,
  },
  ...
]
```

```js
const allLanguageTags = getAllLanguageTags(["name", "native"]);

// console.log(allLanguageTags)
[
  {
    code: "af_NA",
    name: "Afrikaans",
    native: "Afrikaans",
  },
  {
    code: "af_ZA",
    name: "Afrikaans",
    native: "Afrikaans",
  },
  ...
]
```

## `getLanguageTags([languageTagCodes], [keys])`

### Parameters

| Name             | Required   | Type  | TS                 |
| ---------------- | ---------- | ----- | ------------------ |
| languageTagCodes | `Required` | Array | TLanguageTagCode[] |
| keys             | `Optional` | Array | TLanguageTagKeys[] |

### Return

| Name         | Type  | TS             |
| ------------ | ----- | -------------- |
| LanguageTags | Array | ILanguageTag[] |

### Examples

```js
const selectedLanguageTags = getLanguageTags(["en_US", "zh_TW"]);

// console.log(selectedLanguageTags);
[
  {
    code: "en_US",
    name: "English (US)",
    native: "English (US)",
    language: "en",
    country: "US",
    rtl: false,
  },
  {
    code: "zh_TW",
    name: "Traditional Chinese (Taiwan)",
    native: "中文(台灣)",
    language: "zh",
    country: "TW",
    rtl: false,
  },
];
```

```js
const selectedLanguageTags = getLanguageTags(["en_US", "zh_TW"], ["name", "native"]);

// console.log(selectedLanguageTags);
[
  {
    code: "en_US",
    name: "English (US)",
    native: "English (US)",
  },
  {
    code: "zh_TW",
    name: "Traditional Chinese (Taiwan)",
    native: "中文(台灣)",
  },
];
```

## `getLanguageTagsByLanguage(languageCode, [keys])`

### Parameters

| Name         | Required   | Type   | TS                 |
| ------------ | ---------- | ------ | ------------------ |
| languageCode | `Required` | String | TLanguageCode      |
| keys         | `Optional` | Array  | TLanguageTagKeys[] |

### Return

| Name         | Type  | TS             |
| ------------ | ----- | -------------- |
| LanguageTags | Array | ILanguageTag[] |

### Examples

```js
const languageTagsInES = getLanguageTagsByLanguage("es");

// console.log(languageTagsInES);
[
  {
    code: "es_AR",
    name: "Spanish",
    native: "Español",
    language: "es",
    country: "AR",
    rtl: false,
  },
  {
    code: "es_BO",
    name: "Spanish",
    native: "Español",
    language: "es",
    country: "BO",
    rtl: false,
  },
  ...
];
```

```js
const languageTagsInES = getLanguageTagsByLanguage("es", ["name", "native"]);

// console.log(languageTagsInES);
[
  {
    code: "es_AR",
    name: "Spanish",
    native: "Español",
  },
  {
    code: "es_BO",
    name: "Spanish",
    native: "Español",
  },
  ...
];
```

## `getLanguageTagsByCountry(countryCode, [keys])`

### Parameters

| Name        | Required   | Type   | TS                 |
| ----------- | ---------- | ------ | ------------------ |
| countryCode | `Required` | String | TCountryCode       |
| keys        | `Optional` | Array  | TLanguageTagKeys[] |

### Return

| Name         | Type  | TS             |
| ------------ | ----- | -------------- |
| LanguageTags | Array | ILanguageTag[] |

### Examples

```js
const languageTagsInUS = getLanguageTagsByCountry("US");

// console.log(languageTagsInUS);
[
  {
    code: "en_US",
    name: "English (US)",
    native: "English (US)",
    language: "en",
    country: "US",
    rtl: false,
  },
];
```

```js
const languageTagsInUS = getLanguageTagsByCountry("SE", ["name", "native"]);

// console.log(languageTagsInUS);
[
  {
    code: "en_US",
    name: "English (US)",
    native: "English (US)",
  },
];
```

## `getLanguageTag(languageTagCode, [keys])`

### Parameters

| Name            | Required   | Type   | TS               |
| --------------- | ---------- | ------ | ---------------- |
| languageTagCode | `Required` | String | TLanguageTagCode |
| keys            | `Optional` | Array  | TLanguageKeys[]  |

### Return

| Name        | Type   | TS           |
| ----------- | ------ | ------------ |
| LanguageTag | Object | ILanguageTag |

### Examples

```js
const languageTagth_TH = getLanguage("th_TH");

// console.log(languageTagth_TH);
{
  code: "th_TH",
  name: "Thai",
  native: "ไทย / Phasa Thai",
  language: "th",
  country: "TH",
  rtl: false,
}
```

```js
const languageTagth_TH = getLanguage("th_TH", ["name", "native"]);

// console.log(languageTagth_TH);
{
  code: "th_TH",
  name: "Thai",
  native: "ไทย / Phasa Thai",
}
```

## `formatLanguageTagCode(languageTagCode)`

### Parameters

| Name            | Required   | Type   | Length  |
| --------------- | ---------- | ------ | ------- |
| languageTagCode | `Required` | String | 5 chars |

### Return

| Name            | Type   | TS               |
| --------------- | ------ | ---------------- |
| languageTagCode | String | TLanguageTagCode |

### Examples

```js
const formattedLanguageTagCode = formatLanguageTagCode("TH-tH");

// console.log(formattedLanguageTagCode);
th_TH;
```

# Contact

Feel free to contact me for any questions or issues at [hi@andyyu.dev](mailto:hi@andyyu.dev).

# Licensing

The code in this project is licensed under MIT license.
