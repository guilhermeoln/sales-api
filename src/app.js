import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes";
import dotenv from "dotenv";

dotenv.config();

const server = express();

mongoose.connect(process.env.DB_PASSWORD);

server.use(cors()).use(express.json()).use(routes);

export default server;
