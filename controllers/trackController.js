import mongoose from "mongoose";
import Track from "../models/songModel.js";

export const getTracks = async(req, res) => {
    try {
        const tracks = await Track.find();
        res.status(200).json({
            success: true,
            tracks
        })
    } catch (error) {
        res.status(501).json({
            success: false,
            error: "Error while fetching tracks"
        })
        console.log(error)
    }
}