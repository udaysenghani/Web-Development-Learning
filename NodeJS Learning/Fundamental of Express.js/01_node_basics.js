/******************************************************************
 NODE.JS BASICS
******************************************************************/

/*
Node.js allows JavaScript to run OUTSIDE the browser.
It uses:
✔ Event Loop
✔ Non-blocking I/O
✔ Single-threaded architecture
*/

// Import built-in modules
const fs = require('fs');
const http = require('http');

/*
fs.readFile is ASYNCHRONOUS
→ Node sends task to background
→ continues execution
→ callback runs later
*/
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

/*
Creating HTTP server WITHOUT Express
Shows how Express works internally
*/
const server = http.createServer((req, res) => {
  /*
  req → incoming request object
  res → outgoing response object
  */
  res.write('Hello from Node.js');
  res.end();
});

/*
Server starts listening
Event loop waits for incoming requests
*/
server.listen(3000, () => {
  console.log('Node server running');
});
