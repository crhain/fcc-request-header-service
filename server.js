const express = require('express');
const app = express();
const port = process.argv[2] || 8080;

app.listen(port);
console.log('running server on port: ' + port);

app.get('/', (request, response) =>{
    response.end('Hola!');
});
