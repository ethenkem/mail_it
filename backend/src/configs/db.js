import mongoose from "mongoose"
import { MONGO_DB_URI } from "./constants.js";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

export const runMongoDbConfig = () => {
  mongoose.connect(MONGO_DB_URI, clientOptions).then(() => {
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }).catch((err) => {
    console.log(err);
    mongoose.disconnect();
  })
}

