const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema and model >>TO DO>> connect to Wods folder
const wodSchema = new Schema({
    name: String,
    description: String
});

const Wod = mongoose.model('workout', wodSchema);


module.exports = Wod;