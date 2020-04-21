"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cricketcoach_1 = require("./cricketcoach");
var golfcoach_1 = require("./golfcoach");
var myCricketCoach = new cricketcoach_1.CricketCoach();
var myGolfCoach = new golfcoach_1.GolfCoach();
// declare an array for coaches .... initially empty
var theCoaches = [];
// add the coaches to the array
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var tempCoach = theCoaches_1[_i];
    console.log(tempCoach.getDailyWorkout());
}
