const http = require('http');

const requestListener = function( req, res) {
    if (req.url == "/") {
        // set response header
        res.writeHead(200, {'Content-Type': 'text/html'})

        // set response content
        res.write('<html><body><p>This is the home page.</p></body></html>');
        res.end();

    } else if (req.url == "/users") {
        // set response header
        res.writeHead(200, {'Content-Type': 'text/html'});

        // set response content
        res.write('<html><body><p>This is the users page.</p><ol><li>Eric</li><li>Jessica</li><li>Chad</li></ol></body></html>');
        res.end();

    } else {
        res.end('Invalid Request.');
    }
}

// create the web server
const server = http.createServer(requestListener);

// listen for incoming requests
server.listen(5000); 

console.log('Node.js web server at port 5000 is running! :)');