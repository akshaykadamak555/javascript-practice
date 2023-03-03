/* A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
In other words, a closure gives you access to an outer function's scope from an inner function */

function greet() {
    let name = 'Akshay';
    function displayName() {
        return 'Hi' + ' ' + name;
    }

    return displayName;
}

const g1 = greet();
console.log(g1);
console.log(g1());