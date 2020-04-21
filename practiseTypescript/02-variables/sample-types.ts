let found: boolean=true;
let grade: number=88.6;
let firstName: string="Arnab";
let lastName: string='Nandy';

let pHold: any;

pHold=found;
console.log(pHold);
pHold=grade;
console.log("The grade is "+pHold);
pHold=firstName;
console.log("With Regular concatenation:");
console.log("Hi "+pHold+" "+lastName);
console.log("Use of template strings instead of regular concatenation:");
console.log(`Hi ${firstName} ${lastName}`);