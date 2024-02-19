const express = require("express");
const router = express.Router();

const {
    getAllProducts, 
    getAllProductsTesting,
    getProductsByNameCompnay,
    getAllProductsByName,

} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
router.route("/Name").get(getAllProductsByName);
router.route("/CompName").get(getProductsByNameCompnay);

module.exports = router;