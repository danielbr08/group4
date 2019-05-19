const http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("res");
    if (req.method=='POST'){
        req.on('data', function (data) {
           console.log(data);
        });
    }
    // console.log(res);
    res.end();
}).listen(5000);