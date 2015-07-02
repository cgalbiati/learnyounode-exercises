var fs = require('fs');
var path = process.argv[2];
var file_text = fs.readFileSync(path).toString();
var stringArray = file_text.split('\n')
console.log(stringArray.length - 1);


