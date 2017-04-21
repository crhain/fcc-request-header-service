const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('public'));

app.get('/api/whoami', (request, response) =>{
    let jsonObject = {ipaddress: null, language: null, software: null }
    //let header = request.header;
    let ip = request.ip;
    let language = request.header('accept-language');
    let software = request.header('user-agent');                                  
    //get ip address
    jsonObject.ipaddress = ip;
    //Parse out language out    
    jsonObject.language = language.slice(0, language.indexOf(','));
    //Parse out sytem-information using regex: User-Agent: Mozilla/<version> (<system-information>) <platform> (<platform-details>) <extensions>
    jsonObject.software = software.slice(software.indexOf('(') + 1, software.indexOf(')'));
    
    response.end(JSON.stringify(jsonObject));
});

app.listen(port, ()=>{
    console.log('running server on port: ' + port);
});