import express from "express";
import dotenv from "dotenv";
import dbCnx from "./config/config.js";
import { connect } from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT;  

dbCnx();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
