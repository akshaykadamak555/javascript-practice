const map1 = new Map();
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
console.log(map1.get('a'));
map1.set('a', 97);
console.log(map1.get('a'));
console.log(map1.size);
map1.delete('b');
console.log(map1.size);


const mySet1 = new Set();
mySet1.add(1);
mySet1.add(5);
mySet1.add(5);
mySet1.add('Some text');
console.log(mySet1);
const o = { a: 1, b: 2};
mySet1.add(o);
console.log(mySet1.has(1));
console.log(mySet1.has(3));