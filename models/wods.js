const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema and model >>TO DO>> connect to Wods folder
const wodSchema = new Schema({
    name: String,
    wod: String,
    description: String,
    tag: String

});

const Wod = mongoose.model('wods', wodSchema);


module.exports = Wod;