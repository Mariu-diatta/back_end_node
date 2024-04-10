
var http=require('http');
date = require('./.history/module/datime');
http.createServer(function (req,res){
    res.writeHead(200, {'Content-type':'text/html'});
    res.write("Je suis  dans le node: "+date.datetimer());
    res.end();
}).listen(8080);