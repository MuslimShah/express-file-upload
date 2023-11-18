const Product=require('../models/product');
const path=require('path')
const statusCodes=require('http-status-codes');

exports.uploadImage=async (req,res)=>{
    const productImage=req.files.image;
    const imagePath=path.join(__dirname,'../public/uploads/'+`${productImage.name}`);
    await productImage.mv(imagePath);
    res.status(statusCodes.OK).json({msg:'image uploaded',src:`/uploads/${productImage.name}`})
}
