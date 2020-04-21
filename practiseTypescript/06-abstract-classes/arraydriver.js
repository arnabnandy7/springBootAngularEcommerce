"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = require("./circle");
var rectangle_1 = require("./rectangle");
var myCircle = new circle_1.Circle(5, 10, 20);
var myRectange = new rectangle_1.Rectangle(0, 0, 3, 7);
// declare an array of shapes... initially empty
var theShapes = [];
// add the shapes to the array
theShapes.push(myCircle);
theShapes.push(myRectange);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var tempShapes = theShapes_1[_i];
    console.log(tempShapes.getInfo());
    console.log("area= " + tempShapes.calculateArea());
    console.log();
}
