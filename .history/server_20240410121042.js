
var http=require('http');
var url = require('url');
date = require('./.history/module/datime');
http.createServer(function (req,res){
    res.writeHead(200, {'Content-type':'text/html'});
    var q_url=url.parse(req.url, true).query;
    res.write("Je suis  dans le node: "+date.datetimer()+'\n');
    res.write(type(q_url));
    res.write(req.url);
    res.end();
}).listen(8080);