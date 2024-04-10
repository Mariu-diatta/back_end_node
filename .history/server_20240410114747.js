var http=require('http');
date = require('datime');
http.createServer(function (req,res){
    res.writeHead(200, {'Content-type':'text/html'});
    res.end("Je suis  dans le node "+date);
}).listen(8080);