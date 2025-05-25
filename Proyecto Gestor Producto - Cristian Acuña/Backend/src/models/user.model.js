const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'El nombre de usuario es obligatorio.'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'El correo electrónico es obligatorio.'],
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Por favor, ingrese un correo electrónico válido.']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria.'],
        minlength: [6, 'La contraseña debe tener al menos 6 caracteres.']
    }
},{
    timestamps: true
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
