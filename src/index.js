import express from "express";
import apiRouter from "./api/photo";
import cors from "cors";

const server = new express();
server.use(cors());
server.use(express.urlencoded());
server.use(express.json());
server.use("/api/photo", apiRouter);
server.listen(7000);
    console.log("http://localhost:7000");