/* Callback is a function that's passed as an argument to a second function.  
the function which receives the callback decides if and when to execute the callback*/

function myFunction(callback) {
    callback();
}

function myCallback() {
    console.log('Hello');
}

myFunction(myCallback);