const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre del producto es obligatorio.'],
        minlength: [1, 'El nombre del producto tiene que tener mas 1 caracter.']
    },
    price: {
        type: Number,
        required: [true, 'El precio del producto es obligatorio.'],
        min: [0, 'El precio del producto no puede ser menor que 0.']
    },
    description: {
        type: String
    }
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;