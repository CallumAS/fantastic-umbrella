//Welcome to Section 13
//Find The Vowels

//not sure if i did this wrong it felt a lot easier than other tasks

const vowelsChars = ['A', 'E', 'I', 'O', 'U']
function vowels(str) {
    let count = 0;
    for (var i = str.length - 1; i >= 0; i--) {

        for (var x = vowelsChars.length - 1; x >= 0; x--) {
            if (str[i].toUpperCase() == vowelsChars[x])
                count++;

        }


    }
    return count;
}
