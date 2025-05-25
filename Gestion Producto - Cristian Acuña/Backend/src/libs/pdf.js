const fs = require("fs");
const PDFDocument = require("pdfkit");
const PDFTable = require("pdfkit-table");

const buildPDF = (clientName, budgetProducts, totalAmount, dataCallback, endCallback) => {
    // Iniciar el documento PDF
    let doc = new PDFDocument({ margin: 30, size: 'A4' });
    // Guardar el documento en un archivo
    doc.pipe(fs.createWriteStream("./document.pdf"));

    // Manejadores de eventos
    doc.on("data", dataCallback);
    doc.on("end", endCallback);

    // Establecer la fuente en Arial
    // doc.font('Arial');

    // Escribir el título y el nombre del cliente
    doc.fontSize(20).text('Presupuesto', { align: 'center' });
    doc.moveDown();
    doc.fontSize(16).text(`Cliente: ${clientName}`);
    doc.moveDown();

    // Crear una tabla para los productos del presupuesto
    const table = {
        title: '',
        headers: ['Cantidad', 'Nombre del Producto', 'Precio del Producto', 'Monto'],
        datas: budgetProducts.map(product => [product.quantity, product.name, product.price, product.amount]),
        rows: budgetProducts.length // Usamos la longitud de budgetProducts para el número de filas
    };

    // Dibujar la tabla en el documento
    doc.table(table, { 
        prepareHeader: () => doc.font('Helvetica-Bold'),
        prepareRow: (row, i) => doc.font('Helvetica').fontSize(12)
    });
    // if (budgetProducts && Array.isArray(budgetProducts) && budgetProducts.length > 0) {
    // } else {
    //     doc.text('No hay productos en el presupuesto.');
    // }

    // Escribir el total
    doc.moveDown();
    doc.fontSize(16).text(`Total: ${totalAmount}`, { align: 'right' });

    // Finalizar el documento
    doc.end();
};

module.exports = { buildPDF };
