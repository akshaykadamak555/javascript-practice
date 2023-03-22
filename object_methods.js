let obj = {};
obj.name = 'messi';
obj.year= 2018;
obj.speak = function(){
 return 'My Name is '+this.name+' and this is year '+this.year;
}

let newObj = obj;
obj.year = 2019;
console.log(newObj.year) 
// 2019
console.log(newObj.speak()) 
// My Name is messi and this is year 2019


let copyObject = Object.assign({},newObj);
copyObject.name = "ronaldo";
console.log(copyObject.speak());
// My Name is ronaldo and this is year 2019
console.log(newObj.speak());
// My Name is messi and this is year 2019


let sourceObject = {name:"neymar",country:{name:"brazil"}}
let shallowCopyObj = Object.assign({},sourceObject);
shallowCopyObj.country.name = "India";
console.log(sourceObject); 
//{ name: 'neymar', country: { name: 'India' } }

let deepCopyObj = JSON.parse(JSON.stringify(obj));
console.log(deepCopyObj);
//{ name: 'messi', year: 2019 }

let createObj = Object.create(obj);
console.log(createObj);  //{}
createObj.name = 'Pk';
console.log(createObj.speak());
// My Name is Pk and this is year 2019


let person = {name:'Roger',age:30}
let entries = Object.entries(person);
console.log(entries);
//[ [ 'name', 'Roger' ], [ 'age', 30 ] ]

let keys = Object.keys(person);
console.log(keys);
// [ 'name', 'age' ]

let values = Object.values(person);
console.log(values);
// [ 'Roger', 30 ]

let frozenObject = Object.freeze(person);
frozenObject.name = 'Nadal';
console.log(frozenObject);
//{ name: 'Roger', age: 30 }