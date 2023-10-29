const { deletePatient, updatePatient, getPatientById, createPatient, getAllPatients } = require("../controllers/PatientController");
const { getAllTurnos, createTurno, getTurnoById, updateTurno, deleteTurno } = require("../controllers/TurnoController");
const { getAllUsers, register, changeToAdmin, login, getUserById, deleteUser, updateUser } = require("../controllers/UserController");
const authenticateOwner = require("../middlewares/authOwner");
const authenticateUser = require("../middlewares/authUser");
const authenticateAdmin = require("../middlewares/authAdmin");
const newRequest = require("../controllers/detailController");
const { createReview, getReviews } = require("../controllers/TrustpilotController");
const { getAllSponsors, createSponsor } = require("../controllers/SponsorsController");

const router = require("express").Router();

// register y login
router.post("/registrar", register);
router.post("/login", login);

// user
router.get("/users", authenticateOwner, getAllUsers);
router.get("/user/:id", authenticateOwner, getUserById);
router.put("/user/:id", authenticateOwner, updateUser);
router.delete("/user/:id", authenticateOwner, deleteUser);

// admin
router.put("/admin/:id", authenticateAdmin, changeToAdmin);

// patients
router.post("/paciente", authenticateAdmin, createPatient);
router.get("/pacientes", authenticateAdmin, getAllPatients);
router.get("/paciente/:id", authenticateAdmin, getPatientById);
router.put("/paciente/:id", authenticateAdmin, updatePatient);
router.delete("/paciente/:id", authenticateAdmin, deletePatient);

// turnos
router.post("/turno", authenticateAdmin, createTurno);
router.get("/turnos", authenticateAdmin, getAllTurnos);
router.get("/turno/:id", authenticateAdmin, getTurnoById);
router.put("/turno/:id", authenticateAdmin, updateTurno);
router.delete("/turno/:id", authenticateAdmin, deleteTurno);

// details
router.post("/solicitud", newRequest);

//trustpilot reviews
router.post("/reviews", createReview);
router.get("/reviews", getReviews);

//sponsors
router.post("/sponsors", createSponsor);
router.get("/sponsors", getAllSponsors);

module.exports = router;