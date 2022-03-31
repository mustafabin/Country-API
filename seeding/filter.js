import fs from "fs";
import raw from "../data/countryRaw.json" assert { type: "json" };

let writeIntoFile = (contentJSON) => {
  fs.writeFile("../data/adapted.json", JSON.stringify(contentJSON), (err) => {
    console.log(err);
  });
};

let arr = [];

raw.forEach((country) => {
  let filtered = {
    name: country.name.common,
    code: country.cca3,
    isindependent: country.independent,
    isunMember: country.unMember,
    capital: country.capital,
    region: country.region,
    subregion: country.subregion,
    languages: country.languages,
    latlng: country.latlng,
    landlocked: country.landlocked,
    borders: country.borders,
    flag: country.flag,
    maps: {
      googleMaps: country.maps.googleMaps,
      openStreetMaps: country.maps.openStreetMaps,
    },
    population: country.population,
    carSide: country.car.side,
    timezones: country.timezones,
    continents: country.continents,
    flagImage: country.flags.svg,
    BingImages: ["", "", ""],
  };
  arr.push(filtered);
});
writeIntoFile(arr);
