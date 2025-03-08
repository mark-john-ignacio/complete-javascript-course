"use strict";

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log("I can drive :D");

// // const interface = 'Audio';
// // const private = 123;

// function logger() {
//   console.log("My name is Mark");
// }

// // calling / running / invoking
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;

//   return juice;
// }

// const appleJuice = fruitProcessor(4, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(5, 5);
// console.log(appleOrangeJuice);

// // 34
// const age1 = calcAge1(2001);
// console.log(`My age is 2037 is ${age1}`);
// // function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// //function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(2001);
// console.log(age1, age2);

// const year = 2037;
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(2001);

// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = year - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(2001, "Mark"));
// console.log(yearsUntilRetirement(2000, "John"));
// console.log(yearsUntilRetirement(2005));

// function cutFruitPieces(fruit) {
//   return fruit * 70;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;

//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return `${firstName} retires in ${retirement} years`;
//   } else {
//     const retiredYears = retirement * -1;
//     return `${firstName} is retired for ${retiredYears} years`;
//   }
// };

// console.log(yearsUntilRetirement(2001, "Mark"));
// console.log(yearsUntilRetirement(1950, "John"));

// //Function challenge
// /* Write your code below. Good luck! 🙂 */

// // TODO: Arrow function calcAverage to calculate the average of 3 scores
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;

// // TODO: two new variables
// const scoreDolphins = calcAverage(44,23,71);
// const scoreKoalas = calcAverage(65,54,49);

// // Times two
// const timesTwo = score => score * 2;

// // TODO: checkwinner function
// function checkWinner(avgDolphins, avgKoalas){
//     if (avgDolphins >= timesTwo(avgKoalas)){
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
//     } else if(avgKoalas >= timesTwo(avgDolphins)){
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
//     } else {
//         console.log(`No team wins...`)
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// const heroes = ["Rizal", "Luna", "Mabini"]

// const years = new Array(2020, 2021, 2022)

// console.log(heroes[0])
// console.log(heroes.length)
// console.log(heroes[heroes.length-1])

// heroes[2] = "Apolinario"
// console.log(heroes)

// const mark = ['Mark', 'John', 1000, heroes]

// console.log(mark)

// function declaration
// const caclAge = function(birthYear) {
//   return 2037 - birthYear;
// }

// const years = [2000, 2001, 2002, 2003, 2004];

// const age1 = caclAge(years[0]);
// const age2 = caclAge(years[1]);
// const age3 = caclAge(years[years.length - 1]);
// console.log(age1, age2, age3)

// const ages = [
//   caclAge(years[0]),
//   caclAge(years[1]),
//   caclAge(years[years.length - 1])
// ]
// console.log(ages)

// // 40
// const places = ["Cavite", "Manila", "Tarlac"];
// places.push('Baguio');
// console.log(places);
// places.unshift('Batangas');
// console.log(places);

// //Remove element
// places.pop(); //last
// console.log(places)

// places.shift(); //first
// console.log(places);

// console.log(places.indexOf("Cavite"))
// console.log(places.indexOf("Mindanao"))

// console.log(places.includes("Cavite"))
// console.log(places.includes("Mindanao"))

// if (places.includes("Cavite")){
//   console.log("You have been to Cavite")
// }

//Challenge

// /* Write your code below. Good luck! 🙂 */

// function calcTip(bill) {
//   let tip = 0;
//   if (bill >= 50 && bill <= 300) {
//     tip = bill * 0.15;
//   } else {
//     tip = bill * 0.2;
//   }
//   return tip;
// }

// const calcTip = function(bill){
//   let tip = 0;
//   if (bill >= 50 && bill <= 300){
//       tip = bill * 0.15
//   }else{
//       tip = bill * 0.20
//   }
//   return tip
// }

// const calcTip = function(bill){
//   return bill >= 50 && bill <= 300
//   ? bill * 0.15
//   : bill * 0.20
// }

// const bills = [125, 555, 44]
// const tips = [
//   calcTip(bills[0]),
//   calcTip(bills[1]),
//   calcTip(bills[2])
//   ]
// const totals = [
//   bills[0] + tips[0],
//   bills[1] + tips[1],
//   bills[2] + tips[2]
//   ]

// // Objects
// const mark = {
//   firstName: "Mark",
//   lastName: "Ignacio",
//   age: 2037 - 2001,
//   job: "developer",
//   friends: ["AJ", "JM", "Menard"],
// };
// console.log(mark);

// console.log(mark.lastName);
// console.log(mark["lastName"]);

// const nameKey = "Name";
// console.log(mark["first" + nameKey]);
// console.log(mark["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Mark? Choose between firstName, lastName, age, job, and friends"
// );

// if (mark[interestedIn]) {
//   console.log(mark[interestedIn]);
// } else {
//   console.log("It doesn't exist");
// }

// mark.location = "Cavite";
// mark["hobby"] = "Chess";

// console.log(mark);

// // Challenge
// console.log(
//   `${mark.firstName} has ${mark.friends.length} friends, and his best friend is called ${mark.friends[0]}`
// );


// const mark = {
//   firstName: "Mark",
//   lastName: "Ignacio",
//   birthYear: 2001,
//   job: "developer",
//   friends: ["AJ", "JM", "Menard"],
//   hasDriversLicense: true,

//   // caclAge: function(birthYear){
//   //   return 2037 - birthYear;
//   // }

//   // caclAge: function(){
//   //   return 2037 - this.birthYear;
//   // }

//   caclAge: function(){
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function(){
//     return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
//   }
// };

// console.log(mark.caclAge());
// // console.log(mark['caclAge'](2001));
// console.log(mark.age);

// console.log(mark.getSummary());

// /* Write your code below. Good luck! 🙂 */

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height:1.69,
//   calcBMI: function(){
//       this.bmi= this.mass / (this.height * this.height)
//       return this.bmi
//   }
// }

// const john = {
//   fullName: "Mark Miller",
//   mass: 92,
//   height:1.95,
//   calcBMI: function(){
//       this.bmi= this.mass / (this.height * this.height)
//       return this.bmi
//   }
// }

// let winner;
// let loser;
// if(mark.calcBMI() > john.calcBMI()){
//   winner = mark;
//   loser = john
// } else if (john.calcBMI() > mark.calcBMI()){
//   winner = john;
//   loser = mark
// }

// console.log(`${winner.fullName}'s BMI (${winner.bmi}) is higher than ${loser.fullName}'s (${loser.bmi})`)

for (let rep=1; rep <=10; rep++){
  console.log(`Lifting weights repetition ${rep} 🏋️`)
}

const types = [];

const markArray = [
  'Mark',
  'Ignacio',
  2037-2001,
  'developer',
  ['aj', 'menard', 'jm'],
  true
];

for(let i = 0; i < markArray.length ; i++){
  console.log(markArray[i], typeof markArray[i])

  // Filling types array
  // types[i] = typeof markArray[i];
  types.push(typeof markArray[i])
}

console.log(types)

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++){
  ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break
console.log(`==== ONLY STRING ===`)
for(let i = 0; i < markArray.length ; i++){
  if(typeof markArray[i] !== 'string') continue;
  console.log(markArray[i], typeof markArray[i])
}

console.log(`==== BREAK WITH NUMBER ===`)
for(let i = 0; i < markArray.length ; i++){
  if(typeof markArray[i] === 'number') break;
  console.log(markArray[i], typeof markArray[i])
}