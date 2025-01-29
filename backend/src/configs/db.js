import mongoose from "mongoose"
import { MONGO_DB_URI } from "./constants.js";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

export const mongoDbConfig = async () => {
  try {
    mongoose.connect(MONGO_DB_URI, clientOptions);
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}

