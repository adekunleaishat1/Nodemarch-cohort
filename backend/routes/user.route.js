const express = require("express")
const userrouter = express.Router()

const {SignupUser} = require("../controllers/user.controller")


userrouter.post("/signup", SignupUser)


module.exports = userrouter