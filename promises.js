/* Promises are used to handle asynchronous operations in javascript. they are easy to manage when dealing 
with multiple asynchronous operations where callbacks can create hell leading to unmanageable code */

const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success');
    }, 2000);
});

myFirstPromise.then((successMessage) => {
    console.log(`yay! ${successMessage}`);
});

