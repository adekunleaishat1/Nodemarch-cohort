const mongoose = require("mongoose")

const chatschema = new mongoose.Schema({
    message:{type:String, required:true},
    // user:{type:String, required:true}
},{timestamps:true})

const chatmodel = mongoose.model("chat", chatschema)

module.exports = chatmodel