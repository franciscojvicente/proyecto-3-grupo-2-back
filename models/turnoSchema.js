const mongoose = require("mongoose");


const turnoSchema = new mongoose.Schema({
    vet: {
        type: String,
        required: true,
        trim: true
    },
    pet: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true,
        get: function (date) {
            if (date instanceof Date) {
                const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
                return date.toLocaleDateString('es-ES', options);
            }
            return date;
        },
        set: function (date) {
            if (typeof date === 'string') {
                const [day, month, year] = date.split('/').map(Number);
                return new Date(year, month - 1, day);
            }
            return date;
        }
    },
    hour: {
        type: String,
        required: true,
        trim: true
    },
    details: {
        type: String,
        required: true,
        trim: true
    }
});


const Turno = mongoose.model("Turno", turnoSchema);

module.exports = Turno;