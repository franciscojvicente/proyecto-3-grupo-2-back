const Turno = require("../models/turnoSchema");
const mongoose = require("mongoose");

const getAllTurnos = async (req, res) => {
    const turnos = await Turno.find();
    try {
        if(!turnos) {
            return res.status(404).json({
                mensaje: "Turnos no encontrados",
                status: 404
            })
        }
        return res.status(200).json({
            mensaje: "Turnos encontrados",
            status: 200,
            turnos
        })
    } catch (error) {
        return res.status(500).json({
        mensaje: "Hubo un error, intentelo mas tarde", 
        status: 500
      })
    }
}

const getTurnoById = async (req, res) => {
    const { id } = req.params;
    const turno = await Turno.findById(id);
    try {
        if(!mongoose.isValidObjectId(id)) {
            return  res.status(400).json({
                mensaje: "ID del turno invalido",
                status: 400
            })
        }
        if(!turno) {
            res.status(404).json({
                mensaje: "Turno no encontrado",
                status: 404
            })
        }
        return res.status(200).json({
            mensaje: "Turno encontrado",
            status: 200,
            turno
        })
    } catch (error) {
        return res.status(500).json({
        mensaje: "Hubo un error, intentelo mas tarde", 
        status: 500
        })
    }
}

const createTurno = async (req, res) => {
    const { vet, pet, date, hour, details } = req.body;
    const turno = await Turno.findOne({date, hour}); 
    try {
        if(turno) {
            return res.status(400).json({
                mensaje: "Ya hay un turno existente en ese horario ese mismo día",
                status: 400
            })
        }
        const newTurno = new Turno ({
            vet,
            pet,
            date,
            hour,
            details
        });
        await newTurno.save();
        return res.status(201).json({
            mensaje: "Turno creado correctamente",
            status: 201,
            newTurno
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intentelo mas tarde",
            status: 500
        })
    }
}

const updateTurno = async (req, res) => {
    const { id } = req.params;
    const { vet, pet, hour, date, details } = req.body;
    try {
        const existingTurnoWithSameHour = await Turno.findOne({
            _id: { $ne: id },
            hour: hour,
            date: date
        });
        if(existingTurnoWithSameHour) {
            return res.status(400).json({
                mensaje: "El horario ya está ocupado en otro turno",
                status: 400
            });
        }   
        const turno = await Turno.findByIdAndUpdate(id, req.body, {new: true});
        if(!turno) {
            return res.status(404).json({
                mensaje: "Turno no encontrado",
                status: 404
            })
        }
        return res.status(200).json({
            mensaje: "Turno modificado correctamente",
            status: 200,
            turno
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intentelo mas tarde",
            status: 500,
            error
        })
    }
}

const deleteTurno = async (req, res) => {
    const { id } = req.params;
    const turno = await Turno.findByIdAndDelete(id);
    try {
        if(!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                mensaje: "ID del turno invalido",
                status: 400
            })
        }
        if(!turno) {
            return res.status(404).json({
                mensaje: "Turno no encontrado",
                status: 404
            })
        }
        return res.status(200).json({
            mensaje: "Turno eliminado correctamente",
            status: 200,
            turno
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intentelo mas tarde",
            status: 500,
            error
        })
    }
}

module.exports = {
    getAllTurnos,
    createTurno,
    getTurnoById,
    updateTurno,
    deleteTurno
}