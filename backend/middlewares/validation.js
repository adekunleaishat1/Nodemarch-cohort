const validate = (schema) => async (req, res, next) =>{
    try {
        const body = req.body
       const validate =  await schema.validate(body)
       if (validate) {
        next()
       }
         
    } catch (error) {
        res.status(500).json({message:error.message, status:false})
    }
}


module.exports = validate