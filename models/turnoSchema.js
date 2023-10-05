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
                const day = date.getDate().toString().padStart(2, '0');
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const year = date.getFullYear();
                return `${day}-${month}-${year}`;
            }
            return date;
        },
        set: function (date) {
            if (typeof date === 'string') {
                const [day, month, year] = date.split('-').map(Number);
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