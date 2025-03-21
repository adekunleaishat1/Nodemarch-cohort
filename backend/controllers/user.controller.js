const usermodel = require("../model/user.model")

const SignupUser = async (req,res) =>{
  try {
    console.log(req.body); 
    const {firstname , lastname, email, password} = req.body
    if (!firstname || !lastname || !email || !password) {
       return  res.status(400).json({message:"All fields are mandatory", status:false})
    }
    const createduser =  await usermodel.create(req.body)
    if(!createduser){
        return  res.status(402).json({message:"An error occured while creating user", status:false})
    }
     return res.status(200).json({message:"User created successfully", status:true})

  } catch (error) {
    if (error.message.includes("E11000 duplicate key")) {
        return  res.status(407).json({message:"User already exists", status:false})
    }
    return  res.status(500).json({message:error.message, status:false})
  }
}



module.exports = {SignupUser}