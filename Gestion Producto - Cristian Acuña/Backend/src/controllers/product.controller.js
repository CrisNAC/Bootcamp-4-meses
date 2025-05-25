const Product = require('../models/product.model');

const createProduct = async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const product = new Product({ name, price, description });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar el producto.' });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos.' });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, description } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(id, { name, price, description }, { new: true });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el producto.' });
    }
};

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los detalles del producto.' });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);
        res.status(200).json({ message: 'Producto eliminado correctamente.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el producto.' });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    updateProduct,
    getProduct,
    deleteProduct
};
