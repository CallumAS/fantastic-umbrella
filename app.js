//another yoinkable script
var fs = require('fs');

for (let i = 1; i < 35; i++) {
    fs.writeFile('section-' + i + '.js', '//Welcome to Section ' + i, function (err) {
        if (err) throw err;
        console.log('Section ' + i + ' Has been created!');
    });
}