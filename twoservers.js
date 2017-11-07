// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORTone = 7000;
var PORTtwo = 7500;

// Create a generic function to handle requests and responses
function somethinggood(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You are good!!!!" + request.url);
}

function somethingbad(request,response){
    response.end("You are bad!!!" + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var serverone = http.createServer(somethinggood);
var servertwo = http.createServer(somethingbad);

// Start our server so that it can begin listening to client requests.
serverone.listen(PORTone, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORTone);
});

// Start our server so that it can begin listening to client requests.
servertwo.listen(PORTtwo, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORTtwo);
});

