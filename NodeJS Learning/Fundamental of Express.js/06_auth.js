/******************************************************************
 AUTHENTICATION & AUTHORIZATION
******************************************************************/

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/*
Password hashing
Never store plain passwords
*/
const hashedPassword = bcrypt.hashSync('123456', 10);

/*
Password verification
*/
bcrypt.compare('123456', hashedPassword);

/*
JWT Token creation
Payload → Encoded → Signed
*/
const token = jwt.sign(
  { userId: 1 },
  'SECRET',
  { expiresIn: '1h' }
);

/*
Auth Middleware Flow:
Request → Token → Verify → Access
*/
function protect(req, res, next) {
  const token = req.headers.authorization;

  if (!token) return res.status(401).send('No token');

  try {
    const decoded = jwt.verify(token, 'SECRET');
    req.user = decoded;
    next();
  } catch {
    res.status(401).send('Invalid token');
  }
}
