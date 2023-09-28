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
app.options('*',cors()); // permite hacer solicitudes a todas las rutas
app.use(express.json());
app.use(express.urlencoded({extended: false})); // este se utiliza para analizar las solictudes entrantes con datos codificados en la url
app.use(morgan("dev"));

// passport
passport.use("jwt", jwtStrategy);

// configuracion rutas
app.use("/", router); // uso el middleware para encerrar todas las rutas

const port = process.env.PORT;
dbConnection();

app.listen(8080, () => {
    console.log(`Servidor funcionando en el puerto ${8080}`);
})
