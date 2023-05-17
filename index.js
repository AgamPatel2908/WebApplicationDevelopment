// Creating http const for building our server

const http = require('http');

let calc = require('./sub');

let product = require('./mul');

let addition = require('./add');

let div = require('./div');

// using http to create server with 2 arguments - req and res
http.createServer((req, res) => {

    //Writing the content type to be displayed
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.write("Addition : " + addition.add(10,5));
     res.write("Subtraction : " + calc.sub(10,5));
     res.write("Multiplication : " + product.mul(10,5));
     res.write("Division : " + div.div(10,5));

     //Content to be displayed on your backend server
     res.end('Hello, World! This is my first server!!');

}).listen(8080);

//runninng and testing the server

console.log('Server running at http://localhost:8080/');