/**********************************************************************
 AUTHENTICATION & ENCRYPTION CORE CONCEPTS
 ---------------------------------------------------------------------
 Topics Covered:
 1) JWT Authentication (Concept)
 2) Symmetric Encryption
 3) Asymmetric Encryption
 4) Public Key & Private Key
 5) JWT Token Structure (Header, Payload, Signature)
 6) Stateless vs Stateful Authentication

 Purpose:
 ✔ Learning
 ✔ Interview preparation
 ✔ GitHub documentation
 *********************************************************************/


/**********************************************************************
 1️⃣ WHAT IS JWT AUTHENTICATION?
 ---------------------------------------------------------------------
 JWT = JSON Web Token

 JWT authentication is a way to prove:
 "This request is coming from a verified user"

 Instead of storing login data on the server,
 all user identity is stored inside a TOKEN.
***********************************************************************/

/*
 JWT Flow:

 1. User logs in with email & password
 2. Server verifies credentials
 3. Server creates a JWT token
 4. Token sent to client
 5. Client sends token with every request
 6. Server verifies token → allows access
*/

/**********************************************************************
 IMPORTANT:
 Server DOES NOT store login session.
 Authentication info lives inside the token.
***********************************************************************/


/**********************************************************************
 2️⃣ SYMMETRIC ENCRYPTION
 ---------------------------------------------------------------------
 Same key is used for:
 ✔ Encryption
 ✔ Decryption
***********************************************************************/

/*
 Example:
 Encryption Key = "secret123"

 Encrypt("HELLO", secret123) → "X9@K#"
 Decrypt("X9@K#", secret123) → "HELLO"
*/

/*
 Characteristics:
 ✔ Fast
 ✔ Simple
 ❌ Key sharing problem
 ❌ Not safe over public networks
*/

/*
 Examples:
 - AES
 - DES
 - Blowfish
*/

/**********************************************************************
 WHERE USED?
 - Database encryption
 - Password hashing (internally)
 - File encryption
***********************************************************************/


/**********************************************************************
 3️⃣ ASYMMETRIC ENCRYPTION
 ---------------------------------------------------------------------
 Uses TWO keys:
 ✔ Public Key
 ✔ Private Key
***********************************************************************/

/*
 Rule:
 - Public Key → Encrypt
 - Private Key → Decrypt
*/

/*
 Example:
 Public Key encrypts data
 Only matching Private Key can decrypt it
*/

/*
 Characteristics:
 ✔ Very secure
 ✔ No key sharing issue
 ❌ Slower than symmetric encryption
*/

/*
 Examples:
 - RSA
 - ECC
*/

/**********************************************************************
 WHERE USED?
 - HTTPS
 - Digital signatures
 - JWT signing (conceptually)
***********************************************************************/


/**********************************************************************
 4️⃣ PUBLIC KEY vs PRIVATE KEY
***********************************************************************/

/*
 PUBLIC KEY:
 - Shared with everyone
 - Used to encrypt data
 - Cannot decrypt data
*/

/*
 PRIVATE KEY:
 - Kept secret
 - Used to decrypt data
 - Proves identity
*/

/*
 Real-life example:
 Public key = Lock
 Private key = Actual key to open lock
*/

/**********************************************************************
 SECURITY NOTE:
 If private key is leaked → system compromised
***********************************************************************/


/**********************************************************************
 5️⃣ JWT TOKEN STRUCTURE
 ---------------------------------------------------------------------
 JWT has 3 parts separated by dots (.)
***********************************************************************/

/*
 JWT Format:

 HEADER.PAYLOAD.SIGNATURE
*/

/**********************************************************************
 HEADER
***********************************************************************/

/*
 Contains metadata about token

 Example:
 {
   "alg": "HS256",
   "typ": "JWT"
 }

 alg = algorithm used for signing
*/

/**********************************************************************
 PAYLOAD
***********************************************************************/

/*
 Contains USER DATA (claims)

 Example:
 {
   "id": 5,
   "username": "uday",
   "exp": 1700000000
 }

 ⚠ Payload is NOT encrypted
 Anyone can decode it
*/

/**********************************************************************
 SIGNATURE
***********************************************************************/

/*
 Signature ensures token integrity

 Created using:
 header + payload + SECRET KEY
*/

/*
 Purpose:
 ✔ Prevent token tampering
 ✔ Verify token authenticity
*/

/**********************************************************************
 IMPORTANT:
 If payload is modified → signature verification fails
***********************************************************************/


/**********************************************************************
 6️⃣ STATEFUL AUTHENTICATION
 ---------------------------------------------------------------------
 Server remembers user login state
***********************************************************************/

/*
 Example: Session-based authentication

 Server stores:
 {
   sessionId: "abc123",
   userId: 5
 }
*/

/*
 Flow:
 1. User logs in
 2. Server creates session
 3. Session ID stored in cookie
 4. Server checks session on every request
*/

/*
 Characteristics:
 ✔ Easy logout
 ✔ Server control
 ❌ Harder to scale
*/

/**********************************************************************
 Example:
 Express-session authentication
***********************************************************************/


/**********************************************************************
 7️⃣ STATELESS AUTHENTICATION
 ---------------------------------------------------------------------
 Server does NOT remember user state
***********************************************************************/

/*
 Example: JWT authentication

 Server only:
 - Verifies token
 - Does not store session
*/

/*
 Flow:
 1. User logs in
 2. Server gives JWT
 3. Client sends JWT every request
 4. Server verifies signature
*/

/*
 Characteristics:
 ✔ Highly scalable
 ✔ No server storage
 ❌ Logout is difficult
*/

/**********************************************************************
 KEY DIFFERENCE:
 State lives in token, not server
***********************************************************************/


/**********************************************************************
 8️⃣ STATEFUL vs STATELESS (FINAL COMPARISON)
***********************************************************************/

/*
 STATEFUL:
 - Session stored on server
 - Easy logout
 - More secure for dashboards

 STATELESS:
 - No session storage
 - Token-based
 - Best for APIs & mobile apps
*/


/**********************************************************************
 FINAL SUMMARY
***********************************************************************/

/*
 - Symmetric encryption uses one key
 - Asymmetric encryption uses public & private keys
 - JWT is a stateless authentication mechanism
 - JWT contains Header, Payload, and Signature
 - Stateful auth stores session on server
 - Stateless auth stores identity in token
*/
