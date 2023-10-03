const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        trim: [true, "No puede tener espacios"]
    },
    rol : {
        type: String,
        default: "user",
        enum: ["user", "admin", "dueno"]
    }
})

const User = mongoose.model("User", userSchema);
module.exports = User;