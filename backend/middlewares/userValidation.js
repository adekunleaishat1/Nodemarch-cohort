const yup = require("yup")


const passwordregex = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])/

const uservalidation = yup.object({
    firstname:yup.string().min(4,"firstname cannot be less than 4 characters").required("firstname is required"),
    lastname:yup.string().min(4,"lastname cannot be less than 4 characters").required("lastname is required"),
    email:yup.string().email("must be a valid email").required("email is required"),
    password:yup.string().min(8,"password cannot be less than 8 characters").matches(passwordregex,"password must have a letter ,number and special characters").required("password is required")
})

module.exports = uservalidation