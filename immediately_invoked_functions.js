/* An IIFE (Immediately Invoked Function Expression) is a function that runs the moment 
it is invoked or called in the JavaScript event loop */

(function() {
    let a = 10; let b = 20;
    if(a>b) {
        console.log('a is greater');
    } else {
        console.log('b is greater');
    }
})();