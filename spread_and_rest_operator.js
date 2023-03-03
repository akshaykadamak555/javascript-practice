// rest operator

/* The rest operator gives us an easier and cleaner way of working with an infinite number of parameter. */

function sumAll(...args) {
    let sum = 0;

    for(let arg of args) {
        sum += arg;
    }
    return sum;
}


console.log(sumAll(1,2,3));

// spread operator

/* The spread operator "spreads" the values in an iterable (array, strings) accross zero or more arguments or elements */

const first = [1,2];
const second = [3,4];
const final = [...first, ...second];
console.log(final);
