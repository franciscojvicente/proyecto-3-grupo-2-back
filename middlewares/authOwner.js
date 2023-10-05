const passport = require("passport");

const authenticateOwner = (req, res, next) => {
    passport.authenticate("jwt", (err, user, info) => {
        if(err) {
            return res.status(500).json({
                mensaje: "Error al autenticar el usuario",
                error: err,
                status: 500
            })
        }
        if(!user) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado",
                status: 404
            })
        }
        if(user.rol !== "dueno") {
            return res.status(401).json({
                mensaje: "Usuario no autorizado, esta tarea solo la puede realizar el dueño",
                status: 401
            })
        }
        req.user = user;
        next();
    }) (req, res, next)
}

module.exports = authenticateOwner;