import mongoose from "mongoose";

let Country = new mongoose.Schema({
  name: String,
  code: String,
  isindependent: Boolean,
  isunMember: Boolean,
  capital: [String],
  region: String,
  subregion: String,
  languages: { type: Object },
  latlng: [Number],
  landlocked: Boolean,
  borders: [String],
  flag: String,
  maps: {
    googleMaps: String,
    openStreetMaps: String,
  },
  population: Number,
  carSide: String,
  timezones: [String],
  continents: [String],
  flagImage: String,
  BingImages: [String],
});

export default mongoose.model("Country", Country);
