const Detail = require("../models/detailSchema");
const mongoose = require("mongoose");
const sendEmail = require("../utils/emailHandler");

const newRequest = async (req, res) => {
    const { name, lastname, email, cellphone, plan } = req.body;
    const detail = await Detail.findOne({email, cellphone});
    try {
        if(detail) {
            return res.status(400).json({
                mensaje: "Ya tenemos una solicitud con dicho email y telefono, pronto nos pondremos en contacto", 
                status: 400
            })
        }
        const newDetail = new Detail({
            name,
            lastname,
            email,
            cellphone,
            plan
        });
        await newDetail.save();
        sendEmail(newDetail);
        res.status(201).json({
            mensaje: "Solicitud enviada correctamente",
            newDetail
        })
    } catch (error) {
        return res.status(500).json({
        mensaje: "Hubo un error, intentelo mas tarde", 
        status: 500
      })
    }
}

module.exports = newRequest;

