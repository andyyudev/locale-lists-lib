// import countries çassert { type: "json" };
import { getAllLanguages, getAllCountriesJSON } from "../../dist/index.mjs";
import fs from "fs/promises";

const exportListTOJSON = () => {
  const list = getAllLanguages();
  const countries = getAllCountriesJSON();
  const result = {};

  for (const [key, value] of Object.entries(list)) {
    result[value.code] = {};
    result[value.code].name = value.name;
    result[value.code].native = value.native;
    result[value.code].rtl = value.rtl;
    result[value.code].countries = Object.keys(countries).filter((country) => countries[country].languages.some((c) => c === value.code));
  }

  // Sort list by key
  const sortList = Object.keys(result)
    .sort()
    .reduce((acc, key) => {
      acc[key] = result[key];
      return acc;
    }, {});

  const parseJSONData = JSON.stringify(sortList, null, 2);

  // Write the JSON string to a file asynchronously
  async function writeDataToFile(filename, content) {
    try {
      await fs.writeFile(filename, content, "utf8");
      console.log("Data has been written to", filename);
    } catch (err) {
      console.error("An error occurred:", err);
    }
  }

  writeDataToFile("src/data/json/languages_new.json", parseJSONData);

  return;
};

exportListTOJSON();
