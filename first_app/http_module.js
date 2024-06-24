// import { Socket } from 'dgram';
// const http = require('http');

import http from 'http'


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('hello world');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3,4]));
        res.end();
    }
});

// server.on('connection', (Socket) => {
//     console.log("new connection..");
// })
server.listen(3000);

console.log("listening port 3000..");