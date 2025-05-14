const http = require('node:http');
const {validPort} = require('./10.free-port');

const server = http.createServer((req, res)=>{
    console.log('request received');
    res.end('Hola mundo');
});

validPort(1234).then(port =>{
server.listen(port, ()=>{
    console.log(`Server listening en port http://localhost:${port}`);
});
})

