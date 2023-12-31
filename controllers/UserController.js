const mongoose = require('mongoose');
const User = require('../models/userSchema');
const { encryptPassword, comparePassword } = require('../utils/passwordHandler');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const getAllUsers = async (req, res) => {
	const users = await User.find({ rol: { $ne: 'dueno' } });
	try {
		if (!users) {
			return res.status(404).json({
				mensaje: 'Usuarios no encontrados',
				status: 404,
			});
		}
		return res.status(200).json({
			mensaje: 'Usuarios encontrados',
			status: 200,
			users,
		});
	} catch (error) {
		return res.status(500).json({
			mensaje: 'Hubo un error, intentelo mas tarde',
			status: 500,
		});
	}
};

const getUserById = async (req, res) => {
	const { id } = req.params;
	const user = await User.findById(id);
	try {
		if (!mongoose.isValidObjectId(id)) {
			return res.status(400).json({
				mensaje: 'ID del usuario invalido',
				status: 400,
			});
		}
		if (!user) {
			return res.status(404).json({
				mensaje: 'Usuario no encontrado',
				status: 404,
			});
		}

		return res.status(200).json({
			mensaje: 'Usuario encontrado',
			status: 200,
			user,
		});
	} catch (error) {
		return res.status(500).json({
			mensaje: 'Hubo un error, intentelo mas tarde',
			status: 500,
		});
	}
};

const register = async (req, res) => {
	const { username, password } = req.body;
	const user = await User.findOne({ username });
	try {
		if (user) {
			return res.status(400).json({
				mensaje: 'El usuario ya existe',
				status: 400,
			});
		}
		const newUser = new User({
			username,
			password: encryptPassword(password),
		});
		await newUser.save();
		res.status(201).json({
			mensaje: 'Usuario creado correctamente',
			newUser,
		});
	} catch (error) {
		return res.status(500).json({
			mensaje: 'Hubo un error, intentelo mas tarde',
			status: 500,
		});
	}
};

const login = async (req, res) => {
	const { username, password } = req.body;
	const user = await User.findOne({ username });
	const secret = process.env.JWT_SECRET;
	try {
		if (!user) {
			return res.status(404).json({
				mensaje: 'Usuario no existente',
				status: 404,
			});
		}
		if (!comparePassword(password, user.password)) {
			return res.status(400).json({
				mensaje: 'La contraseña es incorrecta',
				status: 400,
			});
		}
		const payload = {
			sub: user._id,
			email: user.username,
			rol: user.rol,
		};
		const token = jwt.sign(payload, secret, { algorithm: process.env.JWT_ALGORITHM, expiresIn: '1h' });
		return res.status(200).json({
			mensaje: 'Inicio de sesión exitoso',
			status: 200,
			token,
		});
	} catch (error) {
		return res.status(500).json({
			mensaje: 'Hubo un error, intentelo mas tarde',
			status: 500,
		});
	}
};

const changeToAdmin = async (req, res) => {
	const { id } = req.params;
	const user = await User.findById(id);
	try {
		if (!user) {
			return res.status(404).json({
				mensaje: 'Usuario no encontrado',
				status: 404,
			});
		}
		if (user.rol === 'admin') {
			return res.status(200).json({
				mensaje: 'El usuario ya es administrador',
				status: 200,
			});
		}
		user.rol = 'admin';
		await user.save();
		res.status(200).json({
			mensaje: 'Usuario actualizado correctamente',
			status: 200,
			user,
		});
	} catch (error) {
		return res.status(500).json({
			mensaje: 'Hubo un error, intentelo mas tarde',
			status: 500,
		});
	}
};

const deleteUser = async (req, res) => {
	const { id } = req.params;
	const user = await User.findByIdAndDelete(id);
	try {
		if (!mongoose.isValidObjectId(id)) {
			return res.status(400).json({
				mensaje: 'ID del usuario invalido',
				status: 400,
			});
		}
		if (!user) {
			return res.status(404).json({
				mensaje: 'Usuario no encontrado',
				status: 404,
			});
		}
		return res.status(200).json({
			mensaje: 'Usuario eliminado correctamente',
			status: 200,
			user,
		});
	} catch (error) {
		return res.status(500).json({
			mensaje: 'Hubo un error, intentelo mas tarde',
			status: 500,
		});
	}
};

const updateUser = async (req, res) => {
	const { id } = req.params;
	const { username, password, rol } = req.body;
	try {
		if (!mongoose.isValidObjectId(id)) {
			return res.status(400).json({
				mensaje: 'Id invalido',
				status: 400,
			});
		}
		const user = await User.findByIdAndUpdate(id, req.body, { new: true });
		if (!user) {
			return res.status(404).json({
				mensaje: 'Usuario no encontrado',
				status: 404,
			});
		}

		return res.status(200).json({
			mensaje: 'Usuario modificado correctamente',
			status: 200,
			user,
		});
	} catch (error) {
		return res.status(500).json({
			mensaje: 'Hubo un error, intentelo mas tarde',
			status: 500,
		});
	}
};

module.exports = {
	getAllUsers,
	register,
	changeToAdmin,
	login,
	getUserById,
	deleteUser,
	updateUser,
};
