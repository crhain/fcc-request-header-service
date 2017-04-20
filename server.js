const express = require('express');
const app = express();
const port = process.argv[2] || 8080;

app.listen(port);
console.log('running server on port: ' + port);

app.get('/api/whoami', (request, response) =>{
    let jsonObject = {ipaddress: null, language: null, software: null }
    //let header = request.header;
    let ip = request.ip;
    let language = request.header('accept-language');
    let software = request.header('user-agent');    
    
    jsonObject.ipaddress = ip;
    //Parse out language using regex XXX,    
    jsonObject.language = language;
    //Parse out sytem-information using regex: User-Agent: Mozilla/<version> (<system-information>) <platform> (<platform-details>) <extensions>
    jsonObject.software = software;
    
    console.log(request.headers);
    response.end(JSON.stringify(jsonObject));
});
