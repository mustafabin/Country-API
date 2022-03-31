import adaptedCountryData from "../data/adapted.json" assert { type: "json" };
import fs from "fs";

import axios from "axios";

let subscriptionKey = "7e1c057980a94d1fad8bb0375e9f960e";

let getFourImages = async (query) => {
  let fullBingResponse = await axios.get(
    "https://api.bing.microsoft.com/v7.0/images/search?q=" + query,
    {
      headers: { "Ocp-Apim-Subscription-Key": subscriptionKey },
    }
  );
  let fourBingresponses = fullBingResponse.data.value.slice(0, 4);
  let links = [];
  fourBingresponses.forEach((res, i) => {
    links[i] = res.contentUrl;
  });

  return links;
};
function waitThis(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
let writeIntoFile = (contentJSON) => {
  fs.writeFile("../data/adapted.json", JSON.stringify(contentJSON), (err) => {
    console.log(err);
  });
};

let populateLinks = async () => {
  let counter = 0;
  for (let i = 0; i < adaptedCountryData.length; i++) {
    console.clear();
    console.log(counter);
    let links = await getFourImages(`street ${adaptedCountryData[i].name}`);
    adaptedCountryData[i].BingImages = links;
    await waitThis(3000);
    counter++;
  }
  writeIntoFile(adaptedCountryData);
};
//this line stays commented for safety reason
// populateLinks();

//assigning id's
adaptedCountryData.forEach((country, i) => {
  country.id = i;
});
writeIntoFile(adaptedCountryData);
