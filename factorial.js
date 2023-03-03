/* The factorial of a number is the product of all the numbers from 1 to that number */

function factorial(numberI) {
  var number = numberI;

  if (number < 0) {
    console.log("Error");
  } else if (number === 0) {
    console.log(1);
  } else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
      fact *= i;
    }
    console.log(fact);
  }
}

factorial(5);
