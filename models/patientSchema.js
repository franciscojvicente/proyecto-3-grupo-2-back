const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    lastname: {
        type: String,
        require: true,
        trim: true
    },
    username: {
        type: String,
        require: true,
        trim: [true, "Contiene espacios en blanco"]
    },
    phone: {
        type: Number,
        require: true,
        trim: true
    },
    pet: {
        type: String,
        require: true,
        trim: true
    },
    kind: {
        type: String,
        require: true,
        trim: true
    },
    breed: {
        type: String,
        require: true,
        trim: true
    }
})

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;