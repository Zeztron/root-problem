"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util");
it('Successfully generates an array of Trip objects', function () {
    var drivers = ['Lauren', 'Kumi', 'Dan'];
    var tripReport = [
        { name: 'Dan', distance: 38.8, timeTraveled: 50, speed: 34 },
        { name: 'Lauren', distance: 42, timeTraveled: 75, speed: 33.6 },
    ];
    var finalTripReport = util_1.generateTripReport(tripReport, drivers);
    // Sort by longest distance driven
    expect(finalTripReport[0].distance).toEqual(42);
    // Add in the remaining Drivers who dont have trips in final output
    expect(finalTripReport[2].name).toEqual('Kumi');
});
