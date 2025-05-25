const Patient = require('../models/patient.model.js');

const create = async (req, res) => {
    try{
        const {name, age ,symptoms} = req.body;
        const patient = new Patient({name,age,symptoms});
        await patient.save();
    }catch(error){
        res.status(500).json({error: 'Error al agregar el paciente.'});
    }
};

const getAll = async (req,res) =>{
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los pacientes.' });
    }
};

const update = async (req,res) =>{
    try {
        const { id } = req.params;
        const { name, age, symptoms } = req.body;
        const updatedPatient = await Patient.findByIdAndUpdate(id, { name, age, symptoms }, { new: true });
        res.status(200).json(updatedPatient);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el paciente.' });
    }
};

const getDetails = async (req,res) =>{
    try {
        const { id } = req.params;
        const patient = await Patient.findById(id);
        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los detalles del paciente.' });
    }
};

const deletePatient = async (req,res) =>{
    try {
        const { id } = req.params;
        await Patient.findByIdAndDelete(id);
        res.status(200).json({ message: 'Paciente eliminado correctamente.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el paciente.' });
    }
};

module.exports = {
    create,
    getAll,
    update,
    getDetails,
    deletePatient
};