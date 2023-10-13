require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes");
const dbConnection = require("./database/db");
const passport = require("passport");
const jwtStrategy = require("./passport/jwt");

const app = express();

// middlewares
app.use(cors());
app.options('*',cors());
app.use(express.json());
app.use(express.urlencoded({extended: false})); 
app.use(morgan("dev"));

// passport
passport.use("jwt", jwtStrategy);

// configuracion rutas
app.use(process.env.API, router);

const port = process.env.PORT;
dbConnection();

app.listen(8080, () => {
    console.log(`Servidor funcionando en el puerto ${8080}`);
})
