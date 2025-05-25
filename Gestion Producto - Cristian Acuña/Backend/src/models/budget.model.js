const mongoose = require("mongoose");

const BudgetSchema = new mongoose.Schema({
    clientName: {
        type: String,
        required: [true, 'El nombre del cliente es obligatorio.']
    },
    products: [{
        quantity: {
            type: Number,
            required: true,
            min: [1, 'La cantidad de productos debe ser al menos 1.']
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: false
            //Con required: true -> da error
        },
        
    }],
    totalPrice: {
        type: Number,
        default: 0,
        required: true
    }
});

const Budget = mongoose.model('Budget', BudgetSchema);
module.exports = Budget;

/* default: function() {
            let totalPrice = 0;
            for (const item of this.products) {
                totalPrice += item.product.price * item.quantity;
            }
            return totalPrice;
        } */