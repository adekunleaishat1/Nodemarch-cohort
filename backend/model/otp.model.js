const mongoose = require("mongoose")

const otpschema = new mongoose.Schema({
     otp:{type:String, required:true},
     email:{type:String, required:true},
})

const otpmodel = mongoose.model("otp_collection", otpschema)

module.exports = otpmodel