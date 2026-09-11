const mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
    name: String,
    quantity: { type: Number, default: 1 },
    price: { type: Number, default: 0 },
});

module.exports = mongoose.model('Part', partSchema);