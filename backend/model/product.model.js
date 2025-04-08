const mongoose = require("mongoose")

const productschema = new mongoose.Schema({
    productName:{type:String, required:true, trim:true},
    productPrice:{type:Number, required:true, trim:true},
    productDescription:{type:String, required:true, trim:true},
    productCategory:{type:String, required:true, trim:true},
    productImages:{type:[String], required:true, trim:true},
},{timestamps:true})

const productmodel = mongoose.model("product_collection", productschema)

module.exports = productmodel