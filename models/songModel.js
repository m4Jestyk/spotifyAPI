import mongoose from "mongoose";

const trackSchema = new mongoose.Schema({
  track_artist: [String],
  time_signature: Number,
  speechiness: Number,
  track_popularity: Number,
  track_href: String,
  uri: String,
  track_album_name: String,
  playlist_name: String,
  analysis_url: String,
  track_id: { type: String, unique: true },
  track_name: String,
  track_album_release_date: Date,
  instrumentalness: Number,
  track_album_id: String,
  mode: Number,
  key: Number,
  duration_ms: Number,
  acousticness: Number,
  id: { type: String, unique: true },
  playlist_subgenre: String,
  type: String,
  playlist_id: String,
});

const Track = mongoose.model("Track", trackSchema);

export default Track;
