const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
            dbName: process.env.DB_NAME,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Base de datos conectada correctamente");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = dbConnection;