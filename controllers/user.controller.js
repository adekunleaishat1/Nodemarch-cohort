const usermodel = require("../model/user.model")

const getLogin = (req, res) =>{
   res.render("login")
      
}
const addtodo = async(req, res)=>{
        try {
          let Modeler = await todoModel.create(req.body)
          console.log(Modeler);
         res.redirect("/todo" )
        } catch (error) {
          console.error(error)
        }
}

const SignupUser =  async(req, res)=>{
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
}


module.exports = {getLogin, SignupUser}