const mongoose = require("mongoose");

const turnoSchema = new mongoose.Schema({
    vet: {
        type: String,
        require: true,
        trim: true
    },
    pet: {
        type: String,
        require: true,
        trim: true
    },
    date: {
        type: Date,
        require: true,
        trim: true
    },
    hour: {
        type: Number,
        require: true,
        trim: true
    },
    details: {
        type: String,
        require: true,
        trim: true
    }
})

const Turno = mongoose.model("Turno", turnoSchema);

module.exports = Turno;