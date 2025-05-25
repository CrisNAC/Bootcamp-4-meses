const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient.controller');

router.post('/', patientController.create);
router.get('/patients', patientController.getAll);
router.put('/edit/:id', patientController.update);
router.get('/details/:id', patientController.getDetails);
router.delete('/:id', patientController.deletePatient);

module.exports = router;
