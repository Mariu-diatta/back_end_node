
var http=require('http');
var url = require('url');
date = require('./.history/module/datime');
http.createServer(function (req,res){
    res.writeHead(200, {'Content-type':'text/html'});
    res.write("Je suis  dans le node: "+date.datetimer()+'\t');
    res.write(req.url);
    res.end();
}).listen(8080);