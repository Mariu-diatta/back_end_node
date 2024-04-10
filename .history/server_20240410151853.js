
var http=require('http');
var url = require('url');
var fs = require('fs');
const { formidable } = require('formidable');
date = require('./.history/module/datime');



 http.createServer(function (req,res){

  res.writeHead(200, {'Content-Type':'text/html'});
  res.write('<form action="fileupload" methode="post" enctype="multipart/form-data" >');
  res.write('<input type="file" name="fileupload"> <br>');
  res.write('<input type="submit');
  res.write('</form>');   
  
  if(req.url=='/fileupload'){
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        res.write('file upload');
        res.end();
    });
  }
  return res.end();   


   //open file in node 
//     try {
//         var re=fs.createReadStream('C:/Users/Marius Diatta/Documents/data.txt');
//         re.on('open', function () {
//             console.log("the file is open");
//         });
//     } catch (error) {
//         console.log("Erreur d'ouverture de fichier");
//     }


//lecture de fichier en node 
    //     var q=url.parse(req.url,true);
    //     var filename='.'+q.pathname;
    //     try {
    //         fs.readFileSync(filename, function (err, data) {
    //             if (err) {
    //             res.writeHead(404, {'Content-type':'text/html'}) ;
    //             return res.sendDate("404, not found");
    //             }
    //             res.writeHead(200,{'Context-type':'text/html'});
    //             res.write(data);
    //             return res.end();
    //         });      
    //     } catch (error) {
    //         console.log('une erreure est survenue lors de la leture de  fichier');
    //     }

   // res.writeHead(200, {'Content-type':'text/html'});
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