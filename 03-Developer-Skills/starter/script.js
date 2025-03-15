// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const xyzabc = 23;
// if (xyzabc === 23) console.log('23');

// const caclAge = birthYear => 2037 - birthYear;
// console.log('');
// console.log('testing');
// console.log('x');

// console.log('');

// console.log(xyzabc);

// TODO

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// 1) Understanding the problem
// - What is temperature amplitude? Answer: difference between highest and lowest temperature
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temperature array
// - Find min value in temperature array
// - Subtract min from max (amplitude) and return it

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
  }
  console.log(`${max} is the max value`);
};

// comment
calcTempAmplitude([4, 2, 12, 42, 13, 56, 74]);
