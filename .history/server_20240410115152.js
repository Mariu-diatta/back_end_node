var http=require('http');
date = require('./module/datime');
http.createServer(function (req,res){
    res.writeHead(200, {'Content-type':'text/html'});
    res.end("Je suis  dans le node "+date.datetimer());
}).listen(8080);