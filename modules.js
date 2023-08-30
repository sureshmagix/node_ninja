
const xyz = require('./people'); // when say require people it looks for the people  in that path and it runs people
//console.log(xyz); //  This will print a empty module if not exported in people.js


const {people} =require('./people'); // destructuring object people

// If i want to access people from here,then we have to export module in people.js

// How to export multiple things like names and ages
console.log('simple people');
console.log(xyz.people);
console.log('simple people age');
console.log(xyz.ages);

console.log(people);



