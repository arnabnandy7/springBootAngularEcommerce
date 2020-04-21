import { Shape } from "./shape";
import { Circle } from "./circle";
import { Rectangle } from "./rectangle";

let myShape = new Shape(10, 15);
let myCircle = new Circle(5, 10, 20);
let myRectange = new Rectangle(0, 0, 3, 7);

// declare an array of shapes... initially empty

let theShapes: Shape[] = [];

// add the shapes to the array
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectange);

for(let tempShapes of theShapes){
    console.log(tempShapes.getInfo());
}