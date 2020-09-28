const http = require("http");

function handleRequest(req, res) {
    res.end('<h1>Selamat datang di NodeJS</h1>');

}

var server = http.createServer(handleRequest); //buat variabel server, lalu http.createServer nama fungsinya. Passing handleRequestnya (handleRequest juga fungsi)

server.listen(3000, function() { //passing ke server port 3000
    console.log('Sedang berjalan pada port 3000');

});