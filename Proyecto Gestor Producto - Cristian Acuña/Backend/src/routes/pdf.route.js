const express = require('express');
const router = express.Router();
const { buildPDF } = require('../libs/pdf.js');

router.get('/invoice', (req, res) => {
    const { clientName, budgetProducts, totalAmount } = req.body;

    const stream = res.writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-disposition": `attachment; filename = ${clientName}.pdf`
    });

    buildPDF(clientName, budgetProducts, totalAmount,
        (data) => stream.write(data),
        () => stream.end()
    );

});

module.exports = router;
