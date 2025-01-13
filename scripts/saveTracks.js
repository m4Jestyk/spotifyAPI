import { connectToDatabase } from "../database/connection.js";
import Track from "../models/songModel.js";
import { convertCsvToJson } from "../services/csvToJson.js";
import path from "path";
import { fileURLToPath } from "url";

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function saveTracks() {
  await connectToDatabase();

  try {
    const filePath = path.join(__dirname, "../high_popularity_spotify_data.csv");
    const tracks = await convertCsvToJson(filePath);
    await Track.insertMany(tracks);
    console.log("Tracks saved successfully!");
  } catch (error) {
    console.error("Error saving tracks:", error);
  } finally {
    process.exit(); // Exit the script after completion
  }
}

saveTracks();
