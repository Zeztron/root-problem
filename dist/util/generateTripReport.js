"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTripReport = void 0;
/*
  I want to add on Drivers who do not have Trips since it still must
  be included in the final output.
  I also need to sort them by most miles driven to least.
*/
var generateTripReport = function (filteredResults, drivers) {
    return drivers
        .map(function (driver) {
        var _a, _b, _c, _d;
        return {
            name: driver,
            distance: (_a = filteredResults.filter(function (trip) { return trip.name === driver; })[0]) === null || _a === void 0 ? void 0 : _a.distance,
            timeTraveled: (_b = filteredResults.filter(function (trip) { return trip.name === driver; })[0]) === null || _b === void 0 ? void 0 : _b.timeTraveled,
            speed: (((_c = filteredResults.filter(function (trip) { return trip.name === driver; })[0]) === null || _c === void 0 ? void 0 : _c.distance) /
                ((_d = filteredResults.filter(function (trip) { return trip.name === driver; })[0]) === null || _d === void 0 ? void 0 : _d.timeTraveled)) *
                60,
        };
    })
        .sort(function (tripA, tripB) {
        return (tripB.distance || -Infinity) - (tripA.distance || -Infinity);
    });
};
exports.generateTripReport = generateTripReport;
