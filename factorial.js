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
