const Trip = require('../models/Trip');

exports.getAllTrips = () => Trip.find();

exports.getOneTrip = (id) => Trip.findById(id).populate('comments')

exports.createTrip = (tripData) => Trip.create(tripData);
    
exports.deleteTrip = (id) => Trip.findByIdAndDelete(id);

exports.attachComment = async(tripId, commentId) => {

    const trip = await Trip.findById(tripId);
    trip.comments.push(commentId);

    await trip.save();
}