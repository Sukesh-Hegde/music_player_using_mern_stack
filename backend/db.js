import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url =
  "mongodb+srv://sukeshhegde:1234@cluster0.k4tse.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
export const connectUsingMongoose = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb connected using mongoose");
  } catch (err) {
    console.log("Error while connecting to db");
    console.log(err);
  }
};


