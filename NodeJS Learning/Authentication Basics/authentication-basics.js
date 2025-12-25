/**********************************************************************
 AUTHENTICATION CONCEPTS IN NODE.JS (SESSION vs JWT)
 ---------------------------------------------------------------------
 This file is for LEARNING + GITHUB UPLOAD purpose.
 It explains HOW authentication works step-by-step using comments.
 *********************************************************************/


/**********************************************************************
 1️⃣ WHAT IS AUTHENTICATION?
 ---------------------------------------------------------------------
 Authentication = Verifying "WHO the user is"

 Example:
 - Login with email + password
 - Server verifies credentials
 - Server remembers user for future requests
 *********************************************************************/


/**********************************************************************
 2️⃣ SESSION-BASED AUTHENTICATION (STATEFUL)
 ---------------------------------------------------------------------
 ✔ Used in traditional web apps
 ✔ Server remembers the user
 ✔ Your current project uses THIS
 *********************************************************************/

/*
 FLOW (Session Auth):

 1. User logs in
 2. Server checks email & password
 3. Server creates a SESSION
 4. Session ID is stored in browser cookie
 5. Browser sends cookie on every request
 6. Server checks session → user authenticated
*/

/*
 VISUAL FLOW:

 Browser ----cookie(sessionId)---> Server
 Server ----session data stored---->
*/

/**********************************************************************
 EXAMPLE: LOGIN (SESSION CREATION)
**********************************************************************/

// After successful password check
req.session.userId = user.id;
req.session.username = user.username;

/*
 WHAT HAPPENS INTERNALLY?
 - Express-session creates a session object
 - A unique session ID is generated
 - Session ID is sent as cookie (connect.sid)
*/

/**********************************************************************
 EXAMPLE: AUTH CHECK ON EVERY REQUEST
**********************************************************************/

const isAuthenticated = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};

/*
 WHY THIS WORKS:
 - Browser auto-sends cookie
 - Server reads cookie
 - Session is restored into req.session
*/

/**********************************************************************
 LOGOUT (SESSION DESTROY)
**********************************************************************/

req.session.destroy();

/*
 RESULT:
 - Session removed from server
 - Cookie becomes useless
 - User logged out immediately
*/


/**********************************************************************
 PROS & CONS OF SESSION AUTH
**********************************************************************/

/*
 PROS:
 ✔ Very secure
 ✔ Easy logout
 ✔ Server has full control

 CONS:
 ❌ Server must store sessions
 ❌ Harder to scale without Redis
*/


/**********************************************************************
 3️⃣ JWT AUTHENTICATION (STATELESS)
 ---------------------------------------------------------------------
 ✔ Used in APIs, mobile apps, microservices
 ✔ Server does NOT store user session
 *********************************************************************/

/*
 FLOW (JWT Auth):

 1. User logs in
 2. Server verifies credentials
 3. Server generates JWT (signed token)
 4. Token sent to client
 5. Client sends token in every request
 6. Server verifies token signature
*/

/*
 VISUAL FLOW:

 Browser ----JWT----> Server
 (No session storage)
*/

/**********************************************************************
 EXAMPLE: JWT CREATION
**********************************************************************/

const jwt = require("jsonwebtoken");

const token = jwt.sign(
  { id: user.id, username: user.username },
  "SECRET_KEY",
  { expiresIn: "1h" }
);

/*
 JWT STRUCTURE:
 HEADER.PAYLOAD.SIGNATURE
*/

/**********************************************************************
 EXAMPLE: JWT AUTH MIDDLEWARE
**********************************************************************/

const jwtAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "SECRET_KEY");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

/**********************************************************************
 JWT LOGOUT
**********************************************************************/

/*
 ❌ JWT CANNOT BE DESTROYED FROM SERVER
 ✔ Token remains valid until expiry
 ✔ Logout is handled on client side
*/


/**********************************************************************
 PROS & CONS OF JWT AUTH
**********************************************************************/

/*
 PROS:
 ✔ Stateless
 ✔ Easy to scale
 ✔ Perfect for APIs & mobile apps

 CONS:
 ❌ Hard to revoke token
 ❌ Token theft risk
 ❌ Logout not instant
*/


/**********************************************************************
 4️⃣ SESSION vs JWT (FINAL COMPARISON)
**********************************************************************/

/*
 SESSION AUTH:
 - Stateful
 - Server stores session
 - Easy logout
 - Best for web apps

 JWT AUTH:
 - Stateless
 - Client stores token
 - Hard logout
 - Best for APIs
*/


/**********************************************************************
 5️⃣ WHICH ONE SHOULD YOU USE?
**********************************************************************/

/*
 Use SESSION when:
 ✔ Web app (EJS, admin panel, dashboard)
 ✔ You control frontend & backend

 Use JWT when:
 ✔ Mobile apps
 ✔ Public REST APIs
 ✔ Microservices
*/


/**********************************************************************
 FINAL ONE-LINE SUMMARY
**********************************************************************/

/*
 Session authentication stores user state on the server,
 while JWT authentication stores user identity inside a signed token
 on the client.
*/
