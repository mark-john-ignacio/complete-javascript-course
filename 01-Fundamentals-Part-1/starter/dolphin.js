/* Write your code below. Good luck! 🙂 */


const dolphins = [96, 108, 89];
const koalas = [88, 91, 110];

let sum_dolphins = 0;
dolphins.forEach(score =>{
    sum_dolphins += score
});

const sum_koalas = koalas.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum_dolphins);
console.log(sum_koalas);


// average
const scoreDolphins = sum_dolphins / dolphins.length
const scoreKoalas = sum_koalas / koalas.length


console.log(scoreDolphins);
console.log(scoreKoalas);