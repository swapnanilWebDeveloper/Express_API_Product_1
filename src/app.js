require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000 ;

const products_routes  = require("./routes/products");

app.get("/", (req, res) => {
    res.send("Hi, I am live ....!!!");
});

// middleware or to set router
app.use("/api/products", products_routes);

const start = async (req,res) => {
   try{
      const res = await connectDB(process.env.MONGODB_URL);
      if(res){
        console.log("Connection successfull !! ");
      }
      else{
        console.log("Somwthing wrong with Connection to Database...");
      }
      app.listen(PORT, () => {
        console.log(`${PORT} Yes I am connected !!`);
      });
   }
   catch(err){
     console.log("Something went wrong !!! : "+err);
   }
}

start();