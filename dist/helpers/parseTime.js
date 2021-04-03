"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * This function will take a time as input (ex: '05:00')
 * and convert it into total minutes
 *
 * @params: Time instance of string
 * @return: Total minutes instance of number
 */
var parseTime = function (time) {
    var timeArray = time.split(':');
    return Number(timeArray[0]) * 60 + Number(timeArray[1]);
};
exports.default = parseTime;
