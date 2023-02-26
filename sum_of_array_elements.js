let array = [1,2,3,4,5];

let result = array.reduce((a, b) => {
    return a + b;
}, 0);

console.log(result);