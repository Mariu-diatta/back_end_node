
var http=require('http');
var url = require('url');
var fs = require('fs');
date = require('./.history/module/datime');
http.createServer(function (req,res){
    res.writeHead(200, {'Content-type':'text/html'});
    // var q_url=url.parse(req.url, true).query;
    // res.write("Je suis  dans le node: "+date.datetimer()+'\n');
    // res.write(typeof(q_url));
    // res.write(req.url);
    
    fs.readFile('./.history/module/file.html', function(err, data){
        res.write(data);
        return res.end();
    });



}).listen(8080);