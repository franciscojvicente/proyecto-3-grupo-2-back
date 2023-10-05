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
    type: String,
    set: function (date) {
      if (date instanceof Date) {
        return date.toISOString().split('T')[0];
      } else if (typeof date === 'string') {
        const parts = date.split('-');
        if (parts.length === 3) {
          return `${parts[0]}-${parts[1]}-${parts[2]}`;
        }
      }
      return date;
    },
    get: function (date) {
      if (date) {
        return date;
      }
    },
    },
    hour: {
        type: String,
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