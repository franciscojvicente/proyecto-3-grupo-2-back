const mongoose = require("mongoose");

const Sponsors = require("../models/sponsorsSchema");


const getAllSponsors = async(req, res) => {
    const sponsors = await Sponsors.find();
    try {
        if (!sponsors) {
            return res.status(404).json({
                mensaje: "Sponsors no encontrados",
                status: 404
            })
        }
        return res.status(200).json({
            mensaje: "Sponsors encontrados",
            status: 200,
            sponsors
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intentelo mas tarde",
            status: 500
        })
    }
}

const createSponsor = async(req, res) => {
    const { name, src, alt } = req.body;
    const sponsor = await Sponsors.findOne({ name, src, alt });
    try {
        if (sponsor) {
            return res.status(400).json({
                mensaje: "Ya existe un sponsor con ese nombre",
                status: 400
            })
        }
        const newSponsor = new Sponsors({ name, src, alt });
        await newSponsor.save();
        return res.status(201).json({
            mensaje: "Sponsor creado exitosamente",
            status: 201,
            newSponsor
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intentelo mas tarde",
            status: 500
        })
    }

}

module.exports = { getAllSponsors, createSponsor };