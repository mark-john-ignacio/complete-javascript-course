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

// // TODO

// // PROBLEM 1:
// // We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// // 1) Understanding the problem
// // - What is temperature amplitude? Answer: difference between highest and lowest temperature
// // - How to compute max and min temperatures?
// // - What's a sensor error? And what to do?

// // 2) Breaking up into sub-problems
// // - How to ignore errors?
// // - Find max value in temperature array
// // - Find min value in temperature array
// // - Subtract min from max (amplitude) and return it

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;

//     if (curTemp < min) min = curTemp;
//   }
//   console.log(`${max} is the max value. ${min} is the min value`);
//   return max - min;
// };

// // comment
// calcTempAmplitude([4, 2, 12, 42, 13, 56, 74]);
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// //Problem 2
// // Function should now receive 2 arrays of temperatures

// // 1) Understanding the problem
// // - With 2 arrays, should we implement functionality twice? No! Just merge two arrays

// // 2) Breaking up into sub-problems
// // - merge 2 arrays

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    debugger;
    if (curTemp > max) max = curTemp;

    if (curTemp < min) min = curTemp;
  }
  console.log(`${max} is the max value. ${min} is the min value`);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
