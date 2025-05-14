const fs = require('node:fs');

const text = fs.readFileSync('./archivo.txt', 'utf-8');
console.log({text});

const textTwo = fs.readFileSync('./archivo2.txt', 'utf-8');
console.log({textTwo});