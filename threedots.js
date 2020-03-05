const agesFriends = [12,23,13,15,17,26];
const agesFamily =[ 29,30,56, 9];
const agesOthers = [40,87,98,23];

const allAges = agesFriends.concat(agesFamily).concat([5]).concat(agesOthers);
console.log(allAges);

const agesAll = [...agesFriends, ...agesFamily, 5 , ...agesOthers];
console.log(agesAll);

const takaDiff =[750, 560,980];
const max = Math.max(...takaDiff);
console.log(max);


const hridoy = 550;
const apurbo = 750;
const ami = 220;
const maximum = Math.max(hridoy, apurbo, ami);
console.log(maximum);