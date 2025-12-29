/****************************************************************************************
 JWT SECURITY – COMPLETE REAL-WORLD CHECKLIST (IN ONE FILE)
 ----------------------------------------------------------------------------------------
 This file demonstrates HOW to secure JWTs properly in backend applications.

 Covers:
 ✔ HTTPS importance
 ✔ Secure JWT storage
 ✔ Short token expiry
 ✔ Refresh token concept (theory + hooks)
 ✔ Strong secrets using .env
 ✔ Token validation middleware
 ✔ Role-based authorization
 ✔ Safe JWT payload practices

 Tech Stack:
 - Node.js
 - Express.js
 - jsonwebtoken
 - cookie-parser
 - dotenv

 NOTE:
 This file is meant for EDUCATION + GITHUB REFERENCE.
****************************************************************************************/


/*
========================================================================================
 1️⃣ WHY HTTPS IS MANDATORY
========================================================================================

JWT travels with every request.
Without HTTPS, attackers can steal tokens using Man-in-the-Middle attacks.

✔ ALWAYS use HTTPS in production
✔ NEVER send JWTs over HTTP

(No code here – this is server / deployment level security)
*/


/*
========================================================================================
 2️⃣ REQUIRED IMPORTS & SETUP
========================================================================================
*/

const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cookieParser());


/*
========================================================================================
 3️⃣ STRONG JWT SECRET (NEVER HARDCODE)
========================================================================================

❌ BAD
const secret = "mysecret";

✅ GOOD
Store secrets in .env file
*/

const JWT_SECRET = process.env.JWT_SECRET;

/*
.env example (DO NOT COMMIT THIS FILE):
------------------------------------
JWT_SECRET=Jk9@#sdF92kLmPq!@923ksdf
*/


/*
========================================================================================
 4️⃣ JWT CREATION WITH SHORT EXPIRY
========================================================================================

✔ Short expiry limits damage if token is leaked
✔ Recommended: 10–15 minutes
*/

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      role: user.role, // safe data only
    },
    JWT_SECRET,
    {
      expiresIn: "15m",
    }
  );
}


/*
========================================================================================
 5️⃣ SECURE JWT STORAGE (HTTP-ONLY COOKIE)
========================================================================================

❌ BAD (XSS vulnerable)
localStorage.setItem("token", jwt);

✅ GOOD (HTTP-only cookie)
- JS cannot access it
- Protected from XSS
- Sent automatically with requests
*/

app.post("/login", (req, res) => {
  // Assume user is authenticated
  const user = {
    id: 101,
    role: "user",
  };

  const token = generateToken(user);

  res.cookie("token", token, {
    httpOnly: true,   // JS cannot read
    secure: true,     // HTTPS only
    sameSite: "strict",
    maxAge: 15 * 60 * 1000, // 15 minutes
  });

  res.json({ message: "Login successful" });
});


/*
========================================================================================
 6️⃣ TOKEN VALIDATION MIDDLEWARE (VERY IMPORTANT)
========================================================================================

✔ Reject expired tokens
✔ Prevent fake / tampered tokens
*/

const verifyToken = (req, res, next) => {
  // Token can come from cookie or Authorization header
  const token =
    req.cookies.token ||
    req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // attach user data to request
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

module.exports = verifyToken;


/*
========================================================================================
 7️⃣ ROLE-BASED AUTHORIZATION (PREVENT PRIVILEGE ESCALATION)
========================================================================================

✔ Ensures only allowed roles access specific routes
✔ Used in admin / manager / owner systems
*/

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};


/*
========================================================================================
 8️⃣ PROTECTED ROUTES EXAMPLES
========================================================================================
*/

// Accessible by any logged-in user
app.get("/profile", verifyToken, (req, res) => {
  res.json({
    message: "User profile",
    user: req.user,
  });
});

// Accessible only by admin
app.delete(
  "/admin",
  verifyToken,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({ message: "Admin action allowed" });
  }
);


/*
========================================================================================
 9️⃣ REFRESH TOKEN CONCEPT (OVERVIEW)
========================================================================================

Access Token:
✔ Short life (15 min)
✔ Used for API access

Refresh Token:
✔ Long life (7 days)
✔ Stored in DB + HTTP-only cookie
✔ Used to generate NEW access tokens

FLOW:
1. Access token expires
2. Client calls /refresh-token
3. Server verifies refresh token
4. New access token issued

✔ Used by Google, Facebook, Netflix

(Refresh token implementation is usually in a separate file/service)
*/


/*
========================================================================================
 🔟 NEVER STORE SENSITIVE DATA IN JWT
========================================================================================

JWT payload is Base64 encoded (NOT encrypted)

❌ NEVER PUT:
- Passwords
- Aadhaar / PAN
- Bank details

✅ SAFE DATA:
{
  id: user._id,
  role: "user"
}
*/


/*
========================================================================================
 1️⃣1️⃣ LOGOUT (BASIC)
========================================================================================

✔ Clear cookie
✔ Token becomes unusable
*/

app.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
});


/*
========================================================================================
 1️⃣2️⃣ FINAL SECURITY CHECKLIST (REVISION)
========================================================================================

✔ HTTPS only
✔ HTTP-only cookies
✔ Short token expiry
✔ Strong secrets in .env
✔ Proper token verification
✔ Role-based authorization
✔ No sensitive data in JWT
✔ Refresh tokens for production
*/


/*
========================================================================================
 1️⃣3️⃣ SERVER START
========================================================================================
*/

app.listen(5000, () => {
  console.log("JWT Security server running on port 5000");
});

