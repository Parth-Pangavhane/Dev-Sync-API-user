require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;

const user_routes = require("./routes/user");
app.get("/", (req, res) => {
    res.send("Welcome to the Dev-Sync-API");

});

app.use("/api/user", user_routes);

const start = async() => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} yes I'm Connected`);
        });
    } catch (error) {
        console.log(error);
    }
}

start()