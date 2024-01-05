// Create web server
// 1. Create a web server object
// 2. Create a callback function
// 3. Start the server
// 4. Set up a route
// 5. Create a callback function for the route
// 6. Send a response
// 7. Start the server

// 1. Create a web server object
const http = require('http');

// 2. Create a callback function
const server = http.createServer((req, res) => {

  // 6. Send a response
  res.end('Hello world from NodeJS');

});

// 3. Start the server
server.listen(3000, () => {
  console.log('Server started on port 3000');
});


