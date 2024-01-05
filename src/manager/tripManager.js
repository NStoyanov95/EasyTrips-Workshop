
const uniqid = require('uniqid');

const trips = [];

exports.getAllTrips = () =>{
    return trips.slice();
};

exports.getOneTrip = (id) => trips.find(trip => trip.id == id);

exports.createTrip = (tripData) =>{
    const currentTrip = {
        id: uniqid(),
        ...tripData
    }
    
    trips.push(currentTrip);
    return currentTrip;
};

exports.deleteTrip = (id) =>{
    const currentTrip = this.getOneTrip(id);
    trips.splice(trips.indexOf(currentTrip), 1);
    return trips;

};