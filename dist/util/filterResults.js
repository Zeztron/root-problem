"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterResults = void 0;
/*
  I want to append on trips done by the same driver so they arent different entries.
  Add the distance and then average the speed.
*/
var filterResults = function (trips) {
    return trips.reduce(function (previousValue, currentValue) {
        var driverName = currentValue.name;
        var sameTrip = previousValue.find(function (trip) { return trip.name === driverName; });
        if (sameTrip) {
            sameTrip.timeTraveled += currentValue.timeTraveled;
            sameTrip.distance = sameTrip.distance += currentValue.distance;
            sameTrip.speed = sameTrip.speed += currentValue.speed;
        }
        else
            previousValue.push(currentValue);
        return previousValue;
    }, []);
    // .filter((trip: Trip) => trip.speed > 5 && trip.speed < 100);
};
exports.filterResults = filterResults;
