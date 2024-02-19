// atlas password swapnanildev123 => 8july1998
// atlas password user4000 => test1234

/* 
// folder => routes and file => products.js
const express = require("express");
const router = express.Router();

const {
    getAllProducts, 
    getAllProductsTesting,
    getProductByName,
    getProductByCompany,
    getProductByID,

} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
router.route("/getProductByName/:name").get(getProductByName);
router.route("/getProductByCompnay/:company").get(getProductByCompany);
router.route("/getProductById/:id").get(getProductByID);

module.exports = router;
*/

/*  
  // folder => controllers , file => products.js

  const Product = require("../models/product")

const getAllProducts = async (req,res) => {
    try{
        const resProduct = await Product.find({});
        console.log(resProduct);
        res.status(200).json( resProduct )
    }
    catch(error){
        res.status(400).send("Something went wrong while getting all products : "+error);
    }
}

const getProductByID = async (req,res) => {
      try{
        const prodId = req.params.id;
        console.log("Product's id = "+prodId+" = "+req.params.id);

        const resId = await Product.find({ _id : prodId});
        console.log(resId);
        res.status(200).json(resId);
      }
      catch(err){
         res.status(400).send("Something went wrong in getting a product by id : "+err);
      }
}

const getProductByCompany = async (req,res) => {
      try{
         const prodComp = req.params.company;
         console.log("Product's cmpany = "+prodComp+" = "+req.params.company);

         const compProduct = await Product.find({ company : prodComp});
         console.log(compProduct);
         res.status(200).json(compProduct);

      }catch(error){
        res.status(400).send("Something went wrong while getting product by company : "+error);
      }
}

const getProductByName = async (req, res) => {
    try{
        const prodName = req.params.name;
        console.log("name of the product = "+prodName+" = "+req.params.name);
    
        const nameProduct = await Product.find({ name : prodName });
        console.log(nameProduct);
        res.status(200).json(nameProduct);   
    }
    catch(error){
        res.status(400).send("Something went wrong by get product through name : "+error);
    }
}

const getAllProductsTesting = async (req,res) => {
    try{
        const testProduct = await Product.find({});
        console.log(testProduct);
        res.status(200).json(testProduct);
    }
    catch(error){
        res.status(400).json("something went wrong while testing the data : "+error);
    }
}

module.exports = {
      getAllProducts,
      getAllProductsTesting, 
      getProductByName,
      getProductByCompany,
      getProductByID,
     }
*/

const fetchProductApi = async() => {
    try{
        const product_result = await fetch("https://product-api-a-testing.onrender.com/api/products");
        const productRes = await product_result.json();
        console.log(productRes);
        const products = productRes.resProduct;
        console.log("total number of products : "+products.length);

        let sum = 0;
        for(var i = 0; i < products.length; i++){
            sum = sum + products[i].price;

            console.log("product number "+(i+1)+" : ");
            console.log("name of the product = "+products[i].name);
            console.log("company is = "+products[i].company);
            console.log("price is = $"+products[i].price+" USD ");
            console.log("rating by user's = "+products[i].rating+" stars..");
            console.log("\n");
        }
        console.log("total price of all the products of all companies = $"+sum+" USD \n");

        let samsung_total = 0;
        console.log("all the prices of different products of samsung : \n");
        for(var i = 0; i < products.length; i++){
            if(products[i].company === "samsung"){
                console.log("price for "+products[i].name+" is = $"+products[i].price+" USD ");
                samsung_total = samsung_total + products[i].price;
            }
        }
        console.log("Total price of all the products of samsung company = $"+samsung_total+" USD ");
    }
    catch(err){
        console.log("Error fetching the productAPI from web server....!!!!! : "+err);
    }
}

fetchProductApi();