import mongoose from "mongoose";
import chalk from "chalk";

let connectionString =
  process.env.PROD_MONGODB || "mongodb://127.0.0.1:27017/Country";
let mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(connectionString, mongooseConfig);
mongoose.set("returnOriginal", false);

const db = mongoose.connection;
//if the connection fails log the error
db.on("error", (error) => {
  console.error(chalk.red(error));
});

db.once("disconnected", () => {
  console.log(chalk.red("Disconnected from MONGODB"));
});
export default db;
