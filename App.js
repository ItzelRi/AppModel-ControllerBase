import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { test } from "./backend/controllers/J.controllers";

dotenv.config()
mongoose.connect(process.env.url)
.then(()=>{
    console.log("si jala")
})
.catch((error)=>{
    console.log("no jalo", error)
})

const app = express()
app.use(cors());
app.listen(4000, ()=>{
    console.log("se escucha")
})

test()