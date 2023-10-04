const { config } = require("dotenv");
const nodemailer = require("nodemailer");

const sendEmail = async (newDetail) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        auth: {
            user: "veterinariapatitas4@gmail.com",
            pass: "mnybnzhvfveocgov"
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
        text: `Hola! ${newDetail.name}, hemos registrado tu solicitud para enviarte información sobre el plan ${newDetail.plan}. Pronto nos pondremos en contacto.`
    }
}

module.exports = sendEmail;