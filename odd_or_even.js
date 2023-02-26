function getNumber(num) {
    const number = num;
    const result = (number%2 == 0) ? 'even' : 'odd';
    console.log(result);
}

getNumber(2);