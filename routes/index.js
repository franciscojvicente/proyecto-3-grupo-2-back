const { deletePatient, updatePatient, getPatientById, createPatient, getAllPatients } = require("../controllers/PatientController");
const { getAllTurnos, createTurno, getTurnoById, updateTurno, deleteTurno} = require("../controllers/TurnoController");
const { getAllUsers, register, changeToAdmin, login, getUserById, deleteUser } = require("../controllers/UserController");
const authenticateOwner = require("../middlewares/authOwner");
const authenticateUser = require("../middlewares/authUser");
const authenticateAdmin = require("../middlewares/authAdmin");
// falta middlewares de admin, dueño y user

// falta updateUser
const router = require("express").Router();

// register y login
router.post("/registrar", register);
router.post("/login", login);

// user 
router.get("/users", getAllUsers);
router.get("/user/:id", getUserById);
// router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

router.put("/admin/:id", changeToAdmin);

// patients
router.post("/paciente", createPatient);
router.get("/pacientes", getAllPatients);
router.get("/paciente/:id", getPatientById);
router.put("/paciente/:id", updatePatient);
router.delete("/paciente/:id", deletePatient);

// turnos
router.post("/turno", createTurno);
router.get("/turnos", getAllTurnos);
router.get("/turno/:id", getTurnoById);
router.put("/turno/:id", updateTurno);
router.delete("/turno/:id", deleteTurno);

module.exports = router;
