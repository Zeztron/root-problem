"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parseTime = function (time) {
    var timeArray = time.split(':');
    // Convert into total # of minutes
    return Number(timeArray[0]) * 60 + Number(timeArray[1]);
};
exports.default = parseTime;
