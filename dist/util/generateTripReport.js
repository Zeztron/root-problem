"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTripReport = void 0;
/*
  I want to add on Drivers who do not have Trips since it still must
  be included in the final output.
  I also need to sort them by most miles driven to least.
*/
/*
 * This function will take in the 'cleaned' up report and returns
 * an array of objects containing the name, distance, timeTraveled, and speed.
 * It will also sort the array of objects based on the distance traveled.
 *
 * @params filteredResults instance of Trip[]
 * @params drivers instance of string[]
 *
 * @returns Trip[] array of objects containing name, distance, timeTravaled, and speed
 *
 */
var generateTripReport = function (filteredResults, drivers) {
    return drivers
        .map(function (driver) {
        var driverTrip = filteredResults.filter(function (trip) { return trip.name === driver; })[0];
        return {
            name: driver,
            distance: Math.round(driverTrip === null || driverTrip === void 0 ? void 0 : driverTrip.distance),
            timeTraveled: Math.round(driverTrip === null || driverTrip === void 0 ? void 0 : driverTrip.timeTraveled),
            speed: Math.round(((driverTrip === null || driverTrip === void 0 ? void 0 : driverTrip.distance) / (driverTrip === null || driverTrip === void 0 ? void 0 : driverTrip.timeTraveled)) * 60),
        };
    })
        .sort(function (tripA, tripB) {
        return (tripB.distance || -Infinity) - (tripA.distance || -Infinity);
    });
};
exports.generateTripReport = generateTripReport;
