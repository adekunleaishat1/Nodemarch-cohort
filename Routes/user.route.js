const express = require("express")
 const userrouter = express.Router()
 const {getLogin, SignupUser} = require("../controllers/user.controller")


userrouter.get("/login",getLogin)
userrouter.post("/user/register", SignupUser)
userrouter.post("/todo/submit", )


module.exports = userrouter;