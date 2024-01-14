const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    dateFrom: String,
    dateTo: String,
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;