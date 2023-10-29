const mongoose = require("mongoose");

sponsorsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    src: {
        type: String,
        required: true,
        trim: true
    },
    alt: {
        type: String,
        required: true,
        trim: true
    },

});

const Sponsors = mongoose.model("Sponsors", sponsorsSchema);

module.exports = Sponsors;