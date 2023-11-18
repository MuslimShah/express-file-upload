const Product=require('../models/product');
const statusCodes=require('http-status-codes');

exports.createProduct=async (req,res)=>{
    const {name,price,image}=req.body;
    const product= await Product.create({name,price,image});
    res.status(statusCodes.CREATED).json({msg:'product added successfully',product});
}

//get all products
exports.getAllProducts=async (req,res)=>{
    const products = await Product.find({});
    res.status(statusCodes.OK).json({msg:'List of all products',products,availble:products.length});
}
