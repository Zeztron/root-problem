"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendTrips = void 0;
/*
  I want to append on trips done by the same driver so they arent different entries.
  Add the distance and then average the speed.
*/
/*
 * This function will take in the trips append trips done by same driver.
 *
 * @params trips instance of Trip[]
 *
 * @returns Trip[] containing finalTrips
 *
 */
var appendTrips = function (trips) {
    return trips.reduce(function (previousValue, currentValue) {
        var driverName = currentValue.name;
        var sameTrip = previousValue.find(function (trip) { return trip.name === driverName; });
        if (sameTrip) {
            sameTrip.timeTraveled += currentValue.timeTraveled;
            sameTrip.distance = sameTrip.distance += currentValue.distance;
        }
        else
            previousValue.push(currentValue);
        return previousValue;
    }, []);
};
exports.appendTrips = appendTrips;
