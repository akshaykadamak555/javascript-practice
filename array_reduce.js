const array1 = [1,2,3,4,5];
const initialValue = 0;
const sumWithInitial = array1.reduce((accumlator, currentValue) => accumlator + currentValue, initialValue);
console.log(sumWithInitial); 