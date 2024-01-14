const Trip = require('../models/Trip');

const trips = [];

exports.getAllTrips = () => Trip.find();

exports.getOneTrip = (id) => Trip.findById(id);

exports.createTrip = (tripData) => Trip.create(tripData);
    

exports.deleteTrip = (id) =>{
    const currentTrip = this.getOneTrip(id);
    trips.splice(trips.indexOf(currentTrip), 1);
    return trips;

};