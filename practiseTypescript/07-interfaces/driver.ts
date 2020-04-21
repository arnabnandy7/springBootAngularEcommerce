import { CricketCoach } from "./cricketcoach";
import { GolfCoach } from "./golfcoach";
import { Coach } from "./coach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

// declare an array for coaches .... initially empty
let theCoaches: Coach[] = [];

// add the coaches to the array
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

for(let tempCoach of theCoaches){
    console.log(tempCoach.getDailyWorkout());
}