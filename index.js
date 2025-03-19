const express = require("express")
const app = express()
const ejs = require("ejs")
const mongoose = require("mongoose")
require("dotenv").config()
const userrouter = require("./Routes/user.route")


app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))
app.use("/",userrouter)

 // CRUD CREATE READ UPDATE DELETE

 
 const todoSchema = new mongoose.Schema({
  title:{type:String, required:true},
  content:{type:String, required:true}
 })
  
 const todoModel = mongoose.model("todolist_data", todoSchema) 



let userarray = []
let todoarray = []
let message = " ";


app.get("/",(request, response)=>{
//    response.send("Welcome to your node class")
  // response.json(
  //   [
  //       {"name": "John", "class":"React"},
  //       {"name": "Bola", "class":"Node"},
  //       {"name": "David", "class":"Angular"},
  //       {"name": "Eniola", "class":"Php"},
  //   ] )

  response.render("index",{name:"Dotun", gender:"male", message})
})



app.get("/todo",async (req,res)=>{
 try {
  let danger = await todoModel.find()
  res.render("todo",{danger})
 } catch (error) {
  console.error(error)
 }

})



app.get("/todo/edit/:id", async (req, res)=>{
   let {id} = req.params
    let editOne = await todoModel.findById(id)
    console.log(editOne);
    
   res.render("edit",{editOne})
})


app.post("/todo/delete/:id",async (req,res)=>{
try {
  let {id} = req.params
  let deleteOne = await todoModel.findByIdAndDelete(id)
  res.redirect("/todo")
} catch (error) {
  console.error(error)
}
})

app.post("/todo/update/:id",async (req, res)=>{
  try {
    let {id} = req.params
    let updateOne =  await todoModel.findByIdAndUpdate(id,req.body);
   res.redirect("/todo")
  } catch (error) {
    console.error(error)
  }
    
})

app.post("/user/register",async (req, res)=>{
try {
  console.log(req.body);
  const {firstname, lastname, email, password} = req.body
    if (!firstname || !lastname || !email || !password) {
     message = "input field cannot be empty"
       // console.log();
       res.redirect("/")
    }else{
     const creteduser =  await usermodel.create(req.body)
     console.log(creteduser);
     
      res.redirect("/login")
    }
} catch (error) {
  console.log(error);
  if (error.message.includes("E11000 duplicate key error")) {
    message = "user already exist"
    res.redirect("/")
  }
  
  
} 
})

app.post("/user/login", async(req, res)=>{
  try {
    console.log(req.body);
  const {email, password} = req.body
  if(!email || !password){
     console.log("input field cannot be empty");
     
  }else{
   const existuser =  await  usermodel.findOne({email})
   console.log(existuser);
   if (existuser && existuser.password === password) {
    console.log("login successful");
       res.redirect("/login")
   }else{
    console.log("User not found");
      res.redirect("/login")
   }
  
  }
  } catch (error) {
    console.log(error);
    
  }
  
})





const connect = async() =>{
  try {
    const connected = await mongoose.connect(process.env.MONGO_URI)
    if (connected) {
      console.log("connection to database is successful");
      
    }
  } catch (error) {
    console.log(error);
    
  }
}
connect()


const port = 5006

app.listen(port,()=>{
   console.log(`app started at port ${port}`);
   
})