const express = require('express');
const router = express.Router();
const budgetController = require('../controllers/budget.controller');

router.post('/createBudget', budgetController.createBudget);
router.get('/getAllBudget', budgetController.getAllBudgets);
router.get('/getBudget/:id', budgetController.getBudget);
router.delete('/deleteBudget/:id', budgetController.deleteBudget);
router.put('/editBudget/:id', budgetController.updateBudget);

module.exports = router;
