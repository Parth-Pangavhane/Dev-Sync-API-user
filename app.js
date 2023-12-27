require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;

const product_routes = require("./routes/product");
app.get("/", (req, res) => {
    res.send("Hii");

});

app.use("/api/product", product_routes);

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