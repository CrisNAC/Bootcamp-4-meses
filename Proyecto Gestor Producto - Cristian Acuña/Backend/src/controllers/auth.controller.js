const User = require('../models/user.model.js');
const bcrypt = require('bcryptjs');
const { createToken } = require('../libs/jwt.js');

const register = async (req, res) => {
    try {
        const { userName, email, password } = req.body;

        const hash = await bcrypt.hash(password, 10)
        const newUser = new User({
            userName,
            email,
            password: hash
        });
        const user = await newUser.save();
        const token = await createToken({ id: user._id });

        res.cookie('token', token);
        res.json({
            id: user._id,
            userName: user.userName,
            email: user.email,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        });
    } catch (error) {
        res.status(500).json({ error: "Error al registrar" });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userFound = await User.findOne({ email });
        if (!userFound) return res.status(400).json({ message: "Usuario no encontrado" });

        const isMatch = await bcrypt.compare(password, userFound.password);
        if(!isMatch) return res.status(400).json({ message: "Contraseña incorrecta" });

        const token = await createToken({ id: userFound._id });

        res.cookie('token', token);
        res.json({
            id: userFound._id,
            userName: userFound.userName,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        });
    } catch (error) {
        res.status(500).json({ error: "Error al iniciar sesion" });
    }
}


module.exports = {
    register,
    login
}