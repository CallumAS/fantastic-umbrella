//Welcome to Section 3
//String Reversal

function reverse(str) {
    let result = "";
    for (var i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result;
}