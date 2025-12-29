# Role-based Access Control (JWT) API 🔒

**A small Express.js API demonstrating role-based access control using JWT authentication.**

---

## 🔧 Features

- JWT-based authentication (login & token issuance)
- Role-based authorization middleware (`admin`, `manager`, `user`)
- Routes protected by role checks
- MongoDB (Mongoose) for user storage

## 🧩 Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- JSON Web Tokens (`jsonwebtoken`)
- Password hashing with `bcryptjs`
- Config using `dotenv`

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB (local or Atlas)

### Install

```bash
git clone <repo-url>
cd "Role-based-Access-controll-jwt"
npm install
```

> Note: the repository uses a `dev` script which runs `nodemon`. If you don't have `nodemon` installed globally, either install it: `npm i -D nodemon` or run `node src/index.js`.

### Environment (.env)

Create a `.env` file in the project root with the following variables:

```env
CONNECTION_STRING=mongodb+srv://<user>:<pass>@cluster0.example.mongodb.net/your-db?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_here
PORT=3000
```

> **Important:** this project uses `CONNECTION_STRING` (see `src/config/db.js`) and `JWT_SECRET` (used by the auth controller).

### Run

```bash
npm run dev      # uses nodemon (runs src/index.js)
# or
node src/index.js
```

The server defaults to port `3000` (or the value of `PORT`).

---

## 📁 Project Structure

```
src/
  config/
    db.js                # MongoDB connection
  controllers/
    authController.js    # register & login
  middlewares/
    authMiddleware.js    # verify JWT
    roleMiddleware.js    # role checks
  models/
    userModel.js         # User schema (username, password, role)
  routes/
    authRoutes.js        # /api/auth
    userRoutes.js        # /api/users
  index.js               # app entry
```

---

## 🔌 API Endpoints

Base URL: `http://localhost:3000` (or your configured `PORT`)

### Auth

- POST `/api/auth/register`
  - Body: `{ "username": "alice", "password": "secret", "role": "user" }`
  - Response: success message

- POST `/api/auth/login`
  - Body: `{ "username": "alice", "password": "secret" }`
  - Response: `{ "token": "<jwt>" }`

### Protected user routes (roles)

All these routes require an `Authorization: Bearer <token>` header.

- GET `/api/users/admin` — only **admin**
- GET `/api/users/manager` — **admin** and **manager**
- GET `/api/users/user` — **admin**, **manager**, **user**

Sample curl (login + access protected route):

```bash
# 1) login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"alice","password":"secret"}'

# The response will include a token. Use it like:
curl http://localhost:3000/api/users/admin -H "Authorization: Bearer <token>"
```

---

## ⚠️ Notes

- The `userModel` enforces the `role` enum: `admin`, `manager`, `user`.
- Token expiration is set to 1 hour in `authController`.
- `authMiddleware` decodes the token and attaches decoded user info to `req.user` (contains `id` and `role`).

---

## 🧪 Testing & Development Tips

- Create test users with different roles using the `/api/auth/register` endpoint.
- Use Postman or curl to test the protected routes and the role restrictions.

---

## 📸 Demo

Screenshots are in the `demo_screenshot/` folder.

---

## ✍️ Contributing

Contributions are welcome — open PRs or issues for bugs and suggested improvements.

---

## 📄 License & Author

- **License:** ISC (see `package.json`)
- **Author:** Uday Senghani

---