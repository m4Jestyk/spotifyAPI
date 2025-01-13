import csv from "csv-parser";
import fs from "fs";

export function convertCsvToJson(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => {
        results.push({
          track_artist: data.track_artist.split(", "), // Convert string to array
          time_signature: Number(data.time_signature),
          speechiness: parseFloat(data.speechiness),
          track_popularity: Number(data.track_popularity),
          track_href: data.track_href,
          uri: data.uri,
          track_album_name: data.track_album_name,
          playlist_name: data.playlist_name,
          analysis_url: data.analysis_url,
          track_id: data.track_id,
          track_name: data.track_name,
          track_album_release_date: new Date(data.track_album_release_date),
          instrumentalness: parseFloat(data.instrumentalness),
          track_album_id: data.track_album_id,
          mode: Number(data.mode),
          key: Number(data.key),
          duration_ms: Number(data.duration_ms),
          acousticness: parseFloat(data.acousticness),
          id: data.id,
          playlist_subgenre: data.playlist_subgenre,
          type: data.type,
          playlist_id: data.playlist_id,
        });
      })
      .on("end", () => resolve(results))
      .on("error", (error) => reject(error));
  });
}
