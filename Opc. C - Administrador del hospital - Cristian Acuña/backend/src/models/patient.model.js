const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
    name : {
        type : String,
        required: [true, 'El nombre del paciente es obligatorio.'],
        minlength: [1, 'El nombre del paciente debe tener al menos 1 caracter.'],
        maxlength: [40, 'El nombre del paciente no debe tener más de 40 caracteres.']
    },
    age : {
        type : Number,
        required: [true, 'La edad del paciente es obligatoria.'],
        min: [1, 'La edad del paciente no puede ser menor que 1 año.'],
        max: [140, 'La edad del paciente no puede ser mayor que 140 años.']
    },
    symptoms : {
        type : String,
        required: [true, 'Los síntomas del paciente son obligatorios.'],
        minlength: [4, 'Los síntomas del paciente deben tener al menos 4 caracteres.']
    }
});

const Patient = mongoose.model('patient', PatientSchema)
module.exports = Patient;