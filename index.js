const express = require("express")
const app = express()


app.get("/",(request, response)=>{
//    response.send("Welcome to your node class")
  response.json(
    [
        {"name": "John", "class":"React"},
        {"name": "Bola", "class":"Node"},
        {"name": "David", "class":"Angular"},
        {"name": "Eniola", "class":"Php"},
    ] )
})





const port = 5006

app.listen(port,()=>{
   console.log(`app started at port ${port}`);
   
})