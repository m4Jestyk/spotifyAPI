import express from "express";
import mongoose from "mongoose";
import trackRouter from "./routes/trackRoutes.js"
import { connectToDatabase } from "./database/connection.js";

const app = express();
const PORT = 3000;

connectToDatabase();

app.get("/", (req, res) => {
    res.status(200).json("API working")
})

app.use("/api/v1/tracks", trackRouter);

app.listen(PORT, () => {
    console.log("Server is running");
})
