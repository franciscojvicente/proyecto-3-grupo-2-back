const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema({
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
    email: {
        type: String,
        require: true,
        trim: true
    },
    cellphone: {
        type: Number,
        require: true,
        trim: true
    },
    plan: {
        type: String,
        require: true
    },
    details: {
        type: String,
        require: true
    }
})

const Detail = mongoose.model("Detail", detailSchema);

module.exports = Detail;