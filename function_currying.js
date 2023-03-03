/* Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, 
each taking a single argument */

function calculateVolume(length) {
    return function(breadth) {
        return function(height) {
            return length * breadth * height;
        }
    }
}

console.log(calculateVolume(4)(5)(6));