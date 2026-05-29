const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const dbConnection = require("./config/dbconnection.config");
const productRoutes = require("./routes/products.routes");

// require("dotenv").config();

app.use(express.json());

// base endpoint, it is common for all our routes
app.use("/products", productRoutes);

dbConnection();

app.listen(process.env.port, () => {
    console.log(`Server up and running on ${process.env.port}`);
});