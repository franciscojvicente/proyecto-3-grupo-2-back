const mongoose = require("mongoose");

const turnoSchema = new mongoose.Schema({
    vet: {
        type: String,
        require: true
    },
    pet: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true
    },
    hour: {
        type: Number,
        require: true
    },
    details: {
        type: String,
        require: true
    }
})

const Turno = mongoose.model("Turno", turnoSchema);

module.exports = Turno;