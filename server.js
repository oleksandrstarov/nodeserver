var http = require('http');

var hostname =  process.env.IP || 'localhost';
var port =  process.env.PORT || 3000;

var server = http.createServer(function(req, res){
  console.log(req.headers);
    res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<html><body><h1>Hello World</h1></body></html>');
  })
server.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});