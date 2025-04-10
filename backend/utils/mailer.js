const nodemailer = require("nodemailer")


const sendmail = async (email,firstname) =>{
    const messageTemplate = `
       <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Welcome to [App Name]!</title>
  <style type="text/css">
    body {
      font-family: Arial, sans-serif;
      background-color: #f8f8f8;
      margin: 0;
      padding: 0;
    }
    .container {
      width: 100%;
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    h1 {
      color: #333333;
    }
    p {
      color: #666666;
      font-size: 16px;
      line-height: 1.5;
    }
    ul {
      margin: 20px 0;
      padding-left: 20px;
    }
    li {
      margin-bottom: 10px;
    }
    .button {
      background-color: #007BFF;
      color: #ffffff;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 5px;
      display: inline-block;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Welcome to Badman Ecommerce!</h1>
    <p>Hello ${firstname},</p>
    <p>We're excited to welcome you to  Badman Ecommerce! Here’s what you can expect as you begin your journey with us:</p>
    <ul>
      <li>Easy-to-use dashboard for managing your account</li>
      <li>Expert support and extensive resources</li>
      <li>Regular community events and webinars</li>
    </ul>
    <p>To get started, click the button below to explore your dashboard:</p>
    <p>
      <a href="[Dashboard Link]" class="button">Go to Dashboard</a>
    </p>
    <p>If you have any questions, feel free to contact us at [Support Email].</p>
    <p>We’re thrilled to have you with us!</p>
    <p>Best regards,<br>The  Badman Ecommerce Team</p>
  </div>
</body>
</html>
    `

 const transporter = nodemailer.createTransport({
      service:"gmail",
       auth:{
        user:process.env.USER_EMAIL,
        pass:process.env.USER_PASS
       },
   })

   const mailOptions ={
       from: process.env.USER_EMAIL,
       to: email,
       text: "Hello",
       subject:"Welcome to badman ecommerce",
       html:messageTemplate
   }

   try {
    const sent =  await transporter.sendMail(mailOptions)
    if (sent) {
        console.log("message sent");
    }
   } catch (error) {
    console.log(error); 
   }

 
}



module.exports = sendmail