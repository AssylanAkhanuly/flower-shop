const express = require("express");
require('dotenv').config();

const app = express();
const mongoose = require("mongoose");
const cors = require('cors')
const userRoute = require("./routes/users");
const productRoute = require("./routes/products")
const orderRoute=  require("./routes/orders")
app.use(express.json())
app.use(cors())
const UserModel = require("./models/Users");
const ProductModel = require("./models/Products");
const OrderModel = require("./models/Orders");


mongoose.connect(process.env.MONGO_CONNECTION)
.then(() => console.log("Successful connection to the database"))
.catch((e) => console.log("Error to the connection to the database"))
app.listen(3001, () => {
    console.log("Server is running in port 3001")
});

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);



