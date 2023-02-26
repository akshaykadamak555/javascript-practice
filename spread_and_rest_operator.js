// rest operator

function sumAll(...args) {
    let sum = 0;

    for(let arg of args) {
        sum += arg;
    }
    return sum;
}


console.log(sumAll(1,2,3));


// spread operator

const first = [1,2];
const second = [3,4];
const final = [...first, ...second];
console.log(final);
