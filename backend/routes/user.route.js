const express = require("express")
const userrouter = express.Router()

const {SignupUser, loginUser, verifyuser} = require("../controllers/user.controller")


userrouter.post("/signup", SignupUser)
userrouter.post("/login", loginUser)
userrouter.get("/verify", verifyuser)


module.exports = userrouter