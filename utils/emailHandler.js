const { config } = require("dotenv");
const nodemailer = require("nodemailer");
const template = require("./template");

const sendEmail = async (newDetail) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        auth: {
            user: "veterinariapatitas4@gmail.com",
            pass: "cbpxdglkdopklsaf"
        }
    })
    const response = await transporter.sendMail(emailTemplate(newDetail), (err, info) => {
     if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    })
    return response;
}

const emailTemplate = (newDetail) => {
    return {
        from: "veterinariapatitas4@gmail.com",
        to: newDetail.email,
        subject: "¡Recibimos tu solicitud!",
        html: template(newDetail)
    }
}

module.exports = sendEmail;