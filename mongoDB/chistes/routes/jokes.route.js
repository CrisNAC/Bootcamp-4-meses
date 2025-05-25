const Bromas = require("../controllers/jokes.controller.js");

module.exports = (app) => {
    app.get("/api/broma/", Bromas.verBromas);
    app.get("/api/broma/:id", Bromas.ver);
    app.post("/api/broma/",Bromas.crear);
    app.put("/api/broma/:id",Bromas.editar);
    app.delete("/api/broma/:id",Bromas.borrar);
}