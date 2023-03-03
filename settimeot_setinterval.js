/* setTimeout method executes a function, after waiting a specified number of milliseconds */
/* setInterval method repeates a given function at every given time  interval */

function hello() {
    console.log('hello');
}

setTimeout(hello, 2000);

setInterval(hello, 2000);