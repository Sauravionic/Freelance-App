import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();
app.use(cors());

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to Database");
    }
    catch (error) {
        console.log(error);
    }
}
app.listen(process.env.PORT, () => {
    console.log("Backend Service Running");
    connectToDB();
})
