const Product=require('../models/product');
const statusCodes=require('http-status-codes');

exports.createProduct=async (req,res)=>{
    res.json({msg:'product added successfully'})
}

//get all products
exports.getAllProducts=async (req,res)=>{
    res.json({msg:'List of all products'});
}
