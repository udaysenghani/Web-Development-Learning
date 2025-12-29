/****************************************************************************************
 JWT + REFRESH TOKEN AUTHENTICATION (COMPLETE GUIDE IN ONE FILE)
 ----------------------------------------------------------------------------------------
 This file explains:
 ✔ What is Access Token
 ✔ What is Refresh Token
 ✔ Why both are needed
 ✔ Complete login → access → refresh → logout flow
 ✔ Security best practices (production-ready concepts)

 Tech Stack Assumption:
 - Node.js
 - Express.js
 - jsonwebtoken
 - cookie-parser
 - dotenv

 NOTE:
 This file is written for LEARNING + GITHUB REFERENCE.
 Some parts (DB calls) are mocked with comments.
****************************************************************************************/

/*
========================================================================================
 1️⃣ BASIC CONCEPTS
========================================================================================

JWT (JSON Web Token):
- Stateless authentication token
- Signed (not encrypted)
- Used to prove user identity

Two types of tokens:

1. Access Token
   - Short life (10–15 minutes)
   - Sent in Authorization header
   - Used to access protected APIs

2. Refresh Token
   - Long life (7–30 days)
   - Stored in DB + HTTP-only cookie
   - Used ONLY to generate new access tokens

WHY BOTH?
- If access token is stolen → expires quickly
- Refresh token allows seamless re-login without credentials
*/


/*
========================================================================================
 2️⃣ REQUIRED IMPORTS
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
 3️⃣ SECRETS & CONFIG (NEVER HARDCODE)
========================================================================================
*/

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

/*
.env file example (DO NOT COMMIT):
--------------------------------
ACCESS_TOKEN_SECRET=veryStrongAccessSecret123
REFRESH_TOKEN_SECRET=veryStrongRefreshSecret456
*/


/*
========================================================================================
 4️⃣ MOCK DATABASE (FOR UNDERSTANDING)
========================================================================================
*/

// In real apps, use MySQL / MongoDB / Redis
const refreshTokenDB = []; // Stores valid refresh tokens


/*
========================================================================================
 5️⃣ TOKEN GENERATION FUNCTIONS
========================================================================================
*/

// Create short-lived access token
function generateAccessToken(user) {
  return jwt.sign(
    { id: user.id, role: user.role },
    ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }
  );
}

// Create long-lived refresh token
function generateRefreshToken(user) {
  return jwt.sign(
    { id: user.id },
    REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );
}


/*
========================================================================================
 6️⃣ LOGIN FLOW
========================================================================================
*/

app.post("/login", (req, res) => {
  /*
  STEP-BY-STEP:
  1. Validate user credentials (email/password)
  2. Generate access token
  3. Generate refresh token
  4. Store refresh token in DB
  5. Send refresh token as HTTP-only cookie
  */

  // Mock authenticated user
  const user = {
    id: 1,
    role: "user",
  };

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  // Store refresh token in DB
  refreshTokenDB.push(refreshToken);

  // Send refresh token securely in cookie
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,   // JS cannot access (XSS protection)
    secure: true,     // HTTPS only
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.json({
    message: "Login successful",
    accessToken,
  });
});


/*
========================================================================================
 7️⃣ ACCESS TOKEN VERIFICATION MIDDLEWARE
========================================================================================
*/

function verifyAccessToken(req, res, next) {
  /*
  This middleware protects APIs.
  Client must send:
  Authorization: Bearer ACCESS_TOKEN
  */

  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access token missing" });
  }

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Access token expired or invalid" });
    }

    req.user = user;
    next();
  });
}


/*
========================================================================================
 8️⃣ PROTECTED API EXAMPLE
========================================================================================
*/

app.get("/dashboard", verifyAccessToken, (req, res) => {
  res.json({
    message: "Welcome to dashboard",
    user: req.user,
  });
});


/*
========================================================================================
 9️⃣ REFRESH TOKEN FLOW (MOST IMPORTANT PART)
========================================================================================
*/

app.post("/token/refresh", (req, res) => {
  /*
  FLOW:
  1. Client sends request automatically when access token expires
  2. Browser sends refresh token from cookie
  3. Server verifies refresh token
  4. If valid → generate NEW access token
  */

  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: "Refresh token missing" });
  }

  // Check if refresh token exists in DB
  if (!refreshTokenDB.includes(refreshToken)) {
    return res.status(403).json({ message: "Invalid refresh token" });
  }

  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Refresh token expired" });
    }

    const newAccessToken = generateAccessToken({
      id: decoded.id,
      role: "user",
    });

    res.json({
      accessToken: newAccessToken,
    });
  });
});


/*
========================================================================================
 🔟 LOGOUT FLOW
========================================================================================
*/

app.post("/logout", (req, res) => {
  /*
  Logout means:
  - Remove refresh token from DB
  - Clear cookie
  - Access token expires naturally
  */

  const refreshToken = req.cookies.refreshToken;

  // Remove refresh token from DB
  const index = refreshTokenDB.indexOf(refreshToken);
  if (index !== -1) {
    refreshTokenDB.splice(index, 1);
  }

  res.clearCookie("refreshToken");

  res.json({ message: "Logged out successfully" });
});



/*
========================================================================================
 IMPORTANT SECURITY RULES (INTERVIEW + REAL WORLD)
========================================================================================

✔ Access token → NOT stored in DB
✔ Refresh token → ALWAYS stored in DB
✔ Refresh token → HTTP-only cookie only
✔ Never store passwords in JWT
✔ Use different secrets for access & refresh
✔ Use HTTPS always
✔ Short access token expiry
*/


/*
========================================================================================
 1️⃣3️⃣ SERVER START
========================================================================================
*/

app.listen(5000, () => {
  console.log("Auth server running on port 5000");
});


