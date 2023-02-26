var data = { t1: 'a', t2: 'b'};

for(const d in data) {
    console.log('hello_' + d);
}

for(const d in data) {
    console.log(data[d]);
}

for(let i = 0; i < 5; i++) {
    console.log(i);
}


const array1 = ['a', 'b', 'c', 'd'];
for(const element of array1) {
    console.log(element);
}