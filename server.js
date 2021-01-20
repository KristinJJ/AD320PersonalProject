"use strict"
const { read } = require('fs');
const http = require('http');

const requestListener = function( req, res) {
    let users = [
        { name: 'Eric', status: 'admin'},
        { name: 'Jessica', status: 'admin'},
        { name: 'Chad', status: 'client'}
    ];
      
    if (req.url == '/' && req.method == 'POST') {
        // set response header
        res.writeHead(200, {'Content-Type': 'application/json'});

        // set response content
        res.write(`<h3>${JSON.stringify(users)}</h3>`);
        res.end();

    } else if (req.url == '/users' && req.method == 'GET') {
        // set response header
        res.writeHead(200, {'Content-Type': 'text/html'});

        // set response content
        let userNames = "<ol>";
        let findUserNames = users.find(function(user, index) {
            userNames += "<li>" + user.name + "</li>";
        }) 
        userNames += "</ol>";

        res.write(`<html><body><p>This is the list of user names.${userNames}</p></body></html>`);
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