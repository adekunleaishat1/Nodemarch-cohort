const express = require("express")
const app = express()
const ejs = require("ejs")


app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))


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

app.post("/user/register",(req, res)=>{
 console.log(req.body);
 const {firstname, lastname, email, password} = req.body
   if (!firstname || !lastname || !email || !password) {
    message = "input field cannot be empty"
      // console.log();
      res.redirect("/")
   }else{
    userarray.push(req.body)
     res.redirect("/login")
   }
   
})

app.post("/user/login",(req, res)=>{
  console.log(req.body);
  const {email, password} = req.body
  if(!email || !password){
     console.log("input field cannot be empty");
     
  }else{
   const existuser = userarray.find((user)=> user.email == email)
   console.log(existuser);
   if (existuser && existuser.password == password) {
     console.log("login successful");
     res.redirect("/login")
   }else{
    console.log("User not found");
    res.redirect("/login")
   }
   

  }
  
})



const port = 5006

app.listen(port,()=>{
   console.log(`app started at port ${port}`);
   
})