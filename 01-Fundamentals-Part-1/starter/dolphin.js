/* Write your code below. Good luck! 🙂 */


const dolphins = [96, 108, 89];
const koalas = [88, 91, 110];
const minimum = 100;

const sum_dolphins = dolphins.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
}, 0);

const sum_koalas = koalas.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);



// average
const scoreDolphins = sum_dolphins / dolphins.length
const scoreKoalas = sum_koalas / koalas.length

console.log(`Dolphins average: ${scoreDolphins}`);
console.log(`Koalas average: ${scoreKoalas}`)

if (scoreDolphins > scoreKoalas && scoreDolphins >= minimum) {
    console.log("Dolphins win the trophy")
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= minimum) {
    console.log("Koalas win the trophy")
}else if (scoreDolphins < scoreKoalas && scoreDolphins >= minimum && scoreKoalas >= minimum){
    console.log("Both win the trophy")
}else{
    console.log("No one wins the trophy")
}
