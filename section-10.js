//Welcome to Section 10
//Sentence Capitalization

function capitalize(str) {
    str = str.charAt(0).toUpperCase() + str.slice(1);
    for (var i = 1; i < str.length; i++) {
        if (str[i - 1] === " ") {
            str = str.slice(0, i) + str.charAt(i).toUpperCase() + str.slice(i + 1);
        }
    }
    return str;
}
