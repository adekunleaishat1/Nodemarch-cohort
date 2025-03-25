const express = require("express")
const userrouter = express.Router()

const {SignupUser, loginUser} = require("../controllers/user.controller")


userrouter.post("/signup", SignupUser)
userrouter.post("/login", loginUser)


module.exports = userrouter