const Product=require('../models/product');
const path=require('path')
const statusCodes=require('http-status-codes');
const {BadRequest} =require('../errors')

exports.uploadImage=async (req,res)=>{
    //check if file not found
    if(!req.files){
        throw new BadRequest('No file attached');
    }

    const productImage=req.files.image;
    //check if file is actually an image

    if(!productImage.mimetype.startsWith('image')){
        throw new BadRequest('Please upload image only')
    }

    //check for the size
    const maxSize=1024*1024;//1Mb
    if(productImage.size>maxSize){
        throw new BadRequest('Please uplad image less than 1MB')
    }
    const imagePath=path.join(__dirname,'../public/uploads/'+`${productImage.name}`);
    //check if file already exist on the server
    // const file= await Product.find({image:imagePath})
    // if(file){
    //     throw new BadRequest('File already uploaded');
    // }
    await productImage.mv(imagePath);
    res.status(statusCodes.OK).json({msg:'image uploaded',src:`/uploads/${productImage.name}`})
}
