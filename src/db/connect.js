const mongoose = require("mongoose");
const { options } = require("../routes/products");


const connectDB = (uri) => {
    console.log("Hello , I am inside the connectDB function....!!!");
    return mongoose.connect(uri)
}

module.exports = connectDB;