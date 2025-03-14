const express = require("express")
const app = express()
const ejs = require("ejs")
const mongoose = require("mongoose")


app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))

 // CRUD CREATE READ UPDATE DELETE
 const userschema = new mongoose.Schema({
     firstname:{type:String, required:true},
     lastname:{type:String, required:true},
     email:{type:String,  required:true, unique:true},
     password:{type:String,  required:true}
  })

 const usermodel = mongoose.model("user_collection", userschema)

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

app.get("/login",(req, res)=>{
  res.render("login")

})

app.get("/todo",(req,res)=>{
  res.render("todo",{todoarray})

})

app.get("/todo/edit/:index",(req, res)=>{
   console.log(req.params);
   const {index} = req.params
  let onetodo = todoarray[index]
   
   res.render("edit",{onetodo,index})
})

app.post("/todo/submit",(req,res)=>{
   console.log(req.body);
   todoarray.push(req.body)
  res.redirect("/todo")
   
})
app.post("/todo/delete/:index",(req,res)=>{
  console.log(req.params);
  const {index}= req.params
  todoarray.splice(index, 1)
  res.redirect("/todo")

})

app.post("/todo/update/:index",(req, res)=>{
    console.log(req.params);
    const {index} = req.params
    todoarray[index] = req.body
    console.log(req.body);
  res.redirect("/todo")
    
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




const uri =  "mongodb+srv://aishatadekunle877:aishat@cluster0.t92x8pf.mongodb.net/Marchcohort?retryWrites=true&w=majority&appName=Cluster0"


const connect = async() =>{
  try {
    const connected = await mongoose.connect(uri)
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