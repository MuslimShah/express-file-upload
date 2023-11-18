const express = require('express');
const {createProduct,getAllProducts}=require('../contollers/product')
const {uploadToCloud,uploadImageLocal}=require('../contollers/uploadImage');
const router = express.Router();

router.post('/',createProduct);
//get all products
router.get('/',getAllProducts);
//upload image

router.post('/uploads',uploadToCloud);
router.post('/uploadLocal',uploadImageLocal);

module.exports = router;