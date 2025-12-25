/******************************************************************
 MIDDLEWARE (CORE OF EXPRESS)
******************************************************************/

/*
Middleware = function(req, res, next)

Execution Flow:
Request
 ↓
Middleware 1
 ↓
Middleware 2
 ↓
Route Handler
 ↓
Response
*/

const express = require('express');
const app = express();

/*
Application-level middleware
Runs for EVERY request
*/
app.use((req, res, next) => {
  console.log('Request URL:', req.url);
  next(); // passes control forward
});

/*
Built-in middleware
Parses JSON body
Attaches data to req.body
*/
app.use(express.json());

/*
Route-level middleware
Only runs for this route
*/
function authMiddleware(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized');
  }
  next();
}

app.get('/dashboard', authMiddleware, (req, res) => {
  res.send('Dashboard Accessed');
});

/*
Error-handling middleware
ONLY runs when next(error) is called
MUST have 4 parameters
*/
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});
