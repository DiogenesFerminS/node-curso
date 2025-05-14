const fs = require('node:fs');

fs.readdir('.', (err, file)=>{
    if(err){
        throw new Error(err);
    }

    file.forEach((f, i) => console.log(`${i} - ${f}`));
})