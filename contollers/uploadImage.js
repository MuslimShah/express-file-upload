const Product=require('../models/product');
const statusCodes=require('http-status-codes');

exports.uploadImage=async (req,res)=>{
    res.json({msg:'image uploaded successfully'})
}
