const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
require('./config/mongoose.config');
const authRoutes = require("./routes/auth.routes.js");
const productRoutes = require("./routes/product.route.js");
const budgetRoutes = require("./routes/budget.route.js");
const pdf = require("./routes/pdf.route.js");

app.use(
    cors({origin: "http://localhost:3000"  
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(authRoutes);
app.use(productRoutes);
app.use(budgetRoutes);
app.use(pdf);

app.listen(port, () => console.log(`servidor en puerto ${port}`));