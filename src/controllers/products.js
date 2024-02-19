const Product = require("../models/product");

const getAllProducts = async (req,res) => {
    try{
        const {company} = req.query;
        const queryObject = {};

        if(company){
            queryObject.company = company;
            console.log(queryObject);
            console.log(queryObject.company);
        }

        const resProduct = await Product.find(queryObject);
        console.log(resProduct);
        console.log(req.query);
        res.status(200).json({resProduct})
    }
    catch(error){
        res.status(400).send("Something went wrong while getting all products : "+error);
    }
}

const getAllProductsByName = async (req,res) => {
    try{
        const {name} = req.query;
        const queryObject = {};

        if(name){
            queryObject.name = { $regex : name , $options : 'i'};
            console.log(queryObject);
            console.log(queryObject.name);
        }

        const resProduct = await Product.find(queryObject);
        console.log(resProduct);
        console.log(req.query);
        res.status(200).json({resProduct})
    }
    catch(error){
        res.status(400).send("Something went wrong while getting all products : "+error);
    }
}

const getProductsByNameCompnay = async (req,res) => {
    try{
        const {company, name} = req.query;
        const queryObject = {};

        if(company){
            queryObject.company = company;
            console.log(queryObject);
            console.log(queryObject.company);
        }

        if(name){
            queryObject.name = name;
            console.log(queryObject);
            console.log(queryObject.name);
        }

        const resProduct = await Product.find(queryObject);
        console.log(resProduct);
        console.log(req.query);
        res.status(200).send({resProduct});
    }
    catch(error){
        res.status(400).send("Something went wrong while getting all products : "+error);
    }
}

const getAllProductsTesting = async (req,res) => {
    try{
        const {sort, select} = req.query;

        let apiData = Product.find(); 

        if(sort){
            let sortFIx = sort.replaceAll(",", " ");
            console.log(sortFIx);
            apiData = apiData.sort(sortFIx);
        }

        if(select){
            let selectFIx = select.replaceAll(",", " ");
            console.log(selectFIx);
            apiData = apiData.select(selectFIx);
        }

        let page = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 3;

        let skip = (page - 1) * limit ;

        apiData = apiData.skip(skip).limit(limit);

        const testProduct = await apiData;
        console.log(testProduct);
        console.log(req.query);
        res.status(200).json({testProduct, lengthOfMyData : testProduct.length});
    }
    catch(error){
        res.status(400).json("something went wrong while testing the data : "+error);
    }
}

module.exports = {
      getAllProducts,
      getAllProductsByName,
      getProductsByNameCompnay,
      getAllProductsTesting, 
}