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

const resetpasswordmail = async (email, otp) =>{
  const messageTemplate = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Reset Your Password</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      /* Some email clients ignore <style> tags, but this will help in modern clients */
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin: 0; padding: 0; background: linear-gradient(to right, #f0f4ff, #ffffff); font-family: 'Inter', sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding: 50px 0;">
      <tr>
        <td align="center">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; padding: 40px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
            <!-- Logo -->
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <img src="https://via.placeholder.com/100x40?text=LOGO" alt="Company Logo" style="height: 40px;" />
              </td>
            </tr>
            <!-- Heading -->
            <tr>
              <td align="center" style="padding-bottom: 10px;">
                <h1 style="margin: 0; font-size: 24px; color: #2c3e50;">Reset Your Password</h1>
              </td>
            </tr>
            <!-- Message -->
            <tr>
              <td style="font-size: 16px; color: #555; line-height: 1.6; padding-bottom: 30px;">
                <p>Hello,</p>
                <p>
                  We received a request to reset your password. Click the button below to choose a new one.  
                  For your security, this link will expire in 30 minutes.
                </p>
              </td>
            </tr>
            <!-- Button -->
            <tr>
              <td align="center" style="padding-bottom: 30px;">
                <a
                  href="http://localhost:5173/resetpassword/${otp}"
                  style="
                    background-color: #4f46e5;
                    color: #fff;
                    padding: 14px 28px;
                    text-decoration: none;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 16px;
                    display: inline-block;"
                  >Reset Password</a
                >
              </td>
            </tr>
            <!-- Footer Note -->
            <tr>
              <td style="font-size: 14px; color: #888; line-height: 1.5; padding-bottom: 10px;">
                <p>If you did not request a password reset, please ignore this email or contact support if you have questions.</p>
                <p>Thanks,<br />The [Your Company] Team</p>
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td align="center" style="font-size: 12px; color: #aaa; padding-top: 30px;">
                <p>© 2025 Your Company Name. All rights reserved.</p>
                <p>1234 Your Address, City, Country</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
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
        return true
    }
   } catch (error) {
    console.log(error); 
    return false
   
   }
}

module.exports = {sendmail,resetpasswordmail}