 const net = require('node:net');

 function validPort (port){
    return new Promise((resolve, rejects)=>{
        const server = net.createServer();

        server.listen(port, ()=>{
            const {port} = server.address();
            server.close(()=>{
                resolve(port);
            });
        });

        server.on('error', (err)=>{
            if(err.code === "EADDRINUSE"){
                validPort(0).then(port => resolve(port));
            }else{
                rejects(err);
            }
        })
    });
 }

 module.exports = {validPort};