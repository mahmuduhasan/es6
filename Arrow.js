//Basic way

// function doubleIt(num){
//     return num*2;
// }
// const result = doubleIt(5);
// console.log(result);
//Update way
// const doubleIt = function(num){
//     return num*2;
// }
// const result = doubleIt(5);
// console.log(result);
//Arrow way
const doubleIt = num => num*2;

const result = doubleIt(5);
console.log(result);

const add = (x,y) => x+y;
const addResult = add(100, 50);
console.log(addResult);

const give5 = () => 5;
const giveResult = give5();
console.log(giveResult);

const doMath = (x, y) =>{
    const sum = x + y;
    const diff = x-y;
    const result = sum * diff;
    return result;
}
const doMathResult= doMath( 7, 5);
console.log(doMathResult);