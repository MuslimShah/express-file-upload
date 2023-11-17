const express = require('express');
const {createProduct,getAllProducts}=require('../contollers/product')
const {uploadImage}=require('../contollers/uploadImage');
const router = express.Router();

router.post('/',createProduct);
//get all products
router.get('/',getAllProducts);
//upload image

router.post('/uploads',uploadImage)

module.exports = router;