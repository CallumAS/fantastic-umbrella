//Welcome to Section 4
//Palindromes

//used previous solution
function reverse(str) {
    let result = "";
    for (var i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result;
}

function palindrome(str) {
    return str == reverse(str)
}