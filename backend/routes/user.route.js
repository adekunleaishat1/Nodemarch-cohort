const express = require("express")
const userrouter = express.Router()

const {SignupUser, loginUser, verifyuser,uploadProfile, uploadProduct, getallproduct, forgotpassword, resetpassword} = require("../controllers/user.controller")
const validate = require("../middlewares/validation")
const uservalidation = require("../middlewares/userValidation")


userrouter.post("/signup", validate(uservalidation), SignupUser)
userrouter.post("/login", loginUser)
userrouter.get("/verify", verifyuser)
userrouter.post("/upload", uploadProfile)
userrouter.post("/uploadproduct", uploadProduct)
userrouter.get("/getproduct", getallproduct)
userrouter.post("/forgot", forgotpassword)
userrouter.post("/reset", resetpassword)


module.exports = userrouter