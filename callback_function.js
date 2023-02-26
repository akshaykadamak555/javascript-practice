function myFunction(callback) {
    callback();
}

function myCallback() {
    console.log('Hello');
}

myFunction(myCallback);