"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Driver = void 0;
var Driver = /** @class */ (function () {
    function Driver(name) {
        var _this = this;
        this.generateTrips = function (distance, timeTraveled, speed) {
            var _a;
            var trip = {
                distance: distance,
                timeTraveled: timeTraveled,
                speed: speed,
            };
            (_a = _this.trips) === null || _a === void 0 ? void 0 : _a.push(trip);
        };
        this.name = name;
        this.trips = [];
    }
    return Driver;
}());
exports.Driver = Driver;
