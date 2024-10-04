import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./Routes/userRoutes.js";
import cors from "cors";

// let cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT ||5000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(()=>{
    console.log("database is connected successfully");
    app.listen(PORT,()=>{
        console.log(`server is running on ${PORT}`)
    })
}).catch((error)=>console.log(error))

app.use("/api",route)