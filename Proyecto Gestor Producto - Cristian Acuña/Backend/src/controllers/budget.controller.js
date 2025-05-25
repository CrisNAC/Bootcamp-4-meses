const Budget = require('../models/budget.model');

const createBudget = async (req, res) => {
    try {
        const { clientName, products, totalPrice } = req.body;
        const budget = new Budget({ clientName, products, totalPrice });
        await budget.save();
        res.status(201).json(budget);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el presupuesto.' });
    }
};

const getAllBudgets = async (req, res) => {
    try {
        const budgets = await Budget.find();
        res.status(200).json(budgets);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los presupuestos.' });
    }
};

const getBudget = async (req, res) => {
    try {
        const { id } = req.params;
        const budget = await Budget.findById(id);
        res.status(200).json(budget);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los detalles del presupuesto.' });
    }
};

const updateBudget = async (req, res) => {
    try {
        const { id } = req.params;
        const { clientName, products } = req.body;
        const updatedBudget = await Budget.findByIdAndUpdate(id, { clientName, products }, { new: true });
        res.status(200).json(updatedBudget);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el presupuesto.' });
    }
};

const deleteBudget = async (req, res) => {
    try {
        const { id } = req.params;
        await Budget.findByIdAndDelete(id);
        res.status(200).json({ message: 'Presupuesto eliminado correctamente.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el presupuesto.' });
    }
};

module.exports = {
    createBudget,
    getAllBudgets,
    getBudget,
    updateBudget,
    deleteBudget
};
