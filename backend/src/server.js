import express from "express";
import path from "path";
import { ENV } from "./lib/env.js";

const app = express();

const __dirname = path.resolve();

app.get("/Health", (req, res) => {
    res.send("Website is up and running!!")
})
app.get("/careers", (req, res) => {
    res.send("Website is deployed!!")
})

// make the app ready for the dployment
if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))
 
    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}


app.listen(ENV.PORT, () => {
    console.log("Server running on port: ", ENV.PORT )
})