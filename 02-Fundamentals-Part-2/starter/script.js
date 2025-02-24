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

// 40
const places = ["Cavite", "Manila", "Tarlac"];
places.push('Baguio');
console.log(places);
places.unshift('Batangas');
console.log(places);

//Remove element
places.pop(); //last
console.log(places)

places.shift(); //first
console.log(places);

console.log(places.indexOf("Cavite"))
console.log(places.indexOf("Mindanao"))

console.log(places.includes("Cavite"))
console.log(places.includes("Mindanao"))

if (places.includes("Cavite")){
  console.log("You have been to Cavite")
}