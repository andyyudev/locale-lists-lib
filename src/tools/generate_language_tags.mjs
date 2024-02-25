import { languageList, languageTagListUnique } from "../../dist/index.mjs";
import fs from "fs/promises";

const generateLanguageTagsList = () => {
  const result = {};

  // Generate language tags from language list
  Object.entries(languageList).forEach(([languageCode, { name, native, rtl, countries }]) => {
    if (countries.length) {
      countries.forEach((countryCode) => {
        const key = `${languageCode}_${countryCode}`;

        // If a unique language tag exists, use it as result instead of generating a new one
        if (languageTagListUnique[key]) {
          result[key] = languageTagListUnique[key];
        } else {
          result[key] = {
            name,
            native,
            language: languageCode,
            country: countryCode,
            rtl,
          };
        }
      });
    }
  });

  // Sort list by key
  const sortList = Object.keys(result)
    .sort()
    .reduce((acc, key) => {
      acc[key] = result[key];
      return acc;
    }, {});

  // Parse JSON and export to file
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

  writeDataToFile("src/data/tools/ieft-bcp-47-language-tags_export.json", parseJSONData);

  return;
};

generateLanguageTagsList();
