"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var parseTime_1 = __importDefault(require("../helpers/parseTime"));
it('parses time correctly using the parseTime function', function () {
    var startTime = parseTime_1.default('17:10');
    var endTime = parseTime_1.default('19:10');
    var totalTimeInMinutes = endTime - startTime;
    expect(typeof totalTimeInMinutes).toBe('number');
    expect(totalTimeInMinutes).toEqual(120); // 2 Hours
});
