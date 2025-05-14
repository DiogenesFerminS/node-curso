const path = require('node:path');

console.log(path.sep);

const filePath = path.join('dell', 'paolo', 'password.txt');
console.log(filePath);

const base = path.basename('/dell/paolo/passwordUltraSecret');
console.log(base);

const fileName = path.basename('/dell/paolo/desktop/archivo.txt', '.txt');
console.log(fileName);

const extension = path.extname('guns&roses.jpg');
console.log(extension);