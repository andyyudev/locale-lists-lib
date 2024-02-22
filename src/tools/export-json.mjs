// import countries çassert { type: "json" };
import { getAllContinentsJSON } from "../../dist/index.mjs";
import { getCountries, getCountry } from "../../dist/index.mjs";
import fs from "fs/promises";

const exportListTOJSON = () => {
  const list = getAllContinentsJSON();
  const result = {};

  for (const [key, value] of Object.entries(list)) {
    result[key] = { ...value };
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

  writeDataToFile("src/data/json/continents_new.json", parseJSONData);

  return;
};
