const express = require("express")
const app = express()
require("dotenv").config()
const mongoose = require("mongoose")
const connect = require("./Db.Config/db.connect")
const userrouter = require("./routes/user.route")

app.use(express.json())
app.use("/user", userrouter)



connect()

const port = process.env.PORT || 6001
app.listen(port,()=>{
    console.log(`Server started at port ${port} `);
    
})