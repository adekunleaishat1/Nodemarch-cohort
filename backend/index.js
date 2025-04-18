const express = require("express")
const app = express()
require("dotenv").config()
const mongoose = require("mongoose")
const connect = require("./Db.Config/db.connect")
const userrouter = require("./routes/user.route")
const cors = require("cors")
const socket = require('socket.io')
const chatmodel = require("./model/chat.model")

app.use(cors({origin:"*"}))
app.use(express.json({limit:"50mb"}))
app.use("/user", userrouter)



connect()

const port = process.env.PORT || 6001
const connection = app.listen(port,()=>{
    console.log(`Server started at port ${port} `);
    
})

const io = socket(connection,{
   cors:{origin:"*"} 
})

io.on("connection", async(socket)=>{
    console.log("a user connected");
      
    socket.on("sendmessage", async(messages)=>{
       const allmessage = await chatmodel.create({message:messages.message})
       console.log(messages);
       socket.emit("receive", messages)
    })
    
    const allchat = await chatmodel.find()
    socket.emit("allchat", allchat)
})