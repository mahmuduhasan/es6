function addIt( a , b= 10){
    b = b || 0;
    var sum = a+b;
    return sum;
}
var add = addIt(5 );
console.log(add);