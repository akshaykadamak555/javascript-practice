/* A Higher-Order function is a function that receives a function as an argument or returns the function as output */

function higherOrder(fn) {
  fn();
}

higherOrder(function () {
  console.log("Hello world");
});
