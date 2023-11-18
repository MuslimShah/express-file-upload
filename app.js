require('express-async-errors');
require('dotenv').config();
const express = require('express');
const productUploads = require('./routes/productUpload')
const pageNotFound = require('./utils/page-not-found');
const connectDB =require('./database/database')
const errorHandler = require('./utils/error-handler');
//file upload package
const expressFileUpload=require('express-fileupload');
const cors=require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'views');
app.use(express.json())
app.use(expressFileUpload());
app.use(cors())
app.use(express.static('./public'))

app.use('/api/v1/products',productUploads);

//page not found middleware
app.use(pageNotFound);
//error handler middleware
app.use(errorHandler);


const start = async() => {
    //write db connection here
   const status= await connectDB(process.env.MONGO_URI)
   if(!status){
    return console.log('app connection error');
   }
   app.listen(PORT, () => console.log(`CONNECTED TO PORT ${PORT}`))
    
}
start();