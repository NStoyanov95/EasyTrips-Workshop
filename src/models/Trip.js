const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    dateFrom: String,
    dateTo: String,
    comments: [{
        type: mongoose.Types.ObjectId,
        ref: 'Comment',
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref:'User'
    }
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;