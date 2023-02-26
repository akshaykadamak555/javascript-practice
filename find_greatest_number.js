var arr =  [3,4,8,10,20,50,94];

var largest = arr[0];

for(var i = 0; i<arr.length; i++) {
    if(largest < arr[i]) {
        largest = arr[i];
    }
}

console.log(largest);