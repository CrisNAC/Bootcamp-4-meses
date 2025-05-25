const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String
});

const Broma = mongoose.model("bromas", JokeSchema);

module.exports = Broma;
