const Jokes = require("../models/jokes.model.js");

const verBromas = async (req, res) =>{
    let list = await Jokes.find();
    res.status(200).json(list);
}

const ver = async (req, res) =>{
    let id = req.params.id;
    let jokeId = await Jokes.findById(id);
    res.status(200).json(jokeId);
}

const crear = async (req, res) => {
    let crearJoke = req.body;
    let newJoke = await Jokes.create(crearJoke);
    res.status(200).json(newJoke);
}

const editar = async (req, res) =>{
    let id =  req.params.id;
    let joke = req.body;
    let jokeEdit = await Jokes.findByIdAndUpdate(id, joke);
    res.status(200).json(jokeEdit);
}

const borrar = async (req, res) => {
    let id = req.params.Id;
    let joke = await Jokes.findByIdAndDelete(id);
    res.json("Chiste eliminado");
}

module.exports = {
    verBromas, 
    ver, 
    crear, 
    editar, 
    borrar
};