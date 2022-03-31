import db from "../connection.js";
import Country from "../models/model.js";
import data from "../data/adapted.json" assert { type: "json" };

const insertData = async () => {
  // reset database
  db.dropDatabase();
  // insert countries into database
  await Country.insertMany(data);
  // close db connection (done)
  db.close();
};

insertData();
