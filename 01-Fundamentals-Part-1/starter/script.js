let js = 'amazing';

// const math = 100+20+6*55;
// console.log("testing " + math);

// const firstName = "Raiden";
// console.log(firstName);

// let hotDog = "Tender Juicy";
// console.log(hotDog);

// const y3 = 123;
// console.log(y3);

// const $function =54;
// console.log($function);

// let Hatdog = "violates naming convention";

// const PI = 3.1415;

// console.log(PI)

// let myPastShowPlaylist = "anime";
// let myCurrentShowPlaylist = "sitcom";

// console.log(myCurrentShowPlaylist);

// let age =3
// let fullAge = true;

// console.log(typeof fullAge)
// This is a comment
// let bigInt = 1232131232132321312321312321321321323;
// console.log(typeof bigInt);

// console.log(true)

// console.log(typeof country)

// myCurrentShowPlaylist = true;
// console.log(myCurrentShowPlaylist)

// let year;
// console.log(year)

// let month = null;
// console.log(typeof month)

// let hairLenght = "long"; // use when sure the variable will change value
// const hairColor = "black"; // always use
// var eyeColor = "black"; //never use because old
// terribleIdea = "this"; //global object

// hairLenght = "short";
// // hairColor = "red"; // does not work because const

// console.log(hairLenght);
// console.log(hairColor);
// console.log(terribleIdea);

//Math Operators
// const year = 2047;
// let ageMark = year - 2001;
// const ageSomeone = year - 2003;
// console.log(ageMark);
// console.log(ageSomeone);
// console.log(ageMark + 1 * 2 / 2);

// const firstName = "Joey"
// const lastName = "Tribianni"

// console.log(firstName + " " + lastName);

// // Assignment Operators
// ageMark += 10
// ageMark *= 2
// ageMark ++
// ageMark --
// ageMark --
// console.log(ageMark);

// //comparison Operators
// if (ageMark > ageSomeone){
//     console.log ("Hi");
// }
// const ageSarah = 23;
// console.log(ageSarah >= 18);

// console.log (2020-2000 < 2021 -2000)


// const now = 2024
// const ageJamal = now - 1999;
// const ageJavir = now - 1975;

// console.log(ageJamal, ageJavir);

// let x, y;
// x = y =64 + 5 * 7 / 3;
// console.log(x,y);

// const averageAge = (ageJamal + ageJavir) / 2;
// console.log(ageJamal, ageJavir, averageAge);

// const age = 10
// const canDrive = age >= 18

// if (canDrive){
//     console.log(`Get a license now 🚗`)
// } else {
//     yearsLeft = 18 - age
//     console.log(`Wait ${yearsLeft} years ⌚`)
// }

// // Type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Mark"));

// console.log(typeof NaN)

// console.log(String(89), 89)

// // Type coercion

// console.log('I am ' + 23 + ' years old')
// console.log('I am ' + '23' + ' years old') //converted to string (plus)

// console.log('23' - '10' - 3); // converted to number (minus)
// console.log('23' * '2');

// let n = '1' + 1;
// n = n - 1;
// console.log(n); //outputs 10

// n = 2+3+4+'5' //Output: "95"
// n = '10' - '4' - '3' - 2 + '5' //Outputs "15"

// 5 falsy vaules: 0, '', undefined, null, NaN

// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean(''))
// console.log(Boolean(null))

// const money = 1
// if (money) {
//     console.log("Yeyyyyy");
// } else {
//     console.log("Just give me my money");
// }

// let height = 0;
// if (height) {
//     console.log("Is it cool up there?");
// }else {
//     console.log("Wheres your height. It's undefined"); 
// }

// const age = '18';
// if (age === 18) console.log("You just became an adult"); // strict comparison, if ==, it performs type coersion so its loose comparison

// if (age == 18) console.log("You just became an adult (loose)"); 

// const favorite = Number(prompt("What is your fav number?"));
// console.log(favorite);
// console.log(typeof(favorite));

// const bias = 69;
// const second_bias = 420

// if (favorite === bias) {
//     console.log(`Nice. ${bias} is nice`);
// } else if(favorite === second_bias){
//     console.log(`${second_bias} is also a cool number`)
// } else {
//     console.log(`Nobody cares if your favorite number is ${favorite}`);
// }

// if (favorite !== bias){
//     console.log(`Why not ${bias}`)
// }

// const hasDriversLicence = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// console.log(!hasDriversLicence);

// const shouldDrive = hasDriversLicence && hasGoodVision;
// if(shouldDrive){
//     console.log("Leroy should drive")
// } else {
//     console.log("Book a grab car")
// }

// const isTired =  false;
// console.log(hasDriversLicence && hasGoodVision && isTired);

// const shouldDrive = hasDriversLicence && hasGoodVision && !isTired;
// if(shouldDrive){
//     console.log("Leroy Jenkins can drive")
// } else {
//     console.log("Book a grab car")
// }

// const day = prompt('What day is today?', 'monday');

// switch(day){
//     case 'monday':
//         console.log('Hotdogs')
//         break;
//     case 'tuesday':
//         console.log('Pizza')
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Pasta')
//         break;
//     case 'friday':
//         console.log('Ramen')
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Sushi')
//         break;
//     default:
//         console.log('Invalid day')
// }

// if (day === 'monday'){
//     console.log('coke')
// }else if (day === 'tuesday'){
//     console.log('pepsi')
// }else if (day === 'wednesday' || day === 'thursday'){
//     console.log('sprite')
// }else if (day === 'friday'){
//     console.log('royal')
// }else if (day === 'saturday' || day === 'sunday'){
//     console.log('water')
// }else{
//     console.log('invalid day')
// }

const age = 19;

age >= 18 ? console.log('I like alcohol 🍷') : console.log('I have not tasted alcohol in my life')

const drink = age >= 18 ? 'wine' : 'Water';
console.log(drink);

let drink2

if (age >= 18){
    drink2 = 'wine';
} else {
    drink2 = 'water';
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)