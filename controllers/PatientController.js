const Patient = require("../models/patientSchema");
const mongoose = require("mongoose");

const getAllPatients = async (req, res) => {
    const pacientes = await Patient.find();
    try {
        if(!pacientes) {
            return res.status(404).json({
                mensaje: "Pacientes no encontrados",
                status: 404
            })
        }
        return res.status(200).json({
            mensaje: "Pacientes encontrados",
            status: 200,
            pacientes
        })
    } catch (error) {
        return res.status(500).json({
        mensaje: "Hubo un error, intentelo mas tarde", 
        status: 500
      })
    }
}

const getPatientById = async (req, res) => {
    const { id } = req.params;
    const patient = await Patient.findById(id);
    try {
        if(!mongoose.isValidObjectId(id)) {
            return  res.status(400).json({
                mensaje: "ID del paciente invalido",
                status: 400
            })
        }
        if(!patient) {
            res.status(404).json({
                mensaje: "Paciente no encontrado",
                status: 404
            })
        }
        return res.status(200).json({
            mensaje: "Paciente encontrado",
            status: 200,
            patient
        })
    } catch (error) {
        return res.status(500).json({
        mensaje: "Hubo un error, intentelo mas tarde", 
        status: 500
        })
    } 
}

const createPatient = async (req, res) => {
    const { name, lastname, username, phone, pet, kind, breed } = req.body;
    const patient = await Patient.findOne({username});
    try {
        if(patient) {
            return res.status(400).json({
                mensaje: "Ya hay un paciente existente en ese mail",
                status: 400
            })
        }
        const newPatient = new Patient ({
            name,
            lastname,
            username,
            phone,
            pet,
            kind,
            breed
        });
        await newPatient.save();
        return res.status(201).json({
            mensaje: "Paciente creado correctamente",
            status: 201,
            newPatient
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intentelo mas tarde",
            status: 500
        })
    }
}

const updatePatient = async (req, res) => {
    const { id } = req.params;
    const { name, lastname, username, phone, pet, kind, breed } = req.body;
    try {
        const patient = await Patient.findByIdAndUpdate(id, req.body, {new: true});
        if(!patient) {
            return res.status(404).json({
                mensaje: "Paciente no encontrado",
                status: 404
            })
        }
        return res.status(200).json({
            mensaje: "Paciente modificado correctamente",
            status: 200,
            patient
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intentelo más tarde",
            status: 500,
            error
        })
    }
}

const deletePatient = async (req, res) => {
    const { id } = req.params;
    const patient = await Patient.findByIdAndDelete(id);
    try {
        if(!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                mensaje: "ID del paciente invalido",
                status: 400
            })
        }
        if(!patient) {
            return res.status(404).json({
                mensaje: "Paciente no encontrado",
                status: 404
            })
        }
        return res.status(200).json({
            mensaje: "Paciente eliminado correctamente",
            status: 200,
            patient
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
    getAllPatients,
    createPatient,
    getPatientById,
    updatePatient,
    deletePatient
}