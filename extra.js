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

const text = "What's up, world?";
const segmenter = new Intl.Segmenter([], { granularity: 'word' });
const segmentedText = segmenter.segment(text);
const words = [...segmentedText].filter(s => s.isWordLike).map(s => s.segment);
console.log(text);
console.log(words);