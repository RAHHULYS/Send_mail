import nodemailer from 'nodemailer'
import sgMail from '@sendgrid/mail'
export const sendEmailEthereal = async (req, res, next) => {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'lukas.tremblay80@ethereal.email',
            pass: 'TUFZA2fDvcquJXc1sP'
        }
    });
    let info = await transporter.sendMail({
        from:'"rahul@gmail.com"<rahul@email.com>',
        to:'bar@example.com',
        html:'<h2>sending email</h2>'
    })
    res.json(info)
}

export  const sendEmail = async (rq,res)=>{
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'rahulreddyysr@gmail.com', // Change to your recipient
        from: 'rahulreddyysr7@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      }
      const info = await sgMail.send(msg)
      res.json(info)
}