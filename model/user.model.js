const mongoose = require("mongoose")

 const userschema = new mongoose.Schema({
     firstname:{type:String, required:true},
     lastname:{type:String, required:true},
     email:{type:String,  required:true, unique:true},
     password:{type:String,  required:true}
  })

 const usermodel = mongoose.model("user_collection", userschema)
 

 module.exports = usermodel;