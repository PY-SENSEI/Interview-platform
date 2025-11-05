import express from "express";
import { ENV } from "./lib/env.js";

const app = express();

app.get("/Health", (req, res) => {
    res.send("Website is up and running!!")
})

app.listen(ENV.PORT, () => {
    console.log("Server running on port: ", ENV.PORT )
})