const mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Part', partSchema);