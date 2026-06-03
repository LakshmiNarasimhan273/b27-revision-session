const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const dbConnection = require("./config/dbconnection.config");

const productRoutes = require("./routes/products.routes");
const authRoutes = require("./routes/auth.routes");

// require("dotenv").config();

app.use(cors());
app.use(express.json());

// base endpoint, it is common for all our routes
app.use("/products", productRoutes);
app.use("/auth", authRoutes);

dbConnection();

app.listen(process.env.port, () => {
    console.log(`Server up and running on ${process.env.port}`);
});