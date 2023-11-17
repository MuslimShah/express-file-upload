const mongoose = require('mongoose');

const connectDB = async function(uri) {
   try {
    const status=await mongoose.connect(uri)
    console.log(`<-- connected to DB -->`);
    return status
   } catch (error) {
    console.log('<-- Oops database connection error -->');
   }
}

module.exports = connectDB;