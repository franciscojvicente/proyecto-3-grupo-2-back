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
    type: String, // Almacenaremos la fecha como una cadena en el formato 'yyyy-mm-dd'
    set: function (date) {
      // La función set se ejecutará cuando se establezca el valor del atributo 'date'
      if (date instanceof Date) {
        // Si la entrada es una instancia de Date, la formateamos como 'yyyy-mm-dd'
        return date.toISOString().split('T')[0];
      } else if (typeof date === 'string') {
        // Si la entrada es una cadena, intentamos convertirla al formato 'yyyy-mm-dd'
        const parts = date.split('-');
        if (parts.length === 3) {
          return `${parts[2]}-${parts[1]}-${parts[0]}`;
        }
      }
      // Si no podemos convertir la fecha, la dejamos como está
      return date;
    },
    get: function (date) {
      // La función get se ejecutará cuando obtengas el valor del atributo 'date'
      if (date) {
        // Si hay una fecha válida, la retornamos
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