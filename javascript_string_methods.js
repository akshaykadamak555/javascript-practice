

const str = 'JavaScript is amazing';

// startsWith method

console.log(str.startsWith('JavaScript')); // true
console.log(str.startsWith('Java')); // true
console.log(str.startsWith('javascript')); // false

// endsWith method

console.log(str.endsWith('amazing')); // true
console.log(str.endsWith('ing')); // true
console.log(str.endsWith('Amazing')); // false

// includes method

console.log(str.includes('Script')); // true
console.log(str.includes('script')); // false
console.log(str.includes(' ')); // true
console.log(str.includes('array')); // false


// slice method

  // Default start index is 0
  console.log(str.slice()); // 'JavaScript is amazing'

  // start copy at index 4
  console.log(str.slice(4)); // 'Script is amazing'

  // end copy at index 10(character at this index will not be included)
  console.log(str.slice(0, 10)); // 'JavaScript'


  // toUpperCase() method

  console.log(str.toUpperCase()); // 'JAVASCRIPT IS AMAZING'


  // toLowerCase() method
  
  console.log(str.toLowerCase()); // 'javascript is amazing'


  // split() method

  const strNew = 'JavaScript-is-amazing';

  console.log(str.split()); // ["JavaScript is amazing"]

  // Separator string used to determine where to make each split
  console.log(str.split('S')); // ["Java", "cript is amazing"]
  console.log(str.split('is')); // ["JavaScript ", " amazing"]
  console.log(str.split(' ')); // ["JavaScript", "is", "amazing"]
  console.log(strNew.split('-')); // ["JavaScript", "is", "amazing"]


  // replace method

  console.log(str.replace('JavaScript', 'Node.js')); // 'Node.js is amazing'

  // replace() method is case sensitive
  // replace will not work
  console.log(str.replace('Javascript', 'Node.js')); // 'JavaScript is amazing'

  // use regular expression for case insensitive
  console.log(str.replace(/Javascript/i, 'Node.js')); // 'Node.js is amazing'

  // replace() method replaces only the first match
  console.log(str.replace('a', 'A')); // 'JAvaScript is amazing'

  // to replace all matches, use regular expression
  console.log(str.replace(/a/g, 'A')); // 'JAvAScript is AmAzing'



  // repeat() method 

  const str1 = 'JavaScript';

  console.log(str1.repeat(3)); // 'JavaScriptJavaScriptJavaScript'
  console.log(str1.repeat(1)); // 'JavaScript'
  console.log(str1.repeat(0)); // '