function checkPalindrome(string) {
    const arrayValues = string.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('it is a palindrome');
    } else {
        console.log('it is not a palindrome');
    }
}


const string = prompt('Enter a string:');
checkPalindrome(string);