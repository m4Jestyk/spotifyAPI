import csv from "csv-parser";
import fs from "fs";

function convertCsvToJson(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => resolve(results))
      .on("error", (error) => reject(error));
  });
}

async function main() {
  try {
    const jsonData = await convertCsvToJson("../high_popularity_spotify_data.csv");
    console.log(jsonData); // Logs the parsed JSON data
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
