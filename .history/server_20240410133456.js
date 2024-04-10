
var http=require('http');
var url = require('url');
var fs = require('fs');
date = require('./.history/module/datime');
http.createServer(function (req,res){
    var q=url.parse(req.url,true);
    var filename='.'+q.pathname;
    fs.readFileSync(filename, function (err, data) {
        if (err) {
           res.writeHead(404, {'Content-type':'text/html'}) ;
           return res.sendDate("404, not found");
        }
        res.writeHead(200,{'Context-type':'text/html'});
        res.write(data);
        return res.end();
    });
    res.writeHead(200, {'Content-type':'text/html'});
// initial tutorial
    // var q_url=url.parse(req.url, true).query;
    // res.write("Je suis  dans le node: "+date.datetimer()+'\n');
    // res.write(typeof(q_url));
    // res.write(req.url);
    
//lecture de fichier en node.js
    // fs.readFile('./.history/module/file.html', function(err, data){
    //     res.write(data);
    //     return res.end();
    // });

//supression fichier en node.js
//    fs.unlink('wellow.html',  function(err){
//     if (err) throw err;
//     console.log("saved");
//    });




}).listen(8080);