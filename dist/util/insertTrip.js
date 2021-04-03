"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertTrip = void 0;
var parseTime_1 = __importDefault(require("../helpers/parseTime"));
/*
 * This function will take in data, run operations on the data,
 * and simply push the results into the Trips array in the form of an object
 *
 * @params: data instance of string[]
 * @params: trips instance of Trips[]
 *
 * @returns void
 */
var insertTrip = function (data, trips) {
    var name = data[0], startTime = data[1], endTime = data[2], distance = data[3];
    var timeTraveled = parseTime_1.default(endTime) - parseTime_1.default(startTime);
    var speed = (Number(distance) / timeTraveled) * 60;
    trips.push({
        name: name,
        distance: Number(distance),
        timeTraveled: timeTraveled,
        speed: speed,
    });
};
exports.insertTrip = insertTrip;
