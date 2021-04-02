"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filterResults_1 = require("../util/filterResults");
it('adds up distance and time traveled if multiple drivers are in the report', function () {
    var data = [
        { name: 'Dan', distance: 17.3, timeTraveled: 30, speed: 34.6 },
        { name: 'Dan', distance: 21.8, timeTraveled: 20, speed: 65.4 },
        { name: 'Lauren', distance: 42, timeTraveled: 75, speed: 33.6 },
    ];
    var totalDistance = data[0].distance + data[1].distance;
    var totalTimeTraveled = data[0].timeTraveled + data[1].timeTraveled;
    var reducedData = filterResults_1.filterResults(data);
    expect(reducedData[0].name).toEqual('Dan');
    expect(reducedData[0].distance).toEqual(totalDistance);
    expect(reducedData[0].timeTraveled).toEqual(totalTimeTraveled);
});
