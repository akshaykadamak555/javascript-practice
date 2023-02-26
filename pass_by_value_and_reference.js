function callByValue(varOne, varTwo) {
    console.log('Inside call by value method');
    varOne = 100;
    varTwo = 200;

    console.log("VarOne=" + varOne + "VarTwo=" + varTwo);
}


let varOne = 10;
let varTwo = 20;

console.log('Before call by value method');
console.log("VarOne=" + varOne + "VarTwo=" + varTwo);

callByValue(varOne, varTwo);

console.log('After call by value method');
console.log("VarOne=" + varOne + "VarTwo=" + varTwo);


function callByReference(varObj) {
    console.log('Inside call by reference method');
    varObj.a = 100;
    console.log(varObj);
}

let varObj = { a: 1 };
console.log("Before call by reference method");
console.log(varObj);


callByReference(varObj);
console.log("After call by reference method");
console.log(varObj);

