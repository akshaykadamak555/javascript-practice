/* The reduce() method executes a user-supplied "reducer" callback function on each element of the array,
 in order, passing in the return value from the calculation on the preceding element */

const array1 = [1,2,3,4,5];
const initialValue = 0;
const sumWithInitial = array1.reduce((accumlator, currentValue) => accumlator + currentValue, initialValue);
console.log(sumWithInitial); 