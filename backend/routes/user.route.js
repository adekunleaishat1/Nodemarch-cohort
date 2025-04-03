const express = require("express")
const userrouter = express.Router()

const {SignupUser, loginUser, verifyuser,uploadProfile} = require("../controllers/user.controller")


userrouter.post("/signup", SignupUser)
userrouter.post("/login", loginUser)
userrouter.get("/verify", verifyuser)
userrouter.post("/upload", uploadProfile)


module.exports = userrouter