/******************************************************************
 EXPRESS FUNDAMENTALS
******************************************************************/

/*
Express is a WRAPPER around Node's http module.
It simplifies:
✔ Routing
✔ Middleware
✔ Request/Response handling
*/

const express = require('express');
const app = express();

/*
ROUTE FLOW:
Client → Express → Matching Route → Response
*/

// Root route
app.get('/', (req, res) => {
  /*
  req → request data
  res → methods to send response
  */
  res.send('Hello Express');
});

/*
Route Parameters
URL: /user/10
req.params.id → 10
*/
app.get('/user/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

/*
Query Params
URL: /search?name=js
req.query.name → js
*/
app.get('/search', (req, res) => {
  res.send(req.query.name);
});

// Server start
app.listen(3000, () => {
  console.log('Express server started');
});
