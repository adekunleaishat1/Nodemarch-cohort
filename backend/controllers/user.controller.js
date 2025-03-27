const usermodel = require("../model/user.model")
const bcrypt = require("bcryptjs")
const jwt  = require("jsonwebtoken")

const saltRound = 10

const SignupUser = async (req,res) =>{
  try {
    console.log(req.body); 
    const {firstname , lastname, email, password} = req.body
    if (!firstname || !lastname || !email || !password) {
       return  res.status(400).json({message:"All fields are mandatory", status:false})
    }
     const hashedPassword =  await bcrypt.hash(password, saltRound)
    const createduser =  await usermodel.create({
      firstname, lastname, email, password:hashedPassword
    })
    console.log(createduser);
    
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

const loginUser = async (req, res) => {
  try {
    const {email, password} = req.body
    if (!email || !password) {
      return res.status(400).json({message:"Email and password are mandatory", status:false})
    }

    const user = await usermodel.findOne({ email })
    console.log(user);
    
    if (!user) {
      return res.status(401).json({message:"user not found", status:false})
    }
    const validpassword = await bcrypt.compare(password, user.password)
    if(!validpassword){
      return res.status(401).json({message:"Invalid email or password", status:false})
    }
    const token = await jwt.sign({email}, process.env.SECRETKEY,{expiresIn:600})
     return res.status(200).json({message:"User logged in successfully", status:true,token})
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({message:error.message, status:false})
  }
}

const verifyuser = async (req, res) =>{
  try {
    const token = req.headers.authorization.split(" ")[1]
    console.log(token);
    if (!token) {
     return  res.status(401).json({message:"token not found", status:false})
    }
     const verifiedToken =  await jwt.verify(token, process.env.SECRETKEY)
     console.log(verifiedToken);
      const user =  await usermodel.findOne({email:verifiedToken.email})
     if (verifiedToken) {
      return res.status(200).json({message:"User verified successfully", status:true, user})
     }
      return res.status(403).json({message:"invalid token", status:false})
  } catch (error) {
    return res.status(500).json({message:error.message, status:false})
  }
}



module.exports = {SignupUser, loginUser, verifyuser}