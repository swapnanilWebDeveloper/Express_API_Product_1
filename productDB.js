const connectDB = require("./src/db/connect");
require("dotenv").config();

const Product = require("./src/models/product");
const ProductJson = require("./products.json");

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
       // await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("Successfully Documents of products inserted...!!!");
    }
    catch(error){
        console.log("Something went wrong with Databse connection ....!!!"+error);
    }
}

start();