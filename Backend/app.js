import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect(
    "mongodb+srv://Hari:QHSyrDfUTZWCzzVp@cluster0.drmwf.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() => console.log("connected to database and listening to port 5000"))
  .catch((err) => console.log(err));

//QHSyrDfUTZWCzzVp
