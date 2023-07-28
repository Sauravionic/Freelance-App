import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.route";
import userRoute from "./routes/user.route";
import gigRoute from "./routes/gig.route";
import orderRoute from "./routes/order.route";
import conversationRoute from "./routes/conversation.route";
import messageRoute from "./routes/message.route";
import reviewRoute from "./routes/review.route";



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

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

// Connections
app.listen(process.env.PORT, () => {
    console.log("Backend Service Running");
    connectToDB();
})
