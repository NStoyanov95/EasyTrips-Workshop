const mongoose = require('mongoose');


async function dbConnect() {
    mongoose.connect('mongodb://127.0.0.1:27017/easyTrip');
}

module.exports = dbConnect