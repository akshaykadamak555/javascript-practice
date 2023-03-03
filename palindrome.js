/* A Number that remains same even if it's digits are reserved, is called a palindromic */

function palindrome(num) {
    var rem, temp, final = 0;
    var number = num;

    temp = number;

    while(number > 0) {
        rem = number%10;
        number = parseInt(number/10);
        final = final * 10 + rem;
    }

    if(final == temp) {
        console.log('palindrome');
    } else {
        console.log('not palindrome');
    }
}

palindrome(99);