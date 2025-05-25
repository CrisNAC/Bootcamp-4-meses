const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
require('./config/mongoose.config');
const routes = require("./routes/patient.route.js");

app.use(
    cors({origin: "http://localhost:3000"  
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () => console.log(`servidor en puerto ${port}`));