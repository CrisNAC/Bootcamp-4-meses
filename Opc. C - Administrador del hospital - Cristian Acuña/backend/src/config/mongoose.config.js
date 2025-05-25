const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/hospital", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Conectado con DB"))
.catch(error => console.log("Error al conectarse con DB: ", error));

mongoose.connection.once('open', ()=>{
    console.log('DB conectada');
});